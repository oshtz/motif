import type { Generation, Motif } from "./store";
import { measureRuntimeQuality, type RuntimeQualityAudit } from "./quality-runtime";

function apiUrl(path: string): string {
  return path;
}

async function responseError(response: Response): Promise<Error> {
  let message = `${response.status} ${response.statusText}`.trim();
  try {
    const body = await response.clone().json() as { error?: unknown; message?: unknown };
    const detail = body.error ?? body.message;
    if (typeof detail === "string" && detail.trim()) message = detail;
  } catch {
    // Non-JSON failures keep the HTTP status text.
  }
  return new Error(message || "Request failed");
}

export async function apiFetch(input: string, init: RequestInit = {}): Promise<Response> {
  const headers = new Headers(init.headers);
  const sessionToken = window.motifDesktop?.getSessionToken();
  if (sessionToken) headers.set("X-Motif-Session", sessionToken);
  const response = await fetch(apiUrl(input), { ...init, headers });
  if (!response.ok) throw await responseError(response);
  return response;
}

export async function apiJson<T>(input: string, init?: RequestInit): Promise<T> {
  return (await apiFetch(input, init)).json() as Promise<T>;
}

export async function downloadDatabaseBackup(): Promise<void> {
  const response = await apiFetch("/api/database/export");
  const url = URL.createObjectURL(await response.blob());
  const link = document.createElement("a");
  link.href = url;
  link.download = `motif-backup-${new Date().toISOString().slice(0, 10)}.db`;
  link.click();
  URL.revokeObjectURL(url);
}

export async function restoreDatabaseBackup(file: File): Promise<{ restartRequired: true }> {
  return apiJson("/api/database/restore", {
    method: "POST",
    headers: { "Content-Type": "application/octet-stream" },
    body: await file.arrayBuffer(),
  });
}

function normalizeGeneration(r: Record<string, unknown>): Generation {
  return {
    ...(r as unknown as Generation),
    expanded_prompt: (r.expanded_prompt as string) ?? "",
    favorited: Boolean(r.favorited),
    parent_id: (r.parent_id as string) ?? "",
    motif_id: (r.motif_id as string) ?? "",
    recipe_id: (r.recipe_id as string) ?? "",
    blend_config_json: (r.blend_config_json as string) ?? "",
    variation_distance: (r.variation_distance as string) ?? "",
    board_status: (r.board_status as Generation["board_status"]) ?? "candidate",
    notes: (r.notes as string) ?? "",
    quality_score_json: (r.quality_score_json as string) ?? "",
    style_patch_id: (r.style_patch_id as string) ?? "",
    thumbnail: (r.thumbnail as string) ?? "",
  };
}

export async function fetchGenerations(motifId?: string): Promise<Generation[]> {
  return (await fetchGenerationPage(motifId)).items;
}

export interface GenerationPage {
  items: Generation[];
  nextCursor: string | null;
}

export async function fetchGenerationPage(
  motifId?: string,
  cursor?: string,
  limit = 40
): Promise<GenerationPage> {
  const params = new URLSearchParams({ limit: String(limit) });
  if (motifId) params.set("motif_id", motifId);
  if (cursor) params.set("cursor", cursor);
  const payload = await apiJson<Record<string, unknown>[] | { items: Record<string, unknown>[]; nextCursor?: string | null }>(
    `/api/generations?${params}`
  );
  const rows = Array.isArray(payload) ? payload : payload.items;
  return {
    items: rows.map(normalizeGeneration),
    nextCursor: Array.isArray(payload) ? null : payload.nextCursor ?? null,
  };
}

export async function fetchGeneration(id: string): Promise<Generation> {
  return normalizeGeneration(await apiJson<Record<string, unknown>>(`/api/generations/${encodeURIComponent(id)}`));
}

// --- Motifs ---

export async function fetchMotifs(): Promise<Motif[]> {
  const res = await apiFetch("/api/motifs");
  return res.json();
}

