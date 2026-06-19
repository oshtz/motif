---
id: "40"
name: field_journal.expedition
keywords:
  - naturalist
  - field-journal
  - botanical
  - specimen
  - graph-paper
  - handwritten
  - pencil
  - pressed-flower
  - observation
  - taxonomy
---

### genome 40: `field_journal.expedition`

> identity: naturalist's field notebook. pencil sketches on cream grid paper, specimen labels in careful handwriting, hand-numbered margins, botanical plate layouts. science done by hand in the field — warm, human, observational. Darwin's notebooks, Audubon's field plates, a botanist's pressed-flower journal. no electricity, no screens, no sterile labs.

**surface**
- colors: `--bg: #F5F1E3; --bg-deep: #EDE8D6; --fg: #4A4A4A; --fg-dim: rgba(74, 74, 74, 0.45); --grid: #C5D5E8; --accent-green: #7A8B6F; --accent-mauve: #9B7A8F; --accent-brown: #6B5344; --danger: #A14B4B; --success: #5C7A52; --warn: #8B7432;`
- typography: three-stack system — the most of any genome. annotations/body: `'Kalam', cursive` — used for all running text, margin notes, observational prose. `font-weight: 400; font-size: 0.9rem–1.1rem; line-height: 1.7`. specimen data/coordinates: `'JetBrains Mono', monospace` — used for specimen IDs, GPS coordinates, catalog numbers, dates. `font-size: 0.7rem–0.8rem; letter-spacing: 0.03em; line-height: 1.5`. section headers: `'Libre Baskerville', serif` — used for plate titles, section headers, genus names. `font-variant: small-caps; font-size: 0.85rem–1.4rem; letter-spacing: 0.08em; line-height: 1.3`.
- borders: no conventional borders. graph-paper grid lines serve as the structural lattice: `background-image: repeating-linear-gradient(0deg, var(--grid) 0 1px, transparent 1px 20px), repeating-linear-gradient(90deg, var(--grid) 0 1px, transparent 1px 20px); background-size: 20px 20px`. cards use torn/deckled edges via `clip-path: polygon(...)` with slight irregular offsets. `border-radius: 0` on everything — no rounded corners anywhere.
- spacing: `padding: 2.5rem` (stored as `--pad`). generous margins for annotations. plate-style layouts with one specimen per card. `gap: 2rem` between cards. margins feel hand-measured, not pixel-perfect.

**color distribution**
- 60% aged cream backgrounds (`--bg: #F5F1E3`, `--bg-deep: #EDE8D6`) — the paper substrate. warm, fibrous, organic.
- 22% pencil graphite (`--fg: #4A4A4A`) — all primary text, sketched borders, handwritten annotations.
- 8% grid-line blue (`--grid: #C5D5E8`) — the persistent graph-paper grid. always visible through all content, never hidden.
- 5% pressed-flower green (`--accent-green: #7A8B6F`) — botanical specimen highlights, section markers, collected-status indicators.
- 3% dried-specimen mauve (`--accent-mauve: #9B7A8F`) — secondary accents, flower petal references, taxonomy badges.
- 2% faded ink brown (`--accent-brown: #6B5344`) — tertiary accents, date stamps, location annotations, aged handwriting.

