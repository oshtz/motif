---
id: "89"
name: vinyl_jacket.lp
keywords:
  - vinyl
  - LP record
  - album cover
  - gatefold
  - liner notes
  - 33rpm
  - blue note
  - ECM
  - storm thorgerson
  - record sleeve
  - dust jacket
  - jazz
  - bossa
  - 1970s album art
---

### genome 89: `vinyl_jacket.lp`

> identity: 1970s vinyl LP record jacket and gatefold sleeve. Blue Note Records jazz sleeves, ECM minimalist covers, Hipgnosis surrealism (Pink Floyd, Led Zeppelin), Reid Miles' Blue Note typography. 12×12-inch cardboard square, glued spine, liner-note inner sleeves, fold-out gatefolds with band photos and lyric sheets, the label center spinning at 33⅓ rpm. Not the wood-paneled hi-fi listening room (genome 65, the equipment) and not the cassette J-card (genome 81, magnetic tape) — this is the visual artifact itself: the cardboard sleeve, the off-set printing, the cover photograph, the liner-note typesetting. The album as object: square, weighted, tactile, designed to be held and read while the music plays.

---

## surface

colors:
```
--jacket-cardboard: #DBC9A8;     /* cream cardboard sleeve — primary warm light */
--jacket-cream-pale: #ECE0C2;    /* lighter inner-sleeve cream */
--jacket-kraft: #B69E78;         /* deeper kraft cardboard shadow */
--jacket-ink: #14110D;           /* offset-printed black ink — primary text */
--jacket-ink-fade: rgba(20,17,13,0.5); /* faded printed ink */
--record-vinyl: #0A0908;         /* glossy black vinyl — primary dark */
--record-label: #B23628;         /* vinyl label red (Columbia / Blue Note / Atlantic) */
--record-label-blue: #1D3F8A;    /* alternate label blue */
--record-label-cream: #E8D9B0;   /* label cream variant */
--accent-mustard: #D9A537;       /* 70s mustard yellow accent */
--accent-burnt: #C75633;         /* burnt orange accent */
--accent-teal: #2F7068;          /* dusty teal accent */
--accent-rust: #8E3A1A;          /* deep rust accent */
--liner-rule: rgba(20,17,13,0.18); /* the printed thin rule on liner notes */
--gloss-highlight: rgba(216,209,176,0.06); /* subtle vinyl-gloss highlight */
```

typography:
- display/titles: `"Tenor Sans", "Futura", "Avenir", sans-serif` — `font-weight: 400–600; text-transform: uppercase; letter-spacing: 0.06em;` — sizes `3rem–8rem`. Blue Note's Reid Miles aesthetic — clean modernist geometric sans for album titles, set with deliberate spacing.
- alternate display (Stanley Donwood-style): `"Bodoni Moda", "Playfair Display", serif` — `font-weight: 800–900; text-transform: uppercase; letter-spacing: 0.04em;` — Didone display for classical/jazz titles. Choose one of the two display approaches per page.
- body/liner notes: `"Source Serif Pro", "Crimson Text", serif` — `font-weight: 400; font-size: 12–14px; line-height: 1.65; letter-spacing: 0.01em;` — the small-print serif of liner notes, dense and considered.
- credits/musicians: `"Source Serif Pro", italic` — for personnel lists: "Wayne Shorter — tenor saxophone / Herbie Hancock — piano / Ron Carter — bass / Tony Williams — drums". Italic for instruments, roman for names.
- catalog: `"Courier Prime", "JetBrains Mono", monospace; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--jacket-ink-fade);` — for catalog numbers like `BST 84003`, `ECM 1043`.
- track listings: `"Tenor Sans", sans-serif; font-weight: 400; font-size: 0.9rem; letter-spacing: 0.04em;` — numbered tracks with right-aligned durations in tabular figures.

borders:
- album-cover frame: a thin `1px solid var(--jacket-ink); border-radius: 0;` — square cardboard edge, no curves
- spine accent: a vertical narrow strip on one edge of cards, `width: 24px; background: var(--accent-mustard);` — like the spine color band of a 70s record sleeve
- record label inner ring: `border-radius: 50%; border: 2px solid var(--record-label-cream);` — concentric ring inside vinyl label
- liner-note section borders: thin printed rules `1px solid var(--liner-rule);`
- gatefold-crease divider: a vertical dashed line `1px dashed var(--jacket-ink-fade)` indicating where the gatefold folds
- border-radius: `0px` on sleeves and cards (cardboard is square); `50%` on vinyl record visualizations; `2–4px` only for soft UI elements

