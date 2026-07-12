import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import test from "node:test";

const require = createRequire(import.meta.url);
const {
  buildReplacementScript,
  compareVersions,
  findPortableAsset,
  parseChecksumManifest,
  replacePortableExecutableAndRelaunch,
} = require("../electron/portable-updater.cjs");

test("portable updater compares release versions", () => {
  assert.equal(compareVersions("1.0.1", "1.0.0"), 1);
  assert.equal(compareVersions("v1.0.0", "1.0.0"), 0);
  assert.equal(compareVersions("1.0.0", "1.0.1"), -1);
});

test("portable updater parses checksums and selects portable artifact", () => {
  const checksum = "a".repeat(64);
  const checksums = parseChecksumManifest(`${checksum}  Motif-1.2.3-Portable.exe\n`);
  assert.equal(checksums.get("Motif-1.2.3-Portable.exe"), checksum);

  const asset = findPortableAsset([
    { name: "Motif-1.2.3-Setup.exe", browser_download_url: "https://example.com/setup" },
    { name: "Motif-1.2.3-Portable.exe", browser_download_url: "https://example.com/portable" },
  ]);

  assert.equal(asset.name, "Motif-1.2.3-Portable.exe");
});

test("portable updater helper waits, replaces, relaunches, and rolls back on failure", () => {
  const script = buildReplacementScript({
    currentExePath: "C:\\Tools\\Motif's Portable.exe",
    newExePath: "C:\\Temp\\Motif-1.2.3-Portable.exe",
    logPath: "C:\\Temp\\portable-update.log",
  });

  assert.match(script, /System\.IO\.File.*ReadWrite.*None/);
  assert.match(script, /Move-Item -LiteralPath \$target -Destination \$old -Force/);
  assert.match(script, /Move-Item -LiteralPath \$next -Destination \$target -Force/);
  assert.match(script, /Start-Process -FilePath \$target/);
  assert.match(script, /Move-Item -LiteralPath \$old -Destination \$target -Force/);
  assert.match(script, /Motif''s Portable\.exe/);
});

test("portable updater schedules its helper through Electron relaunch", async () => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "motif-updater-schedule-"));
  let relaunchOptions;

  try {
    await replacePortableExecutableAndRelaunch({
      app: { relaunch: (options) => { relaunchOptions = options; } },
      currentExePath: "C:\\Tools\\Motif.exe",
      newExePath: "C:\\Temp\\Motif-next.exe",
      tempRoot,
    });

    assert.match(relaunchOptions.execPath, /powershell\.exe$/i);
    assert.deepEqual(relaunchOptions.args.slice(0, 3), ["-NoProfile", "-ExecutionPolicy", "Bypass"]);
    assert.equal(relaunchOptions.args.at(-2), "-File");
    assert.equal(relaunchOptions.args.at(-1), path.join(tempRoot, "motif-portable-updater", "apply-portable-update.ps1"));
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});

test("Electron relaunch runs the portable replacement helper after exit", { skip: process.platform !== "win32" }, async () => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "motif-updater-relaunch-"));
  const currentExePath = path.join(tempRoot, "current.exe");
  const newExePath = path.join(tempRoot, "next.exe");
  const fixtureExe = path.join(process.env.SystemRoot, "System32", "where.exe");
  fs.copyFileSync(fixtureExe, currentExePath);
  fs.copyFileSync(fixtureExe, newExePath);

  try {
    const electronPath = require("electron");
    const fixturePath = path.join(import.meta.dirname, "fixtures", "portable-updater-relaunch.cjs");
    const child = spawn(electronPath, [fixturePath], {
      env: {
        ...process.env,
        MOTIF_RELAUNCH_CURRENT_EXE: currentExePath,
        MOTIF_RELAUNCH_NEW_EXE: newExePath,
        MOTIF_RELAUNCH_TEMP_ROOT: tempRoot,
      },
      stdio: "ignore",
      windowsHide: true,
    });

    await new Promise((resolve, reject) => {
      child.once("error", reject);
      child.once("exit", (code) => code === 0 ? resolve() : reject(new Error(`Electron fixture exited ${code}`)));
    });

    const logPath = path.join(tempRoot, "motif-portable-updater", "portable-update.log");
    const deadline = Date.now() + 15_000;
    let log = "";
    while (Date.now() < deadline && !log.includes("Portable update complete")) {
      if (fs.existsSync(logPath)) log = fs.readFileSync(logPath, "utf8");
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    assert.match(log, /Portable update complete/);
    assert.equal(fs.existsSync(currentExePath), true);
    assert.equal(fs.existsSync(newExePath), false);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});
