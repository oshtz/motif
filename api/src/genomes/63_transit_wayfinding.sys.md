---
id: "63"
name: transit_wayfinding.sys
keywords:
  - transit
  - metro
  - subway
  - wayfinding
  - signage
  - station
  - platform
  - transport
  - navigation
  - helvetica
  - underground
  - public
---

### genome 63: `transit_wayfinding.sys`

> identity: international metro signage system. Helvetica on enamel panels, colored route-line strips, platform indicators, universal pictograms, directional arrows. The London Underground roundel, Tokyo Metro's clean precision, NYC MTA's color-coded chaos, Berlin U-Bahn's yellow authority. The UI exists to be read at speed while moving — legibility is everything, decoration is nothing. every element is a sign telling you where to go.

**surface**

colors:
```
--station-dark: #1A1D23;
--panel-white: #FFFFFF;
--enamel-cream: #F2EDE4;
--text-dark: #1A1D23;
--text-light: #FFFFFF;
--route-red: #E03C31;
--route-blue: #0057B8;
--route-green: #00A74A;
--route-yellow: #FFD100;
--route-orange: #F58220;
--route-purple: #7B2D8E;
--status-delayed: #F5A623;
--status-suspended: #D0021B;
--status-running: #00A74A;
--tile-gray: #2C2F36;
--divider: rgba(255,255,255,0.12);
```

typography:
- primary: `"Helvetica Neue", "Arial", sans-serif` — the canonical transit typeface. every piece of text on every sign in every station.
- alternative for softer signage: `"Source Sans Pro", "Frutiger", sans-serif` — Frutiger was literally designed for airport wayfinding (Charles de Gaulle).
- data/codes: `"JetBrains Mono", "SF Mono", monospace` at `font-size: 12-13px` — train numbers, platform codes, timestamps.
- weights: `500` body, `600` labels and metadata, `700` signage and headings, `800` hero station names.
- sizes: station-name display `36-56px`, section headers `22-28px`, body `16-18px`, labels/meta `12-14px`.
- `letter-spacing: 0.02em` on body. `0.05em` on uppercase labels. `-0.01em` on large display.
- `line-height: 1.5` body, `1.2` display.
- `text-transform: uppercase` on all labels, badges, and navigation items.

borders:
- structural: `2px solid rgba(255,255,255,0.15)` on dark backgrounds, `2px solid rgba(26,29,35,0.1)` on light.
- route-color accent strips: `4-6px solid var(--route-*)` as left or top border on cards and panels — the colored stripe that tells you which line you're on.
- `border-radius: 3-4px` maximum on rectangular elements. signage is rectangular.
- route-line roundels: `border-radius: 50%` — the ONLY circular element. a colored circle with a white line letter/number inside.

spacing:
- generous, functional. `padding: 16-24px; gap: 12-16px`.
- information groups clearly separated — like different signs on a station wall.
- consistent alignment. left-aligned text. no centered paragraphs.
- `max-width` constraints on text blocks for readability — signage doesn't span wall-to-wall.

**color distribution**
- 45% station-dark / tile-gray — the dark tiled station walls. the void that signs float on.
- 25% panel-white / enamel-cream — information panels, content areas. the lit surfaces.
- 15% text (white on dark, dark on light) — always maximum contrast against its background.
- 10% route colors — accent strips, line indicators, roundels, category markers. never as backgrounds for large areas.
- 5% status colors — running/delayed/suspended indicators. small, precise, meaningful.

**component patterns**

buttons: large, high-contrast, unmistakable. primary: `background: var(--route-blue); color: white; border: none; border-radius: 4px; font-family: "Helvetica Neue", sans-serif; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; font-size: 14px; padding: 12px 28px`. directional buttons include an arrow: `→` or `←` appended/prepended to label. secondary: `background: var(--panel-white); color: var(--station-dark); border: 2px solid var(--station-dark); border-radius: 4px`. danger/disruption: `background: var(--status-suspended); color: white`. all buttons have `min-height: 44px` — tappable at speed.

