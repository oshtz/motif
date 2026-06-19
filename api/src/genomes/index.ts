import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface Genome {
  id: string;
  name: string;
  keywords: string[];
  content: string;
}

interface GenomeCache {
  genomes: Map<string, Genome>;
  base: string;
  loaded: boolean;
}

const cache: GenomeCache = {
  genomes: new Map(),
  base: "",
  loaded: false,
};

function parseFrontmatter(raw: string): {
  meta: Record<string, unknown>;
  content: string;
} {
  const normalized = raw.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: normalized };

  const meta: Record<string, unknown> = {};
  let currentKey = "";
  let inArray = false;
  const arrayValues: string[] = [];

  for (const line of match[1].split("\n")) {
    if (inArray) {
      if (line.match(/^\s+-\s+/)) {
        arrayValues.push(line.replace(/^\s+-\s+/, "").trim());
        continue;
      } else {
        meta[currentKey] = [...arrayValues];
        arrayValues.length = 0;
        inArray = false;
      }
    }

    const kvMatch = line.match(/^(\w+):\s*(.*)$/);
    if (kvMatch) {
      const [, key, value] = kvMatch;
      if (value === "") {
        // could be start of array
        currentKey = key;
        inArray = true;
        continue;
      }
      meta[key] = value.replace(/^["']|["']$/g, "");
    }
  }

  if (inArray) {
    meta[currentKey] = [...arrayValues];
  }

  return { meta, content: match[2].trim() };
}

function loadFromDisk(): void {
  const genomesDir = __dirname;

  // Load base prompt
  const basePath = path.join(genomesDir, "_base.md");
  cache.base = fs.readFileSync(basePath, "utf-8");

  // Load all genome files
  const files = fs.readdirSync(genomesDir).filter(
    (f) => f.endsWith(".md") && f !== "_base.md"
  );

  for (const file of files) {
    const raw = fs.readFileSync(path.join(genomesDir, file), "utf-8");
    const { meta, content } = parseFrontmatter(raw);

    const genome: Genome = {
      id: (meta.id as string) || file.replace(".md", ""),
      name: (meta.name as string) || file.replace(".md", ""),
      keywords: (meta.keywords as string[]) || [],
      content,
    };

    cache.genomes.set(genome.id, genome);
    // Also index by name for easy lookup
    cache.genomes.set(genome.name, genome);
  }

  cache.loaded = true;
}

function ensureLoaded(): void {
  if (!cache.loaded) loadFromDisk();
}

/** Get all available genomes (deduplicated — returns one entry per genome) */
export function listGenomes(): Genome[] {
  ensureLoaded();
  const seen = new Set<string>();
  const result: Genome[] = [];
  for (const genome of cache.genomes.values()) {
    if (!seen.has(genome.id)) {
      seen.add(genome.id);
      result.push(genome);
    }
  }
  return result.sort((a, b) => a.id.localeCompare(b.id));
}

/** Look up a genome by ID or name */
export function getGenome(idOrName: string): Genome | undefined {
  ensureLoaded();
  return cache.genomes.get(idOrName);
}

/** Compose the full system prompt with a specific genome injected */
export function composeSystemPrompt(genomeIdOrName: string): string {
  ensureLoaded();
  const genome = cache.genomes.get(genomeIdOrName);
  if (!genome) {
    throw new Error(`Unknown genome: ${genomeIdOrName}`);
  }
  return cache.base.replace("{{GENOME}}", genome.content);
}

/** Build the genome selection summary for the prompt expander to choose from */
export function genomeSelectionPrompt(): string {
  const genomes = listGenomes();
  const lines = genomes.map(
    (g) => `- id: "${g.id}" | name: ${g.name} | matches: ${g.keywords.join(", ")}`
  );
  return `Available genomes:\n${lines.join("\n")}`;
}

/** Compose a hybrid system prompt blending two genomes (shuffle mode) */
export function composeShuffleSystemPrompt(
  primaryIdOrName: string,
  secondaryIdOrName: string
): string {
  ensureLoaded();
  const primary = cache.genomes.get(primaryIdOrName);
  if (!primary) throw new Error(`Unknown primary genome: ${primaryIdOrName}`);
  const secondary = cache.genomes.get(secondaryIdOrName);
  if (!secondary) throw new Error(`Unknown secondary genome: ${secondaryIdOrName}`);

  const hybridBlock = `## HYBRID MODE ACTIVE

This generation uses two design genomes blended together. The one-lane mandate (section 1.2) is suspended for this generation. Instead, follow these hybrid rules:

**PRIMARY GENOME** (\`${primary.name}\`) — dominates: color palette and distribution ratios, typography families and weight/tracking rules, border philosophy (radii, widths, styles), interaction states (hover, active, focus, disabled, drag), editorial voice and tone, anti-patterns (absolute prohibitions).

**SECONDARY GENOME** (\`${secondary.name}\`) — influences: layout philosophy and spatial composition, spacing rhythm and density, background and atmospheric treatment (shaders, ambient effects, textures), motion curves and transition behavior, structural decisions (navigation placement, section cadence, footer treatment).

When the two genomes conflict: the primary genome wins for visual identity (colors, type, borders, voice) and the secondary genome wins for spatial/structural decisions (layout, spacing, atmosphere, motion). The result should feel like the primary genome's aesthetic inhabiting the secondary genome's spatial philosophy.

---

### PRIMARY GENOME: \`${primary.name}\`

${primary.content}

---

### SECONDARY GENOME (spatial/atmospheric influence): \`${secondary.name}\`

${secondary.content}`;

  return cache.base.replace("{{GENOME}}", hybridBlock);
}

/** Compose a blended system prompt from up to 3 genomes with percentage weights */
export function composeBlendSystemPrompt(
  blendConfig: Array<{ id: string; weight: number; aspect: string }>
): string {
  ensureLoaded();

  const resolved = blendConfig.map((b) => {
    const genome = cache.genomes.get(b.id);
    if (!genome) throw new Error(`Unknown genome: ${b.id}`);
    return { genome, weight: b.weight, aspect: b.aspect };
  });

  const blendInstructions = resolved
    .map(
      (b) =>
        `**${b.genome.name}** (${b.weight}% — ${b.aspect}): Extract and apply this genome's ${b.aspect} qualities at ${b.weight}% influence.`
    )
    .join("\n\n");

  const genomeContents = resolved
    .map(
      (b) =>
        `### GENOME: \`${b.genome.name}\` — ${b.weight}% (${b.aspect})\n\n${b.genome.content}`
    )
    .join("\n\n---\n\n");

  const hybridBlock = `## BLEND MODE ACTIVE

This generation blends ${resolved.length} design genomes with weighted influence. The one-lane mandate (section 1.2) is suspended for this generation. Instead, follow these blend rules:

${blendInstructions}

When genomes conflict, the genome with higher weight for that specific aspect wins. The result should feel like a coherent fusion — not a collage.

---

${genomeContents}`;

  return cache.base.replace("{{GENOME}}", hybridBlock);
}

/** Force reload genomes from disk (useful after adding new genome files) */
export function reloadGenomes(): void {
  cache.genomes.clear();
  cache.base = "";
  cache.loaded = false;
  loadFromDisk();
}
