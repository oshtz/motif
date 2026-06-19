---
id: "35"
name: manuscript_press.lit
keywords:
  - literary
  - manuscript
  - typesetting
  - book
  - marginalia
  - drop cap
  - folio
  - sepia
  - parchment
  - letterpress
  - chapter
  - footnote
---

### genome 35: `manuscript_press.lit`

> identity: literary typesetting interface. Worn book margins, drop caps, folio numbers — a reading room rendered as UI. Penguin Classics covers, Baskerville letterpress, the quiet authority of a well-set page. The book as interface — marginalia, chapter headings, running headers, and footnote marks.

**surface**

colors:
```
--parchment: #F5EDDA;
--sepia: #F0E4C9;
--ink: #3B2F20;
--ink-soft: rgba(59, 47, 32, 0.55);
--ink-faint: rgba(59, 47, 32, 0.2);
--ink-ghost: rgba(59, 47, 32, 0.07);
--ornament: #7A6248;
--vignette: rgba(59, 47, 32, 0.04);
--margin-rule: rgba(59, 47, 32, 0.3);
```

typography:
- display/headings: `'Libre Baskerville', 'Baskerville', serif` — weight 400-700, 2-3rem for chapter titles, 1.2-1.5rem for section headings, `letter-spacing: 0.04em` on small caps headings, `letter-spacing: -0.01em` on large display. chapter numbers set in oldstyle numerals at 1rem above the chapter title.
- body/labels/data: `'Libre Baskerville', 'Baskerville', serif` — weight 400, 0.9-1rem body, 0.75rem footnotes and marginalia, `line-height: 1.7` for body (generous book leading), `line-height: 1.45` for UI labels. this is the only genome where serif is the body typeface.
- small caps (`font-variant: small-caps`) used extensively for running headers, bylines, categories, navigation labels, and badge text. `letter-spacing: 0.06em` on all small caps.
- drop caps on first paragraph of any major content block: `float: left; font-size: 3.2rem; line-height: 0.8; padding-right: 0.08em; font-weight: 700; color: var(--ink);`
- oldstyle numerals via `font-variant-numeric: oldstyle-nums` everywhere — page numbers, dates, data values
- no text exceeds 3rem except drop caps. measure (line length) targets 60-70 characters.

borders:
- all borders: `0.5px solid var(--margin-rule)` — hairline rules only. never heavier than `1px`.
- `border-radius: 0px` everywhere — no rounding, ever
- vertical margin rules: `border-left: 0.5px solid var(--margin-rule)` positioned to define marginalia columns
- no box-shadow anywhere — depth is implied through typographic hierarchy and warm vignette

spacing:
- outer padding: `2.5rem 3rem` — generous page margins, book-like proportions
- content max-width: `42rem` — classical book measure, centered on the page
- marginalia gutter: `3rem` to the right of the main column, `max-width: 10rem`
- section margins: `3rem 0` between chapters/sections
- paragraph spacing: `0` (use `text-indent: 1.5em` for new paragraphs instead of margin, the book way)
- footnote spacing: `1.5rem 0` above footnote block, separated by a short hairline rule (`width: 30%; border-top: 0.5px solid var(--margin-rule)`)

**color distribution**

- 65% parchment/sepia (`--parchment`, `--sepia`) — the aged paper ground. sepia used for recessed regions (marginalia columns, footnote blocks), parchment for the main reading surface
- 22% ink (`--ink`) — all text, all rules, all interactive affordances
- 8% ink-soft/ornament (`--ink-soft`, `--ornament`) — secondary text (footnote numbers, marginal annotations, folio numbers, chapter subtitles)
- 5% ink-faint/ink-ghost/vignette (`--ink-faint`, `--ink-ghost`, `--vignette`) — hover fills, section tints, the warm page vignette

a warm two-tone genome: aged parchment and dark brown ink. the warmth is deeper and yellower than editorial_inquiry's cool ivory. all variation comes from opacity and the ornament brown, not from additional hues. the atmosphere is candlelit, not fluorescent.

**component patterns**

buttons: no background, no border. text set in small caps serif with `letter-spacing: 0.06em; color: var(--ink); font-variant: small-caps`. hover adds `border-bottom: 0.5px solid var(--ink)`. active/pressed adds `background: var(--ink-ghost)`. primary actions use a short hairline rule below the text. no pills, no fills, no rounded corners. labels read like colophon instructions: "turn page", "mark passage", "set bookmark".

inputs: `border-bottom: 0.5px solid var(--margin-rule)` only — no full border box. `background: transparent`. label above in small caps serif: "chapter title", "search within", "annotation". placeholder text in `var(--ink-soft)`, italic serif. focus state: `border-bottom: 1px solid var(--ink)`. text entered in regular serif body weight.

cards/panels: the "page" pattern — a block with `background: var(--sepia); padding: 2rem 2.5rem`. no border on outer edge. content begins with a small caps running header, then a hairline rule, then body text. optional marginalia column floated right with smaller text in `var(--ornament)`. no shadow, no elevation — cards are pages laid upon pages.