inputs: `background: var(--panel-white); border: 2px solid rgba(26,29,35,0.2); border-radius: 4px; color: var(--text-dark); font-family: "Helvetica Neue", sans-serif; font-weight: 500; font-size: 16px; padding: 12px 16px`. focus: `border-color: var(--route-blue); box-shadow: 0 0 0 2px rgba(0,87,184,0.2)`. placeholder: `color: rgba(26,29,35,0.4)`. label above in `font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; color: rgba(26,29,35,0.6)`.

cards/information panels: `background: var(--panel-white); border-radius: 4px; padding: 20px 24px; border-left: 5px solid var(--route-blue)` (route color varies per card). on dark backgrounds, cards float with `box-shadow: 0 2px 8px rgba(0,0,0,0.15)`. destination/title in `font-size: 22px; font-weight: 700`. metadata below in `font-size: 13px; color: rgba(26,29,35,0.6)`. clear information hierarchy: name > direction > time > platform.

DEPARTURE BOARD (signature element): a table-like component showing upcoming departures. `background: var(--station-dark); border-radius: 4px; overflow: hidden`. each row: `padding: 12px 20px; border-bottom: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; gap: 16px`. route roundel on left (colored circle, white text). destination in `font-weight: 600; color: white; font-size: 16px`. time in `font-family: monospace; color: var(--route-yellow); font-size: 16px` (yellow for emphasis). platform in `font-weight: 700; color: white`. status badge on right.

