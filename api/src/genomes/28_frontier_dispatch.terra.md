---
id: "28"
name: frontier_dispatch.terra
keywords:
  - expedition
  - mars
  - terrain
  - exploration
  - mission
  - frontier
  - atlas
  - cartography
  - grunge
  - space
  - poster
  - topographic
  - NASA
  - colony
---

### genome 28: `frontier_dispatch.terra`

> identity: expedition editorial poster. vintage science magazine meets space agency mission briefing — oversized serif display titles on warm aged paper, earthy multi-color palette (rust, terra-green, sun-gold), pill-shaped UI elements, grunge SVG noise textures, and monospace data readouts scattered like instrument telemetry.

**surface**

colors:
```
--paper: #E6E2D6;          /* warm aged stock — the ground */
--ink: #121212;             /* near-black — primary text, structural lines */
--rust: #C85228;            /* burnt orange — primary accent, alerts, active states */
--terra-green: #2A5A42;     /* deep forest — secondary accent, map/terrain elements */
--sun-gold: #D4A044;        /* warm gold — tertiary accent, highlights, status indicators */
--ink-dim: #5A5550;         /* faded ink — secondary text, metadata */
--paper-dark: #D4CFC3;     /* shadowed paper — inset backgrounds, hover tints */
--danger: #B91C1C;          /* deep red — error states only */
```

typography:
- display/hero titles: `"Abril Fatface", "Playfair Display", Georgia, serif`. `font-size: clamp(6rem, 18vw, 22rem)`. `line-height: 0.8`. `letter-spacing: -0.04em`. `color: var(--ink)`. always uppercase or title case — never sentence case at display size.
- section headings: `"Syne", "DM Sans", sans-serif`. `font-weight: 700–800`. `font-size: clamp(1.5rem, 4vw, 2.5rem)`. `text-transform: uppercase`. `letter-spacing: 0.02em`. `line-height: 1`.
- body text: `"Syne", "DM Sans", sans-serif`. `font-weight: 400`. `font-size: 0.95rem`. `line-height: 1.5`. `letter-spacing: 0`.
- data/labels/metadata: `"Space Mono", "Courier New", monospace`. `font-weight: 400–700`. `font-size: 0.6rem–0.8rem`. `text-transform: uppercase`. `letter-spacing: 0.05em`. `line-height: 1.4`.
- three-font system is non-negotiable: serif for display, geometric sans for body/headings, monospace for data. never mix roles.

borders:
- pill-shaped elements: `border: 1.5px solid var(--ink); border-radius: 50px`.
- structural panels: `border: 1.5px solid var(--ink); border-radius: 0px` — panels stay sharp, interactive elements go pill.
- internal dividers: `height: 1.5px; background: var(--ink)`.
- `--border-width: 1.5px` as the universal stroke weight — consistent across all elements.

spacing:
- base unit: 12px. scale: `--pad-sm: 12px; --pad-md: 24px; --pad-lg: 48px; --pad-xl: 96px`.
- sections: `padding: var(--pad-lg) var(--pad-md)`.
- component internal gaps: `12px`.
- hero areas: generous vertical space, `padding: var(--pad-xl) var(--pad-md)`.

**color distribution**

- 55% paper (`--paper`, `--paper-dark`) — the warm stock dominates, everything sits on it
- 20% ink (`--ink`, `--ink-dim`) — text, structural lines, star graphics
- 12% rust (`--rust`) — primary accent: active states, alerts, status indicators, map terrain fills
- 8% terra-green (`--terra-green`) — secondary accent: terrain overlays, secondary panels, footer backgrounds
- 5% sun-gold (`--sun-gold`) — tertiary accent: highlights, special badges, sparse decorative moments

**component patterns**

buttons:
- pill style: `border: var(--border-width) solid var(--ink); border-radius: 50px; padding: 4px 16px; font-family: "Syne", sans-serif; font-weight: 700; text-transform: uppercase; font-size: 0.9rem; background: var(--paper); color: var(--ink); transition: all 0.3s ease`.
- accent pill: `border-color: var(--rust); color: var(--rust)`. hover: `background: var(--rust); color: var(--paper)`.
- primary action: `background: var(--ink); color: var(--paper); border-color: var(--ink)`.
- no box-shadow on buttons — depth comes from border and color inversion only.

