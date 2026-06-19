---
id: "26"
name: precision_instrument.met
keywords:
  - instrument
  - meteorological
  - oscilloscope
  - dial
  - gauge
  - chassis
  - phosphor
  - scientific
  - measurement
  - analog
  - knurled
  - panel
  - multimeter
  - test equipment
  - Tektronix
---

### genome 26: `precision_instrument.met`

> identity: precision analog instrumentation. oscilloscope bezels, knurled metal dials, engraved chassis labels, and amber phosphor readouts behind dark glass. the aesthetic of a Fluke multimeter, a Tektronix scope, or a Vaisala weather station — tools built to measure the world with quiet authority.

**surface**

colors (CSS variables):
- `--chassis-base: #242528` — primary body color, brushed dark alloy
- `--chassis-dark: #1a1a1c` — recessed wells, screen bezels, inset panels
- `--chassis-highlight: #3a3b3f` — raised edges, panel borders, subtle relief
- `--metal-light: #e6e7e9` — polished metal surfaces, dial faces, bright trim
- `--metal-mid: #b0b2b5` — secondary metal, knurled textures, screw heads
- `--metal-dark: #7a7c7f` — shadowed metal, engraved text fill, muted labels
- `--screen-bg: #050605` — CRT/LCD screen background, near-black with faint green cast
- `--phosphor-amber: #f25b29` — primary readout color, active values, selected states, LED glow
- `--phosphor-dim: #5c2615` — secondary readout, scale markings, inactive labels on screen
- `--text-dim: #77797c` — chassis-mounted labels, dial legends, button text
- `--well-bg: #18191a` — circular dial wells, button group recesses
- `--surround: #151516` — environment/page background, dark workshop surface

typography:
- primary family: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- no secondary family — monospace everywhere, like silk-screened instrument labels
- display values: 36-48px, weight 300, letter-spacing -2px, line-height 1
- readout values: 18-24px, weight 400
- labels: 9-11px, weight 600-700, letter-spacing 1.5-2px, uppercase always
- body/metadata: 12-13px, weight 400, letter-spacing 0.5px

borders:
- outer chassis: `border-radius: 24px` — milled alloy housing with generous radius
- inner modules: `border-radius: 8px` — display bezels, control groups
- buttons: `border-radius: 6px` — tactile rocker switches
- circular elements (dials, LEDs, indicators): `border-radius: 50%`
- no visible `border` properties — all depth communicated via `box-shadow`

spacing:
- chassis padding: 24px
- module gap: 20px (grid gap between display/dial/control sections)
- internal module padding: 12px
- button group internal padding: 6px, gap 6px
- screen content inset: 16px from glass edge

**color distribution**

- 55% `--chassis-base` / `--chassis-dark` — the dark alloy body dominates, grounding every element
- 20% `--screen-bg` — recessed display areas create visual depth pockets
- 10% `--metal-light` / `--metal-mid` — polished surfaces on dials, knobs, and trim catch light
- 10% `--phosphor-amber` — readout values, active states, LED indicators — always glowing, never flat
- 5% `--text-dim` / `--metal-dark` — engraved labels, legends, secondary information

**component patterns**

buttons:
- height: 44px. background: `--chassis-base`. border: none. border-radius: 6px
- `box-shadow: 0 3px 6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 2px rgba(0,0,0,0.2)` — physical depth, top highlight, bottom shadow
- text: `--text-dim`, 12px, weight 600, monospace, uppercase
- selected state: text becomes `--phosphor-amber`, background becomes `--chassis-dark`, shadow inverts to `inset 0 2px 6px rgba(0,0,0,0.8), inset 0 0 0 1px #000`, `transform: translateY(1px)` — physically depressed
- buttons always appear in recessed groups: group background `--well-bg`, padding 6px, border-radius 12px, `box-shadow: inset 0 2px 6px rgba(0,0,0,0.6), 0 1px 1px rgba(255,255,255,0.05)`