spacing:
- page edge: `4vw` horizontal padding
- vertical rhythm: `8–14vh` between major sections — paced like the side-A → side-B flip
- card padding: `28–40px` — cardboard sleeves carry generous margin around content
- low-to-medium density. An album cover is mostly negative space with a strong central image and confident typography; the back cover has dense liner notes; we alternate these registers.

---

## color distribution

- 46% jacket-cardboard / jacket-cream-pale — the dominant warm card surface
- 14% jacket-ink — text, structural rules, typographic emphasis
- 12% jacket-kraft — deeper cardboard shadows, secondary surfaces
- 10% vinyl record (`--record-vinyl`) — record-disc visualizations, dark-accent panels
- 6% record-label red OR blue — the label color (one dominant per page)
- 5% accent-mustard / accent-burnt / accent-teal / accent-rust — 70s palette accents, used in concentrated panels
- 3% gloss-highlight — atmospheric highlights on vinyl surfaces only
- 4% misc small accents — track-list numbers, label rings

each page leads with one dominant accent (mustard, burnt orange, teal, or rust) plus the cardboard and ink. The vinyl black appears in record disc visualizations or as a dark hero panel. Pages should feel like one record sleeve — not a sample of all of them.

---

## component patterns

buttons:
- primary (PLAY-style button): `background: var(--jacket-ink); color: var(--jacket-cardboard); border: none; border-radius: 0; padding: 14px 32px; font-family: "Tenor Sans", sans-serif; font-weight: 500; font-size: 0.95rem; letter-spacing: 0.12em; text-transform: uppercase;` — flat ink-on-card
- accent button: `background: var(--accent-mustard); color: var(--jacket-ink); border: none; border-radius: 0; padding: 14px 32px;` — or any of the 70s accent colors
- label-style button (signature): a circular button styled as a vinyl-record-label — `width: 120px; height: 120px; border-radius: 50%; background: var(--record-label); color: var(--record-label-cream); display: flex; align-items: center; justify-content: center; text-align: center; padding: 16px;` with concentric ring detail and small text around the center
- secondary outline: `background: transparent; color: var(--jacket-ink); border: 1px solid var(--jacket-ink); border-radius: 0; padding: 13px 30px;`
- ghost: `background: transparent; color: var(--jacket-ink); border: none; text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 1px;`

inputs:
- `background: var(--jacket-cream-pale); border: none; border-bottom: 1px solid var(--jacket-ink); border-radius: 0; padding: 12px 0; font-family: "Source Serif Pro", serif; font-size: 1rem; color: var(--jacket-ink);` — typed into the liner notes
- label above: `font-family: "Tenor Sans"; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--jacket-ink);`
- placeholder: italic Source Serif in `--jacket-ink-fade`
- focus: `border-bottom-color: var(--accent-burnt); border-bottom-width: 2px;`

cards/panels (sleeves and liner notes):
- standard sleeve card: `background: var(--jacket-cardboard); border: 1px solid var(--jacket-ink); border-radius: 0; padding: 36px; box-shadow: 0 1px 2px rgba(20,17,13,0.06);`
- inner-sleeve variant (liner notes): `background: var(--jacket-cream-pale); padding: 32px; border: none;` — denser typographic content, the album's inside back cover
- gatefold card: a double-width horizontal panel with a vertical dashed crease line down the middle, opening to show interior content
- vinyl-record visualization: a circular SVG/CSS `border-radius: 50%; background: radial-gradient(circle at center, var(--record-label) 0%, var(--record-label) 20%, var(--record-vinyl) 22%, var(--record-vinyl) 100%);` with concentric groove lines via `repeating-radial-gradient(circle, transparent 0px, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 3px);` — used as a hero element or as a card decoration
- side-A / side-B card: rectangular sleeve halves with large `SIDE A` or `SIDE B` Tenor Sans typography and a numbered track listing below

navigation:
- top bar: `background: var(--jacket-cardboard); border-bottom: 1px solid var(--jacket-ink); padding: 24px 4vw;`
- brand: a small SVG vinyl-record glyph + wordmark in Tenor Sans uppercase, letter-spaced
- nav items: `font-family: "Tenor Sans", sans-serif; font-weight: 400; font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--jacket-ink);`
- active: `color: var(--accent-burnt); border-bottom: 1px solid var(--accent-burnt);`

