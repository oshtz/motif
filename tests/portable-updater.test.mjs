import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const {
  buildReplacementScript,
  compareVersions,
  findPortableAsset,
  parseChecksumManifest,
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
