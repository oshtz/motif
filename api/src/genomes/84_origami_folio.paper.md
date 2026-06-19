---
id: "84"
name: origami_folio.paper
keywords:
  - origami
  - paper craft
  - folded
  - washi
  - geometric folds
  - yoshizawa
  - kirigami
  - paper sculpture
  - crease pattern
  - mountain fold
  - valley fold
  - minimalist
  - japanese design
  - tactile paper
---

### genome 84: `origami_folio.paper`

> identity: high-craft origami and folded paper. Akira Yoshizawa's wet-folding sculptures, Tomoko Fuse's modular tessellations, Robert Lang's mathematical crease patterns. White and lightly tinted paper, geometric facets catching subtle shadow, the Yoshizawa-Randlett notation system (mountain fold dashed, valley fold dotted). Not the dense letterpress of papyrus_scroll (91) or the printed J-card of cassette_inlay (81) — this is sculptural paper itself, folded into facets and tessellations, photographed in studio light. Minimalist, geometric, faintly Japanese, modernist in restraint. The paper is the medium AND the message.

---

## surface

colors:
```
--paper-pure: #FAF7F0;         /* the unfolded white paper — primary surface */
--paper-warm: #F3EBDC;         /* warm cream variant — alternate paper stock */
--paper-shadow: #E5DCC8;       /* shadow side of a fold — secondary surface */
--paper-deep-shadow: #C7BCA4;  /* deeper fold shadow */
--fold-ink: #1F1A12;           /* deep charcoal — primary text and crease lines */
--fold-medium: #3D362B;        /* warm dark gray — secondary text */
--fold-faint: rgba(31,26,18,0.32); /* tertiary text, dim notations */
--accent-vermillion: #C8453C;  /* a single saturated color — kimono red */
--accent-indigo: #2A4365;      /* secondary accent — dye blue */
--accent-gold: #C49A4C;        /* tertiary accent — sukashi gold */
--mountain-fold: rgba(31,26,18,0.55);   /* the dashed crease line */
--valley-fold: rgba(31,26,18,0.35);     /* the dotted crease line */
--soft-edge: rgba(229,220,200,0.6);     /* the soft shadow of a folded paper edge */
```

typography:
- display/titles: `"Cormorant Garamond", "Noto Serif JP", serif` — `font-weight: 300–500; letter-spacing: 0.02em;` — sizes `2.5rem–6rem`. Light, restrained, breathing. Display type is feathered and quiet, never bold.
- body: `"Noto Sans JP", "Inter", sans-serif` — `font-weight: 300; font-size: 14–16px; line-height: 1.85; letter-spacing: 0.01em;` — light geometric sans for body, Japanese-style breathing line-height.
- labels/notation: `"JetBrains Mono", "IBM Plex Mono", monospace` — `font-size: 0.7rem; letter-spacing: 0.08em; text-transform: lowercase; color: var(--fold-medium);` — for crease-pattern annotations like `mountain fold`, `valley fold`, `step 03 of 27`, `pre-crease`.
- numerals: numbers feature prominently as fold-step indicators, in a thin geometric mono — `font-family: "JetBrains Mono"; font-weight: 300; font-size: 1.2–3rem; letter-spacing: -0.02em;` — like `01.`, `02.`, indicating the sequential nature of paper folding instructions.

borders:
- panel borders: `1px solid var(--soft-edge)` — the barely-visible edge of a folded paper sheet, never heavy
- crease-line dividers: `1px dashed var(--mountain-fold)` for mountain folds, `1px dotted var(--valley-fold)` for valley folds — these replace standard `<hr>` elements throughout
- card borders: very thin or absent; the shadow does the work of the border
- corner accents: small SVG triangles or polygon clips at panel corners suggesting the folded-back tip of a sheet
- border-radius: occasional `2–4px` for soft paper edges; `0px` for hard fold edges; clip-paths for actual polygonal/triangular shapes that mimic origami facets

spacing:
- page edge: `6vw` horizontal padding — generous studio whitespace
- vertical rhythm: `10–16vh` between major sections
- card padding: `36–56px` — luxurious breathing room, paper needs space to fold
- low-to-medium density. The genome's primary atmospheric move is whitespace; cluttered layouts feel wrong.

---

## color distribution

