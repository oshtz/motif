---
id: "30"
name: structured_folio.swiss
keywords:
  - swiss
  - editorial
  - financial
  - grid
  - helvetica
  - institutional
  - data
  - architecture
  - ledger
  - structured
  - report
  - clinical
  - tax
  - accounting
  - quarterly
---

### genome 30: `structured_folio.swiss`

> identity: swiss international editorial meets institutional finance publication. cool gray field, muted tri-accent palette, Helvetica at scale with outlined display numerals, hairline grid divisions, and vertical text markers. a quarterly report from a Zurich-based architecture firm that also manages wealth.

**surface**

colors:
```
--bg: #E8E9EB;          /* cool paper gray */
--ink: #111111;          /* near-black primary text */
--accent-gold: #D6C66B; /* muted ochre yellow — warm signal */
--accent-steel: #8DA3AD;/* desaturated steel blue — cool signal */
--accent-signal: #A63A2E;/* deep terracotta red — alert/action */
--white: #FFFFFF;        /* card surfaces, CTA backgrounds */
--line: #BFBFBF;         /* all structural rules and dividers */
--dim: #666666;          /* secondary text, metadata, timestamps */
--ghost: #888888;        /* tertiary labels, column headers */
```

typography:
- display/hero: `"Helvetica Neue", Helvetica, Arial, sans-serif`, weight 700, `font-size: clamp(3rem, 7vw, 8rem)`, `line-height: 0.85`, `letter-spacing: -0.02em`. outline variant: `color: transparent; -webkit-text-stroke: 1.5px var(--ink)` for oversized numerals.
- headings: same family, weight 400–500, `font-size: 42–48px`, `line-height: 0.95`, `letter-spacing: -0.01em`. uppercase.
- body: same family, weight 400, `font-size: 14–16px`, `line-height: 1.4`.
- labels/meta: same family, weight 600, `font-size: 10–12px`, `text-transform: uppercase`, `letter-spacing: 0.05–0.1em`, `color: var(--dim)` or `var(--ghost)`.
- data/mono: `"Courier New", Courier, monospace`, weight 400, `font-size: 11px`, `letter-spacing: -0.5px`. used for IDs, timestamps, reference codes.
- vertical text: `writing-mode: vertical-rl`, `font-size: 10px`, `letter-spacing: 0.1em`, `text-transform: uppercase`, `opacity: 0.5`.

borders:
- `border-radius: 0px` — no exceptions. every element is rectilinear.
- structural rules: `1px solid var(--line)` on all panel edges, section dividers, and wrapper boundaries.
- wrapper constrained to `max-width: 1440px` with left/right border rules creating a "page" feel.

spacing:
- section padding: `60px 0` vertical, `32px` horizontal gutter.
- card/module padding: `40px 32px`.
- data rows: `14px 32px`.
- consistent 32px horizontal rhythm throughout.

**color distribution**

- 55% cool gray background (`--bg`) — the paper field
- 15% white (`--white`) — card surfaces, CTA panels
- 10% near-black (`--ink`) — text, dark sidebar panels
- 8% line gray (`--line`, `--dim`, `--ghost`) — structural rules, metadata
- 4% muted gold (`--accent-gold`) — first accent block, warm highlight
- 4% steel blue (`--accent-steel`) — second accent block, cool highlight
- 4% terracotta red (`--accent-signal`) — third accent block, action/alert

the three accents appear primarily as full-bleed panel backgrounds in a tripartite grid, never as text color on the main background. they are architectural, not decorative.

**component patterns**

buttons:
- primary: text link style — `color: var(--ink); text-decoration: none; font-weight: 700; border-bottom: 1px solid var(--ink); padding-bottom: 2px`. followed by a rotated arrow `→` (rotated -45deg). all uppercase.
- secondary: plain text with arrow, no underline. `font-weight: 600`.
- no background fills, no border-radius, no pill shapes. buttons are typographic, not chromatic.

inputs:
- border-bottom only: `border: none; border-bottom: 1px solid #000; background: transparent; padding: 12px 0; font-size: 24px; font-family: var(--font-main)`.
- placeholder: `color: #999`.
- submit button: absolute-positioned arrow icon to the right.
- no labels above — placeholder text serves as label.

