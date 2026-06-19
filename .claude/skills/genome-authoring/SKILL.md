---
name: genome-authoring
description: Create new design genomes for the motif UI generation system. Use this skill whenever the user wants to add a new visual style, design language, aesthetic direction, or "genome" to their library. Also use when they mention creating themes, design systems, style definitions, or want to expand the available design options in motif. Covers the full workflow — from concept to a production-ready genome markdown file that slots into the modular genome architecture.
---

# Genome Authoring

This skill guides the creation of new design genomes for motif's modular genome system. A genome is a **total design philosophy** — not just colors, but a complete specification covering surface treatment, typography, interaction language, motion, atmosphere, editorial voice, and anti-patterns. Each genome file lives in `api/src/genomes/` and is automatically discovered by the system at runtime.

## What makes a genome work

The genome system's power comes from **specificity and constraint**. Every existing genome succeeds because it commits fully to an identity and then specifies exactly how that identity manifests across every layer of the UI. A genome that says "use nice colors" is useless. A genome that says "`border-radius: 0px`. no exceptions. all panel dividers and rules are red." — that's actionable.

The reason this matters: these genomes are consumed by an LLM generating HTML. The LLM needs unambiguous, concrete instructions to produce consistent output. Vague guidance leads to generic results. Precise CSS values, specific font choices, exact color hex codes, and explicit anti-patterns produce distinctive, recognizable output every time.

## The nine layers

Every genome must define all nine layers. Missing layers lead to inconsistent output where the LLM falls back to generic defaults. Read `references/genome-layers.md` for the full specification of each layer with examples drawn from existing genomes.

1. **Surface** — colors (with CSS variable names), typography (families, weights, sizes, tracking), borders (width, style, radius), spacing
2. **Color distribution** — the 60/30/10 ratio specifying which colors dominate, accent, and punctuate
3. **Component patterns** — how buttons, inputs, cards, navigation, headers, footers, lists, tables, dividers, modals, and badges render
4. **Interaction language** — hover, active, focus, selected, disabled, and drag states with exact CSS properties
5. **Motion & feedback** — transition durations and curves, loading/success/error animations
6. **Atmosphere** — background treatments, textures, overlays, ambient effects
7. **Editorial voice** — how the genome "writes": button labels, headings, metadata, placeholders, empty states, error/success messages
8. **Cursor & selection** — cursor style per context, `::selection` colors
9. **Anti-patterns** — what this genome explicitly NEVER does (typically 6-10 items)

## Authoring workflow

### 1. Define the identity

Start with a one-sentence identity statement that captures the genome's essence. This should evoke a specific real-world reference point — not abstract design jargon.

Good identity statements reference tangible things:
- "clinical, high-risk technical documentation. swiss international style meets classified government filing."
- "1989 portable hardware. 4-shade green-scale LCD. chunky, dithered, pixel-perfect."
- "warm cinematic tech. 70s analog camera equipment, NASA control rooms, and Dieter Rams industrial design."

Bad identity statements are vague:
- "a modern, clean design" (modern how? clean in what way?)
- "dark theme with accent colors" (this describes every dark theme ever)

### 2. Choose constraints before features

The best genomes are defined as much by what they refuse to do as by what they embrace. Start by listing 3-5 hard constraints:
- What border-radius range? (0px? 4px max? 12px minimum? pill-shaped everything?)
- What font categories? (monospace only? sans-serif only? pixel fonts?)
- Transitions or no transitions? (some genomes ban all animation)
- How many colors? (4-shade constraint? warm-only palette? single accent?)

These constraints cascade into decisions across all nine layers and create the genome's distinctive character.

### 3. Build out each layer

Work through the nine layers sequentially. For each layer, provide:
- **Concrete CSS values** — exact hex colors, exact pixel sizes, exact timing values
- **CSS variable names** — define a palette with `--varname: #hex` syntax
- **Component-by-component specifics** — don't say "buttons look like the theme", specify border, background, radius, padding, typography, and states

### 4. Write the anti-patterns

After defining what the genome does, explicitly list what it never does. Frame these as absolute rules with the word "never". These prevent the LLM from drifting toward generic patterns.

Each anti-pattern should contradict a common default. For example, if your genome uses only monospace fonts, the anti-pattern is "never uses sans-serif or display typefaces."

**Important note on color anti-patterns:** Do NOT write anti-patterns that rigidly forbid all colors outside the defined palette (e.g. "never uses any color outside the palette"). The genome palette is the foundation, but the generating agent has creative license to introduce additional colors that feel native to the genome's world. Instead, frame color anti-patterns around *aesthetic direction* — what kinds of colors would clash with the genome's identity (e.g. "never introduces warm/saturated colors that break the cold technical aesthetic").

