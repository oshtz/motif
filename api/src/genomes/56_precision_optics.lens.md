---
id: "56"
name: precision_optics.lens
keywords:
  - camera
  - optics
  - lens
  - viewfinder
  - calibration
  - precision
  - darkroom
  - cinematic
  - shutter
  - aperture
  - firmware
  - capture
---

### genome 56: `precision_optics.lens`

> identity: precision optical engineering interface. camera system firmware meets Leica product configurator — near-black void with hot amber instrumentation, viewfinder framing, dual sans+mono typography, and system-diagnostic editorial voice.

**surface**

colors:
```
--bg: #030303;                          /* near-black void */
--bg-elevated: #0d0d0d;                /* raised panels, cards */
--bg-surface: #161616;                  /* subtle surface distinction */
--text-main: #F5F5F5;                   /* primary text — warm white */
--text-muted: #7A7A7A;                  /* secondary text, descriptions */
--text-dim: #3D3D3D;                    /* tertiary, faint labels */
--amber: #F2A900;                       /* primary accent — hot amber */
--amber-glow: rgba(242, 169, 0, 0.3);  /* glow halos, active borders */
--amber-dim: rgba(242, 169, 0, 0.12);  /* faint amber wash */
--surface-line: rgba(255, 255, 255, 0.1); /* panel borders, dividers */
--danger: #FF3B30;                      /* error state — sensor red */
--success: #34C759;                     /* confirmation — indicator green */
```

typography:
- display/headings: `'Manrope', -apple-system, sans-serif` — `font-weight: 400`, `font-size: 2–3rem`, `line-height: 1.1`, `letter-spacing: -0.02em`. hierarchy through size, not weight. headings are light-weight and large.
- body/descriptions: `'Manrope', sans-serif` — `font-weight: 300`, `font-size: 0.9–1rem`, `line-height: 1.5`, `color: var(--text-muted)`.
- labels/metadata/step-numbers: `'Space Mono', monospace` — `font-weight: 400`, `font-size: 0.6–0.8rem`, `letter-spacing: 0.02–0.05em`, `text-transform: uppercase`, `color: var(--amber)` for step numbers, `color: var(--text-muted)` for system meta.
- system identifiers: `'Space Mono', monospace` — `font-size: 0.65rem`, `letter-spacing: 0.05em`, `text-transform: uppercase`. formatted as `SYSTEM_NAME.FUNCTION` with underscores and dots.
- the dual-font system is core: Manrope carries editorial weight (headings, body), Space Mono carries instrumentation data (labels, specs, metadata, system codes). never swap roles.

borders:
- `border-radius: 0px` on everything. no exceptions. all corners are sharp.
- major panels: `1px solid var(--surface-line)` — barely visible structural lines
- dividers inside content: `1px solid var(--surface-line)` — used as top borders on tech grids
- accent borders: `2px solid var(--amber)` — sparingly, for active/selected states only
- progress indicators: `2px` height bars, `24px` wide

spacing:
- page padding: `24px` on mobile, `40px` on larger screens
- content blocks positioned at viewport bottom with generous top space — `padding-bottom: 120px`
- tech grid gaps: `16px`
- system meta line gaps: `4px` vertical, `8px` horizontal between elements
- content max-width: `400px` — never wider. text blocks are compact columns, not full-width.

**color distribution**

- 80% void (`--bg`, `--bg-elevated`) — the darkness is the canvas. most of the viewport is empty black.
- 10% muted text (`--text-muted`, `--text-dim`) — descriptions, labels, system metadata in gray
- 5% primary text (`--text-main`) — headings and values only. sparse, high contrast.
- 5% amber (`--amber`) — step numbers, active progress indicators, accent dots, primary CTA. surgical.

amber is signal, not decoration. it marks: current position (active dash), sequential step numbers, interactive CTA fills, accent dots in system meta, and `::selection` highlight. it never fills large areas.

**component patterns**

buttons:
- primary CTA: `background: var(--amber); color: #000; border: none; padding: 16px 32px; font-family: 'Manrope', sans-serif; font-weight: 700; font-size: 0.9rem; letter-spacing: 0.05em; text-transform: uppercase; border-radius: 0px;` — sharp rectangle, no rounding.
- CTA includes trailing arrow icon (inline SVG or `::after` pseudo-element)
- secondary: `background: transparent; color: var(--text-main); border: 1px solid var(--surface-line); padding: 12px 24px; font-family: 'Space Mono', monospace; font-size: 0.75rem; letter-spacing: 0.05em; text-transform: uppercase;`
- ghost/text: `background: none; border: none; color: var(--text-muted); font-family: 'Space Mono', monospace; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase;`