navigation: route-line tabs — `background: var(--station-dark); padding: 0; display: flex; border-bottom: 3px solid rgba(255,255,255,0.08)`. each tab: `padding: 12px 24px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; font-size: 13px; color: rgba(255,255,255,0.5); border-bottom: 3px solid transparent; margin-bottom: -3px`. active tab: `color: white; border-bottom-color: var(--route-*)` (the route's own color). the nav IS a route map — each tab represents a line.

headers: station-name signage — `background: var(--station-dark); padding: 20px 28px; border-bottom: 4px solid var(--route-blue)`. station name in `font-size: 36-48px; font-weight: 800; color: white; letter-spacing: -0.01em`. route roundels displayed inline next to station name. subtitle/direction in `font-size: 14px; text-transform: uppercase; color: rgba(255,255,255,0.5); letter-spacing: 0.06em; font-weight: 600`.

footers: `background: var(--tile-gray); border-top: 1px solid rgba(255,255,255,0.08); padding: 12px 24px; color: rgba(255,255,255,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em`. service status summary. network map link. timestamp in monospace.

lists: departure-board style — columnar layout. each row: route indicator (colored circle or strip), destination (bold), via-points (lighter weight), estimated time (monospace, right-aligned), platform (bold). rows separated by `1px solid var(--divider)`. active/next departure: `background: rgba(255,255,255,0.04)`.

tables: timetable format — `border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden`. header: `background: var(--tile-gray); color: rgba(255,255,255,0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; padding: 10px 16px`. cells: `background: var(--station-dark); color: white; padding: 10px 16px; border-bottom: 1px solid rgba(255,255,255,0.05)`. route-color indicators in first column. alternating row: `background: rgba(255,255,255,0.02)`.

dividers: route-color strips — `height: 4px; background: var(--route-blue); border: none; border-radius: 2px`. or thin structural: `1px solid var(--divider)`. major section dividers can be a full-width colored band.

modals: service alert / disruption announcement — `background: var(--panel-white); border-radius: 4px; border-top: 6px solid var(--status-suspended)` (color indicates severity). `box-shadow: 0 8px 32px rgba(0,0,0,0.4)`. header: route indicator + alert type in `font-weight: 700; text-transform: uppercase`. body: clear description of disruption. action buttons at bottom. backdrop: `background: rgba(26,29,35,0.7)`.

badges/status indicators: route roundels — `width: 28px; height: 28px; border-radius: 50%; background: var(--route-*); color: white; font-weight: 700; font-size: 13px; display: flex; align-items: center; justify-content: center`. service status: `font-size: 11px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.04em; padding: 3px 10px; border-radius: 3px`. running: `background: var(--status-running); color: white`. delayed: `background: var(--status-delayed); color: var(--station-dark)`. suspended: `background: var(--status-suspended); color: white`.

ROUTE MAP (signature element): a simplified transit map diagram. lines rendered as `4px` colored strokes connecting station dots (`width: 10px; height: 10px; border-radius: 50%; background: white; border: 3px solid var(--route-*)`). interchange stations: double-ring or larger dot. current position: pulsing indicator. the map is schematic, not geographic — angles are 45° or 90° only.

**interaction language**

hover: subtle background shift — `background: rgba(255,255,255,0.05)` on dark elements, `background: rgba(26,29,35,0.03)` on light. `transition: 0.12s ease`. route-color left strip widens from 5px to 7px on card hover. no glow, no shadow changes — signage doesn't glow.

active/pressed: `background` darkens one step. slight inset via `box-shadow: inset 0 1px 2px rgba(0,0,0,0.1)`. buttons: `transform: scale(0.98)`.

focus: `outline: 3px solid var(--route-blue); outline-offset: 2px`. high-visibility — accessibility is core to transit design. on route-colored elements: `outline-color: white`.

selected: `background: var(--route-blue); color: white`. or route-color fill appropriate to context. the selected state is unambiguous — you know which platform you picked.

disabled: `opacity: 0.3; pointer-events: none`. like a closed platform sign — visible but clearly non-functional.

drag: not emphasized — transit interfaces don't use drag. if required: `opacity: 0.8; box-shadow: 0 4px 12px rgba(0,0,0,0.2)`.

**motion & feedback**

transitions: `0.12-0.15s ease`. functional, invisible. the sign doesn't animate — the information changes. motion exists only to prevent jarring state changes, never to decorate.

loading: a horizontal progress bar in route color — `height: 3px; background: var(--route-blue)` sliding from left to right. or: three dots in route color, pulsing in sequence at 0.3s intervals. no spinners — spinners are decorative.

success: a small green status badge slides in — `background: var(--status-running); color: white` with `✓` icon. holds 2s, fades out over 0.2s. quiet, professional.

error: red alert banner slides down from top — `background: var(--status-suspended); color: white; padding: 10px 24px; font-weight: 600; text-transform: uppercase`. auto-dismisses after 4s or on tap. no shaking, no flashing — transit alerts are calm and authoritative.

page enter: content appears immediately. no staggered animations. information panels may fade from `opacity: 0` to `1` over `0.15s` — the only concession to enter animation. the genome prioritizes instant information delivery.

**atmosphere**

background: `var(--station-dark)` — the tiled tunnel wall. the void that signs are mounted on. a subtle tile pattern at 3-5% opacity: `background-image: repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px)` — suggesting ceramic station tiles.

information panels float on the dark wall — white rectangles with route-color accents, clearly delineated from the background. the contrast between dark wall and lit sign is the fundamental visual relationship.

route-color strips run horizontally across the layout — wayfinding lines that guide the eye. a persistent colored line at the top of the viewport (the "line indicator") tells you which route/context you're in.

directional arrows (→ ↑ ← ↓) appear as structural elements — in navigation, on buttons, as list markers. the arrow is the universal transit symbol.

no textures on information surfaces. panels are flat, lit, enamel-clean. the only texture is the subtle tile pattern on the dark station wall behind them.

**editorial voice**

functional, directional, zero-ambiguity. every word earns its place on the sign.

button labels: `"Proceed →"`, `"Select Line"`, `"View Schedule"`, `"Plan Route →"`, `"Get Directions"`, `"← Back"`, `"Confirm"`, `"Exit Station"`. always include directional arrow where applicable.

headings: station-name format, bold and clear. `"Central Station"`, `"Platform 4"`, `"Northbound Services"`, `"Service Updates"`, `"Network Map"`, `"Line Overview"`, `"Departures"`. no cleverness, no personality — pure information.

metadata: transit-data format. `"Line 3 · Westbound · 2 min"`, `"Arriving · Platform B · 14:32"`, `"Every 4 min · Peak hours"`, `"Via Baker St, Oxford Circus"`, `"Zone 1-2"`, `"3 stops · 7 min"`.

placeholders: `"Search stations..."`, `"Enter destination..."`, `"Station or postcode..."`.

empty states: `"No departures scheduled."`, `"Service information unavailable."`, `"Select a line to begin."`, `"No disruptions reported."`.

error messages: `"Service disrupted."`, `"Route not found."`, `"Connection unavailable."`, `"Station closed."`.

success messages: `"Route confirmed."`, `"Added to journey."`, `"Service running normally."`, `"Departure found."`.

**cursor & selection**

cursor: `default` globally. `pointer` on all interactive elements — buttons, tabs, cards, links, route roundels.

text selection: `::selection { background: var(--route-blue); color: white; }`.

**when to reach for this genome**

Use `transit_wayfinding.sys` when the prompt asks for metro, subway, station signage, route planning, public navigation, platform information, departure boards, line status, interchange maps, civic wayfinding, airport-adjacent directional systems, or any product that must be read quickly by people in motion.

Reach for it when the visual cues are Helvetica or Frutiger, dark station tile, enamel-white panels, route-color strips, circular line roundels, directional arrows, platform labels, service-status badges, schematic map lines, high contrast, and rigid information hierarchy. It is strongest when the product needs to reduce ambiguity: destination, direction, line, time, platform, status, and next action must be obvious at a glance.

Choose it for:
- transit apps, station kiosks, venue navigation, campus wayfinding, public-service dashboards, route planners, schedule boards, evacuation paths, and multi-step directional flows.
- products where labels like `Platform 4`, `Northbound`, `Line 3`, `2 min`, `Service running normally`, `Exit Station`, or `Plan Route` are native to the workflow.
- interfaces that need accessibility-first contrast, route color plus text redundancy, arrow-led navigation, and calm operational authority without decorative personality.

Do not choose it for overground railway nostalgia, mechanical split-flap boards, or printed timetable heritage; use `split_flap.rail` for those. Use `flight_deck.pfd` for cockpit instruments and aviation procedures, `weather_bureau.wx` for meteorological charts and alerts, `milspec_field.tm` for military technical documentation, `structured_folio.swiss` for Swiss institutional publishing without public navigation, and `subway_sticker.bombing` for street-level sticker/graffiti texture around transit infrastructure. If the prompt is about consumer travel inspiration, destination marketing, or lifestyle tourism, use a hospitality/editorial genome instead.

**anti-patterns — this genome NEVER:**
1. uses decorative, script, or display typefaces. typography is purely functional Helvetica/Frutiger — the only fonts proven readable at speed on signage.
2. uses border-radius above 4px on any rectangular element. route roundels (circles) are the sole exception. signage is rectangular.
3. uses drop shadows or glow effects on signage panels. signs are flat and evenly lit — not floating, not glowing. the only shadow is a subtle elevation on white cards over dark backgrounds.
4. uses gradient fills on UI elements. color is flat and solid — route red is `#E03C31` everywhere, not a gradient.
5. uses playful, casual, or emotional language. the voice is purely informational and directional. never "Oops!", never "Yay!", never questions to the user. signs don't have feelings.
6. uses dense, cramped layouts. spacing serves legibility at speed — a commuter glances at this for 0.5 seconds while walking. generous padding, clear grouping, breathing room.
7. uses dark text on dark backgrounds or any low-contrast combination. contrast ratio is WCAG AAA minimum. legibility is a safety requirement, not a preference.
8. uses animation for decoration. all motion is functional feedback — progress indication, state change acknowledgment. no entrance animations, no parallax, no ambient motion. the sign stands still.
9. uses warm, organic, or textured backgrounds on information surfaces. information panels are clinical white or cream enamel — clean, bright, institutional.
10. uses color as the sole differentiator. following transit accessibility standards, route information is always conveyed through color + text label + position. a colorblind commuter must still find their platform.