inputs:
- styled as recessed screen wells: background `--chassis-dark`, border-radius 8px
- `box-shadow: inset 0 4px 12px rgba(0,0,0,0.9), inset 0 0 0 1px #000, 0 1px 1px rgba(255,255,255,0.1)`
- text color: `--phosphor-amber` with `text-shadow: 0 0 6px rgba(242, 91, 41, 0.4)` — glowing phosphor effect
- placeholder text: `--phosphor-dim`
- cursor color: `--phosphor-amber`

cards / panels:
- background: `--chassis-base`. border-radius: 24px (outer) or 8px (inner module)
- massive depth via multi-layer box-shadow: `0 60px 100px -20px rgba(0,0,0,0.8), 0 12px 0 #111112, 0 13px 4px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -1px 2px rgba(0,0,0,0.4)`
- internal layout uses CSS grid with explicit column sizing (not auto-flow)
- cards contain distinct functional zones: display module, dial module, controls module

navigation:
- horizontal button groups acting as mode selectors (e.g., TMP / RAD / SYS)
- only one button selected at a time — physically depressed appearance
- no underlines, no pills, no tabs — these are physical rocker switches

headers:
- engraved text: 9px, letter-spacing 1.5px, weight 700, uppercase
- color: `--chassis-dark` (darker than chassis surface)
- `text-shadow: 0 1px 0 rgba(255,255,255,0.08)` — subtle top-edge highlight simulates stamped/engraved metal
- positioned absolutely on chassis surface (top-left, top-right, bottom-center)

footers:
- same engraved label treatment as headers
- centered at bottom of chassis: `bottom: 12px; left: 50%; transform: translateX(-50%)`

lists:
- vertical stack within a recessed well
- each item separated by 1px `--chassis-highlight` divider
- item text: `--text-dim`, 12px monospace
- active/selected items: text becomes `--phosphor-amber`

tables:
- header row: engraved label style (9px, uppercase, letter-spacing 2px, `--phosphor-dim`)
- data cells: `--phosphor-amber` for values, `--text-dim` for labels
- no visible borders — spacing and color differentiation only
- numeric values right-aligned, monospace, tabular-nums

dividers:
- no traditional `<hr>` — separation achieved by recessed wells (`box-shadow: inset ...`) or grid gaps
- if a line divider is needed: 1px `--chassis-highlight`, no margin, full-width

modals / overlays:
- rendered as floating instrument panels: `--chassis-base` background, 24px radius, full multi-layer box-shadow
- backdrop: `rgba(0,0,0,0.85)` — dark workshop environment
- content area uses recessed screen-glass treatment

badges / status indicators:
- LED dots: 8px circles, background `#111`, `box-shadow: inset 0 1px 3px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.05)`
- active LED: background `--phosphor-amber`, `box-shadow: inset 0 1px 2px rgba(255,255,255,0.5), 0 0 10px var(--phosphor-amber)` — visible glow halo
- status text uses `--phosphor-dim` for inactive, `--phosphor-amber` for active

