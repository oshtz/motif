import { create } from "zustand";
import { apiFetch, fetchGeneration, fetchGenerationPage } from "./api";

export interface Generation {
  id: string;
  prompt: string;
  expanded_prompt: string;
  system_prompt: string;
  genome_id: string;
  genome_name: string;
  secondary_genome_id: string;
  secondary_genome_name: string;
  model: string;
  output: string;
  parsed_html: string;
  favorited: boolean;
  created_at: number;
  parent_id: string;
  thumbnail: string; // base64 data URL for cached dropper shader texture
  motif_id: string;
  compare_role?: string;
  css_overrides?: string;
  recipe_id?: string;
  blend_config_json?: string;
  variation_distance?: string;
  board_status?: "candidate" | "accepted" | "rejected" | "exported";
  notes?: string;
  quality_score_json?: string;
  style_patch_id?: string;
}

export interface Motif {
  id: string;
  name: string;
  created_at: number;
  updated_at: number;
  board_memory?: string;
  board_memory_updated_at?: number;
}

export interface GenomeMeta {
  id: string;
  name: string;
  keywords: string[];
}

export interface OpenRouterModel {
  id: string;
  name: string;
  description?: string;
  pricing?: { prompt: string; completion: string };
  context_length?: number;
  architecture?: { modality: string; tokenizer: string; instruct_type: string };
}

// A variant that's currently streaming in
export interface StreamingVariant {
  id: string;
  motifId?: string; // which motif/thread this variant belongs to
  expandedPrompt: string;
  code: string; // accumulating raw output
  status: "pending" | "expanding" | "streaming" | "done" | "error";
  error?: string;
  generation?: Generation; // populated when status is "done"
  genomeName?: string; // populated on variant_start
  runId?: string;
  retry?: () => void;
}

const runControllers = new Map<string, AbortController>();
let generationRequest = 0;

interface AppState {
  prompt: string;
  setPrompt: (prompt: string) => void;

  generations: Generation[];
  setGenerations: (generations: Generation[]) => void;
  addGeneration: (gen: Generation) => void;
  updateGenerationFields: (id: string, patch: Partial<Generation>) => void;
  toggleFavorite: (id: string) => void;
  removeGeneration: (id: string) => void;

  // Streaming state
  streamingVariants: StreamingVariant[];
  addStreamingVariant: (id: string, expandedPrompt: string, motifId?: string) => void;
  addPlaceholders: (count: number, motifId?: string) => string[];
  expandingVariant: (placeholderId: string, realId: string) => void;
  replacePlaceholder: (placeholderId: string, realId: string, expandedPrompt: string, genomeName?: string) => void;
  removeStreamingVariant: (id: string) => void;
  appendChunk: (id: string, chunk: string) => void;
  finalizeVariant: (id: string, gen: Generation) => void;
  promoteVariant: (id: string) => void;
  errorVariant: (id: string, error: string) => void;
  clearStreamingVariants: () => void;
  registerRun: (ids: string[], retry?: () => void) => AbortSignal;
  cancelVariant: (id: string) => void;
  retryVariant: (id: string) => void;

  // Stable display ordering
  displayOrder: string[];

  activeGenerations: number;
  startGeneration: () => void;
  endGeneration: () => void;

  selectedId: string | null;
  setSelectedId: (id: string | null) => void;

  activeTab: "gallery" | "preview" | "compare" | "batch-compare" | "board";
  setActiveTab: (tab: "gallery" | "preview" | "compare" | "batch-compare" | "board") => void;

  showSettings: boolean;
  setShowSettings: (v: boolean) => void;

  showFavoritesOnly: boolean;
  setShowFavoritesOnly: (v: boolean) => void;

  showAnalytics: boolean;
  setShowAnalytics: (v: boolean) => void;

  // Style Dropper
  styleDropperMode: boolean;
  styleSourceId: string | null;
  enterDropperMode: (sourceId: string) => void;
  exitDropperMode: () => void;
  dropperHoveredRect: { x: number; y: number; w: number; h: number } | null;
  dropperHoveredTexture: HTMLCanvasElement | null;
  setDropperHover: (rect: { x: number; y: number; w: number; h: number } | null, mouse?: undefined, texture?: HTMLCanvasElement | null) => void;

