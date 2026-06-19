---
id: "47"
name: contour_survey.topo
keywords:
  - cartographic
  - topographic
  - contour
  - survey
  - elevation
  - compass
  - coordinate
  - grid-reference
  - USGS
  - scale-bar
---

### genome 47: `contour_survey.topo`

> identity: cartographic survey map. topographic contour lines, elevation shading, compass roses, coordinate grids, and survey markers. the UI is rendered as a published map — with legends, scale bars, coordinate annotations, and terrain symbology. USGS quad sheets meet Swiss cartography. formal, precise, geographic. not a field notebook, not a poster — a published reference map.

**surface**
- colors: `--bg: #EDE4D0; --bg-deep: #E3D9C3; --fg: #3D2E1F; --fg-dim: rgba(61, 46, 31, 0.45); --contour: #C4A87D; --contour-index: #8B7355; --water: #4A7C9B; --forest: #5B7744; --ridge: #3D2E1F; --snow: #F5F2EC; --danger: #9B3D3D; --success: #4A6B3A; --warn: #8B7432;`
- typography: three-stack system — each serves a distinct cartographic role. map labels/UI text: `'Barlow Condensed', sans-serif` — used for all map labels, button text, legend entries, place names on the map. `font-weight: 400–500; font-size: 0.7rem–0.95rem; letter-spacing: 0.02em; line-height: 1.4`. coordinates/grid references: `'JetBrains Mono', monospace` — used for elevation numbers, grid references, coordinate annotations, scale figures, datum labels. `font-size: 0.65rem–0.8rem; letter-spacing: 0.04em; line-height: 1.3`. geographic feature names: `'Libre Baskerville', serif` — used exclusively for named geographic features (mountain ranges, rivers, valleys, regions). always italic. `font-style: italic; font-size: 0.8rem–1.3rem; letter-spacing: 0.03em; line-height: 1.2`.
- borders: thin contour-style lines. `border: 1px solid var(--contour)`. `border-radius: 0` on all elements — no rounded corners anywhere. main content area uses a neatline (double-border frame): `outline: 1px solid var(--ridge); outline-offset: 3px; border: 1px solid var(--ridge)`. legend boxes and map frames use `border: 1px solid var(--contour-index)`.
- spacing: `padding: 2rem` (stored as `--pad`). map-layout density — tighter than typical UI. `gap: 1.5rem` between map panels. legend boxes use `padding: 0.8rem 1rem`. coordinate margins use `padding: 0.4rem 0.6rem`.

**color distribution**
- 55% parchment base (`--bg: #EDE4D0`, `--bg-deep: #E3D9C3`) — the map sheet substrate. warm, matte, uncoated stock.
- 18% ridge/foreground dark (`--fg: #3D2E1F`, `--ridge: #3D2E1F`) — primary text, neatlines, index contour lines, structural borders.
- 10% contour tan (`--contour: #C4A87D`, `--contour-index: #8B7355`) — contour lines, intermediate elevation markings, legend frames. the dominant graphic element.
- 8% water blue (`--water: #4A7C9B`) — hydrographic features: rivers, lakes, coastlines, water labels. always used for water-related elements, never decorative.
- 5% forest green (`--forest: #5B7744`) — vegetation shading, woodland boundaries, park areas, success states.
- 2% snow white (`--snow: #F5F2EC`) — high-elevation zones, highlighted panels, modal backgrounds.
- 2% functional colors (`--danger`, `--warn`) — reserved for error and warning states only.

