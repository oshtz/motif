---
id: "75"
name: tattoo_flash.ink
keywords:
  - tattoo
  - flash
  - ink
  - traditional
  - sailor jerry
  - old school
  - parlor
  - shop
  - outline
  - americana
  - bold
  - banner
  - scroll
---

### genome 75: `tattoo_flash.ink`

> identity: Traditional American tattoo flash sheet. Sailor Jerry, Bert Grimm, Ed Hardy old-school designs pinned to the shop wall. Bold black outlines on manila paper, limited palette (red, green, yellow, navy), hand-lettered banner scrolls, catalog grid of individual designs with price numbers. The tattoo parlor wall — each piece a self-contained icon with thick confident linework.

---

## surface

Colors:
```
--manila-sheet: #F0E4CC;
--manila-aged: #E8D8B8;
--outline-black: #1A1510;
--outline-soft: #3A3228;
--tattoo-red: #C43B2E;
--tattoo-red-dark: #A32E22;
--hunter-green: #2E6B45;
--hunter-green-dark: #1E4F30;
--mustard-yellow: #D4A832;
--mustard-dark: #B89028;
--navy-blue: #1E3A5C;
--navy-light: #2A4E74;
--skin-highlight: #F5DEC4;
--skin-shadow: #E0C8A8;
--selection-bg: rgba(196, 59, 46, 0.15);
```

Typography:
- display/headings: `"UnifrakturCook", "Old English Text MT", fantasy` at `font-weight: 700`. `font-size: 28-48px`. `text-transform: uppercase`. `letter-spacing: 0.04em`. The gothic blackletter of traditional flash sheet titles and banner scrolls — carved, authoritative, old-world.
- labels/body: `"Oswald", "Anton", sans-serif` at `font-weight: 500-700`. `font-size: 12-14px`. `line-height: 1.4`. `text-transform: uppercase`. `letter-spacing: 0.06em`. Bold condensed — reads like catalog labels and price tags on the shop wall.
- catalog numbers/prices: `"Oswald", sans-serif` at `font-weight: 700`. `font-size: 16-22px`. `letter-spacing: 0.02em`. Design numbers and prices rendered large and legible — "$50" "NO. 75" — the pricing system of the flash wall.
- metadata/small: `"Oswald", sans-serif` at `font-weight: 400-500`. `font-size: 11-12px`. `letter-spacing: 0.06em`. `text-transform: uppercase`. Shop info, fine print, catalog references.
- sizes: display 36-48px, section headers 22-28px, body/labels 12-14px, catalog numbers 16-22px, metadata 11-12px.

Borders:
- primary: `2-3px solid var(--outline-black)`. `border-radius: 0px` — flash sheets are pinned rectangles, nothing rounded. Every element gets a bold black outline.
- heavy structural: `3px solid var(--outline-black)` on cards, panels, major containers. The confident thick outline of traditional flash art.
- inner dividers: `2px solid var(--outline-black)`. Even dividers carry weight — no hairlines exist in this genome.
- accent borders: `2px solid var(--tattoo-red)` or `2px solid var(--navy-blue)` on highlighted elements.
- no thin 1px lines, no dashed borders, no dotted borders. Every line is a bold ink stroke drawn with confidence.

Spacing:
- grid catalog layout — individual flash pieces arranged in rows/columns. `padding: 16-24px; gap: 12-16px`. Moderate density with clear separation between pieces.
- cards/pieces: `padding: 16-20px`. Each design occupies its own rectangle with breathing room but not excessive space — flash walls are dense catalogs.
- sections separated by `margin-bottom: 1.5-2rem`. Banner scroll dividers between major sections.

---

## color distribution

40% manila paper (`--manila-sheet`, `--manila-aged`) — the warm skin-tone ground. Flash sheets are drawn on manila and pinned to the wall. The paper dominates as the canvas. 25% outline black (`--outline-black`, `--outline-soft`) — thick outlines, text, structural borders. The bold confident linework that defines every tattoo design. 15% tattoo red (`--tattoo-red`) — hearts, roses, banners, primary accents. The most iconic color in traditional American flash. 8% hunter green (`--hunter-green`) — leaves, snakes, secondary fills. The organic accent color. 6% mustard yellow (`--mustard-yellow`) — lightning bolts, stars, tertiary fills, banner highlights. 4% navy blue (`--navy-blue`) — nautical elements, anchors, swallow fills, link accents. 2% skin highlight (`--skin-highlight`) — subtle warm highlights, secondary backgrounds.

