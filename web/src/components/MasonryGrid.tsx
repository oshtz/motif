import { useRef, useState, useEffect, useLayoutEffect, useMemo } from "react";
import { useAppStore, type Generation } from "../store";
import { useShallow } from "zustand/react/shallow";
import VariantCard from "./VariantCard";
import StreamingCard from "./StreamingCard";

const COL_MIN_WIDTH = 420;
const COL_GAP = 16;

type GridItem =
  | { type: "streaming"; id: string }
  | { type: "generation"; id: string; data: Generation };

export default function MasonryGrid() {
  const displayOrder = useAppStore(useShallow((s) => s.displayOrder));
  const streamingIdList = useAppStore(
    useShallow((s) =>
      s.streamingVariants
        .filter((v) => (v.motifId ?? null) === (s.activeMotifId ?? null))
        .map((v) => v.id)
    )
  );
  const streamingIds = useMemo(() => new Set(streamingIdList), [streamingIdList]);
  const generations = useAppStore((s) => s.generations);
  const showFavoritesOnly = useAppStore((s) => s.showFavoritesOnly);
  const activeGenerations = useAppStore((s) => s.activeGenerations);
  const nextCursor = useAppStore((s) => s.generationNextCursor);
  const loading = useAppStore((s) => s.generationsLoading);
  const loadError = useAppStore((s) => s.generationsError);
  const activeMotifId = useAppStore((s) => s.activeMotifId);
  const loadGenerations = useAppStore((s) => s.loadGenerations);
  const containerRef = useRef<HTMLDivElement>(null);
  const [colCount, setColCount] = useState(3);

  const calcCols = (w: number) =>
    Math.max(1, Math.floor((w + COL_GAP) / (COL_MIN_WIDTH + COL_GAP)));

  // Set correct column count synchronously before first paint (avoids flash on remount)
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const w = el.getBoundingClientRect().width;
    if (w > 0) setColCount(calcCols(w));
  }, []);

  // Keep column count in sync on resize
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setColCount(calcCols(entry.contentRect.width));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Build items from stable displayOrder — cards keep their grid position
  const allItems = useMemo(() => {
    const genMap = new Map(generations.map((g) => [g.id, g]));
    const items: GridItem[] = [];
    for (const id of displayOrder) {
      if (streamingIds.has(id)) {
        items.push({ type: "streaming", id });
      } else {
        const gen = genMap.get(id);
        if (gen) {
          if (showFavoritesOnly && !gen.favorited) continue;
          items.push({ type: "generation", id, data: gen });
        }
      }
    }
    return items;
  }, [displayOrder, streamingIds, generations, showFavoritesOnly]);

  const columns = useMemo(() => {
    const cols: GridItem[][] = Array.from({ length: colCount }, () => []);
    allItems.forEach((item, index) => {
      cols[index % colCount].push(item);
    });
    return cols;
  }, [allItems, colCount]);

  if (allItems.length === 0 && activeGenerations === 0 && !loading) {
    return (
      <div className="flex-1 flex items-center justify-center h-full text-white/20 text-lg">
        <div className="text-center space-y-3">
          <i className={`bi ${showFavoritesOnly ? "bi-star" : "bi-grid-3x3-gap"} text-5xl`} />
          <p>{loadError || (showFavoritesOnly ? "No favorited generations yet" : "Enter a prompt to generate motifs")}</p>
          {loadError && <button type="button" onClick={() => void loadGenerations(activeMotifId ?? undefined)} className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white/60">Retry</button>}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pb-8">
      <div
        ref={containerRef}
        className="w-full p-4 pt-8 flex items-start"
        style={{ gap: COL_GAP }}
      >
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex-1 min-w-0 flex flex-col" style={{ gap: COL_GAP }}>
            {col.map((item) => item.type === "streaming"
              ? <StreamingCard key={item.id} variantId={item.id} />
              : <VariantCard key={item.id} generation={item.data} />)}
          </div>
        ))}
      </div>
      {(nextCursor || loading) && (
        <div className="flex justify-center px-4">
          <button type="button" disabled={loading} onClick={() => void loadGenerations(activeMotifId ?? undefined, true)} className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 disabled:opacity-50">
            {loading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}
