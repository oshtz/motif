import express from "express";
import cors from "cors";
import db from "./db.js";
import {
  expandPrompt,
  streamVariant,
  extractHTML,
  wrapHTML,
  getDefaultSystemPrompt,
  newVariantId,
  DEFAULT_STYLE_DROPPER_PROMPT,
  DEFAULT_EDIT_PROMPT,
  DEFAULT_REORGANIZE_PROMPT,
  RAW_COMPARE_PROMPT,
} from "./generate.js";
import type { Generation, ConversationTurn } from "./generate.js";
import { listGenomes, reloadGenomes } from "./genomes/index.js";
import { searchImages, formatImagesForPrompt } from "./images.js";
import { getProviderConfig, fetchModels, buildFetchOptions } from "./provider.js";
import { serializeSettingsRows, settingsEntriesFromBody } from "./settings.js";
import { createStoredZip } from "./zip.js";
import { buildProductionHandoffProject, type HandoffGeneration } from "./handoff.js";
import {
  normalizeBlendConfig,
  normalizeBoardStatus,
  scoreGeneratedHtml,
  summarizeRecipe,
  safeJsonParse,
  extractStaticStyleTraits,
  buildPromptPatch,
  buildDesignSystemExtraction,
  buildDirectEditInstruction,
  buildBoardMemory,
  normalizeStyleTraits,
  mergeRuntimeQualityAudit,
  type BlendEntry,
  type BoardMemoryGeneration,
  type QualityScore,
  type StyleTraits,
} from "./product-model.js";

const app = express();
const PORT = Number(process.env.MOTIF_PORT || 4389);
const WEB_PORT = Number(process.env.MOTIF_WEB_PORT || 4388);

const ALLOWED_ORIGINS = new Set([
  "http://localhost:4388",
  "http://127.0.0.1:4388",
  "http://[::1]:4388",
  `http://localhost:${WEB_PORT}`,
  `http://127.0.0.1:${WEB_PORT}`,
  `http://[::1]:${WEB_PORT}`,
]);

app.use(cors({
  origin(origin, callback) {
    const isElectronFileOrigin = process.env.MOTIF_ELECTRON === "1" &&
      (origin === "null" || origin === "file://");
    if (!origin || ALLOWED_ORIGINS.has(origin) || isElectronFileOrigin) {
      callback(null, true);
      return;
    }
    callback(new Error("Origin not allowed"));
  },
}));

app.use((req, res, next) => {
  const limit = req.path === "/api/generate-from-image" ||
    req.path === "/api/style-patches/extract" ||
    req.path === "/api/design-systems/ingest"
    ? "15mb"
    : "2mb";
  express.json({ limit })(req, res, next);
});

// --- Settings ---

app.get("/api/settings", (_req, res) => {
  const rows = db.prepare("SELECT key, value FROM settings").all() as {
    key: string;
    value: string;
  }[];
  res.json(serializeSettingsRows(rows));
});

app.put("/api/settings", (req, res) => {
  const upsert = db.prepare(
    "INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value"
  );
  const updateMany = db.transaction((entries: [string, string][]) => {
    for (const [key, value] of entries) {
      upsert.run(key, value);
    }
  });
  const body = req.body as Record<string, unknown>;
  updateMany(settingsEntriesFromBody(body));
  res.json({ ok: true });
});

// --- Models (provider-aware) ---

async function handleModels(
  overrides: {
    provider?: import("./provider.js").ProviderType;
    baseUrl?: string;
    apiKey?: string;
  },
  res: express.Response
) {
  try {
    // Start from DB config, then allow body/query overrides so the frontend
    // can fetch models for a provider before saving settings.
    const config = getProviderConfig(db);
    if (overrides.provider) {
      config.provider = overrides.provider;
      // Reset base URL to provider default when switching
      const defaults: Record<string, string> = {
        openrouter: "https://openrouter.ai/api/v1",
        ollama: "http://localhost:11434/v1",
        lmstudio: "http://localhost:1234/v1",
      };
      if (defaults[config.provider]) config.baseUrl = defaults[config.provider];
    }
    if (overrides.baseUrl) config.baseUrl = overrides.baseUrl;
    if (overrides.apiKey) config.apiKey = overrides.apiKey;

    const data = await fetchModels(config);
    res.json(data);
  } catch (err) {
    console.error("Failed to fetch models:", err);
    res.status(500).json({ error: `Failed to fetch models: ${(err as Error).message}` });
  }
}

app.get("/api/models", async (req, res) => {
  await handleModels({
    provider: req.query.provider as import("./provider.js").ProviderType | undefined,
    baseUrl: req.query.baseUrl as string | undefined,
  }, res);
});

app.post("/api/models", async (req, res) => {
  const body = req.body as {
    provider?: import("./provider.js").ProviderType;
    baseUrl?: string;
    apiKey?: string;
  };
  await handleModels(body, res);
});

// --- Genomes ---

app.get("/api/genomes", (_req, res) => {
  const genomes = listGenomes().map((g) => ({
    id: g.id,
    name: g.name,
    keywords: g.keywords,
  }));
  res.json(genomes);
});

app.post("/api/genomes/reload", (_req, res) => {
  reloadGenomes();
  const genomes = listGenomes().map((g) => ({
    id: g.id,
    name: g.name,
    keywords: g.keywords,
  }));
  res.json({ ok: true, count: genomes.length, genomes });
});

// --- Style Recipes ---

function serializeRecipe(row: Record<string, unknown>) {
  const blendConfig = safeJsonParse<BlendEntry[]>(
    row.blend_config_json as string,
    []
  );
  return {
    ...row,
    blendConfig,
    summary: summarizeRecipe(blendConfig),
  };
}

app.get("/api/style-recipes", (_req, res) => {
  const rows = db
    .prepare("SELECT * FROM style_recipes ORDER BY updated_at DESC")
    .all() as Record<string, unknown>[];
  res.json(rows.map(serializeRecipe));
});

app.post("/api/style-recipes", (req, res) => {
  const { name, description = "", blendConfig, sourceGenerationId = "" } = req.body;
  const normalizedBlend = normalizeBlendConfig(blendConfig);
  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "name is required" });
    return;
  }
  if (normalizedBlend.length < 2) {
    res.status(400).json({ error: "style recipes require at least two genomes" });
    return;
  }

  const id = crypto.randomUUID();
  const now = Date.now();
  const row = {
    id,
    name: name.trim(),
    description: typeof description === "string" ? description.trim() : "",
    blend_config_json: JSON.stringify(normalizedBlend),
    source_generation_id:
      typeof sourceGenerationId === "string" ? sourceGenerationId.trim() : "",
    created_at: now,
    updated_at: now,
  };

  db.prepare(`
    INSERT INTO style_recipes
      (id, name, description, blend_config_json, source_generation_id, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    row.id,
    row.name,
    row.description,
    row.blend_config_json,
    row.source_generation_id,
    row.created_at,
    row.updated_at
  );

  res.json(serializeRecipe(row));
});

app.put("/api/style-recipes/:id", (req, res) => {
  const { name, description = "", blendConfig } = req.body;
  const normalizedBlend = normalizeBlendConfig(blendConfig);
  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "name is required" });
    return;
  }
  if (normalizedBlend.length < 2) {
    res.status(400).json({ error: "style recipes require at least two genomes" });
    return;
  }

  const now = Date.now();
  db.prepare(`
    UPDATE style_recipes
    SET name = ?, description = ?, blend_config_json = ?, updated_at = ?
    WHERE id = ?
  `).run(
    name.trim(),
    typeof description === "string" ? description.trim() : "",
    JSON.stringify(normalizedBlend),
    now,
    req.params.id
  );
  res.json({ ok: true });
});

app.delete("/api/style-recipes/:id", (req, res) => {
  db.prepare("DELETE FROM style_recipes WHERE id = ?").run(req.params.id);
  db.prepare("UPDATE generations SET recipe_id = '' WHERE recipe_id = ?").run(req.params.id);
  res.json({ ok: true });
});

// --- Reusable Style Patches ---

function serializeStylePatch(row: Record<string, unknown>) {
  return {
    ...row,
    traits: safeJsonParse(row.traits_json as string, {}),
  };
}

type StylePatchRow = {
  id: string;
  name: string;
  source_type: string;
  source_ref: string;
  traits_json: string;
  prompt_patch: string;
  created_at: number;
};

function getStylePatchRow(value: unknown): StylePatchRow | null {
  const id = typeof value === "string" ? value.trim() : "";
  if (!id) return null;
  return (
    db.prepare("SELECT * FROM style_patches WHERE id = ?").get(id) as
      | StylePatchRow
      | undefined
  ) ?? null;
}

function extractJsonObject(raw: string): string {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced?.[1]) return fenced[1].trim();
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  return start >= 0 && end > start ? raw.slice(start, end + 1) : raw;
}

async function extractStyleTraitsFromImage(image: string, model: string): Promise<StyleTraits> {
  const providerConfig = getProviderConfig(db);
  if (providerConfig.provider === "openrouter" && !providerConfig.apiKey) {
    throw new Error("OpenRouter API key not configured. Go to Settings to add it.");
  }

  const { url, init } = buildFetchOptions(providerConfig, {
    model,
    messages: [
      {
        role: "system",
        content: [
          "You are a UI style trait extractor.",
          "Return strict JSON only with keys: colors, typography, spacing, motion, layout.",
          "Each value must be an array of short reusable design cues, not prose paragraphs.",
        ].join(" "),
      },
      {
        role: "user",
        content: [
          { type: "image_url", image_url: { url: image } },
          {
            type: "text",
            text: "Extract the reusable visual genome traits from this screenshot.",
          },
        ],
      },
    ],
    temperature: 0.2,
    max_tokens: 900,
  });

  const response = await fetch(url, init);
  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Vision API error: ${response.status} - ${errText}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content?.trim() ?? "{}";
  return normalizeStyleTraits(safeJsonParse(extractJsonObject(content), {}));
}

type DesignSystemRow = {
  id: string;
  motif_id: string;
  name: string;
  source_type: string;
  source_ref: string;
  tokens_json: string;
  traits_json: string;
  component_rules_json: string;
  prompt_patch: string;
  style_patch_id: string;
  active: number;
  created_at: number;
  updated_at: number;
};

function parseTokenJsonInput(value: unknown): unknown | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return undefined;
    return safeJsonParse(trimmed, undefined);
  }
  if (typeof value === "object") return value;
  return undefined;
}

function serializeDesignSystem(row: DesignSystemRow) {
  return {
    ...row,
    active: Boolean(row.active),
    tokens: safeJsonParse(row.tokens_json, {}),
    traits: safeJsonParse(row.traits_json, {}),
    componentRules: safeJsonParse(row.component_rules_json, []),
  };
}

function activeDesignSystemRows(motifId: string): DesignSystemRow[] {
  if (!motifId) return [];
  return db.prepare(`
    SELECT * FROM design_systems
    WHERE motif_id = ? AND active = 1
    ORDER BY updated_at DESC
    LIMIT 5
  `).all(motifId) as DesignSystemRow[];
}

function deriveDesignSystemMemory(motifId: string): string {
  const rows = activeDesignSystemRows(motifId);
  if (rows.length === 0) return "";
  return [
    "Active board-level design systems:",
    ...rows.map((row) => {
      const rules = safeJsonParse<string[]>(row.component_rules_json, []);
      const traits = safeJsonParse<StyleTraits>(row.traits_json, {
        colors: [],
        typography: [],
        spacing: [],
        motion: [],
        layout: [],
      });
      const traitSummary = [
        traits.colors.length ? `colors ${traits.colors.slice(0, 4).join(", ")}` : "",
        traits.typography.length ? `type ${traits.typography.slice(0, 3).join(", ")}` : "",
        traits.spacing.length ? `spacing ${traits.spacing.slice(0, 3).join(", ")}` : "",
        rules.length ? `component rules ${rules.slice(0, 3).join("; ")}` : "",
      ].filter(Boolean).join("; ");
      return `- ${row.name}${traitSummary ? `: ${traitSummary}` : ""}`;
    }),
    "Design-system rule: preserve active token, component, accessibility, responsive, and state rules unless the user explicitly overrides them.",
  ].join("\n");
}

app.get("/api/style-patches", (_req, res) => {
  const rows = db
    .prepare("SELECT * FROM style_patches ORDER BY created_at DESC")
    .all() as Record<string, unknown>[];
  res.json(rows.map(serializeStylePatch));
});

app.post("/api/style-patches/extract", async (req, res) => {
  const {
    name = "Untitled style patch",
    sourceGenerationId = "",
    html = "",
    url = "",
    image = "",
    model = "",
  } = req.body as {
    name?: string;
    sourceGenerationId?: string;
    html?: string;
    url?: string;
    image?: string;
    model?: string;
  };

  let sourceHtml = "";
  let sourceType = "html";
  let sourceRef = "";
  let traits: StyleTraits | null = null;

  if (image) {
    try {
      const modelRow = db
        .prepare("SELECT value FROM settings WHERE key = 'styleDropperModel'")
        .get() as { value: string } | undefined;
      const resolvedModel =
        (typeof model === "string" && model.trim()) ||
        modelRow?.value ||
        "anthropic/claude-sonnet-4";
      traits = await extractStyleTraitsFromImage(image, resolvedModel);
      sourceType = "image";
      sourceRef = "uploaded-image";
    } catch (err) {
      res.status(400).json({ error: `failed to extract image traits: ${(err as Error).message}` });
      return;
    }
  } else if (sourceGenerationId) {
    const gen = db
      .prepare("SELECT parsed_html FROM generations WHERE id = ?")
      .get(sourceGenerationId) as { parsed_html: string } | undefined;
    if (!gen) {
      res.status(404).json({ error: "source generation not found" });
      return;
    }
    sourceHtml = gen.parsed_html;
    sourceType = "generation";
    sourceRef = sourceGenerationId;
  } else if (url) {
    try {
      const parsedUrl = new URL(url);
      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        throw new Error("only http and https URLs are supported");
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      sourceHtml = (await response.text()).slice(0, 250000);
      sourceType = "url";
      sourceRef = url;
    } catch (err) {
      res.status(400).json({ error: `failed to fetch url: ${(err as Error).message}` });
      return;
    }
  } else if (html) {
    sourceHtml = html;
    sourceRef = "direct-html";
  }

  if (!sourceHtml && !traits) {
    res.status(400).json({ error: "sourceGenerationId, url, html, or image is required" });
    return;
  }

  traits = traits ?? extractStaticStyleTraits(sourceHtml);
  const promptPatch = buildPromptPatch(traits);
  const id = crypto.randomUUID();
  const now = Date.now();
  const patchName = typeof name === "string" && name.trim()
    ? name.trim()
    : "Untitled style patch";

  const row = {
    id,
    name: patchName,
    source_type: sourceType,
    source_ref: sourceRef,
    traits_json: JSON.stringify(traits),
    prompt_patch: promptPatch,
    created_at: now,
  };

  db.prepare(`
    INSERT INTO style_patches
      (id, name, source_type, source_ref, traits_json, prompt_patch, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    row.id,
    row.name,
    row.source_type,
    row.source_ref,
    row.traits_json,
    row.prompt_patch,
    row.created_at
  );

  res.json(serializeStylePatch(row));
});

