---
id: "91"
name: papyrus_scroll.ankh
keywords:
  - egyptian
  - papyrus
  - ancient
  - scroll
  - hieroglyph
  - pharaoh
  - cartouche
  - scribe
  - sand
  - desert
  - dynasty
  - ankh
---

### genome 91: `papyrus_scroll.ankh`

> identity: Ancient Egyptian administrative scroll from the New Kingdom, circa 1300 BCE. Warm sand and ochre on papyrus fiber, cartouche framing for containers, hieroglyphic-inspired decorative borders, reed-pen calligraphy weight, column-based papyrus layout. The royal scribe's desk in the House of Life — inventories, decrees, and astronomical tables inked on prepared reed paper with mineral pigments. Not a museum exhibit — this is the working document itself.

**surface**

colors:
```
--papyrus: #F2E8D0;          /* warm cream-tan — the papyrus sheet itself, prepared reed fiber */
--reed-ink: #2A1F14;         /* near-black brown — primary text, reed-pen calligraphy strokes */
--lapis-blue: #1B4F8A;       /* imported lapis lazuli — precious blue accent, reserved for emphasis */
--ochre: #C68A2E;            /* gold/ochre mineral pigment — accents, cartouche borders */
--terracotta: #B84C2A;       /* red earth pigment — warnings, emphasis marks, section headers */
--nile-green: #3B7A57;       /* Nile delta vegetation — success states, secondary accents */
--desert-sand: #DDD0B5;      /* secondary background — sun-bleached papyrus, older sheets */
--gold-foil: #D4A836;        /* gilded cartouche accents — selected states, featured elements */
--reed-ink-faint: rgba(42, 31, 20, 0.18); /* faint ink — column ruling lines, minor dividers */
```

typography:
- display/column headings: `"Cormorant Garamond", "EB Garamond", serif` at `32–52px; font-weight: 600; font-variant: small-caps; letter-spacing: 0.12em; color: var(--reed-ink); line-height: 1.2;` — the scribal header inked at the top of each column in bold reed strokes. small-caps with wide spacing replicates the deliberate, measured hand of the royal scribe. used ONLY for major section titles and page-level headings.
- subheadings/register markers: `"Cormorant Garamond", "EB Garamond", serif` at `20–28px; font-weight: 600; font-variant: small-caps; letter-spacing: 0.08em; color: var(--terracotta); line-height: 1.3;` — marked in red earth pigment, as Egyptian scribes used a second reed charged with red ochre to mark the start of a new register or section. these are the register headings that divide the papyrus into named sections.
- body/scribal text: `"Cormorant Garamond", "EB Garamond", serif` at `15–17px; font-weight: 400; line-height: 1.75; color: var(--reed-ink); letter-spacing: 0.01em;` — the flowing hieratic script of the working scribe, readable and unhurried. max-width `62ch` per column. generous leading matches the spacing of real hieratic papyri.
- annotations/gloss text: `"Cormorant Garamond", "EB Garamond", serif` at `12–13px; font-style: italic; color: rgba(42, 31, 20, 0.55); line-height: 1.6;` — marginal notes and interlinear glosses, added in a lighter hand after the main text. used for tooltips, captions, footnotes, helper text.
- labels/catalog metadata: `"Cormorant Garamond", serif` at `11px; font-variant: small-caps; letter-spacing: 0.14em; color: var(--reed-ink); opacity: 0.7;` — accession marks, column numbers, administrative identifiers. the small scribal notation at the edge of each section.
- tabular/numerical data: `"Cormorant Garamond", serif` at `14px; font-variant: tabular-nums; letter-spacing: 0.03em; color: var(--reed-ink);` — hieratic numerals were precise and columnar; tabular data follows suit. NO monospace fonts — the New Kingdom had no typewriter. Cormorant with `font-variant: tabular-nums` is the scribal alternative.
- hierarchy governed by color and scale, not weight alone: ochre-bordered cartouche for featured containers, terracotta red for structural headings, reed-ink brown for body, lapis blue for the most important single accent element on any view. the scribe's two-pigment system (black and red) is the primary hierarchy — lapis and gold are reserved, not routine.

