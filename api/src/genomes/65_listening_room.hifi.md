---
id: "65"
name: listening_room.hifi
keywords:
  - vinyl
  - hifi
  - audio
  - turntable
  - analog
  - stereo
  - amplifier
  - speaker
  - warm
  - audiophile
  - record
  - album
---

### genome 65: `listening_room.hifi`

> identity: warm hi-fi audio den. Walnut veneer cabinets, brushed aluminum faceplates, glowing amber VU meters, turntable platters, album liner-note typography. The wood-paneled room where someone plays vinyl on a McIntosh amplifier at 11pm. Marantz receivers, Braun T1000 tuners, Pioneer SX-1280 faceplates. The warmth of tubes, the ritual of the needle drop, the reverence of the listening session.

---

## surface

Colors:

- `--walnut: #3E2723` — dark wood, primary background tone
- `--walnut-light: #5D4037` — lighter wood grain, secondary panels
- `--aluminum: #B8B8BC` — brushed metal, borders, structural elements
- `--cream-dial: #F5F0E0` — dial faces, labels, liner note sections
- `--vu-amber: #E8A020` — VU meter needles, warm indicators, active accents
- `--vu-green: #4CAF50` — signal present, optimal level LED
- `--led-red: #D32F2F` — peak/clip indicator, error state
- `--felt-black: #1C1C1E` — turntable mat, dark recessed surfaces
- `--liner-tan: #E8DCC8` — album liner paper, reading surfaces

Typography:

- Display: `"Playfair Display", Georgia, serif` at `font-weight: 700` — album title elegance, used for hero headings and feature titles
- Headers: `"DM Sans", "Helvetica Neue", sans-serif` at `font-weight: 500-600; text-transform: uppercase; letter-spacing: 0.12em` — faceplate engraving style
- Body: `"DM Sans", sans-serif` at `font-weight: 400; font-size: 14-16px; line-height: 1.6` — comfortable reading
- Metadata/readouts: `"JetBrains Mono", "SF Mono", monospace` at `font-size: 12-13px; letter-spacing: 0.02em` — tuner frequency displays, technical readouts
- Sizes: display 32-48px, headers 18-24px, body 14-16px, readouts 12-13px

Borders:

- Primary: `1-2px solid var(--aluminum)` — precise, metallic edge
- Panels: `border-radius: 6-8px` — machined faceplate corners, never sharp
- Inner bezels: `box-shadow: inset 0 1px 2px rgba(0,0,0,0.3), inset 0 -1px 0 rgba(255,255,255,0.05)` — physical depth
- Knob indicators: circular elements with concentric ring shadows

Spacing:

- Generous, considered: `padding: 20-28px; gap: 16-20px`
- Equipment-rack proportions — horizontally wide panels stacked vertically
- Section spacing: `margin-bottom: 24-32px`
- Component internal padding follows faceplate logic: more horizontal than vertical

---

## color distribution

- 40% — walnut tones (`--walnut`, `--walnut-light`): wood backgrounds, warm framing, primary surface
- 25% — felt-black/dark (`--felt-black`): turntable mat areas, deep backgrounds, recessed zones
- 15% — aluminum (`--aluminum`): borders, labels, structural chrome, faceplate strips
- 10% — cream-dial (`--cream-dial`, `--liner-tan`): readouts, text areas, liner note sections
- 5% — vu-amber (`--vu-amber`): active indicators, warm accents, focus states, selected items
- 3% — vu-green (`--vu-green`): signal-present LEDs, success states, active-status dots
- 2% — led-red (`--led-red`): peak indicators, error states, alert badges

---

## component patterns

Buttons — faceplate pushbutton style:
```
background: var(--aluminum);
color: var(--felt-black);
border: 1px solid rgba(0,0,0,0.3);
border-radius: 6px;
font-family: "DM Sans", sans-serif;
text-transform: uppercase;
letter-spacing: 0.1em;
font-size: 12px;
padding: 10px 20px;
box-shadow: 0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2);
```
Active/pressed: inset shadow deepens — `box-shadow: inset 0 2px 4px rgba(0,0,0,0.4); background: #A8A8AC`. Secondary buttons: darker, walnut-toned — `background: var(--walnut-light); color: var(--cream-dial); border-color: var(--aluminum)`.

