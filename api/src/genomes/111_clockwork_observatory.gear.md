---
id: "111"
name: clockwork_observatory.gear
keywords:
  - clockwork
  - horology
  - orrery
  - observatory
  - timekeeping
  - mechanical
  - brass
  - enamel
  - gears
  - regulator
  - astrolabe
  - chronometer
---

### genome 111: `clockwork_observatory.gear`

> identity: precision horology and mechanical astronomy: brass gear trains, enamel regulator dials, blued-steel hands, ruby jewels, guilloche engraving, and observatory-grade timekeeping instruments translated into a calm interface for measuring cycles, cadence, and orbital order.

**surface**

The surface is an instrument face inside a clockmaker's observatory.

It is not a generic steampunk theme.

It is not a fantasy machine.

It is a disciplined horological interface: enamel plates, brass chapter rings, blued-steel pointers, small ruby bearing points, engraved numerals, exposed gear ratios, and mechanically indexed information.

Core palette:

- `--obsidian-night: #10100E` for the page background, deep case interiors, dial shadows, and modal backdrops.
- `--case-walnut: #3A2114` for rare wooden case framing, drawer-like sidebars, and recessed plinths.
- `--aged-brass: #B88A3B` for primary mechanical trim, gear teeth, active rings, fine borders, and action accents.
- `--brass-dark: #6E5126` for engraved grooves, inactive gears, muted hardware, and dark brass shadows.
- `--brass-light: #D9B66A` for polished edge highlights, selected ticks, and narrow glints.
- `--enamel: #F3ECD8` for primary dial fields, cards, form surfaces, and readable table backgrounds.
- `--enamel-warm: #E4D7B7` for secondary dial wells, hover washes, and old enamel shade.
- `--ink-black: #1B1710` for primary text on light dial surfaces.
- `--ink-brown: #4A3823` for body text, legends, and secondary labels.
- `--ink-faint: rgba(27, 23, 16, 0.38)` for construction marks, inactive labels, and faint chapter ticks.
- `--blued-steel: #244A64` for hands, pointers, focus states, links, selected tracks, and one strong accent.
- `--blued-steel-light: #4F7E9C` for hover on pointer-like controls and small active values.
- `--ruby-jewel: #8F1D2C` for errors, load-bearing pivots, critical alerts, and rare bearing dots.
- `--patina-green: #49694A` for calibrated success, completed cycles, and serviceable status.
- `--glass-sheen: rgba(255, 255, 255, 0.18)` for crystal overlays, bevel highlights, and dial glare.

Typography:

- Primary labels and controls: `"Avenir Next", "Inter", "Segoe UI", system-ui, sans-serif`.
- Label size: `9px` to `12px`.
- Label weight: `700`.
- Label letter-spacing: `0.12em`.
- Label transform: uppercase.
- Dial numerals and section titles: `"Cormorant Garamond", "Libre Baskerville", Georgia, serif`.
- Dial numeral size: `18px` to `44px`, depending on scale.
- Dial numeral weight: `600`.
- Dial numeral letter-spacing: `0.02em`.
- Body text: `"Libre Baskerville", Georgia, serif`, `14px` to `17px`, line-height `1.52`.
- Numeric readings: `"IBM Plex Mono", "SF Mono", Consolas, monospace`, `11px` to `14px`, `font-variant-numeric: tabular-nums`.
- Metadata: sans-serif uppercase, `10px`, `letter-spacing: 0.16em`, `color: var(--ink-faint)`.
- Avoid huge type. The largest display should be a dial reading or regulator numeral, not a marketing headline.

Borders:

- Dial cards: `1px solid var(--aged-brass)`.
- Secondary internal rules: `1px solid rgba(110, 81, 38, 0.28)`.
- Case dividers: `2px solid var(--brass-dark)`.
- Focus outline: `2px solid var(--blued-steel)` with `outline-offset: 3px`.
- Cards and panels use `border-radius: 4px`.
- Dial wells and gauges use true circles with `border-radius: 50%`.
- Buttons use `border-radius: 3px`.
- Inputs use `border-radius: 2px`.
- Never use pill radii. The machine is machined, not soft.

Spacing:

- Page padding: `32px` to `56px`.
- Dial face padding: `28px` to `48px`.
- Panel gap: `20px` to `36px`.
- Dense gear readout gap: `8px` to `12px`.
- Table cell padding: `7px 10px`.
- Control row gap: `10px`.
- Metadata gap: `6px`.
- Use circular compositions and radial groupings when time, progress, sequence, or orbit are central.

Surface treatments:

- Enamel panels use `background: radial-gradient(circle at 50% 35%, #FFF9E8 0%, var(--enamel) 46%, var(--enamel-warm) 100%)`.
- Brass trim uses `background: linear-gradient(135deg, var(--brass-light), var(--aged-brass) 44%, var(--brass-dark))`.
- Crystal overlays may use `box-shadow: inset 0 1px 0 var(--glass-sheen), inset 0 -1px 8px rgba(27, 23, 16, 0.12)`.
- Case surfaces can use `background-image: linear-gradient(90deg, rgba(255,255,255,0.04), transparent 20%, rgba(0,0,0,0.16))`.

**color distribution**

52% enamel and enamel-warm.

Dial faces, main cards, table surfaces, and form fields are warm ivory. The interface should feel readable by daylight through an observatory window.

18% obsidian-night and case-walnut.

These dark areas form the case, recesses, side rails, modal backdrops, and visual depth behind the dials.

14% aged-brass, brass-dark, and brass-light.

Brass appears as structure: chapter rings, ticks, screws, dividers, gear teeth, outlines, active borders, and action controls.

8% ink-black and ink-brown.

Primary text is dark and printed into enamel. Secondary text is brown, like engraved ink rubbed into lines.

4% blued-steel and blued-steel-light.

Blued steel is reserved for hands, pointers, selected states, links, focus, and exact values that are currently being adjusted.

2% ruby-jewel.

Ruby appears only as bearing points, warning pivots, failed calibration, or critical status.

2% patina-green.

Patina green marks successful calibration, stable timing, completed cycles, and verified readiness.

The palette should look expensive but restrained. Shine comes from edge treatment and tiny accents, not from broad metallic gradients everywhere.

**component patterns**

Regulator dial:

- Signature component.
- Use a circular enamel face with a brass chapter ring.
- Container: `aspect-ratio: 1 / 1`, `border-radius: 50%`, `background: radial-gradient(circle at 50% 40%, #FFF9E8, var(--enamel) 52%, var(--enamel-warm))`.
- Outer ring: `box-shadow: 0 0 0 2px var(--aged-brass), 0 0 0 8px var(--brass-dark), inset 0 0 22px rgba(27, 23, 16, 0.14)`.
- Chapter ticks: 60 tiny marks around the dial. Major ticks every 5 increments are `2px` wide and `12px` long; minor ticks are `1px` wide and `6px` long.
- Hands: blued-steel pointer shapes, not generic progress arcs.
- Pivot: small ruby dot, `width: 8px`, `height: 8px`, `border-radius: 50%`, `background: var(--ruby-jewel)`.
- Numerals use serif type and tabular positioning.
- The dial can show time, progress, quality score, generation distance, blend weight, or cycle phase.

Orrery track:

- Use nested circular or elliptical paths for parallel timelines, generation branches, project forks, or orbiting tasks.
- Track stroke: `1px solid rgba(184, 138, 59, 0.42)`.
- Active orbit: `2px solid var(--blued-steel)`.
- Nodes: brass or ruby bearing dots. A selected node gets a blued-steel hand pointing toward it.
- Labels sit outside the ring with small uppercase sans-serif text.
- Use angular connectors and measured arc lengths, not loose curves.

Gear ratio stack:

- Used for configuration, recipe blending, dependency chains, and weighted genomes.
- Each row has left gear glyph or small toothed circle, center ratio text, right calibrated value.
- Row background: transparent on enamel.
- Divider: `1px solid rgba(110, 81, 38, 0.22)`.
- Active row: `border-left: 3px solid var(--aged-brass)` and a blued-steel pointer on the value.
- Avoid decorative gear clutter; every gear must represent a ratio, dependency, or control.

Buttons:

- Primary: `background: var(--aged-brass); color: var(--obsidian-night); border: 1px solid var(--brass-dark); border-radius: 3px; padding: 9px 16px; font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase`.
- Primary shadow: `inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -2px 0 rgba(74,56,35,0.42)`.
- Secondary: `background: transparent; color: var(--ink-brown); border: 1px solid rgba(110, 81, 38, 0.46); border-radius: 3px`.
- Pointer action: `color: var(--blued-steel); border-color: var(--blued-steel)`.
- Destructive: `background: var(--ruby-jewel); color: var(--enamel); border-color: #5E111A`.
- Button labels: `WIND`, `CALIBRATE`, `SET INDEX`, `ENGAGE TRAIN`, `SAVE RECIPE`, `TRACE CYCLE`, `LOCK PHASE`.
- No pill buttons. No oversized CTAs.

Inputs:

- Background: `var(--enamel)`.
- Border: `1px solid rgba(110, 81, 38, 0.48)`.
- Border radius: `2px`.
- Text: `var(--ink-black)`.
- Padding: `8px 10px`.
- Font: body serif for prose, mono for numeric fields.
- Placeholder: `color: rgba(74, 56, 35, 0.46)`.
- Numeric stepper controls should look like tiny brass crown buttons.
- Range sliders should look like a blued-steel hand traveling over a brass scale.

Cards and panels:

- Standard card: enamel field, brass hairline border, `border-radius: 4px`, `padding: 18px 20px`.
- Case card: dark walnut or obsidian interior with brass inset dividers and enamel labels.
- Dial card: circular or octagonal composition when the metric is cyclic.
- Use `box-shadow: 0 14px 30px rgba(16, 16, 14, 0.18), inset 0 1px 0 rgba(255,255,255,0.42)`.
- Top corners can include two tiny brass screw heads, `width: 5px`, `height: 5px`, `border-radius: 50%`.
- Cards should look installed into a case, not floating in glassmorphism space.

Navigation:

- Top rail resembles an engraved chapter strip.
- Background: `var(--obsidian-night)`.
- Active nav item: `color: var(--brass-light)`, `border-bottom: 2px solid var(--aged-brass)`.
- Inactive nav: `color: rgba(243, 236, 216, 0.66)`.
- Nav labels are uppercase, `font-size: 10px`, `letter-spacing: 0.16em`.
- For mode switching, use a segmented brass arc or small indexed tabs labeled `DIAL`, `TRAIN`, `PHASE`, `LOG`, `SERVICE`.

Headers:

- Primary headers use a quiet serif title and a tiny uppercase calibration line.
- Example layout: serif title left, mono timestamp right, brass rule beneath.
- Title size: `28px` to `38px`, not larger.
- Subtitle or eyebrow: uppercase sans, `10px`, `letter-spacing: 0.18em`, `color: var(--brass-dark)`.
- Header dividers should be `1px solid var(--aged-brass)` or a measured row of ticks.

Footers:

- Footer resembles an engraved maker's plate.
- Background: `var(--obsidian-night)`.
- Text: uppercase sans or mono, `10px`, `color: rgba(243, 236, 216, 0.62)`.
- Include maker mark, calibration date, serial number, and service interval.
- Example: `MOTIF REGULATOR 111 / CAL. 2026-06-05 / TRAIN A-04`.

Lists:

- Ledger-like vertical stack on enamel.
- Row height: `36px` to `48px`.
- Divider: `1px solid rgba(110, 81, 38, 0.2)`.
- Left side: small chapter number or gear index.
- Center: item name in serif or sans depending on density.
- Right: tabular value in mono.
- Selected row uses a blued-steel pointer or brass bracket, not a full-color fill.

Tables:

- Background: `var(--enamel)`.
- Header row: uppercase sans, `font-size: 10px`, `letter-spacing: 0.14em`, `color: var(--brass-dark)`.
- Body: serif or mono, `13px`.
- Cell border: `1px solid rgba(110, 81, 38, 0.18)`.
- Numeric columns right-align with tabular nums.
- Every fifth row can receive a faint brass tick in the left gutter to mimic a minute scale.
- Sort state should use a small blued-steel hand, not a generic triangle.