borders:
- structural papyrus borders: `2–3px solid var(--reed-ink)` on all content containers, `border-radius: 3px` — the reed-pen stroke is slightly rounded at corners, not the sharp mechanical cut of a stone chisel. these simulate the ruled border drawn around each column of the papyrus before writing begins.
- cartouche frame (featured containers): an oval-influenced rectangle frame with `border: 3px solid var(--ochre); border-radius: 4px; box-shadow: inset 0 0 0 1px rgba(196, 138, 46, 0.3);` — the cartouche encloses a royal name or featured content, just as the Egyptian cartouche ring (shenu) enclosed the throne name. use sparingly for the most important panel on a page.
- decorative column ruling: `1px solid var(--reed-ink-faint)` — the faint vertical and horizontal lines the scribe ruled with a straight edge before writing. visible structure but not dominant.
- lapis accent border: `2px solid var(--lapis-blue)` on selected or focused elements — lapis was imported from Afghanistan and used only for the most valuable documents. a lapis border signals importance.
- inner dividers within panels: `1px solid rgba(42, 31, 20, 0.12)` — light reed-ink traces separating rows or sub-sections within a framed container.

spacing:
- scroll margins: `padding: 36–52px` on page-level containers — a papyrus scroll has wide margins on all sides. the scribe never wrote to the physical edge of the sheet; the margin protected the text and allowed for handling.
- column internal padding: `padding: 20–28px` within each text column.
- column gap: `gap: 28–36px` between columns in multi-column layouts. the inter-columnar space on real papyri is significant — narrow enough to read across but wide enough to separate registers clearly.
- section vertical rhythm: `margin-bottom: 48–64px` between major content sections.
- inter-paragraph: `margin-bottom: 1.3em` — hieratic paragraphs were separated by small gaps or red marks. generous but not extravagant.

**color distribution**

- 42% papyrus + desert-sand (`--papyrus`, `--desert-sand`) — the prepared reed surface dominates. warm, sandy, organic. the sheet is the world; everything is written upon it.
- 26% reed-ink (`--reed-ink`) — the carbon-black ink ground from soot and gum. body text, borders, structural lines. the scribe's primary pigment is always present.
- 14% ochre + gold-foil (`--ochre`, `--gold-foil`) — mineral gold-ochre for cartouche framing, selected states, and decorative accents. present but not overwhelming — real pigment was ground by hand and used with economy.
- 8% terracotta (`--terracotta`) — the red earth pigment. section headings, warnings, emphasis marks. the scribe's second reed follows the first.
- 6% lapis-blue (`--lapis-blue`) — the costliest color on the palette. reserved for the single most important interactive element or featured callout on any given view. imported from the mountains; used as such.
- 4% nile-green (`--nile-green`) — Nile delta sediment color, echoing the fertile black land (Kemet) beyond the desert. success states, positive markers, secondary accents.

the overall palette must evoke an open scroll under desert sunlight — sand and warm brown dominating, black ink defining every form, occasional ochre gleaming where the cartouche was painted, a single lapis accent burning like a piece of sky on the page.

**component patterns**

buttons:
- primary (decree): `background: var(--lapis-blue); color: var(--papyrus); border: 2px solid var(--reed-ink); border-radius: 3px; font-family: "Cormorant Garamond", serif; font-variant: small-caps; letter-spacing: 0.1em; padding: 10px 24px; font-size: 14px;` — lapis blue, the color of the sky and the most precious pigment. the primary decree button is inked in lapis — it carries weight.
- secondary (scribal): `background: var(--papyrus); color: var(--reed-ink); border: 2px solid var(--reed-ink); border-radius: 3px; font-family: "Cormorant Garamond", serif; font-variant: small-caps; letter-spacing: 0.1em; padding: 10px 24px; font-size: 14px;` — the plain reed-ink on papyrus button. a standard scribal notation.
- accent (cartouche): `background: var(--ochre); color: var(--reed-ink); border: 2px solid var(--reed-ink); border-radius: 3px; font-family: "Cormorant Garamond", serif; font-variant: small-caps; letter-spacing: 0.1em; padding: 10px 24px; font-size: 14px;` — the ochre cartouche button. for featured or affirmative actions.
- danger (red ochre): `background: var(--terracotta); color: var(--papyrus); border: 2px solid var(--reed-ink); border-radius: 3px; font-family: "Cormorant Garamond", serif; font-variant: small-caps; letter-spacing: 0.1em; padding: 10px 24px;` — the red-pigment warning. the scribe switched to red to mark errors and omens.
- ghost: `background: transparent; color: var(--reed-ink); border: 2px solid var(--reed-ink); border-radius: 3px; font-family: "Cormorant Garamond", serif; font-variant: small-caps; letter-spacing: 0.1em; padding: 10px 24px;`
- disabled: `background: var(--desert-sand); color: rgba(42, 31, 20, 0.35); border: 2px solid rgba(42, 31, 20, 0.2); border-radius: 3px; cursor: not-allowed;` — faded, sun-bleached pigment. the decree was never sealed.

