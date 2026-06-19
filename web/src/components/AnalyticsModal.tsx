import { useState, useEffect } from "react";
import { useAppStore } from "../store";
import { fetchAnalytics, type AnalyticsData } from "../api";

function BarChart({
  items,
  labelKey,
  countKey,
  color = "bg-purple-500/40",
}: {
  items: Record<string, unknown>[];
  labelKey: string;
  countKey: string;
  color?: string;
}) {
  if (items.length === 0)
    return <p className="text-sm text-white/20">No data yet</p>;

  const max = Math.max(...items.map((i) => i[countKey] as number));

  return (
    <div className="space-y-1.5">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <span className="text-xs text-white/50 w-36 truncate text-right shrink-0">
            {String(item[labelKey])}
          </span>
          <div className="flex-1 h-5 bg-white/5 rounded overflow-hidden">
            <div
              className={`h-full ${color} rounded`}
              style={{ width: `${(((item[countKey] as number) / max) * 100)}%` }}
            />
          </div>
          <span className="text-xs text-white/30 w-8 text-right shrink-0">
            {item[countKey] as number}
          </span>
        </div>
      ))}
    </div>
  );
}

function DailyChart({ items }: { items: { day: string; count: number }[] }) {
  if (items.length === 0)
    return <p className="text-sm text-white/20">No data yet</p>;

  const max = Math.max(...items.map((i) => i.count));

  return (
    <div className="flex items-end gap-px h-24">
      {items.map((item) => (
        <div
          key={item.day}
          className="flex-1 min-w-0 group relative"
          title={`${item.day}: ${item.count}`}
        >
          <div
            className="w-full bg-blue-500/40 rounded-t transition-colors group-hover:bg-blue-500/60"
            style={{ height: `${(item.count / max) * 100}%` }}
          />
        </div>
      ))}
    </div>
  );
}

export default function AnalyticsModal() {
  const { showAnalytics, setShowAnalytics } = useAppStore();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!showAnalytics) return;
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      try {
        const analytics = await fetchAnalytics();
        if (!cancelled) setData(analytics);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void load();
    return () => {
      cancelled = true;
    };
  }, [showAnalytics]);

  if (!showAnalytics) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={() => setShowAnalytics(false)}
    >
      <div
        className="bg-[#141414] border border-white/10 rounded-2xl w-full max-w-2xl p-6 space-y-6 max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="bi bi-bar-chart-line text-lg text-white/50" />
            <h2 className="text-xl font-semibold">Analytics</h2>
          </div>
          <button
            onClick={() => setShowAnalytics(false)}
            className="text-white/30 hover:text-white/60 transition"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        {loading || !data ? (
          <div className="flex items-center justify-center py-12 text-white/30">
            <i className="bi bi-arrow-repeat animate-spin text-2xl" />
          </div>
        ) : (
          <>
            {/* Summary */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white/80">
                  {data.totals.total}
                </div>
                <div className="text-xs text-white/40 mt-1">
                  Total Generations
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400/80">
                  {data.totals.favorited}
                </div>
                <div className="text-xs text-white/40 mt-1">Favorited</div>
              </div>
            </div>

            {/* Daily Activity */}
            {data.dailyUsage.length > 0 && (
              <div>
                <h3 className="text-sm text-white/50 mb-3 flex items-center gap-1.5">
                  <i className="bi bi-calendar3" />
                  Daily Activity (30 days)
                </h3>
                <DailyChart items={data.dailyUsage} />
                <div className="flex justify-between mt-1 text-[10px] text-white/20">
                  <span>{data.dailyUsage[0]?.day}</span>
                  <span>{data.dailyUsage[data.dailyUsage.length - 1]?.day}</span>
                </div>
              </div>
            )}

            {/* Genome Usage */}
            <div>
              <h3 className="text-sm text-white/50 mb-3 flex items-center gap-1.5">
                <i className="bi bi-palette" />
                Genome Usage (primary)
              </h3>
              <BarChart
                items={data.genomeUsage}
                labelKey="genome_name"
                countKey="count"
                color="bg-purple-500/40"
              />
            </div>

            {/* Secondary Genome Usage */}
            {data.secondaryGenomeUsage.length > 0 && (
              <div>
                <h3 className="text-sm text-white/50 mb-3 flex items-center gap-1.5">
                  <i className="bi bi-palette2" />
                  Genome Usage (secondary / shuffle)
                </h3>
                <BarChart
                  items={data.secondaryGenomeUsage}
                  labelKey="genome_name"
                  countKey="count"
                  color="bg-indigo-500/40"
                />
              </div>
            )}

            {/* Genome Win Rates (A/B Analytics) */}
            {data.genomeWinRates && data.genomeWinRates.length > 0 && (
              <div>
                <h3 className="text-sm text-white/50 mb-3 flex items-center gap-1.5">
                  <i className="bi bi-trophy" />
                  Genome Favorite Rate
                </h3>
                <div className="space-y-1.5">
                  {data.genomeWinRates
                    .filter((g) => g.total >= 2)
                    .sort((a, b) => b.rate - a.rate)
                    .slice(0, 15)
                    .map((g) => (
                      <div key={g.genome_id} className="flex items-center gap-2">
                        <span className="text-xs text-white/50 w-36 truncate text-right shrink-0">
                          {g.genome_name}
                        </span>
                        <div className="flex-1 h-5 bg-white/5 rounded overflow-hidden relative">
                          <div
                            className="h-full bg-amber-500/40 rounded"
                            style={{ width: `${g.rate}%` }}
                          />
                          <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white/40">
                            {g.rate}%
                          </span>
                        </div>
                        <span className="text-[10px] text-white/20 w-16 text-right shrink-0">
                          {g.favorited}/{g.total}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Model Usage */}
            <div>
              <h3 className="text-sm text-white/50 mb-3 flex items-center gap-1.5">
                <i className="bi bi-cpu" />
                Model Usage
              </h3>
              <BarChart
                items={data.modelUsage}
                labelKey="model"
                countKey="count"
                color="bg-emerald-500/40"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
