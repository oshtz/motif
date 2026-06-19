---
id: "46"
name: apothecary_label.rx
keywords:
  - apothecary
  - victorian
  - pharmacy
  - label
  - ornate
  - botanical
  - amber
  - specimen
  - medicinal
  - copperplate
---

### genome 46: `apothecary_label.rx`

> identity: Victorian pharmacy and herbalist interface. Amber glass bottles, deep bottle-green shelves, cream parchment labels with ornate decorative borders. Copperplate-style small caps, Latin nomenclature, dosage instructions. The curio cabinet of a 19th-century apothecary rendered as interface — medicine labels, ornate double borders, specimen cards, and amber-glow accents.

**surface**

colors:
```
--amber-glass: #8B6914;
--bottle-green: #1B3D2F;
--bottle-green-deep: #132B21;
--cream-label: #F5F0E0;
--cream-label-dim: rgba(245, 240, 224, 0.85);
--aged-gold: #B8960C;
--burgundy-ink: #5E1A2E;
--warm-black: #1A1410;
--warm-black-soft: rgba(26, 20, 16, 0.6);
--warm-black-faint: rgba(26, 20, 16, 0.25);
--warm-black-ghost: rgba(26, 20, 16, 0.08);
--amber-glow: rgba(139, 105, 20, 0.15);
--label-edge: rgba(184, 150, 12, 0.4);
```

typography:
- display/headings: `'Playfair Display SC', 'Palatino', serif` — weight 400-700, 1.8-2.5rem for primary headings, 1.1-1.4rem for section headings. all headings rendered in small caps via the SC font. `letter-spacing: 0.12em` on all display text. headings evoke engraved pharmacy signage.
- body/data: `'Lora', 'Georgia', serif` — weight 400, 0.85-1rem body text, `line-height: 1.6`. used for descriptions, dosage instructions, ingredient lists. `letter-spacing: 0.02em` for comfortable reading against cream backgrounds.
- labels/nomenclature: `'Playfair Display SC', serif` — weight 400, 0.7-0.85rem, `letter-spacing: 0.2em; text-transform: uppercase`. extreme tracking for copperplate effect. used on all label headings, category markers, field names. this is the genome's signature typographic treatment.
- latin names: `'Lora', serif` — weight 400 italic, used for all species names, compound names, and botanical references. always italic, never upright. e.g., *Aconitum napellus*, *Tinctura Opii*.
- numerals: oldstyle via `font-variant-numeric: oldstyle-nums` on dosage numbers, lot numbers, dates. tabular numerals for data columns.
- no text exceeds 2.5rem. measure targets 50-65 characters on label cards.

borders:
- primary label border: ornate double-rule — `outline: 2px solid var(--warm-black); outline-offset: 4px; border: 1px solid var(--warm-black)`. the 4px gap between outer and inner rule is the genome's signature border pattern, evoking Victorian label printing.
- secondary borders: `1px solid var(--warm-black-faint)` — single thin rule for internal divisions within labels.
- `border-radius: 0px` everywhere — Victorian labels are strictly rectangular. no rounding on any element.
- corner ornaments: `::before` and `::after` pseudo-elements on label cards placing small decorative marks (CSS-drawn crosses or dots) at corners of the outer border.
- gold accent borders on highlighted elements: `border: 1px solid var(--aged-gold)`.

spacing:
- outer page padding: `2rem 2.5rem` — cabinet margins, not excessive.
- label card padding: `1.5rem 2rem` — generous internal padding within each label, room for ornate borders.
- between label cards: `1.5rem` gap — bottles sit apart on shelves.
- section spacing: `2.5rem 0` between shelf groupings.
- label field spacing: `0.6rem 0` between fields within a label (compound name, dosage, preparation date).
- ornate border offset: `4px` gap between outer and inner rules requires additional visual margin of `8px` beyond the outer border.

**color distribution**