---

## component patterns

Buttons: bold flash label — `background: var(--tattoo-red); color: var(--manila-sheet); border: 3px solid var(--outline-black); border-radius: 0px; font-family: "Oswald", sans-serif; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em; padding: 12px 28px; box-shadow: 3px 3px 0px var(--outline-black)`. Secondary: `background: var(--manila-sheet); color: var(--outline-black); border: 3px solid var(--outline-black)`. Navy: `background: var(--navy-blue); color: var(--manila-sheet); border: 3px solid var(--outline-black)`. Green: `background: var(--hunter-green); color: var(--manila-sheet); border: 3px solid var(--outline-black)`. All buttons are hard-edged rectangles with thick outlines and offset shadow — like labels on the shop wall.

Inputs: `background: var(--manila-sheet); border: 2px solid var(--outline-black); border-radius: 0px; color: var(--outline-black); padding: 10px 14px; font-family: "Oswald", sans-serif; font-weight: 400; font-size: 14px; text-transform: uppercase; letter-spacing: 0.04em`. Focus: `border-color: var(--tattoo-red); box-shadow: 0 0 0 2px rgba(196, 59, 46, 0.2)`. Placeholder: `color: rgba(26, 21, 16, 0.35); text-transform: uppercase`.

Cards: FLASH PIECES — `background: var(--manila-sheet); border: 3px solid var(--outline-black); border-radius: 0px; padding: 16px; position: relative`. Each card is one flash design — a self-contained tattoo pinned to the wall. Catalog number in top corner: `font-family: "Oswald"; font-weight: 700; font-size: 18px; color: var(--outline-black)` — e.g., "NO. 12". Price at bottom: `font-weight: 700; font-size: 16px; color: var(--tattoo-red)`. Content centered, bold outlined imagery implied. Cards arranged in a catalog grid — `display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px`.

BANNER SCROLL CARDS (alternate card style): card header wrapped in a banner/ribbon shape — CSS clip-path or pseudo-elements creating ribbon tails on left and right edges. `background: var(--mustard-yellow); border: 2px solid var(--outline-black); color: var(--outline-black); font-family: "UnifrakturCook", fantasy; text-transform: uppercase; padding: 8px 32px; text-align: center`. Content below on manila.

Navigation: shop wall top bar — `background: var(--outline-black); border-bottom: 3px solid var(--tattoo-red); padding: 0 2rem`. Nav items in Oswald 700 uppercase, `font-size: 14px`, `letter-spacing: 0.06em`, `color: var(--manila-sheet)`. Active item: `color: var(--mustard-yellow); border-bottom: 3px solid var(--mustard-yellow)`. Items spaced with `gap: 1.5rem`. No rounded shapes, no pills — just bold text labels on a dark bar.

Headers: FLASH SHEET TITLE — `background: var(--manila-aged); border: 3px solid var(--outline-black); border-radius: 0px; padding: 24px 32px; text-align: center`. Title in UnifrakturCook at 36-48px, `color: var(--outline-black)`, all caps. Subtitle in Oswald 500, `font-size: 14px`, `letter-spacing: 0.08em`, `color: var(--outline-soft)`. The header evokes a hand-lettered shop sign or flash sheet title banner.

Footers: `background: var(--outline-black); border-top: 3px solid var(--tattoo-red); padding: 16px 24px; color: var(--manila-aged)`. Text in Oswald 400 at 12px, uppercase. Links in `color: var(--mustard-yellow)`. Star/dagger decorations (★ ✦) between footer items. "CUSTOM WORK AVAILABLE" energy.