export async function createMotif(name: string): Promise<Motif> {
  const res = await apiFetch("/api/motifs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return res.json();
}

export async function renameMotif(id: string, name: string): Promise<void> {
  await apiFetch(`/api/motifs/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
}

export async function deleteMotif(id: string): Promise<void> {
  await apiFetch(`/api/motifs/${id}`, { method: "DELETE" });
}

export interface BoardMemoryResponse {
  motif_id: string;
  board_memory: string;
  board_memory_updated_at: number;
  derived_memory: string;
  style_decision_memory?: string;
  design_system_memory?: string;
  generation_context?: string;
}

export interface BoardMemorySaveResponse {
  ok: true;
  board_memory: string;
  board_memory_updated_at: number;
}

export interface BoardEvent {
  id: string;
  motif_id: string;
  generation_id: string;
  event_type: string;
  summary: string;
  metadata: Record<string, unknown>;
  created_at: number;
}

export interface BoardStyleDecision {
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
}

export async function fetchBoardMemory(motifId: string): Promise<BoardMemoryResponse> {
  const res = await apiFetch(`/api/motifs/${encodeURIComponent(motifId)}/board-memory`);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to load board memory");
  }
  return res.json();
}

export async function refreshBoardMemory(motifId: string): Promise<BoardMemorySaveResponse> {
  const res = await apiFetch(`/api/motifs/${encodeURIComponent(motifId)}/board-memory/refresh`, {
    method: "POST",
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to refresh board memory");
  }
  return res.json();
}

export async function updateBoardMemory(motifId: string, memory: string): Promise<BoardMemorySaveResponse> {
  const res = await apiFetch(`/api/motifs/${encodeURIComponent(motifId)}/board-memory`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ memory }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to save board memory");
  }
  return res.json();
}

export async function fetchBoardEvents(motifId: string): Promise<BoardEvent[]> {
  const res = await apiFetch(`/api/motifs/${encodeURIComponent(motifId)}/board-events`);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to load board events");
  }
  return res.json();
}

export async function fetchBoardStyleDecisions(motifId: string): Promise<BoardStyleDecision[]> {
  const res = await apiFetch(`/api/motifs/${encodeURIComponent(motifId)}/style-decisions`);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to load style decisions");
  }
  return res.json();
}

export async function createBoardStyleDecision(
  motifId: string,
  data: { generationId: string; name?: string; notes?: string }
): Promise<BoardStyleDecision> {
  const res = await apiFetch(`/api/motifs/${encodeURIComponent(motifId)}/style-decisions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to save style decision");
  }
  return res.json();
}

export async function deleteBoardStyleDecision(motifId: string, decisionId: string): Promise<void> {
  const res = await apiFetch(
    `/api/motifs/${encodeURIComponent(motifId)}/style-decisions/${encodeURIComponent(decisionId)}`,
    { method: "DELETE" }
  );
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to remove style decision");
  }
}

export async function saveThumbnail(id: string, thumbnail: string): Promise<void> {
  await apiFetch(`/api/generations/${id}/thumbnail`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ thumbnail }),
  });
}

/** Shared SSE stream reader used by both generate and style-drop endpoints */
export interface SSECallbacks {
  onVariantExpanding?: (id: string, index: number, compareRole?: string) => void;
  onVariantStart: (id: string, expandedPrompt: string, genomeName?: string, compareRole?: string) => void;
  onVariantChunk: (id: string, chunk: string) => void;
  onVariantDone: (gen: Generation) => void;
  onVariantError: (id: string, error: string) => void;
  onError?: (err: string) => void;
}

async function readSSEStream(res: Response, callbacks: SSECallbacks): Promise<void> {
  const reader = res.body?.getReader();
  if (!reader) throw new Error("No response body");

  const decoder = new TextDecoder();
  let buffer = "";
  let currentEvent = "message";
  let completed = false;
  const unfinished = new Set<string>();

  const handleLine = (rawLine: string) => {
    const line = rawLine.replace(/\r$/, "");
    if (line.startsWith("event:")) {
      currentEvent = line.slice(6).trim() || "message";
      return;
    }
    if (!line.startsWith("data:")) return;
    const data = line.slice(5).trim();
    if (data === "[DONE]") {
      completed = true;
      return;
    }

    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(data) as Record<string, unknown>;
    } catch {
      currentEvent = "message";
      return;
    }

    const event = currentEvent;
    currentEvent = "message";
    switch (event) {
      case "variant_expanding":
        callbacks.onVariantExpanding?.(String(parsed.id ?? ""), Number(parsed.index ?? 0), typeof parsed.compareRole === "string" ? parsed.compareRole : undefined);
        break;
      case "variant_start":
        unfinished.add(String(parsed.id ?? ""));
        callbacks.onVariantStart(String(parsed.id ?? ""), String(parsed.expandedPrompt ?? ""), typeof parsed.genomeName === "string" ? parsed.genomeName : undefined, typeof parsed.compareRole === "string" ? parsed.compareRole : undefined);
        break;
      case "variant_chunk":
        callbacks.onVariantChunk(String(parsed.id ?? ""), String(parsed.chunk ?? ""));
        break;
      case "variant_done":
        unfinished.delete(String(parsed.id ?? ""));
        callbacks.onVariantDone(normalizeGeneration(parsed));
        break;
      case "variant_error":
        unfinished.delete(String(parsed.id ?? ""));
        callbacks.onVariantError(String(parsed.id ?? ""), String(parsed.error ?? "Generation failed"));
        break;
      case "error": {
        const message = typeof parsed.error === "string" ? parsed.error : "Generation failed";
        callbacks.onError?.(message);
        throw new Error(message);
      }
    }
  };

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      buffer += decoder.decode();
      if (buffer) buffer.split("\n").forEach(handleLine);
      break;
    }

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";

    for (const line of lines) {
      handleLine(line);
      if (completed) break;
    }
    if (completed) break;
  }

  if (!completed) {
    const message = "Generation stream ended before completion";
    unfinished.forEach((id) => callbacks.onVariantError(id, message));
    callbacks.onError?.(message);
    throw new Error(message);
  }
}

