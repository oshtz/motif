---
id: "24"
name: viscous_flux.gl
keywords:
  - viscous
  - fluid
  - metaball
  - blob
  - glossy
  - liquid
  - neon
  - webgl
  - allocation
  - flux
  - data-viz
  - 3d
  - shader
  - creative coding
  - simulation
---

### genome 24: `viscous_flux.gl`

> identity: glossy fluid data visualization. viscous metaball physics rendered in multi-neon on absolute black — WebGL shader demos, creative-coding data art, and high-gloss liquid simulations displayed inside razor-thin glassmorphism instrument panels.

**surface**

colors:
```
--void: #050505;                        /* absolute black base */
--panel-bg: rgba(10, 10, 12, 0.8);     /* translucent dark glass */
--border: rgba(255, 255, 255, 0.08);   /* near-invisible panel edges */
--border-hover: rgba(255, 255, 255, 0.15); /* elevated border on hover */
--text-primary: #FFFFFF;               /* primary labels, values */
--text-muted: #6B6B6B;                /* secondary metadata, captions */
--text-ghost: rgba(255, 255, 255, 0.3); /* ambient system labels */
--c1: #FF3366;                          /* hot pink — primary data, danger */
--c2: #00E5FF;                          /* cyan — secondary data, info */
--c3: #FF8800;                          /* orange — tertiary data, warnings */
--c4: #B2FF05;                          /* lime — success, live indicators */
--accent: #FF5E00;                      /* global accent for interactive elements */
--glow-c1: rgba(255, 51, 102, 0.4);
--glow-c2: rgba(0, 229, 255, 0.4);
--glow-c3: rgba(255, 136, 0, 0.4);
--glow-c4: rgba(178, 255, 5, 0.4);
```

typography:
- body/labels: `'Inter', -apple-system, sans-serif` — weight 400 body, 500 labels, 600 emphasis. body text 13–14px, `line-height: 1.4`, `letter-spacing: 0.02em`.
- system/monospace: `'JetBrains Mono', monospace` — weight 400 for data values, 700 for key metrics, 800 for hero numbers. 9–13px.
- system labels: 9px, `text-transform: uppercase`, `letter-spacing: 0.15em`, `font-family: 'JetBrains Mono'`, `color: var(--text-muted)`.
- titles: 14px, `font-weight: 600`, `letter-spacing: 0.02em`, Inter. hierarchy through weight and color, not scale.
- hero metrics: 24–32px, `font-weight: 800`, JetBrains Mono — used sparingly for primary readout values only.
- maximum body text: 14px. maximum display: 32px. scale is deliberately compressed.
- `-webkit-font-smoothing: antialiased` everywhere.

borders:
- panels: `1px solid var(--border)`, `border-radius: 4px`. no exceptions above 4px on rectangular containers.
- corner brackets on panels: `::before` and `::after` pseudo-elements — 8×8px L-shaped strokes, `1px solid rgba(255,255,255,0.3)`, positioned at top-left and bottom-right corners.
- internal dividers: `1px solid var(--border)` — full-width horizontal rules between data rows.
- color swatches: `border-radius: 2px`, 12×12px, with matching `box-shadow: 0 0 10px ${color}80`.
- canvas/viewport areas: no border-radius. `border: none`. raw rectangular cutout.

spacing:
- panel header: `padding: 16px 20px`.
- data rows: `padding: 12px 20px`.
- `gap: 0` between data rows (dividers handle separation).
- canvas/viewport sections: no padding. edge-to-edge within panel.
- generous outer margin between floating panels — panels are islands in the void.

**color distribution**

- 65% absolute black void (`--void`) — the canvas is darkness itself
- 15% panel glass (`--panel-bg`) — translucent dark surfaces floating in void
- 10% white text (`--text-primary`) — values, labels, readouts
- 5% muted gray (`--text-muted`, `--border`) — structure, dividers, metadata
- 5% neon accents (`--c1` through `--c4`) — data visualization, indicators, glows. all four neon colors carry equal weight — none dominates. each represents a distinct data channel.

**component patterns**

