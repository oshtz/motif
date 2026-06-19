---
id: "31"
name: carbon_stage.lux
keywords:
  - product
  - luxury
  - launch
  - premium
  - showcase
  - hardware
  - stage
  - noir
  - amber
  - nexus
  - preorder
  - unboxing
  - nothing phone
  - teenage engineering
---

### genome 31: `carbon_stage.lux`

> identity: luxury tech product launch stage. nothing phone meets apple keynote meets teenage engineering — dark void staging, warm amber callouts, 3D perspective product reveal, spec-sheet precision.

**surface**

colors:
```
--bg-base: #0a0a0a;        /* deep carbon void */
--bg-elevated: #141414;    /* raised surface panels */
--bg-surface: #1a1a1c;     /* subtle card/panel bg */
--amber: #c69c76;          /* primary accent — warm brushed gold */
--amber-glow: rgba(198, 156, 118, 0.4);  /* glow halos, box-shadows */
--amber-dim: rgba(198, 156, 118, 0.15);  /* faint amber wash for borders */
--text-main: #f0f0f0;      /* primary text — not pure white */
--text-dim: #555555;        /* tertiary, muted labels */
--text-secondary: #999999;  /* body copy, descriptions */
--surface-line: rgba(255, 255, 255, 0.08); /* panel borders, dividers */
--danger: #e04040;          /* error state */
--success: #5cb87a;         /* success state */
```

typography:
- display/headings: `'Syncopate', sans-serif` — `font-weight: 700`, `text-transform: uppercase`, `letter-spacing: 0.2–0.4em`. hero sizes go oversized: `12–18vw` for splash, `2–4rem` for section headings.
- body/descriptions: `'Manrope', sans-serif` — `font-weight: 200–400`, `font-size: 0.65–1rem`, `line-height: 1.5`, `letter-spacing: 0.01em`.
- labels/specs: `'Syncopate', sans-serif` — `font-weight: 400`, `font-size: 0.6–0.7rem`, `letter-spacing: 0.15–0.2em`, `text-transform: uppercase`, `color: var(--amber)`.
- hierarchy is driven by massive scale jumps between display and body, NOT by weight variation. a hero heading at 18vw next to 0.65rem body text is the signature contrast.

borders:
- major panels/surfaces: `1px solid var(--surface-line)`, `border-radius: 8px`
- accent callout borders: `2px solid var(--amber)` — used as left-border on annotation cards
- dashed accent: `2px dashed var(--amber)` for decorative rings, charge indicators, progress arcs
- CTA buttons: `border-radius: 40px` (pill shape)
- no radius ever exceeds `40px` except pill buttons. panels stay at `8px`. never rounded-square (16–24px range).

spacing:
- page edge: `5vw` horizontal padding (CSS variable `--grid-edge: 5vw`)
- section vertical rhythm: `15–20vh` between major sections
- card internal padding: `10–15px`
- generous negative space — the void IS the design. content islands float in darkness.
- gap between spec items: `60–80px` horizontal

**color distribution**

- 75% deep carbon void (`--bg-base`, `--bg-elevated`) — the stage. darkness dominates everything.
- 10% text (`--text-main`, `--text-secondary`) — sparse, high-contrast typography floating in void
- 10% amber (`--amber`, `--amber-glow`, `--amber-dim`) — all accent, callout, and interactive elements
- 5% surface lines (`--surface-line`) — faint structural borders barely visible against void

amber is used surgically — never as a background fill for large areas. it appears as: border-left accents, label text color, glow halos, CTA button fills, dashed decorative elements, and dot terminators on callout lines.

**component patterns**

buttons:
- primary CTA: `background: var(--amber); color: #000; padding: 12px 30px; border-radius: 40px; font-family: var(--font-tech); font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; box-shadow: 0 0 20px var(--amber-glow); border: none;`
- secondary: `background: transparent; color: var(--amber); border: 1px solid var(--amber); padding: 10px 24px; border-radius: 40px; font-family: var(--font-tech); font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase;`
- ghost: `background: transparent; color: var(--text-main); border: none; padding: 8px 16px; font-family: var(--font-tech); font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.6;`

inputs:
- `background: var(--bg-elevated); border: 1px solid var(--surface-line); border-radius: 8px; padding: 12px 16px; color: var(--text-main); font-family: 'Manrope', sans-serif; font-size: 0.85rem;`
- label above: `font-family: 'Syncopate'; font-size: 0.6rem; color: var(--amber); letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 6px;`
- placeholder: `color: var(--text-dim); font-weight: 200;`

