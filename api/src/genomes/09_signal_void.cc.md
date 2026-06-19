---
id: "09"
name: signal_void.cc
keywords:
  - creative coding
  - generative
  - portfolio
  - minimal
  - monochrome
  - gallery
  - computational
  - atelier
  - processing
  - p5
  - canvas
  - displacement
---

### genome 09: `signal_void.cc`

> identity: contemporary creative-coding atelier. white gallery void meets generative computation. the portfolio site of someone who builds with shaders and speaks in signal-to-noise ratios.

**surface**

colors:
```
--void: #ffffff; --ink: #111111; --mid: #888888; --hairline: #e5e5e5; --ghost: #cccccc; --pure: #000000;
```
- `--void` is the dominant white field — not warm, not cool, pure #ffffff
- `--ink` is near-black, never pure #000000 for body text — the 0x11 offset creates optical softness
- `--pure` (#000000) reserved exclusively for accent moments: corner indices, active nav items, cursor dot
- `--mid` for secondary text, timestamps, sublines, colophons
- `--hairline` for structural dividers only — never backgrounds, never text
- `--ghost` for disabled states and nav overlay inactive items

typography:
- primary: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` — weight 300-500 only, never bold (600+)
- telemetry: `'SF Mono', 'Menlo', 'Monaco', 'Courier New', monospace` — used for metadata, timestamps, coordinates, render stats, sublines
- display headings: 2.5-3rem, weight 400, `letter-spacing: -0.03em`, `line-height: 1.1` — large but light
- body: 0.8-0.85rem, weight 400, `line-height: 1.5`
- meta/labels: 0.7-0.75rem, `text-transform: uppercase`, `letter-spacing: 0.05em`, monospace
- telemetry readouts: 0.7rem monospace, `--mid` color
- no text ever exceeds 3rem — scale hierarchy is flat, differentiation through weight, family, and case

borders:
- structural dividers: `1px solid var(--hairline)` — the only border treatment in the entire genome
- no visible borders on cards, buttons, inputs, or panels
- `border-radius: 0px` on everything except the cursor outline circle
- no box-shadow anywhere, ever

spacing:
- base unit: 24px (`--pad`)
- section gaps: 40px
- internal element gaps: 8-12px
- generous whitespace in canvas/hero areas, denser in info panels
- grid layouts use explicit column ratios (2fr 1.5fr 1fr), not equal columns

**color distribution**

- 75% void white (`--void`) — the gallery wall, the negative space, the silence
- 12% ink (`--ink`) — headings, body text, active links
- 8% mid gray (`--mid`) — secondary text, timestamps, sublines, colophons
- 3% hairline (`--hairline`) — structural dividers only
- 2% pure black (`--pure`) — corner indices, cursor dot, active nav items

this genome is aggressively monochrome. there is no accent color. hierarchy comes from value (light-to-dark), typographic family (sans vs mono), and spatial position — never from hue.

**component patterns**

buttons: no traditional buttons. interactive elements are plain text links or bracketed commands. no background, no border, no padding that suggests a "button" shape. if a call-to-action is needed: plain text with underline-reveal animation on hover. for nav-style actions: oversized light-weight text (3rem, weight 300, `color: var(--ghost)`) that transitions to `color: var(--ink)` on hover.

inputs: `border: none; border-bottom: 1px solid var(--hairline); background: transparent; font-family: var(--font-mono); font-size: 0.8rem; padding: 8px 0;` — underline-only inputs. focus state: border-bottom color transitions to `var(--ink)`. placeholder: `color: var(--ghost); font-style: normal;` — no italic placeholders.

cards/panels: no visible card treatment — no border, no shadow, no background change. panels are defined by spatial grouping and divider lines between sections. content blocks are separated by `1px solid var(--hairline)` horizontal rules, not enclosed in containers.

navigation: two modes. (1) corner indices — single characters fixed at viewport corners (`position: fixed`), large (2.5rem), weight 500, clickable to open overlay. (2) fullscreen overlay — `background: rgba(255,255,255,0.96); backdrop-filter: blur(10px);` centered column of nav items at 3rem weight 300 in `--ghost`, transitioning to `--ink` on hover. close by clicking outside or a "Close" item.

headers: no traditional header bar. identity expressed through corner indices and hero text positioned absolutely over the canvas zone. meta information (name, timestamp) displayed as uppercase monospace labels in the info panel.

footers: no distinct footer. the bottom info panel serves dual purpose — bio, links, colophon, and telemetry readout all live in a grid at the bottom 30% of the viewport. colophon text: `font-size: 0.75rem; color: var(--mid);`

lists: vertical stack, `gap: 8px`, no bullets, no numbers, no prefixes. list items are plain text links with underline-reveal on hover. active item: `color: var(--ink)` (others in `--mid`).

tables: monospace, `font-size: 0.7rem`, no alternating row colors, no visible row borders. header row: `text-transform: uppercase; letter-spacing: 0.05em; color: var(--mid);` data rows: `color: var(--ink)`. column alignment via fixed-width characters.

dividers: `1px solid var(--hairline)` — always full-width, always horizontal. used to separate major zones (canvas from panel). never decorative, never dashed, never colored.

modals/overlays: fullscreen takeover only — `position: fixed; inset: 0; background: rgba(255,255,255,0.96); backdrop-filter: blur(10px);` content centered both axes. `opacity` transition (0.4s ease) for entry/exit. no border, no shadow, no rounded corners on the overlay itself.

badges/tags: monospace uppercase micro-labels. `font-size: 0.65rem; letter-spacing: 0.08em; color: var(--mid); text-transform: uppercase;` — no background, no border, no pill shape. just text.

**interaction language**

hover:
- text links: underline reveals left-to-right via `::after` pseudo-element. `transform: scaleX(0)` → `scaleX(1)`, `transform-origin` flips from `right` to `left`. `transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);`
- nav items: `color` transition from `--ghost` to `--ink`, 0.3s ease
- body text blocks: font-family swap to monospace, `letter-spacing: -0.5px`, `opacity: 0.7` — the text "glitches" into a different typographic register
- corner indices: `color` transitions to `--mid`

active/pressed:
- no visual press state — interactions are hover-only or click-to-navigate
- overlay toggle: `opacity: 0` → `1` with `pointer-events: none` → `auto`

focus:
- inputs: `border-bottom-color: var(--ink)` transition, 0.3s ease
- no outline ring — focus indicated by content change only
- keyboard-accessible elements: `outline: 1px solid var(--mid); outline-offset: 4px;` (accessibility fallback, not primary interaction)

selected:
- nav items in active section: `color: var(--ink)` while siblings remain `--ghost`
- no background highlight, no underline, no indicator glyph

disabled:
- `opacity: 0.3; pointer-events: none;` — element fades toward the void
- no strikethrough, no graying of text (already gray)

drag:
- not typically used in this genome — if needed: `cursor: grab` → `cursor: grabbing`, element follows with 0.15 lerp delay (matching cursor outline behavior)

**motion & feedback**

transitions:
- default easing: `cubic-bezier(0.19, 1, 0.22, 1)` — fast start, long settle. used for underline reveals, color transitions
- cursor outline follows mouse with `0.15` linear interpolation per frame via `requestAnimationFrame` — creates a trailing/lagging effect
- overlay entry: `opacity 0.4s ease`
- color transitions: 0.3s ease
- no layout animations — elements don't slide, scale, or transform position

text scramble:
- on hover over display headings: characters cycle through `!<>-_\/[]{}—=+*^?#________` before resolving to final text
- scramble runs per-character with staggered start/end frames (random 0-40 range)
- scramble characters rendered at `opacity: 0.5` in monospace — creates visual noise during transition
- total scramble duration: ~600ms per heading
- this is the genome's signature interaction — the moment of entropy before resolution

