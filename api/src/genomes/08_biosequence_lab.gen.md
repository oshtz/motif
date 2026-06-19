---
id: "08"
name: biosequence_lab.gen
keywords:
  - biotech
  - genetics
  - laboratory
  - organism
  - dna
  - sequencing
  - botanical
  - surveillance
  - scientific
  - specimen
  - bioinformatics
  - CRISPR
  - genome
  - medical
---

### genome 08: `biosequence_lab.gen`

> identity: genetic research facility monitoring interface. deep chlorophyll green on pale sage readouts. dual-typography tension between elegant serif specimen labels and monospace telemetry. the UI you'd find on a wall-mounted panel in a restricted biolab tracking live organism sequences.

**surface**
- colors: `--bg: #111E16; --bg-deep: #0D1710; --fg: #D5E8D4; --fg-dim: rgba(213, 232, 212, 0.4); --accent: #A8D5A2; --danger: #E85454; --success: #7ECF7E; --warn: #D4C86A;`
- typography: dual-stack system. display/headings: `'Instrument Serif', serif` — used for specimen names, large numerics, and hero text. `font-weight: 400; letter-spacing: -0.03em; line-height: 0.85–1.1`. body/data/ui: `'Space Mono', monospace` — used for all metadata, navigation, labels, and body text. `font-size: 0.65rem–0.85rem; letter-spacing: 0.05em; text-transform: uppercase; line-height: 1.6`. size hierarchy exists but is bimodal: either very large serif (clamp(2rem, 4vw, 18rem)) or small monospace (0.65–0.85rem). no mid-range sizes.
- borders: `1px solid var(--fg-dim)` on all structural dividers. no thick borders. `border-radius: 0px` on panels, cards, inputs, tables. `border-radius: 50px` exclusively on pill-shaped action buttons. nothing in between.
- spacing: `padding: 2rem` (stored as `--pad`). grid-based layouts fill the viewport. dense information panels. generous internal padding within panels but tight gaps between metadata rows.

**color distribution**
- 65% deep green backgrounds (`--bg: #111E16`, `--bg-deep: #0D1710`) — the substrate. dark, organic, living.
- 25% pale sage (`--fg: #D5E8D4`) — all text, borders when full-opacity, serif display type.
- 7% dimmed sage (`--fg-dim`) — structural dividers, secondary metadata, navigation in idle state.
- 3% contextual status colors (`--accent`, `--danger`, `--success`, `--warn`) — used only for status indicators, never decoratively.

**component patterns**
- buttons: two types only. (1) pill buttons: `border: 1px solid var(--fg); border-radius: 50px; background: transparent; color: var(--fg); padding: 0.5rem 1.2rem; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em`. (2) inline text actions: no border, no background, underline on hover with `text-underline-offset: 4px`.
- inputs: `background: transparent; border: none; border-bottom: 1px solid var(--fg-dim); font-family: var(--font-mono); font-size: 0.85rem; color: var(--fg); text-transform: uppercase; padding: 0.5rem 0`. focus: `border-bottom-color: var(--fg)`.
- cards/panels: `background: var(--bg); border-right: 1px solid var(--fg-dim)` or `border-bottom: 1px solid var(--fg-dim)`. panels are full-bleed grid cells, not floating cards. no box-shadow. no rounded corners.
- navigation: horizontal row of uppercase monospace spans separated by large gaps (`gap: 3rem`). idle color: `var(--fg-dim)`. hover: `color: var(--fg); text-decoration: underline; text-underline-offset: 4px`. active: full `var(--fg)` color.
- headers: three-column grid. left: logo area (lowercase, `font-size: 1.2rem; font-weight: 700; letter-spacing: -0.02em`) with optional rotating SVG mark. center: navigation links. right: pill action button. `border-bottom: 1px solid var(--fg-dim); padding: 1.5rem var(--pad)`.
- footers: single-row flex layout, `justify-content: space-between`. three data points: status with blinking cursor (`_`), system version, coordinates. `font-size: 0.65rem; color: var(--fg-dim); border-top: 1px solid var(--fg-dim); padding: 0.5rem var(--pad)`.
- lists: no bullets. monospace uppercase. `line-height: 1.6`. hierarchy through indentation or brightness (dim vs full opacity).
- tables: metadata grid — `display: grid; grid-template-columns: auto 1fr; gap: 1rem 2rem`. label column in `var(--fg)`, value column in `var(--fg-dim)`. `border-top: 1px solid var(--fg-dim)` separates table from content above.
- dividers: `1px solid var(--fg-dim)`. horizontal only. used as border-bottom or border-top on panels, never as standalone `<hr>` elements.
- modals: same panel treatment — dark background, dim border. no overlay dimming. modal header in serif, body in mono.
- badges/tags: small rectangular labels. `font-size: 0.65rem; color: var(--fg-dim); border: 1px solid var(--fg-dim); padding: 0.2rem 0.5rem`. no border-radius. positioned absolute top-right of panels.
- hero numerics: `font-family: var(--font-display); font-size: clamp(8rem, 15vw, 18rem); line-height: 0.8; font-weight: 400; letter-spacing: -0.03em; text-transform: none`. used for primary data points, error codes, specimen IDs.

