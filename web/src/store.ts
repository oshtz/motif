import { create } from "zustand";
import { apiFetch } from "./api";

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
}

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
      streamingVariants: state.streamingVariants.map((v) =>
        v.id === id ? { ...v, status: "done" as const, generation: gen } : v
      ),
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
}));

interface SettingsState {
  provider: string;
  providerBaseUrl: string;
  apiKey: string;
  apiKeyConfigured: boolean;
  apiKeyPreview: string;
  pexelsApiKey: string;
  pexelsApiKeyConfigured: boolean;
  pexelsApiKeyPreview: string;
  unsplashAccessKey: string;
  unsplashAccessKeyConfigured: boolean;
  unsplashAccessKeyPreview: string;
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
  loaded: boolean;
  setField: <K extends keyof SettingsState>(
    key: K,
    value: SettingsState[K]
  ) => void;
  loadSettings: () => Promise<void>;
  saveSettings: () => Promise<void>;
  loadGenomes: () => Promise<void>;
  loadModels: () => Promise<void>;
}

export const useSettingsStore = create<SettingsState>((set, get) => ({
  provider: "openrouter",
  providerBaseUrl: "",
  apiKey: "",
  apiKeyConfigured: false,
  apiKeyPreview: "",
  pexelsApiKey: "",
  pexelsApiKeyConfigured: false,
  pexelsApiKeyPreview: "",
  unsplashAccessKey: "",
  unsplashAccessKeyConfigured: false,
  unsplashAccessKeyPreview: "",
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
  loaded: false,

  setField: (key, value) => set({ [key]: value } as Partial<SettingsState>),

  loadSettings: async () => {
    try {
      const res = await apiFetch("/api/settings");
      const data = await res.json();
      set({
        provider: data.provider ?? "openrouter",
        providerBaseUrl: data.providerBaseUrl ?? "",
        apiKey: "",
        apiKeyConfigured: data.apiKeyConfigured === "true",
        apiKeyPreview: data.apiKeyPreview ?? "",
        pexelsApiKey: "",
        pexelsApiKeyConfigured: data.pexelsApiKeyConfigured === "true",
        pexelsApiKeyPreview: data.pexelsApiKeyPreview ?? "",
        unsplashAccessKey: "",
        unsplashAccessKeyConfigured: data.unsplashAccessKeyConfigured === "true",
        unsplashAccessKeyPreview: data.unsplashAccessKeyPreview ?? "",
        model: data.model ?? "anthropic/claude-sonnet-4",
        systemPrompt: data.systemPrompt ?? "",
        genomeId: data.genomeId ?? "",
        shuffle: data.shuffle === "true",
        temperature: parseFloat(data.temperature) || 0.9,
        batchSize: parseInt(data.batchSize) || 4,
        styleDropperModel: data.styleDropperModel ?? "anthropic/claude-sonnet-4",
        styleDropperSystemPrompt: data.styleDropperSystemPrompt ?? "",
        loaded: true,
      });
    } catch {
      set({ loaded: true });
    }
  },

  saveSettings: async () => {
    const { provider, providerBaseUrl, apiKey, apiKeyConfigured, pexelsApiKey, pexelsApiKeyConfigured, unsplashAccessKey, unsplashAccessKeyConfigured, model, systemPrompt, genomeId, shuffle, temperature, batchSize, styleDropperModel, styleDropperSystemPrompt } = get();
    const body: Record<string, string> = {
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
    };
    if (apiKey) body.apiKey = apiKey;
    if (pexelsApiKey) body.pexelsApiKey = pexelsApiKey;
    if (unsplashAccessKey) body.unsplashAccessKey = unsplashAccessKey;
    await apiFetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    set({
      apiKey: "",
      apiKeyConfigured: apiKeyConfigured || Boolean(apiKey),
      pexelsApiKey: "",
      pexelsApiKeyConfigured: pexelsApiKeyConfigured || Boolean(pexelsApiKey),
      unsplashAccessKey: "",
      unsplashAccessKeyConfigured: unsplashAccessKeyConfigured || Boolean(unsplashAccessKey),
    });
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
      const res = await apiFetch("/api/models", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider,
          baseUrl: providerBaseUrl || undefined,
          apiKey: apiKey || undefined,
        }),
      });
      const data = await res.json();
      const models: OpenRouterModel[] = (data.data ?? [])
        .map((m: { id: string; name?: string }) => ({ id: m.id, name: m.name || m.id }))
        .sort((a: OpenRouterModel, b: OpenRouterModel) => a.id.localeCompare(b.id));
      set({ availableModels: models, modelsLoading: false });
    } catch {
      set({ modelsLoading: false });
    }
  },
}));