inputs:
- `background: var(--papyrus); border: 2px solid var(--reed-ink); border-radius: 3px; color: var(--reed-ink); font-family: "Cormorant Garamond", serif; font-size: 15px; padding: 10px 14px; line-height: 1.6;`
- label above: `font-family: "Cormorant Garamond", serif; font-variant: small-caps; font-size: 12px; color: var(--terracotta); letter-spacing: 0.12em; margin-bottom: 6px;` — the field label is written in red ochre, as the scribe marked every blank space on an administrative form.
- placeholder: `color: rgba(42, 31, 20, 0.32); font-style: italic; font-family: "Cormorant Garamond", serif;`
- focus: `border-color: var(--lapis-blue); box-shadow: 0 0 0 2px rgba(27, 79, 138, 0.18); outline: none;` — lapis-blue border marks the active writing surface.
- error state: `border-color: var(--terracotta); box-shadow: 0 0 0 2px rgba(184, 76, 42, 0.15);`
- success state: `border-color: var(--nile-green);`

cards (papyrus registers):
- each card is a register — a bounded section of the scroll containing one administrative entry. `background: var(--papyrus); border: 2px solid var(--reed-ink); border-radius: 3px; padding: 22px 26px;`
- card title/heading: `font-family: "Cormorant Garamond", serif; font-weight: 600; font-variant: small-caps; font-size: 18px; letter-spacing: 0.08em; color: var(--terracotta); margin-bottom: 10px;` — the register heading, marked in red ochre.
- card body: `font-family: "Cormorant Garamond", serif; color: var(--reed-ink); font-size: 15px; line-height: 1.75;`
- cartouche card (featured): `border: 3px solid var(--ochre); border-radius: 4px; box-shadow: inset 0 0 0 1px rgba(196, 138, 46, 0.25);` with an ochre top accent `border-top: 4px solid var(--gold-foil)` — the royal cartouche frames the most important record.
- ruled papyrus texture within card: `background-image: repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(42, 31, 20, 0.028) 29px, rgba(42, 31, 20, 0.028) 30px);` — faint horizontal ruling lines exactly as the scribe drew them before writing.
- card with lapis accent: `border-left: 4px solid var(--lapis-blue); padding-left: 22px;` — a lapis-marked document of special importance.

navigation:
- papyrus header band — `background: var(--desert-sand); border-bottom: 3px solid var(--reed-ink); padding: 0 32px;`
- nav items: `padding: 14px 20px; font-family: "Cormorant Garamond", serif; font-variant: small-caps; font-size: 13px; letter-spacing: 0.12em; color: var(--reed-ink); border-right: 1px solid rgba(42, 31, 20, 0.15);` — each nav item is a labeled column of the scroll, marked in the scribal hand. columns are named and tabbed.
- active item: `color: var(--terracotta); border-bottom: 3px solid var(--terracotta); font-weight: 600;` — the active section is rubricated, as the scribe marked the current column in red.
- logo/title area: `font-family: "Cormorant Garamond", serif; font-variant: small-caps; font-size: 20px; letter-spacing: 0.14em; color: var(--reed-ink); font-weight: 600;` — the document title in bold scribal hand.
- horizontal scroll nav variant: scrollable horizontal row of labeled section tabs, mimicking the column headers of a multi-column papyrus.