headers/hero:
- album-cover hero: an oversized square (`aspect-ratio: 1`) hero composition with the title in Tenor Sans uppercase at large scale; the title can be set BEHIND the cover photograph or beside it in classic Blue Note layout
- album title typography: `font-family: "Tenor Sans"; font-weight: 500; font-size: 6–12vw; line-height: 1; letter-spacing: 0.06em; text-transform: uppercase; color: var(--jacket-ink);`
- artist name: smaller, often Reid-Miles-style placed at a 90° rotation on one edge — `transform: rotate(-90deg); transform-origin: left top; letter-spacing: 0.4em; font-size: 0.85rem; text-transform: uppercase;`
- catalog number in mono small caps: `BST 84003 · STEREO`
- a vinyl-record circle visualization placed beside or partially behind the title — peeking out from the sleeve

footers:
- `background: var(--jacket-cardboard); border-top: 1px solid var(--jacket-ink); padding: 56px 4vw;`
- a 70s-style printed footer with columns of small liner-note text
- the bottom row: catalog number in mono, copyright in italic Source Serif, label name in Tenor Sans uppercase
- a small SVG label-color circle (the record label) as the final ornament

dividers (signature — printed rule with catalog):
- a thin printed rule `1px solid var(--jacket-ink)` with a centered catalog-number tag like `· BST 84003 ·` in mono uppercase
- side-flip divider: a horizontal band reading `— END SIDE A · FLIP TO SIDE B —` in Tenor Sans uppercase letter-spaced
- groove-line divider: a row of concentric circle segments suggesting vinyl grooves, very subtle in `--jacket-ink-fade`

lists:
- track listings (signature): each item formatted as `01.` Tenor Sans in `--accent-mustard` followed by track title in Tenor Sans, dot-leaders, then runtime in tabular mono on the right
- personnel listings: italic Source Serif format — "John Coltrane — *tenor saxophone*" with em-dash separators
- standard unordered: small `▪` or `●` glyphs in `--jacket-ink`

tables (track + personnel data):
- header: `background: var(--jacket-ink); color: var(--jacket-cardboard); font-family: "Tenor Sans"; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; padding: 12px 18px;`
- body rows: `font-family: "Source Serif Pro"; color: var(--jacket-ink); padding: 12px 18px; border-bottom: 1px solid var(--liner-rule);`
- track-number columns: Tenor Sans in `--accent-burnt` or `--accent-mustard`
- runtime columns: right-aligned tabular mono

modals (a pulled-out lyric sheet):
- `background: var(--jacket-cream-pale); border: 1px solid var(--jacket-ink); border-radius: 0; padding: 56px 48px; box-shadow: 4px 8px 24px rgba(20,17,13,0.18);` — like a lyric insert slid out of the sleeve
- backdrop: `background: rgba(20,17,13,0.7);` — the room dims
- close: a small Tenor Sans uppercase `× CLOSE` link

badges/tags:
- pill: `border-radius: 999px; padding: 4px 12px; font-family: "Tenor Sans"; font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase;`
- 33⅓ RPM: filled `background: var(--jacket-ink); color: var(--jacket-cardboard);`
- STEREO: `background: transparent; border: 1px solid var(--jacket-ink); color: var(--jacket-ink);`
- 180g HEAVYWEIGHT: filled `background: var(--accent-mustard); color: var(--jacket-ink);`
- FIRST PRESSING: filled `background: var(--accent-burnt); color: var(--jacket-cardboard);`
- REMASTERED: filled `background: var(--accent-teal); color: var(--jacket-cardboard);`
- RARE: filled `background: var(--record-vinyl); color: var(--accent-mustard);`

progress bars (track playhead):
- track: `height: 2px; background: var(--liner-rule); border-radius: 0;`
- fill: `background: var(--accent-burnt); height: 100%;`
- label in tabular mono to the right: `02:24 / 06:18`
- alternate vinyl-groove progress: a circular SVG vinyl record with a needle indicator rotating around it, the played portion showing as a darker groove

tooltips:
- `background: var(--jacket-ink); color: var(--jacket-cardboard); border-radius: 0; padding: 8px 14px; font-family: "Tenor Sans"; font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; box-shadow: 2px 2px 0 var(--jacket-ink);` — a small offset shadow card

---

## interaction language

- hover (buttons): subtle press feel — `transform: translate(-1px, -1px); box-shadow: 2px 2px 0 var(--jacket-ink);`. `transition: 0.2s ease;`
- hover (album-cover cards): the cover lifts slightly — `transform: translateY(-3px); box-shadow: 0 12px 32px rgba(20,17,13,0.18);`. A subtle vinyl-record glimpse appears from behind via `transform: translateX(8px)` on a sibling pseudo-element
- hover (vinyl-record visualizations): the record begins to rotate — `transform: rotate(360deg); transition: 4s linear;`. The grooves catch a faint highlight
- hover (links): `color: var(--accent-burnt);` — pure color shift
- active/pressed: `transform: translate(1px, 1px); box-shadow: 0 0 0 transparent;` — pressed into the card
- focus: `outline: 2px solid var(--accent-burnt); outline-offset: 2px;`
- selected (track): `background: var(--accent-mustard); color: var(--jacket-ink); padding: 8px 12px;` — like highlighting a track on the liner-note tracklist
- disabled: `opacity: 0.35; filter: grayscale(0.5);` — out of pressing
- drag: `cursor: grab; transform: rotate(-2deg); box-shadow: 0 24px 48px rgba(20,17,13,0.3);` — lifting a sleeve from the crate

