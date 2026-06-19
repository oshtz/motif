---
id: "95"
name: split_flap.rail
keywords:
  - railway
  - train
  - timetable
  - departure
  - platform
  - split-flap
  - solari
  - station
  - schedule
  - track
  - conductor
  - express
  - bradshaw
---

### genome 95: `split_flap.rail`

> identity: Railway departure board and printed timetable. Solari di Udine split-flap mechanical displays clacking through destinations, printed Bradshaw's timetable density, platform indicators, railway company livery colors. The grand Victorian railway station concourse at Paddington or Grand Central — not underground metro signage (that's genome 63), this is overground mainline rail with its printed timetable heritage, ornate station architecture, and the hypnotic mechanical cascade of the departure board. BR double-arrow logo, InterCity 125 livery, the smell of diesel and newsprint and station tea.

**surface**

colors:
```
--board-black: #1A1A1E;
--flap-cream: #F0E8D4;
--rail-green: #1B4D3E;
--signal-red: #CC2936;
--brass-trim: #B8963E;
--timetable-cream: #F5F0E0;
--platform-gray: #6B6B6B;
--express-blue: #1E3A6E;
--flap-shadow: rgba(0,0,0,0.55);
--row-rule: rgba(240,232,212,0.12);
--timetable-rule: rgba(26,26,30,0.15);
--board-mid: #26262C;
```

typography:
- split-flap display / timetable data: `"DM Sans", "Barlow Condensed", "Arial Narrow", sans-serif` — condensed sans is essential; flap characters are portrait-aspect rectangles. `font-variant-numeric: tabular-nums` on all numeric fields. `letter-spacing: 0.04em` on display characters, `-0.01em` on condensed headings.
- station name / heading: `"Playfair Display", "Georgia", serif` — the great Victorian station nameboards used painted serif lettering. `font-weight: 700; letter-spacing: 0.01em`.
- timetable columns: `"DM Sans", "Barlow Condensed", sans-serif` at `font-size: 11-13px; font-weight: 500; font-variant-numeric: tabular-nums` — identical cadence to printed Bradshaw. condensed weight allows many station columns.
- sizes: station-name hero `40-60px`, board destination `22-32px`, timetable body `11-13px`, metadata/platform `12-14px`, footer notice `11px`.
- weights: `400` timetable body, `500` timetable headers, `600` board metadata, `700` destination name and headings, `800` station hero.
- `line-height: 1.2` on board rows (dense), `1.4` on timetable rows, `1.0` on individual flap characters.
- `text-transform: uppercase` on all board display text, platform numbers, and column headers. Mixed-case on station hero serif heading only.

borders:
- board flap character cells: `border-radius: 2-4px` — the rounded corners of a physical flap tile. Each character is a discrete mechanical rectangle.
- timetable grid: `border-radius: 0px` — printed paper has no radius. All grid lines are hairline rules.
- structural panels: `border-radius: 2px` maximum. The station is built of iron and glass, not soft curves.
- board rows: `border-bottom: 1px solid var(--row-rule)` — separating departures like lines on a printed board.
- timetable cells: `border-right: 1px solid var(--timetable-rule); border-bottom: 1px solid var(--timetable-rule)` — the dense ruled grid of the Bradshaw.
- livery accent: `border-left: 4px solid var(--rail-green)` or `var(--express-blue)` on service cards — railway company colour strip.
- brass hardware: `border: 1px solid var(--brass-trim)` on panel frames and ornamental fittings.

spacing:
- board rows: `padding: 10px 20px; gap: 0` — rows pack tightly, each departure claiming its lane. Row height `48px` minimum for legibility.
- timetable cells: `padding: 4px 8px` — Bradshaw density. Columns are narrow, data is compressed.
- flap character: `width: 28px; height: 40px; padding: 0` — portrait-aspect tile with 2-4px radius.
- section spacing: `gap: 0` between board rows; `gap: 24-32px` between timetable and board zones.
- concourse header: `padding: 24px 32px`.
- `max-width: 1100px` on timetable grids to prevent column sprawl.

