const { app, BrowserWindow, dialog, ipcMain, shell } = require("electron");
const { autoUpdater } = require("electron-updater");
const { configurePortableUpdater, isWindowsPortable } = require("./portable-updater.cjs");
const fs = require("fs");
const net = require("net");
const path = require("path");
const { pathToFileURL } = require("url");

let mainWindow = null;
let apiBaseUrl = "";

function appRootPath(...segments) {
  return path.join(__dirname, "..", ...segments);
}

function findFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => {
        if (!address || typeof address === "string") {
          reject(new Error("Could not allocate a local API port"));
          return;
        }
        resolve(address.port);
      });
    });
  });
}

async function startApi() {
  const apiEntry = appRootPath("api", "dist", "index.js");
  if (!fs.existsSync(apiEntry)) {
    throw new Error(`Built API entry not found: ${apiEntry}`);
  }

  const port = await findFreePort();
  const userData = app.getPath("userData");

  process.env.MOTIF_ELECTRON = "1";
  process.env.MOTIF_PORT = String(port);
  process.env.MOTIF_DB_PATH = path.join(userData, "motif.db");

  await import(pathToFileURL(apiEntry).href);
  apiBaseUrl = `http://127.0.0.1:${port}`;
}

async function createWindow() {
  const indexHtml = appRootPath("web", "dist", "index.html");
  if (!fs.existsSync(indexHtml)) {
    throw new Error(`Built web entry not found: ${indexHtml}`);
  }

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
      preload: path.join(__dirname, "preload.cjs"),
      sandbox: true,
    },
  });

  mainWindow.once("ready-to-show", () => {
    mainWindow?.show();
  });

  mainWindow.on("maximize", () => sendWindowState(mainWindow));
  mainWindow.on("unmaximize", () => sendWindowState(mainWindow));
  mainWindow.on("enter-full-screen", () => sendWindowState(mainWindow));
  mainWindow.on("leave-full-screen", () => sendWindowState(mainWindow));

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  await mainWindow.loadFile(indexHtml, {
    query: { motifApiBaseUrl: apiBaseUrl, motifDesktop: "1" },
  });
}

function sendWindowState(window) {
  window.webContents.send("motif-window:maximized", window.isMaximized());
}

ipcMain.handle("motif-window:minimize", (event) => {
  BrowserWindow.fromWebContents(event.sender)?.minimize();
});

ipcMain.handle("motif-window:toggle-maximize", (event) => {
  const window = BrowserWindow.fromWebContents(event.sender);
  if (!window) return false;
  if (window.isMaximized()) {
    window.unmaximize();
  } else {
    window.maximize();
  }
  return window.isMaximized();
});

ipcMain.handle("motif-window:close", (event) => {
  BrowserWindow.fromWebContents(event.sender)?.close();
});

ipcMain.handle("motif-window:is-maximized", (event) => {
  return Boolean(BrowserWindow.fromWebContents(event.sender)?.isMaximized());
});

function configureUpdater() {
  if (process.env.MOTIF_DISABLE_UPDATER === "1") return;
  if (!app.isPackaged) return;
  if (isWindowsPortable()) {
    configurePortableUpdater({ app, dialog });
    return;
  }
  if (!fs.existsSync(path.join(process.resourcesPath, "app-update.yml"))) return;

  autoUpdater.autoDownload = true;

  const isMissingInitialRelease = (error) => {
    const message = error instanceof Error ? error.message : String(error);
    return message.includes("No published versions on GitHub");
  };

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

    if (response === 0) {
      autoUpdater.quitAndInstall();
    }
  });

  autoUpdater.on("error", (error) => {
    if (!isMissingInitialRelease(error)) {
      console.warn("Motif auto-update failed:", error);
    }
  });

  autoUpdater.checkForUpdatesAndNotify().catch((error) => {
    if (!isMissingInitialRelease(error)) {
      console.warn("Motif update check failed:", error);
    }
  });
}

app.whenReady().then(async () => {
  try {
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
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow().catch((error) => console.error(error));
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
