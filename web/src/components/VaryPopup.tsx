import { useState, useEffect } from "react";
import { useAppStore } from "../store";
import { varyStream } from "../api";

interface VaryPopupProps {
  generationId: string;
  onClose: () => void;
}

export default function VaryPopup({ generationId, onClose }: VaryPopupProps) {
  const [batchSize, setBatchSize] = useState(2);
  const [strength, setStrength] = useState(0.5);

  const startGeneration = useAppStore((s) => s.startGeneration);
  const endGeneration = useAppStore((s) => s.endGeneration);
  const addPlaceholders = useAppStore((s) => s.addPlaceholders);
  const expandingVariant = useAppStore((s) => s.expandingVariant);
  const replacePlaceholder = useAppStore((s) => s.replacePlaceholder);
  const removeStreamingVariant = useAppStore((s) => s.removeStreamingVariant);
  const appendChunk = useAppStore((s) => s.appendChunk);
  const finalizeVariant = useAppStore((s) => s.finalizeVariant);
  const errorVariant = useAppStore((s) => s.errorVariant);
  const activeMotifId = useAppStore((s) => s.activeMotifId);
  const registerRun = useAppStore((s) => s.registerRun);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleGenerate = async () => {
    startGeneration();
    const placeholderIds = addPlaceholders(batchSize, activeMotifId || undefined);
    const placeholderQueue = [...placeholderIds];
    const signal = registerRun(placeholderIds, () => void handleGenerate());
    const expandedIds = new Map<string, string>();

    onClose();

    try {
      await varyStream(
        {
          sourceGenerationId: generationId,
          batchSize,
          strength,
          variationDistance:
            strength < 0.33 ? "near" : strength < 0.66 ? "mid" : "far",
          motifId: activeMotifId || undefined,
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
              }
            }
          },
          onVariantChunk: (id, chunk) => appendChunk(id, chunk),
          onVariantDone: (gen) => finalizeVariant(gen.id, gen),
          onVariantError: (id, err) => errorVariant(id, err),
        },
        signal
      );
    } catch (err) {
      console.error("Vary failed:", err);
    } finally {
      for (const id of placeholderQueue) {
        removeStreamingVariant(id);
      }
      endGeneration();
    }
  };

  const strengthLabel =
    strength < 0.33 ? "Subtle" : strength < 0.66 ? "Moderate" : "Strong";

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-[#141414] border border-white/10 rounded-2xl p-6 w-80 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-sm font-medium text-white/90">Vary</h3>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white/70 transition"
          >
            <i className="bi bi-x-lg text-sm" />
          </button>
        </div>

        {/* Batch size */}
        <div className="mb-5">
          <label className="text-xs text-white/50 mb-2 block">
            Batch size
          </label>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                onClick={() => setBatchSize(n)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition ${
                  batchSize === n
                    ? "bg-white/15 text-white border-white/20"
                    : "bg-white/5 text-white/40 border-white/[0.06] hover:bg-white/8 hover:text-white/60"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Strength slider */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs text-white/50">
              Variation strength
            </label>
            <span className="text-xs text-white/40">{strengthLabel}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={strength}
            onChange={(e) => setStrength(parseFloat(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md
              [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-md"
          />
          <div className="flex justify-between mt-1.5">
            <span className="text-[10px] text-white/30">Subtle</span>
            <span className="text-[10px] text-white/30">Strong</span>
          </div>
        </div>

        {/* Generate button */}
        <button
          onClick={handleGenerate}
          className="w-full font-medium px-5 py-2.5 rounded-xl text-sm bg-white text-black hover:bg-white/90 transition flex items-center justify-center gap-2"
        >
          <i className="bi bi-stars" />
          Generate {batchSize > 1 ? `${batchSize} variations` : "variation"}
        </button>
      </div>
    </div>
  );
}