- 62% paper-pure / paper-warm — the unfolded white field, dominant
- 18% paper-shadow / paper-deep-shadow — the soft shadow of folds, secondary surfaces, gentle depth
- 12% fold-ink / fold-medium — text, crease lines, the linework of the diagram
- 4% accent-vermillion — the single saturated color (sparingly, on CTA, hover accents, hero punctuation)
- 2% accent-indigo — secondary accent for variety
- 2% accent-gold — sukashi gold for premium markers, occasional highlights

the page should feel like a studio photograph of a folded paper sculpture: 62% white, 18% soft shadow, a few crease lines, and one or two saturated accents. The page surface itself can suggest folded planes via subtle CSS clip-paths or polygon shapes on hero/feature panels.

---

## component patterns

buttons:
- primary: `background: var(--accent-vermillion); color: var(--paper-pure); border: none; border-radius: 2px; padding: 14px 36px; font-family: "Cormorant Garamond", serif; font-weight: 500; font-size: 1rem; letter-spacing: 0.04em; text-transform: lowercase; box-shadow: 0 1px 0 rgba(31,26,18,0.06);` — flat, soft, paper-pressed
- folded button variant: a clip-path polygon that suggests one corner of the button is folded back — `clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);` with a subtle `var(--paper-shadow)` triangle in that folded corner
- secondary: `background: transparent; color: var(--fold-ink); border: 1px solid var(--fold-faint); border-radius: 2px; padding: 13px 34px;`
- ghost: `background: transparent; color: var(--fold-medium); border: none; text-decoration: underline; text-underline-offset: 4px; text-decoration-color: var(--fold-faint);`

inputs:
- `background: var(--paper-warm); border: none; border-bottom: 1px solid var(--fold-faint); border-radius: 0; padding: 14px 0; font-family: "Cormorant Garamond", serif; font-size: 1.1rem; color: var(--fold-ink); font-weight: 400;`
- label above: `font-family: "JetBrains Mono", monospace; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: lowercase; color: var(--fold-medium); margin-bottom: 8px;`
- placeholder: `color: var(--fold-faint); font-style: italic;`
- focus: `border-bottom-color: var(--accent-vermillion); border-bottom-width: 1px;` — slight color shift, no harshness

cards/panels (folded sheets):
- standard: `background: var(--paper-pure); border: 1px solid var(--soft-edge); border-radius: 2px; padding: 40px; box-shadow: 0 1px 3px rgba(31,26,18,0.04), 0 8px 24px rgba(31,26,18,0.04);` — barely-there soft shadow as if floating on white seamless studio paper
- folded card (signature variant): a polygon clip-path simulating a sheet of paper with one folded corner — `clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%);` with a triangular accent in the folded area showing through to `--paper-shadow`
- tessellation card (modular grid): cards arranged in a tight tessellated grid with small `gap: 4px` between them — like Tomoko Fuse modular origami panels
- accent card: a single panel filled with `--accent-vermillion` text on `--paper-pure`, or a panel where the background is a soft `linear-gradient(135deg, var(--paper-pure) 0%, var(--paper-shadow) 100%)` suggesting a folded plane

navigation:
- top bar: `background: var(--paper-pure); border-bottom: 1px solid var(--soft-edge); padding: 28px 6vw; display: flex; justify-content: space-between;`
- brand: a small SVG origami crane glyph + a wordmark in serif Cormorant
- nav items: `font-family: "Cormorant Garamond", serif; font-weight: 400; font-size: 1rem; letter-spacing: 0.04em; text-transform: lowercase; color: var(--fold-medium);`
- active: `color: var(--accent-vermillion);` — no underline, no background, just the color shift

headers/hero:
- hero title: `font-family: "Cormorant Garamond", serif; font-weight: 300; font-size: 5–10vw; line-height: 1.05; letter-spacing: 0.01em; color: var(--fold-ink);` — feathered serif at monumental scale, generous leading
- hero subtitle: `font-family: "JetBrains Mono", monospace; font-size: 0.85rem; letter-spacing: 0.12em; text-transform: lowercase; color: var(--fold-medium);` — like a notation under a diagram
- hero composition: an oversized polygonal SVG (a folded crane silhouette, a tessellated diamond, a crease-pattern grid) placed asymmetrically on one side of the page in soft `--paper-shadow` tones; the title placed in the negative space
- step indicator: a large mono numeral like `step 04` placed in `--fold-faint` mono on the corner of the hero — origami diagrams are sequential

