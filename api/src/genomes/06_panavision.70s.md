---
id: "06"
name: panavision.70s
keywords:
  - cinematic
  - warm
  - analog
  - film
  - vintage equipment
  - 70s
  - NASA
  - tactile
  - Dieter Rams
  - retro
  - camera
  - warm tech
  - synthesizer
  - amplifier
---

### genome 06: `panavision.70s`

> identity: warm cinematic tech. 70s analog camera equipment, NASA control rooms, and Dieter Rams industrial design. squircles, backlit toggles, and the comforting hum of expensive equipment.

**surface**

The surface is warm industrial equipment made for serious creative work.

It should feel like a 1970s camera control panel, mission-room console, studio monitor deck, or precision media tool that has been handled for decades and still feels expensive.

Core CSS variables:

- `--espresso: #2D2319` - deep brown-black for structural plates, text, major buttons, and hardware edges.
- `--espresso-soft: #453528` - raised brown casing, hover depth, and secondary dark surfaces.
- `--cream: #F5EDE0` - main molded-plastic body and primary page surface.
- `--cream-warm: #FFF4E3` - highlight plane on cards, inset wells, hero copy blocks, and input fill.
- `--orange: #E69138` - backlit LED amber, active state, primary CTA, focus ring, meter fill.
- `--orange-glow: rgba(230,145,56,0.38)` - glow halo for active LEDs, backlit nav, and VU meter fill.
- `--rose: #F4CCCC` - soft alert backing, notification badges, calibration warning paper.
- `--claret: #A64D79` - rare deep accent for destructive or editorial emphasis.
- `--khaki: #C4B6A0` - dividers, inactive toggle tracks, meter rails, tertiary labels.
- `--khaki-deep: #8F806C` - engraved labels, inactive marks, secondary borders.
- `--lens-glass: rgba(45,35,25,0.16)` - smoked glass overlays and meter windows.
- `--film-grain: rgba(45,35,25,0.045)` - subtle noise, not dirt.

Typography:

- Primary family: `"Inter", "Helvetica Neue", Arial, sans-serif`.
- Optional display family: `"ITC Avant Garde Gothic", "Futura", "Avenir Next", "Inter", sans-serif` when available.
- No monospace as a primary voice. Monospace may appear only in tiny readout values such as `TAKE 03` or `FREQ 108.4`.
- Headings: 24px to 48px, `font-weight: 650-750`, `line-height: 0.95-1.08`, `letter-spacing: -0.02em`.
- Section headers: 15px to 22px, `font-weight: 650`, `line-height: 1.15`.
- Body: 13px to 15px, `font-weight: 500-600`, `line-height: 1.45-1.65`, sentence case.
- Labels: 9px to 11px, `font-weight: 700`, `text-transform: uppercase`, `letter-spacing: 0.12em`.
- Readouts: 10px to 13px, tabular numerals, `letter-spacing: 0.04em`, often in orange or khaki.

Borders and radius:

- Major panels: `2px solid var(--espresso)`.
- Internal dividers: `1px solid var(--khaki)`.
- Fine engraved separators: `1px solid rgba(45,35,25,0.16)`.
- Standard radius: `12px`.
- Large module radius: `16px`.
- Small controls: `8px`.
- LED dots and knobs: `50%`.
- Never 0px corners. Never `9999px` pill geometry except tiny switch tracks that are explicitly hardware toggles.

Spacing:

- Base unit: 8px.
- Page padding: `24px clamp(20px, 4vw, 56px)`.
- Panel padding: `20px 24px`.
- Compact control padding: `10px 14px`.
- Wide cinematic gaps: `16px`, `24px`, `32px`.
- Prefer wide horizontal modules: `aspect-ratio: 16 / 7`, `grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.8fr)`.
- Stacks feel like equipment banks: one broad chassis, then inset control clusters, then readout strip.

Surface construction:

- Cream panels should look molded, not paper.
- Espresso regions read as faceplates screwed into the cream housing.
- Orange light should appear contained behind glass, not sprayed across the page.
- Use subtle inset shadows for tactile depth: `box-shadow: inset 0 2px 8px rgba(45,35,25,0.12)`.
- Outer panels can use soft environmental shadows: `0 18px 45px rgba(45,35,25,0.18)`, never hard offsets.
- Images use warm film treatment: `filter: sepia(0.16) contrast(1.06) saturate(1.08)`.

**color distribution**

