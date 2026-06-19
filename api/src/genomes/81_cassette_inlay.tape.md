---
id: "81"
name: cassette_inlay.tape
keywords:
  - mixtape
  - cassette
  - magnetic tape
  - j-card
  - lo-fi
  - 80s music
  - hand-lettered
  - dolby
  - chrome bias
  - tdk
  - maxell
  - bootleg
  - mix
  - audio
---

### genome 81: `cassette_inlay.tape`

> identity: 1980s cassette tape J-card and magnetic-media packaging. TDK SA, Maxell XL II, BASF chrome — printed paper inserts folded into transparent shell cases. Hand-lettered Sharpie titles over offset-printed metric grids. Dolby B/C marks, type-I/II/IV bias indicators, A-SIDE/B-SIDE banners. The mixtape culture: someone made you this, recorded in real time, lettered with care. Not the wood-paneled hi-fi room (genome 65) — this is the physical insert card itself: the J-fold, the spine label, the magnetic tape, the bias selector.

---

## surface

colors:
```
--cassette-shell: #1A1A1C;     /* black plastic shell — primary dark */
--tape-brown: #6B3F1F;         /* magnetic tape — warm oxide brown */
--tape-warm: #8B5A2B;          /* exposed tape spool — secondary brown */
--paper-cream: #EDE4D0;        /* J-card paper stock — primary light */
--label-white: #F7F2E4;        /* spine label cream — secondary light */
--bias-red: #C9342B;           /* TYPE I red bias indicator */
--bias-blue: #1F4E9E;          /* TYPE II / chrome blue bias indicator */
--bias-gold: #C49A1A;          /* TYPE IV / metal gold bias indicator */
--dolby-black: #0A0A0A;        /* dolby NR mark, primary text on labels */
--sharpie-ink: #1A1A2E;        /* hand-lettered Sharpie ink — slightly blue-black */
--track-rule: rgba(26,26,28,0.18);  /* the printed grid lines on the J-card */
--leader-yellow: #D9C66B;      /* tape leader — translucent yellow */
```

typography:
- display/titles: `"Bebas Neue", "Oswald", "Impact", sans-serif` — `font-weight: 400; text-transform: uppercase; letter-spacing: 0.06em;` — sizes `2rem–5rem`. The bold condensed sans of factory-printed cassette art and Memorex catalogs.
- hand-lettered/marker: `"Permanent Marker", "Caveat", "Architects Daughter", cursive` — `font-size: 1rem–1.6rem; letter-spacing: 0.01em;` — for track listings, side annotations, and any "to: from:" gift dedication. This is the Sharpie scrawl over the printed label.
- body/track listings: `"Space Mono", "IBM Plex Mono", monospace` — `font-size: 0.75rem–0.9rem; letter-spacing: 0.04em; line-height: 1.6;` — printed track numbers, runtime stamps, recording metadata.
- meta/spec: `"Space Mono", monospace; font-size: 0.6rem–0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--sharpie-ink);` — bias type, noise reduction, tape length specifications.
- the genome lives in the tension between factory-printed precision (Bebas/mono) and human handwriting (marker) on top of it.

borders:
- J-card panels: `1px solid var(--track-rule)` — the printed cell boundaries of the track listing area. `border-radius: 2px` on most components — soft enough to feel paper-printed, never harder.
- side-strip labels (A/B side): `2px solid var(--cassette-shell); border-radius: 4px 4px 0 0;` — like the strip glued to the cassette spine, hard top edge curving slightly.
- bias chips: pill `border-radius: 999px; border: 1px solid currentColor;` — the small TYPE I / II / IV mark stamped on every shell.
- never sharper than 2px — this is paper and plastic, both forgiving materials. but never softer than 4px — this is industrial product packaging, not a feather pillow.

spacing:
- page edge: `4vw` horizontal padding.
- J-card grid: a tight 2-column composition mimicking the fold of the inlay — `gap: 2rem` between panel halves.
- track listings: `padding: 14px 18px` per row, dense like a hand-numbered track grid.
- moderate-high information density. a mixtape J-card crams a lot into a folded 4x4-inch space.

---

## color distribution

