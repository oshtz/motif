---
id: "15"
name: signal_capture.unit
keywords:
  - monitoring
  - signal
  - device
  - widget
  - capture
  - audio
  - surveillance
  - tactical
  - hud
  - recording
  - hardware
  - telemetry
  - radar
  - military
  - espionage
---

### genome 15: `signal_capture.unit`

> identity: modern tactical signal device. dark floating widget interfaces for monitoring, audio capture, and data acquisition — the UI language of professional recording hardware and covert signal processing equipment.

**surface**

colors:
```
--bg: #E6E6E6;           /* neutral gray surround — the desk the device sits on */
--device-bg: #151619;    /* near-black device body */
--text-primary: #FFFFFF; /* primary readout text */
--text-muted: #8E9299;   /* secondary labels, metadata, inactive elements */
--text-dim: rgba(255,255,255,0.1); /* divider lines, subtle borders */
--alert: #FF4444;        /* active/recording/danger state — always red, never warm */
--alert-glow: rgba(255,68,68,0.4); /* soft bleed around alert elements */
```

typography:
- primary UI: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` — weight 400 for body, 500 for labels, 600 for emphasis
- system/code: `'JetBrains Mono', 'Roboto Mono', monospace` — weight 400-500
- label text: 10px, `letter-spacing: 1px`, `text-transform: uppercase`, monospace
- body readout: 14px, `line-height: 1.4`, primary font
- timecodes/data: 11px monospace, `letter-spacing: 1px`
- no text exceeds 18px — hierarchy comes from weight, color, and spacing, not scale
- `-webkit-font-smoothing: antialiased` everywhere

borders:
- `border-radius: 12px` on device containers/cards — this is the signature radius
- `border-radius: 50%` on circular controls (buttons, tracks, indicators)
- internal borders: `1px solid rgba(255,255,255,0.1)` — barely visible separator lines
- outer borders: `1px solid var(--text-muted)` on interactive circular elements
- dashed borders for orbital/track elements: `1px dashed var(--text-muted)`

spacing:
- device padding: `24px` uniform inner padding
- section gaps: `16px` between content blocks
- footer bottom padding: `32px` for visual grounding
- generous whitespace inside device — content breathes within the dark container

**color distribution**

- 45% neutral gray surround (`--bg`) — the environment behind the device
- 35% near-black device body (`--device-bg`) — the dominant surface
- 10% white text (`--text-primary`) — readouts, status text, active elements
- 7% muted gray (`--text-muted`) — labels, metadata, inactive controls
- 3% red alert (`--alert`) — recording indicators, active state accents, danger

the gray surround is critical — it frames the dark device as a physical object floating in space, not a fullscreen dark theme. without it, the genome collapses into generic dark mode.

**component patterns**

buttons:
- circular trigger buttons: `width: 60px; height: 60px; border-radius: 50%; border: 1px solid var(--text-muted); background: transparent`. centered icon inside (small square or circle, 8-12px). no text labels on circular buttons.
- text buttons: no background, no border. monospace uppercase text. `color: var(--text-muted)`. on active: `color: var(--text-primary)`.
- primary action buttons: `background: transparent; border: 1px solid var(--text-muted); border-radius: 8px; padding: 10px 20px`. monospace uppercase label.

inputs:
- `background: transparent; border: none; border-bottom: 1px solid var(--text-dim)`. text color `var(--text-primary)`. placeholder in `var(--text-muted)`.
- focus: `border-bottom-color: var(--text-primary)`. no outline, no glow.
- label above input in monospace uppercase 10px `var(--text-muted)`.

cards/panels (the "device"):
- `background: var(--device-bg); border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.15)`. no border on the device itself — the shadow defines the edge.
- structured as header / stage / footer vertical stack with `display: flex; flex-direction: column`.
- fixed or aspect-ratio-constrained sizing (e.g. `380px x 520px`) — devices have physical dimensions.

navigation:
- horizontal row of monospace uppercase labels. active item: `color: var(--text-primary)`. inactive: `color: var(--text-muted)`.
- no underlines, no backgrounds, no pills. active state is color-only.
- separated by generous horizontal spacing, not dividers.

headers:
- `padding: 24px`. flex row with `justify-content: space-between`. monospace reference labels at 10px.
- left: device identifier (e.g. "W - 01"). right: input/mode label (e.g. "AUDIO_IN").
- `opacity: 0.7` on header labels.

footers:
- `padding: 24px; padding-bottom: 32px`. status section above, timecode/metadata below.
- top border on metadata row: `1px solid rgba(255,255,255,0.1); padding-top: 16px`.
- timecode left-aligned, technical specs right-aligned (e.g. "44.1 kHz").

lists:
- no bullets, no numbers. each item is a monospace label + value pair.
- items separated by `1px solid rgba(255,255,255,0.1)` horizontal rules.
- active items: `color: var(--text-primary)`. inactive: `color: var(--text-muted)`.

tables:
- no visible borders on cells. header row in monospace uppercase 10px `var(--text-muted)`.
- rows separated by `1px solid rgba(255,255,255,0.1)`.
- data cells in monospace 11px `var(--text-primary)`.

dividers:
- `1px solid rgba(255,255,255,0.1)` — the only divider style. never thicker, never dashed (dashed is reserved for orbital tracks).

modals/overlays:
- same device card styling: `background: var(--device-bg); border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.15)`.
- backdrop: `rgba(0,0,0,0.4)` — dims the gray surround.
- header with monospace reference label and close button (circular, 32px, × icon).

badges/tags:
- `font-family: var(--mono-font); font-size: 9px; letter-spacing: 1px; text-transform: uppercase`.
- `padding: 4px 8px; border: 1px solid var(--text-muted); border-radius: 4px`.
- active/recording badge: `border-color: var(--alert); color: var(--alert)`.

**interaction language**

hover:
- circular buttons: `border-color: rgba(255,255,255,0.6); transform: scale(1.05)`. transition: `0.3s cubic-bezier(0.2, 0.8, 0.2, 1)`.
- text elements: `color: var(--text-primary)`. no background change.
- cards: `transform: translateY(-2px)`. subtle lift.

active/pressed:
- circular buttons: `transform: scale(0.95)`. spring-back feel.
- text buttons: `opacity: 0.7`.

focus:
- `outline: 1px solid var(--text-muted); outline-offset: 2px`. no glow, no ring.
- on dark backgrounds the outline is visible without needing color.

selected/toggled:
- recording state: icon changes to `background: var(--alert); box-shadow: 0 0 10px var(--alert-glow)`.
- list/nav items: `color: var(--text-primary)` (vs `var(--text-muted)` for unselected).

disabled:
- `opacity: 0.25`. no other visual change. no strikethrough, no gray-out beyond opacity.

drag:
- `cursor: grabbing; opacity: 0.8`. element gets subtle `box-shadow: 0 10px 30px rgba(0,0,0,0.3)`.

**motion & feedback**

transitions:
- default: `0.3s cubic-bezier(0.2, 0.8, 0.2, 1)` — this specific curve is the genome's signature. slightly springy, never bouncy.
- color transitions: `0.3s ease`.
- never exceed `0.4s` total duration. this is equipment, not entertainment.

loading:
- radial tick animation: 120 ticks around a circle, base length 8px, max length 24px, modulated by `sin(angle * 4 + time)`, `stroke-width: 1px`, `stroke: var(--text-primary)`. `requestAnimationFrame` loop.
- pulsing ring: `animation: pulse-ring 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1)` — concentric circles expanding from center, fading out.
- dashed orbital track: `border: 1px dashed var(--text-muted); animation: spin 60s linear infinite` — slow, constant rotation.

success:
- status text updates to confirmation message. brief `opacity` flash on the status row (fade to 0.5, back to 1, 200ms).
- no green color — success is just white text confirming the action.

error:
- status text in `var(--alert)` color. no animations, no shaking. the red color is enough.
- alert badge appears with `border-color: var(--alert)`.

**atmosphere**

- the gray surround (`--bg: #E6E6E6`) is flat — no texture, no gradient, no pattern. it is a neutral surface.
- the device casts a substantial shadow: `box-shadow: 0 20px 40px rgba(0,0,0,0.15)` — this creates the floating-object illusion.
- inside the device, the dominant atmosphere comes from radial visualization: concentric circles, tick marks radiating from center, dashed orbital tracks.
- pulse effects: concentric rings expanding outward from a center point during active states. `border: 1px solid rgba(255,255,255,0.3)`.
- `user-select: none` on all device elements — this is hardware, not a document.
- canvas-rendered visualizations (radial ticks, waveforms) provide ambient motion without CSS animation complexity.
- no scanlines, no noise, no grain — this is modern equipment, clean and precise.