- 44% cream and cream-warm - the molded equipment shell and warm page field.
- 28% espresso and espresso-soft - text, faceplates, major controls, structural borders.
- 14% khaki and khaki-deep - dividers, inactive rails, legends, secondary surfaces.
- 9% orange and orange-glow - active indicators, primary actions, focus, meter fill, warm status.
- 3% rose - soft alerts, calibration notes, notification surfaces.
- 2% claret - rare high-contrast accent, destructive state, or cinematic editorial mark.

The screen should read warm cream and espresso first.

Orange is a lamp, not a brand wash.

Rose and claret are the color of aged film packaging and control-room warning slips; they must never dominate.

**component patterns**

Buttons:

- Default button: `background: var(--espresso); color: var(--cream); border: 2px solid var(--espresso); border-radius: 12px; padding: 11px 18px; font-weight: 700; letter-spacing: 0.04em`.
- Primary button: `background: var(--orange); color: var(--espresso); border-color: var(--espresso); box-shadow: 0 0 0 1px rgba(255,255,255,0.18) inset, 0 0 18px var(--orange-glow)`.
- Secondary button: `background: var(--cream-warm); color: var(--espresso); border-color: var(--espresso)`.
- Ghost button: no fill, espresso text, khaki border, soft cream hover.
- Icon buttons: square `40px`, radius `10px`, espresso faceplate or cream body depending on context.
- Button surface overlay: `background-image: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(0,0,0,0.08))`.
- Button labels use title case or concise equipment verbs, never bracketed terminal text.

Inputs:

- Base: `background: var(--cream-warm); color: var(--espresso); border: 2px solid var(--espresso); border-radius: 12px; padding: 12px 16px`.
- Label: uppercase 10px, khaki-deep, above the field.
- Placeholder: `color: var(--khaki-deep); opacity: 0.75`.
- Focus: border orange, `box-shadow: 0 0 0 3px var(--orange-glow), inset 0 2px 6px rgba(45,35,25,0.08)`.
- Readout inputs can sit inside smoked glass: `background: rgba(45,35,25,0.10); color: var(--orange)`.
- Search fields can include a small lens glyph or aperture tick, but must still feel like hardware.

Cards and panels:

- Cards are equipment modules, not floating SaaS cards.
- Shell: `background: var(--cream); border: 2px solid var(--espresso); border-radius: 12px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 8px rgba(45,35,25,0.10)`.
- Header strip: espresso faceplate with cream or orange text; `padding: 10px 16px; border-radius: 10px 10px 0 0`.
- Body: cream-warm or cream, `padding: 18px 20px`.
- Panels may include small screw heads: 6px circles at corners in khaki-deep with inset shadow.
- Never nest card inside card. Use inset wells or divider rules within one chassis.

Navigation:

- Preferred nav: horizontal faceplate strip with compact mode selectors.
- Nav container: espresso background, radius 12px, padding 6px, border 2px espresso.
- Nav item: cream text, uppercase 10px labels or title-case product sections.
- Active item: orange backlit underline, orange text, or depressed cream tab with `box-shadow: inset 0 2px 5px rgba(45,35,25,0.28)`.
- Secondary nav can be a row of vertical toggle switches.
- Avoid hamburger menus unless required by viewport; mobile nav should collapse into an equipment drawer, not a generic floating menu.

Headers:

- Hero/header regions should feel cinematic-wide.
- Use broad 16:9 or 21:9 image bands, warm product stills, control-room crops, or abstract equipment closeups.
- Header faceplate: `background: var(--espresso); color: var(--cream); border-bottom: 2px solid var(--orange)`.
- Metadata lives in the right corner as small readouts: `TAKE 03`, `CH.01`, `REC`, `DUR 02:34`.
- H1 can be large but tight: 36-48px, warm cream or espresso depending on surface.

Footers:

- Footer is a back panel or status rail.
- Base: espresso background, orange and khaki text, top border 2px espresso or orange.
- Include tiny status readouts: `STANDBY`, `FREQ 108.4`, `ARCHIVE SYNC`, `POWER NOMINAL`.
- Footer links are understated, not social-icon clutter.

Lists:

- Rows separated by khaki dividers: `border-bottom: 1px solid var(--khaki)`.
- Active row gets `border-left: 4px solid var(--orange)` and low orange backing: `rgba(230,145,56,0.10)`.
- Row height: 44px to 60px.
- Index markers can be film reel style: `01`, `02`, `TAKE 03`, `AUX 04`.
- Avoid plain bullet lists in product panels; use labeled rows, channels, or cue sheets.

