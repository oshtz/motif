import { useState, useRef, useEffect, useCallback } from "react";
import { useSettingsStore, type Generation } from "../store";
import { compareStream, saveCompareResult, downloadHTML } from "../api";
import {
  createShellHtml,
  extractGeneratedBody,
  PREVIEW_IFRAME_SANDBOX,
} from "./html-utils";

const VIEWPORT_WIDTH = 1280;

const SHELL_HTML = createShellHtml("bg-white");

interface PanelResult {
  id: string;
  code: string;
  status: "idle" | "expanding" | "streaming" | "done" | "error";
  error?: string;
  generation?: Partial<Generation>;
  genomeName?: string;
  expandedPrompt?: string;
  saved?: boolean;
}

const emptyPanel = (): PanelResult => ({
  id: "",
  code: "",
  status: "idle",
  genomeName: "",
  expandedPrompt: "",
});

export default function CompareView() {
  const settings = useSettingsStore();
  const [prompt, setPrompt] = useState("");
  const [genomeId, setGenomeId] = useState("");
  const [genomeOpen, setGenomeOpen] = useState(false);
  const genomeRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [rawPanel, setRawPanel] = useState<PanelResult>(emptyPanel());
  const [genomePanel, setGenomePanel] = useState<PanelResult>(emptyPanel());
  const availableGenomeCount = settings.availableGenomes.length;
  const loadGenomes = settings.loadGenomes;

  // Load genomes on mount if needed
  useEffect(() => {
    if (availableGenomeCount === 0) loadGenomes();
  }, [availableGenomeCount, loadGenomes]);

  // Close genome picker on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (genomeRef.current && !genomeRef.current.contains(e.target as Node)) setGenomeOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Map of variantId -> role
  const roleMapRef = useRef<Map<string, "raw" | "genome">>(new Map());

  const handleCompare = async () => {
    if (!prompt.trim() || isGenerating) return;
    setError(null);
    setIsGenerating(true);
    setRawPanel(emptyPanel());
    setGenomePanel(emptyPanel());
    roleMapRef.current.clear();

    try {
      await compareStream(
        {
          prompt: prompt.trim(),
          model: settings.model || undefined,
          temperature: settings.temperature,
          genomeId: genomeId || undefined,
        },
        {
          onVariantExpanding: (id, _index, compareRole) => {
            if (compareRole) roleMapRef.current.set(id, compareRole as "raw" | "genome");
            const setter = compareRole === "raw" ? setRawPanel : setGenomePanel;
            setter((p) => ({ ...p, id, status: "expanding" }));
          },
          onVariantStart: (id, expandedPrompt, genomeName, compareRole) => {
            if (compareRole) roleMapRef.current.set(id, compareRole as "raw" | "genome");
            const role = roleMapRef.current.get(id) || compareRole;
            const setter = role === "raw" ? setRawPanel : setGenomePanel;
            setter((p) => ({ ...p, id, expandedPrompt, genomeName, status: "streaming" }));
          },
          onVariantChunk: (id, chunk) => {
            const role = roleMapRef.current.get(id);
            const setter = role === "raw" ? setRawPanel : setGenomePanel;
            setter((p) => ({ ...p, code: p.code + chunk }));
          },
          onVariantDone: (gen) => {
            const role = roleMapRef.current.get(gen.id) || gen.compare_role;
            const setter = role === "raw" ? setRawPanel : setGenomePanel;
            setter((p) => ({ ...p, status: "done", generation: gen }));
          },
          onVariantError: (id, err) => {
            const role = roleMapRef.current.get(id);
            const setter = role === "raw" ? setRawPanel : setGenomePanel;
            setter((p) => ({ ...p, status: "error", error: err }));
          },
          onError: (err) => setError(err),
        }
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Compare failed");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = async (panel: PanelResult, role: string) => {
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
        compare_role: role,
      });
      const setter = role === "raw" ? setRawPanel : setGenomePanel;
      setter((p) => ({ ...p, saved: true }));
    } catch (err) {
      console.error("Failed to save:", err);
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Controls bar */}
      <div className="shrink-0 border-b border-white/5 px-6 py-4">
        <div className="max-w-5xl mx-auto flex gap-3 items-center">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCompare()}
            placeholder="describe a UI to compare raw vs genome..."
            className="flex-1 bg-white/5 border border-white/[0.06] rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/20 transition"
          />

          {/* Genome selector (for genome side) */}
          <div ref={genomeRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setGenomeOpen(!genomeOpen)}
              className={`p-2.5 rounded-xl border transition flex items-center gap-1.5 text-xs ${
                genomeId
                  ? "bg-white/10 border-white/15 text-white/70"
                  : "bg-white/5 border-white/[0.06] text-white/30 hover:text-white/50"
              }`}
              title={genomeId ? `Genome: ${genomeId}` : "Auto genome (for genome side)"}
            >
              <i className="bi bi-palette" />
              <span className="hidden sm:inline max-w-[80px] truncate">
                {genomeId || "Auto"}
              </span>
              <i className={`bi bi-chevron-${genomeOpen ? "up" : "down"} text-[10px]`} />
            </button>
            {genomeOpen && (
              <div className="absolute top-full mt-2 right-0 w-56 max-h-64 overflow-auto rounded-lg border border-white/10 bg-neutral-900 shadow-xl z-50">
                <button
                  type="button"
                  onMouseDown={(e) => { e.preventDefault(); setGenomeId(""); setGenomeOpen(false); }}
                  className={`w-full text-left px-3 py-2 text-sm transition ${
                    !genomeId ? "bg-white/10 text-white border-l-2 border-white/40" : "text-white/70 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <i className="bi bi-magic text-xs" /> Auto-select
                  </div>
                  <div className="text-white/30 text-xs">Match genome to prompt</div>
                </button>
                {settings.availableGenomes.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onMouseDown={(e) => { e.preventDefault(); setGenomeId(g.id); setGenomeOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-sm transition ${
                      g.id === genomeId ? "bg-white/10 text-white border-l-2 border-white/40" : "text-white/70 hover:bg-white/5"
                    }`}
                  >
                    {g.id}: {g.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleCompare}
            disabled={!prompt.trim() || isGenerating}
            className="font-medium px-5 py-2.5 rounded-xl text-sm bg-amber-500 text-black hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-2 shrink-0"
          >
            {isGenerating ? (
              <>
                <i className="bi bi-arrow-repeat animate-spin" />
                Comparing...
              </>
            ) : (
              <>
                <i className="bi bi-layout-split" />
                Compare
              </>
            )}
          </button>
        </div>
        {error && (
          <div className="max-w-5xl mx-auto mt-2 text-red-400 text-xs flex items-center gap-1.5">
            <i className="bi bi-exclamation-triangle" />
            {error}
          </div>
        )}
      </div>

      {/* Side-by-side panels */}
      <div className="flex-1 flex overflow-hidden">
        <ComparePanel
          label="Raw"
          sublabel="No genome, no expansion"
          panel={rawPanel}
          accentColor="neutral"
          onSave={() => handleSave(rawPanel, "raw")}
        />
        <div className="w-px bg-white/5 shrink-0" />
        <ComparePanel
          label={genomePanel.genomeName ? `Genome: ${genomePanel.genomeName}` : "Genome"}
          sublabel="Full pipeline"
          panel={genomePanel}
          accentColor="amber"
          onSave={() => handleSave(genomePanel, "genome")}
        />
      </div>
    </div>
  );
}