**editorial voice**

button labels: `CAPTURE`, `TRANSMIT`, `INITIALIZE`, `TERMINATE`, `CONFIGURE`, `ARM`, `DISARM`, `EXPORT`

headings: uppercase monospace, terse, functional. no articles, no verbs. examples:
- `STATUS`
- `AUDIO_IN`
- `SIGNAL METRICS`
- `CAPTURE LOG`
- `DEVICE CONFIG`

metadata format:
- timecodes: `00:00:00:00` (HH:MM:SS:FF)
- sample rates: `44.1 kHz`, `96 kHz`
- device IDs: `W - 01`, `SIG - 04`, `CAP - 12`
- versions: `v2.1.0`
- timestamps: `2024.03.15 — 14:22:08 UTC`

placeholders:
- `Enter signal reference...`
- `Device identifier`
- `Frequency range`
- `Target channel`

empty states:
- `System idle. Ready for capture.`
- `No signals detected.`
- `Awaiting input stream.`
- `Buffer empty.`

error messages:
- `Signal lost. Check connection.`
- `Capture failed. Buffer overflow.`
- `Device unresponsive. Retry.`
- `Authentication required.`

success messages:
- `Secure link established. Capturing input stream...`
- `Capture stopped. Data encrypted and stored.`
- `Signal locked. Transmission stable.`
- `Export complete. File secured.`