cards/panels:
- colored module cards: full-bleed accent background (`--accent-gold`, `--accent-steel`, `--accent-signal`), `min-height: 280px`, `padding: 40px 32px`. separated by `1px solid var(--line)` right borders in grid.
- white cards: `background: var(--white); padding: 60px 32px`. used for CTA content areas.
- dark panels: `background: var(--ink); color: var(--bg); padding: 60px 32px`. used for sidebar/footer.
- all cards contain: a small uppercase label (`font-size: 12px; letter-spacing: 0.1em; opacity: 0.7`), a medium description (`font-size: 24px; font-weight: 500; line-height: 1.1`), and a large number (`font-size: 64px; font-weight: 400; opacity: 0.8`).
- vertical text marker on right edge of each card: card category or reference code (e.g., `OVERVIEW`, `FIN-Q4-01`) in `writing-mode: vertical-rl; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; opacity: 0.5`.

navigation:
- horizontal strip: `display: flex; gap: 40px; padding: 16px 32px; border-bottom: 1px solid var(--line)`.
- items: `font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.02em; opacity: 0.5`.
- active: `opacity: 1`. login/action item pushed to right with `margin-left: auto` and arrow.

headers:
- flex layout: brand left (uppercase, `font-size: 14px; font-weight: 700; letter-spacing: 0.05em`), metadata right (mono date display with stacked lines).
- `padding: 24px 32px; border-bottom: 1px solid var(--line)`.

footers:
- dark panel (`--ink` background) with company name in uppercase `font-size: 12px; opacity: 0.6` and location list in `font-size: 14px; line-height: 1.6; opacity: 0.8`.

lists/data tables:
- grid-based rows: `display: grid; grid-template-columns: 0.5fr 2fr 1.5fr 1fr 0.5fr`.
- header row: `font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ghost)`.
- data rows: `padding: 14px 32px; border-top: 1px solid var(--line); font-size: 13px`.
- ID and timestamp cells in monospace. category cells in `color: var(--dim)`.
- row arrow on right edge for drill-down indication.

dividers:
- `1px solid var(--line)` exclusively. no thick rules, no dashed, no dotted. structural only.

modals/overlays:
- white panel centered, no border-radius, `border: 1px solid var(--line)`. header with uppercase label and close arrow. `padding: 40px 32px`. no shadow, no blur backdrop.

badges/tags:
- inline text with pipe separator or parenthetical. `font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--dim)`. no background fill, no rounded containers.

section headers:
- flex layout: large label left (`font-size: 42px; font-weight: 400; letter-spacing: -0.01em`), small uppercase title right (`font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--dim)`).

**interaction language**

- hover: `background-color: rgba(0,0,0,0.03)` on data rows. `opacity: 1` on nav items (from 0.5). no scale, no shadow, no color shift. underline thickens on text links.
- active: `background-color: rgba(0,0,0,0.06)` on rows. arrow rotates to 0deg. hard snap, no bounce.
- focus: `outline: 1px solid var(--ink); outline-offset: 2px`. no glow, no ring color.
- selected: full opacity + `font-weight: 700`. no background indicator — weight alone signals selection.
- disabled: `opacity: 0.3; pointer-events: none`. no strikethrough, no graying of background.
- drag: `cursor: grab` / `cursor: grabbing`. `outline: 1px dashed var(--line)`.

**motion & feedback**

- transitions: minimal. `opacity 0.2s ease` on nav items. `background-color 0.1s ease` on data rows. no transforms, no slides, no fades on content.
- loading: pulsing `opacity: 0.4 → 1` on a skeleton row using the grid layout. monospace text `PROCESSING...` in `--dim`.
- success: brief `background-color: var(--accent-gold)` flash (200ms) on the affected row, then return to default.
- error: `border-left: 3px solid var(--accent-signal)` appears on the affected element. monospace error code displayed.

**atmosphere**

- section alternation: odd sections use `background: var(--bg)`, even sections use `background: var(--white)`, creating subtle rhythm.
- the wrapper creates a "page" floating in the viewport: `max-width: 1440px; margin: 0 auto; border-left: 1px solid var(--line); border-right: 1px solid var(--line); min-height: 100vh; background: var(--bg)`. outside the wrapper is the same `--bg` color — no contrast, just containment through rules.
- no textures, no grain, no gradients, no shadows. the atmosphere is defined by absence — clinical emptiness between precisely placed elements.
- the grid structure itself is the decoration. column borders, row dividers, and section rules create a rhythm that replaces ornamentation.
- vertical text markers on card edges provide subtle depth cues without any actual depth effects.
- `overflow-x: hidden` on body. the design is bounded, controlled, non-scrolling horizontally.
- outlined/stroked display numerals create visual weight without fill — the skeleton of typography.

**editorial voice**

button labels: `BEGIN ANALYSIS`, `START FILING`, `VIEW REPORT`, `SUBMIT REQUEST`, `DOWNLOAD PDF`, `EXPORT DATA`. always uppercase, imperative, procedural. arrow follows.