  // Edit mode
  editMode: boolean;
  editTargetId: string | null;
  enterEditMode: (targetId: string) => void;
  exitEditMode: () => void;

  // Motifs
  motifs: Motif[];
  setMotifs: (motifs: Motif[]) => void;
  addMotif: (motif: Motif) => void;
  removeMotif: (id: string) => void;
  updateMotifName: (id: string, name: string) => void;
  updateMotifFields: (id: string, patch: Partial<Motif>) => void;
  activeMotifId: string | null; // null = "All" tab
  setActiveMotifId: (id: string | null) => void;
  generationNextCursor: string | null;
  generationsLoading: boolean;
  generationsError: string | null;
  loadGenerations: (motifId?: string, append?: boolean) => Promise<void>;
  selectGeneration: (id: string) => Promise<void>;
}

export const useAppStore = create<AppState>((set) => ({
  prompt: "",
  setPrompt: (prompt) => set({ prompt }),

  generations: [],
  displayOrder: [],
  setGenerations: (generations) => {
    const mapped = generations.map((g) => ({
      ...g,
      expanded_prompt: g.expanded_prompt ?? "",
    }));
    set((state) => ({
      generations: mapped,
      displayOrder: [
        // keep any streaming IDs already in displayOrder
        ...state.displayOrder.filter((id) =>
          state.streamingVariants.some((v) => v.id === id)
        ),
        ...mapped.map((g) => g.id),
      ],
    }));
  },
  addGeneration: (gen) =>
    set((state) => ({
      generations: [
        gen,
        ...state.generations.filter((existing) => existing.id !== gen.id),
      ],
      displayOrder: [
        gen.id,
        ...state.displayOrder.filter((id) => id !== gen.id),
      ],
    })),
  updateGenerationFields: (id, patch) =>
    set((state) => ({
      generations: state.generations.map((g) =>
        g.id === id ? { ...g, ...patch } : g
      ),
      streamingVariants: state.streamingVariants.map((variant) =>
        variant.generation?.id === id
          ? { ...variant, generation: { ...variant.generation, ...patch } }
          : variant
      ),
    })),
  toggleFavorite: (id) =>
    set((state) => ({
      generations: state.generations.map((g) =>
        g.id === id ? { ...g, favorited: !g.favorited } : g
      ),
    })),
  removeGeneration: (id) =>
    set((state) => ({
      generations: state.generations.filter((g) => g.id !== id),
      displayOrder: state.displayOrder.filter((did) => did !== id),
    })),

  streamingVariants: [],
  addStreamingVariant: (id, expandedPrompt, motifId) =>
    set((state) => ({
      streamingVariants: [
        ...state.streamingVariants,
        { id, motifId, expandedPrompt, code: "", status: "streaming" },
      ],
      displayOrder: [id, ...state.displayOrder],
    })),
  addPlaceholders: (count, motifId) => {
    const ids = Array.from({ length: count }, () => `ph-${crypto.randomUUID()}`);
    set((state) => ({
      streamingVariants: [
        ...state.streamingVariants,
        ...ids.map((id) => ({
          id,
          motifId,
          expandedPrompt: "",
          code: "",
          status: "pending" as const,
        })),
      ],
      displayOrder: [...ids, ...state.displayOrder],
    }));
    return ids;
  },
  expandingVariant: (placeholderId, realId) =>
    set((state) => ({
      streamingVariants: state.streamingVariants.map((v) =>
        v.id === placeholderId
          ? { ...v, id: realId, status: "expanding" as const }
          : v
      ),
      displayOrder: state.displayOrder.map((id) =>
        id === placeholderId ? realId : id
      ),
    })),
  replacePlaceholder: (placeholderId, realId, expandedPrompt, genomeName) =>
    set((state) => ({
      streamingVariants: state.streamingVariants.map((v) =>
        v.id === placeholderId
          ? { ...v, id: realId, expandedPrompt, status: "streaming" as const, genomeName }
          : v
      ),
      displayOrder: state.displayOrder.map((id) =>
        id === placeholderId ? realId : id
      ),
    })),
  removeStreamingVariant: (id) =>
    set((state) => ({
      streamingVariants: state.streamingVariants.filter((v) => v.id !== id),
      displayOrder: state.displayOrder.filter((did) => did !== id),
    })),
  appendChunk: (id, chunk) =>
    set((state) => ({
      streamingVariants: state.streamingVariants.map((v) =>
        v.id === id ? { ...v, code: v.code + chunk } : v
      ),
    })),
  finalizeVariant: (id, gen) =>
    set((state) => ({
      streamingVariants: state.streamingVariants.filter((v) => v.id !== id),
      generations: [gen, ...state.generations.filter((existing) => existing.id !== gen.id)],
      displayOrder: state.displayOrder.map((displayId) => displayId === id ? gen.id : displayId),
    })),
  promoteVariant: (id) =>
    set((state) => {
      const variant = state.streamingVariants.find((v) => v.id === id);
      if (!variant?.generation) return state;
      return {
        streamingVariants: state.streamingVariants.filter((v) => v.id !== id),
        generations: [variant.generation, ...state.generations],
        // displayOrder stays unchanged — card keeps its grid position
      };
    }),
  errorVariant: (id, error) =>
    set((state) => ({
      streamingVariants: state.streamingVariants.map((v) =>
        v.id === id ? { ...v, status: "error", error } : v
      ),
    })),
  clearStreamingVariants: () =>
    set((state) => {
      const streamingIds = new Set(state.streamingVariants.map((v) => v.id));
      return {
        streamingVariants: [],
        displayOrder: state.displayOrder.filter((id) => !streamingIds.has(id)),
      };
    }),
  registerRun: (ids, retry) => {
    const runId = crypto.randomUUID();
    const controller = new AbortController();
    runControllers.set(runId, controller);
    set((state) => ({
      streamingVariants: state.streamingVariants.map((variant) =>
        ids.includes(variant.id) ? { ...variant, runId, retry } : variant
      ),
    }));
    return controller.signal;
  },
  cancelVariant: (id) => set((state) => {
    const runId = state.streamingVariants.find((variant) => variant.id === id)?.runId;
    if (runId) runControllers.get(runId)?.abort();
    return {
      streamingVariants: state.streamingVariants.map((variant) =>
        variant.runId === runId || variant.id === id
          ? { ...variant, status: "error" as const, error: "Cancelled" }
          : variant
      ),
    };
  }),
  retryVariant: (id) => {
    const variant = useAppStore.getState().streamingVariants.find((item) => item.id === id);
    if (!variant?.retry) return;
    const runId = variant.runId;
    set((state) => {
      const removed = new Set(state.streamingVariants.filter((item) => item.runId === runId || item.id === id).map((item) => item.id));
      return {
        streamingVariants: state.streamingVariants.filter((item) => !removed.has(item.id)),
        displayOrder: state.displayOrder.filter((displayId) => !removed.has(displayId)),
      };
    });
    variant.retry();
  },

  activeGenerations: 0,
  startGeneration: () =>
    set((state) => ({ activeGenerations: state.activeGenerations + 1 })),
  endGeneration: () =>
    set((state) => ({
      activeGenerations: Math.max(0, state.activeGenerations - 1),
    })),

  selectedId: null,
  setSelectedId: (id) =>
    set({ selectedId: id, ...(id ? { activeTab: "preview" as const } : {}) }),

  activeTab: "gallery" as const,
  setActiveTab: (tab) => set({ activeTab: tab }),

  showSettings: false,
  setShowSettings: (v) => set({ showSettings: v }),

  showFavoritesOnly: false,
  setShowFavoritesOnly: (v) => set({ showFavoritesOnly: v }),

  showAnalytics: false,
  setShowAnalytics: (v) => set({ showAnalytics: v }),

  // Style Dropper
  styleDropperMode: false,
  styleSourceId: null,
  enterDropperMode: (sourceId) => set({ styleDropperMode: true, styleSourceId: sourceId }),
  exitDropperMode: () => set({ styleDropperMode: false, styleSourceId: null, dropperHoveredRect: null }),
  dropperHoveredRect: null,
  dropperHoveredTexture: null,
  setDropperHover: (rect, _mouse, texture) => set((s) => ({
    dropperHoveredRect: rect,
    dropperHoveredTexture: texture ?? (rect ? s.dropperHoveredTexture : null),
  })),

  // Edit mode
  editMode: false,
  editTargetId: null,
  enterEditMode: (targetId) => set({ editMode: true, editTargetId: targetId }),
  exitEditMode: () => set({ editMode: false, editTargetId: null }),

  // Motifs
  motifs: [],
  setMotifs: (motifs) => set({ motifs }),
  addMotif: (motif) => set((state) => ({ motifs: [motif, ...state.motifs] })),
  removeMotif: (id) => set((state) => ({
    motifs: state.motifs.filter((m) => m.id !== id),
    // If the deleted motif was active, go back to All
    ...(state.activeMotifId === id ? { activeMotifId: null } : {}),
  })),
  updateMotifName: (id, name) => set((state) => ({
    motifs: state.motifs.map((m) => m.id === id ? { ...m, name } : m),
  })),
  updateMotifFields: (id, patch) => set((state) => ({
    motifs: state.motifs.map((m) => m.id === id ? { ...m, ...patch } : m),
  })),
  activeMotifId: null,
  setActiveMotifId: (id) => set({ activeMotifId: id }),
  generationNextCursor: null,
  generationsLoading: false,
  generationsError: null,
  loadGenerations: async (motifId, append = false) => {
    const request = ++generationRequest;
    const cursor = append ? useAppStore.getState().generationNextCursor ?? undefined : undefined;
    set({ generationsLoading: true, generationsError: null });
    try {
      const page = await fetchGenerationPage(motifId, cursor);
      if (request !== generationRequest || (useAppStore.getState().activeMotifId ?? undefined) !== motifId) return;
      set((state) => {
        const items = append
          ? [...state.generations, ...page.items.filter((item) => !state.generations.some((existing) => existing.id === item.id))]
          : page.items;
        return {
          generations: items,
          displayOrder: append ? [...state.displayOrder, ...page.items.map((item) => item.id)] : page.items.map((item) => item.id),
          generationNextCursor: page.nextCursor,
          generationsLoading: false,
        };
      });
    } catch (error) {
      if (request === generationRequest) set({ generationsLoading: false, generationsError: error instanceof Error ? error.message : "Failed to load generations" });
    }
  },
  selectGeneration: async (id) => {
    const existing = useAppStore.getState().generations.find((generation) => generation.id === id);
    if (!existing?.parsed_html) {
      const full = await fetchGeneration(id);
      useAppStore.getState().updateGenerationFields(id, full);
    }
    set({ selectedId: id, activeTab: "preview" });
  },
}));

