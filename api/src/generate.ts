import { v4 as uuid } from "uuid";
import {
  composeSystemPrompt,
  composeShuffleSystemPrompt,
  composeBlendSystemPrompt,
  listGenomes,
  getGenome,
} from "./genomes/index.js";
import { type ProviderConfig, buildFetchOptions } from "./provider.js";

export interface Generation {
  id: string;
  prompt: string;
  expanded_prompt: string;
  system_prompt: string;
  genome_id: string;
  genome_name: string;
  secondary_genome_id: string;
  secondary_genome_name: string;
  model: string;
  output: string;
  parsed_html: string;
  favorited: boolean;
  created_at: number;
  parent_id: string;
  motif_id: string;
  recipe_id?: string;
  blend_config_json?: string;
  variation_distance?: string;
  board_status?: string;
  notes?: string;
  quality_score_json?: string;
  style_patch_id?: string;
}

export const DEFAULT_EDIT_PROMPT = `You are an expert UI editor. You receive an existing HTML document and an edit instruction.

Apply the requested edit to the HTML while preserving:
- Overall design language, colors, typography, and spacing
- Layout structure (unless the edit specifically asks to change it)
- All content not mentioned in the edit instruction

Rules:
- Make ONLY the changes described in the edit instruction
- Keep the result as a complete, self-contained HTML document
- Include Tailwind CSS via CDN script tag
- Return ONLY the complete HTML document`;

export const DEFAULT_STYLE_DROPPER_PROMPT = `You are an expert UI restyling engine. You receive two HTML documents:
1. CONTENT SOURCE — the layout, structure, components, and text to preserve
2. STYLE SOURCE — the visual design language to extract and apply

Produce a single complete HTML document that keeps the CONTENT SOURCE's layout, components, text, and functionality, but transforms its visual appearance to match the STYLE SOURCE's design language.

Extract from STYLE SOURCE: color palette, typography, border styles, spacing, shadows, visual effects, hover states, overall aesthetic.

Rules:
- Do NOT change content, text, or layout structure
- Do NOT add or remove components
- ONLY change visual styling
- Include Tailwind CSS via CDN script tag
- Return ONLY the complete HTML document`;

export const RAW_COMPARE_PROMPT = `You are a frontend developer. Generate a complete, self-contained HTML page with inline CSS and JS based on the user's description. Use Tailwind CSS via CDN. Make it visually polished and production-quality. Return ONLY the HTML code.`;

export const DEFAULT_REORGANIZE_PROMPT = `You are an expert UI layout architect. You receive an existing HTML document and must produce a layout variation.

Your task: REORGANIZE the spatial layout while keeping ALL content and visual styling identical.

KEEP UNCHANGED:
- All text content, copy, labels, headings — every word must remain
- All images, icons, and media (same src attributes)
- All colors, typography, borders, shadows, effects, animations
- All CSS visual properties (colors, fonts, spacing values, gradients, etc.)
- The overall visual "feel" and design language

CHANGE MEANINGFULLY:
- Section ordering (e.g., move hero below features, swap sidebar placement)
- Grid/flex arrangements (e.g., 3-column grid to 2-column + sidebar, horizontal to vertical)
- Navigation placement (e.g., top nav to side nav, horizontal to vertical menu)
- Content flow direction (e.g., left-to-right to right-to-left hero layout)
- Card/component arrangements (e.g., grid to list, carousel to stacked)
- Spatial hierarchy (e.g., what gets full-width vs constrained width)

Rules:
- Make a SUBSTANTIALLY different layout — not just minor spacing tweaks
- The result must look like a genuine alternative layout exploration
- Keep the result as a complete, self-contained HTML document
- Include Tailwind CSS via CDN script tag
- Return ONLY the complete HTML document`;

export function getDefaultSystemPrompt(): string {
  // Return the first genome's composed prompt as a sensible default
  const genomes = listGenomes();
  if (genomes.length > 0) {
    return composeSystemPrompt(genomes[0].id);
  }
  return "You are an expert UI designer and frontend developer.";
}

