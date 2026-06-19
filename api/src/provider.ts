import type Database from "better-sqlite3";

export type ProviderType = "openrouter" | "ollama" | "lmstudio" | "custom";

export interface ProviderConfig {
  provider: ProviderType;
  baseUrl: string;
  apiKey: string;
}

const PROVIDER_DEFAULTS: Record<ProviderType, string> = {
  openrouter: "https://openrouter.ai/api/v1",
  ollama: "http://localhost:11434/v1",
  lmstudio: "http://localhost:1234/v1",
  custom: "",
};

/** Read provider configuration from the settings table. */
export function getProviderConfig(db: Database.Database): ProviderConfig {
  const get = (key: string): string | undefined => {
    const row = db.prepare("SELECT value FROM settings WHERE key = ?").get(key) as
      | { value: string }
      | undefined;
    return row?.value;
  };

  const provider = (get("provider") || "openrouter") as ProviderType;
  const customBaseUrl = get("providerBaseUrl") || "";
  const apiKey = get("apiKey") || "";

  const baseUrl = customBaseUrl || PROVIDER_DEFAULTS[provider] || PROVIDER_DEFAULTS.openrouter;

  return { provider, baseUrl, apiKey };
}

/**
 * Build a fetch URL + RequestInit for chat completions.
 * Centralises URL construction, auth headers, and OpenRouter-specific headers.
 */
export function buildFetchOptions(
  config: ProviderConfig,
  body: Record<string, unknown>,
): { url: string; init: RequestInit } {
  const url = `${config.baseUrl.replace(/\/+$/, "")}/chat/completions`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (config.apiKey) {
    headers["Authorization"] = `Bearer ${config.apiKey}`;
  }

  // OpenRouter-specific ranking headers
  if (config.provider === "openrouter") {
    headers["HTTP-Referer"] = "http://localhost:4388";
    headers["X-Title"] = "motif";
  }

  return {
    url,
    init: {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    },
  };
}

/**
 * Fetch available models from the configured provider.
 * Returns an OpenAI-compatible `{ data: [{ id, name }] }` shape.
 */
export async function fetchModels(
  config: ProviderConfig,
): Promise<{ data: { id: string; name: string }[] }> {
  if (config.provider === "ollama") {
    // Ollama exposes models at /api/tags (not the /v1 path)
    const ollamaBase = config.baseUrl.replace(/\/v1\/?$/, "");
    const res = await fetch(`${ollamaBase}/api/tags`, {
      headers: config.apiKey ? { Authorization: `Bearer ${config.apiKey}` } : {},
    });
    if (!res.ok) throw new Error(`Ollama model list failed: ${res.status}`);
    const json = (await res.json()) as { models?: { name: string }[] };
    const models = (json.models ?? []).map((m) => ({ id: m.name, name: m.name }));
    return { data: models };
  }

  // OpenRouter / LM Studio / Custom — all use OpenAI-compatible /models
  const url = `${config.baseUrl.replace(/\/+$/, "")}/models`;
  const headers: Record<string, string> = {};
  if (config.apiKey) {
    headers["Authorization"] = `Bearer ${config.apiKey}`;
  }
  if (config.provider === "openrouter") {
    headers["HTTP-Referer"] = "http://localhost:4388";
    headers["X-Title"] = "motif";
  }

  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`Model list failed: ${res.status}`);
  const data = await res.json();
  return data as { data: { id: string; name: string }[] };
}