export async function generateStream(
  options: {
    prompt: string;
    systemPrompt?: string;
    genomeId?: string;
    shuffle?: boolean;
    blendConfig?: Array<{ id: string; weight: number; aspect: string }>;
    recipeId?: string;
    variationDistance?: string;
    stylePatchId?: string;
    model?: string;
    temperature?: number;
    batchSize?: number;
    motifId?: string;
  },
  callbacks: SSECallbacks,
  signal?: AbortSignal
): Promise<void> {
  const res = await apiFetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(options),
    signal,
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Generation failed");
  }

  await readSSEStream(res, callbacks);
}

export async function screenshotToUIStream(
  options: {
    image: string; // base64 data URL
    prompt?: string;
    model?: string;
    temperature?: number;
    batchSize?: number;
    genomeId?: string;
    stylePatchId?: string;
    motifId?: string;
  },
  callbacks: SSECallbacks,
  signal?: AbortSignal
): Promise<void> {
  const res = await apiFetch("/api/generate-from-image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(options),
    signal,
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Screenshot-to-UI failed");
  }

  await readSSEStream(res, callbacks);
}

export async function styleDropStream(
  options: {
    contentGenerationId: string;
    styleGenerationId: string;
    motifId?: string;
  },
  callbacks: SSECallbacks,
  signal?: AbortSignal
): Promise<void> {
  const res = await apiFetch("/api/style-drop", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(options),
    signal,
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Style drop failed");
  }

  await readSSEStream(res, callbacks);
}

export async function varyStream(
  options: {
    sourceGenerationId: string;
    batchSize: number;
    strength: number;
    variationDistance?: string;
    motifId?: string;
  },
  callbacks: SSECallbacks,
  signal?: AbortSignal
): Promise<void> {
  const res = await apiFetch("/api/vary", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(options),
    signal,
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Variation failed");
  }

  await readSSEStream(res, callbacks);
}

export async function editStream(
  options: {
    generationId: string;
    instruction: string;
    target?: {
      selector?: string;
      tagName?: string;
      id?: string;
      className?: string;
      role?: string;
      ariaLabel?: string;
      text?: string;
      outerHTML?: string;
    };
  },
  callbacks: SSECallbacks,
  signal?: AbortSignal
): Promise<void> {
  const res = await apiFetch("/api/edit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(options),
    signal,
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Edit failed");
  }

  await readSSEStream(res, callbacks);
}

export async function reorganizeStream(
  options: {
    generationId: string;
    motifId?: string;
  },
  callbacks: SSECallbacks,
  signal?: AbortSignal
): Promise<void> {
  const res = await apiFetch("/api/reorganize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(options),
    signal,
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Reorganize failed");
  }

  await readSSEStream(res, callbacks);
}

// --- Framework Export ---

export async function exportToFramework(
  id: string,
  framework: "react" | "vue" | "svelte"
): Promise<{ framework: string; code: string }> {
  const res = await apiFetch(`/api/generations/${id}/export`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ framework }),
  });
  return res.json();
}

// --- Design Token Export ---

export async function extractTokens(
  id: string,
  format: "css" | "json" | "tailwind"
): Promise<{ format: string; tokens: string }> {
  const res = await apiFetch(`/api/generations/${id}/extract-tokens`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ format }),
  });
  return res.json();
}

// --- Components Library ---

export interface SavedComponent {
  id: string;
  name: string;
  html: string;
  source_generation_id: string;
  genome_id: string;
  created_at: number;
}

export async function fetchComponents(): Promise<SavedComponent[]> {
  const res = await apiFetch("/api/components");
  return res.json();
}

