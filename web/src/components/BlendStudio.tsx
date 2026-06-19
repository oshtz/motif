import { useState, useRef, useEffect } from "react";
import { useSettingsStore } from "../store";
import {
  createStyleRecipe,
  deleteStyleRecipe,
  fetchStyleRecipes,
  type StyleRecipe,
} from "../api";

const ASPECT_OPTIONS = [
  "colors & palette",
  "typography & text",
  "layout & spacing",
  "borders & shapes",
  "motion & transitions",
  "atmosphere & effects",
  "voice & tone",
];

export interface BlendEntry {
  id: string;
  weight: number;
  aspect: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onApply: (config: BlendEntry[], recipeId?: string, recipeName?: string) => void;
}

export default function BlendStudio({ open, onClose, onApply }: Props) {
  const { availableGenomes, loadGenomes } = useSettingsStore();
  const [entries, setEntries] = useState<BlendEntry[]>([
    { id: "", weight: 50, aspect: "colors & palette" },
    { id: "", weight: 50, aspect: "layout & spacing" },
  ]);
  const [searchTerms, setSearchTerms] = useState<string[]>(["", ""]);
  const [openPicker, setOpenPicker] = useState<number | null>(null);
  const [recipes, setRecipes] = useState<StyleRecipe[]>([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [recipeError, setRecipeError] = useState<string | null>(null);
  const [savingRecipe, setSavingRecipe] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const availableGenomeCount = availableGenomes.length;

  useEffect(() => {
    if (open && availableGenomeCount === 0) loadGenomes();
  }, [open, availableGenomeCount, loadGenomes]);

  useEffect(() => {
    if (!open) return;
    fetchStyleRecipes().then(setRecipes).catch(() => setRecipes([]));
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const updateEntry = (index: number, field: keyof BlendEntry, value: string | number) => {
    setEntries((prev) =>
      prev.map((e, i) => (i === index ? { ...e, [field]: value } : e))
    );
  };

  const addEntry = () => {
    if (entries.length >= 3) return;
    setEntries((prev) => [
      ...prev,
      { id: "", weight: 30, aspect: ASPECT_OPTIONS[prev.length % ASPECT_OPTIONS.length] },
    ]);
    setSearchTerms((prev) => [...prev, ""]);
  };

  const removeEntry = (index: number) => {
    if (entries.length <= 2) return;
    setEntries((prev) => prev.filter((_, i) => i !== index));
    setSearchTerms((prev) => prev.filter((_, i) => i !== index));
  };

  // Auto-balance weights to sum to 100
  const totalWeight = entries.reduce((s, e) => s + e.weight, 0);

  const handleApply = () => {
    const valid = entries.filter((e) => e.id);
    if (valid.length < 2) return;
    onApply(valid, selectedRecipeId || undefined, recipeName.trim() || undefined);
    onClose();
  };

  const applyRecipe = (recipe: StyleRecipe) => {
    const nextEntries = recipe.blendConfig.length > 0
      ? recipe.blendConfig
      : JSON.parse(recipe.blend_config_json || "[]");
    setEntries(nextEntries);
    setSearchTerms(nextEntries.map(() => ""));
    setSelectedRecipeId(recipe.id);
    setRecipeName(recipe.name);
    setRecipeError(null);
  };

  const handleSaveRecipe = async () => {
    const valid = entries.filter((e) => e.id);
    if (valid.length < 2) return;
    setSavingRecipe(true);
    setRecipeError(null);
    try {
      const saved = await createStyleRecipe({
        name: recipeName.trim() || `Recipe ${recipes.length + 1}`,
        blendConfig: valid,
      });
      setRecipes((prev) => [saved, ...prev]);
      setSelectedRecipeId(saved.id);
      setRecipeName(saved.name);
    } catch (err) {
      setRecipeError(err instanceof Error ? err.message : "Failed to save recipe");
    } finally {
      setSavingRecipe(false);
    }
  };

  const handleDeleteRecipe = async () => {
    if (!selectedRecipeId) return;
    await deleteStyleRecipe(selectedRecipeId).catch(() => {});
    setRecipes((prev) => prev.filter((r) => r.id !== selectedRecipeId));
    setSelectedRecipeId("");
  };

  const getGenomeName = (id: string): string => {
    const g = availableGenomes.find((g) => g.id === id);
    return g ? g.name : id;
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col"
      >
        {/* Header */}
        <div className="shrink-0 flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <i className="bi bi-sliders text-white/40" />
            <h2 className="text-sm font-medium text-white/90">Genome Blend Studio</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/30 hover:text-white/60 transition"
            aria-label="Close genome blend studio"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        {/* Entries */}
        <div className="flex-1 overflow-auto p-5 space-y-4">
          <div className="space-y-3 border border-white/5 rounded-xl p-4 bg-white/[0.02]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-medium text-white/70">Style recipes</div>
                <div className="text-[10px] text-white/30">
                  Save repeatable genome blends and reuse them across boards.
                </div>
              </div>
              {selectedRecipeId && (
                <button
                  type="button"
                  onClick={handleDeleteRecipe}
                  className="text-[11px] text-red-300/60 hover:text-red-300"
                >
                  Delete
                </button>
              )}
            </div>
            <select
              value={selectedRecipeId}
              onChange={(e) => {
                const id = e.target.value;
                const recipe = recipes.find((r) => r.id === id);
                if (recipe) applyRecipe(recipe);
                else {
                  setSelectedRecipeId("");
                  setRecipeName("");
                }
              }}
              className="w-full bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-sm text-white/70 outline-none"
            >
              <option value="">No saved recipe</option>
              {recipes.map((recipe) => (
                <option key={recipe.id} value={recipe.id}>
                  {recipe.name} - {recipe.summary}
                </option>
              ))}
            </select>
            <div className="flex gap-2">
              <input
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                placeholder="Recipe name"
                className="min-w-0 flex-1 bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none"
              />
              <button
                type="button"
                onClick={handleSaveRecipe}
                disabled={savingRecipe || entries.filter((e) => e.id).length < 2}
                className="px-3 py-2 rounded-lg bg-white text-black text-sm font-medium disabled:opacity-40"
              >
                Save
              </button>
            </div>
            {recipeError && (
              <div className="text-[11px] text-red-300">{recipeError}</div>
            )}
          </div>

          {entries.map((entry, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-4 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/40 font-medium">
                  Genome {i + 1}
                </span>
                {entries.length > 2 && (
                  <button
                    onClick={() => removeEntry(i)}
                    className="text-white/20 hover:text-red-400 transition text-xs"
                  >
                    <i className="bi bi-x-lg" />
                  </button>
                )}
              </div>

              {/* Genome picker */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenPicker(openPicker === i ? null : i)}
                  className={`w-full text-left px-3 py-2 rounded-lg border text-sm transition ${
                    entry.id
                      ? "bg-white/5 border-white/10 text-white/80"
                      : "bg-white/[0.02] border-white/5 text-white/30"
                  }`}
                >
                  {entry.id ? `${entry.id}: ${getGenomeName(entry.id)}` : "Select genome..."}
                </button>
                {openPicker === i && (
                  <div className="absolute top-full mt-1 left-0 right-0 max-h-48 overflow-auto rounded-lg border border-white/10 bg-neutral-800 shadow-xl z-50">
                    <input
                      type="text"
                      value={searchTerms[i] || ""}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSearchTerms((prev) =>
                          prev.map((s, si) => (si === i ? val : s))
                        );
                      }}
                      placeholder="Search genomes..."
                      className="w-full px-3 py-2 bg-transparent border-b border-white/5 text-sm text-white placeholder:text-white/20 outline-none"
                      autoFocus
                    />
                    {availableGenomes
                      .filter(
                        (g) =>
                          !searchTerms[i] ||
                          g.id.includes(searchTerms[i]) ||
                          g.name.toLowerCase().includes(searchTerms[i].toLowerCase())
                      )
                      .map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => {
                            updateEntry(i, "id", g.id);
                            setOpenPicker(null);
                          }}
                          className={`w-full text-left px-3 py-1.5 text-sm transition ${
                            g.id === entry.id
                              ? "bg-violet-500/15 text-violet-300"
                              : "text-white/60 hover:bg-white/5"
                          }`}
                        >
                          {g.id}: {g.name}
                        </button>
                      ))}
                  </div>
                )}
              </div>

              {/* Weight slider */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-white/30">Weight</span>
                  <span className="text-xs text-white/50 font-mono">{entry.weight}%</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={90}
                  value={entry.weight}
                  onChange={(e) => updateEntry(i, "weight", parseInt(e.target.value))}
                  className="w-full accent-violet-500"
                />
              </div>

              {/* Aspect selector */}
              <div>
                <span className="text-[10px] text-white/30 block mb-1">
                  Primary influence
                </span>
                <select
                  value={entry.aspect}
                  onChange={(e) => updateEntry(i, "aspect", e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-lg px-3 py-1.5 text-sm text-white/70 outline-none"
                >
                  {ASPECT_OPTIONS.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}

          {entries.length < 3 && (
            <button
              onClick={addEntry}
              className="w-full py-2 rounded-xl border border-dashed border-white/10 text-white/30 hover:text-white/50 hover:border-white/20 transition text-sm flex items-center justify-center gap-2"
            >
              <i className="bi bi-plus" /> Add genome (max 3)
            </button>
          )}

          {/* Weight summary */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-white/30">Total weight:</span>
            <span
              className={`font-mono ${
                totalWeight === 100
                  ? "text-green-400"
                  : "text-amber-400"
              }`}
            >
              {totalWeight}%
            </span>
            {totalWeight !== 100 && (
              <span className="text-white/20">(will be normalized)</span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-white/5 px-5 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm text-white/40 hover:text-white/60 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            disabled={entries.filter((e) => e.id).length < 2}
            className="px-5 py-2 rounded-xl bg-violet-500 text-white text-sm font-medium hover:bg-violet-400 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            Apply Blend
          </button>
        </div>
      </div>
    </div>
  );
}