**component patterns**
- buttons: two types. (1) survey markers: `border: 1px solid var(--contour-index); background: var(--bg-deep); color: var(--fg); padding: 0.35rem 1rem; font-family: var(--font-condensed); font-size: 0.8rem; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; transition: background 0.2s ease`. hover: `background: var(--contour); color: var(--fg)`. (2) coordinate links: no border, no background, `color: var(--water); font-family: var(--font-mono); font-size: 0.75rem; text-decoration: underline; text-underline-offset: 2px`. hover: `color: var(--fg)`.
- inputs: `background: var(--snow); border: 1px solid var(--contour); font-family: var(--font-mono); font-size: 0.8rem; color: var(--fg); padding: 0.4rem 0.6rem; border-radius: 0`. focus: `border-color: var(--contour-index); outline: 1px solid var(--contour-index); outline-offset: 1px`. placeholder text in `var(--fg-dim)` with `font-family: var(--font-condensed)`.
- cards/panels: map quadrants. `background: var(--bg); border: 1px solid var(--contour-index); padding: 1.2rem`. no border-radius, no box-shadow. each card represents a survey region or data panel. header area uses `border-bottom: 1px solid var(--contour); padding-bottom: 0.6rem; margin-bottom: 0.8rem`. optional coordinate annotation in top-right corner: `font-family: var(--font-mono); font-size: 0.65rem; color: var(--fg-dim)`.
- navigation: horizontal bar of condensed-sans labels in uppercase. `font-family: var(--font-condensed); font-weight: 500; font-size: 0.75rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--fg-dim)`. items separated by vertical pipe `|`. active: `color: var(--fg); border-bottom: 2px solid var(--contour-index)`. hover: `color: var(--fg); transition: color 0.2s ease`.
- headers: neatline-framed bar. left: map sheet title in serif italic (`font-family: var(--font-serif); font-style: italic; font-size: 1.1rem`). center: navigation. right: sheet number and datum in monospace (`font-family: var(--font-mono); font-size: 0.65rem; color: var(--contour-index)`). `border-bottom: 1px solid var(--ridge); padding: 1.2rem var(--pad)`. a second thin rule at `3px` offset below (neatline effect).
- footers: coordinate margin strip. three-column flex, `justify-content: space-between`. left: grid reference in monospace (`GRID REF: TQ 3280 8045`). center: scale bar — a horizontal rule with tick marks and distance labels (`font-family: var(--font-mono); font-size: 0.6rem`). right: datum and projection info (`DATUM: WGS 84 | UTM Zone 30N`). `font-size: 0.65rem; color: var(--fg-dim); border-top: 1px solid var(--ridge); padding: 0.6rem var(--pad)`.
- lists: numbered with grid-reference style prefixes. `font-family: var(--font-condensed); line-height: 1.6; color: var(--fg)`. numbering in monospace: `01.`, `02.`, `03.`. sub-items indented with `margin-left: 1.5rem` and prefixed with a triangulation marker (`▸`).
- tables: survey data grid. `display: grid; gap: 0; border: 1px solid var(--contour-index)`. header row: `background: var(--bg-deep); font-family: var(--font-condensed); font-weight: 500; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.05em; padding: 0.5rem 0.8rem; border-bottom: 2px solid var(--ridge)`. body cells: `font-family: var(--font-mono); font-size: 0.75rem; padding: 0.4rem 0.8rem; border-bottom: 1px solid var(--contour)`. alternating rows: even rows `background: rgba(196, 168, 125, 0.08)`.
- dividers: `1px solid var(--contour)`. for major section breaks: `2px solid var(--contour-index)`. neatline-style double dividers for map sheet boundaries: `border-bottom: 1px solid var(--ridge); box-shadow: 0 3px 0 0 var(--bg), 0 4px 0 0 var(--ridge)`.
- modals: survey detail overlay. `background: var(--snow); border: 2px solid var(--ridge)`. neatline double-border frame. overlay backdrop is `rgba(61, 46, 31, 0.25)` — like vellum overlay on a map. header in serif italic for the feature name, body in condensed sans, data in monospace. `padding: 1.5rem`.
- badges/tags: rectangular coordinate labels. `font-family: var(--font-mono); font-size: 0.6rem; color: var(--contour-index); border: 1px solid var(--contour); padding: 0.15rem 0.5rem; background: var(--bg-deep); letter-spacing: 0.03em; text-transform: uppercase`. elevation badges use `color: var(--fg); background: var(--contour); border-color: var(--contour-index)`. water-feature badges use `color: var(--water); border-color: var(--water)`.
- hero display: `font-family: var(--font-serif); font-style: italic; font-size: clamp(1.6rem, 3.5vw, 3rem); line-height: 1.15; letter-spacing: 0.02em; color: var(--fg)`. used for map sheet titles and named geographic regions. a subtitle line follows in condensed sans, uppercase: `font-family: var(--font-condensed); font-weight: 500; font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--contour-index)` for sheet number and scale (e.g., `SHEET 47-NW | 1:25,000`).