interface SettingsState {
  provider: string;
  providerBaseUrl: string;
  apiKey: string;
  apiKeyConfigured: boolean;
  apiKeyPreview: string;
  providerApiKeyConfigured: Record<string, boolean>;
  providerApiKeyPreview: Record<string, string>;
  apiKeyRemoveRequested: boolean;
  pexelsApiKey: string;
  pexelsApiKeyConfigured: boolean;
  pexelsApiKeyPreview: string;
  unsplashAccessKey: string;
  unsplashAccessKeyConfigured: boolean;
  unsplashAccessKeyPreview: string;
  clearPexelsApiKey: boolean;
  clearUnsplashAccessKey: boolean;
  model: string;
  systemPrompt: string;
  genomeId: string; // "" = auto-select, or specific genome ID
  shuffle: boolean; // blend 2 genomes per generation
  availableGenomes: GenomeMeta[];
  availableModels: OpenRouterModel[];
  modelsLoading: boolean;
  temperature: number;
  batchSize: number;
  styleDropperModel: string;
  styleDropperSystemPrompt: string;
  onboardingComplete: boolean;
  loaded: boolean;
  error: string | null;
  setField: <K extends keyof SettingsState>(
    key: K,
    value: SettingsState[K]
  ) => void;
  loadSettings: () => Promise<void>;
  saveSettings: () => Promise<void>;
  completeOnboarding: () => Promise<void>;
  beginDraft: () => void;
  discardDraft: () => void;
  loadGenomes: () => Promise<void>;
  loadModels: () => Promise<void>;
}