navigation: horizontal running header at the top of the viewport. items set in small caps serif separated by typographic ornaments (`·` or `§`). active item gains `font-weight: 700` and `border-bottom: 0.5px solid var(--ink)`. no backgrounds, no pills, no icons. folio number (page number) right-aligned in oldstyle numerals.

headers: running header pattern — full-width with `padding: 0.8rem 3rem; border-bottom: 0.5px solid var(--margin-rule)`. left side: section/chapter title in small caps serif. center: ornamental divider (`— § —`). right side: folio number in oldstyle numerals. all text in `var(--ink-soft)` at 0.75rem.

footers: colophon pattern — centered block with `border-top: 0.5px solid var(--margin-rule); padding-top: 1.5rem; margin-top: 3rem`. text in small caps serif at 0.7rem. contains printer's marks, version info, and navigation links separated by `·`. folio number centered below all content.

lists: no bullet points. each item indented with a hanging pilcrow (`¶`) or section mark (`§`) in `var(--ornament)` as the list marker. items in regular serif body text. `margin-bottom: 0.4rem` between items. nested lists increase indent by `1.5em`. alternatively, numbered lists use oldstyle numerals with a period.

tables: minimal hairline grid — `0.5px solid var(--margin-rule)` on all cell borders. header row in small caps serif with `letter-spacing: 0.06em; background: var(--ink-ghost)`. data rows in regular serif. no alternating row colors. hover row gets `background: var(--vignette)`. `padding: 0.6rem 1rem` per cell.

dividers: typographic ornament dividers, never plain rules alone. patterns: `◊  ◊  ◊`, `— § —`, `※`, `¶`, or a centered `* * *` (three-asterisk dinkus). set in `var(--ornament)` at 0.85rem with `2rem` vertical margin. for structural separation (not decorative), a simple `0.5px solid var(--margin-rule)` hairline at 30-50% width, centered.

modals/overlays: the "tipped-in page" — a centered panel with `background: var(--parchment); padding: 2.5rem 3rem; max-width: 36rem`. no border, but a subtle warm vignette via `box-shadow: inset 0 0 60px var(--vignette)`. title as chapter heading (oldstyle numeral + small caps). content in body serif. close action is small caps text "close" at bottom-right corner, not an icon. no dark backdrop — overlay is `background: rgba(59, 47, 32, 0.15)`.

badges/tags: inline small caps text with no background and no border. differentiated by typographic marks: superscript numerals for footnote references (`font-size: 0.65rem; vertical-align: super`), parenthetical italic for status *(in press)*, *(annotated)*, *(first edition)*, and small caps for categories. never pill-shaped, never filled, never colored.

**interaction language**

- hover: `background: var(--ink-ghost)` on containers. text elements gain `color: var(--ink)` from `var(--ink-soft)`. ornamental marks increase opacity. `transition: 0.5s ease` on all hover changes.
- active/pressed: `background: var(--ink-faint)`. no transform, no scale.
- focus: `outline: 1px solid var(--ink); outline-offset: 3px`. no glow, no shadow.
- selected: `background: var(--ink-ghost)` persistent. text gains `font-weight: 700`.
- disabled: `opacity: 0.25`. text becomes `var(--ink-soft)`. no strikethrough.
- drag: `cursor: grab` → `cursor: grabbing`. element gains `outline: 0.5px dashed var(--margin-rule)`.

**motion & feedback**

transitions: `0.5s ease` default on background, opacity, color. `0.7s ease` on transforms and layout shifts. slow, page-turn pacing — nothing is instant, nothing is snappy. motion is the speed of turning a page, not clicking a button. no spring physics, no bounce, no overshoot.

loading: italic serif text fades in slowly (0.8s): *"Typesetting..."* then content appears paragraph by paragraph with `opacity: 0 → 1` stagger (120ms delay between blocks). a thin ornamental rule draws itself across the page width over 0.6s during load.

success: a centered dinkus (`* * *`) fades in over 0.5s, followed by italic serif confirmation below: *"Passage recorded."*, *"Bookmark set."*, *"Annotation preserved."*

error: the label text shifts to `font-weight: 700` and the footnote-style superscript number appears beside it, pointing to an error note at the bottom of the panel in italic serif: *"The referenced passage could not be located."* no red, no icons — errors are editorial corrections.

**atmosphere**