app.delete("/api/style-patches/:id", (req, res) => {
  db.prepare("DELETE FROM style_patches WHERE id = ?").run(req.params.id);
  res.json({ ok: true });
});

// --- Design System Ingestion ---

app.get("/api/design-systems", (req, res) => {
  const motifId = typeof req.query.motif_id === "string" ? req.query.motif_id : "";
  const rows = motifId
    ? db.prepare("SELECT * FROM design_systems WHERE motif_id = ? ORDER BY updated_at DESC").all(motifId)
    : db.prepare("SELECT * FROM design_systems ORDER BY updated_at DESC").all();
  res.json((rows as DesignSystemRow[]).map(serializeDesignSystem));
});

app.post("/api/design-systems/ingest", async (req, res) => {
  const {
    motifId = "",
    name = "Untitled design system",
    html = "",
    url = "",
    image = "",
    tokenJson,
    componentRules = "",
    model = "",
    active = true,
  } = req.body as {
    motifId?: string;
    name?: string;
    html?: string;
    url?: string;
    image?: string;
    tokenJson?: unknown;
    componentRules?: unknown;
    model?: string;
    active?: boolean;
  };

  const resolvedMotifId = typeof motifId === "string" ? motifId.trim() : "";
  if (resolvedMotifId) {
    const motif = db.prepare("SELECT id FROM motifs WHERE id = ?").get(resolvedMotifId);
    if (!motif) {
      res.status(404).json({ error: "motif not found" });
      return;
    }
  }

  const systemName = typeof name === "string" && name.trim()
    ? name.trim()
    : "Untitled design system";
  const parsedTokens = parseTokenJsonInput(tokenJson);
  const rulesPresent = Boolean(
    Array.isArray(componentRules)
      ? componentRules.length
      : typeof componentRules === "string" && componentRules.trim()
  );
  let sourceHtml = "";
  let sourceType = "";
  let sourceRef = "";
  let htmlTraits: StyleTraits | undefined;

  if (image) {
    try {
      const modelRow = db
        .prepare("SELECT value FROM settings WHERE key = 'styleDropperModel'")
        .get() as { value: string } | undefined;
      const resolvedModel =
        (typeof model === "string" && model.trim()) ||
        modelRow?.value ||
        "anthropic/claude-sonnet-4";
      htmlTraits = await extractStyleTraitsFromImage(image, resolvedModel);
      sourceType = "image";
      sourceRef = "uploaded-image";
    } catch (err) {
      res.status(400).json({ error: `failed to extract image traits: ${(err as Error).message}` });
      return;
    }
  } else if (url) {
    try {
      const parsedUrl = new URL(url);
      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        throw new Error("only http and https URLs are supported");
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      sourceHtml = (await response.text()).slice(0, 250000);
      htmlTraits = extractStaticStyleTraits(sourceHtml);
      sourceType = "url";
      sourceRef = url;
    } catch (err) {
      res.status(400).json({ error: `failed to fetch url: ${(err as Error).message}` });
      return;
    }
  } else if (html) {
    sourceHtml = html;
    htmlTraits = extractStaticStyleTraits(sourceHtml);
    sourceType = "html";
    sourceRef = "direct-html";
  }

  if (!sourceType && parsedTokens !== undefined) {
    sourceType = "tokens";
    sourceRef = "token-json";
  }
  if (!sourceType && rulesPresent) {
    sourceType = "component-rules";
    sourceRef = "component-rules";
  }

  if (!sourceType) {
    res.status(400).json({ error: "url, html, image, tokenJson, or componentRules is required" });
    return;
  }

  const extraction = buildDesignSystemExtraction({
    name: systemName,
    htmlTraits,
    tokenJson: parsedTokens,
    componentRules,
  });

  const id = crypto.randomUUID();
  const now = Date.now();
  const traitsJson = JSON.stringify(extraction.traits);
  const componentRulesJson = JSON.stringify(extraction.componentRules);
  const tokensJson = parsedTokens === undefined ? "" : JSON.stringify(parsedTokens);

  db.prepare(`
    INSERT INTO design_systems (
      id, motif_id, name, source_type, source_ref, tokens_json, traits_json,
      component_rules_json, prompt_patch, style_patch_id, active, created_at, updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    id,
    resolvedMotifId,
    systemName,
    sourceType,
    sourceRef,
    tokensJson,
    traitsJson,
    componentRulesJson,
    extraction.promptPatch,
    "",
    active ? 1 : 0,
    now,
    now
  );

  const stylePatchId = crypto.randomUUID();
  db.prepare(`
    INSERT INTO style_patches
      (id, name, source_type, source_ref, traits_json, prompt_patch, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    stylePatchId,
    `${systemName} system patch`,
    "design-system",
    id,
    traitsJson,
    extraction.promptPatch,
    now
  );
  db.prepare("UPDATE design_systems SET style_patch_id = ? WHERE id = ?").run(stylePatchId, id);

  if (resolvedMotifId) {
    db.prepare("UPDATE motifs SET updated_at = ? WHERE id = ?").run(now, resolvedMotifId);
    logBoardEvent({
      motifId: resolvedMotifId,
      eventType: "design_system_ingested",
      summary: `Ingested design system: ${systemName}`,
      metadata: { designSystemId: id, stylePatchId, sourceType },
    });
  }

  const row = db.prepare("SELECT * FROM design_systems WHERE id = ?").get(id) as DesignSystemRow;
  res.json(serializeDesignSystem(row));
});

app.patch("/api/design-systems/:id", (req, res) => {
  const row = db.prepare("SELECT * FROM design_systems WHERE id = ?").get(req.params.id) as DesignSystemRow | undefined;
  if (!row) {
    res.status(404).json({ error: "design system not found" });
    return;
  }

  const nextName = typeof req.body?.name === "string" && req.body.name.trim()
    ? req.body.name.trim()
    : row.name;
  const nextActive = typeof req.body?.active === "boolean"
    ? req.body.active
    : Boolean(row.active);
  const now = Date.now();
  db.prepare(`
    UPDATE design_systems
    SET name = ?, active = ?, updated_at = ?
    WHERE id = ?
  `).run(nextName, nextActive ? 1 : 0, now, row.id);

  if (row.motif_id) {
    db.prepare("UPDATE motifs SET updated_at = ? WHERE id = ?").run(now, row.motif_id);
    logBoardEvent({
      motifId: row.motif_id,
      eventType: "design_system_updated",
      summary: `${nextActive ? "Activated" : "Paused"} design system: ${nextName}`,
      metadata: { designSystemId: row.id, active: nextActive },
    });
  }

  const next = db.prepare("SELECT * FROM design_systems WHERE id = ?").get(row.id) as DesignSystemRow;
  res.json(serializeDesignSystem(next));
});

app.delete("/api/design-systems/:id", (req, res) => {
  const row = db.prepare("SELECT * FROM design_systems WHERE id = ?").get(req.params.id) as DesignSystemRow | undefined;
  if (!row) {
    res.status(404).json({ error: "design system not found" });
    return;
  }
  db.prepare("DELETE FROM design_systems WHERE id = ?").run(row.id);
  if (row.style_patch_id) {
    db.prepare("DELETE FROM style_patches WHERE id = ?").run(row.style_patch_id);
  }
  if (row.motif_id) {
    db.prepare("UPDATE motifs SET updated_at = ? WHERE id = ?").run(Date.now(), row.motif_id);
    logBoardEvent({
      motifId: row.motif_id,
      eventType: "design_system_deleted",
      summary: `Removed design system: ${row.name}`,
      metadata: { designSystemId: row.id },
    });
  }
  res.json({ ok: true });
});

// --- Motifs ---

type MotifRow = {
  id: string;
  name: string;
  created_at: number;
  updated_at: number;
  board_memory?: string;
  board_memory_updated_at?: number;
};

function serializeMotif(row: MotifRow) {
  return {
    ...row,
    board_memory: row.board_memory || "",
    board_memory_updated_at: row.board_memory_updated_at || 0,
  };
}

function boardMemoryRowsForMotif(motifId: string): BoardMemoryGeneration[] {
  return db.prepare(`
    SELECT
      prompt,
      expanded_prompt,
      genome_id,
      genome_name,
      secondary_genome_id,
      secondary_genome_name,
      recipe_id,
      style_patch_id,
      variation_distance,
      board_status,
      notes,
      quality_score_json,
      created_at
    FROM generations
    WHERE motif_id = ?
    ORDER BY created_at DESC
  `).all(motifId) as BoardMemoryGeneration[];
}

function deriveMotifBoardMemory(motifId: string): string {
  return buildBoardMemory(boardMemoryRowsForMotif(motifId));
}

type BoardStyleDecisionRow = {
  id: string;
  motif_id: string;
  source_generation_id: string;
  name: string;
  notes: string;
  genome_id: string;
  genome_name: string;
  secondary_genome_id: string;
  secondary_genome_name: string;
  recipe_id: string;
  style_patch_id: string;
  blend_config_json: string;
  created_at: number;
};

function boardStyleDecisionRows(motifId: string): BoardStyleDecisionRow[] {
  return db.prepare(`
    SELECT * FROM board_style_decisions
    WHERE motif_id = ?
    ORDER BY created_at DESC
  `).all(motifId) as BoardStyleDecisionRow[];
}

function serializeBoardStyleDecision(row: BoardStyleDecisionRow) {
  return {
    ...row,
    notes: row.notes || "",
    genome_id: row.genome_id || "",
    genome_name: row.genome_name || "",
    secondary_genome_id: row.secondary_genome_id || "",
    secondary_genome_name: row.secondary_genome_name || "",
    recipe_id: row.recipe_id || "",
    style_patch_id: row.style_patch_id || "",
    blend_config_json: row.blend_config_json || "",
  };
}

function deriveBoardStyleDecisionMemory(motifId: string): string {
  const decisions = boardStyleDecisionRows(motifId).slice(0, 8);
  if (decisions.length === 0) return "";
  return [
    "Saved board-level style decisions:",
    ...decisions.map((decision) => {
      const genome = [
        decision.genome_name || decision.genome_id,
        decision.secondary_genome_name || decision.secondary_genome_id,
      ].filter(Boolean).join(" + ");
      const meta = [
        genome ? `genome ${genome}` : "",
        decision.recipe_id ? `recipe ${decision.recipe_id}` : "",
        decision.style_patch_id ? `patch ${decision.style_patch_id}` : "",
        decision.notes ? `notes: ${compactEventText(decision.notes, 140)}` : "",
      ].filter(Boolean).join("; ");
      return `- ${decision.name}${meta ? ` (${meta})` : ""}`;
    }),
    "Style rule: preserve saved board-level style decisions unless the user explicitly asks to depart from them.",
  ].join("\n");
}

function getMotifBoardMemory(motifId: string): string {
  if (!motifId) return "";
  const motif = db
    .prepare("SELECT board_memory FROM motifs WHERE id = ?")
    .get(motifId) as { board_memory?: string } | undefined;
  const storedMemory = motif?.board_memory?.trim() || "";
  const memory = storedMemory || deriveMotifBoardMemory(motifId);
  const styleDecisionMemory = deriveBoardStyleDecisionMemory(motifId);
  const designSystemMemory = deriveDesignSystemMemory(motifId);
  return [memory, styleDecisionMemory, designSystemMemory].filter(Boolean).join("\n\n");
}

function storeMotifBoardMemory(motifId: string, memory: string) {
  const now = Date.now();
  const result = db.prepare(`
    UPDATE motifs
    SET board_memory = ?, board_memory_updated_at = ?, updated_at = ?
    WHERE id = ?
  `).run(memory, now, now, motifId);
  return { result, now };
}

type BoardEventRow = {
  id: string;
  motif_id: string;
  generation_id: string;
  event_type: string;
  summary: string;
  metadata_json: string;
  created_at: number;
};

function compactEventText(value: unknown, limit = 90): string {
  if (typeof value !== "string") return "";
  const text = value.replace(/\s+/g, " ").trim();
  if (!text) return "";
  return text.length > limit ? `${text.slice(0, limit - 1).trim()}...` : text;
}

function serializeBoardEvent(row: BoardEventRow) {
  return {
    id: row.id,
    motif_id: row.motif_id,
    generation_id: row.generation_id,
    event_type: row.event_type,
    summary: row.summary,
    metadata: safeJsonParse<Record<string, unknown>>(row.metadata_json, {}),
    created_at: row.created_at,
  };
}

function logBoardEvent({
  motifId,
  generationId = "",
  eventType,
  summary,
  metadata = {},
}: {
  motifId: string;
  generationId?: string;
  eventType: string;
  summary: string;
  metadata?: Record<string, unknown>;
}) {
  if (!motifId) return;
  db.prepare(`
    INSERT INTO board_events (id, motif_id, generation_id, event_type, summary, metadata_json, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    crypto.randomUUID(),
    motifId,
    generationId,
    eventType,
    compactEventText(summary, 180),
    JSON.stringify(metadata),
    Date.now()
  );
}

function boardTimelineForMotif(motifId: string) {
  const loggedEvents = (
    db.prepare(`
      SELECT * FROM board_events
      WHERE motif_id = ?
      ORDER BY created_at DESC
      LIMIT 80
    `).all(motifId) as BoardEventRow[]
  ).map(serializeBoardEvent);

  const generatedEvents = (
    db.prepare(`
      SELECT id, prompt, genome_name, genome_id, parent_id, board_status, variation_distance, created_at
      FROM generations
      WHERE motif_id = ?
      ORDER BY created_at DESC
      LIMIT 80
    `).all(motifId) as Array<{
      id: string;
      prompt: string;
      genome_name?: string;
      genome_id?: string;
      parent_id?: string;
      board_status?: string;
      variation_distance?: string;
      created_at: number;
    }>
  ).map((row) => ({
    id: `generated-${row.id}`,
    motif_id: motifId,
    generation_id: row.id,
    event_type: row.parent_id ? "variant_forked" : "variant_generated",
    summary: `${row.parent_id ? "Forked" : "Generated"} "${compactEventText(row.prompt)}"`,
    metadata: {
      genome: row.genome_name || row.genome_id || "",
      parent_id: row.parent_id || "",
      board_status: row.board_status || "candidate",
      variation_distance: row.variation_distance || "",
    },
    created_at: row.created_at,
  }));

  const exportEvents = (
    db.prepare(`
      SELECT handoff_exports.id, handoff_exports.generation_id, handoff_exports.format, handoff_exports.created_at, generations.prompt
      FROM handoff_exports
      JOIN generations ON generations.id = handoff_exports.generation_id
      WHERE generations.motif_id = ?
      ORDER BY handoff_exports.created_at DESC
      LIMIT 80
    `).all(motifId) as Array<{
      id: string;
      generation_id: string;
      format: string;
      created_at: number;
      prompt: string;
    }>
  ).map((row) => ({
    id: `handoff-${row.id}`,
    motif_id: motifId,
    generation_id: row.generation_id,
    event_type: "handoff_exported",
    summary: `Exported ${row.format} handoff for "${compactEventText(row.prompt)}"`,
    metadata: { format: row.format },
    created_at: row.created_at,
  }));

  return [...loggedEvents, ...generatedEvents, ...exportEvents]
    .sort((a, b) => Number(b.created_at || 0) - Number(a.created_at || 0))
    .slice(0, 80);
}

app.get("/api/motifs", (_req, res) => {
  const rows = db.prepare("SELECT * FROM motifs ORDER BY updated_at DESC").all() as MotifRow[];
  res.json(rows.map(serializeMotif));
});

app.post("/api/motifs", (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "name is required" });
    return;
  }
  const id = crypto.randomUUID();
  const now = Date.now();
  db.prepare("INSERT INTO motifs (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)").run(id, name.trim(), now, now);
  res.json({ id, name: name.trim(), created_at: now, updated_at: now, board_memory: "", board_memory_updated_at: 0 });
});

app.get("/api/motifs/:id/board-memory", (req, res) => {
  const motif = db
    .prepare("SELECT * FROM motifs WHERE id = ?")
    .get(req.params.id) as MotifRow | undefined;
  if (!motif) {
    res.status(404).json({ error: "Motif not found" });
    return;
  }
  const derivedMemory = deriveMotifBoardMemory(req.params.id);
  const designSystemMemory = deriveDesignSystemMemory(req.params.id);
  const styleDecisionMemory = deriveBoardStyleDecisionMemory(req.params.id);
  const generationContext = [
    motif.board_memory?.trim() || derivedMemory,
    styleDecisionMemory,
    designSystemMemory,
  ].filter(Boolean).join("\n\n");
  res.json({
    motif_id: req.params.id,
    board_memory: motif.board_memory || "",
    board_memory_updated_at: motif.board_memory_updated_at || 0,
    derived_memory: derivedMemory,
    style_decision_memory: styleDecisionMemory,
    design_system_memory: designSystemMemory,
    generation_context: generationContext,
  });
});

app.patch("/api/motifs/:id/board-memory", (req, res) => {
  const memory = typeof req.body?.memory === "string"
    ? req.body.memory.trim().slice(0, 6000)
    : "";
  const { result, now } = storeMotifBoardMemory(req.params.id, memory);
  if (result.changes === 0) {
    res.status(404).json({ error: "Motif not found" });
    return;
  }
  logBoardEvent({
    motifId: req.params.id,
    eventType: "board_memory_saved",
    summary: memory ? "Saved board memory" : "Cleared board memory",
    metadata: { length: memory.length },
  });
  res.json({ ok: true, board_memory: memory, board_memory_updated_at: now });
});

app.post("/api/motifs/:id/board-memory/refresh", (req, res) => {
  const memory = deriveMotifBoardMemory(req.params.id);
  const { result, now } = storeMotifBoardMemory(req.params.id, memory);
  if (result.changes === 0) {
    res.status(404).json({ error: "Motif not found" });
    return;
  }
  logBoardEvent({
    motifId: req.params.id,
    eventType: "board_memory_refreshed",
    summary: "Refreshed board memory from current decisions",
    metadata: { length: memory.length },
  });
  res.json({ ok: true, board_memory: memory, board_memory_updated_at: now });
});

app.get("/api/motifs/:id/board-events", (req, res) => {
  const motif = db
    .prepare("SELECT id FROM motifs WHERE id = ?")
    .get(req.params.id) as { id: string } | undefined;
  if (!motif) {
    res.status(404).json({ error: "Motif not found" });
    return;
  }
  res.json(boardTimelineForMotif(req.params.id));
});

app.get("/api/motifs/:id/style-decisions", (req, res) => {
  const motif = db
    .prepare("SELECT id FROM motifs WHERE id = ?")
    .get(req.params.id) as { id: string } | undefined;
  if (!motif) {
    res.status(404).json({ error: "Motif not found" });
    return;
  }
  res.json(boardStyleDecisionRows(req.params.id).map(serializeBoardStyleDecision));
});

app.post("/api/motifs/:id/style-decisions", (req, res) => {
  const generationId = typeof req.body?.generationId === "string" ? req.body.generationId : "";
  const source = db.prepare(`
    SELECT id, motif_id, prompt, genome_id, genome_name, secondary_genome_id, secondary_genome_name, recipe_id, style_patch_id, blend_config_json, notes
    FROM generations
    WHERE id = ?
  `).get(generationId) as {
    id: string;
    motif_id: string;
    prompt: string;
    genome_id: string;
    genome_name: string;
    secondary_genome_id: string;
    secondary_genome_name: string;
    recipe_id: string;
    style_patch_id: string;
    blend_config_json: string;
    notes: string;
  } | undefined;
  if (!source || source.motif_id !== req.params.id) {
    res.status(404).json({ error: "Source generation not found on this motif" });
    return;
  }

  const fallbackName = source.recipe_id
    ? `Recipe ${source.recipe_id.slice(0, 8)}`
    : source.style_patch_id
      ? `Patch ${source.style_patch_id.slice(0, 8)}`
      : source.genome_name || source.genome_id || "Board style";
  const name = typeof req.body?.name === "string" && req.body.name.trim()
    ? req.body.name.trim().slice(0, 120)
    : fallbackName;
  const notes = typeof req.body?.notes === "string"
    ? req.body.notes.trim().slice(0, 1000)
    : source.notes || "";
  const id = crypto.randomUUID();
  const now = Date.now();
  db.prepare(`
    INSERT INTO board_style_decisions (
      id, motif_id, source_generation_id, name, notes,
      genome_id, genome_name, secondary_genome_id, secondary_genome_name,
      recipe_id, style_patch_id, blend_config_json, created_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    id,
    req.params.id,
    source.id,
    name,
    notes,
    source.genome_id || "",
    source.genome_name || "",
    source.secondary_genome_id || "",
    source.secondary_genome_name || "",
    source.recipe_id || "",
    source.style_patch_id || "",
    source.blend_config_json || "",
    now
  );
  db.prepare("UPDATE motifs SET updated_at = ? WHERE id = ?").run(now, req.params.id);
  logBoardEvent({
    motifId: req.params.id,
    generationId: source.id,
    eventType: "style_decision_saved",
    summary: `Saved style decision "${name}" from "${compactEventText(source.prompt)}"`,
    metadata: {
      decision_id: id,
      recipe_id: source.recipe_id || "",
      style_patch_id: source.style_patch_id || "",
    },
  });
  const row = db
    .prepare("SELECT * FROM board_style_decisions WHERE id = ?")
    .get(id) as BoardStyleDecisionRow;
  res.json(serializeBoardStyleDecision(row));
});

app.delete("/api/motifs/:motifId/style-decisions/:decisionId", (req, res) => {
  const row = db.prepare(`
    SELECT id, motif_id, source_generation_id, name
    FROM board_style_decisions
    WHERE id = ? AND motif_id = ?
  `).get(req.params.decisionId, req.params.motifId) as {
    id: string;
    motif_id: string;
    source_generation_id: string;
    name: string;
  } | undefined;
  if (!row) {
    res.status(404).json({ error: "Style decision not found" });
    return;
  }
  db.prepare("DELETE FROM board_style_decisions WHERE id = ?").run(row.id);
  db.prepare("UPDATE motifs SET updated_at = ? WHERE id = ?").run(Date.now(), row.motif_id);
  logBoardEvent({
    motifId: row.motif_id,
    generationId: row.source_generation_id,
    eventType: "style_decision_removed",
    summary: `Removed style decision "${row.name}"`,
    metadata: { decision_id: row.id },
  });
  res.json({ ok: true });
});

app.patch("/api/motifs/:id", (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "name is required" });
    return;
  }
  db.prepare("UPDATE motifs SET name = ?, updated_at = ? WHERE id = ?").run(name.trim(), Date.now(), req.params.id);
  res.json({ ok: true });
});

