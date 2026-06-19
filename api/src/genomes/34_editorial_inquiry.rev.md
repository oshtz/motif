---
id: "34"
name: editorial_inquiry.rev
keywords:
  - editorial
  - inquiry
  - analytical
  - journal
  - radial
  - interrogative
  - review
  - curatorial
  - blue ink
  - paper
  - data analysis
  - publication
  - research
  - academic
  - thesis
  - data journalism
---

### genome 34: `editorial_inquiry.rev`

> identity: warm editorial data inquiry. European cultural journal meets analytical instrument — questions as interface, blue ink on ivory paper, grid-table frames that interrogate their own content.

**surface**

colors:
```
--paper: #FDFBF7;
--ink: #284BAC;
--ink-deep: #1C3580;
--ink-sheer: rgba(40, 75, 172, 0.06);
--ink-light: rgba(40, 75, 172, 0.15);
--ink-medium: rgba(40, 75, 172, 0.4);
--muted: rgba(40, 75, 172, 0.55);
--rule: rgba(40, 75, 172, 1);
```

typography:
- display/headings: `'Cormorant Garamond', serif` — weight 400-600, italic by default for interrogative labels, 1.8-2.5rem display, 1.1-1.2rem section labels, `letter-spacing: -0.02em` on display, `letter-spacing: 0.02em` on small labels
- body/data: `'Inter', sans-serif` — weight 400-500, 0.85-0.9rem body, 0.65rem fine print/metrics, `letter-spacing: -0.01em`, `line-height: 1.45`
- headings use sentence case or lowercase; labels are italic serif with question-mark suffix
- no text exceeds 2.5rem except detail panel titles which may reach 3rem
- `font-style: italic` is the primary differentiator between questioning labels and answering values

borders:
- all borders: `1px solid var(--ink)` — no exceptions
- `border-radius: 0px` everywhere — all corners are sharp
- internal cell dividers use the same `1px solid var(--ink)`
- no box-shadow anywhere — depth comes from grid structure, not elevation

spacing:
- outer padding: `1rem` on body
- cell padding: `6px 12px` (top cells), `8px 12px` (bottom cells)
- section margins: `2rem 0`
- gap between metric rows: `0.5rem`
- all spacing is tight and editorial — white space is structural, not decorative

**color distribution**

- 70% paper (`--paper`) — the warm ivory field dominates, it is the ground
- 20% ink (`--ink`) — all text, borders, rules, data marks, interactive elements
- 7% ink-sheer/ink-light (`--ink-sheer`, `--ink-light`) — hover fills, subtle backgrounds, tinted regions
- 3% ink-medium/muted (`--ink-medium`, `--muted`) — dashed axes, secondary labels, disabled states

this is essentially a two-color genome: paper and ink. all variation comes from opacity, not hue. no secondary accent color. the constraint IS the identity.

**component patterns**

buttons: no background, no border, no fill. text-only with `border-bottom: 1px solid var(--ink)`. serif italic for soft actions ("export data", "view details"), sans medium for functional actions. `padding: 0`. hover adds `background: var(--ink-sheer)`. no pill shapes, no shadows, no rounded corners ever.

inputs: `border-bottom: 1px solid var(--ink)` only — no full border box. `background: transparent`. label above in italic serif with question mark ("Search?", "Filter by?"). placeholder text in `var(--ink-medium)`, italic. focus state: `border-bottom: 2px solid var(--ink)`.

cards/panels: the "frame-table" pattern — a full-width grid with `border: 1px solid var(--ink)`, divided into cells by vertical and horizontal `1px solid` rules. each cell has a top row (italic serif label/question) and bottom row (sans answer/value). `background: transparent`. no elevation, no shadow.

navigation: horizontal grid-table at page top. each nav item is a frame-cell with italic serif category above and active item below in sans. active cell gets `background: var(--ink-sheer)`. no underlines, no pills, no icons.

headers: frame-table pattern spanning full width. three equal columns. top row is italic serif question ("System?", "Analysis mode?", "Timestamp?"). bottom row is sans answer. `border: 1px solid var(--ink)` on outer frame, `border-right: 1px solid var(--ink)` between cells.

footers: identical frame-table structure to header. categories like "Metrics Key", "Action?" in italic serif top row. values and inline links in sans bottom row.

lists: no bullet points, no numbers. each item is a horizontal rule-separated row. item label in italic serif, item value in sans right-aligned. `border-bottom: 1px solid var(--ink-light)` between items. active item: full `var(--ink)` bottom border.

tables: grid-table with `1px solid var(--ink)` on all cell borders. header row has italic serif column labels with question marks. data rows in sans. no alternating row colors — all rows are `--paper`. hover row gets `background: var(--ink-sheer)`.

dividers: `1px solid var(--ink)` — full stop. no dashed, no dotted, no decorative. horizontal rules span full container width.

modals/overlays: positioned panels with `background: var(--paper)`. no border — instead float with subtle `opacity` and `transform: translateY` transitions. title in large italic serif (2.5rem). content separated by `border-top: 1px solid var(--ink)`. no backdrop blur, no dark overlay — the panel simply appears.

badges/tags: inline text with no background and no border. differentiated by `font-family: var(--font-serif); font-style: italic` and parenthetical format: *(interactive)*, *(pending)*, *(archived)*. never pill-shaped, never filled.

**interaction language**