Inputs — recessed into faceplate:
```
background: var(--felt-black);
border: 1px solid var(--aluminum);
border-radius: 4px;
color: var(--vu-amber);
font-family: "JetBrains Mono", "SF Mono", monospace;
padding: 10px 14px;
box-shadow: inset 0 1px 3px rgba(0,0,0,0.4);
```
Focus: amber glow — `box-shadow: inset 0 1px 3px rgba(0,0,0,0.4), 0 0 8px rgba(232,160,32,0.3)`. Placeholder text: `color: rgba(232,160,32,0.4)`.

Cards — equipment faceplate panels:
```
background: linear-gradient(180deg, var(--walnut) 0%, var(--walnut-light) 100%);
border: 1px solid rgba(0,0,0,0.4);
border-radius: 8px;
box-shadow: 0 4px 12px rgba(0,0,0,0.3);
overflow: hidden;
```
Metal faceplate strip across top: `background: var(--aluminum); padding: 10px 20px; border-bottom: 1px solid rgba(0,0,0,0.2)`. Card body: `padding: 20-28px`.

Navigation — horizontal rack-mount selector:
- Container: aluminum bar with engraved labels, horizontal layout
- Active tab: `background: var(--felt-black); color: var(--vu-amber); box-shadow: inset 0 2px 4px rgba(0,0,0,0.3)`
- Inactive tab: `background: var(--aluminum); color: var(--felt-black); letter-spacing: 0.1em; text-transform: uppercase; font-size: 12px`
- Separator: `1px solid rgba(0,0,0,0.15)` between tabs

Headers — wide faceplate panel:
```
background: var(--aluminum);
padding: 16px 28px;
text-align: center;
font-family: "DM Sans", sans-serif;
text-transform: uppercase;
letter-spacing: 0.12em;
font-weight: 600;
color: var(--felt-black);
border-bottom: 2px solid rgba(0,0,0,0.2);
```
VU meter decorative elements flanking the title — small amber arc indicators.

Footers — dark walnut strip:
```
background: var(--walnut);
padding: 12px 28px;
color: var(--aluminum);
font-size: 12px;
font-family: "DM Sans", sans-serif;
letter-spacing: 0.08em;
text-transform: uppercase;
border-top: 1px solid var(--aluminum);
```
Equipment model-number style metadata.

Lists — album tracklist format:
- Track number in monospace, right-aligned: `font-family: monospace; color: var(--aluminum); min-width: 28px`
- Title in serif: `font-family: "Playfair Display", serif; color: var(--cream-dial)`
- Duration right-aligned in monospace: `font-family: monospace; color: var(--vu-amber)`
- Row separator: `border-bottom: 1px solid rgba(184,184,188,0.15)` — subtle aluminum hairline
- Row padding: `padding: 10px 0`

Tables — specification-sheet style:
- Header: `background: var(--aluminum); color: var(--felt-black); text-transform: uppercase; letter-spacing: 0.08em; font-size: 12px; padding: 10px 16px`
- Body cells: `background: var(--cream-dial); color: var(--walnut); padding: 10px 16px; font-size: 14px`
- Alternating rows: subtle walnut tint on even rows — `background: rgba(62,39,35,0.05)`
- Precise alignment: numbers right-aligned, text left-aligned

Dividers — thin aluminum rules:
```
border: none;
border-top: 1px solid var(--aluminum);
opacity: 0.4;
margin: 20px 0;
```

Modals — floating equipment panel:
```
background: linear-gradient(180deg, var(--walnut) 0%, var(--walnut-light) 100%);
border: 1px solid var(--aluminum);
border-radius: 8px;
box-shadow: 0 16px 48px rgba(0,0,0,0.5);
max-width: 520px;
```
Title bar: aluminum strip with `color: var(--vu-amber)` accent. Backdrop: `background: rgba(28,28,30,0.7); backdrop-filter: blur(4px)`.