inputs:
- `border: var(--border-width) solid var(--ink); border-radius: 50px; padding: 8px 16px; font-family: "Syne", sans-serif; font-size: 0.85rem; background: transparent; color: var(--ink)`.
- focus: `border-color: var(--rust); outline: none`.
- label above: monospace, uppercase, `font-size: 0.65rem; letter-spacing: 0.08em; color: var(--ink-dim); margin-bottom: 6px`.
- placeholder: `color: var(--ink-dim); text-transform: uppercase`.

cards/panels:
- bordered box: `border: var(--border-width) solid var(--ink); border-radius: 0px; padding: var(--pad-md)`. sharp corners — only interactive elements get pills.
- featured panel: `background: var(--rust); color: var(--paper)` or `background: var(--terra-green); color: var(--paper)`.
- no shadows. depth comes from color fill and border weight.

navigation:
- header bar: `display: flex; justify-content: space-between; padding: var(--pad-md); font-family: "Space Mono", monospace; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em`.
- left: brand identifier with status dot (`width: 8px; height: 8px; background: var(--rust); border-radius: 50%; animation: pulse 2s infinite`).
- right: nav items as plain text links with `gap: 20px`. active: `border-bottom: 1.5px solid var(--ink)`.
- nav separator: `//` between brand segments.

headers:
- hero: massive serif title centered, `mix-blend-mode: multiply` on the title wrapper.
- decorative star graphic (4-point or 8-point SVG, stroke only, `stroke: var(--ink); stroke-width: 1.5`) positioned near the title.
- horizontal rule through title center: `height: 2px; background: var(--ink); position: absolute; width: 100vw` — a structural line bisecting the hero.
- pill cluster below title for subtitle/tags.

footers:
- terrain-style block: `background: var(--rust); border-top: var(--border-width) solid var(--ink)`.
- CSS `clip-path` polygon terrain overlay in `var(--terra-green)` — abstract topographic landmass shape.
- SVG noise filter overlay: `opacity: 0.1; mix-blend-mode: overlay` for grit.
- content: monospace, uppercase, `color: var(--paper)`. `display: flex; justify-content: space-between`.
- coordinate circle: `width: 60px; height: 60px; border: 1px solid var(--paper); border-radius: 50%` with rotated line graphic inside.

lists:
- items separated by `border-bottom: 1px solid var(--ink-dim)`.
- each item: `padding: 12px 0; display: flex; justify-content: space-between`.
- labels in monospace, values in Syne bold.
- active item: `color: var(--rust)`.

tables:
- `border: var(--border-width) solid var(--ink); border-collapse: collapse`.
- header: `background: var(--ink); color: var(--paper); font-family: "Space Mono"; text-transform: uppercase; letter-spacing: 0.08em; padding: 8px 12px; font-size: 0.7rem`.
- cells: `padding: 8px 12px; border-bottom: 1px solid var(--ink-dim); font-family: "Syne"; font-size: 0.85rem`.

dividers:
- primary: `height: 1.5px; background: var(--ink); width: 100%`.
- section break: full-width line with a star graphic centered on it.
- decorative: monospace text separator `// — //` centered.

modals/overlays:
- `background: var(--paper); border: var(--border-width) solid var(--ink); border-radius: 0px; padding: var(--pad-lg)`.
- backdrop: `background: rgba(18, 18, 18, 0.6); backdrop-filter: blur(4px)`.
- modal title in Abril Fatface, large, with divider rule below.

badges/tags:
- pill-shaped: `border: var(--border-width) solid var(--ink); border-radius: 50px; padding: 3px 12px; font-family: "Space Mono"; font-size: 0.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em`.
- status badges use color fills: `background: var(--rust); color: var(--paper); border-color: var(--rust)` for active, `background: var(--terra-green); color: var(--paper)` for confirmed, `background: var(--sun-gold); color: var(--ink)` for pending.

data blocks:
- positioned absolutely in margins or corners of hero areas.
- `font-family: "Space Mono"; font-size: 0.6rem; line-height: 1.4; color: var(--ink); text-transform: uppercase; max-width: 150px`.
- contain telemetry-style readouts: `ATMOSPHERE: 95% CO2`, `DISTANCE: 225M KM`, `STATUS: [ACTIVE]`.
- bracket notation for status tags: `[ACTIVE]`, `[UNINHABITABLE]`, `[PRE-ORDER]`.

