---
id: "39"
name: ticker_floor.nyse
keywords:
  - trading
  - stock
  - exchange
  - ticker
  - led
  - floor
  - retro
  - nyse
  - pit
  - dot-matrix
  - 1980s
  - financial
---

### genome 39: `ticker_floor.nyse`

> identity: 1980s stock exchange trading floor. scrolling LED ticker boards, pit-trader urgency, green/red binary signals, paper tape spools and dot-matrix printouts. the physical, loud, analog trading floor — fluorescent-lit chaos, open-outcry energy, and data density that overwhelms. not a modern terminal; this is the room where traders scream.

**surface**

colors:
```
--floor-black: #1A1A1A;
--floor-green: #00FF00;
--floor-red: #FF0000;
--floor-amber: #FFB800;
--floor-tape: #E8E4D8;
--floor-dim: rgba(255, 255, 255, 0.25);
--floor-muted: rgba(255, 255, 255, 0.5);
--floor-grid: rgba(255, 255, 255, 0.12);
--floor-rule: 1px solid rgba(255, 255, 255, 0.2);
--floor-rule-heavy: 3px double rgba(255, 255, 255, 0.4);
```

typography:
- numbers / ticker values: `font-family: 'DSEG7 Classic', 'DSEG7', monospace; font-variant-numeric: tabular-nums;` — seven-segment LED display face. all numerals use this.
- text / labels / headers: `font-family: 'Share Tech Mono', 'Courier New', monospace; text-transform: uppercase; font-variant-numeric: tabular-nums;`
- ticker headlines: `font-size: clamp(1rem, 3vw, 1.6rem); font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;`
- body data: `font-size: 0.8rem; line-height: 1.3; font-weight: 400; letter-spacing: 0.02em;`
- metadata / timestamps: `font-size: 0.65rem; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: var(--floor-muted);`
- LED board display: `font-size: clamp(2rem, 5vw, 4rem); font-weight: 700; letter-spacing: 0.12em;` — large ticker readout numbers.
- paper tape: `font-size: 0.75rem; font-family: 'Share Tech Mono', monospace; line-height: 1.6; color: #1A1A1A; background: var(--floor-tape);`
- ALL text is uppercase everywhere. no exceptions. `text-transform: uppercase` is global.
- `text-wrap: stable` on data columns to prevent reflow during live updates.

borders:
- all structural elements: `border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 0px;` — hard grid lines forming dense table structures.
- section dividers: `border-top: 3px double rgba(255, 255, 255, 0.4);` — double-rule separators between major data zones.
- `border-radius: 0px` on everything. no exceptions. no pills, no rounded corners, nothing.
- column separators: `border-right: var(--floor-rule);` between every data column.
- row separators: `border-bottom: var(--floor-rule);` between every data row.

spacing:
- panel padding: `0.75rem`
- cell padding: `0.25rem 0.5rem`
- section gaps: `0rem` — zones are separated by double-rule borders, not whitespace.
- ticker bar padding: `0.5rem 1rem`
- data table density: rows at `1.4rem` height minimum — pack it tight.

**color distribution**

- 50% black (`--floor-black`) — primary background, the dark void of the trading floor at night.
- 20% green (`--floor-green`) — gain indicators, up-ticks, positive deltas, active buy signals. green GLOWS against the black.
- 15% red (`--floor-red`) — loss indicators, down-ticks, negative deltas, sell signals, urgent alerts. red GLOWS against the black.
- 10% amber (`--floor-amber`) — ticker tape text, scrolling headlines, neutral data, timestamps, symbol names.
- 5% tape (`--floor-tape`) — paper tape zones, printout areas, tear-sheet backgrounds.

