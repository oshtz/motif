---
id: "58"
name: atmospheric_control.void
keywords:
  - atmospheric
  - control panel
  - observatory
  - hardware
  - void
  - instrument
  - dial
  - hud
  - spacecraft
  - readout
  - scientific
  - dark
---

### genome 58: `atmospheric_control.void`

> identity: deep-void atmospheric monitoring station. spacecraft environmental control meets Braun hardware meets observatory HUD — ultra-thin display numerics floating over shader atmospherics, physical rotary dials, and LED-indicated hardware buttons.

**surface**

colors:
```
--void: #000000;          /* true black — the dominant surface */
--panel: #050505;         /* near-black raised panels */
--panel-raised: #0A0A0A;  /* button/control surfaces */
--border-dim: #1a1a1a;    /* structural dividers, dial housings */
--border-light: #2a2a2a;  /* secondary structural lines */
--text-main: #ffffff;     /* primary readouts, active labels */
--text-muted: #666666;    /* secondary labels, inactive text */
--text-dark: #333333;     /* tertiary metadata, dim labels */
--led-active: #ff3300;    /* indicator LEDs when active — the only chromatic accent */
--led-off: #331100;       /* indicator LEDs when inactive */
```

typography:
- display/readouts: system sans-serif (`-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", sans-serif`), font-weight: 100, 4rem–6rem, `letter-spacing: -0.04em`, `font-variant-numeric: tabular-nums`, `transform: scaleX(0.9)` for condensed feel. this ultra-thin weight is the genome's signature — numerics should feel etched into glass
- labels/hud: same system sans, font-weight: 300, 0.55rem–1rem, `text-transform: uppercase`, `letter-spacing: 0.05em–0.2em`
- data values: monospace (`"SF Mono", "Roboto Mono", monospace`), 0.6rem–0.7rem, `letter-spacing: 0.05em`
- body/ui: `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif`, 0.65rem, weight 400
- hierarchy through weight contrast (100 vs 300 vs 400) and opacity, not scale. maximum text size is 6rem for hero readouts only