function ComparePanel({
  label,
  sublabel,
  panel,
  accentColor,
  onSave,
}: {
  label: string;
  sublabel: string;
  panel: PanelResult;
  accentColor: "neutral" | "amber";
  onSave: () => void;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shellReady, setShellReady] = useState(false);
  const [containerWidth, setContainerWidth] = useState(600);
  const [containerHeight, setContainerHeight] = useState(800);
  const [showCode, setShowCode] = useState(false);
  const [previewHtml, setPreviewHtml] = useState(SHELL_HTML);
  const hasContent = panel.code.length > 50;

  // Track container width for scaling
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
      setContainerHeight(entry.contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Reset shell when panel changes
  useEffect(() => {
    if (panel.status === "idle") {
      queueMicrotask(() => setShellReady(false));
    }
  }, [panel.status]);

  const handleLoad = useCallback(() => setShellReady(true), []);

  // Keep a ref to the latest code
  const pendingCode = useRef(panel.code);
  useEffect(() => {
    pendingCode.current = panel.code;
  }, [panel.code]);

  // Refresh preview on interval while streaming
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

  // Final flush when done
  useEffect(() => {
    if (panel.status === "done" && panel.generation?.parsed_html && iframeRef.current) {
      queueMicrotask(() => setPreviewHtml(panel.generation?.parsed_html ?? SHELL_HTML));
    }
  }, [panel.status, panel.generation?.parsed_html]);

  const scale = containerWidth / VIEWPORT_WIDTH;

  return (
    <div className="flex-1 flex flex-col overflow-hidden min-w-0">
      {/* Header */}
      <div className={`shrink-0 flex items-center justify-between px-4 py-2.5 border-b ${
        accentColor === "amber" ? "border-amber-500/10 bg-amber-500/[0.03]" : "border-white/5 bg-white/[0.01]"
      }`}>
        <div>
          <span className={`text-sm font-medium ${accentColor === "amber" ? "text-amber-400" : "text-white/60"}`}>
            {label}
          </span>
          <span className="text-xs text-white/25 ml-2">{sublabel}</span>
        </div>
        <div className="flex items-center gap-2">
          {/* Status */}
          {panel.status === "expanding" && (
            <span className="text-xs text-white/30 flex items-center gap-1">
              <i className="bi bi-arrow-repeat animate-spin text-[10px]" /> Interpreting...
            </span>
          )}
          {panel.status === "streaming" && (
            <span className="text-xs text-white/30 flex items-center gap-1">
              <i className="bi bi-arrow-repeat animate-spin text-[10px]" /> Generating...
            </span>
          )}
          {panel.status === "done" && (
            <>
              <button
                onClick={() => setShowCode(!showCode)}
                className={`p-1.5 rounded-lg text-xs transition ${
                  showCode ? "bg-white/10 text-white/70" : "text-white/30 hover:text-white/50 hover:bg-white/5"
                }`}
                title="Toggle code"
              >
                <i className="bi bi-code-slash" />
              </button>
              <button
                onClick={() => {
                  if (panel.generation?.parsed_html) {
                    downloadHTML(panel.generation.parsed_html, `compare-${label.toLowerCase().replace(/\s+/g, "-")}.html`);
                  }
                }}
                className="p-1.5 rounded-lg text-white/30 hover:text-white/50 hover:bg-white/5 transition text-xs"
                title="Export HTML"
              >
                <i className="bi bi-download" />
              </button>
              <button
                onClick={onSave}
                disabled={panel.saved}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                  panel.saved
                    ? "bg-green-500/15 text-green-400 cursor-default"
                    : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"
                }`}
                title="Save to library"
              >
                {panel.saved ? (
                  <><i className="bi bi-check2" /> Saved</>
                ) : (
                  <><i className="bi bi-bookmark-plus" /> Save</>
                )}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div ref={containerRef} className="flex-1 overflow-auto bg-[#0a0a0a] relative">
        {panel.status === "idle" && (
          <div className="flex items-center justify-center h-full text-white/15 text-sm">
            Enter a prompt and click Compare
          </div>
        )}

        {panel.status === "error" && (
          <div className="flex items-center justify-center h-full">
            <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-6 max-w-sm">
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <i className="bi bi-exclamation-triangle" />
                Generation failed
              </div>
              {panel.error && (
                <p className="text-xs text-red-400/60 mt-1">{panel.error}</p>
              )}
            </div>
          </div>
        )}

        {(panel.status === "expanding") && (
          <div className="flex items-center justify-center h-full">
            <div className="text-white/20 flex flex-col items-center gap-3">
              <i className="bi bi-arrow-repeat animate-spin text-2xl" />
              <span className="text-sm">
                {accentColor === "amber" ? "Selecting genome & expanding prompt..." : "Preparing..."}
              </span>
            </div>
          </div>
        )}

        {showCode && panel.status === "done" && panel.generation?.parsed_html ? (
          <pre className="p-4 text-xs text-white/60 font-mono whitespace-pre-wrap overflow-auto h-full">
            {panel.generation.parsed_html}
          </pre>
        ) : (hasContent || panel.status === "done") && (
          <>
            <iframe
              ref={iframeRef}
              srcDoc={previewHtml}
              sandbox={PREVIEW_IFRAME_SANDBOX}
              onLoad={handleLoad}
              style={{
                width: VIEWPORT_WIDTH,
                height: containerHeight / scale,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
              className={`border-0 ${panel.status === "streaming" ? "pointer-events-none" : ""}`}
              title={`${label} preview`}
            />

            {/* Shimmer overlay while streaming */}
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
        )}
      </div>

      {/* Expanded prompt footer */}
      {panel.expandedPrompt && panel.status === "done" && !showCode && (
        <div className="shrink-0 border-t border-white/5 px-4 py-2 bg-white/[0.02]">
          <div className="text-[10px] text-white/20 uppercase tracking-wider mb-1">
            {accentColor === "amber" ? "Expanded Prompt" : "Original Prompt"}
          </div>
          <p className="text-xs text-white/40 line-clamp-2">{panel.expandedPrompt}</p>
        </div>
      )}
    </div>
  );
}
