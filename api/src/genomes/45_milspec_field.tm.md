---
id: "45"
name: milspec_field.tm
keywords:
  - military
  - technical manual
  - mil-spec
  - field manual
  - stencil
  - procedural
  - olive drab
  - tactical
  - defense
  - specification
---

### genome 45: `milspec_field.tm`

> identity: military technical manual. olive drab field manuals, stencil-stamped equipment labels, MIL-SPEC data plates, desert tan briefing boards. "FOR OFFICIAL USE ONLY" headers. NSN numbers, specification tables, warning classifications. rugged, authoritative, zero decoration — function over form, literally.

**surface**
- colors: `--olive: #4B5320; --tan: #C2B280; --black: #1C1C1C; --warning-red: #C0392B; --caution-yellow: #F1C40F; --field-gray: #6B6B60; --paper: #F0EBE0; --bg: #F0EBE0; --ink: #1C1C1C; --stripe: repeating-linear-gradient(135deg, var(--caution-yellow) 0px, var(--caution-yellow) 10px, var(--black) 10px, var(--black) 20px);`
- typography: `"Allerta Stencil", "Stencil", sans-serif` (display/headings), `"Courier Prime", "Space Mono", monospace` (body/data/tables). strictly `text-transform: uppercase` on ALL text — no exceptions. `letter-spacing: 0.12em` on headings, `0.04em` on body. sizes: display 20–28px, section headers 14–18px, body 12–13px, meta/labels 10–11px. **font-weight: 400 on stencil display, 400–700 on monospace body**. hierarchy is achieved through weight, spacing, and border treatment — not decorative variation.
- borders: `2px solid var(--black)`. `border-radius: 0px`. no exceptions. all containers, panels, and structural dividers use solid black borders. WARNING/CAUTION boxes use `border: 4px double var(--black)`. reference panels use `border: 2px dashed var(--black)`. no rounded corners ever.
- spacing: `gap: 1rem; padding: 1rem`. dense information layout. tight procedural spacing. tables and spec blocks are packed with minimal internal padding (`padding: 4px 8px` on cells).

**color distribution**
- 50% paper/tan (`--bg`, `--tan`) — the document surface dominates. matte, flat, paper-like.
- 30% olive drab (`--olive`) — section headers, panel fills, navigation bars, primary structural elements.
- 15% black (`--ink`) — all body text, borders, rules, and structural lines.
- 5% warning red + caution yellow (`--warning-red`, `--caution-yellow`) — reserved exclusively for WARNING/CAUTION/DANGER classifications, critical indicators, and hazard striping. never decorative.