dials / circular controls:
- well: 140px circle, background `--well-bg`, `box-shadow: inset 0 3px 8px rgba(0,0,0,0.8), inset 0 -1px 2px rgba(255,255,255,0.08), 0 1px 1px rgba(255,255,255,0.05)`
- rotator surface: `repeating-radial-gradient` simulating knurled metal — alternating `--metal-light` (1px) and `--metal-mid` (1px) concentric rings
- position indicator pip at top of rotator: `width: 4px; height: 4px; border-radius: 50%; background: var(--phosphor-amber)`
- static lighting overlay on top: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, transparent 40%, rgba(0,0,0,0.6) 100%)` + conic-gradient for metallic sheen, `mix-blend-mode: overlay`
- label below: 10px, `--text-dim`, letter-spacing 1px, centered

**interaction language**

hover:
- buttons: color shifts to `--metal-light` (brightened label), no background change
- dials: `cursor: grab`
- screen elements: no hover state — screens are output-only, not interactive surfaces

active / pressed:
- buttons: `transform: translateY(2px)`, shadow flattens to `0 1px 2px rgba(0,0,0,0.4), inset 0 2px 4px rgba(0,0,0,0.3)` — physical depression
- dials: `cursor: grabbing`
- LED flash: 150ms amber pulse on state change

focus:
- inputs: `--phosphor-amber` outline glow: `box-shadow` adds `0 0 0 2px rgba(242, 91, 41, 0.3)` — soft amber ring
- buttons: same amber glow ring, no outline property

selected:
- buttons: physically depressed — `translateY(1px)`, inverted shadow, text becomes `--phosphor-amber`, background becomes `--chassis-dark`
- list items / nav items: text becomes `--phosphor-amber`, no background change

disabled:
- opacity: 0.3. no cursor change. no hover effects. shadow removed — element appears unpowered

drag:
- dial rotation via `--rotation` CSS custom property, `transform: rotate(var(--rotation))`
- body cursor forced to `grabbing` during drag
- quantized feedback: state changes trigger LED flash + glitch burst on screen

**motion & feedback**

transitions:
- buttons: `all 0.05s linear` — instant mechanical snap, no easing
- LEDs: `all 0.1s` — quick electrical response
- no transitions on chassis or structural elements — metal doesn't animate
- screen value changes: immediate DOM swap, no fade or slide

loading:
- oscilloscope waveform animation on CRT canvas — sine wave at base frequency 2Hz, amplitude 30px, rendered via `ctx.lineTo` with 200 sample points. amplitude and frequency driven by data state
- scanline animation: continuous vertical scan, `background-position: 0 0` shifting to `0 2px` over 0.1s, creating vertical crawl
- noise grain: animated per-frame random overlay

success:
- LED flashes amber for 150ms
- screen values update instantly
- waveform smoothly transitions to new amplitude/frequency via lerp: `current += (target - current) * 0.1`

error:
- glitch burst: horizontal displacement on screen content, decaying at `*= 0.85` per frame
- LED rapid blink (3x 100ms pulses)
- waveform distortion: increased amplitude and frequency briefly

**atmosphere**

background:
- page/environment: `radial-gradient(circle at 50% 30%, #4a4b4e 0%, #151516 100%)` — overhead workshop lamp illumination
- never flat color — always radial gradient suggesting a light source above

textures:
- chassis body noise: canvas overlay with `mix-blend-mode: overlay`, opacity 0.4 — fine grain simulating brushed metal surface
- CRT screen: shader with scanlines, noise grain, vignette, and edge darkening
- knurled dial surface: CSS `repeating-radial-gradient` for concentric ring pattern
- static metallic lighting on dials: conic-gradient + linear-gradient overlay for directional light catch

overlays:
- screen glass reflection: `::after` pseudo-element with `linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)` on top half — subtle glass glare
- screen vignette: darkening at edges via `smoothstep`

ambient effects:
- phosphor glow: `text-shadow: 0 0 6px rgba(242, 91, 41, 0.4)` on all amber text — simulates light bleeding from phosphor coating
- LED glow halo: `box-shadow: 0 0 10px var(--phosphor-amber)` when active
- CRT scanline shimmer: continuous animated horizontal lines across screen surface
- depth layering via z-index: noise canvas (1), engravings (2), functional modules (5), screen overlays (10)

**editorial voice**

button labels: terse 3-letter uppercase codes — `TMP`, `RAD`, `SYS`, `CAL`, `LOG`, `RST`, `SET`, `RUN`

headings: all-caps engraved designations with periods and slashes — `METEOROLOGICAL SYS.`, `MOD-04 / TERMINAL`, `PRECISION DATA LINK`, `AMBIENT SENSOR ARRAY`

metadata format: slash-separated compound states — `CLEAR/STABLE`, `RAIN/HEAVY`, `WINDY/GUSTS`. units always abbreviated and appended in dim text — `KPH`, `HPA`, `%`, `MM`

placeholders: instrument-style prompts — `ENTER STATION ID_`, `SET COORD. LAT/LON_`, `AWAITING INPUT...`

empty states: equipment standby messages — `NO SIGNAL`, `STANDBY`, `AWAITING DATA LINK`, `SENSOR OFFLINE`

error messages: technical fault codes — `ERR: SENSOR FAULT 0x04`, `LINK TIMEOUT / RETRY`, `CAL. DRIFT DETECTED`, `DATA INTEGRITY FAIL`

success messages: confirmation with measured confidence — `LOCK ACQUIRED`, `DATA SYNC COMPLETE`, `CALIBRATION VERIFIED`, `SIGNAL NOMINAL`

**cursor & selection**

cursor:
- default on chassis body: `default`
- over buttons: `pointer`
- over dials: `grab` (idle), `grabbing` (dragging)
- over screen content: `default` — screens are read-only displays, not interactive
- text inputs: `text`
- disabled elements: `default` (no `not-allowed` — unpowered controls simply don't respond)

`::selection`:
- background: `rgba(242, 91, 41, 0.3)` — amber phosphor tint
- color: `#ffffff`

**when to reach for this genome**

Use `precision_instrument.met` when the prompt asks for precision analog instrumentation, oscilloscope UI, multimeter display, bench test equipment, calibrated gauge panel, knurled dial controls, machined chassis interface, amber readout module, scientific measurement surface, meteorological sensor station, industrial calibration console, laboratory hardware dashboard, data acquisition instrument, or a physical control panel that should feel like Tektronix, Fluke, or Vaisala equipment.

Reach for it when the user wants dark alloy housing, recessed screen wells, amber phosphor values, monospaced silk-screen labels, circular knobs, LED status dots, physical rocker buttons, mechanical snap states, numeric units, slash-separated instrument statuses, and tactile hardware depth built from shadows rather than visible borders.

Do not use it for warm amber CRT life-support telemetry, curved glass displays, dense event logs, sci-fi scanline stations, or read-only spacecraft-style terminal surfaces; use `phosphor_telemetry.amb`. Do not use it for operational weather forecast offices, NWS-style warning products, radar composites, synoptic charts, METAR/TAF workflows, station models, or plotted meteorological maps; use `weather_bureau.wx`. Do not use it for aircraft cockpits, PFD/HUD displays, altitude tapes, airspeed tapes, FMC inputs, route management, or safety-critical aviation procedure surfaces; use `flight_deck.pfd`. Do not use it for camera firmware, Leica-like product configurators, viewfinder framing, lens diagnostics, or modern optical engineering systems; use `precision_optics.lens`. Do not use it for compact tactical audio capture devices, covert signal recorders, radar lock widgets, secure transmission modules, or espionage hardware controls; use `signal_capture.unit`. Do not use it for trading pits, stock tickers, LED market boards, paper tape, open-outcry workflows, or red/green financial urgency; use `ticker_floor.nyse`.

It is strongest when the product behaves like a single calibrated physical object: measure, calibrate, set mode, rotate a dial, read a value, verify a signal, or inspect sensor state. If the prompt is about a command room, forecast desk, cockpit, camera system, covert recorder, financial floor, or pure retro terminal, choose another genome.

**anti-patterns — this genome NEVER:**

1. never uses sans-serif or display typefaces — every character is monospaced, as if silk-screened or dot-matrix printed onto a panel
2. never uses visible CSS borders (`border: Xpx solid`) — all depth and separation is achieved through `box-shadow` (inset for wells, outset for raised surfaces) and grid gaps
3. never uses flat backgrounds — every surface has either a noise texture overlay, a gradient, or multi-layer box-shadows suggesting physical depth
4. never uses color gradients on interactive elements — gradients are reserved for environmental lighting (page background, glass reflections, metallic sheen). buttons, labels, and values are solid colors
5. never uses rounded pill shapes (border-radius: 999px) — radii are either architectural (24px chassis, 8px modules, 6px buttons) or perfectly circular (50% for dials and LEDs). nothing in between
6. never uses large text sizes above 48px — this is precision instrumentation, not a billboard. the largest element is a single primary readout value
7. never uses decorative icons, emoji, or illustrations — visual communication is limited to LED states, waveform shapes, and typographic hierarchy
8. never uses transition durations above 150ms — mechanical switches snap, LEDs flash, screens update instantly. there is no fluid motion in physical instruments
9. never uses translucent or frosted-glass effects (`backdrop-filter`, semi-transparent backgrounds) — panels are opaque machined metal. the only transparency is the faint glass reflection on CRT screens
10. never places text directly on the page background — all text lives on chassis surfaces, inside screen wells, or on button faces. the dark workshop environment contains nothing