---

## motion & feedback

transitions: `0.2–0.4s ease` default — paced, tactile, the weight of a cardboard sleeve being handled. Nothing flashy.

vinyl-rotation animation (signature): vinyl-record visualizations rotate slowly at `33.33s` per revolution (or accelerated for visual effect at `3s linear infinite`) — slow continuous rotation, the grooves catching light.

```css
@keyframes spin-record {
  to { transform: rotate(360deg); }
}
.vinyl-record { animation: spin-record 3s linear infinite; transform-origin: center; }
```

needle-drop animation: when content loads or a track is selected, a small SVG needle/tonearm arcs into position over `0.6s ease-out`, settling on the outer edge of a vinyl record.

loading: a vinyl record rotates while a tonearm SVG slowly arcs over it. Text label in Tenor Sans uppercase: `CUEING UP...` or `SIDE A · TRACK 01`.

success: a subtle accent-mustard ripple expands from the affected element via `box-shadow` expansion over `0.5s ease-out`. Text in Tenor Sans uppercase: `RECORDED.` or `SAVED TO COLLECTION.`

error: the element border switches to `--accent-burnt` with `transition: 0.3s ease;`. Italic Source Serif message: `Pressing unavailable — try another.` or `Record skips here.`. No flash; the album doesn't shake.

page enter: sleeves arrange themselves on a "shelf" — each card translates from `translateX(-12px)` and slightly rotates `rotate(-1deg) → rotate(0)` while fading in over `0.5s ease-out`, staggered `0.08s` per card. Like browsing a record-store rack.

side-flip transition (signature): for switching between SIDE A and SIDE B content, the page flips via a 3D `rotateY(180deg)` over `0.9s ease-in-out`, suggesting physically flipping the record.

---

## atmosphere

- cardboard paper grain: subtle SVG noise texture overlay on `--jacket-cardboard` surfaces at very low opacity — uncoated cardboard feel
- offset-print registration: hero compositions can include slight CMYK-misregistration effects on display type — a subtle `--accent-burnt` ghost shadow offset 2–3px from the main `--jacket-ink` type, like imperfect offset printing
- vinyl-gloss highlight: vinyl-record visualizations have a soft `radial-gradient` highlight `background: radial-gradient(ellipse at 30% 30%, var(--gloss-highlight) 0%, transparent 50%);` — the warm gloss of a fresh pressing under listening-room lights
- coffee-ring stain (optional ambient): a very subtle SVG ring stain at low opacity placed somewhere on the page background — the record-store-counter coffee mug
- images: `filter: contrast(1.05) saturate(0.92);` with `1px solid var(--jacket-ink)` borders. Album-cover photographs should feel printed: slight desaturation, hard edges, no glossy modern depth.
- the record-store-bin layout: hero sections can display multiple album covers in a tight horizontal row with slight overlap (`margin-left: -32px` on subsequent covers), like flipping through a crate

---

## editorial voice

button labels: record-store/listening-room imperatives. `PLAY`, `FLIP THE RECORD`, `READ THE LINER NOTES`, `ADD TO COLLECTION`, `VIEW PERSONNEL`, `BUY THE PRESSING`, `FLIP TO SIDE B`, `CUE UP NEXT`. uppercase Tenor Sans. confident, music-literate.

headings: album-jacket style. `LIVE AT THE VILLAGE VANGUARD`, `SIDE A · 1971`, `THE PERSONNEL`, `LINER NOTES BY NAT HENTOFF`, `RECORDED FEBRUARY 12, 1969 · RUDY VAN GELDER STUDIOS`. Uppercase Tenor Sans for titles, italic Source Serif for liner-note headings.

metadata: liner-note label format. `Recorded: Rudy Van Gelder Studio, Englewood Cliffs, NJ`, `Engineer: Rudy Van Gelder`, `Producer: Alfred Lion`, `Label: Blue Note Records`, `Catalog: BST 84003`, `Released: 1965`. Title case Source Serif.

placeholders: italic Source Serif. `liner note...`, `album title...`, `featured personnel...`, `catalog number...`. lowercase, italic.

