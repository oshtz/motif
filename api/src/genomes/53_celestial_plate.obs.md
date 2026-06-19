---
id: "53"
name: celestial_plate.obs
keywords:
  - astronomy
  - celestial
  - diagram
  - observatory
  - scientific
  - lunar
  - orbital
  - engraving
  - plate
  - copernican
  - radiance
  - geometric
---

### genome 53: `celestial_plate.obs`

> identity: astronomical plate illustration: Copernican mechanics, observatory publications, lunar tables, orbital diagrams, enlightenment-era scientific engravings, technical figure plates, and luminous geometric constructions on absolute black. The UI behaves like an interactive observatory print: arcs, ephemerides, crosshairs, labels, catalog entries, and slow drawn paths in a silent field.

---

**surface**

The surface is a celestial mechanics plate.

The page is not a dashboard.

The page is not a space poster.

The page is a black field carrying precise ink geometry.

Every component should feel like a figure in an observatory annual, a catalog plate, a lunar map inset, a transit diagram, an orbital calculation sheet, or a hand-engraved scientific publication.

Core palette:

- `--void: #020202` for the near-absolute black field, page background, modal field, diagram void, and all negative space.
- `--deep-void: #000000` for the darkest diagram wells and night-sky recesses.
- `--ink: #F2F2EF` for primary engraved lines, main labels, body text, and high-priority figure elements.
- `--ink-soft: #D9D8D2` for captions, secondary labels, quiet UI actions, and old-paper ink warmth.
- `--ink-dim: rgba(242, 242, 239, 0.42)` for auxiliary labels, reference values, faint coordinate names, and inactive controls.
- `--ink-faint: rgba(242, 242, 239, 0.16)` for construction lines, graticules, orbital guides, crosshair marks, and grid scaffolding.
- `--ink-ghost: rgba(242, 242, 239, 0.08)` for almost invisible registration marks, plate texture, and dormant axes.
- `--lunar-blue: #A8C7FF` for optional hand-tinted lunar, catalog, or spectral emphasis.
- `--solar-amber: #E7C77A` for optional sun, radiance, or highlighted measurement emphasis.
- `--transit-red: #B96A5A` for rare invalid, warning, eclipse, occultation, or failed-calculation emphasis.

The default is monochrome.

Tint is rare and should feel hand-applied to an engraving.

The UI should remain readable and beautiful if all tint is removed.

Typography:

