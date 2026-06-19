---
id: "01"
name: lab_manual.80s
keywords:
  - technical docs
  - scientific
  - industrial
  - clinical
  - data-heavy
  - classified
  - research
  - swiss design
  - government
  - documentation
  - bureaucratic
  - clearance
  - redacted
  - dossier
---

### genome 01: `lab_manual.80s`

> identity: clinical, high-risk technical documentation. swiss international style meets classified government filing. the aesthetic of a document you need security clearance to read.

**surface**

The surface is a controlled document system.

It should feel like a classified technical manual, incident dossier, ISO procedure binder, research appendix, or government lab registry printed in black and red on severe white paper.

This is not a monitor.

This is not a friendly docs site.

This is a document you handle carefully.

Core CSS variables:

- `--red: #E42626` - sole active accent, rules, borders, warning text, classified marks.
- `--red-deep: #9F1010` - severe error text, stamped overlays, destructive status.
- `--red-faint: rgba(228,38,38,0.08)` - pale panel backing, table alternate rows, selected row fill.
- `--grid: rgba(228,38,38,0.15)` - document grid and measurement lattice.
- `--grid-soft: rgba(228,38,38,0.055)` - secondary grid and form ruling.
- `--bg: #FFFFFF` - primary document surface.
- `--paper: #FCFCFA` - slightly warm white for inset sheets and forms.
- `--ink: #000000` - primary text, redaction bars, maximum contrast.
- `--ink-soft: #252525` - body text where pure black feels too heavy.
- `--muted: #999999` - labels, inactive metadata, disabled copy.
- `--muted-faint: #D7D7D7` - inactive rules, ghost form cells.
- `--surface: rgba(228,38,38,0.04)` - ultra-light red panel surface.
- `--redaction: #050505` - black classified redaction blocks.

Typography:

- Display and headings: `"DotGothic16", "IBM Plex Mono", "Courier New", monospace`.
- Body and interface text: `"Inter", "Helvetica Neue", Arial, sans-serif`.
- Technical numerals and codes: `"IBM Plex Mono", "Courier New", monospace`.
- All visible labels, headings, buttons, nav items, badges, table headers, and metadata are uppercase.
- Body copy can be uppercase too; if long readability is required, keep it compact and technical but still visually subordinate.
- `letter-spacing: 0.08em` for headings and controls.
- `letter-spacing: 0.04em` for body and table cells.
- Display title: 13px to 18px, never larger.
- Section heading: 12px to 14px.
- Body: 11px to 12px.
- Dense table cell: 10px to 11px.
- Metadata: 9px to 10px.
- Stamps and flags: 9px to 12px, bold, uppercase.
- `line-height: 1.35` for dense tables, `1.5` for body notes, `1.15` for labels.
- Hierarchy comes from position, red rules, weight, boxed headers, and density. Never from big type.

Borders and geometry:

- Structural border: `1px solid var(--red)`.
- Major document frame: `2px solid var(--red)` only for the outermost dossier or high-risk modules.
- Internal rules: `1px solid var(--red)`.
- Form ruling: `1px solid var(--grid)`.
- Disabled rule: `1px solid var(--muted-faint)`.
- Border radius: `0px` on every element. No exceptions.
- Outlines are square.
- Panels align to a rectangular grid.
- Nothing floats because a dossier page does not hover.

Spacing:

- Base spacing unit: 4px.
- Document page padding: `20px 24px`.
- Dense panel padding: `12px 14px`.
- Section padding: `16px 20px`.
- Table cell padding: `6px 8px`.
- Form field padding: `8px 0 6px`.
- Grid gap: `12px`, `16px`, or `24px`.
- Use `display: grid` heavily. Favor `grid-template-columns: 120px 1fr 96px` or similar explicit systems.
- Dossier layouts should use labeled zones, not freeform cards.

Document surface rules:

- Use white as the dominant field.
- Red lines define structure.
- Black text carries the content.
- Faint red surfaces indicate classification, selected rows, warnings, or form groups.
- Use page numbers, reference IDs, and version codes in corners.
- Favor tables, checklists, fields, and stamps over illustrations.

**color distribution**

- 61% white and paper - the document surface dominates.
- 27% black and ink-soft - body content, headings, redaction bars, code values.
- 9% red - borders, rules, active state, status stamps, warnings, focus.
- 2% muted gray - inactive labels, secondary metadata, disabled values.
- 1% faint red surfaces - table striping, selected states, form zones.