inputs:
- `background: var(--bg-elevated); border: 1px solid var(--surface-line); border-radius: 0px; padding: 14px 16px; color: var(--text-main); font-family: 'Manrope', sans-serif; font-size: 0.9rem;`
- label above: `font-family: 'Space Mono', monospace; font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 8px;`
- placeholder: `color: var(--text-dim); font-weight: 300;`
- focus: `border-color: var(--amber);`

cards/panels:
- `background: var(--bg-elevated); border: 1px solid var(--surface-line); border-radius: 0px; padding: 20px;`
- no shadows. depth from layered backgrounds and border contrast only.
- featured/active cards: `border-left: 2px solid var(--amber)`

tech grids (signature component):
- 2-column CSS grid: `display: grid; grid-template-columns: 1fr 1fr; gap: 16px;`
- separated from content above by `border-top: 1px solid var(--surface-line); padding-top: 16px; margin-top: 24px;`
- each item: label in Space Mono uppercase amber/muted (`font-size: 0.6rem`), value in Manrope (`font-size: 0.9rem; font-weight: 500; color: var(--text-main)`)
- these grids present specifications: aperture, focal length, ISO, format, bit depth, etc.

navigation:
- fixed header: `padding: 24px; display: flex; justify-content: space-between; align-items: flex-start;`
- left: system meta block — stacked monospace lines with accent dot prefix
- right: progress indicator — row of `24px × 2px` dashes, active one filled amber, others `rgba(255,255,255,0.15)`
- no traditional nav links. navigation is spatial (horizontal scroll) not textual.

headers:
- system meta format: `<dot> SYSTEM_CODE.FUNCTION` on first line, `DESCRIPTOR // MODE` on second
- dot indicator: `width: 4px; height: 4px; background: var(--amber); display: inline-block;`
- all meta in Space Mono, uppercase, muted gray

footers:
- minimal: action area fixed at bottom with `padding: 24px`
- left: swipe/navigation hint in Space Mono uppercase muted with trailing arrow
- right: primary CTA button (appears contextually)

viewfinder overlay (signature component):
- centered on viewport: `position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);`
- four corner brackets: `width: 20px; height: 20px; border: 1px solid rgba(255,255,255,0.1);` with two sides removed per corner
- center crosshair dot: `width: 2px; height: 2px; background: rgba(242, 169, 0, 0.5);`
- the viewfinder is purely atmospheric — `pointer-events: none; z-index: 2`

step containers:
- full-viewport-width sections: `min-width: 100vw; height: 100dvh;` in a horizontal scroll track
- content anchored to bottom-left: `display: flex; flex-direction: column; justify-content: flex-end;`
- step number prefix: `font-family: 'Space Mono'; color: var(--amber); font-size: 0.8rem;` formatted as `01. LABEL`

lists:
- no bullets. items separated by `1px solid var(--surface-line)` rules
- item text in Manrope, category/label in Space Mono amber uppercase
- active item: `border-left: 2px solid var(--amber)`

tables:
- header: `font-family: 'Space Mono'; font-size: 0.6rem; color: var(--amber); letter-spacing: 0.05em; text-transform: uppercase; border-bottom: 1px solid var(--amber);`
- body: `font-family: 'Manrope'; font-size: 0.85rem; color: var(--text-main); border-bottom: 1px solid var(--surface-line);`
- no alternating row colors. void is uniform.

dividers:
- `1px solid var(--surface-line)` — structural
- accent: `1px solid var(--amber-dim)` for section transitions

modals:
- `background: var(--bg-elevated); border: 1px solid var(--surface-line); border-radius: 0px; padding: 24px;`
- title in Space Mono amber uppercase
- no backdrop blur — sharp, opaque panels against a dimmed void (`background: rgba(0,0,0,0.85)` overlay)

badges/tags:
- `font-family: 'Space Mono'; font-size: 0.6rem; letter-spacing: 0.05em; text-transform: uppercase; padding: 4px 10px; border: 1px solid var(--amber); color: var(--amber); border-radius: 0px;`
- filled: `background: var(--amber); color: #000;`

**interaction language**