buttons:
- primary: `background: var(--accent); color: #000000; border: none; border-radius: 4px; padding: 8px 16px; font-family: 'JetBrains Mono'; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700`.
- secondary: `background: transparent; color: var(--text-primary); border: 1px solid var(--border); border-radius: 4px; padding: 8px 16px`. same typography as primary.
- icon buttons: `width: 32px; height: 32px; border-radius: 4px; border: 1px solid var(--border); background: transparent`. centered icon in `--text-muted`.
- all buttons have `cursor: pointer`. no box-shadow at rest.

inputs:
- `background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 4px; padding: 10px 14px; color: var(--text-primary); font-family: 'JetBrains Mono'; font-size: 12px`.
- label above: 9px, uppercase, `letter-spacing: 0.15em`, `color: var(--text-muted)`, JetBrains Mono. positioned 6px above input.
- placeholder: `color: var(--text-ghost)`.
- focus: `border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent)`.

cards/panels:
- `background: var(--panel-bg); border: 1px solid var(--border); border-radius: 4px; backdrop-filter: blur(20px); box-shadow: 0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)`.
- corner bracket decorations via pseudo-elements.
- header section separated by `border-bottom: 1px solid var(--border)`.
- panels float — never touch viewport edges.

navigation:
- horizontal row of text items. active item: `color: var(--text-primary); border-bottom: 1px solid var(--accent)`. inactive: `color: var(--text-muted)`.
- items are JetBrains Mono, 11px, uppercase, `letter-spacing: 0.1em`.
- `gap: 24px` between nav items.

headers:
- two-column layout: title-group left, status indicator right.
- title-group stacks a system label (9px mono, uppercase, muted) above a title (14px Inter, weight 600).
- status indicators: 6px circle with matching `box-shadow: 0 0 8px` glow, pulsing opacity animation (2s infinite). adjacent tiny mono label.

footers:
- minimal. single row of system metadata in 9px JetBrains Mono, uppercase, `color: var(--text-ghost)`. `padding: 12px 20px`. `border-top: 1px solid var(--border)`.

lists:
- data rows in grid layout: `grid-template-columns: 24px 1fr auto auto`. each row has: color swatch, label (13px Inter, weight 500), value (12px JetBrains Mono, muted), percentage (13px JetBrains Mono, bold, white).
- rows separated by `border-bottom: 1px solid var(--border)`. last row has no border.
- `cursor: pointer` on all rows.

tables:
- monospace throughout. header row: `color: var(--text-muted); font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; border-bottom: 1px solid var(--border)`.
- body cells: `font-size: 12px; padding: 10px 16px`. alternating rows: odd `background: transparent`, even `background: rgba(255,255,255,0.02)`.
- numeric columns right-aligned. `font-variant-numeric: tabular-nums`.

dividers:
- `1px solid var(--border)` — full width. never dashed, never thick, never colored. the divider is invisible infrastructure.

modals/overlays:
- `background: var(--panel-bg); backdrop-filter: blur(30px); border: 1px solid var(--border); border-radius: 4px; box-shadow: 0 40px 80px rgba(0,0,0,0.8)`.
- overlay backdrop: `background: rgba(0, 0, 0, 0.7)`.
- corner brackets. header with system label + title.

badges/tags:
- `font-family: 'JetBrains Mono'; font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em; padding: 3px 8px; border-radius: 2px`.
- default: `background: rgba(255,255,255,0.05); color: var(--text-muted)`.
- colored variants use data colors with 15% opacity background and full color text: e.g., `background: rgba(255, 51, 102, 0.15); color: var(--c1)`.

**interaction language**

- hover (data rows): `background: rgba(255, 255, 255, 0.03)`. transition: `background 0.2s ease`.
- hover (buttons): primary `filter: brightness(1.15)`. secondary `border-color: var(--border-hover); background: rgba(255,255,255,0.03)`.
- active/pressed: `transform: scale(0.98)`. instant, no transition on transform.
- focus: `outline: none; box-shadow: 0 0 0 1px var(--accent)`. on data rows: `background: rgba(255, 255, 255, 0.05)` + value text elevates to `color: var(--text-primary)`.
- selected: `background: rgba(255, 255, 255, 0.05)`. row values shift from muted to primary white. associated data channel glows brighter in visualization.
- disabled: `opacity: 0.25; pointer-events: none`. no other visual changes.
- drag: `cursor: grabbing; opacity: 0.8; box-shadow: 0 20px 40px rgba(0,0,0,0.5)`.

