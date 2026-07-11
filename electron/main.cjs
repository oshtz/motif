const { app, BrowserWindow, dialog, ipcMain, safeStorage, session, shell } = require("electron");
const { autoUpdater } = require("electron-updater");
const { configurePortableUpdater, isWindowsPortable } = require("./portable-updater.cjs");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self'",
  "frame-src 'self'",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
  "frame-ancestors 'none'",
].join("; ");

let mainWindow = null;
let apiServer = null;
let trustedOrigin = "";
const sessionToken = crypto.randomBytes(32).toString("base64url");
const previewToken = crypto.randomBytes(32).toString("base64url");

app.enableSandbox();
const hasSingleInstanceLock = app.requestSingleInstanceLock();

function appRootPath(...segments) {
  return path.join(__dirname, "..", ...segments);
}

function createSecretStore() {
  const secretsPath = path.join(app.getPath("userData"), "provider-secrets.json");

  function validateKey(key) {
    if (!/^[a-z0-9._:-]{1,128}$/i.test(key)) throw new Error("Invalid secret key");
  }

  function read() {
    try {
      return JSON.parse(fs.readFileSync(secretsPath, "utf8"));
    } catch (error) {
      if (error.code === "ENOENT") return {};
      throw error;
    }
  }

  function write(secrets) {
    fs.mkdirSync(path.dirname(secretsPath), { recursive: true });
    const tempPath = `${secretsPath}.${process.pid}.tmp`;
    fs.writeFileSync(tempPath, JSON.stringify(secrets), { mode: 0o600 });
    fs.renameSync(tempPath, secretsPath);
  }

  function requireEncryption() {
    if (!safeStorage.isEncryptionAvailable()) {
      throw new Error("OS-backed secret storage is unavailable");
    }
  }

  return {
    get(key) {
      validateKey(key);
      const encrypted = read()[key];
      if (!encrypted) return undefined;
      requireEncryption();
      return safeStorage.decryptString(Buffer.from(encrypted, "base64"));
    },
    set(key, value) {
      validateKey(key);
      requireEncryption();
      const secrets = read();
      secrets[key] = safeStorage.encryptString(String(value)).toString("base64");
      write(secrets);
    },
    delete(key) {
      validateKey(key);
      const secrets = read();
      if (!(key in secrets)) return;
      delete secrets[key];
      write(secrets);
    },
  };
}

async function startApi() {
  const apiEntry = appRootPath("api", "dist", "index.js");
  const webDist = appRootPath("web", "dist");
  if (!fs.existsSync(apiEntry) || !fs.existsSync(path.join(webDist, "index.html"))) {
    throw new Error("Built API or web assets are missing; run npm run build first");
  }

  process.env.MOTIF_ELECTRON = "1";
  process.env.MOTIF_HOST = "127.0.0.1";
  process.env.MOTIF_PORT = "0";
  process.env.MOTIF_DB_PATH = path.join(app.getPath("userData"), "motif.db");
  process.env.MOTIF_WEB_DIST = webDist;
  process.env.MOTIF_SESSION_TOKEN = sessionToken;
  process.env.MOTIF_PREVIEW_TOKEN = previewToken;
  globalThis.__MOTIF_SECRET_STORE__ = createSecretStore();

  await import(pathToFileURL(apiEntry).href);
  const ready = globalThis.__MOTIF_SERVER_READY__;
  if (!ready || typeof ready.then !== "function") {
    throw new Error("Local API did not expose its readiness promise");
  }

  apiServer = await ready;
  trustedOrigin = `http://127.0.0.1:${apiServer.port}`;
}

function isTrustedRenderer(event) {
  try {
    return event.senderFrame === event.sender.mainFrame &&
      new URL(event.senderFrame.url).origin === trustedOrigin;
  } catch {
    return false;
  }
}

