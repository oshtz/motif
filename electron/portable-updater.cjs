const crypto = require("crypto");
const fs = require("fs");
const https = require("https");
const path = require("path");
const { pipeline } = require("stream/promises");

const RELEASE_API_URL = "https://api.github.com/repos/oshtz/motif/releases/latest";
const WINDOWS_CHECKSUMS_ASSET = "SHA256SUMS-windows.txt";

function isWindowsPortable() {
  return process.platform === "win32" && Boolean(process.env.PORTABLE_EXECUTABLE_FILE);
}

function normalizeVersion(version) {
  return String(version || "").trim().replace(/^v/i, "");
}

function compareVersions(left, right) {
  const leftParts = normalizeVersion(left).split(/[.-]/);
  const rightParts = normalizeVersion(right).split(/[.-]/);
  const max = Math.max(leftParts.length, rightParts.length);

  for (let index = 0; index < max; index += 1) {
    const leftPart = leftParts[index] || "0";
    const rightPart = rightParts[index] || "0";
    const leftNumber = Number(leftPart);
    const rightNumber = Number(rightPart);
    const bothNumeric = Number.isFinite(leftNumber) && Number.isFinite(rightNumber);

    if (bothNumeric && leftNumber !== rightNumber) {
      return leftNumber > rightNumber ? 1 : -1;
    }
    if (!bothNumeric && leftPart !== rightPart) {
      return leftPart > rightPart ? 1 : -1;
    }
  }

  return 0;
}

function parseChecksumManifest(manifest) {
  const checksums = new Map();

  for (const line of String(manifest).split(/\r?\n/)) {
    const match = line.trim().match(/^([a-f0-9]{64})\s+\*?(.+)$/i);
    if (match) {
      checksums.set(match[2].trim(), match[1].toLowerCase());
    }
  }

  return checksums;
}

function isPortableAsset(asset) {
  return Boolean(
    asset &&
    typeof asset.name === "string" &&
    /^Motif-.+-Portable\.exe$/i.test(asset.name) &&
    typeof asset.browser_download_url === "string"
  );
}

function findPortableAsset(assets) {
  return (assets || []).find(isPortableAsset);
}

function githubHeaders() {
  return {
    "Accept": "application/vnd.github+json",
    "User-Agent": "Motif Portable Updater",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

class HttpStatusError extends Error {
  constructor(url, statusCode) {
    super(`Request failed with HTTP ${statusCode}: ${url}`);
    this.statusCode = statusCode;
  }
}

function resolveRedirect(location, baseUrl) {
  return new URL(location, baseUrl).toString();
}

function requestBuffer(url, headers = {}, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, { headers }, (response) => {
      const statusCode = response.statusCode || 0;
      const location = response.headers.location;

      if (statusCode >= 300 && statusCode < 400 && location) {
        response.resume();
        if (redirectCount >= 5) {
          reject(new Error(`Too many redirects while requesting ${url}`));
          return;
        }
        requestBuffer(resolveRedirect(location, url), headers, redirectCount + 1)
          .then(resolve, reject);
        return;
      }

      if (statusCode < 200 || statusCode >= 300) {
        response.resume();
        reject(new HttpStatusError(url, statusCode));
        return;
      }

      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", () => resolve(Buffer.concat(chunks)));
    });

    request.setTimeout(60000, () => request.destroy(new Error(`Request timed out: ${url}`)));
    request.on("error", reject);
  });
}

async function requestJson(url) {
  const body = await requestBuffer(url, githubHeaders());
  return JSON.parse(body.toString("utf8"));
}

async function requestText(url) {
  const body = await requestBuffer(url, githubHeaders());
  return body.toString("utf8");
}

function downloadToFile(url, filePath, headers = {}, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, { headers }, (response) => {
      const statusCode = response.statusCode || 0;
      const location = response.headers.location;

      if (statusCode >= 300 && statusCode < 400 && location) {
        response.resume();
        if (redirectCount >= 5) {
          reject(new Error(`Too many redirects while downloading ${url}`));
          return;
        }
        downloadToFile(resolveRedirect(location, url), filePath, headers, redirectCount + 1)
          .then(resolve, reject);
        return;
      }

      if (statusCode < 200 || statusCode >= 300) {
        response.resume();
        reject(new HttpStatusError(url, statusCode));
        return;
      }

      const file = fs.createWriteStream(filePath);
      pipeline(response, file).then(resolve, reject);
    });

    request.setTimeout(60000, () => request.destroy(new Error(`Download timed out: ${url}`)));
    request.on("error", reject);
  });
}

function sha256File(filePath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash("sha256");
    const stream = fs.createReadStream(filePath);

    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(hash.digest("hex")));
  });
}

async function getLatestPortableUpdate(currentVersion) {
  let release;
  try {
    release = await requestJson(RELEASE_API_URL);
  } catch (error) {
    if (error instanceof HttpStatusError && error.statusCode === 404) {
      return null;
    }
    throw error;
  }

  const nextVersion = normalizeVersion(release.tag_name);
  if (!nextVersion || compareVersions(nextVersion, currentVersion) <= 0) {
    return null;
  }

  const portableAsset = findPortableAsset(release.assets);
  const checksumAsset = (release.assets || []).find((asset) => asset.name === WINDOWS_CHECKSUMS_ASSET);
  if (!portableAsset || !checksumAsset) {
    throw new Error(`Release ${release.tag_name} is missing portable Windows update assets`);
  }

  const checksums = parseChecksumManifest(await requestText(checksumAsset.browser_download_url));
  const sha256 = checksums.get(portableAsset.name);
  if (!sha256) {
    throw new Error(`${WINDOWS_CHECKSUMS_ASSET} does not include ${portableAsset.name}`);
  }

  return {
    version: nextVersion,
    assetName: portableAsset.name,
    downloadUrl: portableAsset.browser_download_url,
    sha256,
  };
}

