---
id: "69"
name: woven_thread.loom
keywords:
  - textile
  - embroidery
  - woven
  - fabric
  - stitch
  - loom
  - craft
  - thread
  - cross-stitch
  - pattern
  - fiber
  - tapestry
---

### genome 69: `woven_thread.loom`

> identity: digital textile and embroidery. Cross-stitch grid as layout primitive, thread-stroke borders, fabric texture backgrounds, bobbin-and-needle UI metaphors. Warm linen canvas, visible warp-and-weft grid, counted-thread precision. A weaver's pattern design software rendered as general interface — the Jacquard loom's punch cards were the first programs, and this genome remembers. Every border is a stitch line, every grid cell is a thread crossing, every color is a dye lot.

---

## surface

Colors:
- `--linen: #F0E6D4` — natural linen background
- `--warp-cream: #E8DCC8` — warp thread, lighter
- `--weft-tan: #C9B99A` — weft thread, darker
- `--thread-indigo: #2C4A7C` — indigo dye, primary accent
- `--thread-madder: #A63D40` — madder red dye
- `--thread-weld: #D4A843` — weld/saffron yellow dye
- `--thread-walnut: #5C4033` — walnut brown dye
- `--thread-sage: #6B8F71` — plant green dye
- `--needle-dark: #3A3530` — needle/tool dark

Typography:
- Body: `"Nunito", "Source Sans Pro", sans-serif` at `font-weight: 400, font-size: 15-16px, line-height: 1.65`.
- Headings: `"Nunito", sans-serif` at `font-weight: 700`.
- Pattern labels/metadata: `"IBM Plex Mono", monospace` at `font-size: 12-13px` — grid coordinates, stitch counts.
- Display: `"Nunito", sans-serif` at `font-weight: 800, font-size: 28-40px, letter-spacing: 0.02em`.
- No text-transform uppercase by default — this genome is warm and approachable.

Borders:
- `2px solid var(--needle-dark)` for structural elements — like stitched outlines.
- `border-style: dashed` for secondary borders (running stitch).
- `border-radius: 3-4px` — slightly soft, like fabric edges.
- Cross-stitch grid pattern: repeating 1px lines at regular intervals.

Spacing: grid-based, counted. `padding: 16-24px; gap: 12-16px`. The underlying grid evokes counted-thread work — consistent, regular spacing.

---

## color distribution

- 45% linen/warp-cream — natural fabric background
- 20% needle-dark/weft-tan — text, borders, structural
- 15% thread-indigo — primary accent: buttons, links, selected
- 8% thread-madder — alerts, important accents
- 7% thread-weld — highlights, badges, warnings
- 5% thread-sage + thread-walnut — secondary accents, natural tones

---

## component patterns

Buttons: stitched patch style.
- Primary: `background: var(--thread-indigo); color: var(--linen); border: 2px solid var(--needle-dark); border-radius: 4px; font-family: "Nunito"; font-weight: 700; padding: 10px 22px`.
- A subtle `box-shadow: 1px 1px 0px var(--needle-dark)` for thread-shadow depth.
- Secondary: `background: var(--linen); color: var(--thread-indigo); border: 2px dashed var(--thread-indigo)` (running stitch border).
- Danger: `background: var(--thread-madder)`.

Inputs:
- `background: var(--warp-cream); border: 2px solid var(--weft-tan); border-radius: 3px; color: var(--needle-dark); padding: 10px 14px`.
- Focus: `border-color: var(--thread-indigo); border-style: solid; box-shadow: 0 0 0 2px rgba(44,74,124,0.15)`.

Cards: fabric swatch panels.
- `background: var(--linen); border: 2px solid var(--weft-tan); border-radius: 4px; padding: 20px`.
- Header area: `border-bottom: 2px dashed var(--weft-tan)` (decorative stitch line).
- Optional: a subtle repeating cross-stitch grid pattern at 5% opacity in the background.

