---
id: "71"
name: brutalist_slab.concrete
keywords:
  - brutalist
  - concrete
  - architecture
  - monumental
  - beton brut
  - barbican
  - corbusier
  - formwork
  - modernist
  - housing
  - block
  - slab
---

### genome 71: `brutalist_slab.concrete`

> identity: raw architectural brutalism from Unite d'Habitation, the Barbican Estate, civic housing blocks, exposed parking decks, poured service cores, and cast-in-place concrete wayfinding. This is physical brutalism, not web brutalism: monumental mass, visible formwork, institutional calm, rectilinear slabs, recessed shadows, service signage, and a feeling that the interface was poured into place.

---

**surface**

The surface is concrete first, interface second.

Every region should feel cast, poured, bolted, stacked, or cut from a larger building mass.

No element is cute.

No element floats without structural reason.

No panel exists unless it feels like it could be part of a wall, directory, stair core, service hatch, elevator lobby, archive desk, or exposed civic infrastructure.

Core palette:

- `--aggregate: #E8E4DF` for the pale concrete field, page background, exposed aggregate, and the quiet base surface.
- `--white-panel: #F5F3F0` for precast panels, modal faces, content slabs, and printed institutional surfaces.
- `--formwork: #D4CFC9` for lighter board-formed concrete, input backgrounds, subtle panels, and alternate planes.
- `--concrete: #B0A99F` for main concrete mass, borders, inactive slabs, and medium structural planes.
- `--shadow-concrete: #8C8681` for recessed planes, secondary text, inactive states, and sunken seams.
- `--deep-shadow: #2C2926` for structural darkness, text, heavy borders, black concrete recesses, and service voids.
- `--oxide: #C44B28` for rust, emergency signage, active markers, focus outlines, danger states, and sparse wayfinding accents.
- `--safety-yellow: #D6B645` for extremely rare caution striping when the product domain needs warnings.
- `--blueprint: #24475F` for optional plan annotations, drawings, map pins, or schematic overlays.

The normal palette is concrete, shadow, and aggregate.

Oxide is not a brand color.

Oxide is a stain, a warning, or a route marker.

Safety yellow and blueprint blue are optional support colors, never dominant.

Typography:

- Display: `"Bebas Neue", "Anton", "Arial Narrow", sans-serif`.
- Display weight: `400`.
- Display size: `48px` to `112px`.
- Display line-height: `0.88` to `0.98`.
- Display transform: uppercase.
- Display letter-spacing: `-0.02em` to `0.03em`.
- Section numerals: same display stack at `72px` to `160px`, often in `var(--concrete)` or `var(--formwork)`.
- Body: `"Inter", "Helvetica Neue", Arial, sans-serif`.
- Body weight: `400` or `500`.
- Body size: `13px` to `15px`.
- Body line-height: `1.45` to `1.6`.
- Metadata: `"Inter", sans-serif`, `11px`, `500`, uppercase, `letter-spacing: 0.08em`.
- Technical annotations: `"IBM Plex Mono", "JetBrains Mono", monospace`, `11px` to `12px`, tabular numerals.

Display text is massive and compressed.

Body text is plain and institutional.

Metadata reads like a building plaque, drawing tag, or municipal archive reference.

Border rules:

- Global radius: `0px`.
- Small structural rules: `1px solid var(--concrete)`.
- Panel borders: `2px solid var(--concrete)`.
- Major containment: `4px solid var(--deep-shadow)`.
- Route markers: `4px solid var(--oxide)` on one edge only.
- Recess separators: `1px solid var(--shadow-concrete)`.
- Never use soft outlines, glows, or rounded joins.

Spacing:

- Page margin: `40px` to `96px` on desktop.
- Mobile margin: `20px` to `28px`.
- Major section padding: `48px` to `96px`.
- Card padding: `28px` to `40px`.
- Compact row padding: `14px` to `18px`.
- Grid gap: `24px`, `32px`, or `40px`.
- Label gap: `6px`.
- Section breaks: `48px` to `80px`.

Density is low to medium.

There can be dense tables or directories, but they must be set inside a larger monumental frame.

Every interface should preserve voids, blank walls, and heavy structural pauses.

---

**color distribution**

55% aggregate and white-panel.

The background, main cards, empty walls, modal faces, and most content surfaces live in `#E8E4DF` and `#F5F3F0`.

22% concrete and formwork.

Secondary slabs, alternate rows, input wells, subtle wall modules, borders, and supporting planes use `#B0A99F` and `#D4CFC9`.