loading:
- no spinner, no progress bar
- text-based: display `RENDERING...` or `LOADING` in monospace, `--mid` color, with characters scrambling until content resolves

success:
- no celebration, no checkmark
- content simply appears — the absence of the loading state IS the success state
- if explicit confirmation needed: brief text flash in `--ink` that fades to `--mid` over 1s

error:
- monospace text: `ERR: [description]` in `--ink` (not red, never red)
- no background color change, no icons
- error text appears in the same typographic register as telemetry readouts

**atmosphere**

generative canvas:
- the primary atmospheric element is a `<canvas>` occupying 60-70% of the viewport
- renders ASCII/character-based generative art using monospace characters at ~12px
- characters chosen from density gradient: ` .'` + "`" + `^,:;Il!i><~+_-?][}{1)(|\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$`
- noise function drives character selection — creates undulating topographic landscapes
- mouse proximity creates a distortion lens: within 150px radius (linear falloff from 1.0 at center to 0.0 at edge), characters shift to binary (0/1), positions displace radially away from cursor
- canvas uses `devicePixelRatio` scaling for crisp rendering on retina displays
- animation runs continuously via `requestAnimationFrame` at ~60fps

custom cursor:
- default system cursor hidden (`cursor: none` on all elements)
- replaced with two elements: (1) 6px white dot, instant position tracking (2) 40px white circle outline, position follows with 0.15 lerp delay
- both use `mix-blend-mode: difference` — inverts against white backgrounds (appears black) and against dark canvas content (appears white)
- `pointer-events: none; z-index: 9999;` on both cursor elements