footers:
- `background: var(--paper-warm); padding: 64px 6vw; border-top: 1px dashed var(--mountain-fold);`
- centered: a small SVG of an origami crane in `--fold-faint`
- below: italic Cormorant tagline like `folded by hand · 2025` in `--fold-medium`
- nav links in serif Cormorant lowercase, separated by small `·` characters in `--fold-faint`
- minimal, breathing, never busy

dividers (signature — crease lines):
- mountain fold divider: `border: none; border-top: 1px dashed var(--mountain-fold); margin: 48px 0; position: relative;`
- valley fold divider: `border: none; border-top: 1px dotted var(--valley-fold); margin: 48px 0;`
- a notation label can sit above the divider in mono: `mountain fold · 60°` or `valley fold · 45°`
- step divider: an `06.` mono numeral floats over a thin paper-shadow rule indicating a sequence step

lists:
- step lists (signature): each item prefixed with a mono numeral `01.`, `02.` in `--fold-medium` followed by serif Cormorant body text — like the numbered instruction steps of an origami diagram
- unordered: prefixed with small geometric glyphs (`▲` for mountain, `▽` for valley, `◇` for diamond) in `--fold-medium`
- step lists have generous vertical spacing — `margin-bottom: 20px` per item, breathing room between instructions
- active step: `color: var(--accent-vermillion); border-left: 1px solid var(--accent-vermillion); padding-left: 16px;`

tables:
- minimal borders — only thin hairlines: `border: none; border-collapse: collapse;`
- header: `font-family: "JetBrains Mono", monospace; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: lowercase; color: var(--fold-medium); padding: 14px 20px; border-bottom: 1px solid var(--fold-faint);`
- body rows: `font-family: "Cormorant Garamond", serif; color: var(--fold-ink); padding: 14px 20px; border-bottom: 1px solid var(--soft-edge);`
- never alternating row backgrounds — keep it pure paper-white

modals (an unfolded sheet):
- `background: var(--paper-pure); border: 1px solid var(--soft-edge); border-radius: 4px; padding: 56px 48px; box-shadow: 0 24px 80px rgba(31,26,18,0.18), 0 8px 24px rgba(31,26,18,0.06);`
- clip-path to suggest a folded corner: `clip-path: polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%);` with the missing triangle showing the soft paper-shadow color through
- backdrop: `background: rgba(31,26,18,0.4); backdrop-filter: blur(8px);` — studio backdrop softened
- close: a small serif `× close` link in `--fold-medium`

badges/tags:
- pill `border-radius: 999px; padding: 4px 12px; font-family: "JetBrains Mono", monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: lowercase;`
- standard: `background: transparent; border: 1px solid var(--fold-faint); color: var(--fold-medium);`
- vermillion accent: `background: var(--accent-vermillion); color: var(--paper-pure);`
- indigo accent: `background: var(--accent-indigo); color: var(--paper-pure);`
- gold premium: `background: var(--accent-gold); color: var(--fold-ink);`
- step badge variant: small square `border-radius: 0; padding: 4px 8px;` with mono numeral inside

progress bars (fold steps):
- a horizontal sequence of small connected squares, one per step, each `8x8px` outlined in `--fold-faint`
- completed steps fill with `--accent-vermillion`
- the current step pulses gently with a soft scale animation
- a mono label beneath: `step 07 of 27`

tooltips:
- `background: var(--fold-ink); color: var(--paper-pure); border-radius: 2px; padding: 6px 10px; font-family: "JetBrains Mono", monospace; font-size: 0.7rem; box-shadow: 0 4px 12px rgba(31,26,18,0.15);` — small, technical, like a notation label

---

## interaction language