function trustedWindow(event) {
  return isTrustedRenderer(event) ? BrowserWindow.fromWebContents(event.sender) : null;
}

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 960,
    minWidth: 980,
    minHeight: 680,
    title: "Motif",
    icon: appRootPath("assets", "desktop-icon.png"),
    backgroundColor: "#08060d",
    frame: false,
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
      preload: path.join(__dirname, "preload.cjs"),
    },
  });

  mainWindow.once("ready-to-show", () => mainWindow?.show());
  mainWindow.on("maximize", () => sendWindowState(mainWindow));
  mainWindow.on("unmaximize", () => sendWindowState(mainWindow));
  mainWindow.on("enter-full-screen", () => sendWindowState(mainWindow));
  mainWindow.on("leave-full-screen", () => sendWindowState(mainWindow));

  mainWindow.webContents.on("will-attach-webview", (event) => event.preventDefault());
  mainWindow.webContents.on("will-navigate", (event, url) => {
    if (new URL(url).origin !== trustedOrigin) event.preventDefault();
  });
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    let protocol = "";
    try {
      protocol = new URL(url).protocol;
    } catch {}
    if (protocol === "http:" || protocol === "https:") {
      void shell.openExternal(url);
    }
    return { action: "deny" };
  });

  await mainWindow.loadURL(trustedOrigin);
}

function sendWindowState(window) {
  window?.webContents.send("motif-window:maximized", window.isMaximized());
}

ipcMain.handle("motif-window:minimize", (event) => trustedWindow(event)?.minimize());
ipcMain.on("motif-desktop:session-token", (event) => {
  event.returnValue = isTrustedRenderer(event) ? sessionToken : "";
});
ipcMain.on("motif-desktop:preview-token", (event) => {
  event.returnValue = isTrustedRenderer(event) ? previewToken : "";
});
ipcMain.handle("motif-window:toggle-maximize", (event) => {
  const window = trustedWindow(event);
  if (!window) return false;
  window.isMaximized() ? window.unmaximize() : window.maximize();
  return window.isMaximized();
});
ipcMain.handle("motif-window:close", (event) => trustedWindow(event)?.close());
ipcMain.handle("motif-window:is-maximized", (event) => Boolean(trustedWindow(event)?.isMaximized()));

function configureUpdater() {
  if (process.env.MOTIF_DISABLE_UPDATER === "1" || !app.isPackaged) return;
  if (isWindowsPortable()) {
    configurePortableUpdater({ app, dialog });
    return;
  }
  if (!fs.existsSync(path.join(process.resourcesPath, "app-update.yml"))) return;

  autoUpdater.autoDownload = true;
  const isMissingInitialRelease = (error) =>
    String(error instanceof Error ? error.message : error).includes("No published versions on GitHub");

  autoUpdater.on("update-downloaded", async () => {
    const { response } = await dialog.showMessageBox({
      type: "info",
      buttons: ["Restart", "Later"],
      defaultId: 0,
      cancelId: 1,
      title: "Update Ready",
      message: "A Motif update has been downloaded.",
      detail: "Restart Motif to install the update.",
    });
    if (response === 0) autoUpdater.quitAndInstall();
  });
  autoUpdater.on("error", (error) => {
    if (!isMissingInitialRelease(error)) console.warn("Motif auto-update failed:", error);
  });
  autoUpdater.checkForUpdatesAndNotify().catch((error) => {
    if (!isMissingInitialRelease(error)) console.warn("Motif update check failed:", error);
  });
}

if (!hasSingleInstanceLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    if (!mainWindow) return;
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.show();
    mainWindow.focus();
  });

  app.whenReady().then(async () => {
    try {
      session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        if (details.resourceType !== "mainFrame") {
          callback({ responseHeaders: details.responseHeaders });
          return;
        }
        callback({
          responseHeaders: {
            ...details.responseHeaders,
            "Content-Security-Policy": [CSP],
            "X-Content-Type-Options": ["nosniff"],
            "Referrer-Policy": ["no-referrer"],
          },
        });
      });
      await startApi();
      await createWindow();
      configureUpdater();
    } catch (error) {
      console.error(error);
      await dialog.showMessageBox({
        type: "error",
        title: "Motif failed to start",
        message: "Motif could not start its local runtime.",
        detail: error instanceof Error ? error.message : String(error),
      });
      app.quit();
    }
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0 && trustedOrigin) {
      createWindow().catch((error) => console.error(error));
    }
  });
  app.on("before-quit", () => apiServer?.close?.());
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
}
