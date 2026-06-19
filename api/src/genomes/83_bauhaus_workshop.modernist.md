---
id: "83"
name: bauhaus_workshop.modernist
keywords:
  - bauhaus
  - modernist
  - geometric
  - primary colors
  - albers
  - kandinsky
  - klee
  - geometric abstraction
  - dessau
  - weimar
  - moholy-nagy
  - de stijl
  - 1920s design
  - universal type
---

### genome 83: `bauhaus_workshop.modernist`

> identity: 1923 Bauhaus Dessau workshop poster. The geometric purity of Albers, Kandinsky's circle/triangle/square color theory, Moholy-Nagy's typographic experiments, Herbert Bayer's universal alphabet. Pure primary colors — Bayer red, Mondrian blue, Albers yellow — set against unprinted off-white paper with deep black ink. Not Soviet constructivism (genome 48, which uses red-black-cream propaganda diagonals) — this is the German design school: orderly, modular, didactic, optimistic about industry. Every element is a teaching example. The interface itself is a workshop exercise: this is how you compose primary forms on a grid.

---

## surface

colors:
```
--bauhaus-paper: #F2EDE0;     /* unprinted off-white paper — primary surface */
--bauhaus-cream: #ECE5D2;     /* slightly warmer paper variant */
--bauhaus-black: #15110D;     /* deep workshop ink — primary dark / text */
--bauhaus-red: #D8331E;       /* Bayer red — circle */
--bauhaus-blue: #1C3A8A;      /* Mondrian/Itten blue — triangle */
--bauhaus-yellow: #F0C20E;    /* Albers yellow — square */
--bauhaus-soft-red: rgba(216,51,30,0.16);
--bauhaus-soft-blue: rgba(28,58,138,0.14);
--bauhaus-soft-yellow: rgba(240,194,14,0.18);
--ink-medium: #524A40;        /* warm gray ink for secondary text */
--ink-faint: rgba(21,17,13,0.45);  /* tertiary text, dim labels */
--rule-line: #15110D;         /* the heavy black rule, structural */
--paper-grain: rgba(82,74,64,0.04); /* very faint paper noise */
```

typography:
- display/titles: `"Bayer Universal", "Futura", "Avenir Next", sans-serif` — `font-weight: 700–900; text-transform: lowercase; letter-spacing: -0.01em;` — sizes `3rem–8rem`. The Universal alphabet was lowercase-only as a Bauhaus reform; we honor it. Geometric sans-serif at monumental scale.
- body: `"Futura", "Avenir Next", sans-serif` — `font-weight: 400; font-size: 14–16px; line-height: 1.5; letter-spacing: 0.005em;` — clean geometric body type.
- meta/labels: `"Futura", sans-serif; font-weight: 600; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase;` — the rare uppercase usage, reserved for classification labels and metadata only.
- numerals: large bold numerals at display scale are a signature element — `font-family: "Futura"; font-weight: 900; font-size: 6–14rem; line-height: 0.85;` — used as decorative numbering, section markers, version stamps
- typographic hierarchy via SCALE and WEIGHT, never via decoration or italics. there are no italics in this genome.

borders:
- structural rules: `2–4px solid var(--bauhaus-black)` — thick black bars are the structural grammar. `border-radius: 0` on rectangular elements.
- circular elements (Bauhaus circles): perfect `border-radius: 50%` with no border or a thick 4px black border
- panel borders: optional `1px solid var(--bauhaus-black)` for utility cards; heavy 4px for hero panels
- divider rule: `height: 4px; background: var(--bauhaus-black);` — a thick black horizontal bar, not a thin hairline
- the genome has TWO border philosophies that coexist: 0px (hard rectangle, hard geometric) and 50% (perfect circle). Nothing in between except chip pills at 999px.

spacing:
- page edge: `4vw` horizontal padding
- grid: every layout aligns to a strict 12-column or 8-column modular grid with hard gridlines
- vertical rhythm: `8–12vh` between major sections
- card padding: `28–40px`
- moderate density. The Bauhaus loved the grid but also loved breathing space within it. Information is organized into clean rectangles with intentional negative space.

---

## color distribution

