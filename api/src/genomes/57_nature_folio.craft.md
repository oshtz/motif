---
id: "57"
name: nature_folio.craft
keywords:
  - journal
  - scrapbook
  - naturalist
  - birdwatching
  - field notes
  - torn paper
  - handmade
  - craft
  - collage
  - observation
  - botanical
  - specimen
---

### genome 57: `nature_folio.craft`

> identity: handmade naturalist's scrapbook — torn paper edges, stitched thread ornaments, photo scraps taped at angles, and scattered bead clusters on warm aged paper. a field observer's craft journal where every element is slightly tilted, layered, and imperfect.

**surface**

colors:
- `--paper-light: #F5F2EB` — primary background, warm aged paper
- `--paper-mid: #E8E1D5` — secondary paper tone for inset panels and metadata ledgers
- `--paper-dark: #D4C9B3` — tertiary paper for alternating list rows and card backgrounds
- `--ink-black: #1A1A1A` — primary text, deep warm black
- `--ink-fade: #5A564C` — secondary text, captions, metadata labels, muted annotations
- `--thread-orange: #FF4A1C` — primary accent, stitched thread ornaments, drop caps, active markers
- `--leaf-green: #285A35` — secondary accent, botanical markers, decorative leaf shapes
- `--bead-blue: #3A698A` — tertiary accent, bead clusters, sidebar rules, link color

typography:
- display: `'Noto Serif SC', 'Songti SC', STSong, serif` — weight 900, size 2.8–3.4rem, line-height 1.1, letter-spacing -1px, `mix-blend-mode: multiply`
- body: `'Noto Serif SC', 'Songti SC', STSong, serif` — weight 400, size 0.95–1rem, line-height 1.8, `text-align: justify`
- metadata labels: `'Courier New', Courier, monospace` — size 0.7rem, uppercase, letter-spacing 1px, color var(--ink-fade)
- metadata values: `'Noto Serif SC', serif` — weight 700, size 0.9rem
- captions: `'Courier New', monospace` — size 0.7rem, color var(--ink-fade)
- footnotes: `'Courier New', monospace` — size 0.8rem, color var(--ink-fade)

borders:
- no border-radius anywhere. all edges are raw-cut or torn. `border-radius: 0px` always.
- panel borders: `1px solid rgba(0,0,0,0.1)`
- metadata row separators: `border-bottom: 1px dashed var(--ink-fade)`
- journal margin rule: `2px` repeating linear gradient (10px colored, 10px transparent) using `var(--bead-blue)`

spacing:
- main container: `max-width: 600px`, `padding: 24px 16px 80px 16px`, centered
- vertical rhythm: `gap: 32px` between major sections
- card padding: `12px 16px` for list items, `16px` for metadata panels, `24px` for journal blocks

**color distribution**

- 60% — paper tones (`--paper-light`, `--paper-mid`, `--paper-dark`, white `#fff` for photo mounts and journal blocks)
- 30% — ink tones (`--ink-black` for headings and body, `--ink-fade` for metadata and captions)
- 10% — accent trio (`--thread-orange` for ornaments and highlights, `--leaf-green` for botanical markers, `--bead-blue` for beads and rules)

**component patterns**

buttons:
- background: `var(--ink-black)`, color: `var(--paper-light)`, no border-radius, padding `8px 20px`
- font: serif body face, weight 700, size 0.85rem, uppercase, letter-spacing 1px
- slight rotation: `transform: rotate(-1deg)` for handmade feel
- secondary variant: background `transparent`, `border: 1px solid var(--ink-black)`, color `var(--ink-black)`

inputs:
- background: `var(--paper-light)`, `border-bottom: 1px dashed var(--ink-fade)`, no other borders
- font: serif body face, size 0.95rem
- placeholder: monospace, size 0.7rem, uppercase, letter-spacing 1px, color var(--ink-fade)
- focus: border-bottom becomes `1px solid var(--thread-orange)`