**interaction language**
- hover: pill buttons invert — `background: var(--fg); color: var(--bg)`. text links gain `color: var(--fg)` from dim and `text-decoration: underline`. no glow, no shadow. `transition: all 0.2s`.
- active/pressed: same as hover inversion. no additional transform or scale.
- focus: `outline: 1px solid var(--fg); outline-offset: 2px`. or `border-bottom-color` change on inputs.
- selected: `background: var(--fg); color: var(--bg)` — hard inversion via `::selection`.
- disabled: `color: var(--fg-dim); pointer-events: none`. no strikethrough, just faded out.
- drag: not typically used. if needed: `cursor: grab` → `cursor: grabbing`, element gains `border: 1px dashed var(--fg)`.

**motion & feedback**
- transitions: `transition: color 0.2s, background 0.2s`. only color and background-color animate. no transforms, no scale, no translate. layout changes are instant.
- loading: blinking underscore cursor: `animation: blinker 1s linear infinite` where `50% { opacity: 0 }`. or: cycling status text: `SEQUENCING...`, `ANALYZING...`, `MAPPING...`.
- success: status bar updates to `STATUS: COMPLETE` in `var(--fg)`. no toast, no modal. information stays in the footer or status line.
- error: status reads `STATUS: SEQUENCE_ERR` or `CRITICAL_FAIL // [hex code] // [location]`. `color: var(--danger)` if critical.
- page enter: no entrance animation. content renders instantly. the only persistent motion is slow rotation on logo marks (`animation: rotate 20s linear infinite`) and blinking cursors.

**atmosphere**
- split-panel layouts: the primary compositional tool. `display: grid; grid-template-columns: 1fr 1fr`. left panel = data/text. right panel = visualization/live feed. right panel uses `--bg-deep` for a slightly darker substrate.
- crosshair overlays on visualization panels: two 1px lines (horizontal and vertical) at 50% position in `var(--fg-dim)`. purely decorative, suggesting targeting/scanning.
- ASCII art and generative text as the visual medium — not images, not illustrations. monospace character compositions (DNA helices, data matrices, waveforms) rendered in `var(--fg)` with `filter: drop-shadow(0 0 8px rgba(213, 232, 212, 0.2))` for subtle phosphor bleed.
- viewport-locked: `height: 100vh; overflow: hidden`. the interface is a single screen — a mounted lab panel, not a scrollable page.
- no gradients, no textures, no background images. atmosphere comes from the green-on-green color relationship and the tension between organic serif and mechanical mono.

**editorial voice**
- button labels: clinical, imperative. `Re-sequence`, `Initiate Scan`, `Abort`, `Recalibrate`, `Flush Cache`, `Map Genome`, `Export Log`, `Isolate Sample`.
- headings: serif, sentence case, declarative. `Sequence anomaly detected.`, `Organism database`, `Sample integrity report`, `Cellular topology`. no periods on short headings, period on full sentences.
- metadata: machine-formatted, `//`-delimited, hex-peppered. `CRITICAL_FAIL // 0x88FE2A // LOC_NULL`, `TRACE ID: 0xAF2B91`, `BUILD: v9.2.4`, `LAT: 45.92 // LONG: -12.44`.
- placeholders: `Enter specimen ID...`, `Search organism database...`, `Query sequence...`.
- empty states: `No active sequences detected.`, `Awaiting biological sample input.`, `Host organism database offline.`.
- error messages: `The requested biological or digital routing sequence could not be located in the current host organism database.` — clinical, verbose, third-person. errors are diagnostic reports, not apologies.
- success messages: `Sequence mapped successfully.`, `Cellular recalibration complete.`, `Sample catalogued.`.

