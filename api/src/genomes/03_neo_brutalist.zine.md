---
id: "03"
name: neo_brutalist.zine
keywords:
  - punk
  - chaotic
  - zine
  - collage
  - xerox
  - anti-design
  - DIY
  - raw
  - loud
  - brutalist
  - riso
  - activist
  - poster
  - underground press
---

### genome 03: `neo_brutalist.zine`

> identity: lo-fi xerox art meets high-end web. punk collage. riso-printed, hand-assembled, aggressively intentional. a zine you'd buy at a DIY art fair, except it's fully interactive.

**surface**
- colors: `--bg: #F3EFEA; --ink: #000000; --pink: #FF70B3; --cyan: #16A2F9; --green: #00984A; --yellow: #FFD700;`
- typography: `"Helvetica Neue", Helvetica, Arial, sans-serif`. the defining typographic move: deliberately mix `font-weight: 200` (thin/ultralight) with `font-weight: 900` (black/heavy). the extreme contrast IS the design. `text-transform: uppercase`. sizes: display 48–96px (900 weight), body 12–14px (`font-weight: 400`), labels 10–11px (200 weight). line-height: tight on display (0.9–1.0), comfortable on body (1.5).
- borders: `2px solid var(--ink)` on major panels. `1px solid var(--ink)` on internal elements. `border-radius: 0px`. no exceptions.
- spacing: rigid grid. `gap: 0` between major sections (they share borders). `padding: 12–16px` inside sections. negative margins where sections overlap. the layout feels physically assembled — taped, stapled, collaged.

**color distribution**
- 50% warm paper (`--bg: #F3EFEA`) — the "newsprint" surface.
- 25% black (`--ink`) — borders, text, structural weight.
- 25% distributed across the four accent colors (`--pink`, `--cyan`, `--green`, `--yellow`) — these cycle through UI elements: section headers, badges, button fills, highlights. no single accent dominates. the variety is the point.

**component patterns**
- buttons: "sticker" style. `box-shadow: 4px 4px 0px var(--ink); border: 2px solid var(--ink)`. varied background colors per button (rotate through pink, cyan, green, yellow). uppercase. `padding: 12px 24px`.
- inputs: `border: 2px solid var(--ink); border-radius: 0`. thick. focus: add a colored left accent strip (`border-left: 4px solid var(--pink)`). label in thin 200-weight above.
- cards/panels: `border: 2px solid var(--ink)`. colored header bar (different color per card). no shadow — the border IS the elevation.
- navigation: sticker-buttons in a row. active: pressed flat (shadow removed, position shifted). optional: a badge element with `transform: rotate(-2deg)`.
- headers: full-width, thick bottom border. title in 900-weight black. subtitle in 200-weight thin. the weight contrast is extreme and intentional.
- footers: thick top border. option A: inverted (`background: var(--ink); color: var(--bg)`). option B: alternating color blocks side by side.
- lists: bold numbering (`01`, `02`). items separated by thin ink borders. no bullets.
- tables: all cells have ink borders. header: one of the accent colors as background. rows alternate `--bg` and white.
- dividers: `2px solid var(--ink)`. full-width. occasionally doubled (two 1px lines 4px apart).
- modals: thick black border. colored header bar. no blur, no soft shadow. feels like a flyer pinned to a corkboard.
- tooltips: `border: 2px solid var(--ink); background: var(--pink)` (or cycling accent color); `padding: 6px 12px; border-radius: 0; transform: rotate(-1deg)`. sticker style. `box-shadow: 3px 3px 0px var(--ink)`.
- badges/tags: solid color fill (pink, cyan, green), black text, `0px radius`, optional slight rotation (`transform: rotate(-1deg) to rotate(-3deg)`).

**interaction language**
- hover: colored underline that cycles in fixed order: pink → cyan → green → yellow (cycling on each subsequent hover). or: slight element rotation (1–2°). `transition: transform 0.1s ease`.
- active/pressed: `transform: translate(3px, 3px); box-shadow: 0px 0px 0px var(--ink);` — the sticker presses completely flat.
- focus: `outline: 3px solid var(--cyan); outline-offset: 0px`.
- selected: background fills with one of the accent colors, text stays black.
- disabled: diagonal hatch overlay via `repeating-linear-gradient(45deg, transparent, transparent 4px, var(--ink) 4px, var(--ink) 5px)` at 10% opacity.
- drag: element gains thicker shadow `6px 6px 0px var(--ink)` and rotates slightly.

