import { useEffect, useMemo, useRef, useState } from "react";
import {
  deleteDesignSystem,
  fetchDesignSystems,
  ingestDesignSystem,
  updateDesignSystem,
  type DesignSystem,
} from "../api";

type CreateMode = "tokens" | "url" | "image" | "html" | "rules";

interface Props {
  open: boolean;
  motifId: string;
  onClose: () => void;
  onChanged: () => void;
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Could not read image"));
    reader.readAsDataURL(file);
  });
}

function traitCount(system: DesignSystem): number {
  return Object.values(system.traits || {}).reduce((sum, values) => sum + values.length, 0);
}

function tokenCount(system: DesignSystem): number {
  const walk = (value: unknown): number => {
    if (value === null || value === undefined) return 0;
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return 1;
    if (Array.isArray(value)) return value.reduce((sum: number, item) => sum + walk(item), 0);
    if (typeof value === "object") {
      return Object.values(value as Record<string, unknown>).reduce((sum: number, item) => sum + walk(item), 0);
    }
    return 0;
  };
  return walk(system.tokens);
}

export default function DesignSystemStudio({ open, motifId, onClose, onChanged }: Props) {
  const [systems, setSystems] = useState<DesignSystem[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [mode, setMode] = useState<CreateMode>("tokens");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [html, setHtml] = useState("");
  const [tokenJson, setTokenJson] = useState("");
  const [componentRules, setComponentRules] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setError("");
    fetchDesignSystems(motifId)
      .then((rows) => {
        setSystems(rows);
        setSelectedId((current) => current || rows[0]?.id || "");
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load design systems"));
  }, [motifId, open]);

  useEffect(() => {
    if (!open) return;
    const handler = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const selected = useMemo(
    () => systems.find((system) => system.id === selectedId) || null,
    [selectedId, systems]
  );

  const resetCreateFields = () => {
    setName("");
    setUrl("");
    setHtml("");
    setTokenJson("");
    setComponentRules("");
  };

  const createSystem = async (payload: { url?: string; html?: string; image?: string; tokenJson?: unknown }) => {
    setBusy(true);
    setError("");
    try {
      const saved = await ingestDesignSystem({
        motifId,
        name: name.trim() || `Design system ${systems.length + 1}`,
        componentRules,
        active: true,
        ...payload,
      });
      setSystems((prev) => [saved, ...prev]);
      setSelectedId(saved.id);
      resetCreateFields();
      onChanged();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Design system ingestion failed");
    } finally {
      setBusy(false);
    }
  };

  const handleCreate = async () => {
    if (mode === "url") {
      if (!url.trim()) return;
      await createSystem({ url: url.trim() });
      return;
    }
    if (mode === "html") {
      if (!html.trim()) return;
      await createSystem({ html });
      return;
    }
    if (mode === "tokens") {
      if (!tokenJson.trim()) return;
      let parsed: unknown;
      try {
        parsed = JSON.parse(tokenJson);
      } catch {
        setError("Token JSON is invalid");
        return;
      }
      await createSystem({ tokenJson: parsed });
      return;
    }
    if (mode === "rules") {
      if (!componentRules.trim()) return;
      await createSystem({});
      return;
    }
    imageInputRef.current?.click();
  };

  const handleImagePicked = async (file: File | undefined) => {
    if (!file) return;
    try {
      const image = await readFileAsDataUrl(file);
      await createSystem({ image });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Image ingestion failed");
    }
  };

  const toggleActive = async (system: DesignSystem) => {
    const next = await updateDesignSystem(system.id, { active: !system.active });
    setSystems((prev) => prev.map((item) => (item.id === next.id ? next : item)));
    onChanged();
  };

  const removeSelected = async () => {
    if (!selected) return;
    await deleteDesignSystem(selected.id);
    setSystems((prev) => prev.filter((item) => item.id !== selected.id));
    setSelectedId("");
    onChanged();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[65] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div
        ref={modalRef}
        className="flex max-h-[84vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl"
      >
        <div className="shrink-0 flex items-center justify-between gap-3 border-b border-white/5 px-5 py-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <i className="bi bi-bounding-box text-emerald-300/70" />
              <h2 className="text-sm font-medium text-white/90">Design Systems</h2>
            </div>
            <div className="mt-1 text-[11px] text-white/35">
              {systems.filter((system) => system.active).length} active on this board
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white/30 hover:text-white/60"
            aria-label="Close design systems"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[280px_1fr]">
          <aside className="min-h-0 overflow-y-auto border-b border-white/5 md:border-b-0 md:border-r">
            {systems.map((system) => (
              <button
                key={system.id}
                type="button"
                onClick={() => setSelectedId(system.id)}
                className={`w-full border-b border-white/5 px-4 py-3 text-left transition ${
                  selectedId === system.id
                    ? "bg-emerald-500/10 text-emerald-100"
                    : "text-white/60 hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="min-w-0 truncate text-sm">{system.name}</span>
                  <span className={`h-2 w-2 shrink-0 rounded-full ${system.active ? "bg-emerald-300" : "bg-white/20"}`} />
                </div>
                <div className="mt-1 truncate text-[10px] text-white/30">
                  {system.source_type} - {traitCount(system)} traits - {system.componentRules.length} rules
                </div>
              </button>
            ))}
            {systems.length === 0 && (
              <div className="p-5 text-center text-sm text-white/25">No design systems yet</div>
            )}
          </aside>

          <main className="min-h-0 overflow-y-auto p-5 space-y-5">
            <section className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xs font-medium text-white/70">Ingest</h3>
                <div className="flex rounded-lg border border-white/5 bg-white/[0.02] p-0.5">
                  {(["tokens", "url", "image", "html", "rules"] as CreateMode[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setMode(item)}
                      className={`rounded-md px-2.5 py-1 text-[11px] capitalize ${
                        mode === item ? "bg-white/10 text-white/80" : "text-white/35 hover:text-white/60"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="System name"
                className="w-full rounded-lg border border-white/5 bg-white/[0.035] px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/20"
              />

              {mode === "url" && (
                <input
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                  placeholder="https://example.com"
                  className="w-full rounded-lg border border-white/5 bg-white/[0.035] px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/20"
                />
              )}

              {mode === "tokens" && (
                <textarea
                  value={tokenJson}
                  onChange={(event) => setTokenJson(event.target.value)}
                  placeholder='{"color":{"brand":{"primary":{"value":"#0ea5e9"}}}}'
                  className="h-32 w-full resize-y rounded-lg border border-white/5 bg-white/[0.035] px-3 py-2 font-mono text-xs text-white placeholder:text-white/20 outline-none focus:border-white/20"
                />
              )}

              {mode === "html" && (
                <textarea
                  value={html}
                  onChange={(event) => setHtml(event.target.value)}
                  placeholder="<html>...</html>"
                  className="h-32 w-full resize-y rounded-lg border border-white/5 bg-white/[0.035] px-3 py-2 font-mono text-xs text-white placeholder:text-white/20 outline-none focus:border-white/20"
                />
              )}

              {(mode === "rules" || mode === "tokens" || mode === "url" || mode === "html" || mode === "image") && (
                <textarea
                  value={componentRules}
                  onChange={(event) => setComponentRules(event.target.value)}
                  placeholder="Buttons use icon+label pairs; cards stay 8px radius; data tables use compact rows"
                  className="h-20 w-full resize-y rounded-lg border border-white/5 bg-white/[0.035] px-3 py-2 text-xs text-white placeholder:text-white/20 outline-none focus:border-white/20"
                />
              )}

              <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  event.target.value = "";
                  void handleImagePicked(file);
                }}
              />

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCreate}
                  disabled={
                    busy ||
                    (mode === "url" && !url.trim()) ||
                    (mode === "html" && !html.trim()) ||
                    (mode === "tokens" && !tokenJson.trim()) ||
                    (mode === "rules" && !componentRules.trim())
                  }
                  className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black disabled:opacity-40"
                >
                  {busy ? (
                    <span className="inline-flex items-center gap-2">
                      <i className="bi bi-arrow-repeat animate-spin" />
                      Ingesting
                    </span>
                  ) : mode === "image" ? (
                    "Choose Image"
                  ) : (
                    "Ingest"
                  )}
                </button>
                {error && <span className="text-[11px] text-red-300">{error}</span>}
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xs font-medium text-white/70">Selected system</h3>
                {selected && (
                  <button
                    type="button"
                    onClick={removeSelected}
                    className="text-[11px] text-red-300/60 hover:text-red-300"
                  >
                    Delete
                  </button>
                )}
              </div>

              {selected ? (
                <div className="space-y-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-sm text-white/80">{selected.name}</div>
                      <div className="mt-1 text-[11px] text-white/35">
                        {selected.source_type}
                        {selected.source_ref ? ` - ${selected.source_ref}` : ""} - {tokenCount(selected)} token values
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => void toggleActive(selected)}
                      className={`rounded-md border px-2.5 py-1.5 text-[11px] ${
                        selected.active
                          ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
                          : "border-white/[0.06] bg-white/[0.025] text-white/40"
                      }`}
                    >
                      {selected.active ? "Active" : "Paused"}
                    </button>
                  </div>

                  {Object.entries(selected.traits || {}).map(([key, values]) => (
                    values.length > 0 && (
                      <div key={key} className="space-y-1.5">
                        <div className="text-[10px] uppercase tracking-wider text-white/25">{key}</div>
                        <div className="flex flex-wrap gap-1.5">
                          {values.slice(0, 14).map((value) => (
                            <span
                              key={`${key}-${value}`}
                              className="rounded-md border border-white/[0.06] bg-black/20 px-2 py-1 text-[10px] text-white/45"
                            >
                              {value}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  ))}

                  {selected.componentRules.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="text-[10px] uppercase tracking-wider text-white/25">Component rules</div>
                      <div className="space-y-1">
                        {selected.componentRules.map((rule) => (
                          <div key={rule} className="rounded-md bg-black/20 px-2 py-1.5 text-[11px] text-white/45">
                            {rule}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-white/[0.07] p-6 text-center text-sm text-white/25">
                  No system selected
                </div>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