cards/panels:
- `background: rgba(10, 10, 10, 0.8); border: 1px solid var(--surface-line); border-radius: 8px; backdrop-filter: blur(10px);`
- featured cards add `border-left: 2px solid var(--amber)` for emphasis
- no drop shadows on cards — the backdrop-filter blur provides depth against the void

callout annotations (signature component):
- a callout is: a thin amber horizontal line (`width: 80–120px; height: 1px; background: var(--amber)`) terminating in a 5px amber dot (`border-radius: 50%`), connecting to a content card with `border-left: 2px solid var(--amber); padding: 10px 15px; background: rgba(10, 10, 10, 0.8); backdrop-filter: blur(10px);`
- callout title: `font-family: 'Syncopate'; font-size: 0.7rem; color: var(--amber); letter-spacing: 0.2em; text-transform: uppercase;`
- callout description: `font-family: 'Manrope'; font-size: 0.65rem; color: var(--text-main); max-width: 150px;`
- callouts are positioned absolutely around a central product/hero element, pointing inward

navigation:
- fixed top bar: `position: fixed; padding: 40px var(--grid-edge); display: flex; justify-content: space-between; align-items: center; background: transparent;`
- logo: `font-family: 'Syncopate'; color: var(--amber); letter-spacing: 0.4em; font-weight: 700; text-transform: uppercase;`
- nav links (if present): `font-family: 'Syncopate'; font-size: 0.6rem; color: var(--text-dim); letter-spacing: 0.15em; text-transform: uppercase;`
- active link: `color: var(--amber);`
- right-side CTA button in nav using primary pill style

headers/hero:
- giant background text: `font-family: 'Syncopate'; font-size: 18vw; line-height: 0.8; letter-spacing: -0.05em; color: rgba(255, 255, 255, 0.03–0.05); text-transform: uppercase; mix-blend-mode: overlay;`
- the oversized ghost text sits behind content as atmospheric texture, not readable content
- section headers: `font-family: 'Syncopate'; font-size: 2–3rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-main);`

footers:
- minimal: faint top border `1px solid var(--surface-line)`, amber logo mark, small copyright text in `--text-dim`
- may include social links as ghost buttons

specs/timeline bar:
- fixed bottom bar: `position: fixed; bottom: 0; width: 100%; height: 80–100px; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); border-top: 1px solid var(--surface-line);`
- horizontal scrolling track of spec items: `overflow-x: auto; scroll-snap-type: x mandatory`. each item: `scroll-snap-align: start`
- spec label: `font-family: 'Syncopate'; font-size: 0.6rem; color: var(--amber); letter-spacing: 0.2em;`
- spec value: `font-size: 1.1rem; font-weight: 200; color: var(--text-main); font-family: 'Manrope';`
- items spaced `60–80px` apart in a flex row

lists:
- no bullets. items separated by `1px solid var(--surface-line)` horizontal rules
- item text in Manrope, label/category in Syncopate amber
- active item gets `border-left: 2px solid var(--amber)`

tables:
- header row: `font-family: 'Syncopate'; font-size: 0.6rem; color: var(--amber); letter-spacing: 0.15em; text-transform: uppercase; border-bottom: 1px solid var(--amber);`
- body rows: `font-family: 'Manrope'; font-size: 0.85rem; color: var(--text-main); border-bottom: 1px solid var(--surface-line);`
- no alternating row colors. the void is consistent.

dividers:
- `1px solid var(--surface-line)` — barely visible structural lines
- accent dividers: `1px solid var(--amber-dim)` for section breaks

modals:
- `background: rgba(10, 10, 10, 0.95); backdrop-filter: blur(20px); border: 1px solid var(--surface-line); border-radius: 8px;`
- modal title in Syncopate amber uppercase
- close button: ghost style, `color: var(--text-dim)`

badges/tags:
- `font-family: 'Syncopate'; font-size: 0.55rem; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 12px; border: 1px solid var(--amber); color: var(--amber); border-radius: 40px;`
- filled variant: `background: var(--amber); color: #000;`

**interaction language**