Dividers:

- Primary section divider: brass rule with small end ticks.
- Secondary divider: faint engraved line, `1px solid rgba(110, 81, 38, 0.22)`.
- Radial divider: circular tick track around dials.
- Do not use thick modern separators or neon glows.

Modals and overlays:

- Modal surface: enamel plate set into dark case.
- Backdrop: `rgba(16, 16, 14, 0.72)`.
- Modal border: `2px solid var(--aged-brass)`.
- Header strip: dark case with brass title.
- Close control: small brass crown button, square or circular, never a floating pill.
- Confirmation modals can show an engraved winding key or ruby pivot as a status mark.

Badges and status:

- Calibrated: `background: rgba(73, 105, 74, 0.16); color: var(--patina-green); border: 1px solid var(--patina-green)`.
- Pending: `background: rgba(184, 138, 59, 0.12); color: var(--brass-dark); border: 1px solid var(--aged-brass)`.
- Critical: `background: rgba(143, 29, 44, 0.12); color: var(--ruby-jewel); border: 1px solid var(--ruby-jewel)`.
- Active: `background: rgba(36, 74, 100, 0.12); color: var(--blued-steel); border: 1px solid var(--blued-steel)`.
- Badge radius: `2px`; label text uppercase.

Progress and meters:

- Prefer circular dials, sub-dials, and arc tracks.
- Linear progress can look like a rack gear: small rectangular teeth filled left to right.
- Use measured tick labels at 0, 25, 50, 75, 100 or time-like intervals.
- Avoid amorphous loading bars.

**interaction language**

Hover:

- Buttons brighten brass slightly: `filter: brightness(1.08)`.
- Secondary buttons shift border to `var(--aged-brass)` and text to `var(--ink-black)`.
- Dial nodes show a blued-steel pointer and a small tooltip plate.
- Table rows receive `background: rgba(184, 138, 59, 0.08)`.
- Gear controls rotate at most `6deg`, only when the control itself is hovered.

Active:

- Buttons press down with `transform: translateY(1px)`.
- Brass button shadow compresses to `inset 0 2px 4px rgba(27,23,16,0.28)`.
- Winding or calibration controls can rotate `12deg` during press.
- Dial hand snaps to the selected tick.

Focus:

- Use `outline: 2px solid var(--blued-steel); outline-offset: 3px`.
- Inputs add `box-shadow: 0 0 0 3px rgba(36, 74, 100, 0.16)`.
- Dial focus shows a full blued-steel chapter ring around the active control.
- Focus must be visible against enamel and dark case surfaces.

Selected:

- Selected items get a brass bracket and blued-steel pointer.
- Selected dials show `box-shadow: 0 0 0 2px var(--blued-steel), 0 0 0 8px rgba(36,74,100,0.12)`.
- Selected rows use light enamel-warm wash, not a saturated fill.
- Selected badges may use active blued-steel styling.

Disabled:

- Opacity: `0.42`.
- Desaturate brass via `filter: grayscale(0.35)`.
- Disable pointer animations.
- Disabled controls look unwound, not hidden.

Drag:

- Dragged cards become lifted brass plates with `box-shadow: 0 18px 34px rgba(16,16,14,0.28)`.
- Drag cursor: `grabbing`.
- Drop targets show a dashed brass rack line: `1px dashed rgba(184, 138, 59, 0.62)`.
- Reordering a stack should feel like moving gear cassettes into alignment.

**motion & feedback**

Motion is mechanical, indexed, and limited.

Transitions:

- Standard color and shadow transitions: `140ms cubic-bezier(0.22, 0.61, 0.36, 1)`.
- Mechanical snap transitions: `90ms steps(2, end)` for tick changes, indexed tabs, and gear selectors.
- Dial hand movement: `420ms cubic-bezier(0.2, 0.8, 0.18, 1)`.
- Gear rotation: `600ms cubic-bezier(0.16, 1, 0.3, 1)`.
- Avoid slow floaty motion. Everything has bearings and stops.

Loading:

- Use a visible escapement tick: a small blued-steel anchor rocks left and right over a brass wheel.
- Keyframe: `tick-tock` alternates `transform: rotate(-8deg)` to `rotate(8deg)` using `steps(2, end)` over `1s`.
- Circular loaders use a rotating gear ring with 60 ticks. It advances in discrete steps, not smooth spin.
- Loading copy: `Synchronizing train`, `Winding regulator`, or `Indexing phase`.

Success:

- A dial hand lands on the marked tick.
- Patina-green badge appears with `transition: 140ms ease`.
- A small brass gear performs one `18deg` indexed rotation.
- Copy stays concise: `Calibrated`, `Cycle locked`, `Recipe wound`.

Error:

- Ruby jewel glows once with `box-shadow: 0 0 0 4px rgba(143,29,44,0.16)`.
- Dial hand stops short of the target tick.
- Critical row receives a ruby left bracket.
- Do not shake the full layout. Mechanical errors are precise and localized.

Page entry:

- Case fades in over `160ms`.
- Dials index into place one after another with `80ms` stagger.
- Chapter ticks can draw around the dial once, `stroke-dashoffset` from full to zero over `700ms`.
- Do not run continuous background animation after entry except small active clock hands when the UI is explicitly time-based.

**atmosphere**

The atmosphere is quiet, measured, and almost tactile.

Background:

- Page background begins with `var(--obsidian-night)`.
- Main work surfaces are enamel plates installed into the dark case.
- Use a faint radial vignette: `radial-gradient(circle at 50% 18%, rgba(217,182,106,0.12), transparent 32%)`.
- Use subtle case grain only on dark walnut surfaces, never across all panels.

Texture:

- Enamel surfaces can include a barely visible radial warmth and tiny hairline cracks at low opacity.
- Brass rings use narrow gradients and inset shadows, not loud gold fills.
- Guilloche patterns are allowed as ultra-thin repeating radial or conic lines at `0.06` opacity.
- Screws, jewels, pivots, and ticks should be functional anchors.

Light:

- Highlights are small: one glass sheen on a dial, one brass edge on a button, one ruby glint on a critical pivot.
- Avoid broad bloom, neon, smoky overlays, or cinematic haze.
- The UI should feel lit by a bench lamp and moonlight, not by RGB effects.

Composition:

- Favor central dials, flanking sub-dials, ledger strips, and horizontal maker plates.
- For dashboards, put the principal metric in a regulator dial and supporting metrics in smaller sub-dials or ratio stacks.
- For generation workflows, represent variants as orbiting nodes or gear trains.
- For project boards, represent accepted and rejected styles as indexed trays or locked/unlocked cogs.

**editorial voice**

The voice is a clockmaker-observatory log: exact, calm, material, and temporal.

Button labels:

- `WIND`
- `CALIBRATE`
- `LOCK PHASE`
- `TRACE CYCLE`
- `SET HAND`
- `SAVE RECIPE`
- `ENGAGE TRAIN`
- `OPEN CASE`

Headings:

- `Regulator Calibration`
- `Orrery Phase Map`
- `Gear Train Ratios`
- `Chronometer Drift`
- `Recipe Escapement`
- `Generation Distance`
- `Service Plate`
- `Cycle Ledger`

Metadata:

- `CAL. 2026-06-05 / TRAIN A-04`
- `Beat error: +0.8s/day`
- `Jewels: 17 / phase locked`
- `Ratio 48:16 / engaged`
- `Serial MOTIF-111-GR`
- `Observed 23:14 LMT`

Placeholders:

- `Enter calibration note...`
- `Select a phase index...`
- `Set blend weight...`
- `Choose regulator target...`
- `Name this style recipe...`
- `Search cycle ledger...`

Empty states:

- `No cycles have been indexed.`
- `The train is unwound.`
- `No phase observations recorded.`
- `No recipes locked in the case.`
- `No variants orbit this dial yet.`

Error messages:

- `Calibration failed: hand stopped short.`
- `Gear ratio out of range.`
- `Phase cannot be locked from this state.`
- `Recipe train has a missing wheel.`
- `Contrast bearing is below tolerance.`

Success messages:

- `Regulator calibrated.`
- `Phase locked.`
- `Recipe wound and stored.`
- `Gear train engaged.`
- `Observation indexed.`