headers:
- scroll title panel — `background: var(--papyrus); padding: 44px 48px 36px; text-align: center; border-bottom: 3px solid var(--reed-ink);`
- primary heading: `font-family: "Cormorant Garamond", serif; font-size: 44–60px; font-weight: 600; font-variant: small-caps; letter-spacing: 0.14em; color: var(--reed-ink); line-height: 1.15;` — the proclamation title at the head of the scroll.
- subtitle: `font-family: "Cormorant Garamond", serif; font-size: 17px; color: var(--terracotta); font-variant: small-caps; letter-spacing: 0.08em; margin-top: 10px;` — the secondary title or dating formula in red ochre.
- decorative rule: `width: 100px; height: 2px; background: var(--ochre); margin: 18px auto;` — an ochre line separating the title from the content below.
- date/provenance line: `font-family: "Cormorant Garamond", serif; font-size: 12px; font-variant: small-caps; letter-spacing: 0.12em; color: rgba(42, 31, 20, 0.5); margin-top: 8px;` — "Regnal Year 7 of the Reign of Ramesses" or equivalent dating metadata.

footers:
- colophon band — `background: var(--desert-sand); border-top: 3px solid var(--reed-ink); padding: 22px 40px; text-align: center;`
- colophon text: `font-family: "Cormorant Garamond", serif; font-style: italic; font-size: 13px; color: rgba(42, 31, 20, 0.55); line-height: 1.65;` — "This scroll was completed in the House of Life, in the presence of the Chief Scribe..." — the colophon note recording the document's completion.
- scroll number/folio mark: `font-variant: small-caps; letter-spacing: 0.14em; font-size: 11px;`
- small decorative ankh glyph (☥) or djed pillar (𓋹) centered above colophon text at `color: var(--ochre); opacity: 0.6; font-size: 16px;`

lists:
- each item preceded by a small ochre marker — a triangular rubric glyph simulated via `color: var(--ochre); margin-right: 10px; font-size: 12px; content: "▸"` — the scribal indent marker.
- item text: `font-family: "Cormorant Garamond", serif; font-size: 15px; color: var(--reed-ink); line-height: 1.75;`
- items separated by ruled lines: `border-bottom: 1px solid rgba(42, 31, 20, 0.1); padding: 10px 0;`
- numbered lists: numerals in `font-variant: small-caps; color: var(--terracotta); margin-right: 12px;` — the scribe numbered inventories in red ochre.
- ordered inventory variant: wide left padding for item numbers, body text in two implied columns (number · description) as in a real inventory papyrus.

tables (inventory ledgers):
- `border-collapse: collapse; width: 100%;` — the inventory table is the papyrus ledger in its truest form.
- outer border: `border: 2px solid var(--reed-ink); border-radius: 3px; overflow: hidden;`
- header row: `background: var(--desert-sand); color: var(--terracotta); font-family: "Cormorant Garamond", serif; font-variant: small-caps; font-size: 13px; letter-spacing: 0.1em; padding: 11px 16px; border-bottom: 3px solid var(--reed-ink);` — column headings are rubricated in red ochre, marking the category of each column (commodity, quantity, unit, destination).
- body cells: `font-family: "Cormorant Garamond", serif; color: var(--reed-ink); font-size: 14px; padding: 9px 16px; border-bottom: 1px solid rgba(42, 31, 20, 0.1);`
- alternating row tint: `background: var(--papyrus)` and `background: rgba(221, 208, 181, 0.4)` — the two tones of papyrus visible in real ledger sheets.
- numeric cells: `text-align: right; font-variant: tabular-nums; letter-spacing: 0.03em;` — quantities aligned right as in administrative papyri.
- total row: `font-weight: 600; border-top: 2px solid var(--reed-ink); background: var(--desert-sand);`

dividers:
- primary rule: `height: 2px; background: var(--reed-ink); border: none; margin: 28px 0; opacity: 0.25;` — the scribal ruling line drawn between sections.
- ochre decorative rule: `height: 1px; background: var(--ochre); margin: 24px 0; opacity: 0.6;` — an ochre line between minor subdivisions, as painted ochre rules appear in fine papyri.
- column divider with cartouche glyph: a centered ochre oval ornament (☥ or ◇) at the midpoint of the divider line, flanked by `1px solid var(--ochre)` rules on each side via `::before` and `::after` pseudo-elements.
- section break with red mark: `border-top: 2px solid var(--terracotta); opacity: 0.4; margin: 36px 0;` — the red-pigment paragraph break used when the scribe changed subject within a column.

