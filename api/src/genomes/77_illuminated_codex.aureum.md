---
id: "77"
name: illuminated_codex.aureum
keywords:
  - illuminated
  - manuscript
  - medieval
  - codex
  - vellum
  - gold leaf
  - monastery
  - scripture
  - calligraphy
  - gothic
  - blackletter
  - scriptorium
  - book of kells
---

### genome 77: `illuminated_codex.aureum`

> identity: Medieval illuminated manuscript from a Benedictine scriptorium. Book of Kells, Lindisfarne Gospels, Les Très Riches Heures du Duc de Berry. Vellum parchment, gold leaf initials, lapis lazuli blue, vermillion red, decorated borders with vine scrollwork and marginalia creatures. Hand-ruled columns, rubricated chapter headings, colophon marks. The abbey library by candlelight.

**surface**

colors:
```
--parchment: #F0E6D0;          /* vellum cream — the page itself */
--gold-leaf: #B8942E;           /* burnished gold — initials, accents, gilding */
--lapis: #1E4D8C;              /* lapis lazuli ultramarine — initial fills, borders */
--rubric: #C0392B;             /* vermillion red — rubricated headings, rubric marks */
--ivy: #2E6B3E;                /* forest green — vine scrollwork, decorated borders */
--iron-gall: #3C2415;          /* deep brown — body text, main ink, structural lines */
--ochre: #CC9933;              /* ochre yellow — secondary illumination, minor gilding */
--vellum-dark: #D8CCAF;        /* aged parchment — darker parchment tone for depth */
--candle-glow: #F5DEB3;        /* warm wheat — candlelight warmth on margins */
```

typography:
- display/initials: blackletter/uncial for decorated initials and major headings — `"UnifrakturMaguntia", "MedievalSharp", fantasy` at `48–72px`. these are the grand illuminated capitals at the start of a chapter. `font-weight: 400; color: var(--gold-leaf);` with `text-shadow: 1px 1px 0 var(--iron-gall);` to simulate ink depth. used ONLY for hero display, chapter openings, and decorated initials — never for running body text.
- headings/rubrics: rubricated headings in vermillion — `"Cormorant Garamond", "EB Garamond", serif` at `22–32px; font-weight: 700; color: var(--rubric);`. rubricated headings are the red-inked section markers written by the rubricator after the scribe completed the body text. `letter-spacing: 0.04em; line-height: 1.3;`
- body/scribal text: Caroline minuscule — `"Cormorant Garamond", "EB Garamond", serif` at `15–17px; font-weight: 400; line-height: 1.7; color: var(--iron-gall);`. generous scribal spacing replicating hand-ruled line guides. `letter-spacing: 0.01em;` max-width: `65ch` per column.
- marginalia/annotations: `"Cormorant Garamond", "EB Garamond", serif` at `11–13px; font-style: italic; color: rgba(60, 36, 21, 0.6);`. smaller text for marginal glosses, annotations, and scribal notes. positioned in margins or as footnotes.
- labels/colophon: `"Cormorant Garamond", serif` at `10–11px; font-variant: small-caps; letter-spacing: 0.12em; color: var(--iron-gall);`. used for folio numbers, colophon marks, and structural metadata.
- drop caps: first letter of major text blocks floats left at `3em` height. `font-family: "UnifrakturMaguntia", fantasy; font-size: 4.5em; float: left; line-height: 0.8; margin-right: 8px; color: var(--gold-leaf); padding-top: 4px;` — the illuminated initial at the start of a passage.
- hierarchy driven by color and scale, not weight: gold blackletter for the sacred display, vermillion serif for structural headings, brown serif for readable body. the rubricator's color system IS the hierarchy.

