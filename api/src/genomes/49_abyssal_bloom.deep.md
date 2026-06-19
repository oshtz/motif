---
id: "49"
name: abyssal_bloom.deep
keywords:
  - bioluminescent
  - ocean
  - deep-sea
  - jellyfish
  - plankton
  - organic
  - flowing
  - glow
  - underwater
  - translucent
---

### genome 49: `abyssal_bloom.deep`

> identity: deep ocean bioluminescence. near-black ocean depths where the only light comes from living organisms — jellyfish tendrils, anglerfish lures, plankton blooms. the UI exists at 3,000 meters depth. organic, flowing, alive, cold but beautiful. luminous life drifting through an infinite dark sea.

**surface**

colors:
```
--ocean-void: #050A14;                        /* near-black ocean depth */
--deep-water: #0A1929;                        /* deep water panel base */
--panel-bg: rgba(10, 25, 41, 0.7);           /* translucent deep water glass */
--panel-bg-hover: rgba(10, 25, 41, 0.85);    /* elevated panel on hover */
--bio-cyan: #00E5FF;                          /* bioluminescent cyan — primary glow */
--jelly-purple: #9B30FF;                      /* jellyfish purple — secondary glow */
--plankton-green: #00FF88;                    /* plankton green — success, life indicators */
--angler-amber: #FFB347;                      /* anglerfish amber — warnings, warmth */
--text-primary: rgba(255, 255, 255, 0.9);    /* primary text — softly luminous */
--text-secondary: rgba(255, 255, 255, 0.5);  /* secondary text — dimmed */
--text-ghost: rgba(255, 255, 255, 0.25);     /* ghost text — barely visible */
--glow-cyan: rgba(0, 229, 255, 0.3);
--glow-purple: rgba(155, 48, 255, 0.3);
--glow-green: rgba(0, 255, 136, 0.3);
--glow-amber: rgba(255, 179, 71, 0.3);
--border-glow: rgba(0, 229, 255, 0.3);       /* default border luminescence */
--border-glow-dim: rgba(0, 229, 255, 0.12);  /* subtle structural borders */
```

typography:
- body: `'Inter', -apple-system, sans-serif` — weight 200 body, 300 labels, 500 emphasis. body text 14–16px, `line-height: 1.7`, `letter-spacing: 0.03em`. text should feel thin and luminous — light strokes glowing against darkness.
- display: `'Inter', sans-serif` — weight 200 at large scale (28–40px), `letter-spacing: 0.05em`. display text is delicate, expansive, floating.
- labels/metadata: 11–12px, weight 300, `letter-spacing: 0.04em`, `color: var(--text-secondary)`. sentence case, not uppercase — this genome whispers, it does not shout.
- titles: 18–22px, weight 300, `letter-spacing: 0.03em`, Inter. hierarchy through luminosity and scale, not weight.
- hero metrics: 32–40px, weight 200, Inter — used for depth readings, temperature, pressure. massive but featherweight.
- maximum body text: 16px. maximum display: 40px.
- `-webkit-font-smoothing: antialiased` everywhere. `text-shadow: 0 0 12px var(--glow-cyan)` on emphasis text for bioluminescent effect.

borders:
- panels: `1px solid var(--border-glow)`, `border-radius: 20px`. all rectangular containers use 20–24px radius. everything is organic, rounded, soft.
- circular elements (indicators, avatars, orbs): `border-radius: 50%`.
- panel glow: `box-shadow: 0 0 8px rgba(0, 229, 255, 0.15), 0 0 30px rgba(0, 229, 255, 0.05)` — double-layer glow simulating bioluminescent aura.
- internal dividers: `1px solid var(--border-glow-dim)` — faint luminous lines, never harsh.
- no sharp corners anywhere. the ocean has no edges.

spacing:
- panel padding: `padding: 28px 32px` — generous interior breathing room.
- section gap: `gap: 20px` between content sections within panels.
- inter-panel spacing: `gap: 32–48px` — panels drift apart in the void, never crowded.
- content clusters float in pools of negative space. the void between is as important as the content within.

