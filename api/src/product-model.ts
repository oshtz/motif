export const BOARD_STATUSES = ["candidate", "accepted", "rejected", "exported"] as const;

export type BoardStatus = (typeof BOARD_STATUSES)[number];

export interface BlendEntry {
  id: string;
  weight: number;
  aspect: string;
}

export interface QualityCategory {
  score: number;
  notes: string[];
}

export interface QualityScore {
  overall: number;
  categories: {
    accessibility: QualityCategory;
    mobileOverflow: QualityCategory;
    visualHierarchy: QualityCategory;
    originality: QualityCategory;
    productionReadiness: QualityCategory;
    implementationCleanliness: QualityCategory;
  };
  runtime_audit?: RuntimeQualityAudit;
  created_at: number;
}

export interface RuntimeViewportAudit {
  viewportWidth: number;
  viewportHeight: number;
  clientWidth: number;
  scrollWidth: number;
  scrollHeight: number;
  overflowPixels: number;
  verticalOverflowPixels: number;
  overflowingElementCount: number;
  clippedTextCount: number;
  tinyTextCount: number;
  unlabeledControlCount: number;
  missingAltCount: number;
  duplicateIdCount: number;
  smallTapTargetCount: number;
  imageWithoutDimensionsCount: number;
  layoutShiftProxyCount: number;
  lowContrastCount: number;
  headingCount: number;
  h1Count: number;
  landmarkCount: number;
  totalElements: number;
  bodyTextLength: number;
  jsErrorCount: number;
  visualFingerprint?: string;
  timedOut?: boolean;
}

export interface RuntimeVisualDiff {
  fromViewportWidth: number;
  toViewportWidth: number;
  fingerprintChanged: boolean;
  overflowDelta: number;
  elementCountDelta: number;
}

export interface RuntimeQualityAudit {
  measurements: RuntimeViewportAudit[];
  visualDiffs?: RuntimeVisualDiff[];
  userAgent?: string;
  created_at: number;
}

export interface StyleTraits {
  colors: string[];
  typography: string[];
  spacing: string[];
  motion: string[];
  layout: string[];
}

export interface DesignSystemExtraction {
  traits: StyleTraits;
  tokenCues: string[];
  componentRules: string[];
  promptPatch: string;
}

export interface DirectEditTarget {
  selector?: string;
  tagName?: string;
  id?: string;
  className?: string;
  role?: string;
  ariaLabel?: string;
  text?: string;
  outerHTML?: string;
}

export interface BoardMemoryGeneration {
  prompt?: string;
  expanded_prompt?: string;
  genome_id?: string;
  genome_name?: string;
  secondary_genome_id?: string;
  secondary_genome_name?: string;
  recipe_id?: string;
  style_patch_id?: string;
  variation_distance?: string;
  board_status?: string;
  notes?: string;
  quality_score_json?: string;
  created_at?: number;
}

const ASPECT_FALLBACK = "overall visual direction";

export function normalizeBoardStatus(value: unknown): BoardStatus {
  return BOARD_STATUSES.includes(value as BoardStatus)
    ? (value as BoardStatus)
    : "candidate";
}

export function normalizeBlendConfig(input: unknown): BlendEntry[] {
  if (!Array.isArray(input)) return [];

  return input
    .map((entry) => {
      if (!entry || typeof entry !== "object") return null;
      const row = entry as Record<string, unknown>;
      const id = typeof row.id === "string" ? row.id.trim() : "";
      if (!id) return null;

      const rawWeight = Number(row.weight);
      const weight = Number.isFinite(rawWeight)
        ? Math.max(1, Math.min(100, Math.round(rawWeight)))
        : 50;
      const aspect =
        typeof row.aspect === "string" && row.aspect.trim()
          ? row.aspect.trim()
          : ASPECT_FALLBACK;

      return { id, weight, aspect };
    })
    .filter((entry): entry is BlendEntry => Boolean(entry))
    .slice(0, 5);
}