borders:
- structural frames: `3–4px solid var(--iron-gall)` — heavy decorated borders around major content panels. `border-radius: 2–3px` (softened vellum edges, not sharp mechanical cuts). these represent the hand-ruled border frames drawn before illumination.
- ornate decorated frames: vine scrollwork border patterns via repeating CSS gradients — `border-image: repeating-linear-gradient(45deg, var(--ivy) 0px, var(--ivy) 4px, var(--gold-leaf) 4px, var(--gold-leaf) 8px, var(--lapis) 8px, var(--lapis) 12px) 8;` on featured panels. the intertwined vine and gold pattern of a manuscript border.
- hand-ruled column lines: `1px solid rgba(60, 36, 21, 0.2)` — the faint brown lines ruling columns on the vellum page. visible but not dominant.
- gilded corners: `border: 3px solid var(--gold-leaf)` on important panels, with small gold corner ornaments via `::before` and `::after` pseudo-elements (small gold squares or L-shapes at corners).
- inner panel dividers: `1px solid rgba(60, 36, 21, 0.15)` — scribal ruling lines within text columns.

spacing:
- decorated margins: `padding: 40–60px` on page-level containers — generous margins as in a real manuscript, where the decorated border and marginalia creatures live.
- column internal: `padding: 20–28px` — space within each text column.
- column gap: `gap: 30–40px` — the gutter between two-column layouts, wide enough for marginal annotations.
- section vertical rhythm: `60–80px` between major chapter sections.
- inter-paragraph: `margin-bottom: 1.2em` — the scribal spacing between paragraphs, marked by pilcrow signs (¶) rather than blank lines in dense layouts.

**color distribution**

- 40% parchment (`--parchment`, `--vellum-dark`, `--candle-glow`) — the vellum page is the dominant surface. warm cream, never white, never cold. the page is the world.
- 25% iron-gall brown (`--iron-gall`) — the primary ink. body text, structural borders, ruling lines. the scribe's iron gall ink is the backbone of the page.
- 15% gold-leaf + ochre (`--gold-leaf`, `--ochre`) — illuminated initials, gilded accents, important borders, selected states. gold is precious and used deliberately — never as a background fill, always as accent and emphasis.
- 10% lapis lazuli (`--lapis`) — illuminated panel fills, decorated initial backgrounds, important callout boxes. the most expensive pigment — used for the most important elements.
- 7% rubric red (`--rubric`) — rubricated headings, important markers, danger states, versals. the rubricator's ink marks structure.
- 3% ivy green (`--ivy`) — vine scrollwork decoration, success states, marginal flourishes. the living vine that decorates the border.

the overall palette should feel like opening a medieval manuscript under candlelight — warm parchment dominating, brown ink defining structure, gold and lapis providing moments of breathtaking illumination, vermillion marking the chapter structure.

**component patterns**

buttons:
- primary: `background: var(--lapis); color: var(--parchment); border: 2px solid var(--iron-gall); border-radius: 2px; font-family: "Cormorant Garamond", serif; font-variant: small-caps; letter-spacing: 0.08em; padding: 10px 22px; font-size: 14px;` — a lapis lazuli panel, the most precious pigment reserved for the most important action.
- secondary: `background: var(--parchment); color: var(--iron-gall); border: 2px solid var(--iron-gall); border-radius: 2px; font-family: "Cormorant Garamond", serif; font-variant: small-caps; letter-spacing: 0.08em; padding: 10px 22px;`
- accent/gilt: `background: var(--gold-leaf); color: var(--iron-gall); border: 2px solid var(--iron-gall); border-radius: 2px; font-family: "Cormorant Garamond", serif; font-variant: small-caps; letter-spacing: 0.08em; padding: 10px 22px;` — the gold-leaf button, for consecrated actions.
- danger: `background: var(--rubric); color: var(--parchment); border: 2px solid var(--iron-gall); border-radius: 2px;` — vermillion warning.
- ghost: `background: transparent; color: var(--iron-gall); border: 2px solid var(--iron-gall); border-radius: 2px; font-family: "Cormorant Garamond", serif; font-variant: small-caps; letter-spacing: 0.08em; padding: 10px 22px;`

inputs:
- `background: var(--parchment); border: 2px solid var(--iron-gall); border-radius: 2px; color: var(--iron-gall); font-family: "Cormorant Garamond", serif; font-size: 15px; padding: 10px 14px; line-height: 1.5;`
- label above: `font-family: "Cormorant Garamond", serif; font-variant: small-caps; font-size: 12px; color: var(--rubric); letter-spacing: 0.1em; margin-bottom: 6px;` — rubricated label, as a rubricator marks form fields.
- placeholder: `color: rgba(60, 36, 21, 0.35); font-style: italic;`
- focus: `border-color: var(--gold-leaf); box-shadow: 0 0 0 2px rgba(184, 148, 46, 0.2);` — gilded focus ring.