- 50% bauhaus-paper / bauhaus-cream — the paper surface that holds everything
- 22% bauhaus-black — text, structural rules, geometric solid shapes, body type
- 12% bauhaus-red — primary accent, the circle, CTA, hero color block
- 8% bauhaus-blue — secondary accent, the triangle, structural color block
- 6% bauhaus-yellow — tertiary accent, the square, highlight color block
- 2% ink-medium / ink-faint — secondary text only

the trick: each of the three primary colors appears as a SOLID, UNGRADIENTED, LARGE block somewhere on the page. The composition reads as paper + three primary geometric forms + black grid. Never use the primaries as small accent dots — they want to be field colors.

---

## component patterns

buttons:
- primary (red circle button or red rectangle): `background: var(--bauhaus-red); color: var(--bauhaus-paper); border: none; border-radius: 0; padding: 14px 32px; font-family: "Futura"; font-weight: 700; font-size: 0.95rem; letter-spacing: 0.04em; text-transform: lowercase;` — flat, no shadow, no gradient
- pill variant: `border-radius: 999px;` — a perfect capsule, the Bayer school's "round" alternative
- secondary (outline): `background: transparent; color: var(--bauhaus-black); border: 2px solid var(--bauhaus-black); border-radius: 0; padding: 12px 30px;`
- yellow CTA: `background: var(--bauhaus-yellow); color: var(--bauhaus-black);`
- blue CTA: `background: var(--bauhaus-blue); color: var(--bauhaus-paper);`
- ghost: `background: transparent; color: var(--bauhaus-black); border: none; text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 2px;`

inputs:
- `background: var(--bauhaus-paper); border: none; border-bottom: 2px solid var(--bauhaus-black); border-radius: 0; padding: 12px 0; font-family: "Futura", sans-serif; font-size: 1rem; color: var(--bauhaus-black);`
- label above: `font-family: "Futura"; font-weight: 700; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--bauhaus-black);`
- placeholder: `color: var(--ink-faint); text-transform: lowercase;`
- focus: `border-bottom-color: var(--bauhaus-red); border-bottom-width: 3px;`

cards/panels (workshop modules):
- standard: `background: var(--bauhaus-paper); border: 2px solid var(--bauhaus-black); border-radius: 0; padding: 32px;`
- color-field card (red/blue/yellow): the entire card surface is a primary color — `background: var(--bauhaus-yellow); color: var(--bauhaus-black); padding: 40px;` with no border (the color is the field)
- circle card: a perfect circle component `width: 240px; height: 240px; border-radius: 50%; background: var(--bauhaus-red); color: var(--bauhaus-paper); display: flex; align-items: center; justify-content: center; text-align: center; padding: 32px;` — used for special call-outs, hero numbers, or hero text
- triangle card: a triangle clip-path component `clip-path: polygon(50% 0%, 100% 100%, 0% 100%); background: var(--bauhaus-blue); color: var(--bauhaus-paper);` — used as decorative or as small navigation tiles
- card layouts often place a red circle, blue triangle, and yellow square at the corners of the composition — the Kandinsky form-color exercise rendered as actual UI

navigation:
- top bar: `background: var(--bauhaus-paper); border-bottom: 4px solid var(--bauhaus-black); padding: 24px 4vw; display: flex; justify-content: space-between;`
- brand: an oversized geometric mark — a perfect red circle next to a Futura wordmark in lowercase
- nav items: `font-family: "Futura"; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.02em; text-transform: lowercase; color: var(--bauhaus-black);` separated by `4–8px` thick black vertical bars
- active: `background: var(--bauhaus-red); color: var(--bauhaus-paper); padding: 4px 10px;` — a small red block highlight

headers/hero:
- hero title: `font-family: "Futura"; font-weight: 900; font-size: 6–14vw; line-height: 0.9; letter-spacing: -0.02em; text-transform: lowercase; color: var(--bauhaus-black);` — gigantic lowercase Futura
- hero subtitle: structural geometric block below the title, often a horizontal red bar at `height: 8px` running across the page width
- hero compositions: place an oversized numeral (e.g., `83.`) in `--bauhaus-red` to the left of the title; place a large blue triangle or yellow square as a counterweight on the right; let the typography dominate the center
- decorative numerals: large `font-family: "Futura"; font-weight: 900; font-size: 8–16rem; color: var(--bauhaus-black);` numbers used as compositional anchors

