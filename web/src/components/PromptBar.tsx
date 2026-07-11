import { lazy, Suspense, useState, useRef, useEffect, useMemo } from "react";
import { useAppStore, useSettingsStore } from "../store";
import { generateStream, editStream, screenshotToUIStream, createMotif, fetchGenerations, fetchRecommendedGenomes, type GenomeRecommendation, type StylePatch } from "../api";
import type { BlendEntry } from "./BlendStudio";
import { buildActiveGenomeSummary, type GenomeChipTone } from "../genome-controls";

const TemplateModal = lazy(() => import("./TemplateModal"));
const BlendStudio = lazy(() => import("./BlendStudio"));
const StylePatchStudio = lazy(() => import("./StylePatchStudio"));

const GENOME_CHIP_TONE_CLASS: Record<GenomeChipTone, string> = {
  auto: "border-white/[0.06] bg-white/[0.025] text-white/45",
  custom: "border-amber-400/20 bg-amber-400/10 text-amber-200/70",
  genome: "border-sky-400/20 bg-sky-400/10 text-sky-100/70",
  blend: "border-violet-400/20 bg-violet-400/10 text-violet-100/70",
  recipe: "border-emerald-400/20 bg-emerald-400/10 text-emerald-100/70",
  patch: "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-100/70",
  distance: "border-orange-400/20 bg-orange-400/10 text-orange-100/70",
};

