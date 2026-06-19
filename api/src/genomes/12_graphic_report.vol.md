---
id: "12"
name: graphic_report.vol
keywords:
  - report
  - dashboard
  - poster
  - editorial
  - graphic
  - volumetric
  - gradient
  - textured
  - infographic
  - data
  - magazine
  - risograph
  - annual report
  - chart
  - statistics
---

### genome 12: `graphic_report.vol`

> identity: editorial data poster. risograph-printed annual report meets volumetric gradient pills on warm matte paper — like a Monocle magazine infographic rendered with tactile, textured 3D shapes.

**surface**

colors:
```
--bg-canvas: #E8E6E1;       /* warm matte paper */
--text-primary: #111111;     /* near-black ink */
--text-secondary: #6B6964;   /* stone gray */
--text-tertiary: #9E9A94;    /* faded stone */
--surface-inset: rgba(0,0,0,0.04);  /* recessed tracks, subtle wells */
--surface-tint: rgba(0,0,0,0.05);   /* grouping backgrounds */
--divider: rgba(0,0,0,0.06);        /* hairline separators */
```

gradient palette — every accent surface uses a gradient, never a flat swatch:
```
--grad-warm: linear-gradient(160deg, #FF3300 0%, #FFB800 100%);     /* red → amber */
--grad-cool: linear-gradient(160deg, #0055FF 0%, #00C853 100%);     /* blue → green */
--grad-dark: linear-gradient(160deg, #222222 0%, #888888 100%);     /* charcoal → mid-gray */
--grad-magenta: linear-gradient(160deg, #FF4488 0%, #8800CC 100%);  /* pink → violet */
--grad-lime: linear-gradient(160deg, #88CC00 0%, #00AA66 100%);     /* lime → teal */
```

texture overlays — applied ON TOP of gradients via stacked `background-image`:
```
--texture-lines-dark: repeating-linear-gradient(-25deg, transparent, transparent 1px, rgba(0,0,0,0.25) 1px, rgba(0,0,0,0.25) 2px);
--texture-lines-light: repeating-linear-gradient(-25deg, transparent, transparent 1px, rgba(255,255,255,0.3) 1px, rgba(255,255,255,0.3) 2px);
```

volumetric shadow — inset highlight/shadow pair that makes pills feel rounded and physical:
```
--volume-shadow: inset 0px 8px 12px -4px rgba(255,255,255,0.5), inset 0px -8px 12px -4px rgba(0,0,0,0.4);
```

composing a textured volumetric surface:
```css
.element {
  background-image: var(--texture-lines-dark), var(--grad-warm);
  box-shadow: var(--volume-shadow);
  border-radius: 999px;
}
```
texture variant selection rule: use `--texture-lines-light` on `--grad-dark` and `--grad-magenta`. use `--texture-lines-dark` on `--grad-warm`, `--grad-cool`, and `--grad-lime`.

typography:
- family: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- display values: `font-size: 3-4rem; font-weight: 400; letter-spacing: -0.05em; line-height: 1`
- section headings: `font-size: 1.25rem; font-weight: 500; letter-spacing: -0.02em`
- page titles: `font-size: 2.5rem; font-weight: 500; letter-spacing: -0.04em; line-height: 1.1`
- body: `font-size: 0.95rem; font-weight: 500`
- labels: `font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; color: var(--text-secondary)`
- numeric values use `font-variant-numeric: tabular-nums`
- hierarchy is achieved through dramatic size contrast (0.65rem labels → 4rem values) rather than weight or color

borders:
- no visible borders on any element. depth is communicated through shadow and gradient, never stroke.
- `border: none` everywhere.

spacing:
- sections: `padding: 2rem 1.5rem`
- between sections: no explicit gap — sections stack with their own padding
- internal component gaps: `1rem` to `1.25rem`
- metric grids: `gap: 2rem 1rem`

**color distribution**

- 60% warm matte paper (`--bg-canvas`) — the dominant ground
- 15% near-black text (`--text-primary`) — headlines and values
- 10% stone gray (`--text-secondary`, `--text-tertiary`) — labels, metadata
- 15% gradient accents distributed across warm/cool/dark/magenta — no single gradient dominates. rotate through all four. each data series or category gets its own gradient.

**component patterns**

buttons:
- pill-shaped: `border-radius: 999px; border: none; padding: 6px 16px; font-size: 0.75rem; font-weight: 500`
- default state: `background: transparent; color: var(--text-secondary)` within a pill-shaped group container
- active/selected: `background: var(--text-primary); color: var(--bg-canvas); box-shadow: 0 2px 8px rgba(0,0,0,0.1)`
- button groups wrap in a container: `background: rgba(0,0,0,0.05); padding: 4px; border-radius: 999px; display: inline-flex`
- primary action buttons: textured volumetric pill with `--grad-warm`, white text
- secondary: `background: var(--text-primary); color: var(--bg-canvas); border-radius: 999px`