footers:
- `background: var(--bauhaus-black); color: var(--bauhaus-paper); padding: 48px 4vw;`
- a thick yellow horizontal bar at the top: `border-top: 12px solid var(--bauhaus-yellow);`
- columns of Futura lowercase links, separated by yellow bullet dots
- copyright: `font-family: "Futura"; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase;` reading `bauhaus dessau · 1923 · v.1`
- a final geometric ornament: a single red circle in the bottom-right corner of the footer

dividers (signature):
- thick black horizontal rule: `height: 4px; background: var(--bauhaus-black); margin: 48px 0;` — never a thin hairline, always a solid bar
- alternate: a row of three geometric forms (red circle, blue triangle, yellow square) used inline as ornamental dividers between sections
- never use a CSS `<hr>` default — every divider is intentional, geometric, structural

lists:
- prefixed with a small geometric form: a red filled circle, a blue triangle, or a yellow square (rendered via SVG or `::before` pseudo-element at `1em` size)
- ordered lists: large Futura bold number with a `.` followed by item text
- item text: lowercase Futura body, no special decoration
- nested lists are visually distinguished by an indented vertical black bar `border-left: 4px solid var(--bauhaus-black); padding-left: 16px;`

tables:
- header: `background: var(--bauhaus-black); color: var(--bauhaus-paper); font-family: "Futura"; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 14px 20px; border-bottom: 4px solid var(--bauhaus-black);`
- body rows: `font-family: "Futura"; color: var(--bauhaus-black); padding: 14px 20px; border-bottom: 1px solid var(--bauhaus-black);`
- alternating rows: every other row gets a soft yellow `--bauhaus-soft-yellow` background
- "active" row: full red field — `background: var(--bauhaus-red); color: var(--bauhaus-paper);`

modals (workshop card popup):
- `background: var(--bauhaus-paper); border: 4px solid var(--bauhaus-black); border-radius: 0; padding: 48px 40px; box-shadow: 12px 12px 0 var(--bauhaus-red);` — hard offset shadow in primary red, no blur
- title in oversized Futura lowercase
- close: a black square `width: 32px; height: 32px; background: var(--bauhaus-black); color: var(--bauhaus-paper);` with `×` glyph
- backdrop: `background: rgba(21,17,13,0.85);`

badges/tags:
- rectangular: `background: var(--bauhaus-black); color: var(--bauhaus-paper); padding: 4px 10px; font-family: "Futura"; font-weight: 700; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; border-radius: 0;`
- circle badge: `width: 32px; height: 32px; border-radius: 50%; background: var(--bauhaus-red); color: var(--bauhaus-paper);` — used for notification counts, status indicators
- yellow tag: `background: var(--bauhaus-yellow); color: var(--bauhaus-black);` — informational
- blue tag: `background: var(--bauhaus-blue); color: var(--bauhaus-paper);` — secondary

progress bars:
- `height: 12px; background: var(--bauhaus-cream); border: 2px solid var(--bauhaus-black); border-radius: 0;`
- fill: `background: var(--bauhaus-red); height: 100%; border-radius: 0;` — solid red, no gradient
- label: large Futura bold percentage to the right, no decimals

tooltips:
- `background: var(--bauhaus-black); color: var(--bauhaus-paper); border-radius: 0; padding: 8px 14px; font-family: "Futura"; font-weight: 700; font-size: 0.7rem; letter-spacing: 0.04em; text-transform: lowercase;` — hard black square with white type

---

## interaction language

- hover (buttons): the primary color shifts darker by `~10%` and gains a `4px` offset color-block shadow in the complementary primary color — e.g., red button hover gets a yellow offset shadow `box-shadow: 6px 6px 0 var(--bauhaus-yellow);`. `transition: 0.15s ease;` — fast, mechanical
- hover (cards): solid offset shadow appears in a primary color `box-shadow: 8px 8px 0 var(--bauhaus-red);` and the card lifts via `transform: translate(-2px, -2px);`. `transition: 0.15s ease;`
- hover (links): `border-bottom: 2px solid var(--bauhaus-red);` appears beneath the link
- active/pressed: `transform: translate(2px, 2px); box-shadow: 0 0 0 transparent;` — the button presses flat into the page. `transition: 0.08s;`
- focus: `outline: 3px solid var(--bauhaus-red); outline-offset: 0px;` — a hard red frame around the focused element, no offset
- selected: `background: var(--bauhaus-yellow); color: var(--bauhaus-black);` — a yellow highlight, the color of marking pencil
- disabled: `opacity: 0.4;` — no other change, the geometric form remains
- drag: `cursor: grabbing; opacity: 0.85; transform: rotate(2deg);`