**component patterns**
- buttons: two types. (1) field-label buttons: `border: 1px dashed var(--fg-dim); background: transparent; color: var(--fg); padding: 0.4rem 1rem; font-family: var(--font-hand); font-size: 0.85rem; clip-path: polygon(1% 0%, 99% 2%, 100% 98%, 0% 100%)` — slightly irregular edges like cut paper. (2) inline text actions: no border, no background, `text-decoration: underline; text-decoration-style: wavy; text-underline-offset: 3px; color: var(--accent-brown)`.
- inputs: `background: transparent; border: none; border-bottom: 1px solid var(--fg-dim); font-family: var(--font-hand); font-size: 0.95rem; color: var(--fg); padding: 0.4rem 0; border-bottom-style: dashed`. focus: `border-bottom-color: var(--fg); border-bottom-style: solid`. placeholder text in `var(--fg-dim)` with italic.
- cards/panels: specimen plates. `background: var(--bg); clip-path: polygon(0% 1%, 2% 0%, 98% 0%, 100% 2%, 99% 98%, 100% 100%, 1% 99%, 0% 97%)` for deckled edges. no box-shadow. each card is a single specimen — illustration area top, metadata below. thin dashed divider (`1px dashed var(--fg-dim)`) separates illustration from data.
- navigation: horizontal row of small-caps serif labels separated by centered dots (`·`). idle color: `var(--fg-dim)`. active: `color: var(--fg); border-bottom: 1px solid var(--accent-brown)`. `font-family: var(--font-serif); font-variant: small-caps; font-size: 0.8rem; letter-spacing: 0.06em`.
- headers: single-row flex layout. left: journal title in serif small-caps with `font-size: 1.1rem`. center: navigation. right: date-location stamp in monospace (`font-size: 0.7rem; color: var(--accent-brown)`). `border-bottom: 1px dashed var(--fg-dim); padding: 1.5rem var(--pad)`.
- footers: single-row flex, `justify-content: space-between`. three elements: page number in handwriting font (`p. 47`), collection reference in monospace (`REF: FJ-1847-0312`), coordinates in monospace (`LAT 0°49'S — LONG 91°07'W`). `font-size: 0.7rem; color: var(--fg-dim); border-top: 1px dashed var(--fg-dim); padding: 0.8rem var(--pad)`.
- lists: hand-numbered with parenthetical numbers in handwriting font: `1)`, `2)`, `3)`. `font-family: var(--font-hand); line-height: 1.8; color: var(--fg)`. sub-items indented with `margin-left: 1.5rem` and prefixed with an em dash (`—`).
- tables: two-column metadata grid. `display: grid; grid-template-columns: auto 1fr; gap: 0.6rem 1.5rem`. label column: `font-family: var(--font-serif); font-variant: small-caps; font-size: 0.75rem; color: var(--accent-brown)`. value column: `font-family: var(--font-hand); color: var(--fg)`. rows separated by faint dashed lines (`border-bottom: 1px dashed var(--grid)`).
- dividers: `1px dashed var(--fg-dim)`. horizontal only. styled as hand-drawn separators. occasionally doubled (`border-bottom: 1px dashed var(--fg-dim); box-shadow: 0 2px 0 0 var(--bg), 0 3px 0 0 var(--fg-dim)`) for section breaks.
- modals: specimen detail overlay. `background: var(--bg); clip-path` deckled edge treatment. overlay backdrop is `rgba(74, 74, 74, 0.15)` — like tracing paper laid over the journal. header in serif small-caps, body in handwriting, data in monospace.
- badges/tags: rectangular specimen labels. `font-family: var(--font-mono); font-size: 0.65rem; color: var(--accent-brown); border: 1px dashed var(--fg-dim); padding: 0.15rem 0.5rem; background: var(--bg-deep)`. taxonomy badges use `color: var(--accent-green)` for kingdom/phylum classification.
- hero display: `font-family: var(--font-serif); font-variant: small-caps; font-size: clamp(1.8rem, 4vw, 3.5rem); line-height: 1.1; letter-spacing: 0.06em; color: var(--fg)`. used for plate titles and genus names. always sentence case. a subtitle line follows in handwriting font at `font-size: 1rem; color: var(--accent-brown); font-style: italic` for common names or collection notes.

**interaction language**
- hover: NONE. no hover state changes on any element. the notebook does not respond to a cursor — it is a physical object. `cursor: default` on all interactive elements except links/buttons which use `cursor: pointer`.
- active/pressed: field-label buttons gain `background: var(--bg-deep)`. inline text actions gain `color: var(--fg)`. no other visual feedback.
- focus: `outline: 1px dashed var(--fg); outline-offset: 3px`. dashed, not solid — consistent with the hand-drawn language.
- selected: `::selection { background: var(--accent-green); color: var(--bg); opacity: 0.7; }` — like a pressed-leaf highlight.
- disabled: `color: var(--fg-dim); pointer-events: none; opacity: 0.5`. faded pencil, like erased writing.
- drag: not used. if absolutely needed: `cursor: grab` → `cursor: grabbing`, element gains `outline: 1px dashed var(--fg-dim)`.