- hover (buttons): subtle paper-shadow shift — `box-shadow: 0 2px 6px rgba(31,26,18,0.08), 0 8px 16px rgba(31,26,18,0.05); transform: translateY(-1px);`. `transition: 0.3s ease;` — gentle, breathing
- hover (cards): the card lifts as if being picked up from the studio surface — `transform: translateY(-3px); box-shadow: 0 8px 32px rgba(31,26,18,0.08);`. `transition: 0.4s ease-out;`
- hover (folded card variant): the folded corner unfolds slightly — animate the clip-path or the `::after` triangle shrinks `0.4s ease-out;` revealing more of the underlying surface
- hover (links): `color: var(--accent-vermillion);` — pure color shift, no underline animation
- active/pressed: `transform: scale(0.985); box-shadow: 0 1px 2px rgba(31,26,18,0.06);` — the gentle press of a fold being completed
- focus: `outline: 1px solid var(--accent-vermillion); outline-offset: 4px;` — a single thin red rule
- selected: `background: rgba(200,69,60,0.06); border-left: 2px solid var(--accent-vermillion);` for list items
- disabled: `opacity: 0.35; filter: grayscale(0.4);` — paper sun-faded
- drag: `cursor: grab; transform: rotate(-2deg); box-shadow: 0 20px 48px rgba(31,26,18,0.18);` — picking up a folded sheet from the studio table

---

## motion & feedback

transitions: `0.3–0.5s ease` default — slow, careful, the way paper actually moves. Folding is not a fast motion; it's the unhurried adjustment of a craftsman.

loading: a paper crane SVG performs a slow fold sequence — segments rotating into place via `transform: rotate()` over `1.6s ease-in-out`, looping. Or: a thin paper-shadow line traces a square folding diagonally into a triangle.

```css
@keyframes paper-fold {
  0% { transform: scaleX(1); }
  100% { transform: scaleX(0); transform-origin: left center; }
}
```

success: a subtle paper-fold confirmation — a thin gold rule traces around the affected element via `clip-path` animation over `0.6s ease-out`, holding briefly. Or text "folded." in mono fades in.

error: a faint vermillion underline appears under the field with a gentle `transition: 0.4s ease;`. A mono message in `--accent-vermillion` fades in: `mis-fold · retry.`. No flash, no shake — paper does not flinch.

page enter: cards reveal with a gentle `transform: translateY(12px) → 0; opacity: 0 → 1` over `0.6s ease-out`, staggered `0.08s` per card. Like sheets being unfolded one at a time.

card-flip / fold-flip: for tabbed content, use a CSS `rotateX` 3D flip over `0.7s ease-in-out`, suggesting the card folding along a horizontal crease and revealing its back.

ambient: a slow drift on the background — a single SVG origami crane outline at very low opacity floating diagonally across the viewport via `transform: translate()` over `60s linear infinite`. Minimal, meditative.

---

## atmosphere

- paper surface texture: a subtle SVG `<feTurbulence>` noise overlay at `opacity: 0.04` applied to body or card backgrounds — gives the white surface a faint uncoated paper grain
- soft directional shadow: cards and folded shapes carry a gentle directional shadow suggesting consistent studio lighting from upper-left
- crease pattern background (optional, hero only): a faint network of dashed/dotted lines forming a Yoshizawa crease pattern at very low opacity behind hero content
- folded plane effect via CSS: hero sections can use `linear-gradient(135deg, var(--paper-pure) 50%, var(--paper-shadow) 50%)` with subtle `clip-path` polygons to suggest the entire surface is a folded sheet, with different facets in slightly different tones
- images: `filter: contrast(1.05) saturate(0.8);` with a `1px solid var(--soft-edge)` border. Photographs feel like reference plates in a craft book, never glossy.
- the genome's signature: a single oversized SVG of an origami form (crane, kabuto, butterfly, modular tessellation) placed asymmetrically as a hero element, in `--paper-shadow` tones, with crease lines indicated in faint dashed/dotted strokes.

---

## editorial voice

button labels: gentle, action-oriented, lowercase serif. `begin folding`, `step forward`, `unfold`, `tessellate`, `complete the form`, `download diagram`, `start project`, `view crease pattern`. lowercase Cormorant. quiet imperatives.

headings: poetic-minimal lowercase. `a study in folded paper`, `the crane in twenty-seven folds`, `tessellation as practice`, `notes from the studio`, `washi · the paper that remembers`. lowercase serif Cormorant, never shouted.

metadata: mono notation. `step 04 of 27`, `mountain fold · 60°`, `valley fold · 45°`, `paper · kozo, 18g/m²`, `time · 14 min`, `difficulty · intermediate`. lowercase mono, structural.

placeholders: italic serif. `your name...`, `note to the maker...`, `email address...`, `project title...`. lowercase, italic Cormorant.

empty states: `the page is unfolded · begin a study.`, `no projects yet · choose a form to fold.`, `the crease pattern is empty.`, `nothing has been folded here.`. lowercase, gentle.

