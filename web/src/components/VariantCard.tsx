import { useRef, useEffect, useState, useCallback, memo } from "react";
import html2canvas from "html2canvas";
import type { Generation } from "../store";
import { useAppStore } from "../store";
import {
  toggleFavorite,
  deleteGeneration,
  downloadHTML,
  styleDropStream,
  reorganizeStream,
  saveThumbnail,
  scoreGeneration,
  updateGenerationBoard,
  downloadHandoffZip,
  extractStylePatch,
  fetchGeneration,
  type BlendEntry,
  type QualityScore,
} from "../api";
import VaryPopup from "./VaryPopup";
import ConfirmDialog from "./ConfirmDialog";
import {
  VIEWPORT_WIDTH,
  measureContentSize,
  pickAspectRatio,
  detectMobileLayout,
  type MobileLayout,
} from "./thumbnail-utils";
import { dropperMouse, textureCache, setDropperHoveredEl } from "../shaders/dropper-shared";

import { fixBareHexColors, INTERACTIVE_IFRAME_SANDBOX, PREVIEW_IFRAME_SANDBOX, requiresInteractivePreview } from "./html-utils";

interface Props {
  generation: Generation;
}

function parseJson<T>(value: string | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export default memo(function VariantCard({ generation }: Props) {
  const toggleFav = useAppStore((s) => s.toggleFavorite);
  const removeGeneration = useAppStore((s) => s.removeGeneration);
  const setSelectedId = useAppStore((s) => s.setSelectedId);
  const selectGeneration = useAppStore((s) => s.selectGeneration);
  const styleDropperMode = useAppStore((s) => s.styleDropperMode);
  const styleSourceId = useAppStore((s) => s.styleSourceId);
  const enterDropperMode = useAppStore((s) => s.enterDropperMode);
  const enterEditMode = useAppStore((s) => s.enterEditMode);
  const exitDropperMode = useAppStore((s) => s.exitDropperMode);
  const setDropperHover = useAppStore((s) => s.setDropperHover);
  const startGeneration = useAppStore((s) => s.startGeneration);
  const endGeneration = useAppStore((s) => s.endGeneration);
  const addPlaceholders = useAppStore((s) => s.addPlaceholders);
  const replacePlaceholder = useAppStore((s) => s.replacePlaceholder);
  const removeStreamingVariant = useAppStore((s) => s.removeStreamingVariant);
  const registerRun = useAppStore((s) => s.registerRun);
  const appendChunk = useAppStore((s) => s.appendChunk);
  const finalizeVariant = useAppStore((s) => s.finalizeVariant);
  const errorVariant = useAppStore((s) => s.errorVariant);
  const activeMotifId = useAppStore((s) => s.activeMotifId);
  const updateGenerationFields = useAppStore((s) => s.updateGenerationFields);

  const [showVaryPopup, setShowVaryPopup] = useState(false);
  const [showWhy, setShowWhy] = useState(false);
  const [boardStatus, setBoardStatus] = useState<Generation["board_status"]>(
    generation.board_status || "candidate"
  );
  const [qualityScore, setQualityScore] = useState<QualityScore | null>(
    parseJson<QualityScore | null>(generation.quality_score_json, null)
  );
  const [workflowBusy, setWorkflowBusy] = useState<string | null>(null);
  const [workflowNote, setWorkflowNote] = useState<string | null>(null);
  const [thumbnailFailed, setThumbnailFailed] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    setBoardStatus(generation.board_status || "candidate");
    setQualityScore(parseJson<QualityScore | null>(generation.quality_score_json, null));
  }, [generation.id, generation.board_status, generation.quality_score_json]);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [contentSize, setContentSize] = useState({
    width: VIEWPORT_WIDTH,
    height: 600,
  });
  const [mobileLayout, setMobileLayout] = useState<MobileLayout>({
    isMobile: false,
    contentLeft: 0,
    contentTop: 0,
    contentWidth: VIEWPORT_WIDTH,
    contentHeight: 600,
  });
  const mobileLayoutRef = useRef(mobileLayout);
  mobileLayoutRef.current = mobileLayout;
  const [containerWidth, setContainerWidth] = useState(320);

  // ponytail: load all 40 paginated cards; virtualize if startup rendering becomes measurable.
  useEffect(() => {
    if (generation.parsed_html) return;
    void fetchGeneration(generation.id)
      .then((full) => updateGenerationFields(generation.id, full))
      .catch(() => {});
  }, [generation.id, generation.parsed_html, updateGenerationFields]);

  const isStyleSource = styleDropperMode && styleSourceId === generation.id;
  const interactivePreview = requiresInteractivePreview(generation.parsed_html);
  const previewToken = interactivePreview ? window.motifDesktop?.getPreviewToken() : "";
  const previewSrc = interactivePreview
    ? `/interactive/${encodeURIComponent(generation.id)}${previewToken ? `?token=${encodeURIComponent(previewToken)}` : ""}`
    : undefined;

  const handleDropperMouseEnter = useCallback(() => {
    if (!styleDropperMode || isStyleSource) return;
    const el = sentinelRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cached = textureCache.get(generation.id) ?? null;
    setDropperHoveredEl(el);
    setDropperHover({ x: r.left, y: r.top, w: r.width, h: r.height }, undefined, cached);
  }, [styleDropperMode, isStyleSource, setDropperHover, generation.id]);

  const handleDropperMouseLeave = useCallback(() => {
    if (!styleDropperMode || isStyleSource) return;
    setDropperHoveredEl(null);
    setDropperHover(null);
  }, [styleDropperMode, isStyleSource, setDropperHover]);

  const handleDropperMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!styleDropperMode || isStyleSource) return;
      const el = sentinelRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      // Write directly to shared ref — NO React re-render, render loop reads it
      dropperMouse.x = (e.clientX - r.left) / r.width;
      dropperMouse.y = 1 - (e.clientY - r.top) / r.height;
    },
    [styleDropperMode, isStyleSource]
  );

  // Track container width for scaling
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Measure actual content size once iframe loads
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc) {
          setContentSize(measureContentSize(doc));
          setMobileLayout(detectMobileLayout(doc));
        }
      } catch {
        // cross-origin, keep default
      }
    };

    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, [generation.parsed_html]);

  // Load persisted thumbnail from DB into memory cache, or capture fresh after iframe loads.
  useEffect(() => {
    // If a persisted thumbnail exists, decode it into the in-memory cache immediately
    if (generation.thumbnail && !textureCache.has(generation.id)) {
      const img = new Image();
      img.onload = () => {
        const c = document.createElement("canvas");
        c.width = img.width;
        c.height = img.height;
        const ctx = c.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          textureCache.set(generation.id, c);
        }
      };
      img.src = generation.thumbnail;
      return; // Already persisted — no need to re-capture
    }

    // No persisted thumbnail — capture after iframe loads + 1s animation delay
    const iframe = iframeRef.current;
    const el = sentinelRef.current;
    if (!iframe || !el) return;
    if (textureCache.has(generation.id)) return;

    let timer: ReturnType<typeof setTimeout> | null = null;
    let cancelled = false;

    const handleLoad = () => {
      timer = setTimeout(async () => {
        if (cancelled || !iframe.contentDocument?.body) return;
        if (textureCache.has(generation.id)) return;

        try {
          const canvas = await html2canvas(iframe.contentDocument.body, {
            backgroundColor: "#0a0a0a",
            scale: 1,
            logging: false,
            useCORS: true,
            allowTaint: true,
          });

          if (cancelled) return;

          const rect = el.getBoundingClientRect();
          const cardW = Math.round(rect.width);
          const cardH = Math.round(rect.height);
          if (cardW === 0 || cardH === 0) return;
          const ml = mobileLayoutRef.current;
          const iframeW = parseInt(iframe.style.width) || VIEWPORT_WIDTH;

          let currentScale: number;
          let sourceX: number;
          let sourceY: number;
          let sourceW: number;

          if (ml.isMobile) {
            // Match the rendering: fill 100%, center, top-aligned
            currentScale = cardW / ml.contentWidth;
            const contentCenter = ml.contentLeft + ml.contentWidth / 2;
            const tx = cardW / (2 * currentScale) - contentCenter;
            const ty = -ml.contentTop;
            sourceX = Math.max(0, -tx);
            sourceY = Math.max(0, -ty);
            sourceW = Math.min(iframeW - sourceX, cardW / currentScale);
          } else {
            currentScale = cardW / iframeW;
            sourceX = 0;
            sourceY = 0;
            sourceW = iframeW;
          }

          const visibleIframeH = Math.round(cardH / currentScale);

          const cropped = document.createElement("canvas");
          cropped.width = cardW;
          cropped.height = cardH;
          const ctx = cropped.getContext("2d");
          if (ctx) {
            ctx.drawImage(canvas, sourceX, sourceY, sourceW, visibleIframeH, 0, 0, cardW, cardH);
            textureCache.set(generation.id, cropped);

            // Persist to DB as WebP data URL (fire-and-forget)
            const dataUrl = cropped.toDataURL("image/webp", 0.7);
            updateGenerationFields(generation.id, { thumbnail: dataUrl });
            saveThumbnail(generation.id, dataUrl).catch(() => {});
          }
        } catch {
          // Capture failed — shader will use overlay-only fallback
        }
      }, 1000);
    };

    iframe.addEventListener("load", handleLoad);
    if (iframe.contentDocument?.readyState === "complete") {
      handleLoad();
    }

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      iframe.removeEventListener("load", handleLoad);
    };
  }, [generation.id, generation.parsed_html, generation.thumbnail, updateGenerationFields]);

  // For mobile-first designs, zoom in moderately and center the content band
  const desktopScale = containerWidth / VIEWPORT_WIDTH;
  let scale: number;
  let iframeTransform: string;

  if (mobileLayout.isMobile) {
    // Fill 100% of card width — scale up to show mobile content edge-to-edge
    scale = containerWidth / mobileLayout.contentWidth;
    // Center horizontally: solve (contentCenter + tx) * scale = containerWidth / 2
    const contentCenter = mobileLayout.contentLeft + mobileLayout.contentWidth / 2;
    const tx = containerWidth / (2 * scale) - contentCenter;
    // Align to top: content starts flush at the top of the card
    const ty = -mobileLayout.contentTop;
    iframeTransform = `scale(${scale}) translate(${tx}px, ${ty}px)`;
  } else {
    scale = desktopScale;
    iframeTransform = `scale(${scale})`;
  }

  // Mobile: show the full content height, clamped to phone-like proportions
  const MOBILE_MIN_ASPECT = 9 / 19.5; // 0.46 — modern phone (iPhone-ish)
  const MOBILE_MAX_ASPECT = 9 / 16;   // 0.5625
  let aspect: number;
  if (mobileLayout.isMobile) {
    const neededHeight = mobileLayout.contentHeight * scale;
    const rawAspect = containerWidth / neededHeight;
    aspect = Math.max(MOBILE_MIN_ASPECT, Math.min(MOBILE_MAX_ASPECT, rawAspect));
  } else {
    aspect = pickAspectRatio(contentSize.width, contentSize.height);
  }
  const displayHeight = containerWidth / aspect;

  const handleFavorite = async (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFav(generation.id);
    await toggleFavorite(generation.id, !generation.favorited);
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setConfirmDelete(true);
  };

  const handleExport = (e: React.MouseEvent) => {
    e.stopPropagation();
    downloadHTML(
      generation.parsed_html,
      `motif-${generation.id.slice(0, 8)}.html`
    );
  };

  const handleQualityScore = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setWorkflowBusy("score");
    setWorkflowNote(null);
    try {
      const score = await scoreGeneration(generation.id, generation.parsed_html);
      setQualityScore(score);
      updateGenerationFields(generation.id, {
        quality_score_json: JSON.stringify(score),
      });
      setWorkflowNote(`Quality ${score.overall}/100`);
    } catch (err) {
      setWorkflowNote(err instanceof Error ? err.message : "Scoring failed");
    } finally {
      setWorkflowBusy(null);
    }
  };

  const handleBoardStatus = async (
    e: React.MouseEvent,
    status: Generation["board_status"]
  ) => {
    e.stopPropagation();
    setBoardStatus(status);
    updateGenerationFields(generation.id, {
      board_status: status,
      notes: generation.notes || "",
    });
    await updateGenerationBoard(generation.id, {
      status,
      notes: generation.notes || "",
    }).catch(() => {});
  };

  const handleHandoff = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setWorkflowBusy("handoff");
    setWorkflowNote(null);
    try {
      await downloadHandoffZip(generation.id);
      setBoardStatus("exported");
      updateGenerationFields(generation.id, { board_status: "exported" });
      setWorkflowNote("Handoff project exported");
    } catch (err) {
      setWorkflowNote(err instanceof Error ? err.message : "Handoff failed");
    } finally {
      setWorkflowBusy(null);
    }
  };

  const handleExtractPatch = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setWorkflowBusy("patch");
    setWorkflowNote(null);
    try {
      const patch = await extractStylePatch({
        name: `Patch ${generation.id.slice(0, 8)}`,
        sourceGenerationId: generation.id,
      });
      setWorkflowNote(`Style patch saved: ${patch.name}`);
    } catch (err) {
      setWorkflowNote(err instanceof Error ? err.message : "Patch extraction failed");
    } finally {
      setWorkflowBusy(null);
    }
  };

  const handlePickUpStyle = (e: React.MouseEvent) => {
    e.stopPropagation();
    enterDropperMode(generation.id);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    enterEditMode(generation.id);
  };

  const handleVary = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowVaryPopup(true);
  };

  const runReorganize = async () => {
    startGeneration();
    const placeholderIds = addPlaceholders(1, generation.motif_id || activeMotifId || undefined);
    const placeholderQueue = [...placeholderIds];
    const signal = registerRun(placeholderIds, () => void runReorganize());
    try {
      await reorganizeStream(
        {
          generationId: generation.id,
          motifId: activeMotifId || undefined,
        },
        {
          onVariantStart: (id, expandedPrompt) => {
            const placeholder = placeholderQueue.shift();
            if (placeholder) replacePlaceholder(placeholder, id, expandedPrompt);
          },
          onVariantChunk: (id, chunk) => appendChunk(id, chunk),
          onVariantDone: (gen) => finalizeVariant(gen.id, gen),
          onVariantError: (id, err) => errorVariant(id, err),
        },
        signal
      );
    } catch (err) {
      console.error("Reorganize failed:", err);
    } finally {
      placeholderQueue.forEach(removeStreamingVariant);
      endGeneration();
    }
  };

  const executeReorganize = (e: React.MouseEvent) => {
    e.stopPropagation();
    void runReorganize();
  };

  const executeStyleDrop = async (contentId: string, styleId: string) => {
    startGeneration();
    const placeholderIds = addPlaceholders(1, generation.motif_id || activeMotifId || undefined);
    const placeholderQueue = [...placeholderIds];
    const signal = registerRun(placeholderIds, () => void executeStyleDrop(contentId, styleId));
    try {
      await styleDropStream(
        {
          contentGenerationId: contentId,
          styleGenerationId: styleId,
          motifId: activeMotifId || undefined,
        },
        {
          onVariantStart: (id, expandedPrompt) => {
            const placeholder = placeholderQueue.shift();
            if (placeholder) replacePlaceholder(placeholder, id, expandedPrompt);
          },
          onVariantChunk: (id, chunk) => appendChunk(id, chunk),
          onVariantDone: (gen) => finalizeVariant(gen.id, gen),
          onVariantError: (id, err) => errorVariant(id, err),
        },
        signal
      );
    } catch (err) {
      console.error("Style drop failed:", err);
    } finally {
      placeholderQueue.forEach(removeStreamingVariant);
      endGeneration();
    }
  };

  const handleCardClick = () => {
    if (styleDropperMode && styleSourceId) {
      if (generation.id === styleSourceId) {
        // Clicking the style source card cancels dropper mode
        exitDropperMode();
        return;
      }
      // This card is the content target (X), styleSourceId is the style source (Y)
      executeStyleDrop(generation.id, styleSourceId);
      exitDropperMode();
    } else {
      void selectGeneration(generation.id).catch(() => setSelectedId(generation.id));
    }
  };

  const blendConfig = parseJson<BlendEntry[]>(generation.blend_config_json, []);
  const whyLines = [
    generation.recipe_id ? `Recipe: ${generation.recipe_id}` : "",
    generation.genome_name || generation.genome_id
      ? `Primary genome: ${generation.genome_name || generation.genome_id}`
      : "",
    generation.secondary_genome_name || generation.secondary_genome_id
      ? `Secondary genome: ${generation.secondary_genome_name || generation.secondary_genome_id}`
      : "",
    ...blendConfig.map((entry) => `${entry.id}: ${entry.weight}% for ${entry.aspect}`),
    generation.style_patch_id ? `Style patch: ${generation.style_patch_id}` : "",
    generation.variation_distance ? `Variation distance: ${generation.variation_distance}` : "",
    generation.compare_role ? `Compare role: ${generation.compare_role}` : "",
  ].filter(Boolean);

  return (
    <div
      ref={sentinelRef}
      className={`group relative bg-white/[0.03] border rounded-lg overflow-hidden transition-all ${
        isStyleSource
          ? "ring-2 ring-purple-500/50 border-purple-500/30"
          : styleDropperMode
            ? "border-white/[0.06] hover:border-purple-400/30 cursor-crosshair"
            : "border-white/[0.06] hover:border-white/15 cursor-pointer"
      }`}
      onClick={handleCardClick}
      onMouseEnter={handleDropperMouseEnter}
      onMouseLeave={handleDropperMouseLeave}
      onMouseMove={handleDropperMouseMove}
      role="button"
      tabIndex={0}
      aria-label={`Open generation ${generation.prompt || generation.id.slice(0, 8)}`}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleCardClick();
        }
      }}
    >
      {/* Preview iframe — scaled from full viewport width */}
      <div
        ref={containerRef}
        data-testid="variant-preview"
        data-generation-id={generation.id}
        className="bg-[#0a0a0a] overflow-hidden relative"
        style={{ height: displayHeight, transition: "height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
      >
        {generation.thumbnail && !thumbnailFailed ? (
          <img
            src={generation.thumbnail}
            alt=""
            className="h-full w-full object-cover"
            onError={() => setThumbnailFailed(true)}
          />
        ) : generation.parsed_html ? (
          <iframe
            ref={iframeRef}
            src={previewSrc}
            srcDoc={interactivePreview ? undefined : fixBareHexColors(generation.parsed_html)}
            sandbox={interactivePreview ? INTERACTIVE_IFRAME_SANDBOX : PREVIEW_IFRAME_SANDBOX}
            style={{
              width: VIEWPORT_WIDTH,
              height: VIEWPORT_WIDTH / aspect,
              transform: iframeTransform,
              transformOrigin: "top left",
            }}
            className="border-0 pointer-events-none"
            title={`Variant ${generation.id.slice(0, 8)}`}
          />
        ) : (
          <div className="w-full h-full animate-pulse bg-white/[0.03]" />
        )}
      </div>

      {/* Source card reports its rect for the floating GLSL overlay in App.tsx */}

      <div
        className="border-t border-white/[0.06] bg-[#101010] px-3 py-2 space-y-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setShowWhy((v) => !v)}
            className="min-w-0 flex items-center gap-1.5 text-[11px] text-white/45 hover:text-white/75"
            aria-expanded={showWhy}
          >
            <i className="bi bi-diagram-3" />
            <span className="truncate">
              {blendConfig.length > 0
                ? `${blendConfig.length}-genome recipe`
                : generation.secondary_genome_name
                  ? "Hybrid genome"
                  : generation.genome_name || "Auto genome"}
            </span>
          </button>
          <div className="flex items-center gap-1">
            {qualityScore && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300/80 border border-emerald-500/15">
                {qualityScore.overall}
              </span>
            )}
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.04] text-white/35 border border-white/[0.06] capitalize">
              {boardStatus || "candidate"}
            </span>
          </div>
        </div>

        {showWhy && (
          <div className="space-y-2">
            <div className="space-y-1">
              {(whyLines.length > 0 ? whyLines : ["No genome metadata stored for this variant"]).map((line) => (
                <div key={line} className="text-[10px] text-white/35 leading-relaxed">
                  {line}
                </div>
              ))}
            </div>
            {qualityScore && (
              <div className="grid grid-cols-2 gap-1">
                {Object.entries(qualityScore.categories).map(([key, value]) => (
                  <div key={key} className="text-[10px] text-white/35 flex justify-between gap-2">
                    <span className="capitalize truncate">{key.replace(/([A-Z])/g, " $1")}</span>
                    <span className="text-white/55">{value.score}</span>
                  </div>
                ))}
              </div>
            )}
            {workflowNote && (
              <div className="text-[10px] text-white/45">{workflowNote}</div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between gap-1">
          <div className="flex gap-1">
            <button
              type="button"
              onClick={(e) => handleBoardStatus(e, "accepted")}
              className="w-7 h-7 rounded-md bg-white/[0.04] text-white/40 hover:text-emerald-300 hover:bg-emerald-500/10"
              title="Accept on board"
              aria-label="Accept on board"
            >
              <i className="bi bi-check2" />
            </button>
            <button
              type="button"
              onClick={(e) => handleBoardStatus(e, "rejected")}
              className="w-7 h-7 rounded-md bg-white/[0.04] text-white/40 hover:text-red-300 hover:bg-red-500/10"
              title="Reject on board"
              aria-label="Reject on board"
            >
              <i className="bi bi-x" />
            </button>
            <button
              type="button"
              onClick={handleQualityScore}
              disabled={workflowBusy === "score"}
              className="w-7 h-7 rounded-md bg-white/[0.04] text-white/40 hover:text-sky-300 hover:bg-sky-500/10 disabled:opacity-40"
              title="Score quality"
              aria-label="Score quality"
            >
              <i className={`bi ${workflowBusy === "score" ? "bi-arrow-repeat animate-spin" : "bi-speedometer2"}`} />
            </button>
          </div>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={handleExtractPatch}
              disabled={workflowBusy === "patch"}
              className="w-7 h-7 rounded-md bg-white/[0.04] text-white/40 hover:text-violet-300 hover:bg-violet-500/10 disabled:opacity-40"
              title="Save style patch"
              aria-label="Save style patch"
            >
              <i className={`bi ${workflowBusy === "patch" ? "bi-arrow-repeat animate-spin" : "bi-bezier2"}`} />
            </button>
            <button
              type="button"
              onClick={handleHandoff}
              disabled={workflowBusy === "handoff"}
              className="w-7 h-7 rounded-md bg-white/[0.04] text-white/40 hover:text-amber-300 hover:bg-amber-500/10 disabled:opacity-40"
              title="Download handoff project"
              aria-label="Download handoff project"
            >
              <i className={`bi ${workflowBusy === "handoff" ? "bi-arrow-repeat animate-spin" : "bi-box-arrow-up-right"}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Genome badge — top right */}
      {generation.genome_name && (
        <div className="absolute top-10 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className={`text-[10px] bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md border ${
            generation.secondary_genome_name
              ? "text-violet-300/80 border-violet-500/20"
              : "text-white/70 border-white/10"
          }`}>
            {generation.secondary_genome_name
              ? `${generation.genome_name} x ${generation.secondary_genome_name}`
              : generation.genome_name}
          </span>
        </div>
      )}

      {/* Style source badge */}
      {isStyleSource && (
        <div className="absolute top-10 left-2 z-10">
          <span className="text-[10px] bg-purple-500/30 backdrop-blur-sm text-purple-200 px-2 py-0.5 rounded-md border border-purple-500/30 flex items-center gap-1">
            <i className="bi bi-eyedropper" /> Style source
          </span>
        </div>
      )}

      {/* Hover actions */}
      <div className="absolute top-2 left-2 right-2 z-20 flex items-center justify-between gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity">
        <div className="flex gap-1">
          <button
            onClick={handleFavorite}
            className={`w-7 h-7 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors ${
              generation.favorited
                ? "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                : "bg-black/60 text-white/60 hover:bg-black/70 hover:text-white/90"
            }`}
            title="Favorite"
            aria-label={generation.favorited ? "Remove from favorites" : "Add to favorites"}
          >
            <i className={`bi text-sm ${generation.favorited ? "bi-star-fill" : "bi-star"}`} />
          </button>
          <button
            onClick={handleExport}
            className="w-7 h-7 flex items-center justify-center rounded-md bg-black/60 text-white/60 hover:bg-black/70 hover:text-white/90 backdrop-blur-sm transition-colors"
            title="Export HTML"
            aria-label="Export HTML"
          >
            <i className="bi bi-download text-sm" />
          </button>
          <button
            onClick={handlePickUpStyle}
            className={`w-7 h-7 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors ${
              isStyleSource
                ? "bg-purple-500/30 text-purple-300"
                : "bg-black/60 text-white/60 hover:bg-purple-500/20 hover:text-purple-300"
            }`}
            title="Pick up style"
            aria-label="Pick up style"
          >
            <i className="bi bi-eyedropper text-sm" />
          </button>
          <button
            onClick={handleEdit}
            className="w-7 h-7 flex items-center justify-center rounded-md bg-black/60 text-white/60 hover:bg-cyan-500/20 hover:text-cyan-300 backdrop-blur-sm transition-colors"
            title="Edit"
            aria-label="Edit generation"
          >
            <i className="bi bi-pencil text-sm" />
          </button>
          <button
            onClick={handleVary}
            className="w-7 h-7 flex items-center justify-center rounded-md bg-black/60 text-white/60 hover:bg-amber-500/20 hover:text-amber-300 backdrop-blur-sm transition-colors"
            title="Vary"
            aria-label="Create variations"
          >
            <i className="bi bi-collection text-sm" />
          </button>
          <button
            onClick={executeReorganize}
            className="w-7 h-7 flex items-center justify-center rounded-md bg-black/60 text-white/60 hover:bg-orange-500/20 hover:text-orange-300 backdrop-blur-sm transition-colors"
            title="Reorganize layout"
            aria-label="Reorganize layout"
          >
            <i className="bi bi-layout-three-columns text-sm" />
          </button>
        </div>
        <button
          onClick={handleDelete}
          className="w-7 h-7 flex items-center justify-center rounded-md bg-black/60 text-white/40 hover:bg-red-500/20 hover:text-red-400 backdrop-blur-sm transition-colors"
          title="Delete"
          aria-label="Delete generation"
        >
          <i className="bi bi-trash3 text-sm" />
        </button>
      </div>

      {showVaryPopup && (
        <VaryPopup
          generationId={generation.id}
          onClose={() => setShowVaryPopup(false)}
        />
      )}
      <ConfirmDialog
        open={confirmDelete}
        title="Delete generation?"
        confirmLabel="Delete"
        danger
        onClose={() => setConfirmDelete(false)}
        onConfirm={async () => {
          await deleteGeneration(generation.id);
          removeGeneration(generation.id);
          setConfirmDelete(false);
        }}
      >
        This cannot be undone.
      </ConfirmDialog>
    </div>
  );
});