let settingsDraft: Partial<SettingsState> | null = null;

export const useSettingsStore = create<SettingsState>((set, get) => ({
  provider: "openrouter",
  providerBaseUrl: "",
  apiKey: "",
  apiKeyConfigured: false,
  apiKeyPreview: "",
  providerApiKeyConfigured: {},
  providerApiKeyPreview: {},
  apiKeyRemoveRequested: false,
  pexelsApiKey: "",
  pexelsApiKeyConfigured: false,
  pexelsApiKeyPreview: "",
  unsplashAccessKey: "",
  unsplashAccessKeyConfigured: false,
  unsplashAccessKeyPreview: "",
  clearPexelsApiKey: false,
  clearUnsplashAccessKey: false,
  model: "anthropic/claude-sonnet-4",
  systemPrompt: "",
  genomeId: "",
  shuffle: false,
  availableGenomes: [],
  availableModels: [],
  modelsLoading: false,
  temperature: 0.9,
  batchSize: 4,
  styleDropperModel: "anthropic/claude-sonnet-4",
  styleDropperSystemPrompt: "",
  onboardingComplete: false,
  loaded: false,
  error: null,

  setField: (key, value) => set({ [key]: value } as Partial<SettingsState>),

  loadSettings: async () => {
    try {
      const res = await apiFetch("/api/settings");
      const data = await res.json();
      const providerSecrets = (data.providerApiKeys ?? {}) as Record<string, { configured?: boolean; preview?: string }>;
      const configured = Object.fromEntries(Object.entries(providerSecrets).map(([key, value]) => [key, Boolean(value.configured)]));
      const previews = Object.fromEntries(Object.entries(providerSecrets).map(([key, value]) => [key, value.preview ?? ""]));
      set({
        provider: data.provider ?? "openrouter",
        providerBaseUrl: data.providerBaseUrl ?? "",
        apiKey: "",
        apiKeyConfigured: data.apiKeyConfigured === "true",
        apiKeyPreview: data.apiKeyPreview ?? "",
        providerApiKeyConfigured: configured,
        providerApiKeyPreview: previews,
        apiKeyRemoveRequested: false,
        pexelsApiKey: "",
        pexelsApiKeyConfigured: data.pexelsApiKeyConfigured === "true",
        pexelsApiKeyPreview: data.pexelsApiKeyPreview ?? "",
        unsplashAccessKey: "",
        unsplashAccessKeyConfigured: data.unsplashAccessKeyConfigured === "true",
        unsplashAccessKeyPreview: data.unsplashAccessKeyPreview ?? "",
        clearPexelsApiKey: false,
        clearUnsplashAccessKey: false,
        model: data.model ?? "anthropic/claude-sonnet-4",
        systemPrompt: data.systemPrompt ?? "",
        genomeId: data.genomeId ?? "",
        shuffle: data.shuffle === "true",
        temperature: parseFloat(data.temperature) || 0.9,
        batchSize: parseInt(data.batchSize) || 4,
        styleDropperModel: data.styleDropperModel ?? "anthropic/claude-sonnet-4",
        styleDropperSystemPrompt: data.styleDropperSystemPrompt ?? "",
        onboardingComplete: data.onboardingComplete === "true",
        loaded: true,
        error: null,
      });
    } catch (error) {
      set({ loaded: true, error: error instanceof Error ? error.message : "Failed to load settings" });
    }
  },

  saveSettings: async () => {
    const { provider, providerBaseUrl, apiKey, apiKeyRemoveRequested, providerApiKeyConfigured, providerApiKeyPreview, pexelsApiKey, pexelsApiKeyConfigured, clearPexelsApiKey, unsplashAccessKey, unsplashAccessKeyConfigured, clearUnsplashAccessKey, model, systemPrompt, genomeId, shuffle, temperature, batchSize, styleDropperModel, styleDropperSystemPrompt, onboardingComplete } = get();
    const body: Record<string, unknown> = {
      provider,
      providerBaseUrl,
      model,
      systemPrompt,
      genomeId,
      shuffle: String(shuffle),
      temperature: String(temperature),
      batchSize: String(batchSize),
      styleDropperModel,
      styleDropperSystemPrompt,
      onboardingComplete: String(onboardingComplete),
    };
    if (apiKey || apiKeyRemoveRequested) body.providerApiKeys = { [provider]: apiKeyRemoveRequested ? null : apiKey };
    if (pexelsApiKey) body.pexelsApiKey = pexelsApiKey;
    if (unsplashAccessKey) body.unsplashAccessKey = unsplashAccessKey;
    if (clearPexelsApiKey) body.clearPexelsApiKey = true;
    if (clearUnsplashAccessKey) body.clearUnsplashAccessKey = true;
    await apiFetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    set({
      apiKey: "",
      apiKeyConfigured: apiKeyRemoveRequested ? false : providerApiKeyConfigured[provider] || Boolean(apiKey),
      providerApiKeyConfigured: { ...providerApiKeyConfigured, [provider]: apiKeyRemoveRequested ? false : providerApiKeyConfigured[provider] || Boolean(apiKey) },
      providerApiKeyPreview: { ...providerApiKeyPreview, [provider]: apiKeyRemoveRequested ? "" : apiKey ? `${apiKey.slice(0, 4)}...${apiKey.slice(-4)}` : providerApiKeyPreview[provider] || "" },
      apiKeyRemoveRequested: false,
      pexelsApiKey: "",
      pexelsApiKeyConfigured: clearPexelsApiKey ? false : pexelsApiKeyConfigured || Boolean(pexelsApiKey),
      clearPexelsApiKey: false,
      unsplashAccessKey: "",
      unsplashAccessKeyConfigured: clearUnsplashAccessKey ? false : unsplashAccessKeyConfigured || Boolean(unsplashAccessKey),
      clearUnsplashAccessKey: false,
      error: null,
    });
    settingsDraft = null;
  },

  completeOnboarding: async () => {
    await apiFetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ onboardingComplete: "true" }),
    });
    set({ onboardingComplete: true });
  },

  beginDraft: () => {
    const state = get();
    settingsDraft = Object.fromEntries(Object.entries(state).filter(([, value]) => typeof value !== "function")) as Partial<SettingsState>;
    set({ error: null });
  },

  discardDraft: () => {
    if (settingsDraft) set(settingsDraft);
    settingsDraft = null;
  },

  loadGenomes: async () => {
    try {
      const res = await apiFetch("/api/genomes");
      const genomes = await res.json();
      set({ availableGenomes: genomes });
    } catch {
      // keep empty
    }
  },

  loadModels: async () => {
    set({ modelsLoading: true });
    try {
      const { provider, providerBaseUrl, apiKey } = get();
      const explicitProbe = Boolean(apiKey || providerBaseUrl);
      const res = await apiFetch(explicitProbe ? "/api/models" : `/api/models?provider=${encodeURIComponent(provider)}`, explicitProbe ? {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ provider, baseUrl: providerBaseUrl || undefined, apiKey: apiKey || undefined }),
      } : undefined);
      const data = await res.json();
      const models: OpenRouterModel[] = (data.data ?? [])
        .map((m: OpenRouterModel) => ({ ...m, name: m.name || m.id }))
        .sort((a: OpenRouterModel, b: OpenRouterModel) => a.id.localeCompare(b.id));
      set({ availableModels: models, modelsLoading: false });
    } catch (error) {
      set({ modelsLoading: false, error: error instanceof Error ? error.message : "Connection failed" });
    }
  },
}));