**color distribution**
- 50% board-black / board-mid — the split-flap display cabinet face. the dark field that departure information floats on.
- 20% flap-cream / timetable-cream — the face of each flap tile, the timetable paper. legible against the dark board.
- 12% rail-green — heritage livery panels, section headers, primary action states. British Rail dark green authority.
- 8% express-blue — express service indicators, information panels, secondary navigation. InterCity blue discipline.
- 5% brass-trim — station hardware accents, ornamental borders, feature highlights. the Victorian brass of bufferstop and handrail.
- 3% signal-red — delay indicators, cancellations, warnings. red means stop; it is never decorative.
- 2% platform-gray — secondary text, departed service metadata, inactive states. the concrete of the platform itself.

**component patterns**

SPLIT-FLAP DEPARTURE BOARD (the signature element): the centrepiece of the genome. A dark cabinet face showing departing services in columnar format — TIME | DESTINATION | VIA | PLATFORM | STATUS. `background: var(--board-black); font-family: "DM Sans", "Barlow Condensed", sans-serif; text-transform: uppercase`. Each character occupies a flap tile: `display: inline-block; width: 28px; height: 40px; background: var(--board-mid); color: var(--flap-cream); border-radius: 3px; font-size: 22px; font-weight: 700; line-height: 40px; text-align: center; box-shadow: inset 0 -2px 0 var(--flap-shadow)` — the shadow at the base of each tile simulates the physical split. The mid-tile horizontal split: `border-bottom: 1px solid rgba(0,0,0,0.6)` at exact vertical midpoint of each character. Characters animate with the split-flap cascade (see motion). Row: `display: flex; align-items: center; gap: 4px; padding: 8px 20px; border-bottom: 1px solid var(--row-rule)`. Active/next departure row: `background: rgba(240,232,212,0.05)`. Departed row: `opacity: 0.4`.

buttons: primary action — `background: var(--rail-green); color: var(--flap-cream); border: none; border-radius: 2px; font-family: "DM Sans", sans-serif; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; font-size: 13px; padding: 10px 24px`. Secondary: `background: transparent; color: var(--flap-cream); border: 1px solid var(--brass-trim); border-radius: 2px; padding: 10px 22px`. Express / blue service: `background: var(--express-blue); color: white`. Warning/disruption: `background: var(--signal-red); color: white`. All buttons `min-height: 40px`. Labels are station-operations terse: `"VIEW TIMETABLE"`, `"SELECT PLATFORM"`, `"CHECK AVAILABILITY"`, `"BOOK SEAT →"`.

inputs: `background: var(--timetable-cream); border: 1px solid rgba(26,26,30,0.25); border-radius: 2px; color: var(--board-black); font-family: "DM Sans", sans-serif; font-size: 14px; font-weight: 500; padding: 9px 14px`. Focus: `border-color: var(--rail-green); box-shadow: 0 0 0 2px rgba(27,77,62,0.18)`. Label: `font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em; color: var(--platform-gray); margin-bottom: 4px`. Placeholder: `color: rgba(26,26,30,0.4)`. Search inputs for stations: prepend a magnifying glass at `color: var(--platform-gray)`.

cards / service panels: `background: var(--timetable-cream); border-radius: 2px; border-left: 4px solid var(--rail-green); padding: 16px 20px; box-shadow: 0 1px 4px rgba(26,26,30,0.1)`. Express service: `border-left-color: var(--express-blue)`. Delayed service: `border-left-color: var(--signal-red)`. Title (train name / service): `font-family: "Playfair Display", serif; font-size: 18px; font-weight: 700; color: var(--board-black)`. Route metadata below in `font-family: "DM Sans", sans-serif; font-size: 12px; color: var(--platform-gray); line-height: 1.5`. Platform badge right-aligned.

TIMETABLE GRID (signature element): the dense printed-timetable layout from Bradshaw's era. `background: var(--timetable-cream); border: 1px solid var(--timetable-rule); border-radius: 0; overflow: hidden`. Column header (station name, vertical orientation or abbreviated): `background: var(--rail-green); color: var(--flap-cream); font-family: "DM Sans", sans-serif; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; padding: 6px 4px; writing-mode: vertical-rl; text-orientation: mixed` or horizontal if space allows. Row header (service / train number): `font-weight: 600; color: var(--board-black); font-size: 11px`. Time cells: `font-family: "DM Sans", sans-serif; font-variant-numeric: tabular-nums; font-size: 11px; padding: 4px 8px; border-right: 1px solid var(--timetable-rule); border-bottom: 1px solid var(--timetable-rule); text-align: center; color: var(--board-black)`. Dash (train does not stop): `color: var(--platform-gray); content: "—"`. Express column (limited stops): `background: rgba(30,58,110,0.05)` on column. Every 5th row: `background: rgba(26,26,30,0.03)` — Bradshaw's alternating tint for row tracking. `font-feature-settings: "tnum" 1` global on timetable.

