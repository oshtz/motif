import { lazy, Suspense, useState, useRef, useEffect } from "react";
import { useAppStore, useSettingsStore } from "../store";
import { fetchMotifs, createMotif, renameMotif, deleteMotif } from "../api";
import GenerationProgress from "./GenerationProgress";
import ConfirmDialog from "./ConfirmDialog";
import ModelPicker from "./ModelPicker";

const ComponentLibrary = lazy(() => import("./ComponentLibrary"));

interface TopBarProps {
  desktop?: boolean;
}

export default function TopBar({ desktop = false }: TopBarProps) {
  const {
    setActiveTab, setSelectedId, setShowSettings, setShowAnalytics,
    showFavoritesOnly, setShowFavoritesOnly,
    activeMotifId, setActiveMotifId, setMotifs,
    motifs, addMotif, removeMotif, updateMotifName,
    exitDropperMode, exitEditMode, styleDropperMode, editMode, loadGenerations,
  } = useAppStore();
  const settings = useSettingsStore();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showComponents, setShowComponents] = useState(false);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState("");
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<{ id: string; name: string } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const createInputRef = useRef<HTMLInputElement>(null);
  const renameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (creating) createInputRef.current?.focus(); }, [creating]);
  useEffect(() => { if (renamingId) renameInputRef.current?.focus(); }, [renamingId]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
        setCreating(false);
        setNewName("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);

  const activeTab = useAppStore((s) => s.activeTab);
  const activeMotif = motifs.find((m) => m.id === activeMotifId);

  const switchToMotif = async (motifId: string | null) => {
    if (styleDropperMode) exitDropperMode();
    if (editMode) exitEditMode();
    setSelectedId(null);
    setActiveMotifId(motifId);
    setActiveTab("gallery");
    setDropdownOpen(false);
    await loadGenerations(motifId ?? undefined);
  };

  const handleCreate = async () => {
    const name = newName.trim();
    if (!name) { setCreating(false); setNewName(""); return; }
    try {
      const motif = await createMotif(name);
      addMotif(motif);
      setCreating(false);
      setNewName("");
      switchToMotif(motif.id);
    } catch (err) {
      console.error("Failed to create motif:", err);
    }
  };

  const handleRename = async (id: string) => {
    const name = renameValue.trim();
    if (!name) { setRenamingId(null); setRenameValue(""); return; }
    try {
      await renameMotif(id, name);
      updateMotifName(id, name);
    } catch (err) {
      console.error("Failed to rename:", err);
    }
    setRenamingId(null);
    setRenameValue("");
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteMotif(id);
      removeMotif(id);
      if (activeMotifId === id) {
        switchToMotif(null);
      } else {
        const updated = await fetchMotifs();
        setMotifs(updated);
      }
    } catch (err) {
      console.error("Failed to delete motif:", err);
    }
  };

  return (
    <div className={`fixed ${desktop ? "top-8" : "top-0"} left-0 right-0 z-40 flex items-center px-4 py-2.5 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md gap-3`}>
      {/* Left: Brandmark */}
      <button
        onClick={() => switchToMotif(null)}
        className="text-white/40 hover:text-white/70 transition shrink-0"
        aria-label="Show all generations"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 256 256">
          <path d="m87.15 226v-68.34c0.46-18 2.56-41.97 17.88-56.37 4.49-4.33 9.09-8.14 12.5-9.65-11.71 21.79-17.57 45.01-17.57 72.25v62.11h55.56v-65.83c0-20.19-6.56-47.89-19.31-70 4 2.62 12.21 9.11 15.75 13.34 11.28 13 16.92 25.66 17.25 53.69v68.8h78.79v-144.9c-0.89-22-13.03-50.91-47.48-52-26.31-0.83-49.2 14.69-66.82 34-4 4.64-7.5 9-9.45 12-23-26.85-55.65-45.61-93.98-46.2-9.09-0.15-14.26-0.23-22.27 0.56v196.6h79.15z" fill="currentColor"/>
        </svg>
      </button>

      {/* Motif dropdown */}
      <div ref={dropdownRef} className="relative shrink-0">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
            activeMotifId
              ? "bg-white/10 text-white/90"
              : "text-white/40 hover:text-white/60 hover:bg-white/5"
          }`}
          aria-label="Select motif"
        >
          <span className="truncate max-w-[160px]">
            {activeMotif ? activeMotif.name : "Motifs"}
          </span>
          <i className={`bi bi-chevron-${dropdownOpen ? "up" : "down"} text-[10px] opacity-50`} />
        </button>

        {dropdownOpen && (
          <div className="absolute top-full mt-1 left-0 w-56 max-h-80 overflow-auto rounded-lg border border-white/10 bg-neutral-900/95 backdrop-blur-xl shadow-xl py-1 z-50">
            {/* Home / All */}
            <button
              onClick={() => switchToMotif(null)}
              className={`w-full text-left px-3 py-2 text-sm transition flex items-center gap-2 ${
                activeMotifId === null
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5"
              }`}
            >
              <i className="bi bi-grid-3x3-gap text-xs opacity-50" />
              All generations
            </button>

            {motifs.length > 0 && (
              <div className="border-t border-white/5 my-1" />
            )}

            {/* Motif list */}
            {motifs.map((motif) => (
              <div
                key={motif.id}
                className={`group/item flex items-center px-3 py-2 text-sm transition ${
                  activeMotifId === motif.id
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5"
                }`}
              >
                {renamingId === motif.id ? (
                  <input
                    ref={renameInputRef}
                    value={renameValue}
                    onChange={(e) => setRenameValue(e.target.value)}
                    onBlur={() => handleRename(motif.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleRename(motif.id);
                      if (e.key === "Escape") { setRenamingId(null); setRenameValue(""); }
                    }}
                    className="flex-1 bg-transparent border-b border-white/30 text-white text-sm outline-none"
                  />
                ) : (
                  <>
                    <button
                      onClick={() => switchToMotif(motif.id)}
                      className="flex-1 text-left truncate"
                    >
                      {motif.name}
                    </button>
                    <div className="flex items-center gap-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity ml-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setRenamingId(motif.id);
                          setRenameValue(motif.name);
                        }}
                        className="w-6 h-6 flex items-center justify-center rounded text-white/40 hover:text-white/70 hover:bg-white/10 transition"
                        title="Rename"
                        aria-label={`Rename ${motif.name}`}
                      >
                        <i className="bi bi-pencil text-[10px]" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteTarget({ id: motif.id, name: motif.name });
                        }}
                        className="w-6 h-6 flex items-center justify-center rounded text-white/40 hover:text-red-400 hover:bg-red-500/10 transition"
                        title="Delete"
                        aria-label={`Delete ${motif.name}`}
                      >
                        <i className="bi bi-trash3 text-[10px]" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}

            <div className="border-t border-white/5 my-1" />

            {/* New motif */}
            {creating ? (
              <div className="px-3 py-2">
                <input
                  ref={createInputRef}
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onBlur={handleCreate}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleCreate();
                    if (e.key === "Escape") { setCreating(false); setNewName(""); }
                  }}
                  placeholder="motif name..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-sm text-white placeholder:text-white/30 outline-none"
                />
              </div>
            ) : (
              <button
                onClick={() => setCreating(true)}
                className="w-full text-left px-3 py-2 text-sm text-white/40 hover:text-white/60 hover:bg-white/5 transition flex items-center gap-2"
              >
                <i className="bi bi-plus text-xs" />
                New motif
              </button>
            )}
          </div>
        )}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right: Generation progress + Compare + Settings */}
      <div className="flex items-center gap-1 sm:gap-3 shrink-0">
        <ModelPicker
          variant="compact"
          value={settings.model}
          onChange={settings.persistModel}
          models={settings.availableModels}
          loading={settings.modelsLoading}
          onLoadModels={settings.loadModels}
          error={settings.error}
        />
        <GenerationProgress />
        <button
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          className={`p-2 rounded-lg transition ${
            showFavoritesOnly
              ? "bg-yellow-500/15 text-yellow-400"
              : "hover:bg-white/5 text-white/30 hover:text-white/60"
          }`}
          title={showFavoritesOnly ? "Showing favorites" : "Show favorites"}
          aria-label={showFavoritesOnly ? "Show all generations" : "Show favorites"}
        >
          <i className={`bi ${showFavoritesOnly ? "bi-star-fill" : "bi-star"}`} />
        </button>
        <button
          onClick={() => {
            if (styleDropperMode) exitDropperMode();
            if (editMode) exitEditMode();
            setSelectedId(null);
            setActiveTab("compare");
          }}
          className={`p-2 rounded-lg transition ${
            activeTab === "compare"
              ? "bg-amber-500/15 text-amber-400"
              : "hover:bg-white/5 text-white/30 hover:text-white/60"
          }`}
          title="Compare: Raw vs Genome"
          aria-label="Compare raw versus genome"
        >
          <i className="bi bi-layout-split" />
        </button>
        <button
          onClick={() => {
            if (styleDropperMode) exitDropperMode();
            if (editMode) exitEditMode();
            setSelectedId(null);
            setActiveTab("board");
          }}
          className={`p-2 rounded-lg transition ${
            activeTab === "board"
              ? "bg-emerald-500/15 text-emerald-400"
              : "hover:bg-white/5 text-white/30 hover:text-white/60"
          }`}
          title="Project Board"
          aria-label="Open project board"
        >
          <i className="bi bi-kanban" />
        </button>
        <details className="group/tools relative">
          <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs text-white/35 hover:bg-white/5 hover:text-white/60 [&::-webkit-details-marker]:hidden" aria-label="Open Tools and Advanced menu">
            <i className="bi bi-tools" />
            <span className="hidden sm:inline">Tools</span>
            <i className="bi bi-chevron-down text-[9px] group-open/tools:rotate-180" />
          </summary>
          <div className="absolute right-0 top-full z-50 mt-1 w-52 rounded-xl border border-white/10 bg-neutral-900 p-1.5 shadow-xl">
            <button type="button" onClick={() => { setSelectedId(null); setActiveTab("batch-compare"); }} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-white/60 hover:bg-white/5">
              <i className="bi bi-grid-3x3-gap" /> Batch compare
            </button>
            <button type="button" onClick={() => setShowComponents(true)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-white/60 hover:bg-white/5">
              <i className="bi bi-collection" /> Components
            </button>
            <button type="button" onClick={() => setShowAnalytics(true)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-white/60 hover:bg-white/5">
              <i className="bi bi-bar-chart-line" /> Analytics
            </button>
            <div className="my-1 border-t border-white/5" />
            <button type="button" onClick={() => setShowSettings(true)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-white/60 hover:bg-white/5">
              <i className="bi bi-gear" /> Settings & Advanced
            </button>
          </div>
        </details>
      </div>
      {showComponents && (
        <Suspense fallback={null}>
          <ComponentLibrary
            open={showComponents}
            onClose={() => setShowComponents(false)}
          />
        </Suspense>
      )}
      <ConfirmDialog
        open={Boolean(deleteTarget)}
        title="Delete motif?"
        confirmLabel="Delete"
        danger
        onClose={() => setDeleteTarget(null)}
        onConfirm={async () => {
          if (!deleteTarget) return;
          await handleDelete(deleteTarget.id);
          setDeleteTarget(null);
        }}
      >
        This permanently deletes “{deleteTarget?.name}” and its generations.
      </ConfirmDialog>
    </div>
  );
}