- 38% paper-cream / label-white — the printed insert surface, the spine label, the warm field that holds typography
- 30% cassette-shell / sharpie-ink — black plastic + hand-lettered ink, body text, marker scrawls
- 12% tape-brown / tape-warm — exposed magnetic tape areas (decorative ribbon strips, hero accent panels)
- 8% bias-red — TYPE I markings, A-SIDE banner, primary CTA
- 6% bias-blue — TYPE II markings, B-SIDE banner, secondary accent
- 4% bias-gold — TYPE IV / metal-tape highlights, premium markings
- 2% leader-yellow — the tape leader visible at the spool start, used as a small alert accent

the page should feel like a printed insert card laid flat, with one or two tape-brown strips of "exposed magnetic ribbon" running horizontally as decorative dividers, and a hand-lettered title scrawled diagonally over a printed grid.

---

## component patterns

buttons:
- primary (A-SIDE button): `background: var(--bias-red); color: var(--label-white); border: 2px solid var(--cassette-shell); border-radius: 4px; padding: 12px 28px; font-family: "Bebas Neue", sans-serif; font-size: 1rem; letter-spacing: 0.1em; text-transform: uppercase; box-shadow: 2px 2px 0 var(--cassette-shell);` — looks like the side-A label punched into the spine
- secondary (B-SIDE): same shape but `background: var(--bias-blue); color: var(--label-white);`
- play/record buttons: square `width: 48px; height: 48px; border-radius: 4px;` with embossed feel — `background: var(--paper-cream); border: 2px solid var(--cassette-shell); box-shadow: inset 1px 1px 0 rgba(255,255,255,0.4), 2px 2px 0 var(--cassette-shell);`
- ghost/track: `background: transparent; color: var(--cassette-shell); border-bottom: 1px dashed var(--track-rule); padding: 6px 0; font-family: "Space Mono", monospace;` — like a printed line item

inputs:
- `background: var(--label-white); border: none; border-bottom: 2px solid var(--cassette-shell); border-radius: 0; padding: 12px 4px; font-family: "Permanent Marker", cursive; font-size: 1.1rem; color: var(--sharpie-ink);` — like writing on the lined label with a Sharpie
- label above: `font-family: "Space Mono", monospace; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--cassette-shell);` — the printed field name
- focus: `border-bottom-color: var(--bias-red); box-shadow: 0 1px 0 0 var(--bias-red);`
- placeholder: `color: rgba(26,26,46,0.4); font-family: "Permanent Marker"; font-style: normal;` — empty space where you'd write the track name

cards/panels (J-card panels):
- standard: `background: var(--paper-cream); border: 1px solid var(--track-rule); border-radius: 2px; padding: 24px; box-shadow: 1px 1px 0 var(--cassette-shell), 4px 4px 0 rgba(26,26,28,0.06);`
- the printed cell rule background pattern via `background-image: repeating-linear-gradient(0deg, transparent 0px, transparent 32px, var(--track-rule) 32px, var(--track-rule) 33px);` — horizontal ruled lines like a tracklist sheet
- A-SIDE banner card: top-bar `background: var(--bias-red); color: var(--label-white); padding: 4px 12px; font-family: "Bebas Neue"; letter-spacing: 0.15em;` reading `A — SIDE A — 45:00`
- B-SIDE banner card: same with `var(--bias-blue)` and `SIDE B`
- shell card variant: `background: var(--cassette-shell); color: var(--paper-cream);` with magnetic-tape brown stripe across top — represents the cassette itself rather than the insert

navigation:
- top bar styled as a cassette spine label: `background: var(--label-white); border-top: 4px solid var(--cassette-shell); border-bottom: 4px solid var(--cassette-shell); padding: 12px 4vw;`
- brand/logo: `font-family: "Bebas Neue"; font-size: 1.5rem; letter-spacing: 0.12em; color: var(--cassette-shell);`
- nav items: `font-family: "Space Mono", monospace; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--cassette-shell);` separated by `·` printed dots
- active item: `color: var(--bias-red); border-bottom: 2px solid var(--bias-red);`

headers/hero:
- main title: `font-family: "Permanent Marker", cursive; font-size: 4–7vw; line-height: 1.0; color: var(--sharpie-ink); transform: rotate(-1.5deg);` — hand-lettered across the front of the insert, slightly off-axis
- subtitle: printed below, `font-family: "Bebas Neue"; font-size: 1.2rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--cassette-shell);`
- side identifier (`A` or `B`): oversized in corner, `font-family: "Bebas Neue"; font-size: 10rem; color: var(--bias-red); opacity: 0.18; transform: rotate(-8deg);` — like a faded printed letter

