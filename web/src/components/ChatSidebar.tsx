import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useAppStore, useSettingsStore, type Generation } from "../store";
import { generateStream, editStream } from "../api";

const MIN_WIDTH = 240;
const MAX_WIDTH = 480;
const DEFAULT_WIDTH = 320;

/** Lightweight inline markdown → React elements (bold, italic, code, headers, line breaks) */
function MiniMarkdown({ text, className }: { text: string; className?: string }) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];

  for (let li = 0; li < lines.length; li++) {
    const line = lines[li];

    // Headers
    const headerMatch = line.match(/^(#{1,3})\s+(.+)/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      const cls = level === 1 ? "text-[13px] font-semibold text-white/60 mt-2 mb-0.5"
        : level === 2 ? "text-[12px] font-semibold text-white/50 mt-1.5 mb-0.5"
        : "text-[11px] font-medium text-white/45 mt-1 mb-0.5";
      elements.push(<div key={li} className={cls}>{renderInline(headerMatch[2])}</div>);
      continue;
    }

    // Bullet points
    if (line.match(/^\s*[-*]\s+/)) {
      elements.push(
        <div key={li} className="flex gap-1.5 pl-1">
          <span className="text-white/20 shrink-0">·</span>
          <span>{renderInline(line.replace(/^\s*[-*]\s+/, ""))}</span>
        </div>
      );
      continue;
    }

    // Empty lines = spacing
    if (line.trim() === "") {
      elements.push(<div key={li} className="h-1.5" />);
      continue;
    }

    // Normal text
    elements.push(<div key={li}>{renderInline(line)}</div>);
  }

  return <div className={className}>{elements}</div>;
}

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  // Match **bold**, *italic*, `code` — process in order of appearance
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`)/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      parts.push(<strong key={key++} className="font-semibold text-white/70">{match[2]}</strong>);
    } else if (match[3]) {
      parts.push(<em key={key++} className="italic text-white/55">{match[3]}</em>);
    } else if (match[4]) {
      parts.push(<code key={key++} className="text-[10px] bg-white/[0.06] px-1 py-0.5 rounded text-white/60">{match[4]}</code>);
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

function timeAgo(ts: number): string {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

interface ChatTurn {
  id: string; // unique key
  userPrompt: string;
  type: "generate" | "edit" | "style-drop";
  timestamp: number;
  // AI response data
  expandedPrompt: string; // the AI's interpretation
  genomeName?: string;
  secondaryGenomeName?: string;
  variantCount: number;
  generationIds: string[];
}

export default function ChatSidebar() {
  const {
    prompt, setPrompt,
    generations, streamingVariants,
    activeGenerations,
    startGeneration, endGeneration,
    addStreamingVariant, addPlaceholders, expandingVariant,
    replacePlaceholder, removeStreamingVariant,
    appendChunk, finalizeVariant, errorVariant,
    registerRun,
    editMode, editTargetId, exitEditMode, enterEditMode,
    activeMotifId, motifs,
  } = useAppStore();
  const settings = useSettingsStore();
  const [error, setError] = useState<string | null>(null);
  const [genomeOpen, setGenomeOpen] = useState(false);
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [isDragging, setIsDragging] = useState(false);
  const [collapsed, setCollapsed] = useState(() => window.innerWidth < 768);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const genomeRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ startX: number; startWidth: number } | null>(null);
  const availableGenomeCount = settings.availableGenomes.length;
  const loadGenomes = settings.loadGenomes;

  // Resize drag handlers
  const handleDragStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragStartRef.current = { startX: e.clientX, startWidth: width };
    setIsDragging(true);
  }, [width]);

  useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragStartRef.current) return;
      const delta = e.clientX - dragStartRef.current.startX;
      const newWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, dragStartRef.current.startWidth + delta));
      setWidth(newWidth);
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      dragStartRef.current = null;
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const activeMotif = motifs.find((m) => m.id === activeMotifId);

  // Only show streaming variants belonging to this motif
  const motifStreamingVariants = useMemo(
    () => streamingVariants.filter((v) => (v.motifId ?? null) === (activeMotifId ?? null)),
    [streamingVariants, activeMotifId]
  );

  // Close genome picker on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (genomeRef.current && !genomeRef.current.contains(e.target as Node)) setGenomeOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Load genomes on mount if needed
  useEffect(() => {
    if (availableGenomeCount === 0) loadGenomes();
  }, [availableGenomeCount, loadGenomes]);

  // Build chat turns from finalized generations
  const chatTurns = useMemo(() => {
    const turns: ChatTurn[] = [];
    const sorted = [...generations].sort((a, b) => a.created_at - b.created_at);

    for (const gen of sorted) {
      const isEditPrompt = gen.prompt.startsWith("[edit]") || gen.prompt.startsWith("[direct-edit]");
      const type: ChatTurn["type"] = isEditPrompt
        ? "edit"
        : gen.prompt.startsWith("[style-drop]")
          ? "style-drop"
          : "generate";

      const userPrompt = type === "edit"
        ? gen.prompt.replace(/^\[(?:direct-)?edit\]\s*/, "")
        : type === "style-drop"
          ? "Style transfer"
          : gen.prompt;

      // Group consecutive generations with the same prompt + type
      const lastTurn = turns[turns.length - 1];
      if (lastTurn && lastTurn.userPrompt === userPrompt && lastTurn.type === type) {
        lastTurn.variantCount++;
        lastTurn.generationIds.push(gen.id);
        // Use the first expanded prompt (they're usually identical within a batch)
        if (!lastTurn.expandedPrompt && gen.expanded_prompt) {
          lastTurn.expandedPrompt = gen.expanded_prompt;
        }
        // Collect unique genome names
        if (gen.genome_name && !lastTurn.genomeName) {
          lastTurn.genomeName = gen.genome_name;
        }
      } else {
        turns.push({
          id: gen.id,
          userPrompt,
          type,
          timestamp: gen.created_at,
          expandedPrompt: gen.expanded_prompt || "",
          genomeName: gen.genome_name || undefined,
          secondaryGenomeName: gen.secondary_genome_name || undefined,
          variantCount: 1,
          generationIds: [gen.id],
        });
      }
    }
    return turns;
  }, [generations]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatTurns.length, activeGenerations, motifStreamingVariants.length]);

  const isGenerating = activeGenerations > 0;

  // Get the most recent generation for quick-edit
  const lastGeneration = useMemo(() => {
    if (generations.length === 0) return null;
    return [...generations].sort((a, b) => b.created_at - a.created_at)[0];
  }, [generations]);

  const handleGenerate = async (retryPrompt?: string) => {
    const currentPrompt = retryPrompt ?? prompt.trim();
    if (!currentPrompt) return;
    setError(null);
    startGeneration();
    if (inputRef.current) inputRef.current.style.height = "auto";

    if (editMode && editTargetId) {
      const placeholderIds = addPlaceholders(1, activeMotifId || undefined);
      const placeholderQueue = [...placeholderIds];
      const signal = registerRun(placeholderIds, () => void handleGenerate(currentPrompt));
      try {
        await editStream(
          { generationId: editTargetId, instruction: currentPrompt },
          {
            onVariantStart: (id, expandedPrompt) => {
              const ph = placeholderQueue.shift();
              if (ph) replacePlaceholder(ph, id, expandedPrompt);
              else addStreamingVariant(id, expandedPrompt, activeMotifId || undefined);
            },
            onVariantChunk: (id, chunk) => appendChunk(id, chunk),
            onVariantDone: (gen) => finalizeVariant(gen.id, gen),
            onVariantError: (id, err) => errorVariant(id, err),
            onError: (err) => setError(err),
          },
          signal
        );
        if (useAppStore.getState().prompt === currentPrompt) setPrompt("");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Edit failed");
      } finally {
        for (const id of placeholderQueue) removeStreamingVariant(id);
        endGeneration();
        exitEditMode();
      }
      return;
    }

    const placeholderIds = addPlaceholders(settings.batchSize, activeMotifId || undefined);
    const placeholderQueue = [...placeholderIds];
    const signal = registerRun(placeholderIds, () => void handleGenerate(currentPrompt));
    const expandedIds = new Map<string, string>();

    try {
      await generateStream(
        {
          prompt: currentPrompt,
          systemPrompt: settings.systemPrompt || undefined,
          genomeId: settings.systemPrompt ? undefined : (settings.genomeId || undefined),
          shuffle: settings.shuffle && !settings.systemPrompt ? true : undefined,
          model: settings.model || undefined,
          temperature: settings.temperature,
          batchSize: settings.batchSize,
          motifId: activeMotifId || undefined,
        },
        {
          onVariantExpanding: (realId) => {
            const ph = placeholderQueue.shift();
            if (ph) { expandingVariant(ph, realId); expandedIds.set(realId, realId); }
          },
          onVariantStart: (id, expandedPrompt, genomeName) => {
            if (expandedIds.has(id)) {
              replacePlaceholder(id, id, expandedPrompt, genomeName);
            } else {
              const ph = placeholderQueue.shift();
              if (ph) replacePlaceholder(ph, id, expandedPrompt, genomeName);
              else addStreamingVariant(id, expandedPrompt, activeMotifId || undefined);
            }
          },
          onVariantChunk: (id, chunk) => appendChunk(id, chunk),
          onVariantDone: (gen) => finalizeVariant(gen.id, gen),
          onVariantError: (id, err) => errorVariant(id, err),
          onError: (err) => setError(err),
        },
        signal
      );
      if (useAppStore.getState().prompt === currentPrompt) setPrompt("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Generation failed");
    } finally {
      for (const id of placeholderQueue) removeStreamingVariant(id);
      endGeneration();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void handleGenerate();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  };

  // Click a generation ID in the chat to select it in the grid
  const handleSelectGeneration = (id: string) => {
    useAppStore.getState().setSelectedId(id);
  };

  // Quick-edit: click the edit button on a turn's response to enter edit mode for that generation
  const handleQuickEdit = (gen: Generation) => {
    enterEditMode(gen.id);
    inputRef.current?.focus();
  };

  if (collapsed) {
    return (
      <button
        type="button"
        onClick={() => setCollapsed(false)}
        className="absolute left-2 top-2 z-30 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#141414] text-white/60 shadow-xl md:hidden"
        aria-label="Open motif conversation"
      >
        <i className="bi bi-chat-left-text" />
      </button>
    );
  }

  return (
    <div
      className="absolute inset-y-0 left-0 z-30 flex h-full max-w-[85vw] shrink-0 flex-col border-r border-white/[0.06] bg-[#0c0c0c] shadow-2xl md:relative md:z-auto md:shadow-none"
      style={{ width }}
    >
      {/* Header */}
      {activeMotif && (
        <div className="px-4 pt-5 pb-2.5 border-b border-white/[0.04]">
          <div className="flex items-center gap-2">
            <h2 className="min-w-0 flex-1 truncate text-sm font-medium text-white/80">{activeMotif.name}</h2>
            <button type="button" onClick={() => setCollapsed(true)} className="flex h-9 w-9 items-center justify-center rounded-lg text-white/40 hover:bg-white/5 md:hidden" aria-label="Collapse motif conversation">
              <i className="bi bi-chevron-left" />
            </button>
          </div>
          <p className="text-white/20 text-[10px] mt-0.5">
            {generations.length} generation{generations.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}

      {/* Chat history */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-4">
        {chatTurns.length === 0 && !isGenerating && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <i className="bi bi-chat-text text-2xl text-white/10 mb-3" />
            <p className="text-white/20 text-xs">Describe a UI to get started</p>
          </div>
        )}

        {chatTurns.map((turn) => (
          <div key={turn.id} className="space-y-2">
            {/* User message */}
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <i className={`bi ${turn.type === "edit" ? "bi-pencil" : turn.type === "style-drop" ? "bi-eyedropper" : "bi-person"} text-[9px] text-white/40`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/85 text-[13px] leading-relaxed break-words">{turn.userPrompt}</p>
                <span className="text-white/15 text-[10px]">{timeAgo(turn.timestamp)}</span>
              </div>
            </div>

            {/* AI response */}
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                <i className="bi bi-stars text-[9px] text-white/30" />
              </div>
              <div className="flex-1 min-w-0 space-y-1.5">
                {/* Expanded prompt — the AI's interpretation */}
                {turn.expandedPrompt && turn.expandedPrompt !== turn.userPrompt && (
                  <MiniMarkdown
                    text={turn.expandedPrompt.length > 300
                      ? turn.expandedPrompt.slice(0, 300) + "..."
                      : turn.expandedPrompt}
                    className="text-white/45 text-[12px] leading-relaxed break-words"
                  />
                )}

                {/* Meta line */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-white/30 text-[10px]">
                    {turn.variantCount} variant{turn.variantCount !== 1 ? "s" : ""}
                  </span>
                  {turn.genomeName && (
                    <>
                      <span className="text-white/10 text-[10px]">&middot;</span>
                      <span className="text-white/20 text-[10px] truncate max-w-[100px]">
                        {turn.secondaryGenomeName
                          ? `${turn.genomeName} + ${turn.secondaryGenomeName}`
                          : turn.genomeName}
                      </span>
                    </>
                  )}
                </div>

                {/* Variant chips — clickable to preview, with edit shortcut */}
                <div className="flex items-center gap-1 flex-wrap">
                  {turn.generationIds.slice(0, 6).map((gId, vi) => (
                    <button
                      key={gId}
                      onClick={() => handleSelectGeneration(gId)}
                      className="text-[9px] text-white/25 hover:text-white/50 bg-white/[0.04] hover:bg-white/[0.08] px-1.5 py-0.5 rounded transition"
                      title={`View variant ${vi + 1}`}
                    >
                      {vi + 1}
                    </button>
                  ))}
                  {turn.generationIds.length > 6 && (
                    <span className="text-[9px] text-white/15">+{turn.generationIds.length - 6}</span>
                  )}
                  {/* Quick edit button on the last variant of this turn */}
                  {turn.type !== "style-drop" && (
                    <button
                      onClick={() => {
                        const gen = generations.find((g) => g.id === turn.generationIds[0]);
                        if (gen) handleQuickEdit(gen);
                      }}
                      className="text-[9px] text-white/15 hover:text-cyan-400/60 px-1.5 py-0.5 rounded hover:bg-cyan-500/5 transition ml-auto"
                      title="Edit this generation"
                    >
                      <i className="bi bi-pencil" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Live streaming section */}
        {motifStreamingVariants.length > 0 && (
          <div className="space-y-2">
            {/* Show the expanding/streaming AI response in real-time */}
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
              </div>
              <div className="flex-1 min-w-0 space-y-1.5">
                {motifStreamingVariants.map((sv) => (
                  <div key={sv.id} className="space-y-1">
                    {/* Show expanded prompt as it arrives */}
                    {sv.expandedPrompt && sv.status !== "pending" && (
                      <MiniMarkdown
                        text={sv.expandedPrompt.length > 250
                          ? sv.expandedPrompt.slice(0, 250) + "..."
                          : sv.expandedPrompt}
                        className="text-white/35 text-[12px] leading-relaxed break-words"
                      />
                    )}
                    {/* Status per variant */}
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1 h-1 rounded-full ${
                        sv.status === "error" ? "bg-red-500" :
                        sv.status === "done" ? "bg-white/60" :
                        sv.status === "streaming" ? "bg-cyan-400 animate-pulse" :
                        sv.status === "expanding" ? "bg-amber-400 animate-pulse" :
                        "bg-white/20"
                      }`} />
                      <span className="text-white/25 text-[10px]">
                        {sv.status === "pending" ? "Queued" :
                         sv.status === "expanding" ? "Interpreting..." :
                         sv.status === "streaming" ? "Generating code..." :
                         sv.status === "done" ? "Complete" :
                         sv.status === "error" ? sv.error?.slice(0, 50) : sv.status}
                      </span>
                      {sv.genomeName && (
                        <>
                          <span className="text-white/10 text-[10px]">&middot;</span>
                          <span className="text-white/15 text-[10px] truncate max-w-[80px]">{sv.genomeName}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Edit mode banner */}
      {editMode && (
        <div className="mx-3 mb-2 flex items-center gap-2 text-[11px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/15 rounded-lg px-3 py-2">
          <i className="bi bi-pencil text-[10px]" />
          <span className="truncate flex-1">Editing {editTargetId?.slice(0, 8)}</span>
          <button onClick={exitEditMode} className="text-cyan-500 hover:text-cyan-300 transition">
            <i className="bi bi-x-lg text-[10px]" />
          </button>
        </div>
      )}

      {/* Quick edit hint when not in edit mode and there are generations */}
      {!editMode && lastGeneration && !isGenerating && (
        <div className="mx-3 mb-1">
          <button
            onClick={() => { if (lastGeneration) handleQuickEdit(lastGeneration); }}
            className="w-full text-left px-3 py-1.5 rounded-lg text-[10px] text-white/20 hover:text-cyan-400/60 hover:bg-cyan-500/5 transition flex items-center gap-1.5"
          >
            <i className="bi bi-pencil" />
            <span>Edit last generation</span>
            <span className="text-white/10 ml-auto">{lastGeneration.id.slice(0, 8)}</span>
          </button>
        </div>
      )}

      {/* Input area */}
      <div className="px-3 pb-3 pt-2 border-t border-white/[0.04]">
        {/* Controls row */}
        {!editMode && (
          <div className="flex items-center gap-1.5 mb-2">
            {/* Shuffle toggle */}
            {!settings.systemPrompt && (
              <button
                type="button"
                onClick={() => { settings.setField("shuffle", !settings.shuffle); settings.saveSettings(); }}
                className={`px-2 py-1 rounded-md text-[10px] transition flex items-center gap-1 ${
                  settings.shuffle
                    ? "bg-violet-500/15 text-violet-300"
                    : "text-white/25 hover:text-white/40 hover:bg-white/5"
                }`}
                title={settings.shuffle ? "Shuffle ON" : "Shuffle OFF"}
              >
                <i className="bi bi-shuffle" />
              </button>
            )}
            {/* Genome picker */}
            <div ref={genomeRef} className="relative">
              <button
                type="button"
                onClick={() => setGenomeOpen(!genomeOpen)}
                className={`px-2 py-1 rounded-md text-[10px] transition flex items-center gap-1 ${
                  settings.systemPrompt
                    ? "text-amber-400/50"
                    : settings.genomeId
                      ? "bg-white/[0.06] text-white/50"
                      : "text-white/25 hover:text-white/40 hover:bg-white/5"
                }`}
              >
                <i className={`bi ${settings.systemPrompt ? "bi-exclamation-triangle" : "bi-palette"}`} />
                <span className="truncate max-w-[60px]">
                  {settings.systemPrompt ? "Custom" : settings.genomeId || "Auto"}
                </span>
              </button>
              {genomeOpen && (
                <div className="absolute bottom-full mb-1 left-0 w-52 max-h-56 overflow-auto rounded-lg border border-white/10 bg-neutral-900/95 backdrop-blur-xl shadow-xl z-50">
                  <button
                    type="button"
                    onMouseDown={(e) => { e.preventDefault(); settings.setField("genomeId", ""); setGenomeOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs transition ${
                      !settings.genomeId ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5"
                    }`}
                  >
                    <i className="bi bi-magic text-[10px] mr-1.5" />Auto-select
                  </button>
                  {settings.availableGenomes.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); settings.setField("genomeId", g.id); setGenomeOpen(false); }}
                      className={`w-full text-left px-3 py-1.5 text-xs transition truncate ${
                        g.id === settings.genomeId ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5"
                      }`}
                    >
                      {g.id}: {g.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Batch size */}
            <button
              type="button"
              onClick={() => {
                const next = (settings.batchSize % 4) + 1;
                settings.setField("batchSize", next);
                settings.saveSettings();
              }}
              className="ml-auto px-2 py-1 rounded-md text-[10px] text-white/25 hover:text-white/40 hover:bg-white/5 transition"
              title={`Batch size: ${settings.batchSize} — click to cycle`}
            >
              {settings.batchSize}x
            </button>
          </div>
        )}

        {/* Text input */}
        <div className={`flex gap-2 items-end rounded-xl border px-3 py-2.5 transition ${
          editMode
            ? "border-cyan-500/20 bg-cyan-500/[0.03]"
            : "border-white/[0.08] bg-white/[0.02] focus-within:border-white/15"
        }`}>
          <textarea
            ref={inputRef}
            value={prompt}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder={editMode ? "describe your edit..." : "describe a UI..."}
            rows={1}
            className="flex-1 bg-transparent text-white/90 text-[13px] placeholder:text-white/20 focus:outline-none resize-none leading-relaxed"
          />
          <button
            onClick={() => void handleGenerate()}
            disabled={!prompt.trim()}
            className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-lg text-xs disabled:opacity-20 disabled:cursor-not-allowed transition ${
              editMode
                ? "bg-cyan-500 text-black hover:bg-cyan-400"
                : "bg-white/90 text-black hover:bg-white"
            }`}
          >
            <i className={`bi ${editMode ? "bi-pencil" : "bi-arrow-up"}`} />
          </button>
        </div>
        {error && (
          <div className="mt-1.5 text-red-400 text-[10px] flex items-center gap-1.5 px-1">
            <i className="bi bi-exclamation-triangle" />
            <span className="truncate">{error}</span>
          </div>
        )}
      </div>

      {/* Resize handle */}
      <div
        onMouseDown={handleDragStart}
        className={`absolute top-0 right-0 w-1 h-full cursor-col-resize group/resize z-10 ${
          isDragging ? "bg-white/15" : "hover:bg-white/10"
        }`}
      >
        <div className={`absolute top-1/2 -translate-y-1/2 right-0 w-1 h-8 rounded-full transition ${
          isDragging ? "bg-white/30" : "bg-transparent group-hover/resize:bg-white/20"
        }`} />
      </div>

      {/* Prevent text selection while dragging */}
      {isDragging && <div className="fixed inset-0 z-50 cursor-col-resize" />}
    </div>
  );
}
