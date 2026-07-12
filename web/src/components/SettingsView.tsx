import { useEffect, useRef, useState, type ReactNode } from "react";
import { useAppStore, useSettingsStore } from "../store";
import { downloadDatabaseBackup, restoreDatabaseBackup } from "../api";
import ModelPicker from "./ModelPicker";

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: ReactNode;
}) {
  return (
    <label className="inline-flex cursor-pointer select-none items-center gap-2">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-5 w-9 rounded-full transition-colors duration-200 ${
          checked ? "bg-white/30" : "bg-white/10"
        }`}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full transition-transform duration-200 ${
            checked ? "translate-x-4 bg-white" : "translate-x-0 bg-white/50"
          }`}
        />
      </button>
      {label && <span className="text-sm text-white/60">{label}</span>}
    </label>
  );
}

function Dropdown({
  value,
  options,
  onChange,
  placeholder,
}: {
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (!open || !listRef.current) return;
    const item = listRef.current.children[highlight] as HTMLElement | undefined;
    item?.scrollIntoView({ block: "nearest" });
  }, [highlight, open]);

  const selected = options.find((option) => option.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => {
          setOpen(!open);
          setHighlight(Math.max(0, options.findIndex((option) => option.value === value)));
        }}
        onKeyDown={(event) => {
          if (!open) return;
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setHighlight((index) => Math.min(index + 1, options.length - 1));
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setHighlight((index) => Math.max(index - 1, 0));
          } else if (event.key === "Enter") {
            event.preventDefault();
            onChange(options[highlight].value);
            setOpen(false);
          } else if (event.key === "Escape") {
            setOpen(false);
          }
        }}
        className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left text-sm transition focus:border-white/30 focus:outline-none"
      >
        <span className={selected ? "text-white/80" : "text-white/30"}>
          {selected ? selected.label : placeholder || "Select..."}
        </span>
        <i className={`bi bi-chevron-${open ? "up" : "down"} text-xs text-white/30`} />
      </button>
      {open && (
        <div
          ref={listRef}
          className="absolute z-50 mt-1 max-h-64 w-full overflow-auto rounded-lg border border-white/10 bg-neutral-900 shadow-xl"
        >
          {options.map((option, index) => (
            <button
              key={option.value}
              type="button"
              onMouseDown={(event) => {
                event.preventDefault();
                onChange(option.value);
                setOpen(false);
              }}
              onMouseEnter={() => setHighlight(index)}
              className={`w-full px-3 py-2 text-left text-sm transition ${
                index === highlight
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5"
              } ${option.value === value ? "border-l-2 border-white/40" : ""}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

type SettingsSection = "generation" | "providers" | "images" | "advanced" | "data";

const SETTINGS_SECTIONS: Array<{
  id: SettingsSection;
  label: string;
  icon: string;
}> = [
  { id: "generation", label: "Generation", icon: "bi-stars" },
  { id: "providers", label: "Providers", icon: "bi-hdd-network" },
  { id: "images", label: "Image Sources", icon: "bi-images" },
  { id: "advanced", label: "Advanced", icon: "bi-sliders" },
  { id: "data", label: "Data", icon: "bi-database" },
];

export default function SettingsModal() {
  const { showSettings, setShowSettings } = useAppStore();
  const settings = useSettingsStore();
  const [activeSection, setActiveSection] = useState<SettingsSection>(() =>
    settings.onboardingComplete ? "generation" : "providers"
  );
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

  useEffect(() => {
    if (!showSettings) return;
    beginDraft();
  }, [beginDraft, showSettings]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!showSettings || !dialog) return;
    dialog.showModal();
    return () => dialog.close();
  }, [showSettings]);

  useEffect(() => {
    if (shouldLoadModels) void loadModels();
  }, [loadModels, shouldLoadModels]);

  const handleSave = async () => {
    try {
      settings.setField("onboardingComplete", true);
      await settings.saveSettings();
      setShowSettings(false);
    } catch {
      // The store keeps the draft and exposes the request error.
    }
  };

  if (!showSettings) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="settings-title"
      className="m-auto h-[min(760px,calc(100dvh-2rem))] w-[calc(100%-2rem)] max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-0 text-white shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      onCancel={(event) => {
        event.preventDefault();
        void close();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) void close();
      }}
    >
      <div className="flex h-full min-h-0 flex-col" onClick={(event) => event.stopPropagation()}>
        <header className="flex shrink-0 items-center gap-3 border-b border-white/10 px-5 py-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/50">
            <i className="bi bi-gear" />
          </span>
          <div>
            <h2 id="settings-title" className="text-lg font-semibold">Settings</h2>
            <p className="text-xs text-white/35">Configure generation, providers, tools, and local data.</p>
          </div>
          <button
            type="button"
            onClick={() => void close()}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg text-white/35 transition hover:bg-white/5 hover:text-white/70"
            aria-label="Close settings"
          >
            <i className="bi bi-x-lg" />
          </button>
        </header>

        <div className="flex min-h-0 flex-1 flex-col md:grid md:grid-cols-[210px_minmax(0,1fr)]">
          <nav
            aria-label="Settings categories"
            className="shrink-0 overflow-x-auto border-b border-white/10 bg-black/10 p-2 md:overflow-visible md:border-b-0 md:border-r md:p-3"
          >
            <div className="flex min-w-max gap-1 md:min-w-0 md:flex-col">
              {SETTINGS_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveSection(section.id)}
                  aria-current={activeSection === section.id ? "page" : undefined}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition md:w-full ${
                    activeSection === section.id
                      ? "bg-white/10 text-white"
                      : "text-white/40 hover:bg-white/5 hover:text-white/65"
                  }`}
                >
                  <i className={`bi ${section.icon} text-xs`} />
                  {section.label}
                </button>
              ))}
            </div>
          </nav>

          <main className="min-h-0 overflow-auto p-5 md:p-6">
            {activeSection === "generation" && (
              <section aria-labelledby="generation-settings-title" className="mx-auto max-w-2xl space-y-6">
                <div>
                  <h3 id="generation-settings-title" className="text-base font-medium">Generation</h3>
                  <p className="mt-1 text-sm text-white/35">Defaults used across generation, chat, comparison, and variations.</p>
                </div>

                <ModelPicker
                  value={settings.model}
                  onChange={(value) => settings.setField("model", value)}
                  models={settings.availableModels}
                  loading={settings.modelsLoading}
                  onLoadModels={settings.loadModels}
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm text-white/50">
                      <i className="bi bi-thermometer-half me-1" />
                      Temperature
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={2}
                      step={0.1}
                      value={settings.temperature}
                      onChange={(event) => settings.setField("temperature", parseFloat(event.target.value))}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-white/30 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-white/50">
                      <i className="bi bi-collection me-1" />
                      Batch Size
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={8}
                      value={settings.batchSize}
                      onChange={(event) => settings.setField("batchSize", parseInt(event.target.value))}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-white/30 focus:outline-none"
                    />
                  </div>
                </div>

                <div className={settings.systemPrompt ? "pointer-events-none opacity-40" : ""}>
                  <label className="mb-1 block text-sm text-white/50">
                    <i className="bi bi-palette me-1" />
                    Design Genome
                  </label>
                  <Dropdown
                    value={settings.genomeId}
                    onChange={(value) => settings.setField("genomeId", value)}
                    placeholder="Auto-select (match to prompt)"
                    options={[
                      { value: "", label: "Auto-select (match to prompt)" },
                      ...settings.availableGenomes.map((genome) => ({
                        value: genome.id,
                        label: `${genome.id}: ${genome.name}`,
                      })),
                    ]}
                  />
                  <p className="mt-1 text-xs text-white/25">Auto-select lets the AI match a genome to each prompt.</p>
                  <div className="mt-4">
                    <Toggle
                      checked={settings.shuffle}
                      onChange={(value) => settings.setField("shuffle", value)}
                      label="Shuffle (blend 2 genomes per generation)"
                    />
                    <p className="ml-11 mt-1 text-xs text-white/25">Each generation combines a primary and secondary genome.</p>
                  </div>
                </div>

                {settings.systemPrompt && (
                  <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs text-amber-300/80">
                    <i className="bi bi-exclamation-triangle" />
                    Custom system prompt is active; genome controls are bypassed.
                  </div>
                )}
              </section>
            )}

            {activeSection === "providers" && (
              <section aria-labelledby="provider-settings-title" className="mx-auto max-w-2xl space-y-6">
                <div>
                  <h3 id="provider-settings-title" className="text-base font-medium">Providers</h3>
                  <p className="mt-1 text-sm text-white/35">Connect an OpenRouter, local, or OpenAI-compatible model provider.</p>
                </div>

                {firstRun && (
                  <div className="rounded-xl border border-sky-500/20 bg-sky-500/[0.07] p-4">
                    <h4 className="text-sm font-medium text-sky-100">Connect a provider</h4>
                    <p className="mt-1 text-xs leading-relaxed text-white/45">Motif sends prompts and generated UI context to the provider you choose. Keys stay in Motif's local settings.</p>
                    <button
                      type="button"
                      onClick={() => void settings.loadModels()}
                      disabled={settings.modelsLoading}
                      className="mt-3 rounded-lg bg-sky-300 px-3 py-2 text-xs font-medium text-black disabled:opacity-50"
                    >
                      {settings.modelsLoading ? "Testing..." : "Test connection"}
                    </button>
                  </div>
                )}

                <div>
                  <label className="mb-1 block text-sm text-white/50">
                    <i className="bi bi-hdd-network me-1" />
                    Provider
                  </label>
                  <Dropdown
                    value={settings.provider}
                    onChange={(value) => {
                      settings.setField("provider", value);
                      settings.setField("apiKey", "");
                      settings.setField("apiKeyRemoveRequested", false);
                      settings.setField("availableModels", []);
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
                    <label className="mb-1 block text-sm text-white/50">
                      <i className="bi bi-key me-1" />
                      API Key
                      {settings.provider === "custom" && <span className="ml-1 text-white/25">(optional)</span>}
                    </label>
                    <input
                      type="password"
                      value={settings.apiKey}
                      onChange={(event) => {
                        settings.setField("apiKey", event.target.value);
                        settings.setField("apiKeyRemoveRequested", false);
                      }}
                      placeholder={
                        (settings.providerApiKeyConfigured[settings.provider] ?? settings.apiKeyConfigured)
                          ? `Configured (${settings.providerApiKeyPreview[settings.provider] || settings.apiKeyPreview}) - leave blank to keep`
                          : settings.provider === "openrouter"
                            ? "sk-or-..."
                            : "API key (if required)"
                      }
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-white/30 focus:outline-none"
                    />
                    {settings.providerApiKeyConfigured[settings.provider] && (
                      <button
                        type="button"
                        onClick={() => {
                          settings.setField("apiKey", "");
                          settings.setField("apiKeyRemoveRequested", true);
                        }}
                        className="mt-1 text-xs text-red-300/70 hover:text-red-300"
                      >
                        Remove saved key
                      </button>
                    )}
                    {settings.apiKeyRemoveRequested && <p className="mt-1 text-xs text-amber-300/70">Saved key will be removed on Save.</p>}
                  </div>
                )}

                {settings.provider !== "openrouter" && (
                  <div>
                    <label className="mb-1 block text-sm text-white/50">
                      <i className="bi bi-link-45deg me-1" />
                      Base URL
                    </label>
                    <input
                      type="text"
                      value={settings.providerBaseUrl}
                      onChange={(event) => settings.setField("providerBaseUrl", event.target.value)}
                      placeholder={
                        settings.provider === "ollama"
                          ? "http://localhost:11434"
                          : settings.provider === "lmstudio"
                            ? "http://localhost:1234"
                            : "http://localhost:8080/v1"
                      }
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-white/30 focus:outline-none"
                    />
                    <p className="mt-1 text-xs text-white/25">
                      Leave empty for the provider default endpoint.
                    </p>
                  </div>
                )}
              </section>
            )}

            {activeSection === "images" && (
              <section aria-labelledby="image-settings-title" className="mx-auto max-w-2xl space-y-6">
                <div>
                  <h3 id="image-settings-title" className="text-base font-medium">Image Sources</h3>
                  <p className="mt-1 text-sm text-white/35">Optional image-search credentials used to source real photography.</p>
                </div>

                <div>
                  <label className="mb-1 block text-sm text-white/50">
                    <i className="bi bi-image me-1" />
                    Pexels API Key <span className="ml-1 text-white/25">(recommended)</span>
                  </label>
                  <input
                    type="password"
                    value={settings.pexelsApiKey}
                    onChange={(event) => {
                      settings.setField("pexelsApiKey", event.target.value);
                      settings.setField("clearPexelsApiKey", false);
                    }}
                    placeholder={
                      settings.pexelsApiKeyConfigured
                        ? `Configured (${settings.pexelsApiKeyPreview}) - leave blank to keep`
                        : "API key from pexels.com/api"
                    }
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-white/30 focus:outline-none"
                  />
                  {settings.pexelsApiKeyConfigured && (
                    <button
                      type="button"
                      onClick={() => {
                        settings.setField("pexelsApiKey", "");
                        settings.setField("clearPexelsApiKey", true);
                      }}
                      className="mt-1 text-xs text-red-300/70 hover:text-red-300"
                    >
                      Remove saved key
                    </button>
                  )}
                  <p className="mt-1 text-xs text-white/25">Generations use curated photos instead of guessed URLs.</p>
                </div>

                <div>
                  <label className="mb-1 block text-sm text-white/50">
                    <i className="bi bi-image me-1" />
                    Unsplash API Key <span className="ml-1 text-white/25">(fallback)</span>
                  </label>
                  <input
                    type="password"
                    value={settings.unsplashAccessKey}
                    onChange={(event) => {
                      settings.setField("unsplashAccessKey", event.target.value);
                      settings.setField("clearUnsplashAccessKey", false);
                    }}
                    placeholder={
                      settings.unsplashAccessKeyConfigured
                        ? `Configured (${settings.unsplashAccessKeyPreview}) - leave blank to keep`
                        : "Access key from unsplash.com/developers"
                    }
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-white/30 focus:outline-none"
                  />
                  {settings.unsplashAccessKeyConfigured && (
                    <button
                      type="button"
                      onClick={() => {
                        settings.setField("unsplashAccessKey", "");
                        settings.setField("clearUnsplashAccessKey", true);
                      }}
                      className="mt-1 text-xs text-red-300/70 hover:text-red-300"
                    >
                      Remove saved key
                    </button>
                  )}
                  <p className="mt-1 text-xs text-white/25">Used when Pexels is unavailable or returns no results.</p>
                </div>
              </section>
            )}

            {activeSection === "advanced" && (
              <section aria-labelledby="advanced-settings-title" className="mx-auto max-w-2xl space-y-7">
                <div>
                  <h3 id="advanced-settings-title" className="text-base font-medium">Advanced</h3>
                  <p className="mt-1 text-sm text-white/35">Override prompt behavior and configure specialized tools.</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <label className="text-sm text-white/50">
                      <i className="bi bi-card-text me-1" />
                      Custom System Prompt
                    </label>
                    {settings.systemPrompt && (
                      <button
                        type="button"
                        onClick={() => settings.setField("systemPrompt", "")}
                        className="text-xs text-red-300/70 hover:text-red-300"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <textarea
                    value={settings.systemPrompt}
                    onChange={(event) => settings.setField("systemPrompt", event.target.value)}
                    rows={6}
                    placeholder="Leave empty to use the genome system..."
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-white/30 focus:outline-none"
                  />
                  <p className="text-xs text-white/25">Overrides the genome system entirely when set.</p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white/70">
                      <i className="bi bi-eyedropper me-1" />
                      Style Dropper
                    </h4>
                    <p className="mt-1 text-xs text-white/30">Configure style extraction independently from normal generation.</p>
                  </div>
                  <div className="space-y-4">
                    <ModelPicker
                      value={settings.styleDropperModel}
                      onChange={(value) => settings.setField("styleDropperModel", value)}
                      models={settings.availableModels}
                      loading={settings.modelsLoading}
                      onLoadModels={settings.loadModels}
                      label="Style Dropper Model"
                      icon="bi-eyedropper"
                    />
                    <div>
                      <label className="mb-1 block text-sm text-white/50">System Prompt</label>
                      <textarea
                        value={settings.styleDropperSystemPrompt}
                        onChange={(event) => settings.setField("styleDropperSystemPrompt", event.target.value)}
                        rows={5}
                        placeholder="Leave empty for the default style dropper prompt..."
                        className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-white/30 focus:outline-none"
                      />
                      <p className="mt-1 text-xs text-white/25">Customizes how styles are extracted and applied.</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "data" && (
              <section aria-labelledby="data-settings-title" className="mx-auto max-w-2xl space-y-6">
                <div>
                  <h3 id="data-settings-title" className="text-base font-medium">Data</h3>
                  <p className="mt-1 text-sm text-white/35">Export a consistent local database backup or stage one for restore.</p>
                </div>

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

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <h4 className="text-sm font-medium text-white/70">Database backup</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/35">Projects, generations, settings, and metadata are stored in Motif's local SQLite database.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => void downloadDatabaseBackup()
                        .then(() => setBackupStatus("Backup exported."))
                        .catch((error) => setBackupStatus(error instanceof Error ? error.message : "Export failed"))}
                      className="rounded-lg bg-white/10 px-3 py-2 text-xs text-white/70 hover:bg-white/15"
                    >
                      Export backup
                    </button>
                    <button
                      type="button"
                      onClick={() => restoreInputRef.current?.click()}
                      className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/55 hover:text-white/75"
                    >
                      Restore backup
                    </button>
                  </div>
                  {backupStatus && <p role="status" className="mt-3 text-xs text-white/45">{backupStatus}</p>}
                </div>
              </section>
            )}
          </main>
        </div>

        <footer className="flex shrink-0 items-center gap-3 border-t border-white/10 bg-[#141414] px-5 py-3">
          {settings.error && <p role="alert" className="mr-auto text-xs text-red-300">{settings.error}</p>}
          {!settings.error && <span className="mr-auto" />}
          <button
            type="button"
            onClick={() => void close()}
            className="rounded-lg px-4 py-2 text-sm text-white/50 transition hover:bg-white/5"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <i className="bi bi-check-lg" />
            Save
          </button>
        </footer>
      </div>
    </dialog>
  );
}