modals (unrolled sub-scroll):
- `background: var(--papyrus); border: 3px solid var(--reed-ink); border-radius: 4px;`
- cartouche-edged featured modal: `border: 3px solid var(--ochre); border-radius: 4px; box-shadow: inset 0 0 0 1px rgba(196, 138, 46, 0.2), 0 24px 64px rgba(42, 31, 20, 0.25);`
- modal title: `font-family: "Cormorant Garamond", serif; font-variant: small-caps; font-size: 24px; font-weight: 600; letter-spacing: 0.1em; color: var(--reed-ink); text-align: center; padding: 20px 24px; border-bottom: 2px solid var(--reed-ink);`
- modal body: `padding: 24px 28px; font-family: "Cormorant Garamond", serif; color: var(--reed-ink); font-size: 15px; line-height: 1.75;`
- overlay backdrop: `background: rgba(30, 20, 10, 0.65);` — desert night, the scroll unrolled by torchlight.
- inner ruled lines: `background-image: repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(42, 31, 20, 0.025) 29px, rgba(42, 31, 20, 0.025) 30px);`

badges/seals:
- standard: `background: var(--ochre); color: var(--reed-ink); font-family: "Cormorant Garamond", serif; font-variant: small-caps; font-size: 10px; letter-spacing: 0.12em; padding: 3px 10px; border: 1px solid var(--reed-ink); border-radius: 2px;` — small ochre label, like a clay seal impression.
- lapis variant (premium/featured): `background: var(--lapis-blue); color: var(--papyrus); border: 1px solid var(--reed-ink); border-radius: 2px;`
- terracotta variant (warning/notice): `background: var(--terracotta); color: var(--papyrus); border: 1px solid var(--reed-ink); border-radius: 2px;`
- nile-green variant (confirmed): `background: var(--nile-green); color: var(--papyrus); border: 1px solid var(--reed-ink); border-radius: 2px;`
- outline variant: `background: transparent; color: var(--reed-ink); border: 1px solid var(--reed-ink); border-radius: 2px;`

alerts/callout panels:
- notice (ochre): `background: rgba(196, 138, 46, 0.1); border: 2px solid var(--ochre); border-left: 4px solid var(--ochre); border-radius: 3px; padding: 14px 18px;` with heading `color: var(--ochre); font-variant: small-caps; letter-spacing: 0.08em;`
- warning (terracotta): `background: rgba(184, 76, 42, 0.08); border: 2px solid var(--terracotta); border-left: 4px solid var(--terracotta); border-radius: 3px; padding: 14px 18px;`
- success (nile-green): `background: rgba(59, 122, 87, 0.08); border: 2px solid var(--nile-green); border-left: 4px solid var(--nile-green); border-radius: 3px; padding: 14px 18px;`
- informational (lapis): `background: rgba(27, 79, 138, 0.08); border: 2px solid var(--lapis-blue); border-left: 4px solid var(--lapis-blue); border-radius: 3px; padding: 14px 18px;`

tooltips:
- `background: var(--reed-ink); color: var(--papyrus); font-family: "Cormorant Garamond", serif; font-size: 12px; font-style: italic; padding: 6px 12px; border-radius: 2px; letter-spacing: 0.02em;` — the interlinear gloss, written in a smaller hand above the word being explained.

**interaction language**