**cursor & selection**

- default cursor: `default` on device body — this is a device panel, not a webpage.
- interactive elements: `pointer` on buttons only.
- drag handles: `grab` / `grabbing`.
- text inputs: `text` cursor, but only within input fields.
- `::selection { background: rgba(255,255,255,0.2); color: var(--text-primary); }` — muted, non-distracting selection.

**when to reach for this genome**

Use `signal_capture.unit` when the prompt asks for a compact tactical monitoring device, audio-capture unit, covert signal recorder, data-acquisition widget, hardware control panel, secure transmission module, radar/signal lock interface, field recording console, espionage equipment UI, or professional capture device where the interface should feel like a dark physical instrument sitting on a neutral gray surface.

Reach for it when the user wants modern equipment rather than a full-screen app: fixed-size device cards, circular trigger buttons, radial tick visualizers, pulse rings, dashed orbital tracks, timecodes, sample-rate metadata, terse uppercase labels, red recording/alert states, and a restrained white/gray/red palette.

Do not use it for multi-camera security rooms, CCTV walls, PTZ controls, incident logs, or fixed surveillance operations centers; use `surveillance_grid.cctv`. Do not use it for warm 1970s cinema/NASA hardware, backlit toggles, or Panavision industrial design; use `panavision.70s`. Do not use it for camera firmware, lens configurators, Leica-style optical diagnostics, or viewfinder framing; use `precision_optics.lens`. Do not use it for analog darkroom contact sheets, red safelight, negatives, film strips, or chemical print workflows; use `darkroom_proof.contact`. Do not use it for amber CRT telemetry, scanlines, life-support logs, or retro sci-fi curved displays; use `phosphor_telemetry.amb`. Do not use it for live data journalism, probability models, or saturated broadsheet reporting; use `signal_broadsheet.live`.

It is strongest when the product reads as a single purpose-built capture object: arm, record, lock, transmit, export, or secure a signal. If the prompt needs an operations room, optical product system, cinematic control deck, photographic lab, retro terminal, or editorial signal story, choose another genome.

**anti-patterns — this genome NEVER:**

1. uses a fullscreen dark background — the neutral gray surround is mandatory. without it, the device loses its physicality and becomes generic dark mode.
2. uses bright or saturated accent colors beyond red — no blue, no green, no purple, no orange as accents. the only color that breaks the gray/white palette is `#FF4444` red.
3. uses text larger than 18px — hierarchy is built through weight, spacing, and color, never through size escalation.
4. uses rounded pill shapes (border-radius: 9999px) on rectangular elements — pills are reserved only for fully circular buttons/indicators. cards use 12px radius.
5. uses decorative icons, illustrations, or emoji — all iconography is geometric primitives: squares, circles, lines. no pictorial icons.
6. uses gradient backgrounds or gradient text — all surfaces are flat solid colors. gradients undermine the equipment aesthetic.
7. uses casual, friendly, or conversational language — the voice is terse, technical, procedural. no exclamation marks, no encouragement, no humor.
8. uses visible scrollbars — content overflow is handled by pagination or truncation with monospace ellipsis.
9. uses drop shadows on internal elements — only the outer device container has a shadow. internal elements are flat within the device body.
10. uses font sizes below 9px or above 18px — the entire type scale lives in a 9px-18px range with most text at 10-14px.