borders:
- structural dividers: `1px solid var(--border-dim)` — hairline only
- panel sections: no visible borders; separation through background color steps (#000 → #050505 → #0A0A0A)
- dial housings: `0 0 0 1px var(--border-dim)` as box-shadow ring, plus `inset 0 1px 1px rgba(255,255,255,0.05)` for subtle bevel
- `border-radius: 4px` maximum on rectangular elements. 50% on circular controls (dials, status dots). no other radius values

spacing:
- primary padding: 24px on control panels and sections
- gaps: 24px between major sections, 8px between metadata rows, 4px between status indicators, 12px between stacked buttons
- crosshair guides at 50% vertical and horizontal on observation areas

**color distribution**

- 75% void black (`--void`, `--panel`) — the overwhelming majority of pixels are near-black. this is non-negotiable
- 12% structural gray (`--border-dim`, `--border-light`) — dividers, housings, crosshairs, dial textures
- 10% text white (`--text-main`) — readout numerics, active labels. white appears only where information demands attention
- 2% muted gray (`--text-muted`, `--text-dark`) — secondary labels, metadata values
- 1% red LED (`--led-active`) — a single indicator color used extremely sparingly. when it appears, it means something

**component patterns**

buttons:
- "hardware button" style: `background: var(--panel-raised); border: 1px solid var(--border-dim); height: 48px; border-radius: 4px; padding: 0 16px`. physically recessed appearance via `box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.3)`
- each button has an LED indicator bar: `width: 4px; height: 12px; border-radius: 2px` on the left side. inactive: `background: var(--led-off)`. active: `background: var(--led-active); box-shadow: 0 0 8px var(--led-active)`
- button labels: 0.65rem, `letter-spacing: 0.15em`, uppercase, `color: var(--text-muted)`. active state: `color: #fff`
- buttons stack vertically in groups with 12px gap

inputs:
- `background: var(--panel-raised); border: 1px solid var(--border-dim); height: 40px; border-radius: 4px; padding: 0 12px`
- text: monospace, 0.7rem, `color: var(--text-main)`
- placeholder: monospace, `color: var(--text-dark)`
- focus: `border-color: var(--border-light); box-shadow: 0 0 0 1px var(--border-light)`
- label above input: 0.5rem uppercase, `letter-spacing: 0.1em`, `color: var(--text-dark)`

cards/panels:
- no visible borders on outer edges — panels are defined by background color stepping (void → panel → panel-raised)
- internal structure via `1px solid var(--border-dim)` hairlines
- no shadow on panels — depth communicated through luminance difference only
- card headers: uppercase label (0.55rem, `letter-spacing: 0.2em`, `color: var(--text-muted)`) separated by `//` from section identifier

navigation:
- horizontal or vertical list of uppercase labels (0.55rem, `letter-spacing: 0.2em`)
- active item: `color: var(--text-main)` with adjacent status dot (`width: 6px; height: 6px; border-radius: 50%; background: #fff; box-shadow: 0 0 8px rgba(255,255,255,0.8)`)
- inactive items: `color: var(--text-muted)`
- no background highlight, no underline — white glow dot is the only indicator

headers:
- split layout: HUD-style with data pinned to corners of the observation area
- top-left: label (0.55rem uppercase muted) + value (monospace 0.7rem white)
- top-right: status dot array (small circles showing system health)
- section headers within control deck: `"SYS. CONTROLS // MK IV"` format — uppercase, `letter-spacing: 0.2em`, muted gray

footers:
- minimal — a single `1px solid var(--border-dim)` hairline with sparse metadata below
- monospace, 0.5rem, `color: var(--text-dark)`

lists:
- metadata rows: `display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid var(--border-dim); padding-bottom: 4px`
- label: 0.5rem, `color: var(--text-dark)`, uppercase
- value: monospace 0.6rem, `color: var(--text-muted)`

tables:
- no alternating rows — all rows on `var(--panel)` background
- `1px solid var(--border-dim)` bottom border on each row
- header row: same style as labels (0.5rem, uppercase, dark gray)
- cell values: monospace, 0.6rem, muted

dividers:
- `1px solid var(--border-dim)` exclusively. no thicker dividers, no dashed, no dotted
- crosshair pattern (full-width 1px horizontal + full-height 1px vertical at 50%) in observation/display areas, `opacity: 0.5`

modals/overlays:
- `background: var(--panel); border: 1px solid var(--border-dim); border-radius: 4px`
- no backdrop blur — overlay sits on a `background: rgba(0,0,0,0.85)` scrim
- header: uppercase label with `//` separator
- subtle `box-shadow: 0 20px 40px rgba(0,0,0,0.8)`

badges/tags:
- small status indicators: `width: 6px; height: 6px; border-radius: 50%`. active: white with glow. inactive: white at `opacity: 0.2`
- text badges: monospace, 0.5rem, `padding: 2px 6px`, `border: 1px solid var(--border-dim)`, `border-radius: 2px`

rotary dials (signature component):
- housing: `border-radius: 50%; background: linear-gradient(145deg, #0a0a0a, #000000); box-shadow: inset 0 1px 1px rgba(255,255,255,0.05), 0 10px 20px rgba(0,0,0,0.8), 0 0 0 1px var(--border-dim)`
- surface: `border-radius: 50%; background-image: conic-gradient(from 180deg, #050505 0%, #1a1a1a 15%, #050505 30%, #0a0a0a 50%, #050505 70%, #1a1a1a 85%, #050505 100%)` — knurled metal texture via conic gradient
- indicator: `width: 2px; height: 12px; background: #fff; border-radius: 1px; box-shadow: 0 0 4px rgba(255,255,255,0.5)` — a single white tick mark
- label below: 0.6rem, uppercase, `letter-spacing: 0.2em`, muted

**interaction language**

- hover: `border-color: var(--border-light)` on buttons/inputs. no background change, no scale, no shadow lift. on text links: `color: var(--text-main)` from muted
- active/pressed: buttons physically depress — `background: #080808; box-shadow: inset 0 2px 4px rgba(0,0,0,0.8); transform: translateY(1px)`. LED toggles on. this must feel mechanical
- focus: `outline: 1px solid var(--border-light); outline-offset: 2px`. no glow, no ring
- selected: LED indicator activates (`background: var(--led-active); box-shadow: 0 0 8px var(--led-active)`), label brightens to white
- disabled: `opacity: 0.25`. LED shows `var(--led-off)`. no other visual change
- drag (dials): direct rotation tracking, `transition: none` during drag, `transition: transform 0.1s ease-out` on release. cursor changes to `grabbing`

**motion & feedback**

- transitions: `0.1s ease-out` on button press, `0.2s` on LED state changes. deliberately minimal — this hardware responds, it doesn't animate
- dials: `transition: transform 0.1s ease-out` (snaps to position). during active drag: no transition (direct tracking)
- loading: primary readout value cycles through `--` with `opacity` pulsing between 0.3 and 1.0 at 1.5s interval
- success: LED indicator flashes bright white once (`0 0 12px #fff` box-shadow, 200ms), then settles to steady `var(--led-active)`
- error: LED indicator rapid-blinks red 3 times (100ms on/off), readout displays `ERR` in monospace

**atmosphere**

- dominant void: the background is true black (#000000). this is the foundation — panels float in absolute darkness
- WebGL/shader atmospheric effects in observation areas: volumetric smoke, nebula rings, particle fields rendered as ambient background behind readouts. these are always dark (near-black base with subtle warm gray/gold highlights), never bright or colorful
- crosshair overlay: 1px structural lines at viewport center, `opacity: 0.5`, `color: var(--border-dim)` — gives a targeting/observation feel
- subtle scanline texture: `sin()` based horizontal line pattern at very low opacity over display areas
- panel depth: surfaces progress from #000000 (void) → #050505 (panel) → #0A0A0A (raised) — luminance steps of 5 points maximum
- no blur effects, no glassmorphism, no gradients on panels. gradients appear only on dial knurling (conic) and dial housing (linear, both near-black)
- ambient light: occasional `rgba(255,255,255,0.05)` inset highlight on top edges to suggest overhead lighting on physical hardware

**editorial voice**

button labels: `PURGE`, `IONIZE`, `CALIBRATE`, `ENGAGE`, `VENT`, `SEAL`, `OVERRIDE`, `STANDBY` — single-word imperatives from industrial/atmospheric systems vocabulary. always uppercase

headings: uppercase, `letter-spacing: 0.2em`, formatted as `SECTION // IDENTIFIER` (e.g., `SYS. CONTROLS // MK IV`, `ATMOS. MONITOR // BAY 3`). abbreviated where possible. punctuation limited to `//`, `.`, `:`, and `—`

metadata: scientific notation and units — `0.084 kg/m³`, `294.1K`, `432Hz`, `1.013 bar`. always with unit suffix. values in monospace, labels in uppercase micro-text

placeholders: `— — —` (em-dashed blanks) or `0.000` with appropriate unit. never conversational placeholder text

empty states: `NO SIGNAL` or `AWAITING INPUT` centered in monospace, `color: var(--text-dark)`. no illustrations, no icons, no explanatory paragraphs

error messages: `ERR: [CODE]` format in monospace. e.g., `ERR: SENSOR_FAULT`, `ERR: PRESSURE_EXCEED`, `ERR: LINK_TIMEOUT`. terse, technical, no apology

success messages: `OK` or `NOMINAL` followed by brief status. e.g., `OK — SEAL INTEGRITY NOMINAL`, `CALIBRATION COMPLETE — DRIFT: 0.002%`. confirmation is factual, never celebratory

**cursor & selection**

- default: `cursor: default` on void areas
- interactive elements: `cursor: pointer` on buttons and controls
- dials: `cursor: grab`, `cursor: grabbing` during drag
- text (where selectable): `cursor: text`
- `::selection { background: rgba(255, 255, 255, 0.15); color: #fff }` — subtle white highlight, nearly invisible

**when to reach for this genome**

Use `atmospheric_control.void` when the prompt asks for a spacecraft environmental-control panel, atmosphere monitor, observatory HUD, life-support console, pressure/ionization/ventilation system, scientific readout bay, or any dark hardware UI where the main actions are calibrating, sealing, purging, venting, engaging, and reading environmental values.

Reach for it when the visual cues are true black void, ultra-thin white numerics, grayscale hardware panels, Braun-like rotary dials, small red LED indicators, physical button stacks, hairline crosshair overlays, tiny uppercase labels, units such as `kg/m3`, `K`, `Hz`, or `bar`, and copy like `SYS. CONTROLS // MK IV`, `NO SIGNAL`, `NOMINAL`, or `ERR: SENSOR_FAULT`.

Do not choose it for Tektronix/Fluke-style bench equipment, oscilloscope bezels, multimeters, machined chassis, amber phosphor screens, or general measurement hardware; use `precision_instrument.met`. Do not choose it for camera firmware, Leica-like lens configurators, viewfinder brackets, aperture/ISO calibration, or optical diagnostics; use `precision_optics.lens`. Do not choose it for hostile anomaly consoles, deep-ocean rifts, reactor containment, additive neon wireframes, breach alerts, or acid/red operational telemetry; use `abyssal_telemetry.rift`. Do not choose it for dark cargo inventories, oversized manifest lists, sector ledgers, or warehouse abstractions; use `void_manifest.ops`. Do not choose it for premium product launch pages, 3D object staging, warm amber spec callouts, or purchase/configuration flows; use `carbon_stage.lux`. Do not choose it for NWS-style weather maps, radar, METAR/TAF workflows, warnings, or synoptic chart rooms; use `weather_bureau.wx`.

It is strongest when the interface feels like a physical environmental system embedded in darkness. A prompt that only says "dark sci-fi" is not enough; this genome needs atmospheric control, readout instrumentation, or life-support hardware logic.

**anti-patterns — this genome NEVER:**

1. uses border-radius above 4px on rectangular elements (only circular controls get 50%). no rounded cards, no pill-shaped containers, no soft corners
2. uses font-weight above 400 for any text. the genome's typographic identity is ultra-light (100) to regular (400). bold text destroys the etched-glass quality
3. uses colored backgrounds on panels or cards. all panel surfaces are black-to-near-black luminance steps. color appears only in LED indicators and text
4. uses transitions longer than 0.2s. this is physical hardware — it responds mechanically, not fluidly. no elastic easing, no spring animations, no parallax
5. introduces saturated colors beyond the red LED accent. no blues, greens, purples, or warm oranges as UI elements. the only chromatic moment is `--led-active: #ff3300` — everything else is grayscale. ambient shader atmospherics may contain subtle warm tones but never bright or saturated hues
6. uses drop shadows for depth on panels. depth comes from luminance stepping (#000 → #050505 → #0A0A0A), not shadow. shadows appear only on dial housings and button press states to simulate physical recess
7. uses decorative icons, illustrations, or emoji. information is conveyed through text, numerics, LED states, and structural position. the only graphical elements are status dots and dial indicators
8. uses conversational or friendly language. all text is terse, technical, abbreviated. no "Welcome back", no "Something went wrong", no question marks in UI copy
9. uses large text (above 1rem) for anything other than the primary numeric readout. the observation area readout is the singular focal point — everything else stays small and peripheral
10. uses visible scrollbars or scroll indicators. content fits the viewport. if overflow is necessary, it is hidden or managed through panel navigation, never through visible scroll UI
