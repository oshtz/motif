import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || "release");

function verifyChecksums(platform) {
  const directory = path.join(root, platform);
  const manifestPath = path.join(directory, `SHA256SUMS-${platform}.txt`);
  const lines = fs.readFileSync(manifestPath, "utf8").trim().split(/\r?\n/);
  assert.ok(lines.length > 0, `${platform} checksum manifest is empty`);
  const covered = new Set();
  for (const line of lines) {
    const match = line.match(/^([a-f0-9]{64})\s+\*?(.+)$/i);
    assert.ok(match, `Malformed checksum line: ${line}`);
    const file = path.join(directory, match[2]);
    covered.add(match[2]);
    assert.ok(fs.existsSync(file), `Checksum references missing file: ${file}`);
    const actual = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
    assert.equal(actual, match[1].toLowerCase(), `Checksum mismatch: ${file}`);
  }
  const published = fs.readdirSync(directory).filter((file) => file !== path.basename(manifestPath));
  assert.deepEqual([...covered].sort(), published.sort(), `${platform} manifest must cover every published asset`);
}

function verifyUpdaterMetadata(platform, filename) {
  const directory = path.join(root, platform);
  const metadata = fs.readFileSync(path.join(directory, filename), "utf8");
  const urls = [...metadata.matchAll(/^\s*(?:-\s*)?url:\s*['"]?([^'"\s]+)['"]?\s*$/gm)].map((match) => match[1]);
  assert.ok(urls.length, `${filename} has no updater assets`);
  for (const url of urls) {
    assert.ok(fs.existsSync(path.join(directory, url)), `${filename} references missing ${url}`);
  }
}

verifyChecksums("windows");
verifyChecksums("macos");
verifyUpdaterMetadata("macos", "latest-mac.yml");
console.log("Release checksums and updater metadata verified.");