**motion & feedback**

- transitions: `background 0.2s ease` on interactive elements. `border-color 0.15s ease`. `opacity 0.2s ease`. all transitions are brief and functional — never decorative.
- visualization physics: fluid blob positions animate via `requestAnimationFrame` with damped spring physics. radius changes ease with `lerp(current, target, 0.1)`. metaball rendering: marching squares on 2px grid, threshold 1.0, viscosity lerp factor 0.08. blobs repel each other and respond to cursor proximity (linear falloff: `strength = max(0, 1 - distance/150)`). this is the genome's signature motion — continuous, physics-based, viscous.
- loading: pulsing status dot (opacity 1→0.4→1 over 2s). data values show `--` in muted text while loading.
- success: status dot shifts to `var(--c4)` (lime) with expanded glow `box-shadow: 0 0 12px var(--c4)`. brief flash, then settles.
- error: status dot shifts to `var(--c1)` (hot pink). affected data row flashes `background: rgba(255, 51, 102, 0.1)` for 300ms.

**atmosphere**

- background: `background-color: var(--void); background-image: radial-gradient(circle at 50% 0%, #1a1a1a 0%, #050505 70%)` — subtle dome of light from above, fading to absolute black.
- grid overlay: `body::before` pseudo-element with `linear-gradient` grid pattern — `background-size: 40px 40px`, `rgba(255,255,255,0.02)` lines. barely visible coordinate grid anchoring the void.
- crosshair overlays on canvas/viewport sections: thin cross-lines (`rgba(255,255,255,0.1)`) with center target circle (`12px, 1px solid rgba(255,255,255,0.3), border-radius: 50%`).
- panel shadows: `0 30px 60px rgba(0,0,0,0.6)` — deep, diffused. panels feel like they hover above the void.
- inset highlight: `inset 0 1px 0 rgba(255,255,255,0.1)` on panel top edge — subtle frosted-glass light catch.
- color swatches glow: `box-shadow: 0 0 10px ${color}80` — each data color bleeds light into its surroundings.
- no scanlines, no noise texture, no film grain. the void is clean and infinite.

**editorial voice**

button labels: `ALLOCATE`, `RECALIBRATE`, `FLUSH BUFFER`, `SYNC NODES`, `EXPORT MASS`, `TERMINATE`, `INITIALIZE FLOW`
headings: sentence case, terse, noun-phrase style. "Viscous Mass Index", "Allocation Density", "Flow Distribution", "Node Throughput". never questions, never verbs alone.
system labels: all-caps dotted notation. `SYS.ALLOCATION.NODE`, `FLUID DYNAMICS_LIVE`, `MASS.INDEX.V2`, `BUFFER.STATUS`. underscore-separated compound terms.
metadata: monospace, uppercase. values with units: `42TB`, `0.85x`, `12ms`, `v2.4.1`. dates as `2026.03.22`. statuses as `ACTIVE`, `IDLE`, `SYNCING`.
placeholders: `enter allocation id...`, `search nodes...`, `filter by mass...` — lowercase, ellipsis-terminated, terse.
empty states: `NO ACTIVE ALLOCATIONS`, `AWAITING DATA STREAM`, `BUFFER EMPTY — INITIALIZE TO BEGIN`. all-caps mono. matter-of-fact.
error messages: `ALLOCATION FAILED: BUFFER OVERFLOW`, `NODE UNREACHABLE — RETRY IN 12s`. uppercase, colon-separated cause, dash-separated remedy.
success messages: `ALLOCATION COMPLETE`, `BUFFER SYNCED — 4 NODES ACTIVE`. uppercase, terse confirmation followed by dash and status detail.

**cursor & selection**

- body default: `cursor: default`.
- canvas/viewport areas: `cursor: crosshair` — you are targeting within the data field.
- interactive rows and buttons: `cursor: pointer`.
- drag handles: `cursor: grab`, active `cursor: grabbing`.
- `::selection { background: var(--accent); color: #000000; }` — orange highlight on black text, inverting the usual relationship.