critical: green and red are ALWAYS pure saturated (#00FF00, #FF0000) — they glow like LEDs. they are never muted, never desaturated, never pastel. amber is the neutral data color. the tape off-white is used sparingly for paper-output zones only.

**component patterns**

buttons:
- primary: `background: var(--floor-green); color: var(--floor-black); border: none; border-radius: 0; padding: 0.3rem 1rem; font-family: 'Share Tech Mono', monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700;` — hard-edged, LED green.
- sell/danger: `background: var(--floor-red); color: var(--floor-black);` — same structure, red.
- ghost: `background: transparent; border: 1px solid var(--floor-amber); color: var(--floor-amber); border-radius: 0;`
- buttons are BLOCKY, rectangular, tight. they look like physical hardware buttons on a console.

inputs:
- `background: var(--floor-black); border: 1px solid var(--floor-amber); color: var(--floor-amber); font-family: 'Share Tech Mono', monospace; font-size: 0.8rem; padding: 0.3rem 0.5rem; text-transform: uppercase; border-radius: 0;`
- label: uppercase, 0.6rem, `color: var(--floor-muted);` above the field.
- focus: `border-color: var(--floor-green); box-shadow: 0 0 4px var(--floor-green);` — LED glow on focus.
- caret color: `var(--floor-green)`.

cards/panels:
- panels are DATA ZONES — dense rectangular regions packed with numbers.
- `background: var(--floor-black); border: var(--floor-rule); border-radius: 0;`
- panels tile edge-to-edge in grid layouts. no gaps between panels — borders serve as separators.
- paper tape panel: `background: var(--floor-tape); color: #1A1A1A; border: none; padding: 0.5rem; font-family: 'Share Tech Mono', monospace;` — torn-edge suggestion via `border-top: 2px dashed rgba(0,0,0,0.3);`
- no shadows. no elevation. panels are flat like physical LED boards mounted on a wall.

navigation:
- horizontal ticker bar at top: `display: flex; background: var(--floor-black); border-bottom: var(--floor-rule-heavy); padding: 0.5rem 1rem; overflow: hidden;`
- nav items are ticker symbols: `font-family: 'Share Tech Mono', monospace; font-size: 0.75rem; color: var(--floor-amber); letter-spacing: 0.06em; text-transform: uppercase;`
- active item: `color: var(--floor-green); border-bottom: 2px solid var(--floor-green);`
- no icons. no hamburger menus. text-only, ALL-CAPS.

headers:
- section headers sit inside double-rule bordered bars: `border-top: var(--floor-rule-heavy); border-bottom: var(--floor-rule-heavy); padding: 0.4rem 0.75rem; background: rgba(255, 255, 255, 0.03);`
- header text: `font-size: 0.7rem; letter-spacing: 0.1em; color: var(--floor-amber);`
- timestamps always present at right edge of header bars: `color: var(--floor-muted); font-size: 0.6rem;`

footers:
- `display: flex; justify-content: space-between; padding: 0.4rem 0.75rem; border-top: var(--floor-rule-heavy); font-size: 0.6rem; color: var(--floor-muted); text-transform: uppercase;`
- content: exchange code left (`NYSE`), timestamp center (`14:32:07 EST`), status right (`MARKET OPEN`).

lists:
- NO bullet lists. all data is tabular. if you must list, use dense single-line rows with `border-bottom: var(--floor-rule);`
- each row: symbol left, value right, delta far-right with green/red coloring.
- row height: tight, `1.4rem` max.
- selected row: `background: rgba(255, 255, 255, 0.06);`

tables/data grids:
- THE primary structural element. dense column grids: `display: grid; border: var(--floor-rule);`
- columns: SYMBOL | LAST | CHG | %CHG | BID | ASK | VOL | TIME
- all cells: `padding: 0.2rem 0.5rem; border-right: var(--floor-rule); border-bottom: var(--floor-rule); font-variant-numeric: tabular-nums; text-align: right;`
- symbol column: `text-align: left; color: var(--floor-amber); font-weight: 700;`
- positive values: `color: var(--floor-green);`
- negative values: `color: var(--floor-red);`
- header row: `background: rgba(255, 255, 255, 0.05); font-size: 0.6rem; color: var(--floor-muted); letter-spacing: 0.08em;`
- no alternating row colors. grid lines provide structure.

dividers:
- standard: `1px solid rgba(255, 255, 255, 0.2)` — between rows, columns, cells.
- heavy/section: `3px double rgba(255, 255, 255, 0.4)` — between major data zones (ticker vs. order book vs. tape).
- used CONSTANTLY. every boundary has a visible rule.

modals/overlays:
- `background: var(--floor-black); border: 2px solid var(--floor-amber); border-radius: 0;`
- header bar: `background: rgba(255, 183, 0, 0.1); padding: 0.4rem 0.75rem; border-bottom: var(--floor-rule); font-size: 0.7rem; color: var(--floor-amber); text-transform: uppercase;`
- no backdrop blur. dark overlay behind: `background: rgba(0, 0, 0, 0.85);`
- content: dense data layout inside, same grid patterns.

badges/tags:
- `border: 1px solid; border-radius: 0; padding: 0.15rem 0.5rem; font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;`
- gain tag: `border-color: var(--floor-green); color: var(--floor-green);`
- loss tag: `border-color: var(--floor-red); color: var(--floor-red);`
- neutral tag: `border-color: var(--floor-amber); color: var(--floor-amber);`
- NO border-radius. ever. these are rectangular status indicators.

**interaction language**

hover:
- table rows: `background: rgba(255, 255, 255, 0.04);` — subtle highlight, nothing more.
- buttons: `box-shadow: 0 0 6px currentColor;` — LED glow intensifies.
- text links: `color: var(--floor-green);` — snap to green. no fade.

active:
- buttons: `filter: brightness(0.7);` — dims like a pressed hardware button. instantaneous, no transition.
- table rows: `background: rgba(255, 255, 255, 0.08);`

focus:
- `outline: 1px solid var(--floor-amber); outline-offset: 1px;`
- inputs get LED glow: `box-shadow: 0 0 4px var(--floor-green);`

selected:
- `background: rgba(255, 183, 0, 0.1); border-left: 2px solid var(--floor-amber);`
- selected ticker symbol: `color: var(--floor-green); font-weight: 700;`

disabled:
- `opacity: 0.2; pointer-events: none;` — nearly invisible. dead LED.

drag:
- `opacity: 0.5; border: 1px dashed var(--floor-amber); cursor: grabbing;`

**motion & feedback**

transitions:
- NO smooth transitions on data elements. `transition: none;` — values snap instantly, like LED boards flipping. this is critical.
- ticker scroll: `animation: ticker-scroll linear infinite;` — continuous horizontal scroll, speed `40px/s`. `@keyframes ticker-scroll { from { transform: translateX(100%); } to { transform: translateX(-100%); } }`
- urgent blink: `animation: urgent-blink 0.5s step-end infinite;` — hard on/off blink, no fade. `@keyframes urgent-blink { 50% { opacity: 0; } }`
- new data flash: element background flashes `var(--floor-green)` or `var(--floor-red)` for `0.15s` then returns to black. hard cut.

loading:
- scrolling dots in amber: `... ... ...` animating left-to-right in monospace, like a dot-matrix printer head.
- or: `LOADING DATA...` blinking in amber at 0.5s interval. no spinner. no progress bar.

success:
- brief green flash on the affected row/cell: `background: var(--floor-green); color: var(--floor-black);` for `0.15s`, then snap back.
- text: `ORDER FILLED` or `CONFIRMED` appears inline in green.

error:
- cell/element border turns red: `border-color: var(--floor-red);`
- error text: `font-size: 0.6rem; color: var(--floor-red); text-transform: uppercase;`
- urgent errors blink using `urgent-blink` animation.

**atmosphere**

backgrounds:
- primary: flat `var(--floor-black)`. the dark trading floor.
- scan-line overlay: `background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.15) 2px, rgba(0, 0, 0, 0.15) 4px); pointer-events: none;` — subtle horizontal scan lines across the entire viewport, like an LED board viewed up close.
- LED glow bleed: `text-shadow: 0 0 8px currentColor;` on ticker values and important numbers — the phosphor bloom of LED segments.
- paper tape zones: `background: var(--floor-tape); background-image: repeating-linear-gradient(0deg, transparent, transparent 1.4rem, rgba(0,0,0,0.06) 1.4rem, rgba(0,0,0,0.06) 1.45rem);` — faint horizontal feed lines like continuous-form paper.

textures:
- scan-line overlay applied globally via `::after` pseudo-element on the body or main container.
- dot-matrix texture on paper tape zones: faint dot grid suggesting printer output.
- no noise, no grain, no blur effects. textures are STRUCTURAL (lines, grids, dots).

overlays:
- scrolling ticker bar: absolutely positioned at top or bottom, continuous horizontal scroll of symbol+price+change data in amber text on black.
- `pointer-events: none;` on atmospheric overlays (scan lines, glow effects).
- corner timestamps: `position: absolute; font-size: 0.55rem; color: var(--floor-muted);` — every panel shows its last-update time.

ambient effects:
- LED glow: `text-shadow: 0 0 8px currentColor;` on all colored data values — green glows green, red glows red, amber glows amber.
- scan-line effect across entire viewport.
- scrolling ticker never stops — continuous motion suggests live data feed.
- blinking colon in timestamps: `14:32:07` where the colons blink at 1s intervals.
- these are background atmospheric effects, reinforcing the physical LED board environment.

**editorial voice**

button labels: `BUY`, `SELL`, `CANCEL`, `CONFIRM ORDER`, `HALT`, `REFRESH`, `CLEAR`, `SUBMIT BID`

headings: short, ALL-CAPS, abbreviated, urgent. examples:
- "NYSE COMPOSITE — REAL-TIME"
- "MOST ACTIVE — VOL LEADERS"
- "ORDER BOOK — AAPL"
- "MARKET HALTED — CIRCUIT BREAKER LVL 1"
- "TAPE — LAST 50 PRINTS"

metadata format:
- timestamps on EVERYTHING: `14:32:07 EST` — hours:minutes:seconds plus timezone. always.
- prices: `$142.87`, `BID 142.85`, `ASK 142.89` — no currency symbol on bid/ask, dollar sign on last price.
- changes: `+2.34 (+1.67%)` in green, `-0.89 (-0.62%)` in red. always show both absolute and percent.
- volume: `VOL 2.4M`, `SHARES 14,200` — abbreviated with unit suffix.
- symbols: 1-5 letter ALL-CAPS ticker codes: `AAPL`, `IBM`, `GE`, `T`, `XOM`.
- exchange codes: `NYSE`, `AMEX`, `NASD` — abbreviated.

placeholder text: `ENTER SYMBOL...`, `QTY`, `LIMIT PX`, `ACCT #` — terse, abbreviated, ALL-CAPS.

empty states: `NO DATA`, `AWAITING FEED`, `MARKET CLOSED`, `-- --` — minimal. dashes for missing values.

error messages: `ORDER REJECTED — INSUFFICIENT MARGIN`, `FEED INTERRUPTED — RECONNECTING`, `SYMBOL NOT FOUND`, `LIMIT EXCEEDED` — ALL-CAPS, terse, no explanation beyond the code.

success messages: `FILLED`, `ORDER CONFIRMED`, `FEED CONNECTED`, `SUBSCRIBED` — single word or two where possible. no punctuation beyond period.

figure captions: not applicable. this genome does not use figures or illustrations. all content is tabular data.

**cursor & selection**

cursor:
- default: `cursor: default;`
- interactive elements: `cursor: pointer;`
- data cells: `cursor: cell;` — suggests selectable data points.
- text inputs: `cursor: text;`
- no custom cursors.

selection:
- `::selection { background: var(--floor-amber); color: var(--floor-black); }` — amber highlight like a selected LED segment.

**when to reach for this genome**

Use `ticker_floor.nyse` when the prompt asks for a stock exchange, market floor, trading pit, broker console, order book, ticker tape, live price board, market surveillance wall, equities dashboard, high-density finance display, or any product that should feel like 1980s open-outcry trading translated into an LED wall.

Reach for it when the user wants pure green/red market moves, amber ticker tape, all-caps monospace, seven-segment numerals, dense tabular grids, black panels, double-rule separators, scrolling ticker bars, paper tape printouts, instant value flips, urgent blinking alerts, and a loud mechanical trading-floor voice. It is strongest when users need to scan symbols, prices, deltas, volume, bids, asks, fills, halts, and timestamps under pressure.

Choose it for:
- market-data dashboards, trading simulations, order-entry tools, portfolio watchlists, exchange status boards, quote monitors, and financial command centers where price movement is the main content.
- interfaces where `BUY`, `SELL`, `HALT`, `ORDER FILLED`, `FEED INTERRUPTED`, or `MARKET OPEN` are natural labels.
- live-data surfaces that need saturated green/red polarity, tight grids, no whitespace, hard state changes, and a continuous ticker crawl.
- finance-adjacent visualizations only when the explicit reference is the physical exchange floor, LED boards, dot-matrix printouts, or paper tape.

Do not choose it for institutional research reports, TV news tickers, social feeds, generic terminal UIs, sci-fi CRT telemetry, gambling odds, auction bidding, train departure boards, telegraph forms, or aviation-style command displays. Use `institutional_wire.macro` for Bloomberg-like macro research and fund reports, `breaking_desk.live` for broadcast news lower thirds, `public_timeline.x` for public social feeds, `underground_terminal.crt` or `phosphor_telemetry.amb` for CRT/terminal glow, `casino_floor.aces` for gambling and table-game stakes, `auction_lot.gavel` for sales and bidding, `split_flap.rail` for railway boards, `telegraph_office.wire` for Victorian paper-tape communication, and `flight_deck.pfd` for avionics-style operational scanning.

**anti-patterns — this genome NEVER:**

1. never uses rounded corners. `border-radius: 0` on ALL elements. no pills, no rounded buttons, no rounded anything. everything is rectangular like hardware LED panels.
2. never uses smooth transitions on data values. numbers snap instantly — `transition: none`. LED boards do not fade; they flip.
3. never uses lowercase text. ALL content is uppercase. `text-transform: uppercase` is applied globally. the trading floor shouts.
4. never uses serif or sans-serif body fonts. all text is monospace (`Share Tech Mono`) and all numbers are seven-segment (`DSEG7`). Helvetica has no place here.
5. never uses soft/muted/pastel colors. green is #00FF00, red is #FF0000, amber is #FFB800 — pure saturated LED colors. no color is ever desaturated or tinted.
6. never uses generous whitespace. density is maximized — tight padding, packed grids, minimal gaps. every pixel shows data. whitespace is wasted screen real estate.
7. never uses shadows or elevation. `box-shadow: none` except for LED glow effects (`text-shadow` and `box-shadow` with `currentColor` glow). no drop shadows, no card elevation.
8. never uses illustrations, icons, or decorative imagery. content is 100% text and numbers. the only visual embellishment is the scan-line overlay and LED glow.
9. never uses celebratory or conversational language. no "Great!", no "Oops!", no emoji. the voice is abbreviated, urgent, and mechanical — like a teletype.
10. never uses fade-in/fade-out or slide animations. all state changes are INSTANTANEOUS — hard cuts only. the only continuous animation is the horizontal ticker scroll.