**component patterns**
- buttons: rectangular, 2px solid black border, uppercase stencil text, `background: var(--olive); color: var(--paper)`. no radius. primary action: `background: var(--black); color: var(--paper)`. destructive action: `background: var(--warning-red); color: var(--paper)`. icon buttons: black-bordered squares with olive fill.
- inputs: `border: 2px solid var(--black); background: var(--paper)`. no radius. label above in `--field-gray`, uppercase monospace 10px. focus: `border-color: var(--olive); box-shadow: none`. placeholder text: `ENTER DATA...`, `INPUT SERIAL NO...`.
- cards/panels: paper background, 2px solid black border. no shadow. section header bar: `background: var(--olive); color: var(--paper); padding: 4px 12px; font-family: "Allerta Stencil"; text-transform: uppercase; letter-spacing: 0.12em`.
- navigation: horizontal bar with olive drab background. items in uppercase stencil text, separated by `|`. active item: `background: var(--black); color: var(--paper)`. no hover animations.
- headers: left-aligned title in stencil font. right-aligned document designation (format: `TM 9-XXXX-XXX-XX`). `border-bottom: 2px solid var(--black)`. top line: `FOR OFFICIAL USE ONLY` in 10px centered text with `border: 1px solid var(--black); padding: 2px 8px`.
- footers: single row, 2px solid black top border. monospaced metadata: `DISTRIBUTION: UNLIMITED | DATE: YYYY-MM-DD | SUPERSEDES: TM 9-XXXX`.
- lists: numbered with Arabic numerals and periods (`1.`, `2.`, `3.`). sub-steps use lowercase letters (`a.`, `b.`, `c.`). no bullets. indentation at 1.5rem per level. procedural steps prefixed with `STEP X.` in bold.
- tables: 2px solid black borders on all cells. header row: `background: var(--olive); color: var(--paper); font-family: "Allerta Stencil"`. rows alternate `--paper` and `rgba(75,83,32,0.08)`. cell padding: `4px 8px`. all cell text uppercase monospace.
- dividers: `2px solid var(--black)`. always full-width. section breaks use a double line: `border-top: 2px solid var(--black); border-bottom: 2px solid var(--black); height: 4px`.
- modals/overlays: paper background, 2px solid black border, no shadow, no blur. top bar: olive drab with stencil title. top-right: close `X` in black square button.
- badges/tags: `border: 2px solid var(--black); background: var(--tan); padding: 2px 8px; font-size: 10px; text-transform: uppercase; font-family: "Allerta Stencil"`. classification badges: `UNCLASSIFIED` in green border, `CONFIDENTIAL` in red border.
- tooltips: `background: var(--paper); border: 2px solid var(--black); padding: 4px 8px; font-size: 10px; text-transform: uppercase; font-family: "Courier Prime", monospace; border-radius: 0px`. no arrow pointer. positioned flush to triggering element.
- progress bars: `height: 8px; background: var(--olive)` on a `background: var(--tan)` track. `border: 2px solid var(--black)`. no border-radius. percentage label right-aligned in monospace 10px uppercase.
- warning boxes: `WARNING` — `border: 4px double var(--warning-red); background: var(--paper)`. header bar: `background: var(--warning-red); color: var(--paper); font-family: "Allerta Stencil"`. `CAUTION` — same structure with `--caution-yellow` header bar and `color: var(--black)`. `NOTE` — dashed black border, no colored header.

**interaction language**
- hover: element gains `outline: 2px solid var(--olive)`. no background change, no scale, no shadow, no transition.
- active/pressed: `background: var(--black); color: var(--paper)`. hard snap. zero transition duration.
- focus: `outline: 2px solid var(--black); outline-offset: 2px`.
- selected: element gets `background: var(--olive); color: var(--paper)`.
- disabled: `opacity: 0.35`. `text-decoration: line-through` on list items and nav items. buttons and inputs use opacity alone.
- drag: `cursor: move`. 2px dashed black outline on dragged element.

**motion & feedback**
- transitions: **`none`**. all state changes are instantaneous. no easing. no fades. no slides. no transforms. military technical manuals are static documents — this is absolute. zero motion, zero animation, no exceptions.
- loading: text reads `STANDBY...` in monospace, blinking via `visibility` toggle at 500ms intervals (CSS `@keyframes` with `steps(1)` only — no smooth animation).
- success: text `[COMPLETE]` appended to the relevant element. `border-left: 4px solid var(--olive)` applied.
- error: text `[FAULT]` prepended to the relevant field label in `--warning-red`. `border-left: 4px solid var(--warning-red)` applied.