**interaction language**

hover:
- pills/buttons: `background: var(--ink); color: var(--paper); transition: all 0.3s ease`. accent pills: `background: var(--rust); color: var(--paper)`.
- links: `text-decoration: underline; text-underline-offset: 3px`.
- cards: no change — static.

active/pressed:
- `transform: translate(0, 1px)`. for pills: momentary inversion holds.

focus:
- `outline: 1.5px dashed var(--rust); outline-offset: 3px`. no glow, no shadow.

selected:
- pill filled: `background: var(--ink); color: var(--paper)`.
- list items: `color: var(--rust); border-left: 2px solid var(--rust); padding-left: 8px`.

disabled:
- `opacity: 0.35; pointer-events: none`. border and text both fade.

drag:
- `outline: 1.5px dashed var(--ink); opacity: 0.7; cursor: grab`. while dragging: `cursor: grabbing`.

**motion & feedback**

transitions:
- default: `transition: all 0.3s ease` on interactive elements. the genome allows smooth transitions — it's editorial, not brutalist.
- background/color transitions feel like ink soaking into paper — not snappy, but deliberate.

loading:
- pulsing status dot: `animation: pulse 2s infinite` (opacity 1 → 0.5 → 1). monospace text: `TRANSMITTING...` or `SCANNING SECTOR...`.

success:
- brief flash of `var(--terra-green)` background on the element for 200ms, then fade back. monospace confirmation: `CONFIRMED`.

error:
- border shifts to `var(--danger)`. error text in monospace: `[ERROR] SIGNAL LOST` or `[ERROR] INVALID COORDINATES`. bracket prefix mandatory.

**atmosphere**

background:
- body: `background-color: var(--paper)` — warm aged stock.
- SVG noise filter applied to textured areas: `feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3"` with `filter: url(#noise)` at low opacity (`0.1`) and `mix-blend-mode: overlay`.
- `mix-blend-mode: multiply` on hero title wrappers — makes serif display text feel printed into the paper.

terrain graphics:
- CSS `clip-path: polygon(...)` shapes filled with `var(--terra-green)` or `var(--rust)` to create abstract topographic landmass silhouettes. example: `clip-path: polygon(0% 60%, 15% 45%, 30% 55%, 50% 35%, 70% 50%, 85% 40%, 100% 55%, 100% 100%, 0% 100%)`. contour lines at `stroke-width: 0.5px; mix-blend-mode: multiply`.
- layered: terrain fill + noise overlay + content on top.

ambient details:
- 4-point or 8-point star SVG decorations: `stroke: var(--ink); stroke-width: 1.5; fill: none`, size range 24–48px. positioned near titles and at section intersections.
- pulsing status dots (`8px` circles in `var(--rust)`) to suggest live telemetry.
- coordinate circles: thin-border circles with rotated line graphics inside — navigational instrument motifs.
- horizontal rules that extend full viewport width through hero titles — structural lines anchoring the composition.

3D elements (when supported):
- WebGL sphere with custom shader using the genome's color palette — procedural noise-based terrain coloring (rust landmass, green vegetation, paper-colored ice caps).
- positioned as fixed background behind UI layer at `opacity: 0.9; pointer-events: none`.
- mouse-reactive rotation for parallax depth.

**editorial voice**

button labels: `Mission 2034`, `Terraform Protocol`, `Status: Active`, `Deploy`, `Scan Sector`, `Initialize`, `Transmit`, `View Manifest`
- title case for mission-critical labels, uppercase for terse actions. evokes agency mission control.

headings: mixed case — Abril Fatface display titles are single powerful words or short phrases: `MARS`, `TRAJECTORY`, `SECTOR REPORT`, `BASE ALPHA`. section headings in Syne: `Mission Parameters`, `Terrain Analysis`, `Crew Manifest`.

metadata format:
- coordinates: `SECTOR 7 / VALLES MARINERIS`
- distances: `225M KM` — abbreviated units, no decimals
- temperatures: `-63°C` — with degree symbol
- dates: `EST. 2034` or `T-MINUS 12Y`
- statuses: bracket notation `[ACTIVE]`, `[UNINHABITABLE]`, `[PRE-ORDER TICKET]`
- IDs: `BASE ALPHA`, `ARES DIVISION`, `UAC // SECTOR 7`