app.delete("/api/motifs/:id", (req, res) => {
  const { id } = req.params;
  db.prepare("DELETE FROM generations WHERE motif_id = ?").run(id);
  db.prepare("DELETE FROM motifs WHERE id = ?").run(id);
  res.json({ ok: true });
});

// --- Generations ---

app.get("/api/generations", (req, res) => {
  const motifId = req.query.motif_id as string | undefined;
  if (motifId) {
    const rows = db.prepare("SELECT * FROM generations WHERE motif_id = ? ORDER BY created_at DESC").all(motifId);
    res.json(rows);
  } else {
    const rows = db.prepare("SELECT * FROM generations ORDER BY created_at DESC").all();
    res.json(rows);
  }
});

// Analytics endpoint — genome/model usage stats
app.get("/api/analytics", (_req, res) => {
  const genomeUsage = db.prepare(`
    SELECT genome_id, genome_name, COUNT(*) as count
    FROM generations
    WHERE genome_id != ''
    GROUP BY genome_id
    ORDER BY count DESC
  `).all();

  const secondaryGenomeUsage = db.prepare(`
    SELECT secondary_genome_id as genome_id, secondary_genome_name as genome_name, COUNT(*) as count
    FROM generations
    WHERE secondary_genome_id != ''
    GROUP BY secondary_genome_id
    ORDER BY count DESC
  `).all();

  const modelUsage = db.prepare(`
    SELECT model, COUNT(*) as count
    FROM generations
    GROUP BY model
    ORDER BY count DESC
  `).all();

  const dailyUsage = db.prepare(`
    SELECT date(created_at / 1000, 'unixepoch') as day, COUNT(*) as count
    FROM generations
    WHERE created_at > ?
    GROUP BY day
    ORDER BY day ASC
  `).all(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const totals = db.prepare(`
    SELECT
      COUNT(*) as total,
      SUM(CASE WHEN favorited = 1 THEN 1 ELSE 0 END) as favorited
    FROM generations
  `).get();

  // Genome A/B analytics: favorite rate per genome
  const genomeFavoriteRates = db.prepare(`
    SELECT genome_id, genome_name,
      COUNT(*) as total,
      SUM(CASE WHEN favorited = 1 THEN 1 ELSE 0 END) as favs
    FROM generations
    WHERE genome_id != ''
    GROUP BY genome_id
    ORDER BY total DESC
  `).all() as Array<{ genome_id: string; genome_name: string; total: number; favs: number }>;

  const genomeWinRates = genomeFavoriteRates.map((r) => ({
    genome_id: r.genome_id,
    genome_name: r.genome_name,
    total: r.total,
    favorited: r.favs,
    rate: r.total > 0 ? Math.round((r.favs / r.total) * 100) : 0,
  }));

  // Genome usage trend (last 30 days, top 5 genomes)
  const topGenomes = genomeFavoriteRates.slice(0, 5).map((r) => r.genome_id);
  const genomeTrends = topGenomes.length > 0
    ? db.prepare(`
        SELECT genome_id, date(created_at / 1000, 'unixepoch') as day, COUNT(*) as count
        FROM generations
        WHERE genome_id IN (${topGenomes.map(() => "?").join(",")})
          AND created_at > ?
        GROUP BY genome_id, day
        ORDER BY day ASC
      `).all(...topGenomes, Date.now() - 30 * 24 * 60 * 60 * 1000)
    : [];

  res.json({
    genomeUsage, secondaryGenomeUsage, modelUsage, dailyUsage, totals,
    genomeWinRates, genomeTrends,
  });
});

// SSE endpoint — streams each variant's code as it generates
app.post("/api/generate", async (req, res) => {
  const providerConfig = getProviderConfig(db);

  if (providerConfig.provider === "openrouter" && !providerConfig.apiKey) {
    res.status(400).json({
      error: "OpenRouter API key not configured. Go to Settings to add it.",
    });
    return;
  }

  const {
    prompt,
    systemPrompt,
    model,
    temperature,
    batchSize = 4,
    genomeId: requestedGenomeId,
    shuffle = false,
    motifId = "",
    blendConfig,
    recipeId: requestedRecipeId = "",
    variationDistance = "",
    stylePatchId: rawStylePatchId = "",
  } = req.body;

  const resolvedModel = model || "anthropic/claude-sonnet-4";
  const resolvedTemp = temperature ?? 0.9;
  const useCustomPrompt = !!systemPrompt;
  const resolvedBlendConfig = normalizeBlendConfig(blendConfig);
  const blendConfigJson = resolvedBlendConfig.length > 0
    ? JSON.stringify(resolvedBlendConfig)
    : "";
  const recipeId = typeof requestedRecipeId === "string" ? requestedRecipeId.trim() : "";
  const resolvedVariationDistance =
    typeof variationDistance === "string" ? variationDistance.trim() : "";
  const requestedStylePatchId =
    typeof rawStylePatchId === "string" ? rawStylePatchId.trim() : "";
  const stylePatch = getStylePatchRow(requestedStylePatchId);
  if (requestedStylePatchId && !stylePatch) {
    res.status(404).json({ error: "Style patch not found" });
    return;
  }
  const stylePatchId = stylePatch?.id ?? "";

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  const insert = db.prepare(`
    INSERT INTO generations (id, prompt, expanded_prompt, system_prompt, genome_id, genome_name, secondary_genome_id, secondary_genome_name, model, output, parsed_html, favorited, created_at, parent_id, motif_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  // Weighted random selection: favor under-used genomes for better distribution
  type GenomeEntry = ReturnType<typeof listGenomes>[number];
  const genomeUsageRows = db.prepare(
    `SELECT genome_id, COUNT(*) as count FROM generations WHERE genome_id != '' GROUP BY genome_id`
  ).all() as { genome_id: string; count: number }[];
  const genomeUsageMap = new Map(genomeUsageRows.map((r) => [r.genome_id, r.count]));

  function weightedPick(candidates: GenomeEntry[], count: number): GenomeEntry[] {
    // Inverse-frequency weighting: weight = 1 / (usageCount + 1)
    // Unused genomes get weight 1.0, heavily-used ones approach 0
    const weighted = candidates.map((g) => ({
      genome: g,
      weight: 1 / ((genomeUsageMap.get(g.id) || 0) + 1),
    }));

    const picked: GenomeEntry[] = [];
    const remaining = [...weighted];

    for (let n = 0; n < count; n++) {
      if (remaining.length === 0) {
        remaining.push(...weighted);
      }
      const totalWeight = remaining.reduce((sum, w) => sum + w.weight, 0);
      let r = Math.random() * totalWeight;
      let idx = 0;
      for (let i = 0; i < remaining.length; i++) {
        r -= remaining[i].weight;
        if (r <= 0) { idx = i; break; }
      }
      picked.push(remaining[idx].genome);
      remaining.splice(idx, 1);
    }
    return picked;
  }

  // Pre-assign genomes for auto mode — weighted toward under-used genomes
  let assignedGenomes: { id: string; name: string; secondaryId: string; secondaryName: string }[] = [];
  if (!useCustomPrompt && !requestedGenomeId) {
    const allGenomes = listGenomes();
    const primaries = weightedPick(allGenomes, batchSize);
    assignedGenomes = primaries.map((g) => {
      let secondaryId = "";
      let secondaryName = "";
      if (shuffle) {
        const secondaryCandidates = allGenomes.filter((s) => s.id !== g.id);
        const [s] = weightedPick(secondaryCandidates, 1);
        secondaryId = s.id;
        secondaryName = s.name;
      }
      return { id: g.id, name: g.name, secondaryId, secondaryName };
    });
  }

  // For shuffle mode with explicit genome: weighted-pick secondary genomes per variant
  let shuffleSecondaries: { id: string; name: string }[] = [];
  if (shuffle && !useCustomPrompt && requestedGenomeId) {
    const candidates = listGenomes().filter((g) => g.id !== requestedGenomeId);
    const picks = weightedPick(candidates, batchSize);
    shuffleSecondaries = picks.map((g) => ({ id: g.id, name: g.name }));
  }

  // Build conversation history from prior generations in this motif
  let motifHistory: ConversationTurn[] = [];
  if (motifId) {
    const priorGens = db.prepare(
      "SELECT prompt, expanded_prompt, parsed_html FROM generations WHERE motif_id = ? ORDER BY created_at ASC"
    ).all(motifId) as { prompt: string; expanded_prompt: string; parsed_html: string }[];

    // Deduplicate: group by prompt, keep only one HTML per unique prompt (the first/representative one)
    const seen = new Set<string>();
    for (const g of priorGens) {
      const key = g.prompt;
      if (!seen.has(key)) {
        seen.add(key);
        motifHistory.push({
          prompt: g.prompt,
          expandedPrompt: g.expanded_prompt || g.prompt,
          html: g.parsed_html,
        });
      }
    }
  }

  // Build a short context summary for the expansion LLM
  const boardMemory = getMotifBoardMemory(motifId);
  const contextSections = [
    boardMemory
      ? `Board memory for this motif:\n${boardMemory}`
      : "",
    motifHistory.length > 0
      ? `This is part of an ongoing design thread. Previous requests in this thread:\n${
          motifHistory.slice(-5).map((t, i) => `${i + 1}. "${t.prompt}"`).join("\n")
        }\n\nBuild on the established direction. The user's new request continues this thread.`
      : "",
  ].filter(Boolean);
  const priorContext = contextSections.length > 0 ? contextSections.join("\n\n") : undefined;

  // Search for curated images (once, shared across all variants)
  let curatedImages = "";
  const pexelsKeyRow = db
    .prepare("SELECT value FROM settings WHERE key = 'pexelsApiKey'")
    .get() as { value: string } | undefined;
  const unsplashKeyRow = db
    .prepare("SELECT value FROM settings WHERE key = 'unsplashAccessKey'")
    .get() as { value: string } | undefined;
  if (pexelsKeyRow?.value || unsplashKeyRow?.value) {
    try {
      const images = await searchImages({
        query: prompt,
        pexelsApiKey: pexelsKeyRow?.value,
        accessKey: unsplashKeyRow?.value,
        count: 8,
      });
      curatedImages = formatImagesForPrompt(images);
    } catch (err) {
      console.error("Image search failed, continuing without:", err);
    }
  }

  // Process each variant in parallel
  const promises = Array.from({ length: batchSize }, async (_, i) => {
    const variantId = newVariantId();

    // Notify client that this variant is entering the expansion phase
    res.write(
      `event: variant_expanding\ndata: ${JSON.stringify({
        id: variantId,
        index: i,
      })}\n\n`
    );

    try {
      let expandedPrompt = prompt;
      let genomeId = requestedGenomeId || "";
      let genomeName = "";
      let secondaryGenomeId = "";
      let secondaryGenomeName = "";
      let resolvedSystemPrompt = systemPrompt || "";

      if (useCustomPrompt) {
        // Custom system prompt bypasses genome system
        resolvedSystemPrompt = systemPrompt;
        try {
          const result = await expandPrompt({
            prompt,
            model: resolvedModel,
            provider: providerConfig,
            genomeId: "01", // arbitrary, won't be used for custom prompt
            priorContext,
          });
          expandedPrompt = result.expanded;
        } catch (err) {
          console.error(`Expansion ${i} failed, using original:`, err);
        }
      } else {
        // Genome system: expand prompt and select genome
        // Use pre-assigned genome for auto mode, or explicit genome if requested
        const variantGenomeId = requestedGenomeId || assignedGenomes[i]?.id;

        // Resolve secondary genome for shuffle mode
        if (shuffle) {
          if (requestedGenomeId && shuffleSecondaries[i]) {
            secondaryGenomeId = shuffleSecondaries[i].id;
            secondaryGenomeName = shuffleSecondaries[i].name;
          } else if (assignedGenomes[i]) {
            secondaryGenomeId = assignedGenomes[i].secondaryId;
            secondaryGenomeName = assignedGenomes[i].secondaryName;
          }
        }

        try {
          const result = await expandPrompt({
            prompt,
            model: resolvedModel,
            provider: providerConfig,
            genomeId: variantGenomeId,
            secondaryGenomeName: secondaryGenomeName || undefined,
            priorContext,
          });
          expandedPrompt = result.expanded;
          genomeId = result.genomeId;
          genomeName = result.genomeName;
        } catch (err) {
          console.error(`Expansion ${i} failed, using original:`, err);
          genomeId = variantGenomeId || "01";
          genomeName = genomeId;
        }

        // Shuffle fallback: if shuffle is on but no secondary was pre-assigned
        // (e.g., single variant auto mode), pick a random one now
        if (shuffle && !secondaryGenomeId && genomeId) {
          const candidates = listGenomes().filter((g) => g.id !== genomeId);
          if (candidates.length > 0) {
            const pick = candidates[Math.floor(Math.random() * candidates.length)];
            secondaryGenomeId = pick.id;
            secondaryGenomeName = pick.name;
          }
        }
      }

      // Send variant_start with id, expanded prompt, and genome info
      res.write(
        `event: variant_start\ndata: ${JSON.stringify({
          id: variantId,
          index: i,
          expandedPrompt,
          genomeId,
          genomeName,
          secondaryGenomeId,
          secondaryGenomeName,
        })}\n\n`
      );

      // Stream code generation
      const { response: fetchPromise } = streamVariant({
        expandedPrompt,
        genomeId: genomeId || "01",
        secondaryGenomeId: secondaryGenomeId || undefined,
        blendConfig: resolvedBlendConfig.length > 1 ? resolvedBlendConfig : undefined,
        model: resolvedModel,
        temperature: resolvedTemp,
        provider: providerConfig,
        customSystemPrompt: useCustomPrompt ? resolvedSystemPrompt : undefined,
        history: motifHistory.length > 0 ? motifHistory : undefined,
        curatedImages,
        stylePatchPrompt: stylePatch?.prompt_patch,
      });

      const streamRes = await fetchPromise;
      if (!streamRes.ok) {
        const errText = await streamRes.text();
        throw new Error(`LLM API error: ${streamRes.status} - ${errText}`);
      }

      const reader = streamRes.body?.getReader();
      if (!reader) throw new Error("No stream body");

      const decoder = new TextDecoder();
      let fullOutput = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") continue;

          try {
            const chunk = JSON.parse(data);
            const delta = chunk.choices?.[0]?.delta?.content;
            if (delta) {
              fullOutput += delta;
              res.write(
                `event: variant_chunk\ndata: ${JSON.stringify({
                  id: variantId,
                  chunk: delta,
                })}\n\n`
              );
            }
          } catch {
            // skip malformed
          }
        }
      }

      // Finalize
      const parsedHtml = wrapHTML(extractHTML(fullOutput));
      const generation: Generation = {
        id: variantId,
        prompt,
        expanded_prompt: expandedPrompt,
        system_prompt: useCustomPrompt ? resolvedSystemPrompt : (secondaryGenomeId ? `[genome:${genomeId}+${secondaryGenomeId}]` : `[genome:${genomeId}]`),
        genome_id: genomeId,
        genome_name: genomeName,
        secondary_genome_id: secondaryGenomeId,
        secondary_genome_name: secondaryGenomeName,
        model: resolvedModel,
        output: fullOutput,
        parsed_html: parsedHtml,
        favorited: false,
        created_at: Date.now(),
        parent_id: "",
        motif_id: motifId,
        recipe_id: recipeId,
        blend_config_json: blendConfigJson,
        variation_distance: resolvedVariationDistance,
        board_status: "candidate",
        notes: "",
        quality_score_json: "",
        style_patch_id: stylePatchId,
      };

      // Save to DB
      insert.run(
        generation.id,
        generation.prompt,
        generation.expanded_prompt,
        generation.system_prompt,
        generation.genome_id,
        generation.genome_name,
        generation.secondary_genome_id,
        generation.secondary_genome_name,
        generation.model,
        generation.output,
        generation.parsed_html,
        generation.favorited ? 1 : 0,
        generation.created_at,
        generation.parent_id,
        generation.motif_id
      );

      db.prepare(`
        UPDATE generations
        SET recipe_id = ?, blend_config_json = ?, variation_distance = ?, board_status = ?, style_patch_id = ?
        WHERE id = ?
      `).run(recipeId, blendConfigJson, resolvedVariationDistance, "candidate", stylePatchId, generation.id);

      // Bump motif updated_at
      if (motifId) {
        db.prepare("UPDATE motifs SET updated_at = ? WHERE id = ?").run(Date.now(), motifId);
      }

      // Send final
      res.write(
        `event: variant_done\ndata: ${JSON.stringify(generation)}\n\n`
      );
    } catch (err) {
      console.error(`Variant ${i} failed:`, err);
      res.write(
        `event: variant_error\ndata: ${JSON.stringify({
          id: variantId,
          error: String(err),
        })}\n\n`
      );
    }
  });

  await Promise.allSettled(promises);
  res.write("data: [DONE]\n\n");
  res.end();
});