**motion & feedback**
- transitions: fast and snappy. `transition: transform 0.1s ease, box-shadow 0.1s ease`. no smooth easing — this genome "thunks" into place.
- loading: a "LOADING..." label that "stamps" onto the page — appears at a slight rotation with full shadow, then settles.
- success: a rubber-stamp element appears: rotated 5–10°, colored background (pink), black border, reads "DONE!" or "PRINTED!" or "SENT!". visible for 1.5 seconds.
- error: aggressive shake (±6px, 3 times, 60ms each). element briefly flashes a red background.
- page enter: elements can "tumble in" — starting at `rotate(-8deg) translateY(20px)` and snapping to `rotate(0) translateY(0)` over 0.15s. or: no animation at all (also valid for this genome).

**atmosphere**
- background: `#F3EFEA` — warm paper/newsprint tone.
- the root container has `box-shadow: 8px 8px 0px var(--ink)` — the entire app is a card sitting on a surface.
- decorative glyphs scattered in section corners: `✦`, `◆`, `●`, `▲`, `✕`. small (10–14px), in black.
- images: `filter: grayscale(1) contrast(1.3)` by default. on hover: color returns (`filter: none`). `border: 2px solid var(--ink)`.
- optional: a subtle paper texture via CSS noise pattern at 3–5% opacity.

**editorial voice**
- button labels: bold, punchy, imperative. `READ THIS`, `ENTER`, `SEE MORE`, `SEND IT`, `PRINT`. all-caps. short.
- headings: loud, declarative, sometimes confrontational. `WE DON'T DO BORING`, `MAKE SOMETHING`, `PORTFOLIO INDEX`, `ABOUT US (SORT OF)`. mix 900/200 weights within a line for emphasis contrast.
- metadata: terse, coded. `NO.01`, `VOL.03`, `ISS.12`, `2025`, `NYC/TLV`.
- placeholders: `TYPE SOMETHING...`, `YOUR NAME HERE...`, `WHAT DO YOU WANT?`.
- empty states: `NOTHING YET.`, `THIS SPACE IS EMPTY.`, `START MAKING.`.
- error messages: blunt. `NOPE.`, `THAT DIDN'T WORK.`, `TRY AGAIN.`.
- success messages: `DONE!`, `SENT!`, `NICE.`, `PRINTED!`.

**cursor & selection**
- cursor: `crosshair` globally (the collage/cutting metaphor). `pointer` on interactive elements.
- text selection: `::selection { background: var(--ink); color: var(--bg); }`.

**anti-patterns — this genome NEVER:**
- uses border-radius on anything. zero. not even 1px.
- uses soft shadows (`box-shadow` with blur). only hard offset shadows (e.g., `4px 4px 0px`).
- uses gradient fills on any element.
- uses thin or medium font weights on headings. display text is always 900.
- uses smooth, slow transitions (anything >150ms).
- uses subtle, muted colors. the accents are full-saturation and unapologetic.
- uses polite, corporate-safe language. the voice is direct and slightly irreverent.
- uses backdrop-filter or blur effects. this genome is crisp and hard-edged.

**when to reach for this genome**

When the request is for a creative portfolio, art-fair flyer, indie band site, activist landing page, anti-corporate brand, music label, or anything that should feel hand-assembled and intentionally loud. Reach for it specifically when the user wants the artifact to NOT look like a polished SaaS — when the punk/zine/DIY energy is the point.

**page archetype guidance**

- landing page: oversized 900-weight title that bleeds off the edge, mixed 200/900 weight contrast, sticker-button CTA in a different accent color, sections separated by thick 2px black bars, accent-color side panels.
- dashboard: cards with thick borders and offset hard shadows, headers in cycling accent colors (one card pink-header, next cyan-header, next green-header), metrics displayed as oversized 900-weight numerals.
- portfolio: an asymmetric collage of project cards, each at a slight rotation (1–3°), accent-color labels, hover restores grayscale-filtered images to full color.
- about page: thick black borders, mixed weight typography, decorative `✦ ◆ ●` glyphs in corners, alternating panel backgrounds.

**production implementation notes**

Use these concrete defaults when turning the genome into production HTML/CSS:

```css
:root {
  --bg: #F3EFEA;
  --paper: #FFFDF7;
  --ink: #000000;
  --pink: #FF70B3;
  --cyan: #16A2F9;
  --green: #00984A;
  --yellow: #FFD700;
  --red: #FF2B2B;
  --shadow-hard: 4px 4px 0 #000000;
  --shadow-hard-lg: 8px 8px 0 #000000;
}
```