navigation: `background: var(--board-black); border-bottom: 2px solid var(--brass-trim); padding: 0`. Tabs representing service types: `padding: 12px 22px; font-family: "DM Sans", sans-serif; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(240,232,212,0.5); border-bottom: 3px solid transparent; margin-bottom: -2px`. Active tab: `color: var(--flap-cream); border-bottom-color: var(--brass-trim)`. Hover: `color: var(--flap-cream)`. Tab labels: `"DEPARTURES"`, `"ARRIVALS"`, `"TIMETABLE"`, `"PLATFORMS"`, `"SERVICES"`.

headers: station concourse nameplate — `background: var(--board-black); padding: 24px 32px; border-bottom: 3px solid var(--brass-trim)`. Station name in `font-family: "Playfair Display", serif; font-size: 44px; font-weight: 700; color: var(--flap-cream); letter-spacing: 0.01em`. Region / TOC (Train Operating Company) in `font-family: "DM Sans", sans-serif; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--brass-trim); margin-top: 4px`. Current time (clock) top-right in `font-family: "DM Sans", sans-serif; font-variant-numeric: tabular-nums; font-size: 28px; font-weight: 700; color: var(--flap-cream)`.

footers: `background: var(--board-black); border-top: 1px solid var(--row-rule); padding: 10px 32px; display: flex; justify-content: space-between; align-items: center`. Left: TOC name and logo placeholder. Centre: `font-size: 11px; color: var(--platform-gray); text-transform: uppercase; letter-spacing: 0.04em` — last updated timestamp. Right: `font-size: 11px; color: var(--platform-gray)` — service information notice, e.g., `"JOURNEY TIMES ARE INDICATIVE ONLY"`.

lists: departure row list — each entry: TIME (monospace, tabular), DESTINATION (condensed bold, fixed-width truncate), VIA (lighter weight, platform-gray), PLATFORM (badge, see below), STATUS badge. `display: grid; grid-template-columns: 72px 1fr 160px 60px 100px; align-items: center; gap: 12px`. Rows: `padding: 10px 20px; border-bottom: 1px solid var(--row-rule)`. Imminent departure (≤5 min): `background: rgba(240,232,212,0.06)`. Cancelled row: `opacity: 0.55; text-decoration: line-through` on destination only.

tables: supplementary data tables (rolling stock, connections) — `border: 1px solid var(--timetable-rule); border-radius: 0`. Header row: `background: var(--rail-green); color: var(--flap-cream); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; padding: 8px 12px`. Body cells: `background: var(--timetable-cream); color: var(--board-black); font-size: 12px; padding: 8px 12px; border-bottom: 1px solid var(--timetable-rule)`. Alternating rows: `background: rgba(26,26,30,0.025)`. Numbers right-aligned with `font-variant-numeric: tabular-nums`.

dividers: board row divider `1px solid var(--row-rule)`. Section divider (between zones): `3px solid var(--brass-trim)`. Timetable column separator: `1px solid var(--timetable-rule)`. Livery stripe (decorative): `4px solid var(--rail-green)` or `var(--express-blue)` as left or top accent on major sections.

modals / service alerts: `background: var(--timetable-cream); border-radius: 2px; border-top: 5px solid var(--signal-red); box-shadow: 0 8px 32px rgba(26,26,30,0.35)`. Delay modal: `border-top-color: var(--signal-red)`. Information modal: `border-top-color: var(--express-blue)`. Header: `padding: 16px 24px; border-bottom: 1px solid var(--timetable-rule); font-family: "DM Sans", sans-serif; font-weight: 700; text-transform: uppercase; font-size: 13px; color: var(--board-black)`. Body: standard paragraph text in timetable-cream context. Backdrop: `background: rgba(26,26,30,0.6)`. No blur.