Red must feel scarce and authoritative.

Large red fills are reserved for active/pressed controls, header stripes, stamps, and critical status.

The interface should be mostly white paper, black text, and red structure.

**component patterns**

Buttons:

- Default: `background: #FFFFFF; color: var(--red); border: 1px solid var(--red); border-radius: 0; padding: 8px 12px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.10em`.
- Primary: `background: var(--red); color: #FFFFFF; border-color: var(--red)`.
- Secondary: white background, red border, red text.
- Destructive: red-deep text and border, red-faint backing.
- Inline action: uppercase red text with bottom rule only, no button chrome.
- Icon button: 28px square, red border, single technical glyph or letter code.
- Buttons may include bracketed labels only if they look like form annotations: `[ APPROVE ]`, `[ EXPORT ]`.
- No pills. No gradients. No drop shadows.

Inputs:

- Text input base: `background: transparent; border: 0; border-bottom: 1px solid var(--red); border-radius: 0; color: var(--ink); padding: 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em`.
- Label: 9px uppercase in muted gray, positioned above or left as a form label.
- Focus: full rectangular outline appears: `outline: 2px solid var(--red); outline-offset: 2px`.
- Placeholder: muted uppercase ending with ellipsis, such as `ENTER IDENTIFIER...`.
- Required field: add red corner mark or `REQ` code, not a decorative asterisk.
- Error field: prepend `[ERR]` to label and set bottom border to `2px solid var(--red-deep)`.
- Multiline notes: red-ruled box with faint grid background.

Cards and panels:

- Panels are document modules.
- Base: `background: var(--bg); border: 1px solid var(--red); border-radius: 0; box-shadow: none`.
- Header stripe: `background: var(--red); color: #FFFFFF; padding: 4px 10px; font-size: 9px; font-weight: 700; letter-spacing: 0.12em`.
- Body: `padding: 12px 14px`.
- Panel footer: red top border, metadata fields.
- Square modules can use `aspect-ratio: 1` for lab readouts, specimen slots, or clearance cells.
- Nested panels should be avoided; use internal rules and section rows.

Navigation:

- Navigation is a document index.
- Horizontal nav: text list separated by ` // `, ` | `, or red vertical rules.
- Active item: prefixed with `>`, `::`, or the triangular selection marker already established by the genome, plus red text.
- Nav item style: uppercase 10px, letter-spacing 0.12em.
- No filled tabs unless the active item is part of a red header strip.
- Side nav can be an index column with zero-padded section numbers: `01 CONTROL`, `02 REGISTRY`, `03 LOGS`.
- Mobile nav should remain a compact index list, not a friendly drawer.

Headers:

- Header layout: left document title, right metadata block.
- Title: 14px to 18px uppercase monospace.
- Right metadata: 9px uppercase, line-stacked, values such as `DOC-SYS.001-ACTIVE`.
- Bottom rule: `1px solid var(--red)`.
- Optional top classification band: red text on white or white text on red.
- Use stamps such as `CONFIDENTIAL`, `INTERNAL`, `REVISION A`, `LEVEL-3`.
- No large hero imagery.

Footers:

- Footer is a filing strip.
- Base: white background, red top border, `padding: 8px 0`.
- Content: document ID, page number, revision, clearance, generation timestamp.
- Format: `PAGE 01 OF 04 | REV. A | CLEARANCE: LEVEL-3 | FILE: R-204`.
- Footers stay small and factual.
- No marketing links or social icons.

Lists:

- Use zero-padded numeric markers: `01.`, `02.`, `03.`.
- Active item can use `> 03.` or a red left rule.
- No decorative bullets.
- List rows: `padding: 6px 0; border-bottom: 1px solid var(--grid)`.
- Checklist boxes: 12px square, red border, no radius.
- Checked state: red fill or red slash, not a cute checkmark unless required.
- Hierarchy uses indentation in 16px increments and section IDs.

Tables:

- Tables are signature components.
- Wrapper: red border, no radius.
- Header row: red background, white uppercase text, 9px to 10px.
- Cells: `border: 1px solid var(--red); padding: 6px 8px; font-size: 10px-11px`.
- Alternate rows: `background: var(--surface)`.
- Critical row: red left rule 4px and `[WARN]` or `[ERR]` label.
- Numeric cells use tabular numerals and right alignment.
- IDs and statuses use monospace.
- Empty cells show `--` rather than blank.
- Table captions use document code format above the table.