**interaction language**
- hover: subtle and minimal. buttons: `background` shift via `transition: 0.2s ease`. navigation items: `color` shift. coordinate links: `color` shift. no transforms, no scale changes, no shadow additions. maps do not bounce.
- active/pressed: survey-marker buttons gain `background: var(--contour); border-color: var(--contour-index)`. coordinate links gain `color: var(--fg)`.
- focus: `outline: 2px solid var(--contour-index); outline-offset: 2px`. solid, precise — like a survey crosshair. no dashed or decorative treatment.
- selected: `::selection { background: rgba(74, 124, 155, 0.3); color: var(--fg); }` — water-blue highlight, like tracing over a hydrographic feature.
- disabled: `color: var(--fg-dim); pointer-events: none; opacity: 0.4; border-color: var(--fg-dim)`. faded survey marks — like a deprecated grid reference.
- drag: `cursor: grab` → `cursor: grabbing`. element gains `outline: 1px solid var(--contour-index)`.

**motion & feedback**
- transitions: minimal. `transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease` on interactive elements only (buttons, links, navigation). no transitions on cards, panels, modals, or structural elements. maps are reference documents — they do not animate.
- loading: monospace status text. `Triangulating position...` or `Loading survey data...` displayed in `font-family: var(--font-mono); font-size: 0.75rem; color: var(--contour-index)`. no spinner. a static coordinate readout that updates when complete.
- success: inline monospace confirmation. `Survey point recorded.` or `Coordinates verified — ELEV. 2,847m` in `font-family: var(--font-mono); color: var(--success)`. no toast, no animation.
- error: inline monospace alert. `Grid reference not found.` or `Coordinate datum mismatch — verify projection.` in `font-family: var(--font-mono); color: var(--danger)`. precise and technical.
- page enter: instant. no entrance animation. content appears as if the map sheet was already unfolded on the table.

**atmosphere**
- contour-line background: the defining visual. `background-image` on the `body` or main container — subtle, organic, flowing contour curves rendered as faint repeating SVG or CSS patterns in `var(--contour)` at very low opacity (`opacity: 0.12`). lines are organic and curving, not geometric grid lines. they suggest terrain without depicting specific terrain.
- map-layout grid: `display: grid; grid-template-columns: 1fr 280px` or `grid-template-columns: 280px 1fr` — a main map area with a sidebar legend panel. legend panel has its own neatline border, sits adjacent to the main content. `gap: 0` — panels share borders like map sheet joins.
- neatline framing: every major content area has a double-border neatline. `border: 1px solid var(--ridge); outline: 1px solid var(--ridge); outline-offset: 3px`. this is the single most distinctive cartographic convention. nothing else in the genome system uses neatlines.
- coordinate margins: thin strips along the edges of content areas showing grid numbers. `font-family: var(--font-mono); font-size: 0.55rem; color: var(--fg-dim); padding: 0.2rem 0.4rem`. these appear in card headers, footer bars, and panel edges — persistent coordinate context.
- compass rose: decorative motif used as a section ornament or empty-state illustration. rendered in CSS or inline SVG using `var(--contour-index)` and `var(--ridge)` colors. small (40–60px), placed at section breaks or in legend panels. NOT on every card — used sparingly as a cartographic grace note.
- scale bars: horizontal bars with alternating filled/empty segments and distance labels. `border: 1px solid var(--ridge); height: 6px`. segments alternate between `background: var(--ridge)` and `background: var(--bg)`. distance labels below in monospace at `0.55rem`. placed in footers or legend panels.
- parchment base: `background: var(--bg)` with no texture overlays, no noise, no gradients. the warmth comes from the color itself. subtle differentiation between `--bg` (map area) and `--bg-deep` (legend panels, sidebars) provides hierarchy.
- scrollable: `overflow: auto`. the map is a large document — content extends beyond the viewport. `scrollbar-width: thin; scrollbar-color: var(--contour-index) transparent`.