// --- Favorites ---

app.patch("/api/generations/:id/favorite", (req, res) => {
  const { id } = req.params;
  const { favorited } = req.body;
  db.prepare("UPDATE generations SET favorited = ? WHERE id = ?").run(
    favorited ? 1 : 0,
    id
  );
  res.json({ ok: true });
});

app.delete("/api/generations/:id", (req, res) => {
  db.prepare("DELETE FROM generations WHERE id = ?").run(req.params.id);
  res.json({ ok: true });
});

app.patch("/api/generations/:id/board", (req, res) => {
  const { id } = req.params;
  const status = normalizeBoardStatus(req.body?.status);
  const notes = typeof req.body?.notes === "string" ? req.body.notes : "";
  const before = db.prepare(
    "SELECT motif_id, board_status, notes, prompt FROM generations WHERE id = ?"
  ).get(id) as { motif_id: string; board_status: string; notes: string; prompt: string } | undefined;
  const result = db
    .prepare("UPDATE generations SET board_status = ?, notes = ? WHERE id = ?")
    .run(status, notes, id);
  if (result.changes === 0) {
    res.status(404).json({ error: "Generation not found" });
    return;
  }
  if (before?.motif_id) {
    db.prepare("UPDATE motifs SET updated_at = ? WHERE id = ?").run(Date.now(), before.motif_id);
    if (normalizeBoardStatus(before.board_status) !== status) {
      logBoardEvent({
        motifId: before.motif_id,
        generationId: id,
        eventType: "board_status_changed",
        summary: `Moved "${compactEventText(before.prompt)}" to ${status}`,
        metadata: { from: before.board_status || "candidate", to: status },
      });
    }
    if ((before.notes || "") !== notes) {
      logBoardEvent({
        motifId: before.motif_id,
        generationId: id,
        eventType: "board_notes_updated",
        summary: `Updated notes for "${compactEventText(before.prompt)}"`,
        metadata: { status, has_notes: Boolean(notes.trim()) },
      });
    }
  }
  res.json({ ok: true, board_status: status, notes });
});

app.get("/api/generations/:id/quality-score", (req, res) => {
  const row = db
    .prepare("SELECT quality_score_json FROM generations WHERE id = ?")
    .get(req.params.id) as { quality_score_json: string } | undefined;
  if (!row) {
    res.status(404).json({ error: "Generation not found" });
    return;
  }
  res.json(safeJsonParse<QualityScore | null>(row.quality_score_json, null));
});