export async function saveComponent(data: {
  name: string;
  html: string;
  source_generation_id: string;
  genome_id: string;
}): Promise<SavedComponent> {
  const res = await apiFetch("/api/components", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteComponent(id: string): Promise<void> {
  await apiFetch(`/api/components/${id}`, { method: "DELETE" });
}

// --- CSS Overrides ---

export async function saveCssOverrides(id: string, css: string): Promise<void> {
  await apiFetch(`/api/generations/${id}/css`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ css }),
  });
}

// --- Design Genome Control ---

export interface BlendEntry {
  id: string;
  weight: number;
  aspect: string;
}

export interface StyleRecipe {
  id: string;
  name: string;
  description: string;
  blend_config_json: string;
  blendConfig: BlendEntry[];
  source_generation_id: string;
  summary: string;
  created_at: number;
  updated_at: number;
}

export async function fetchStyleRecipes(): Promise<StyleRecipe[]> {
  const res = await apiFetch("/api/style-recipes");
  return res.json();
}

export async function createStyleRecipe(data: {
  name: string;
  description?: string;
  blendConfig: BlendEntry[];
  sourceGenerationId?: string;
}): Promise<StyleRecipe> {
  const res = await apiFetch("/api/style-recipes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error((await res.json()).error || "Failed to save recipe");
  return res.json();
}

export async function deleteStyleRecipe(id: string): Promise<void> {
  await apiFetch(`/api/style-recipes/${id}`, { method: "DELETE" });
}

export interface StylePatch {
  id: string;
  name: string;
  source_type: string;
  source_ref: string;
  traits: Record<string, string[]>;
  prompt_patch: string;
  created_at: number;
}

export async function fetchStylePatches(): Promise<StylePatch[]> {
  const res = await apiFetch("/api/style-patches");
  return res.json();
}

export async function extractStylePatch(data: {
  name?: string;
  sourceGenerationId?: string;
  html?: string;
  url?: string;
  image?: string;
}): Promise<StylePatch> {
  const res = await apiFetch("/api/style-patches/extract", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error((await res.json()).error || "Failed to extract style patch");
  return res.json();
}

export async function deleteStylePatch(id: string): Promise<void> {
  await apiFetch(`/api/style-patches/${id}`, { method: "DELETE" });
}

export interface DesignSystem {
  id: string;
  motif_id: string;
  name: string;
  source_type: string;
  source_ref: string;
  tokens: Record<string, unknown>;
  traits: Record<string, string[]>;
  componentRules: string[];
  prompt_patch: string;
  style_patch_id: string;
  active: boolean;
  created_at: number;
  updated_at: number;
}

export async function fetchDesignSystems(motifId?: string): Promise<DesignSystem[]> {
  const params = motifId ? `?motif_id=${encodeURIComponent(motifId)}` : "";
  const res = await apiFetch(`/api/design-systems${params}`);
  if (!res.ok) throw new Error((await res.json()).error || "Failed to load design systems");
  return res.json();
}

export async function ingestDesignSystem(data: {
  motifId?: string;
  name?: string;
  url?: string;
  html?: string;
  image?: string;
  tokenJson?: unknown;
  componentRules?: string;
  active?: boolean;
}): Promise<DesignSystem> {
  const res = await apiFetch("/api/design-systems/ingest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error((await res.json()).error || "Failed to ingest design system");
  return res.json();
}

export async function updateDesignSystem(
  id: string,
  data: { name?: string; active?: boolean }
): Promise<DesignSystem> {
  const res = await apiFetch(`/api/design-systems/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error((await res.json()).error || "Failed to update design system");
  return res.json();
}

export async function deleteDesignSystem(id: string): Promise<void> {
  const res = await apiFetch(`/api/design-systems/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error((await res.json()).error || "Failed to delete design system");
}

export interface QualityScore {
  overall: number;
  categories: Record<string, { score: number; notes: string[] }>;
  runtime_audit?: RuntimeQualityAudit;
  created_at: number;
}

export async function scoreGeneration(id: string, html?: string): Promise<QualityScore> {
  const runtimeAudit = html ? await measureRuntimeQuality(html).catch(() => undefined) : undefined;
  const res = await apiFetch(`/api/generations/${id}/quality-score`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ runtimeAudit }),
  });
  if (!res.ok) throw new Error((await res.json()).error || "Failed to score generation");
  return res.json();
}

export async function updateGenerationBoard(
  id: string,
  data: { status: Generation["board_status"]; notes?: string }
): Promise<void> {
  await apiFetch(`/api/generations/${id}/board`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export interface HandoffManifest {
  id: string;
  generation: Record<string, unknown>;
  quality: QualityScore;
  files: { path: string; content: string }[];
  created_at: number;
}

export async function createHandoffManifest(id: string): Promise<HandoffManifest> {
  const res = await apiFetch(`/api/generations/${id}/handoff`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });
  if (!res.ok) throw new Error((await res.json()).error || "Failed to create handoff");
  return res.json();
}

export async function downloadHandoffZip(id: string): Promise<void> {
  const res = await apiFetch(`/api/generations/${id}/handoff`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ format: "zip" }),
  });
  if (!res.ok) throw new Error((await res.json()).error || "Failed to create handoff zip");
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `motif-handoff-${id.slice(0, 8)}.zip`;
  a.click();
  URL.revokeObjectURL(url);
}