cards:
- manuscript folios — each card is a page from the codex. `background: var(--parchment); border: 3px solid var(--iron-gall); border-radius: 3px; padding: 24px 28px;`
- card title: `font-family: "Cormorant Garamond", serif; font-weight: 700; color: var(--rubric); font-size: 20px; letter-spacing: 0.03em; margin-bottom: 12px;` — rubricated in vermillion.
- card body: `font-family: "Cormorant Garamond", serif; color: var(--iron-gall); font-size: 15px; line-height: 1.7;`
- featured card: ornate border via `border-image` with vine scrollwork gradient. gold-leaf top accent: `border-top: 4px solid var(--gold-leaf)`. drop cap on first paragraph.
- card with illuminated initial: first letter of the card content rendered as a drop cap in gold blackletter.
- subtle parchment texture: `background-image: repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(60, 36, 21, 0.03) 28px, rgba(60, 36, 21, 0.03) 29px);` — faint ruling lines.

navigation:
- manuscript binding edge — `background: var(--vellum-dark); border-bottom: 3px solid var(--iron-gall); padding: 0;`
- nav items: `padding: 14px 22px; font-family: "Cormorant Garamond", serif; font-variant: small-caps; font-size: 14px; letter-spacing: 0.1em; color: var(--iron-gall); border-right: 1px solid rgba(60, 36, 21, 0.2);` — tab-like folio markers along the binding.
- active item: `color: var(--rubric); border-bottom: 3px solid var(--rubric);` — the current chapter, rubricated.
- logo/title area: `font-family: "UnifrakturMaguntia", fantasy; font-size: 22px; color: var(--gold-leaf);` — the codex name in blackletter gold.

headers:
- manuscript title page — `background: var(--parchment); padding: 48px 40px; text-align: center; border: 4px solid var(--iron-gall); border-radius: 3px;`
- large heading: `font-family: "UnifrakturMaguntia", fantasy; font-size: 48–64px; color: var(--gold-leaf); line-height: 1.1;`
- subtitle: `font-family: "Cormorant Garamond", serif; font-size: 18px; color: var(--rubric); font-style: italic; margin-top: 12px; letter-spacing: 0.05em;`
- decorative rule below title: `width: 120px; height: 3px; background: var(--gold-leaf); margin: 20px auto;` with small lapis diamond ornament centered.
- flanked by ornamental elements — small gold fleurons (❧) or vine-scroll decorations on either side.

footers:
- colophon block — `background: var(--vellum-dark); border-top: 3px solid var(--iron-gall); padding: 24px 40px; text-align: center;`
- colophon text: `font-family: "Cormorant Garamond", serif; font-style: italic; font-size: 13px; color: rgba(60, 36, 21, 0.6); line-height: 1.6;` — "Finis. This codex was completed in the scriptorium..."
- folio number: `font-variant: small-caps; letter-spacing: 0.12em;`
- small gold cross or decorative mark centered above the colophon text.

lists:
- each item preceded by a pilcrow (¶) or small decorated marker in rubric red — `color: var(--rubric); margin-right: 10px; font-size: 14px;`
- item text: `font-family: "Cormorant Garamond", serif; font-size: 15px; color: var(--iron-gall); line-height: 1.7;`
- items separated by faint ruling lines: `border-bottom: 1px solid rgba(60, 36, 21, 0.1); padding: 10px 0;`
- alternate markers: ¶, ✠, ❧, ※ — varying scribal marks through the list for visual richness.

