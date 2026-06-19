---
id: "27"
name: phosphor_telemetry.amb
keywords:
  - telemetry
  - biometric
  - phosphor
  - amber
  - crt
  - monitor
  - dashboard
  - gauges
  - life-support
  - vitals
  - readout
  - scanline
  - hospital
  - ICU
  - life signs
---

### genome 27: `phosphor_telemetry.amb`

> identity: warm amber phosphor CRT telemetry station. life-support monitoring hardware from a 1990s sci-fi film set — data gauges, bar readouts, scanline overlays, and system event logs rendered on a curved glass display with visible electron-gun artifacts.

**surface**

colors:
```
--phosphor: #ffb300;
--phosphor-dim: #8a6300;
--phosphor-glow: rgba(255, 179, 0, 0.4);
--bg-void: #050300;
--bg-outer: #000000;
--phosphor-inverted-bg: #ffb300;
--phosphor-inverted-text: #050300;
--danger: #ff4136;
--scanline-dark: rgba(0, 0, 0, 0.25);
```

typography:
- all text: `"VT323", monospace`. no other typeface permitted.
- body: 22px, `line-height: 1.2`
- secondary/metadata: 18px
- headings: 22px (hierarchy through color and inverted blocks, never through scale)
- `text-transform: uppercase` on headings and labels. mixed-case permitted in event logs and data values.
- `letter-spacing: 0` — VT323 has built-in character spacing
- `-webkit-font-smoothing: none` — pixel edges must remain sharp, no antialiasing

borders:
- major panel frames: `1px solid var(--phosphor)` top and bottom, with 4px-wide bracket caps extending 4px above and below at left and right edges
- internal dividers: `1px dashed var(--phosphor-dim)`
- `border-radius: 0px` on all internal elements. the only curve is the outer CRT monitor shell at 12px.

spacing:
- outer monitor padding: 30px
- module gap: 2rem vertical, 4rem horizontal in grid
- internal component gap: 4px between header/chart/footer within a module
- chart bar height: 38px standard, 12px for thin/split bars

**color distribution**
- 75% void black (`--bg-void`, `--bg-outer`) — the unlit phosphor surface
- 15% bright amber (`--phosphor`) — active text, bar fills, borders, cursor
- 8% dim amber (`--phosphor-dim`) — secondary labels, axis markers, frame markers, muted values
- 2% inverted amber — title blocks and critical highlights where `background: var(--phosphor); color: var(--bg-void)`

**component patterns**

buttons: no visible button chrome. text rendered as command prompts: `AWAITING INPUT_` with blinking block cursor. interactive labels use inverted blocks — `background: var(--phosphor); color: var(--bg-void); padding: 0 10px`. no border, no shadow, no radius. primary actions use inverted style; secondary actions use plain phosphor text.

inputs: no visible input fields. text entry implied by blinking cursor after prompt text. if an explicit input is needed: `border-bottom: 1px solid var(--phosphor); background: transparent; color: var(--phosphor); font-family: "VT323", monospace; font-size: 22px; padding: 4px 0`. no border-radius. no box-shadow.

cards/panels (modules): vertical flex column with 4px gap. module-header row with label left and dim goal/target right. chart-container row with axis labels flanking a chart-frame. module-footer row with current value left and dim status right. no background, no border on the module itself — the chart-frame provides visual containment.

chart-frame: `flex-grow: 1; position: relative; height: 38px; border-top: 1px solid var(--phosphor); border-bottom: 1px solid var(--phosphor)`. bracket caps at left and right edges: 4px wide, extending 4px above and below, with matching phosphor borders. internal frame-markers at percentage intervals: `width: 1px; background: var(--phosphor-dim)`.

