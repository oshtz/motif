import test from "node:test";
import assert from "node:assert/strict";
import { createStoredZip } from "../api/dist/zip.js";

test("stored zip writer emits local and central directory records", () => {
  const zip = createStoredZip(
    [
      { path: "README.md", content: "# Handoff" },
      { path: "../unsafe/index.html", content: "<main>ok</main>" },
    ],
    new Date("2026-05-29T00:00:00Z")
  );

  assert.equal(zip.readUInt32LE(0), 0x04034b50);
  assert.ok(zip.includes(Buffer.from("README.md")));
  assert.ok(zip.includes(Buffer.from("unsafe/index.html")));
  assert.ok(zip.includes(Buffer.from([0x50, 0x4b, 0x05, 0x06])));
});