tables:
- ruled manuscript table — hand-drawn column structure. `border-collapse: collapse;`
- header row: `background: var(--vellum-dark); color: var(--rubric); font-family: "Cormorant Garamond", serif; font-variant: small-caps; font-size: 13px; letter-spacing: 0.1em; padding: 12px 16px; border-bottom: 3px solid var(--iron-gall);` — rubricated column headings.
- body cells: `font-family: "Cormorant Garamond", serif; color: var(--iron-gall); font-size: 15px; padding: 10px 16px; border-bottom: 1px solid rgba(60, 36, 21, 0.12);` — faint ruling lines between rows.
- alternating rows: `background: var(--parchment)` and `background: var(--vellum-dark)` — subtle parchment variation.
- outer border: `border: 3px solid var(--iron-gall);`

dividers:
- scribal ruling line — `height: 2px; background: var(--iron-gall); border: none; margin: 32px 0; opacity: 0.3;`
- decorative variant: gold rule with centered ornament — `height: 1px; background: var(--gold-leaf);` with a centered fleuron ❧ or cross ✠ in `var(--gold-leaf)` via a pseudo-element overlaid at the midpoint.
- vine scrollwork variant: `border-top: 2px solid var(--ivy); position: relative;` with repeating small leaf marks.

modals:
- manuscript page laid upon the reading desk — `background: var(--parchment); border: 4px solid var(--iron-gall); border-radius: 3px;`
- decorated border: `border-image: repeating-linear-gradient(45deg, var(--gold-leaf) 0px, var(--gold-leaf) 6px, var(--iron-gall) 6px, var(--iron-gall) 8px) 8;` — gilt and iron border pattern.
- warm candle glow: `box-shadow: 0 0 60px rgba(184, 148, 46, 0.12), 0 20px 60px rgba(0,0,0,0.3);`
- modal title: `font-family: "UnifrakturMaguntia", fantasy; font-size: 28px; color: var(--gold-leaf); text-align: center; padding: 20px 24px; border-bottom: 2px solid var(--iron-gall);`
- modal body: `padding: 24px 28px; font-family: "Cormorant Garamond", serif; color: var(--iron-gall); line-height: 1.7;`
- overlay backdrop: `background: rgba(30, 18, 8, 0.7);` — deep brown darkness, as if the candle dims the rest of the scriptorium.

badges:
- `background: var(--gold-leaf); color: var(--iron-gall); font-family: "Cormorant Garamond", serif; font-variant: small-caps; font-size: 10px; letter-spacing: 0.1em; padding: 3px 10px; border: 1px solid var(--iron-gall); border-radius: 2px;` — small gilt label.
- variant (rubric): `background: var(--rubric); color: var(--parchment); border: 1px solid var(--iron-gall);`
- variant (lapis): `background: var(--lapis); color: var(--parchment); border: 1px solid var(--iron-gall);`
- variant (outline): `background: transparent; color: var(--iron-gall); border: 1px solid var(--iron-gall);`

**interaction language**

- hover: parchment warms — subtle background shift toward `var(--candle-glow)`. on buttons, `background` lightens by 8–10%. `transition: 0.3s ease;` — the gentle shift of candlelight across the page.
- active/pressed: element darkens slightly — `filter: brightness(0.92);` — the press of a finger on vellum. `transition: 0.1s ease;`
- focus: gold-leaf outline — `outline: 2px solid var(--gold-leaf); outline-offset: 2px;` — a gilt frame marks the focused element.
- selected: gold-leaf border and warm parchment glow — `border-color: var(--gold-leaf); background: var(--candle-glow);` — the selected folio is illuminated.
- disabled: faded ink — `opacity: 0.4; filter: grayscale(0.3); pointer-events: none;` — worn, illegible text on damaged vellum.
- drag: element lifts gently with warm shadow — `box-shadow: 0 6px 20px rgba(60, 36, 21, 0.15); transform: translateY(-2px); transition: 0.3s ease;` — lifting a page from the lectern.

**motion & feedback**

transitions:
- NONE. parchment does not move. candlelit stillness. zero animation, zero transition on layout or decorative elements. the only permitted transitions are interaction state changes (hover, focus, active) at `0.3s ease` — these represent the slow shift of candlelight, not motion of the page.
- no scroll animations. no entrance animations. no loading animations with movement. no parallax. no transform animations. the manuscript is a still object. it does not perform.