- 45% bottle-green (`--bottle-green`, `--bottle-green-deep`) — the dark cabinet ground. the deep green background that all labels sit upon. this is the "shelf" and the "wall" of the apothecary.
- 35% cream-label (`--cream-label`, `--cream-label-dim`) — the label surfaces themselves. every card, panel, and content block is a cream parchment label floating on the green cabinet.
- 10% warm-black (`--warm-black`, `--warm-black-soft`) — all text, all borders, all rules on labels. dark ink printed on cream paper.
- 5% amber/gold (`--amber-glass`, `--aged-gold`, `--amber-glow`) — accent warmth. key headings, active states, highlighted compounds, the amber glow on hover. the color of glass bottles catching gaslight.
- 5% burgundy (`--burgundy-ink`) — sparingly used for warnings, cautions, important dosage notes, and the "Rx" symbol. the red-ink stamp on a prescription.

a high-contrast genome: dark green ground, cream labels, warm-black ink. the amber and gold accents provide warmth without overwhelming. burgundy appears only for medicinal emphasis. the overall impression is a gaslit cabinet of dark wood and glass, with precisely lettered labels catching the light.

**component patterns**

buttons: cream label buttons with ornate double-rule border — `background: var(--cream-label); color: var(--warm-black); border: 1px solid var(--warm-black); outline: 2px solid var(--warm-black); outline-offset: 3px; padding: 0.5rem 1.5rem`. text in Playfair Display SC at 0.75rem with `letter-spacing: 0.15em`. hover adds `background: var(--amber-glow); border-color: var(--aged-gold); outline-color: var(--aged-gold)`. secondary buttons drop the outer outline, retaining only the inner border. labels read like pharmacy instructions: "dispense", "prepare tincture", "affix label", "record lot", "seal vessel".

inputs: `background: var(--cream-label); border: 1px solid var(--warm-black-faint); padding: 0.6rem 0.8rem`. label above in Playfair Display SC small caps at 0.7rem with `letter-spacing: 0.2em`: "COMPOUND NAME", "DOSAGE", "LOT NUMBER", "DATE PREPARED". placeholder in Lora italic, `color: var(--warm-black-soft)`: *"Tinctura..."*, *"3 drops thrice daily..."*. focus state: `border-color: var(--aged-gold); box-shadow: 0 0 0 3px var(--amber-glow)`. the gold focus glow evokes amber glass.

cards/panels: the "bottle label" pattern — each card is a self-contained medicine label. `background: var(--cream-label); padding: 1.5rem 2rem; border: 1px solid var(--warm-black); outline: 2px solid var(--warm-black); outline-offset: 4px`. internal structure: top line is the preparation name in Playfair Display SC (`letter-spacing: 0.2em`), then a thin rule, then Latin name in Lora italic, then dosage/description in Lora regular, then preparation details at bottom in smaller text. corner ornaments via pseudo-elements. each card is complete — it could be peeled off and affixed to a bottle.

navigation: dark bottle-green bar with gold-lettered tabs. `background: var(--bottle-green-deep); padding: 0.8rem 2rem; border-bottom: 2px solid var(--aged-gold)`. items in Playfair Display SC at 0.75rem, `letter-spacing: 0.15em; color: var(--cream-label-dim)`. active item: `color: var(--aged-gold); border-bottom: 2px solid var(--aged-gold)`. items separated by `·` ornaments in `var(--label-edge)`. navigation reads like cabinet drawer labels: "TINCTURES", "COMPOUNDS", "PREPARATIONS", "MATERIA MEDICA".

headers: apothecary signboard — `background: var(--bottle-green-deep); padding: 1rem 2.5rem; border-bottom: 3px double var(--aged-gold)`. main title in Playfair Display SC at 1.4rem, `letter-spacing: 0.15em; color: var(--cream-label)`. subtitle or descriptor in Lora italic at 0.8rem, `color: var(--label-edge)`. right-aligned: "Est. 1847" or date in small caps. the double gold rule at the bottom is the genome's header signature.