- hover (buttons): `transform: scale(1.05); background: #ffffff; color: #000;` — primary CTA flips from amber to white. secondary gets `background: var(--amber-dim);`. ghost gets `opacity: 1;`. `transition: 0.3s ease;`
- hover (cards/links): `border-color: var(--amber);` — the faint border brightens to amber. `transition: 0.3s ease;`
- hover (nav links): `color: var(--amber);`
- active/pressed: `transform: scale(0.97);` — subtle compression. `transition: 0.1s ease;`
- focus: `outline: 2px solid var(--amber); outline-offset: 4px;` — generous offset so it reads as floating halo, not tight border
- selected: `color: var(--amber); border-left: 2px solid var(--amber);` for list/nav items. badges fill solid.
- disabled: `opacity: 0.25; pointer-events: none;` — nearly invisible against the void. no strikethrough.
- drag: `opacity: 0.6; cursor: grabbing; box-shadow: 0 20px 60px rgba(0,0,0,0.8);` — element lifts into shadow

**motion & feedback**

transitions:
- default: `transition: 0.3s ease` on color, opacity, transform, border-color, box-shadow
- scroll-driven parallax: hero text fades and translates on scroll. product element scales and rotates with scroll offset. spec bar slides horizontally with scroll.
- floating animation: `animation: float 6–8s infinite ease-in-out` — gentle Y-axis bob of 20–30px combined with subtle rotation shifts. used on hero product elements.
- spinning decorative elements: `animation: spin 8–12s linear infinite` for dashed rings, progress indicators
- scroll-reveal: `opacity: 0 → 1; transform: translateY(20px) → translateY(0); transition: 0.8s ease-out;` triggered on viewport entry

loading:
- pulsing amber ring: dashed circle border spinning with `opacity` pulsing `0.4 → 1 → 0.4` on a `2s ease-in-out infinite` loop
- or: amber dot sequence `· · ·` fading in left to right

success:
- brief amber glow pulse: `box-shadow: 0 0 30px var(--amber-glow)` expanding then fading over `0.6s`
- text confirmation in Syncopate uppercase

error:
- `border-color: var(--danger)` replaces amber accents momentarily. `color: var(--danger)` on error text.
- subtle shake: `translateX(-4px) → translateX(4px) → translateX(0)` over `0.3s`

**atmosphere**

- scanline overlay: `position: fixed` full-viewport pseudo-element with `background: linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%); background-size: 100% 4px;` at `opacity: 0.15`. adds subtle CRT texture without overwhelming.
- RGB sub-pixel overlay: second layer `background: linear-gradient(90deg, rgba(255,0,0,0.03), rgba(0,255,0,0.01), rgba(0,0,255,0.03)); background-size: 3px 100%;` at same opacity. creates micro-texture on close inspection.
- radial vignette: `background: radial-gradient(circle at 50% 50%, #1a1a1c 0%, #0a0a0a 100%)` — the center is very slightly lighter than edges, creating a subtle spotlight effect.
- 3D perspective staging: product/hero elements rendered in `perspective: 1500–2000px` with `rotateX(45–55deg) rotateZ(-20 to -30deg)` isometric-ish viewing angle. the stage IS the product showcase.
- amber glow halos: interactive elements and accent borders emit `box-shadow: 0 0 15–25px var(--amber-glow)` — the amber light bleeds into the void.
- gradient fade bars: top and bottom of viewport have `linear-gradient(to bottom/top, rgba(0,0,0,0.8), transparent)` creating theatrical curtain edges.

**editorial voice**

button labels: `PRE-ORDER`, `CONFIGURE`, `EXPLORE SPECS`, `RESERVE NOW`, `VIEW COLLECTION`, `ADD TO CART`, `DISCOVER`. uppercase, aspirational, action-oriented. never casual. never clever.

headings: uppercase Syncopate. terse product names or single-word section titles. `CHASSIS`, `INDUCTION`, `ROUTING`, `SPECIFICATIONS`, `ENGINEERING`, `MATERIALS`. no articles, no verbs. noun-forward.

metadata: spec-sheet format. label in amber uppercase, value in light Manrope. `WIDTH — 1500MM`, `POWER — 100W PD`, `SURFACE — ETCHED GLASS`, `LOAD — 120KG MAX`. units always included. always uppercase. dash or colon separators.

placeholders: `Enter configuration...`, `Search specifications...`, `Your email address`. sentence case, minimal, professional.

empty states: `No items configured.`, `Specifications pending.`, `Collection unavailable.`. terse, factual, no personality.