placeholders: `ENTER COORDINATES`, `SEARCH MANIFEST...`, `SECTOR ID`, `CREW NAME`

empty states: `NO SIGNAL DETECTED` / `SECTOR UNMAPPED` / `AWAITING TRANSMISSION` — monospace, uppercase, evocative but terse. no emoji.

error messages: `[ERROR] SIGNAL LOST — RETRY TRANSMISSION` / `[ERROR] INVALID COORDINATES` / `[ERROR] SECTOR UNREACHABLE` — bracket-prefixed, uppercase, mission-control tone.

success messages: `TRANSMISSION CONFIRMED` / `SECTOR MAPPED` / `COORDINATES LOCKED` / `MANIFEST UPDATED` — uppercase, terse, no punctuation beyond the statement.

**cursor & selection**

- default: `cursor: default`
- interactive (buttons, links, pills): `cursor: pointer`
- text inputs: `cursor: text`
- drag targets: `cursor: grab` / `cursor: grabbing`
- disabled: `cursor: not-allowed`
- `::selection { background: var(--rust); color: var(--paper); }` — rust highlight on paper, like a terrain marker

**when to reach for this genome**

Use `frontier_dispatch.terra` when the prompt asks for expedition briefings, Mars or lunar missions, terrain surveys, colony planning, cartographic product pages, exploration dashboards, agency-style launch posters, science-magazine mission pages, atlas interfaces, or any product that should feel like a printed space-agency field dispatch on aged paper.

Reach for it when the visual cues are massive serif mission titles, warm paper stock, rust/terra-green/sun-gold accents, pill-shaped controls, topographic landmass shapes, coordinate circles, star-line SVG decorations, grunge/noise texture, monospace sector metadata, and copy like `SECTOR 7`, `[ACTIVE]`, `TRANSMISSION CONFIRMED`, or `TERRAFORM PROTOCOL`. It is strongest when the interface can read as a mission poster plus briefing sheet: map, scan, deploy, transmit, route, manifest, and report terrain status.

Do not use it for naturalist notebooks, botanical specimen sketches, hand-numbered field observations, or zero-motion paper journals; use `field_journal.expedition`. Do not use it for olive-drab military technical manuals, WARNING/CAUTION/DANGER classification, rugged maintenance procedures, or stencil-stamped equipment records; use `milspec_field.tm`. Do not use it for operational weather offices, NWS warning products, radar composites, isobars, METAR/TAF, or forecast desks; use `weather_bureau.wx`. Do not use it for aircraft avionics, pilot route management, altitude/speed tapes, glass-cockpit displays, or safety-critical flight procedures; use `flight_deck.pfd`. Do not use it for warm 1970s camera/NASA hardware, backlit toggles, squircles, or Dieter Rams control decks; use `panavision.70s`. Do not use it for institutional finance publications, cool Swiss report grids, or black/red macro research panes; use `structured_folio.swiss` or `institutional_wire.macro`.

**anti-patterns — this genome NEVER:**

1. uses gradient fills on UI elements — all colors are flat, solid swatches. texture comes from SVG noise overlays, not CSS gradients on components.
2. uses drop shadows or `box-shadow` for depth — depth comes from borders, color fills, and layered clip-path terrain shapes.
3. uses rounded corners on panels or structural containers — only pills (buttons, badges, inputs) get `border-radius: 50px`. panels are always `border-radius: 0px`.
4. uses sans-serif fonts for display/hero titles — display text is always serif (Abril Fatface). Syne handles body/headings, Space Mono handles data.
5. uses lowercase for data readouts or metadata — all monospace data blocks are strictly uppercase.
6. uses emoji, illustrative icons, or photographic imagery — decoration is geometric SVG line art (stars, circles, lines) and CSS clip-path terrain shapes only.
7. uses light or pastel accent colors — accents are saturated and earthy: rust (#C85228), terra-green (#2A5A42), sun-gold (#D4A044). no pastels, no neons.
8. uses more than three accent colors beyond ink — the palette is strictly rust + terra-green + sun-gold. no additional hues.
9. uses casual or friendly editorial tone — the voice is mission-control: terse, authoritative, technical. no "oops", no "please try again", no conversational warmth.
10. uses card-based layouts with shadows or floating panels — content is anchored to the paper by borders and structural lines, never floating above it.
