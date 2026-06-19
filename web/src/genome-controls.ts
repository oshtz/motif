import type { BlendEntry, StylePatch, StyleRecipe } from "./api";
import type { Generation, GenomeMeta } from "./store";

export type GenomeChipTone = "auto" | "custom" | "genome" | "blend" | "recipe" | "patch" | "distance";

export interface GenomeControlChip {
  id: string;
  label: string;
  detail?: string;
  tone: GenomeChipTone;
}

export interface GenomeControlSummary {
  mode: string;
  description: string;
  chips: GenomeControlChip[];
}

export function parseBlendConfig(value: string | undefined): BlendEntry[] {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((entry) => {
        const candidate = entry as Partial<BlendEntry>;
        return {
          id: String(candidate.id || "").trim(),
          weight: Number(candidate.weight) || 0,
          aspect: String(candidate.aspect || "visual system").trim(),
        };
      })
      .filter((entry) => entry.id && entry.weight > 0);
  } catch {
    return [];
  }
}

export function genomeDisplayName(
  id: string | undefined,
  name: string | undefined,
  genomes: GenomeMeta[] = []
): string {
  if (!id && !name) return "Auto genome";
  const match = id ? genomes.find((genome) => genome.id === id) : undefined;
  const resolvedName = name || match?.name || "";
  return resolvedName ? `${id || match?.id}: ${resolvedName}` : String(id);
}

export function compactGenomeName(
  id: string | undefined,
  name: string | undefined,
  genomes: GenomeMeta[] = []
): string {
  if (!id && !name) return "Auto";
  const match = id ? genomes.find((genome) => genome.id === id) : undefined;
  return id || match?.id || name || "Auto";
}

export function recipeDisplayName(recipeId: string | undefined, recipes: StyleRecipe[] = []): string {
  if (!recipeId) return "";
  return recipes.find((recipe) => recipe.id === recipeId)?.name || `Recipe ${recipeId.slice(0, 8)}`;
}

export function patchDisplayName(patchId: string | undefined, patches: StylePatch[] = []): string {
  if (!patchId) return "";
  return patches.find((patch) => patch.id === patchId)?.name || `Patch ${patchId.slice(0, 8)}`;
}

export function buildActiveGenomeSummary(options: {
  systemPrompt: string;
  genomeId: string;
  shuffle: boolean;
  activeBlend: BlendEntry[] | null;
  activeRecipeId?: string;
  activeRecipeName?: string;
  activeStylePatch?: StylePatch | null;
  genomes: GenomeMeta[];
}): GenomeControlSummary {
  const chips: GenomeControlChip[] = [];

  if (options.systemPrompt) {
    chips.push({
      id: "custom",
      label: "Custom prompt",
      detail: "Genome system bypassed",
      tone: "custom",
    });
    return {
      mode: "Custom",
      description: "System prompt is overriding genome selection.",
      chips,
    };
  }

  const blend = (options.activeBlend || []).filter((entry) => entry.id);
  if (blend.length > 0) {
    for (const entry of blend) {
      chips.push({
        id: `blend-${entry.id}-${entry.aspect}`,
        label: `${entry.id} ${entry.weight}%`,
        detail: entry.aspect,
        tone: "blend",
      });
    }
    if (options.activeRecipeId) {
      chips.push({
        id: `recipe-${options.activeRecipeId}`,
        label: "Recipe",
        detail: options.activeRecipeName || `Recipe ${options.activeRecipeId.slice(0, 8)}`,
        tone: "recipe",
      });
    }
  } else if (options.genomeId) {
    chips.push({
      id: `genome-${options.genomeId}`,
      label: `Pinned ${compactGenomeName(options.genomeId, undefined, options.genomes)}`,
      detail: genomeDisplayName(options.genomeId, undefined, options.genomes),
      tone: "genome",
    });
  } else {
    chips.push({
      id: "auto",
      label: "Auto-select",
      detail: "Prompt matched at generation time",
      tone: "auto",
    });
  }

  if (options.shuffle && blend.length === 0) {
    chips.push({
      id: "shuffle",
      label: "Shuffle",
      detail: "Secondary genome per variant",
      tone: "blend",
    });
  }

  if (options.activeStylePatch) {
    chips.push({
      id: `patch-${options.activeStylePatch.id}`,
      label: "Patch",
      detail: options.activeStylePatch.name,
      tone: "patch",
    });
  }

  return {
    mode: blend.length > 0 ? "Weighted blend" : options.genomeId ? "Pinned genome" : "Auto genome",
    description:
      blend.length > 0
        ? "Weights and aspects will drive the next generation."
        : options.genomeId
          ? "The selected genome is pinned for the next generation."
          : "Motif will pick a genome from the prompt.",
    chips,
  };
}