footers:
- styled as the back of the J-card with regulatory text in monospace: `background: var(--label-white); padding: 24px 4vw; border-top: 1px dashed var(--track-rule);`
- "DOLBY NR ON RECORDING — TYPE II CHROME BIAS — 60 MIN — © 198X" in `--cassette-shell` monospace at `0.65rem`
- catalog number stamped in corner: `font-family: "Space Mono"; color: var(--bias-red); letter-spacing: 0.15em;`

track listing (signature component):
- numbered table with thin printed cell rules: each row `display: flex; padding: 10px 0; border-bottom: 1px solid var(--track-rule);`
- number: `font-family: "Space Mono"; font-size: 0.8rem; color: var(--bias-red); width: 32px;` — printed track index in red ink
- title: `font-family: "Permanent Marker", cursive; font-size: 1.05rem; color: var(--sharpie-ink); flex: 1;` — hand-written track name
- runtime: `font-family: "Space Mono"; font-size: 0.75rem; color: var(--cassette-shell); letter-spacing: 0.04em;` — printed timecode `3:42`
- this is the most important component — it's the visual signature of the genome

lists:
- prefixed with track-style numbering `01.`, `02.` in `--bias-red` mono followed by Sharpie-style title text
- dividers between items: dashed `1px dashed var(--track-rule)` — like the printed cell rules of an insert

tables:
- bordered with printed thin black rules: `border: 1px solid var(--cassette-shell); border-collapse: collapse;`
- header: `background: var(--cassette-shell); color: var(--label-white); font-family: "Bebas Neue"; letter-spacing: 0.1em; text-transform: uppercase; padding: 8px 14px;`
- body rows: `font-family: "Space Mono"; color: var(--sharpie-ink); padding: 8px 14px; border-bottom: 1px solid var(--track-rule);` alternating with `background: rgba(26,26,28,0.03)`

dividers:
- exposed-tape stripe: a horizontal bar `height: 14px; background: linear-gradient(180deg, var(--tape-brown) 0%, var(--tape-warm) 50%, var(--tape-brown) 100%); margin: 32px 0;` with thin highlight lines suggesting the magnetic tape's grain — used between major sections
- standard divider: `1px dashed var(--track-rule)` for minor breaks
- bias-strip divider: 3 small pills inline (TYPE I / II / IV chips) centered between sections — pure ornament

modals:
- styled as a removed J-card: `background: var(--paper-cream); border: 1px solid var(--cassette-shell); border-radius: 2px; box-shadow: 6px 6px 0 var(--cassette-shell);`
- top edge: a thin Sharpie-style underline on the title
- backdrop: `background: rgba(26,26,28,0.85);` — the case lid lifted, room dimmed
- close button: hand-lettered `× CLOSE` in marker font

badges/tags:
- pill `border-radius: 999px; padding: 4px 12px; font-family: "Space Mono"; font-size: 0.6rem; letter-spacing: 0.12em; text-transform: uppercase;`
- TYPE I (ferric): `background: transparent; border: 1px solid var(--bias-red); color: var(--bias-red);`
- TYPE II (chrome): `border-color: var(--bias-blue); color: var(--bias-blue);`
- TYPE IV (metal): `border-color: var(--bias-gold); color: var(--bias-gold);`
- DOLBY: `background: var(--dolby-black); color: var(--label-white);` with double-D mark prefix
- NEW / HIT: hand-lettered marker style `font-family: "Permanent Marker"; transform: rotate(-4deg);` — drawn on top of the printed label

progress/seek bar:
- track: `height: 4px; background: rgba(26,26,28,0.1); border-radius: 2px;`
- fill: `background: var(--tape-brown); height: 4px;` — like magnetic tape playing past the head
- runtime label: monospace `M:SS / M:SS` on the right

tooltips:
- `background: var(--label-white); color: var(--cassette-shell); border: 1px solid var(--cassette-shell); border-radius: 2px; padding: 6px 10px; font-family: "Space Mono"; font-size: 0.7rem; box-shadow: 2px 2px 0 var(--cassette-shell);` — like a small adhesive tape label

---

## interaction language