**color distribution**

- 60% ocean void (`--ocean-void`) — near-black depth, the water column itself. radial gradient pools of `--deep-water` create subtle depth variation
- 15% deep water glass (`--panel-bg`) — translucent panels with glassmorphism, organisms viewed through murky water
- 10% bioluminescent cyan (`--bio-cyan`) — primary glow, borders, interactive highlights, the dominant bioluminescent frequency
- 5% white text (`--text-primary`, `--text-secondary`) — soft, luminous readouts. never harsh white — always slightly transparent
- 4% jellyfish purple (`--jelly-purple`) — secondary accents, decorative glows, alternate data channels
- 3% plankton green (`--plankton-green`) — success states, life indicators, bloom activity
- 2% anglerfish amber (`--angler-amber`) — warnings, warm counterpoint to the cold palette. the lure in the darkness
- 1% mixed glows — ambient particles, background luminescence

**component patterns**

buttons:
- primary: `background: rgba(0, 229, 255, 0.15); color: var(--bio-cyan); border: 1px solid var(--border-glow); border-radius: 24px; padding: 10px 24px; font-family: 'Inter'; font-size: 13px; font-weight: 300; letter-spacing: 0.04em; box-shadow: 0 0 12px rgba(0, 229, 255, 0.1); backdrop-filter: blur(8px)`.
- secondary: `background: transparent; color: var(--text-secondary); border: 1px solid var(--border-glow-dim); border-radius: 24px; padding: 10px 24px`. same typography.
- icon buttons: `width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--border-glow-dim); background: var(--panel-bg)`. centered icon in `var(--text-secondary)`.
- all buttons: `cursor: pointer; transition: all 0.5s ease`. no hard edges, no aggressive states.

inputs:
- `background: rgba(10, 25, 41, 0.5); border: 1px solid var(--border-glow-dim); border-radius: 16px; padding: 12px 18px; color: var(--text-primary); font-family: 'Inter'; font-size: 14px; font-weight: 200; letter-spacing: 0.02em; backdrop-filter: blur(8px)`.
- label above: 11px, weight 300, `letter-spacing: 0.04em`, `color: var(--text-secondary)`. positioned 8px above input.
- placeholder: `color: var(--text-ghost)`.
- focus: `border-color: var(--bio-cyan); box-shadow: 0 0 16px rgba(0, 229, 255, 0.2)`. the input begins to glow.

cards/panels:
- `background: var(--panel-bg); border: 1px solid var(--border-glow); border-radius: 24px; backdrop-filter: blur(16px); box-shadow: 0 0 8px rgba(0, 229, 255, 0.15), 0 8px 32px rgba(0, 0, 0, 0.4)`.
- panels are organisms — they glow softly, float in the void, have organic rounded shapes.
- header sections use subtler separation: `border-bottom: 1px solid var(--border-glow-dim); padding-bottom: 20px; margin-bottom: 20px`.
- panels never touch viewport edges. they drift.

navigation:
- horizontal row of text items with generous spacing. active item: `color: var(--bio-cyan); text-shadow: 0 0 8px var(--glow-cyan)`. inactive: `color: var(--text-secondary)`.
- items are Inter, 13px, weight 300, `letter-spacing: 0.04em`. sentence case.
- `gap: 32px` between nav items.
- active indicator: small glowing dot (6px, `border-radius: 50%`, `background: var(--bio-cyan)`, `box-shadow: 0 0 8px var(--glow-cyan)`) centered below active item.

headers:
- title in weight 200–300, 20–22px, `color: var(--text-primary)`. `letter-spacing: 0.03em`.
- subtitle beneath: 13px, weight 200, `color: var(--text-secondary)`.
- optional bioluminescent accent: `text-shadow: 0 0 20px var(--glow-cyan)` on primary title for emphasis.
- status indicators: 8px glowing circle with `box-shadow: 0 0 10px` in status color. pulsing animation (3s infinite ease-in-out).