- hover (buttons): primary CTA — `filter: brightness(1.15);`. secondary — `border-color: var(--amber); color: var(--amber);`. ghost — `color: var(--text-main);`. `transition: all 0.3s ease;`
- hover (cards): `border-color: var(--amber-dim);` — faint amber border glow. `transition: border-color 0.3s ease;`
- active/pressed: `transform: scale(0.98);` — subtle compression. `transition: 0.1s ease;`
- focus: `outline: 1px solid var(--amber); outline-offset: 3px;` — thin amber outline, offset for breathing room
- selected: `color: var(--amber);` for text items. progress dashes: `background: var(--amber);`. list items: `border-left: 2px solid var(--amber);`
- disabled: `opacity: 0.2; pointer-events: none;` — nearly invisible against void
- drag: `opacity: 0.7; cursor: grabbing;`

**motion & feedback**

transitions:
- default easing: `cubic-bezier(0.19, 1, 0.22, 1)` — quick start, long gentle deceleration. used on content reveals and layout shifts.
- duration: `0.8s` for content block entrances, `0.3–0.4s` for UI state changes, `0.6s` for CTA appearance
- content blocks enter with: `transform: translateY(20px) → translateY(0); opacity: 0 → 1;` on viewport entry
- CTA slides up from below: `transform: translateY(100px) → translateY(0); opacity: 0 → 1;`
- horizontal scroll-snap navigation: `scroll-snap-type: x mandatory;` with `scroll-snap-align: start` per section
- 3D background elements use slow interpolation: `rotation += (target - current) * 0.05` per frame — smooth, inertial

loading:
- pulsing amber dot: single `4px` circle with `opacity` pulsing `0.3 → 1 → 0.3` on `1.5s ease-in-out infinite`
- or: progress dashes filling sequentially left-to-right

success:
- active progress dash flashes bright: `background: var(--amber); box-shadow: 0 0 8px var(--amber-glow);` for `0.5s`, then settles to solid amber
- confirmation text in Space Mono uppercase

error:
- `border-color: var(--danger);` replaces amber on affected element
- brief flash: `background: rgba(255, 59, 48, 0.1)` for `0.3s`
- error text in Space Mono, no exclamation marks

**atmosphere**

- near-black void: `background: #030303` — not pure black, slightly warm. the extra `03` value creates depth.
- viewfinder framing: four corner brackets at viewport center create a persistent "looking through a lens" feel. `border: 1px solid rgba(255,255,255,0.1)` — subtle, not distracting.
- center crosshair: tiny amber dot at exact viewport center — the focal point.
- 3D background element: WebGL or CSS 3D-transformed object (lens barrel, geometric form) rendered behind content at low opacity/ambient light. dramatic rim lighting in amber from one side, cool blue fill from opposite side.
- fog/depth: dark exponential fog or vignette that fades objects at distance — `background: radial-gradient(ellipse at center, #0d0d0d 0%, #030303 70%);`
- content layered over 3D: UI text and controls sit at high z-index over the atmospheric 3D layer. `pointer-events: none` on background elements.
- no scanlines, no CRT effects — this is modern optical precision, not retro.
- subtle float: background 3D elements drift `±0.1` units vertically on a slow sine wave (`0.5Hz`). not bouncy — barely perceptible.

**editorial voice**

button labels: `Initialize`, `Configure`, `Capture`, `Export`, `Transfer`, `Begin Sequence`, `Connect Device`, `Calibrate`. title case (not all-caps). action verbs from optics/systems vocabulary. no casual language.

headings: light-weight Manrope at large size. short phrases with line breaks for drama. `Precision,\nredefined.`, `Tactile\nmastery.`, `Enter the\ndarkroom.`, `Refine,\nperfect.`, `Share your\nvision.`. sentence case with period. poetic but technical.

step numbers: formatted as `01. LABEL` — zero-padded two digits, period, space, uppercase single-word label in Space Mono amber. labels are system processes: `CAPTURE`, `CONTROL`, `OUTPUT`, `PROCESS`, `EXPORT`.

metadata: system diagnostic format in Space Mono uppercase. identifiers use underscores and dots: `OPTICS_SYS.INIT`, `CALIBRATION // AUTO`, `SENSOR_ARRAY.READY`. double-slash `//` as separator. no dashes.

tech specs: label/value pairs in 2-column grids. label: `Aperture`, `Focal Length`, `ISO Range`, `Bit Depth`, `Color Space`. value: `f/1.4 - f/16`, `35mm Prime`, `50 - 25600`, `14-bit`, `Adobe RGB`. units and ranges always present.

placeholders: `Enter device ID...`, `Search parameters...`, `Configuration name`. sentence case, technical.

empty states: `No devices detected.`, `Calibration pending.`, `Awaiting input signal.`. terse, system-status language. period at end.