**when to reach for this genome**

Use `viscous_flux.gl` when the prompt asks for a WebGL shader interface, glossy metaball visualization, liquid data dashboard, viscous simulation, allocation-flow monitor, neon-on-black creative-coding control surface, GPU/demo-scene data instrument, fluid node graph, high-gloss generative visualization, or any product where abstract data should appear as luminous liquid mass inside dark glass panels.

Reach for it when the user wants absolute black void, translucent glass panels, compressed Inter/JetBrains Mono typography, razor-thin 4px chrome, multi-neon channels, glowing color swatches, crosshair canvas overlays, status dots, tabular metrics, shader-style gradients inside the visualization, cursor-reactive blobs, damped spring physics, marching-squares/metaball behavior, and terse labels like `ALLOCATE`, `RECALIBRATE`, `FLUSH BUFFER`, `MASS.INDEX.V2`, or `ALLOCATION COMPLETE`.

Do not use it for warm cream wellness blobs, voice-first assistants, meditation, breathing, or gentle organic drift; use `ambient_drift.aura`. Do not use it for hostile anomaly consoles, red/acid wireframe telemetry, containment protocols, sector scans, or sharp 90-degree hazard systems; use `abyssal_telemetry.rift`. Do not use it for white-gallery creative-coding portfolios, monochrome signal/noise compositions, sparse canvas ateliers, or restrained artist sites; use `signal_void.cc`. Do not use it for live generative research exhibitions where off-white Swiss information grids frame black computation canvases; use `resonance_field.exp`. Do not use it for playful pop-maximalist art studios, hot-pink creative tools, warped grids, Bauhaus/Tokyo design energy, or expressive creator dashboards; use `figment_canvas.pop`. Do not use it for deep-ocean bioluminescence, jellyfish tendrils, plankton blooms, organic abyssal life, or cold natural beauty; use `abyssal_bloom.deep`. Do not use it for spacecraft environmental controls, physical rotary dials, LED hardware buttons, observatory HUDs, or life-support atmospherics; use `atmospheric_control.void`. Do not use it for editorial data posters, annual-report spreads, statistics summaries, or presentation-ready chart pages; use `graphic_report.vol`. Do not use it for live data-journalism broadsheets, highlighter-green newsprint, probability-model editorial, or crosshair newspaper layouts; use `signal_broadsheet.live`.

It is strongest when the product is an abstract computational instrument: visualize, allocate, sync, simulate, rebalance, inspect nodes, and watch fluid data respond to inputs. If the prompt centers on wellness, operational hazard monitoring, portfolio art direction, exhibition framing, physical hardware, organic nature, or conventional editorial analytics, choose another genome.

**anti-patterns — this genome NEVER:**

1. uses `border-radius` above 4px on rectangular containers. panels, cards, inputs, buttons — all 4px max. only circular indicators (status dots, center targets) use `border-radius: 50%`.
2. uses warm or earth-tone colors. the palette is neon-on-black only. no browns, beiges, creams, or muted pastels.
3. uses serif or display typefaces. only Inter (sans-serif) and JetBrains Mono (monospace). never decorative, never handwritten, never pixel fonts.
4. uses solid opaque panel backgrounds. all panel surfaces are translucent with `backdrop-filter: blur`. the void bleeds through everything.
5. uses drop shadows on text. text is always crisp, anti-aliased, flat. only color swatches and status indicators get glow/shadow treatment.
6. uses more than 14px for body text or more than 32px for any display text. the typographic scale is deliberately compressed — density over drama.
7. uses gradients on UI elements (buttons, cards, badges). gradients appear only in the background void and in the fluid visualization itself. UI chrome is flat.
8. uses rounded pill shapes, soft corners above 4px, or any element that feels "friendly" or "approachable". the aesthetic is clinical instrument, not consumer product.
9. uses emoji, decorative icons, or illustration. data is represented through color swatches, status dots, and fluid visualization — never iconography.
10. uses light backgrounds or light mode. this genome exists exclusively in darkness. the void is non-negotiable.
