# Genome Layer Reference

This document provides detailed guidance for each of the nine genome layers, with examples drawn from existing genomes to illustrate the level of specificity required.

## Table of Contents
1. [Surface](#surface)
2. [Color Distribution](#color-distribution)
3. [Component Patterns](#component-patterns)
4. [Interaction Language](#interaction-language)
5. [Motion & Feedback](#motion--feedback)
6. [Atmosphere](#atmosphere)
7. [Editorial Voice](#editorial-voice)
8. [Cursor & Selection](#cursor--selection)
9. [Anti-Patterns](#anti-patterns)

---

## Surface

The surface layer defines the foundational visual properties: colors, typography, borders, and spacing.

### Colors
Always define colors as CSS custom properties. Include 4-8 named variables that cover: background, primary text, accent/active, muted/secondary, and any atmospheric colors.

**Example (underground_terminal.crt):**
```
--bg: #1a1a1a; --ink: #e8e4d9; --amber: #ffb800; --dim: #665e50; --danger: #ff4136; --scanline: rgba(0,0,0,0.1);
```

**Example (neo_brutalist.zine):**
```
--bg: #F3EFEA; --ink: #000000; --pink: #FF70B3; --cyan: #16A2F9; --green: #00984A; --yellow: #FFD700;
```

### Typography
Specify: font-family (with full fallback stack), font-weight, font-size ranges for each text level, letter-spacing, line-height, and text-transform rules.

**Example (lab_manual.80s):**
- Display/headings: `"DotGothic16", monospace`, 13-18px
- Body/meta: `"Inter", sans-serif`, 11-12px
- Strictly `text-transform: uppercase`, `letter-spacing: 0.08em`
- No text ever exceeds 18px — hierarchy through weight and color, not scale

**Example (handheld_gb.dmg):**
- `"Press Start 2P", monospace` everywhere
- Body: 8px, headers: 10px
- Almost no size variation — the constraint IS the aesthetic

### Borders
Specify: width, style, color, and border-radius for major panels and internal elements.

**Example (neo_brutalist.zine):** `2px solid var(--ink)` on major panels, `1px solid var(--ink)` internal, `border-radius: 0px` no exceptions
**Example (panavision.70s):** `2px solid var(--espresso)`, `border-radius: 12px` (squircle)

### Spacing
Specify: gap, padding, and any grid/module sizing.

**Example (handheld_gb.dmg):** Everything snaps to a 4px grid. `padding: 8px; gap: 4px`. Modular widths based on 160px or 320px.

---

## Color Distribution

This layer specifies the ratio of color usage. Use percentages that add to 100%.

**Example (underground_terminal.crt):**
- 70% dark background (`--bg`) — the void
- 15% ink (`--ink`) — secondary text, borders
- 10% amber (`--amber`) — primary text, active states
- 5% dim (`--dim`) — tertiary info, dividers

**Example (neo_brutalist.zine):**
- 50% warm paper (`--bg`)
- 25% black (`--ink`)
- 25% distributed across four accent colors — no single accent dominates

The distribution tells the LLM how much visual weight each color carries. Without it, models tend to use colors evenly, which looks generic.

---

## Component Patterns

Specify every common UI element. At minimum, cover these 11 component types:

1. **Buttons** — shape, border, background, text style, sizing. Primary vs secondary vs icon variants.
2. **Inputs** — border treatment, background, focus state, label position and style, placeholder style.
3. **Cards/Panels** — background, border, shadow (or lack thereof), header treatment.
4. **Navigation** — layout pattern, active indicator, item separation.
5. **Headers** — layout, typography, metadata placement.
6. **Footers** — layout, content, border treatment.
7. **Lists** — prefix style, separator, active item treatment.
8. **Tables** — border treatment, header style, alternating rows.
9. **Dividers** — style, width, color.
10. **Modals/Overlays** — border, background, blur, shadow, header format.
11. **Badges/Tags** — shape, size, colors.

For each component, provide actual CSS property values, not descriptions.

**Example button (neo_brutalist.zine):**
"sticker" style. `box-shadow: 4px 4px 0px var(--ink); border: 2px solid var(--ink)`. Varied background colors per button (rotate through pink, cyan, green, yellow). Uppercase. `padding: 12px 24px`.

**Example button (underground_terminal.crt):**
Text in brackets: `[submit]`, `[cancel]`, `[run]`. No background, no border. Amber text. Lowercase.

---

## Interaction Language

Define all six states with exact CSS properties:

1. **Hover** — what changes on mouse-over
2. **Active/Pressed** — what changes on click/tap
3. **Focus** — keyboard focus indicator
4. **Selected** — toggled-on state
5. **Disabled** — unavailable state
6. **Drag** — during drag operations

**Example (lab_manual.80s):**
- Hover: `outline: 1px dashed var(--red)`. No background change, no scale, no shadow.
- Active: `background: var(--red); color: #FFFFFF`. Hard snap. Zero transition.
- Focus: `outline: 2px solid var(--red); outline-offset: 2px`
- Selected: leading `▸` character + `color: var(--red)`
- Disabled: `opacity: 0.3`, `text-decoration: line-through`
- Drag: `cursor: crosshair`, dashed red outline

**Example (modern_studio.pro):**
- Hover: shadow deepens, element lifts `translateY(-2px)`, `transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1)`
- Active: `transform: scale(0.97)`, for accent elements: `box-shadow: 0 0 0 3px var(--neon)`

---

## Motion & Feedback

Specify transition rules and feedback animations for four scenarios:

1. **Transitions** — default timing function, or explicit "none"
2. **Loading** — what the loading state looks like
3. **Success** — visual confirmation
4. **Error** — visual error indication

Some genomes ban transitions entirely (lab_manual.80s, handheld_gb.dmg). This is a valid and powerful choice.

**Example (handheld_gb.dmg):**
- Transitions: **none**. Everything is instantaneous. Non-negotiable.
- Loading: `LOADING...` with dots appearing one at a time
- Success: `♪` character appears for 300ms
- Error: entire panel inverts for 100ms, then `!` appears

---

## Atmosphere

This layer defines the ambient quality of the page — what makes it feel like a place rather than a wireframe.

**Example (underground_terminal.crt):**
- CRT scanline overlay via `::after` on body
- Subtle screen flicker keyframe animation (4s loop, opacity 1→0.97→1)
- Persistent phosphor bleed: `text-shadow: 0 0 2px var(--amber)` on amber text
- Optional vignette on viewport edges

**Example (handheld_gb.dmg):**
- Outer bezel: `background: #8a8a6e; border-radius: 12px; padding: 16px`
- LCD sunken effect: `box-shadow: inset 2px 2px 0px var(--c2)`
- `image-rendering: pixelated` on all images

---

## Editorial Voice

Specify the tone and format for every text category. Include 5-8 concrete examples per category.

Categories to cover:
- **Button labels** — e.g., `INITIALIZE`, `EXECUTE` vs `Continue`, `Get Started` vs `[transmit]`, `[wipe]`
- **Headings** — case, tone, punctuation
- **Metadata** — format for dates, versions, statuses
- **Placeholders** — input placeholder text style
- **Empty states** — what to show when there's no data
- **Error messages** — tone and format
- **Success messages** — tone and format

The editorial voice is what makes a genome feel like a coherent world rather than just a color theme.

---

## Cursor & Selection

Specify:
- Default cursor for body text
- Cursor for interactive elements
- Any custom cursor (data-URI or specific CSS cursor value)
- `::selection` background and text color

---

## Anti-Patterns

List 6-10 things this genome explicitly never does. Each should be phrased as "uses/does X" — making it clear what to avoid.

The most useful anti-patterns are ones that contradict common defaults:
- "uses border-radius on anything" (when the genome is angular)
- "uses transitions or animations" (when the genome is instant)
- "uses sans-serif fonts" (when the genome is monospace-only)
- "uses casual language" (when the genome is formal/technical)

**Note on color anti-patterns:** The genome palette is the primary palette, but the generating agent may introduce additional colors that harmonize with the genome's aesthetic. Color anti-patterns should describe what *kinds* of colors clash with the identity (e.g. "introduces warm saturated hues that break the cold technical feel") rather than rigidly forbidding all colors outside the defined set. Only constrain to exact colors when it's truly identity-defining (e.g. a 4-color GameBoy palette).

Anti-patterns prevent drift. Without them, the LLM gradually reverts to generic patterns over the course of a long generation.
