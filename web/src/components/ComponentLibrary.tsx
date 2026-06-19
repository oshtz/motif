import { useState, useEffect, useRef } from "react";
import { fetchComponents, deleteComponent, type SavedComponent } from "../api";
import { createShellHtml, INSPECT_IFRAME_SANDBOX } from "./html-utils";

const SHELL_HTML = createShellHtml("bg-white p-4");

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ComponentLibrary({ open, onClose }: Props) {
  const [components, setComponents] = useState<SavedComponent[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      try {
        const savedComponents = await fetchComponents();
        if (!cancelled) setComponents(savedComponents);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void load();
    return () => {
      cancelled = true;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  const handleDelete = async (id: string) => {
    try {
      await deleteComponent(id);
      setComponents((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error("Failed to delete component:", err);
    }
  };

  const handleCopy = (html: string, id: string) => {
    navigator.clipboard.writeText(html);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col"
      >
        {/* Header */}
        <div className="shrink-0 flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <i className="bi bi-collection text-white/40" />
            <h2 className="text-sm font-medium text-white/90">Component Library</h2>
            <span className="text-xs text-white/30">{components.length} saved</span>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white/60 transition">
            <i className="bi bi-x-lg" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-5">
          {loading ? (
            <div className="flex items-center justify-center py-12 text-white/20">
              <i className="bi bi-arrow-repeat animate-spin text-lg" />
            </div>
          ) : components.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-white/20 gap-2">
              <i className="bi bi-collection text-2xl" />
              <span className="text-sm">No components saved yet</span>
              <p className="text-xs text-white/15 max-w-xs text-center">
                Use the extract tool in preview mode to save parts of a generation as reusable components
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {components.map((comp) => (
                <ComponentCard
                  key={comp.id}
                  component={comp}
                  copied={copied === comp.id}
                  onCopy={() => handleCopy(comp.html, comp.id)}
                  onDelete={() => handleDelete(comp.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ComponentCard({
  component,
  copied,
  onCopy,
  onDelete,
}: {
  component: SavedComponent;
  copied: boolean;
  onCopy: () => void;
  onDelete: () => void;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    if (iframeRef.current) {
      try {
        const doc = iframeRef.current.contentDocument;
        if (doc?.body) {
          doc.body.innerHTML = component.html;
        }
      } catch {
        /* sandbox */
      }
    }
  }, [component.html]);

  return (
    <div className="border border-white/5 rounded-xl overflow-hidden bg-[#0c0c0c] flex flex-col group">
      {/* Preview */}
      <div className="h-32 overflow-hidden bg-white relative">
        <iframe
          ref={iframeRef}
          srcDoc={SHELL_HTML}
          sandbox={INSPECT_IFRAME_SANDBOX}
          className="w-full h-full border-0 pointer-events-none"
          title={component.name}
        />
      </div>

      {/* Info */}
      <div className="px-3 py-2 border-t border-white/5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-white/70 truncate">
            {component.name}
          </span>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setShowCode(!showCode)}
              className={`p-1 rounded text-[10px] transition ${
                showCode ? "bg-white/10 text-white/70" : "text-white/30 hover:text-white/50"
              }`}
              title="View code"
            >
              <i className="bi bi-code-slash" />
            </button>
            <button
              onClick={onCopy}
              className="p-1 rounded text-[10px] text-white/30 hover:text-white/50 transition"
              title="Copy HTML"
            >
              <i className={`bi ${copied ? "bi-check2" : "bi-clipboard"}`} />
            </button>
            <button
              onClick={onDelete}
              className="p-1 rounded text-[10px] text-white/30 hover:text-red-400 transition"
              title="Delete"
            >
              <i className="bi bi-trash3" />
            </button>
          </div>
        </div>
        {component.genome_id && (
          <span className="text-[10px] text-white/25">
            genome: {component.genome_id}
          </span>
        )}
      </div>

      {/* Code panel */}
      {showCode && (
        <pre className="px-3 py-2 border-t border-white/5 text-[10px] text-white/40 font-mono whitespace-pre-wrap max-h-32 overflow-auto">
          {component.html}
        </pre>
      )}
    </div>
  );
}