error messages: `mis-fold · retry the step.`, `the pattern doesn't resolve.`, `paper torn · start with a fresh sheet.`, `the crease is incorrect.`. period. instructive without judgment.

success messages: `folded.`, `step complete.`, `the form is finished.`, `the crane stands.`. period. quiet satisfaction. The result speaks for itself.

---

## cursor & selection

- default: `cursor: default`
- interactive: `cursor: pointer`
- text input: `cursor: text; caret-color: var(--accent-vermillion);`
- drag: `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--accent-vermillion); color: var(--paper-pure); }` — selected text is the vermillion kimono red

---

**when to reach for this genome**

Use `origami_folio.paper` when the prompt asks for origami, folded paper, washi craft, crease patterns, Yoshizawa-Randlett notation, kirigami, modular paper tessellations, paper-sculpture portfolios, folding instructions, handmade paper objects, or any product that should feel like a quiet studio photograph of paper planes and facets.

Reach for it when the concrete cues are white or warm paper surfaces, subtle fold shadows, polygonal planes, dashed mountain-fold and dotted valley-fold lines, thin mono step labels, crane or tessellation silhouettes, vermillion/indigo/gold accents used sparingly, generous whitespace, slow fold/reveal motion, and product actions like begin folding, advance a step, unfold, complete a form, download a diagram, or annotate a crease pattern.

Do not use it for cassette J-cards, magnetic tape inserts, side-A/side-B tracklists, Sharpie labels, Dolby/bias markings, or folded media packaging inside plastic shells; use `cassette_inlay.tape`. Do not use it for ancient administrative scrolls, papyrus fiber, cartouches, hieroglyphic borders, reed-pen records, or Egyptian scribal documents; use `papyrus_scroll.ankh`. Do not use it for pressed botanical sheets, accession labels, mounted leaves, Latin taxonomy, or institutional specimen records; use `herbarium_plate.specimen`. Do not use it for handmade nature scrapbooks, torn paper scraps, taped photos, stitched ornaments, or personal field memories; use `nature_folio.craft`. Do not use it for stamp album pages, perforated cards, postmarks, hinged mounts, or collector grids; use `philately_album.stamp`. Do not use it for seed packets, kraft horticultural packaging, planting calendars, or commercial garden catalogs; use `seed_packet.plot`.

It is strongest when the paper itself is the subject and the interface logic follows folds, steps, facets, and notation. If the prompt only says "paper", route by the object: media insert, scroll, specimen sheet, scrapbook, stamp album, and garden packet each have their own genome.

## anti-patterns — this genome NEVER:

1. uses harsh, full-saturation colors beyond the single vermillion accent. Indigo and gold appear sparingly; everything else is paper-white or warm-shadow. The genome's restraint is its identity.
2. uses bold or heavy typography. All type is light or regular weight — feathered serif (Cormorant 300–500) and light geometric sans (Noto Sans JP 300). Bold weights belong to noisier genomes.
3. uses dark backgrounds. Surfaces are always paper-toned (`--paper-pure`, `--paper-warm`). A dark background would invert the medium — paper is the substrate, never the void.
4. uses heavy drop-shadows with high opacity or large blur. Shadows are gentle, directional, low-opacity — the soft fall-off of studio lighting on paper, never theatrical depth.
5. uses dense, cluttered layouts. The genome is whitespace-dominated. Crammed grids and edge-to-edge content feel wrong; let the paper breathe.
6. uses ornamental flourishes, decorative scrolls, or victorian filigree. Decoration is structural — crease lines, polygon facets, fold notations. Anything else is noise.
7. uses spring/bounce animation curves. Paper does not bounce. Folds are gentle, deliberate, eased. `ease`, `ease-in-out` only. Never `cubic-bezier(...,1.5,...)` or elastic.
8. uses photography with high color saturation, lens flare, or stylized filters. Images are studio-clean — high contrast, slight desaturation, hard borders. If color is needed, it comes from the paper itself, not the photograph.
9. uses uppercase headings or stylized italic for emphasis. Emphasis is through scale, weight (subtle), or the vermillion accent color. Never SHOUT-CASE; never italic decoration.
10. uses border-radius above 4px on rectangular elements. Paper folds are sharp; soft rounded corners belong to confectionery or plastic. Pills (999px) are the only exception for badges/chips.