badges / platform indicators: platform number — `display: inline-flex; align-items: center; justify-content: center; min-width: 36px; height: 24px; background: var(--rail-green); color: var(--flap-cream); font-family: "DM Sans", sans-serif; font-size: 12px; font-weight: 700; border-radius: 2px; padding: 0 8px`. Express badge: `background: var(--express-blue)`. Status badges: `font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; padding: 2px 8px; border-radius: 2px`. On time: `background: rgba(27,77,62,0.15); color: var(--rail-green); border: 1px solid var(--rail-green)`. Delayed: `background: rgba(204,41,54,0.12); color: var(--signal-red); border: 1px solid var(--signal-red)`. Cancelled: `background: var(--signal-red); color: white`. Boarding: `background: var(--brass-trim); color: var(--board-black)`.

**interaction language**

hover: board rows — `background: rgba(240,232,212,0.06); transition: background 0.1s ease`. Timetable cells — `background: rgba(27,77,62,0.08)`. Cards — `box-shadow: 0 3px 10px rgba(26,26,30,0.15); border-left-width: 5px; transition: 0.12s ease`. Buttons — `filter: brightness(1.08)`. No glow, no scale — the departure board is a physical fixture, not a touchscreen toy.

active / pressed: buttons — `filter: brightness(0.88); transform: scale(0.98); transition: 0.05s ease`. Rows — `background: rgba(240,232,212,0.1)`. The physical click of a mechanical selector.

focus: `outline: 2px solid var(--brass-trim); outline-offset: 2px`. On dark (board) backgrounds: `outline-color: var(--flap-cream)`. High-visibility for keyboard navigation through timetable grids.

selected: row / service — `background: rgba(27,77,62,0.12); border-left: 3px solid var(--rail-green)`. Timetable cell — `background: rgba(27,77,62,0.15); outline: 1px solid var(--rail-green)`. Platform indicator — filled `var(--rail-green)` with white text.

disabled: `opacity: 0.35; pointer-events: none` — like a service no longer calling at this station. The row remains visible but is clearly out of service.

drag: `opacity: 0.75; box-shadow: 0 6px 20px rgba(26,26,30,0.3); cursor: grabbing` — lifting a timetable column to reorder. Not common in this genome; timetable data is fixed.

**motion & feedback**

transitions: `0.1-0.15s ease` for colour and shadow changes. All non-flap transitions are minimal. The UI does not animate to entertain; it changes state to communicate.

SPLIT-FLAP CASCADE ANIMATION (the definitive motion signature): each character flips through a stepped sequence of values before landing on the final letter. `@keyframes flap-step { 0% { transform: rotateX(0deg); } 49% { transform: rotateX(-90deg); opacity: 0.3; } 50% { transform: rotateX(90deg); opacity: 0.3; } 100% { transform: rotateX(0deg); } }`. Each flap character: `animation: flap-step 0.08s ease-in-out`. Characters cascade left-to-right across a row with `animation-delay: calc(var(--char-index) * 0.04s)`. A full destination change cascades across a row in approximately 0.5-0.8s total. The `box-shadow: inset 0 -20px 12px var(--flap-shadow)` on the lower half of each character deepens during rotation, simulating the shadow cast by the flap edge. Multiple rows update in sequence — never simultaneously — the board works through departures top to bottom with a `150ms` stagger per row. The sound of this (not implemented but implied): the iconic clacking of the Solari board.

loading: the split-flap cascade running through placeholder characters — `?` or `░` characters cycling through the board while data loads. Amber-tinted version of the cascade. Never a spinner. The board always appears to be working, searching through its drum of flaps.

success: the target row settles on its final value after the cascade. A brief `background: rgba(240,232,212,0.12)` flash on the completed row — `0.2s` — then settles. No toast, no banner. The board confirming a booking shows the service in `boarding` status badge.

error: a `CANCELLED` status badge replaces the platform indicator. The row destination gains `text-decoration: line-through`. A signal-red service alert card slides down from the board header: `background: var(--signal-red); color: white; padding: 10px 24px; font-family: "DM Sans", sans-serif; font-weight: 700; text-transform: uppercase; font-size: 13px`. Holds for 5s. Calm and authoritative — the station announcer does not panic.