Lists: flash catalog roster — each item with a bold catalog number prefix in Oswald 700 (`"01."`, `"02."`), followed by the design name in Oswald 500 uppercase. Separated by `2px solid rgba(26, 21, 16, 0.15)`. Hovered row: `background: var(--skin-highlight)`. Selected row: `background: rgba(196, 59, 46, 0.08); border-left: 3px solid var(--tattoo-red)`.

Tables: price list board — `border: 3px solid var(--outline-black); border-radius: 0px; overflow: hidden`. Header row: `background: var(--outline-black); color: var(--manila-sheet); font-family: "Oswald", sans-serif; font-weight: 700; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; padding: 10px 16px`. Body cells: `background: var(--manila-sheet); color: var(--outline-black); border-bottom: 2px solid rgba(26, 21, 16, 0.1); padding: 10px 16px; font-family: "Oswald"; font-weight: 500`. Prices in `font-weight: 700; color: var(--tattoo-red)`.

Dividers: BANNER SCROLL — a centered ribbon/banner shape in mustard yellow with black outline containing section title text in UnifrakturCook, or a bold `2px solid var(--outline-black)` line flanked by small decorative elements (★ or ✦). `margin: 1.5rem 0`. Never a thin hairline — dividers carry weight and presence.

Modals: FLASH SHEET CLOSE-UP — `background: var(--manila-sheet); border: 3px solid var(--outline-black); border-radius: 0px; box-shadow: 6px 6px 0px var(--outline-black)`. Header: `border-bottom: 3px solid var(--outline-black); font-family: "UnifrakturCook", fantasy; font-size: 24px; text-transform: uppercase; padding: 16px 20px`. Hard offset shadow creates depth like a sheet pulled from the wall for closer inspection. Backdrop: `background: rgba(26, 21, 16, 0.75)`.

Badges/tags: `background: var(--tattoo-red); color: var(--manila-sheet); border: 2px solid var(--outline-black); border-radius: 0px; font-family: "Oswald", sans-serif; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; padding: 3px 10px`. Variant — green: `background: var(--hunter-green); color: var(--manila-sheet)`. Variant — navy: `background: var(--navy-blue); color: var(--manila-sheet)`. Variant — outline: `background: transparent; border: 2px solid var(--outline-black); color: var(--outline-black)`. All badges are hard rectangles — stamped labels.

---

## interaction language

Hover: bold outline emphasis. Buttons: `box-shadow: 4px 4px 0px var(--outline-black); transform: translate(-1px, -1px)` — the piece lifts slightly off the wall. Cards: `box-shadow: 4px 4px 0px rgba(26, 21, 16, 0.2)`. Text links: `color: var(--tattoo-red); text-decoration: underline; text-underline-offset: 3px`. `transition: all 0.15s ease`. No glow, no softness — just a confident shift.

Active/pressed: stamped flat. Buttons: `box-shadow: 1px 1px 0px var(--outline-black); transform: translate(2px, 2px)` — pushed back flush to the wall. Cards: `box-shadow: none; transform: translate(1px, 1px)`. The interaction is pressure — pinning a design to the board.

Focus: `outline: 3px solid var(--tattoo-red); outline-offset: 2px`. On red backgrounds: `outline-color: var(--mustard-yellow)`. Hard rectangular focus ring — no rounded outlines, no soft glow.

Selected: `background: var(--tattoo-red); color: var(--manila-sheet)`. Or on lighter elements: `border-left: 3px solid var(--tattoo-red); background: rgba(196, 59, 46, 0.06)`. Selection is a bold flat fill — chosen from the catalog.

Disabled: faded photocopy. `opacity: 0.3; filter: grayscale(0.6)`. Borders become `rgba(26, 21, 16, 0.2)`. The element looks like a washed-out xerox of the original flash — not available.

Drag: element lifts off the wall. `box-shadow: 8px 8px 0px rgba(26, 21, 16, 0.2); transform: rotate(-2deg)`. Slight rotation as if unpinned from the board and held at an angle.

---

## motion & feedback

NONE for decorative purposes. Flash sheets are static reference art pinned to the wall. Zero animation, zero decorative motion. The only permitted transitions are functional state changes:

Transitions: `transition: all 0.15s ease` on hover/active/focus state changes ONLY. Minimal duration, no flourish. The sheet doesn't move — you move toward it.

Loading: static text only — `"LOADING..."` in Oswald 700 uppercase, `color: var(--outline-black); letter-spacing: 0.1em`. No spinner, no animation, no pulsing. A simple bold text indicator like a hand-written sign: "BACK IN 5 MINUTES."

Success: static confirmation — bold text in hunter green. `"DONE"` or `"SELECTED"` in Oswald 700. A green checkmark (✓) rendered as a static bold character. No animation, no scale-in, no fade — it appears immediately and stays.

Error: static alert — bold text in tattoo red. `"ERROR"` or `"NOT AVAILABLE"` in Oswald 700. `border: 2px solid var(--tattoo-red)` around the error container. No shake, no wobble — the sign just says what it says.

Page enter: instant. No staggered reveals, no fade-ins, no slide-ups. Content appears fully rendered like walking up to the flash wall — everything is already there, pinned and waiting.

---

## atmosphere

Background: `var(--manila-sheet): #F0E4CC` — warm manila paper. The body carries a subtle paper grain texture: a faint noise pattern at `opacity: 0.03-0.05` overlaid as a CSS background image. The surface is never flat digital white — it is manila stock, the kind of paper flash sheets are traditionally drawn on.

Pin marks: tiny dark circles at card corners at `opacity: 0.08-0.12` — `width: 6px; height: 6px; border-radius: 50%; background: var(--outline-black)` — suggesting thumbtack holes where flash sheets are pinned to the parlor wall. Positioned via `::before` / `::after` pseudo-elements on cards.

Shop wall texture: the page background carries a very faint warm woodgrain or corkboard texture at `opacity: 0.02-0.04` — the parlor wall behind the pinned sheets. Implemented as a subtle repeating CSS background pattern.

Bold linework: every visible element carries a confident thick outline. No element floats without containment — `border: 2px solid var(--outline-black)` minimum on all containers, cards, inputs, buttons. The line is the fundamental unit of tattoo art.

Catalog grid: the overall layout is a grid of individual flash pieces — each one a self-contained design with its number and price, arranged in ordered rows on the wall. `display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px`. The composition is a catalog, not a narrative — browse and choose.

Images: `border: 3px solid var(--outline-black); filter: contrast(1.1) saturate(0.9)` — slightly boosted contrast, slightly desaturated, like hand-colored ink drawings. Images sit inside heavy black frames.

Ambient feel: the screen is a tattoo parlor wall — manila flash sheets pinned in rows, bold black outlines on everything, limited saturated color fills, hand-lettered banners, catalog numbers in the corners. Buzzing fluorescent overhead, the smell of green soap. Every piece is ready to be chosen and permanently applied.

---

## editorial voice

Button labels: direct, imperative, traditional. `SELECT DESIGN`, `BOOK NOW`, `VIEW FLASH`, `ADD TO LIST`, `GET INKED`, `CUSTOM ORDER`, `SEE DETAILS`, `HOLD`. All caps, short, commanding. The voice of the shop — no question marks, no hedging.

Headings: hand-lettered sign energy. `FLASH SHEET`, `TRADITIONAL DESIGNS`, `CUSTOM WORK`, `ARTIST PORTFOLIO`, `WALK-INS WELCOME`, `SELECT YOUR DESIGN`, `THE COLLECTION`, `PRICE LIST`. UnifrakturCook, all caps. Bold proclamations painted on the shop wall.

Metadata: catalog format. `NO. 75`, `SHEET 3 OF 8`, `$80`, `SM / MED / LG`, `EST. 1952`, `BY APPOINTMENT`, `2-3 HOURS`, `COLOR / BLACK & GREY`.

Placeholders: `SEARCH DESIGNS...`, `YOUR NAME...`, `DESCRIBE YOUR IDEA...`, `PLACEMENT...`.

Empty states: blunt, direct. `NO DESIGNS FOUND.`, `FLASH WALL EMPTY.`, `NOTHING HERE YET.`, `CHECK BACK SOON.`.