app.post("/api/generations/:id/quality-score", (req, res) => {
  const row = db
    .prepare("SELECT parsed_html FROM generations WHERE id = ?")
    .get(req.params.id) as { parsed_html: string } | undefined;
  if (!row) {
    res.status(404).json({ error: "Generation not found" });
    return;
  }

  const baseScore = scoreGeneratedHtml(row.parsed_html);
  const score = mergeRuntimeQualityAudit(baseScore, req.body?.runtimeAudit);
  db.prepare("UPDATE generations SET quality_score_json = ? WHERE id = ?").run(
    JSON.stringify(score),
    req.params.id
  );
  res.json(score);
});

app.post("/api/generations/:id/handoff", (req, res) => {
  const { id } = req.params;
  const row = db
    .prepare("SELECT * FROM generations WHERE id = ?")
    .get(id) as (Generation & {
      blend_config_json?: string;
      quality_score_json?: string;
      board_status?: string;
      notes?: string;
      style_patch_id?: string;
    }) | undefined;
  if (!row) {
    res.status(404).json({ error: "Generation not found" });
    return;
  }

  const stylePatch = getStylePatchRow(row.style_patch_id);
  const handoff = buildProductionHandoffProject({
    generation: row as HandoffGeneration,
    componentName: req.body?.componentName,
    stylePatch,
  });

  const exportId = crypto.randomUUID();
  const exportFormat = req.body?.format === "zip" ? "zip" : "manifest";
  db.prepare(`
    INSERT INTO handoff_exports (id, generation_id, format, manifest_json, created_at)
    VALUES (?, ?, ?, ?, ?)
  `).run(exportId, row.id, exportFormat, JSON.stringify(handoff.manifest), handoff.manifest.created_at);
  db.prepare("UPDATE generations SET board_status = ? WHERE id = ?").run("exported", row.id);

  if (exportFormat === "zip") {
    const zip = createStoredZip(handoff.files);
    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="motif-handoff-${row.id.slice(0, 8)}.zip"`
    );
    res.send(zip);
    return;
  }

  res.json({ id: exportId, ...handoff.manifest, files: handoff.files });
});

// --- Thumbnails (pre-cached shader textures) ---

app.put("/api/generations/:id/thumbnail", (req, res) => {
  const { id } = req.params;
  const { thumbnail } = req.body;
  if (!thumbnail || typeof thumbnail !== "string") {
    res.status(400).json({ error: "thumbnail (base64 string) required" });
    return;
  }
  db.prepare("UPDATE generations SET thumbnail = ? WHERE id = ?").run(thumbnail, id);
  res.json({ ok: true });
});

// --- Style Dropper ---

app.post("/api/style-drop", async (req, res) => {
  const providerConfig = getProviderConfig(db);

  if (providerConfig.provider === "openrouter" && !providerConfig.apiKey) {
    res.status(400).json({
      error: "OpenRouter API key not configured. Go to Settings to add it.",
    });
    return;
  }

  const { contentGenerationId, styleGenerationId, motifId: requestedMotifId } = req.body;

  if (!contentGenerationId || !styleGenerationId) {
    res.status(400).json({ error: "Both contentGenerationId and styleGenerationId are required." });
    return;
  }

  const contentGen = db.prepare("SELECT * FROM generations WHERE id = ?").get(contentGenerationId) as Generation | undefined;
  const styleGen = db.prepare("SELECT * FROM generations WHERE id = ?").get(styleGenerationId) as Generation | undefined;

  if (!contentGen || !styleGen) {
    res.status(404).json({ error: "One or both generations not found." });
    return;
  }

  // Read style dropper settings (model + system prompt)
  const sdModelRow = db.prepare("SELECT value FROM settings WHERE key = 'styleDropperModel'").get() as { value: string } | undefined;
  const sdPromptRow = db.prepare("SELECT value FROM settings WHERE key = 'styleDropperSystemPrompt'").get() as { value: string } | undefined;

  const resolvedModel = sdModelRow?.value || "anthropic/claude-sonnet-4";
  const resolvedSystemPrompt = sdPromptRow?.value || DEFAULT_STYLE_DROPPER_PROMPT;
  const resolvedTemp = 0.7;

  // Construct the user message
  const userMessage = `## CONTENT SOURCE (keep this layout and content):\n<content_html>\n${contentGen.parsed_html}\n</content_html>\n\n## STYLE SOURCE (apply this visual design):\n<style_html>\n${styleGen.parsed_html}\n</style_html>\n\nRestyle the CONTENT SOURCE using the visual design language of the STYLE SOURCE. Return ONLY the complete HTML.`;

  const variantId = newVariantId();
  const prompt = `[style-drop] content:${contentGenerationId.slice(0, 8)} style:${styleGenerationId.slice(0, 8)}`;

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  res.write(
    `event: variant_start\ndata: ${JSON.stringify({
      id: variantId,
      index: 0,
      expandedPrompt: userMessage.slice(0, 200) + "...",
      genomeId: "",
      genomeName: "Style Drop",
    })}\n\n`
  );

  try {
    const { response: fetchPromise } = streamVariant({
      expandedPrompt: userMessage,
      genomeId: "01",
      model: resolvedModel,
      temperature: resolvedTemp,
      provider: providerConfig,
      customSystemPrompt: resolvedSystemPrompt,
    });

    const streamRes = await fetchPromise;
    if (!streamRes.ok) {
      const errText = await streamRes.text();
      throw new Error(`LLM API error: ${streamRes.status} - ${errText}`);
    }

    const reader = streamRes.body?.getReader();
    if (!reader) throw new Error("No stream body");

    const decoder = new TextDecoder();
    let fullOutput = "";
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6).trim();
        if (data === "[DONE]") continue;

        try {
          const chunk = JSON.parse(data);
          const delta = chunk.choices?.[0]?.delta?.content;
          if (delta) {
            fullOutput += delta;
            res.write(
              `event: variant_chunk\ndata: ${JSON.stringify({
                id: variantId,
                chunk: delta,
              })}\n\n`
            );
          }
        } catch {
          // skip malformed
        }
      }
    }

    const parsedHtml = wrapHTML(extractHTML(fullOutput));
    const styleDropMotifId = requestedMotifId || (contentGen as Generation & { motif_id?: string }).motif_id || "";
    const generation: Generation = {
      id: variantId,
      prompt,
      expanded_prompt: userMessage.slice(0, 500),
      system_prompt: resolvedSystemPrompt === DEFAULT_STYLE_DROPPER_PROMPT ? "[style-dropper:default]" : resolvedSystemPrompt,
      genome_id: "",
      genome_name: "Style Drop",
      secondary_genome_id: "",
      secondary_genome_name: "",
      model: resolvedModel,
      output: fullOutput,
      parsed_html: parsedHtml,
      favorited: false,
      created_at: Date.now(),
      parent_id: contentGenerationId,
      motif_id: styleDropMotifId,
    };

    const insert = db.prepare(`
      INSERT INTO generations (id, prompt, expanded_prompt, system_prompt, genome_id, genome_name, secondary_genome_id, secondary_genome_name, model, output, parsed_html, favorited, created_at, parent_id, motif_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insert.run(
      generation.id,
      generation.prompt,
      generation.expanded_prompt,
      generation.system_prompt,
      generation.genome_id,
      generation.genome_name,
      generation.secondary_genome_id,
      generation.secondary_genome_name,
      generation.model,
      generation.output,
      generation.parsed_html,
      generation.favorited ? 1 : 0,
      generation.created_at,
      generation.parent_id,
      generation.motif_id
    );

    // Bump motif updated_at
    if (styleDropMotifId) {
      db.prepare("UPDATE motifs SET updated_at = ? WHERE id = ?").run(Date.now(), styleDropMotifId);
    }

    res.write(
      `event: variant_done\ndata: ${JSON.stringify(generation)}\n\n`
    );
  } catch (err) {
    console.error("Style drop failed:", err);
    res.write(
      `event: variant_error\ndata: ${JSON.stringify({
        id: variantId,
        error: String(err),
      })}\n\n`
    );
  }

  res.write("data: [DONE]\n\n");
  res.end();
});

// --- Edit ---

app.post("/api/edit", async (req, res) => {
  const providerConfig = getProviderConfig(db);

  if (providerConfig.provider === "openrouter" && !providerConfig.apiKey) {
    res.status(400).json({
      error: "OpenRouter API key not configured. Go to Settings to add it.",
    });
    return;
  }

  const { generationId, instruction, target } = req.body;

  if (!generationId || !instruction) {
    res.status(400).json({ error: "Both generationId and instruction are required." });
    return;
  }

  const parentGen = db.prepare("SELECT * FROM generations WHERE id = ?").get(generationId) as Generation | undefined;

  if (!parentGen) {
    res.status(404).json({ error: "Generation not found." });
    return;
  }

  const modelRow = db.prepare("SELECT value FROM settings WHERE key = 'model'").get() as { value: string } | undefined;
  const resolvedModel = modelRow?.value || "anthropic/claude-sonnet-4";
  const resolvedTemp = 0.7;

  const scopedInstruction = buildDirectEditInstruction(String(instruction), target);
  const isDirectEdit = scopedInstruction !== String(instruction);
  const userMessage = `## EXISTING DESIGN:\n<source_html>\n${parentGen.parsed_html}\n</source_html>\n\n## EDIT INSTRUCTION:\n${scopedInstruction}\n\nApply the edit to the existing design. Return ONLY the complete HTML.`;

  const variantId = newVariantId();
  const prompt = `${isDirectEdit ? "[direct-edit]" : "[edit]"} ${instruction}`;

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  res.write(
    `event: variant_start\ndata: ${JSON.stringify({
      id: variantId,
      index: 0,
      expandedPrompt: scopedInstruction,
      genomeId: parentGen.genome_id || "",
      genomeName: parentGen.genome_name || "Edit",
    })}\n\n`
  );

  try {
    const { response: fetchPromise } = streamVariant({
      expandedPrompt: userMessage,
      genomeId: parentGen.genome_id || "01",
      model: resolvedModel,
      temperature: resolvedTemp,
      provider: providerConfig,
      customSystemPrompt: DEFAULT_EDIT_PROMPT,
    });

    const streamRes = await fetchPromise;
    if (!streamRes.ok) {
      const errText = await streamRes.text();
      throw new Error(`LLM API error: ${streamRes.status} - ${errText}`);
    }

    const reader = streamRes.body?.getReader();
    if (!reader) throw new Error("No stream body");

    const decoder = new TextDecoder();
    let fullOutput = "";
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6).trim();
        if (data === "[DONE]") continue;

        try {
          const chunk = JSON.parse(data);
          const delta = chunk.choices?.[0]?.delta?.content;
          if (delta) {
            fullOutput += delta;
            res.write(
              `event: variant_chunk\ndata: ${JSON.stringify({
                id: variantId,
                chunk: delta,
              })}\n\n`
            );
          }
        } catch {
          // skip malformed
        }
      }
    }

    const parsedHtml = wrapHTML(extractHTML(fullOutput));
    const editMotifId = (parentGen as Generation & { motif_id?: string }).motif_id || "";
    const generation: Generation = {
      id: variantId,
      prompt,
      expanded_prompt: scopedInstruction,
      system_prompt: isDirectEdit ? "[edit:direct-manipulation]" : "[edit:default]",
      genome_id: parentGen.genome_id || "",
      genome_name: parentGen.genome_name || "Edit",
      secondary_genome_id: "",
      secondary_genome_name: "",
      model: resolvedModel,
      output: fullOutput,
      parsed_html: parsedHtml,
      favorited: false,
      created_at: Date.now(),
      parent_id: generationId,
      motif_id: editMotifId,
    };

    const insert = db.prepare(`
      INSERT INTO generations (id, prompt, expanded_prompt, system_prompt, genome_id, genome_name, secondary_genome_id, secondary_genome_name, model, output, parsed_html, favorited, created_at, parent_id, motif_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insert.run(
      generation.id,
      generation.prompt,
      generation.expanded_prompt,
      generation.system_prompt,
      generation.genome_id,
      generation.genome_name,
      generation.secondary_genome_id,
      generation.secondary_genome_name,
      generation.model,
      generation.output,
      generation.parsed_html,
      generation.favorited ? 1 : 0,
      generation.created_at,
      generation.parent_id,
      generation.motif_id
    );

    // Bump motif updated_at
    if (editMotifId) {
      db.prepare("UPDATE motifs SET updated_at = ? WHERE id = ?").run(Date.now(), editMotifId);
    }

    res.write(
      `event: variant_done\ndata: ${JSON.stringify(generation)}\n\n`
    );
  } catch (err) {
    console.error("Edit failed:", err);
    res.write(
      `event: variant_error\ndata: ${JSON.stringify({
        id: variantId,
        error: String(err),
      })}\n\n`
    );
  }

  res.write("data: [DONE]\n\n");
  res.end();
});

// --- Reorganize ---

app.post("/api/reorganize", async (req, res) => {
  const providerConfig = getProviderConfig(db);

  if (providerConfig.provider === "openrouter" && !providerConfig.apiKey) {
    res.status(400).json({
      error: "OpenRouter API key not configured. Go to Settings to add it.",
    });
    return;
  }

  const { generationId, motifId: requestedMotifId } = req.body;

  if (!generationId) {
    res.status(400).json({ error: "generationId is required." });
    return;
  }

  const parentGen = db.prepare("SELECT * FROM generations WHERE id = ?").get(generationId) as Generation | undefined;

  if (!parentGen) {
    res.status(404).json({ error: "Generation not found." });
    return;
  }

  const modelRow = db.prepare("SELECT value FROM settings WHERE key = 'model'").get() as { value: string } | undefined;
  const resolvedModel = modelRow?.value || "anthropic/claude-sonnet-4";
  const resolvedTemp = 0.9;

  const userMessage = `## SOURCE DESIGN (reorganize the layout):\n<source_html>\n${parentGen.parsed_html}\n</source_html>\n\nProduce a meaningfully different layout arrangement of this design. Keep all content and visual styling identical. Return ONLY the complete HTML.`;

  const variantId = newVariantId();
  const prompt = `[reorganize] source:${generationId.slice(0, 8)}`;

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  res.write(
    `event: variant_start\ndata: ${JSON.stringify({
      id: variantId,
      index: 0,
      expandedPrompt: "Reorganizing layout...",
      genomeId: parentGen.genome_id || "",
      genomeName: parentGen.genome_name || "Reorganize",
    })}\n\n`
  );

  try {
    const { response: fetchPromise } = streamVariant({
      expandedPrompt: userMessage,
      genomeId: parentGen.genome_id || "01",
      model: resolvedModel,
      temperature: resolvedTemp,
      provider: providerConfig,
      customSystemPrompt: DEFAULT_REORGANIZE_PROMPT,
    });

    const streamRes = await fetchPromise;
    if (!streamRes.ok) {
      const errText = await streamRes.text();
      throw new Error(`LLM API error: ${streamRes.status} - ${errText}`);
    }

    const reader = streamRes.body?.getReader();
    if (!reader) throw new Error("No stream body");

    const decoder = new TextDecoder();
    let fullOutput = "";
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6).trim();
        if (data === "[DONE]") continue;

        try {
          const chunk = JSON.parse(data);
          const delta = chunk.choices?.[0]?.delta?.content;
          if (delta) {
            fullOutput += delta;
            res.write(
              `event: variant_chunk\ndata: ${JSON.stringify({
                id: variantId,
                chunk: delta,
              })}\n\n`
            );
          }
        } catch {
          // skip malformed
        }
      }
    }

    const parsedHtml = wrapHTML(extractHTML(fullOutput));
    const reorganizeMotifId = requestedMotifId || (parentGen as Generation & { motif_id?: string }).motif_id || "";
    const generation: Generation = {
      id: variantId,
      prompt,
      expanded_prompt: "Reorganize layout",
      system_prompt: "[reorganize:default]",
      genome_id: parentGen.genome_id || "",
      genome_name: parentGen.genome_name || "Reorganize",
      secondary_genome_id: "",
      secondary_genome_name: "",
      model: resolvedModel,
      output: fullOutput,
      parsed_html: parsedHtml,
      favorited: false,
      created_at: Date.now(),
      parent_id: generationId,
      motif_id: reorganizeMotifId,
    };

    const insert = db.prepare(`
      INSERT INTO generations (id, prompt, expanded_prompt, system_prompt, genome_id, genome_name, secondary_genome_id, secondary_genome_name, model, output, parsed_html, favorited, created_at, parent_id, motif_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insert.run(
      generation.id,
      generation.prompt,
      generation.expanded_prompt,
      generation.system_prompt,
      generation.genome_id,
      generation.genome_name,
      generation.secondary_genome_id,
      generation.secondary_genome_name,
      generation.model,
      generation.output,
      generation.parsed_html,
      generation.favorited ? 1 : 0,
      generation.created_at,
      generation.parent_id,
      generation.motif_id
    );

    // Bump motif updated_at
    if (reorganizeMotifId) {
      db.prepare("UPDATE motifs SET updated_at = ? WHERE id = ?").run(Date.now(), reorganizeMotifId);
    }

    res.write(
      `event: variant_done\ndata: ${JSON.stringify(generation)}\n\n`
    );
  } catch (err) {
    console.error("Reorganize failed:", err);
    res.write(
      `event: variant_error\ndata: ${JSON.stringify({
        id: variantId,
        error: String(err),
      })}\n\n`
    );
  }

  res.write("data: [DONE]\n\n");
  res.end();
});

// --- Vary ---

app.post("/api/vary", async (req, res) => {
  const providerConfig = getProviderConfig(db);

  if (providerConfig.provider === "openrouter" && !providerConfig.apiKey) {
    res.status(400).json({
      error: "OpenRouter API key not configured. Go to Settings to add it.",
    });
    return;
  }

  const {
    sourceGenerationId,
    batchSize = 1,
    strength = 0.5,
    variationDistance,
    motifId: requestedMotifId,
  } = req.body;

  if (!sourceGenerationId) {
    res.status(400).json({ error: "sourceGenerationId is required." });
    return;
  }

  const sourceGen = db
    .prepare("SELECT * FROM generations WHERE id = ?")
    .get(sourceGenerationId) as Generation | undefined;

  if (!sourceGen) {
    res.status(404).json({ error: "Source generation not found." });
    return;
  }
  const sourceStylePatch = getStylePatchRow(sourceGen.style_patch_id);

  const modelRow = db
    .prepare("SELECT value FROM settings WHERE key = 'model'")
    .get() as { value: string } | undefined;
  const resolvedModel = modelRow?.value || "anthropic/claude-sonnet-4";
  const resolvedTemp = 0.5 + strength * 0.7; // 0.5 (subtle) to 1.2 (strong)
  const resolvedVariationDistance =
    typeof variationDistance === "string" && variationDistance.trim()
      ? variationDistance.trim()
      : strength < 0.33
        ? "near"
        : strength < 0.66
          ? "mid"
          : "far";

  // Build variation instruction based on strength tier
  let variationInstruction: string;
  if (strength < 0.33) {
    variationInstruction =
      "Create a close variation — same layout and structure, subtle changes to colors, spacing, typography, and micro-details.";
  } else if (strength < 0.66) {
    variationInstruction =
      "Create a moderate variation — same concept, but explore different color palettes, component arrangements, and visual details.";
  } else {
    variationInstruction =
      "Create a bold reinterpretation — same purpose, but reimagine the layout, visual approach, and component design.";
  }

  const varyMotifId =
    requestedMotifId ||
    (sourceGen as Generation & { motif_id?: string }).motif_id ||
    "";
  const variationBoardMemory = getMotifBoardMemory(varyMotifId);
  const priorContext = [
    variationBoardMemory
      ? `Board memory for this motif:\n${variationBoardMemory}`
      : "",
    `The user wants a variation of an existing design.\n\n${variationInstruction}\n\nOriginal prompt: "${sourceGen.prompt}"\n\nExpand this into a new, distinct specification that varies from the original.`,
  ].filter(Boolean).join("\n\n");

  // Source generation as conversation history so the LLM sees what to vary from
  const history: ConversationTurn[] = [
    {
      prompt: sourceGen.prompt,
      expandedPrompt: sourceGen.expanded_prompt || sourceGen.prompt,
      html: sourceGen.parsed_html,
    },
  ];

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  const insert = db.prepare(`
    INSERT INTO generations (id, prompt, expanded_prompt, system_prompt, genome_id, genome_name, secondary_genome_id, secondary_genome_name, model, output, parsed_html, favorited, created_at, parent_id, motif_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const clampedBatch = Math.max(1, Math.min(4, batchSize));

  const promises = Array.from({ length: clampedBatch }, async (_, i) => {
    const variantId = newVariantId();

    res.write(
      `event: variant_expanding\ndata: ${JSON.stringify({
        id: variantId,
        index: i,
      })}\n\n`
    );

    try {
      // Re-expand the prompt with variation instructions
      let expandedPrompt = sourceGen.prompt;
      const genomeId = sourceGen.genome_id || "01";
      const genomeName = sourceGen.genome_name || "";

      try {
        const result = await expandPrompt({
          prompt: sourceGen.prompt,
          model: resolvedModel,
          provider: providerConfig,
          genomeId,
          priorContext,
        });
        expandedPrompt = result.expanded;
      } catch (err) {
        console.error(`Vary expansion ${i} failed, using original:`, err);
      }

      res.write(
        `event: variant_start\ndata: ${JSON.stringify({
          id: variantId,
          index: i,
          expandedPrompt,
          genomeId,
          genomeName,
        })}\n\n`
      );

      // Stream the variant with source as conversation history
      const { response: fetchPromise } = streamVariant({
        expandedPrompt,
        genomeId,
        secondaryGenomeId: sourceGen.secondary_genome_id || undefined,
        model: resolvedModel,
        temperature: resolvedTemp,
        provider: providerConfig,
        history,
        stylePatchPrompt: sourceStylePatch?.prompt_patch,
      });

      const streamRes = await fetchPromise;
      if (!streamRes.ok) {
        const errText = await streamRes.text();
        throw new Error(`LLM API error: ${streamRes.status} - ${errText}`);
      }

      const reader = streamRes.body?.getReader();
      if (!reader) throw new Error("No stream body");

      const decoder = new TextDecoder();
      let fullOutput = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") continue;

          try {
            const chunk = JSON.parse(data);
            const delta = chunk.choices?.[0]?.delta?.content;
            if (delta) {
              fullOutput += delta;
              res.write(
                `event: variant_chunk\ndata: ${JSON.stringify({
                  id: variantId,
                  chunk: delta,
                })}\n\n`
              );
            }
          } catch {
            // skip malformed
          }
        }
      }

      const parsedHtml = wrapHTML(extractHTML(fullOutput));
      const generation: Generation = {
        id: variantId,
        prompt: sourceGen.prompt,
        expanded_prompt: expandedPrompt,
        system_prompt: "[vary]",
        genome_id: genomeId,
        genome_name: genomeName,
        secondary_genome_id: sourceGen.secondary_genome_id || "",
        secondary_genome_name: sourceGen.secondary_genome_name || "",
        model: resolvedModel,
        output: fullOutput,
        parsed_html: parsedHtml,
        favorited: false,
        created_at: Date.now(),
        parent_id: sourceGenerationId,
        motif_id: varyMotifId,
        variation_distance: resolvedVariationDistance,
        board_status: "candidate",
        style_patch_id: sourceStylePatch?.id ?? "",
      };

      insert.run(
        generation.id,
        generation.prompt,
        generation.expanded_prompt,
        generation.system_prompt,
        generation.genome_id,
        generation.genome_name,
        generation.secondary_genome_id,
        generation.secondary_genome_name,
        generation.model,
        generation.output,
        generation.parsed_html,
        generation.favorited ? 1 : 0,
        generation.created_at,
        generation.parent_id,
        generation.motif_id
      );

      db.prepare(`
        UPDATE generations
        SET variation_distance = ?, board_status = ?, style_patch_id = ?
        WHERE id = ?
      `).run(resolvedVariationDistance, "candidate", sourceStylePatch?.id ?? "", generation.id);

      if (varyMotifId) {
        db.prepare("UPDATE motifs SET updated_at = ? WHERE id = ?").run(
          Date.now(),
          varyMotifId
        );
      }

      res.write(
        `event: variant_done\ndata: ${JSON.stringify(generation)}\n\n`
      );
    } catch (err) {
      console.error(`Vary variant ${i} failed:`, err);
      res.write(
        `event: variant_error\ndata: ${JSON.stringify({
          id: variantId,
          error: String(err),
        })}\n\n`
      );
    }
  });

  await Promise.allSettled(promises);
  res.write("data: [DONE]\n\n");
  res.end();
});