page enter: the board initialises from top to bottom — rows populate with the cascade animation in sequence, `150ms` stagger, over approximately 1.2s total for a full board. The timetable grid fades in from `opacity: 0` to `1` over `0.2s`. The station clock ticks into position. This is the only entrance animation; it earns its place because it IS the product.

**atmosphere**

background: `var(--board-black)` for the departure board zone. `var(--timetable-cream)` for the printed timetable zone. The layout is a study in contrast: the dark electromechanical board cabinet against warm Victorian printed paper. The concourse lives between these two worlds.

board texture: a very subtle radial vignette from the centre of the board — `background: radial-gradient(ellipse at 50% 40%, rgba(38,38,44,0) 40%, rgba(10,10,12,0.3) 100%)` — the uneven illumination of a real departure board cabinet lit from within.

timetable texture: faint horizontal rules on the timetable-cream background — `background-image: repeating-linear-gradient(0deg, transparent, transparent 23px, rgba(26,26,30,0.06) 23px, rgba(26,26,30,0.06) 24px)` — suggesting the pre-printed lines of a Bradshaw page or station notice pad.

brass accents: `var(--brass-trim)` appears as `3px` horizontal bands on panel headers, as badge borders, as focus outlines, as the bottom border of the main navigation — the station's visible ironmongery. Never background fills; always structural trim.

clock: a large, monospaced `font-variant-numeric: tabular-nums` clock in `var(--flap-cream)` against `var(--board-black)`. Digits update with the cascade animation (individual digit cascade on seconds column, full cascade on minute change). This is an ambient fixture, not an interactive element.

concourse geometry: the overall layout evokes the station concourse — the board suspended overhead (full-width, dark), the timetable booklets laid out on the counter below (cream, gridded), the platform indicators along the bottom. A persistent brass rule `3px solid var(--brass-trim)` separates these zones like the ironwork of a station balustrade.

**editorial voice**

Station-operations terminology. Factual, formal, period-appropriate. The stationmaster's diction.

button labels: `"VIEW TIMETABLE"`, `"CHECK PLATFORM"`, `"ENQUIRE →"`, `"BOOK PASSAGE"`, `"PRINT TICKET"`, `"← BACK TO CONCOURSE"`, `"CONFIRM RESERVATION"`, `"CANCEL BOOKING"`.

headings: station nameplate cadence. `"LONDON PADDINGTON"`, `"DEPARTURES — MAIN LINE"`, `"BRADSHAW'S TIMETABLE — SUMMER SERVICE"`, `"PLATFORM 4 — GREAT WESTERN SERVICES"`, `"STOPPING SERVICES — ALL STATIONS TO PENZANCE"`, `"EXPRESS SERVICES — BRISTOL TEMPLE MEADS"`, `"SERVICE ALTERATIONS"`, `"CONNECTIONS AT READING"`.

metadata: timetable annotation format. `"dep. 14:32 · arr. 17:15 · Plat. 4"`, `"InterCity 125 · Class 43 Power Car"`, `"Calls at: Swindon, Bristol Parkway, Bristol Temple Meads"`, `"Seat reservation recommended"`, `"Mondays to Saturdays excepted"`, `"Does not call at Bath Spa"`, `"Timings subject to pathing"`.

placeholders: `"Station or destination..."`, `"Enter service number..."`, `"Date of travel..."`, `"Ticket reference..."`.

empty states: `"No departures within the next hour."`, `"Timetable not available for this period."`, `"No services calling at this platform."`, `"Consult station staff for assistance."`.

error messages: `"Service cancelled — engineering works."`, `"Platform alteration in effect."`, `"Connection not available on this date."`, `"Reservation not found."`.

success messages: `"Reservation confirmed."`, `"Seat allocated — Coach C, Seat 42."`, `"Timetable loaded."`, `"Platform confirmed."`.

**cursor & selection**

cursor: `default` globally. `pointer` on all interactive elements — buttons, cards, nav tabs, timetable rows. `cell` on individual timetable cells when data-entry mode is active. No custom cursors.

text selection: `::selection { background: var(--rail-green); color: var(--flap-cream); }` — the green livery fills selected text like a platform name highlighted on a printed notice.

