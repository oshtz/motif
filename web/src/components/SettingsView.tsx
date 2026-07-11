import { useState, useEffect, useRef, useMemo, type ReactNode } from "react";
import { useAppStore, useSettingsStore, type OpenRouterModel } from "../store";
import { downloadDatabaseBackup, restoreDatabaseBackup } from "../api";

/* ── Reusable Toggle ── */
function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label?: ReactNode;
}) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-9 h-5 rounded-full transition-colors duration-200 ${
          checked ? "bg-white/30" : "bg-white/10"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full transition-transform duration-200 ${
            checked ? "translate-x-4 bg-white" : "translate-x-0 bg-white/50"
          }`}
        />
      </button>
      {label && <span className="text-sm text-white/60">{label}</span>}
    </label>
  );
}

/* ── Reusable Dropdown ── */
function Dropdown({
  value,
  options,
  onChange,
  placeholder,
}: {
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (!open || !listRef.current) return;
    const item = listRef.current.children[highlight] as HTMLElement | undefined;
    item?.scrollIntoView({ block: "nearest" });
  }, [highlight, open]);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => {
          setOpen(!open);
          setHighlight(Math.max(0, options.findIndex((o) => o.value === value)));
        }}
        onKeyDown={(e) => {
          if (!open) return;
          if (e.key === "ArrowDown") { e.preventDefault(); setHighlight((i) => Math.min(i + 1, options.length - 1)); }
          else if (e.key === "ArrowUp") { e.preventDefault(); setHighlight((i) => Math.max(i - 1, 0)); }
          else if (e.key === "Enter") { e.preventDefault(); onChange(options[highlight].value); setOpen(false); }
          else if (e.key === "Escape") setOpen(false);
        }}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-left focus:outline-none focus:border-white/30 flex items-center justify-between transition"
      >
        <span className={selected ? "text-white/80" : "text-white/30"}>
          {selected ? selected.label : placeholder || "Select..."}
        </span>
        <i className={`bi bi-chevron-${open ? "up" : "down"} text-xs text-white/30`} />
      </button>
      {open && (
        <div
          ref={listRef}
          className="absolute z-50 mt-1 w-full max-h-64 overflow-auto rounded-lg border border-white/10 bg-neutral-900 shadow-xl"
        >
          {options.map((o, i) => (
            <button
              key={o.value}
              type="button"
              onMouseDown={(e) => { e.preventDefault(); onChange(o.value); setOpen(false); }}
              onMouseEnter={() => setHighlight(i)}
              className={`w-full text-left px-3 py-2 text-sm transition ${
                i === highlight ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
              } ${o.value === value ? "border-l-2 border-white/40" : ""}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Reusable Model Search Input ── */
function ModelSearchInput({
  value,
  onChange,
  models,
  loading,
  onLoadModels,
  label,
  icon,
}: {
  value: string;
  onChange: (v: string) => void;
  models: OpenRouterModel[];
  loading: boolean;
  onLoadModels: () => void;
  label: string;
  icon?: string;
}) {
  const [search, setSearch] = useState(value);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [highlightIdx, setHighlightIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setSearch(value); }, [value]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (!dropdownOpen || !listRef.current) return;
    const item = listRef.current.children[highlightIdx] as HTMLElement | undefined;
    item?.scrollIntoView({ block: "nearest" });
  }, [highlightIdx, dropdownOpen]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return models;
    return models.filter(
      (m) => m.id.toLowerCase().includes(q) || m.name.toLowerCase().includes(q)
    );
  }, [search, models]);

  const selectModel = (id: string) => {
    onChange(id);
    setSearch(id);
    setDropdownOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-sm text-white/50 mb-1">
        <i className={`bi ${icon || "bi-cpu"} me-1`} />
        {label}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onChange(e.target.value);
            setDropdownOpen(true);
            setHighlightIdx(0);
          }}
          onFocus={() => setDropdownOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setDropdownOpen(true);
              setHighlightIdx((i) => Math.min(i + 1, filtered.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setHighlightIdx((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter" && dropdownOpen && filtered[highlightIdx]) {
              e.preventDefault();
              selectModel(filtered[highlightIdx].id);
            } else if (e.key === "Escape") {
              setDropdownOpen(false);
            }
          }}
          placeholder="Search models..."
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30 pr-8"
        />
        <button
          type="button"
          onClick={() => {
            if (models.length === 0) onLoadModels();
            setDropdownOpen(!dropdownOpen);
            inputRef.current?.focus();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition"
        >
          {loading ? (
            <i className="bi bi-arrow-repeat animate-spin text-xs" />
          ) : (
            <i className={`bi bi-chevron-${dropdownOpen ? "up" : "down"} text-xs`} />
          )}
        </button>
      </div>
      {dropdownOpen && (
        <div
          ref={listRef}
          className="absolute z-50 mt-1 w-full max-h-64 overflow-auto rounded-lg border border-white/10 bg-neutral-900 shadow-xl"
        >
          {loading ? (
            <div className="px-3 py-4 text-sm text-white/30 text-center">
              <i className="bi bi-arrow-repeat animate-spin me-1" />
              Loading models...
            </div>
          ) : filtered.length === 0 ? (
            <div className="px-3 py-4 text-sm text-white/30 text-center">
              No models found
            </div>
          ) : (
            filtered.slice(0, 100).map((m, i) => (
              <button
                key={m.id}
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  selectModel(m.id);
                }}
                onMouseEnter={() => setHighlightIdx(i)}
                className={`w-full text-left px-3 py-2 text-sm transition ${
                  i === highlightIdx
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5"
                } ${m.id === value ? "border-l-2 border-white/40" : ""}`}
              >
                <div className="font-mono text-xs truncate">{m.id}</div>
                <div className="text-white/40 text-xs truncate">{m.name}</div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default function SettingsModal() {
  const { showSettings, setShowSettings } = useAppStore();
  const settings = useSettingsStore();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showStyleDropper, setShowStyleDropper] = useState(false);
  const [backupStatus, setBackupStatus] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const restoreInputRef = useRef<HTMLInputElement>(null);
  const firstRun = !settings.onboardingComplete;
  const shouldLoadModels =
    showSettings && settings.availableModels.length === 0 && !settings.modelsLoading;
  const loadModels = settings.loadModels;
  const beginDraft = settings.beginDraft;

  const close = async () => {
    settings.discardDraft();
    await settings.completeOnboarding().catch(() => {});
    setShowSettings(false);
  };

  // Load models when settings open
  useEffect(() => {
    if (showSettings) beginDraft();
  }, [showSettings, beginDraft]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!showSettings || !dialog) return;
    dialog.showModal();
    return () => dialog.close();
  }, [showSettings]);

  useEffect(() => {
    if (shouldLoadModels) {
      loadModels();
    }
  }, [shouldLoadModels, loadModels]);

  const handleSave = async () => {
    try {
      settings.setField("onboardingComplete", true);
      await settings.saveSettings();
      setShowSettings(false);
    } catch {
      // Store exposes the response error and the draft remains editable.
    }
  };

  if (!showSettings) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="settings-title"
      className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-0 text-white shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      onCancel={(event) => { event.preventDefault(); void close(); }}
      onClick={(event) => { if (event.target === event.currentTarget) void close(); }}
    >
      <div
        className="max-h-[90dvh] w-full space-y-5 overflow-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          <i className="bi bi-gear text-lg text-white/50" />
          <h2 id="settings-title" className="text-xl font-semibold">Settings</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-white/50 mb-1">
              <i className="bi bi-hdd-network me-1" />
              Provider
            </label>
            <Dropdown
              value={settings.provider}
              onChange={(v) => {
                settings.setField("provider", v);
                settings.setField("apiKey", "");
                settings.setField("apiKeyRemoveRequested", false);
                settings.setField("availableModels", []);
                // Reload models for the new provider immediately
                setTimeout(() => settings.loadModels(), 0);
              }}
              options={[
                { value: "openrouter", label: "OpenRouter" },
                { value: "ollama", label: "Ollama" },
                { value: "lmstudio", label: "LM Studio" },
                { value: "custom", label: "Custom (OpenAI-compatible)" },
              ]}
            />
          </div>

          {(settings.provider === "openrouter" || settings.provider === "custom") && (
            <div>
              <label className="block text-sm text-white/50 mb-1">
                <i className="bi bi-key me-1" />
                API Key
                {settings.provider === "custom" && <span className="text-white/25 ml-1">(optional)</span>}
              </label>
              <input
                type="password"
                value={settings.apiKey}
                onChange={(e) => { settings.setField("apiKey", e.target.value); settings.setField("apiKeyRemoveRequested", false); }}
                placeholder={
                  (settings.providerApiKeyConfigured[settings.provider] ?? settings.apiKeyConfigured)
                    ? `Configured (${settings.providerApiKeyPreview[settings.provider] || settings.apiKeyPreview}) - leave blank to keep`
                    : settings.provider === "openrouter"
                      ? "sk-or-..."
                      : "API key (if required)"
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30"
              />
              {settings.providerApiKeyConfigured[settings.provider] && (
                <button type="button" onClick={() => { settings.setField("apiKey", ""); settings.setField("apiKeyRemoveRequested", true); }} className="mt-1 text-xs text-red-300/70 hover:text-red-300">
                  Remove saved key
                </button>
              )}
              {settings.apiKeyRemoveRequested && <p className="mt-1 text-xs text-amber-300/70">Saved key will be removed on Save.</p>}
            </div>
          )}

          {settings.provider !== "openrouter" && (
            <div>
              <label className="block text-sm text-white/50 mb-1">
                <i className="bi bi-link-45deg me-1" />
                Base URL
              </label>
              <input
                type="text"
                value={settings.providerBaseUrl}
                onChange={(e) => settings.setField("providerBaseUrl", e.target.value)}
                placeholder={
                  settings.provider === "ollama"
                    ? "http://localhost:11434"
                    : settings.provider === "lmstudio"
                      ? "http://localhost:1234"
                      : "http://localhost:8080/v1"
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30"
              />
              <p className="text-xs text-white/25 mt-1">
                Leave empty for default ({
                  settings.provider === "ollama"
                    ? "localhost:11434"
                    : settings.provider === "lmstudio"
                      ? "localhost:1234"
                      : "specify your endpoint"
                })
              </p>
            </div>
          )}

          <div>
            <label className="block text-sm text-white/50 mb-1">
              <i className="bi bi-image me-1" />
              Pexels API Key
              <span className="text-white/25 ml-1">(recommended)</span>
            </label>
            <input
              type="password"
              value={settings.pexelsApiKey}
              onChange={(e) => { settings.setField("pexelsApiKey", e.target.value); settings.setField("clearPexelsApiKey", false); }}
              placeholder={
                settings.pexelsApiKeyConfigured
                  ? `Configured (${settings.pexelsApiKeyPreview}) - leave blank to keep`
                  : "API key from pexels.com/api"
              }
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30"
            />
            {settings.pexelsApiKeyConfigured && (
              <button type="button" onClick={() => { settings.setField("pexelsApiKey", ""); settings.setField("clearPexelsApiKey", true); }} className="mt-1 text-xs text-red-300/70 hover:text-red-300">Remove saved key</button>
            )}
            <p className="text-xs text-white/25 mt-1">
              Free image search — generations use real, curated photos instead of guessed URLs
            </p>
          </div>

          <div>
            <label className="block text-sm text-white/50 mb-1">
              <i className="bi bi-image me-1" />
              Unsplash API Key
              <span className="text-white/25 ml-1">(fallback)</span>
            </label>
            <input
              type="password"
              value={settings.unsplashAccessKey}
              onChange={(e) => { settings.setField("unsplashAccessKey", e.target.value); settings.setField("clearUnsplashAccessKey", false); }}
              placeholder={
                settings.unsplashAccessKeyConfigured
                  ? `Configured (${settings.unsplashAccessKeyPreview}) - leave blank to keep`
                  : "Access key from unsplash.com/developers"
              }
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30"
            />
            {settings.unsplashAccessKeyConfigured && (
              <button type="button" onClick={() => { settings.setField("unsplashAccessKey", ""); settings.setField("clearUnsplashAccessKey", true); }} className="mt-1 text-xs text-red-300/70 hover:text-red-300">Remove saved key</button>
            )}
            <p className="text-xs text-white/25 mt-1">
              Used as fallback if Pexels key is not set or returns no results
            </p>
          </div>

          <ModelSearchInput
            value={settings.model}
            onChange={(v) => settings.setField("model", v)}
            models={settings.availableModels}
            loading={settings.modelsLoading}
            onLoadModels={settings.loadModels}
            label="Model"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/50 mb-1">
                <i className="bi bi-thermometer-half me-1" />
                Temperature
              </label>
              <input
                type="number"
                min={0}
                max={2}
                step={0.1}
                value={settings.temperature}
                onChange={(e) =>
                  settings.setField("temperature", parseFloat(e.target.value))
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30"
              />
            </div>
            <div>
              <label className="block text-sm text-white/50 mb-1">
                <i className="bi bi-collection me-1" />
                Batch Size
              </label>
              <input
                type="number"
                min={1}
                max={8}
                value={settings.batchSize}
                onChange={(e) =>
                  settings.setField("batchSize", parseInt(e.target.value))
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30"
              />
            </div>
          </div>

          {/* Genome selector */}
          <div className={settings.systemPrompt ? "opacity-40 pointer-events-none" : ""}>
            <label className="block text-sm text-white/50 mb-1">
              <i className="bi bi-palette me-1" />
              Design Genome
            </label>
            <Dropdown
              value={settings.genomeId}
              onChange={(v) => settings.setField("genomeId", v)}
              placeholder="Auto-select (match to prompt)"
              options={[
                { value: "", label: "Auto-select (match to prompt)" },
                ...settings.availableGenomes.map((g) => ({
                  value: g.id,
                  label: `${g.id}: ${g.name}`,
                })),
              ]}
            />
            <p className="text-xs text-white/25 mt-1">
              Auto-select lets the AI pick the best genome for each prompt
            </p>
            <div className="mt-3">
              <Toggle
                checked={settings.shuffle}
                onChange={(v) => settings.setField("shuffle", v)}
                label="Shuffle (blend 2 genomes per generation)"
              />
              <p className="text-xs text-white/25 mt-1 ml-11">
                Each generation combines a primary and secondary genome for hybrid designs
              </p>
            </div>
          </div>

          {/* Advanced: custom system prompt */}
          <div>
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-xs text-white/30 hover:text-white/50 transition flex items-center gap-1"
            >
              <i className={`bi ${showAdvanced ? "bi-chevron-down" : "bi-chevron-right"}`} />
              Advanced: Custom System Prompt
            </button>
            {settings.systemPrompt && !showAdvanced && (
              <div className="mt-1.5 flex items-center gap-2 px-2 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-md">
                <i className="bi bi-exclamation-triangle text-amber-400 text-xs" />
                <span className="text-xs text-amber-400/80 flex-1">
                  Custom prompt is active — genome selector is bypassed
                </span>
                <button
                  onClick={() => {
                    settings.setField("systemPrompt", "");
                    settings.saveSettings();
                  }}
                  className="text-xs text-amber-400 hover:text-amber-300 transition underline"
                >
                  Clear
                </button>
              </div>
            )}
            {showAdvanced && (
              <div className="mt-2">
                <textarea
                  value={settings.systemPrompt}
                  onChange={(e) =>
                    settings.setField("systemPrompt", e.target.value)
                  }
                  rows={4}
                  placeholder="Leave empty to use genome system..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30 resize-none"
                />
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-white/25">
                    Overrides the genome system entirely when set
                  </p>
                  {settings.systemPrompt && (
                    <button
                      onClick={() => {
                        settings.setField("systemPrompt", "");
                        settings.saveSettings();
                      }}
                      className="text-xs text-red-400/70 hover:text-red-400 transition"
                    >
                      Clear prompt
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Style Dropper settings */}
          <div>
            <button
              onClick={() => setShowStyleDropper(!showStyleDropper)}
              className="text-xs text-white/30 hover:text-white/50 transition flex items-center gap-1"
            >
              <i className={`bi ${showStyleDropper ? "bi-chevron-down" : "bi-chevron-right"}`} />
              <i className="bi bi-eyedropper me-0.5" />
              Style Dropper
            </button>
            {showStyleDropper && (
              <div className="mt-2 space-y-3">
                <ModelSearchInput
                  value={settings.styleDropperModel}
                  onChange={(v) => settings.setField("styleDropperModel", v)}
                  models={settings.availableModels}
                  loading={settings.modelsLoading}
                  onLoadModels={settings.loadModels}
                  label="Style Dropper Model"
                  icon="bi-eyedropper"
                />
                <div>
                  <label className="block text-sm text-white/50 mb-1">
                    <i className="bi bi-card-text me-1" />
                    System Prompt
                  </label>
                  <textarea
                    value={settings.styleDropperSystemPrompt}
                    onChange={(e) =>
                      settings.setField("styleDropperSystemPrompt", e.target.value)
                    }
                    rows={4}
                    placeholder="Leave empty for default style dropper prompt..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30 resize-none"
                  />
                  <p className="text-xs text-white/25 mt-1">
                    Customizes how styles are extracted and applied during style drops
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-3" aria-labelledby="data-recovery-title">
          <h3 id="data-recovery-title" className="text-sm font-medium text-white/70">Data recovery</h3>
          <p className="mt-1 text-xs text-white/35">Export a consistent SQLite backup, or validate and stage one for restore on the next restart.</p>
          <input
            ref={restoreInputRef}
            type="file"
            accept=".db,application/vnd.sqlite3,application/octet-stream"
            className="hidden"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              event.target.value = "";
              if (!file || !window.confirm("Restore this Motif backup on the next restart? The current database will be kept as a recovery copy.")) return;
              try {
                await restoreDatabaseBackup(file);
                setBackupStatus("Backup validated. Restart Motif to complete the restore.");
              } catch (error) {
                setBackupStatus(error instanceof Error ? error.message : "Restore failed");
              }
            }}
          />
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={() => void downloadDatabaseBackup().then(() => setBackupStatus("Backup exported.")).catch((error) => setBackupStatus(error instanceof Error ? error.message : "Export failed"))} className="rounded-lg bg-white/10 px-3 py-2 text-xs text-white/70 hover:bg-white/15">
              Export backup
            </button>
            <button type="button" onClick={() => restoreInputRef.current?.click()} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/55 hover:text-white/75">
              Restore backup
            </button>
          </div>
          {backupStatus && <p role="status" className="mt-2 text-xs text-white/45">{backupStatus}</p>}
        </section>

        <div className="flex gap-3 justify-end">
          <button
            onClick={() => void close()}
            className="px-4 py-2 rounded-lg text-sm text-white/50 hover:bg-white/5 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg text-sm bg-white text-black font-medium hover:bg-white/90 transition flex items-center gap-1.5"
          >
            <i className="bi bi-check-lg" />
            Save
          </button>
        </div>

        {firstRun && (
          <section className="rounded-xl border border-sky-500/20 bg-sky-500/[0.07] p-3" aria-labelledby="first-run-title">
            <h3 id="first-run-title" className="text-sm font-medium text-sky-100">Connect a provider</h3>
            <p className="mt-1 text-xs leading-relaxed text-white/45">Motif sends prompts and generated UI context to the provider you choose. Keys stay in Motif’s local settings.</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button type="button" onClick={() => void settings.loadModels()} disabled={settings.modelsLoading} className="rounded-lg bg-sky-300 px-3 py-2 text-xs font-medium text-black disabled:opacity-50">
                {settings.modelsLoading ? "Testing..." : "Test connection"}
              </button>
              <span className="text-[11px] text-white/35">Sample: “A calm project dashboard with three active tasks.”</span>
            </div>
          </section>
        )}
        {settings.error && <p role="alert" className="text-xs text-red-300">{settings.error}</p>}
      </div>
    </dialog>
  );
}
