import assert from "node:assert/strict";
import test from "node:test";

import {
  maskSecret,
  serializeSettingsRows,
  settingsEntriesFromBody,
} from "../api/dist/settings.js";

test("settings serialization masks sensitive values", () => {
  const serialized = serializeSettingsRows([
    { key: "provider", value: "openrouter" },
    { key: "apiKey", value: "sk-or-secret-value" },
    { key: "pexelsApiKey", value: "" },
  ]);

  assert.equal(serialized.provider, "openrouter");
  assert.equal(serialized.apiKey, undefined);
  assert.equal(serialized.apiKeyConfigured, "true");
  assert.equal(serialized.apiKeyPreview, "sk-o...alue");
  assert.equal(serialized.pexelsApiKey, undefined);
  assert.equal(serialized.pexelsApiKeyConfigured, "false");
});

test("blank sensitive settings preserve existing values", () => {
  const entries = settingsEntriesFromBody({
    provider: "openrouter",
    apiKey: "",
    pexelsApiKey: "new-pexels-key",
    unknown: "ignored",
  });

  assert.deepEqual(entries, [
    ["provider", "openrouter"],
    ["pexelsApiKey", "new-pexels-key"],
  ]);
});

test("clear flags intentionally clear sensitive settings", () => {
  assert.deepEqual(settingsEntriesFromBody({ clearApiKey: true }), [["apiKey", ""]]);
});

test("short secrets do not leak exact value", () => {
  assert.equal(maskSecret("short"), "configured");
});
