import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { _electron as electron } from "playwright";

process.env.MOTIF_DISABLE_UPDATER ??= "1";

function findExecutable() {
  if (process.env.MOTIF_EXECUTABLE) return path.resolve(process.env.MOTIF_EXECUTABLE);
  const candidates = process.platform === "darwin"
    ? ["release/mac-arm64/Motif.app/Contents/MacOS/Motif", "release/mac/Motif.app/Contents/MacOS/Motif"]
    : process.platform === "win32"
      ? ["release/win-unpacked/Motif.exe"]
      : ["release/linux-unpacked/motif"];
  const executablePath = candidates.map((candidate) => path.resolve(candidate)).find(fs.existsSync);
  if (!executablePath) throw new Error(`No packaged Motif executable found for ${process.platform}`);
  return executablePath;
}

const executablePath = findExecutable();
const userData = path.resolve(process.env.MOTIF_SMOKE_USER_DATA || fs.mkdtempSync(path.join(os.tmpdir(), "motif-smoke-")));
const expectedVersion = process.env.MOTIF_EXPECT_VERSION || JSON.parse(fs.readFileSync("package.json", "utf8")).version;
const markerPath = path.join(userData, "desktop-smoke.marker");

async function smokePortableLaunch() {
  const child = spawn(executablePath, [`--user-data-dir=${userData}`], {
    env: { ...process.env, MOTIF_DISABLE_UPDATER: "1" },
    stdio: "ignore",
  });
  try {
    const deadline = Date.now() + 30000;
    while (Date.now() < deadline) {
      if (child.exitCode !== null) throw new Error(`Portable Motif exited with code ${child.exitCode}`);
      const database = path.join(userData, "motif.db");
      if (fs.existsSync(database) && fs.statSync(database).size > 0) return;
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    throw new Error("Portable Motif did not initialize its database");
  } finally {
    if (child.pid) spawnSync("taskkill", ["/pid", String(child.pid), "/t", "/f"], { stdio: "ignore" });
  }
}

if (process.platform === "win32" && /-Portable\.exe$/i.test(executablePath)) {
  assert.equal(path.basename(executablePath), `Motif-${expectedVersion}-Portable.exe`);
  await smokePortableLaunch();
  await smokePortableLaunch();
  console.log(JSON.stringify({ executablePath, version: expectedVersion, portable: true, persistence: true }, null, 2));
  process.exit(0);
}

async function launch() {
  return electron.launch({ executablePath, args: [`--user-data-dir=${userData}`] });
}

const first = await launch();
try {
  const page = await first.firstWindow({ timeout: 30000 });
  await page.waitForSelector('[data-testid="desktop-titlebar"]', { timeout: 30000 });
  const runtime = await first.evaluate(({ app }) => ({ version: app.getVersion(), userData: app.getPath("userData") }));
  assert.equal(runtime.version, expectedVersion);
  assert.equal(path.resolve(runtime.userData), userData);
  const loaded = new URL(page.url());
  assert.equal(loaded.hostname, "127.0.0.1");
  assert.equal(loaded.search, "");
  assert.equal(await page.evaluate(() => window.motifDesktop?.getSessionToken().length === 43), true);
  const isolation = await page.evaluate(async () => {
    const sessionToken = window.motifDesktop?.getSessionToken() || "";
    const previewToken = window.motifDesktop?.getPreviewToken() || "";
    const parsed_html = `<!doctype html><script>(async()=>{let parentBlocked=false;try{parent.document.body}catch{parentBlocked=true}const apiStatus=await fetch('/api/settings').then(r=>r.status).catch(()=>0);parent.postMessage({type:'motif-isolation-proof',parentBlocked,apiStatus},'*')})()<\/script>`;
    const saved = await fetch("/api/compare/save", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Motif-Session": sessionToken },
      body: JSON.stringify({ prompt: "isolation proof", parsed_html }),
    }).then((response) => response.json());
    const result = new Promise((resolve) => {
      const handler = (event) => {
        if (event.data?.type !== "motif-isolation-proof") return;
        window.removeEventListener("message", handler);
        resolve(event.data);
      };
      window.addEventListener("message", handler);
    });
    const frame = document.createElement("iframe");
    frame.sandbox.value = "allow-scripts";
    frame.src = `/interactive/${encodeURIComponent(saved.id)}?token=${encodeURIComponent(previewToken)}`;
    document.body.append(frame);
    const proof = await Promise.race([result, new Promise((resolve) => setTimeout(() => resolve(null), 5000))]);
    frame.remove();
    await fetch(`/api/generations/${encodeURIComponent(saved.id)}`, {
      method: "DELETE",
      headers: { "X-Motif-Session": sessionToken },
    });
    return proof;
  });
  assert.equal(isolation?.type, "motif-isolation-proof");
  assert.equal(isolation?.parentBlocked, true);
  assert.notEqual(isolation?.apiStatus, 200);
  fs.writeFileSync(markerPath, expectedVersion);
} finally {
  await first.close();
}

const second = await launch();
try {
  const page = await second.firstWindow({ timeout: 30000 });
  await page.waitForSelector('[data-testid="desktop-titlebar"]', { timeout: 30000 });
  assert.equal(fs.readFileSync(markerPath, "utf8"), expectedVersion);
  assert.equal(fs.existsSync(path.join(userData, "motif.db")), true);
  await page.waitForTimeout(500);

  const settingsDialog = page.locator('dialog[aria-labelledby="settings-title"]');
  if (await settingsDialog.isVisible()) {
    await page.keyboard.press("Escape");
    await settingsDialog.waitFor({ state: "hidden" });
  }

  const controls = await Promise.all([
    page.locator('[data-testid="window-minimize"]').count(),
    page.locator('[data-testid="window-maximize"]').count(),
    page.locator('[data-testid="window-close"]').count(),
  ]);
  assert.deepEqual(controls, [1, 1, 1]);

  await page.locator('[data-testid="window-minimize"]').click();
  await page.waitForTimeout(300);
  assert.equal(await second.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0]?.isMinimized()), true);
  await second.evaluate(({ BrowserWindow }) => {
    BrowserWindow.getAllWindows()[0]?.restore();
    BrowserWindow.getAllWindows()[0]?.show();
  });
  await page.waitForTimeout(300);

  if (process.platform !== "darwin") {
    await page.locator('[data-testid="window-maximize"]').click();
    await page.waitForTimeout(300);
    assert.equal(await second.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0]?.isMaximized()), true);
  }
} finally {
  await second.close();
}

console.log(JSON.stringify({ executablePath, version: expectedVersion, persistence: true }, null, 2));
