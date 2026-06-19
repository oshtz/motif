---
id: "22"
name: abyssal_telemetry.rift
keywords:
  - abyssal
  - telemetry
  - wireframe
  - anomaly
  - deep-sea
  - temporal
  - isometric
  - bloom
  - neon
  - void
  - rift
  - 3d
  - deep space
  - submarine
  - reactor
---

### genome 22: `abyssal_telemetry.rift`

> identity: hostile-environment monitoring station. wireframe isometric readouts over near-black void. deep-ocean research outposts, temporal anomaly detectors, and orbital hazard consoles — all rendered in additive-blended neon lines against absolute darkness.

**surface**

colors:
```
--void: #050205;          /* near-black with faint purple cast */
--void-panel: rgba(5, 2, 5, 0.85);  /* translucent panel bg */
--acid: #CCFF00;          /* primary data, energy lines, success */
--core: #FF1744;          /* warnings, frames, titles, borders */
--grid: #6A1B9A;          /* structural grid, secondary lines */
--topo: #FF6622;          /* topographic data, waveforms */
--signal: #FFEA44;        /* highlighted labels, containment markers */
--fg: #FFFFFF;            /* secondary text, metadata */
--fg-dim: rgba(255, 255, 255, 0.5);  /* tertiary text */
```

typography:
- primary: `"Courier New", "Consolas", monospace` — all UI text, labels, headings
- body: 12–14px, `font-weight: bold`, `letter-spacing: 0.08em`, `text-transform: uppercase`
- headings: 18–24px, bold, uppercase, `letter-spacing: 0.12em`
- display/hero: 32–48px, bold, uppercase — used sparingly for zone/system titles only
- metadata/small: 10–12px, normal weight, uppercase, `letter-spacing: 0.06em`
- `line-height: 1.4` body, `1.2` headings
- no size variation beyond these tiers — hierarchy through color and glow, not scale

borders:
- major panels: `2px solid var(--core)`, `border-radius: 0px` — no exceptions
- internal dividers: `1px solid var(--grid)`
- corner brackets instead of full borders on secondary panels: L-shaped strokes at corners only (top-left, top-right, bottom-left, bottom-right), arm length 24px, `stroke: 2px solid var(--core)`
- wireframe box outlines on 3D-styled containers: `border: 1px solid var(--core); opacity: 0.3`

spacing:
- `padding: 16px 24px` on panels
- `gap: 12px` between panel sections
- dense data readouts: `gap: 4px; line-height: 1.2`
- generous negative space between panel clusters — panels float in void

**color distribution**

- 65% void (`--void`) — absolute darkness is the dominant surface. the void is not empty, it is the medium
- 12% acid green (`--acid`) — primary data visualization, energy lines, waveforms, success states
- 10% core red (`--core`) — structural frames, borders, warning headers, title text
- 5% grid purple (`--grid`) — structural grids, radar rings, background scaffolding
- 4% topo orange (`--topo`) — secondary waveforms, topographic wireframes
- 2% signal yellow (`--signal`) — highlighted containment labels, critical markers
- 2% white (`--fg`) — secondary metadata text, numerical readouts

**component patterns**

buttons:
- `background: transparent; border: 2px solid var(--core); color: var(--core); padding: 8px 20px; text-transform: uppercase; font-family: monospace; font-size: 12px; letter-spacing: 0.1em; border-radius: 0px`
- primary variant: `background: var(--core); color: var(--void)`
- destructive/alert: pulsing `box-shadow: 0 0 8px var(--core)` via keyframe
- icon buttons: square, `width: 36px; height: 36px`, crosshair or bracket decoration

inputs:
- `background: var(--void-panel); border: 1px solid var(--grid); color: var(--acid); font-family: monospace; padding: 8px 12px; border-radius: 0px`
- focus: `border-color: var(--core); box-shadow: 0 0 6px rgba(255, 23, 68, 0.4)`
- labels above input, uppercase, `color: var(--fg-dim); font-size: 10px; letter-spacing: 0.1em`
- placeholder: `color: var(--grid); font-style: normal`

cards/panels:
- `background: var(--void-panel); border: 2px solid var(--core)` for primary panels
- secondary panels use corner-bracket borders only (no full border)
- internal sub-grid: faint purple gridlines `1px solid var(--grid); opacity: 0.3` at 32px intervals
- no shadows — ever. glow replaces shadow: `box-shadow: 0 0 12px rgba(255, 23, 68, 0.15)` on active panels
- panel headers: red title text, system designation format (`SECTOR_04`, `CNTMNT_V2`)

navigation:
- vertical sidebar or horizontal top bar, `background: var(--void-panel)`
- items: uppercase monospace, `color: var(--fg-dim)`
- active: `color: var(--acid); border-left: 2px solid var(--acid)` (vertical) or `border-bottom: 2px solid var(--acid)` (horizontal)
- crosshair marker `+` before active item

headers:
- system designation format: `ZONE: MARIANA_SEC_4`, `TEMPORAL ANOMALY DETECTION`
- `color: var(--core); font-size: 24px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.12em`
- subtitle beneath in white: `color: var(--fg); font-size: 14px`
- optional: `text-shadow: 0 0 8px rgba(255, 23, 68, 0.6)` for bloom effect