Navigation: thread-color selector.
- Horizontal row of colored circles (each a thread/dye color).
- Active: `border: 3px solid var(--needle-dark); box-shadow: 0 0 0 2px var(--linen)` (selected spool).
- Text labels below each in small mono.
- Or: horizontal tabs with dashed bottom border, active tab solid.

Headers: sampler-banner style.
- `background: var(--linen); border-bottom: 3px solid var(--needle-dark); padding: 20px 24px`.
- Title in Nunito 700 with indigo color.
- Decorative cross-stitch pattern border (repeating X pattern) via background-image.

Footers:
- `background: var(--warp-cream); border-top: 2px dashed var(--weft-tan); padding: 16px 24px; color: var(--thread-walnut)`.

Lists:
- Each item separated by dashed stitch lines.
- Leading marker: a small colored thread dot (circle in indigo/madder/sage).
- Text in Nunito.

Tables: woven grid.
- Every cell bordered by thread lines `1px solid var(--weft-tan)`.
- Header: `background: var(--weft-tan); color: var(--needle-dark); font-weight: 700`.
- Body: `background: var(--linen)`.
- The table IS a weaving pattern grid.

Dividers: decorative stitch line.
- `border-top: 2px dashed var(--thread-indigo)`.
- Or a repeating cross-stitch "X X X X" pattern rendered via a small SVG/data-URI background.

Modals: embroidery hoop.
- `background: var(--linen); border: 3px solid var(--thread-walnut)`.
- Circular variant: `border-radius: 50%`.
- Rectangular variant: `border-radius: 8px` (with visible "hoop" border).
- `box-shadow: 0 4px 16px rgba(0,0,0,0.15)`.
- Inner content area has the linen texture.

Badges: small stitched labels.
- `background: var(--thread-weld); color: var(--needle-dark); border: 1px solid var(--needle-dark); border-radius: 3px; font-size: 11px; font-weight: 700; padding: 3px 10px`.
- Variant: `background: var(--thread-sage)`.

---

## interaction language

- Hover: thread-color tint appears — `background-color` shifts slightly warmer, `transition: 0.2s ease`. Border becomes solid from dashed (stitch tightens).
- Active: slight inset — `box-shadow: inset 1px 1px 2px rgba(0,0,0,0.15)`. Like pressing fabric.
- Focus: `outline: 2px dashed var(--thread-indigo); outline-offset: 3px` (running stitch focus ring).
- Selected: `background: var(--thread-indigo); color: var(--linen)`. Full dye saturation.
- Disabled: `opacity: 0.4; filter: saturate(0.3)` — faded, unwashed fabric.
- Drag: element lifts slightly with warm shadow — `box-shadow: 0 4px 12px rgba(0,0,0,0.12); transform: scale(1.02)`.

---

## motion & feedback

- Transitions: 0.2-0.3s ease. Gentle, hand-paced — nothing is rushed in textile work.
- Loading: a thread being pulled through fabric — a small line extending horizontally, or a progress bar styled as a filled stitch row.
- Success: a small checkmark "stitch" appears (in indigo), holds 1s.
- Error: madder-red thread flash — element border pulses red once.
- Page enter: elements fade in with slight upward drift, staggered 60ms — fabric panels being laid out on a table.

---

## atmosphere

Linen texture background — a very subtle woven pattern via CSS:

```css
background-image:
  repeating-linear-gradient(
    0deg,
    transparent, transparent 3px,
    rgba(0,0,0,0.02) 3px, rgba(0,0,0,0.02) 4px
  ),
  repeating-linear-gradient(
    90deg,
    transparent, transparent 3px,
    rgba(0,0,0,0.02) 3px, rgba(0,0,0,0.02) 4px
  );
```

This creates a counted-thread grid visible at low opacity. Warm, natural, handmade feeling throughout. No sharp digital edges — everything has the softness of fabric. Color palette restricted to historically achievable natural dyes.

