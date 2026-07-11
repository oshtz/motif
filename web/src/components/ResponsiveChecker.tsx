import { useState, useRef, useCallback } from "react";
import type { Generation } from "../store";
import { STATIC_IFRAME_SANDBOX } from "./html-utils";

const VIEWPORTS = [
  { label: "Mobile", width: 375, height: 667 },
  { label: "Tablet", width: 768, height: 1024 },
  { label: "Laptop", width: 1280, height: 800 },
  { label: "Desktop", width: 1920, height: 1080 },
];

interface ViewportResult {
  label: string;
  width: number;
  score: number;
  issues: string[];
  status: "pending" | "checking" | "done";
}

interface Props {
  generation: Generation;
  onClose: () => void;
}

export default function ResponsiveChecker({ generation, onClose }: Props) {
  const [results, setResults] = useState<ViewportResult[]>(
    VIEWPORTS.map((v) => ({
      label: v.label,
      width: v.width,
      score: 0,
      issues: [],
      status: "pending",
    }))
  );
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const checkViewport = useCallback(
    (index: number) => {
      const iframe = iframeRefs.current[index];
      if (!iframe) return;

      setResults((prev) =>
        prev.map((r, i) => (i === index ? { ...r, status: "checking" } : r))
      );

      // Delay to let iframe render
      setTimeout(() => {
        try {
          const doc = iframe.contentDocument;
          if (!doc?.body) {
            setResults((prev) =>
              prev.map((r, i) =>
                i === index ? { ...r, status: "done", score: 0, issues: ["Could not access iframe"] } : r
              )
            );
            return;
          }

          const issues: string[] = [];
          let deductions = 0;

          // Check for horizontal overflow
          if (doc.body.scrollWidth > iframe.clientWidth + 5) {
            issues.push(
              `Horizontal overflow: content ${doc.body.scrollWidth}px > viewport ${iframe.clientWidth}px`
            );
            deductions += 25;
          }

          // Check for tiny text
          const allText = doc.querySelectorAll(
            "p, span, a, li, td, th, label, div, h1, h2, h3, h4, h5, h6, button"
          );
          let tinyCount = 0;
          allText.forEach((el) => {
            const styles = doc.defaultView?.getComputedStyle(el);
            if (styles) {
              const fontSize = parseFloat(styles.fontSize);
              if (fontSize > 0 && fontSize < 10) tinyCount++;
            }
          });
          if (tinyCount > 0) {
            issues.push(`${tinyCount} element${tinyCount > 1 ? "s" : ""} with text smaller than 10px`);
            deductions += Math.min(20, tinyCount * 5);
          }

          // Check for elements wider than viewport
          const allElements = doc.querySelectorAll("*");
          let overflowCount = 0;
          allElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.width > iframe.clientWidth + 10 && rect.width > 0) {
              overflowCount++;
            }
          });
          if (overflowCount > 0) {
            issues.push(
              `${overflowCount} element${overflowCount > 1 ? "s" : ""} wider than viewport`
            );
            deductions += Math.min(25, overflowCount * 5);
          }

          // Check for overlapping interactive elements
          const buttons = doc.querySelectorAll("button, a, input, select, textarea");
          const rects: DOMRect[] = [];
          let overlaps = 0;
          buttons.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;
            for (const existing of rects) {
              if (
                rect.left < existing.right &&
                rect.right > existing.left &&
                rect.top < existing.bottom &&
                rect.bottom > existing.top
              ) {
                overlaps++;
                break;
              }
            }
            rects.push(rect);
          });
          if (overlaps > 0) {
            issues.push(
              `${overlaps} overlapping interactive element${overlaps > 1 ? "s" : ""}`
            );
            deductions += Math.min(15, overlaps * 5);
          }

          // Check if content is cut off (body much taller than viewport)
          const bodyHeight = doc.body.scrollHeight;
          const viewportHeight = VIEWPORTS[index].height;
          if (bodyHeight < viewportHeight * 0.3) {
            issues.push("Content appears very short — possible rendering issue");
            deductions += 10;
          }

          if (issues.length === 0) {
            issues.push("No issues detected");
          }

          const score = Math.max(0, 100 - deductions);

          setResults((prev) =>
            prev.map((r, i) =>
              i === index ? { ...r, status: "done", score, issues } : r
            )
          );
        } catch {
          setResults((prev) =>
            prev.map((r, i) =>
              i === index
                ? { ...r, status: "done", score: 0, issues: ["Cannot analyze (cross-origin)"] }
                : r
            )
          );
        }
      }, 1500);
    },
    []
  );

  const scoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 50) return "text-amber-400";
    return "text-red-400";
  };

  const scoreBg = (score: number) => {
    if (score >= 80) return "bg-green-500/15 border-green-500/20";
    if (score >= 50) return "bg-amber-500/15 border-amber-500/20";
    return "bg-red-500/15 border-red-500/20";
  };

  const overallScore =
    results.every((r) => r.status === "done")
      ? Math.round(results.reduce((s, r) => s + r.score, 0) / results.length)
      : null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
      <div
        ref={containerRef}
        className="bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col"
      >
        {/* Header */}
        <div className="shrink-0 flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <i className="bi bi-phone text-white/40" />
            <h2 className="text-sm font-medium text-white/90">Responsive Check</h2>
            {overallScore !== null && (
              <span
                className={`text-lg font-bold ${scoreColor(overallScore)}`}
              >
                {overallScore}/100
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white/30 hover:text-white/60 transition"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        {/* Viewport cards */}
        <div className="flex-1 overflow-auto p-5 grid grid-cols-2 gap-4">
          {VIEWPORTS.map((vp, i) => {
            const result = results[i];
            const scale = 250 / vp.width;

            return (
              <div
                key={vp.label}
                className="border border-white/5 rounded-xl overflow-hidden bg-[#0c0c0c] flex flex-col"
              >
                {/* Viewport header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-white/60">{vp.label}</span>
                    <span className="text-[10px] text-white/25 font-mono">
                      {vp.width}x{vp.height}
                    </span>
                  </div>
                  {result.status === "done" && (
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded border ${scoreBg(result.score)} ${scoreColor(result.score)}`}
                    >
                      {result.score}
                    </span>
                  )}
                  {result.status === "checking" && (
                    <span className="text-[10px] text-white/30 flex items-center gap-1">
                      <i className="bi bi-arrow-repeat animate-spin" /> Checking...
                    </span>
                  )}
                </div>

                {/* Preview */}
                <div className="relative overflow-hidden" style={{ height: 200 }}>
                  <iframe
                    ref={(el) => { iframeRefs.current[i] = el; }}
                    srcDoc={generation.parsed_html}
                    sandbox={STATIC_IFRAME_SANDBOX}
                    onLoad={() => checkViewport(i)}
                    style={{
                      width: vp.width,
                      height: vp.height,
                      transform: `scale(${scale})`,
                      transformOrigin: "top left",
                    }}
                    className="border-0 pointer-events-none"
                    title={`${vp.label} preview`}
                  />
                </div>

                {/* Issues */}
                {result.status === "done" && (
                  <div className="px-3 py-2 border-t border-white/5 bg-white/[0.01]">
                    {result.issues.map((issue, j) => (
                      <div
                        key={j}
                        className={`text-[10px] flex items-start gap-1.5 ${
                          issue === "No issues detected"
                            ? "text-green-400/60"
                            : "text-amber-400/60"
                        }`}
                      >
                        <i
                          className={`bi ${
                            issue === "No issues detected"
                              ? "bi-check-circle"
                              : "bi-exclamation-triangle"
                          } mt-0.5`}
                        />
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