- hover: the papyrus surface warms under the eye of the reader. buttons lighten — `filter: brightness(1.08); transition: 0.3s ease;`. cards gain a faint ochre breath — `box-shadow: 0 2px 10px rgba(196, 138, 46, 0.12); transition: 0.3s ease;`. text links: `color: var(--lapis-blue); text-decoration: underline; text-underline-offset: 3px; transition: color 0.3s ease;`. the transition is `0.3s ease` across all hover states — the slow shift of sunlight across the scroll.
- active/pressed: the reed stamp meets the surface — `filter: brightness(0.91); transition: 0.1s ease;` on buttons. `transform: translateY(1px); transition: 0.1s ease;` for pressable elements. no bounce, no spring. the press of a clay seal is one deliberate motion.
- focus: lapis-blue outline — `outline: 2px solid var(--lapis-blue); outline-offset: 3px;` — lapis marks the active element, as the scribe places his reed on the next column to write.
- selected: `background: rgba(27, 79, 138, 0.1); border-color: var(--lapis-blue); color: var(--reed-ink);` — selected elements carry a lapis tint and a lapis border, as a document sealed with lapis-blue wax is confirmed.
- disabled: sun-bleached and illegible — `opacity: 0.38; filter: saturate(0.2) brightness(1.05); pointer-events: none; cursor: not-allowed;` — a papyrus fragment left too long in the desert sun, the pigment drawn out, the text fading.
- drag: lifted from the reading desk — `box-shadow: 0 8px 28px rgba(42, 31, 20, 0.18); transform: translateY(-3px) rotate(0.5deg); transition: 0.3s ease;` — the scroll is lifted by one edge, casting a desert shadow beneath it.

**motion & feedback**

transitions:
- papyrus does not move. the scroll lies flat on the scribe's desk. the ONLY permitted transitions are interaction state changes — hover, focus, active — at `0.3s ease`. everything else is immediate. no page entrance animations, no scroll effects, no layout transitions. the scribe does not perform for the audience; he writes.
- `transition-property: background-color, border-color, color, box-shadow, opacity, filter, transform;` — restrict transitions to these properties only. never transition width, height, grid, or layout properties.

loading:
- static text indicator only — a small phrase reading "The scribe is at work..." or "···" in `var(--reed-ink)` at `font-style: italic; opacity: 0.6; font-family: "Cormorant Garamond", serif;`. alternatively three dots in ochre, spaced wide: `· · ·`. no animation, no pulsing, no spinner. the scribe works at his own pace; the document arrives when it is ready.

success:
- static confirmation — the element's border shifts to `var(--nile-green)` and a brief text message appears: "Sealed." or "Inscribed upon the scroll." in `color: var(--nile-green); font-style: italic;`. no shimmer, no sweep, no animation. the scribe draws a red mark at the end of the entry to confirm its completion.

error:
- static correction — the element's border shifts to `var(--terracotta)` and an error message appears in `color: var(--terracotta); font-style: italic;`. no shake, no flash, no animation. the scribe draws a line through an error and writes the correction above it.

page enter:
- immediate. the scroll is already written; it does not compose itself in front of the reader. all elements render at full opacity and full position. `animation: none` is the universal default. the document is unrolled and placed before you — it was completed before you arrived.

**atmosphere**

- papyrus surface: `background: var(--papyrus)` — `#F2E8D0`. never white, never cool. the ground is the prepared reed mat, warm and slightly fibrous. the eye should never doubt it is reading a physical material surface.
- papyrus ruling lines: `background-image: repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(42, 31, 20, 0.025) 29px, rgba(42, 31, 20, 0.025) 30px);` — the horizontal lines the scribe ruled across the sheet before writing. barely visible but always present, as on every real papyrus.
- desert sunlight warmth: `background: radial-gradient(ellipse at 50% 0%, rgba(212, 168, 54, 0.07) 0%, transparent 55%);` — a faint gold warmth from above, as if direct Egyptian sunlight falls across the open scroll on the reading desk.
- column-based layout: when content allows, use `columns: 2; column-gap: 36px; column-rule: 1px solid var(--reed-ink-faint);` — real administrative papyri are divided into vertical columns (the Egyptian recto columns run right to left but the UI adapts to left-to-right). two-column layouts are not a design choice; they are the native structure of a scroll.
- cartouche accents: the oval-rectangle cartouche frame (simulated via `border-radius: 3–4px; border: 2–3px solid var(--ochre)`) is the signature decorative element. use on exactly ONE featured panel per view — the most important container. do not multiply cartouches; in Egyptian art, only the royal name received the cartouche. its rarity is its power.
- hieroglyphic border decoration: a subtle top and bottom border pattern on major panels, simulated via `background-image: repeating-linear-gradient(90deg, var(--ochre) 0px, var(--ochre) 3px, transparent 3px, transparent 12px)` at `height: 4px; opacity: 0.35;` — evokes the decorative border of painted hieroglyphic registers without introducing actual hieroglyphic characters that would distract from UI content.
- desert atmosphere: the overall palette is sand — warm, mineral, ancient. there is no cool tone on this surface. even the lapis blue sits within a warm sandy context, as lapis beads sit within a gold collar. the screen should feel like a working surface under the New Kingdom sun, not a museum display case.

