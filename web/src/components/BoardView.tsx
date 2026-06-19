import { useEffect, useMemo, useState } from "react";
import { useAppStore, type Generation } from "../store";
import LineageView from "./LineageView";
import DesignSystemStudio from "./DesignSystemStudio";
import {
  createBoardStyleDecision,
  deleteBoardStyleDecision,
  fetchDesignSystems,
  downloadHandoffZip,
  fetchBoardEvents,
  fetchBoardMemory,
  fetchBoardStyleDecisions,
  fetchStylePatches,
  fetchStyleRecipes,
  refreshBoardMemory,
  scoreGeneration,
  updateBoardMemory,
  updateGenerationBoard,
  varyStream,
  type BoardEvent,
  type BoardStyleDecision,
  type DesignSystem,
  type QualityScore,
  type StylePatch,
  type StyleRecipe,
} from "../api";
import {
  buildGenerationInfluenceSummary,
  parseBlendConfig,
  type GenomeChipTone,
} from "../genome-controls";

type BoardStatus = NonNullable<Generation["board_status"]>;
type BoardFilter = "all" | "scored" | "unscored" | "notes" | "recipe" | "patch" | "low-score";

const LANES: Array<{ id: BoardStatus; label: string; icon: string; tone: string }> = [
  { id: "candidate", label: "Candidate", icon: "bi-circle", tone: "text-white/45" },
  { id: "accepted", label: "Accepted", icon: "bi-check2-circle", tone: "text-emerald-300" },
  { id: "rejected", label: "Rejected", icon: "bi-x-circle", tone: "text-red-300" },
  { id: "exported", label: "Exported", icon: "bi-box-arrow-up-right", tone: "text-amber-300" },
];

const FILTERS: Array<{ id: BoardFilter; label: string }> = [
  { id: "all", label: "All" },
  { id: "scored", label: "Scored" },
  { id: "unscored", label: "Unscored" },
  { id: "notes", label: "Notes" },
  { id: "recipe", label: "Recipes" },
  { id: "patch", label: "Patches" },
  { id: "low-score", label: "<80" },
];

const DISTANCE_ACTIONS = [
  { id: "near", label: "Near", strength: 0.18, title: "Create close follow-ups" },
  { id: "mid", label: "Mid", strength: 0.5, title: "Create moderate follow-ups" },
  { id: "far", label: "Far", strength: 0.9, title: "Create bold follow-ups" },
] as const;

const GENOME_CHIP_TONE_CLASS: Record<GenomeChipTone, string> = {
  auto: "border-white/[0.06] bg-white/[0.025] text-white/45",
  custom: "border-amber-400/20 bg-amber-400/10 text-amber-200/70",
  genome: "border-sky-400/20 bg-sky-400/10 text-sky-100/70",
  blend: "border-violet-400/20 bg-violet-400/10 text-violet-100/70",
  recipe: "border-emerald-400/20 bg-emerald-400/10 text-emerald-100/70",
  patch: "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-100/70",
  distance: "border-orange-400/20 bg-orange-400/10 text-orange-100/70",
};