**cursor & selection**
- cursor: `cursor: crosshair` globally — every element, including `*`. the user is a researcher targeting specimens. pill buttons override to `cursor: pointer`. inline text actions also override to `cursor: pointer`.
- text selection: `::selection { background: var(--fg); color: var(--bg); }` — full inversion, sage on green.

**anti-patterns — this genome NEVER:**
- uses border-radius values between 1px and 49px. corners are either perfectly square (0px) or fully pill-shaped (50px). nothing in between.
- uses box-shadow for elevation, depth, or card floating. panels are flat and grid-locked.
- uses more than two typeface families. only one serif and one monospace. no sans-serif, no display, no handwritten.
- uses bright saturated colors for decoration. color is reserved for status semantics (danger, success, warning). the palette is green-scale.
- uses friendly, casual, or apologetic language. the voice is clinical, diagnostic, and procedural. errors are reports, not confessions.
- uses scroll-based layouts. the interface is viewport-locked (`100vh`, `overflow: hidden`). it is a mounted panel, not a webpage.
- uses icons, emoji, or pictographic elements. information is conveyed through text, ASCII characters, and typographic hierarchy.
- uses mid-range font sizes. text is either very large serif (2rem+) or very small mono (0.65–0.85rem). there is no comfortable medium.
- uses background images, photographs, or raster graphics. visual interest comes from ASCII/generative text art and the green color field.
- uses drop-down menus, accordions, or progressive disclosure. all information is visible simultaneously on the single-screen panel. selection between options uses inline pill toggles or panel-swap patterns, never dropdowns.
- uses naturalist warmth, paper textures, pencil marks, pressed leaves, or hand-drawn botanical charm. those belong to `field_journal.expedition` or `herbarium_plate.specimen`.
- uses hospital OR monitor tropes such as ECG traces, patient vitals, medication logs, or alarm acknowledgement workflows. those belong to `sterile_field.surg`.
- uses stock DNA imagery, microscope photography, petri-dish photos, or glossy biotech marketing hero images. visualization must be typographic, ASCII, or generated data geometry.
- uses centered card stacks, marketing hero sections, pricing tables, testimonials, or friendly onboarding illustrations.
- uses comfortable paragraph typography at 16px with normal sentence-case UI chrome. body/UI chrome remains small monospace; display moments are oversized serif.
- hides critical sequence state behind hover-only interactions. if a sample is contaminated, quarantined, mapped, or failed, the status is visible at rest.

**when to reach for this genome**

When the request is for a biotech/research-feeling interface, a monitoring dashboard with clinical authority, a live-data visualization panel, a fictional biolab UI, or any artifact that should feel like it's mounted on the wall of a restricted facility. Reach for it when the user wants the green-on-green chlorophyll palette and the tension between organic serif and mechanical monospace.

**page archetype guidance**

- landing page: viewport-locked single-screen composition; oversized serif specimen-name on the left, mono telemetry data on the right, crosshair overlay on the visualization panel, footer status row with blinking cursor.
- dashboard: 2-column grid — left panel data tables in monospace, right panel ASCII-art DNA helix / waveform visualization with `filter: drop-shadow(0 0 8px rgba(213,232,212,0.2))` phosphor bleed; metadata badges in the panel corners.
- monitoring view: ASCII-art waveforms and signal traces animated character-by-character; status line at the top in monospace; numerical readouts in oversized serif for emphasis.
- error/incident report: hero numeric error code in massive serif (e.g., `0x88FE2A` at clamp(8rem, 15vw, 18rem)), supporting clinical body paragraph below in monospace describing the fault diagnostically.

**signature techniques**