**atmosphere**
- no background grid, no gradient, no texture overlay. the background is flat `--paper` (#F0EBE0). matte. utilitarian. like actual paper stock.
- thin black rules (`2px solid var(--black)`) beneath every header and above every footer.
- all images: `filter: grayscale(1) contrast(1.3)`. images should be sparse — favor specification tables, procedural diagrams, and exploded-view line drawings over photography.
- warning stripe pattern on critical elements (DANGER-rated panels, destructive action zones): diagonal yellow/black repeating stripes via `background: var(--stripe)` applied to a 4px-tall bar above the element.
- every page has a `FOR OFFICIAL USE ONLY` banner at the top and a distribution statement at the bottom.
- all panels and containers feel like data plates — riveted, stamped, functional. no decoration that does not convey information.

**editorial voice**
- button labels: imperative, military. `EXECUTE`, `SUBMIT REPORT`, `INITIATE SEQUENCE`, `CLEAR ALL`, `CONFIRM`, `ABORT`. never casual.
- headings: section-numbered, military-style. `SECTION I. GENERAL INFORMATION`, `CHAPTER 3. MAINTENANCE PROCEDURES`, `TABLE 4-1. TORQUE SPECIFICATIONS`. always uppercase.
- metadata: formatted as military designations. `TM 9-1005-319-10`, `NSN: 1005-01-561-7200`, `CLASSIFICATION: UNCLASSIFIED`, `DATE: 22 MAR 2026`, `DISTRIBUTION: UNLIMITED`.
- placeholders: `ENTER NSN...`, `INPUT NOMENCLATURE...`, `SEARCH PARTS CATALOG...`.
- empty states: `NO DATA AVAILABLE.`, `AWAITING INPUT.`, `RECORD NOT FOUND IN DATABASE.`.
- error messages: `[FAULT]: INVALID INPUT FORMAT`, `[FAULT]: REQUIRED FIELD MISSING`, `[FAULT]: AUTHORIZATION DENIED`.
- success messages: `OPERATION COMPLETE.`, `RECORD UPDATED.`, `SUBMISSION ACKNOWLEDGED.`.
- warning hierarchy: `DANGER` (death/serious injury), `WARNING` (potential injury), `CAUTION` (equipment damage), `NOTE` (information). this is the MIL-STD-38784 hierarchy. each level has its own box styling.
- procedural text: numbered steps in imperative voice. `STEP 1. REMOVE RETAINING PIN.`, `STEP 2. DISCONNECT CABLE ASSEMBLY.`, `STEP 3. INSPECT FOR SERVICEABILITY.`

**cursor & selection**
- cursor: `default` on all elements. `pointer` on interactive buttons only. no novelty cursors.
- text selection: `::selection { background: var(--olive); color: var(--paper); }`.

**anti-patterns — this genome NEVER:**
- uses border-radius on anything. ever. not even 1px. all corners are hard 90-degree angles.
- uses box-shadow for depth, elevation, or any purpose. zero shadows. flat matte only.
- uses gradient backgrounds on any element. all fills are solid, flat color.
- uses transition or animation properties (except the loading blink). all state changes are instantaneous.
- uses decorative typefaces, script fonts, serif fonts, or any font outside the stencil + monospace pairing.
- uses emoji, illustrative icons, decorative imagery, or ornamental elements. only functional iconography (warning symbols, arrows, standard military symbols) is permitted.
- uses casual, friendly, or marketing language. no "Welcome!", "Get started", "Oops!", "Hey there", or conversational tone. voice is always imperative and formal.
- introduces colors that feel non-military. additional colors should feel like field-issue markings — muted, utilitarian, subordinate to the olive/tan/black core. no neons, no gradients, no saturated fashion colors.
- uses lowercase text in any user-facing element. everything is uppercase. this is absolute.
- uses glossy, shiny, or reflective visual effects. all surfaces are matte. no gloss, no shine, no glass morphism, no frosted effects.

**when to reach for this genome**

When the request is for a defense/aerospace-themed UI, a hazard/safety reference site, a procedural maintenance app, a rugged equipment-management tool, or any artifact that should feel like a MIL-STD-issued technical manual. Reach for it when the user wants stencil-and-uppercase authority paired with WARNING/CAUTION/DANGER classification structure.

**page archetype guidance**

- landing page: top banner reads `FOR OFFICIAL USE ONLY` in a thin black-bordered strip; oversized stencil title; spec-sheet hero showing equipment data plate; olive-drab section nav; bottom distribution statement.
- dashboard: dense table-grid of olive-headed cards, each with a numbered section (`SECTION I.`), specification tables with all-uppercase monospace cells, warning boxes for critical alerts using double-bordered red headers.
- procedural/manual: numbered steps (`STEP 1.`, `STEP 2.`, `STEP 3.`) in imperative voice, sub-steps as `a.`, `b.`, `c.`, warning boxes interspersed with `WARNING:`, `CAUTION:`, `NOTE:` headers in the MIL-STD-38784 hierarchy.
- equipment catalog: rows of NSN-numbered parts in monospace tables, each row's data plate showing `NSN: 1005-01-561-7200`, descriptions in stencil headers, photos with grayscale-contrast filtering.

**signature techniques**

- ALL CAPS, ALWAYS: every visible text element is uppercase. This is absolute — body, headings, labels, placeholders, button text, all uppercase. The `text-transform: uppercase` is applied globally.
- warning hierarchy boxes: `DANGER` (4px double red border, red header), `WARNING` (4px double red border, red header), `CAUTION` (4px double yellow border, yellow header), `NOTE` (2px dashed black border). This is the MIL-STD-38784 visual hierarchy, applied literally.
- hazard stripe pattern: critical/destructive zones get a `repeating-linear-gradient(135deg, var(--caution-yellow) 0px, var(--caution-yellow) 10px, var(--black) 10px, var(--black) 20px)` 4px-tall strip above them — the literal industrial hazard tape.
- stencil + monospace pair: Allerta Stencil for display, Courier Prime for body. Never deviate. Stencil for "labels stamped onto equipment", mono for "typed onto manual pages".
- numbered procedural steps: every list is numbered with `STEP X.` prefix in bold uppercase. Sub-steps as lowercase letter. Never bullet points. Procedures are sequential.
- 2-color border rule: all panels use `2px solid var(--black)` borders, never thinner or thicker (except 4px double for warning boxes). Border thickness is a fixed spec.
- distribution-statement footer: every page ends with `DISTRIBUTION: UNLIMITED | DATE: YYYY-MM-DD | SUPERSEDES: TM 9-XXXX-XXX-XX` — the authoritative footer of a real technical manual.
- zero motion: `transition: none` everywhere except the loading blink. Military manuals do not animate. State changes are instantaneous.

**layout grammar & responsive behavior**

- page shell: `body { background: var(--paper); color: var(--ink); font-family: "Courier Prime", "Space Mono", monospace; text-transform: uppercase; }`.
- global rule: apply `box-sizing: border-box`, `border-radius: 0`, `text-transform: uppercase`, and `transition: none` to every element unless the element is the loading blink.
- viewport frame: outer wrapper uses `min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; border-left: 2px solid var(--black); border-right: 2px solid var(--black)`.
- content grid: default desktop layout is `grid-template-columns: minmax(220px, 280px) 1fr; gap: 0`; sidebar and main share borders rather than floating apart.
- mobile layout: stack sections vertically at `max-width: 720px`; preserve all 2px borders, reduce panel padding to `12px`, keep typography uppercase, and never convert tables into rounded cards.
- main page padding: `padding: 16px`; major sections use `margin-block: 16px`; nested groups use `margin-block: 8px`.
- density rule: prefer four compact panels above the fold over one oversized hero card. This genome should read like a manual spread, not a landing-page billboard.
- document gutters: left margin can show chapter/section codes in monospace 10px: `CH 03`, `SEC II`, `FIG 4-2`.
- right-edge metadata rail: use `writing-mode: vertical-rl; transform: rotate(180deg); font-size: 9px; letter-spacing: 0.10em` for document classification on wide screens only.
- form layout: labels occupy fixed-width columns (`minmax(120px, 180px)`) and inputs align in a strict table-like grid.
- destructive zones: reserve a full-width hazard strip above the area; do not put red/yellow warnings inside random badges.
- print compatibility: the design should still work when printed in grayscale; black borders, double-line warnings, and text labels must communicate severity without color.

**expanded component recipes**

- command bar: `background: var(--olive); color: var(--paper); border-bottom: 2px solid var(--black); display: flex; gap: 0`; commands are separated by `border-right: 2px solid var(--black)`.
- command button sizing: `min-height: 40px; padding: 8px 14px; font-size: 11px; letter-spacing: 0.08em`; icon-only controls are exactly `40px x 40px`.
- sidebar index: entries use `display: grid; grid-template-columns: 44px 1fr; border-bottom: 1px solid var(--black)`; left cell holds `001`, `002`, `003`.
- data plate: compact key-value block with `background: var(--tan); border: 2px solid var(--black); padding: 8px`; labels use 9px stencil, values use 11px monospace.
- status strip: `display: flex; justify-content: space-between; align-items: center; border: 2px solid var(--black); background: var(--paper); min-height: 32px`; use for `READY`, `FAULT`, `LOCKED`, `SERVICEABLE`.
- fieldset: `border: 2px solid var(--black); padding: 12px; margin: 0`; `legend` is black-on-paper, stencil 10px, padded `0 8px`.
- radio/checkbox: square controls only. `width: 14px; height: 14px; border: 2px solid var(--black); accent-color: var(--olive)`; no circular radio styling.
- select menus: same as inputs; add a black triangular marker or simple `V` glyph, never a glossy native-looking dropdown.
- breadcrumbs: `TM 9-0000 > CH 2 > SEC III > TABLE 2-4`; monospace 10px, `>` separators, top of page below classification banner.
- pagination: `PAGE 004 OF 018`; buttons read `PREV PAGE` and `NEXT PAGE`; current page has black fill, paper text.
- tabs: tab headers are rectangular plates sharing one bottom rule. Active tab has `background: var(--black); color: var(--paper)`; inactive tabs are paper with black text.
- accordions: header is a black-bordered row with a fixed-width sign cell: `[+]` or `[-]`; body opens instantly, no height animation.
- charts: render as table-first artifacts. If a chart is unavoidable, use flat bars with `border: 2px solid var(--black)`, no rounded bars, no gradients, labels printed inside or immediately adjacent.
- maps/diagrams: use monochrome line drawings with callouts like `REF A`, `REF B`, `SEE FIG 3-2`; arrows are straight black leaders.
- notification banners: `NOTICE`, `CAUTION`, `WARNING`, `DANGER` each use the formal hierarchy; no floating toast bubble, no bottom-right snack bar.
- empty-state panel: centered only inside its bordered compartment, with a stamped header `NO RECORD` and a follow-up line `CHECK SEARCH PARAMETERS`.
- file upload: label as `TRANSFER MANIFEST`; drop area is dashed black rectangle, not a friendly cloud illustration.
- stepper/wizard: represented as manual procedure stages `STEP 1`, `STEP 2`, `STEP 3`; completed stages append `[COMPLETE]`.

**state rules & validation**

- every interactive element must expose a visible focus state at least 2px thick; keyboard focus is treated as inspection readiness, not decoration.
- hovered buttons keep their rectangular footprint exactly stable; no scaling, no raised effects, no shadows.
- selected rows use olive fill and paper text; selected critical rows may use warning-red fill only if the row itself represents a hazard.
- invalid fields show `[FAULT]` before the field label and a 4px red left rule; do not rely on red text alone.
- required fields use a monospace suffix `[REQ]`; optional fields use `[OPT]`; never use asterisks as the only signal.
- locked fields display `[LOCKED]` after the label and use `opacity: 0.55`; values remain readable.
- loading states are local. A table can show `STANDBY...` in its body; the whole page should not be obscured by a spinner overlay.
- success feedback attaches to the row, form, or command that caused it; do not show celebratory global feedback.
- destructive confirmation panels require two visible controls: `ABORT` and `CONFIRM ACTION`; place `ABORT` first.
- drag handles are marked with `::` or `HANDLE`; dragging uses a dashed outline and no motion easing.
- multi-select count reads `SELECTED: 004 ITEMS`; include leading zeroes for counts under 1000.
- accessibility color fallback: warnings include the words `DANGER`, `WARNING`, or `CAUTION` in the header, not just red/yellow styling.

**imagery, iconography & data visualization**

- allowed icons: warning triangle, chevrons, arrows, lock, wrench, document, plus/minus, check mark, `X`; render them as simple black stencil/line symbols.
- image frames: `border: 2px solid var(--black); background: var(--paper); padding: 4px`; captions use `FIG X-X.` prefix.
- photo treatment: `filter: grayscale(1) contrast(1.35); mix-blend-mode: multiply` when placed over paper; no color photography unless the subject is a warning marker.
- exploded diagrams: prefer thin black leader lines, numbered callout boxes, and a parts table nearby.
- telemetry blocks: use horizontal bar meters and fixed-width numbers like `TEMP: 084C`, `LOAD: 073%`, `CYCLES: 001284`.
- severity meters: use words and borders first; color bands second. A `DANGER` meter gets red header and double border.
- document stamps: use bordered labels such as `SUPERSEDED`, `APPROVED`, `INSPECTED`, rotated at most `-2deg`; rotation must look stamped, not playful.
- QR/barcode areas: acceptable as flat black linework in a data plate; label as `BARCODE REF` or `UID`.
- maps in this genome are tactical overlays, not topographic survey sheets; keep them olive/tan with grid IDs, not contour-line cartography.

**copy blocks & examples**

- operational header example: `TM 9-1120-48 | UNIT MAINTENANCE | SECTION IV. INSPECTION`.
- card title example: `TABLE 3-2. SERVICEABILITY LIMITS`.
- sidebar item example: `004  CALIBRATION PROCEDURE`.
- form label example: `SERIAL NUMBER [REQ]`.
- helper text example: `ENTER 13-DIGIT NSN. OMIT DASHES ONLY WHEN SYSTEM DIRECTED.`.
- warning copy example: `WARNING: DISCONNECT POWER SOURCE BEFORE REMOVING ACCESS PANEL.`.
- caution copy example: `CAUTION: TORQUE ABOVE SPECIFICATION MAY DAMAGE THREADS.`.
- note copy example: `NOTE: RETAIN REMOVED FASTENERS FOR REINSTALLATION.`.
- empty procedure example: `NO PROCEDURE LOADED. SELECT CHAPTER AND SECTION.`.
- search result example: `RECORD FOUND: NSN 1005-01-561-7200 | QTY 004 | STATUS SERVICEABLE`.
- table columns example: `ITEM`, `NSN`, `NOMENCLATURE`, `QTY`, `LIMIT`, `ACTION`.
- footer example: `DISTRIBUTION: A | CURRENT AS OF 05 JUN 2026 | PAGE 012`.

**selection boundaries & overlap notes**

- choose `milspec_field.tm` over `blueprint_draft.eng` when the artifact is a manual, inspection checklist, equipment catalog, hazard classification page, or procedural command surface.
- choose `blueprint_draft.eng` instead when the primary metaphor is a drawing sheet with dimension lines, title blocks, cyan-on-blue drafting, and engineering revision control.
- choose `contour_survey.topo` instead when the primary metaphor is a published map sheet with contour lines, scale bars, coordinate margins, and geographic feature names.
- choose `flight_deck.pfd` or `sterile_field.surg` instead for live high-consequence instrument panels; `milspec_field.tm` is document-first and procedure-first.
- choose `kernel_grid.dev` for software architecture diagrams; military terms alone are not enough if the surface should be digital/developer-native.
- this genome can support dashboards, but the dashboard should feel like a binder full of tables and warnings, not a modern operations console.
- if a prompt asks for "rugged" without military/manual cues, keep the palette and structure restrained; do not over-apply hazard stripes.
- if a prompt asks for "classified" or "defense", use classification banners and document numbers before adding dramatic spy aesthetics.

**production checklist**

- include at least one classification strip, one section/table designation, and one distribution/footer statement on full-page compositions.
- use all-uppercase visible text consistently; if body copy becomes hard to read, shorten the copy rather than switching case.
- keep every corner square and every fill matte.
- use the formal hazard hierarchy whenever red/yellow appear.
- keep iconography functional and sparse.
- keep interactions instantaneous, with only the allowed loading blink.
- make tables and procedural lists the default information structures.
- verify the design still communicates when color is removed.

**implementation tokens & QA notes**

- CSS reset token: `--radius: 0px`; bind every component radius to it and do not override it.
- CSS border token: `--rule: 2px solid var(--black)`; use for panels, headers, tables, and control frames.
- CSS warning token: `--hazard-strip: var(--stripe)`; apply only to critical bars and destructive zones.
- CSS spacing token: `--cell-pad: 4px 8px`; use for spec-table density.
- CSS header token: `--stamp-spacing: 0.12em`; use for stencil headings and classification strips.
- minimum contrast check: olive text should not sit directly on tan unless bordered or backed by paper.
- responsive QA: at 360px width, table cells may scroll horizontally but should not become rounded stacked cards.
- keyboard QA: tab order follows manual order from classification banner, to nav, to section content, to footer.
- copy QA: scan generated strings for lowercase; user-facing lowercase is a failure unless inside an external ID that cannot be transformed.
- warning QA: every yellow/red element must include an explicit severity word.
- motion QA: search CSS for `transition`, `animation`, `transform`; only the loading blink and optional stamp rotation are tolerated.
- imagery QA: any photograph should be grayscale high-contrast and captioned as a figure.
- overlap QA: if contour lines, compass roses, or scale bars dominate, this has drifted into `contour_survey.topo`.
- overlap QA: if cyan-on-blue dimensions dominate, this has drifted into `blueprint_draft.eng`.
- content QA: every full page should include a table, numbered procedure, data plate, or warning hierarchy.
- finish QA: the page should feel inspectable under field conditions, not brand-polished.