function parseJson<T>(value: string | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function qualityOverall(generation: Generation): number | null {
  return parseJson<QualityScore | null>(generation.quality_score_json, null)?.overall ?? null;
}

function matchesFilter(generation: Generation, filter: BoardFilter, query: string): boolean {
  const score = qualityOverall(generation);
  const filterMatch =
    filter === "all" ||
    (filter === "scored" && Boolean(generation.quality_score_json)) ||
    (filter === "unscored" && !generation.quality_score_json) ||
    (filter === "notes" && Boolean(generation.notes?.trim())) ||
    (filter === "recipe" && Boolean(generation.recipe_id || generation.blend_config_json)) ||
    (filter === "patch" && Boolean(generation.style_patch_id)) ||
    (filter === "low-score" && score !== null && score < 80);

  if (!filterMatch) return false;

  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return true;

  return [
    generation.prompt,
    generation.genome_id,
    generation.genome_name,
    generation.secondary_genome_id,
    generation.secondary_genome_name,
    generation.recipe_id,
    generation.style_patch_id,
    generation.notes,
  ]
    .filter(Boolean)
    .some((value) => String(value).toLowerCase().includes(normalizedQuery));
}

function eventIcon(type: string): string {
  if (type.includes("handoff")) return "bi-box-arrow-up-right";
  if (type.includes("memory")) return "bi-journal-bookmark";
  if (type.includes("style_decision")) return "bi-palette";
  if (type.includes("notes")) return "bi-pencil-square";
  if (type.includes("status")) return "bi-kanban";
  if (type.includes("fork")) return "bi-diagram-2";
  return "bi-plus-circle";
}

function styleDecisionSubtitle(decision: BoardStyleDecision): string {
  const blend = parseBlendConfig(decision.blend_config_json);
  if (blend.length > 0) {
    return blend.map((entry) => `${entry.id} ${entry.weight}%`).join(" + ");
  }
  return decision.recipe_id || decision.style_patch_id || decision.genome_name || decision.genome_id || "Saved style";
}

function BoardCard({
  generation,
  selected,
  onInspect,
  onBoardActivity,
  recipes,
  patches,
}: {
  generation: Generation;
  selected: boolean;
  onInspect: () => void;
  onBoardActivity: () => void;
  recipes: StyleRecipe[];
  patches: StylePatch[];
}) {
  const setSelectedId = useAppStore((s) => s.setSelectedId);
  const updateGenerationFields = useAppStore((s) => s.updateGenerationFields);
  const startGeneration = useAppStore((s) => s.startGeneration);
  const endGeneration = useAppStore((s) => s.endGeneration);
  const addPlaceholders = useAppStore((s) => s.addPlaceholders);
  const expandingVariant = useAppStore((s) => s.expandingVariant);
  const replacePlaceholder = useAppStore((s) => s.replacePlaceholder);
  const removeStreamingVariant = useAppStore((s) => s.removeStreamingVariant);
  const appendChunk = useAppStore((s) => s.appendChunk);
  const finalizeVariant = useAppStore((s) => s.finalizeVariant);
  const errorVariant = useAppStore((s) => s.errorVariant);
  const addGeneration = useAppStore((s) => s.addGeneration);
  const activeMotifId = useAppStore((s) => s.activeMotifId);
  const [notes, setNotes] = useState(generation.notes || "");
  const [busy, setBusy] = useState<string | null>(null);
  const quality = parseJson<QualityScore | null>(generation.quality_score_json, null);
  const influence = buildGenerationInfluenceSummary({ generation, recipes, patches });
  const status = generation.board_status || "candidate";

  useEffect(() => {
    setNotes(generation.notes || "");
  }, [generation.id, generation.notes]);

  const saveBoard = async (nextStatus = status, nextNotes = notes) => {
    updateGenerationFields(generation.id, {
      board_status: nextStatus,
      notes: nextNotes,
    });
    await updateGenerationBoard(generation.id, {
      status: nextStatus,
      notes: nextNotes,
    }).catch(() => {});
    onBoardActivity();
  };

  const score = async () => {
    setBusy("score");
    try {
      const next = await scoreGeneration(generation.id, generation.parsed_html);
      updateGenerationFields(generation.id, {
        quality_score_json: JSON.stringify(next),
      });
    } finally {
      setBusy(null);
    }
  };

  const handoff = async () => {
    setBusy("handoff");
    try {
      await downloadHandoffZip(generation.id);
      updateGenerationFields(generation.id, { board_status: "exported" });
      onBoardActivity();
    } finally {
      setBusy(null);
    }
  };

  const followUp = async (distance: (typeof DISTANCE_ACTIONS)[number]) => {
    setBusy(distance.id);
    startGeneration();
    const batchSize = 2;
    const placeholderIds = addPlaceholders(batchSize, activeMotifId || undefined);
    const placeholderQueue = [...placeholderIds];
    const expandedIds = new Set<string>();

    try {
      await varyStream(
        {
          sourceGenerationId: generation.id,
          batchSize,
          strength: distance.strength,
          variationDistance: distance.id,
          motifId: activeMotifId || undefined,
        },
        {
          onVariantExpanding: (realId) => {
            const placeholderId = placeholderQueue.shift();
            if (placeholderId) {
              expandingVariant(placeholderId, realId);
              expandedIds.add(realId);
            }
          },
          onVariantStart: (id, expandedPrompt, genomeName) => {
            if (expandedIds.has(id)) {
              replacePlaceholder(id, id, expandedPrompt, genomeName);
              return;
            }
            const placeholderId = placeholderQueue.shift();
            if (placeholderId) {
              replacePlaceholder(placeholderId, id, expandedPrompt, genomeName);
            }
          },
          onVariantChunk: (id, chunk) => appendChunk(id, chunk),
          onVariantDone: (gen) => {
            finalizeVariant(gen.id, gen);
            addGeneration(gen);
            removeStreamingVariant(gen.id);
          },
          onVariantError: (id, err) => errorVariant(id, err),
        }
      );
    } catch (err) {
      console.error("Board follow-up failed:", err);
    } finally {
      for (const id of placeholderQueue) {
        removeStreamingVariant(id);
      }
      endGeneration();
      setBusy(null);
      onBoardActivity();
    }
  };

  return (
    <article
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", generation.id);
        e.dataTransfer.effectAllowed = "move";
      }}
      className={`rounded-lg border bg-white/[0.025] overflow-hidden transition ${
        selected ? "border-sky-400/45 ring-1 ring-sky-400/20" : "border-white/[0.07]"
      }`}
    >
      <button
        type="button"
        onClick={() => setSelectedId(generation.id)}
        className="block w-full h-32 bg-[#080808] overflow-hidden text-left"
        aria-label={`Preview ${generation.prompt.slice(0, 60)}`}
      >
        {generation.thumbnail ? (
          <img src={generation.thumbnail} alt="" className="h-full w-full object-cover opacity-85" />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-white/[0.025] text-white/20">
            <i className="bi bi-file-earmark-code text-3xl" />
          </div>
        )}
      </button>

      <div className="p-3 space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] text-white/30 font-mono">{generation.id.slice(0, 8)}</span>
            <button
              type="button"
              onClick={onInspect}
              className={`text-[10px] px-1.5 py-0.5 rounded border transition ${
                selected
                  ? "border-sky-400/30 bg-sky-400/10 text-sky-200"
                  : quality
                    ? "border-emerald-500/15 bg-emerald-500/10 text-emerald-300"
                    : "border-white/[0.06] bg-white/[0.025] text-white/35 hover:text-white/65"
              }`}
              aria-label="Inspect board details"
              title="Inspect board details"
            >
              {quality ? `${quality.overall}/100` : "Inspect"}
            </button>
          </div>
          <p className="text-xs text-white/75 leading-snug line-clamp-2">{generation.prompt}</p>
          <div className="flex flex-wrap gap-1">
            {influence.chips.slice(0, 3).map((chip) => (
              <span
                key={chip.id}
                className={`max-w-full truncate rounded border px-1.5 py-0.5 text-[9px] leading-none ${GENOME_CHIP_TONE_CLASS[chip.tone]}`}
                title={chip.detail || chip.label}
              >
                {chip.label}
              </span>
            ))}
            {influence.chips.length > 3 && (
              <span className="rounded border border-white/[0.06] bg-white/[0.025] px-1.5 py-0.5 text-[9px] leading-none text-white/30">
                +{influence.chips.length - 3}
              </span>
            )}
          </div>
          <div className="text-[10px] text-white/30 line-clamp-2">
            {influence.description}
          </div>
        </div>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          onBlur={() => saveBoard(status, notes)}
          placeholder="notes..."
          className="w-full h-16 resize-none rounded-md border border-white/[0.06] bg-black/20 px-2 py-1.5 text-xs text-white/70 placeholder:text-white/20 outline-none focus:border-white/20"
        />

        <div className="flex items-center justify-between gap-2">
          <select
            value={status}
            onChange={(e) => saveBoard(e.target.value as BoardStatus, notes)}
            className="min-w-0 flex-1 rounded-md border border-white/[0.06] bg-black/30 px-2 py-1.5 text-xs text-white/60 outline-none"
            aria-label="Board status"
          >
            {LANES.map((lane) => (
              <option key={lane.id} value={lane.id}>
                {lane.label}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={score}
            disabled={busy === "score"}
            className="w-8 h-8 rounded-md bg-white/[0.04] text-white/40 hover:text-sky-300 hover:bg-sky-500/10 disabled:opacity-40"
            title="Score quality"
            aria-label="Score quality"
          >
            <i className={`bi ${busy === "score" ? "bi-arrow-repeat animate-spin" : "bi-speedometer2"}`} />
          </button>
          <button
            type="button"
            onClick={handoff}
            disabled={busy === "handoff"}
            className="w-8 h-8 rounded-md bg-white/[0.04] text-white/40 hover:text-amber-300 hover:bg-amber-500/10 disabled:opacity-40"
            title="Download handoff project"
            aria-label="Download handoff project"
          >
            <i className={`bi ${busy === "handoff" ? "bi-arrow-repeat animate-spin" : "bi-box-arrow-up-right"}`} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-1">
          {DISTANCE_ACTIONS.map((action) => (
            <button
              key={action.id}
              type="button"
              onClick={() => followUp(action)}
              disabled={busy === action.id}
              className="rounded-md border border-white/[0.06] bg-white/[0.035] px-2 py-1.5 text-[11px] text-white/45 hover:text-white/75 hover:bg-white/[0.06] disabled:opacity-40"
              title={action.title}
              aria-label={`${action.label} follow-up`}
            >
              {busy === action.id ? <i className="bi bi-arrow-repeat animate-spin" /> : action.label}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

function BoardDetailRail({
  generation,
  recipes,
  patches,
  onBoardActivity,
  onOpenLineage,
  onSaveStyleDecision,
}: {
  generation: Generation | null;
  recipes: StyleRecipe[];
  patches: StylePatch[];
  onBoardActivity: () => void;
  onOpenLineage: (generationId: string) => void;
  onSaveStyleDecision: (generation: Generation) => Promise<void>;
}) {
  const setSelectedId = useAppStore((s) => s.setSelectedId);
  const updateGenerationFields = useAppStore((s) => s.updateGenerationFields);
  const [notes, setNotes] = useState("");
  const [busy, setBusy] = useState<string | null>(null);

  useEffect(() => {
    setNotes(generation?.notes || "");
  }, [generation?.id, generation?.notes]);

  if (!generation) {
    return (
      <aside className="hidden 2xl:flex w-80 shrink-0 border-l border-white/5 bg-[#0b0b0b] p-5 items-center justify-center text-center text-sm text-white/25">
        Select a board card to inspect its recipe, score, notes, and export state.
      </aside>
    );
  }

  const status = generation.board_status || "candidate";
  const quality = parseJson<QualityScore | null>(generation.quality_score_json, null);
  const blend = parseBlendConfig(generation.blend_config_json);
  const influence = buildGenerationInfluenceSummary({ generation, recipes, patches });
  const recipe = recipes.find((item) => item.id === generation.recipe_id);
  const patch = patches.find((item) => item.id === generation.style_patch_id);
  const runtimeMeasurements = quality?.runtime_audit?.measurements || [];
  const runtimeDiffs = quality?.runtime_audit?.visualDiffs || [];

  const saveBoard = async (nextStatus = status, nextNotes = notes) => {
    updateGenerationFields(generation.id, {
      board_status: nextStatus,
      notes: nextNotes,
    });
    await updateGenerationBoard(generation.id, {
      status: nextStatus,
      notes: nextNotes,
    }).catch(() => {});
    onBoardActivity();
  };

  const score = async () => {
    setBusy("score");
    try {
      const next = await scoreGeneration(generation.id, generation.parsed_html);
      updateGenerationFields(generation.id, {
        quality_score_json: JSON.stringify(next),
      });
    } finally {
      setBusy(null);
    }
  };

  const handoff = async () => {
    setBusy("handoff");
    try {
      await downloadHandoffZip(generation.id);
      updateGenerationFields(generation.id, { board_status: "exported" });
      onBoardActivity();
    } finally {
      setBusy(null);
    }
  };

  const saveStyleDecision = async () => {
    setBusy("style-decision");
    try {
      await onSaveStyleDecision(generation);
    } finally {
      setBusy(null);
    }
  };

  return (
    <aside className="hidden 2xl:flex w-80 shrink-0 border-l border-white/5 bg-[#0b0b0b] flex-col min-h-0">
      <div className="shrink-0 border-b border-white/5 p-4 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[10px] text-white/30 font-mono">{generation.id.slice(0, 8)}</div>
            <h2 className="text-sm text-white/85 leading-snug line-clamp-3">{generation.prompt}</h2>
          </div>
          {quality && (
            <span className="shrink-0 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
              {quality.overall}
            </span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setSelectedId(generation.id)}
            className="rounded-md border border-white/[0.06] bg-white/[0.035] px-3 py-2 text-xs text-white/55 hover:text-white/80"
          >
            <i className="bi bi-eye mr-1.5" />
            Preview
          </button>
          <button
            type="button"
            onClick={() => onOpenLineage(generation.id)}
            className="rounded-md border border-white/[0.06] bg-white/[0.035] px-3 py-2 text-xs text-white/55 hover:text-sky-300"
          >
            <i className="bi bi-diagram-3 mr-1.5" />
            Lineage
          </button>
          <button
            type="button"
            onClick={handoff}
            disabled={busy === "handoff"}
            className="col-span-2 rounded-md border border-white/[0.06] bg-white/[0.035] px-3 py-2 text-xs text-white/55 hover:text-amber-300 disabled:opacity-40"
          >
            <i className={`bi ${busy === "handoff" ? "bi-arrow-repeat animate-spin" : "bi-box-arrow-up-right"} mr-1.5`} />
            Handoff
          </button>
          <button
            type="button"
            onClick={saveStyleDecision}
            disabled={busy === "style-decision"}
            className="col-span-2 rounded-md border border-white/[0.06] bg-white/[0.035] px-3 py-2 text-xs text-white/55 hover:text-violet-300 disabled:opacity-40"
          >
            <i className={`bi ${busy === "style-decision" ? "bi-arrow-repeat animate-spin" : "bi-palette"} mr-1.5`} />
            Save style decision
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-5">
        <section className="space-y-2">
          <div className="text-[10px] uppercase tracking-wider text-white/25">Board</div>
          <select
            value={status}
            onChange={(event) => void saveBoard(event.target.value as BoardStatus, notes)}
            className="w-full rounded-md border border-white/[0.06] bg-black/30 px-2 py-2 text-xs text-white/65 outline-none"
            aria-label="Detail board status"
          >
            {LANES.map((lane) => (
              <option key={lane.id} value={lane.id}>
                {lane.label}
              </option>
            ))}
          </select>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            onBlur={() => saveBoard(status, notes)}
            placeholder="notes..."
            className="h-24 w-full resize-none rounded-md border border-white/[0.06] bg-black/20 px-2 py-2 text-xs text-white/70 placeholder:text-white/20 outline-none focus:border-white/20"
          />
        </section>

        <section className="space-y-2">
          <div className="text-[10px] uppercase tracking-wider text-white/25">Why this variant</div>
          <div className="rounded-md border border-white/[0.05] bg-white/[0.02] p-3 space-y-2">
            <div className="flex flex-wrap gap-1">
              {influence.chips.map((chip) => (
                <span
                  key={chip.id}
                  className={`max-w-full truncate rounded border px-1.5 py-1 text-[10px] leading-none ${GENOME_CHIP_TONE_CLASS[chip.tone]}`}
                  title={chip.detail || chip.label}
                >
                  <span className="font-medium">{chip.label}</span>
                  {chip.detail && <span className="ml-1 opacity-45">{chip.detail}</span>}
                </span>
              ))}
            </div>
            <p className="text-[11px] leading-relaxed text-white/42">
              {influence.description}
            </p>
          </div>
        </section>

        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-wider text-white/25">Quality</div>
            <button
              type="button"
              onClick={score}
              disabled={busy === "score"}
              className="text-[11px] text-sky-300/65 hover:text-sky-200 disabled:opacity-40"
            >
              {busy === "score" ? "Scoring..." : quality ? "Rescore" : "Score"}
            </button>
          </div>
          {quality ? (
            <div className="space-y-2">
              {Object.entries(quality.categories).map(([key, value]) => (
                <div key={key} className="rounded-md border border-white/[0.05] bg-white/[0.02] p-2">
                  <div className="flex items-center justify-between gap-2 text-[11px]">
                    <span className="capitalize text-white/55">{key.replace(/([A-Z])/g, " $1")}</span>
                    <span className="text-white/75">{value.score}</span>
                  </div>
                  <div className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-white/30">
                    {value.notes.join(" ")}
                  </div>
                </div>
              ))}
              {runtimeMeasurements.length > 0 && (
                <div className="rounded-md border border-sky-400/10 bg-sky-400/[0.04] p-2 text-[10px] text-sky-100/45">
                  Runtime audit: {runtimeMeasurements.map((item) => `${item.viewportWidth}px`).join(", ")}
                  {runtimeDiffs.length > 0 ? ` - ${runtimeDiffs.length} visual diff checks` : ""}
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-md border border-dashed border-white/[0.07] p-3 text-xs text-white/25">
              No score yet
            </div>
          )}
        </section>

        <section className="space-y-2">
          <div className="text-[10px] uppercase tracking-wider text-white/25">Recipe / Patch</div>
          <div className="rounded-md border border-white/[0.05] bg-white/[0.02] p-3 space-y-2">
            <div>
              <div className="text-[10px] text-white/30">Recipe</div>
              <div className="text-xs text-white/60">
                {recipe?.name || generation.recipe_id || (blend.length > 0 ? "Unsaved blend" : "None")}
              </div>
            </div>
            {blend.length > 0 && (
              <div className="space-y-1">
                {blend.map((entry) => (
                  <div key={`${entry.id}-${entry.aspect}`} className="flex justify-between gap-2 text-[10px] text-white/35">
                    <span className="truncate">
                      {entry.id} - {entry.aspect}
                    </span>
                    <span>{entry.weight}%</span>
                  </div>
                ))}
              </div>
            )}
            <div>
              <div className="text-[10px] text-white/30">Patch</div>
              <div className="text-xs text-white/60">{patch?.name || generation.style_patch_id || "None"}</div>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <div className="text-[10px] uppercase tracking-wider text-white/25">Lineage</div>
          <div className="grid grid-cols-2 gap-2 text-[10px] text-white/35">
            <div className="rounded-md border border-white/[0.05] bg-white/[0.02] p-2">
              <div className="text-white/25">Parent</div>
              <div className="truncate font-mono">{generation.parent_id || "root"}</div>
            </div>
            <div className="rounded-md border border-white/[0.05] bg-white/[0.02] p-2">
              <div className="text-white/25">Distance</div>
              <div className="truncate">{generation.variation_distance || "original"}</div>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}

export default function BoardView() {
  const generations = useAppStore((s) => s.generations);
  const activeMotifId = useAppStore((s) => s.activeMotifId);
  const motifs = useAppStore((s) => s.motifs);
  const updateGenerationFields = useAppStore((s) => s.updateGenerationFields);
  const startGeneration = useAppStore((s) => s.startGeneration);
  const endGeneration = useAppStore((s) => s.endGeneration);
  const addPlaceholders = useAppStore((s) => s.addPlaceholders);
  const expandingVariant = useAppStore((s) => s.expandingVariant);
  const replacePlaceholder = useAppStore((s) => s.replacePlaceholder);
  const removeStreamingVariant = useAppStore((s) => s.removeStreamingVariant);
  const appendChunk = useAppStore((s) => s.appendChunk);
  const finalizeVariant = useAppStore((s) => s.finalizeVariant);
  const errorVariant = useAppStore((s) => s.errorVariant);
  const addGeneration = useAppStore((s) => s.addGeneration);
  const updateMotifFields = useAppStore((s) => s.updateMotifFields);
  const activeMotif = motifs.find((m) => m.id === activeMotifId);
  const [filter, setFilter] = useState<BoardFilter>("all");
  const [query, setQuery] = useState("");
  const [acceptedOnly, setAcceptedOnly] = useState(false);
  const [selectedBoardId, setSelectedBoardId] = useState<string | null>(null);
  const [dragLane, setDragLane] = useState<BoardStatus | null>(null);
  const [bulkBusy, setBulkBusy] = useState<string | null>(null);
  const [memoryOpen, setMemoryOpen] = useState(false);
  const [boardMemory, setBoardMemory] = useState("");
  const [derivedBoardMemory, setDerivedBoardMemory] = useState("");
  const [memoryBusy, setMemoryBusy] = useState<string | null>(null);
  const [memoryError, setMemoryError] = useState("");
  const [boardEvents, setBoardEvents] = useState<BoardEvent[]>([]);
  const [eventError, setEventError] = useState("");
  const [styleDecisions, setStyleDecisions] = useState<BoardStyleDecision[]>([]);
  const [styleDecisionError, setStyleDecisionError] = useState("");
  const [designSystems, setDesignSystems] = useState<DesignSystem[]>([]);
  const [designSystemOpen, setDesignSystemOpen] = useState(false);
  const [designSystemError, setDesignSystemError] = useState("");
  const [lineageId, setLineageId] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<StyleRecipe[]>([]);
  const [patches, setPatches] = useState<StylePatch[]>([]);

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      fetchStyleRecipes().catch(() => []),
      fetchStylePatches().catch(() => []),
    ]).then(([nextRecipes, nextPatches]) => {
      if (!cancelled) {
        setRecipes(nextRecipes);
        setPatches(nextPatches);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!activeMotifId) {
      setBoardMemory("");
      setDerivedBoardMemory("");
      setMemoryError("");
      setMemoryBusy(null);
      return;
    }

    let cancelled = false;
    setMemoryBusy("load");
    setMemoryError("");
    fetchBoardMemory(activeMotifId)
      .then((memory) => {
        if (cancelled) return;
        setBoardMemory(memory.board_memory || memory.derived_memory);
        setDerivedBoardMemory(memory.derived_memory);
        updateMotifFields(activeMotifId, {
          board_memory: memory.board_memory,
          board_memory_updated_at: memory.board_memory_updated_at,
        });
      })
      .catch((err) => {
        if (!cancelled) setMemoryError(err instanceof Error ? err.message : "Failed to load board memory");
      })
      .finally(() => {
        if (!cancelled) setMemoryBusy(null);
      });

    return () => {
      cancelled = true;
    };
  }, [activeMotifId, updateMotifFields]);

  useEffect(() => {
    if (!activeMotifId) {
      setBoardEvents([]);
      setEventError("");
      return;
    }

    let cancelled = false;
    setEventError("");
    fetchBoardEvents(activeMotifId)
      .then((events) => {
        if (!cancelled) setBoardEvents(events);
      })
      .catch((err) => {
        if (!cancelled) setEventError(err instanceof Error ? err.message : "Failed to load board events");
      });

    return () => {
      cancelled = true;
    };
  }, [activeMotifId]);

  useEffect(() => {
    if (!activeMotifId) {
      setStyleDecisions([]);
      setStyleDecisionError("");
      return;
    }

    let cancelled = false;
    setStyleDecisionError("");
    fetchBoardStyleDecisions(activeMotifId)
      .then((decisions) => {
        if (!cancelled) setStyleDecisions(decisions);
      })
      .catch((err) => {
        if (!cancelled) setStyleDecisionError(err instanceof Error ? err.message : "Failed to load style decisions");
      });

    return () => {
      cancelled = true;
    };
  }, [activeMotifId]);

  useEffect(() => {
    if (!activeMotifId) {
      setDesignSystems([]);
      setDesignSystemError("");
      return;
    }

    let cancelled = false;
    setDesignSystemError("");
    fetchDesignSystems(activeMotifId)
      .then((systems) => {
        if (!cancelled) setDesignSystems(systems);
      })
      .catch((err) => {
        if (!cancelled) setDesignSystemError(err instanceof Error ? err.message : "Failed to load design systems");
      });

    return () => {
      cancelled = true;
    };
  }, [activeMotifId]);

  const visibleLanes = acceptedOnly ? LANES.filter((lane) => lane.id === "accepted") : LANES;

  const filteredGenerations = useMemo(
    () => generations.filter((generation) => matchesFilter(generation, filter, query)),
    [filter, generations, query]
  );

  const grouped = useMemo(() => {
    const result: Record<BoardStatus, Generation[]> = {
      candidate: [],
      accepted: [],
      rejected: [],
      exported: [],
    };
    for (const generation of filteredGenerations) {
      const status = generation.board_status || "candidate";
      result[status]?.push(generation);
    }
    return result;
  }, [filteredGenerations]);

  const total = generations.length;
  const visibleTotal = visibleLanes.reduce((sum, lane) => sum + grouped[lane.id].length, 0);
  const scored = filteredGenerations.filter((g) => g.quality_score_json).length;
  const visibleCandidates = filteredGenerations.filter(
    (generation) => (generation.board_status || "candidate") === "candidate"
  );
  const visibleAccepted = filteredGenerations.filter(
    (generation) => generation.board_status === "accepted"
  );
  const lowScoreCandidates = visibleCandidates.filter((generation) => {
    const score = qualityOverall(generation);
    return score !== null && score < 80;
  });
  const activeDesignSystems = designSystems.filter((system) => system.active);
  const selectedGeneration =
    filteredGenerations.find((generation) => generation.id === selectedBoardId) ||
    filteredGenerations[0] ||
    null;
  const memoryUpdatedAt = activeMotif?.board_memory_updated_at || 0;
  const memoryLineCount = (boardMemory || derivedBoardMemory)
    .split("\n")
    .filter((line) => line.trim()).length;

  const reloadBoardEvents = async () => {
    if (!activeMotifId) return;
    try {
      const next = await fetchBoardEvents(activeMotifId);
      setBoardEvents(next);
      setEventError("");
    } catch (err) {
      setEventError(err instanceof Error ? err.message : "Failed to load board events");
    }
  };

  const reloadStyleDecisions = async () => {
    if (!activeMotifId) return;
    try {
      const next = await fetchBoardStyleDecisions(activeMotifId);
      setStyleDecisions(next);
      setStyleDecisionError("");
    } catch (err) {
      setStyleDecisionError(err instanceof Error ? err.message : "Failed to load style decisions");
    }
  };

  const reloadDesignSystems = async () => {
    if (!activeMotifId) return;
    try {
      const next = await fetchDesignSystems(activeMotifId);
      setDesignSystems(next);
      setDesignSystemError("");
    } catch (err) {
      setDesignSystemError(err instanceof Error ? err.message : "Failed to load design systems");
    }
  };

  const saveStyleDecision = async (generation: Generation) => {
    if (!activeMotifId) return;
    const fallbackName = generation.recipe_id
      ? `Recipe ${generation.recipe_id.slice(0, 8)}`
      : generation.style_patch_id
        ? `Patch ${generation.style_patch_id.slice(0, 8)}`
        : generation.genome_name || generation.genome_id || "Board style";
    try {
      await createBoardStyleDecision(activeMotifId, {
        generationId: generation.id,
        name: fallbackName,
        notes: generation.notes || "",
      });
      await Promise.all([reloadStyleDecisions(), reloadBoardEvents()]);
    } catch (err) {
      setStyleDecisionError(err instanceof Error ? err.message : "Failed to save style decision");
    }
  };

  const removeStyleDecision = async (decisionId: string) => {
    if (!activeMotifId) return;
    try {
      await deleteBoardStyleDecision(activeMotifId, decisionId);
      await Promise.all([reloadStyleDecisions(), reloadBoardEvents()]);
    } catch (err) {
      setStyleDecisionError(err instanceof Error ? err.message : "Failed to remove style decision");
    }
  };

  const refreshMemory = async () => {
    if (!activeMotifId) return;
    setMemoryBusy("refresh");
    setMemoryError("");
    try {
      const next = await refreshBoardMemory(activeMotifId);
      setBoardMemory(next.board_memory);
      setDerivedBoardMemory(next.board_memory);
      setMemoryOpen(true);
      updateMotifFields(activeMotifId, {
        board_memory: next.board_memory,
        board_memory_updated_at: next.board_memory_updated_at,
      });
      void reloadBoardEvents();
    } catch (err) {
      setMemoryError(err instanceof Error ? err.message : "Failed to refresh board memory");
    } finally {
      setMemoryBusy(null);
    }
  };

  const saveMemory = async () => {
    if (!activeMotifId) return;
    setMemoryBusy("save");
    setMemoryError("");
    try {
      const next = await updateBoardMemory(activeMotifId, boardMemory);
      setBoardMemory(next.board_memory);
      updateMotifFields(activeMotifId, {
        board_memory: next.board_memory,
        board_memory_updated_at: next.board_memory_updated_at,
      });
      void reloadBoardEvents();
    } catch (err) {
      setMemoryError(err instanceof Error ? err.message : "Failed to save board memory");
    } finally {
      setMemoryBusy(null);
    }
  };

  const moveToLane = async (generationId: string, status: BoardStatus) => {
    const generation = generations.find((g) => g.id === generationId);
    if (!generation) return;
    updateGenerationFields(generationId, { board_status: status });
    await updateGenerationBoard(generationId, {
      status,
      notes: generation.notes || "",
    }).catch(() => {});
    void reloadBoardEvents();
  };

  const bulkScoreCandidates = async () => {
    if (visibleCandidates.length === 0) return;
    setBulkBusy("score-candidates");
    try {
      for (const generation of visibleCandidates) {
        const score = await scoreGeneration(generation.id, generation.parsed_html);
        updateGenerationFields(generation.id, {
          quality_score_json: JSON.stringify(score),
        });
      }
    } finally {
      setBulkBusy(null);
      void reloadBoardEvents();
    }
  };

  const bulkRejectLowScores = async () => {
    if (lowScoreCandidates.length === 0) return;
    setBulkBusy("reject-low");
    try {
      for (const generation of lowScoreCandidates) {
        updateGenerationFields(generation.id, { board_status: "rejected" });
        await updateGenerationBoard(generation.id, {
          status: "rejected",
          notes: generation.notes || "",
        }).catch(() => {});
      }
    } finally {
      setBulkBusy(null);
      void reloadBoardEvents();
    }
  };

  const bulkExportAccepted = async () => {
    if (visibleAccepted.length === 0) return;
    setBulkBusy("export-accepted");
    try {
      for (const generation of visibleAccepted) {
        await downloadHandoffZip(generation.id);
        updateGenerationFields(generation.id, { board_status: "exported" });
      }
    } finally {
      setBulkBusy(null);
      void reloadBoardEvents();
    }
  };

  const bulkFollowAccepted = async (distance: (typeof DISTANCE_ACTIONS)[number]) => {
    if (visibleAccepted.length === 0) return;
    setBulkBusy(`${distance.id}-accepted`);
    startGeneration();

    try {
      for (const generation of visibleAccepted) {
        const placeholderIds = addPlaceholders(1, activeMotifId || undefined);
        const placeholderQueue = [...placeholderIds];
        const expandedIds = new Set<string>();

        try {
          await varyStream(
            {
              sourceGenerationId: generation.id,
              batchSize: 1,
              strength: distance.strength,
              variationDistance: distance.id,
              motifId: activeMotifId || undefined,
            },
            {
              onVariantExpanding: (realId) => {
                const placeholderId = placeholderQueue.shift();
                if (placeholderId) {
                  expandingVariant(placeholderId, realId);
                  expandedIds.add(realId);
                }
              },
              onVariantStart: (id, expandedPrompt, genomeName) => {
                if (expandedIds.has(id)) {
                  replacePlaceholder(id, id, expandedPrompt, genomeName);
                  return;
                }
                const placeholderId = placeholderQueue.shift();
                if (placeholderId) {
                  replacePlaceholder(placeholderId, id, expandedPrompt, genomeName);
                }
              },
              onVariantChunk: (id, chunk) => appendChunk(id, chunk),
              onVariantDone: (gen) => {
                finalizeVariant(gen.id, gen);
                addGeneration(gen);
                removeStreamingVariant(gen.id);
              },
              onVariantError: (id, err) => errorVariant(id, err),
            }
          );
        } catch (err) {
          console.error("Bulk accepted follow-up failed:", err);
        } finally {
          for (const id of placeholderQueue) {
            removeStreamingVariant(id);
          }
        }
      }
    } finally {
      endGeneration();
      setBulkBusy(null);
      void reloadBoardEvents();
    }
  };

  return (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
      <div className="shrink-0 border-b border-white/5 px-5 py-4 bg-[#0b0b0b]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-sm font-medium text-white/85">
              {activeMotif ? activeMotif.name : "All Generations"} Board
            </h1>
            <p className="text-xs text-white/35">
              {visibleTotal} shown / {total} variants - {scored} scored - accepted designs feed near/far follow-ups.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-white/35">
            {LANES.map((lane) => (
              <span key={lane.id} className="flex items-center gap-1.5">
                <i className={`bi ${lane.icon} ${lane.tone}`} />
                {grouped[lane.id].length}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <div className="flex rounded-lg border border-white/[0.06] bg-white/[0.02] p-0.5">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`rounded-md px-2.5 py-1.5 text-[11px] transition ${
                  filter === item.id ? "bg-white/10 text-white/80" : "text-white/35 hover:text-white/65"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setAcceptedOnly((value) => !value)}
            className={`rounded-lg border px-3 py-1.5 text-[11px] transition ${
              acceptedOnly
                ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
                : "border-white/[0.06] bg-white/[0.025] text-white/35 hover:text-white/65"
            }`}
          >
            <i className="bi bi-check2-circle mr-1.5" />
            Accepted focus
          </button>
          <div className="min-w-[220px] flex-1 max-w-md relative">
            <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-white/20 text-xs" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search prompt, genome, notes..."
              className="w-full rounded-lg border border-white/[0.06] bg-black/20 py-1.5 pl-8 pr-3 text-xs text-white/65 placeholder:text-white/20 outline-none focus:border-white/20"
            />
          </div>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-white/20">Bulk</span>
          <button
            type="button"
            onClick={bulkScoreCandidates}
            disabled={Boolean(bulkBusy) || visibleCandidates.length === 0}
            className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[11px] text-white/40 hover:text-sky-200 disabled:opacity-35"
            title="Score visible candidate cards"
          >
            <i className={`bi ${bulkBusy === "score-candidates" ? "bi-arrow-repeat animate-spin" : "bi-speedometer2"} mr-1.5`} />
            Score candidates ({visibleCandidates.length})
          </button>
          <button
            type="button"
            onClick={bulkRejectLowScores}
            disabled={Boolean(bulkBusy) || lowScoreCandidates.length === 0}
            className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[11px] text-white/40 hover:text-red-200 disabled:opacity-35"
            title="Reject visible candidate cards scored below 80"
          >
            <i className={`bi ${bulkBusy === "reject-low" ? "bi-arrow-repeat animate-spin" : "bi-x-circle"} mr-1.5`} />
            Reject &lt;80 ({lowScoreCandidates.length})
          </button>
          <button
            type="button"
            onClick={bulkExportAccepted}
            disabled={Boolean(bulkBusy) || visibleAccepted.length === 0}
            className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[11px] text-white/40 hover:text-amber-200 disabled:opacity-35"
            title="Download handoff zips for visible accepted cards"
          >
            <i className={`bi ${bulkBusy === "export-accepted" ? "bi-arrow-repeat animate-spin" : "bi-box-arrow-up-right"} mr-1.5`} />
            Export accepted ({visibleAccepted.length})
          </button>
          <button
            type="button"
            onClick={() => bulkFollowAccepted(DISTANCE_ACTIONS[0])}
            disabled={Boolean(bulkBusy) || visibleAccepted.length === 0}
            className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[11px] text-white/40 hover:text-emerald-200 disabled:opacity-35"
            title="Create near follow-ups from visible accepted cards"
          >
            Near accepted
          </button>
          <button
            type="button"
            onClick={() => bulkFollowAccepted(DISTANCE_ACTIONS[2])}
            disabled={Boolean(bulkBusy) || visibleAccepted.length === 0}
            className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[11px] text-white/40 hover:text-emerald-200 disabled:opacity-35"
            title="Create far follow-ups from visible accepted cards"
          >
            Far accepted
          </button>
        </div>

        {activeMotifId && (
          <div className="mt-3 grid grid-cols-1 gap-3 2xl:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs text-white/65">
                    <i className="bi bi-journal-bookmark text-sky-300/80" />
                    Board memory
                    <span className="rounded border border-white/[0.06] px-1.5 py-0.5 text-[10px] text-white/30">
                      {memoryLineCount} lines
                    </span>
                  </div>
                  <div className="mt-1 text-[11px] text-white/30">
                    {memoryUpdatedAt
                      ? `Saved ${new Date(memoryUpdatedAt).toLocaleString()}`
                      : "Derived from board decisions"}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setMemoryOpen((value) => !value)}
                    className="rounded-md border border-white/[0.06] bg-black/20 px-2.5 py-1.5 text-[11px] text-white/45 hover:text-white/75"
                    title="Open board memory editor"
                  >
                    <i className={`bi ${memoryOpen ? "bi-eye-slash" : "bi-eye"} mr-1.5`} />
                    {memoryOpen ? "Hide" : "View"}
                  </button>
                  <button
                    type="button"
                    onClick={refreshMemory}
                    disabled={Boolean(memoryBusy)}
                    className="rounded-md border border-white/[0.06] bg-black/20 px-2.5 py-1.5 text-[11px] text-white/45 hover:text-sky-200 disabled:opacity-35"
                    title="Refresh memory from board statuses and notes"
                  >
                    <i className={`bi ${memoryBusy === "refresh" ? "bi-arrow-repeat animate-spin" : "bi-stars"} mr-1.5`} />
                    Refresh
                  </button>
                  <button
                    type="button"
                    onClick={saveMemory}
                    disabled={Boolean(memoryBusy)}
                    className="rounded-md border border-white/[0.06] bg-black/20 px-2.5 py-1.5 text-[11px] text-white/45 hover:text-emerald-200 disabled:opacity-35"
                    title="Save edited board memory"
                  >
                    <i className={`bi ${memoryBusy === "save" ? "bi-arrow-repeat animate-spin" : "bi-save2"} mr-1.5`} />
                    Save
                  </button>
                </div>
              </div>
              {memoryOpen && (
                <textarea
                  value={boardMemory}
                  onChange={(event) => setBoardMemory(event.target.value)}
                  placeholder="Accepted, rejected, exported, and noted decisions..."
                  className="mt-3 h-28 w-full resize-y rounded-lg border border-white/[0.06] bg-black/25 p-3 font-mono text-[11px] leading-5 text-white/60 placeholder:text-white/20 outline-none focus:border-sky-400/35"
                />
              )}
              {memoryError && (
                <div className="mt-2 text-[11px] text-red-300/80">{memoryError}</div>
              )}
              <div className="mt-3 border-t border-white/[0.06] pt-3">
                <div className="flex items-center justify-between gap-2 text-xs text-white/55">
                  <span className="flex items-center gap-2">
                    <i className="bi bi-bounding-box text-emerald-300/80" />
                    Design systems
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-white/25">
                      {activeDesignSystems.length}/{designSystems.length} active
                    </span>
                    <button
                      type="button"
                      onClick={() => setDesignSystemOpen(true)}
                      className="rounded-md border border-white/[0.06] bg-black/20 px-2 py-1 text-[10px] text-white/35 hover:text-emerald-200"
                      title="Manage design systems"
                    >
                      Manage
                    </button>
                  </div>
                </div>
                <div className="mt-2 space-y-1.5">
                  {designSystems.slice(0, 3).map((system) => (
                    <button
                      key={system.id}
                      type="button"
                      onClick={() => setDesignSystemOpen(true)}
                      className="flex w-full items-start gap-2 rounded-md bg-black/15 px-2 py-1.5 text-left"
                    >
                      <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${system.active ? "bg-emerald-300" : "bg-white/20"}`} />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[11px] text-white/55">{system.name}</span>
                        <span className="block truncate text-[10px] text-white/25">
                          {system.source_type} - {Object.values(system.traits || {}).flat().length} traits - {system.componentRules.length} rules
                        </span>
                      </span>
                    </button>
                  ))}
                  {designSystems.length === 0 && (
                    <button
                      type="button"
                      onClick={() => setDesignSystemOpen(true)}
                      className="w-full rounded-md border border-dashed border-white/[0.06] px-3 py-3 text-center text-[11px] text-white/25 hover:text-emerald-200"
                    >
                      Ingest design system
                    </button>
                  )}
                </div>
                {designSystemError && (
                  <div className="mt-2 text-[11px] text-red-300/80">{designSystemError}</div>
                )}
              </div>
              <div className="mt-3 border-t border-white/[0.06] pt-3">
                <div className="flex items-center justify-between gap-2 text-xs text-white/55">
                  <span className="flex items-center gap-2">
                    <i className="bi bi-palette text-violet-300/80" />
                    Style decisions
                  </span>
                  <span className="text-[10px] text-white/25">{styleDecisions.length}</span>
                </div>
                <div className="mt-2 space-y-1.5">
                  {styleDecisions.slice(0, 3).map((decision) => (
                    <div key={decision.id} className="flex items-start gap-2 rounded-md bg-black/15 px-2 py-1.5">
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-[11px] text-white/55">{decision.name}</div>
                        <div className="truncate text-[10px] text-white/25">
                          {styleDecisionSubtitle(decision)}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => void removeStyleDecision(decision.id)}
                        className="shrink-0 rounded p-1 text-white/25 hover:text-red-300"
                        title="Remove style decision"
                      >
                        <i className="bi bi-x-lg" />
                      </button>
                    </div>
                  ))}
                  {styleDecisions.length === 0 && (
                    <div className="rounded-md border border-dashed border-white/[0.06] px-3 py-3 text-center text-[11px] text-white/25">
                      No saved style decisions
                    </div>
                  )}
                </div>
                {styleDecisionError && (
                  <div className="mt-2 text-[11px] text-red-300/80">{styleDecisionError}</div>
                )}
              </div>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs text-white/65">
                  <i className="bi bi-clock-history text-emerald-300/80" />
                  Board timeline
                </div>
                <button
                  type="button"
                  onClick={() => void reloadBoardEvents()}
                  className="rounded-md border border-white/[0.06] bg-black/20 px-2 py-1 text-[10px] text-white/35 hover:text-white/65"
                  title="Refresh board timeline"
                >
                  <i className="bi bi-arrow-repeat" />
                </button>
              </div>
              <div className="mt-2 max-h-28 overflow-y-auto space-y-1.5 pr-1">
                {boardEvents.slice(0, 6).map((event) => (
                  <div key={event.id} className="flex items-start gap-2 rounded-md bg-black/15 px-2 py-1.5">
                    <i className={`bi ${eventIcon(event.event_type)} mt-0.5 text-white/30`} />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[11px] text-white/55">{event.summary}</div>
                      <div className="text-[10px] text-white/25">
                        {new Date(event.created_at).toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
                {boardEvents.length === 0 && (
                  <div className="rounded-md border border-dashed border-white/[0.06] px-3 py-4 text-center text-[11px] text-white/25">
                    No board activity yet
                  </div>
                )}
              </div>
              {eventError && (
                <div className="mt-2 text-[11px] text-red-300/80">{eventError}</div>
              )}
            </div>
          </div>
        )}
      </div>

      {total === 0 ? (
        <div className="flex-1 flex items-center justify-center text-white/20">
          <div className="text-center space-y-3">
            <i className="bi bi-kanban text-5xl" />
            <p>No variants on this board yet</p>
          </div>
        </div>
      ) : (
        <div className="flex-1 min-h-0 flex">
          <div className="flex-1 min-w-0 overflow-x-auto overflow-y-hidden p-4">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 ${
                acceptedOnly ? "xl:grid-cols-1 min-w-[360px]" : "xl:grid-cols-4 min-w-[980px]"
              } gap-4 h-full`}
            >
              {visibleLanes.map((lane) => (
                <section
                  key={lane.id}
                  onDragEnter={() => setDragLane(lane.id)}
                  onDragLeave={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                      setDragLane((current) => (current === lane.id ? null : current));
                    }
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = "move";
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragLane(null);
                    const generationId = e.dataTransfer.getData("text/plain");
                    if (generationId) void moveToLane(generationId, lane.id);
                  }}
                  className={`min-h-0 flex flex-col rounded-lg border transition ${
                    dragLane === lane.id ? "border-sky-400/35 bg-sky-400/[0.045]" : "border-white/[0.06] bg-white/[0.015]"
                  }`}
                >
                  <header className="shrink-0 flex items-center justify-between px-3 py-2 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <i className={`bi ${lane.icon} ${lane.tone}`} />
                      <h2 className="text-xs font-medium text-white/70">{lane.label}</h2>
                    </div>
                    <span className="text-[10px] text-white/30">{grouped[lane.id].length}</span>
                  </header>
                  <div className="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
                    {grouped[lane.id].map((generation) => (
                      <BoardCard
                        key={generation.id}
                        generation={generation}
                        selected={selectedGeneration?.id === generation.id}
                        onInspect={() => setSelectedBoardId(generation.id)}
                        onBoardActivity={() => void reloadBoardEvents()}
                        recipes={recipes}
                        patches={patches}
                      />
                    ))}
                    {grouped[lane.id].length === 0 && (
                      <div className="h-24 rounded-lg border border-dashed border-white/[0.06] flex items-center justify-center text-xs text-white/20">
                        Empty
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>
          <BoardDetailRail
            generation={selectedGeneration}
            recipes={recipes}
            patches={patches}
            onBoardActivity={() => void reloadBoardEvents()}
            onOpenLineage={setLineageId}
            onSaveStyleDecision={saveStyleDecision}
          />
        </div>
      )}
      {lineageId && (
        <LineageView
          generationId={lineageId}
          onClose={() => setLineageId(null)}
          onSelect={(id) => {
            setSelectedBoardId(id);
            setLineageId(null);
          }}
        />
      )}
      {activeMotifId && (
        <DesignSystemStudio
          open={designSystemOpen}
          motifId={activeMotifId}
          onClose={() => setDesignSystemOpen(false)}
          onChanged={() => {
            void reloadDesignSystems();
            void reloadBoardEvents();
          }}
        />
      )}
    </div>
  );
}