background: `var(--parchment)` (#F5EDDA) as the base. a warm inner vignette via `box-shadow: inset 0 0 120px var(--vignette)` on the body — barely perceptible, evoking the slight yellowing at the edges of aged pages. no texture image, no grain overlay, no gradient.

page proportions: content is set in a classical book column (42rem max-width) centered on the viewport with generous margins. marginalia occupies the right margin in smaller, lighter text. this asymmetric layout — wide left margin, narrow text column, marginalia right — IS the atmosphere.

folio numbers: discreet oldstyle numerals at the top-right or bottom-center of the viewport, styled in `var(--ornament)` at 0.75rem. they increment contextually with content sections, not with page scrolls.

drop caps: the first letter of any major content section is a drop cap — `float: left; font-size: 3.2rem; line-height: 0.8; padding-right: 0.08em; font-weight: 700; color: var(--ink)`. this is the genome's most distinctive visual mark.

no ambient animations. no particle effects. no floating elements. the page is still, warm, and quiet — atmosphere comes from typographic tradition, generous margins, and the faint sepia warmth of the parchment ground.

**editorial voice**

button labels: small caps, imperative but gentle — "turn page", "mark passage", "set bookmark", "view colophon", "return to contents", "append note"

headings: chapter-numbered, serif, mixed case — "Chapter iii. On the Nature of Inputs", "§ 4. Marginalia & Annotations", "Part Two: The Secondary Interface". section numbers in oldstyle roman or arabic numerals. headings are declarative, not interrogative (contrast with editorial_inquiry's questioning labels).

metadata: dates in literary format: "22 March 2026". editions as "Third Edition, Revised". versions as "vol. ii, no. 4". statuses in italic parenthetical: *(in press)*, *(out of print)*, *(annotated)*, *(first edition)*. IDs are colophon-style: "ms-0035".

placeholders: italic serif invitations — *"Begin writing here..."*, *"Enter the title of the chapter..."*, *"A brief annotation..."*

empty states: italic serif centered with ornament — *"This chapter has no passages yet."* followed by a small caps link: "begin writing". a dinkus (`* * *`) may appear above the empty state message.

error messages: italic serif, gentle correction — *"The passage you seek is not in this volume."* or *"This annotation could not be preserved."* no exclamation marks, no urgency. errors are errata.

success messages: italic serif — *"Recorded."*, *"Passage marked."*, *"The note has been set."* — brief, warm, affirming.

footnotes: the genome's signature communication device. footnotes are numbered with superscript oldstyle numerals in the main text, with the note content appearing either in the marginalia column or in a footnote block at the bottom of the section, separated by a short hairline rule. footnote text is 0.75rem in `var(--ornament)`.

**cursor & selection**

- default: `cursor: default`
- interactive elements (links, buttons, nav items): `cursor: pointer`
- marginalia and annotation regions: `cursor: text`
- drag handles (reorderable chapters, movable bookmarks): `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--ink-faint); color: var(--ink); }` — soft sepia-toned selection, like a gentle highlight on aged paper

**when to reach for this genome**

Use `manuscript_press.lit` when the prompt asks for literary publishing, long-form reading, manuscript editing, essay archives, book clubs, annotation tools, bookmark flows, footnote readers, chapter navigation, or any content product that should feel like a well-set volume rather than a modern document app.

Reach for it when visual or product cues include all-serif Baskerville typography, aged parchment, drop caps, small caps, folio numbers, marginalia, footnotes, chapter headings, oldstyle numerals, hairline rules, typographic ornaments, and slow page-turn pacing. It should be selected when the text itself is the primary artifact and the UI should recede into reading-room authority.

Do not use it for question-led blue editorial analysis, grid-table frames, radial inquiry charts, or cultural review dashboards; use `editorial_inquiry.rev`. Do not use it for medieval gold leaf, lapis, rubrication, ornate manuscript borders, or sacred-codex drama; use `illuminated_codex.aureum`. Do not use it for library drawer search, Dewey numbers, typed index cards, or municipal catalog systems; use `card_catalog.dewey`. Do not use it for bureaucratic carbon-copy memos, official forms, file folders, or 1960s records workflows; use `typewriter_carbon.duplicate`. Do not use it for ancient papyrus, hieroglyphic borders, royal-scribe inventories, or archaeological scroll surfaces; use `papyrus_scroll.ankh`. Do not use it for personal planners, wedding schedules, ring-bound notebooks, or lifestyle task journals; use `bespoke_planner.folio`.

It is strongest for quiet literary products where chapters, passages, notes, editions, and margins matter more than metrics, controls, or operational state.

**anti-patterns — this genome NEVER:**

1. uses sans-serif type for any element — all text is serif (Libre Baskerville/Baskerville). this is the genome's defining constraint and its sharpest contrast with every other genome
2. uses border-radius on any element — all corners are sharp, all shapes are rectilinear, as in letterpress printing
3. uses box-shadow for elevation or depth — the only permitted box-shadow is the subtle inner vignette on the body and modal panels
4. uses borders heavier than 1px — all rules are hairline (0.5-1px). no solid heavy frames, no 2px+ borders
5. uses bright or saturated colors — no red, no blue, no green. the palette is exclusively warm brown ink on aged parchment, with all variation through opacity
6. uses icons, emoji, or pictographic elements — all communication is typographic. navigational marks are typographic ornaments (§, ¶, ※, ◊, ·), not icons
7. uses snappy or fast transitions — no transition under 0.5s. motion is slow, deliberate, page-turn paced. no spring physics, no bounce
8. uses pill shapes, filled buttons, or colored badges — interactive elements are text-only with hairline underlines or small caps treatment
9. uses grid-table/cell-frame layouts — cards are pages, not spreadsheet cells (contrast with editorial_inquiry's frame-table pattern)
10. uses interrogative labels or question marks in headings — headings are declarative chapter titles and section numbers, not questions (contrast with editorial_inquiry's questioning voice)