**motion & feedback**
- transitions: NONE. `transition: none` on all elements. zero animation, zero motion. every state change is instantaneous. the notebook is a static physical object — pages do not animate, pencil marks do not fade in.
- loading: static text only. `Cataloguing specimen...` or `Consulting field index...` displayed in handwriting font. no spinner, no progress bar, no blinking. a simple text string, as if the naturalist wrote a note and walked away.
- success: inline text update. `Specimen catalogued.` or `Entry recorded on p. 48.` in handwriting font with `color: var(--accent-green)`. no toast, no animation.
- error: inline text. `Specimen not found in index.` or `Classification incomplete — see addendum.` in handwriting font with `color: var(--danger)`. clinical but human — a pencil note in the margin.
- page enter: instant. no entrance animation. content appears as if the page was already open.

**atmosphere**
- graph-paper grid: the defining visual. `background-image: repeating-linear-gradient(...)` on the `body` element, always visible through all content layers. grid lines are `1px var(--grid)` at `20px` intervals. the grid is the paper — everything sits on top of it.
- plate-style layouts: `display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; padding: var(--pad)`. each grid cell is one specimen card. cards do NOT fill viewport height — the page scrolls naturally like turning journal pages.
- deckled/torn card edges: `clip-path: polygon(...)` with slightly irregular coordinates on every card. no two cards should feel identical in their edge treatment. variations of 1-3% offset on polygon points.
- margin annotations: pseudo-elements (`::before`, `::after`) on cards for hand-numbered labels. `content: "Plate VII"; font-family: var(--font-hand); font-size: 0.75rem; color: var(--fg-dim); position: absolute; top: -1.2rem; left: 0.5rem`.
- no digital effects: no gradients, no glow, no `filter`, no `backdrop-filter`, no `box-shadow`, no `text-shadow`. the only visual texture is the graph-paper grid and the clip-path edges. warmth comes from the cream paper and the handwriting typeface, not from effects.
- scrollable: `overflow: auto`. the journal is a long document — pages and pages of field notes. NOT viewport-locked (unlike biosequence_lab.gen). scrollbar styled minimally: `scrollbar-width: thin; scrollbar-color: var(--fg-dim) transparent`.

**editorial voice**
- button labels: observational, gentle imperative. `Record Specimen`, `Add Field Note`, `Mark Location`, `Press Sample`, `Cross-reference`, `Append Sketch`, `Close Entry`, `Turn Page`.
- headings: serif small-caps, declarative, often with Latin. `Plate VII — Geospiza fortis`, `Field Observations, 12 March`, `Specimens Collected at Isla Isabela`, `Notes on Bilateral Symmetry`. no periods on plate titles.
- metadata: monospace, structured but human. `COLLECTED: 12 Mar 1847 — 14:20`, `LOC: Galápagos, Isla Isabela — coastal scrub`, `SPECIMEN: GF-1847-032`, `ALTITUDE: 340m asl`, `WEATHER: overcast, light drizzle`.
- placeholders: `Describe specimen appearance...`, `Note habitat and conditions...`, `Enter collector name...`, `Search field index...`.
- empty states: `No specimens recorded for this location.`, `Field notes for this date are blank.`, `This plate has not yet been illustrated.`, `Awaiting classification — consult reference flora.`.
- error messages: `The requested specimen could not be located in the current field index. Verify catalog number and collection date.` — formal but human, as if written by a careful naturalist addressing a colleague.
- success messages: `Specimen successfully catalogued under Geospiza fortis.`, `Field note appended to entry for 12 March.`, `Location marked on survey map.`.

**cursor & selection**
- cursor: `cursor: default` globally. the user is reading a physical notebook. buttons and links override to `cursor: pointer`. no crosshair, no custom cursors — this is not a digital instrument.
- text selection: `::selection { background: rgba(122, 139, 111, 0.35); color: var(--fg); }` — muted green, like a pressed leaf laid over the text.

