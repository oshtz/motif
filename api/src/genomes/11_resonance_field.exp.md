---
id: "11"
name: resonance_field.exp
keywords:
  - generative
  - experiment
  - resonance
  - telemetry
  - canvas
  - installation
  - reactive
  - topology
  - particle
  - neon
  - exhibition
  - laboratory
  - sound reactive
  - audiovisual
---

### genome 11: `resonance_field.exp`

> identity: live generative research exhibition. warm swiss information grid on off-white paper framing real-time neon computation on black canvas — experimental art institution meets telemetry dashboard.

**surface**

colors:
```
--bg: #F4F4F2;        /* warm paper — primary surface */
--fg: #111111;         /* near-black — text, borders, structure */
--muted: #555555;      /* body copy, secondary descriptions */
--dim: #888888;        /* tertiary labels, sub-metadata */
--pill-inactive: #E8E8E6; /* inactive pill/toggle background */
--canvas-bg: #000000;  /* generative canvas void */
--neon-magenta: #FF3366;
--neon-cyan: #00FFCC;
--neon-yellow: #FFFF00;
--neon-violet: #7000FF;
--live-red: #FF3333;   /* live status indicator */
```

typography:
- primary: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- monospace accent: `monospace` (brand marks, overlay readouts, system codes only)
- body: `13px`, `font-weight: 400`, `line-height: 1.4`, `letter-spacing: -0.01em`
- meta labels: `10px`, `font-weight: 500`, `text-transform: uppercase`, `letter-spacing: 0.05em`
- hero headings: `clamp(2rem, 4vw, 3.5rem)`, `font-weight: 400`, `letter-spacing: -0.02em`, `line-height: 1.1`, `max-width: 35ch`
- data text: `14px`, `font-weight: 400`, `letter-spacing: -0.01em`
- list dates: `24px`, `font-weight: 400`, `letter-spacing: -0.02em`
- brand marks: `monospace`, `14px`, `font-weight: 500`, `letter-spacing: 0.2em`
- canvas overlay: `monospace`, `10px`, `color: rgba(255,255,255,0.7)`
- headings never exceed 3.5rem. hierarchy through weight reduction and tracking, not size escalation.

borders:
- all structural borders: `1px solid var(--fg)` — black, crisp, architectural
- page wrapper: left and right `1px solid var(--fg)` creating a contained column
- section dividers: `border-bottom: 1px solid var(--fg)`
- list row separators: `border-bottom: 1px solid var(--fg)`
- `border-radius: 0px` on all structural elements — sections, cards, panels, wrappers
- pill elements are the ONE exception: `border-radius: 100px` on nav pills and status dots only

spacing:
- base unit: `1rem`
- scale: `--spacing-xs: 0.5rem; --spacing-sm: 1rem; --spacing-md: 2rem; --spacing-lg: 4rem; --spacing-xl: 8rem`
- grid label column: `240px` fixed width
- cell padding: `var(--spacing-md)` (2rem)
- max page width: `1800px`, centered with `margin: 0 auto`

**color distribution**

- 55% warm paper (`--bg`) — the institutional surface, breathes around content
- 20% near-black (`--fg`) — text, borders, active pill fills — structural ink
- 10% muted grays (`--muted`, `--dim`) — secondary text, sub-labels
- 10% canvas void (`--canvas-bg`) — the generative black, contained in its section
- 5% neon accents (`--neon-magenta`, `--neon-cyan`, `--neon-yellow`, `--neon-violet`) — ONLY inside or referencing the canvas/generative elements. never on the information grid.

the neon colors never bleed into the paper grid. the duality is the point: warm institutional structure framing chaotic chromatic computation.

**component patterns**

buttons:
- no traditional filled buttons. all interaction is text-based or pill-based.
- pill buttons: `background: var(--fg); color: var(--bg); border-radius: 100px; padding: 6px 16px; font-size: 11px; font-weight: 500`
- inactive pill: `background: var(--pill-inactive); color: var(--fg); border-radius: 100px`
- pill group container: `display: flex; background: var(--pill-inactive); border-radius: 100px; padding: 4px; gap: 4px`
- text actions: meta-label style (`10px uppercase tracked`) with no border, no background

inputs:
- `border: 1px solid var(--fg); background: transparent; padding: 8px 12px; font-size: 13px; font-family: inherit`
- `border-radius: 0px`
- label above input as meta-label (`10px uppercase`)
- placeholder: `color: var(--dim); font-style: normal`
- focus: `outline: 2px solid var(--fg); outline-offset: -2px`

cards/panels:
- no shadow, no elevation. panels are grid sections separated by `1px solid var(--fg)` borders.
- alternating sections may use `background: rgba(0,0,0,0.02)` for subtle differentiation
- grid layout: `display: grid; grid-template-columns: 240px 1fr` — label column on left, content on right