Tone rules:

- Prefer mechanical verbs: wind, lock, index, engage, trace, set, calibrate, service.
- Prefer measured nouns: phase, train, ratio, bearing, dial, chapter, hand, ledger, interval.
- Use sentence case for prose and uppercase for controls, badges, and maker plates.
- Never use hype copy, sales language, or emoji.

**cursor & selection**

Cursor:

- Global cursor: `default`.
- Buttons, nav items, dial nodes, and gear controls: `pointer`.
- Draggable gear stacks and reorder handles: `grab`; active drag: `grabbing`.
- Dial adjustment surfaces: `crosshair` or `ew-resize` when the interaction maps to a hand or scale.
- Disabled controls: `not-allowed`.

Selection:

- `::selection { background: var(--blued-steel); color: var(--enamel); }`.
- On dark case surfaces, selection can use `background: var(--aged-brass); color: var(--obsidian-night);`.
- Highlighted text should feel like a blued-steel hand passing over enamel.
- Do not use bright blue browser-default selection.

**when to reach for this genome**

Use `clockwork_observatory.gear` when the prompt asks for timekeeping, scheduling as a physical mechanism, calibration, phased workflows, recipe weighting, cyclic dashboards, generation distance, blend ratios, observatory tools, clockmaker precision, mechanical systems, gear trains, or a UI that should feel like a high-end analog instrument for measuring change over time.

Reach for it when the strongest cues are brass, enamel, blued steel, ruby pivots, regulator dials, orreries, chronometers, astrolabes, chapter rings, gear ratios, winding, indexing, cycles, phases, cadence, drift, or mechanical craft.

It is especially strong for Motif features such as pinned genome blends, style recipes, variant distance controls, quality scoring dials, project timelines, fork maps, and production readiness gauges because those concepts naturally map to ratios, dials, orbits, and calibrated mechanisms.

Choose it for interfaces that need elegance plus legibility: planning tools, observability timelines, audio mastering meters, habit cadence dashboards, celestial scheduling, recipe systems, museum interactives, watch collecting, precision manufacturing, and design-system calibration.

Do not choose it for generic Victorian communication offices, Morse code, telegram forms, mahogany paper ledgers, or Western Union copy; use `telegraph_office.wire`.

Do not choose it for dark astronomical plates, star catalogs, Copernican engraving, lunar maps, or monochrome orbital diagrams; use `celestial_plate.obs`.

Do not choose it for modern oscilloscope chassis, multimeters, phosphor screens, test equipment, or chunky rubberized controls; use `precision_instrument.met`.

Do not choose it for railway station boards, split-flap destinations, platform badges, or printed Bradshaw timetable density; use `split_flap.rail`.

Do not choose it for general industrial, metallic, steampunk, or fantasy machinery if the interface does not revolve around calibration, time, ratio, phase, or precision mechanical order.

**anti-patterns - this genome NEVER:**

- Never becomes generic steampunk with decorative pipes, smoke, goggles, rivets everywhere, or theatrical Victorian clutter.
- Never uses broad gold gradients as backgrounds; brass appears as trim, ticks, screws, rings, gears, and small controls.
- Never uses pill buttons, rounded blob cards, soft SaaS panels, or inflated marketing hero shapes.
- Never uses neon glow, cyberpunk color, RGB lighting, holographic glass, or blue-purple AI gradients.
- Never uses huge display typography or poster layouts; hierarchy is measured through dials, plates, ticks, and engraved labels.
- Never animates with floaty easing, bouncy overshoot, parallax drift, or continuous decorative spinning.
- Never treats gears as meaningless ornament; every gear, dial, pointer, or jewel must map to state, ratio, timing, or control.
- Never uses casual chatty voice, hype slogans, emoji, or whimsical copy.
- Never hides keyboard focus or relies on tiny decorative contrast; enamel text, brass rules, and blued-steel focus must remain readable.
- Never copies `telegraph_office.wire`, `precision_instrument.met`, `celestial_plate.obs`, or `split_flap.rail`; this genome is horological calibration, not communications, lab equipment, astronomy engraving, or rail scheduling.