**editorial voice**
- button labels: geographic, abbreviated, precise. `Plot Point`, `Set Datum`, `Export Grid`, `Add Marker`, `Verify Coordinates`, `Update Survey`, `View Legend`, `Print Sheet`.
- headings: serif italic for geographic features, condensed uppercase for operational labels. `*Sierra Nevada — Western Escarpment*`, `CONTOUR INTERVAL: 20m`, `SURVEY INDEX`, `ELEVATION PROFILE`, `DRAINAGE BASIN — North Fork`. no periods on map titles.
- metadata: monospace, dense, coordinate-native. `ELEV. 2,847m`, `GRID REF: TQ 3280 8045`, `DATUM: WGS 84`, `CONTOUR INTERVAL: 20m`, `PROJECTION: UTM Zone 30N`, `SURVEY DATE: March 2024`, `SHEET 47-NW`, `SCALE: 1:25,000`, `MAGNETIC DECLINATION: 1°47'W (2024)`.
- placeholders: `Enter grid reference...`, `Search by feature name...`, `Coordinates (lat, lon)...`, `Elevation in metres...`.
- empty states: `No survey data for this quadrant.`, `Grid reference falls outside mapped area.`, `Elevation data not yet triangulated.`, `This sheet has not been surveyed — consult adjacent sheets.`.
- error messages: `The specified grid reference does not fall within the bounds of this survey sheet. Verify coordinates and datum.` — formal cartographic register, impersonal and precise.
- success messages: `Survey point plotted at GRID REF: TQ 3280 8045.`, `Elevation verified — 2,847m ASL.`, `Sheet 47-NW exported at 1:25,000 scale.`.

**cursor & selection**
- cursor: `cursor: default` globally. buttons and coordinate links override to `cursor: pointer`. `cursor: crosshair` on map-area elements where point-plotting is active — the only genome that uses crosshair cursor.
- text selection: `::selection { background: rgba(74, 124, 155, 0.3); color: var(--fg); }` — water-blue tint, referencing hydrographic convention.

**anti-patterns — this genome NEVER:**
- uses border-radius on any element. all corners are square — `border-radius: 0` everywhere. maps do not have rounded corners. no pills, no rounded cards, no soft edges.
- uses entrance animations, page transitions, or keyframe animations. the map is a static reference document. content appears instantly. the only motion permitted is `0.2s ease` hover transitions on interactive elements.
- uses saturated or neon colors. the palette is entirely muted and natural — parchment, earth brown, water blue, forest green. nothing glows, nothing vibrates.
- uses dark backgrounds or inverted color schemes. the substrate is always warm parchment. this is a printed map — always light base with dark markings.
- uses handwriting or script typefaces. this is published cartography, not a personal notebook. all text is precise: condensed sans, monospace, or serif italic. never casual, never hand-drawn. (contrast with field_journal.expedition which uses Kalam handwriting.)
- uses gradients, glow effects, or `backdrop-filter`. map symbology is flat and opaque. no glass morphism, no frosted panels, no luminous effects.
- uses large padding, generous whitespace, or airy layouts. maps are dense documents — every square centimetre carries information. spacing is tight and purposeful. no hero-section emptiness.
- uses emoji, decorative icons, or pictographic elements in the UI chrome. cartographic symbology (contour lines, compass roses, scale bars) provides all visual ornamentation. no smiley faces, no abstract icons.
- uses clip-path, torn edges, or irregular borders. all borders are precise straight lines — rulers and neatlines. (contrast with field_journal.expedition which uses deckled clip-path edges.)

**when to reach for this genome**

When the request is for a cartography app, a hiking/outdoor reference tool, a GIS dashboard, a route-planning interface, a real-estate parcel viewer, or any artifact that should feel like a published topographic survey sheet. Reach for it when the user wants parchment-and-contour cartographic precision — not a field notebook (40, hand-drawn) and not a roadmap (63, signage).

**page archetype guidance**

- landing page: neatline-framed hero with serif italic regional title (`*Sierra Nevada — Western Escarpment*`), survey-sheet metadata in the corners (`SHEET 47-NW | 1:25,000`), contour-line background pattern, footer with scale bar and grid reference.
- dashboard: 2-column grid — main map area on the left in `var(--bg)`, legend/sidebar panel on the right in `var(--bg-deep)`; persistent coordinate margins on panel edges; survey-data tables below.
- detail view: feature page with serif italic geographic name as hero, elevation/coordinate metadata table in monospace, contour-interval and projection info in legend box.
- planning/route view: map area with crosshair plotting cursor, coordinate readout in the corner (`GRID REF: TQ 3280 8045`), waypoint list as numbered survey markers.