bar-fill: `height: 100%; background: var(--phosphor); box-shadow: 0 0 10px var(--phosphor-glow)`. vertical scanline texture overlay via `::after` pseudo-element: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(5,3,0,0.3) 2px, rgba(5,3,0,0.3) 4px)`. `transition: width 1s ease-in-out` for live data animation.

navigation: no traditional nav. system state is displayed in a matrix grid — `display: grid; grid-template-columns: repeat(4, auto); gap: 4px 30px`. labels right-aligned in dim amber, values left-aligned in bright amber. dim class applied to completed or low-priority values.

headers: three-column flex layout. left: node identifier and status (with blinking NOMINAL/ALERT). center: system title + inverted title block. right: live clock in `DD-MMM-YYYY HH:MM:SS` format.

footers: no dedicated footer. the command prompt line sits absolute-positioned at bottom-left of the CRT viewport.

lists (event logs): monospace lines inside a chart-frame container with `border-bottom: none`. each entry prefixed with timestamp: `HH:MM - VERB: DESCRIPTION`. dim class on routine events, bright amber on active/important events. `font-size: 18px`.

tables: rendered as matrix grids (see navigation pattern). `gap: 4px 30px`. abbreviated 3-letter labels with colon suffix. totals row spanning full width with `border-top: 1px dashed var(--phosphor-dim)`.

dividers: `1px dashed var(--phosphor-dim)`. used sparingly — most separation comes from spatial gap and the chart-frame bracket pattern.

modals: no modals. all information displayed inline on the CRT surface. if overlay is absolutely required: `background: var(--bg-void); border: 1px solid var(--phosphor); padding: 20px`. no blur, no shadow, no radius.

badges/tags: inverted phosphor blocks — `background: var(--phosphor); color: var(--bg-void); padding: 0 8px; font-size: 18px`. used for status indicators and critical labels only.

split-chart: stacked thin bars (12px height) inside a single chart-frame, each with its own label row. labels at 18px in dim or bright amber.

**interaction language**

hover: `text-shadow: 0 0 4px var(--phosphor), 0 0 12px var(--phosphor-glow)` — phosphor bloom intensifies. no background change, no transform, no scale.

active/pressed: inverted — `background: var(--phosphor); color: var(--bg-void); text-shadow: none`. hard snap, no transition on the inversion itself.

focus: `outline: 1px solid var(--phosphor); outline-offset: 2px`. no glow on outline, just a clean phosphor border.

selected: inverted block style (same as active). selected items in matrix grids get bright amber instead of dim.

disabled: `opacity: 0.25; text-decoration: line-through`. cursor remains default — no pointer, no help cursor.

drag: not supported. this is a read-only telemetry display.

**motion & feedback**

transitions: bar-fill width changes use `transition: width 1s ease-in-out` for smooth gauge animation. all other layout changes are instantaneous — no easing on color, opacity, or position.

loading: boot-up sequence — `opacity: 0 → brightness(2) blur(10px) → visible → blackout flash → visible`. `animation: bootUp 2s ease-out forwards`. after boot, a single-line status message: `INITIALIZING TELEMETRY STREAM...`

success: brief phosphor bloom — `text-shadow` intensity doubles for 500ms, then returns to normal. no color change, no icons.

error: `WARN:` prefix in event log, dim class removed so warning text appears in bright amber. for critical errors, the status field blinks: `animation: blink 2s step-end infinite`.

ambient animations (always active):
- scanline sweep: 100px-tall horizontal gradient band sweeping top to bottom over 8s, linear, infinite
- screen flicker: full-screen overlay at `rgba(255,179,0,0.02)` with opacity oscillating between 0.01-0.05 over 0.15s
- cursor blink: block cursor with `animation: blink 1s step-end infinite` (opacity 1→0→1)
- live data jitter: `setInterval(2000)`: `barWidth += (Math.random() - 0.5) * 2`, clamped to ±1% of target value

**atmosphere**

CRT monitor shell: `width: 95vw; max-width: 1200px; height: 85vh; background: var(--bg-void); border-radius: 12px; padding: 30px`. outer glow: `box-shadow: inset 0 0 100px rgba(0,0,0,0.9), 0 0 20px rgba(255,179,0,0.1)`.

scanline overlay (::before on monitor): `background: linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%), linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06)); background-size: 100% 4px, 6px 100%`. simulates horizontal scanlines and RGB subpixel columns.

vignette (::after on monitor): `background: radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 100%)`. darkens edges to simulate curved glass.

phosphor text bleed: all amber text carries `text-shadow: 0 0 2px var(--phosphor), 0 0 8px var(--phosphor-glow)`.

body background: `#000000` — the monitor sits in darkness.

**editorial voice**

button labels / commands: `AWAITING INPUT_`, `EXECUTE`, `TRANSMIT`, `CONFIRM SEQUENCE`, `ABORT`, `RECALIBRATE`, `ACKNOWLEDGE`

headings: uppercase, technical-noun style. compound words joined with hyphens or spaces. always describe what the module measures: `Kinetic Output (Cal)`, `H2O Coolant Flux (L)`, `Neural Load / Deep Work (Hrs)`, `System Event Log`, `Hibernation Cycle`