cards:
- background alternates between `var(--paper-dark)` and `var(--paper-light)`
- each card gets a slight random rotation: odd items `rotate(-1.5deg)`, even items `rotate(1deg) translateX(10px)`
- `border: 1px solid rgba(0,0,0,0.1)`, no border-radius
- overlapping stack: negative margins (`margin-bottom: -8px`) so cards overlap slightly
- torn-edge treatment via SVG displacement filter on `::before` pseudo-element

photo scraps:
- white mount: `background: #fff`, padding `8px 8px 32px 8px` (thick bottom like a polaroid)
- slight rotation: `transform: rotate(3deg)`
- `box-shadow: 2px 4px 12px rgba(0,0,0,0.15)`
- images: `filter: grayscale(100%) contrast(1.2) sepia(30%)`, `object-fit: cover`
- caption: positioned absolute at bottom-right, monospace 0.7rem

metadata ledger (header):
- background: `var(--paper-mid)`, padding 16px
- slight rotation: `transform: rotate(-2deg)`
- width 85%, offset from left edge (`margin-left: 10%`)
- rows: flex space-between with dashed bottom borders
- decorative leaf shape: `::after` pseudo-element using `var(--leaf-green)` with clip-path polygon, rotated 15deg

section titles:
- inline-block, `background: var(--ink-black)`, `color: var(--paper-light)`, padding `4px 12px`
- slight rotation: `transform: rotate(-1deg)`
- size 1.2rem, weight 700

navigation:
- vertical sidebar labels rotated 90deg: `transform: rotate(-90deg)`, `transform-origin: left bottom`
- monospace 0.8rem, color `var(--thread-orange)`, letter-spacing 2px

lists:
- stacked card style with alternating backgrounds and rotations (see cards above)
- each item has an ID column (monospace, orange, border-right separator) + name column (serif bold) + action/status column (serif italic, faded)

tables:
- no conventional table styling. use the card-stack pattern instead
- if a true table is needed: no borders between cells, only dashed row separators, monospace headers

dividers:
- dashed lines: `border-top: 1px dashed var(--ink-fade)`
- or journal margin rule: repeating gradient bead pattern

modals:
- background: `var(--paper-light)`, slight rotation, torn-edge filter
- overlay: `rgba(0,0,0,0.3)` — translucent, like tissue paper over the page

badges/tags:
- background: `var(--thread-orange)`, color: `var(--paper-light)`, no radius, padding `2px 8px`
- monospace 0.65rem, uppercase

headers:
- drop cap on first paragraph: `float: left`, size 3rem, line-height 1, color `var(--thread-orange)`, weight 900, `padding-right: 8px`

footers:
- monospace, size 0.8rem, color `var(--ink-fade)`
- top border: `1px solid rgba(0,0,0,0.1)`
- preceded by an asterisk: `* recorded at...`

**interaction language**

hover:
- cards: `transform: rotate(0deg) translateX(0)` — straighten and settle, `transition: transform 0.3s ease`
- buttons: background shifts to `var(--thread-orange)`, color stays `var(--paper-light)`
- links: `text-decoration-color: var(--thread-orange)`, underline thickens to 2px

active:
- buttons: `transform: scale(0.97) rotate(-2deg)` — pressed into paper
- cards: subtle `box-shadow: inset 0 1px 3px rgba(0,0,0,0.1)`

focus:
- inputs: `border-bottom-color: var(--thread-orange)`, `outline: none`
- buttons: `outline: 2px dashed var(--thread-orange)`, `outline-offset: 4px`

selected:
- background: `var(--paper-mid)`, left border `3px solid var(--thread-orange)`
- slight rotation removed: `transform: rotate(0deg)`

disabled:
- `opacity: 0.4`, `pointer-events: none`
- desaturated: `filter: grayscale(60%)`

drag:
- `transform: rotate(5deg) scale(1.02)`, `box-shadow: 4px 6px 16px rgba(0,0,0,0.2)`
- element lifts off the page

**motion & feedback**