// --- Compare Mode ---

app.post("/api/compare", async (req, res) => {
  const providerConfig = getProviderConfig(db);

  if (providerConfig.provider === "openrouter" && !providerConfig.apiKey) {
    res.status(400).json({
      error: "OpenRouter API key not configured. Go to Settings to add it.",
    });
    return;
  }

  const {
    prompt,
    model,
    temperature,
    genomeId: requestedGenomeId,
  } = req.body;

  if (!prompt || typeof prompt !== "string") {
    res.status(400).json({ error: "prompt is required" });
    return;
  }

  const resolvedModel = model || "anthropic/claude-sonnet-4";
  const resolvedTemp = temperature ?? 0.9;

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  // Search for curated images (shared across both variants)
  let curatedImages = "";
  const pexelsKeyRow = db
    .prepare("SELECT value FROM settings WHERE key = 'pexelsApiKey'")
    .get() as { value: string } | undefined;
  const unsplashKeyRow = db
    .prepare("SELECT value FROM settings WHERE key = 'unsplashAccessKey'")
    .get() as { value: string } | undefined;
  if (pexelsKeyRow?.value || unsplashKeyRow?.value) {
    try {
      const images = await searchImages({
        query: prompt,
        pexelsApiKey: pexelsKeyRow?.value,
        accessKey: unsplashKeyRow?.value,
        count: 8,
      });
      curatedImages = formatImagesForPrompt(images);
    } catch (err) {
      console.error("Image search failed, continuing without:", err);
    }
  }

  // Generate two variants in parallel: raw and genome
  const promises = [
    // Variant 0: RAW — no expansion, minimal system prompt
    (async () => {
      const variantId = newVariantId();

      res.write(
        `event: variant_expanding\ndata: ${JSON.stringify({
          id: variantId,
          index: 0,
          compareRole: "raw",
        })}\n\n`
      );

      try {
        // Send variant_start immediately (no expansion step)
        res.write(
          `event: variant_start\ndata: ${JSON.stringify({
            id: variantId,
            index: 0,
            expandedPrompt: prompt,
            genomeId: "",
            genomeName: "",
            compareRole: "raw",
          })}\n\n`
        );

        const { response: fetchPromise } = streamVariant({
          expandedPrompt: prompt,
          genomeId: "01", // fallback, won't matter with custom prompt
          model: resolvedModel,
          temperature: resolvedTemp,
          provider: providerConfig,
          customSystemPrompt: RAW_COMPARE_PROMPT,
          curatedImages,
        });

        const streamRes = await fetchPromise;
        if (!streamRes.ok) {
          const errText = await streamRes.text();
          throw new Error(`LLM API error: ${streamRes.status} - ${errText}`);
        }

        const reader = streamRes.body?.getReader();
        if (!reader) throw new Error("No stream body");

        const decoder = new TextDecoder();
        let fullOutput = "";
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6).trim();
            if (data === "[DONE]") continue;

            try {
              const chunk = JSON.parse(data);
              const delta = chunk.choices?.[0]?.delta?.content;
              if (delta) {
                fullOutput += delta;
                res.write(
                  `event: variant_chunk\ndata: ${JSON.stringify({
                    id: variantId,
                    chunk: delta,
                  })}\n\n`
                );
              }
            } catch {
              // skip malformed
            }
          }
        }

        const parsedHtml = wrapHTML(extractHTML(fullOutput));
        // No DB write — send result for client to optionally save
        res.write(
          `event: variant_done\ndata: ${JSON.stringify({
            id: variantId,
            prompt,
            expanded_prompt: prompt,
            system_prompt: "[compare:raw]",
            genome_id: "",
            genome_name: "",
            secondary_genome_id: "",
            secondary_genome_name: "",
            model: resolvedModel,
            output: fullOutput,
            parsed_html: parsedHtml,
            favorited: false,
            created_at: Date.now(),
            parent_id: "",
            motif_id: "",
            compare_role: "raw",
          })}\n\n`
        );
      } catch (err) {
        console.error("Compare raw variant failed:", err);
        res.write(
          `event: variant_error\ndata: ${JSON.stringify({
            id: variantId,
            error: String(err),
            compareRole: "raw",
          })}\n\n`
        );
      }
    })(),

    // Variant 1: GENOME — full pipeline
    (async () => {
      const variantId = newVariantId();

      res.write(
        `event: variant_expanding\ndata: ${JSON.stringify({
          id: variantId,
          index: 1,
          compareRole: "genome",
        })}\n\n`
      );

      try {
        let expandedPrompt = prompt;
        let genomeId = requestedGenomeId || "";
        let genomeName = "";

        // Run prompt expansion with genome selection
        try {
          const result = await expandPrompt({
            prompt,
            model: resolvedModel,
            provider: providerConfig,
            genomeId: requestedGenomeId || undefined,
          });
          expandedPrompt = result.expanded;
          genomeId = result.genomeId;
          genomeName = result.genomeName;
        } catch (err) {
          console.error("Compare genome expansion failed, using original:", err);
          genomeId = requestedGenomeId || "01";
          genomeName = genomeId;
        }

        res.write(
          `event: variant_start\ndata: ${JSON.stringify({
            id: variantId,
            index: 1,
            expandedPrompt,
            genomeId,
            genomeName,
            compareRole: "genome",
          })}\n\n`
        );

        const { response: fetchPromise } = streamVariant({
          expandedPrompt,
          genomeId: genomeId || "01",
          model: resolvedModel,
          temperature: resolvedTemp,
          provider: providerConfig,
          curatedImages,
        });

        const streamRes = await fetchPromise;
        if (!streamRes.ok) {
          const errText = await streamRes.text();
          throw new Error(`LLM API error: ${streamRes.status} - ${errText}`);
        }

        const reader = streamRes.body?.getReader();
        if (!reader) throw new Error("No stream body");

        const decoder = new TextDecoder();
        let fullOutput = "";
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6).trim();
            if (data === "[DONE]") continue;

            try {
              const chunk = JSON.parse(data);
              const delta = chunk.choices?.[0]?.delta?.content;
              if (delta) {
                fullOutput += delta;
                res.write(
                  `event: variant_chunk\ndata: ${JSON.stringify({
                    id: variantId,
                    chunk: delta,
                  })}\n\n`
                );
              }
            } catch {
              // skip malformed
            }
          }
        }

        const parsedHtml = wrapHTML(extractHTML(fullOutput));
        res.write(
          `event: variant_done\ndata: ${JSON.stringify({
            id: variantId,
            prompt,
            expanded_prompt: expandedPrompt,
            system_prompt: `[compare:genome:${genomeId}]`,
            genome_id: genomeId,
            genome_name: genomeName,
            secondary_genome_id: "",
            secondary_genome_name: "",
            model: resolvedModel,
            output: fullOutput,
            parsed_html: parsedHtml,
            favorited: false,
            created_at: Date.now(),
            parent_id: "",
            motif_id: "",
            compare_role: "genome",
          })}\n\n`
        );
      } catch (err) {
        console.error("Compare genome variant failed:", err);
        res.write(
          `event: variant_error\ndata: ${JSON.stringify({
            id: variantId,
            error: String(err),
            compareRole: "genome",
          })}\n\n`
        );
      }
    })(),
  ];

  await Promise.allSettled(promises);
  res.write("data: [DONE]\n\n");
  res.end();
});