navigation:
- pill group pattern: horizontal row of pills inside a rounded container
- active: filled black with white text
- inactive: transparent on light gray
- header layout: `display: flex; justify-content: space-between; align-items: center; padding: 2rem`
- brand mark right-aligned or centered, monospace with wide tracking

headers:
- no traditional banner. header is a flex row: nav pills | brand mark | status indicator
- separated from content by `border-bottom: 1px solid var(--fg)`
- brand marks use format: `Σ/X—01`, `Δ/R—03` (greek letter + slash + letter + em dash + number)

footers:
- minimal. text action row: meta-label on left ("Load full history"), icon on right
- `border-top: 1px solid var(--fg)`
- same grid alignment as content sections

lists:
- row layout: `display: grid; grid-template-columns: 120px 1fr auto; align-items: center`
- date column: large `24px` numerals, `font-weight: 400`
- content: title `14px` + subtitle `11px; color: var(--dim)`
- trailing icon: minimal arrow (`16px` SVG, `stroke-width: 1.5`, square linecap)
- rows separated by `border-bottom: 1px solid var(--fg)`
- hover: `background: rgba(0,0,0,0.03)` — barely perceptible

tables:
- structured as grid rows following list pattern
- header row: meta-label style (10px uppercase)
- no alternating row colors. separation via borders only.
- data cells: `14px`, aligned to grid columns

dividers:
- always `1px solid var(--fg)`. no dashed, no dotted, no colored variants.
- horizontal only. vertical separation achieved through grid column borders.

modals/overlays:
- `background: var(--bg); border: 1px solid var(--fg); border-radius: 0px`
- backdrop: `background: rgba(0,0,0,0.6)` — dark, referencing the canvas void
- no shadow, no blur. hard-edged institutional panel.
- header: meta-label + close icon (plus rotated 45°)

badges/tags:
- pill-shaped: `border-radius: 100px; padding: 4px 12px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em`
- default: `background: var(--pill-inactive); color: var(--fg)`
- live/active: `background: var(--fg); color: var(--bg)`
- status dots: `width: 6px; height: 6px; border-radius: 50%` with pulse animation for live states

status indicators:
- pulsing dot: `width: 6px; height: 6px; background: var(--live-red); border-radius: 50%; animation: pulse 2s infinite`
- paired with uppercase meta-label: `LIVE SYNC`, `RECORDING`, `IDLE`
- data readouts: monospace, inline with meta-labels — e.g., `0.92 v/s`, `432Hz`

**interaction language**

hover:
- list rows / clickable regions: `background: rgba(0,0,0,0.03)`. barely-there tint shift.
- pills: no hover change on inactive (active state is the only visual differentiation)
- text actions: `opacity: 0.6` on hover

active/pressed:
- pills: instant swap — `background: var(--fg); color: var(--bg)`. hard cut, no fade.
- list rows: `background: rgba(0,0,0,0.06)`
- text actions: `opacity: 1`

focus:
- `outline: 2px solid var(--fg); outline-offset: 2px`
- no glow, no shadow. architectural line only.

selected:
- pills: filled state (black bg, white text)
- list rows: left border accent `border-left: 2px solid var(--fg)`
- tabs: bottom border `border-bottom: 2px solid var(--fg)`

disabled:
- `opacity: 0.25`. no strikethrough, no desaturation tricks.
- cursor: `not-allowed`

drag:
- `cursor: grab` / `cursor: grabbing`
- dragged element: `opacity: 0.8; outline: 1px dashed var(--fg)`

**motion & feedback**

transitions:
- pills and navigation: `transition: all 0.2s ease` — the only elements that transition
- list row hover: `transition: background 0.2s ease`
- all layout changes: instantaneous. no stagger, no slide, no reveal.
- canvas/generative elements: fluid animation via `requestAnimationFrame` — 60fps particle systems, trail decay, chromatic blending. this motion lives ONLY inside the canvas container.

loading:
- pulsing status dot (keyframe: `opacity: 1 → 0.3 → 1` over 2s)
- meta-label: `SYNCHRONIZING...` or `LOADING FIELD...`
- no spinner. no skeleton. the dot pulses, the label describes.

success:
- status dot briefly shifts to `--neon-cyan` for 1s, then returns to `--live-red`
- meta-label updates: `FIELD STABLE` or `SYNC COMPLETE`

error:
- status dot shifts to `--neon-magenta`
- meta-label: `FIELD INTERRUPTED` or `SYNC LOST`
- affected section border flashes: `border-color: var(--neon-magenta)` for 500ms

**atmosphere**

the defining atmospheric quality is DUALITY: warm institutional paper surface containing a void of generative chaos.

