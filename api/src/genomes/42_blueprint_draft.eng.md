---
id: "42"
name: blueprint_draft.eng
keywords:
  - blueprint
  - engineering
  - drafting
  - technical-drawing
  - dimension-lines
  - CAD
  - schematic
  - prussian-blue
  - title-block
  - measured
---

### genome 42: `blueprint_draft.eng`

> identity: technical engineering drawing. white and cyan linework on deep Prussian blue field. dimension lines with arrow terminators, annotation leaders, section hatching, title blocks. the entire UI is rendered as if it were a technical blueprint — every element is a drafted component with precise measurements annotated.

**surface**

colors:
```
--field: #0A1E3D;            /* deep Prussian blue — the blueprint paper */
--field-panel: rgba(10, 30, 61, 0.92);  /* translucent panel variant */
--line: #FFFFFF;             /* primary linework — white on blue */
--dim: #00B8D4;              /* dimension lines, secondary linework, cyan */
--construction: #4A6D8C;    /* faded blue — grid lines, construction geometry */
--construction-faint: rgba(74, 109, 140, 0.3);  /* very faint construction lines */
--fg: #FFFFFF;               /* primary text — white */
--fg-dim: rgba(255, 255, 255, 0.55);  /* secondary text, annotations */
--alert: #FF6B6B;            /* error/warning — muted red, still readable on blue */
--success: #00E5A0;          /* confirmation — teal-green, drafting approval mark */
```

typography:
- headings/labels: `"Barlow Condensed", "Arial Narrow", sans-serif` — weight 500, `text-transform: uppercase`, `letter-spacing: 0.10em`. sizes: section titles 16–20px, labels 11–13px. simulates hand-lettered drafting text — condensed, upright, precise.
- dimensions/measurements: `"Roboto Mono", "Consolas", monospace` — weight 400, `letter-spacing: 0.06em`, sizes 10–12px. used for all numerical callouts, coordinates, revision numbers.
- body/annotations: `"Barlow Condensed", sans-serif` — weight 400, `text-transform: uppercase`, `letter-spacing: 0.08em`, `font-size: 12–14px`, `line-height: 1.5`.
- `line-height: 1.3` headings, `1.5` body, `1.2` dimension callouts.
- **no text ever uses lowercase** — all text-transform is uppercase. blueprints are hand-lettered in capitals.

borders:
- all borders: `1px solid var(--line)`. `border-radius: 0px` on everything — no exceptions. corners are SHARP. this is technical drafting.
- dimension lines: `1px solid var(--dim)` with small perpendicular tick marks (4px) at endpoints, rendered via pseudo-elements or SVG.
- title blocks: double-line borders — `outline: 2px solid var(--line); outline-offset: 2px; border: 2px solid var(--line)` — creating a 2px line, 2px gap, 2px line pattern.
- section dividers: `1px solid var(--construction)`.
- hatching on section cuts: 45-degree repeating lines via `background: repeating-linear-gradient(45deg, var(--construction) 0, var(--construction) 1px, transparent 1px, transparent 6px)`.

spacing:
- `padding: 16px 20px` on panels. `gap: 12px` between elements.
- grid-aligned: all spacing based on 8px increments. `8px, 16px, 24px, 32px, 40px`.
- dense layout. every element feels measured and placed with intent.

**color distribution**
- 60% Prussian blue field (`--field`) — the blueprint paper. deep, rich, dominant.
- 20% white linework (`--line`, `--fg`) — all primary lines, text, panel borders, structural elements.
- 12% cyan (`--dim`) — dimension lines, measurement annotations, secondary linework, interactive highlights.
- 8% faded blue (`--construction`) — grid lines, construction geometry, tertiary text, background scaffolding.

**component patterns**

buttons:
- `background: transparent; border: 1px solid var(--line); color: var(--line); padding: 8px 20px; text-transform: uppercase; font-family: "Barlow Condensed", sans-serif; font-weight: 500; font-size: 12px; letter-spacing: 0.10em; border-radius: 0px`.
- primary variant: `background: var(--line); color: var(--field)` — white fill, dark text.
- icon buttons: square, `width: 36px; height: 36px`, border `1px solid var(--line)`.
- all buttons include a small dimension annotation (e.g., `[120 x 36]`) as a pseudo-element or adjacent label in cyan at 9px.

inputs:
- `background: transparent; border: 1px solid var(--construction); color: var(--fg); font-family: "Roboto Mono", monospace; font-size: 12px; padding: 8px 12px; border-radius: 0px; text-transform: uppercase`.
- focus: `border-color: var(--dim); box-shadow: none`. a dimension callout appears showing field width.
- labels above in `var(--fg-dim)`, `font-family: "Barlow Condensed"; font-size: 10px; letter-spacing: 0.10em; text-transform: uppercase`.
- placeholder: `color: var(--construction); font-style: normal`.