- body shell: `background: var(--bg); color: var(--ink); font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;`.
- root layout: `max-width: 1180px; margin: 0 auto; padding: clamp(12px, 3vw, 32px); border-left: 2px solid var(--ink); border-right: 2px solid var(--ink);`.
- section bands: major page sections should touch with shared borders; use `margin-top: -2px` to avoid double-thick seams.
- collage grid: use `display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 0;` and let cards span irregular tracks like `span 5`, `span 7`, `span 4`.
- mobile layout: collapse to one column but keep thick top/bottom borders, colored header strips, and sticker offsets.
- display type: `font-size: clamp(44px, 10vw, 104px); line-height: 0.88; font-weight: 900; text-transform: uppercase;`.
- body copy: keep at `13px` or `14px`; the body can be readable, but never polished into corporate brochure copy.
- mixed weight headings: wrap a few words in `font-weight: 200` inside a 900-weight heading; the thin words should feel like pasted captions.
- labels: `font-size: 10px; font-weight: 200; text-transform: uppercase; letter-spacing: 0;` and sit directly above controls.
- buttons: `min-height: 44px; padding: 10px 18px; border: 2px solid var(--ink); border-radius: 0; box-shadow: var(--shadow-hard); text-transform: uppercase; font-weight: 900;`.
- destructive buttons: use `background: var(--red); color: var(--ink);` with a diagonal hatch on hover, not a soft warning style.
- icon buttons: square, never circular; `width: 44px; height: 44px; border: 2px solid var(--ink); box-shadow: 3px 3px 0 var(--ink);`.
- segmented controls: each segment is its own bordered sticker; no shared soft pill container.
- tabs: tab strip is a row of offset labels; active tab has `background: var(--yellow); transform: translate(2px, 2px); box-shadow: none;`.
- nav drawers: use full-height panels with `border-right: 2px solid var(--ink); background: var(--paper);` and accent blocks for active items.
- forms: fields are square, stacked, and loud; invalid fields add `outline: 4px solid var(--red);` plus `NOPE.` helper text.
- textareas: fixed square frame with `min-height: 132px; resize: vertical;` and a stamped character counter like `143/500`.
- checkboxes: 18px squares with `border: 2px solid var(--ink);`; checked state is a black `X` or solid accent fill, never a rounded checkmark.
- radio groups: use square tiles with large numerals or labels; selected tile gets `background: var(--cyan);`.
- sliders: chunky track `height: 8px; background: var(--ink);` with square thumb `width: 22px; height: 22px; background: var(--yellow); border: 2px solid var(--ink);`.
- cards: allow `transform: rotate(-1deg)` or `rotate(1deg)` on repeated cards, but keep important form and table surfaces unrotated for usability.
- project cards: image top, colored issue label, thick border, metadata row; hover removes grayscale filter and flattens the sticker shadow.
- tables: use uncompromising ink grid; header row may rotate color per table, but cells stay aligned and readable.
- charts: use black axes, thick 2px strokes, accent fills in cycling order; labels may be sticker callouts but chart geometry stays precise.
- modals: render as pasted sheets with an accent header, `box-shadow: var(--shadow-hard-lg);`; backdrop can be a flat translucent black at `rgba(0,0,0,0.35)` but never blur.
- accordions: headers are full-width bordered strips; open state swaps to an accent fill and adds a black `+`/`-` marker.
- tooltips: use accent paper slips with hard shadows; keep max width `220px`; rotate by no more than `-1deg`.
- badges: use text like `NO.04`, `RISOGRAPH`, `LIVE`, `ISSUE 12`; rotate badges only when they are decorative metadata, not status-critical.
- dividers: prefer repeated ink marks such as `/////` or doubled rules; keep them full width and hard edged.
- image treatment: grayscale and high contrast by default; hover or selected state restores color; never blur thumbnails for atmosphere.
- paper texture: use a subtle monochrome noise at 3-5% opacity; it should feel like xerox grain, not soft beige stationery.
- hover timing: keep all hover transforms at `100ms` or below; the interaction should punch, not glide.
- active timing: flatten sticker shadows immediately; do not animate box-shadow through many intermediate values.
- drag state: increase hard shadow to `8px 8px 0 var(--ink)` and use `cursor: grabbing`; drop preview is a 2px dashed black rectangle.
- loading state: stamp one word at a time: `PRINTING`, `COLLATING`, `STAPLING`; each stamp may rotate `-3deg` to `3deg`.
- success state: rubber-stamp `DONE!` or `POSTED!` with a 1.5s timeout; do not replace it with a polished toast.
- error state: shake at 60ms steps and keep the error copy blunt; red is permitted here because it is a poster warning, not a corporate alert.
- reduced motion: keep rotations static and replace tumble-in with instant placement; the layout still reads as collage through borders, color, and offset shadows.
- cursor refinement: `crosshair` works for broad creative/editorial pages; production forms may use `text` on inputs and `pointer` on controls so usability is not sacrificed.
- selection refinement: `::selection { background: var(--yellow); color: var(--ink); }` is acceptable for dense text; use black-on-paper selection only when contrast stays readable.
- keyboard focus: use `outline: 3px solid var(--cyan); outline-offset: -3px;` on square controls so focus feels printed onto the element.
- editorial examples: `OPEN THE FILE`, `MAKE NOISE`, `SUBMIT COPY`, `POST IT`, `TEAR DOWN`, `ISSUE NO.02`, `FIELD NOTES`, `THE LIST`.
- metadata examples: `VOL.07 / SIDE B`, `PRINT RUN: 250`, `CUT 03`, `UPDATED: MIDNIGHT`, `CITY: TLV`, `SOURCE: XEROX`.
- empty state examples: `THE WALL IS BLANK.`, `NO CUTTINGS YET.`, `START WITH ONE UGLY DRAFT.`
- selection guidance: choose this over `modern_studio.pro` when the brief asks to reject polish and feel handmade, noisy, and public.
- selection guidance: choose this over `lab_manual.80s` when strict grids should feel pasted and activist rather than institutional and clinical.
- selection guidance: choose this over `skatepark_zine.grip` when the output should be print-collage and art-fair editorial, not specifically skate culture.
- anti-pattern specificity: never use pill buttons, rounded avatars, floating glass nav, pastel wellness palettes, or gentle empty-state illustrations.
- anti-pattern specificity: never let random rotations break reading order; chaos is composed, not accidental.
- anti-pattern specificity: never soften the black ink with gray borders; if a boundary matters, it is pure black.