transitions:
- default: `0.3s ease` for transform and background-color
- no motion on page load — elements appear already placed, as if the journal was opened to this page
- ambient only: canvas particle system with floating seeds and thread fibers (40 particles, slow drift upward, sinusoidal horizontal sway)

loading:
- a small spinning stitch-star ornament (SVG, orange thread stroke, no fill) rotating slowly
- or: three beads pulsing in sequence (scale 1→1.3→1, 0.6s staggered)

success:
- a leaf-green checkmark drawn with a thread-like stroke animation (stroke-dashoffset reveal, 0.5s)
- background briefly flashes `var(--paper-mid)` then settles

error:
- text in `var(--thread-orange)`, monospace 0.8rem
- a small × drawn with thread strokes
- element gets a `2px solid var(--thread-orange)` border-bottom

**atmosphere**

background:
- base: `var(--paper-light)` solid fill
- ambient canvas layer: fixed position, full viewport, `z-index: 0`, `opacity: 0.6`, `pointer-events: none`
- canvas renders 40 particles: 80% seeds (tiny circles, 0.5–2.5px radius) and 20% thread fibers (thin lines, 10–30px length)
- particle colors: `rgba(40,90,53,0.4)` (green), `rgba(58,105,138,0.5)` (blue), `rgba(26,26,26,0.2)` (dark)
- particles drift slowly upward with sinusoidal sway, rotate gently

textures:
- torn-paper SVG filter: `feTurbulence` (fractalNoise, baseFrequency 0.04, 4 octaves) → `feDisplacementMap` (scale 4) applied to card `::before` pseudo-elements
- this creates organic, irregular edges on cards and panels — the defining visual texture of the genome

decorative elements:
- stitch-star ornaments: 40×40px SVG symbols scattered at 2-3 positions, stroke-only in `var(--thread-orange)`, no fill, `stroke-width: 1.5`, `stroke-linecap: round`
- star shape: 8-point polygon with crossed diagonal lines
- bead clusters: groups of 4-5 circles (5px diameter, `var(--bead-blue)`, `border-radius: 50%`, `box-shadow: 1px 1px 2px rgba(0,0,0,0.3)`) scattered as decorative accents
- leaf shapes: clip-path polygons in `var(--leaf-green)` used as `::after` decorations on key panels

overlays: none. the journal is open and physical — no glass, no blur, no frosted layers.

**editorial voice**

button labels:
- `记录` (record) · `观测` (observe) · `添加标注` (add annotation) · `翻页` (turn page) · `保存手记` (save notes) · `标记物种` (mark species) · `查看图鉴` (view field guide)
- tone: quiet, observational, field-specific. actions are things you do in the field.
- for English contexts: `Record` · `Observe` · `Add Note` · `Turn Page` · `Save Entry` · `Mark Species` · `View Guide`

headings:
- poetic-observational, sensory-first: describe what was seen, heard, or felt
- examples: "晨雾中的羽翼过境" (Wings Crossing Through Morning Mist) · "芦苇深处的鸣声" (Calls from Deep in the Reeds) · "雨后水位变化" (Water Level Changes After Rain)
- can mix CJK with Latin binomial nomenclature in subtitles

metadata format:
- observation number: `OBS-049` (monospace, uppercase prefix + zero-padded number)
- date: seasonal marker + time — `谷雨 · 05:45 AM` or `Grain Rain · 05:45 AM`
- location: descriptive + specific — `西溪深处 / 芦苇荡` or `Deep Xixi / Reed Marsh`
- recorder: name only, no title
- specimen IDs: zero-padded two-digit numbers (`01`, `02`, `03`)

placeholders:
- `输入观测地点...` (Enter observation location...) · `记录所见...` (Record what you see...) · `物种名称` (Species name) · `备注` (Notes)
- English: `observation location...` · `describe what you see...` · `species name` · `notes`