**anti-patterns — this genome NEVER:**
- uses any animation, transition, or motion property. `transition: none` everywhere. no hover color changes, no fade-ins, no transforms, no keyframe animations. this is the only genome with absolutely zero motion.
- uses box-shadow, text-shadow, or drop-shadow filters. the notebook is flat paper under natural light — no digital depth cues.
- uses border-radius on any element. all corners are square or irregularly clipped via clip-path. no pills, no rounded cards, no soft corners.
- uses saturated or neon colors. the palette is entirely muted and warm — aged paper, pencil graphite, dried botanical specimens. nothing glows.
- uses viewport-locking (`height: 100vh; overflow: hidden`). the journal scrolls freely — it is a long document, not a mounted panel.
- uses dark backgrounds or dark mode. the substrate is always warm cream paper. text is always dark pencil on light paper.
- uses sans-serif typefaces. all text uses one of three families: handwriting (Kalam), monospace (JetBrains Mono), or serif (Libre Baskerville). no Helvetica, no Inter, no system sans-serif.
- uses icons, emoji, or SVG illustrations. visual interest comes from typography, the graph-paper grid, and clip-path edges. imagery in the real genome would be pencil sketches and pressed specimens — the UI itself uses no pictographic elements.
- uses gradients, noise textures, or background images (other than the CSS grid pattern). the paper is plain cream with blue grid lines. no grunge, no grain, no photographic textures.
- uses institutional herbarium mounting corners, formal accession-sheet austerity, or pure archive-card layouts as the main identity. those belong to `herbarium_plate.specimen`.
- uses electronic lab monitors, green-on-green telemetry, crosshairs, ASCII DNA, or viewport-locked instrument panels. those belong to `biosequence_lab.gen`.
- uses commercial seed-packet ornament, retail gardening language, or packaging badges. this is a working notebook, not a product label.
- uses perfect CAD alignment, ruler-straight diagram labels, or exact blueprint dimensioning. the grid is hand-used graph paper, not engineering drafting paper.
- uses modals, floating command palettes, sticky marketing nav, or app-store onboarding. the notebook should feel like pages, plates, margins, and field entries.
- hides handwritten notes behind hover. marginalia, page numbers, and observation snippets should be visible at rest.
- uses uppercase text-transform on body text. only monospace specimen data may be uppercase. handwriting and serif text are always sentence case or small-caps — never shouting.

**when to reach for this genome**

When the request is for a naturalist's portfolio, a citizen-science app, a botanical/biological cataloging interface, a personal journaling tool with hand-feel, or any artifact that should feel like a Darwin notebook page. Reach for it when the user wants explicit hand-drawn warmth and the static stillness of a physical journal — and when the request explicitly does NOT want any animation (this is the zero-motion genome).

**page archetype guidance**

- landing page: scrollable journal-page layout, plate-style hero with a hand-numbered "Plate I" margin label, specimen-card grid below with deckled clip-path edges, footer with GPS coordinates and page number in handwriting.
- portfolio: a grid of "specimen plates" — each project rendered as a card with illustration area on top, handwritten observation notes in the middle, monospace metadata at the bottom (`COLLECTED: DD MMM YYYY — LAT, LON`).
- catalog/index: numbered list of entries in handwriting font (`1)`, `2)`, `3)`), each entry a row with serif small-caps Latin name, handwriting common name, and monospace catalog ID.
- detail view: full-page specimen plate with margin annotations via `::before` pseudo-elements, hand-numbered references, dashed-line dividers between observation sections.

**signature techniques**