// --- Genome Recommendations ---

export interface GenomeRecommendation {
  id: string;
  name: string;
  keywords: string[];
  score: number;
  favoriteRate: number;
  totalGenerations: number;
}

export async function fetchRecommendedGenomes(prompt?: string): Promise<GenomeRecommendation[]> {
  const params = prompt ? `?prompt=${encodeURIComponent(prompt)}` : "";
  const res = await apiFetch(`/api/genomes/recommended${params}`);
  return res.json();
}

// --- Lineage ---

export interface LineageNode {
  id: string;
  prompt: string;
  genome_id: string;
  genome_name: string;
  parent_id: string;
  created_at: number;
  thumbnail: string;
}

export async function fetchLineage(id: string): Promise<LineageNode[]> {
  const res = await apiFetch(`/api/generations/${id}/lineage`);
  return res.json();
}

// --- Prompt Templates ---

export interface PromptTemplate {
  id: string;
  name: string;
  template_text: string;
  variables_json: string;
  created_at: number;
}

export async function fetchTemplates(): Promise<PromptTemplate[]> {
  const res = await apiFetch("/api/templates");
  return res.json();
}

export async function createTemplate(data: {
  name: string;
  template_text: string;
  variables: string[];
}): Promise<PromptTemplate> {
  const res = await apiFetch("/api/templates", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateTemplate(
  id: string,
  data: { name: string; template_text: string; variables: string[] }
): Promise<void> {
  await apiFetch(`/api/templates/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function deleteTemplate(id: string): Promise<void> {
  await apiFetch(`/api/templates/${id}`, { method: "DELETE" });
}

// --- Analytics ---

export interface AnalyticsData {
  genomeUsage: { genome_id: string; genome_name: string; count: number }[];
  secondaryGenomeUsage: { genome_id: string; genome_name: string; count: number }[];
  modelUsage: { model: string; count: number }[];
  dailyUsage: { day: string; count: number }[];
  totals: { total: number; favorited: number };
  genomeWinRates: { genome_id: string; genome_name: string; total: number; favorited: number; rate: number }[];
  genomeTrends: { genome_id: string; day: string; count: number }[];
}

export async function fetchAnalytics(): Promise<AnalyticsData> {
  const res = await apiFetch("/api/analytics");
  return res.json();
}

export async function toggleFavorite(
  id: string,
  favorited: boolean
): Promise<void> {
  await apiFetch(`/api/generations/${id}/favorite`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ favorited }),
  });
}

export async function deleteGeneration(id: string): Promise<void> {
  await apiFetch(`/api/generations/${id}`, { method: "DELETE" });
}

export function downloadHTML(html: string, filename: string) {
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// --- Compare Mode ---

export async function compareStream(
  options: {
    prompt: string;
    model?: string;
    temperature?: number;
    genomeId?: string;
  },
  callbacks: SSECallbacks
): Promise<void> {
  const res = await apiFetch("/api/compare", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(options),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Compare failed");
  }

  await readSSEStream(res, callbacks);
}

export async function batchCompareStream(
  options: {
    prompt: string;
    genomeIds: string[];
    model?: string;
    temperature?: number;
  },
  callbacks: SSECallbacks
): Promise<void> {
  const res = await apiFetch("/api/compare-batch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(options),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Batch compare failed");
  }

  await readSSEStream(res, callbacks);
}

export async function saveCompareResult(data: {
  prompt: string;
  expanded_prompt: string;
  system_prompt: string;
  genome_id: string;
  genome_name: string;
  model: string;
  output: string;
  parsed_html: string;
  compare_role: string;
}): Promise<Generation> {
  const res = await apiFetch("/api/compare/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const saved = await res.json();
  return {
    ...saved,
    expanded_prompt: saved.expanded_prompt ?? "",
    favorited: Boolean(saved.favorited),
  };
}