footers: `background: var(--bottle-green-deep); border-top: 1px solid var(--aged-gold); padding: 1rem 2.5rem`. centered colophon text in Playfair Display SC at 0.65rem, `letter-spacing: 0.2em; color: var(--label-edge)`. contains establishment info, pharmacist attribution, lot references. "PREPARED BY [NAME] · EST. 1847 · LOT NO. 4819". ornamental dividers between sections.

lists: each item is a specimen entry. list marker is "Rx:" or "—" in `var(--aged-gold)` for unordered, or oldstyle numerals with period for ordered. item text in Lora regular. Latin names in Lora italic. `margin-bottom: 0.5rem` between items. nested lists indent by `1.5em` with a thin left border `1px solid var(--warm-black-faint)`.

tables: `background: var(--cream-label)` with full border grid `1px solid var(--warm-black-faint)`. header row in Playfair Display SC at 0.7rem, `letter-spacing: 0.15em; background: var(--warm-black-ghost); border-bottom: 2px solid var(--warm-black)`. data rows in Lora regular at 0.85rem. hover row: `background: var(--amber-glow)`. `padding: 0.5rem 1rem` per cell. column headers read like ledger categories: "COMPOUND", "DOSAGE", "FREQUENCY", "LOT NO.", "EXPIRY".

dividers: ornamental rules — a centered decorative motif: `— Rx —`, `⚕`, `✣  ✣  ✣`, or `— ◆ —` set in `var(--aged-gold)` at 0.8rem with `1.5rem` vertical margin. for structural separation, a double rule: `border-top: 2px solid var(--warm-black-faint); border-bottom: 1px solid var(--warm-black-faint); height: 4px`. dividers separate shelf sections in the cabinet.

modals/overlays: the "prescription slip" — `background: var(--cream-label); padding: 2rem 2.5rem; max-width: 32rem; border: 1px solid var(--warm-black); outline: 2px solid var(--warm-black); outline-offset: 4px`. title in Playfair Display SC with "Rx:" prefix. body in Lora regular. close action: small caps text "DISMISS" at bottom-right, not an icon. backdrop: `background: rgba(19, 43, 33, 0.7)` — deep bottle-green overlay darkening the cabinet behind the prescription.

badges/tags: small rectangular label stamps — `background: var(--cream-label); border: 1px solid var(--warm-black); padding: 0.15rem 0.6rem`. text in Playfair Display SC at 0.6rem, `letter-spacing: 0.15em`. variant for warnings: `background: var(--burgundy-ink); color: var(--cream-label); border-color: var(--burgundy-ink)` — the red caution stamp. variant for gold accents: `border-color: var(--aged-gold); color: var(--aged-gold)`. never rounded, always rectangular.

**interaction language**

- hover: `background: var(--amber-glow)` on label cards — the warm amber glow of gaslight catching glass. text links gain `color: var(--aged-gold)`. border accents shift to gold. `transition: 0.3s ease`.
- active/pressed: `background: var(--warm-black-ghost)` on cards. buttons gain `outline-offset: 2px` (border tightens). no transform.
- focus: `outline: 2px solid var(--aged-gold); outline-offset: 3px`. the gold focus ring — amber glass catching light.
- selected: `border-color: var(--aged-gold); outline-color: var(--aged-gold)`. persistent gold accent on the selected label. text gains `color: var(--aged-gold)`.
- disabled: `opacity: 0.35`. borders become `var(--warm-black-faint)`. text dims. the label is faded, as if the ink has aged past legibility.
- drag: `cursor: grab` → `cursor: grabbing`. element gains `outline: 1px dashed var(--aged-gold)` — rearranging bottles on the shelf.

**motion & feedback**

transitions: `0.3s ease` on hover states — background-color, border-color, color, outline-color. no entrance animations. no slide-ins, no fly-outs. panels do not move. content is displayed like specimens in a cabinet — placed, not animated. stately and minimal.