// --- Screenshot-to-UI ---

app.post("/api/generate-from-image", async (req, res) => {
  const providerConfig = getProviderConfig(db);

  if (providerConfig.provider === "openrouter" && !providerConfig.apiKey) {
    res.status(400).json({
      error: "OpenRouter API key not configured. Go to Settings to add it.",
    });
    return;
  }

  const {
    image, // base64 data URL (data:image/png;base64,...)
    prompt: userPrompt = "",
    model,
    temperature,
    batchSize = 4,
    genomeId: requestedGenomeId,
    motifId = "",
    stylePatchId: rawStylePatchId = "",
  } = req.body;

  if (!image || typeof image !== "string") {
    res.status(400).json({ error: "image (base64 data URL) is required" });
    return;
  }

  const requestedStylePatchId =
    typeof rawStylePatchId === "string" ? rawStylePatchId.trim() : "";
  const stylePatch = getStylePatchRow(requestedStylePatchId);
  if (requestedStylePatchId && !stylePatch) {
    res.status(404).json({ error: "Style patch not found" });
    return;
  }
  const stylePatchId = stylePatch?.id ?? "";
  const resolvedModel = model || "anthropic/claude-sonnet-4";
  const resolvedTemp = temperature ?? 0.9;

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  // Step 1: Use vision model to describe the UI in the screenshot
  let uiDescription = "";
  try {
    const describeMessages = [
      {
        role: "system" as const,
        content: "You are a UI analyst. Describe the UI shown in this screenshot in detail: layout structure, components, colors, typography, spacing, interactions visible. Be specific and thorough. Your description will be used to recreate this UI.",
      },
      {
        role: "user" as const,
        content: [
          {
            type: "image_url",
            image_url: { url: image },
          },
          {
            type: "text",
            text: userPrompt
              ? `Describe this UI screenshot in detail. The user also adds: "${userPrompt}"`
              : "Describe this UI screenshot in detail so it can be recreated.",
          },
        ],
      },
    ];

    const { url, init } = buildFetchOptions(providerConfig, {
      model: resolvedModel,
      messages: describeMessages,
      temperature: 0.3,
      max_tokens: 1500,
    });

    const describeRes = await fetch(url, init);
    if (!describeRes.ok) {
      const errText = await describeRes.text();
      throw new Error(`Vision API error: ${describeRes.status} - ${errText}`);
    }

    const describeData = await describeRes.json();
    uiDescription = describeData.choices?.[0]?.message?.content?.trim() ?? "";

    if (!uiDescription) throw new Error("No description generated from screenshot");
  } catch (err) {
    console.error("Screenshot description failed:", err);
    res.write(
      `event: variant_error\ndata: ${JSON.stringify({
        id: "screenshot-error",
        error: `Failed to analyze screenshot: ${err}`,
      })}\n\n`
    );
    res.write("data: [DONE]\n\n");
    res.end();
    return;
  }

  // Step 2: Use the description as a prompt and run through normal generation pipeline
  const effectivePrompt = userPrompt
    ? `${uiDescription}\n\nAdditional requirements: ${userPrompt}`
    : uiDescription;
  const screenshotBoardMemory = getMotifBoardMemory(motifId);
  const screenshotPriorContext = screenshotBoardMemory
    ? `Board memory for this motif:\n${screenshotBoardMemory}`
    : undefined;

  const insert = db.prepare(`
    INSERT INTO generations (id, prompt, expanded_prompt, system_prompt, genome_id, genome_name, secondary_genome_id, secondary_genome_name, model, output, parsed_html, favorited, created_at, parent_id, motif_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  // Search for curated images
  let curatedImages = "";
  const pexelsKeyRow = db
    .prepare("SELECT value FROM settings WHERE key = 'pexelsApiKey'")
    .get() as { value: string } | undefined;
  const unsplashKeyRow = db
    .prepare("SELECT value FROM settings WHERE key = 'unsplashAccessKey'")
    .get() as { value: string } | undefined;
  if (pexelsKeyRow?.value || unsplashKeyRow?.value) {
    try {
      const searchQuery = userPrompt || effectivePrompt.slice(0, 100);
      const images = await searchImages({
        query: searchQuery,
        pexelsApiKey: pexelsKeyRow?.value,
        accessKey: unsplashKeyRow?.value,
        count: 8,
      });
      curatedImages = formatImagesForPrompt(images);
    } catch (err) {
      console.error("Image search failed, continuing without:", err);
    }
  }

  const promises = Array.from({ length: batchSize }, async (_, i) => {
    const variantId = newVariantId();

    res.write(
      `event: variant_expanding\ndata: ${JSON.stringify({ id: variantId, index: i })}\n\n`
    );

    try {
      let expandedPrompt = effectivePrompt;
      let genomeId = requestedGenomeId || "";
      let genomeName = "";

      try {
        const result = await expandPrompt({
          prompt: effectivePrompt,
          model: resolvedModel,
          provider: providerConfig,
          genomeId: requestedGenomeId || undefined,
          priorContext: screenshotPriorContext,
        });
        expandedPrompt = result.expanded;
        genomeId = result.genomeId;
        genomeName = result.genomeName;
      } catch (err) {
        console.error(`Screenshot expansion ${i} failed:`, err);
        genomeId = requestedGenomeId || "01";
        genomeName = genomeId;
      }

      res.write(
        `event: variant_start\ndata: ${JSON.stringify({
          id: variantId,
          index: i,
          expandedPrompt,
          genomeId,
          genomeName,
        })}\n\n`
      );

      const { response: fetchPromise } = streamVariant({
        expandedPrompt,
        genomeId: genomeId || "01",
        model: resolvedModel,
        temperature: resolvedTemp,
        provider: providerConfig,
        curatedImages,
        stylePatchPrompt: stylePatch?.prompt_patch,
      });

      const streamRes = await fetchPromise;
      if (!streamRes.ok) {
        const errText = await streamRes.text();
        throw new Error(`LLM API error: ${streamRes.status} - ${errText}`);
      }

      const reader = streamRes.body?.getReader();
      if (!reader) throw new Error("No stream body");

      const decoder = new TextDecoder();
      let fullOutput = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") continue;
          try {
            const chunk = JSON.parse(data);
            const delta = chunk.choices?.[0]?.delta?.content;
            if (delta) {
              fullOutput += delta;
              res.write(
                `event: variant_chunk\ndata: ${JSON.stringify({ id: variantId, chunk: delta })}\n\n`
              );
            }
          } catch { /* skip */ }
        }
      }

      const parsedHtml = wrapHTML(extractHTML(fullOutput));
      const now = Date.now();
      const displayPrompt = userPrompt || "[screenshot-to-ui]";
      insert.run(
        variantId, displayPrompt, expandedPrompt, `[screenshot:${genomeId}]`,
        genomeId, genomeName, "", "", resolvedModel,
        fullOutput, parsedHtml, 0, now, "", motifId
      );
      db.prepare("UPDATE generations SET style_patch_id = ? WHERE id = ?").run(
        stylePatchId,
        variantId
      );

      const gen = {
        id: variantId, prompt: displayPrompt, expanded_prompt: expandedPrompt,
        system_prompt: `[screenshot:${genomeId}]`, genome_id: genomeId, genome_name: genomeName,
        secondary_genome_id: "", secondary_genome_name: "", model: resolvedModel,
        output: fullOutput, parsed_html: parsedHtml, favorited: false,
        created_at: now, parent_id: "", motif_id: motifId, thumbnail: "", style_patch_id: stylePatchId,
      };

      res.write(`event: variant_done\ndata: ${JSON.stringify(gen)}\n\n`);
    } catch (err) {
      console.error(`Screenshot variant ${i} failed:`, err);
      res.write(
        `event: variant_error\ndata: ${JSON.stringify({ id: variantId, error: String(err) })}\n\n`
      );
    }
  });

  await Promise.allSettled(promises);
  res.write("data: [DONE]\n\n");
  res.end();
});

// --- Batch Genome Compare ---

app.post("/api/compare-batch", async (req, res) => {
  const providerConfig = getProviderConfig(db);

  if (providerConfig.provider === "openrouter" && !providerConfig.apiKey) {
    res.status(400).json({
      error: "OpenRouter API key not configured. Go to Settings to add it.",
    });
    return;
  }

  const {
    prompt,
    genomeIds,
    model,
    temperature,
  } = req.body;

  if (!prompt || typeof prompt !== "string") {
    res.status(400).json({ error: "prompt is required" });
    return;
  }

  if (!Array.isArray(genomeIds) || genomeIds.length < 2 || genomeIds.length > 8) {
    res.status(400).json({ error: "genomeIds must be an array of 2-8 genome IDs" });
    return;
  }

  const resolvedModel = model || "anthropic/claude-sonnet-4";
  const resolvedTemp = temperature ?? 0.9;

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  // Search for curated images (shared across all variants)
  let curatedImages = "";
  const pexelsKeyRow = db
    .prepare("SELECT value FROM settings WHERE key = 'pexelsApiKey'")
    .get() as { value: string } | undefined;
  const unsplashKeyRow = db
    .prepare("SELECT value FROM settings WHERE key = 'unsplashAccessKey'")
    .get() as { value: string } | undefined;
  if (pexelsKeyRow?.value || unsplashKeyRow?.value) {
    try {
      const images = await searchImages({
        query: prompt,
        pexelsApiKey: pexelsKeyRow?.value,
        accessKey: unsplashKeyRow?.value,
        count: 8,
      });
      curatedImages = formatImagesForPrompt(images);
    } catch (err) {
      console.error("Image search failed, continuing without:", err);
    }
  }

  // Generate one variant per genome in parallel
  const promises = genomeIds.map((genomeId: string, index: number) =>
    (async () => {
      const variantId = newVariantId();

      res.write(
        `event: variant_expanding\ndata: ${JSON.stringify({
          id: variantId,
          index,
          compareRole: genomeId,
        })}\n\n`
      );

      try {
        let expandedPrompt = prompt;
        let genomeName = genomeId;

        // Run prompt expansion with the specific genome
        try {
          const result = await expandPrompt({
            prompt,
            model: resolvedModel,
            provider: providerConfig,
            genomeId,
          });
          expandedPrompt = result.expanded;
          genomeName = result.genomeName;
        } catch (err) {
          console.error(`Batch compare expansion failed for ${genomeId}:`, err);
        }

        res.write(
          `event: variant_start\ndata: ${JSON.stringify({
            id: variantId,
            index,
            expandedPrompt,
            genomeId,
            genomeName,
            compareRole: genomeId,
          })}\n\n`
        );

        const { response: fetchPromise } = streamVariant({
          expandedPrompt,
          genomeId,
          model: resolvedModel,
          temperature: resolvedTemp,
          provider: providerConfig,
          curatedImages,
        });

        const streamRes = await fetchPromise;
        if (!streamRes.ok) {
          const errText = await streamRes.text();
          throw new Error(`LLM API error: ${streamRes.status} - ${errText}`);
        }

        const reader = streamRes.body?.getReader();
        if (!reader) throw new Error("No stream body");

        const decoder = new TextDecoder();
        let fullOutput = "";
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6).trim();
            if (data === "[DONE]") continue;

            try {
              const chunk = JSON.parse(data);
              const delta = chunk.choices?.[0]?.delta?.content;
              if (delta) {
                fullOutput += delta;
                res.write(
                  `event: variant_chunk\ndata: ${JSON.stringify({
                    id: variantId,
                    chunk: delta,
                  })}\n\n`
                );
              }
            } catch {
              // skip malformed
            }
          }
        }

        const parsedHtml = wrapHTML(extractHTML(fullOutput));
        res.write(
          `event: variant_done\ndata: ${JSON.stringify({
            id: variantId,
            prompt,
            expanded_prompt: expandedPrompt,
            system_prompt: `[compare:batch:${genomeId}]`,
            genome_id: genomeId,
            genome_name: genomeName,
            secondary_genome_id: "",
            secondary_genome_name: "",
            model: resolvedModel,
            output: fullOutput,
            parsed_html: parsedHtml,
            favorited: false,
            created_at: Date.now(),
            parent_id: "",
            motif_id: "",
            compare_role: genomeId,
          })}\n\n`
        );
      } catch (err) {
        console.error(`Batch compare variant failed for ${genomeId}:`, err);
        res.write(
          `event: variant_error\ndata: ${JSON.stringify({
            id: variantId,
            error: String(err),
            compareRole: genomeId,
          })}\n\n`
        );
      }
    })()
  );

  await Promise.allSettled(promises);
  res.write("data: [DONE]\n\n");
  res.end();
});

// Save a compare result to the DB (user-initiated)
app.post("/api/compare/save", (req, res) => {
  const {
    prompt,
    expanded_prompt = "",
    system_prompt = "",
    genome_id = "",
    genome_name = "",
    secondary_genome_id = "",
    secondary_genome_name = "",
    model = "",
    output = "",
    parsed_html = "",
    compare_role = "",
    motifId = "",
  } = req.body;

  if (!parsed_html) {
    res.status(400).json({ error: "parsed_html is required" });
    return;
  }

  const id = crypto.randomUUID();
  const now = Date.now();

  db.prepare(`
    INSERT INTO generations (id, prompt, expanded_prompt, system_prompt, genome_id, genome_name, secondary_genome_id, secondary_genome_name, model, output, parsed_html, favorited, created_at, parent_id, motif_id, compare_role)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    id, prompt, expanded_prompt, system_prompt, genome_id, genome_name,
    secondary_genome_id, secondary_genome_name, model, output, parsed_html,
    0, now, "", motifId, compare_role
  );

  res.json({
    id,
    prompt,
    expanded_prompt,
    system_prompt,
    genome_id,
    genome_name,
    secondary_genome_id,
    secondary_genome_name,
    model,
    output,
    parsed_html,
    favorited: false,
    created_at: now,
    parent_id: "",
    motif_id: motifId,
    compare_role,
    thumbnail: "",
  });
});

