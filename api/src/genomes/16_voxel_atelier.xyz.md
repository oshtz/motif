---
id: "16"
name: voxel_atelier.xyz
keywords:
  - voxel
  - spatial
  - 3d
  - pixel
  - creative
  - immersive
  - pastel
  - atelier
  - interactive
  - studio
  - canvas
  - three
  - isometric
  - lowpoly
  - webgl
---

### genome 16: `voxel_atelier.xyz`

> identity: spatial creative studio. pixel typography floating over 3D voxel fields on warm parchment — a design tool that feels like walking through a gallery of interactive geometry.

**surface**

colors:
```
--bg: #F5F4EF;           /* warm parchment */
--ink: #111111;           /* near-black text */
--block: #EAEAE4;         /* muted stone for pixel blocks and panels */
--pill-purple: #EAE1F8;   /* soft lavender accent */
--pill-pink: #FAD5F1;     /* candy pink accent */
--highlight: #FBEE8E;     /* warm yellow highlight / CTA */
--dim: #B5B3AC;           /* muted metadata, tertiary text */
--glass: rgba(245, 244, 239, 0.8);  /* frosted overlay for floating UI */
```

typography:
- display/headings: `"Silkscreen", cursive` — pixel bitmap font. 3.5rem–5.5rem for hero, 1.8rem–2.5rem for section headers. `text-transform: capitalize`. `line-height: 0.9`. `text-shadow: 1px 1px 0px rgba(0,0,0,0.1)`.
- body/UI/navigation: `"Space Grotesk", sans-serif` — geometric sans. `font-weight: 400–500`. 0.65rem–0.85rem for nav/meta (uppercase, `letter-spacing: 0.1em`). 1rem–1.2rem for body text. `line-height: 1.5`.
- accent typography: pill-shaped labels use Space Grotesk at 1.8rem–2.2rem, `font-weight: 400`, `letter-spacing: -0.02em`, lowercase or title-case. these sit alongside pixel headings as a contrasting voice.
- sup/registered marks inside pixel text: `font-size: 2.5rem; vertical-align: super; line-height: 0`.

borders:
- panels and cards: no visible border. depth from `background-color` contrast against `--bg`.
- logo/icon blocks: `border-radius: 4px`. small (32px square), dark background with light text.
- navigation bars: `border-radius: 4px`, `backdrop-filter: blur(4px)`, background `var(--glass)`.
- no heavy borders anywhere — separation through color blocks and whitespace.

spacing:
- page padding: `2rem` on all sides (shrinks to `1rem` below 600px).
- element gap within rows: `1rem`.
- vertical section gap: `0.5rem` between inline rows.
- negative margin overlaps: `-1rem margin-top` on successive hero rows to create collision/stacking.

**color distribution**
- 55% parchment background (`--bg`) — the warm void that all elements float on
- 20% stone block (`--block`) — pixel-block backgrounds, panel fills, structural surfaces
- 10% ink (`--ink`) — text, logo blocks, key UI anchors
- 10% pastel accents distributed evenly across `--pill-purple` and `--pill-pink` — pill labels, highlights, badges
- 5% highlight yellow (`--highlight`) — CTAs, active indicators, attention markers

**component patterns**

buttons:
- primary: `background: var(--highlight); color: var(--ink); padding: 0.25rem 0.5rem; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; border: none; border-radius: 0px`. flat yellow badge style.
- secondary: `background: var(--glass); backdrop-filter: blur(4px); color: var(--ink); padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 500; border: none`.
- icon button: `background: var(--ink); color: var(--bg); width: 32px; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem`.

inputs:
- `background: var(--block); border: none; border-radius: 4px; padding: 0.5rem 0.75rem; font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; color: var(--ink)`.
- placeholder: `color: var(--dim); font-style: normal`.
- focus: `outline: 2px solid var(--pill-purple); outline-offset: 1px`.
- label: above input, `font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--dim); margin-bottom: 0.25rem`.

cards/panels:
- `background: var(--block); border-radius: 4px; padding: 1.5rem`. no border, no shadow.
- card header: pixel font (`Silkscreen`) at 1.2rem, capitalize.
- card metadata: Space Grotesk at 0.65rem, uppercase, `color: var(--dim)`.
- featured card variant: `background: var(--pill-purple)` or `background: var(--pill-pink)`.

navigation:
- horizontal nav bar: `display: flex; gap: 2rem; background: var(--glass); backdrop-filter: blur(4px); padding: 0.5rem 1rem; border-radius: 4px`.
- nav links: `font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 500; color: var(--ink); text-decoration: none`.
- active: `opacity: 1`. inactive hover: `opacity: 0.6`.