export function extractHTML(raw: string): string {
  let html = raw.trim();
  const fenceMatch = html.match(/```(?:html)?\s*\n?([\s\S]*?)\n?```/);
  if (fenceMatch) {
    html = fenceMatch[1].trim();
  }
  if (!html.startsWith("<")) {
    html = `<div>${html}</div>`;
  }
  // Fix generated JS that strips '#' from hex colors (e.g. `.replace('#', '')`)
  html = html.replace(/\.replace\(\s*['"]#['"]\s*,\s*['"]['"]?\s*\)/g, '');
  return html;
}

export function wrapHTML(html: string): string {
  // If the generated HTML is already a complete document, inject Tailwind CDN
  // into its <head> instead of re-wrapping (which would override its own styles)
  const isFullDocument = /<!DOCTYPE|<html/i.test(html);
  if (isFullDocument) {
    // Inject Tailwind CDN if not already present
    if (!html.includes('cdn.tailwindcss.com')) {
      html = html.replace(
        /<head([^>]*)>/i,
        `<head$1>\n  <script src="https://cdn.tailwindcss.com"><\/script>`
      );
    }
    return html;
  }

  // For HTML fragments, wrap in a minimal document
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  ${html}
</body>
</html>`;
}

/**
 * Expand the user's prompt and select a genome.
 * Returns the expanded prompt text and the chosen genome ID.
 */
export async function expandPrompt(options: {
  prompt: string;
  model: string;
  provider: ProviderConfig;
  genomeId?: string; // explicit genome override
  secondaryGenomeName?: string; // shuffle mode: name of secondary genome for expansion context
  priorContext?: string; // summary of prior turns in this motif thread
}): Promise<{ expanded: string; genomeId: string; genomeName: string }> {
  const { prompt, model, provider, genomeId, secondaryGenomeName, priorContext } = options;

  // If genome is explicitly specified, just expand the prompt
  if (genomeId) {
    const genome = getGenome(genomeId);
    if (!genome) throw new Error(`Unknown genome: ${genomeId}`);

    const expanded = await callExpansion({
      prompt,
      genomeName: genome.name,
      secondaryGenomeName,
      model,
      provider,
      priorContext,
    });

    return { expanded, genomeId: genome.id, genomeName: genome.name };
  }

  // Otherwise, let the LLM pick the genome during expansion
  // Shuffle genomes so LLM doesn't always favor the first few listed
  const allGenomes = listGenomes();
  // Fisher-Yates shuffle for unbiased randomization
  const shuffled = [...allGenomes];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const selectionContext = shuffled
    .map((g) => `- id: "${g.id}" | name: ${g.name} | matches: ${g.keywords.join(", ")}`)
    .join("\n");

  // Pre-pick a random "suggested" genome to break LLM's positional bias
  const suggested = shuffled[Math.floor(Math.random() * shuffled.length)];

  const { url, init } = buildFetchOptions(provider, {
    model,
    messages: [
      {
        role: "system",
        content: `You are a UI design prompt expander and genome selector.

Given a user's UI prompt, you must:
1. Select the most appropriate design genome from the list below
2. Expand the prompt into a detailed, unique UI specification

Available genomes:
${selectionContext}

GENOME SELECTION RULES:
- Match the user's description to the genome whose identity fits best
- If multiple genomes could work, lean toward "${suggested.id}" (${suggested.name}) this time — but override if another is clearly better
- AVOID always picking the same genome — variety across generations is critical
- Each expansion must explore a DISTINCT creative direction

Respond in EXACTLY this format (no other text):
GENOME: [genome_id]
---
[expanded prompt specification]`,
      },
      {
        role: "user",
        content: priorContext
          ? `${priorContext}\n\nNow expand this NEXT UI prompt and select the best genome:\n\n"${prompt}"`
          : `Expand this UI prompt and select the best genome:\n\n"${prompt}"`,
      },
    ],
    temperature: 1.0,
    max_tokens: 800,
  });

  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`Prompt expansion failed: ${response.status}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content?.trim() ?? "";

  // Parse genome selection and expanded prompt
  const genomeMatch = content.match(/^GENOME:\s*(\S+)/m);
  const dividerIdx = content.indexOf("---");

  let selectedId = "01"; // fallback
  let expanded = prompt;

  if (genomeMatch) {
    const candidate = genomeMatch[1].replace(/["\s]/g, "");
    if (getGenome(candidate)) {
      selectedId = candidate;
    }
  }

  if (dividerIdx !== -1) {
    expanded = content.slice(dividerIdx + 3).trim();
  } else if (!genomeMatch) {
    expanded = content;
  }

  const genome = getGenome(selectedId);
  return {
    expanded: expanded || prompt,
    genomeId: selectedId,
    genomeName: genome?.name ?? selectedId,
  };
}

/** Internal helper: expand a prompt with a known genome */
async function callExpansion(options: {
  prompt: string;
  genomeName: string;
  secondaryGenomeName?: string;
  model: string;
  provider: ProviderConfig;
  priorContext?: string;
}): Promise<string> {
  const { prompt, genomeName, secondaryGenomeName, model, provider, priorContext } = options;

  const genomeContext = secondaryGenomeName
    ? `The design will use the "${genomeName}" genome blended with the "${secondaryGenomeName}" genome (hybrid mode — primary aesthetic from ${genomeName}, spatial/atmospheric influence from ${secondaryGenomeName}).`
    : `The design will use the "${genomeName}" genome.`;

  const { url, init } = buildFetchOptions(provider, {
    model,
    messages: [
      {
        role: "system",
        content: `You are a UI design prompt expander. Given a short user prompt, expand it into a detailed, unique UI specification. ${genomeContext} Include specifics about layout, components, color direction, typography feel, interactions, and content. Each expansion must be DIFFERENT and explore a distinct creative direction. Keep it concise but specific.\n\nReturn ONLY the expanded prompt text.`,
      },
      {
        role: "user",
        content: priorContext
          ? `${priorContext}\n\nNow expand this NEXT UI prompt into a unique, detailed specification:\n\n"${prompt}"`
          : `Expand this UI prompt into a unique, detailed specification:\n\n"${prompt}"`,
      },
    ],
    temperature: 1.0,
    max_tokens: 800,
  });

  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`Prompt expansion failed: ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim() ?? prompt;
}

export interface ConversationTurn {
  prompt: string;
  expandedPrompt: string;
  html: string; // the generated output (parsed_html)
}

export function streamVariant(options: {
  expandedPrompt: string;
  genomeId: string;
  secondaryGenomeId?: string; // shuffle mode
  blendConfig?: Array<{ id: string; weight: number; aspect: string }>; // blend mode
  model: string;
  temperature: number;
  provider: ProviderConfig;
  customSystemPrompt?: string; // bypass genome system entirely
  history?: ConversationTurn[]; // prior turns in this motif thread
  curatedImages?: string; // pre-searched image URLs block to inject
  stylePatchPrompt?: string; // reusable Style Dropper patch prompt
}): { response: Promise<Response> } {
  const { expandedPrompt, genomeId, secondaryGenomeId, blendConfig, model, temperature, provider, customSystemPrompt, history, curatedImages, stylePatchPrompt } = options;

  // Use custom system prompt if provided, otherwise compose from genome(s)
  let systemPrompt: string;
  if (customSystemPrompt) {
    systemPrompt = customSystemPrompt;
  } else if (blendConfig && blendConfig.length > 1) {
    systemPrompt = composeBlendSystemPrompt(blendConfig);
  } else if (secondaryGenomeId) {
    systemPrompt = composeShuffleSystemPrompt(genomeId, secondaryGenomeId);
  } else {
    systemPrompt = composeSystemPrompt(genomeId);
  }

  // Build messages: system + conversation history + current request
  const messages: { role: string; content: string }[] = [
    { role: "system", content: systemPrompt },
  ];

  // Include conversation history from the motif thread
  if (history && history.length > 0) {
    // Include up to the last 3 turns to stay within context limits
    // Each turn: user requested X, assistant produced HTML
    const recentHistory = history.slice(-3);
    for (const turn of recentHistory) {
      messages.push({
        role: "user",
        content: `Generate the UI for:\n\n${turn.expandedPrompt}\n\nReturn ONLY the HTML.`,
      });
      // Truncate HTML to keep context manageable — include enough for the LLM to understand the design
      const truncatedHtml = turn.html.length > 8000
        ? turn.html.slice(0, 8000) + "\n<!-- ... truncated ... -->"
        : turn.html;
      messages.push({
        role: "assistant",
        content: truncatedHtml,
      });
    }
  }

  // Current request
  const imageBlock = curatedImages || "";
  const stylePatchBlock = stylePatchPrompt
    ? `\n\n## STYLE PATCH OVERLAY\n${stylePatchPrompt}\n\nUse this patch as a reusable visual genome overlay. It should influence palette, typography, spacing, layout rhythm, motion, and material treatment without replacing the user's product intent.`
    : "";
  messages.push({
    role: "user",
    content: `Generate the UI for:\n\n${expandedPrompt}${stylePatchBlock}${imageBlock}\n\nReturn ONLY the HTML.`,
  });

  const { url, init } = buildFetchOptions(provider, {
    model,
    messages,
    temperature,
    stream: true,
  });

  const response = fetch(url, init);

  return { response };
}

export function newVariantId(): string {
  return uuid();
}