Badges — LED indicators:
```
width: 8px;
height: 8px;
border-radius: 50%;
display: inline-block;
```
- Active/green: `background: var(--vu-green); box-shadow: 0 0 6px var(--vu-green)`
- Standby/amber: `background: var(--vu-amber); box-shadow: 0 0 6px var(--vu-amber)`
- Alert/red: `background: var(--led-red); box-shadow: 0 0 6px var(--led-red)`
- Off: `background: rgba(184,184,188,0.2); box-shadow: none`

---

## interaction language

- Hover: subtle warmth — `box-shadow: 0 0 8px rgba(232,160,32,0.15); transition: 0.25s ease`. On aluminum buttons: slight warm tint.
- Active: button depresses — `box-shadow: inset 0 2px 4px rgba(0,0,0,0.4); background darkens one step; transform: translateY(1px)`.
- Focus: amber outline — `outline: 2px solid var(--vu-amber); outline-offset: 2px`. Visible, warm, not harsh.
- Selected: `background: var(--felt-black); color: var(--vu-amber); box-shadow: inset 0 2px 4px rgba(0,0,0,0.4)`. The "pushed-in" faceplate button.
- Disabled: `opacity: 0.35; filter: saturate(0); cursor: not-allowed`. The unpowered component.
- Drag: element lifts with warm shadow — `box-shadow: 0 8px 24px rgba(0,0,0,0.4); transform: scale(1.02); transition: 0.2s ease`.
- Toggle: on/off rocker switch feel — selected side recesses, deselected side raises.

---

## motion & feedback

- Transitions: `0.25-0.35s ease` — smooth, analog feel. Like a volume knob rotating. Nothing is instant, nothing is slow.
- Loading: VU meter needle sweeping left to right — a thin amber bar animating across an arc or horizontal track. `animation: vu-sweep 1.4s ease-in-out infinite`.
- Success: green LED lights up with a gentle `0.3s` glow-in — `animation: led-on 0.3s ease forwards`. The LED stays lit.
- Error: red LED blinks twice — `animation: led-blink 0.3s ease 2`. Then stays lit as warning.
- Page enter: panels fade in with subtle downward settle, staggered 80ms — `opacity: 0 → 1; transform: translateY(-6px) → translateY(0); transition: 0.35s ease; transition-delay: calc(var(--i) * 80ms)`.
- Scroll: parallax-free, smooth. No jank. Content scrolls naturally like turning a page in a liner note booklet.
- Micro-interactions: knob rotation on volume/slider controls — `transform: rotate()` driven by input. Satisfying, physical.

---

## atmosphere

- Walnut wood grain texture: subtle CSS gradient or `background-image` at 4-8% opacity overlaid on walnut backgrounds. Gives tactile depth without visual noise.
- Ambient warmth: a very subtle warm vignette around the viewport edges — `background: radial-gradient(ellipse at center, transparent 60%, rgba(62,39,35,0.3) 100%)`.
- Equipment rack aesthetic: panels are horizontally wide, stacked vertically like components in a stereo rack. Each section is a "component" in the stack.
- VU meter needle elements: decorative amber arc indicators on key panels — thin `border-bottom: 2px solid var(--vu-amber)` arcs or SVG needle graphics.
- Dim room ambiance: overall background never brighter than `--walnut`. The room is lit by the equipment itself — amber glows, green LEDs, the warm light of tube amplifiers.
- The quiet hiss: negative space is generous. Panels breathe. Nothing is cramped. The layout respects the ritual of the listening session.

---

## editorial voice

- Button labels: "Play", "Queue", "Add to Collection", "Liner Notes", "Side B", "Drop Needle", "Cue Up", "Fade Out"
- Headings: album-style — "Now Playing", "The Collection", "Liner Notes", "Side A · Track 3", "Listening Room", "From the Stacks", "Recently Spun"
- Metadata: "33⅓ RPM · Stereo · 1974", "Track 4 of 8 · 3:42", "Pressed by Columbia Records", "Mastered at Abbey Road", "180g Vinyl · Gatefold"
- Placeholders: "Search your collection...", "Artist or album...", "Add a note about this pressing..."
- Empty states: "The turntable is empty.", "Nothing queued.", "Your collection awaits.", "No signal detected."
- Error messages: "Needle skipped.", "Track not found.", "Signal lost.", "Could not read this pressing."
- Success messages: "Added to collection.", "Now playing.", "Queued up.", "Side B cued."
- Confirmation: "Remove from collection?", "Clear the queue?"
- Tone: calm, knowledgeable, reverent. A collector speaking to another collector. Never loud, never hurried.