**production recipes**

- Landing page recipe: title bleeds near an edge, one sticker CTA, one grayscale hero image, and a bordered issue-index strip visible below the fold.
- Portfolio recipe: project cards vary spans across a 12-column grid; each has an issue number, accent strip, image, and one blunt CTA.
- Event page recipe: schedule rows look like pasted tickets; time blocks use black numerals on yellow or cyan fills; RSVP is a hard-shadow sticker.
- Activist page recipe: lead with a poster headline, then a dense action list; forms must be direct and visible, not hidden behind soft modals.
- Editorial article recipe: use a huge uppercase deck, thin-weight kicker, thick horizontal rules, pull quotes in accent blocks, and numbered sections.
- Shop/product recipe: product photos can be grayscale cutouts with black borders; price tags are rotated stickers; add-to-cart presses flat.
- Dashboard recipe: acceptable only when the user asks for a loud operational surface; metrics are oversized posters, not quiet SaaS cards.
- Form recipe: label, input, helper/error, and button all share the same column; no floating labels; no rounded inline validation chips.
- Search recipe: giant square search field with `WHAT DO YOU WANT?` placeholder and accent submit button; result rows are bordered clippings.
- Timeline recipe: thick vertical ink rule, entries as staggered paper slips, dates as `NO.01`, `NO.02`, not polished calendar cards.
- Navigation recipe: header can be asymmetrical, but every nav target remains discoverable and keyboard focusable.
- Mobile recipe: reduce rotations first, not border weight; keep 2px borders and hard shadows even on small screens.
- Mobile CTA recipe: sticky bottom sticker with `box-shadow: 0 -2px 0 var(--ink)` or hard offset; never a translucent iOS bar.
- Copy rule: confrontation is useful, cruelty is not; keep the voice blunt and public without insulting the user.
- Color rule: accent colors rotate by component order; do not assign pink only to "fun" and green only to "success" unless semantics require it.
- Status rule: success may be pink/yellow stamp; error may use red; disabled always gets hatch or strike, not low opacity alone.
- Focus rule: cyan focus must be visible against every accent fill; add an inner black outline when focus lands on cyan components.
- Hit target rule: visual chaos cannot shrink targets below 44px on touch controls.
- Reading order rule: DOM order stays logical even when the visual layout is collaged.
- Texture rule: one paper/xerox texture layer is enough; do not stack noise, halftone, grain, and scanlines at once.
- Halftone rule: use halftone on images or section backgrounds, not on body text.
- Shadow rule: hard shadows come from the same lower-right direction unless a card is intentionally "pasted" at a slight angle.
- Border rule: if two panels touch, collapse borders with `margin-left: -2px` or shared grid lines; do not create accidental 4px seams.
- Icon rule: icons should be simple black pictograms or stamped glyphs; avoid friendly rounded line icons unless squared by the surrounding button.
- Loading copy examples: `PRINTING...`, `CUTTING...`, `PASTING...`, `COLLATING...`.
- Error copy examples: `NOPE.`, `MISSING FIELD.`, `FILE JAM.`, `TRY AGAIN.`.
- Success copy examples: `POSTED!`, `DONE!`, `PRINTED!`, `ON THE WALL.`, `SENT.`.