Dividers:

- Standard: `1px solid var(--red)`.
- Major section: `2px solid var(--red)`.
- Faint grid divider: `1px solid var(--grid)`.
- Dividers are always straight, full-width, and horizontal or vertical.
- Never use decorative ornaments.

Modals and overlays:

- Modal is a document overlay, not a floating app card.
- Shell: `background: #FFFFFF; border: 2px solid var(--red); border-radius: 0; box-shadow: none; padding: 0`.
- Header: red stripe with white text and a right-aligned code.
- Body: `padding: 16px 20px`.
- Backdrop: `rgba(255,255,255,0.86)` or `rgba(0,0,0,0.08)`; no blur.
- Close control: square red-bordered button labeled `X` or `CLOSE`.
- Confirmation buttons align on a red rule grid.

Badges and tags:

- Base: `border: 1px solid var(--red); color: var(--red); background: #FFFFFF; border-radius: 0; padding: 2px 6px; font-size: 9px; letter-spacing: 0.10em; text-transform: uppercase`.
- Critical: red fill, white text.
- Inactive: muted border and muted text.
- Classification badge: diagonal stamp or boxed label, but still square.
- Use codes: `ACTIVE`, `LOCKED`, `REV.A`, `CLASSIFIED`, `REQ`, `ERR`, `WARN`.

Tooltips:

- Tooltip: `background: #FFFFFF; border: 1px solid var(--red); border-radius: 0; padding: 4px 8px; color: var(--ink); font-size: 9px; text-transform: uppercase`.
- No arrow pointer.
- Position flush to the triggering element edge.
- Tooltip copy should read like a form note: `FIELD REQUIRED`, `SOURCE VERIFIED`.

Progress and status:

- Progress bar: `height: 2px; background: var(--surface); border-radius: 0`.
- Fill: `background: var(--red); height: 2px`.
- Percentage label right-aligned, 9px monospace.
- Stepper: numbered square cells, red border, active cell red fill.
- Status light: square 8px red or muted block, never a circular LED.

Redaction:

- Redacted text block: `background: var(--redaction); color: var(--redaction); user-select: none`.
- Redaction bars align to text baseline and preserve line rhythm.
- Partial redaction is preferred over full-screen secrecy.
- Redacted fields may show `REDACTED` label in red above or beside the bar.

Forms:

- Forms resemble field sheets.
- Use two-column label/value grids.
- Labels fixed width, values flexible.
- Section IDs in the left margin.
- Required review fields get small red `VERIFY` stamp.
- Submit areas are bounded by red top rule and right-aligned action controls.

Diagrams:

- Allowed diagrams are technical: line drawings, grids, flowcharts, block diagrams.
- Use red rules, black labels, and no fills beyond faint red.
- Diagram labels are uppercase and numbered.
- Do not use illustrations, mascots, or decorative diagrams.

**interaction language**

Hover:

- Element gains `outline: 1px dashed var(--red); outline-offset: 2px`.
- Text links gain red underline.
- Table row hover: `background: var(--surface)`.
- No shadow, no scale, no gradient, no fade.
- Hover state appears instantly.

Active / pressed:

- `background: var(--red); color: #FFFFFF; border-color: var(--red)`.
- Hard snap with `transition: none`.
- Active table row can invert only the left marker or status cell, not the whole table unless it is a selected row.

Focus:

- `outline: 2px solid var(--red); outline-offset: 2px`.
- Focus is square and high contrast.
- Inputs also receive `border-bottom: 2px solid var(--red)`.
- Focus rings must never be removed.

Selected:

- Selected item uses red text, red left rule, and a leading marker.
- Selected row: `background: var(--red-faint); border-left: 4px solid var(--red)`.
- Selected nav: prefix `>`.
- Selected checkbox: red fill with white mark or red slash.
- Selection must be visible without relying only on red fill.

Disabled:

- `opacity: 0.3`.
- List and nav disabled items may use `text-decoration: line-through`.
- Inputs, badges, and buttons use opacity alone plus muted border.
- Disabled elements do not change cursor.

Drag:

- `cursor: crosshair` for interactive acquisition; `grabbing` only while dragging if the browser requires it.
- Drag source: dashed red outline, white background, no shadow.
- Drop target: red double outline or red grid highlight.
- Drag feedback is geometric, not physical.

