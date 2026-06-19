---
id: "73"
name: herbarium_plate.specimen
keywords:
  - herbarium
  - botanical
  - specimen
  - pressed
  - archival
  - taxonomy
  - flora
  - linnaeus
  - kew
  - scientific illustration
  - dried
  - mounted
  - collection
---

### genome 73: `herbarium_plate.specimen`

> identity: Pressed botanical specimen mounted on archival herbarium sheet. Kew Gardens specimen cabinets, Linnaeus taxonomy cards, Flora Danica engravings. Cream archival paper, India ink annotations, pencil graphite field notes, corner-mounted pressed leaves. Scientific precision, not decorative — this is the research collection, not the gift shop.

---

## surface

Colors:
- `--archival-sheet: #F5F0E6` — aged cream archival paper, primary background
- `--sheet-margin: #EDE8DC` — slightly darker margin area of the herbarium sheet
- `--india-ink: #1A1612` — India ink black, primary text and specimen labels
- `--pencil-graphite: #6B6560` — pencil graphite gray, field notes and secondary text
- `--graphite-light: #9B9590` — light pencil, ruled lines and faint annotations
- `--botanical-olive: #5C6B4A` — muted olive green, dried leaf and stem tones
- `--pressed-petal: #8B6B5E` — dried brown, pressed flower and bark tones
- `--stamp-red: #9B3B2A` — collection stamp red, institutional marks
- `--notation-blue: #3B5E8B` — field notation pencil blue, annotations and links
- `--mounting-tape: #C8BFA8` — archival mounting tape, subtle borders and dividers
- `--cabinet-wood: #4A3F34` — specimen cabinet wood, deep accent

Typography:
- Body: `"Baskerville", "Georgia", serif` at `font-weight: 400; font-size: 14px; line-height: 1.7; color: var(--india-ink)`.
- Headings: `"Baskerville", "Georgia", serif` at `font-weight: 400; font-size: 24-36px; font-style: italic; color: var(--india-ink)`. Latin binomial form — always italic.
- Taxonomist attributions: `"Baskerville", "Georgia", serif` at `font-variant: small-caps; font-size: 13px; letter-spacing: 0.08em; color: var(--pencil-graphite)`.
- Catalog/accession numbers: `"JetBrains Mono", "Courier New", monospace` at `font-size: 11px; font-weight: 400; color: var(--pencil-graphite); letter-spacing: 0.04em`.
- Field notes: `"Baskerville", "Georgia", serif` at `font-style: italic; font-size: 13px; color: var(--pencil-graphite)`.
- Display: `"Baskerville", "Georgia", serif` at `font-size: 36px; font-style: italic; font-weight: 400; letter-spacing: 0.01em`.
- No text-transform uppercase — small-caps only for taxonomist attributions, never all-caps.

Borders:
- `1px solid var(--mounting-tape)` — hairline borders on all structural elements.
- `0.5px solid var(--graphite-light)` — pencil-ruled lines for annotation areas.
- `border-radius: 0` — archival cards are cut square. No rounding anywhere. Zero.
- Specimen mounting corners: triangular CSS pseudo-element brackets at card corners (see component patterns).

Spacing: generous margins for annotation. `padding: 24-40px; gap: 16-24px`. Centered specimen with wide margins — the herbarium sheet has room for labels, stamps, and pencil notes in the margins.

---

## color distribution

- 55% archival-sheet/sheet-margin — cream paper background, the herbarium sheet itself
- 18% india-ink — primary text, specimen labels, Latin binomials
- 10% pencil-graphite/graphite-light — field notes, secondary text, ruled lines
- 6% botanical-olive — botanical accents, category indicators, leaf-related UI
- 4% pressed-petal — dried specimen tones, warm secondary accents
- 4% notation-blue — links, interactive elements, field notation highlights
- 3% stamp-red — institutional marks, alerts, important badges

---

## component patterns