metadata format: `DD-MMM-YYYY HH:MM:SS` for timestamps. durations as `-42 MINS` or `7.2h`. targets and goals as `Goal: 600`, `Target: 3.0`, `Peak: 4.0`. values use abbreviated units: `Cal`, `L`, `Hrs`, `%`.

placeholders: system designation format — `NODE_ID`, `SECTOR_REF`, `ENTER_PARAMETER`

empty states: `NO TELEMETRY DATA — AWAITING STREAM INITIALIZATION` or `SENSOR OFFLINE — CONTACT MAINTENANCE`

error messages: `WARN: CAFFEINE_LEVEL_CRITICAL`, `ERR: STREAM_INTERRUPTED — RETRY IN 30S`, `FAULT: SENSOR_ARRAY_UNRESPONSIVE`

success messages: `NOMINAL`, `OPTIMAL`, `STABLE`, `CALIBRATION COMPLETE`, `STREAM ACTIVE`

status vocabulary: three-letter abbreviated codes for matrix displays — `FOC:`, `STR:`, `HYD:`, `NRG:`, `MED:`, `RDG:`, `WRK:`, `SLP:`. values as `HIGH`, `LOW`, `DONE`, `PEND`, `ACTV`, percentages, or decimal hours.

**cursor & selection**

default cursor: `default` — this is a monitoring display, not an interactive desktop
interactive elements: `pointer` on inverted blocks and command prompts
text in event logs: `text` cursor for copy-paste
`::selection { background: var(--phosphor); color: var(--bg-void); }` — inverted amber selection

**when to reach for this genome**

Use `phosphor_telemetry.amb` when the prompt asks for warm amber CRT telemetry, life-support monitoring, biometric/vitals dashboards, retro sci-fi system status, spacecraft or hospital-adjacent monitoring, read-only gauges, event logs, sensor streams, or a fixed control-room screen that should feel like a 1990s film-prop monitor glowing in darkness.

Reach for it when the visual cues are amber-on-black phosphor, visible scanlines, curved glass, VT323-style mono text, bracketed chart frames, dense bar gauges, uppercase status codes, blinking cursors, system event logs, and values like `NOMINAL`, `FAULT`, `STREAM ACTIVE`, or `SENSOR OFFLINE`. It is strongest when the product is a live readout: observe, recalibrate, acknowledge, transmit, and keep a critical system stable.

Do not use it for generic hacker terminals, command-line portfolios, lowercase covert utilities, or basement-mainframe sites; use `underground_terminal.crt`. Do not use it for physical bench equipment, oscilloscopes, multimeters, knurled dials, machined chassis, or tactile calibration controls; use `precision_instrument.met`. Do not use it for hostile anomaly consoles, red/acid wireframes, containment protocols, or orbital/deep-ocean hazard systems; use `abyssal_telemetry.rift`. Do not use it for surgical OR dashboards, anesthesia records, ECG traces, instrument counts, or real clinical procedure workflows; use `sterile_field.surg`. Do not use it for CCTV camera walls, PTZ controls, DVR archives, or guard-room incident review; use `surveillance_grid.cctv`.

**anti-patterns — this genome NEVER:**
1. uses any typeface other than VT323 or monospace fallbacks — no sans-serif, no serif, no display fonts
2. uses border-radius on internal elements — the only radius is the 12px outer CRT shell
3. uses box-shadow for depth or elevation — shadow is only used for phosphor glow effects
4. uses background colors that break the void-black atmosphere. additional colors should feel like phosphor emissions or terminal readouts — warm, glowing, subordinate to the amber-on-black identity
5. uses font sizes above 22px — hierarchy is achieved through color intensity, inverted blocks, and dim/bright states, never through scale
6. uses icons, emoji, or SVG graphics — all information is conveyed through text characters, bar fills, and typographic symbols
7. uses smooth opacity transitions on layout elements — bar-fill width is the only animated property; everything else snaps instantly
8. uses whitespace-heavy "breathing room" layouts — this is a dense telemetry dashboard where every pixel of the CRT is used for data
9. uses lowercase for labels, headings, or status values — mixed case is only permitted in event log descriptions
10. uses modern UI patterns like cards with rounded corners, floating action buttons, toast notifications, or hamburger menus — this is a fixed-layout monitoring station