cards/panels:
- `background: var(--field-panel); border: 1px solid var(--line)`.
- title block panel variant: double-line border treatment (2px gap 2px).
- no shadow — ever. blueprints are flat documents.
- panel headers: `border-bottom: 1px solid var(--line); padding: 8px 16px; font-family: "Barlow Condensed"; font-weight: 500; font-size: 13px; letter-spacing: 0.10em; text-transform: uppercase; color: var(--fg)`. includes section designation (e.g., `SECTION A-A`, `DETAIL 3`).
- dimension annotations in cyan appear at panel edges showing width and height.

navigation:
- horizontal bar, `background: transparent; border-bottom: 1px solid var(--line)`.
- items: uppercase Barlow Condensed, `color: var(--fg-dim); font-size: 12px; letter-spacing: 0.08em; padding: 8px 16px`.
- active: `color: var(--fg); border-bottom: 2px solid var(--dim)`. no background change.
- items separated by thin vertical rules: `border-right: 1px solid var(--construction)`.

headers:
- title block layout in top-right or bottom-right corner. double-line bordered box containing: project title, drawing number, revision, scale, date.
- format: `DWG NO: 042-A`, `REV. 04`, `SCALE: 1:50`, `DATE: 2026.03.22`.
- main page title: left-aligned, `font-family: "Barlow Condensed"; font-weight: 500; font-size: 20px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--fg)`.
- `border-bottom: 1px solid var(--line)`.

footers:
- single row, `border-top: 1px solid var(--line)`.
- contains: drawing number, revision, scale, approval status — all in monospace 10px, separated by `|`.
- `color: var(--fg-dim); font-family: "Roboto Mono", monospace; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase`.

lists:
- numbered with zero-padded indices: `01.`, `02.`, `03.`. `font-family: "Roboto Mono", monospace` for numbers, `"Barlow Condensed"` for text.
- each item has a leader line (dotted) connecting label to value: `border-bottom: 1px dotted var(--construction)`.
- no bullets. no indentation beyond one level.
- `color: var(--fg); font-size: 12px; text-transform: uppercase`.

tables:
- `border: 1px solid var(--line)` on all cells.
- header row: `background: rgba(255, 255, 255, 0.08); color: var(--dim); text-transform: uppercase; font-family: "Barlow Condensed"; font-size: 11px; letter-spacing: 0.08em`.
- body cells: `color: var(--fg); font-family: "Roboto Mono", monospace; font-size: 11px`.
- no alternating row colors. uniform field background.
- resembles a bill of materials or parts list.

dividers:
- `1px solid var(--line)` for major breaks.
- `1px solid var(--construction)` for minor breaks.
- section-cut indicators: dashed line with section label at each end (`A` ---- `A`).

modals/overlays:
- `background: var(--field); border: 1px solid var(--line)`. double-line border on outer frame.
- `backdrop-filter: none` — no blur. overlay backdrop is `rgba(10, 30, 61, 0.85)`.
- header in uppercase Barlow Condensed with drawing reference number. close button: `X` in white, square, top-right.
- no border-radius anywhere.

badges/tags:
- `border: 1px solid var(--dim); color: var(--dim); background: transparent; padding: 2px 8px; font-family: "Roboto Mono", monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.06em; border-radius: 0px`.
- revision badges: `REV. 04`, `APPROVED`, `PRELIMINARY`.
- status: `--success` color for approved, `--alert` for rejected, `--dim` for draft/pending.

tooltips:
- `background: var(--field); border: 1px solid var(--dim); padding: 4px 8px; font-family: "Roboto Mono", monospace; font-size: 9px; text-transform: uppercase; color: var(--dim); border-radius: 0px`.
- no arrow pointer. positioned flush to triggering element. styled as a dimension callout.

progress bars:
- `height: 2px; background: var(--dim)` on a `background: var(--construction-faint)` track. no border-radius.
- percentage label right-aligned in monospace 9px cyan.
- resembles a measurement scale bar on a drawing.

hero display:
- `font-family: "Barlow Condensed", sans-serif; font-weight: 500; font-size: clamp(1.8rem, 4vw, 3rem); letter-spacing: 0.12em; text-transform: uppercase; color: var(--fg); line-height: 1.1`.
- subtitle in cyan: `color: var(--dim); font-family: "Roboto Mono", monospace; font-size: 12px; letter-spacing: 0.08em`.
- dimension annotation flanking the title showing its bounding box size.

**interaction language**