- Labels and controls: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif`.
- Label size: `9px` to `12px`.
- Label weight: `500`.
- Label transform: uppercase.
- Label letter-spacing: `0.12em` to `0.22em`.
- Captions and prose: `"Iowan Old Style", "Apple Garamond", Baskerville, "Times New Roman", "Source Serif Pro", serif`.
- Caption size: `16px` to `22px`.
- Caption weight: `400`.
- Caption line-height: `1.45` to `1.6`.
- Metadata: sans-serif `9px`, uppercase, `letter-spacing: 0.2em`, `color: var(--ink-dim)`.
- Numeric values: `"JetBrains Mono", "SF Mono", "Courier New", monospace`, `10px` to `13px`, tabular.
- Diagram annotations: uppercase sans-serif, `9px` to `11px`.

No type should exceed `26px`.

Hierarchy comes from position, tracking, opacity, and serif/sans contrast, not from giant type.

Borders:

- UI components have no ordinary box borders.
- Containment is spatial or drawn with hairline construction marks.
- SVG strokes are the structural language.
- Primary diagram stroke: `1.5px solid var(--ink)`.
- Secondary stroke: `1px solid var(--ink-dim)`.
- Construction stroke: `1px solid var(--ink-faint)`.
- Ghost stroke: `1px solid var(--ink-ghost)`.
- Focus outline: `1px solid var(--ink-dim)` with `outline-offset: 4px`.
- Rectangular `border-radius: 0px` globally.
- Circles are allowed only as actual geometry, not rounded UI corners.

Spacing:

- Major section padding: `2rem` to `4rem`.
- Diagram padding: `3rem` to `5rem`.
- Caption width: `max-width: 800px`.
- Label offsets: `8px` to `16px` from their paths.
- Panel gap: `32px` to `64px`.
- Metadata row gap: `12px` to `20px`.
- Table row padding: `10px 0`.

Negative space is a primary material.

The void must remain visible.

Do not fill the field simply because a modern layout would.

---

**color distribution**

84% void and deep-void.

The field, background, modal wells, and diagram negative space stay black.

9% ink and ink-soft.

Primary geometry, labels, captions, selected controls, and text use warm off-white.

5% ink-dim, ink-faint, and ink-ghost.

Construction geometry, graticules, reference rings, inactive controls, and plate registration use low-opacity ink.

1% lunar-blue or solar-amber.

Optional tint appears only when the diagram needs a highlighted body, spectral band, selected orbit, or radiance measurement.

1% transit-red.

Use red only for failure, eclipse, out-of-range values, occultation warnings, or invalid calculations.

The aesthetic must remain almost monochrome.

The palette lives inside opacity, not hue.

---

**component patterns**

Celestial diagram:

- Signature element.
- Draw with SVG, not decorative divs.
- Use circles, arcs, ellipses, rays, dashed construction lines, axis marks, ephemeris points, and engraved labels.
- Set `shape-rendering: geometricPrecision`.
- Primary orbit stroke: `1.5px var(--ink)`.
- Secondary orbit stroke: `1px var(--ink-dim)`.
- Construction orbit stroke: `1px var(--ink-faint); stroke-dasharray: 6 6`.
- Bodies are small filled circles or ringed points, never glossy planet illustrations.
- A selected body may get a fine circular halo.
- Each body should have a concise uppercase label or catalog code.

Orbital plate:

- Central body anchored in the composition.
- Orbits use ellipses and arcs.
- Nodes, apsides, and inclinations are labeled with tiny uppercase text.
- Measurement rays can connect points.
- Direction arrows are hairline, small, and geometrically precise.
- Do not use thick infographic arrows.

Star catalog list:

- No bullets.
- Rows separated by `1px solid var(--ink-ghost)`.
- Catalog code left, magnitude, coordinates, and notes right.
- Catalog code in monospace or uppercase sans.
- Descriptive notes in serif.
- Active row brightens from dim to full ink.
- Selected row gets a small circle marker or underline, not a filled background.

Buttons:

- Text-only by default.
- Style: uppercase sans, `font-size: 10px`, `letter-spacing: 0.15em`, `color: var(--ink-dim)`, `background: transparent`, `border: none`.
- Hover: color becomes `var(--ink)`.
- Primary action can use a `1px solid var(--ink-faint)` outline and `padding: 8px 14px`.
- Action labels: `OBSERVE`, `CALCULATE`, `TRACE`, `CATALOG`, `VERIFY`, `RESOLVE`.
- No filled button backgrounds.
- No pill buttons.

Inputs:

- No filled input box.
- Bottom rule only: `border-bottom: 1px solid var(--ink-faint)`.
- Background: transparent.
- Label above in uppercase sans, dim ink.
- Entered values in serif or monospace depending on data type.
- Focus rule becomes `var(--ink-dim)` or `var(--ink)`.
- Placeholder copy is italic serif and dim.
- Coordinate inputs use fixed-width monospace.

Panels:

- Panels do not have card backgrounds.
- Define groups with whitespace, corner registration marks, and optional hairline dividers.
- Corner mark: tiny `+` or L-shaped crosshair at panel corners.
- If a panel needs a frame, use four corner marks rather than a rectangle.
- Never use box shadows or filled cards.

Navigation:

- Horizontal, uppercase, and quiet.
- Items separated by generous spacing or a centered dot.
- Font: sans-serif, `10px`, `letter-spacing: 0.16em`.
- Active item: full ink.
- Inactive item: ink-dim.
- No underline except selected plate sequence if needed.
- No sidebars unless the product is a catalog index.

Headers:

- Title in serif, centered or slightly offset.
- Metadata line below in uppercase sans.
- Title size `20px` to `26px`.
- Subtitle as figure caption, not marketing copy.
- Header separated from content by space, not a thick rule.
- A plate number can sit in a corner: `PLATE VII`, `FIG. 03`, `OBS. 12`.

Footers:

- Metrics block rather than legal footer.
- Position bottom-left or bottom-right.
- Include revision, plate, instrument, epoch, wavelength, inclination, or catalog ID.
- Font: uppercase sans, `9px`, wide tracking.
- Text color: ink-dim.
- Use small groups separated by long spaces or dots.

Tables:

- No boxed table borders.
- Header in uppercase sans, dim ink.
- Data in serif or monospace.
- Rows separated by ghost lines.
- Numeric values align by decimal.
- Column rules are avoided; whitespace creates columns.
- A selected value can be underlined by a thin stroke.

Dividers:

- Divider: `1px solid var(--ink-faint)`.
- Construction divider: dashed line with `stroke-dasharray: 6 6`.
- Use dividers as figure notation, not section decoration.
- A radial line, axis, or arc can divide space better than a horizontal rule.

Modals:

- Modal is an expanded plate detail on black.
- `background: var(--void)`.
- No border.
- No shadow.
- Corners marked with registration crosshairs.
- Close action: small `X` or `CLOSE` in dim uppercase text.
- Backdrop is still black; do not add blur.
- Content should feel like a plate overlay, not a web dialog.

Badges and tags:

- Text-only.
- Uppercase sans, `9px`, `letter-spacing: 0.12em`.
- Optional thin outline: `1px solid var(--ink-faint)`.
- No fill.
- No rounded shape.
- Labels: `OBSERVED`, `CALCULATED`, `CATALOGED`, `UNRESOLVED`, `REV. IV`.

Registration marks:

- Small crosshairs at corners, map edges, or figure boundaries.
- Stroke: `var(--ink-dim)` or `var(--ink-faint)`.
- Size: `8px` to `14px`.
- These marks are a native component, not decoration.

Measurement callouts:

- Thin line from point to label.
- Label in uppercase sans or numeric monospace.
- Use compact data: `R: 1.382 AU`, `INC: 5.14 DEG`, `MAG: 2.1`.
- Place labels around paths with ample clearance.

---

**interaction language**

Hover:

- Elements brighten from `var(--ink-dim)` to `var(--ink)`.
- Diagram path hover increases opacity and slightly increases stroke width.
- Body hover reveals a label, ephemeris value, or small halo.
- No background fill.
- No scale.
- No shadow.
- Transition: `opacity 0.3s ease, color 0.3s ease, stroke 0.3s ease`.

Active:

- Active action briefly dims to `opacity: 0.6`, as if a shutter closed.
- Active diagram path can pulse once through opacity.
- Active calculation shows a drawn check path.
- No pressed button transform.

Focus:

- Focus outline: `1px solid var(--ink-dim); outline-offset: 4px`.
- Focus for diagram elements can use corner marks or a fine halo.
- Keyboard focus must be visible but restrained.
- Never use thick blue browser-style focus unless the product demands accessibility fallback.

Selected:

- Selected item becomes full ink.
- Use a small filled circle prefix, a fine underline, a halo around a point, or a bracket line.
- Selected orbit can become solid while alternatives remain dashed/dim.
- Selected catalog entry can use a left registration mark.
- Do not fill row backgrounds.

Disabled:

- Disabled elements fade to `opacity: 0.15`.
- They remain in position as faint plate ghosts.
- No gray disabled buttons.
- No strikethrough.

Drag:

- Drag contexts use `cursor: crosshair` or `move`.
- Dragged measurement gains a faint halo: `box-shadow: 0 0 0 1px var(--ink-faint)`.
- Drag handles are tiny cross marks or small circles.
- No card ghost.
- No spring or bounce.

Validation:

- Calculation complete: drawn check path.
- Unresolved value: transit-red underline and precise message.
- Out-of-range value: text plus small bracket mark.
- Never rely on red alone.

---

**motion & feedback**

Motion is slow, deliberate, and geometric.

Nothing snaps.

Nothing pops.

The page behaves like an instrument revealing a drawing.

Default transition:

- `transition: opacity 0.3s ease, color 0.3s ease, stroke 0.3s ease`.
- Do not use fast microinteraction flourishes.
- Do not use spring motion.

Stroke draw-on:

- Signature motion.
- SVG paths animate using `stroke-dasharray` and `stroke-dashoffset`.
- Duration: `2s` to `4s`.
- Curve: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Geometry appears before labels.
- Labels fade in after paths.

Staggered plate reveal:

- Primary orbit starts at `0s`.
- Secondary construction arcs at `0.6s`.
- Labels at `1.8s`.
- Metadata at `2.5s`.
- Caption at `3s`.
- Total reveal can be `3s` to `5s` for hero diagrams.

Fade:

- Text fades from opacity `0` to `1` over `1.2s` to `2s`.
- Dim annotations can remain at partial opacity.
- Avoid abrupt text entrance.

Loading:

- A single circle draws itself.
- Or a fine arc expands along an orbit.
- No spinner.
- No dots.
- No progress bar.
- Loading text is optional and should be metadata-like: `CALCULATING EPHEMERIS`.

Success:

- A check path draws over `1s`.
- Text: `Observation recorded.`, `Calculation complete.`, or `Catalog updated - Rev. IV.`
- Confirmation is understated.

Error:

- Affected value flickers once to full ink and then receives a transit-red underline.
- Text: `Calculation could not be resolved.`
- No shaking.
- No warning modal unless the workflow is blocked.

Orbital motion:

- If a body animates along an orbit, use very slow linear motion.
- The path should remain visible.
- Do not make planets bounce, glow wildly, or trail like a game effect.
- Time controls should allow pause and step.

Page enter:

- Prefer an engraved reveal.
- If the product is more utilitarian, show the plate immediately with faint path draw on selected change only.

---

**atmosphere**

The atmosphere is an infinite observatory plate.

The screen is black.

The geometry is warm ink.

The void is not empty; it is a measured field.

Background:

- `background: var(--void)`.
- No gradient.
- No starfield texture.
- No grain by default.
- Optional microscopic plate dust only at near-invisible opacity.

Native visual elements:

- Orbits.
- Arcs.
- Circular bodies.
- Axis lines.
- Construction grids.
- Registration marks.
- Ephemeris labels.
- Plate numbers.
- Catalog codes.
- Coordinate readouts.
- Figure captions.

Composition:

- One large diagram should dominate when possible.
- Captions and controls orbit the diagram rather than forming a boxy dashboard.
- Empty space is intentional.
- Symmetry is common, but offset annotations can create engraved-page rhythm.
- Keep content centered or aligned to mathematical axes.

Light:

- Lines can have a subtle luminance: `filter: drop-shadow(0 0 2px rgba(242,242,239,0.2))`.
- Do not use neon glow.
- Do not use chromatic bloom.
- The plate should feel faintly illuminated, not backlit.

Texture:

- The best texture is geometry.
- If a texture is used, make it almost invisible and monochrome.
- Avoid photographic space, nebulae, stars, planets, and clouds.

Intellectual mood:

- Quiet.
- Scientific.
- Precise.
- Observational.
- Unhurried.
- Mathematical without becoming a code terminal.

The output should feel like a scholar, astronomer, or instrument operator could read it slowly and trust it.

---

**editorial voice**

The voice is published scientific plate language.

It is precise, spare, and declarative.

It never tries to hype the cosmos.

Button labels:

- `OBSERVE`
- `CALCULATE`
- `PROCEED`
- `RESOLVE`
- `TRACE`
- `RENDER`
- `CATALOG`
- `VERIFY`
- `PLOT`
- `REVISE`

Headings:

- `Geometric Representation of Light Transfer`
- `Orbital Resonance Configuration`
- `Observed Radiance Distribution`
- `Transit Diagram for Plate VII`
- `Lunar Surface Reference`
- `Inclination and Node Study`
- `Ephemeris Comparison`
- `Catalog of Observations`

Metadata:

- `INCLINATION: 5.14 DEG`
- `ALBEDO: 0.12`
- `WAVELENGTH: 380-750 NM`
- `REV. III - PLATE 7`
- `EPOCH: J2000.0`
- `RADIUS: 1.382 AU`
- `CATALOG: OBS-53`
- `FIELD: 12.4 ARC MIN`
- `MAGNITUDE: 2.13`

Placeholders:

- `enter observed value...`
- `celestial coordinates...`
- `designation...`
- `catalog reference...`
- `epoch...`
- `right ascension...`

Empty states:

- `No observations recorded.`
- `The field is empty - begin a new survey.`
- `Awaiting data.`
- `No catalog entries match this plate.`
- `No ephemeris has been resolved.`

Error text:

- `Calculation could not be resolved.`
- `Value exceeds observable range.`
- `Reference not found in catalog.`
- `Coordinate set is incomplete.`
- `Observation cannot be reconciled.`

Success text:

- `Observation recorded.`
- `Calculation complete.`
- `Catalog updated - Rev. IV.`
- `Plate rendered.`
- `Ephemeris verified.`

Writing rules:

- Use scientific nouns.
- Use measured verbs.
- Use plate and figure references.
- Use units.
- Use no jokes.
- Use no exclamation marks.
- Use no marketing language.
- Keep copy declarative and slow.

---

**cursor & selection**

Default cursor: `crosshair`.

Interactive controls: `pointer`.

Text fields: `text`.

Diagram drag: `move`.

Precise measurement handles: `crosshair`.

Disabled controls: `default`.

Do not use custom cursors.

Do not use novelty telescope or star cursors.

Selection:

```css
::selection {
  background: rgba(242, 242, 239, 0.25);
  color: var(--ink);
}
```

Selected text should look like a faint luminous wash.

Selected bodies use halos.

Selected paths use full ink opacity and a label.

Selected catalog rows use a tiny marker and a brightened row, not a fill.

---

**when to reach for this genome**

Use `celestial_plate.obs` when the prompt asks for astronomy, observatory tools, celestial diagrams, orbital mechanics, lunar studies, scientific plates, sky catalogs, star maps, Copernican diagrams, radiance measurement, ephemerides, astronomical surveys, orbital calculators, or geometric scientific visualization.

Use it when the UI should feel like an interactive scientific engraving rather than a normal app interface.

Use it when the core experience can be a diagram, plate, map, or catalog with captions and measured interactions.

Use it for products that need quiet authority, exact geometry, slow reveal, precise labels, and lots of negative space.

Use it for astronomical education, observatory archives, research notebooks, orbital calculators, lunar atlases, telescope planning, catalog browsers, spectral observation summaries, and scientific exhibit pages.

Use it for adjacent scientific diagrams only when the plate metaphor is appropriate: optics, geometry, radiance, cartographic astronomy, instrument calibration, or publication-quality figure exploration.

Do not choose it for sci-fi command dashboards, space games, neon HUDs, NASA mission-control screens, or consumer astrology pages.

For cockpit or flight instruments, prefer `flight_deck.pfd`.

For engineering blueprints, prefer a blueprint or drafting genome.

For dark signal-processing interfaces, prefer `signal_void.cc` or a terminal genome.

This genome is strongest when the result can be monochrome, sparse, precise, diagram-led, and unhurried.

---

**anti-patterns - this genome NEVER:**

1. never uses ordinary visible card borders or boxed UI containment. grouping is spatial or marked with plate geometry.
2. never uses a colorful space palette, nebula gradients, galaxy photography, or glossy planet illustration as the primary visual language.
3. never uses rounded rectangular UI, pill buttons, bubble tags, or soft consumer cards.
4. never uses font weights above 600 or hero-scale marketing type. the genome whispers through precision.
5. never uses filled backgrounds on buttons, badges, nav items, or controls unless the state is an accessibility fallback.
6. never uses box-shadow elevation, app-card depth, glassmorphism, blur panels, or neumorphic surfaces.
7. never uses fast/snappy animation, bounce, spring motion, scroll parallax, or playful microinteractions.
8. never uses informal, casual, promotional, or whimsical copy. the voice is a scientific publication.
9. never fills the void with dense widgets. negative space is part of the astronomical field.
10. never uses decorative icons, emoji, mascot graphics, or stock space symbols as ornament.
11. never hides units, axes, labels, catalog references, or figure context for minimalism.
12. never turns celestial mechanics into generic sci-fi. The identity is observatory plate, engraving, geometry, and measured observation.