inputs:
- pill-shaped: `border-radius: 999px; border: none; background: rgba(0,0,0,0.04); padding: 10px 16px; font-size: 0.85rem`
- focus: `box-shadow: 0 0 0 2px var(--text-primary)`
- label sits above the input as an uppercase label (`.label` style)
- placeholder: `color: var(--text-tertiary)`

cards/panels:
- no border, no shadow, no background. cards are implicit — defined by content grouping and spacing, not containers.
- when a card IS needed for emphasis: `background: rgba(0,0,0,0.03); border-radius: 24px; padding: 1.5rem`
- featured cards use a textured volumetric gradient fill with white text inside

navigation:
- pill-shaped segmented control (filter-group pattern): inline-flex container with pill buttons
- active item: filled dark pill within the group
- tab-style: uppercase labels with active indicator being a small textured volumetric pill dot below

headers:
- large display title (2.5rem, weight 500, tight tracking) on the left
- controls/filters on the right, baseline-aligned
- no background, no border — lives directly on the paper canvas
- decorative abstract shapes (rotated textured volumetric pills) positioned absolutely as hero graphics with `mix-blend-mode: multiply; opacity: 0.85`

footers:
- minimal: a single row of uppercase labels with `var(--text-secondary)` color
- no background, no border — just text on paper

lists:
- items separated by `border-bottom: 1px solid rgba(0,0,0,0.06)`
- last item: no border
- each item: `padding: 1.25rem 0; display: flex; align-items: center; justify-content: space-between`
- left side: a small textured volumetric gradient dot (12px circle) + title text
- right side: numeric value, `font-weight: 600; font-variant-numeric: tabular-nums`

tables:
- no borders between cells — use alternating subtle backgrounds: `rgba(0,0,0,0.02)` on even rows
- header row: uppercase labels (`.label` style)
- cells: `padding: 0.75rem 1rem`
- numeric columns right-aligned, `font-variant-numeric: tabular-nums`

dividers:
- `border-bottom: 1px solid rgba(0,0,0,0.06)` — barely visible, structural only
- never use solid dark dividers

modals/overlays:
- `background: var(--bg-canvas); border-radius: 24px; box-shadow: 0 24px 48px rgba(0,0,0,0.15); padding: 2rem`
- backdrop: `background: rgba(0,0,0,0.3); backdrop-filter: blur(8px)`
- no border

badges/tags:
- textured volumetric pills at small scale: `border-radius: 999px; padding: 4px 12px; font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: white`
- each badge uses a different gradient from the palette
- `box-shadow: var(--volume-shadow)` applied

bar charts:
- horizontal bars in pill-shaped tracks: `height: 32px; background: rgba(0,0,0,0.04); border-radius: 999px`
- fill bars are textured volumetric pills inside the track: `border-radius: 999px; background-image: var(--texture-lines-dark), var(--grad-warm); box-shadow: var(--volume-shadow)`
- value label inside the bar, right-aligned: `color: white; font-size: 0.75rem; font-weight: 600; text-shadow: 0 1px 3px rgba(0,0,0,0.3)`
- each bar uses a different gradient

metric displays:
- large value + small uppercase label stacked vertically
- left border accent: `3px wide, border-radius: 3px` using a textured volumetric gradient as the border's background
- grid layout: `grid-template-columns: 1fr 1fr; gap: 2rem 1rem`

**interaction language**

- hover: `opacity: 0.85; transition: opacity 0.15s ease`. for buttons: `box-shadow: 0 4px 12px rgba(0,0,0,0.12)`. no transforms, no scale.
- active/pressed: `opacity: 0.7; transform: scale(0.97)`. for volumetric elements: inner shadow intensifies.
- focus: `box-shadow: 0 0 0 2px var(--text-primary); outline: none; border-radius: 999px`
- selected: filled pill state with dark background and light text, or volumetric gradient fill
- disabled: `opacity: 0.3`. gradient desaturates. no other change.
- drag: `opacity: 0.6; box-shadow: 0 12px 32px rgba(0,0,0,0.2); transform: scale(1.02)`

**motion & feedback**

- transitions: `0.15s ease` on opacity and box-shadow. `0.2s ease` on transform. keep it subtle — the design is confident and still, not bouncy.
- loading: a single textured volumetric pill pulses opacity `1 → 0.5 → 1` on a `1.5s ease-in-out infinite` loop. no spinners.
- success: the relevant element briefly flashes its gradient brighter (reduce texture overlay opacity to 0 for 300ms, then back).
- error: the element's gradient shifts to `--grad-warm` (red end) and a small shake: `translateX(-2px → 2px → 0)` over 200ms.

