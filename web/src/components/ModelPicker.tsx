import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import type { OpenRouterModel } from "../store";

interface ModelPickerProps {
  value: string;
  onChange: (value: string) => void | Promise<void>;
  models: OpenRouterModel[];
  loading: boolean;
  onLoadModels: () => void | Promise<void>;
  label?: string;
  icon?: string;
  variant?: "field" | "compact";
  error?: string | null;
}

function fallbackModelName(id: string) {
  const name = id.split("/").pop() || id || "Select model";
  return name.length > 24 ? `…${name.slice(-23)}` : name;
}

export default function ModelPicker({
  value,
  onChange,
  models,
  loading,
  onLoadModels,
  label = "Model",
  icon = "bi-cpu",
  variant = "field",
  error,
}: ModelPickerProps) {
  const [compactSearch, setCompactSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const selected = models.find((model) => model.id === value);
  const compact = variant === "compact";

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = useMemo(() => {
    const query = (compact ? compactSearch : value).toLowerCase().trim();
    if (!query) return models;
    return models.filter(
      (model) =>
        model.id.toLowerCase().includes(query) ||
        model.name.toLowerCase().includes(query)
    );
  }, [compact, compactSearch, models, value]);
  const safeHighlight = Math.min(highlight, Math.max(0, filtered.length - 1));

  useEffect(() => {
    if (!open || !listRef.current) return;
    const item = listRef.current.children[safeHighlight] as HTMLElement | undefined;
    item?.scrollIntoView({ block: "nearest" });
  }, [open, safeHighlight]);

  const openPicker = () => {
    if (models.length === 0 && !loading) void onLoadModels();
    if (compact) setCompactSearch("");
    setHighlight(Math.max(0, models.findIndex((model) => model.id === value)));
    setOpen(true);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const selectModel = (id: string) => {
    setOpen(false);
    void onChange(id);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setHighlight((index) => Math.min(index + 1, Math.max(0, filtered.length - 1)));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlight((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && open && filtered[safeHighlight]) {
      event.preventDefault();
      selectModel(filtered[safeHighlight].id);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const results = (
    <div
      ref={listRef}
      role="listbox"
      className="max-h-64 overflow-auto"
    >
      {loading ? (
        <div className="px-3 py-4 text-center text-sm text-white/30">
          <i className="bi bi-arrow-repeat me-1 animate-spin text-xs" />
          Loading models...
        </div>
      ) : filtered.length === 0 ? (
        <div className="px-3 py-4 text-center text-sm text-white/30">
          No models found
        </div>
      ) : (
        filtered.slice(0, 100).map((model, index) => (
          <button
            key={model.id}
            type="button"
            role="option"
            aria-selected={model.id === value}
            onMouseDown={(event) => {
              event.preventDefault();
              selectModel(model.id);
            }}
            onMouseEnter={() => setHighlight(index)}
            className={`w-full px-3 py-2 text-left text-sm transition ${
              index === safeHighlight
                ? "bg-white/10 text-white"
                : "text-white/70 hover:bg-white/5"
            } ${model.id === value ? "border-l-2 border-white/40" : ""}`}
          >
            <div className="truncate text-xs font-medium">{model.name}</div>
            <div className="truncate font-mono text-[11px] text-white/35">{model.id}</div>
          </button>
        ))
      )}
    </div>
  );

  if (compact) {
    const displayName = selected?.name || fallbackModelName(value);
    return (
      <div ref={wrapperRef} className="relative shrink-0">
        <button
          type="button"
          data-testid="model-picker-trigger"
          onClick={() => open ? setOpen(false) : openPicker()}
          className="flex max-w-52 items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.035] px-2.5 py-2 text-xs text-white/45 transition hover:border-white/10 hover:bg-white/[0.06] hover:text-white/70"
          title={`Model: ${selected?.name || value}`}
          aria-label={`Choose model, currently ${selected?.name || value}`}
          aria-expanded={open}
        >
          <i className={`bi ${icon}`} />
          <span className="hidden max-w-32 truncate md:inline">{displayName}</span>
          {loading ? (
            <i className="bi bi-arrow-repeat animate-spin text-[10px]" />
          ) : (
            <i className={`bi bi-chevron-${open ? "up" : "down"} text-[9px]`} />
          )}
        </button>
        {open && (
          <div className="absolute right-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-2xl">
            <div className="border-b border-white/5 p-2">
              <div className="relative">
                <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/25" />
                <input
                  ref={inputRef}
                  type="text"
                  role="combobox"
                  aria-expanded={open}
                  aria-controls="topbar-model-results"
                  value={compactSearch}
                  onChange={(event) => {
                    setCompactSearch(event.target.value);
                    setHighlight(0);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Search models..."
                  className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-8 pr-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/25"
                />
              </div>
            </div>
            <div id="topbar-model-results">{results}</div>
            {error && <p role="alert" className="border-t border-white/5 px-3 py-2 text-xs text-red-300">{error}</p>}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="relative">
      <label className="mb-1 block text-sm text-white/50">
        <i className={`bi ${icon} me-1`} />
        {label}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded={open}
          value={value}
          onChange={(event) => {
            void onChange(event.target.value);
            setOpen(true);
            setHighlight(0);
          }}
          onFocus={() => {
            if (models.length === 0 && !loading) void onLoadModels();
            setOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search models..."
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 pr-8 text-sm focus:border-white/30 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => open ? setOpen(false) : openPicker()}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 transition hover:text-white/60"
          aria-label={open ? "Close model list" : "Open model list"}
        >
          {loading ? (
            <i className="bi bi-arrow-repeat animate-spin text-xs" />
          ) : (
            <i className={`bi bi-chevron-${open ? "up" : "down"} text-xs`} />
          )}
        </button>
      </div>
      {open && (
        <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-xl">
          {results}
        </div>
      )}
      {error && <p role="alert" className="mt-1 text-xs text-red-300">{error}</p>}
    </div>
  );
}