**implementation safeguards**

- Preserve intention: the layout may look handmade, but alignment, hit targets, reading order, and focus order must be deliberate.
- Preserve the print metaphor: borders are ink, shadows are offset paper, colors are ink passes, images are xerox/riso assets.
- Use rotation sparingly: one rotated badge or card per cluster is enough; forms, navigation, and tables usually stay square.
- Use color blocks as structure: accent fills mark sections, headers, CTAs, and stamps; avoid sprinkling colors as random confetti.
- Use black type by default: colored text is secondary to colored paper blocks; pure black carries the zine authority.
- Use hard hierarchy: 900-weight display, 200-weight captions, 400-weight body; avoid middle-weight mush in key headings.
- Use visible seams: adjacent sections should show borders, staples, strips, or shared rules; do not let the page dissolve into whitespace.
- Use real content quickly: show the project, poster, product, article, schedule, or action list in the first viewport.
- Use blunt affordances: controls should look clickable through border, fill, shadow, and pressed-flat behavior.
- Use hatch states for unavailable controls; opacity alone feels like disabled SaaS, not print rejection.
- Keep zine copy short: punchy headings and labels work; long body copy should be broken into numbered scraps or columns.
- Keep accessibility intact: high contrast is already strong, but focus and selected states still need unique outlines or stamps.
- Keep responsive collage readable: collapse irregular spans into a stacked order that still feels pasted through color strips and shadows.
- Keep body copy unrotated: rotate containers or labels, not paragraphs users need to read.
- Keep tables square and sober: zine styling can live in headers and borders; data cells should remain aligned.
- Keep images inspectable: the xerox filter is aesthetic, but hover/selected states should restore clarity when users need detail.
- Keep animation physical: stamp, press, shake, tumble; avoid fade-only transitions and smooth parallax.
- Keep modals loud but bounded: no full-screen chaos for a simple confirmation; use one pasted sheet with one decision.
- Keep the genome distinct: if corners become rounded or shadows become blurred, it has drifted into `modern_studio.pro`; if the grid becomes clinical and red-only, it has drifted into `lab_manual.80s`.
- Keep anti-design designed: every "wrong" placement must still support scanning, comparison, and action.

**signature techniques**

- sticker-button shadows: `box-shadow: 4px 4px 0px var(--ink)` on buttons + cards; hover `box-shadow: 0px 0px 0px var(--ink); transform: translate(3px, 3px)` snaps the sticker flat to the page. No blur ever.
- weight-contrast typography: every heading uses BOTH `font-weight: 900` AND `font-weight: 200` within the same line — the extreme contrast IS the design. "WE DO **NOT** BORING" with NOT in 900.
- accent color cycling: button/badge accent colors cycle deterministically through pink → cyan → green → yellow in DOM order, not at random. Each subsequent accent element gets the next color.
- slight rotation as polish: cards, badges, and tooltips can be `transform: rotate(-1deg)` to `rotate(-3deg)` — never more. The rotation is "hand-placed" not "off-axis".
- diagonal hatch for disabled: `repeating-linear-gradient(45deg, transparent, transparent 4px, var(--ink) 4px, var(--ink) 5px)` at 10% opacity — the "stamped REJECTED" feel for disabled states.
- entire-app shadow: the root container gets `box-shadow: 8px 8px 0px var(--ink)` — the whole app is one big stickered page sitting on a desk.