**layout grammar & responsive behavior**

- page shell: `body { background: var(--bg); color: var(--fg); }` with a subtle contour SVG layer below all content.
- map sheet wrapper: `max-width: 1280px; margin: 0 auto; padding: 28px; border: 1px solid var(--ridge); outline: 1px solid var(--ridge); outline-offset: 4px`.
- desktop layout: `grid-template-columns: minmax(0, 1fr) 300px; gap: 16px`; the sidebar is a legend, not a generic settings card.
- alternate desktop layout: for data-heavy GIS dashboards, use `grid-template-columns: 240px minmax(0, 1fr) 280px`; left is layer index, center is map, right is legend/profile.
- mobile layout: stack as title block, map panel, legend, survey table; keep coordinate metadata visible at top and bottom.
- map frame: main map area keeps `aspect-ratio: 4 / 3` or `3 / 2`; do not allow the map to collapse into a short banner.
- panel gutters: use coordinate ticks at the top and left edges; top ticks are horizontal, left ticks may be vertical text at 9px.
- gap logic: adjacent panels should share borders visually; avoid large whitespace between a map and its legend.
- corner annotations: each major frame corner can carry small monospace values such as `E 532000`, `N 4184000`, `SHEET 47-NW`, `1:25,000`.
- dense pages: use smaller panels rather than removing cartographic fixtures; scale bar, legend, and datum remain present.
- print behavior: keep paper base, neatline, scale, and projection labels visible for print/PDF outputs.
- overflow: map bodies may scroll or pan; UI chrome should not animate during pan interactions.

**expanded component recipes**

- layer control: each layer row has a square checkbox, a line sample swatch, and label. Example swatches: contour tan line, water blue line, forest green fill.
- legend item: `display: grid; grid-template-columns: 36px 1fr auto; gap: 8px`; first cell renders the symbol, second label, third optional scale/count.
- contour swatch: thin line for intermediate contours, 2px darker line for index contours, inline elevation number in mono at 9px.
- water swatch: blue line with small serif italic label sample; water labels are italic only when naming actual features.
- route segment: dashed `1px solid var(--water)` or `var(--danger)` with small triangular waypoint markers; no glowing GPS pins.
- waypoint marker: small crosshair or triangle, `width: 14px; height: 14px; border: 1px solid var(--ridge)`; label in mono `WP-03`.
- coordinate input group: separate cells for easting, northing, zone, and datum; do not use a single vague "location" field when precision matters.
- elevation profile: flat line chart with parchment background, `stroke: var(--contour-index)`, gridlines in `rgba(196,168,125,0.35)`, labels in mono.
- inset map: small lower-corner frame with its own neatline and title `REGIONAL INSET`; never styled as a glossy thumbnail.
- search results: list entries show feature name, grid ref, elevation, and sheet; feature name can be serif italic only if it is a place/terrain name.
- toolbar: compact row with `PAN`, `PLOT`, `MEASURE`, `EXPORT`, `LEGEND`; active mode gets contour-index underline and crosshair behavior where relevant.
- zoom controls: square buttons marked `+` and `-`, stacked vertically, bordered in contour-index; no circular floating map controls.
- measurement ruler: inline component with alternating black/parchment segments, mono labels `0`, `500m`, `1km`.
- modal detail sheet: title in serif italic, subheader in mono coordinates, body in condensed sans, bottom row with `DATUM`, `SCALE`, `SOURCE`.
- toast substitute: use map-margin annotations or inline status strips; a floating modern toast breaks the printed map metaphor.
- tabs: use sheet tabs labeled `47-NW`, `47-NE`, `47-SW`, `47-SE`; active sheet has darker border and bg-deep.
- callouts: leader lines connect labels to terrain features. Use `border-left` or SVG path lines; keep them straight or gently angled, not playful.
- comparison panel: adjacent map sheets align by grid coordinates; avoid unrelated card stacking.