error messages: `Configuration failed. Retry.`, `Invalid specification.`, `Connection interrupted.`. clinical, no apology, no emoji.

success messages: `Reserved.`, `Configuration saved.`, `Added to collection.`. single sentence, past tense, period. no exclamation marks ever.

**cursor & selection**

- default: `cursor: default`
- interactive elements: `cursor: pointer`
- drag targets: `cursor: grab` → `cursor: grabbing`
- disabled: `cursor: not-allowed`
- `::selection { background: var(--amber); color: #000; }` — amber highlight with black text

**when to reach for this genome**

Use `carbon_stage.lux` when the prompt asks for a luxury tech product launch, premium hardware showcase, preorder page, unboxing experience, hero product reveal, cinematic product configurator, device landing page, spec-led commerce page, or campaign surface that should feel like Nothing Phone, Apple keynote, Teenage Engineering, and a dark studio stage converging around one desirable object.

Reach for it when the visual cues are a deep carbon void, warm brushed amber, sparse white type, Syncopate uppercase display text, Manrope microcopy, pill CTAs, 8px translucent panels, amber callout lines ending in dots, a fixed or bottom spec bar, 3D perspective staging, floating product motion, dashed rings, parallax reveals, and annotation cards pointing inward to a central product.

Use it when the product needs to feel cinematic, premium, and purchasable rather than purely operational: reserve, configure, compare specs, inspect materials, stage a launch sequence, present hardware details, or create desire through negative space and precise amber callouts.

Do not use it for camera firmware, Leica-like lens configurators, viewfinder brackets, horizontal scroll steps, aperture/ISO calibration, or optical diagnostics; use `precision_optics.lens`. Do not use it for physical measurement instruments, oscilloscopes, multimeters, knurled dials, recessed display wells, or bench calibration hardware; use `precision_instrument.met`. Do not use it for spacecraft environmental controls, Braun-like rotary dials, observatory HUDs, atmosphere monitors, or LED hardware panels; use `atmospheric_control.void`. Do not use it for hostile anomaly consoles, isometric wireframes, breach alerts, containment dashboards, or red/acid operational telemetry; use `abyssal_telemetry.rift`. Do not use it for industrial cargo manifests, dark inventory walls, sector ledgers, warehouse systems, or oversized operational lists; use `void_manifest.ops`. Do not use it for walnut hi-fi rooms, brushed aluminum receivers, VU meters, turntables, album rituals, or tube warmth; use `listening_room.hifi`. Do not use it for generic polished SaaS, soft light creative-suite dashboards, chartreuse/violet accents, or 24px rounded app cards; use `modern_studio.pro`.

It is strongest when one premium object owns the viewport and everything else behaves like stagecraft: callouts, spec labels, glows, scroll choreography, and a small number of purchase or configuration actions. If the prompt is primarily a tool, control room, dashboard, instrument, terminal, audio room, or everyday SaaS product, choose another genome.

**anti-patterns — this genome NEVER:**

1. uses bright, saturated colors beyond the amber palette — no neon blue, no electric green, no hot pink. the only warm color is amber. errors use a muted red.
2. uses rounded-square border-radius (12–24px range) — it's either `8px` for panels or `40px` for pills. nothing in between.
3. uses monospace or pixel fonts — this is geometric sans-serif territory (Syncopate + Manrope). the aesthetic is polished, not raw.
4. uses playful, casual, or clever copy — no puns, no emoji, no exclamation marks, no "oops!" errors. the voice is premium hardware catalog.
5. fills large areas with amber/accent color — amber is surgical: borders, labels, dots, glows. never a full amber background panel or amber hero section.
6. uses visible drop shadows on cards — depth comes from `backdrop-filter: blur()` and the void itself, not `box-shadow` elevation.
7. uses dense information layouts or data grids — this genome is spacious and cinematic. content floats in generous negative space. a single product owns the entire viewport.
8. uses horizontal nav menus with many items — navigation is minimal: logo left, single CTA right. if more links exist, they are in `--text-dim` and widely spaced.
9. uses white or light backgrounds anywhere — the void is sacred. every surface is dark (`#0a0a0a` to `#1a1a1c`). translucent panels use `rgba(10,10,10,0.8)` at most.
10. uses flat, static layouts without depth cues — every page should feel staged in 3D space with perspective transforms, parallax scroll, floating animations, or layered z-index composition.