headers:
- page header: edge-to-edge flex row with logo-block left, nav center, action-text right.
- all header text: Space Grotesk, 0.65rem, uppercase, spaced.
- logo: 32px dark square with 1-2 character abbreviation.

footers:
- same edge-to-edge flex pattern as header.
- left: version/meta text (`Render Engine V.02` style). right: contact block with highlight badge + link.
- `font-size: 0.65rem–0.75rem`.

lists:
- no bullets. each row: `padding: 0.5rem 0; border-bottom: 1px solid var(--block)`.
- item label in pixel font at 1rem. metadata in Space Grotesk at 0.65rem, `color: var(--dim)`.
- active item: `background: var(--pill-purple); padding: 0.5rem; border-radius: 4px`.

tables:
- `border-collapse: collapse`. no outer border.
- header row: `background: var(--block); font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; padding: 0.5rem`.
- body rows: `border-bottom: 1px solid var(--block); padding: 0.5rem`.
- no alternating row colors. hover: `background: var(--glass)`.

dividers:
- `border: none; height: 1px; background: var(--block); margin: 1rem 0`.
- or implicit through block-color backgrounds (no explicit line needed when panels alternate bg/block).

modals/overlays:
- `background: var(--bg); border-radius: 4px; padding: 2rem; box-shadow: 0 8px 32px rgba(0,0,0,0.08)`.
- backdrop: `background: rgba(17, 17, 17, 0.3); backdrop-filter: blur(8px)`.
- modal header: pixel font at 1.8rem. close button: icon-button style (32px dark square).

badges/tags:
- pill shape: `border-radius: 50px; padding: 0.3rem 1.5rem; font-family: 'Space Grotesk'; font-size: 1rem; font-weight: 400; letter-spacing: -0.02em`.
- rotate backgrounds: `var(--pill-purple)`, `var(--pill-pink)`, `var(--highlight)`.
- small badge: `padding: 0.15rem 0.5rem; font-size: 0.65rem; font-weight: 600; text-transform: uppercase; border-radius: 2px; background: var(--highlight)`.

**interaction language**

- hover: `opacity: 0.6` on links/nav. cards: `transform: translateY(-2px); transition: 0.2s ease`. buttons: `filter: brightness(0.95)`.
- active/pressed: `transform: scale(0.97)`. buttons: background darkens by 5%.
- focus: `outline: 2px solid var(--pill-purple); outline-offset: 2px`. visible on all interactive elements.
- selected: `background: var(--pill-purple)` for items. nav: `opacity: 1; font-weight: 500`.
- disabled: `opacity: 0.35; pointer-events: none`. no strikethrough, no desaturation — just fade.
- drag: `cursor: grabbing; opacity: 0.8; transform: scale(1.02); box-shadow: 0 12px 24px rgba(0,0,0,0.1)`.

**motion & feedback**

transitions:
- default: `transition: all 0.2s ease` on interactive elements.
- cards/panels: `transition: transform 0.2s ease, box-shadow 0.2s ease`.
- page elements may drift with slow continuous float: `animation: float 4s ease-in-out infinite` where float translates Y by ±4px.
- mouse-reactive parallax: elements subtly shift position based on cursor coordinates via lerp (`factor * 0.05`), max displacement `clamp(-20px, calculated, 20px)`.

loading:
- pulsing block: a `var(--block)` rectangle with `animation: pulse 1.5s ease-in-out infinite` cycling opacity 0.5→1→0.5.
- or: pixel-font "LOADING" with individual characters appearing sequentially.

success:
- brief flash: element background transitions to `var(--highlight)` for 600ms, then returns.
- or: small `✓` in pixel font fades in beside the element.

error:
- element gains `outline: 2px solid #E85D5D; outline-offset: 2px` for 2s.
- error text in Space Grotesk at 0.75rem, `color: #E85D5D`.

**atmosphere**

- the page is a warm parchment void. all UI floats above it as discrete blocks and pills.
- frosted glass panels: `background: var(--glass); backdrop-filter: blur(4px)` — UI elements feel semi-transparent, hovering over the scene.
- 3D spatial quality: the design implies depth. hero elements stack with negative margins, creating collision. ambient floating voxel shapes (cubes 20–40px, blocks) rendered behind UI via `<canvas>` or CSS, rotating at `rotateY: 0.2deg/frame, rotateX: 0.1deg/frame` and drifting.
- fog: background objects fade into `--bg` parchment via exponential fog (`opacity *= exp(-distance * 0.003)` where distance is from viewport center), creating depth without hard edges.
- soft shadows: `box-shadow: 0 4px 16px rgba(0,0,0,0.06)` on floating panels. shadows are diffuse, never hard.
- the entire canvas responds to mouse position — elements subtly rotate/shift, giving a spatial "you are here" quality.
- crosshair cursor reinforces the creative-tool / spatial-placement feel.
- `image-rendering: auto` — no pixelation on images despite pixel typography.