Buttons: archival label style — flat, precise, institutional.
- Primary: `background: var(--india-ink); color: var(--archival-sheet); border: 1px solid var(--india-ink); border-radius: 0; font-family: "Baskerville", "Georgia", serif; font-variant: small-caps; font-size: 13px; letter-spacing: 0.08em; padding: 8px 20px`.
- Secondary: `background: var(--archival-sheet); color: var(--india-ink); border: 1px solid var(--india-ink); border-radius: 0; padding: 8px 20px`.
- Tertiary/ghost: `background: transparent; color: var(--notation-blue); border: 1px solid var(--mounting-tape); border-radius: 0; padding: 8px 20px`.
- Danger: `background: var(--stamp-red); color: var(--archival-sheet); border: 1px solid var(--stamp-red)`.
- No box-shadow on any button. Flat. Pressed.

Inputs: pencil-ruled field.
- `background: var(--archival-sheet); border: none; border-bottom: 0.5px solid var(--graphite-light); border-radius: 0; color: var(--india-ink); font-family: "Baskerville", "Georgia", serif; font-style: italic; font-size: 14px; padding: 8px 4px`.
- Focus: `border-bottom: 1px solid var(--india-ink); outline: none`. The pencil line darkens to ink.
- Placeholder: `color: var(--graphite-light); font-style: italic`. Faint pencil suggestion.

Cards: herbarium sheet / specimen mount.
- `background: var(--archival-sheet); border: 1px solid var(--mounting-tape); border-radius: 0; padding: 32px 40px; position: relative`.
- Mounting corners: four triangular pseudo-elements at each corner using `::before` and `::after` on inner wrappers — `width: 16px; height: 16px; border-top: 1px solid var(--mounting-tape); border-left: 1px solid var(--mounting-tape)` rotated 0/90/180/270deg at each corner.
- Card header: Latin binomial in italic serif, followed by taxonomist attribution in small-caps beneath.
- Card footer: accession number in monospace, right-aligned.

Navigation: specimen cabinet drawer index.
- Vertical list of taxonomic categories. Each item: `font-family: "Baskerville", "Georgia", serif; font-variant: small-caps; font-size: 13px; letter-spacing: 0.08em; color: var(--pencil-graphite); padding: 10px 16px; border-bottom: 0.5px solid var(--graphite-light)`.
- Active: `color: var(--india-ink); border-left: 2px solid var(--india-ink); background: var(--sheet-margin)`.
- Hover: `color: var(--india-ink)`.
- Or: horizontal tabs with `border-bottom: 1px solid var(--mounting-tape)`, active tab `border-bottom: 1px solid var(--india-ink)`.

Headers: herbarium sheet header label.
- `background: var(--archival-sheet); border-bottom: 1px solid var(--mounting-tape); padding: 24px 40px`.
- Institution name in small-caps: `font-variant: small-caps; font-size: 14px; letter-spacing: 0.08em; color: var(--pencil-graphite)`.
- Title in italic serif: `font-family: "Baskerville", "Georgia", serif; font-style: italic; font-size: 28px; color: var(--india-ink)`.
- Accession number right-aligned in monospace.

Footers:
- `background: var(--sheet-margin); border-top: 1px solid var(--mounting-tape); padding: 16px 40px; color: var(--pencil-graphite); font-size: 12px; font-family: "JetBrains Mono", monospace`.

Lists: taxonomic enumeration.
- Each item separated by `border-bottom: 0.5px solid var(--graphite-light)`.
- Leading marker: `list-style: none`. A small em-dash `—` in graphite before each item, or a bullet number in monospace.
- Latin names in italic serif, common names in regular serif, accession numbers in monospace trailing.

Tables: specimen data matrix.
- `border: 1px solid var(--mounting-tape); border-radius: 0; border-collapse: collapse`.
- Header: `background: var(--sheet-margin); color: var(--india-ink); font-variant: small-caps; font-size: 12px; letter-spacing: 0.08em; border-bottom: 1px solid var(--india-ink); padding: 10px 16px`.
- Body cells: `background: var(--archival-sheet); border: 0.5px solid var(--graphite-light); padding: 10px 16px; font-size: 14px`.
- Numeric data cells: `font-family: "JetBrains Mono", monospace; font-size: 11px; text-align: right`.

Dividers: pencil-ruled line.
- `border-top: 0.5px solid var(--graphite-light); margin: 24px 0`.
- Alternate: `border-top: 1px solid var(--mounting-tape)` for stronger divisions.