**editorial voice**

button labels: "Record", "Seal", "Inscribe", "Submit to Archive", "Dispatch", "Open Register", "Mark Complete", "Consult", "Appoint", "Abrogate". formal administrative Egyptian vocabulary. single-word or short-phrase commands with the cadence of an official decree. never casual, never modern, never colloquial.

headings: administrative and formal — "Register of Provisions", "The Decree Concerning", "Index of Holdings", "Record of the House of Life", "Inventory of the Treasury", "Astronomer's Table", "Official Correspondence", "The Living, Prosperous, and Healthy Record", "Annals of the Administration". title case. Egyptian administrative formulas blend with practical content labels.

metadata: dating-formula style — "Regnal Year 7 · Third Month of Inundation", "Scroll No. XCII · Column IV", "Transcribed by the Scribe Amenhotep, Son of Hapu", "Department: House of Life", "Catalog No. 91 · The Archives at Thebes", "Day 14 · Month of Harvest". small-caps, interpuncts for separation, no digital timestamps.

placeholders: "Inscribe herein...", "Enter the name to be recorded...", "Search the scroll...", "Write thy query upon the register...", "Provide the quantity...". formal second person, slightly archaic, unhurried. the form awaits the scribe's reed.

empty states: "This column remains unwritten. The scribe has not yet attended to this register.", "No entries have been set down in this section.", "The register is empty, awaiting the scribe's hand.", "Herein: nothing. This portion of the scroll has not been completed.". complete sentences, formal, no apology, period-terminated. the empty papyrus is a neutral fact, not a failure.

error messages: "The record cannot be set down.", "This entry was not found within the scroll.", "The seal of office was not recognized — access withheld.", "An error in the transcription. The scribe must correct this line.", "The register could not be consulted at this time.". measured, formal, no emoji, no exclamation marks. errors are administrative inconveniences, not catastrophes.

success messages: "Inscribed upon the scroll.", "The entry has been sealed.", "Recorded in the register.", "The dispatch has been sent.", "The seal is set — the decree is complete.", "Preserved in the House of Life.". past tense or passive voice. one complete sentence. period-terminated. the scribe marks the end of an entry with a single stroke.

**cursor & selection**

- default: `cursor: default`
- interactive elements: `cursor: pointer`
- text areas and inputs: `cursor: text`
- drag targets: `cursor: grab` / `cursor: grabbing` when active
- disabled: `cursor: not-allowed`
- text selection: `::selection { background: rgba(196, 138, 46, 0.28); color: var(--reed-ink); }` — ochre mineral pigment washes over the selected text, as if the scribe drew a line of diluted ochre to highlight a passage for the reader.
- no custom cursor shapes. the scroll is read with the eye; the hand points and turns.

**when to reach for this genome**

Use `papyrus_scroll.ankh` when the prompt asks for an ancient Egyptian scroll, royal decree, temple archive, pharaonic inventory, grain ledger, tax roll, astronomical register, scribe's desk, House of Life record, cartouche-framed document, or any product that should feel like a New Kingdom administrative papyrus written for active use rather than display.

Reach for it when the user wants warm papyrus fiber, reed-brown ink, red-ochre rubric marks, lapis-blue emphasis, scarce gold cartouche borders, hieroglyphic-inspired register rules, column-based scroll layout, formal regnal dates, seals, scribal inventory tables, and serif calligraphy weight. It is strongest when the interface can organize work as registers, decrees, dispatches, offerings, quantities, seals, and preserved inscriptions.