15% deep-shadow.

Text, major nav, footing slabs, black recesses, strong panel headers, and service-core regions use `#2C2926`.

6% shadow-concrete.

Metadata, disabled text, understated separators, secondary labels, and recessed annotations use `#8C8681`.

2% oxide, safety-yellow, or blueprint.

The accent budget is tiny.

Use oxide for selected states, danger, and route marks.

Use safety-yellow only for industrial caution.

Use blueprint only for maps, plans, and technical overlays.

Never let the accent colors become decorative confetti.

The page should be readable in grayscale.

The accent should appear as an architectural intervention, not a UI theme.

---

**component patterns**

Buttons:

- Primary button: `background: var(--deep-shadow); color: var(--aggregate); border: 2px solid var(--deep-shadow); border-radius: 0; padding: 14px 34px; font-family: "Bebas Neue", sans-serif; font-size: 18px; letter-spacing: 0.06em; text-transform: uppercase`.
- Secondary button: `background: transparent; color: var(--deep-shadow); border: 2px solid var(--deep-shadow); border-radius: 0; padding: 12px 32px`.
- Destructive button: `background: var(--oxide); color: var(--white-panel); border: 2px solid var(--oxide)`.
- Quiet button: transparent background, `color: var(--shadow-concrete)`, `border: 2px solid var(--concrete)`.
- Button groups are hard-edged segmented slabs with shared borders.
- Icons, when needed, are line icons at `16px`, squared into the typographic rhythm.
- No pills, no rounded icons, no floating action buttons.

Inputs:

- Text input: `background: var(--formwork); border: 2px solid var(--concrete); color: var(--deep-shadow); padding: 12px 16px; border-radius: 0`.
- Labels sit above inputs in uppercase metadata style.
- Placeholder text uses `var(--shadow-concrete)`.
- Search inputs feel like directory slots or building registry fields.
- Textareas are large poured panels with `min-height: 140px`.
- Selects retain sharp square outlines and a simple chevron.
- Checkboxes are square `16px` boxes with `2px solid var(--deep-shadow)`.
- Radio buttons should be avoided; use segmented slab controls instead.

Cards:

- Cards are precast concrete panels.
- Base card: `background: var(--white-panel); border: 2px solid var(--concrete); border-radius: 0; padding: 32px`.
- Important card: `border: 4px solid var(--deep-shadow)`.
- Recessed card: `background: var(--formwork); border-color: var(--shadow-concrete)`.
- Card headers use a formwork joint line: `border-bottom: 1px solid var(--concrete); padding-bottom: 16px; margin-bottom: 20px`.
- A card may have a giant pale section number anchored in a corner.
- Do not use drop shadows.
- Depth comes from darker surfaces and heavier border weights.

Navigation:

- Main nav is a building directory band.
- Nav shell: `background: var(--deep-shadow); color: var(--aggregate); height: 56px; padding: 0 40px; border-bottom: 4px solid var(--oxide)`.
- Nav items are uppercase metadata labels.
- Active nav item is a filled concrete tab or oxide edge marker.
- Secondary nav can be a vertical wayfinding stack with numbered zones.
- Breadcrumbs use slash separators or block numbers: `BLOCK A / LEVEL 03 / UNIT 12`.
- Do not use bubbly tab pills.

Headers:

- Page header is a monumental slab.
- Shell: `padding: 64px 48px 44px; border-bottom: 4px solid var(--deep-shadow); background: var(--aggregate)`.
- H1: `font-size: clamp(56px, 9vw, 112px); line-height: 0.9`.
- Eyebrow: uppercase metadata, `color: var(--shadow-concrete)`.
- Subtitle: Inter `15px`, max-width `620px`, color `var(--deep-shadow)`.
- Section numbers can be oversized and partially cropped by the header container.
- Header layout is asymmetric but grid-bound.

Footers:

- Footer is a service plinth.
- `background: var(--concrete); border-top: 2px solid var(--shadow-concrete); padding: 32px 48px`.
- Footer content is terse: address, revision, route, contact, license, status.
- Footer links are uppercase and separated by vertical rules.

Lists:

- Lists are directory rows.
- Row padding: `16px 0`.
- Separator: `1px solid var(--concrete)`.
- Leading index: display or metadata number such as `01`, `02`, `03`.
- Status sits at the far edge as a square badge.
- Never use rounded bullet chips.

Tables:

- Table shell: `border: 2px solid var(--concrete); border-collapse: collapse; background: var(--white-panel)`.
- Header row: `background: var(--deep-shadow); color: var(--aggregate); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em`.
- Cell padding: `12px 16px`.
- Body borders: `1px solid var(--formwork)`.
- Numeric values use tabular numerals.
- Selected row uses `background: var(--deep-shadow); color: var(--aggregate)`.
- Warning row uses an oxide left border, not full red fill.

Dividers:

- Standard divider: `border-top: 1px solid var(--concrete); margin: 32px 0`.
- Heavy divider: `border-top: 4px solid var(--deep-shadow); margin: 48px 0`.
- Route divider: `border-top: 4px solid var(--oxide)`.
- Vertical dividers are allowed in nav, tables, dashboard columns, and form grids.

Modals:

- Modal shell: `background: var(--white-panel); border: 4px solid var(--deep-shadow); border-radius: 0; padding: 40px; max-width: 560px`.
- Backdrop: `background: rgba(44, 41, 38, 0.72)`.
- No blur.
- No soft shadow.
- Modal title is display type at `36px` to `48px`.
- Modal actions are aligned as a square slab row.

Badges:

- Badge: `background: var(--concrete); color: var(--deep-shadow); padding: 4px 10px; border-radius: 0; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em`.
- Active badge: `background: var(--deep-shadow); color: var(--aggregate)`.
- Warning badge: `background: var(--oxide); color: var(--white-panel)`.
- Numeric badge can be a square block, never a circle.

Hero regions:

- A hero should feel like a concrete facade or civic lobby.
- Use one massive title, one route marker, and one or two functional controls.
- If imagery exists, crop it like an architectural elevation and frame it with hard concrete borders.
- Prefer silhouette, elevation, floor-plan, or facade logic over lifestyle photography.

Dashboards:

- Dashboard panels are grid-aligned concrete bays.
- KPI tiles use massive numbers in display type, with small metadata labels.
- Charts should be stark: black axes, concrete fills, oxide highlights, no rainbow palettes.
- Empty space around a chart is allowed and often necessary.

Forms:

- Forms feel like permit applications or directory intake desks.
- Group fields into concrete bays with strong labels.
- Required indicators use oxide left bars or short labels, not stars.
- Submit areas should be heavy and final.

Maps and diagrams:

- Floor plans, block diagrams, grid maps, and section cuts are native.
- Use `--blueprint` for schematic overlays only when the product asks for planning, routing, or architecture.
- Labels should look like plan annotations, not playful callouts.

---

**interaction language**

Hover:

- Hover is instant.
- Default hover: border darkens from `var(--concrete)` to `var(--deep-shadow)`.
- Button hover: background inverts only if the button is secondary.
- Card hover: no lift; use `border-color: var(--deep-shadow)`.
- Row hover: `background: var(--formwork)`.
- Links hover by gaining an underline or oxide left marker.
- `transition: none`.

Active:

- Active controls become filled slabs.
- Primary active: `background: var(--oxide); border-color: var(--oxide); color: var(--white-panel)`.
- Secondary active: `background: var(--deep-shadow); color: var(--aggregate)`.
- Rows active with full dark inversion.
- Do not compress, bounce, or translate active elements.

Focus:

- Focus is a hard safety mark.
- `outline: 2px solid var(--oxide); outline-offset: 2px`.
- On oxide surfaces, use `outline: 2px solid var(--aggregate)`.
- Focus must be visible, square, and unanimated.
- Never rely only on subtle color changes for focus.

Selected:

- Selected states use a dark slab or oxide edge marker.
- Selection should be unmistakable.
- Multi-select can show a black square checkmark cell at row start.
- Selected card: `border: 4px solid var(--deep-shadow)` plus a small `SELECTED` badge.

Disabled:

- Disabled controls recede into the wall.
- `opacity: 0.38`.
- `background: var(--formwork)`.
- `color: var(--shadow-concrete)`.
- `border-color: var(--concrete)`.
- Cursor remains ordinary; the object simply becomes inactive concrete.

Drag:

- Drag is not visually playful.
- Drag source gets `border: 4px solid var(--oxide)`.
- Drop target gets an oxide edge bar.
- No tilt, no shadow, no scale.
- If the app requires drag ghosting, use `opacity: 0.6` only.

Validation:

- Error state uses oxide border and terse text.
- Success state uses dark border and `CONFIRMED`.
- Warning uses oxide edge, not full red flood.
- Loading locks the surface into a mechanical progress band.

---

**motion & feedback**

Default motion is none.