footers:
- minimal. single row of metadata in 11px Inter, weight 200, `color: var(--text-ghost)`. `padding: 20px 32px`. `border-top: 1px solid var(--border-glow-dim)`.
- content reads like a depth sounder: `Depth: 3,042m · 2.1°C · Current: 0.2kn NW`.

lists:
- clean, spacious rows. no bullets — items are luminous text floating in sequence.
- each row: `padding: 14px 0; border-bottom: 1px solid var(--border-glow-dim)`. last row has no border.
- item label: 14px, weight 300, `color: var(--text-primary)`. value: 14px, weight 200, `color: var(--text-secondary)`.
- active/hovered row glows: `background: rgba(0, 229, 255, 0.04); border-radius: 12px`.
- `cursor: pointer` on interactive rows.

tables:
- Inter throughout. header row: `color: var(--text-secondary); font-size: 11px; font-weight: 300; letter-spacing: 0.04em; border-bottom: 1px solid var(--border-glow-dim)`.
- body cells: `font-size: 14px; font-weight: 200; padding: 14px 20px; color: var(--text-primary)`.
- no alternating rows. hovered row: `background: rgba(0, 229, 255, 0.04)`.
- numeric columns: `font-variant-numeric: tabular-nums`.
- `border-radius: 16px` on the outer table container.

dividers:
- `1px solid var(--border-glow-dim)` — faint luminous lines. never dashed, never thick. dividers are bioluminescent threads.

modals/overlays:
- `background: var(--panel-bg); backdrop-filter: blur(24px); border: 1px solid var(--border-glow); border-radius: 28px; box-shadow: 0 0 20px rgba(0, 229, 255, 0.15), 0 24px 64px rgba(0, 0, 0, 0.6)`.
- overlay backdrop: `background: rgba(5, 10, 20, 0.8)` — like sinking deeper into the water column.
- content centered with generous padding. everything is rounded and soft.

badges/tags:
- `font-family: 'Inter'; font-size: 11px; font-weight: 300; letter-spacing: 0.03em; padding: 4px 12px; border-radius: 20px`.
- default: `background: rgba(0, 229, 255, 0.1); color: var(--bio-cyan); border: 1px solid rgba(0, 229, 255, 0.2)`.
- colored variants: cyan for info, green for active/life, purple for special, amber for warning. all use 10% opacity background with matching border and text color.

**interaction language**

- hover (panels/rows): `background: rgba(0, 229, 255, 0.04); box-shadow: 0 0 16px rgba(0, 229, 255, 0.12)`. transition: `all 0.5s ease`. elements glow brighter when approached, like disturbed bioluminescence.
- hover (buttons): `background: rgba(0, 229, 255, 0.25); box-shadow: 0 0 20px rgba(0, 229, 255, 0.2)`. border brightens. the organism responds to contact.
- active/pressed: `transform: scale(0.97); transition: transform 0.15s ease`. gentle compression, like pressing into soft tissue.
- focus: `outline: none; box-shadow: 0 0 0 2px var(--bio-cyan), 0 0 16px rgba(0, 229, 255, 0.2)`. luminous ring.
- selected: `background: rgba(0, 229, 255, 0.08); border-color: var(--bio-cyan)`. sustained glow indicating active selection.
- disabled: `opacity: 0.2; pointer-events: none; filter: saturate(0.3)`. the light fades from the organism.
- drag: `cursor: grabbing; opacity: 0.85; box-shadow: 0 0 30px rgba(0, 229, 255, 0.2); transform: scale(1.02)`. element lifts and glows as if caught in a current.

**motion & feedback**