**state rules & validation**

- hover states may brighten labels but must not add shadows, lifts, or scale.
- selected map feature uses water-blue translucent wash plus a precise outline; do not use neon marker fills.
- selected legend item gets `background: rgba(196,168,125,0.18)` and `border-left: 2px solid var(--contour-index)`.
- active plotting mode changes cursor to `crosshair` only inside the map frame; outside the frame cursor returns to default/pointer.
- invalid coordinates display `DATUM MISMATCH` or `OUTSIDE SHEET BOUNDS`; include which sheet or datum was expected.
- unavailable layers fade to `opacity: 0.35` and show mono reason text such as `NO SOURCE` or `SCALE LIMITED`.
- drag handles on map overlays use `cursor: grab`; dragged overlays gain 1px contour-index outline and no drop shadow.
- focus rings should look like survey crosshairs: solid 2px contour-index outline with 2px offset.
- loading data never uses a spinner. Show `TRIANGULATING...`, `FETCHING QUAD SHEET...`, or `INDEXING CONTOURS...` in mono.
- route confirmation reads `ROUTE SAVED: 8.4km | GAIN 420m | SHEET 47-NW`.
- failure feedback should include a geographic reason: `GRID REF OUTSIDE MAPPED AREA`, `ELEVATION SOURCE UNAVAILABLE`, `PROJECTION NOT SUPPORTED`.
- disabled controls keep labels readable because printed legends include unavailable symbols; opacity should not drop below 0.35.

**map atmosphere recipes**

- contour SVG: use organic Bezier paths with no sharp right angles. Example stroke: `stroke="#C4A87D" stroke-width="1" fill="none" opacity="0.12"`.
- index contours: every fifth contour may be darker and thicker; label with mono elevation number placed along the line.
- hillshade: if present, use very subtle flat tan/forest fills at `opacity: 0.08-0.14`; never use photorealistic terrain.
- water treatment: streams and lakes always use water blue; labels for water names may use serif italic in blue.
- forest treatment: use green translucent fill with crisp border. Avoid leaf icons unless the map symbol demands it.
- grid overlay: use fine lines at predictable spacing; color `rgba(139,115,85,0.22)`; keep less prominent than contour lines.
- coordinate edge labels: print every major grid interval, not every small tick; too many numbers can overwhelm the map.
- north arrow: simple, black/contour-index, placed once per map or legend; do not put a compass rose in every card.
- scale bar placement: bottom-left or footer center; it must have numeric labels and alternating segments.
- paper surface: parchment is a flat color. No grunge texture, coffee stains, torn edges, or field-note debris.

**copy blocks & examples**

- hero sheet title: `Mount Hood Quadrangle` in serif italic.
- subtitle line: `SHEET 47-NW | SCALE 1:25,000 | CONTOUR INTERVAL 20m`.
- legend title: `LEGEND / RELIEF & HYDROGRAPHY`.
- coordinate label: `GRID REF: TQ 3280 8045`.
- feature label: `North Fork Valley` in serif italic.
- operational label: `MEASURE DISTANCE` in condensed uppercase.
- waypoint label: `WP-04 | ELEV. 1,482m`.
- input placeholder: `Easting 532000...`, `Northing 4184000...`, `Datum WGS 84...`.
- empty layer state: `No hydrographic features recorded at this scale.`.
- error copy: `Coordinate falls outside sheet 47-NW. Try adjacent sheet 47-NE.`.
- success copy: `Survey point plotted at GRID REF: TQ 3280 8045.`.
- footer copy: `DATUM: WGS 84 | PROJECTION: UTM Zone 30N | DECLINATION: 1deg47'W`.

**selection boundaries & overlap notes**