- page wrapper: contained column with side borders, creating a vertical document feel on wide screens
- canvas container: `background: #000; min-height: 500px; height: 65vh; overflow: hidden` — a window into computational darkness
- canvas overlay UI: monospace readout in bottom-right, `color: rgba(255,255,255,0.7); text-shadow: 0 0 8px currentColor, 0 0 20px currentColor`, displaying live telemetry (frequency bands, velocity, interaction prompts)
- generative particles use `globalCompositeOperation: 'screen'` for additive neon blending on black
- trail decay: `rgba(0, 0, 0, 0.08)` fill per frame (applied every requestAnimationFrame cycle) — slow ghosting, persistent afterglow. particles pass through each other (no collision), velocity dampening 0.98/frame
- subtle section differentiation: `background: rgba(0,0,0,0.02)` on alternating data sections
- no texture, no grain, no noise on the paper surface. it is clean and institutional.
- the canvas IS the texture. the paper IS the calm.

**editorial voice**

button/action labels:
- `Canvas`, `Telemetry`, `Nodes`, `Load full history`, `Initialize field`, `Pause`, `Export data`, `Reset topology`
- sentence case or single-word. never all-caps on actions (all-caps reserved for meta-labels).

headings:
- poetic-technical. full sentences allowed for hero headings: "A collective interface for ephemeral, sound-reactive organic topologies."
- lowercase sentence case with period. describes the system's purpose in one breath.
- section headings: meta-label format (10px uppercase tracked)

metadata:
- experiment numbering: `Experiment 04`, `Field 12`, `Session 07`
- system identifiers: `Σ/X—01`, `Node 0A4`, `FREQ_BAND`, `VELOCITY_AVG`
- units always displayed: `0.92 v/s`, `432Hz`, `4 nodes`
- dates: `DD/MM` format — `10/05`, `09/05`
- protocol descriptions: `WebSockets / Canvas2D`, `UDP / WebGL`

placeholders:
- `Enter coordinate vector...`, `Search node history...`, `Describe topology...`
- lowercase, ellipsis terminated, technical but accessible

empty states:
- "No active nodes in this field." / "The resonance matrix is idle." / "Awaiting participant input."
- calm, observational. the system is waiting, not broken.

error messages:
- "Field interrupted — connection to node lost." / "Topology destabilized. Attempting recovery."
- factual with em-dash elaboration. no apology, no exclamation.

success messages:
- "Node synchronized." / "Field topology stable." / "Data exported to archive."
- terse confirmation. period-terminated. done.

**cursor & selection**

- body: `cursor: default`
- interactive elements (pills, list rows, text actions): `cursor: pointer`
- canvas: `cursor: crosshair` — the user is an instrument
- drag contexts: `cursor: grab` / `cursor: grabbing`
- `::selection { background: var(--fg); color: var(--bg); }` — inverted black/white selection. no accent color in selection.

**when to reach for this genome**

Use `resonance_field.exp` when the prompt asks for a live generative-art exhibition, sound-reactive installation, audiovisual research interface, particle field, topology experiment, canvas performance, participatory media wall, telemetry-backed artwork, node/resonance lab, or museum-grade computational piece where a restrained paper information grid frames an active black generative void.

Reach for it when the user wants the tension between institutional clarity and real-time computation: warm off-white publication surfaces, hard Swiss grid borders, pill controls, live status dots, canvas overlays, frequency/readout metadata, and neon particles that stay contained inside the art field.

Do not use it for a plain creative-coding portfolio or monochrome shader atelier; use `signal_void.cc` for those. Do not use it for soft wellness, breathing, voice, or floating organic ambience; use `ambient_drift.aura`. Do not use it for full-screen black glassmorphism, glossy metaballs, allocation dashboards, or neon fluid simulation; use `viscous_flux.gl`. Do not use it for amber CRT hardware, sci-fi life-support telemetry, scanlines, or event-log consoles; use `phosphor_telemetry.amb`. Do not use it for spacecraft environmental control, rotary dials, HUD numerics, or atmosphere-monitoring hardware; use `atmospheric_control.void`.

It is strongest for cultural, research, and experimental interfaces where the generated visual system is a living exhibit and the surrounding UI behaves like a precise institutional label, archive, and control surface.

**anti-patterns — this genome NEVER:**

1. uses neon/chromatic colors outside the canvas container. the paper grid is monochrome (black, white, gray). neon exists only in the generative void.
2. uses box-shadow or elevation on any element. depth comes from border containment, not shadow projection.
3. uses border-radius on structural elements (sections, cards, panels, inputs, modals). only pills and status dots are rounded.
4. uses display/decorative typefaces. Inter for information, monospace for system codes. no serif, no pixel font, no hand-drawn.
5. uses gradients on UI surfaces. the paper is flat. the canvas achieves color complexity through additive blending, not CSS gradients.
6. uses skeleton loaders, spinners, or progress bars. loading is communicated through pulsing dots and text labels.
7. uses emoji, icons beyond minimal SVG strokes, or decorative illustration. the interface is typographic and structural.
8. uses casual or enthusiastic language. the voice is observational and technical — a research log, not a marketing page.
9. uses full-bleed layouts. content is always contained within the bordered page wrapper column.
10. uses color backgrounds on the information grid sections beyond `rgba(0,0,0,0.02)`. the paper stays paper.
