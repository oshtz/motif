import { useState, useRef, useEffect } from "react";
import { useAppStore } from "../store";
import { downloadHTML, toggleFavorite, saveCssOverrides, editStream } from "../api";
import {
  fixBareHexColors,
  INSPECT_IFRAME_SANDBOX,
  PREVIEW_IFRAME_SANDBOX,
} from "./html-utils";
import LineageView from "./LineageView";
import AnimationPlayground from "./AnimationPlayground";
import ResponsiveChecker from "./ResponsiveChecker";
import ExportModal from "./ExportModal";
import { saveComponent } from "../api";

const VIEWPORTS = [
  { label: "Mobile", icon: "bi-phone", width: 375, height: 667 },
  { label: "Tablet", icon: "bi-tablet", width: 768, height: 1024 },
  { label: "Laptop", icon: "bi-laptop", width: 1280, height: 800 },
  { label: "Desktop", icon: "bi-display", width: 1920, height: 1080 },
  { label: "Full", icon: "bi-arrows-fullscreen", width: 0, height: 0 },
];

// Prevent generated anchor clicks from navigating the iframe away. Anchor links
// still scroll within the preview.
const LINK_INTERCEPT = `<script>document.addEventListener('click',function(e){var a=e.target.closest('a');if(a){var h=a.getAttribute('href');if(!h||h==='#'||h.startsWith('#')){return}e.preventDefault();}});</script>`;

interface DirectEditTarget {
  selector?: string;
  tagName?: string;
  id?: string;
  className?: string;
  role?: string;
  ariaLabel?: string;
  text?: string;
  outerHTML?: string;
}

function compactPreviewText(value: unknown, limit: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, limit);
}

function escapeSelectorPart(value: string): string {
  if (window.CSS?.escape) return window.CSS.escape(value);
  return value.replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}

function selectorForElement(element: Element): string {
  if (element.id) return `#${escapeSelectorPart(element.id)}`;
  const parts: string[] = [];
  let current: Element | null = element;

  while (current && current.tagName.toLowerCase() !== "html") {
    const tag = current.tagName.toLowerCase();
    const classes = Array.from(current.classList).filter(Boolean).slice(0, 2);
    let part = tag;
    if (classes.length > 0) {
      part += `.${classes.map(escapeSelectorPart).join(".")}`;
    }
    const parent: Element | null = current.parentElement;
    if (parent) {
      const currentTag = current.tagName;
      const siblings = (Array.from(parent.children) as Element[]).filter((child) => child.tagName === currentTag);
      if (siblings.length > 1) {
        part += `:nth-of-type(${siblings.indexOf(current) + 1})`;
      }
    }
    parts.unshift(part);
    if (tag === "body" || parts.length >= 6) break;
    current = parent;
  }

  return parts.join(" > ");
}

function directTargetFromElement(element: Element): DirectEditTarget {
  const htmlElement = element as HTMLElement;
  return {
    selector: selectorForElement(element),
    tagName: element.tagName.toLowerCase(),
    id: element.id || "",
    className: typeof htmlElement.className === "string" ? htmlElement.className : "",
    role: element.getAttribute("role") || "",
    ariaLabel: element.getAttribute("aria-label") || element.getAttribute("aria-labelledby") || "",
    text: compactPreviewText(htmlElement.innerText || element.textContent || "", 500),
    outerHTML: compactPreviewText((element as HTMLElement).outerHTML || "", 900),
  };
}

