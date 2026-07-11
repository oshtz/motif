export const SENSITIVE_SETTINGS = new Set([
  "apiKey",
  "pexelsApiKey",
  "unsplashAccessKey",
]);

export interface SecretStore {
  get(key: string): string | undefined;
  set(key: string, value: string): void;
  delete(key: string): void;
}

declare global {
  // Injected by the packaged Electron host. The API never imports Electron.
  var __MOTIF_SECRET_STORE__: SecretStore | undefined;
}

const providerSecretKey = (provider: string) => `provider:${provider}:apiKey`;
const providerSettingKey = (provider: string) => `apiKey:${provider}`;
const settingSecretKey = (key: string) => `setting:${key}`;

export function readSensitiveSetting(
  key: string,
  readSetting: (key: string) => string | undefined,
): string {
  const stored = globalThis.__MOTIF_SECRET_STORE__?.get(settingSecretKey(key));
  if (stored !== undefined) return stored;
  const legacy = readSetting(key) || "";
  if (legacy && globalThis.__MOTIF_SECRET_STORE__) {
    globalThis.__MOTIF_SECRET_STORE__.set(settingSecretKey(key), legacy);
  }
  return legacy;
}

export function readProviderApiKey(
  provider: string,
  readSetting: (key: string) => string | undefined,
): string {
  const store = globalThis.__MOTIF_SECRET_STORE__;
  const scoped = store?.get(providerSecretKey(provider)) ?? readSetting(providerSettingKey(provider));
  if (scoped !== undefined) return scoped;

  const legacy = readSetting("apiKey") || "";
  if (legacy) {
    if (store) store.set(providerSecretKey(provider), legacy);
    return legacy;
  }
  return "";
}

export function writeProviderApiKey(provider: string, value: string): void {
  const store = globalThis.__MOTIF_SECRET_STORE__;
  if (!store) return;
  if (value) store.set(providerSecretKey(provider), value);
  else store.delete(providerSecretKey(provider));
}

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
  "onboardingComplete",
]);

export function maskSecret(value: string | undefined): string {
  if (!value) return "";
  if (value.length <= 8) return "configured";
  return `${value.slice(0, 4)}...${value.slice(-4)}`;
}

export function serializeSettingsRows(
  rows: Array<{ key: string; value: string }>
): Record<string, unknown> {
  const settings: Record<string, unknown> = {};
  for (const row of rows) {
    if (row.key.startsWith("apiKey:")) {
      const provider = row.key.slice("apiKey:".length);
      settings[`apiKeyConfigured:${provider}`] = row.value ? "true" : "false";
      settings[`apiKeyPreview:${provider}`] = maskSecret(row.value);
      continue;
    }
    if (SENSITIVE_SETTINGS.has(row.key)) {
      const value = readSensitiveSetting(row.key, (key) => rows.find((item) => item.key === key)?.value);
      settings[`${row.key}Configured`] = value ? "true" : "false";
      settings[`${row.key}Preview`] = maskSecret(value);
    } else {
      settings[row.key] = row.value;
    }
  }
  const providers = ["openrouter", "ollama", "lmstudio", "custom"];
  const providerApiKeys: Record<string, { configured: boolean; preview: string }> = {};
  for (const provider of providers) {
    const value = globalThis.__MOTIF_SECRET_STORE__?.get(providerSecretKey(provider)) ?? "";
    const configured = Boolean(value || settings[`apiKeyConfigured:${provider}`] === "true");
    providerApiKeys[provider] = {
      configured,
      preview: value ? maskSecret(value) : String(settings[`apiKeyPreview:${provider}`] || ""),
    };
  }
  settings.providerApiKeys = providerApiKeys;
  return settings;
}

export function settingsEntriesFromBody(body: Record<string, unknown>): [string, string][] {
  const entries: [string, string][] = [];

  for (const [key, rawValue] of Object.entries(body)) {
    if (key === "providerApiKeys" && rawValue && typeof rawValue === "object") {
      for (const [provider, value] of Object.entries(rawValue as Record<string, unknown>)) {
        if (!["openrouter", "ollama", "lmstudio", "custom"].includes(provider)) continue;
        if (value === null || value === "") {
          writeProviderApiKey(provider, "");
          if (!globalThis.__MOTIF_SECRET_STORE__) entries.push([providerSettingKey(provider), ""]);
          continue;
        }
        if (typeof value !== "string") continue;
        writeProviderApiKey(provider, value);
        if (!globalThis.__MOTIF_SECRET_STORE__) entries.push([providerSettingKey(provider), value]);
      }
      continue;
    }
    if (key.startsWith("clear") && rawValue === true) {
      const settingKey = key.charAt(5).toLowerCase() + key.slice(6);
      if (SENSITIVE_SETTINGS.has(settingKey)) {
        if (settingKey === "apiKey") {
          const provider = typeof body.provider === "string" ? body.provider : "openrouter";
          writeProviderApiKey(provider, "");
        } else {
          globalThis.__MOTIF_SECRET_STORE__?.delete(settingSecretKey(settingKey));
        }
        entries.push([settingKey, ""]);
      }
      continue;
    }

    if (!ALLOWED_SETTINGS.has(key)) continue;
    if (key === "apiKey") {
      if (rawValue === "") continue;
      const provider = typeof body.provider === "string" ? body.provider : "openrouter";
      writeProviderApiKey(provider, String(rawValue ?? ""));
      if (!globalThis.__MOTIF_SECRET_STORE__) {
        entries.push([providerSettingKey(provider), String(rawValue)]);
      }
      continue;
    }
    if (SENSITIVE_SETTINGS.has(key) && globalThis.__MOTIF_SECRET_STORE__) {
      const value = String(rawValue ?? "");
      if (value) globalThis.__MOTIF_SECRET_STORE__.set(settingSecretKey(key), value);
      else globalThis.__MOTIF_SECRET_STORE__.delete(settingSecretKey(key));
      continue;
    }
    if (SENSITIVE_SETTINGS.has(key) && rawValue === "") continue;
    entries.push([key, String(rawValue ?? "")]);
  }

  return entries;
}