**editorial voice**

button labels: `Init`, `Deploy`, `Render`, `Sync`, `Archive`, `Export Scene`, `Map View`, `Build`
headings: pixel font, title-case, short noun phrases. `Interactive`, `Voxel Space`, `Module Grid`, `Scene Index`. may include ® or ™ marks as decorative elements.
metadata: version strings (`V.02`, `V.14`), system-style labels (`Render Engine`, `Build Status`). uppercase Space Grotesk, 0.65rem.
placeholders: lowercase, descriptive. `enter coordinates…`, `search modules…`, `name your scene…`
empty states: pixel font heading + Space Grotesk subtext. heading: `No Scenes Yet`. subtext: `Create your first scene to begin building.`
error messages: `Sync failed — check connection and retry.` — direct, no drama, actionable.
success messages: `Scene deployed.` or `Module saved to index.` — terse confirmation, no celebration.

**cursor & selection**

- default cursor: `crosshair` on body and all non-interactive elements. reinforces spatial/creative-tool identity.
- interactive elements (buttons, links, inputs): `cursor: pointer`.
- drag targets: `cursor: grab`, `cursor: grabbing` when active.
- text: `cursor: text` on editable fields only.
- `::selection { background: var(--pill-purple); color: var(--ink); }` — soft lavender highlight.

**when to reach for this genome**

Use `voxel_atelier.xyz` when the prompt asks for a spatial creative studio, voxel editor, 3D scene builder, isometric module browser, low-poly design tool, WebGL canvas interface, immersive gallery of geometry, interactive world-building workspace, spatial portfolio, or playful creative app where warm parchment, pixel headings, pastel blocks, floating UI, and gentle 3D voxel fields should define the experience.

Reach for it when the user wants a design tool that feels like arranging blocks in a soft digital atelier: crosshair placement, voxel cubes, scene indexes, module grids, pixel typography, Space Grotesk controls, pastel pills, frosted overlays, mouse parallax, and floating geometry behind the interface.

Do not use it for hot-pink pop-maximalist art tools, warped grids, scalloped shapes, or 80s/Tokyo/Bauhaus collision energy; use `figment_canvas.pop`. Do not use it for pixel-art botanical portfolios, cobalt fields, flowers, or indie artist meadow worlds; use `pixel_garden.bloom`. Do not use it for 1989 handheld LCD hardware, 4-shade greens, cartridge-era constraints, or Game Boy UI; use `handheld_gb.dmg`. Do not use it for arcade attract screens, high-score tables, coin slots, CRT scanlines, or competitive game loops; use `attract_mode.cab`. Do not use it for old personal homepages, web rings, visitor counters, tiled starfields, or browser-default nostalgia; use `geocities_page.www`. Do not use it for pure Bauhaus primary-shape workshop layouts, didactic grids, or modernist school poster logic; use `bauhaus_workshop.modernist`.

It is strongest when the prompt needs a warm, spatial, creative construction surface: if the product is retro hardware, arcade play, old-web nostalgia, pop-art maximalism, botanical pixel illustration, or formal modernist pedagogy, choose another genome.

**anti-patterns — this genome NEVER:**
1. uses heavy borders (2px+) or solid outlines on panels — separation is through color blocks and whitespace, never lines
2. uses dark/black backgrounds — the ground plane is always warm parchment; darkness appears only in small icon blocks and ink text
3. uses serif or handwriting typefaces — only pixel bitmap (`Silkscreen`) and geometric sans (`Space Grotesk`)
4. uses drop shadows harder than `rgba(0,0,0,0.1)` — all depth is soft, diffuse, atmospheric
5. uses saturated primary colors (pure red, blue, green) — the palette is pastel and muted; accents are lavender, candy pink, warm yellow
6. uses instant/zero-transition state changes — everything eases smoothly; there are no hard snaps
7. uses dense grid layouts with shared borders — elements float independently with generous gaps; no brutalist collision grids
8. uses rounded pill shapes on structural panels — pills are reserved for inline labels and badges only; panels and cards use 4px radius maximum
9. uses decorative icons or emoji in UI — iconography is typographic (letterforms, ®, ™) or absent entirely
10. uses all-lowercase or all-uppercase for display headings — pixel headings are always title-case capitalize; only meta/nav text is uppercase