Modals: specimen examination overlay.
- `background: var(--archival-sheet); border: 1px solid var(--mounting-tape); border-radius: 0; padding: 40px; box-shadow: 0 8px 32px rgba(26, 22, 18, 0.12)`.
- Backdrop: `background: rgba(26, 22, 18, 0.3)`. Muted, archival dimming.
- Title in italic serif. Close button: a small `×` in pencil graphite.

Badges: collection stamps and labels.
- Institutional stamp: `background: transparent; color: var(--stamp-red); border: 1px solid var(--stamp-red); border-radius: 0; font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: 0.06em; padding: 3px 8px; text-transform: uppercase`.
- Determination label: `background: var(--sheet-margin); color: var(--india-ink); border: 1px solid var(--mounting-tape); font-variant: small-caps; font-size: 11px; letter-spacing: 0.08em; padding: 3px 10px`.
- Field note tag: `background: transparent; color: var(--notation-blue); border: 1px solid var(--notation-blue); font-style: italic; font-size: 11px; padding: 2px 8px`.

---

## interaction language

- Hover: no color shift, no transform. Only: `color` sharpens from graphite to ink — `color: var(--india-ink)`. Border may darken from mounting-tape to graphite. No transition animation. Immediate state change.
- Active: `background: var(--sheet-margin)`. Slight tonal depression. No transform, no shadow change.
- Focus: `outline: 1px solid var(--india-ink); outline-offset: 2px`. Clean institutional focus. No glow, no blur.
- Selected: `background: var(--sheet-margin); border-left: 2px solid var(--india-ink)`. Like a catalog card pulled forward.
- Disabled: `opacity: 0.35; pointer-events: none`. Faded pencil mark, nearly erased.
- Drag: not supported. Specimens are pinned and mounted. They do not move.

---

## motion & feedback

NONE. Pressed specimens are flat and still. Archival stillness.

- `transition: none` on all elements. No easing, no duration, no animation.
- No `@keyframes`. No `animation` property. No `transform` transitions.
- Loading: a static ellipsis in monospace — `Cataloging...` or `Retrieving specimen...`. No spinner, no progress bar animation.
- Success: text appears immediately — `Specimen filed.` in small-caps graphite. No fade, no slide.
- Error: text appears immediately in stamp-red — `Specimen not found.` No shake, no pulse.
- Page enter: all elements render at once. No stagger, no fade-in. The sheet is placed on the table — it is simply there.

---

## atmosphere

Archival cream paper — no texture pattern, no grain filter. The surface is the color itself:

```css
background-color: var(--archival-sheet);
```

The sheet-margin color creates depth where needed — sidebar backgrounds, header fills, card footers. No gradients. No background-image textures. No overlays.

Pencil-ruled lines provide the only structural texture — faint 0.5px rules that suggest the hand-drawn lines a taxonomist would pencil onto a blank sheet before writing. These are `border-bottom` or `border-top` on elements, never a repeating background pattern.

Mounting corners on cards are the singular decorative element — small triangular brackets that reference photo-mount corners holding a specimen card in place. Implemented as rotated border fragments on pseudo-elements:

```css
.card::before {
  content: "";
  position: absolute;
  top: 8px;
  left: 8px;
  width: 12px;
  height: 12px;
  border-top: 1px solid var(--mounting-tape);
  border-left: 1px solid var(--mounting-tape);
}
.card::after {
  content: "";
  position: absolute;
  top: 8px;
  right: 8px;
  width: 12px;
  height: 12px;
  border-top: 1px solid var(--mounting-tape);
  border-right: 1px solid var(--mounting-tape);
}
```

The overall feeling: a research herbarium sheet under flat fluorescent light in a quiet institutional room. No drama. No atmosphere beyond the paper itself.

---

## editorial voice

Linnaean scientific. Precise, abbreviated, institutional.