Validation:

- Valid: red outline flash or `[OK]` label, not green.
- Warning: `[WARN]` prefix in red-deep or red.
- Error: `[ERR]` prefix in red-deep, field label updated, red bottom border thickens.
- Success and failure are encoded with text labels because this is a document system.

**motion & feedback**

Transitions:

- `transition: none` on all layout, color, border, background, transform, and opacity state changes.
- All states change instantly.
- The zero-motion rule is part of the clinical authority.
- Do not use easing, spring, fade, slide, scale, or animated hover effects.

Loading:

- Text reads `PROCESSING...`, `INDEXING...`, `VERIFYING...`, or `COMPILING...`.
- Optional cycling character: `/`, `-`, `\`, `|` at 150ms intervals.
- Alternative: a red 2px progress rule fills stepwise in discrete jumps.
- No spinner graphic.
- No skeleton shimmer.

Success:

- Add `[OK]` or `[COMPLETE]` label to the relevant row.
- Optional 100ms inset red outline flash: `box-shadow: inset 0 0 0 2px var(--red)`.
- Remove flash immediately after the state is recorded.
- Do not celebrate.

Warning:

- Add `[WARN]` prefix and red-faint background.
- Update the status field.
- No pulsing.
- No yellow warning color.

Error:

- Prepend `[ERR]` to field label or row.
- Use red-deep text if severity needs distinction.
- Keep the message in place; do not toast it away.
- No shake animation.

Page enter:

- No page entrance animation.
- The document appears fully rendered.
- Pagination, stamps, and metadata should be present immediately.

Realtime updates:

- If data changes, update the cell value instantly and mark row with `REV` or timestamp.
- Do not animate counters.
- If a log row is added, insert it at top or bottom with no fade.

**atmosphere**

The atmosphere is paper, clearance, and procedure.

Background grid:

```css
background-image:
  linear-gradient(to right, var(--grid) 1px, transparent 1px),
  linear-gradient(to bottom, var(--grid) 1px, transparent 1px);
background-size: 80px 80px;
```

Secondary microgrid:

```css
background-image:
  linear-gradient(to right, var(--grid-soft) 1px, transparent 1px),
  linear-gradient(to bottom, var(--grid-soft) 1px, transparent 1px);