Set `transition: none` for structural components.

The interface should feel already built, not animated into existence.

Allowed motion:

- Linear loading bar.
- Instant state swap.
- Optional progress fill at `linear` timing.
- Optional chart draw only if the product domain needs measurement feedback.
- Optional tiny flicker for caution signage, but only once and only for industrial warnings.

Loading:

- Top progress rule: `height: 3px; background: var(--shadow-concrete)`.
- Fill: `background: var(--deep-shadow)` or `var(--oxide)`.
- Timing: linear.
- Label: `LOADING` or `PROCESSING` in metadata type.
- No spinner.
- No skeleton shimmer.
- No blurred placeholders.

Success:

- Text: `CONFIRMED.`, `RECORDED.`, or `ENTRY SAVED.`
- Style: uppercase metadata, `border-bottom: 2px solid var(--deep-shadow)`.
- It appears immediately.
- It can disappear after a fixed delay without fade.

Error:

- Text: `INVALID ENTRY.`, `REFERENCE REQUIRED.`, `NOT FOUND.`, `ACCESS RESTRICTED.`
- Error border: `2px solid var(--oxide)`.
- Error marker: oxide left bar or top rule.
- No shake.
- No bounce.
- No modal drama.

Page changes:

- Route changes are hard cuts.
- If a complex product insists on transition, use a single instant swap or a linear wipe that feels like a service shutter.
- Never use easing curves that feel soft or playful.

Microfeedback:

- Checkmarks are square marks.
- Toasts are concrete notices fixed to a grid.
- Notifications should read like municipal notices.
- Inline feedback is preferred over floating popups.

---

**atmosphere**

The atmosphere is civic, heavy, quiet, and permanent.

The page is a built environment.

Use massive planes, exposed seams, and slight tonal contrast.

Background treatment:

- Base: `background: var(--aggregate)`.
- Optional subtle texture: layered linear gradients at 1% to 3% opacity to suggest formwork seams.
- Optional wall grid: horizontal or vertical `1px` rules every `80px` to `160px`.
- Optional aggregate speckle: CSS radial dots at extremely low opacity.
- Never make the texture busy.

Structural devices:

- Formwork seams.
- Expansion joints.
- Route-color edge strips.
- Oversized section numerals.
- Recessed dark service voids.
- Precast panel grids.
- Elevator-lobby directory panels.
- Permit-stamp metadata.
- Floor-plan annotation lines.

Depth:

- Lighter surfaces come forward.
- Darker surfaces recede.
- Heavy border weight creates authority.
- No shadow blur is needed.
- If a shadow is absolutely necessary for legibility, use a hard offset with no blur: `box-shadow: 8px 8px 0 var(--concrete)`.

Composition:

- Large asymmetry is welcome.
- Align to a strict underlying grid.
- Let one massive object dominate the screen.
- Use negative space like an empty plaza.
- Small labels should anchor big slabs.
- Do not fill every void.

Imagery:

- Architectural elevations, raw concrete photography, facade crops, construction documents, plan fragments, and wayfinding signs fit.
- Images must be framed by hard concrete borders.
- Apply grayscale, low-saturation, or concrete-tone overlays.
- Do not use lifestyle imagery unless the product explicitly requires residents, visitors, or workers.

Sound of the interface, visually:

- Quiet.
- Heavy.
- Institutional.
- Public.
- Severe but not hostile.
- Functional before decorative.

---

**editorial voice**

The voice is terse institutional wayfinding.

It reads like a building directory, permit desk, archive label, floor plan, or municipal notice.

It does not chat.

It does not encourage.

It records.

Button labels:

- `ENTER`
- `SUBMIT`
- `CONTINUE`
- `VIEW PLAN`
- `RETURN`
- `CONFIRM`
- `ARCHIVE`
- `CLEAR`
- `OPEN LEVEL`
- `EXPORT RECORD`

Headings:

- `LEVEL 03`
- `SECTION A`
- `DIRECTORY`
- `SITE PLAN`
- `SERVICE CORE`
- `BLOCK C`
- `UNIT REGISTER`
- `PUBLIC NOTICE`
- `ACCESS POINT`
- `REVISION LOG`

Metadata:

- `REF 0071`
- `BLOCK C`
- `LEVEL 03`
- `REV 04`
- `STATUS: ACTIVE`
- `TYPE: RESIDENTIAL`
- `ISSUED: 2026.06.03`
- `GRID: A-12`
- `ACCESS: PUBLIC`
- `LOAD: 48 UNITS`