### 5. Define the editorial voice

This layer is often overlooked but dramatically affects output quality. The genome doesn't just style elements — it writes the text inside them. Specify:
- Button label examples (5-8 representative labels)
- Heading style (case, tone, length, punctuation)
- Metadata format (how dates, versions, statuses, and IDs appear)
- Placeholder text examples
- Empty state messages
- Error and success message tone and format

### 6. Select keywords for auto-matching

The frontmatter `keywords` array drives automatic genome selection during prompt expansion. Choose 8-12 keywords that a user might naturally use when describing a UI that fits this genome. Include both obvious matches ("terminal", "hacker") and less obvious associations ("covert", "mainframe", "phosphor").

## File format

Genome files use this exact structure:

```markdown
---
id: "07"
name: your_genome.name
keywords:
  - keyword1
  - keyword2
  - keyword3
---

### genome 07: `your_genome.name`

> identity: [one-sentence identity statement]

**surface**
[colors, typography, borders, spacing with exact CSS values]

**color distribution**
[60/30/10 breakdown]

**component patterns**
[every common UI element specified]

**interaction language**
[all six states with CSS properties]

**motion & feedback**
[transition rules, loading/success/error animations]

**atmosphere**
[background treatments, textures, ambient effects]

**editorial voice**
[button labels, headings, metadata, placeholders, empty states, errors, successes]

**cursor & selection**
[cursor styles, ::selection colors]

**anti-patterns — this genome NEVER:**
[6-10 absolute prohibitions]
```

The `id` field should be the next sequential number (check existing genomes in `api/src/genomes/`). The `name` follows the pattern `descriptive_name.suffix` where the suffix evokes the genome's era or medium.

## Deduplication: avoiding similar genomes

Before writing a new genome, always check for overlap with existing genomes. Read all `.md` files in `api/src/genomes/` (excluding `_base.md`) to understand the current library.

A new genome must be **meaningfully distinct** from every existing genome across at least 4 of these dimensions:

1. **Color temperature** — warm vs cool vs neutral
2. **Border philosophy** — sharp (0px) vs rounded vs pill-shaped
3. **Typography family** — monospace vs sans-serif vs pixel vs serif
4. **Motion strategy** — no transitions vs fast snaps vs smooth eases
5. **Information density** — sparse/spacious vs dense/packed
6. **Era/reference point** — the real-world aesthetic being channeled
7. **Editorial voice** — terse/technical vs warm/human vs loud/confrontational

### Similarity check process

For each existing genome, evaluate overlap:
- **Low overlap (OK to proceed):** Different in 5+ dimensions. The genomes will produce visually distinct output.
- **Moderate overlap (needs refinement):** Different in 3-4 dimensions. The new genome needs sharper constraints or a more distinctive identity to justify its existence.
- **High overlap (should not create):** Different in 0-2 dimensions. This is essentially a variant of an existing genome. Instead of creating a new file, consider updating the existing genome with new options or creating a sub-variant.

### When to update instead of create

If a proposed genome is too similar to an existing one, the right approach is usually to **refine the existing genome** rather than add a near-duplicate. This could mean:
- Adjusting the existing genome's color palette to accommodate the new direction
- Adding alternate component patterns within the existing genome
- Tightening the existing genome's identity statement to better differentiate it
- Expanding the existing genome's keyword set

Document your similarity assessment at the top of your response before writing any genome content:
```
Similarity check:
- vs lab_manual.80s: LOW (different era, different color temp, different border philosophy)
- vs underground_terminal.crt: MODERATE (both dark, both monospace — but different era/voice/motion)
- vs panavision.70s: LOW (different era, different density, different typography)
Decision: Proceed with new genome — sufficiently distinct.
```

## After creating the file

1. Save the file to `api/src/genomes/[name].md`
2. The genome is automatically discovered — call `POST /api/genomes/reload` or restart the dev server
3. Test by generating a UI with the genome explicitly selected, or by using keywords that should trigger auto-selection

## Quality checklist

Before considering a genome complete, verify:
- [ ] All nine layers are fully specified
- [ ] Every color has a CSS variable name and hex value
- [ ] Typography specifies family, weight, size ranges, letter-spacing, line-height, and text-transform
- [ ] At least 10 component types are specified (buttons, inputs, cards, nav, headers, footers, lists, tables, dividers, modals)
- [ ] All six interaction states have explicit CSS properties
- [ ] Anti-patterns list has 6+ items that genuinely contrast with the genome's choices
- [ ] Editorial voice has examples for all categories (buttons, headings, metadata, placeholders, empty states, errors, successes)
- [ ] Keywords array has 8-12 terms for auto-matching
- [ ] The identity statement references something tangible, not abstract