footers:
- minimal, `border-top: 1px solid var(--grid)`
- status readouts: `SYS.TRACK: 48291 | PHASE 4 | LINK STABLE`
- `color: var(--fg-dim); font-size: 10px`

lists:
- no bullets. prefix with sector/index numbers: `01 //`, `02 //`
- or hex addresses: `0x3FA2C1 ...`
- separator: `border-bottom: 1px solid var(--grid); opacity: 0.3`
- active item: `color: var(--acid)`

tables:
- `border: 1px solid var(--grid)` on cells
- header row: `background: rgba(106, 27, 154, 0.2); color: var(--core); text-transform: uppercase`
- no alternating rows — uniform void background
- cell padding: `8px 12px`
- status columns use colored indicators: `OK` in acid, `ERR` in core red

dividers:
- `border-top: 1px solid var(--grid); opacity: 0.5`
- or decorative: dashed `1px dashed var(--core)`

modals/overlays:
- `background: var(--void-panel); border: 2px solid var(--core); backdrop-filter: blur(4px)`
- corner brackets on outer frame
- header: red uppercase title with crosshair decorations in corners
- no border-radius, no rounded corners

badges/tags:
- `background: var(--core); color: var(--void); padding: 2px 8px; font-size: 10px; text-transform: uppercase; font-family: monospace; border-radius: 0px`
- status badges: acid green bg for OK, core red bg for ERR/ALERT
- `font-weight: bold; letter-spacing: 0.08em`

**interaction language**

- hover: `box-shadow: 0 0 10px rgba(204, 255, 0, 0.3)` — acid glow bloom. `color` shifts to `var(--acid)` on text elements. no scale, no translate
- active/pressed: `background: var(--core); color: var(--void)` — hard red flash. instantaneous, no transition
- focus: `outline: 2px solid var(--acid); outline-offset: 2px` — acid green outline, no glow
- selected: `border-color: var(--acid); color: var(--acid)` + leading `▸` marker
- disabled: `opacity: 0.25; filter: grayscale(1)` — elements fade into void
- drag: `cursor: crosshair; outline: 1px dashed var(--core)`

**motion & feedback**

transitions: minimal and purposeful. `transition: opacity 0.15s linear, color 0.1s linear` only. no ease curves — linear or step only. no transform transitions.

loading: pulsing wireframe icosahedron animation, or cycling `...` dots with monospace alignment. text: `SCANNING...` or `ACQUIRING SIGNAL...`

success: brief acid-green flash on element border (`box-shadow: 0 0 12px var(--acid)` for 300ms), then fade. text: `LOCK CONFIRMED` or `SIGNAL ACQUIRED`

error: core-red pulse on borders, double flash (100ms on, 50ms off, 100ms on). text: `BREACH DETECTED` or `SIGNAL LOST`

ambient motion (atmosphere only, not UI interaction):
- slow vertical drift on particle fields: `translateY` at 0.02px/frame
- wireframe rotation on contained objects: `rotateY: 0.3deg/frame, rotateX: 0.1deg/frame` for icosahedra, with `sin(time * 0.5) * 2deg` wobble on rotateZ axis
- waveform oscillation on data lines: sinusoidal, 1–3 second period
- overall scene bob: `sin(time * 0.5) * 0.2` — barely perceptible

**atmosphere**

- absolute void background. no gradients, no textures on the base surface — pure `var(--void)` darkness
- additive blending glow on all colored elements: `text-shadow: 0 0 4px currentColor` on neon text, `box-shadow: 0 0 8px` on borders — simulates phosphor/plasma bleed
- faint purple structural grid visible behind content: `background-image: linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px); background-size: 32px 32px; opacity: 0.08`
- floating particle motes: tiny acid-green dots drifting upward (CSS animation or decorative pseudo-elements)
- corner-bracket decorations on the viewport or major sections: L-shaped red strokes at the four corners of the page
- crosshair markers (`+`) at strategic points — panel corners, data intersections
- panels appear to float in 3D space — achieved through strategic spacing, no physical depth but implied isometric arrangement

**editorial voice**

button labels: `INITIALIZE`, `ACQUIRE`, `PURGE`, `DEPLOY ARRAY`, `LOCK SECTOR`, `ABORT SCAN`, `TRANSMIT`, `CONTAIN`

headings: uppercase, system-designation format. sectors, zones, phases. e.g., `ZONE: MARIANA_SEC_4`, `TEMPORAL ANOMALY DETECTION`, `CAUSALITY LOOP ARRAYS`, `EXT_PRESSURE_KPA`, `PARADOX DEGRADATION`

metadata: technical readout format. `SYS.TRACK: 48291`, `CHRONO-FLD [1284] : NOMINAL`, `CAUSALITY IDX: 0.8847`, `DEPTH_SIG: VALID`. dates as epoch or ISO-short: `2026.03.22 // 14:00:00 UTC`

