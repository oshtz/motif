import { useEffect, useState, useRef } from "react";
import { useAppStore, type StreamingVariant } from "../store";

const PROGRESS_WEIGHTS: Record<StreamingVariant["status"], number> = {
  pending: 0,
  expanding: 0.3,
  streaming: 0.65,
  done: 1,
  error: 1,
};

export default function GenerationProgress() {
  const streamingVariants = useAppStore((s) => s.streamingVariants);
  const activeGenerations = useAppStore((s) => s.activeGenerations);

  const [visible, setVisible] = useState(false);
  const [dismissing, setDismissing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = activeGenerations > 0 || streamingVariants.length > 0;

  useEffect(() => {
    if (isActive) {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
      queueMicrotask(() => {
        setVisible(true);
        setDismissing(false);
      });
    } else if (visible && !dismissing) {
      // Hold the "complete" state briefly before dismissing
      timerRef.current = setTimeout(() => {
        setDismissing(true);
        exitTimerRef.current = setTimeout(() => {
          setVisible(false);
          setDismissing(false);
        }, 400);
      }, 1200);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    };
  }, [isActive, visible, dismissing]);

  if (!visible && streamingVariants.length === 0) return null;

  const variants = streamingVariants;
  const total = variants.length;
  const doneCount = variants.filter((v) => v.status === "done").length;
  const errorCount = variants.filter((v) => v.status === "error").length;

  const aggregateProgress =
    total > 0
      ? variants.reduce((sum, v) => sum + PROGRESS_WEIGHTS[v.status], 0) /
        total
      : 0;

  // Find a genome name to show from an active variant
  const activeGenome = variants.find(
    (v) => v.status === "streaming" || v.status === "expanding"
  )?.genomeName;

  const allDone = total > 0 && doneCount + errorCount === total;
  const label = allDone
    ? "Complete"
    : total > 0
      ? `${doneCount + errorCount} / ${total}`
      : "Starting...";

  return (
    <div
      className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${
        dismissing
          ? "opacity-0 -translate-y-1 scale-95"
          : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      {/* Variant clusters row */}
      <div className="flex items-center gap-3">
        {variants.map((v) => (
          <div key={v.id} className="flex items-center gap-[3px]">
            <StepDot
              phase="expanding"
              status={v.status}
            />
            <StepDot
              phase="streaming"
              status={v.status}
            />
            <StepDot
              phase="done"
              status={v.status}
            />
          </div>
        ))}
      </div>

      {/* Label + progress bar row */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-white/35 tracking-wider uppercase">
          {label}
        </span>
        {activeGenome && (
          <>
            <span className="text-[10px] text-white/15">|</span>
            <span className="text-[10px] text-white/25 tracking-wide truncate max-w-[100px]">
              {activeGenome}
            </span>
          </>
        )}
      </div>

      {/* Thin aggregate progress bar */}
      <div className="w-32 h-[1.5px] bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${
            allDone ? "bg-white/40" : "bg-white/20"
          }`}
          style={{ width: `${aggregateProgress * 100}%` }}
        />
      </div>
    </div>
  );
}

function StepDot({
  phase,
  status,
}: {
  phase: "expanding" | "streaming" | "done";
  status: StreamingVariant["status"];
}) {
  const base = "w-[5px] h-[5px] rounded-full transition-all duration-300";

  if (status === "error") {
    return (
      <div
        className={`${base} bg-red-500/80`}
        style={{ boxShadow: "0 0 4px rgba(239,68,68,0.4)" }}
      />
    );
  }

  // Determine if this dot's phase is active, completed, or pending
  const phaseOrder = { expanding: 0, streaming: 1, done: 2 };
  const statusToPhase: Record<string, number> = {
    pending: -1,
    expanding: 0,
    streaming: 1,
    done: 2,
  };
  const currentPhase = statusToPhase[status] ?? -1;
  const dotPhase = phaseOrder[phase];

  if (currentPhase > dotPhase) {
    // This phase is completed
    return (
      <div
        className={`${base} bg-white/80`}
        style={
          currentPhase === dotPhase + 1
            ? { animation: "scale-pop 0.4s ease-out" }
            : undefined
        }
      />
    );
  }

  if (currentPhase === dotPhase) {
    // This phase is active
    if (phase === "expanding") {
      return (
        <div
          className={`${base} bg-amber-400`}
          style={{
            animation: "shimmer-dot 1.5s ease-in-out infinite",
            boxShadow: "0 0 6px rgba(251,191,36,0.5)",
          }}
        />
      );
    }
    if (phase === "streaming") {
      return (
        <div
          className={`${base} bg-cyan-400`}
          style={{
            animation: "shimmer-dot 1.2s ease-in-out infinite",
            boxShadow: "0 0 6px rgba(34,211,238,0.5)",
          }}
        />
      );
    }
    // done phase active = fully done
    return (
      <div
        className={`${base} bg-white`}
        style={{ animation: "scale-pop 0.4s ease-out" }}
      />
    );
  }

  // This phase is not yet reached
  return <div className={`${base} bg-white/[0.08]`} />;
}