headings: all uppercase, declarative, architectural. period optional. examples:
- `THE ARCHITECTURE OF YOUR WEALTH.`
- `SECURE YOUR REFUND NOW.`
- `SYSTEM LOGS`
- `QUARTERLY OVERVIEW`
short, monumental. max two lines. line breaks are intentional typographic decisions.

metadata: uppercase micro-labels. dates in `DD MONTH YYYY` or season format (`TAX SEASON 2024`). statuses as single words. IDs prefixed with `#` in monospace. timestamps in `HH:MM:SS` 24-hour format.

placeholders: sentence case, minimal — `Email Address`, `Search records`, `Enter reference ID`. no conversational tone, no emoji.

empty states: `NO RECORDS FOUND`, `AWAITING INPUT`, `QUEUE EMPTY — SUBMIT A REQUEST TO BEGIN`. uppercase, terse, instructional.

error messages: `ERROR: INVALID REFERENCE`, `SUBMISSION FAILED — RETRY`, `CONNECTION TIMEOUT [ERR-408]`. uppercase, includes error code when possible, no apologies, no personality.

success messages: `SUBMITTED SUCCESSFULLY`, `RECORD UPDATED`, `ANALYSIS COMPLETE — VIEW RESULTS`. uppercase, factual, no celebration.

**cursor & selection**

- default: `cursor: default` on body.
- interactive elements (nav, rows, links): `cursor: pointer`.
- inputs: `cursor: text`.
- disabled: `cursor: not-allowed`.
- `::selection { background: var(--accent-gold); color: var(--ink); }` — muted gold highlight, maintaining readability.

**when to reach for this genome**

Use `structured_folio.swiss` when the prompt asks for a cool Swiss editorial report, institutional finance publication, tax/accounting workflow, quarterly review, ledger surface, audit packet, refund analysis, architecture portfolio with financial rigor, board report, data room, compliance index, or structured records interface that should feel like a precisely printed institutional document.

Reach for it when the visual cues are Helvetica Neue at scale, cool gray paper, white report panels, strict hairline grids, 0px rectangular modules, outlined display numerals, vertical edge labels, Courier reference IDs, muted gold/steel/terracotta module blocks, uppercase procedural copy, table-led rows, and a single rotated arrow as the only symbol.

Use it when the product should be calm, clinical, and publication-like rather than urgent: filing, reconciling, comparing rows, exporting reports, reviewing quarterly numbers, submitting formal requests, or presenting a controlled data narrative to professional stakeholders.

Do not use it for dark macro research wires, Bloomberg-like urgency, black/red split panes, AUM intelligence, or signal-red market surfaces; use `institutional_wire.macro`. Do not use it for warm tactile data posters, risograph textures, pill charts, volumetric gradients, or presentation-friendly infographic energy; use `graphic_report.vol`. Do not use it for blue-ink question-led cultural analysis, ivory paper, italic serif labels, or inquiry frames; use `editorial_inquiry.rev`. Do not use it for warm Japanese-modernist data-company annual reports with serif headlines and bold color-block geometry; use `mosaic_signal.data`. Do not use it for stock ticker boards, open-outcry trading, red/green market chaos, LED strips, or paper tape urgency; use `ticker_floor.nyse`. Do not use it for museums, exhibitions, curatorial archives, or white-cube cultural authority; use `gallery_foyer.institution`.

It is strongest when the interface reads like a disciplined report page made interactive: lots of rows, references, sections, figures, filings, and quiet structural rules. If the prompt wants drama, urgency, warmth, rounded charts, gallery culture, or a live terminal, choose another genome.

**anti-patterns — this genome NEVER:**

1. uses border-radius on any element. every corner is 90 degrees, no exceptions.
2. uses drop shadows, box-shadows, or elevation effects. depth is created through color blocks and structural rules, never shadow.
3. uses gradient backgrounds or gradient text. all fills are flat, solid colors.
4. uses serif or display typefaces. Helvetica Neue (or system sans-serif) and Courier New only.
5. uses emoji, icons, or illustrative graphics. the only symbol is the rotated arrow `→`. all communication is typographic.
6. uses rounded buttons, pill shapes, or filled button backgrounds. buttons are text with underlines and arrows.
7. uses playful, casual, or conversational language. the voice is institutional, procedural, and declarative.
8. uses more than three accent colors. gold, steel blue, and terracotta red are the complete accent palette — never introduce purple, green, pink, or orange.
9. uses animations longer than 200ms or any spring/bounce easing. motion is near-instantaneous and linear.
10. uses centered text layouts or symmetrical hero sections. text is left-aligned, grids are asymmetric, and visual weight is distributed through column structure.