Error messages: `DESIGN NOT AVAILABLE.`, `TRY AGAIN.`, `SOMETHING WENT WRONG.`, `INVALID SELECTION.`.

Success messages: `DESIGN SELECTED.`, `BOOKING CONFIRMED.`, `ADDED TO YOUR LIST.`, `HOLD FAST.`, `DONE.`.

---

## cursor & selection

Cursor: `default` globally. `pointer` on interactive elements — buttons, links, cards, nav items. No custom cursors — the shop is straightforward.

Text selection: `::selection { background: var(--selection-bg); color: var(--outline-black); }` — pale red wash on manila, like a red ink smudge on the paper.

---

**when to reach for this genome**

Use `tattoo_flash.ink` when the prompt asks for a traditional tattoo parlor, old-school flash sheet, Americana icon catalog, artist booking wall, tattoo design picker, walk-in shop board, stencil library, or any product that should feel like bold ink drawings pinned to warm manila paper.

Reach for it when visual or product cues include Sailor Jerry, Bert Grimm, Ed Hardy, anchors, roses, daggers, swallows, panthers, hearts, banner scrolls, shop prices, catalog numbers, black stencil outlines, limited red/green/yellow/navy fills, placement notes, artist portfolios, and choose-from-the-wall workflows.

Do not use it for comic panels, speech bubbles, halftone action bursts, or sequential storytelling; use `panel_sequence.ink`. Do not use it for skate videos, punk xerox zines, grip tape, fisheye footage, or raw black/yellow street energy; use `skatepark_zine.grip`. Do not use it for layered graffiti stickers, USPS labels, paste-ups, torn corners, or lamppost accumulation; use `subway_sticker.bombing`. Do not use it for medieval gold leaf, vellum codices, rubricated chapters, or monastic blackletter drama; use `illuminated_codex.aureum`.

It is strongest when the interface can behave like a flash wall: browse individual designs, compare options, hold a piece, choose a size or placement, check price, and book the artist. If the prompt needs long reading, institutional polish, operational dashboards, or sticker-collage layering, route to the genome that owns that product metaphor.

## anti-patterns — this genome NEVER:

1. uses thin, light-weight, or minimal typography. Display text is ALWAYS gothic blackletter or bold condensed sans — heavy, confident, hand-lettered energy. No Helvetica Neue Light, no thin sans-serif, no delicate serifs.
2. uses border-radius on any element. `border-radius: 0px` everywhere — flash sheets are rectangular paper pinned to a flat wall. No pills, no rounded corners, no circles (except pin marks). Everything is a hard rectangle.
3. uses animation, transition sequences, or decorative motion of any kind. Flash sheets are STATIC reference art. No fade-ins, no slide-ups, no loading spinners, no bouncing, no pulsing. The only permitted motion is instantaneous state changes on hover/active/focus.
4. uses pastel, muted, or desaturated accent colors. The tattoo palette is BOLD and LIMITED — pure red, hunter green, mustard yellow, navy blue. No dusty rose, no sage, no mauve, no teal. Colors are saturated ink fills.
5. uses gradients, blur, glassmorphism, or backdrop-filter effects. Every color is flat and opaque — solid ink on paper. No linear-gradient on components, no frosted glass, no transparency effects beyond subtle background textures.
6. uses thin 1px hairline borders. Minimum border weight is 2px — the bold confident linework of traditional tattoo art. Most structural borders are 3px. Hairlines do not exist in this genome.
7. uses soft, rounded, or friendly design language (pill buttons, rounded cards, bubbly type, emoji, playful copywriting). The voice is DIRECT and TRADITIONAL — imperative phrases, all caps, no hedging, no exclamation marks used for friendliness.
8. uses pure white (#FFFFFF) or cool-toned backgrounds. The ground is ALWAYS warm manila — `#F0E4CC` or `#E8D8B8`. Flash art is drawn on warm paper, never on clinical white screens.
9. uses dense paragraph text, long descriptions, or conversational UI copy. Text is SHORT — labels, numbers, prices, imperative commands. The flash wall is a visual catalog with minimal text, not a blog post.