---

## cursor & selection

- Default: standard arrow cursor on non-interactive surfaces
- Pointer: `cursor: pointer` on all interactive elements — buttons, links, tabs, toggles, cards with actions
- Grab: `cursor: grab` on draggable elements (playlist reorder, slider knobs); `cursor: grabbing` while dragging
- Text: `cursor: text` on input fields and editable areas
- Selection highlight: `::selection { background: var(--vu-amber); color: var(--felt-black); }` — warm amber selection, like a highlighted passage in a liner note
- Focus rings: always visible on keyboard navigation — `2px solid var(--vu-amber)` with `outline-offset: 2px`

---

**when to reach for this genome**

Use `listening_room.hifi` when the prompt asks for a hi-fi listening room, audiophile playback interface, stereo receiver dashboard, vinyl queue, speaker setup, amplifier control panel, listening-session journal, or any product that should feel like warm analog audio equipment arranged in a walnut-paneled den.

Reach for it when the concrete cues are walnut veneer, brushed aluminum faceplates, amber VU meters, green signal LEDs, felt-black turntable wells, cue levers, tonearms, speaker grilles, rack-mounted components, track durations, stereo/RPM metadata, and calm collector language such as `Drop Needle`, `Cue Up`, `Side B`, or `Liner Notes`. It is strongest when the interface action is play, cue, tune, monitor signal, compare equipment, manage a record collection, or settle into a focused listening ritual.

Do not use it for LP jacket art, square album covers, gatefold layouts, label-center graphics, or the printed record sleeve as object; use `vinyl_jacket.lp`. Do not use it for cassette J-cards, mixtape handwriting, magnetic tape labels, Dolby marks, or folded inlay packaging; use `cassette_inlay.tape`. Do not use it for compact iPod-like playback, click-wheel navigation, Aqua rows, or pocket jukebox hardware; use `clickwheel_pod.aqua`. Do not use it for warm 1970s cinematic product hardware without the literal audio-room ritual; use `panavision.70s`. Do not use it for analog photography, contact sheets, developer trays, or red safelight darkness; use `darkroom_proof.contact`.

It is the right choice when the product lives in the equipment rack and the listening chair. If the prompt centers on music packaging, portable playback hardware, general vintage industrial warmth, or chemical-photo atmosphere, route to the genome that owns that object world.

## anti-patterns — this genome NEVER:

1. Uses neon colors, electric blues, or digitally saturated hues. The palette is warm, analog, and earthen. Every color could exist in a 1970s listening room.
2. Uses pixel fonts or monospace as display typeface. Display text is elegant serif; monospace is reserved strictly for readouts, metadata, and technical specifications.
3. Uses sharp 0px border-radius on panels. Everything has the gentle 6-8px rounding of machined faceplate corners. No razor edges.
4. Uses hard offset drop shadows (e.g. `4px 4px 0px`). Shadows are always soft, warm, and diffused — real-world lighting from above, not graphic design artifacts.
5. Uses aggressive, loud, or exclamatory language. No "AWESOME!", no "Hey there!", no emoji. The voice is calm, knowledgeable, and reverent — a collector speaking quietly to another collector.
6. Uses pure white (`#FFFFFF`) or pure black (`#000000`) as primary backgrounds. Backgrounds are always warm-tinted — walnut, cream, felt-dark. Pure extremes are too digital.
7. Uses flat, borderless UI elements. Every component has physical dimensionality — bezels, inset shadows, metallic edges. This is real equipment, not a flat mockup.
8. Uses instant or snappy state changes with `0s` or `0ms` transitions. All transitions are smooth `0.25-0.35s` — analog equipment doesn't snap, it sweeps and settles.