corner indices:
- four single characters fixed at viewport corners (top-left, top-right, bottom-left, bottom-right)
- typically initials + version number (e.g., S, K, 0, 1)
- `font-size: 2.5rem; font-weight: 500;` — large enough to be architectural, not decorative
- serve as both branding and navigation triggers

telemetry readout:
- bottom-right corner of the info panel
- monospace, 0.7rem, `--mid` color, right-aligned
- displays: render time in ms, mouse X/Y coordinates
- updates in real-time — creates a sense of the interface being alive and measured

viewport-locked layout:
- `height: 100vh; overflow: hidden;` — the entire experience is a single viewport, no scrolling
- split: canvas zone (70vh) + info panel (30vh)
- this creates a "specimen" or "installation" quality — the page is a fixed frame, not a document

**editorial voice**

button labels (these are really link labels — no traditional buttons):
- `Email` · `GitHub` · `Instagram` · `Are.na`
- `Experiments` · `Writing` · `Capabilities` · `About` · `Close`
- always title case or single-word, never imperative ("Submit"), never playful ("Let's go!")

headings:
- conceptual, noun-phrase or gerund constructions: "System Architecture & Visual Displacement"
- title case, no periods, ampersands preferred over "and"
- never questions, never exclamations
- headings describe systems or processes, not features or benefits

sublines:
- monospace, sentence case, period-terminated
- reads like a research abstract: "Exploring the delta between signal and noise."
- conceptual framing — describes the intellectual territory, not the practical purpose

metadata format:
- timestamps: `HH:MM:SS UTC+N` in monospace
- render telemetry: `RENDER: 0.0ms` — label uppercase, value with unit
- coordinates: `X: 000 Y: 000`
- names in uppercase monospace as labels: `SANDRO KOZMANISHVILI`

placeholders:
- lowercase monospace: `enter query...`, `search coordinates...`, `input sequence...`
- technical/spatial language, not conversational

empty states:
- single line, monospace, centered in the void: `no signal detected.`
- or: `awaiting input.` · `field empty.` · `—`
- never apologetic ("Nothing here yet!"), never encouraging ("Add your first item!")

