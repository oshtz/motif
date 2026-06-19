import { useEffect, useMemo, useRef, useState } from "react";
import {
  deleteStylePatch,
  extractStylePatch,
  fetchStylePatches,
  type StylePatch,
} from "../api";

interface Props {
  open: boolean;
  activePatchId?: string;
  onClose: () => void;
  onApply: (patch: StylePatch | null) => void;
}

type CreateMode = "url" | "image" | "html";

function traitCount(patch: StylePatch): number {
  return Object.values(patch.traits || {}).reduce((sum, values) => sum + values.length, 0);
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Could not read image"));
    reader.readAsDataURL(file);
  });
}

export default function StylePatchStudio({
  open,
  activePatchId = "",
  onClose,
  onApply,
}: Props) {
  const [patches, setPatches] = useState<StylePatch[]>([]);
  const [selectedId, setSelectedId] = useState(activePatchId);
  const [mode, setMode] = useState<CreateMode>("url");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [html, setHtml] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setSelectedId(activePatchId);
    fetchStylePatches()
      .then(setPatches)
      .catch(() => setPatches([]));
  }, [open, activePatchId]);

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

  const selectedPatch = useMemo(
    () => patches.find((patch) => patch.id === selectedId) || null,
    [patches, selectedId]
  );

  const createPatch = async (payload: { url?: string; html?: string; image?: string }) => {
    setBusy(true);
    setError(null);
    try {
      const saved = await extractStylePatch({
        name: name.trim() || `Patch ${patches.length + 1}`,
        ...payload,
      });
      setPatches((prev) => [saved, ...prev]);
      setSelectedId(saved.id);
      setName("");
      setUrl("");
      setHtml("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Patch extraction failed");
    } finally {
      setBusy(false);
    }
  };

  const handleCreate = async () => {
    if (mode === "url") {
      if (!url.trim()) return;
      await createPatch({ url: url.trim() });
      return;
    }
    if (mode === "html") {
      if (!html.trim()) return;
      await createPatch({ html });
      return;
    }
    imageInputRef.current?.click();
  };

  const handleImagePicked = async (file: File | undefined) => {
    if (!file) return;
    try {
      const image = await readFileAsDataUrl(file);
      await createPatch({ image });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Image patch extraction failed");
    }
  };

  const handleDelete = async () => {
    if (!selectedPatch) return;
    const deletingActive = selectedPatch.id === activePatchId;
    await deleteStylePatch(selectedPatch.id).catch(() => {});
    setPatches((prev) => prev.filter((patch) => patch.id !== selectedPatch.id));
    setSelectedId("");
    if (deletingActive) onApply(null);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div
        ref={modalRef}
        className="w-full max-w-3xl max-h-[82vh] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl flex flex-col"
      >
        <div className="shrink-0 flex items-center justify-between gap-3 border-b border-white/5 px-5 py-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <i className="bi bi-bezier2 text-violet-300/70" />
              <h2 className="text-sm font-medium text-white/90">Style Patches</h2>
            </div>
            {selectedPatch && (
              <div className="mt-1 text-[11px] text-white/35 truncate">
                Active candidate: {selectedPatch.name}
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white/30 hover:text-white/60"
            aria-label="Close style patches"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-[260px_1fr]">
          <aside className="min-h-0 border-b md:border-b-0 md:border-r border-white/5 overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedId("")}
              className={`w-full px-4 py-3 text-left text-sm border-b border-white/5 ${
                !selectedId ? "bg-white/[0.06] text-white" : "text-white/55 hover:bg-white/[0.03]"
              }`}
            >
              No patch
            </button>
            {patches.map((patch) => (
              <button
                key={patch.id}
                type="button"
                onClick={() => setSelectedId(patch.id)}
                className={`w-full px-4 py-3 text-left border-b border-white/5 transition ${
                  selectedId === patch.id
                    ? "bg-violet-500/10 text-violet-200"
                    : "text-white/60 hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="min-w-0 truncate text-sm">{patch.name}</span>
                  <span className="shrink-0 text-[10px] text-white/30">{traitCount(patch)}</span>
                </div>
                <div className="mt-1 text-[10px] text-white/30 truncate">
                  {patch.source_type}
                  {patch.source_ref ? ` - ${patch.source_ref}` : ""}
                </div>
              </button>
            ))}
          </aside>

          <main className="min-h-0 overflow-y-auto p-5 space-y-5">
            <section className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xs font-medium text-white/70">Create patch</h3>
                <div className="flex rounded-lg border border-white/5 bg-white/[0.02] p-0.5">
                  {(["url", "image", "html"] as CreateMode[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setMode(item)}
                      className={`px-2.5 py-1 text-[11px] rounded-md capitalize ${
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
                placeholder="Patch name"
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

              {mode === "html" && (
                <textarea
                  value={html}
                  onChange={(event) => setHtml(event.target.value)}
                  placeholder="<html>...</html>"
                  className="h-28 w-full resize-none rounded-lg border border-white/5 bg-white/[0.035] px-3 py-2 font-mono text-xs text-white placeholder:text-white/20 outline-none focus:border-white/20"
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

              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleCreate}
                  disabled={busy || (mode === "url" && !url.trim()) || (mode === "html" && !html.trim())}
                  className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium disabled:opacity-40"
                >
                  {busy ? (
                    <span className="inline-flex items-center gap-2">
                      <i className="bi bi-arrow-repeat animate-spin" />
                      Extracting
                    </span>
                  ) : mode === "image" ? (
                    "Choose Image"
                  ) : (
                    "Extract"
                  )}
                </button>
                {error && <span className="text-[11px] text-red-300">{error}</span>}
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xs font-medium text-white/70">Selected patch</h3>
                {selectedPatch && (
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="text-[11px] text-red-300/60 hover:text-red-300"
                  >
                    Delete
                  </button>
                )}
              </div>

              {selectedPatch ? (
                <div className="space-y-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div>
                    <div className="text-sm text-white/80">{selectedPatch.name}</div>
                    <div className="mt-1 text-[11px] text-white/35">
                      {selectedPatch.source_type}
                      {selectedPatch.source_ref ? ` - ${selectedPatch.source_ref}` : ""}
                    </div>
                  </div>
                  {Object.entries(selectedPatch.traits || {}).map(([key, values]) => (
                    values.length > 0 && (
                      <div key={key} className="space-y-1.5">
                        <div className="text-[10px] uppercase tracking-wider text-white/25">
                          {key}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {values.slice(0, 12).map((value) => (
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
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-white/[0.07] p-6 text-center text-sm text-white/25">
                  No patch selected
                </div>
              )}
            </section>
          </main>
        </div>

        <div className="shrink-0 flex items-center justify-between gap-3 border-t border-white/5 px-5 py-4">
          <button
            type="button"
            onClick={() => onApply(null)}
            className="px-4 py-2 rounded-lg text-sm text-white/40 hover:text-white/65"
          >
            Clear
          </button>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm text-white/40 hover:text-white/65"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                onApply(selectedPatch);
                onClose();
              }}
              className="px-5 py-2 rounded-xl bg-violet-500 text-white text-sm font-medium hover:bg-violet-400"
            >
              Apply Patch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
