import assert from "node:assert/strict";
import fs from "node:fs";

const main = fs.readFileSync("electron/main.cjs", "utf8");
const preload = fs.readFileSync("electron/preload.cjs", "utf8");
const rendererEntry = fs.readFileSync("web/src/App.tsx", "utf8");
const apiClient = fs.readFileSync("web/src/api.ts", "utf8");
const previewView = fs.readFileSync("web/src/components/PreviewView.tsx", "utf8");
const variantCard = fs.readFileSync("web/src/components/VariantCard.tsx", "utf8");
const rendererSources = fs.readdirSync("web/src/components")
  .filter((file) => file.endsWith(".tsx"))
  .map((file) => fs.readFileSync(`web/src/components/${file}`, "utf8"))
  .join("\n");

assert.match(main, /contextIsolation:\s*true/);
assert.match(main, /nodeIntegration:\s*false/);
assert.match(main, /sandbox:\s*true/);
assert.match(main, /app\.enableSandbox\(\)/);
assert.doesNotMatch(main, /nodeIntegration:\s*true|webSecurity:\s*false|allowRunningInsecureContent:\s*true/);
assert.match(main, /MOTIF_HOST\s*=\s*"127\.0\.0\.1"/);
assert.match(main, /MOTIF_PORT\s*=\s*"0"/);
assert.match(main, /await ready/);
assert.doesNotMatch(main, /loadFile\(|motifApiBaseUrl|findFreePort/);
assert.doesNotMatch(main, /additionalArguments|--motif-session-token/);
assert.match(main, /Content-Security-Policy/);
assert.doesNotMatch(main, /script-src[^\n]*unsafe-(?:eval|inline)/);
assert.match(main, /will-navigate/);
assert.match(main, /protocol === "http:" \|\| protocol === "https:"/);
assert.match(main, /requestSingleInstanceLock/);
assert.match(main, /safeStorage\.encryptString/);
assert.match(preload, /process\.isMainFrame/);
assert.match(preload, /sendSync\("motif-desktop:session-token"\)/);
assert.match(preload, /sendSync\("motif-desktop:preview-token"\)/);
assert.match(preload, /motifDesktop/);
assert.match(previewView, /sandbox=\{iframeSandbox\}/);
assert.match(variantCard, /src=\{previewSrc\}/);
assert.match(variantCard, /\/interactive\/\$\{encodeURIComponent\(generation\.id\)\}/);
assert.doesNotMatch(rendererSources, /allow-scripts allow-same-origin|allow-same-origin allow-scripts/);
assert.doesNotMatch(`${rendererEntry}\n${apiClient}`, /motifDesktop=1|motifApiBaseUrl/);

console.log("Electron security invariants verified.");