export default function PromptBar() {
  const {
    prompt,
    setPrompt,
    activeGenerations,
    startGeneration,
    endGeneration,
    addStreamingVariant,
    addPlaceholders,
    expandingVariant,
    replacePlaceholder,
    removeStreamingVariant,
    appendChunk,
    finalizeVariant,
    errorVariant,
    registerRun,
    editMode,
    editTargetId,
    exitEditMode,
    activeMotifId,
    addMotif,
    setActiveMotifId,
    setGenerations,
  } = useAppStore();
  const settings = useSettingsStore();
  const [error, setError] = useState<string | null>(null);
  const [genomeOpen, setGenomeOpen] = useState(false);
  const [templateOpen, setTemplateOpen] = useState(false);
  const [blendOpen, setBlendOpen] = useState(false);
  const [stylePatchOpen, setStylePatchOpen] = useState(false);
  const [activeBlend, setActiveBlend] = useState<BlendEntry[] | null>(null);
  const [activeRecipeId, setActiveRecipeId] = useState<string | undefined>();
  const [activeRecipeName, setActiveRecipeName] = useState("");
  const [activeStylePatch, setActiveStylePatch] = useState<StylePatch | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [recommended, setRecommended] = useState<GenomeRecommendation[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const genomeRef = useRef<HTMLDivElement>(null);
  const availableGenomeCount = settings.availableGenomes.length;
  const loadGenomes = settings.loadGenomes;

  const isGenerating = activeGenerations > 0;
  const runEstimate = useMemo(() => {
    const pricing = settings.availableModels.find((model) => model.id === settings.model)?.pricing;
    if (!pricing) return null;
    const inputRate = Number(pricing.prompt);
    const outputRate = Number(pricing.completion);
    if (!Number.isFinite(inputRate) || !Number.isFinite(outputRate)) return null;
    const calls = settings.batchSize;
    const estimatedInputTokens = 2000 + Math.ceil(prompt.length / 4);
    const estimatedOutputTokens = 4000;
    return {
      calls,
      cost: calls * (estimatedInputTokens * inputRate + estimatedOutputTokens * outputRate),
    };
  }, [prompt.length, settings.availableModels, settings.batchSize, settings.model]);
  const genomeSummary = useMemo(
    () =>
      buildActiveGenomeSummary({
        systemPrompt: settings.systemPrompt,
        genomeId: settings.genomeId,
        shuffle: settings.shuffle,
        activeBlend,
        activeRecipeId,
        activeRecipeName,
        activeStylePatch,
        genomes: settings.availableGenomes,
      }),
    [
      activeBlend,
      activeRecipeId,
      activeRecipeName,
      activeStylePatch,
      settings.availableGenomes,
      settings.genomeId,
      settings.shuffle,
      settings.systemPrompt,
    ]
  );

  const clearBlend = () => {
    setActiveBlend(null);
    setActiveRecipeId(undefined);
    setActiveRecipeName("");
  };

  // Load genomes on mount if needed
  useEffect(() => {
    if (availableGenomeCount === 0) loadGenomes();
  }, [availableGenomeCount, loadGenomes]);

  // Load genome recommendations when picker opens
  useEffect(() => {
    if (genomeOpen) {
      fetchRecommendedGenomes(prompt || undefined).then(setRecommended).catch(() => {});
    }
  }, [genomeOpen, prompt]);

  // Close genome picker on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (genomeRef.current && !genomeRef.current.contains(e.target as Node)) setGenomeOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleGenerate = async (retryPrompt?: string, retryImage?: string | null) => {
    const currentPrompt = retryPrompt ?? prompt.trim();
    const currentImage = retryImage === undefined ? uploadedImage : retryImage;
    if (!currentPrompt && !currentImage) return;
    setError(null);
    startGeneration();

    if (editMode && editTargetId) {
      // Edit mode: single variant edit
      const placeholderIds = addPlaceholders(1, activeMotifId || undefined);
      const placeholderQueue = [...placeholderIds];
      const signal = registerRun(placeholderIds, () => void handleGenerate(currentPrompt, currentImage));

      try {
        await editStream(
          {
            generationId: editTargetId,
            instruction: currentPrompt,
          },
          {
            onVariantStart: (id, expandedPrompt) => {
              const placeholderId = placeholderQueue.shift();
              if (placeholderId) {
                replacePlaceholder(placeholderId, id, expandedPrompt);
              } else {
                addStreamingVariant(id, expandedPrompt, activeMotifId || undefined);
              }
            },
            onVariantChunk: (id, chunk) => appendChunk(id, chunk),
            onVariantDone: (gen) => finalizeVariant(gen.id, gen),
            onVariantError: (id, err) => errorVariant(id, err),
            onError: (err) => setError(err),
          },
          signal
        );
        if (useAppStore.getState().prompt === currentPrompt) setPrompt("");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Edit failed");
      } finally {
        for (const id of placeholderQueue) {
          removeStreamingVariant(id);
        }
        endGeneration();
        exitEditMode();
      }
      return;
    }

    // Screenshot-to-UI mode
    if (currentImage) {
      let motifId = activeMotifId;
      if (!motifId) {
        try {
          const name = currentPrompt
            ? (currentPrompt.length > 40 ? currentPrompt.slice(0, 40) + "..." : currentPrompt)
            : "Screenshot to UI";
          const motif = await createMotif(name);
          addMotif(motif);
          motifId = motif.id;
          setActiveMotifId(motifId);
          const gens = await fetchGenerations(motifId);
          setGenerations(gens);
        } catch (err) {
          console.error("Failed to create motif:", err);
          setError("Failed to create motif");
          endGeneration();
          return;
        }
      }

      const placeholderIds = addPlaceholders(settings.batchSize, motifId || undefined);
      const placeholderQueue = [...placeholderIds];
      const signal = registerRun(placeholderIds, () => void handleGenerate(currentPrompt, currentImage));
      const expandedIds = new Map<string, string>();

      try {
        await screenshotToUIStream(
          {
            image: currentImage,
            prompt: currentPrompt || undefined,
            genomeId: settings.genomeId || undefined,
            model: settings.model || undefined,
            temperature: settings.temperature,
            batchSize: settings.batchSize,
            motifId: motifId || undefined,
            stylePatchId: activeStylePatch?.id || undefined,
          },
          {
            onVariantExpanding: (realId) => {
              const placeholderId = placeholderQueue.shift();
              if (placeholderId) {
                expandingVariant(placeholderId, realId);
                expandedIds.set(realId, realId);
              }
            },
            onVariantStart: (id, expandedPrompt, genomeName) => {
              if (expandedIds.has(id)) {
                replacePlaceholder(id, id, expandedPrompt, genomeName);
              } else {
                const placeholderId = placeholderQueue.shift();
                if (placeholderId) {
                  replacePlaceholder(placeholderId, id, expandedPrompt, genomeName);
                } else {
                  addStreamingVariant(id, expandedPrompt, motifId || undefined);
                }
              }
            },
            onVariantChunk: (id, chunk) => appendChunk(id, chunk),
            onVariantDone: (gen) => finalizeVariant(gen.id, gen),
            onVariantError: (id, err) => errorVariant(id, err),
            onError: (err) => setError(err),
          },
          signal
        );
        if (useAppStore.getState().prompt === currentPrompt) setPrompt("");
        setUploadedImage(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Screenshot-to-UI failed");
      } finally {
        for (const id of placeholderQueue) removeStreamingVariant(id);
        endGeneration();
      }
      return;
    }

    // Auto-create a motif if generating from home
    let motifId = activeMotifId;
    if (!motifId) {
      try {
        // Name the motif after the prompt (truncated)
        const name = currentPrompt.length > 40 ? currentPrompt.slice(0, 40) + "..." : currentPrompt;
        const motif = await createMotif(name);
        addMotif(motif);
        motifId = motif.id;
        setActiveMotifId(motifId);
        // Clear home generations and load the new (empty) motif's generations
        const gens = await fetchGenerations(motifId);
        setGenerations(gens);
      } catch (err) {
        console.error("Failed to create motif:", err);
        setError("Failed to create motif");
        endGeneration();
        return;
      }
    }

    // Normal generation mode
    const placeholderIds = addPlaceholders(settings.batchSize, motifId || undefined);
    const placeholderQueue = [...placeholderIds];
    const signal = registerRun(placeholderIds, () => void handleGenerate(currentPrompt, currentImage));
    // Track which placeholders have been swapped to real IDs during expanding phase
    const expandedIds = new Map<string, string>(); // realId → current store ID

    try {
      await generateStream(
        {
          prompt: currentPrompt,
          // Custom system prompt overrides the genome system entirely
          systemPrompt: settings.systemPrompt || undefined,
          genomeId: settings.systemPrompt ? undefined : (settings.genomeId || undefined),
          shuffle: settings.shuffle && !settings.systemPrompt ? true : undefined,
          blendConfig: activeBlend && !settings.systemPrompt ? activeBlend : undefined,
          recipeId: activeRecipeId,
          stylePatchId: activeStylePatch?.id || undefined,
          model: settings.model || undefined,
          temperature: settings.temperature,
          batchSize: settings.batchSize,
          motifId: motifId || undefined,
        },
        {
          onVariantExpanding: (realId) => {
            const placeholderId = placeholderQueue.shift();
            if (placeholderId) {
              expandingVariant(placeholderId, realId);
              expandedIds.set(realId, realId);
            }
          },
          onVariantStart: (id, expandedPrompt, genomeName) => {
            if (expandedIds.has(id)) {
              // Already swapped from placeholder during expanding — update to streaming
              replacePlaceholder(id, id, expandedPrompt, genomeName);
            } else {
              // No expanding event (fallback) — use placeholder queue
              const placeholderId = placeholderQueue.shift();
              if (placeholderId) {
                replacePlaceholder(placeholderId, id, expandedPrompt, genomeName);
              } else {
                addStreamingVariant(id, expandedPrompt, motifId || undefined);
              }
            }
          },
          onVariantChunk: (id, chunk) => appendChunk(id, chunk),
          onVariantDone: (gen) => finalizeVariant(gen.id, gen),
          onVariantError: (id, err) => errorVariant(id, err),
          onError: (err) => setError(err),
        },
        signal
      );
      if (useAppStore.getState().prompt === currentPrompt) setPrompt("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Generation failed");
    } finally {
      // Clean up any unclaimed placeholders
      for (const id of placeholderQueue) {
        removeStreamingVariant(id);
      }
      endGeneration();
    }
  };

  return (
    <>
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className={`bg-[#141414]/90 backdrop-blur-xl border rounded-2xl px-4 py-3 shadow-2xl ${
        editMode ? "border-cyan-500/30" : "border-white/10"
      }`}>
        {editMode && (
          <div className="flex items-center gap-2 mb-2 text-xs text-cyan-400">
            <i className="bi bi-pencil" />
            <span>Editing variant {editTargetId?.slice(0, 8)}</span>
            <button
              onClick={exitEditMode}
              className="text-cyan-500 hover:text-cyan-300 transition ml-auto"
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>
        )}
        <div className="flex flex-wrap gap-2 items-center">
          {/* Wordmark */}
          <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="2 78 245 94" className="order-1 hidden sm:block shrink-0 text-white/25">
            <path d="m138.2 140.7c0-15.42-12.45-29.26-28.25-29.26-15.95 0-27.95 13.44-27.95 29.12 0 14.89 11.95 28.92 27.67 28.92 15.59 0 28.53-13.12 28.53-28.78z" fill="currentColor"/>
            <path d="m140.7 112.5v20.81h35.4v-20.81h-35.4z" fill="currentColor" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.001"/>
            <path d="m143.8 89.88v18.03h19.47v-18.03h-19.47z" fill="currentColor" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.001"/>
            <path d="m144.5 137.9v30.86h20.45v-30.86h-20.45z" fill="currentColor" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.001"/>
            <path d="m181.5 112.9v55.9h19.65v-55.9h-19.65z" fill="currentColor" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.001"/>
            <path d="m206.7 137.9v30.86h20.45v-30.86h-20.45z" fill="currentColor" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.001"/>
            <path d="m243 81.71c-19.78 0.37-36.4 16.38-36.4 36.88v14.12h36.05v-19.9h-17.01c2.59-4.2 7.07-5.67 11.55-5.67h5.81v-25.43z" fill="currentColor" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.001"/>
            <path d="m191.1 80c-8.58 0-12.67 8.16-12.67 13.41 0 7.66 6.51 13.52 12.67 13.52 7.8 0 13.23-6.57 12.83-13.96-0.44-7.49-7.23-12.97-12.83-12.97z" fill="currentColor" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".5005"/>
            <path d="m6.32 110.2v58.6h23.12v-20.8c0-8.17 2.06-14.37 8.48-19.27-3.03 6.91-4.3 12.2-4.3 20.01v20.06h16.67v-17.8c0-9.87-2.2-17.47-5.64-23.33 8.36 3.51 10.21 11.22 10.21 21.66v19.47h22.8v-42.87c0-9.3-4.88-15.42-13.94-15.42-9.76 0-16.39 6.76-22.62 14.14-8.99-11.17-19.03-14.62-31.4-14.62-1.52 0-2.29 0.06-3.38 0.17z" fill="currentColor" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.001"/>
          </svg>
          {!editMode && (
            <div className="order-1 min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/25">
                  <i className="bi bi-palette2" />
                  Genome
                </span>
                {genomeSummary.chips.map((chip) => (
                  <span
                    key={chip.id}
                    className={`min-w-0 max-w-[180px] rounded-md border px-2 py-1 text-[10px] leading-none ${GENOME_CHIP_TONE_CLASS[chip.tone]}`}
                    title={chip.detail || chip.label}
                  >
                    <span className="font-medium">{chip.label}</span>
                    {chip.detail && (
                      <span className="ml-1 text-current opacity-45">{chip.detail}</span>
                    )}
                  </span>
                ))}
                {activeBlend && (
                  <button
                    type="button"
                    onClick={clearBlend}
                    className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2 py-1 text-[10px] text-white/30 hover:text-red-200"
                    title="Clear active genome blend"
                    aria-label="Clear active genome blend"
                  >
                    <i className="bi bi-x-lg" />
                  </button>
                )}
                {settings.genomeId && !activeBlend && !settings.systemPrompt && (
                  <button
                    type="button"
                    onClick={() => {
                      settings.setField("genomeId", "");
                      void settings.saveSettings();
                    }}
                    className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2 py-1 text-[10px] text-white/30 hover:text-red-200"
                    title="Clear pinned genome"
                    aria-label="Clear pinned genome"
                  >
                    <i className="bi bi-x-lg" />
                  </button>
                )}
                {activeStylePatch && (
                  <button
                    type="button"
                    onClick={() => setActiveStylePatch(null)}
                    className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2 py-1 text-[10px] text-white/30 hover:text-red-200"
                    title="Clear active style patch"
                    aria-label="Clear active style patch"
                  >
                    <i className="bi bi-bezier2 mr-1" />
                    <i className="bi bi-x-lg" />
                  </button>
                )}
              </div>
              <div className="mt-1 text-[10px] text-white/25 line-clamp-1">
                {genomeSummary.mode}: {genomeSummary.description}
              </div>
            </div>
          )}
          {!editMode && <div className="order-2 h-px basis-full bg-white/[0.06]" />}
          {/* Image upload button — hidden in edit mode */}
          {!editMode && (
            <div className="relative order-3 shrink-0">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = () => setUploadedImage(reader.result as string);
                  reader.readAsDataURL(file);
                  e.target.value = "";
                }}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border transition text-xs ${
                  uploadedImage
                    ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-200"
                    : "bg-white/5 border-white/[0.06] text-white/30 hover:text-white/50 hover:border-white/10"
                }`}
                title="Upload screenshot to recreate as UI"
                aria-label="Upload screenshot to recreate as UI"
              >
                {uploadedImage && (
                  <>
                    <img
                      src={uploadedImage}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-75"
                    />
                    <span className="absolute inset-0 bg-emerald-500/10" />
                  </>
                )}
                <i className="bi bi-image relative z-10" />
              </button>
              {uploadedImage && (
                <button
                  type="button"
                  onClick={() => setUploadedImage(null)}
                  className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[8px] text-white"
                  aria-label="Remove uploaded screenshot"
                >
                  <i className="bi bi-x" />
                </button>
              )}
            </div>
          )}
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") void handleGenerate(); }}
            placeholder={editMode ? "describe your edit... e.g. make the header blue" : uploadedImage ? "optional guidance for the screenshot..." : "describe a UI..."}
            className={`order-3 min-w-0 flex-1 bg-white/5 border rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none transition ${
              editMode ? "border-cyan-500/20 focus:border-cyan-500/40" : "border-white/[0.06] focus:border-white/20"
            }`}
          />
          {/* Templates button — hidden in edit mode */}
          {!editMode && (
            <button
              type="button"
              onClick={() => setTemplateOpen(true)}
              className="order-1 p-2.5 rounded-xl border border-white/[0.06] bg-white/5 text-white/30 hover:text-white/50 hover:border-white/10 transition shrink-0 text-xs"
              title="Prompt Templates"
              aria-label="Open prompt templates"
            >
              <i className="bi bi-bookmark-star" />
            </button>
          )}
          {/* Blend studio button */}
          {!editMode && !settings.systemPrompt && (
            <button
              type="button"
              onClick={() => setBlendOpen(true)}
              className={`order-1 p-2.5 rounded-xl border transition shrink-0 text-xs ${
                activeBlend
                  ? "bg-violet-500/15 border-violet-500/30 text-violet-300"
                  : "bg-white/5 border-white/[0.06] text-white/30 hover:text-white/50 hover:border-white/10"
              }`}
              title={activeBlend ? `Blend active: ${activeBlend.length} genomes` : "Genome Blend Studio"}
              aria-label="Open genome blend studio"
            >
              <i className="bi bi-sliders" />
            </button>
          )}
          {!editMode && (
            <button
              type="button"
              onClick={() => setStylePatchOpen(true)}
              className={`order-1 p-2.5 rounded-xl border transition shrink-0 text-xs ${
                activeStylePatch
                  ? "bg-violet-500/15 border-violet-500/30 text-violet-300"
                  : "bg-white/5 border-white/[0.06] text-white/30 hover:text-white/50 hover:border-white/10"
              }`}
              title={activeStylePatch ? `Style patch: ${activeStylePatch.name}` : "Style patches"}
              aria-label="Open style patches"
            >
              <i className="bi bi-bezier2" />
            </button>
          )}
          {/* Shuffle toggle — hidden in edit mode or when custom prompt is active */}
          {!editMode && !settings.systemPrompt && (
            <button
              type="button"
              onClick={() => {
                settings.setField("shuffle", !settings.shuffle);
                settings.saveSettings();
              }}
              className={`order-1 p-2.5 rounded-xl border transition shrink-0 text-xs ${
                settings.shuffle
                  ? "bg-violet-500/15 border-violet-500/30 text-violet-300"
                  : "bg-white/5 border-white/[0.06] text-white/30 hover:text-white/50 hover:border-white/10"
              }`}
              title={settings.shuffle ? "Shuffle ON — blending 2 genomes per generation" : "Shuffle OFF — single genome per generation"}
              aria-label={settings.shuffle ? "Turn shuffle off" : "Turn shuffle on"}
            >
              <i className="bi bi-shuffle" />
            </button>
          )}
          {/* Genome picker — hidden in edit mode */}
          {!editMode && (
            <div ref={genomeRef} className="relative order-1 shrink-0">
              <button
                type="button"
                onClick={() => setGenomeOpen(!genomeOpen)}
                className={`p-2.5 rounded-xl border transition flex items-center gap-1.5 text-xs ${
                  settings.systemPrompt
                    ? "bg-amber-500/10 border-amber-500/20 text-amber-400/60"
                    : settings.genomeId
                      ? "bg-white/10 border-white/15 text-white/70"
                      : "bg-white/5 border-white/[0.06] text-white/30 hover:text-white/50"
                }`}
                title={settings.systemPrompt ? "Genome bypassed — custom prompt active" : settings.genomeId ? `Genome: ${settings.genomeId}` : "Auto genome"}
                aria-label="Choose design genome"
              >
                <i className={`bi ${settings.systemPrompt ? "bi-exclamation-triangle" : "bi-palette"}`} />
                <span className="hidden sm:inline max-w-[80px] truncate">
                  {settings.systemPrompt ? "Custom" : settings.genomeId || "Auto"}
                </span>
                <i className={`bi bi-chevron-${genomeOpen ? "up" : "down"} text-[10px]`} />
              </button>
              {genomeOpen && (
                <div className="absolute bottom-full mb-2 right-0 w-56 max-h-64 overflow-auto rounded-lg border border-white/10 bg-neutral-900 shadow-xl">
                  <button
                    type="button"
                    onMouseDown={(e) => { e.preventDefault(); settings.setField("genomeId", ""); setGenomeOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-sm transition ${
                      !settings.genomeId ? "bg-white/10 text-white border-l-2 border-white/40" : "text-white/70 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <i className="bi bi-magic text-xs" /> Auto-select
                    </div>
                    <div className="text-white/30 text-xs">Match genome to prompt</div>
                  </button>
                  {recommended.length > 0 && (
                    <>
                      <div className="px-3 py-1.5 text-[10px] text-amber-400/60 uppercase tracking-wider border-t border-white/5 bg-amber-500/[0.03]">
                        <i className="bi bi-star-fill text-[8px] mr-1" /> Recommended
                      </div>
                      {recommended.map((r) => (
                        <button
                          key={`rec-${r.id}`}
                          type="button"
                          onMouseDown={(e) => { e.preventDefault(); settings.setField("genomeId", r.id); setGenomeOpen(false); }}
                          className={`w-full text-left px-3 py-2 text-sm transition ${
                            r.id === settings.genomeId ? "bg-white/10 text-white border-l-2 border-amber-400" : "text-white/70 hover:bg-white/5"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{r.id}: {r.name}</span>
                            {r.favoriteRate > 0 && (
                              <span className="text-[10px] text-amber-400/50">{r.favoriteRate}%<i className="bi bi-heart-fill ml-0.5" /></span>
                            )}
                          </div>
                        </button>
                      ))}
                      <div className="border-t border-white/5" />
                    </>
                  )}
                  {settings.availableGenomes.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); settings.setField("genomeId", g.id); setGenomeOpen(false); }}
                      className={`w-full text-left px-3 py-2 text-sm transition ${
                        g.id === settings.genomeId ? "bg-white/10 text-white border-l-2 border-white/40" : "text-white/70 hover:bg-white/5"
                      }`}
                    >
                      {g.id}: {g.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          {/* Batch size toggle — hidden in edit mode */}
          {!editMode && (
            <button
              type="button"
              onClick={() => {
                const next = (settings.batchSize % 4) + 1;
                settings.setField("batchSize", next);
                settings.saveSettings();
              }}
              className="order-1 p-2.5 rounded-xl border border-white/[0.06] bg-white/5 text-white/30 hover:text-white/50 hover:border-white/10 transition shrink-0 text-xs"
              title={`Batch size: ${settings.batchSize} — click to cycle`}
              aria-label={`Batch size ${settings.batchSize}, click to cycle`}
            >
              {settings.batchSize}x
            </button>
          )}
          {!editMode && runEstimate && (
            <span
              className="order-1 shrink-0 text-[10px] text-white/30"
              title="Rough estimate using about 2k input and 4k output tokens per call"
            >
              {runEstimate.calls} calls · ~${runEstimate.cost < 0.01 ? runEstimate.cost.toFixed(4) : runEstimate.cost.toFixed(2)}
            </span>
          )}
          <button
            onClick={() => void handleGenerate()}
            disabled={!prompt.trim() && !uploadedImage}
            className={`order-3 font-medium px-5 py-2.5 rounded-xl text-sm disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center justify-center gap-2 shrink-0 max-sm:flex-1 ${
              editMode
                ? "bg-cyan-500 text-black hover:bg-cyan-400"
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            {editMode ? (
              <>
                <i className="bi bi-pencil" />
                Edit
              </>
            ) : isGenerating ? (
              <>
                <i className="bi bi-stars" />
                Generate
                <span className="bg-black/10 text-black/60 text-[10px] px-1.5 py-0.5 rounded-full">
                  {activeGenerations}
                </span>
              </>
            ) : (
              <>
                <i className="bi bi-stars" />
                Generate
              </>
            )}
          </button>
        </div>
        {error && (
          <div className="mt-2 text-red-400 text-xs flex items-center gap-1.5">
            <i className="bi bi-exclamation-triangle" />
            {error}
          </div>
        )}
      </div>
      {templateOpen && (
        <Suspense fallback={null}>
          <TemplateModal
            open={templateOpen}
            onClose={() => setTemplateOpen(false)}
            onUseTemplate={(filled) => setPrompt(filled)}
            currentPrompt={prompt}
          />
        </Suspense>
      )}
    </div>
    {blendOpen && (
      <Suspense fallback={null}>
        <BlendStudio
          open={blendOpen}
          onClose={() => setBlendOpen(false)}
          onApply={(config, recipeId, recipeName) => {
            setActiveBlend(config);
            setActiveRecipeId(recipeId);
            setActiveRecipeName(recipeName || "");
          }}
        />
      </Suspense>
    )}
    {stylePatchOpen && (
      <Suspense fallback={null}>
        <StylePatchStudio
          open={stylePatchOpen}
          activePatchId={activeStylePatch?.id}
          onClose={() => setStylePatchOpen(false)}
          onApply={(patch) => setActiveStylePatch(patch)}
        />
      </Suspense>
    )}
    </>
  );
}