---

## editorial voice

Warm, craft-oriented, patient.

- Button labels: "Stitch", "Weave", "Add to Pattern", "Save Draft", "Unravel", "Begin", "Cast On".
- Headings: craft-process language — "The Pattern", "Thread Library", "Current Work", "Stitch Guide", "Color Chart", "Finished Pieces".
- Metadata: "Row 14 of 28", "Stitch count: 2,408", "Dye lot: Indigo #3", "Gauge: 18 st/in", "Pattern repeat: 8x8".
- Placeholders: "Search patterns...", "Name your piece...", "Add notes...".
- Empty states: "The loom is empty.", "No patterns saved yet.", "Ready to begin weaving.".
- Error: "A stitch was dropped.", "Pattern not found.", "Thread tension error.".
- Success: "Pattern saved.", "Row complete.", "Added to collection.".

---

## cursor & selection

- Default cursor.
- Pointer on interactive.
- `::selection { background: var(--thread-indigo); color: var(--linen); }`.

---

**when to reach for this genome**

Use `woven_thread.loom` when the prompt asks for textile craft, embroidery, cross-stitch, weaving, sewing, knitting, fiber-arts patterning, a loom or stitch-count tool, a handmade fabric marketplace, or any product that should feel like software built on a visible warp-and-weft grid.

Reach for it when the concrete cues are linen canvas, natural dye lots, indigo/madder/weld thread colors, dashed running-stitch borders, cross-stitch `X` motifs, thread spools, bobbins, needles, fabric swatches, row counts, gauge, stitch charts, and patient maker language such as `Stitch`, `Weave`, `Cast On`, `Dye lot`, or `Pattern repeat`. It is strongest when the interface is about making, following, storing, comparing, or annotating textile patterns, and when the grid should feel counted by hand rather than computed by a machine.

Do not use it for torn-paper naturalist scrapbooks, taped photos, bead clusters, or tilted handmade collage; use `nature_folio.craft`. Do not use it for Edo woodblock prints, sumi outlines, washi sheets, Hokusai/Hiroshige references, or stamped flat-color registration; use `ukiyo_woodcut.edo`. Do not use it for sculptural folded paper, crease diagrams, mountain/valley notation, or geometric paper facets; use `origami_folio.paper`. Do not use it for seed packets, planting calendars, kraft packaging, or aspirational garden commerce; use `seed_packet.plot`. Do not use it for tea ceremony, calligraphy, shoji light, washi restraint, or meditative ritual with large negative space; use `tea_ceremony.matcha`.

It is the right choice when fabric is the substrate and thread is the line. If the prompt is paper, printmaking, gardening, collage, or contemplative Japanese ritual rather than textile construction, route to the genome whose material is named by the brief.

## anti-patterns — this genome NEVER:

1. uses neon, electric, or digitally saturated colors. all colors come from natural dye sources — indigo, madder, weld, walnut, sage.
2. uses sharp 0px border-radius. fabric edges are always slightly soft — 3-4px minimum.
3. uses monospace or pixel fonts as primary typeface. monospace is only for grid coordinates and metadata. body and display are rounded sans-serif.
4. uses hard offset drop shadows (4px 4px 0px). shadows are always soft and subtle — fabric doesn't cast hard shadows.
5. uses aggressive, urgent, or technical language. the voice is warm, patient, and craft-oriented — a maker's gentle guidance.
6. uses pure black (#000) or pure white (#FFF) as backgrounds. all surfaces are warm-tinted natural fibers.
7. uses heavy bold borders (>3px) as primary containment. borders are thread-weight — 1-2px, often dashed.
8. uses glass/blur/transparency effects. this is opaque fabric, not glass. no backdrop-filter, no frosted elements.
9. uses fast snappy transitions (<0.1s). everything moves at hand-pace — gentle, deliberate, 0.2-0.3s minimum.