- graph-paper grid background: `repeating-linear-gradient(0deg, var(--grid) 0 1px, transparent 1px 20px), repeating-linear-gradient(90deg, var(--grid) 0 1px, transparent 1px 20px); background-size: 20px 20px` on body — always visible through all content. The grid IS the paper.
- deckled clip-path edges: every card uses `clip-path: polygon(0% 1%, 2% 0%, 98% 0%, 100% 2%, 99% 98%, 100% 100%, 1% 99%, 0% 97%)` with small randomized offsets — no two cards have identical torn edges.
- three-typeface system: Kalam (handwriting) for body, JetBrains Mono (monospace) for data, Libre Baskerville small-caps for headers. Each type plays a specific role; mixing roles breaks the genome.
- ZERO motion: `transition: none` on every element. No hover state changes, no animations, no entrance reveals. The notebook is a static physical object — this is the ONE genome with absolutely zero motion.
- margin annotations via pseudo-elements: `::before` content like `"Plate VII"` positioned `top: -1.2rem; left: 0.5rem` — the hand-numbered margin labels of a real field journal.
- wavy underlines: inline text actions use `text-decoration-style: wavy` — the hand-drawn line of a pencil underline, not a digital ruler.
- dashed-line styling everywhere: input bottom borders, dividers, focus outlines, button borders — all dashed, evoking the broken line of hand-drawn pencil work.
- pressed-leaf selection: `::selection { background: rgba(122,139,111,0.35); color: var(--fg); }` — a muted green wash over selected text, like a botanical specimen pressed flat.

**production expansion details**

Core CSS token set should preserve paper, pencil, and field-note roles:

```css
:root {
  --journal-paper: #F5F1E3;
  --journal-paper-deep: #EDE8D6;
  --journal-grid: #C5D5E8;
  --journal-grid-faint: rgba(197, 213, 232, 0.42);
  --pencil: #4A4A4A;
  --pencil-dim: rgba(74, 74, 74, 0.45);
  --pencil-faint: rgba(74, 74, 74, 0.22);
  --pressed-green: #7A8B6F;
  --pressed-mauve: #9B7A8F;
  --ink-brown: #6B5344;
  --field-red: #A14B4B;
}
```

Production layout rules:
- Body background is always the graph-paper grid: `background-color: var(--journal-paper); background-image: repeating-linear-gradient(...)`.
- Content width should feel like pages: `max-width: 1180px; margin: 0 auto; padding: clamp(24px, 4vw, 48px)`.
- Use scrollable pages and plates, not `100vh` dashboards. Long pages are correct.
- Cards should sit directly on the grid. Do not wrap card grids in an additional floating panel.
- Use irregular `clip-path` only on individual specimen cards, labels, or inserts. Do not apply it to the whole page shell.
- Layout can be loose but not sloppy: align major edges to the 20px grid while allowing small 1-3% paper-edge irregularities.
- Responsive layouts should keep the page metaphor: one-column plates on mobile, two or three-column specimen grids on wider screens.

Expanded component recipes:
- Field entry card: header with serif small-caps plate title, sketch/observation area, dashed divider, handwritten note, monospace metadata footer.
- Observation note: handwriting font, `line-height: 1.8`, max width `58ch`, optional left margin reference like `obs. 04`.
- Specimen sketch well: empty cream area with dashed lower caption line; if imagery is needed, use pencil-sketch or pressed-sample imagery with muted colors, never glossy photos.
- Location strip: monospace row with `LOC`, `LAT`, `LONG`, `ALT`, `WEATHER`; sepia-brown values allowed for dates and coordinates.
- Page tab: small clipped label at page edge with handwriting `p. 47` or serif small-caps `Plate VII`.
- Checklist: hand-numbered rows with graphite check text; avoid icon-only checkboxes.
- Inline action: wavy underline in `--accent-brown`; no button fill unless it is a paper label.
- Field-label button: dashed outline, transparent fill, handwritten label, clipped edge; active state only changes to `--bg-deep`.
- Taxonomy tag: monospace label for `FAMILY`, `GENUS`, `SPECIES`; green for botanical classification and mauve for flower/phenology markers.
- Addendum block: dashed top border, heading `Addendum` in serif small-caps, body in handwriting, date in monospace.
- Map reference block: use a simple grid-coordinate table (`QUAD: B4`, `TRANSECT: 03`) rather than map pins or icons.