**atmosphere**

- the warm paper canvas (#E8E6E1) IS the atmosphere. no overlays, no noise textures on the background.
- decorative abstract shapes: 2-3 large rotated textured volumetric pills positioned absolutely in header/hero areas. `mix-blend-mode: multiply; opacity: 0.85; pointer-events: none; z-index: 1` — they bleed behind content creating a graphic poster composition.
- all content sits at `z-index: 10` above the decorative shapes.
- the diagonal hatching texture (`-25deg` repeating lines) across all gradient surfaces creates a unified tactile feel — like risograph or screen-printed ink.
- volumetric shadows on pills create a sense of physical, rounded objects sitting on the paper.

**editorial voice**

button labels: `1M`, `1Y`, `ALL`, `Export`, `View Details`, `Apply Filter`, `Download Report`, `Compare`
- terse, professional. title case for actions, abbreviations for filters.

headings: title case, short (2-3 words). e.g., `Yield Report`, `Vector Allocation`, `Recent Outputs`, `Distribution Overview`, `Monthly Breakdown`.

metadata: versions as `v2.1`, dates as `Mar 2026` or `Q1 2026`, statuses as uppercase badges (`ACTIVE`, `PENDING`, `CLOSED`). IDs as short alphanumeric codes: `A-1`, `B-4`, `C-2`.

placeholders: `Search vectors...`, `Enter value`, `Filter by type`

empty states: `No data for this period.` — single sentence, neutral, period at end. no emoji, no illustration.

error messages: `Unable to load report data.` or `Calculation failed — check parameters.` — factual, no apology.

success messages: `Report generated.` or `Export complete — 42 records.` — confirmation + count when relevant.

**cursor & selection**

- default: `cursor: default`
- interactive elements: `cursor: pointer`
- inputs: `cursor: text`
- drag targets: `cursor: grab` (active: `cursor: grabbing`)
- `::selection { background: #111111; color: #E8E6E1 }` — inverted paper/ink

**when to reach for this genome**

Use `graphic_report.vol` when the prompt asks for an editorial data poster, infographic dashboard, annual-report spread, statistics summary, chart-led report, magazine-style metrics page, risograph data visual, tactile KPI board, or presentation-ready analytics view where warm paper, large display values, pill charts, hatching textures, and volumetric gradient accents should carry the visual language.

Reach for it when the user wants report content to feel graphic and physical rather than purely institutional: clean matte paper, Inter typography, dramatic metric scale, rounded gradient bars, textured category badges, abstract pill compositions, and data series distinguished by warm/cool/dark/magenta/lime gradients.

Do not use it for dark institutional finance terminals, macro research wires, AUM dashboards, or signal-red market intelligence; use `institutional_wire.macro`. Do not use it for cool Swiss portfolio/finance publications with outlined numerals and strict hairline grids; use `structured_folio.swiss`. Do not use it for question-led cultural analysis, editorial investigations, or blue-ink inquiry frames; use `editorial_inquiry.rev`. Do not use it for premium data-company annual reports with Japanese modernist color-block grids and serif/sans pairing; use `mosaic_signal.data`. Do not use it for live data journalism on highlighter-green newsprint; use `signal_broadsheet.live`. Do not use it for political agitation, propaganda, red wedges, or dramatic constructivist calls to action; use `constructivist_poster.agit`.

It is strongest when the product needs a publishable data artifact that is friendly, graphic, tactile, and presentation-ready: if the prompt emphasizes rigorous institutional severity, live newsroom urgency, political poster rhetoric, or dense financial wire behavior, choose another genome.

**anti-patterns — this genome NEVER:**

1. uses flat solid color fills for accents — every accent surface is a gradient with hatching texture and volumetric shadow
2. uses sharp corners — every shaped element is `border-radius: 999px` (pill) or uses large radii (24px). `border-radius: 0px` is forbidden
3. uses visible borders or strokes — depth comes from gradient + shadow + texture, never from `border: 1px solid`
4. uses monospace or pixel fonts — typography is always Inter or equivalent geometric sans-serif
5. uses dark backgrounds — the canvas is always warm matte paper (#E8E6E1 range). dark mode does not exist
6. uses drop shadows for elevation — the only shadows are the inset volumetric shadows on gradient pills and subtle `box-shadow` on modals
7. uses icons or emoji — data categories are distinguished by gradient color, not iconography
8. uses thin hairline text or light font weights below 400 — minimum weight is 400 for body, 500 for headings
9. uses more than 5 gradient pairs — the palette is constrained to warm/cool/dark/magenta/lime. no new gradients.
10. uses background patterns or noise on the canvas itself — the paper is clean and unadorned; texture only lives on gradient surfaces