- hover (buttons): `transform: translate(-1px, -1px); box-shadow: 3px 3px 0 var(--cassette-shell);` — the button "lifts" off the page like a stamped paper element. `transition: 0.15s ease-out;`
- hover (cards): subtle paper-curl shadow `box-shadow: 2px 2px 0 var(--cassette-shell), 6px 6px 0 rgba(26,26,28,0.08); transform: translate(-1px, -1px);`
- hover (track list rows): `background: rgba(201,52,43,0.06);` — pink wash like a highlighter mark
- active/pressed: `transform: translate(1px, 1px); box-shadow: 0 0 0 var(--cassette-shell);` — pressed back flat against the page. `transition: 0.05s;`
- focus: `outline: 2px solid var(--bias-red); outline-offset: 2px;` — like a printed crop mark around the focused element
- selected (track row): `background: rgba(201,52,43,0.12); border-left: 3px solid var(--bias-red);` with the track number highlighted in red
- disabled: `opacity: 0.4; filter: grayscale(0.3);` — like a faded printed label
- drag: `cursor: grabbing; transform: rotate(2deg); box-shadow: 4px 8px 16px rgba(26,26,28,0.3);` — picking up a J-card from the table

---

## motion & feedback

transitions: `0.15–0.25s ease-out` default. Movements are short and tactile — paper has a quick, dry response. Never a long ease. Never a bounce.

loading: tape-spool animation — two SVG circles representing the cassette reels rotating at `1.2s linear infinite`, paired with a `RECORDING...` or `LOADING TAPE...` label in monospace. Or: a horizontal tape-brown stripe with a moving white tape-head indicator.

```css
@keyframes spool {
  to { transform: rotate(360deg); }
}
.reel { animation: spool 1.2s linear infinite; transform-origin: center; }
```

success: a green-marker checkmark hand-drawn over the affected element via SVG path animation — `stroke-dasharray` animating from `0` to full path length over `0.4s`. Or text confirmation `RECORDED.` in marker font that fades in.

error: red-marker scrawl appears beside the field — `RE-RECORD.` or `TAPE JAMMED.` in Permanent Marker font, slightly rotated, fades in over `0.3s`. The element border switches to `--bias-red`.

page enter: track-listing rows reveal one by one with a `0.04s` stagger, each row sliding from `translateX(-8px)` to `translateX(0)` while fading in — like the printed lines materializing as the J-card is unfolded.

side-flip transition: for tabbed content (A-side / B-side), a 3D rotateY flip at `0.5s ease-in-out` simulating physically flipping the cassette.

---

## atmosphere

- paper grain texture wash on all card surfaces: a subtle SVG turbulence filter at very low opacity simulating uncoated paper stock
- magnetic-tape diagonal stripe pattern available as decorative section dividers: `background: repeating-linear-gradient(45deg, var(--tape-brown), var(--tape-brown) 6px, var(--tape-warm) 6px, var(--tape-warm) 12px);`
- the page background can be `--paper-cream` overall with a faint horizontal ruled-line pattern at `40px` intervals via `repeating-linear-gradient` at very low opacity — like an unprinted tracklist sheet
- one or two diagonal "Sharpie scrawls" allowed per page — a brand name, a side identifier, a date — hand-lettered, rotated ±2–4°, never aligned to a grid
- images: applied `filter: contrast(1.1) saturate(0.85);` and bordered with `2px solid var(--cassette-shell)` plus `box-shadow: 3px 3px 0 var(--cassette-shell);` — like a Polaroid taped onto the insert
- background option (hero only): a stack of cassette-shell silhouettes scattered like a record-store bin, in `var(--cassette-shell)` at `opacity: 0.04`

---

## editorial voice

button labels: short, tape-deck verbs. `PLAY`, `RECORD`, `EJECT`, `REWIND`, `FAST FORWARD`, `STOP`, `PAUSE`, `FLIP SIDE`, `DUB`, `MASTER`, `CUE`. uppercase. mono or condensed sans. terse.

headings: like song-list announcements. `THIS IS SIDE A`, `THE B-SIDE`, `BONUS TRACKS`, `RECORDED LIVE`, `HOMEMADE MIX`, `FROM THE VAULT`. all caps, declarative. tracklist style.

metadata: technical specs of the medium. `60 MIN — TYPE II CHROME`, `RECORDED OCT 1987`, `DOLBY B ON`, `BIAS NORMAL`, `LEVEL +3 dB`, `SIDE A — 28:47 / 30:00`. monospace, uppercase.

