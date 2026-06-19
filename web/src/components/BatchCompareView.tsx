import { useState, useRef, useEffect, useCallback } from "react";
import { useSettingsStore, type Generation } from "../store";
import { batchCompareStream, saveCompareResult, downloadHTML } from "../api";
import {
  createShellHtml,
  extractGeneratedBody,
  PREVIEW_IFRAME_SANDBOX,
} from "./html-utils";

const VIEWPORT_WIDTH = 1280;

const SHELL_HTML = createShellHtml("bg-white");

interface PanelResult {
  id: string;
  genomeId: string;
  code: string;
  status: "idle" | "expanding" | "streaming" | "done" | "error";
  error?: string;
  generation?: Partial<Generation>;
  genomeName?: string;
  expandedPrompt?: string;
  saved?: boolean;
}

export default function BatchCompareView() {
  const settings = useSettingsStore();
  const [prompt, setPrompt] = useState("");
  const [selectedGenomeIds, setSelectedGenomeIds] = useState<string[]>([]);
  const [genomeOpen, setGenomeOpen] = useState(false);
  const genomeRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [panels, setPanels] = useState<PanelResult[]>([]);
  const availableGenomeCount = settings.availableGenomes.length;
  const loadGenomes = settings.loadGenomes;

  useEffect(() => {
    if (availableGenomeCount === 0) loadGenomes();
  }, [availableGenomeCount, loadGenomes]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (genomeRef.current && !genomeRef.current.contains(e.target as Node)) setGenomeOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleGenome = (id: string) => {
    setSelectedGenomeIds((prev) => {
      if (prev.includes(id)) return prev.filter((g) => g !== id);
      if (prev.length >= 8) return prev;
      return [...prev, id];
    });
  };

  // Map variantId -> genomeId for routing SSE events
  const variantGenomeMap = useRef<Map<string, string>>(new Map());

  const handleCompare = async () => {
    if (!prompt.trim() || isGenerating || selectedGenomeIds.length < 2) return;
    setError(null);
    setIsGenerating(true);
    variantGenomeMap.current.clear();

    // Initialize panels
    const initial: PanelResult[] = selectedGenomeIds.map((gid) => ({
      id: "",
      genomeId: gid,
      code: "",
      status: "idle",
      genomeName: "",
      expandedPrompt: "",
    }));
    setPanels(initial);

    try {
      await batchCompareStream(
        {
          prompt: prompt.trim(),
          genomeIds: selectedGenomeIds,
          model: settings.model || undefined,
          temperature: settings.temperature,
        },
        {
          onVariantExpanding: (id, _index, compareRole) => {
            if (compareRole) variantGenomeMap.current.set(id, compareRole);
            setPanels((prev) =>
              prev.map((p) =>
                p.genomeId === compareRole ? { ...p, id, status: "expanding" } : p
              )
            );
          },
          onVariantStart: (id, expandedPrompt, genomeName, compareRole) => {
            if (compareRole) variantGenomeMap.current.set(id, compareRole);
            const gid = variantGenomeMap.current.get(id) || compareRole;
            setPanels((prev) =>
              prev.map((p) =>
                p.genomeId === gid
                  ? { ...p, id, expandedPrompt, genomeName, status: "streaming" }
                  : p
              )
            );
          },
          onVariantChunk: (id, chunk) => {
            const gid = variantGenomeMap.current.get(id);
            setPanels((prev) =>
              prev.map((p) =>
                p.genomeId === gid ? { ...p, code: p.code + chunk } : p
              )
            );
          },
          onVariantDone: (gen) => {
            const gid = variantGenomeMap.current.get(gen.id) || gen.compare_role;
            setPanels((prev) =>
              prev.map((p) =>
                p.genomeId === gid ? { ...p, status: "done", generation: gen } : p
              )
            );
          },
          onVariantError: (id, err) => {
            const gid = variantGenomeMap.current.get(id);
            setPanels((prev) =>
              prev.map((p) =>
                p.genomeId === gid ? { ...p, status: "error", error: err } : p
              )
            );
          },
          onError: (err) => setError(err),
        }
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Batch compare failed");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = async (panel: PanelResult) => {
    if (!panel.generation) return;
    const gen = panel.generation;
    try {
      await saveCompareResult({
        prompt: gen.prompt || prompt.trim(),
        expanded_prompt: gen.expanded_prompt || prompt.trim(),
        system_prompt: gen.system_prompt || "",
        genome_id: gen.genome_id || "",
        genome_name: gen.genome_name || "",
        model: gen.model || settings.model,
        output: gen.output || "",
        parsed_html: gen.parsed_html || "",
        compare_role: panel.genomeId,
      });
      setPanels((prev) =>
        prev.map((p) => (p.genomeId === panel.genomeId ? { ...p, saved: true } : p))
      );
    } catch (err) {
      console.error("Failed to save:", err);
    }
  };

  // Determine grid columns based on panel count
  const colClass =
    panels.length <= 2
      ? "grid-cols-2"
      : panels.length <= 3
        ? "grid-cols-3"
        : panels.length <= 4
          ? "grid-cols-2 lg:grid-cols-4"
          : panels.length <= 6
            ? "grid-cols-2 lg:grid-cols-3"
            : "grid-cols-2 lg:grid-cols-4";

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Controls bar */}
      <div className="shrink-0 border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex gap-3 items-center">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCompare()}
            placeholder="describe a UI to compare across genomes..."
            className="flex-1 bg-white/5 border border-white/[0.06] rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/20 transition"
          />

          {/* Genome multi-selector */}
          <div ref={genomeRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setGenomeOpen(!genomeOpen)}
              className={`p-2.5 rounded-xl border transition flex items-center gap-1.5 text-xs ${
                selectedGenomeIds.length > 0
                  ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
                  : "bg-white/5 border-white/[0.06] text-white/30 hover:text-white/50"
              }`}
              title="Select genomes to compare"
            >
              <i className="bi bi-palette" />
              <span className="hidden sm:inline">
                {selectedGenomeIds.length > 0
                  ? `${selectedGenomeIds.length} genomes`
                  : "Pick genomes"}
              </span>
              <i className={`bi bi-chevron-${genomeOpen ? "up" : "down"} text-[10px]`} />
            </button>
            {genomeOpen && (
              <div className="absolute top-full mt-2 right-0 w-64 max-h-72 overflow-auto rounded-lg border border-white/10 bg-neutral-900 shadow-xl z-50">
                <div className="sticky top-0 bg-neutral-900 border-b border-white/5 px-3 py-2 text-xs text-white/30">
                  Select 2-8 genomes ({selectedGenomeIds.length}/8)
                </div>
                {settings.availableGenomes.map((g) => {
                  const selected = selectedGenomeIds.includes(g.id);
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        toggleGenome(g.id);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm transition flex items-center gap-2 ${
                        selected
                          ? "bg-cyan-500/10 text-cyan-300 border-l-2 border-cyan-400"
                          : "text-white/70 hover:bg-white/5"
                      }`}
                    >
                      <i
                        className={`bi ${selected ? "bi-check-square-fill" : "bi-square"} text-xs ${
                          selected ? "text-cyan-400" : "text-white/20"
                        }`}
                      />
                      <span className="truncate">
                        {g.id}: {g.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            onClick={handleCompare}
            disabled={!prompt.trim() || isGenerating || selectedGenomeIds.length < 2}
            className="font-medium px-5 py-2.5 rounded-xl text-sm bg-cyan-500 text-black hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-2 shrink-0"
          >
            {isGenerating ? (
              <>
                <i className="bi bi-arrow-repeat animate-spin" />
                Comparing...
              </>
            ) : (
              <>
                <i className="bi bi-grid-3x3-gap" />
                Compare
              </>
            )}
          </button>
        </div>
        {error && (
          <div className="max-w-6xl mx-auto mt-2 text-red-400 text-xs flex items-center gap-1.5">
            <i className="bi bi-exclamation-triangle" />
            {error}
          </div>
        )}
      </div>

      {/* Grid of panels */}
      {panels.length === 0 ? (
        <div className="flex-1 flex items-center justify-center text-white/15 text-sm">
          Select 2-8 genomes and enter a prompt to compare
        </div>
      ) : (
        <div className={`flex-1 overflow-auto p-4 grid ${colClass} gap-3`}>
          {panels.map((panel) => (
            <BatchPanel
              key={panel.genomeId}
              panel={panel}
              onSave={() => handleSave(panel)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function BatchPanel({
  panel,
  onSave,
}: {
  panel: PanelResult;
  onSave: () => void;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shellReady, setShellReady] = useState(false);
  const [containerWidth, setContainerWidth] = useState(400);
  const [showCode, setShowCode] = useState(false);
  const [previewHtml, setPreviewHtml] = useState(SHELL_HTML);
  const hasContent = panel.code.length > 50;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (panel.status === "idle") {
      queueMicrotask(() => setShellReady(false));
    }
  }, [panel.status]);

  const handleLoad = useCallback(() => setShellReady(true), []);

  const pendingCode = useRef(panel.code);
  useEffect(() => {
    pendingCode.current = panel.code;
  }, [panel.code]);

  useEffect(() => {
    if (!hasContent || !shellReady) return;
    const flush = () => {
      setPreviewHtml(createShellHtml("bg-white", extractGeneratedBody(pendingCode.current)));
    };
    flush();
    if (panel.status === "streaming") {
      const interval = setInterval(flush, 800);
      return () => clearInterval(interval);
    }
  }, [hasContent, shellReady, panel.status]);

  useEffect(() => {
    if (panel.status === "done" && panel.generation?.parsed_html && iframeRef.current) {
      queueMicrotask(() => setPreviewHtml(panel.generation?.parsed_html ?? SHELL_HTML));
    }
  }, [panel.status, panel.generation?.parsed_html]);

  const scale = containerWidth / VIEWPORT_WIDTH;

  return (
    <div className="flex flex-col rounded-xl border border-white/[0.06] overflow-hidden bg-[#0c0c0c] min-h-0">
      {/* Header */}
      <div className="shrink-0 flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.02]">
        <div className="min-w-0">
          <span className="text-xs font-medium text-cyan-400 truncate block">
            {panel.genomeName || panel.genomeId}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {panel.status === "expanding" && (
            <span className="text-[10px] text-white/30 flex items-center gap-1">
              <i className="bi bi-arrow-repeat animate-spin" /> Expanding...
            </span>
          )}
          {panel.status === "streaming" && (
            <span className="text-[10px] text-white/30 flex items-center gap-1">
              <i className="bi bi-arrow-repeat animate-spin" /> Streaming...
            </span>
          )}
          {panel.status === "done" && (
            <>
              <button
                onClick={() => setShowCode(!showCode)}
                className={`p-1 rounded text-[10px] transition ${
                  showCode
                    ? "bg-white/10 text-white/70"
                    : "text-white/30 hover:text-white/50 hover:bg-white/5"
                }`}
                title="Toggle code"
              >
                <i className="bi bi-code-slash" />
              </button>
              <button
                onClick={() => {
                  if (panel.generation?.parsed_html) {
                    downloadHTML(
                      panel.generation.parsed_html,
                      `batch-${panel.genomeId}.html`
                    );
                  }
                }}
                className="p-1 rounded text-white/30 hover:text-white/50 hover:bg-white/5 transition text-[10px]"
                title="Export HTML"
              >
                <i className="bi bi-download" />
              </button>
              <button
                onClick={onSave}
                disabled={panel.saved}
                className={`px-2 py-0.5 rounded text-[10px] font-medium transition ${
                  panel.saved
                    ? "bg-green-500/15 text-green-400 cursor-default"
                    : "bg-white/10 text-white/70 hover:bg-white/15"
                }`}
                title="Save to library"
              >
                {panel.saved ? (
                  <>
                    <i className="bi bi-check2" /> Saved
                  </>
                ) : (
                  <>
                    <i className="bi bi-bookmark-plus" /> Save
                  </>
                )}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div ref={containerRef} className="flex-1 overflow-hidden bg-[#0a0a0a] relative min-h-[200px]">
        {panel.status === "idle" && (
          <div className="flex items-center justify-center h-full text-white/15 text-xs">
            Waiting...
          </div>
        )}

        {panel.status === "error" && (
          <div className="flex items-center justify-center h-full p-4">
            <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3">
              <div className="flex items-center gap-1.5 text-red-400 text-xs">
                <i className="bi bi-exclamation-triangle" />
                Failed
              </div>
              {panel.error && (
                <p className="text-[10px] text-red-400/60 mt-1 line-clamp-2">
                  {panel.error}
                </p>
              )}
            </div>
          </div>
        )}

        {panel.status === "expanding" && (
          <div className="flex items-center justify-center h-full">
            <div className="text-white/20 flex flex-col items-center gap-2">
              <i className="bi bi-arrow-repeat animate-spin text-lg" />
              <span className="text-xs">Expanding...</span>
            </div>
          </div>
        )}

        {showCode && panel.status === "done" && panel.generation?.parsed_html ? (
          <pre className="p-3 text-[10px] text-white/60 font-mono whitespace-pre-wrap overflow-auto h-full">
            {panel.generation.parsed_html}
          </pre>
        ) : (
          (hasContent || panel.status === "done") && (
            <>
              <iframe
                ref={iframeRef}
                srcDoc={previewHtml}
                sandbox={PREVIEW_IFRAME_SANDBOX}
                onLoad={handleLoad}
                style={{
                  width: VIEWPORT_WIDTH,
                  height: VIEWPORT_WIDTH * 0.75,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
                className={`border-0 ${
                  panel.status === "streaming" ? "pointer-events-none" : ""
                }`}
                title={`${panel.genomeName || panel.genomeId} preview`}
              />
              {panel.status === "streaming" && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 1.5s ease-in-out infinite",
                  }}
                />
              )}
            </>
          )
        )}
      </div>
    </div>
  );
}