loading:
- static indicator only — a small text element reading "⸫ Transcribing... ⸫" in `var(--iron-gall)`, italic, `font-family: "Cormorant Garamond"`. or three small dots (·  ·  ·) in gold. no pulsing, no spinning, no animation. the scribe works at the scribe's pace.

success:
- static change only — text appears reading "Inscribed." in `var(--ivy)`, italic. or the element's border changes to `var(--gold-leaf)` to indicate gilded completion. no shimmer, no sweep, no animation.

error:
- static change only — text appears reading "The ink has failed." in `var(--rubric)`. or the element's border changes to `var(--rubric)`. no flash, no shake, no animation.

page enter:
- immediate. the page is already written. there is no "loading in" of a manuscript — it exists as a complete object. all elements appear at full opacity instantly. `animation: none;` on all elements.

**atmosphere**

- vellum parchment background: `background: var(--parchment)` — the warm cream of prepared animal skin. never white, never gray. this is not paper; it is vellum — organic, warm, with natural variation.
- parchment texture: `background-image: repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(60, 36, 21, 0.025) 27px, rgba(60, 36, 21, 0.025) 28px);` — faint horizontal ruling lines, as if the scribe ruled the page with a stylus before writing.
- candlelight warmth: `background: radial-gradient(ellipse at 50% 20%, rgba(245, 222, 179, 0.15) 0%, transparent 60%);` — a faint warm glow from above, as if a candle or high window illuminates the reading desk.
- decorated borders: ornate vine scrollwork patterns on page margins using CSS repeating gradients in `var(--ivy)` and `var(--gold-leaf)` at low opacity. these are the painted vine borders of the illuminated page — structural decoration, not functional UI.
- marginalia: small decorative elements (✠, ❧, ※, ¶, ❦) placed in margins and corners at low opacity in `var(--iron-gall)`. these are the scribal marks, pointing hands (manicules), and small creatures that populate manuscript margins.
- two-column layout preference: when content permits, use a two-column text layout with a wide central gutter, replicating the bifolium page spread. `columns: 2; column-gap: 40px; column-rule: 1px solid rgba(60, 36, 21, 0.15);`
- the overall effect: sitting in the abbey scriptorium at vespers, a single beeswax candle burning, turning the heavy vellum pages of a codex that took three years to complete. warmth, stillness, gold catching the light, vermillion chapter marks guiding the eye, lapis blue filling the initial letters with crushed gemstone.

**editorial voice**

button labels: "Inscribe", "Illuminate", "Transcribe", "Seal", "Archive", "Commence", "Complete", "Preserve". formal, monastic, imperative. single-word Latin-rooted commands. never casual, never modern.

headings: scriptural/monastic — "Herein Begins the Chronicle", "Capitulum III: The Registry", "The Book of Hours", "Index Rerum", "Nota Bene", "The Scriptorium", "Liber Primus", "Incipit". Latin intermixed freely. the heading announces a section of the codex.

metadata: "Folio XII · Recto", "Anno Domini MMXXVI", "Transcribed by the hand of Brother ___", "Capitulum VII · Versus IX", "Codex No. 77 · Scriptorium Sancti Benedicti", "In the year of our Lord...". roman numerals, interpuncts, Latin abbreviations. dates in ecclesiastical form.

placeholders: "Inscribe herein...", "Enter the name of the manuscript...", "Seek within the codex...", "Write thy query upon this folio...". slightly archaic imperative, italicized, formal second person.

empty states: "This folio remains blank, awaiting the scribe's hand.", "No entries have been inscribed in this registry.", "The chapter has yet to be written.", "Herein: nothing. The page stands empty.". complete sentences, dignified, no apology, period-terminated.

error messages: "The ink has failed.", "This folio cannot be found within the codex.", "The seal is broken — entry denied.", "A fault in the transcription.", "Nota bene: the inscription was not preserved.". measured, formal, no emoji, no exclamation.

success messages: "Inscribed.", "The entry has been sealed.", "Added to the registry.", "Finis — the transcription is complete.", "Preserved in the archive.". past tense or passive voice, single sentence, period-terminated. the scribe records completion without celebration.

**cursor & selection**