Choose it for:
- history, education, museum-adjacent, game, or archive surfaces where ancient Egypt is the explicit material world and the screen should read as the working scroll itself.
- administrative and reference experiences that can use scribal verbs: inscribe, seal, consult, record, dispatch, preserve, enumerate, and certify.
- data tables or ledgers that benefit from warm paper, ruled columns, formal provenance lines, and the authority of an ancient office rather than a modern dashboard.
- ceremonial documents, dynastic timelines, temple records, astronomical tables, tribute inventories, and in-world fantasy interfaces that need Egyptian papyrus materiality.

Do not choose it for Greek or Roman marble, museum plinths, amphorae, Trajan capitals, or classical archaeology; use `amphitheater_marble.classical`. Do not choose it for medieval vellum, blackletter, gold-leaf initials, monastic folios, or Christian illuminated manuscripts; use `illuminated_codex.aureum`. Do not choose it for sculptural folded paper, crease diagrams, minimalist paper facets, or Japanese paper-craft restraint; use `origami_folio.paper`. Do not choose it for naturalist expedition notebooks, graph paper, pencil sketches, or field observations; use `field_journal.expedition`. Do not choose it for pressed botanical specimens, taxonomic labels, and herbarium sheets; use `herbarium_plate.specimen`.

**anti-patterns — this genome NEVER:**

1. uses sans-serif fonts on any text element. every glyph on the papyrus was drawn with a reed by hand — the Cormorant Garamond / EB Garamond serif line is the minimum acceptable weight of mark. no Helvetica, no Inter, no system sans-serif, no geometric sans, no humanist sans. the printing press does not exist; the digital screen's default typeface has no authority here.
2. uses animation, keyframe transitions, scroll effects, entrance animations, parallax, loading spinners, skeleton loaders with pulsing, or any motion beyond the `0.3s ease` interaction state transitions on hover and focus. papyrus does not animate. the scroll was written before you arrived. `animation: none` is the absolute default.
3. uses fully round or pill-shaped borders (`border-radius: 50px` or `9999px`). the hand-cut edge of papyrus fiber produces only a slight softening — `2–4px` maximum on all elements. equally, `border-radius: 0` mechanical sharp corners are too modern and too digital; papyrus is an organic material.
4. uses cool, cold, or neutral-temperature surfaces. no gray backgrounds, no blue-tinted whites, no slate or cool-stone palettes. the entire surface lives in the warm sand-ochre-brown register. even lapis blue, the only cool hue permitted, is used as a single precious accent within an overwhelmingly warm context.
5. uses monospace or code fonts for anything other than edge-case tabular numeric data. the New Kingdom scribe had no typewriter and no terminal. `Courier New`, `JetBrains Mono`, `Fira Code`, and similar fonts are categorically prohibited. if tabular numbers require visual alignment, use `font-variant: tabular-nums` on Cormorant Garamond.
6. uses modern interface language — no "oops", no "hey!", no "get started", no "awesome", no emoji, no exclamation marks in interface copy, no conversational chatbot tone, no startup register. the House of Life administration is formal, serious, and ancient. it writes with the gravity of a royal decree.
7. uses gradients as primary surface fills on large panels or backgrounds. the ochre warmth is a subtle atmospheric overlay, not a gradient hero background. no `linear-gradient` hero banners, no multi-stop color ramps on buttons or cards. all pigments were applied flat, as mineral pigment mixed in gum arabic does not blend into gradients on papyrus fiber.
8. uses the cartouche frame on more than one element per view. the cartouche in Egyptian art enclosed only the royal name — one name, one cartouche. using it on multiple containers simultaneously strips it of its meaning and its visual power. one cartouche per view, on the single most important container.
9. uses `box-shadow` as a general depth mechanism on cards and panels. the scroll lies flat on the desk. cards do not float above the page surface — they are written ON it. `box-shadow` is reserved strictly for modals (which are lifted off the surface) and dragged elements. nothing else floats.
10. uses bright, saturated, digitally-pure colors that could not be produced from Egyptian mineral pigments. no `#FF0000`, no `#0000FF`, no `#00FF00`, no electric neon. every color on this palette should be achievable by grinding lapis lazuli, malachite, red ochre, yellow ochre, charcoal, and white chalk. the pigment test: if an Egyptian craftsman could not mix it from available minerals, it does not belong on this scroll.
