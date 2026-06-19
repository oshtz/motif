export const SENSITIVE_SETTINGS = new Set([
  "apiKey",
  "pexelsApiKey",
  "unsplashAccessKey",
]);

export const ALLOWED_SETTINGS = new Set([
  "provider",
  "providerBaseUrl",
  "apiKey",
  "pexelsApiKey",
  "unsplashAccessKey",
  "model",
  "systemPrompt",
  "genomeId",
  "shuffle",
  "temperature",
  "batchSize",
  "styleDropperModel",
  "styleDropperSystemPrompt",
]);

export function maskSecret(value: string | undefined): string {
  if (!value) return "";
  if (value.length <= 8) return "configured";
  return `${value.slice(0, 4)}...${value.slice(-4)}`;
}

export function serializeSettingsRows(
  rows: Array<{ key: string; value: string }>
): Record<string, string> {
  const settings: Record<string, string> = {};
  for (const row of rows) {
    if (SENSITIVE_SETTINGS.has(row.key)) {
      settings[`${row.key}Configured`] = row.value ? "true" : "false";
      settings[`${row.key}Preview`] = maskSecret(row.value);
    } else {
      settings[row.key] = row.value;
    }
  }
  return settings;
}

export function settingsEntriesFromBody(body: Record<string, unknown>): [string, string][] {
  const entries: [string, string][] = [];

  for (const [key, rawValue] of Object.entries(body)) {
    if (key.startsWith("clear") && rawValue === true) {
      const settingKey = key.charAt(5).toLowerCase() + key.slice(6);
      if (SENSITIVE_SETTINGS.has(settingKey)) {
        entries.push([settingKey, ""]);
      }
      continue;
    }

    if (!ALLOWED_SETTINGS.has(key)) continue;
    if (SENSITIVE_SETTINGS.has(key) && rawValue === "") continue;
    entries.push([key, String(rawValue ?? "")]);
  }

  return entries;
}