**when to reach for this genome**

Use `split_flap.rail` when the prompt asks for overground railway timetables, intercity departure boards, station concourse status screens, platform allocation, rail booking, train service disruption, printed timetable grids, or any product that should feel like a mainline rail station translating mechanical departure infrastructure into interface.

Reach for it when the visual/product cues are Solari split-flap tiles, condensed uppercase destinations, dark board cabinets, cream mechanical characters, platform badges, brass trim, InterCity or heritage rail livery, Bradshaw-style dense timetable paper, station clocks, route/via columns, and formal station-announcement copy such as `DEPARTURES`, `PLATFORM 4`, `SERVICE ALTERATIONS`, or `Seat reservation recommended`. It is strongest when the user needs schedule scanning, destination comparison, platform confirmation, delay/cancellation states, and the physical rhythm of a board updating one row at a time.

Choose it for rail reservation tools, station kiosks, timetable browsers, train-status dashboards, heritage transport sites, railway museum interactives, route-connection planners, and service boards where time, destination, via, platform, and status are the core columns.

Do not choose it for underground or civic wayfinding systems with Helvetica, route-color strips, roundels, directional arrows, or schematic line maps; use `transit_wayfinding.sys`. Do not use it for stock quotes, LED market boards, ticker tape, green/red deltas, or trading-floor pressure; use `ticker_floor.nyse`. Do not use it for aviation instruments, flight modes, runway procedures, or cockpit scanning; use `flight_deck.pfd`. Do not use it for weather advisories, station model charts, radar, or forecast bulletins; use `weather_bureau.wx`. Do not use it for generic public signage without rail nostalgia, mechanical tiles, or printed timetable density; route to the more specific civic, aviation, finance, or logistics genome.

**anti-patterns — this genome NEVER:**

1. uses the metro / underground visual language — rounded sans-serif on enamel, coloured roundels, route-colour nav strips. That is genome 63. Split-flap rail uses condensed DM Sans / Barlow Condensed for the board and Playfair Display for station names. The two genomes are railway siblings but entirely different beasts: overground mainline vs. underground metro.
2. uses border-radius above 4px. The 2-4px on flap characters reflects mechanical tile edges. Everything else is 0-2px. No pills, no large rounded cards, no stadium buttons. The station is built of right angles.
3. uses the split-flap cascade animation on static informational text. The cascade is THE motion signature and is reserved for the departure board and clock. Decorative flipping of headings, hero text, or page transitions is a misappropriation of the mechanical metaphor.
4. uses signal-red as a livery or brand colour. Red means delay, cancellation, or danger — always and only. It never appears as a primary button colour, section accent, or decorative element.
5. uses soft gradients, blurs, or glow effects on board characters. The flap tiles are flat, matte, cream on dark. No text-shadow, no glow, no luminescence. Split-flap boards are mechanical, not electronic.
6. uses sans-serif for station hero headings. The Playfair Display serif is the stationmaster's painted nameboard — the Victorian rail heritage. Condensed sans is for the board's data display only. They serve different roles and must not be swapped.
7. uses sparse, airy layouts with generous whitespace in timetable zones. Bradshaw's timetable is the densest printed document in the English language. Timetable grids must be dense — `4px 8px` cell padding, `10-11px` type, compressed columns. Whitespace is for the concourse heading, not the grid.
8. uses modern, casual, or consumer-tech language. No "Oops!", no "Let's find you a train!", no emoji. The voice is the station announcer's — formal, complete, unambiguous. "The 14:32 service to Bristol Temple Meads is now boarding at Platform 4. Customers requiring assistance should make themselves known to station staff."
9. uses colour as the sole indicator for service status. Status is always conveyed through badge text + colour + (where possible) icon. A delayed service shows the word "DELAYED" in signal-red — not a red dot alone. Accessibility follows the same principle as printed timetable design: text is the primary channel.
10. uses smooth CSS transitions on the departure board's flap characters. The cascade is a stepped, mechanical animation — `animation-timing-function: steps(1)` or `ease-in-out` with hard mid-point cuts. The physical mechanism has no easing; it snaps from flap to flap. Smooth interpolation between characters destroys the split-flap illusion entirely.