---

## motion & feedback

transitions: `0.15–0.25s ease` default. Mechanical, modular, no springs, no bounces. The Bauhaus believed in functionality; motion serves function and ends quickly.

loading: a rotating composition of the three forms (red circle, blue triangle, yellow square) — each rotating at different speeds via independent `@keyframes`. Or a single red circle that bounces left-to-right at `0.6s ease-in-out infinite alternate` across a thin black baseline.

```css
@keyframes rotate-form {
  to { transform: rotate(360deg); }
}
.bauhaus-loader .circle { animation: rotate-form 2.4s linear infinite; }
.bauhaus-loader .triangle { animation: rotate-form 3.6s linear infinite reverse; }
.bauhaus-loader .square { animation: rotate-form 1.8s linear infinite; }
```

success: a yellow square stamp appears beside the element via `transform: scale(0) → scale(1)` over `0.2s ease-out`, holding for `0.6s` then fading.

error: a red circle appears with a `×` glyph; the input border switches to `--bauhaus-red` and the label gains an exclamation prefix `! `. No shake, no flash — just a geometric correction.

page enter: elements appear in modular stagger — top row first, then rows below, each element with `transform: translateY(8px) → 0; opacity: 0 → 1; transition: 0.25s ease-out;`. Stagger delay `0.05s` per element. Mechanical, grid-aware.

geometric composition motion: an idle ambient animation can have the three primary forms slowly drifting across the background — the red circle moves in a slow circular path, the blue triangle rotates in place, the yellow square scales gently between `0.95` and `1.05`. Independent, slow, never coordinated.

---

## atmosphere

- the paper surface: a very faint SVG noise texture on `--bauhaus-paper` background, suggesting unprinted card stock
- structural grid lines (optional): for editorial layouts, faint `--bauhaus-black` 1px hairlines at column intervals can show through, suggesting the underlying grid the design was set on
- compositional anchors: every hero or major section places at least ONE of the three primary forms (red circle, blue triangle, yellow square) at large scale somewhere in the composition. These are the genome's signature objects.
- diagonal compositions: a yellow rectangle rotated `-15deg` cutting across a section; a blue triangle pointing into a card from the right; a red circle overlapping the corner of a content block — Moholy-Nagy's collage instinct
- images: `filter: contrast(1.1) saturate(0.9);` with a hard `4px solid var(--bauhaus-black)` border. Photographs are treated almost as graphic shapes themselves.
- the page should look like a folded-out workshop poster — text on the left, primary forms on the right, a heavy black rule between them. Asymmetric balance, never centered symmetry.

---

## editorial voice

button labels: didactic, instructive, lowercase. `learn`, `submit`, `register`, `compose`, `apply`, `subscribe`, `view course`, `enter the workshop`. lowercase Futura. clean, never urgent.

headings: lowercase Futura at monumental scale. `the workshop`, `geometric composition`, `color theory · primary forms`, `dessau, 1923`, `learn to see structurally`. Page numbers and section indices in oversized red Futura numerals.

metadata: structural label-value pairs in uppercase Futura small. `COURSE 04 / 12`, `INSTRUCTOR · ALBERS`, `DURATION · 16 WEEKS`, `LEVEL · INTERMEDIATE`. Uppercase reserved for these metadata strings only.

placeholders: lowercase Futura. `enter your name`, `write your message`, `email address`, `composition title...`. lowercase, never italic.

empty states: lowercase, structural, optimistic. `nothing here yet · compose your first work.`, `your workshop is empty · begin a study.`, `no records · create one.`. period at the end, never exclamation.