- hover: `background: var(--ink-sheer)` on containers; serif labels gain `font-weight: 600` and `font-style: italic`. data bars thicken from `3px` to `6px`. metric numbers fade in with `opacity: 0 → 1`. `transition: 0.3s ease` on all hover changes.
- active/pressed: `background: var(--ink-light)`. no transform, no scale, no bounce.
- focus: `outline: 2px solid var(--ink); outline-offset: 2px`. no glow, no shadow.
- selected: `background: var(--ink-sheer)` persistent. label gains `font-weight: 600`.
- disabled: `opacity: 0.3`. no strikethrough, no graying — just transparency reduction.
- drag: `cursor: grab` → `cursor: grabbing`. `outline: 1px dashed var(--ink-medium)`.

**motion & feedback**

transitions: `0.3s ease` on background, opacity, transform, font-weight, stroke-width. transitions are present but gentle — they serve clarity, not delight. no spring physics, no bounce, no overshoot.

loading: italic serif text fades in: *"Retrieving..."* then metric values populate one by one with `opacity: 0 → 1` stagger (50ms delay between items).

success: a thin `1px` horizontal rule draws itself across the panel width over 0.4s, then the confirmation text appears below in italic serif: *"Recorded."*

error: the label text shifts to `var(--ink-deep)` and gains `font-weight: 600`. error text appears below in sans: "Value outside expected range." no red, no icons — the genome's single color handles everything through weight and emphasis.

**atmosphere**

background: flat `var(--paper)` (#FDFBF7). no texture, no grain, no gradient. the warmth of the paper tone is the atmosphere — it evokes uncoated stock without simulating it.

structure as atmosphere: the grid-table frames at top and bottom of the viewport create an analytical instrument feeling — the UI is always "framed" by its own metadata. this framing IS the atmosphere.

data visualization: radial/fan layouts (total spread: 180deg, items distributed evenly, pivot at bottom-center), dashed axis lines (`stroke-dasharray: 2 4`), small data-point circles (`r: 4px; stroke-width: 1.5px; fill: var(--paper); stroke: var(--ink)`), concentric grid rings at `opacity: 0.2`. pivot points marked with double-circle (outer stroke, inner filled). all visualization uses only ink color at varying opacities.

no ambient animations. no particle effects. no floating elements. the page is still and precise — atmosphere comes from proportion, typography contrast, and the interrogative voice.

**editorial voice**

button labels: lowercase, often with underline link style — "export data", "view details", "download matrix", "compare features", "reset filters", "toggle view"

headings: italic serif, sentence case or lowercase, often suffixed with question mark — "System?", "Analysis mode?", "Timestamp?", "Action?", "Metrics Key", "Feature Overview?". the question mark is the genome's signature — it positions every section as an inquiry, not a statement.

metadata: dates written out in full: "24th October 2023". versions as "Core Architecture v4.2". statuses in italic parenthetical: *(active)*, *(archived)*, *(in review)*. IDs are terse: "feat-0042".

placeholders: italic serif questions — *"What are you looking for?"*, *"Enter a value..."*, *"Which metric?"*

empty states: italic serif centered — *"No features match the current filter."* followed by sans link: "reset criteria"

error messages: sans, matter-of-fact — "This value could not be resolved." or "The requested feature is unavailable." no exclamation marks, no urgency. errors are observations.

success messages: italic serif — *"Analysis complete."*, *"Feature recorded."*, *"Export ready."* — brief, affirming, lowercase.

**cursor & selection**

- default: `cursor: default`
- interactive elements (links, buttons, blade paths): `cursor: pointer`
- data visualization elements: `cursor: pointer` on hoverable regions
- drag handles: `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--ink); color: var(--paper); }` — inverted ink-on-paper selection

**when to reach for this genome**

Use `editorial_inquiry.rev` when the prompt asks for editorial research, data inquiry, cultural review, comparative analysis, feature audit, thesis explorer, curated evidence board, investigative dashboard, or an analytics UI that should ask questions before stating conclusions.

Reach for it when visual or product cues include blue ink on ivory paper, a strict two-color palette, sharp 1px grid-table frames, serif italic question labels, sans answer values, radial or fan charts, dashed axes, underlined text actions, question-mark metadata, calm analytical transitions, and no pictorial icon system.

Do not use it for bookish reading, manuscript editing, drop caps, footnotes, folio numbers, or all-serif parchment pages; use `manuscript_press.lit`. Do not use it for annual-report infographics, chart posters, risograph metrics, pill charts, or presentation-ready KPI spreads; use `graphic_report.vol`. Do not use it for cool Swiss finance/publication grids, Helvetica, gray fields, and outlined display numerals; use `structured_folio.swiss`. Do not use it for clinical red/black technical documentation or classified manual energy; use `lab_manual.80s`. Do not use it for live newsroom urgency, tickers, breaking banners, or real-time broadcast dashboards; use `breaking_desk.live` or `signal_broadsheet.live`.

It is strongest for calm analytical interfaces where the layout itself behaves like an editorial instrument: every label is a question, every answer is framed, and every chart supports interpretation rather than spectacle.

**anti-patterns — this genome NEVER:**

1. uses color beyond blue ink and paper — no red for errors, no green for success, no secondary accent. all communication is through ink opacity, weight, and style
2. uses border-radius on any element — all corners are sharp, all shapes are rectilinear
3. uses box-shadow or elevation — depth is structural (grid-table nesting), never simulated
4. uses exclamation marks, all-caps, or urgent language — the voice is measured, questioning, observational
5. uses filled/solid background buttons or pill-shaped interactive elements — buttons are text-only or underlined
6. uses icons, emoji, or pictographic elements — all communication is typographic
7. uses decorative textures, gradients, or background images — the paper color is the only atmosphere
8. uses large-scale motion, bounce physics, or attention-seeking animation — transitions are 0.3s ease maximum
9. uses rounded badges, colored tags, or status pills — status is communicated through italic parenthetical text
10. uses sans-serif for questioning/labeling — all questions and category labels must be italic serif; sans is reserved for answers and data values
