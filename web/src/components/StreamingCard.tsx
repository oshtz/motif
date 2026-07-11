import { useRef, useEffect, useCallback, useState, memo } from "react";
import { useAppStore } from "../store";
import VariantCard from "./VariantCard";
import {
  VIEWPORT_WIDTH,
  pickAspectRatio,
} from "./thumbnail-utils";
import {
  createShellHtml,
  extractGeneratedBody,
  PREVIEW_IFRAME_SANDBOX,
} from "./html-utils";

interface Props {
  variantId: string;
}

const SHELL_HTML = createShellHtml("bg-transparent");

export default memo(function StreamingCard({ variantId }: Props) {
  const variant = useAppStore(
    (s) => s.streamingVariants.find((v) => v.id === variantId)!
  );
  const promoteVariant = useAppStore((s) => s.promoteVariant);
  const cancelVariant = useAppStore((s) => s.cancelVariant);
  const retryVariant = useAppStore((s) => s.retryVariant);
  const removeStreamingVariant = useAppStore((s) => s.removeStreamingVariant);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shellReady, setShellReady] = useState(false);
  const isDone = variant.status === "done" && !!variant.generation;
  const hasContent = variant.code.length > 50;
  const contentSize = {
    width: VIEWPORT_WIDTH,
    height: 600,
  };
  const [containerWidth, setContainerWidth] = useState(320);
  const [previewHtml, setPreviewHtml] = useState(SHELL_HTML);

  // When variant is done, schedule promotion
  useEffect(() => {
    if (isDone) {
      const timer = setTimeout(() => promoteVariant(variant.id), 1000);
      return () => clearTimeout(timer);
    }
  }, [isDone, variant.id, promoteVariant]);

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

  // Reset shellReady when iframe unmounts (skeleton -> iframe transition)
  useEffect(() => {
    queueMicrotask(() => setShellReady(false));
  }, [hasContent]);

  // Initialize the iframe shell once
  const handleLoad = useCallback(() => {
    setShellReady(true);
  }, []);

  // Keep a ref to the latest code so the interval always reads the freshest value
  const pendingCode = useRef(variant.code);
  useEffect(() => {
    pendingCode.current = variant.code;
  }, [variant.code]);

  // Refresh the preview on a fixed interval (800ms) while streaming, plus a
  // trailing flush so the final state is always rendered.
  useEffect(() => {
    if (!hasContent || !shellReady) return;
    const flush = () => {
      setPreviewHtml(createShellHtml("bg-transparent", extractGeneratedBody(pendingCode.current)));
    };
    // Initial render
    flush();
    const interval = setInterval(flush, 800);
    return () => clearInterval(interval);
  }, [hasContent, shellReady]);

  const scale = containerWidth / VIEWPORT_WIDTH;
  const aspect = pickAspectRatio(contentSize.width, contentSize.height);
  const displayHeight = containerWidth / aspect;

  // Render as VariantCard once done — placed after all hooks to satisfy Rules of Hooks
  if (isDone) {
    return <VariantCard generation={variant.generation!} />;
  }

  if (variant.status === "error") {
    return (
      <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-6">
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <i className="bi bi-exclamation-triangle" />
          Generation failed
        </div>
        {variant.error && (
          <p className="text-xs text-red-400/60 mt-1" role="alert">
            {variant.error}
          </p>
        )}
        <div className="mt-3 flex gap-2">
          {variant.retry && (
            <button type="button" onClick={() => retryVariant(variant.id)} className="rounded-md bg-white/10 px-2.5 py-1.5 text-xs text-white/70">
              Retry
            </button>
          )}
          <button type="button" onClick={() => removeStreamingVariant(variant.id)} className="rounded-md px-2.5 py-1.5 text-xs text-white/40">
            Dismiss
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-lg overflow-hidden animate-[fadeIn_0.3s_ease-out]">
      {/* Live preview — scaled from full viewport with shimmer overlay */}
      <div
        ref={containerRef}
        className="bg-[#0a0a0a] overflow-hidden relative transition-[height] duration-150"
        style={{ height: hasContent ? displayHeight : 300 }}
      >
        <button
          type="button"
          onClick={() => cancelVariant(variant.id)}
          className="absolute right-2 top-2 z-20 rounded-md bg-black/60 px-2 py-1 text-xs text-white/60 hover:text-white"
          aria-label="Cancel generation"
        >
          Cancel
        </button>
        {hasContent && (
          <iframe
            ref={iframeRef}
            srcDoc={previewHtml}
            sandbox={PREVIEW_IFRAME_SANDBOX}
            onLoad={handleLoad}
            style={{
              width: VIEWPORT_WIDTH,
              height: VIEWPORT_WIDTH / aspect,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
            className="border-0 pointer-events-none blur-[2px] transition-[filter] duration-300"
            title="Streaming preview"
          />
        )}

        {/* Shimmer overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
});