error messages: `required field.`, `that doesn't fit the grid.`, `submission incomplete.`, `re-enter your work.`. clinical, instructive, no apology.

success messages: `submitted.`, `composition saved.`, `workshop entered.`, `your study is complete.`. lowercase, period, satisfied. The functional outcome is enough.

---

## cursor & selection

- default: `cursor: default`
- interactive: `cursor: pointer`
- text input: `cursor: text; caret-color: var(--bauhaus-red);`
- drag: `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--bauhaus-yellow); color: var(--bauhaus-black); }` — yellow highlight, like a marking square

---

**when to reach for this genome**

Use `bauhaus_workshop.modernist` when the prompt asks for Bauhaus, Dessau, Weimar modernism, primary-color geometry, design-school education, workshop posters, modular visual exercises, geometric abstraction, universal type, color-theory lessons, or any product that should feel like a 1920s German design-school composition made from circle, triangle, square, black rule, and paper.

Reach for it when the concrete cues are flat Bayer red, Mondrian blue, Albers yellow, off-white paper, thick black rules, lowercase Futura/Bayer-style type, oversized numerals, asymmetric modular grids, primary geometric forms used as structural UI objects, and didactic copy about composing, learning, applying, registering, or entering a workshop. It is strongest when the interface can behave like an instructional poster or design-class exercise: arrange modules, show lessons, mark sections, teach a system, or present a creative program with optimistic industrial clarity.

Do not use it for Soviet agitprop, red wedges, photomontage, revolutionary slogans, aggressive diagonals, or state-poster urgency; use `constructivist_poster.agit`. Do not use it for cool institutional reporting, Helvetica grids, finance/audit surfaces, muted gray publication systems, or board-report calm; use `structured_folio.swiss`. Do not use it for CAD drawings, white/cyan drafting lines, dimension arrows, title blocks, or engineering specifications; use `blueprint_draft.eng`. Do not use it for 1920s Gatsby luxury, gold-on-navy sunbursts, chevrons, or metropolitan lobby ceremony; use `deco_metropolitan.gilt`. Do not use it for punk collage, photocopied protest roughness, or anti-corporate zine energy; use `neo_brutalist.zine`.

It is the right choice when the visual problem is educational modernist composition in primary forms. If the prompt centers political propaganda, institutional data, engineering measurement, Deco luxury, or rough DIY rebellion, route to the genome that owns that reference instead.

## anti-patterns — this genome NEVER:

1. uses gradients, drop-shadows-with-blur, or soft glows. Every fill is a solid flat color. Every shadow, when present, is a hard offset color-block (no blur, no opacity ramp). Bauhaus rejected painterly trompe-l'oeil.
2. uses serif typography for any purpose. All type is geometric sans-serif (Futura, Bayer Universal, Avenir Next). Serifs belong to the Victorian printers the Bauhaus rebelled against.
3. uses italic type. The Universal alphabet abolished italics as needless decoration. Emphasis comes from weight (bold) or color (red), never slant.
4. uses uppercase for body or display copy. Display text is lowercase Futura. The only place uppercase appears is in small metadata labels (`COURSE`, `LEVEL`, `INSTRUCTOR`) at 0.7rem with high tracking.
5. uses any color outside the strict palette: paper, black, red, blue, yellow. No oranges, no greens, no purples, no pastels. The three primaries are sacred constants.
6. uses border-radius values between 1px and 999px on rectangular elements. Rectangles are 0px hard. Circles are 50%. Pills are 999px. Nothing in between.
7. uses centered symmetric compositions. Balance is asymmetric — the red circle on the left offset by the blue triangle on the right, weights distributed across a structural diagonal. Pure mirror symmetry feels academic in the wrong way.
8. uses ornamental flourishes, decorative borders, calligraphy, or stylized illustration. Every visual element earns its place through structural necessity. If it doesn't carry information or compose the grid, it's removed.
9. uses photography at high color saturation or with bokeh/blur effects. Photographs are treated as graphic shapes — high contrast, hard black borders, geometric crops. The image is a rectangle of content, not an atmospheric mood.
10. uses fast animations with bounce or spring. Motion is mechanical (`ease`, `linear`), short, and modular. The Bauhaus believed in functionalism; motion does its job and stops.