error messages:
- `ERR: connection timeout` · `ERR: invalid coordinates` · `ERR: render failed`
- monospace, lowercase after prefix, no punctuation beyond the colon
- clinical and informational — describes the failure, not the feeling

success messages:
- `transmitted.` · `sequence complete.` · `field updated.`
- past participle or completion phrase, lowercase, period-terminated
- minimal — success is the absence of error, not a celebration

**cursor & selection**

cursor:
- `cursor: none` on `*` — all default cursors hidden globally
- custom cursor system: 6px dot (#ffffff, `mix-blend-mode: difference`) tracks mouse instantly, 40px circle outline (1px solid #ffffff, `mix-blend-mode: difference`) follows with 0.15 lerp delay per frame
- on hover over interactive elements: cursor outline scales (e.g., `width: 60px; height: 60px; transition: width 0.2s, height 0.2s;`)
- no pointer, no crosshair, no grab cursors — the custom cursor is universal

selection:
- `::selection { background: var(--ink); color: var(--void); }` — inverted black-on-white
- clean rectangular highlight, no colored tints

**when to reach for this genome**

Use this genome when the request calls for a creative-coding portfolio, generative-art studio, computational design lab, shader atelier, Processing/p5.js sketch archive, interactive installation, visual research index, monochrome artist site, or any product whose primary material is signal, canvas, coordinates, and measured silence.

Reach for it when the user asks for minimal but not corporate, gallery-like but not museum-institutional, experimental but not chaotic, monochrome but not terminal, technical but not enterprise. It is strongest for single-viewport experiences where the main interface feels like a live generative specimen: a canvas field, terse metadata, corner navigation, custom cursor behavior, and a quiet bottom panel of links or telemetry.

Choose it for:
- artist or creative technologist portfolios where the work is code, shaders, image processing, machine vision, generative typography, audiovisual experiments, or computational installation.
- landing pages for tools that manipulate signal, noise, displacement, coordinates, render passes, simulations, or procedural systems.
- research notebooks, demo galleries, experiment indexes, canvas playgrounds, and interactive publications that should feel precise, authored, and quietly strange.
- minimal product surfaces where the brand is built from spatial restraint, hairline rules, monochrome typography, and one signature interactive canvas.

Do not choose it for conventional SaaS dashboards, dense admin tools, ecommerce pages, consumer onboarding, cheerful creator apps, healthcare interfaces, financial trading, mobile-first social feeds, or any brief that needs warmth, color, scrollable content depth, illustrative icons, or traditional button affordances. For a museum or institutional art context, prefer `gallery_foyer.institution`; for terminal/phosphor computing, prefer `underground_terminal.crt` or `phosphor_telemetry.amb`; for biotech ASCII research, prefer `biosequence_lab.gen`; for surveillance or operational monitoring, prefer `surveillance_grid.cctv`.

**anti-patterns — this genome NEVER:**

1. uses any chromatic color — no red, blue, green, orange, purple, or any hue. the palette is strictly achromatic: white, black, and grays
2. uses box-shadow on any element — depth is expressed through layering and transparency, never shadows
3. uses border-radius greater than 0px on UI elements — the cursor outline circle is the only rounded form in the entire genome
4. uses traditional button shapes — no pill buttons, no filled rectangles, no bordered containers that say "click me"
5. uses emoji, icons, or pictographic elements — all communication is typographic. if an icon is absolutely required, it's an ASCII character
6. uses background colors on cards, panels, or sections — content sits directly on the void. separation comes from space and hairlines, not color fills
7. uses font-weight above 500 — nothing is bold. hierarchy comes from size, family, case, and color value
8. uses scrolling layouts — the viewport is a fixed frame. content is composed to fit, not to flow
9. uses celebratory or encouraging language — no "Great job!", no "Welcome back!", no exclamation marks in UI copy
10. uses the system cursor — `cursor: none` is global and non-negotiable. the custom cursor IS the interface
