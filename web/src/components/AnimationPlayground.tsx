import { useState, useRef, useEffect } from "react";
import type { Generation } from "../store";

const STATES = [
  { label: "Hover", pseudo: "hover", icon: "bi-cursor" },
  { label: "Focus", pseudo: "focus", icon: "bi-bullseye" },
  { label: "Active", pseudo: "active", icon: "bi-hand-index" },
  { label: "Focus-visible", pseudo: "focus-visible", icon: "bi-eye" },
];

interface Props {
  generation: Generation;
  onClose: () => void;
}

export default function AnimationPlayground({ generation, onClose }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [slowMo, setSlowMo] = useState(1);
  const [highlightTransitions, setHighlightTransitions] = useState(false);
  const [activeState, setActiveState] = useState<string | null>(null);
  const [elementCount, setElementCount] = useState(0);
  const [interactiveCount, setInteractiveCount] = useState(0);

  // Inject analysis script after iframe loads
  const handleLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    try {
      const doc = iframe.contentDocument;
      if (!doc) return;

      // Count interactive elements
      const all = doc.querySelectorAll("*");
      let interactive = 0;
      setElementCount(all.length);

      all.forEach((el) => {
        const styles = doc.defaultView?.getComputedStyle(el);
        if (!styles) return;
        const hasTransition = styles.transitionDuration !== "0s";
        const hasAnimation = styles.animationName !== "none";
        if (hasTransition || hasAnimation) interactive++;
      });
      setInteractiveCount(interactive);
    } catch {
      /* cross-origin */
    }
  };

  // Apply slow-motion by injecting CSS
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe?.contentDocument) return;

    try {
      const doc = iframe.contentDocument;
      let style = doc.getElementById("playground-slowmo");
      if (!style) {
        style = doc.createElement("style");
        style.id = "playground-slowmo";
        doc.head.appendChild(style);
      }
      style.textContent =
        slowMo === 1
          ? ""
          : `*, *::before, *::after {
              transition-duration: calc(var(--original-duration, 0.3s) * ${slowMo}) !important;
              animation-duration: calc(var(--original-duration, 1s) * ${slowMo}) !important;
            }`;
    } catch {
      /* cross-origin */
    }
  }, [slowMo]);

  // Toggle transition highlight outlines
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe?.contentDocument) return;

    try {
      const doc = iframe.contentDocument;
      let style = doc.getElementById("playground-highlight");
      if (!style) {
        style = doc.createElement("style");
        style.id = "playground-highlight";
        doc.head.appendChild(style);
      }

      if (highlightTransitions) {
        // Add a JS snippet to find and outline elements with transitions
        const script = doc.getElementById("playground-highlight-script");
        if (!script) {
          const s = doc.createElement("script");
          s.id = "playground-highlight-script";
          s.textContent = `
            (function() {
              document.querySelectorAll('*').forEach(el => {
                const s = getComputedStyle(el);
                if (s.transitionDuration !== '0s' || s.animationName !== 'none') {
                  el.setAttribute('data-has-transition', 'true');
                }
              });
            })();
          `;
          doc.body.appendChild(s);
        }
        style.textContent = `
          [data-has-transition="true"] {
            outline: 2px dashed rgba(168, 85, 247, 0.5) !important;
            outline-offset: 2px !important;
          }
        `;
      } else {
        style.textContent = "";
      }
    } catch {
      /* cross-origin */
    }
  }, [highlightTransitions]);

  // Trigger pseudo-state on all matching elements
  const triggerState = (pseudo: string) => {
    const iframe = iframeRef.current;
    if (!iframe?.contentDocument) return;

    try {
      const doc = iframe.contentDocument;

      // Remove previous state triggers
      const prev = doc.getElementById("playground-state");
      if (prev) prev.remove();

      if (activeState === pseudo) {
        setActiveState(null);
        return;
      }

      setActiveState(pseudo);

      // Inject CSS that simulates the pseudo-state
      const style = doc.createElement("style");
      style.id = "playground-state";

      // Map pseudo-class rules to apply-all rules
      // We replicate hover/focus/active styles by duplicating them without the pseudo
      style.textContent = `
        /* Simulate :${pseudo} state on interactive elements */
        button, a, input, select, textarea, [tabindex], [role="button"],
        .hover\\:, [class*="hover:"], [class*="focus:"], [class*="active:"] {
          /* Trigger via JS class */
        }
      `;
      doc.head.appendChild(style);

      // Add class-based triggers
      const script = doc.createElement("script");
      script.id = "playground-state-script";
      script.textContent = `
        (function() {
          const targets = document.querySelectorAll('button, a, input, select, textarea, [tabindex], [role="button"]');
          targets.forEach(el => {
            el.classList.add('playground-${pseudo}');
            // For Tailwind: convert hover: classes to active ones
            const classes = [...el.classList];
            classes.forEach(c => {
              if (c.startsWith('${pseudo}:')) {
                const base = c.slice(${pseudo.length + 1});
                el.classList.add(base);
              }
            });
          });
        })();
      `;
      doc.body.appendChild(script);
    } catch {
      /* cross-origin */
    }
  };

  const resetStates = () => {
    const iframe = iframeRef.current;
    if (!iframe?.contentDocument) return;

    try {
      const doc = iframe.contentDocument;
      const stateStyle = doc.getElementById("playground-state");
      if (stateStyle) stateStyle.remove();
      const stateScript = doc.getElementById("playground-state-script");
      if (stateScript) stateScript.remove();

      // Remove added classes
      doc.querySelectorAll("[class*='playground-']").forEach((el) => {
        const toRemove = [...el.classList].filter((c) => c.startsWith("playground-"));
        toRemove.forEach((c) => el.classList.remove(c));
      });

      setActiveState(null);
    } catch {
      /* cross-origin */
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex">
      {/* Control panel */}
      <div className="w-72 bg-neutral-900 border-r border-white/5 flex flex-col overflow-auto">
        <div className="px-4 py-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="bi bi-play-circle text-white/40" />
            <h2 className="text-sm font-medium text-white/90">Interactions</h2>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white/60 transition">
            <i className="bi bi-x-lg" />
          </button>
        </div>

        {/* Stats */}
        <div className="px-4 py-3 border-b border-white/5 space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/30">Elements</span>
            <span className="text-white/50 font-mono">{elementCount}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/30">With transitions</span>
            <span className="text-violet-400 font-mono">{interactiveCount}</span>
          </div>
        </div>

        {/* State triggers */}
        <div className="px-4 py-3 border-b border-white/5">
          <div className="text-xs text-white/30 mb-2">Trigger State</div>
          <div className="space-y-1.5">
            {STATES.map((s) => (
              <button
                key={s.pseudo}
                onClick={() => triggerState(s.pseudo)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${
                  activeState === s.pseudo
                    ? "bg-violet-500/15 text-violet-300 border border-violet-500/20"
                    : "text-white/50 hover:bg-white/5 border border-transparent"
                }`}
              >
                <i className={`bi ${s.icon} text-xs`} />
                :{s.pseudo}
              </button>
            ))}
            <button
              onClick={resetStates}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white/30 hover:bg-white/5 transition"
            >
              <i className="bi bi-arrow-counterclockwise text-xs" />
              Reset all
            </button>
          </div>
        </div>

        {/* Slow motion */}
        <div className="px-4 py-3 border-b border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/30">Slow Motion</span>
            <span className="text-xs text-white/50 font-mono">{slowMo}x</span>
          </div>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={slowMo}
            onChange={(e) => setSlowMo(parseInt(e.target.value))}
            className="w-full accent-violet-500"
          />
          <div className="flex items-center justify-between text-[10px] text-white/20 mt-1">
            <span>Normal</span>
            <span>10x slower</span>
          </div>
        </div>

        {/* Highlight toggle */}
        <div className="px-4 py-3">
          <button
            onClick={() => setHighlightTransitions(!highlightTransitions)}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${
              highlightTransitions
                ? "bg-violet-500/15 text-violet-300 border border-violet-500/20"
                : "text-white/50 hover:bg-white/5 border border-transparent"
            }`}
          >
            <i className="bi bi-bounding-box text-xs" />
            Highlight transitions
          </button>
        </div>
      </div>

      {/* Preview */}
      <div className="flex-1 overflow-auto bg-[#0a0a0a] p-6">
        <iframe
          ref={iframeRef}
          srcDoc={generation.parsed_html}
          sandbox="allow-scripts allow-same-origin"
          onLoad={handleLoad}
          className="w-full h-full border-0 rounded-xl bg-white"
          title="Animation playground preview"
        />
      </div>
    </div>
  );
}