- bimodal type sizes: either oversized serif (`clamp(2rem, 4vw, 18rem)`) or small mono (`0.65–0.85rem`). NEVER a comfortable middle size. The disorienting scale jump is the aesthetic.
- viewport-locked layout: `height: 100vh; overflow: hidden` — this is a mounted lab panel, not a scrollable page. All information must fit on one screen.
- crosshair overlays: two `1px` lines at 50% horizontal and 50% vertical positions in `var(--fg-dim)`, purely decorative — the targeting reticle of a scanning instrument.
- ASCII-art as imagery: DNA helices, waveforms, frequency spectra rendered as monospace text compositions with subtle phosphor `drop-shadow` — never raster graphics.
- blinking underscore cursor: `animation: blinker 1s linear infinite` where `50% { opacity: 0 }` — placed after status text to suggest live monitoring.
- 0px or 50px (binary radius): every element is either perfectly square or fully pill. Mid-range radius values are forbidden.
- monospace status line: persistent footer row showing `LAT: 45.92 // LONG: -12.44 // STATUS: NOMINAL` — the constant background telemetry.
- hard inversion on hover: pill buttons fully invert (`background: var(--fg); color: var(--bg)`) — no soft fades, no glow.

**production expansion details**

Core CSS token set should include both biological and telemetry roles:

```css
:root {
  --bio-bg: #111E16;
  --bio-bg-deep: #0D1710;
  --bio-panel: #142219;
  --bio-fg: #D5E8D4;
  --bio-fg-dim: rgba(213, 232, 212, 0.4);
  --bio-fg-faint: rgba(213, 232, 212, 0.16);
  --bio-accent: #A8D5A2;
  --bio-success: #7ECF7E;
  --bio-warn: #D4C86A;
  --bio-danger: #E85454;
  --bio-quarantine: #F0A84C;
  --bio-crosshair: rgba(213, 232, 212, 0.22);
}
```

Production layout rules:
- Root uses `height: 100dvh; overflow: hidden; background: var(--bio-bg); color: var(--bio-fg)`.
- Primary desktop layout: `grid-template-columns: minmax(360px, 0.9fr) minmax(420px, 1.1fr); grid-template-rows: auto 1fr auto`.
- The header and footer span both columns; the main body is split into specimen/control on the left and sequence/live visualization on the right.
- Panel borders are structural: use `border-right` and `border-bottom`, not floating cards.
- Mobile layout remains a single instrument viewport: header, visualization, telemetry list, footer. Use `min-height: 0` and internal clipping; avoid page scroll.
- If content overflows, use a local monospace marquee/truncation pattern (`text-overflow: ellipsis`) rather than opening accordions.
- Controls should cluster in narrow rows, not large form sections.

Expanded component recipes:
- Sequence strip: mono text chunks like `ATG CCA TTA GGC` in 3-character codons; active codon gets `background: var(--bio-fg); color: var(--bio-bg)`.
- Sample queue: rows with `SMP-084`, organism name, status, and short hash; `border-bottom: 1px solid var(--bio-fg-faint)`.
- Organism identity panel: oversized serif Latin-like or specimen name at `clamp(2.5rem, 7vw, 9rem)`, with mono metadata wrapped around it.
- Gel lane visualization: ASCII blocks or CSS rows, `height: 8px`, `background: var(--bio-fg-faint)`, active bands in `var(--bio-fg)`.
- Phylogeny/tree view: monospace branch characters and labels, never SVG icons; active branch hard-inverts.
- Containment badge: square badge for `BSL-2`, `BSL-3`, `QUARANTINE`, `LIVE`, `ARCHIVED`; use warning/danger colors only for actual containment status.
- Inline pills: 50px radius only for actions or mode toggles: `SCAN`, `MAP`, `ISOLATE`, `EXPORT`; selected mode inverts.
- Telemetry footer: always visible with `TRACE`, `HOST`, `LOC`, `TEMP`, `SEQ`, `STATUS` fields separated by `//`.
- Incident panel: square bordered panel with large serif code (`0x88FE2A`) and mono diagnostic report beneath.
- Data table: label/value grid with labels in full sage and values dimmed; this inversion from normal tables is part of the lab-panel tension.