- choose `contour_survey.topo` over `field_journal.expedition` when the output should feel published, surveyed, and cartographically typeset rather than handwritten and observational.
- choose `field_journal.expedition` for specimen notes, pencil sketches, naturalist pages, deckled paper, and hand-drawn warmth.
- choose `blueprint_draft.eng` for engineered dimension drawings, CAD documents, cyan-on-blue linework, and title-block revisions.
- choose `milspec_field.tm` for rugged procedural manuals and hazard classifications; maps inside that genome are tactical aids, not topographic sheets.
- choose `transit_wayfinding.sys` for route signage, stations, and wayfinding systems; `contour_survey.topo` is about landform measurement and sheet metadata.
- choose `weather_bureau.wx` for meteorological charts; it may share map-like discipline but uses weather symbology and forecasting language.
- this genome should not become a general parchment theme. Its identity requires contour lines, neatlines, coordinate grids, legends, scale, and datum language.
- if the prompt only says "outdoors", use this genome only when there is mapping, survey, route, terrain, or GIS intent.

**production checklist**

- include a neatline on every major page or map frame.
- include at least one coordinate reference, datum/projection label, or scale marker in full-screen compositions.
- preserve square corners and flat map colors.
- keep serif italic reserved for geographic feature names.
- keep UI labels condensed sans and coordinates monospace.
- make the legend visible, specific, and useful.
- use water blue only for hydrographic or selection semantics.
- avoid modern floating-map tropes unless they are converted into printed-map controls.

**implementation tokens & QA notes**

- CSS radius token: `--radius: 0px`; all panels, controls, and map frames are square.
- CSS neatline token: `--neatline: 1px solid var(--ridge)` plus `outline-offset: 3px`.
- CSS contour token: `--contour-line: 1px solid var(--contour)`; use for intermediate separators.
- CSS index-contour token: `--index-contour-line: 2px solid var(--contour-index)`; use sparingly for primary breaks.
- CSS coordinate token: `--coord-size: 0.65rem`; bind coordinate metadata and edge ticks to this scale.
- responsive QA: at 390px width, the legend must follow the map frame and scale bar must remain legible.
- map QA: every full map view includes at least one scale, datum, projection, or sheet identifier.
- typography QA: only geographic feature names use serif italic; labels like `PLOT POINT` and `VIEW LEGEND` stay condensed sans.
- cursor QA: crosshair appears only in map plotting/measurement areas, never on generic buttons.
- color QA: water blue should not become a general accent for CTAs or badges.
- density QA: if the page feels airy and editorial, add coordinate margins, legend rows, and survey metadata.
- paper QA: reject torn-paper, coffee-stain, deckled, or handwritten details because those belong to field notebook styles.
- overlap QA: if dimension arrows and title blocks dominate, use `blueprint_draft.eng` instead.
- overlap QA: if specimen notes and hand lettering dominate, use `field_journal.expedition` instead.
- content QA: map controls should describe geographic operations: `PLOT`, `MEASURE`, `SET DATUM`, `EXPORT GRID`.
- finish QA: the result should be usable as a reference sheet even before interaction.

**signature techniques**

- neatline framing (signature): every major content area gets a double-border neatline — `border: 1px solid var(--ridge); outline: 1px solid var(--ridge); outline-offset: 3px`. This is the single most distinctive cartographic convention; nothing else in the genome library uses it.
- contour-line background: faint organic curving lines in `--contour` at `opacity: 0.12` on the body background — implemented as a SVG `<path>` data-URI of flowing curves at low repeat density. Suggests terrain without depicting specific terrain.
- coordinate margins: thin monospace strips along the edges of cards showing grid reference numbers (`53`, `54`, `55`...) at `0.55rem` in `var(--fg-dim)` — the persistent coordinate context of a real map sheet.
- crosshair cursor on map areas: `cursor: crosshair` on elements where point-plotting is the action. The only genome besides lab_manual that uses crosshair (and here it's for surveying, not targeting).
- scale-bar component: horizontal `border: 1px solid var(--ridge)` rule, 6px tall, with alternating filled/empty segments via `background: var(--ridge)` / `background: var(--bg)` and distance labels below in monospace at `0.55rem`.
- serif-italic for geographic features ONLY: rivers, mountains, regions, places use `font-family: var(--font-serif); font-style: italic` — exclusively. UI labels never use italic.
- three-typeface role separation: Barlow Condensed (UI labels), JetBrains Mono (coordinates/data), Libre Baskerville italic (geographic feature names). Each role is fixed; mixing breaks the cartographic logic.
- water-blue selection: `::selection { background: rgba(74,124,155,0.3); color: var(--fg); }` — the convention of tracing-over-water-features in cartography.