- transitions: `all 0.5s ease` on interactive elements. `background 0.6s ease`. `box-shadow 0.8s ease`. `opacity 0.5s ease`. all transitions are slow, flowing, organic — nothing snaps or flickers.
- ambient pulse: `@keyframes biolumPulse { 0%, 100% { opacity: 0.6; box-shadow: 0 0 8px var(--glow-cyan); } 50% { opacity: 1; box-shadow: 0 0 20px var(--glow-cyan); } }` — 3–5s duration, `ease-in-out`, infinite. applied to status indicators, decorative orbs, active borders.
- ambient drift: `@keyframes drift { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-4px); } }` — 6–8s duration, `ease-in-out`, infinite. panels and floating elements drift gently as if in a slow current.
- loading: pulsing glow ring (border animates through cyan → purple → green → cyan over 4s). text: `Scanning...` or `Listening for signal...` in light weight italic.
- success: plankton green glow bloom — `box-shadow: 0 0 24px var(--glow-green)` expanding over 0.8s, then fading over 1.2s. text: `Signal acquired` or `Bloom detected`.
- error: amber glow pulse, two slow throbs (0.6s each). text: `Signal fading` or `Connection lost at depth`. never harsh, never alarming — things simply fade in the deep.
- particle animation: tiny dots (2–3px, `border-radius: 50%`) in cyan, green, and purple at 5–15% opacity, drifting slowly upward and laterally via CSS animation. 20–40 particles across the viewport. `animation: particleDrift 15–30s linear infinite` with randomized start positions. these are the plankton.

**atmosphere**

- background: `background: var(--ocean-void); background-image: radial-gradient(ellipse at 30% 70%, rgba(10, 25, 41, 0.8) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(155, 48, 255, 0.05) 0%, transparent 40%), radial-gradient(ellipse at 50% 90%, rgba(0, 229, 255, 0.03) 0%, transparent 35%)` — pools of slightly lighter water, faint color bleeding from unseen organisms in the distance.
- floating particles: pseudo-elements or decorative divs — tiny bioluminescent dots (cyan, green, purple) at low opacity (0.05–0.15), scattered across the viewport, drifting slowly. these create the sense of plankton and marine snow.
- panel aura: each panel radiates a soft glow into the surrounding void — `box-shadow: 0 0 40px rgba(0, 229, 255, 0.06)`. panels are organisms emitting light.
- no grid overlays, no scanlines, no noise textures. the ocean is smooth, dark, infinite.
- depth gradient: the viewport darkens toward the top (surface is unreachably far) and pools of faint color gather at the bottom and center. this is the benthic zone.
- glassmorphism everywhere: `backdrop-filter: blur(16px)` on all panels and overlays. the water diffuses everything behind.

**editorial voice**

button labels: `Descend`, `Surface`, `Begin scan`, `Release probe`, `Illuminate`, `Mark specimen`, `Record bloom`. sentence case, calm, scientific but gentle.

headings: sentence case, observational, poetic-scientific. "Bioluminescence detected", "Species catalog", "Current readings", "Bloom activity", "Depth profile", "Specimen log". never aggressive, never imperative.

metadata: calm observational format. `Depth: 3,042m`, `Temperature: 2.1°C`, `Salinity: 34.8‰`, `Current: 0.2 knots NW`, `Visibility: 12m`, `Pressure: 304.2 atm`. dates as `22 Mar 2026`. times as `14:00 UTC`.

placeholders: `Search species...`, `Enter coordinates...`, `Describe observation...` — lowercase, ellipsis-terminated, gentle.

empty states: `No specimens recorded in this zone`, `Bloom inactive — monitoring continues`, `No signals detected at this depth`. sentence case, observational, patient. the deep ocean waits.

error messages: `Signal fading — last known depth: 3,042m`, `Probe connection lost`, `Specimen data incomplete — partial record saved`. calm, factual, never alarming. in the deep, things are simply lost sometimes.

success messages: `Bloom active — 12 organisms detected`, `Specimen cataloged`, `Signal stable — recording in progress`. quiet confirmation. wonder-tinged.

**cursor & selection**

- body default: `cursor: default`.
- interactive elements: `cursor: pointer`. buttons, links, clickable rows.
- drag contexts: `cursor: grab`, active `cursor: grabbing`.
- text inputs: `cursor: text`.
- `::selection { background: rgba(0, 229, 255, 0.3); color: var(--text-primary); }` — bioluminescent cyan highlight, as if the selected text is glowing.