empty states:
- `尚无观测记录。打开笔记本，走进自然。` (No observations yet. Open your notebook, step into nature.)
- `这片区域还未被探索。` (This area hasn't been explored yet.)
- English: `No observations recorded. Open your notebook and step outside.` · `This area is still unexplored.`

error messages:
- `记录未能保存 — 请再试一次` (Record could not be saved — please try again)
- `无法加载图鉴数据` (Unable to load field guide data)
- tone: calm, factual, no alarm — things go wrong in the field, you adapt

success messages:
- `观测已记录` (Observation recorded) · `标本已标注` (Specimen marked) · `手记已保存` (Notes saved)
- brief and quiet, like a pencil checkmark in the margin

**cursor & selection**

cursor:
- default: `default` over paper backgrounds
- interactive elements: `pointer`
- text: `text`
- drag: `grab` / `grabbing`

selection:
- `::selection { background: rgba(255, 74, 28, 0.2); color: var(--ink-black); }` — faint orange-thread highlight, like a highlighter bleed on aged paper

**when to reach for this genome**

Use `nature_folio.craft` when the prompt asks for a handmade naturalist scrapbook, birdwatching journal, outdoor observation diary, botanical travel notebook, citizen-science memory book, guided nature-tour archive, or any product that should feel physically assembled from torn paper, taped photo scraps, stitched ornaments, bead clusters, leaf markers, and quiet field notes.

Reach for it when the visual cues are off-axis collage, layered paper scraps, imperfect card stacks, torn or deckled edges, serif observation prose, monospace specimen IDs, Polaroid-like mounts, floating seed/thread particles, and a layout where pieces overlap rather than settle into a strict grid. The product should feel personal, tactile, and observational: record, annotate, mark species, turn page, save entry.

Do not choose it for strict scientific notebook systems, graph-paper plates, Latin taxonomy workflows, or zero-motion naturalist records; use `field_journal.expedition`. Do not choose it for institutional pressed-botanical sheets, accession numbers, mounted specimens, and research herbarium austerity; use `herbarium_plate.specimen`. Do not choose it for commercial gardening, seed catalogs, planting calendars, kraft packets, or horticulture retail; use `seed_packet.plot`. Do not choose it for punk zines, activist collage, photocopied flyers, or aggressive anti-corporate DIY; use `neo_brutalist.zine`. Do not choose it for sticker-bomb accumulation, graffiti labels, lamppost paste-ups, or streetwear sticker systems; use `subway_sticker.bombing`. Do not choose it for Japanese woodblock printing, washi/indigo/vermillion palettes, title cartouches, or Ukiyo-e gallery energy; use `ukiyo_woodcut.edo`.

It is strongest when nature observation and handmade paper craft are both essential. If the prompt only says "paper" or "botanical", route by the product mechanic: personal observation scrapbook here, scientific specimen record elsewhere, and gardening commerce to `seed_packet.plot`.

**anti-patterns — this genome NEVER:**

1. never uses border-radius on any element — all edges are raw, torn, or sharp-cut. the only circles are decorative beads (border-radius 50% on tiny 5px dots).
2. never uses gradients for backgrounds or fills — all surfaces are flat, matte paper tones. the only gradient is the repeating bead-pattern on journal margin rules.
3. never uses glass, blur, frosted, or translucent panel effects — this is physical paper, not a screen.
4. never uses sans-serif typography for body or display text — serif is the only voice of this journal. monospace is reserved strictly for metadata labels, captions, and IDs.
5. never aligns all elements to a strict grid — every card, panel, and photo should have a slight rotation (±1–3deg) and offset. perfect alignment breaks the handmade character.
6. never uses bright neon or saturated digital colors that would feel synthetic against the warm paper palette — accents stay earthy or muted.
7. never uses thick borders or heavy outlines — borders are hairline (1px) or dashed, like pencil lines on paper.
8. never uses icon libraries or emoji — decorative marks are hand-stitched SVG stars, bead clusters, and leaf clip-paths only.
9. never uses loading spinners or progress bars — loading states use the stitch-star ornament or pulsing beads.
10. never uses uniform card sizing or spacing — elements overlap, stack with negative margins, and vary in width to create the collage feel.