empty states: `No records in this crate.`, `The shelf is empty — start the collection.`, `No tracks listed for this side.`, `Out of pressing.`. Sentence case, vinyl-collector register.

error messages: `Pressing unavailable.`, `Record skips on this track — try another.`, `Catalog reference incomplete.`, `Side B is blank.`. Period, terse, music-literate.

success messages: `Added to the collection.`, `Track logged.`, `Side flipped.`, `Pressing confirmed — shipping now.`. Period, satisfied collector tone.

---

## cursor & selection

- default: `cursor: default`
- interactive: `cursor: pointer`
- text input: `cursor: text; caret-color: var(--accent-burnt);`
- drag: `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--accent-mustard); color: var(--jacket-ink); }` — selection is 70s mustard yellow
- optional creative cursor: a small SVG tonearm needle follows the mouse with lerp on creative pages

---

**when to reach for this genome**

Use `vinyl_jacket.lp` when the prompt asks for LP jackets, album covers, gatefold sleeves, liner notes, record labels, track listings, vinyl crate browsing, pressing metadata, Blue Note/ECM/Hipgnosis-style cover systems, or any product that should feel like a square cardboard record sleeve designed to be held while the music plays.

Reach for it when the concrete cues are 12-by-12 square compositions, cardboard and inner-sleeve paper, offset-print ink, square album-cover photography, spine bands, Side A/Side B track lists, catalog numbers, personnel credits, record-label circles, vinyl grooves peeking from behind a sleeve, 33 rpm metadata, and music-literate commands such as `PLAY`, `FLIP THE RECORD`, `READ THE LINER NOTES`, or `ADD TO COLLECTION`.

Do not use it for wood-paneled listening rooms, receiver dashboards, amplifier controls, speaker setups, VU meters, tonearm controls, or audiophile equipment rituals; use `listening_room.hifi`. Do not use it for cassette J-cards, mixtape handwriting, Dolby marks, magnetic tape shells, or A/B recording logs; use `cassette_inlay.tape`. Do not use it for 90s rave flyers, warehouse lineups, club-night posters, or single-color riso broadsides; use `groove_flyer.90s`. Do not use it for click-wheel navigation, Aqua-era digital music libraries, or pocket MP3 hardware; use `clickwheel_pod.aqua`. Do not use it for VHS rental clamshells, rewind stickers, late fees, membership cards, or video-store shelves; use `videostore_rental.vhs`.

It is strongest when the primary artifact is the printed music package: cover, sleeve, spine, label, insert, liner note, track list, and pressing record. If the prompt centers playback equipment, cassette media, event promotion, digital players, or video rental, route away from the LP jacket.

---

## anti-patterns — this genome NEVER:

1. uses bright modern brand colors (electric blue, neon green, hot magenta). The palette is 70s-cardboard: mustard, burnt orange, teal, rust, plus cardboard cream and ink black. Modern neon brands feel anachronistic.
2. uses border-radius above 4px on rectangular sleeves and cards. Album covers are square cardboard with crisp corners. The only round elements are vinyl-record visualizations (`50%`) and pill badges (`999px`).
3. uses serif body type indiscriminately. Serif belongs to liner notes and credits (Source Serif). Display and primary nav are clean modernist sans (Tenor Sans). Mixing wrong way breaks the Blue Note / ECM logic.
4. uses fast snappy animations. Motion is paced and tactile — the weight of cardboard, the speed of a record turning. `0.2–0.4s ease`, no bounce, no spring.
5. uses casual modern UX copy. Voice is music-literate: `Flip the record.`, `Read the liner notes.`, `Added to the collection.`. Never `Click here!`, `Sign up free!`, or marketing-speak.
6. uses photographs with bokeh, lens flare, or stylized depth. Album-cover photography is graphic, intentional, often desaturated — Hipgnosis surrealism, Reid Miles minimalism, ECM landscapes. Stock-photo-friendly glamour shots feel wrong.
7. mixes too many 70s accent colors on one page. Each page leads with one dominant accent (mustard, burnt orange, teal, OR rust); the others may appear only as small inline details. More than two prominent accents becomes a kitschy hodgepodge.
8. uses theatrical drop shadows or web-3D depth effects. Shadows are soft and short — the gentle drop of a square cardboard sleeve on a wooden table, never theatrical neon glow.
9. uses uppercase serif for headings. Display uppercase is always Tenor Sans / Futura clean modernist; uppercase serif feels like a wedding invitation, not an album cover.
10. uses bouncy or springy easing curves. All motion is `ease`, `ease-in-out`, `linear`. Vinyl rotates at constant speed; cardboard does not bounce; the cardboard square slides with weight.