export function safeJsonParse<T>(value: string | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function normalizeStringArray(value: unknown, limit: number): string[] {
  if (!Array.isArray(value)) return [];
  return Array.from(
    new Set(
      value
        .map((item) => (typeof item === "string" ? item.trim() : ""))
        .filter(Boolean)
    )
  ).slice(0, limit);
}

export function normalizeStyleTraits(input: unknown): StyleTraits {
  const source = input && typeof input === "object"
    ? (input as Record<string, unknown>)
    : {};
  return {
    colors: normalizeStringArray(source.colors, 20),
    typography: normalizeStringArray(source.typography, 20),
    spacing: normalizeStringArray(source.spacing, 24),
    motion: normalizeStringArray(source.motion, 20),
    layout: normalizeStringArray(source.layout, 24),
  };
}

function flattenTokenEntries(
  input: unknown,
  path: string[] = [],
  output: Array<{ path: string; value: string }> = []
): Array<{ path: string; value: string }> {
  if (output.length >= 240) return output;
  if (input === null || input === undefined) return output;

  if (typeof input === "string" || typeof input === "number" || typeof input === "boolean") {
    const key = path.join(".").replace(/\.(?:value|\$value)$/i, "");
    const value = String(input).trim();
    if (key && value) output.push({ path: key, value });
    return output;
  }

  if (Array.isArray(input)) {
    input.slice(0, 80).forEach((item, index) => {
      flattenTokenEntries(item, [...path, String(index)], output);
    });
    return output;
  }

  if (typeof input === "object") {
    const source = input as Record<string, unknown>;
    const directValue = source.value ?? source.$value;
    if (
      directValue !== undefined &&
      (typeof directValue === "string" || typeof directValue === "number" || typeof directValue === "boolean")
    ) {
      flattenTokenEntries(directValue, [...path, "value"], output);
    }
    for (const [key, value] of Object.entries(source).slice(0, 160)) {
      if (key === "value" || key === "$value" || key === "type" || key === "$type" || key === "description") {
        continue;
      }
      flattenTokenEntries(value, [...path, key], output);
    }
  }

  return output;
}

function tokenCue(path: string, value: string): string {
  const cleanPath = path
    .replace(/\.(?:0|1|2|3|4|5|6|7|8|9)\./g, ".")
    .replace(/\.(?:value|\$value)$/i, "")
    .replace(/\s+/g, " ")
    .slice(0, 80);
  const cleanValue = value.replace(/\s+/g, " ").slice(0, 80);
  return `${cleanPath}: ${cleanValue}`;
}

export function extractDesignTokenTraits(tokens: unknown): { traits: StyleTraits; tokenCues: string[] } {
  const entries = flattenTokenEntries(tokens);
  const traits: StyleTraits = { colors: [], typography: [], spacing: [], motion: [], layout: [] };
  const tokenCues: string[] = [];

  for (const entry of entries) {
    const key = entry.path.toLowerCase();
    const value = entry.value;
    const cue = tokenCue(entry.path, value);
    tokenCues.push(cue);

    if (/(color|colour|background|foreground|surface|border|fill|stroke|accent|brand|semantic)/.test(key) || /^#(?:[0-9a-f]{3,8})$/i.test(value) || /^(rgb|hsl)a?\(/i.test(value)) {
      traits.colors.push(cue);
    } else if (/(font|type|typography|text|line-height|lineheight|letter-spacing|letterspacing|weight|leading|tracking)/.test(key)) {
      traits.typography.push(cue);
    } else if (/(space|spacing|gap|padding|margin|radius|size|width|height|container)/.test(key)) {
      traits.spacing.push(cue);
    } else if (/(duration|easing|motion|animation|transition|spring|curve)/.test(key)) {
      traits.motion.push(cue);
    } else if (/(breakpoint|grid|layout|column|sidebar|nav|z-index|zindex)/.test(key)) {
      traits.layout.push(cue);
    }
  }

  return {
    traits: normalizeStyleTraits(traits),
    tokenCues: Array.from(new Set(tokenCues)).slice(0, 36),
  };
}

export function normalizeComponentRules(input: unknown): string[] {
  if (Array.isArray(input)) {
    return normalizeStringArray(input, 40);
  }
  if (typeof input !== "string") return [];
  return Array.from(
    new Set(
      input
        .split(/\n|;/)
        .map((line) => line.replace(/\s+/g, " ").trim())
        .filter(Boolean)
    )
  ).slice(0, 40);
}

function mergeTraitSets(...traitSets: StyleTraits[]): StyleTraits {
  const merge = (key: keyof StyleTraits, limit: number) =>
    Array.from(new Set(traitSets.flatMap((traits) => traits[key]))).slice(0, limit);
  return {
    colors: merge("colors", 20),
    typography: merge("typography", 20),
    spacing: merge("spacing", 24),
    motion: merge("motion", 20),
    layout: merge("layout", 24),
  };
}

export function buildDesignSystemPromptPatch(options: {
  name: string;
  traits: StyleTraits;
  tokenCues?: string[];
  componentRules?: string[];
}): string {
  const normalized = normalizeStyleTraits(options.traits);
  const tokenCues = normalizeStringArray(options.tokenCues || [], 30);
  const componentRules = normalizeComponentRules(options.componentRules || []);
  const sections = [
    tokenCues.length ? `Token cues: ${tokenCues.join("; ")}` : "",
    normalized.colors.length ? `Palette/token rules: ${normalized.colors.join("; ")}` : "",
    normalized.typography.length ? `Typography rules: ${normalized.typography.join("; ")}` : "",
    normalized.spacing.length ? `Spacing, density, and radius rules: ${normalized.spacing.join("; ")}` : "",
    normalized.motion.length ? `Motion/interaction rules: ${normalized.motion.join("; ")}` : "",
    normalized.layout.length ? `Layout and responsive rules: ${normalized.layout.join("; ")}` : "",
    componentRules.length ? `Reusable component rules: ${componentRules.join("; ")}` : "",
  ].filter(Boolean);

  return [
    `Apply the "${options.name}" design system as a board-level genome constraint.`,
    "Preserve the user's product intent, but make palette, type, spacing, components, states, and responsive behavior conform to these reusable system rules.",
    "Prefer named tokens and component rules over ad hoc styling. If a generated idea conflicts with this design system, the design system wins unless the user explicitly asks to depart from it.",
    ...sections,
  ].join("\n");
}

export function buildDesignSystemExtraction(options: {
  name: string;
  htmlTraits?: StyleTraits;
  tokenJson?: unknown;
  componentRules?: unknown;
}): DesignSystemExtraction {
  const tokenExtraction = options.tokenJson === undefined
    ? { traits: normalizeStyleTraits({}), tokenCues: [] }
    : extractDesignTokenTraits(options.tokenJson);
  const componentRules = normalizeComponentRules(options.componentRules);
  const traits = mergeTraitSets(
    normalizeStyleTraits(options.htmlTraits || {}),
    tokenExtraction.traits
  );
  const promptPatch = buildDesignSystemPromptPatch({
    name: options.name,
    traits,
    tokenCues: tokenExtraction.tokenCues,
    componentRules,
  });

  return {
    traits,
    tokenCues: tokenExtraction.tokenCues,
    componentRules,
    promptPatch,
  };
}

export function normalizeDirectEditTarget(input: unknown): DirectEditTarget | null {
  if (!input || typeof input !== "object") return null;
  const source = input as Record<string, unknown>;
  const target: DirectEditTarget = {
    selector: compactText(source.selector, 220),
    tagName: compactText(source.tagName, 40).toLowerCase(),
    id: compactText(source.id, 80),
    className: compactText(source.className, 220),
    role: compactText(source.role, 80),
    ariaLabel: compactText(source.ariaLabel, 160),
    text: compactText(source.text, 500),
    outerHTML: compactText(source.outerHTML, 900),
  };
  return Object.values(target).some(Boolean) ? target : null;
}

export function buildDirectEditInstruction(instruction: string, targetInput: unknown): string {
  const cleanInstruction = compactText(instruction, 1200);
  const target = normalizeDirectEditTarget(targetInput);
  if (!target) return cleanInstruction;

  const targetLines = [
    target.selector ? `Selector: ${target.selector}` : "",
    target.tagName ? `Tag: ${target.tagName}` : "",
    target.id ? `ID: ${target.id}` : "",
    target.className ? `Classes: ${target.className}` : "",
    target.role ? `Role: ${target.role}` : "",
    target.ariaLabel ? `Accessible label: ${target.ariaLabel}` : "",
    target.text ? `Visible text: ${target.text}` : "",
    target.outerHTML ? `Element HTML excerpt: ${target.outerHTML}` : "",
  ].filter(Boolean);

  return [
    "DIRECT MANIPULATION EDIT",
    "",
    "Target only the selected element/component and the minimum directly related CSS, responsive states, hover/focus states, and immediate children needed to satisfy the request.",
    "Do not redesign unrelated sections. Preserve the existing genome, layout, content, and board/design-system constraints outside this target.",
    "",
    "Selected target:",
    ...targetLines.map((line) => `- ${line}`),
    "",
    `User edit request: ${cleanInstruction}`,
  ].join("\n");
}

export function summarizeRecipe(blendConfig: BlendEntry[]): string {
  if (blendConfig.length === 0) return "Auto genome selection";
  return blendConfig
    .map((entry) => `${entry.id} ${entry.weight}% for ${entry.aspect}`)
    .join("; ");
}

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function finiteNumber(value: unknown, fallback = 0): number {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function category(base: number, notes: string[], deductions: number): QualityCategory {
  return {
    score: clampScore(base - deductions),
    notes: notes.length > 0 ? notes : ["No obvious issues detected"],
  };
}

function countMatches(html: string, pattern: RegExp): number {
  return html.match(pattern)?.length ?? 0;
}

export function scoreGeneratedHtml(html: string): QualityScore {
  const lower = html.toLowerCase();
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  const accessibilityNotes: string[] = [];
  let accessibilityDeductions = 0;
  const buttonCount = countMatches(lower, /<button\b/g);
  const labelledCount = countMatches(lower, /(aria-label=|aria-labelledby=|title=)/g);
  const imageCount = countMatches(lower, /<img\b/g);
  const altCount = countMatches(lower, /<img\b[^>]*\balt=/g);
  if (buttonCount > 0 && labelledCount === 0) {
    accessibilityNotes.push("Interactive controls may be unlabeled");
    accessibilityDeductions += 20;
  }
  if (imageCount > altCount) {
    accessibilityNotes.push(`${imageCount - altCount} image(s) may be missing alt text`);
    accessibilityDeductions += 15;
  }
  if (!/(<main\b|role=["']main["'])/.test(lower)) {
    accessibilityNotes.push("No explicit main landmark detected");
    accessibilityDeductions += 8;
  }

  const mobileNotes: string[] = [];
  let mobileDeductions = 0;
  if (/(width:\s*[5-9]\d{2,}px|w-\[[5-9]\d{2,}px\]|min-width:\s*[4-9]\d{2,}px|min-w-\[[4-9]\d{2,}px\])/.test(lower)) {
    mobileNotes.push("Large fixed widths may create mobile overflow");
    mobileDeductions += 25;
  }
  if (/grid-cols-[4-9]/.test(lower) && !/(sm:grid-cols|md:grid-cols|lg:grid-cols)/.test(lower)) {
    mobileNotes.push("Dense grid lacks obvious responsive breakpoints");
    mobileDeductions += 15;
  }
  if (/text-\[[4-9]\dpx\]|text-7xl|text-8xl|text-9xl/.test(lower) && !/(sm:text|md:text|lg:text)/.test(lower)) {
    mobileNotes.push("Large display text may need responsive sizing");
    mobileDeductions += 10;
  }

  const hierarchyNotes: string[] = [];
  let hierarchyDeductions = 0;
  const headingCount = countMatches(lower, /<h[1-6]\b/g);
  const sectionCount = countMatches(lower, /(<section\b|<article\b|<nav\b|<aside\b)/g);
  if (headingCount === 0) {
    hierarchyNotes.push("No semantic headings detected");
    hierarchyDeductions += 25;
  }
  if (sectionCount < 2) {
    hierarchyNotes.push("Few semantic regions; hierarchy may be flat");
    hierarchyDeductions += 12;
  }
  if (text.length < 120) {
    hierarchyNotes.push("Very little content text; may be under-specified");
    hierarchyDeductions += 10;
  }

  const originalityNotes: string[] = [];
  let originalityDeductions = 0;
  const gradientCount = countMatches(lower, /gradient|from-|via-|to-/g);
  const glassCount = countMatches(lower, /backdrop-blur|glass|blur-/g);
  if (gradientCount > 12) {
    originalityNotes.push("Heavy gradient usage can read as generic AI output");
    originalityDeductions += 12;
  }
  if (glassCount > 8) {
    originalityNotes.push("Repeated glass/blur motifs can flatten the design voice");
    originalityDeductions += 10;
  }
  if (!/(texture|grain|mono|serif|condensed|diagram|ticker|ledger|instrument|editorial|canvas|terminal|poster|print)/.test(lower)) {
    originalityNotes.push("Few distinctive material or domain cues detected");
    originalityDeductions += 10;
  }

  const productionNotes: string[] = [];
  let productionDeductions = 0;
  if (!/<html\b/.test(lower) || !/<body\b/.test(lower)) {
    productionNotes.push("Output is not a complete HTML document");
    productionDeductions += 20;
  }
  if (/lorem ipsum|placeholder|replace me|todo/.test(lower)) {
    productionNotes.push("Placeholder copy remains in the output");
    productionDeductions += 20;
  }
  if (countMatches(lower, /<script\b/g) > 3) {
    productionNotes.push("Multiple scripts increase handoff risk");
    productionDeductions += 10;
  }

  const cleanlinessNotes: string[] = [];
  let cleanlinessDeductions = 0;
  const styleBlocks = countMatches(lower, /<style\b/g);
  const inlineStyles = countMatches(lower, /\sstyle=["']/g);
  if (styleBlocks > 2) {
    cleanlinessNotes.push("Multiple style blocks may be harder to extract");
    cleanlinessDeductions += 10;
  }
  if (inlineStyles > 12) {
    cleanlinessNotes.push("Heavy inline styling may complicate component export");
    cleanlinessDeductions += 15;
  }
  if (html.length > 120000) {
    cleanlinessNotes.push("Large HTML payload should be split into components");
    cleanlinessDeductions += 10;
  }

  const categories = {
    accessibility: category(92, accessibilityNotes, accessibilityDeductions),
    mobileOverflow: category(94, mobileNotes, mobileDeductions),
    visualHierarchy: category(90, hierarchyNotes, hierarchyDeductions),
    originality: category(88, originalityNotes, originalityDeductions),
    productionReadiness: category(90, productionNotes, productionDeductions),
    implementationCleanliness: category(90, cleanlinessNotes, cleanlinessDeductions),
  };

  const overall = clampScore(
    Object.values(categories).reduce((sum, item) => sum + item.score, 0) /
      Object.keys(categories).length
  );

  return { overall, categories, created_at: Date.now() };
}

function normalizeRuntimeViewportAudit(input: unknown): RuntimeViewportAudit | null {
  if (!input || typeof input !== "object") return null;
  const source = input as Record<string, unknown>;
  return {
    viewportWidth: Math.max(0, Math.round(finiteNumber(source.viewportWidth))),
    viewportHeight: Math.max(0, Math.round(finiteNumber(source.viewportHeight))),
    clientWidth: Math.max(0, Math.round(finiteNumber(source.clientWidth))),
    scrollWidth: Math.max(0, Math.round(finiteNumber(source.scrollWidth))),
    scrollHeight: Math.max(0, Math.round(finiteNumber(source.scrollHeight))),
    overflowPixels: Math.max(0, Math.round(finiteNumber(source.overflowPixels))),
    verticalOverflowPixels: Math.max(0, Math.round(finiteNumber(source.verticalOverflowPixels))),
    overflowingElementCount: Math.max(0, Math.round(finiteNumber(source.overflowingElementCount))),
    clippedTextCount: Math.max(0, Math.round(finiteNumber(source.clippedTextCount))),
    tinyTextCount: Math.max(0, Math.round(finiteNumber(source.tinyTextCount))),
    unlabeledControlCount: Math.max(0, Math.round(finiteNumber(source.unlabeledControlCount))),
    missingAltCount: Math.max(0, Math.round(finiteNumber(source.missingAltCount))),
    duplicateIdCount: Math.max(0, Math.round(finiteNumber(source.duplicateIdCount))),
    smallTapTargetCount: Math.max(0, Math.round(finiteNumber(source.smallTapTargetCount))),
    imageWithoutDimensionsCount: Math.max(0, Math.round(finiteNumber(source.imageWithoutDimensionsCount))),
    layoutShiftProxyCount: Math.max(0, Math.round(finiteNumber(source.layoutShiftProxyCount))),
    lowContrastCount: Math.max(0, Math.round(finiteNumber(source.lowContrastCount))),
    headingCount: Math.max(0, Math.round(finiteNumber(source.headingCount))),
    h1Count: Math.max(0, Math.round(finiteNumber(source.h1Count))),
    landmarkCount: Math.max(0, Math.round(finiteNumber(source.landmarkCount))),
    totalElements: Math.max(0, Math.round(finiteNumber(source.totalElements))),
    bodyTextLength: Math.max(0, Math.round(finiteNumber(source.bodyTextLength))),
    jsErrorCount: Math.max(0, Math.round(finiteNumber(source.jsErrorCount))),
    visualFingerprint: typeof source.visualFingerprint === "string" ? source.visualFingerprint.slice(0, 80) : undefined,
    timedOut: source.timedOut === true,
  };
}

function normalizeRuntimeVisualDiff(input: unknown): RuntimeVisualDiff | null {
  if (!input || typeof input !== "object") return null;
  const source = input as Record<string, unknown>;
  return {
    fromViewportWidth: Math.max(0, Math.round(finiteNumber(source.fromViewportWidth))),
    toViewportWidth: Math.max(0, Math.round(finiteNumber(source.toViewportWidth))),
    fingerprintChanged: source.fingerprintChanged === true,
    overflowDelta: Math.round(finiteNumber(source.overflowDelta)),
    elementCountDelta: Math.round(finiteNumber(source.elementCountDelta)),
  };
}

function buildRuntimeVisualDiffs(measurements: RuntimeViewportAudit[]): RuntimeVisualDiff[] {
  if (measurements.length < 2) return [];
  return measurements.slice(1).map((item) => {
    const previous = measurements[0];
    return {
      fromViewportWidth: previous.viewportWidth,
      toViewportWidth: item.viewportWidth,
      fingerprintChanged: Boolean(previous.visualFingerprint && item.visualFingerprint && previous.visualFingerprint !== item.visualFingerprint),
      overflowDelta: item.overflowPixels - previous.overflowPixels,
      elementCountDelta: item.totalElements - previous.totalElements,
    };
  });
}

export function normalizeRuntimeQualityAudit(input: unknown): RuntimeQualityAudit | null {
  if (!input || typeof input !== "object") return null;
  const source = input as Record<string, unknown>;
  const measurements = Array.isArray(source.measurements)
    ? source.measurements
        .map(normalizeRuntimeViewportAudit)
        .filter((item): item is RuntimeViewportAudit => Boolean(item))
        .slice(0, 6)
    : [];

  if (measurements.length === 0) return null;
  const visualDiffs = Array.isArray(source.visualDiffs)
    ? source.visualDiffs
        .map(normalizeRuntimeVisualDiff)
        .filter((item): item is RuntimeVisualDiff => Boolean(item))
        .slice(0, 8)
    : buildRuntimeVisualDiffs(measurements);

  return {
    measurements,
    visualDiffs,
    userAgent: typeof source.userAgent === "string" ? source.userAgent.slice(0, 220) : undefined,
    created_at: Math.max(0, Math.round(finiteNumber(source.created_at, Date.now()))),
  };
}

function addFinding(
  categories: QualityScore["categories"],
  key: keyof QualityScore["categories"],
  note: string,
  deduction: number
) {
  const target = categories[key];
  target.notes = target.notes.filter((item) => item !== "No obvious issues detected");
  if (!target.notes.includes(note)) target.notes.push(note);
  target.score = clampScore(target.score - deduction);
}

function sumMetric(
  measurements: RuntimeViewportAudit[],
  key: keyof RuntimeViewportAudit
): number {
  return measurements.reduce((sum, item) => sum + finiteNumber(item[key]), 0);
}

function maxMetric(
  measurements: RuntimeViewportAudit[],
  key: keyof RuntimeViewportAudit
): number {
  return Math.max(0, ...measurements.map((item) => finiteNumber(item[key])));
}

export function mergeRuntimeQualityAudit(
  baseScore: QualityScore,
  auditInput: unknown
): QualityScore {
  const runtimeAudit = normalizeRuntimeQualityAudit(auditInput);
  if (!runtimeAudit) return baseScore;

  const categories: QualityScore["categories"] = {
    accessibility: {
      ...baseScore.categories.accessibility,
      notes: [...baseScore.categories.accessibility.notes],
    },
    mobileOverflow: {
      ...baseScore.categories.mobileOverflow,
      notes: [...baseScore.categories.mobileOverflow.notes],
    },
    visualHierarchy: {
      ...baseScore.categories.visualHierarchy,
      notes: [...baseScore.categories.visualHierarchy.notes],
    },
    originality: {
      ...baseScore.categories.originality,
      notes: [...baseScore.categories.originality.notes],
    },
    productionReadiness: {
      ...baseScore.categories.productionReadiness,
      notes: [...baseScore.categories.productionReadiness.notes],
    },
    implementationCleanliness: {
      ...baseScore.categories.implementationCleanliness,
      notes: [...baseScore.categories.implementationCleanliness.notes],
    },
  };

  const measurements = runtimeAudit.measurements;
  const mobile = measurements.find((item) => item.viewportWidth <= 480);
  const lowContrastCount = sumMetric(measurements, "lowContrastCount");
  const unlabeledControlCount = sumMetric(measurements, "unlabeledControlCount");
  const missingAltCount = sumMetric(measurements, "missingAltCount");
  const duplicateIdCount = sumMetric(measurements, "duplicateIdCount");
  const smallTapTargetCount = sumMetric(measurements, "smallTapTargetCount");
  const imageWithoutDimensionsCount = sumMetric(measurements, "imageWithoutDimensionsCount");
  const layoutShiftProxyCount = sumMetric(measurements, "layoutShiftProxyCount");
  const jsErrorCount = sumMetric(measurements, "jsErrorCount");
  const timedOutCount = measurements.filter((item) => item.timedOut).length;
  const maxTotalElements = maxMetric(measurements, "totalElements");
  const maxH1Count = maxMetric(measurements, "h1Count");
  const maxHeadingCount = maxMetric(measurements, "headingCount");
  const maxLandmarkCount = maxMetric(measurements, "landmarkCount");
  const maxVerticalOverflow = maxMetric(measurements, "verticalOverflowPixels");
  const visualFingerprintCount = measurements.filter((item) => item.visualFingerprint).length;

  if (lowContrastCount > 0) {
    addFinding(
      categories,
      "accessibility",
      `${lowContrastCount} runtime text element(s) may miss contrast targets`,
      Math.min(28, 6 + lowContrastCount * 2)
    );
  }
  if (unlabeledControlCount > 0) {
    addFinding(
      categories,
      "accessibility",
      `${unlabeledControlCount} runtime control(s) lack visible or ARIA labels`,
      Math.min(24, 6 + unlabeledControlCount * 3)
    );
  }
  if (missingAltCount > 0) {
    addFinding(
      categories,
      "accessibility",
      `${missingAltCount} rendered image(s) are missing alt text`,
      Math.min(18, 4 + missingAltCount * 3)
    );
  }
  if (duplicateIdCount > 0) {
    addFinding(
      categories,
      "accessibility",
      `${duplicateIdCount} duplicate rendered id value(s) can break labels and anchors`,
      Math.min(18, 5 + duplicateIdCount * 2)
    );
  }
  if (smallTapTargetCount > 0) {
    addFinding(
      categories,
      "accessibility",
      `${smallTapTargetCount} interactive target(s) render below comfortable touch size`,
      Math.min(20, 4 + smallTapTargetCount * 2)
    );
  }

  if (mobile) {
    if (mobile.overflowPixels > 4) {
      addFinding(
        categories,
        "mobileOverflow",
        `Runtime mobile viewport overflows horizontally by ${mobile.overflowPixels}px`,
        Math.min(40, 14 + Math.floor(mobile.overflowPixels / 20))
      );
    }
    if (mobile.overflowingElementCount > 0) {
      addFinding(
        categories,
        "mobileOverflow",
        `${mobile.overflowingElementCount} element(s) extend outside the mobile viewport`,
        Math.min(28, 6 + mobile.overflowingElementCount * 3)
      );
    }
    if (mobile.clippedTextCount > 0) {
      addFinding(
        categories,
        "mobileOverflow",
        `${mobile.clippedTextCount} text element(s) appear clipped at mobile width`,
        Math.min(24, 5 + mobile.clippedTextCount * 3)
      );
    }
    if (mobile.tinyTextCount > 3) {
      addFinding(
        categories,
        "mobileOverflow",
        `${mobile.tinyTextCount} text element(s) render below 11px on mobile`,
        Math.min(18, mobile.tinyTextCount)
      );
    }
    if (mobile.smallTapTargetCount > 0) {
      addFinding(
        categories,
        "mobileOverflow",
        `${mobile.smallTapTargetCount} mobile target(s) are smaller than 32px`,
        Math.min(20, 5 + mobile.smallTapTargetCount * 2)
      );
    }
  }
  if (maxVerticalOverflow > 2200) {
    addFinding(
      categories,
      "mobileOverflow",
      `Rendered page is very tall (${maxVerticalOverflow}px beyond viewport) and may need sectioning`,
      7
    );
  }

  if (maxH1Count === 0 && maxHeadingCount > 0) {
    addFinding(categories, "visualHierarchy", "Runtime audit found headings but no H1", 8);
  }
  if (maxH1Count > 1) {
    addFinding(categories, "visualHierarchy", `Runtime audit found ${maxH1Count} H1 elements`, 7);
  }
  if (maxLandmarkCount < 2) {
    addFinding(categories, "visualHierarchy", "Runtime audit found few rendered landmark regions", 8);
  }

  if (jsErrorCount > 0) {
    addFinding(
      categories,
      "productionReadiness",
      `${jsErrorCount} runtime JavaScript error(s) were observed`,
      Math.min(30, 10 + jsErrorCount * 5)
    );
  }
  if (timedOutCount > 0) {
    addFinding(
      categories,
      "productionReadiness",
      `${timedOutCount} runtime audit viewport(s) timed out`,
      8
    );
  }
  if (imageWithoutDimensionsCount > 0) {
    addFinding(
      categories,
      "productionReadiness",
      `${imageWithoutDimensionsCount} image(s) lack intrinsic dimensions for stable layout`,
      Math.min(18, 4 + imageWithoutDimensionsCount * 2)
    );
  }
  if (layoutShiftProxyCount > 12) {
    addFinding(
      categories,
      "productionReadiness",
      `${layoutShiftProxyCount} animated/transitioning element(s) may need layout-stability review`,
      Math.min(14, 4 + Math.floor(layoutShiftProxyCount / 4))
    );
  }
  if (measurements.length < 3) {
    addFinding(
      categories,
      "productionReadiness",
      "Runtime audit covered fewer than three viewport widths",
      4
    );
  }

  if (maxTotalElements > 320) {
    addFinding(
      categories,
      "implementationCleanliness",
      `Runtime DOM is large (${maxTotalElements} rendered elements)`,
      Math.min(18, Math.floor((maxTotalElements - 260) / 40))
    );
  }
  if (visualFingerprintCount < measurements.length) {
    addFinding(
      categories,
      "implementationCleanliness",
      "Runtime visual fingerprints were incomplete for screenshot-diff evidence",
      5
    );
  }
  if ((runtimeAudit.visualDiffs || []).some((item) => !item.fingerprintChanged && Math.abs(item.elementCountDelta) < 2)) {
    addFinding(
      categories,
      "originality",
      "Viewport visual fingerprints barely change; layout may not be meaningfully responsive",
      6
    );
  }

  const overall = clampScore(
    Object.values(categories).reduce((sum, item) => sum + item.score, 0) /
      Object.keys(categories).length
  );

  return {
    overall,
    categories,
    runtime_audit: runtimeAudit,
    created_at: Date.now(),
  };
}

function uniqueMatches(html: string, pattern: RegExp, limit: number): string[] {
  const matches = Array.from(html.matchAll(pattern))
    .map((match) => match[1] || match[0])
    .filter(Boolean);
  return Array.from(new Set(matches)).slice(0, limit);
}

export function extractStaticStyleTraits(html: string): StyleTraits {
  const lower = html.toLowerCase();
  return {
    colors: [
      ...uniqueMatches(html, /(#[0-9a-fA-F]{3,8})\b/g, 16),
      ...uniqueMatches(lower, /\b(?:bg|text|border|from|via|to)-([a-z]+-\d{2,3})\b/g, 16),
    ].slice(0, 20),
    typography: uniqueMatches(
      lower,
      /\b(font-(?:mono|serif|sans|black|bold|semibold|medium|light|thin)|text-(?:xs|sm|base|lg|xl|[2-9]xl)|tracking-[\w-]+|uppercase|lowercase)\b/g,
      20
    ),
    spacing: uniqueMatches(
      lower,
      /\b(?:p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|space-[xy]|inset|top|left|right|bottom)-[\w[\]./-]+\b/g,
      24
    ),
    motion: uniqueMatches(
      lower,
      /\b(?:animate-[\w-]+|transition[\w-]*|duration-\d+|ease-[\w-]+|hover:[\w:-]+|group-hover:[\w:-]+)\b/g,
      20
    ),
    layout: uniqueMatches(
      lower,
      /\b(?:grid|flex|columns-\d+|grid-cols-[\w-]+|flex-col|flex-row|items-[\w-]+|justify-[\w-]+|max-w-[\w-]+|container|sticky|fixed|absolute|relative)\b/g,
      24
    ),
  };
}

export function buildPromptPatch(traits: StyleTraits): string {
  const normalized = normalizeStyleTraits(traits);
  const sections = [
    normalized.colors.length ? `Palette cues: ${normalized.colors.join(", ")}` : "",
    normalized.typography.length ? `Typography cues: ${normalized.typography.join(", ")}` : "",
    normalized.spacing.length ? `Spacing rhythm: ${normalized.spacing.join(", ")}` : "",
    normalized.motion.length ? `Motion/interaction cues: ${normalized.motion.join(", ")}` : "",
    normalized.layout.length ? `Layout cues: ${normalized.layout.join(", ")}` : "",
  ].filter(Boolean);

  return [
    "Apply this reusable style patch as a visual genome overlay.",
    "Keep the user's content and product intent intact while carrying these extracted traits into palette, typography, spacing, motion, layout, and surface treatment.",
    ...sections,
  ].join("\n");
}

function compactText(value: unknown, limit: number): string {
  if (typeof value !== "string") return "";
  const text = value.replace(/\s+/g, " ").trim();
  if (!text) return "";
  return text.length > limit ? `${text.slice(0, limit - 1).trim()}...` : text;
}

function qualityLabel(value: string | undefined): string {
  const score = safeJsonParse<QualityScore | null>(value, null);
  return score ? `quality ${score.overall}/100` : "";
}

function generationMemoryLine(generation: BoardMemoryGeneration): string {
  const prompt = compactText(generation.prompt || generation.expanded_prompt, 150);
  const notes = compactText(generation.notes, 170);
  const genome = [
    generation.genome_name || generation.genome_id,
    generation.secondary_genome_name || generation.secondary_genome_id,
  ].filter(Boolean).join(" + ");
  const meta = [
    genome ? `genome ${genome}` : "",
    generation.recipe_id ? `recipe ${generation.recipe_id}` : "",
    generation.style_patch_id ? `patch ${generation.style_patch_id}` : "",
    generation.variation_distance ? `distance ${generation.variation_distance}` : "",
    qualityLabel(generation.quality_score_json),
  ].filter(Boolean).join("; ");
  const parts = [
    prompt ? `"${prompt}"` : "",
    meta ? `(${meta})` : "",
    notes ? `notes: ${notes}` : "",
  ].filter(Boolean);
  return parts.join(" ");
}

function sectionLines(
  title: string,
  rows: BoardMemoryGeneration[],
  limit: number
): string[] {
  const lines = rows
    .slice()
    .sort((a, b) => Number(b.created_at || 0) - Number(a.created_at || 0))
    .map(generationMemoryLine)
    .filter(Boolean);

  if (lines.length === 0) return [];
  return [
    `${title}:`,
    ...Array.from(new Set(lines)).slice(0, limit).map((line) => `- ${line}`),
  ];
}

export function buildBoardMemory(
  generations: BoardMemoryGeneration[],
  options: { maxItemsPerStatus?: number; maxLength?: number } = {}
): string {
  const maxItemsPerStatus = options.maxItemsPerStatus ?? 5;
  const maxLength = options.maxLength ?? 4000;
  const normalized = generations.filter((generation) => generation && typeof generation === "object");
  const accepted = normalized.filter((generation) => normalizeBoardStatus(generation.board_status) === "accepted");
  const exported = normalized.filter((generation) => normalizeBoardStatus(generation.board_status) === "exported");
  const rejected = normalized.filter((generation) => normalizeBoardStatus(generation.board_status) === "rejected");
  const notedCandidates = normalized.filter(
    (generation) =>
      normalizeBoardStatus(generation.board_status) === "candidate" &&
      Boolean(compactText(generation.notes, 20))
  );

  const lines = [
    "Use this board memory as durable project context for future variants.",
    ...sectionLines("Accepted direction to preserve", accepted, maxItemsPerStatus),
    ...sectionLines("Exported decisions and handoff-ready references", exported, maxItemsPerStatus),
    ...sectionLines("Rejected directions to avoid", rejected, maxItemsPerStatus),
    ...sectionLines("Open candidate notes to consider", notedCandidates, Math.min(3, maxItemsPerStatus)),
  ];

  if (lines.length === 1) return "";

  lines.push(
    "Generation rule: build on accepted/exported decisions, avoid rejected patterns, and keep notes visible in tradeoffs."
  );

  const memory = lines.join("\n");
  return memory.length > maxLength ? `${memory.slice(0, maxLength - 1).trim()}...` : memory;
}