export function buildGenerationInfluenceSummary(options: {
  generation: Generation;
  recipes?: StyleRecipe[];
  patches?: StylePatch[];
  genomes?: GenomeMeta[];
}): GenomeControlSummary {
  const { generation, recipes = [], patches = [], genomes = [] } = options;
  const chips: GenomeControlChip[] = [];
  const reasons: string[] = [];
  const blend = parseBlendConfig(generation.blend_config_json);

  if (blend.length > 0) {
    for (const entry of blend) {
      chips.push({
        id: `blend-${entry.id}-${entry.aspect}`,
        label: `${entry.id} ${entry.weight}%`,
        detail: entry.aspect,
        tone: "blend",
      });
    }
    reasons.push(
      `Weighted blend: ${blend.map((entry) => `${entry.id} steers ${entry.aspect} at ${entry.weight}%`).join("; ")}.`
    );
  } else if (generation.secondary_genome_id || generation.secondary_genome_name) {
    chips.push({
      id: "hybrid-primary",
      label: compactGenomeName(generation.genome_id, generation.genome_name, genomes),
      detail: "primary visual identity",
      tone: "genome",
    });
    chips.push({
      id: "hybrid-secondary",
      label: compactGenomeName(generation.secondary_genome_id, generation.secondary_genome_name, genomes),
      detail: "secondary structure",
      tone: "blend",
    });
    reasons.push(
      `Hybrid genome: ${genomeDisplayName(generation.genome_id, generation.genome_name, genomes)} supplies identity while ${genomeDisplayName(generation.secondary_genome_id, generation.secondary_genome_name, genomes)} influences structure.`
    );
  } else if (generation.genome_id || generation.genome_name) {
    chips.push({
      id: "genome",
      label: compactGenomeName(generation.genome_id, generation.genome_name, genomes),
      detail: generation.genome_name || "selected genome",
      tone: "genome",
    });
    reasons.push(`Genome: ${genomeDisplayName(generation.genome_id, generation.genome_name, genomes)} shaped palette, typography, spacing, and interaction style.`);
  } else {
    chips.push({
      id: "auto",
      label: "Auto-select",
      detail: "No stored genome",
      tone: "auto",
    });
    reasons.push("No stored genome metadata is available for this variant.");
  }

  const recipeName = recipeDisplayName(generation.recipe_id, recipes);
  if (recipeName) {
    chips.push({
      id: `recipe-${generation.recipe_id}`,
      label: "Recipe",
      detail: recipeName,
      tone: "recipe",
    });
    reasons.push(`Recipe: ${recipeName} made this style reusable across the board.`);
  }

  const patchName = patchDisplayName(generation.style_patch_id, patches);
  if (patchName) {
    chips.push({
      id: `patch-${generation.style_patch_id}`,
      label: "Patch",
      detail: patchName,
      tone: "patch",
    });
    reasons.push(`Style patch: ${patchName} overlaid extracted palette, type, spacing, layout, or motion traits.`);
  }

  if (generation.variation_distance) {
    chips.push({
      id: `distance-${generation.variation_distance}`,
      label: generation.variation_distance,
      detail: "variation distance",
      tone: "distance",
    });
    reasons.push(`Variation distance: ${generation.variation_distance} controls how close this fork stays to its parent.`);
  }

  return {
    mode: blend.length > 0 ? "Weighted blend" : generation.secondary_genome_id ? "Hybrid genome" : "Genome",
    description: reasons.join(" "),
    chips,
  };
}