placeholders: `ENTER SECTOR CODE...`, `SIGNAL QUERY...`, `0x000000`

empty states: `NO SIGNAL DETECTED IN THIS SECTOR`, `ARRAY OFFLINE — AWAITING DEPLOYMENT`, `VOID SCAN RETURNED 0 ANOMALIES`

error messages: `BREACH DETECTED — CONTAINMENT PROTOCOL ACTIVE`, `SIGNAL LOST — LAST KNOWN: SECTOR 08`, `CAUSALITY VIOLATION — ABORT RECOMMENDED`

success messages: `LOCK CONFIRMED — SECTOR STABLE`, `SIGNAL ACQUIRED — ARRAY ONLINE`, `CONTAINMENT HOLDING — ALL READINGS NOMINAL`

**cursor & selection**

- default: `cursor: crosshair` — always. the entire interface is a targeting system
- interactive elements: `cursor: pointer` only on explicit buttons
- text inputs: `cursor: text`
- drag contexts: `cursor: move`
- `::selection { background: var(--core); color: var(--void); }` — red highlight, black text

**when to reach for this genome**

Use `abyssal_telemetry.rift` when the prompt asks for a hostile-environment monitoring station, temporal anomaly detector, orbital hazard console, deep-ocean research outpost, reactor containment dashboard, void-sector scanner, isometric wireframe control room, anomaly tracking interface, rift stabilization panel, containment protocol UI, or any dense operational system that should feel like red/acid telemetry floating in absolute darkness.

Reach for it when the user wants near-black void, hard 90-degree panels, red structural brackets, acid-green data lines, purple grid scaffolds, additive neon bloom, monospace uppercase labels, crosshair cursors, wireframe 3D objects, sector codes, scan states, breach alerts, and terse copy like `ACQUIRING SIGNAL...`, `BREACH DETECTED`, `LOCK CONFIRMED`, or `CONTAINMENT HOLDING`.

Do not use it for submarine sonar rooms, hydrophone arrays, acoustic waterfall spectrograms, bearing-time recorders, tactical contact plots, or green phosphor PPI scopes; use `sonar_array.sub`. Do not use it for CCTV camera walls, PTZ controls, timestamped video feeds, motion boxes, incident logs, or fixed security operations rooms; use `surveillance_grid.cctv`. Do not use it for aircraft avionics, primary flight displays, altitude/speed tapes, flight directors, waypoints, or procedural cockpit controls; use `flight_deck.pfd`. Do not use it for spacecraft environmental controls, Braun-like physical dials, LED buttons, observatory HUDs, or atmospheric life-support hardware; use `atmospheric_control.void`. Do not use it for compact tactical audio/signal capture devices, recorder widgets, covert field hardware, or small professional monitoring units; use `signal_capture.unit`. Do not use it for warm amber CRT life-support telemetry, curved glass, scanline-heavy 1990s film-prop monitors, or amber event logs; use `phosphor_telemetry.amb`. Do not use it for glossy black WebGL metaballs, multi-neon liquid simulations, creative-coding data art, or glassmorphism shader panels; use `viscous_flux.gl`. Do not use it for organic deep-sea bioluminescence, jellyfish, plankton blooms, cold living light, or beautiful abyssal nature; use `abyssal_bloom.deep`. Do not use it for biometric login, neural uplinks, identity terminals, or sleek frosted sci-fi protocol panels; use `aura_protocol.sys`.

It is strongest when the product is a mission-critical anomaly or hazard system: detect, scan, lock, contain, purge, transmit, stabilize, and report sector status. If the prompt is about cameras, aircraft, submarines, environmental controls, small capture hardware, warm CRT ambience, shader spectacle, organic ocean life, or identity/security login, choose another genome.

**anti-patterns — this genome NEVER:**

1. uses `border-radius` on any element. all corners are sharp 90° angles. no rounded buttons, no pills, no circles except wireframe spheres/icosahedra in decorative contexts
2. uses `box-shadow` for depth/elevation — shadow is only used for neon glow (`0 0 Npx color`). no `rgba(0,0,0,x)` drop shadows
3. uses gradients on surfaces or backgrounds. the void is flat and absolute. color transitions happen at hard boundaries only
4. uses serif or display typefaces. all text is monospace. no exceptions
5. uses warm, friendly, or casual language. the voice is terse, technical, institutional. no exclamation marks in success states, no apologetic error messages
6. uses light or white backgrounds. the darkest value in any layout is `--void` (#050205). panels are translucent dark, never opaque light
7. uses smooth easing curves (`ease-in-out`, `cubic-bezier`). all transitions are `linear` or `steps()`. motion is mechanical, not organic
8. uses decorative imagery, illustrations, icons, or emoji. visual communication is through wireframe geometry, data lines, and typographic labels only
9. uses `opacity` above 0.9 on colored elements in their resting state. everything has slight transparency — the void bleeds through. only active/pressed states go fully opaque
10. uses padding or spacing that feels "comfortable" or "breathable" in the modern web sense. data is dense. panels are packed. the negative space exists between panel clusters in the void, not within panels themselves