**when to reach for this genome**

Use `abyssal_bloom.deep` when the prompt asks for deep-ocean bioluminescence, jellyfish, plankton blooms, living underwater light, marine biology, species catalogs, calm abyssal exploration, specimen logs, research dive atmospheres, or any product that should feel like luminous organisms drifting in near-black water rather than a tactical control room.

Reach for it when the concrete cues are near-black ocean depth, translucent rounded glass panels, cyan/purple/green organic glows, featherweight Inter text, sentence-case scientific copy, 20px+ soft radii, drifting particles, pulsing status dots, depth/temperature/salinity metadata, and gentle actions like `Descend`, `Begin scan`, `Mark specimen`, `Record bloom`, or `Signal acquired`.

Do not use it for hostile anomaly consoles, wireframe sector scans, red/acid telemetry, containment protocols, sharp 90-degree panels, or uppercase monospace mission language; use `abyssal_telemetry.rift`. Do not use it for submarine sonar rooms, hydrophone arrays, tactical contact plots, phosphor PPI scopes, or acoustic waterfall displays; use `sonar_array.sub`. Do not use it for recreational scuba logs, dive-computer screens, no-decompression tables, safety yellow/orange indicators, or reef-sport energy; use `dive_log.aqua`. Do not use it for spacecraft environmental control, physical dials, red LED hardware, Braun-like panels, or observatory atmospherics; use `atmospheric_control.void`. Do not use it for warm wellness blobs, meditation, voice-first assistants, or cream-canvas emotional drift; use `ambient_drift.aura`. Do not use it for glossy WebGL metaballs, shader demos, liquid data simulations, or neon glass instrument panels; use `viscous_flux.gl`.

It is strongest when the interface is observational and alive: detect blooms, catalog species, monitor depth, release probes, and watch organic light respond slowly. If the prompt centers on operations, naval tactics, recreational diving, spacecraft hardware, wellness, or abstract computational liquid, choose the purpose-built genome instead.

**anti-patterns — this genome NEVER:**

1. uses sharp corners or `border-radius` below 12px on panels, cards, buttons, or containers. everything is organic and rounded — 20px minimum on rectangular surfaces, 50% on circular elements. the ocean has no right angles.
2. uses heavy font weights (600+). maximum weight is 500 for emphasis, and most text is 200–300. typography is delicate, translucent, luminous. nothing is bold or heavy.
3. uses red for errors or danger states. the deepest ocean has no red light — it is absorbed in the first 20 meters. errors use amber or dimmed cyan. warnings glow amber. nothing is aggressive.
4. uses fast transitions (under 0.3s) or linear/step timing functions. all motion is slow (0.5s minimum), organic, eased. nothing snaps, nothing is mechanical. `steps()` and `linear` timing are forbidden.
5. uses uppercase text-transform on body content. sentence case everywhere. labels, buttons, headings — all sentence case. this genome speaks softly. ALL-CAPS is reserved only for rare instrument readout values.
6. uses dense, packed layouts with tight spacing. content floats in generous negative space. `gap` values are never below 16px. panels breathe. the void between elements is the ocean itself.
7. uses grid overlays, crosshairs, bracket decorations, or angular structural ornaments. no wireframe aesthetics, no military/industrial framing. decoration is organic — glowing dots, soft halos, drifting particles.
8. uses monospace fonts for general UI text. Inter (sans-serif) only. monospace may appear only inside explicit code blocks. the ocean does not speak in fixed-width.
9. uses opaque solid backgrounds on panels or cards. all surfaces are translucent with `backdrop-filter: blur`. the deep water bleeds through everything. `opacity` on backgrounds never exceeds 0.8.
10. uses static elements with no ambient motion. every panel drifts slightly, every indicator pulses, every particle floats. nothing in the deep ocean is perfectly still. `animation` properties should be present on decorative and status elements at minimum.
