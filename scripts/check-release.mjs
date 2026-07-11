import assert from "node:assert/strict";
import fs from "node:fs";

const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const root = readJson("package.json");
const api = readJson("api/package.json");
const web = readJson("web/package.json");
const lock = readJson("package-lock.json");

assert.deepEqual(root.workspaces, ["api", "web"]);
assert.equal(api.version, root.version, "api/package.json version must match package.json");
assert.equal(web.version, root.version, "web/package.json version must match package.json");
assert.equal(lock.version, root.version, "package-lock.json version must match package.json");
assert.equal(lock.packages["api"].version, root.version);
assert.equal(lock.packages["web"].version, root.version);
assert.ok(!fs.existsSync("api/package-lock.json") && !fs.existsSync("web/package-lock.json"));

const tag = process.env.GITHUB_REF?.startsWith("refs/tags/")
  ? process.env.GITHUB_REF.slice("refs/tags/".length)
  : process.argv[2];
if (tag) assert.equal(tag, `v${root.version}`, `release tag must be v${root.version}`);

const workflow = fs.readFileSync(".github/workflows/desktop-release.yml", "utf8");
assert.match(workflow, /--publish never/);
assert.equal((workflow.match(/softprops\/action-gh-release/g) || []).length, 1);

console.log(`Release contract verified for Motif ${root.version}${tag ? ` (${tag})` : ""}.`);