State rules:
- `NOMINAL`: all structural text sage; footer says `STATUS: NOMINAL_` with blinking underscore.
- `MAPPING`: current codon or lane highlights; action button reads `Mapping...`; no spinner.
- `ANOMALY`: panel border changes to `var(--warn)` and the diagnostic line names the anomaly.
- `QUARANTINE`: warning color appears in containment badge and footer; controls reduce to `Isolate Sample`, `Export Log`, `Abort`.
- `CRITICAL_FAIL`: danger text only on the affected readout and status line; do not flood the full screen red.
- `OFFLINE`: visualization panel becomes dim ASCII static with `HOST DATABASE OFFLINE`.
- `SELECTED SAMPLE`: selected row hard-inverts; visualization crosshair moves to the selected sample region if spatial context exists.
- `DISABLED`: leave labels readable but dim; never hide unavailable lab controls.

Motion and feedback refinements:
- Persistent motion is limited to `rotate 20s linear infinite` on a small mark and `blinker 1s linear infinite` on status cursors.
- Sequence loading can reveal codons left-to-right at 40ms per codon, then stop.
- Mapping progress can step between fixed states: `ALIGNING`, `MAPPING`, `SCORING`, `COMPLETE`.
- Success is a status-line update only; no celebratory animation.
- Error does not shake. It writes a diagnostic report and changes the affected status color.
- Hover transitions are limited to color/background over `0.2s`; transforms are forbidden.

Atmosphere details:
- Crosshair overlay CSS: vertical and horizontal pseudo-elements at 50%, `background: var(--bio-crosshair); width/height: 1px`.
- Visualization panels can use `font-size: 10px; line-height: 1.05; white-space: pre; overflow: hidden` for dense ASCII composition.
- Use `filter: drop-shadow(0 0 8px rgba(213, 232, 212, 0.2))` only on ASCII/generative readouts, not on panels or buttons.
- Avoid paper, metal, glass, and lab-photo metaphors. The interface is an electronic wall panel in a restricted research facility.
- Keep the palette cold-organic: deep chlorophyll, pale sage, muted status colors.
- The right visualization panel should feel alive through text/data density, not through illustration.

Editorial examples for generated UIs:
- Sample row: `SMP-084 // HOST: BRYOPHYTA // TRACE: 0xAF2B91 // STATUS: MAPPING`.
- Sequence line: `ATG CCA TTA GGC AAT CGA // CONF: 0.982`.
- Containment: `BSL-3 // QUARANTINE ACTIVE // AIRLOCK: SEALED`.
- Empty state: `Awaiting biological sample input. Insert specimen cartridge or query host database.`
- Failure: `Sequence route could not be resolved through current host organism index.`
- Success: `Sequence mapped successfully. Confidence 0.982.`
- Header: `Cellular topology` or `Sequence anomaly detected.`
- Footer: `LAT: 45.92 // LONG: -12.44 // HOST: ACTIVE // STATUS: NOMINAL_`.

Cursor and selection refinements:
- Global crosshair cursor reinforces the scanning panel, but editable fields must switch to `text`.
- Buttons and inline actions use `pointer`; disabled states return to `default`.
- Do not use custom DNA or microscope cursors.
- `::selection` should hard-invert sage and green; selected sequence chunks should use the same inversion so copy selection and UI selection feel related.
- Drag is rare. If arranging samples, use dashed sage outline and `grab`/`grabbing`; do not move panels with physics.

Nearby genome boundaries:
- Use `field_journal.expedition` for warm hand-recorded naturalist observations, graph paper, pencil notes, and scrollable field pages. Use this genome for electronic lab monitoring and live sequence state.
- Use `herbarium_plate.specimen` for archival botanical collections, cream sheets, italic Latin binomials, and mounted specimens. Use this genome for active genomic analysis, not archival filing.
- Use `sterile_field.surg` for surgical patient monitors, OR workflows, medication logs, and vital signs. Use this genome for research organisms and lab samples, not patients.
- Use `scientific_calc.hp` for amber keypad instruments and numeric registers. Use this genome for chlorophyll green split panels and organism telemetry.
- Use `surveillance_grid.cctv` for security camera feeds and threat monitoring. This genome can feel restricted, but its subject is biological sequence data.

Quality bar for generated screens:
- One split composition with a data/control panel and a live ASCII/generative visualization panel.
- At least one oversized serif specimen/readout moment and many small monospace telemetry labels.
- Footer telemetry visible at all times.
- Binary radius rule honored: square panels and 50px action pills only.
- No raster biology imagery, no friendly SaaS cards, no scroll-page composition.
- Critical sample states visible at rest, not hidden behind hover or menus.