background-size: 20px 20px;
```

Use the primary 80px grid on the body or document shell.

Use the microgrid inside forms, diagrams, and empty panel wells.

Paper:

- Page background remains white or near-white.
- A faint paper tone is allowed via `--paper`, but avoid aged parchment.
- No coffee stains, tape, torn edges, or hand-drawn marks.
- The document is sterile, not nostalgic.

Classification details:

- Add corner metadata, vertical side labels, page numbers, revision IDs, and stamps.
- Red stamps can be slightly rotated by at most `-2deg` to `2deg`, but most elements stay perfectly aligned.
- Use black redaction bars sparingly.
- Add small measuring ticks on diagrams or section gutters.

Imagery:

- Images are rare.
- When used, apply `filter: grayscale(1) contrast(1.2) brightness(1.1)`.
- Crop images as evidence plates or specimen photos with red captions.
- No lifestyle photography.
- No decorative hero photos.

Information density:

- Dense tables and forms are expected.
- White space exists as margins and grid structure, not as airy lifestyle design.
- Every area should feel filed, measured, labeled, or awaiting input.
- Do not hide complexity with oversized cards.

Contrast with neighbors:

- Unlike `sterile_field.surg`, this is white document/dossier work, not dark patient-monitor software.
- Unlike `biosequence_lab.gen`, this is not organism, genomic, or specimen-world green science.
- Unlike `milspec_field.tm`, this is cleaner, Swiss, red-white, and bureaucratic rather than field-rugged olive.
- Unlike `underground_terminal.crt`, this is printed uppercase documentation, not lowercase amber command-line atmosphere.

**editorial voice**

The voice is procedural, severe, and record-oriented.

It should sound like a manual, memo, system form, or clearance registry.

Button labels:

- `INITIALIZE`
- `EXECUTE`
- `TERMINATE`
- `CONFIRM SEQUENCE`
- `EXPORT LOG`
- `VERIFY RECORD`
- `APPROVE ENTRY`
- `REVOKE ACCESS`
- `PRINT DOSSIER`
- `LOCK FILE`
- `REQUEST REVIEW`

Headings:

- `AUTHENTICATION PROTOCOL`
- `DATA REGISTRY`
- `STATUS OVERVIEW`
- `CLEARANCE INDEX`
- `INCIDENT REPORT`
- `CONTROL SAMPLE`
- `PROCEDURE APPENDIX`
- `ACCESS MANIFEST`
- `REVISION HISTORY`

Metadata:

- `DOC-SYS.001-ACTIVE`
- `REF.2026.06`
- `CLEARANCE: LEVEL-3`
- `REV. A / PAGE 01`
- `CASE ID: R-204`
- `FILE: INTERNAL`
- `SOURCE: ARCHIVE-7`
- `UPDATED: 05 JUN 2026`
- `OPERATOR: A17`

Placeholders:

- `ENTER IDENTIFIER...`
- `INPUT PASSPHRASE...`
- `SEARCH REGISTRY...`
- `SPECIFY SAMPLE ID...`
- `TYPE ACCESS CODE...`
- `ENTER REVISION NOTE...`
- `FILTER BY STATUS...`

Empty states:

- `NO DATA AVAILABLE.`
- `AWAITING INPUT.`
- `RECORD NOT FOUND.`
- `NO AUTHORIZED ENTRIES.`
- `SECTION UNPOPULATED.`
- `NO INCIDENTS RECORDED.`
- `QUEUE EMPTY.`

Error messages:

- `[ERR]: INVALID CREDENTIAL FORMAT`
- `[ERR]: REQUIRED FIELD OMITTED`
- `[ERR]: ACCESS LEVEL INSUFFICIENT`
- `[ERR]: RECORD LOCKED`
- `[WARN]: FIELD REQUIRES REVIEW`
- `[WARN]: REVISION CONFLICT`
- `[WARN]: SOURCE UNVERIFIED`

Success messages:

- `SEQUENCE COMPLETE.`
- `RECORD UPDATED.`
- `UPLINK ESTABLISHED.`
- `ENTRY VERIFIED.`
- `DOSSIER EXPORTED.`
- `ACCESS GRANTED.`
- `REVISION FILED.`

Writing rules:

- Use uppercase for visible interface copy.
- Use periods on empty states and success messages.
- Use square-bracket prefixes for warnings and errors.
- Use exact IDs, dates, reference numbers, and levels.
- Avoid "Get started", "Welcome", "Oops", "Nice", "Done!", and all casual reassurance.
- Prefer nouns like `REGISTRY`, `PROTOCOL`, `APPENDIX`, `SEQUENCE`, `DOSSIER`, `CLEARANCE`, `REVISION`.

**cursor & selection**

- Body text: `default`.
- Interactive controls: `crosshair`.
- Text inputs and editable fields: `text`.
- Drag targets: `crosshair`; active drag may become `grabbing` only for platform clarity.
- Disabled controls: `default`.
- No custom cursor image.
- No pointer hand except where accessibility conventions require links to behave as links; even then, `crosshair` is preferred for buttons and controls.

Selection:

```css
::selection {
  background: var(--red);
  color: #FFFFFF;
}
```

Selected rows:

- Use red left border and faint red backing.
- Keep text black unless inverted active state is necessary.
- Redacted text remains unselectable or same-color black on black.

**anti-patterns - this genome NEVER:**

1. never uses border-radius on anything. not panels, not buttons, not modals, not badges, not inputs.
2. never uses drop shadows, elevation, frosted glass, blurred overlays, or floating cards.
3. never uses gradients on buttons, panels, page backgrounds, or active states. the only patterned background is the red grid.
4. never uses font sizes above 18px. scale is not the hierarchy mechanism.
5. never uses smooth transitions, fades, slides, spring physics, animated counters, bounce, or hover motion.
6. never uses decorative icons, emoji, mascots, lifestyle photography, or friendly illustrations.
7. never uses casual copy such as `Get started`, `Hey there`, `Oops`, `No worries`, or `Looks good`.
8. never uses green success, yellow warning, or multicolor dashboard semantics as the default. state is encoded through red labels, text, and document structure.
9. never becomes a dark clinical monitor. if the prompt is surgical, vital-sign, anesthesia, or OR workflow, use `sterile_field.surg`.
10. never becomes a terminal. if the prompt is CLI, hacker, lowercase command line, or amber phosphor, use `underground_terminal.crt`.
11. never uses rounded SaaS cards, oversized hero type, marketing gradients, or friendly onboarding panels.
12. never hides data behind decorative space. this genome is strongest when tables, forms, IDs, and records are visible.

**when to reach for this genome**

Use `lab_manual.80s` when the prompt asks for technical documentation, classified documents, research registry, industrial forms, clinical lab paperwork, government filing, data-heavy manuals, procedural dashboards, clearance systems, dossiers, redacted records, safety protocols, or Swiss-style bureaucratic authority.

Reach for it when the concrete cues are red rules, white document fields, black text, zero radius, uppercase metadata, page IDs, clearance stamps, numbered sections, evidence plates, table-heavy records, redaction bars, and severe technical copy.

Use it for developer docs with menace, research dashboards, admin registries, compliance checklists, internal operating procedures, specimen intake forms, incident reports, archive browsers, formal onboarding, secure login, and dense tabular tools.

Do not use it for surgical OR monitoring, vital-sign traces, medication logs, or dark clinical workstations; use `sterile_field.surg`.

Do not use it for terminal portfolios, basement-mainframe utilities, lowercase prompts, scanline darkness, or amber command rows; use `underground_terminal.crt`.

Do not use it for rugged field manuals, olive drab maintenance sheets, military equipment cards, or outdoor tactical forms; use `milspec_field.tm`.

Do not use it for warm analog hardware, camera decks, or cinematic toggles; use `panavision.70s`.

It is strongest when the interface can be read as a page from a controlled binder: numbered, stamped, verified, and slightly intimidating.

**page archetype guidance**

Landing page:

- The first viewport is a document cover, not a marketing hero.
- Title maxes out at 18px.
- A red classification band, metadata block, and immediate data table should appear above the fold.
- Primary CTA reads `[ INITIALIZE ]` or `REQUEST ACCESS`.
- Use grid background and red rules to create authority.

Dashboard:

- Use dense red-bordered modules.
- Each panel has a red header stripe and a metadata footer.
- Metrics appear as table cells or labeled fields, not oversized KPI cards.
- Status rows include codes such as `ACTIVE`, `LOCKED`, `REV.A`, and timestamps.

Documentation:

- Numbered sections, red dividers, code blocks as bordered cells, and reference tables.
- Use index navigation with zero-padded numbers.
- Diagrams are block diagrams with red labels.
- Inline notes use `NOTE:` or `[WARN]`, not callout cards with icons.

Login/auth:

- Centered clearance form.
- Inputs are red bottom rules.
- Header metadata reads `DOC-SYS.001-ACTIVE`.
- Submit reads `CONFIRM SEQUENCE`.
- Error states modify labels in place.

Search/registry:

- Search field is a red-underlined form entry.
- Results are a table or dossier list.
- Filters are square checkboxes and code badges.
- Empty state reads `RECORD NOT FOUND.`.

**signature techniques**

Red grid:

- Use the 80px grid on the body.
- Use 20px microgrid in forms and diagrams.
- The grid should be faint but visible enough to make every element feel measured.

Zero radius:

- Set `border-radius: 0` globally for this genome.
- If a component library defaults to rounded corners, override it.
- This is the fastest way to preserve identity.

Maximum type size:

- `18px` is the upper limit.
- Use red rules, uppercase, spacing, and position for hierarchy.
- Large type instantly makes this genome generic.

Crosshair cursor:

- Apply `cursor: crosshair` to buttons, tabs, filters, and row actions.
- The cursor evokes targeting, inspection, and measurement.
- Text fields still use the text cursor.

System-code metadata:

- Every major surface should have a code.
- Use formats like `DOC-SYS.014`, `REF.2026.06`, `REV.B`, `CLEARANCE: LEVEL-3`.
- Put codes in corners, footers, table captions, and modal headers.

Redaction:

- Use black bars for classified values.
- Keep row and label structure visible.
- Redaction should increase documentary tension without becoming decoration.

Selection guidance:

- If the user says "clinical docs", "government", "classified", "redacted", "technical manual", "research registry", "Swiss design", or "bureaucratic", choose this genome.
- If the user says "surgery", "OR", "vitals", "anesthesia", or "patient monitor", route to `sterile_field.surg`.
- If the user says "terminal", "CLI", "mainframe", "hacker", or "phosphor", route to `underground_terminal.crt`.
- If the user says "field manual", "military", "maintenance card", or "tactical", route to `milspec_field.tm`.