placeholders: handwritten field prompts. `track title...`, `dedicated to...`, `recorded at...`, `your name here...`. lowercase italic, marker-style.

empty states: `no tracks on this side yet.`, `the tape is blank.`, `nothing recorded.`, `still cueing up...`. lowercase, casual.

error messages: `tape jam — re-record this track.`, `wrong bias setting.`, `head needs cleaning.`, `the leader broke.`. period. blunt mixtape-maker voice.

success messages: `recorded.`, `levels are good.`, `track laid down.`, `mix is fire.`, `flipped to side B.`. one short sentence. quietly pleased.

---

## cursor & selection

- default: `cursor: default`
- interactive: `cursor: pointer`
- text input: `cursor: text; caret-color: var(--bias-red);` — the recording-light red caret
- drag: `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--bias-red); color: var(--label-white); }` — text selection looks like a Sharpie highlight

---

**when to reach for this genome**

Use `cassette_inlay.tape` when the prompt asks for a cassette, mixtape, J-card, magnetic tape archive, bootleg recording log, handmade music gift, side-A/side-B tracklist, tape-deck workflow, cassette packaging, or any product that should feel like a folded paper insert tucked into a clear plastic shell.

Reach for it when visual or product cues include TDK, Maxell, BASF, Dolby B/C, chrome bias, TYPE I/II/IV chips, 60/90 minute tape lengths, exposed magnetic ribbon, Sharpie handwriting over printed grids, handwritten dedications, runtime stamps, `PLAY`/`RECORD`/`EJECT` commands, and track lists split across A-SIDE and B-SIDE.

Do not use it for wood-paneled listening rooms, hi-fi receivers, turntables, glowing VU meters, or audiophile equipment interfaces; use `listening_room.hifi`. Do not use it for 12-inch album sleeves, gatefold layouts, vinyl records, liner notes, Blue Note covers, or LP crate browsing; use `vinyl_jacket.lp`. Do not use it for VHS clamshell cases, rental membership cards, late-fee workflows, rewind stickers, or neighborhood video-store shelves; use `videostore_rental.vhs`. Do not use it for 90s rave posters, club-night flyers, warehouse lineups, or riso music broadsides; use `groove_flyer.90s`. Do not use it for iPod-era digital music, click wheels, glossy Aqua controls, or MP3 library polish; use `clickwheel_pod.aqua`.

It is strongest when the workflow maps to recording, dubbing, cueing, flipping sides, naming tracks, timing runtimes, and annotating a personal physical object. If the prompt centers the room, the LP sleeve, the VHS store, the event poster, or the digital player, route away from cassette media.

## anti-patterns — this genome NEVER:

1. uses border-radius above 4px on cards or panels (only pill-shaped chips/badges may use `999px`). This is printed paper and rigid plastic, not foam or fabric. Soft puffy shapes break the medium.
2. uses cold tech-blue gradients or neon glow effects. The palette is matte, printed, slightly faded — magnetic oxide brown, paper cream, ferric red. Glow shaders belong to a different era.
3. uses smooth flowing serif typography or elegant Didone display fonts. Type is either factory-printed (Bebas/mono) or hand-lettered (marker). There is no "literary" voice here.
4. uses generous gallery-style whitespace. A J-card is a dense, packed object — track lists, side identifiers, metadata, bias indicators all fit on a 4×4-inch folded paper. Density is the aesthetic.
5. uses spring-bounce or elastic motion. Paper and plastic are dry, fast media. Transitions are short (`0.15–0.25s`), tactile, never bouncy.
6. uses corporate UX copy like "Click here to learn more" or "Sign up free today." Voice is tape-deck-button literal: PLAY, RECORD, FLIP. Or hand-lettered mixtape vernacular: "this is side A", "track 04 is fire". Never marketing-friendly.
7. mixes the three biases (red TYPE I, blue TYPE II, gold TYPE IV) at equal weight. One bias color dominates per page (matching the implied tape format), the others appear only as small chip badges. They are not equal accents.
8. uses real photographs at full color saturation. Images are treated to feel like the inside-cover photos of a mixtape: slightly desaturated, hard-bordered, tape-corner-mounted. The medium is always visible.
9. uses sleek modernist sans-serif (Inter, SF Pro, Helvetica Neue) for body text. Body is always monospace. Monospace is the typewriter of the cassette era — it's what came out of label printers and Brother-typewriter J-card kits.