Tables:

- Wrapper: rounded 12px border, espresso outline, overflow hidden.
- Header: espresso background, cream text, uppercase labels, 10px.
- Cells: cream background, espresso text, `padding: 10px 14px`.
- Alternating rows: `background: rgba(196,182,160,0.18)`.
- Numeric columns: tabular numerals, right aligned.
- Highlighted values: orange text with subtle glow, not neon.

Dividers:

- Standard divider: `1px solid var(--khaki)`.
- Major divider: `2px solid var(--espresso)`.
- Equipment seam: double rule made from espresso line plus 4px gap plus khaki hairline.
- Do not use decorative flourishes or zine tear lines.

Modals and overlays:

- Modal shell: `background: var(--cream); border: 2px solid var(--espresso); border-radius: 16px; box-shadow: 0 22px 70px rgba(45,35,25,0.34), inset 0 1px 0 rgba(255,255,255,0.4)`.
- Header: espresso faceplate with orange status light.
- Backdrop: `rgba(45,35,25,0.54)` with no heavy blur. A slight warm dim is enough.
- Close control: small square cream button on espresso plate.
- Critical modal uses claret border and rose backing, not screaming red.

Badges and tags:

- Base: `border-radius: 8px; padding: 4px 8px; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase`.
- Standby: khaki backing, espresso text.
- Active: orange fill, espresso text, orange glow.
- Soft notice: rose fill, espresso text.
- Claret: deep accent with cream text for rare warnings.
- Badges should look like adhesive labels or backlit indicators, not pills.

Toggle switches:

- Signature element.
- Vertical switch track: `width: 18px; height: 34px; border: 2px solid var(--espresso); border-radius: 9px; background: var(--khaki); box-shadow: inset 0 2px 5px rgba(45,35,25,0.35)`.
- Indicator: `width: 12px; height: 12px; border-radius: 50%; background: var(--cream); transform: translateY(3px)`.
- On state: indicator moves to top or bottom consistently, `background: var(--orange); box-shadow: 0 0 12px var(--orange-glow)`.
- Use for settings, power, modes, and filters.
- Do not replace every checkbox with a toggle; only use when the action feels like powering or routing.

VU meters and progress:

- Track: `height: 6px; background: var(--khaki); border: 1px solid var(--espresso); border-radius: 3px`.
- Fill: orange, `box-shadow: 0 0 8px var(--orange-glow)`.
- Ticks: repeating linear gradient at 8px intervals in espresso at 22% opacity.
- Label: small uppercase above or right, not inside the bar.
- Progress is analog level, not corporate completion.

Knobs and dials:

- Circular controls are allowed but restrained.
- Well: `background: var(--espresso); border-radius: 50%; padding: 6px; box-shadow: inset 0 3px 8px rgba(0,0,0,0.35)`.
- Knob: cream or khaki circle with a 2px espresso indicator line.
- Active/focus ring glows orange.
- Knobs should appear in groups of two to four, like camera or audio equipment.

Media and imagery:

- Product or hero imagery should show real object, interface state, film frame, camera surface, tape deck detail, or warm workspace.
- Use rounded 12px frame, espresso border, and subtle sepia.
- Captions use small uppercase labels and readout metadata.
- Avoid stock-like blurred atmosphere when the UI needs inspection.

**interaction language**

Hover:

- Buttons gain warm light: `box-shadow: 0 0 14px var(--orange-glow), inset 0 1px 0 rgba(255,255,255,0.20)`.
- Cream cards subtly deepen: `box-shadow: inset 0 2px 10px rgba(45,35,25,0.12), 0 10px 24px rgba(45,35,25,0.12)`.
- Text links gain orange underline and `text-shadow: 0 0 5px var(--orange-glow)`.
- No scaling beyond `translateY(-1px)` for raised controls.

Active / pressed:

- Buttons depress: `transform: translateY(1px); box-shadow: inset 0 3px 8px rgba(45,35,25,0.35)`.
- Primary action inverts to espresso-on-orange and holds glow for 120ms.
- Toggle and knob states feel mechanical, not springy.
- No bounce and no elastic overshoot.

Focus:

- Use `outline: 2px solid var(--orange); outline-offset: 3px`.
- Inputs add orange glow ring.
- Focus must remain visible over both espresso and cream surfaces.
- Never remove outline without replacement.

Selected:

- Selected nav, row, or chip gets orange indicator plus depressed inset shadow.
- Selected panels use an orange status light in the header.
- Selected table rows use left orange rail and warm backing.
- Selection is visible by both color and shape.

Disabled:

- `opacity: 0.38; filter: grayscale(0.45) saturate(0.75)`.
- Disabled controls lose orange glow and become khaki/espresso only.
- Cursor remains `default`, not `not-allowed`, unless the product explicitly needs an unavailable control cue.

Drag:

- Draggable objects use `cursor: grab`; active drag uses `grabbing`.
- Drag source lifts with `box-shadow: 0 14px 32px rgba(45,35,25,0.26), 0 0 18px var(--orange-glow)`.
- Drop target shows orange outline and khaki inset backing.
- Do not rotate or wobble dragged items.

Validation states:

- Success: orange or muted green-adjacent khaki is not preferred; use orange confirmation light and text.
- Warning: rose backing with claret label.
- Error: claret border, rose surface, direct copy.
- Required fields: small orange tick or label, never a large red asterisk swarm.

**motion & feedback**

Motion is analog, smooth, and tactile.

Default transition:

- `transition: color 0.22s ease, background-color 0.22s ease, border-color 0.22s ease, box-shadow 0.28s ease, transform 0.18s ease`.
- Larger panel reveals: `0.4s cubic-bezier(0.16, 1, 0.3, 1)`.
- Toggle movement: `0.24s cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Meter fill: `0.55s ease-out`.
- Never use instant changes for normal interactions.
- Never use spring bounce, confetti, or kinetic cartoon motion.

Loading:

- Use a VU-meter sweep: orange fill travels across a khaki track in `1.4s ease-in-out infinite`.
- Alternative: a single orange pilot light pulses from opacity 0.35 to 1 over 1.2s.
- Text examples: `Warming signal`, `Threading archive`, `Cueing playback`, `Calibrating lens`.
- Avoid spinners and skeleton shimmer.

Success:

- Orange lamp brightens: `box-shadow: 0 0 28px var(--orange-glow)` for 260ms.
- Status text appears as `Signal acquired` or `Recorded`.
- Meter needle can settle to target over 400ms.
- No celebration graphics.

Warning:

- Rose panel surface and claret label.
- A small amber light can blink twice at 180ms intervals.
- Do not flood the whole panel with claret.

Error:

- Border shifts to claret for 600ms.
- Copy is short and operational.
- Optional single meter drop or pilot-light blackout for 120ms.
- No shake animation.

Page enter:

- The chassis fades in from cream with `opacity: 0 -> 1` and `transform: translateY(8px) -> 0` over 420ms.
- Child modules can stagger by 60ms.
- Hero media can appear as a warm exposure fade, not a slide carousel.

**atmosphere**

The atmosphere is late-afternoon control room warmth.

It should feel like equipment humming under warm bulbs, not a brown website theme.

Background:

- Page base: `var(--cream)`.
- Subtle molded gradient: `linear-gradient(180deg, rgba(255,255,255,0.30) 0%, rgba(45,35,25,0.045) 100%)`.
- Optional grain overlay at 1-2% opacity using CSS noise or a fine radial pattern.
- Avoid visible bokeh, blobs, or decorative gradient orbs.

Panel light:

- Cream panels get inset warmth: `box-shadow: inset 0 0 40px rgba(45,35,25,0.08)`.
- Espresso panels can use a faint top highlight: `inset 0 1px 0 rgba(255,244,227,0.12)`.
- Orange glow is localized around lights, active text, meters, and toggles.

Texture:

- Molded plastic: diagonal or vertical gradient with low contrast.
- Smoked glass: translucent espresso overlay with orange text behind it.
- Film grain: barely perceptible, 1-2%, never dusty or grungy.
- Screw heads, seams, and faceplates are acceptable if they help the equipment metaphor.

Composition:

- Prefer cinematic wide modules over tall card stacks.
- Use one hero object or control surface as the first-viewport signal.
- Let the next section peek below heroes on desktop and mobile.
- Dense dashboards should still have broad horizontal control bands.
- Marketing layouts must still look like a usable product surface, not a generic landing page.

Contrast with neighbors:

- Unlike `listening_room.hifi`, this is not centered on walnut, vinyl, album language, or listening ritual.
- Unlike `precision_instrument.met`, this is not dark machined metal, all-monospace, or deep bench-equipment chassis.
- Unlike `lab_manual.80s`, this welcomes rounded molded corners, warmth, images, and smooth transitions.

**editorial voice**

The voice is controlled, cinematic, and equipment-like.

It should feel like a director, engineer, or console operator speaking in concise labels.

Button labels:

- `Record`
- `Playback`
- `Transmit`
- `Archive`
- `Review Take`
- `Cue Signal`
- `Accept`
- `Eject`
- `Calibrate`
- `Open Bay`
- `Route Output`

Headings:

- `Control Room`
- `Signal Output`
- `Archive Bay`
- `Camera Deck`
- `Session Log`
- `Warm Start`
- `Take Review`
- `Studio Console`
- `Lens Control`

Metadata:

- `CH.01`
- `FREQ 108.4`
- `TAKE 03`
- `DUR 02:34:07`
- `REC ON`
- `SYNC 24 FPS`
- `ROLL B`
- `BAY 04`
- `LENS 50MM`
- `ISO 400`

Placeholders:

- `Enter signal name`
- `Search archive`
- `Cue subject`
- `Route destination`
- `Lens note`
- `Tape label`
- `Session code`

Empty states:

- `No signal detected.`
- `Archive bay is empty.`
- `Standby.`
- `No takes queued.`
- `No route selected.`
- `Deck is idle.`

Error messages:

- `Signal lost.`
- `Input rejected.`
- `Frequency mismatch.`
- `Tape bay unavailable.`
- `Route cannot be opened.`
- `Calibration drift detected.`

Success messages:

- `Recorded.`
- `Archived.`
- `Signal acquired.`
- `Take accepted.`
- `Deck synchronized.`
- `Route open.`
- `Lens calibrated.`

Writing rules:

- Use title case for buttons and short headings.
- Use sentence case for body text.
- Use uppercase only for tiny labels, badges, and readout codes.
- Keep copy warm but not chatty.
- Avoid command-line brackets, error-code slang, and government dossier severity.
- Avoid music-collector language unless the product is explicitly audio.

**cursor & selection**

- Global cursor: `default`.
- Buttons, links, toggles, cards with actions: `pointer`.
- Knobs and draggable sliders: `grab`; dragging state: `grabbing`.
- Text fields: `text`.
- Disabled controls: `default`.
- No novelty cursor by default.
- Optional custom cursor only for highly visual creative surfaces, and it must be small, warm-toned, and unobtrusive.

Selection:

```css
::selection {
  background: var(--orange);
  color: var(--espresso);
}
```

Selected text over espresso surfaces may use `background: var(--cream); color: var(--espresso)` if orange hurts contrast.

Selected UI states should combine orange light, inset/depressed shape, and a label change.

**anti-patterns - this genome NEVER:**

1. never uses sharp 0px corners. the smallest normal radius is 8px, the standard module radius is 12px.
2. never uses pure white or pure black as primary surfaces. the world is cream, espresso, khaki, and warm light.
3. never makes orange a full-page gradient or brand wash. orange is contained illumination from LEDs, meters, toggles, and active rails.
4. never uses monospace as the main typeface. tiny technical readouts can use tabular numerals, but the interface voice is proportional sans.
5. never uses hard offset shadows, sticker shadows, or zine-style slap effects. depth is soft, molded, and physically plausible.
6. never uses neon cyan, electric blue, acid green, or cold saturated violet. cool colors break the warm analog equipment identity.
7. never uses instant state changes for normal controls. interactions ease like dials, switches, and warm lamps.
8. never uses terminal copy such as `[run]`, `err:`, `processing...`, or lowercase command prompts.
9. never turns into a literal music-room interface unless the prompt asks for hi-fi or vinyl. for album, turntable, and listening ritual, prefer `listening_room.hifi`.
10. never turns into a dark all-metal measurement chassis. for oscilloscope, multimeter, machined dials, and all-monospace instrument labels, prefer `precision_instrument.met`.
11. never uses oversized pill buttons, floating action buttons, glassmorphism, or frosted SaaS panels.
12. never treats grain, scratches, or sepia as the whole design. the equipment structure must carry the style.

**when to reach for this genome**

Use `panavision.70s` when the prompt asks for warm cinematic tech, analog product controls, studio hardware, camera equipment, NASA-era control rooms, Dieter Rams warmth, vintage industrial product UI, tactile toggles, backlit amber indicators, or a modern product that should feel like expensive 1970s equipment without becoming kitsch.

Reach for it when the object world includes film cameras, tape decks, studio consoles, control-room status panels, warm LEDs, molded plastic, espresso faceplates, cream chassis, khaki dividers, orange pilot lights, analog meters, and calmly premium product language.

Use it for landing pages, dashboards, media tools, creative production apps, camera/lens controls, archive products, podcast tooling, hardware-inspired settings, audio-adjacent but not vinyl-specific products, and creator tools that need warmth and tactility.

Do not use it for vinyl collection, turntable operation, walnut audio dens, album tracklists, or hi-fi listening ritual; use `listening_room.hifi`.

Do not use it for dark machined metal chassis, Tektronix/Fluke-style measurement tools, circular calibration dials, and all-monospace panel labels; use `precision_instrument.met`.

Do not use it for white redacted documents, clinical file grids, or security-clearance forms; use `lab_manual.80s`.

Do not use it for covert amber-on-black command terminals; use `underground_terminal.crt`.

It is strongest when the interface should feel like a complete physical product: a control panel you can touch, a lamp you can watch warm up, and a calm operator surface that belongs in a studio or mission room.

**page archetype guidance**

Landing page:

- First viewport should show the product or control surface immediately.
- Use a cinematic-wide hero, warm treated image, and an orange primary CTA.
- Keep H1 as the product name or literal offer; let supporting copy carry the value proposition.
- Below the fold, show espresso-on-cream modules and one signature toggle or meter row.

Dashboard:

- Build an equipment-bank grid with broad horizontal modules.
- Use orange status lights in panel headers.
- Place key values in smoked-glass readout wells.
- Use VU meter progress bars for throughput, usage, audio, or session status.
- Avoid generic KPI cards floating on a blank surface.

Media player or creative tool:

- Use a tape-deck-like transport strip.
- Primary controls are large tactile buttons: `Record`, `Playback`, `Cue`, `Eject`.
- Timeline can be a warm meter or film strip.
- Metadata reads as takes, channels, duration, FPS, bay, and route.

Settings or configurator:

- Use vertical toggles, knobs, and labeled bays.
- Group related controls in one faceplate.
- Active options glow orange.
- Disabled modules fade to khaki with no glow.

Pricing or plan comparison:

- Use three cream chassis cards, not glossy SaaS cards.
- Recommended plan gets espresso faceplate and orange lamp.
- Feature rows use khaki dividers and small readout labels.
- Billing toggle is a physical switch, not a pill segmented control.

**signature techniques**

Squircle chassis:

- Apply `border-radius: 12px` to cards, buttons, and panels.
- Use `16px` for modals or hero modules.
- The radius should feel molded, like camera equipment housing.

Backlit amber:

- Active controls use `box-shadow: 0 0 18px var(--orange-glow)`.
- Amber text can use `text-shadow: 0 0 6px var(--orange-glow)`.
- The glow is local and restrained.

Molded plastic overlay:

- Add a subtle top highlight and bottom shade to buttons and panels.
- Use `linear-gradient(180deg, rgba(255,255,255,0.14), rgba(0,0,0,0.08))`.
- Do not create glossy Web 2.0 bevels.

Faceplate structure:

- Espresso strips create hardware hierarchy.
- Header strips, nav bars, and control groups should feel screwed into the cream casing.
- Khaki rules and seams organize internal sections.

VU meter progress:

- Use 6px orange fills inside khaki tracks.
- Add tick marks and small labels.
- Prefer slow settling movement to instant width changes.

Film warmth:

- Treat images with mild sepia, not heavy nostalgia filters.
- Use grain at 1-2% opacity.
- Keep product details inspectable.

Selection guidance:

- If the prompt says "warm tech", "vintage equipment", "cinematic", "Dieter Rams", or "70s NASA", choose this genome.
- If the prompt says "vinyl", "turntable", "album", "stereo receiver", or "listening room", route to `listening_room.hifi`.
- If the prompt says "oscilloscope", "multimeter", "gauge", "knurled", or "measurement", route to `precision_instrument.met`.
- If the prompt says "terminal", "CLI", "hacker", "mainframe", or "phosphor", route to `underground_terminal.crt` unless the user explicitly wants warm hardware rather than terminal text.