- hover: NONE. blueprints are static documents. no color change, no glow, no outline change, no scale, no translate. `cursor: default` on non-interactive elements. `cursor: pointer` on explicit buttons and links only.
- active/pressed: `background: var(--line); color: var(--field)` — hard white-on-blue inversion. instantaneous, zero transition.
- focus: `outline: 1px solid var(--dim); outline-offset: 2px`. cyan outline, no glow.
- selected: `border-color: var(--dim); color: var(--dim)`. leading `>` marker in cyan.
- disabled: `opacity: 0.25`. element fades into the field. no line-through, no grayscale filter.
- drag: `cursor: crosshair; outline: 1px dashed var(--dim)`.

**motion & feedback**

transitions: **NONE**. `transition: none` on all elements. all state changes are instantaneous. no easing, no fades, no slides, no transforms. blueprints are static engineering documents — they do not animate. this is non-negotiable. alongside field_journal.expedition, this is one of only two genomes with absolutely zero motion.

loading: static text only. `PROCESSING REVISION...` or `LOADING DRAWING SET...` displayed in uppercase Barlow Condensed. no spinner, no progress animation, no blinking. a cycling suffix character `/` `-` `\` `|` at 150ms intervals is the only permitted visual change — matching lab_manual.80s's approach.

success: inline text. `REVISION APPROVED.` or `DRAWING FILED.` in `color: var(--success)`. no toast animation, no flash.

error: inline text. `[ERR]: DIMENSION CONFLICT` or `[ERR]: MISSING REFERENCE` in `color: var(--alert)`. prepended to relevant field label.

page enter: instant. no entrance animation. content appears as if the drawing was already unrolled on the table.

**atmosphere**

- persistent fine grid background on body/root — construction lines:
  ```css
  background-color: var(--field);
  background-image:
    linear-gradient(to right, var(--construction-faint) 1px, transparent 1px),
    linear-gradient(to bottom, var(--construction-faint) 1px, transparent 1px);
  background-size: 40px 40px;
  ```
- secondary fine grid at 8px intervals at lower opacity for measurement precision:
  ```css
  background-image:
    linear-gradient(to right, var(--construction-faint) 1px, transparent 1px),
    linear-gradient(to bottom, var(--construction-faint) 1px, transparent 1px),
    linear-gradient(to right, rgba(74, 109, 140, 0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(74, 109, 140, 0.12) 1px, transparent 1px);
  background-size: 40px 40px, 40px 40px, 8px 8px, 8px 8px;
  ```
- title block in bottom-right corner of the viewport: double-bordered box containing project info, drawing number, revision, scale, date, approval signatures — always present like a blueprint cartouche.
- dimension annotations scattered throughout the layout: cyan lines with perpendicular tick marks showing element widths, heights, and spacings. these are decorative pseudo-elements that reinforce the blueprint metaphor.
- section-cut indicators on major layout divisions: dashed lines with circled letters (`A`, `B`, `C`) at endpoints.
- fold marks: faint `+` crosshairs at regular intervals on the outer margin, simulating the fold lines of a large-format print.
- no gradients, no glow, no blur, no `text-shadow`, no `box-shadow`. the drawing is flat — ink on coated paper. white lines are crisp and precise against the blue field.
- all images: `filter: brightness(0) invert(1) sepia(0.2) saturate(0) brightness(0.8) hue-rotate(180deg)` — converted to a blueprint-line aesthetic. images should be rare — favor linework, data tables, and annotations.

**editorial voice**

button labels: technical, imperative, measured. `SUBMIT REVISION`, `EXPORT DRAWING`, `APPROVE DETAIL`, `FILE AMENDMENT`, `ADD NOTATION`, `CLOSE SECTION`, `PRINT SET`, `VERIFY DIMENSIONS`.

headings: drafting notation format. `SECTION A-A`, `DETAIL 3`, `ELEVATION — NORTH FACE`, `PLAN VIEW — LEVEL 02`, `ASSEMBLY DRAWING — REV. 04`, `GENERAL ARRANGEMENT`. always uppercase.

metadata: formatted as title-block entries. `DWG NO: 042-A-0312`, `REV. 04`, `SCALE: 1:50`, `DATE: 2026.03.22`, `DRAWN BY: DEPT. 7`, `APPROVED: PENDING`, `SHEET 3 OF 12`. dates in ISO-short format.

placeholders: `ENTER DRAWING NUMBER...`, `SEARCH REVISION LOG...`, `INPUT DIMENSION...`, `SPECIFY TOLERANCE...`.

empty states: `NO DRAWINGS IN THIS SET.`, `REVISION LOG EMPTY.`, `DETAIL NOT YET DRAFTED.`, `AWAITING APPROVAL — SEE NOTE 7.`.

error messages: `[ERR]: DIMENSION OUT OF TOLERANCE`, `[ERR]: REFERENCE DRAWING NOT FOUND`, `[WARN]: REVISION SUPERSEDED — SEE DWG 042-B`.

success messages: `REVISION FILED SUCCESSFULLY.`, `DRAWING APPROVED — STAMP APPLIED.`, `NOTATION ADDED TO DETAIL 3.`, `DIMENSIONS VERIFIED — WITHIN TOLERANCE.`.

dimension callouts: appear as annotations throughout the UI. `DIM: 240 x 180`, `RAD: 12`, `TYP. 4 PLACES`, `SEE NOTE 7`, `SCALE: NTS` (not to scale).

**cursor & selection**

- cursor: `cursor: default` globally. `cursor: pointer` on buttons and links only. `cursor: crosshair` on drag contexts. no custom cursors.
- text selection: `::selection { background: var(--dim); color: var(--field); }` — cyan highlight on blue.

**when to reach for this genome**

Use `blueprint_draft.eng` when the prompt asks for an engineering drawing, CAD-like interface, schematic, architectural plan, construction document, assembly drawing, parts list, tolerance checker, revision log, technical specification sheet, title-block layout, or any product that should feel like a Prussian-blue blueprint covered in measured linework.

Reach for it when the user wants white and cyan drafting lines, deep blue field, dimension arrows, leader notes, section hatching, title blocks, revision stamps, scale bars, uppercase condensed labels, monospace measurements, zero-radius panels, no shadows, no glow, and absolutely static behavior. It is strongest when precision, measurement, annotation, and document control matter more than atmosphere or storytelling.

Choose it for:
- engineering tools, architecture/construction dashboards, mechanical part catalogs, technical documentation, BOM tables, inspection checklists, CAD review flows, permit drawing sets, and specification approval screens.
- interfaces where `DWG NO`, `REV.`, `SCALE`, `DIM`, `TYP.`, `SEE NOTE`, `APPROVED`, or `[ERR]: DIMENSION CONFLICT` are natural labels.
- products that need a flat drawing-sheet metaphor with visible grids, right-angle containment, exact dimensions, title blocks, and hard uppercase technical language.
- non-engineering prompts only when the explicit visual cue is blueprint drafting rather than general precision, maps, manuals, instruments, or dashboards.

Do not choose it for topographic maps, military field manuals, calculator hardware, analog instrumentation, developer grids, cockpit avionics, weather charts, surgical monitor interfaces, or hand-drawn naturalist notebooks. Use `contour_survey.topo` for cartography/GIS and route maps, `milspec_field.tm` for rugged olive technical manuals, `scientific_calc.hp` for calculator interfaces, `precision_instrument.met` for oscilloscope or measurement hardware, `kernel_grid.dev` for developer architecture grids, `flight_deck.pfd` for avionics and high-consequence instrument panels, `weather_bureau.wx` for meteorological charts, `sterile_field.surg` for operating-theater data, and `field_journal.expedition` for hand-observed field records.

**anti-patterns — this genome NEVER:**

1. uses `border-radius` on any element. all corners are sharp 90-degree angles. no rounded buttons, no pills, no circles. this is precision drafting — every corner is a right angle.
2. uses `box-shadow`, `text-shadow`, or `drop-shadow` filters for any purpose. blueprints are flat documents — there is no depth, no elevation, no glow. lines are either there or they are not.
3. uses animation, transition, or motion of any kind. `transition: none` everywhere. no hover effects, no fade-ins, no transforms, no keyframe animations. this is a static engineering document.
4. uses gradient backgrounds on any element. the field is solid Prussian blue. lines are solid white or cyan. no blending, no fading.
5. uses warm colors or earth tones that break the cold blueprint aesthetic. additional colors should feel like they belong on an engineering drawing — cool-toned, technical, subordinate to the Prussian blue palette.
6. uses serif or decorative typefaces. all text is either Barlow Condensed (labels/headings) or Roboto Mono (measurements/data). no handwriting, no display fonts, no serif.
7. uses lowercase text. every string in the UI is uppercase. `text-transform: uppercase` on all elements. blueprints are hand-lettered in capitals — no exceptions.
8. uses casual, friendly, or conversational language. the voice is technical, measured, and annotated. no exclamation marks, no colloquialisms, no "welcome back" or "oops."
9. uses decorative imagery, illustrations, emoji, or icons beyond simple geometric indicators (arrows, tick marks, section markers). visual communication is through linework, dimension annotations, and typography.
10. uses light or white backgrounds. the Prussian blue field is the substrate — it is never overridden. panels may be slightly translucent but always dark blue. white is reserved for linework, never for fills larger than a button.