export default function PreviewView() {
  const {
    selectedId,
    setSelectedId,
    setActiveTab,
    generations,
    toggleFavorite: toggleFav,
    enterEditMode,
    addGeneration,
    startGeneration,
    endGeneration,
  } =
    useAppStore();
  const [viewportIdx, setViewportIdx] = useState(4);
  const [showCode, setShowCode] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showLineage, setShowLineage] = useState(false);
  const [showPlayground, setShowPlayground] = useState(false);
  const [showResponsive, setShowResponsive] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showCssEditor, setShowCssEditor] = useState(false);
  const [extractMode, setExtractMode] = useState(false);
  const [extractStatus, setExtractStatus] = useState<string | null>(null);
  const [directEditMode, setDirectEditMode] = useState(false);
  const [directTarget, setDirectTarget] = useState<DirectEditTarget | null>(null);
  const [directInstruction, setDirectInstruction] = useState("");
  const [directStatus, setDirectStatus] = useState<string | null>(null);
  const [directError, setDirectError] = useState<string | null>(null);
  const [directBusy, setDirectBusy] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const generation = generations.find((g) => g.id === selectedId);
  const [cssOverrides, setCssOverrides] = useState(generation?.css_overrides || "");

  // Listen for component extraction messages from iframe
  useEffect(() => {
    if (!extractMode) return;
    const handler = async (e: MessageEvent) => {
      if (e.data?.type !== "motif-extract" || !e.data.html) return;
      try {
        await saveComponent({
          name: `Component ${new Date().toLocaleTimeString()}`,
          html: e.data.html,
          source_generation_id: selectedId || "",
          genome_id: generation?.genome_id || "",
        });
        setExtractStatus("Saved!");
        setTimeout(() => setExtractStatus(null), 2000);
      } catch {
        setExtractStatus("Failed to save");
        setTimeout(() => setExtractStatus(null), 2000);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [extractMode, selectedId, generation?.genome_id]);

  // Set srcDoc via ref so viewport changes don't reload the iframe
  useEffect(() => {
    if (iframeRef.current && generation) {
      const html = fixBareHexColors(generation.parsed_html);
      // Inject link interceptor before </body> or at end
      const injected = html.includes('</body>')
        ? html.replace('</body>', LINK_INTERCEPT + '</body>')
        : html + LINK_INTERCEPT;
      iframeRef.current.srcdoc = injected;
    }
  }, [directEditMode, extractMode, generation, showCssEditor]);

  useEffect(() => {
    if (!directEditMode) return;
    const iframe = iframeRef.current;
    let hovered: Element | null = null;
    let selected: Element | null = null;
    let attachedDoc: Document | null = null;
    let setupTimer: number | null = null;
    let setupAttempts = 0;
    const isSelectable = (target: EventTarget | null): target is Element => {
      const candidate = target as Element | null;
      if (!candidate || candidate.nodeType !== 1 || !("tagName" in candidate)) return false;
      const tag = candidate.tagName.toLowerCase();
      return tag !== "html" && tag !== "body" && tag !== "head" && tag !== "script" && tag !== "style";
    };
    const clearHover = () => {
      if (hovered && hovered !== selected) hovered.classList.remove("motif-direct-hover");
      hovered = null;
    };
    const onMouseOver = (event: MouseEvent) => {
      if (!isSelectable(event.target)) return;
      clearHover();
      hovered = event.target;
      hovered.classList.add("motif-direct-hover");
    };
    const onMouseOut = (event: MouseEvent) => {
      if (isSelectable(event.target) && event.target !== selected) {
        event.target.classList.remove("motif-direct-hover");
      }
    };
    const onClick = (event: MouseEvent) => {
      if (!isSelectable(event.target)) return;
      event.preventDefault();
      event.stopPropagation();
      if (selected) selected.classList.remove("motif-direct-selected");
      selected = event.target;
      selected.classList.remove("motif-direct-hover");
      selected.classList.add("motif-direct-selected");
      setDirectTarget(directTargetFromElement(selected));
      setDirectError(null);
      setDirectStatus("Element selected");
    };

    const detachFromDoc = (doc: Document | null) => {
      if (!doc) return;
      doc.getElementById("motif-direct-edit-style")?.remove();
      doc.removeEventListener("mouseover", onMouseOver, true);
      doc.removeEventListener("mouseout", onMouseOut, true);
      doc.removeEventListener("click", onClick, true);
    };

    const attachToPreview = () => {
      try {
        const doc = iframe?.contentDocument;
        if (!doc?.head || !doc.body) {
          if (setupAttempts < 20) {
            setupAttempts += 1;
            setupTimer = window.setTimeout(attachToPreview, 100);
          }
          return;
        }
        if (attachedDoc === doc) return;
        detachFromDoc(attachedDoc);
        const prevStyle = doc.getElementById("motif-direct-edit-style");
        if (prevStyle) prevStyle.remove();
        const prevScript = doc.getElementById("motif-direct-edit-script");
        if (prevScript) prevScript.remove();

        const style = doc.createElement("style");
        style.id = "motif-direct-edit-style";
        style.textContent = `
          .motif-direct-hover {
            outline: 2px solid rgba(16, 185, 129, 0.75) !important;
            outline-offset: 3px !important;
            cursor: crosshair !important;
          }
          .motif-direct-selected {
            outline: 3px solid rgba(16, 185, 129, 0.95) !important;
            outline-offset: 4px !important;
            box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.08) !important;
          }
        `;
        doc.head.appendChild(style);
        doc.addEventListener("mouseover", onMouseOver, true);
        doc.addEventListener("mouseout", onMouseOut, true);
        doc.addEventListener("click", onClick, true);
        attachedDoc = doc;
        setDirectError(null);
      } catch {
        setDirectError("Could not attach direct edit listeners");
      }
    };

    const onIframeLoad = () => {
      setupAttempts = 0;
      attachToPreview();
    };

    iframe?.addEventListener("load", onIframeLoad);
    setupTimer = window.setTimeout(attachToPreview, 100);

    return () => {
      if (setupTimer !== null) window.clearTimeout(setupTimer);
      try {
        iframe?.removeEventListener("load", onIframeLoad);
        detachFromDoc(attachedDoc ?? iframe?.contentDocument ?? null);
      } catch {
        // sandbox
      }
    };
  }, [directEditMode, generation?.id]);

  if (!generation) {
    return (
      <div className="flex-1 flex items-center justify-center text-white/30 text-sm">
        No generation selected. Go to Gallery to pick one.
      </div>
    );
  }

  const vp = VIEWPORTS[viewportIdx];
  const isFull = vp.width === 0;
  const iframeSandbox = extractMode || showCssEditor || directEditMode
    ? INSPECT_IFRAME_SANDBOX
    : PREVIEW_IFRAME_SANDBOX;

  const handleExport = () => {
    downloadHTML(
      generation.parsed_html,
      `motif-${generation.id.slice(0, 8)}.html`
    );
  };

  const handleFavorite = async () => {
    toggleFav(generation.id);
    await toggleFavorite(generation.id, !generation.favorited);
  };

  const handleBack = () => {
    setSelectedId(null);
    setActiveTab("gallery");
  };

  const handleDirectEdit = async () => {
    const instruction = directInstruction.trim();
    if (!instruction || !directTarget || directBusy) return;
    setDirectBusy(true);
    setDirectError(null);
    setDirectStatus("Starting localized edit...");
    startGeneration();
    try {
      await editStream(
        {
          generationId: generation.id,
          instruction,
          target: directTarget,
        },
        {
          onVariantStart: () => setDirectStatus("Editing selected element..."),
          onVariantChunk: () => setDirectStatus("Streaming edited fork..."),
          onVariantDone: (next) => {
            addGeneration(next);
            setSelectedId(next.id);
            setDirectInstruction("");
            setDirectTarget(null);
            setDirectEditMode(false);
            setDirectStatus("Edit created");
            window.setTimeout(() => setDirectStatus(null), 2000);
          },
          onVariantError: (_id, error) => {
            setDirectError(error);
            setDirectStatus(null);
          },
          onError: (error) => {
            setDirectError(error);
            setDirectStatus(null);
          },
        }
      );
    } catch (err) {
      setDirectError(err instanceof Error ? err.message : "Direct edit failed");
      setDirectStatus(null);
    } finally {
      setDirectBusy(false);
      endGeneration();
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden pt-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <button
            onClick={handleBack}
            className="p-2 rounded-lg hover:bg-white/10 transition flex items-center gap-1.5 text-xs text-white/50"
            title="Back to Gallery"
          >
            <i className="bi bi-arrow-left" />
          </button>
          <span className="text-sm text-white/50 truncate max-w-sm">
            {generation.prompt}
          </span>
        </div>

        {/* Viewport switcher */}
        <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
          {VIEWPORTS.map((v, i) => (
            <button
              key={v.label}
              onClick={() => setViewportIdx(i)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center gap-1.5 ${
                i === viewportIdx
                  ? "bg-white/15 text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
              title={v.label}
            >
              <i className={`bi ${v.icon}`} />
              <span className="hidden sm:inline">{v.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {!isFull && (
            <span className="text-xs text-white/30 hidden sm:inline">
              {vp.width} x {vp.height}
            </span>
          )}
          <button
            onClick={handleFavorite}
            className={`p-2 rounded-lg transition ${
              generation.favorited
                ? "bg-yellow-500/20 text-yellow-400"
                : "hover:bg-white/10 text-white/50"
            }`}
            title="Favorite"
          >
            <i
              className={`bi ${generation.favorited ? "bi-star-fill" : "bi-star"}`}
            />
          </button>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={`p-2 rounded-lg transition ${showInfo ? "bg-white/15 text-white" : "hover:bg-white/10 text-white/50"}`}
            title="Info"
          >
            <i className="bi bi-info-circle" />
          </button>
          <button
            onClick={() => setShowCode(!showCode)}
            className={`p-2 rounded-lg transition ${showCode ? "bg-white/15 text-white" : "hover:bg-white/10 text-white/50"}`}
            title="View Code"
          >
            <i className="bi bi-code-slash" />
          </button>
          <button
            onClick={() => setShowResponsive(true)}
            className="p-2 rounded-lg transition hover:bg-white/10 text-white/50"
            title="Responsive check"
          >
            <i className="bi bi-phone" />
          </button>
          <button
            onClick={() => setShowPlayground(true)}
            className="p-2 rounded-lg transition hover:bg-white/10 text-white/50"
            title="Animation playground"
          >
            <i className="bi bi-play-circle" />
          </button>
          <button
            onClick={() => {
              setDirectEditMode((value) => {
                const next = !value;
                if (next) {
                  setExtractMode(false);
                  setDirectTarget(null);
                  setDirectStatus("Click an element in the preview");
                  setDirectError(null);
                } else {
                  setDirectTarget(null);
                  setDirectStatus(null);
                  setDirectError(null);
                }
                return next;
              });
            }}
            className={`p-2 rounded-lg transition ${
              directEditMode ? "bg-emerald-500/15 text-emerald-300" : "hover:bg-white/10 text-white/50"
            }`}
            title={directEditMode ? "Exit direct edit mode" : "Direct element edit"}
            aria-label={directEditMode ? "Exit direct edit mode" : "Direct element edit"}
          >
            <i className="bi bi-cursor" />
          </button>
          <button
            onClick={() => {
              setExtractMode(!extractMode);
              if (!extractMode) {
                setDirectEditMode(false);
                setDirectTarget(null);
              }
              if (!extractMode) {
                setExtractStatus(null);
                // Inject extraction script into iframe
                try {
                  const doc = iframeRef.current?.contentDocument;
                  if (doc) {
                    // Remove previous extraction listeners
                    const prev = doc.getElementById("motif-extract-script");
                    if (prev) prev.remove();
                    const prevStyle = doc.getElementById("motif-extract-style");
                    if (prevStyle) prevStyle.remove();

                    // Add hover highlight style
                    const style = doc.createElement("style");
                    style.id = "motif-extract-style";
                    style.textContent = `
                      .motif-extract-hover {
                        outline: 2px solid rgba(6, 182, 212, 0.6) !important;
                        outline-offset: 2px !important;
                        cursor: crosshair !important;
                      }
                    `;
                    doc.head.appendChild(style);

                    // Add hover/click handlers
                    const script = doc.createElement("script");
                    script.id = "motif-extract-script";
                    script.textContent = `
                      (function() {
                        let hovered = null;
                        document.addEventListener('mouseover', function(e) {
                          if (hovered) hovered.classList.remove('motif-extract-hover');
                          hovered = e.target;
                          hovered.classList.add('motif-extract-hover');
                        });
                        document.addEventListener('mouseout', function(e) {
                          e.target.classList.remove('motif-extract-hover');
                        });
                        document.addEventListener('click', function(e) {
                          e.preventDefault();
                          e.stopPropagation();
                          const el = e.target;
                          el.classList.remove('motif-extract-hover');
                          const html = el.outerHTML;
                          window.parent.postMessage({ type: 'motif-extract', html: html }, '*');
                        }, true);
                      })();
                    `;
                    doc.body.appendChild(script);
                  }
                } catch { /* sandbox */ }
              } else {
                // Cleanup extraction mode
                try {
                  const doc = iframeRef.current?.contentDocument;
                  if (doc) {
                    const s = doc.getElementById("motif-extract-script");
                    if (s) s.remove();
                    const st = doc.getElementById("motif-extract-style");
                    if (st) st.remove();
                  }
                } catch { /* sandbox */ }
              }
            }}
            className={`p-2 rounded-lg transition ${
              extractMode ? "bg-cyan-500/15 text-cyan-400" : "hover:bg-white/10 text-white/50"
            }`}
            title={extractMode ? "Exit extract mode" : "Extract component"}
          >
            <i className="bi bi-scissors" />
          </button>
          <button
            onClick={() => setShowLineage(true)}
            className="p-2 rounded-lg transition hover:bg-white/10 text-white/50"
            title="View lineage tree"
          >
            <i className="bi bi-diagram-3" />
          </button>
          <button
            onClick={() => { enterEditMode(generation.id); setActiveTab("gallery"); }}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/15 transition flex items-center gap-1.5"
          >
            <i className="bi bi-pencil" />
            Edit
          </button>
          <button
            onClick={() => setShowCssEditor(!showCssEditor)}
            className={`p-2 rounded-lg transition ${showCssEditor ? "bg-white/15 text-white" : "hover:bg-white/10 text-white/50"}`}
            title="CSS tweaks"
          >
            <i className="bi bi-braces" />
          </button>
          <button
            onClick={() => setShowExport(true)}
            className="p-2 rounded-lg transition hover:bg-white/10 text-white/50"
            title="Export to framework / tokens"
          >
            <i className="bi bi-box-arrow-up" />
          </button>
          <button
            onClick={handleExport}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/15 transition flex items-center gap-1.5"
          >
            <i className="bi bi-download" />
            HTML
          </button>
        </div>
      </div>

      {/* Extract mode banner */}
      {extractMode && (
        <div className="shrink-0 px-4 py-2 bg-cyan-500/10 border-b border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-cyan-400">
            <i className="bi bi-scissors" />
            <span>Click any element in the preview to extract it as a component</span>
          </div>
          {extractStatus && (
            <span className="text-xs text-green-400 flex items-center gap-1">
              <i className="bi bi-check2" /> {extractStatus}
            </span>
          )}
        </div>
      )}

      {directEditMode && (
        <div className="shrink-0 border-b border-emerald-500/20 bg-emerald-500/[0.08] px-4 py-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-emerald-300">
                <i className="bi bi-cursor" />
                <span>{directTarget ? "Selected element" : "Click an element in the preview to target a localized edit"}</span>
              </div>
              {directTarget && (
                <div className="mt-1 max-w-3xl truncate text-[11px] text-white/35">
                  {directTarget.tagName || "element"}
                  {directTarget.id ? ` #${directTarget.id}` : ""}
                  {directTarget.selector ? ` - ${directTarget.selector}` : ""}
                  {directTarget.text ? ` - ${directTarget.text}` : ""}
                </div>
              )}
              {directStatus && (
                <div className="mt-1 text-[11px] text-emerald-200/55">{directStatus}</div>
              )}
              {directError && (
                <div className="mt-1 text-[11px] text-red-300">{directError}</div>
              )}
            </div>
            <div className="flex min-w-[280px] flex-1 flex-wrap items-center justify-end gap-2">
              {["make this denser", "fix contrast here", "apply active recipe here", "swap this card treatment"].map((quick) => (
                <button
                  key={quick}
                  type="button"
                  onClick={() => setDirectInstruction(quick)}
                  className="rounded-md border border-white/[0.06] bg-black/20 px-2 py-1.5 text-[11px] text-white/45 hover:text-emerald-200"
                >
                  {quick}
                </button>
              ))}
              <input
                value={directInstruction}
                onChange={(event) => setDirectInstruction(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") void handleDirectEdit();
                }}
                placeholder={directTarget ? "localized edit..." : "select an element first..."}
                disabled={!directTarget || directBusy}
                className="min-w-[220px] flex-1 rounded-lg border border-white/[0.06] bg-black/25 px-3 py-2 text-xs text-white/70 placeholder:text-white/25 outline-none focus:border-emerald-400/40 disabled:opacity-45"
              />
              <button
                type="button"
                onClick={() => void handleDirectEdit()}
                disabled={!directTarget || !directInstruction.trim() || directBusy}
                className="rounded-lg bg-emerald-300 px-3 py-2 text-xs font-medium text-black disabled:opacity-40"
              >
                {directBusy ? (
                  <span className="inline-flex items-center gap-1.5">
                    <i className="bi bi-arrow-repeat animate-spin" />
                    Editing
                  </span>
                ) : (
                  "Apply"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Preview area */}
        <div className="flex-1 flex items-center justify-center p-6 overflow-auto">
          <div
            className="bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300"
            style={
              isFull
                ? { width: "100%", height: "100%" }
                : {
                    width: `${vp.width}px`,
                    maxWidth: "100%",
                    height: `${vp.height}px`,
                    maxHeight: "100%",
                  }
            }
          >
            <iframe
              ref={iframeRef}
              sandbox={iframeSandbox}
              className="w-full h-full border-0"
              title="Preview"
            />
          </div>
        </div>

        {/* Side panel: CSS editor */}
        {showCssEditor && (
          <div className="w-80 border-l border-white/10 bg-[#0d0d0d] flex flex-col">
            <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-xs font-medium text-white/60 flex items-center gap-1.5">
                <i className="bi bi-braces" /> CSS Overrides
              </h3>
              <button
                onClick={async () => {
                  await saveCssOverrides(generation.id, cssOverrides);
                  // Re-inject into iframe
                  if (iframeRef.current?.contentDocument) {
                    try {
                      const doc = iframeRef.current.contentDocument;
                      let style = doc.getElementById("motif-css-overrides");
                      if (!style) {
                        style = doc.createElement("style");
                        style.id = "motif-css-overrides";
                        doc.head.appendChild(style);
                      }
                      style.textContent = cssOverrides;
                    } catch { /* sandbox */ }
                  }
                }}
                className="text-[10px] px-2 py-1 rounded bg-white/10 text-white/60 hover:bg-white/15 transition"
              >
                Apply & Save
              </button>
            </div>
            <textarea
              value={cssOverrides}
              onChange={(e) => {
                setCssOverrides(e.target.value);
                // Live preview: inject CSS on every change (debounced in the browser)
                if (iframeRef.current?.contentDocument) {
                  try {
                    const doc = iframeRef.current.contentDocument;
                    let style = doc.getElementById("motif-css-overrides");
                    if (!style) {
                      style = doc.createElement("style");
                      style.id = "motif-css-overrides";
                      doc.head.appendChild(style);
                    }
                    style.textContent = e.target.value;
                  } catch { /* sandbox */ }
                }
              }}
              placeholder={`/* Override styles */\n.header {\n  background: #1a1a2e;\n}`}
              className="flex-1 bg-transparent p-4 text-xs text-white/60 font-mono placeholder:text-white/15 outline-none resize-none"
              spellCheck={false}
            />
          </div>
        )}

        {/* Side panel: info or code */}
        {(showCode || showInfo) && (
          <div className="w-96 border-l border-white/10 overflow-auto bg-[#0d0d0d]">
            {showInfo && (
              <div className="p-4 space-y-4 border-b border-white/10">
                <h3 className="text-sm font-medium text-white/70 flex items-center gap-2">
                  <i className="bi bi-info-circle" /> Details
                </h3>
                <div className="space-y-3 text-sm">
                  {generation.genome_name && (
                    <div>
                      <span className="text-white/30">Genome</span>
                      <p className="text-white/60">
                        <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-md px-2 py-0.5 text-xs">
                          <i className="bi bi-palette" />
                          {generation.genome_name}
                        </span>
                      </p>
                    </div>
                  )}
                  <div>
                    <span className="text-white/30">Model</span>
                    <p className="text-white/60">{generation.model}</p>
                  </div>
                  <div>
                    <span className="text-white/30">Generated</span>
                    <p className="text-white/60">
                      {new Date(generation.created_at).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <span className="text-white/30">Original Prompt</span>
                    <p className="text-white/60">{generation.prompt}</p>
                  </div>
                  {generation.expanded_prompt &&
                    generation.expanded_prompt !== generation.prompt && (
                      <div>
                        <span className="text-white/30 flex items-center gap-1">
                          <i className="bi bi-magic" /> Expanded Prompt
                        </span>
                        <p className="text-white/60 leading-relaxed mt-1">
                          {generation.expanded_prompt}
                        </p>
                      </div>
                    )}
                </div>
              </div>
            )}
            {showCode && (
              <div className="p-4">
                <h3 className="text-sm font-medium text-white/70 flex items-center gap-2 mb-3">
                  <i className="bi bi-code-slash" /> Source
                </h3>
                <pre className="text-xs text-white/60 whitespace-pre-wrap leading-relaxed">
                  {generation.output}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
      {showExport && (
        <ExportModal
          generationId={generation.id}
          open={showExport}
          onClose={() => setShowExport(false)}
        />
      )}
      {showResponsive && (
        <ResponsiveChecker
          generation={generation}
          onClose={() => setShowResponsive(false)}
        />
      )}
      {showPlayground && (
        <AnimationPlayground
          generation={generation}
          onClose={() => setShowPlayground(false)}
        />
      )}
      {showLineage && (
        <LineageView
          generationId={generation.id}
          onClose={() => setShowLineage(false)}
          onSelect={(id) => {
            setShowLineage(false);
            setSelectedId(id);
          }}
        />
      )}
    </div>
  );
}