loading: Playfair Display SC text fades in (0.4s): "PREPARING..." in `var(--aged-gold)` with `letter-spacing: 0.2em`. then label cards appear in place with `opacity: 0 → 1` over 0.3s. no stagger — all items on a shelf appear together. a thin gold rule may draw across at 0.5s.

success: a small ornamental mark (✣ or ◆) appears in `var(--aged-gold)`, followed by Lora italic confirmation: *"Preparation recorded."*, *"Label affixed."*, *"Compound catalogued."*, *"Lot sealed."* — brief, formal, medicinal.

error: the label field border shifts to `var(--burgundy-ink)`. a caution note appears below in Lora italic at 0.8rem: *"Caution: The specified compound could not be located."* or *"This preparation has expired and cannot be dispensed."* the burgundy-ink color is the only red in the genome, reserved for errors and cautions.

**atmosphere**

background: `var(--bottle-green)` (#1B3D2F) as the base — the dark cabinet wall. a subtle inner shadow via `box-shadow: inset 0 0 100px rgba(19, 43, 33, 0.5)` on the body to deepen edges, evoking the interior of a wooden cabinet. no texture images, no grain — the depth comes from the dark green alone.

cabinet structure: content is organized as shelves of labels. the page is not a single reading column (contrast with manuscript_press.lit) but a grid or clustered arrangement of label cards on a dark surface. max content width: `64rem`. label cards are `280-360px` wide, arranged in rows or CSS grid.

amber glow: key interactive elements and gold accents produce a warm amber feeling — `var(--amber-glow)` as hover backgrounds, `var(--aged-gold)` as accent borders. the amber warmth is concentrated, not diffuse. it appears where light hits the bottles, not everywhere.

ornate borders: the double-rule border (2px outer, 4px gap, 1px inner) on every label card is the genome's defining visual mark. corner ornaments reinforce the Victorian printing aesthetic. borders are dark ink on cream — sharp, precise, authoritative.

patina: the `--cream-label-dim` at 85% opacity and the `--label-edge` gold at 40% opacity produce a slight aged quality without explicit "grunge" or "distressed" textures. the aging is suggested by warmth and muted metallics, not by visual noise.

no ambient animations. no floating particles. no parallax. the cabinet is still. bottles sit on shelves. labels are affixed. this is a place of order and quiet authority.

**editorial voice**

button labels: copperplate small caps, clinical and formal — "DISPENSE", "PREPARE TINCTURE", "AFFIX LABEL", "RECORD LOT", "SEAL VESSEL", "VIEW MATERIA MEDICA", "FILE PRESCRIPTION"

headings: Playfair Display SC, formal nomenclature — "TINCTURE OF BELLADONNA", "Rx: COMPOUND PREPARATIONS", "ACTIVE COMPOUNDS", "MATERIA MEDICA: VOL. III", "DOSAGE & ADMINISTRATION". headings use the vocabulary of Victorian pharmacy — tinctures, compounds, preparations, materia medica, posology.

metadata: dates in formal style: "22 March 1847". lot numbers: "Lot No. 4819". preparation references: "Prepared by J. Harwick, Apothecary". establishment: "Est. 1847". prescription identifiers: "Rx: 046". dosages: "3 drops thrice daily", "One dram in warm water at bedtime". all metadata is precise, clinical, complete.

placeholders: Lora italic, formal invitations — *"Enter compound name..."*, *"Tinctura..."*, *"Specify dosage and frequency..."*, *"Lot number..."*

empty states: centered Lora italic with gold ornament — *"No preparations have been catalogued."* followed by small caps link: "BEGIN PREPARATION". an ornamental mark (◆) appears above the empty state text in `var(--aged-gold)`.

error messages: Lora italic with "Caution:" prefix — *"Caution: The referenced compound is not in the formulary."* or *"Caution: This preparation has exceeded its indicated shelf life."* clinical, precise, never panicked. the burgundy-ink color marks danger as a pharmacist would — with measured gravity.

success messages: Lora italic, formal confirmation — *"Preparation recorded in the ledger."*, *"The label has been affixed."*, *"Compound sealed and catalogued."* — brief, definitive, with the quiet satisfaction of a task properly completed.

**cursor & selection**

- default: `cursor: default`
- interactive elements (buttons, nav, links): `cursor: pointer`
- label text and descriptions: `cursor: text`
- draggable labels/bottles: `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--amber-glow); color: var(--warm-black); }` — warm amber selection, as if highlighted by gaslight

**when to reach for this genome**

Use `apothecary_label.rx` when the prompt asks for a Victorian pharmacy, herbalist shop, tincture catalog, botanical medicine label, prescription ledger, formulary, dosage card, medicinal product archive, apothecary commerce page, or any interface that should feel like cream paper labels affixed to amber bottles on a dark green cabinet shelf.

Reach for it when the visual/product cues are bottle-green grounds, cream label cards, ornate double-rule borders, Playfair Display SC small caps, Lora italic Latin names, oldstyle dosage numerals, amber-gold focus states, burgundy caution stamps, `Rx:` motifs, lot numbers, compound preparation metadata, and formal medicinal copy such as `DISPENSE`, `PREPARE TINCTURE`, `Lot No.`, `Dosage`, and `Caution:`.

Do not use it for pressed botanical research sheets, archival taxonomy, corner-mounted leaves, or herbarium collection records; use `herbarium_plate.specimen`. Do not use it for naturalist sketches, graph-paper notebooks, expedition observations, or zero-motion field notes; use `field_journal.expedition`. Do not use it for seed packets, kitchen gardens, planting charts, kraft packaging, or aspirational horticultural commerce; use `seed_packet.plot`. Do not use it for literary book pages, drop caps, running headers, or reading-room essays; use `manuscript_press.lit`. Do not use it for planners, agendas, wedding schedules, tabs, ring binders, or premium stationery; use `bespoke_planner.folio`. Do not use it for operating-room monitors, vital signs, instrument trays, medication logs, or sterile clinical dashboards; use `sterile_field.surg`.

It is strongest when the product action is label, prepare, dispense, catalog, seal, warn, or record a compound. If the prompt is botanical but not medicinal, literary rather than pharmaceutical, personal-planning rather than formulary, or modern clinical rather than Victorian pharmacy, choose the sharper adjacent genome.

**anti-patterns — this genome NEVER:**

1. uses border-radius on any element — all corners are sharp right angles. Victorian labels are rectangular. no rounded corners, no pills, no circles
2. uses sans-serif for headings or labels — display text is always Playfair Display SC (ornamental serif small caps). body text is always Lora (serif). the only genome where both display AND body are serif with extreme tracking
3. uses flat/minimal single-line borders on cards — every label card has the ornate double-rule border (outer 2px, 4px gap, inner 1px). minimal hairline-only borders belong to manuscript_press.lit
4. uses entrance animations or sliding transitions — panels do not move. content appears in place. this is a cabinet of specimens, not a carousel. motion is limited to 0.3s hover state changes
5. uses bright modern accent colors — no electric blue, no vivid green, no hot pink. the palette is amber, gold, cream, bottle-green, burgundy, and warm-black. all colors are historically grounded
6. uses light or white backgrounds for the page ground — the base is always dark bottle-green. cream appears only on label cards, never as the page background (contrast with manuscript_press.lit's parchment ground)
7. uses casual or playful language — voice is formal, medicinal, precise. "Rx:", "Tincture of", "Dosage:", "Caution:", "Lot No.", "Prepared by". no slang, no contractions, no humor
8. uses icon-based navigation or pictographic buttons — all navigation is typographic small caps text. ornamental marks (◆, ✣, ·) are used as dividers, not as functional icons
9. uses drop caps or paragraph-indent typography — that is manuscript_press.lit's signature. this genome uses extreme-tracked small caps headings and ornate borders as its signature marks
10. uses leather/stationery/planner metaphors — that is bespoke_planner.folio's territory. this is pharmacy, not stationery. bottles, not binders. labels, not tabs. prescriptions, not schedules