Placeholder text:

- `ENTER REFERENCE`
- `SEARCH DIRECTORY`
- `UNIT NUMBER`
- `ROUTE CODE`
- `FILTER BLOCK`
- `ADD NOTICE`
- `DRAWING ID`

Empty states:

- `NO RECORDS.`
- `DIRECTORY EMPTY.`
- `NONE LISTED.`
- `NO ACCESS POINTS.`
- `NO REVISION FOUND.`
- `PLAN NOT FILED.`

Error text:

- `INVALID ENTRY.`
- `REFERENCE REQUIRED.`
- `NOT FOUND.`
- `ACCESS RESTRICTED.`
- `FIELD LOCKED.`
- `ROUTE CLOSED.`

Success text:

- `CONFIRMED.`
- `RECORDED.`
- `ENTRY SAVED.`
- `ACCESS GRANTED.`
- `REVISION FILED.`
- `EXPORT COMPLETE.`

Body copy should be concise.

Sentences can be declarative and plain.

Avoid marketing promises.

Avoid jokes.

Avoid friendly onboarding copy.

Use periods more than exclamation marks.

Use numbers, references, and statuses as part of the design language.

---

**cursor & selection**

Global cursor: `default`.

Interactive cursor: `pointer`.

Text cursor: `text`.

Disabled cursor: `default`, not theatrical.

Drag cursor, when necessary: `grab` and `grabbing`, but only for real draggable board elements.

Do not use custom cursors.

Do not use playful pointer icons.

Selection:

```css
::selection {
  background: var(--deep-shadow);
  color: var(--aggregate);
}
```

Text selection should feel like a dark concrete slab laid over pale aggregate.

Focus selection on form controls uses oxide outlines.

Selected app objects use structural inversion or an oxide route marker.

Range selections, if present, should use square blocks and hard edges.

---

**when to reach for this genome**

Use `brutalist_slab.concrete` when the prompt asks for architecture, public infrastructure, civic systems, property, housing, municipal records, urban planning, museums, institutional dashboards, archive tools, permitting workflows, facilities operations, route planning, construction administration, floor plans, maintenance logs, or serious internal systems that should feel permanent.

Use it when the product needs authority without luxury.

Use it when the UI should feel like a building, not a website.

Use it for dashboards where large numbers, sparse controls, and rigid sections matter more than warmth.

Use it for tools that benefit from wayfinding language: directories, levels, blocks, routes, units, records, plans, revisions, access points, notices.

Use it when the user asks for brutalism but means architectural brutalism, concrete, civic scale, Barbican, Corbusier, service cores, parking structures, public housing, or modernist institutional mass.

Do not choose it merely because the user says "bold" or "raw" if the desired result is punk, noisy, zine-like, anti-design, or internet web brutalism.

For punk print chaos, prefer `neo_brutalist.zine`.

For technical terminal density, prefer `underground_terminal.crt` or `kernel_grid.dev`.

For luxury concrete minimalism with soft gallery restraint, prefer a quieter institutional or gallery genome.

For friendly community housing or warm civic service, use this only if the final product can tolerate severity.

This genome is strongest when the interface can be sparse, rectangular, direct, and typographically monumental.

---

**anti-patterns - this genome NEVER:**

1. never uses rounded corners. every corner is `0px`, always, because the genome is cast in rectangular formwork.
2. never uses soft shadows, blurred elevation, glassmorphism, backdrop blur, glow, neumorphism, or floating cards.
3. never treats oxide, yellow, or blueprint as decorative theme colors. accents are stains, warnings, routes, or plan annotations.
4. never uses friendly conversational UX copy such as "Oops", "Welcome back", "Almost there", "Nice work", or "Let's go".
5. never uses playful illustration, emoji, mascot graphics, confetti, bubbly icons, or decorative stickers.
6. never uses animated entrance effects, spring motion, hover scale, bounce, blur fades, parallax, or soft easing.
7. never uses web-brutalist chaos, random misalignment, default blue links, intentionally ugly browser controls, or zine collage.
8. never uses pill buttons, rounded avatars, bubble tooltips, circular status badges, or soft SaaS cards.
9. never uses delicate script, decorative serif, thin luxury display type, or cute hand lettering.
10. never fills every space. brutalist composition needs voids, slabs, pauses, and large architectural silence.
11. never uses rainbow data visualization. charts stay concrete, black, oxide, and occasional blueprint.
12. never hides structure. grids, seams, borders, labels, route markers, and section numbers should remain visible.