error messages: `Calibration failed. Retry sequence.`, `Invalid parameter range.`, `Connection lost. Re-establish link.`. clinical, no apology. period-terminated.

success messages: `Calibrated.`, `Transfer complete.`, `Configuration saved.`, `Sequence initialized.`. single sentence, past participle or past tense. period. no exclamation.

**cursor & selection**

- default: `cursor: default`
- interactive elements (buttons, links): `cursor: pointer`
- drag targets: `cursor: grab` → `cursor: grabbing`
- disabled: `cursor: not-allowed`
- horizontal scroll area: `cursor: grab` when idle, `cursor: grabbing` during drag
- `::selection { background: var(--amber); color: #000; }` — amber highlight, black text

**when to reach for this genome**

Use `precision_optics.lens` when the prompt asks for camera firmware, Leica-style product configuration, lens calibration, aperture/ISO controls, viewfinder framing, capture workflow, darkroom-adjacent digital tools, optical diagnostics, camera system setup, cinematic capture utilities, or any interface that should feel like precision photographic engineering in a near-black field.

Reach for it when the concrete cues are warm near-black void, hot amber instrumentation, sharp 0px geometry, Manrope display text, Space Mono system labels, aperture/focal-length/ISO specs, two-column tech grids, viewfinder brackets, center crosshair dot, progress dashes, horizontal scroll steps, bottom-anchored content, and firmware copy such as `Initialize`, `Calibrate`, `Capture`, `OPTICS_SYS.INIT`, `CALIBRATION // AUTO`, or `Sequence initialized.`

Do not use it for oscilloscope benches, multimeters, knurled dials, machined chassis, physical rocker buttons, or general calibrated measurement hardware; use `precision_instrument.met`. Do not use it for compact covert audio capture, radial signal widgets, red recording states, sample rates, or secure transmission modules; use `signal_capture.unit`. Do not use it for luxury product launch staging, preorder pages, giant Syncopate type, 3D hero products, or amber callout cards that sell a device; use `carbon_stage.lux`. Do not use it for amber CRT life-support screens, scanlines, VT323 readouts, dense event logs, or read-only telemetry monitors; use `phosphor_telemetry.amb`. Do not use it for astronomical plates, orbit diagrams, lunar catalogs, engraved geometry, or observatory publication language; use `celestial_plate.obs`. Do not use it for industrial cargo ledgers, oversized Helvetica inventory walls, sector manifests, or void operations terminals; use `void_manifest.ops`. Do not use it for analog darkroom contact sheets, red safelight, film strips, negatives, and chemical proofing workflows; use `darkroom_proof.contact`.

It is strongest when the product behaves like an optical system being configured: set parameters, calibrate the sensor, frame a shot, inspect specs, capture, export, and move through a precise sequence. If the prompt is primarily bench hardware, signal capture, launch commerce, CRT monitoring, astronomical engraving, cargo operations, or analog film proofing, route away from this genome.

**anti-patterns — this genome NEVER:**

1. uses border-radius on any element — all corners are `0px`, sharp, machined. no pills, no squircles, no rounded cards.
2. uses bold display fonts or all-caps headings — headings are `font-weight: 400` Manrope, sentence case. display weight comes from size, not boldness. uppercase is reserved for monospace labels only.
3. uses drop shadows or elevation — depth comes from background darkness and border contrast, never from `box-shadow` on cards or panels. the only shadows are ambient glow (`box-shadow` with `var(--amber-glow)`) on active indicators.
4. uses playful, casual, or emoji-laden copy — the voice is optical engineering firmware. no "oops!", no "yay!", no exclamation marks, no emoji.
5. uses dense multi-column content layouts — content blocks are narrow (`max-width: 400px`), anchored to one edge. the viewport is mostly void. never fill the screen with content grids.
6. uses light or white backgrounds anywhere — every surface ranges from `#030303` to `#161616`. no white panels, no light mode, no cream.
7. uses decorative gradients or color washes as backgrounds — backgrounds are flat, near-black solids. the only gradients are functional (fog/vignette depth cues).
8. uses traditional top-nav with text links — navigation is spatial (horizontal scroll, progress dashes) or through system metadata, never a row of text links.
9. introduces cool-toned accent colors that compete with amber — blue, teal, or purple accents would break the warm-instrument aesthetic. the only cool color permitted is subtle blue fill light on 3D atmospheric elements.
10. uses serif or decorative typefaces — the font system is strictly Manrope (sans) + Space Mono (mono). no serif, no display, no handwritten, no pixel fonts.