State rules:
- `DRAFT NOTE`: pencil-dim text, dashed lower rule, no badge fill.
- `RECORDED`: inline success note in pressed green, e.g. `Entry recorded on p. 48.`
- `INCOMPLETE CLASSIFICATION`: margin note in field red, with a human instruction such as `consult reference flora`.
- `SELECTED PLATE`: pressed-leaf selection wash and a darker dashed divider; do not animate or lift the card.
- `EMPTY PLATE`: show the grid and a short handwritten line, not a placeholder icon.
- `DISABLED`: faded pencil at 50% opacity; avoid `not-allowed` cursor because the page is a document.
- `EDITING`: input underline changes from dashed to solid graphite; no glow or focus halo.
- `ERROR`: appears as a margin correction, not a toast. keep it close to the relevant note or catalog number.

Motion and feedback refinements:
- Global rule: `* { transition: none !important; animation: none !important; }` unless product code cannot safely enforce it globally.
- Loading messages are static handwritten notes: `Consulting field index...`, `Checking transect notes...`, `Cataloguing specimen...`.
- No hover effects. If a browser demands an affordance, use cursor only; do not change color on hover.
- Success and error feedback are text replacements in place.
- Page navigation does not slide or flip. The next page simply renders.
- Scroll behavior should be native, not smooth-scrolled.

Atmosphere details:
- Keep graph lines visible through whitespace and around cards; avoid solid full-width bands that erase the paper.
- Card edges can vary between three polygon presets, but should remain subtle. Extreme torn-paper silhouettes become craft-store decoration.
- Margin annotations can be pseudo-elements: `Plate VII`, `obs. 04`, `transect B`, `p. 47`.
- Dashed rules should feel hand-drawn but remain readable: `1px dashed var(--pencil-dim)` or `1px dashed var(--grid)`.
- Use cream and graphite first. Accent green/mauve/brown should appear as field marks, not as theme blocks.
- Avoid stains, coffee rings, heavy grain, tape shadows, or scrapbook effects. The notebook is careful, not messy.

Editorial examples for generated UIs:
- Plate heading: `Plate VII - Geospiza fortis` or `Field Observations, 12 March`.
- Location metadata: `LOC: Galapagos, Isla Isabela - coastal scrub`.
- Weather note: `WEATHER: overcast, light drizzle; wind from south.`
- Observation copy: `Bill depth appears broader in mature males; compare with p. 31.`
- Empty state: `This plate has not yet been illustrated.`
- Error: `Classification incomplete - see addendum.`
- Success: `Field note appended to entry for 12 March.`
- Button labels: `Record Specimen`, `Add Field Note`, `Append Sketch`, `Turn Page`.

Cursor and selection refinements:
- Global cursor remains `default`; paper does not invite interaction everywhere.
- Links and paper-label buttons use `pointer`; inputs use `text`; drag only appears for explicit reorderable notes.
- Do not use crosshair cursors, pen cursors, leaf cursors, or custom SVG cursors.
- Text selection uses muted green at 35% opacity; selected cards can echo that wash with a dashed outline.
- Focus outlines are dashed graphite with `outline-offset: 3px`; never use glowing rings.
- Avoid hover-only marginalia. Cursor states cannot be the only sign that a note exists.

Nearby genome boundaries:
- Use `herbarium_plate.specimen` for institutional botanical archives, mounted specimens, accession slips, India ink, and formal taxonomy sheets. Use this genome for field observations, page margins, graph paper, and handwritten notes.
- Use `biosequence_lab.gen` for live green lab panels, sequencing telemetry, crosshairs, and organism monitoring. Use this genome for non-electronic field science and human observation.
- Use `seed_packet.plot` for gardening commerce, packet labels, planting instructions, and aspirational horticulture. Use this genome for research notes and specimen records.
- Use `apothecary_label.rx` for medicinal labels, tinctures, dosage cards, and pharmacy packaging. Use this genome for naturalist observation, not prescription or remedy UI.
- Use `contour_survey.topo` for maps, contour lines, route planning, and geospatial dashboards. This genome may include coordinates, but the page is a notebook, not a map system.

Quality bar for generated screens:
- Visible 20px graph-paper grid on the body.
- At least one handwritten observation and one monospace metadata strip.
- At least one serif small-caps plate or section title.
- Dashed rules, clipped paper edges, and margin annotations used with restraint.
- Zero transitions, zero animation, zero shadows, zero glow.
- Warm cream paper, graphite text, and muted botanical accents dominate.