- default: `cursor: default`
- interactive elements: `cursor: pointer`
- drag targets: `cursor: grab` then `cursor: grabbing`
- text areas: `cursor: text`
- disabled: `cursor: not-allowed`
- text selection: `::selection { background: var(--gold-leaf); color: var(--iron-gall); }` — gold-leaf highlight with iron gall text, as if selecting text on an illuminated page catches the gilding.
- no custom cursor shapes. the manuscript does not demand attention from the hand — the eye reads; the hand merely turns the page.

**when to reach for this genome**

Use `illuminated_codex.aureum` when the prompt asks for a medieval manuscript, monastic archive, sacred text, Book of Kells reference, scriptorium tool, vellum folio, illuminated chapter index, marginalia-heavy reader, manuscript registry, or any product that should feel hand-copied, rubricated, and gilded by a medieval scribe.

Reach for it when visual or product cues include gold-leaf initials, lapis lazuli panels, vermillion rubric marks, iron-gall body text, parchment folios, two-column page spreads, decorated borders, vine scrollwork, colophon notes, Roman numerals, blackletter display, uncial initials, capitulum headings, and candlelit abbey-library stillness.

Do not use it for jewel-tone glass panes, lancet arches, rose windows, lead caming, or cathedral light; use `cathedral_glass.lux`. Do not use it for quiet literary publishing, modern manuscript editing, book clubs, long-form essays, or reading-room typography without ornate illumination; use `manuscript_press.lit`. Do not use it for tarot decks, occult readings, velvet tables, reversed cards, or Major Arcana spreads; use `tarot_spread.arcana`. Do not use it for ancient Egyptian papyrus, cartouches, hieroglyphic borders, royal scribes, or desert administrative scrolls; use `papyrus_scroll.ankh`.

It is strongest when the interface can be organized as folios, chapters, glosses, archives, registries, seals, and preserved inscriptions. If the primary metaphor is a stained-glass window, a printed book, a divination deck, or an ancient scroll, choose the adjacent genome with that material logic.

**anti-patterns — this genome NEVER:**

1. uses sans-serif fonts anywhere. all typography is serif, blackletter, or fantasy (uncial/insular) — the medieval scribal tradition. no Helvetica, no Inter, no system sans-serif. the printing press has not been invented yet.
2. uses animation, transition on layout elements, scroll effects, parallax, entrance animations, loading spinners, or any motion beyond hover/focus state changes. parchment is still. the candle may flicker but the page does not move. `animation: none` is the default. motion is an anti-pattern.
3. uses sharp mechanical corners with `border-radius: 0`. all structural elements use `border-radius: 2–3px` — the softened edges of vellum and hand-cut pages. equally, no fully rounded pills (`border-radius: 999px`) — this is not modern design.
4. uses cool or cold colors as primary surfaces. no blue-gray, no slate, no cool white. the world is WARM — vellum cream, candlelight wheat, iron gall brown, ochre gold. even the lapis blue sits within a warm context.
5. uses casual, playful, or modern-tech language. the editorial voice is monastic, measured, slightly archaic. no "oops!", no emoji, no "hey!", no "awesome!", no Silicon Valley jargon, no abbreviations. write as a Benedictine monk would speak.
6. uses gradients as primary decorative fills on large surfaces. the parchment is flat vellum. gradients are permitted only for subtle candlelight atmosphere and decorative vine-border patterns — never as a "modern gradient background."
7. uses shadows as a primary depth mechanism. the manuscript page is flat. `box-shadow` is used sparingly — only for modal candlelight glow and drag states. cards do not float; they are written ON the page.
8. uses thin hairline (`1px`) borders as primary structural framing. the scribe ruled with a firm hand — `2–4px` on all structural borders. `1px` is reserved only for internal ruling lines and column dividers within an already-framed page.
9. uses bright saturated neon or digitally-pure colors. all pigments are MINERAL — ground from stone (lapis), earth (ochre, sienna), metal (gold leaf), insect (vermillion/kermes). no `#00FF00`, no `#FF00FF`, no electric blue. every color should feel like it was mixed from pigment and egg tempera by hand.