async function downloadPortableUpdate(update, tempRoot) {
  const updateDir = path.join(tempRoot, "motif-portable-updater");
  await fs.promises.mkdir(updateDir, { recursive: true });

  const downloadPath = path.join(updateDir, update.assetName);
  await fs.promises.rm(downloadPath, { force: true });
  await downloadToFile(update.downloadUrl, downloadPath, githubHeaders());

  const actualSha256 = await sha256File(downloadPath);
  if (actualSha256 !== update.sha256) {
    await fs.promises.rm(downloadPath, { force: true }).catch(() => {});
    throw new Error(`Portable update checksum mismatch for ${update.assetName}`);
  }

  return downloadPath;
}

function powershellString(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

function buildReplacementScript({ currentExePath, newExePath, logPath }) {
  return `$ErrorActionPreference = 'Stop'
$target = ${powershellString(currentExePath)}
$next = ${powershellString(newExePath)}
$old = "$target.old"
$log = ${powershellString(logPath)}

function Write-UpdateLog($message) {
  Add-Content -LiteralPath $log -Value "$(Get-Date -Format o) $message"
}

try {
  Write-UpdateLog "Waiting for portable executable lock to release: $target"
  for ($i = 0; $i -lt 120; $i++) {
    try {
      $stream = [System.IO.File]::Open($target, 'Open', 'ReadWrite', 'None')
      $stream.Close()
      break
    } catch {
      Start-Sleep -Milliseconds 500
    }
  }

  if (Test-Path -LiteralPath $old) {
    Remove-Item -LiteralPath $old -Force
  }

  Move-Item -LiteralPath $target -Destination $old -Force
  Move-Item -LiteralPath $next -Destination $target -Force
  Write-UpdateLog "Portable executable replaced"

  Start-Process -FilePath $target
  Start-Sleep -Seconds 5

  if (Test-Path -LiteralPath $old) {
    Remove-Item -LiteralPath $old -Force
  }
  Write-UpdateLog "Portable update complete"
} catch {
  Write-UpdateLog "Portable update failed: $($_.Exception.Message)"
  if ((-not (Test-Path -LiteralPath $target)) -and (Test-Path -LiteralPath $old)) {
    Move-Item -LiteralPath $old -Destination $target -Force
  }
} finally {
  Remove-Item -LiteralPath $MyInvocation.MyCommand.Path -Force -ErrorAction SilentlyContinue
}
`;
}

async function replacePortableExecutableAndRelaunch({ app, currentExePath, newExePath, tempRoot }) {
  const updateDir = path.join(tempRoot, "motif-portable-updater");
  await fs.promises.mkdir(updateDir, { recursive: true });

  const scriptPath = path.join(updateDir, "apply-portable-update.ps1");
  const logPath = path.join(updateDir, "portable-update.log");
  const script = buildReplacementScript({ currentExePath, newExePath, logPath });
  await fs.promises.rm(logPath, { force: true });
  await fs.promises.writeFile(scriptPath, script, "utf8");

  const powershellPath = path.join(process.env.SystemRoot || "C:\\Windows", "System32", "WindowsPowerShell", "v1.0", "powershell.exe");
  app.relaunch({
    execPath: powershellPath,
    args: ["-NoProfile", "-ExecutionPolicy", "Bypass", "-File", scriptPath],
  });
}

async function configurePortableUpdater({ app, dialog }) {
  if (process.env.MOTIF_DISABLE_UPDATER === "1") return;
  if (!app.isPackaged) return;
  if (!isWindowsPortable()) return;

  const currentExePath = process.env.PORTABLE_EXECUTABLE_FILE;
  if (!currentExePath) return;

  try {
    const update = await getLatestPortableUpdate(app.getVersion());
    if (!update) return;

    const { response } = await dialog.showMessageBox({
      type: "info",
      buttons: ["Download and Restart", "Later"],
      defaultId: 0,
      cancelId: 1,
      title: "Portable Update Available",
      message: `Motif ${update.version} is available.`,
      detail: "Motif will download the new portable EXE, close, replace this file, and reopen.",
    });

    if (response !== 0) return;

    const newExePath = await downloadPortableUpdate(update, app.getPath("temp"));
    await replacePortableExecutableAndRelaunch({
      app,
      currentExePath,
      newExePath,
      tempRoot: app.getPath("temp"),
    });
    app.quit();
  } catch (error) {
    console.warn("Motif portable update failed:", error);
  }
}

module.exports = {
  buildReplacementScript,
  compareVersions,
  configurePortableUpdater,
  downloadPortableUpdate,
  findPortableAsset,
  getLatestPortableUpdate,
  isPortableAsset,
  isWindowsPortable,
  parseChecksumManifest,
  replacePortableExecutableAndRelaunch,
};