// --- Styles ---

app.get("/api/styles", (_req, res) => {
  const rows = db
    .prepare("SELECT * FROM styles ORDER BY created_at DESC")
    .all();
  res.json(rows);
});

app.post("/api/styles", (req, res) => {
  const { id, name, tokens_json } = req.body;
  db.prepare(
    "INSERT INTO styles (id, name, tokens_json, created_at) VALUES (?, ?, ?, ?)"
  ).run(id, name, tokens_json, Date.now());
  res.json({ ok: true });
});

// --- Framework Export ---

app.post("/api/generations/:id/export", async (req, res) => {
  const { id } = req.params;
  const { framework } = req.body;

  if (!["react", "vue", "svelte"].includes(framework)) {
    res.status(400).json({ error: "framework must be react, vue, or svelte" });
    return;
  }

  const gen = db
    .prepare("SELECT parsed_html FROM generations WHERE id = ?")
    .get(id) as { parsed_html: string } | undefined;

  if (!gen) {
    res.status(404).json({ error: "Generation not found" });
    return;
  }

  const providerConfig = getProviderConfig(db);
  const modelRow = db
    .prepare("SELECT value FROM settings WHERE key = 'model'")
    .get() as { value: string } | undefined;
  const model = modelRow?.value || "anthropic/claude-sonnet-4";

  const frameworkPrompts: Record<string, string> = {
    react: `Convert this HTML to a React component using TypeScript and Tailwind CSS.
- Create a single functional component with proper props interface
- Use React hooks where appropriate (useState, useEffect)
- Convert inline event handlers to React event handlers
- Keep all Tailwind classes as-is
- Export the component as default
- Return ONLY the .tsx file content, no explanation`,
    vue: `Convert this HTML to a Vue 3 Single File Component (SFC) with <script setup lang="ts">.
- Use Composition API with defineProps
- Convert inline event handlers to Vue event handlers
- Keep all Tailwind classes as-is
- Return ONLY the .vue file content, no explanation`,
    svelte: `Convert this HTML to a Svelte component.
- Use TypeScript with <script lang="ts">
- Convert inline event handlers to Svelte event handlers
- Keep all Tailwind classes as-is
- Export props with export let
- Return ONLY the .svelte file content, no explanation`,
  };

  try {
    const { url, init } = buildFetchOptions(providerConfig, {
      model,
      messages: [
        { role: "system", content: frameworkPrompts[framework] },
        { role: "user", content: gen.parsed_html },
      ],
      temperature: 0.3,
      max_tokens: 8000,
    });

    const response = await fetch(url, init);
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`LLM error: ${response.status} - ${errText}`);
    }

    const data = await response.json();
    const code = data.choices?.[0]?.message?.content?.trim() ?? "";

    res.json({ framework, code });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

// --- Design Token Export ---

app.post("/api/generations/:id/extract-tokens", async (req, res) => {
  const { id } = req.params;
  const { format } = req.body; // "css" | "json" | "tailwind"

  const gen = db
    .prepare("SELECT parsed_html FROM generations WHERE id = ?")
    .get(id) as { parsed_html: string } | undefined;

  if (!gen) {
    res.status(404).json({ error: "Generation not found" });
    return;
  }

  const providerConfig = getProviderConfig(db);
  const modelRow = db
    .prepare("SELECT value FROM settings WHERE key = 'model'")
    .get() as { value: string } | undefined;
  const model = modelRow?.value || "anthropic/claude-sonnet-4";

  const formatInstructions: Record<string, string> = {
    css: `Return CSS custom properties (variables) in a :root block. Group by category (colors, typography, spacing, borders, shadows). Example:
:root {
  /* Colors */
  --color-primary: #3b82f6;
  --color-background: #ffffff;
  /* Typography */
  --font-family-heading: 'Inter', sans-serif;
}`,
    json: `Return a JSON object with tokens grouped by category. Example:
{
  "colors": { "primary": "#3b82f6", "background": "#ffffff" },
  "typography": { "fontFamily": { "heading": "'Inter', sans-serif" } },
  "spacing": { "sm": "0.5rem", "md": "1rem" }
}`,
    tailwind: `Return a Tailwind CSS config extend object. Example:
{
  "colors": { "primary": "#3b82f6" },
  "fontFamily": { "heading": ["Inter", "sans-serif"] },
  "spacing": { "18": "4.5rem" }
}`,
  };

  try {
    const { url, init } = buildFetchOptions(providerConfig, {
      model,
      messages: [
        {
          role: "system",
          content: `You are a design token extractor. Analyze the HTML/CSS and extract all design tokens (colors, typography, spacing, borders, shadows, border-radius). ${formatInstructions[format || "json"]}\n\nReturn ONLY the ${format || "json"} output, no explanation.`,
        },
        { role: "user", content: gen.parsed_html },
      ],
      temperature: 0.1,
      max_tokens: 3000,
    });

    const response = await fetch(url, init);
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`LLM error: ${response.status} - ${errText}`);
    }

    const data = await response.json();
    const tokens = data.choices?.[0]?.message?.content?.trim() ?? "";

    res.json({ format: format || "json", tokens });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

// --- Components Library ---

app.get("/api/components", (_req, res) => {
  const rows = db
    .prepare("SELECT * FROM components ORDER BY created_at DESC")
    .all();
  res.json(rows);
});

app.post("/api/components", (req, res) => {
  const { name, html, source_generation_id, genome_id } = req.body;
  if (!html) {
    res.status(400).json({ error: "html is required" });
    return;
  }
  const id = crypto.randomUUID();
  const now = Date.now();

  db.prepare(
    "INSERT INTO components (id, name, html, source_generation_id, genome_id, created_at) VALUES (?, ?, ?, ?, ?, ?)"
  ).run(id, name || "Untitled", html, source_generation_id || "", genome_id || "", now);

  res.json({ id, name: name || "Untitled", html, source_generation_id, genome_id, created_at: now });
});

app.delete("/api/components/:id", (req, res) => {
  db.prepare("DELETE FROM components WHERE id = ?").run(req.params.id);
  res.json({ ok: true });
});

// --- CSS Overrides ---

app.patch("/api/generations/:id/css", (req, res) => {
  const { css } = req.body;
  db.prepare("UPDATE generations SET css_overrides = ? WHERE id = ?").run(css || "", req.params.id);
  res.json({ ok: true });
});

// --- Smart Genome Recommendations ---

app.get("/api/genomes/recommended", (req, res) => {
  const prompt = (req.query.prompt as string) || "";

  // Get favorite rate per genome
  const favoriteRates = db.prepare(`
    SELECT genome_id, genome_name,
      COUNT(*) as total,
      SUM(CASE WHEN favorited = 1 THEN 1 ELSE 0 END) as favs,
      MAX(created_at) as last_used
    FROM generations
    WHERE genome_id != ''
    GROUP BY genome_id
  `).all() as Array<{
    genome_id: string;
    genome_name: string;
    total: number;
    favs: number;
    last_used: number;
  }>;

  const now = Date.now();
  const allGenomes = listGenomes();

  // Build scores
  const scored = allGenomes.map((g) => {
    const stats = favoriteRates.find((r) => r.genome_id === g.id);
    const favoriteRate = stats ? stats.favs / stats.total : 0;
    const recency = stats
      ? Math.max(0, 1 - (now - stats.last_used) / (30 * 24 * 60 * 60 * 1000)) // decay over 30 days
      : 0;

    // Keyword match against prompt
    let keywordMatch = 0;
    if (prompt) {
      const lower = prompt.toLowerCase();
      for (const kw of g.keywords) {
        if (lower.includes(kw.toLowerCase())) keywordMatch += 0.2;
      }
      keywordMatch = Math.min(1, keywordMatch);
    }

    const score = 0.6 * favoriteRate + 0.3 * keywordMatch + 0.1 * recency;

    return {
      id: g.id,
      name: g.name,
      keywords: g.keywords,
      score,
      favoriteRate: Math.round(favoriteRate * 100),
      totalGenerations: stats?.total || 0,
    };
  });

  // Sort by score descending, return top 5
  scored.sort((a, b) => b.score - a.score);
  res.json(scored.slice(0, 5));
});

// --- Generation Lineage ---

app.get("/api/generations/:id/lineage", (req, res) => {
  const { id } = req.params;

  // Find the root of the lineage tree by walking up parent_id
  let rootId = id;
  const visited = new Set<string>();
  while (true) {
    if (visited.has(rootId)) break;
    visited.add(rootId);
    const row = db
      .prepare("SELECT parent_id FROM generations WHERE id = ?")
      .get(rootId) as { parent_id: string } | undefined;
    if (!row || !row.parent_id) break;
    rootId = row.parent_id;
  }

  // Now collect all descendants from the root using iterative BFS
  const tree: Array<{
    id: string;
    prompt: string;
    genome_id: string;
    genome_name: string;
    parent_id: string;
    created_at: number;
    thumbnail: string;
  }> = [];
  const queue = [rootId];
  const seen = new Set<string>();

  while (queue.length > 0) {
    const currentId = queue.shift()!;
    if (seen.has(currentId)) continue;
    seen.add(currentId);

    const node = db
      .prepare(
        "SELECT id, prompt, genome_id, genome_name, parent_id, created_at, thumbnail FROM generations WHERE id = ?"
      )
      .get(currentId) as
      | {
          id: string;
          prompt: string;
          genome_id: string;
          genome_name: string;
          parent_id: string;
          created_at: number;
          thumbnail: string;
        }
      | undefined;

    if (node) {
      tree.push(node);
      // Find children
      const children = db
        .prepare("SELECT id FROM generations WHERE parent_id = ?")
        .all(currentId) as { id: string }[];
      for (const child of children) {
        queue.push(child.id);
      }
    }
  }

  res.json(tree);
});

// --- Prompt Templates ---

app.get("/api/templates", (_req, res) => {
  const rows = db
    .prepare("SELECT * FROM prompt_templates ORDER BY created_at DESC")
    .all();
  res.json(rows);
});

app.post("/api/templates", (req, res) => {
  const { name, template_text, variables } = req.body;
  if (!name || !template_text) {
    res.status(400).json({ error: "name and template_text are required" });
    return;
  }

  const id = crypto.randomUUID();
  const now = Date.now();
  const vars = variables || [];

  db.prepare(
    "INSERT INTO prompt_templates (id, name, template_text, variables_json, created_at) VALUES (?, ?, ?, ?, ?)"
  ).run(id, name, template_text, JSON.stringify(vars), now);

  res.json({ id, name, template_text, variables_json: JSON.stringify(vars), created_at: now });
});

app.put("/api/templates/:id", (req, res) => {
  const { name, template_text, variables } = req.body;
  const vars = variables || [];

  db.prepare(
    "UPDATE prompt_templates SET name = ?, template_text = ?, variables_json = ? WHERE id = ?"
  ).run(name, template_text, JSON.stringify(vars), req.params.id);

  res.json({ ok: true });
});

app.delete("/api/templates/:id", (req, res) => {
  db.prepare("DELETE FROM prompt_templates WHERE id = ?").run(req.params.id);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`motif api running on http://localhost:${PORT}`);
});