- Button labels: "File", "Catalogue", "Determine", "Annotate", "Mount", "Archive", "View Sheet", "Add Specimen".
- Headings: taxonomic and institutional — "Herbarium Specimen", "Determination Slip", "Collection Data", "Locality", "Taxonomic History", "Type Material", "Accession Register".
- Metadata: "Collected 14 March, elev. 2400m", "Det. J. Lindley, 1847", "Herbarium sheet no. 04872", "Family: Rosaceae", "Leg. C. Darwin", "Locality: Galápagos, Isla Santiago".
- Placeholders: "Search by binomial...", "Enter collector name...", "Accession no...", "Locality description...".
- Empty states: "No specimens filed.", "Herbarium sheet is blank.", "No determination on record.".
- Error: "Specimen not found.", "Accession number already exists.", "Determination could not be verified.".
- Success: "Specimen filed.", "Determination recorded.", "Added to collection.".
- Dates in field format: "14 Mar 1847", "vi.2024" (Roman numeral months in specimen tradition).

---

## cursor & selection

- Default cursor: `cursor: default`.
- Pointer on interactive elements: `cursor: pointer`.
- Text cursor on inputs: `cursor: text`.
- `::selection { background: var(--notation-blue); color: var(--archival-sheet); }` — blue pencil highlight.
- No custom cursors. Institutional simplicity.

---

**when to reach for this genome**

Use `herbarium_plate.specimen` when the prompt asks for a herbarium, botanical specimen archive, taxonomy database, pressed-plant collection, research catalog, type-material viewer, specimen sheet, field collection register, or any product that should feel like a mounted plant specimen filed inside an institutional botanical collection.

Reach for it when the concrete cues are cream archival sheets, square-cut cards, corner mounting brackets, India ink labels, pencil graphite annotations, italic Latin binomials, small-caps taxonomist attributions, accession numbers, locality data, determination slips, muted dried leaves, collection stamps, and zero-motion scientific stillness. It is strongest when the interface action is file, catalogue, determine, annotate, mount, verify, or retrieve specimen records.

Do not use it for naturalist field notebooks, graph-paper observations, hand sketches, expedition warmth, or Darwin-style personal journals; use `field_journal.expedition`. Do not use it for seed packets, kitchen-garden planning, planting zones, kraft packaging, or commercial horticultural aspiration; use `seed_packet.plot`. Do not use it for herbal medicine, tincture labels, amber bottles, dosage cards, or Victorian pharmacy commerce; use `apothecary_label.rx`. Do not use it for mineral or gem specimens, black velvet plinths, faceted crystals, Mohs hardness, or geological collection data; use `mineral_specimen.crystal`. Do not use it for stamp albums, perforated specimens, postmarks, hinges, or philatelic collector pages; use `philately_album.stamp`. Do not use it for library drawers, Dewey Decimal cards, typed book records, or oak catalog furniture; use `card_catalog.dewey`.

It is the right choice when the subject is botanical research material fixed flat to a sheet. If the prompt is field observation, gardening commerce, medicine, geology, philately, or library cataloging, use the neighboring genome that owns that institution and object type.

## anti-patterns — this genome NEVER:

1. uses animation, transition, or motion of any kind. `transition: none` everywhere. Pressed specimens do not move. Archival documents do not animate. Zero keyframes, zero transforms, zero easing.
2. uses border-radius. All corners are `border-radius: 0`. Archival cards, labels, and sheets are cut square. No rounded corners, no pills, no circles.
3. uses gradients, glassmorphism, blur, or backdrop-filter. The surface is opaque archival paper. No transparency effects, no frosted glass, no `background: linear-gradient(...)`.
4. uses saturated or electric colors. All colors are muted — dried botanical tones, aged paper, India ink, pencil graphite. No neon, no vivid hues, no pure blue/red/green.
5. uses sans-serif as primary typeface. Body and display text are always serif (Baskerville/Georgia). Monospace is only for catalog numbers. Sans-serif does not appear.
6. uses decorative ornament, illustration, or emoji. The only visual element is the mounting corner bracket. No icons, no illustrations, no decorative borders. Scientific austerity.
7. uses pure white (#FFFFFF) or pure black (#000000). Backgrounds are always warm cream. Text is always warm-black India ink (#1A1612). The palette lives in the warm-neutral middle.
8. uses bold/heavy font weights as display style. Headings are `font-weight: 400` italic, never bold. Small-caps carry authority through letter-spacing, not weight. The heaviest weight used is 400.
9. uses large spacing, padding > 48px, or dramatic whitespace gestures. Margins are generous but measured — a real herbarium sheet, not a luxury brand lookbook. Functional spacing for annotation, not aesthetic breathing room.
