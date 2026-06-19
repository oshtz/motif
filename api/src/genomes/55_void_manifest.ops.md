---
id: "55"
name: void_manifest.ops
keywords:
  - industrial
  - manifest
  - operations
  - cargo
  - catalog
  - inventory
  - void
  - sector
  - synth
  - oversized
  - sci-fi
  - dark
---

### genome 55: `void_manifest.ops`

> identity: industrial deep-space cargo manifest: oversized Helvetica inventory listings against near-black void, fixed metadata panels, sector codes, sequence commands, muted burnt-orange actions, ASCII overlays, analog noise, and the operational austerity of a fictional megastructure supply terminal. The interface is an inventory wall at the edge of nothing.

---

**surface**

The surface is a void operations terminal.

It is not a cyberpunk command center.

It is not a neon sci-fi dashboard.

It is not a friendly inventory app.

It is a cold industrial manifest printed directly into darkness.

The main visual act is oversized text occupying the right side of an empty field.

Core palette:

- `--bg: #0A0A0A` for the near-black void, page background, manifest field, and negative space.
- `--void-deep: #020202` for deeper terminal wells, full-screen overlays, and absolute black gaps.
- `--overlay-bg: #11100E` for lifted panels, info blocks, fixed metadata surfaces, and modal planes.
- `--panel-dark: #171511` for active overlay cells, selected rows, and higher contrast panel regions.
- `--ink: #E8E6E0` for warm off-white primary text, large manifest entries, and high-priority values.
- `--ink-90: rgba(232, 230, 224, 0.9)` for large list items that are important but not selected.
- `--ink-70: rgba(232, 230, 224, 0.7)` for secondary rows and muted list entries.
- `--dim: #5C5853` for metadata, ASCII forms, dividers, inactive controls, and sector labels.
- `--dim-ghost: rgba(92, 88, 83, 0.38)` for subtle overlay marks, inactive coordinates, and noise-aligned labels.
- `--accent: #D95C14` for links, active actions, current sequence, and manifest mutations.
- `--accent-dim: rgba(217, 92, 20, 0.35)` for subtle action underlines and selected metadata.
- `--danger: #C43B2A` for transmission failures, corrupt sectors, destructive commands, and alert states.
- `--signal: #A99A7A` for optional secondary data, checksum values, and machine-state annotations.

The palette is restrained.

The accent is burnt, not neon.

The ink is warm, not pure white.

The void is matte, not glossy.

Typography:

- Primary font: `"Helvetica Neue", Helvetica, Arial, sans-serif`.
- ASCII/decorative font: `"Courier New", Courier, monospace`.
- Manifest display size: `clamp(48px, 6.5vw, 132px)`.
- Manifest display weight: `400`.
- Manifest display line-height: `0.82` to `0.9`.
- Manifest display letter-spacing: `-0.05em` to `-0.035em`.
- Logo/terminal mark: `clamp(22px, 2.5vw, 48px)`, weight `500`, letter-spacing `-0.05em`.
- Info panel text: `clamp(18px, 1.8vw, 34px)`, line-height `1.08`, letter-spacing `-0.02em`.
- Body/metadata: `14px`, weight `400`, line-height `1.3`, letter-spacing `-0.01em`.
- Small labels: `11px`, uppercase, `letter-spacing: 0.04em`.
- ASCII overlays: `0.7vw` to `10px`, line-height `0.8`.

Display text is mixed case unless the content is a label or code.

Uppercase is reserved for small labels and system state.

Borders:

- Global radius: `0px`.
- Standard panels usually have no border.
- Separation comes from background value, positioning, and scale.
- Divider: `1px solid var(--dim)`.
- Subtle divider: `1px solid var(--dim-ghost)`.
- Accent underline: `1px solid var(--accent)`.
- Error rule: `1px solid var(--danger)`.
- Shadow only for dramatic overlay panels: `box-shadow: 0 0 50px rgba(0,0,0,0.8)`.

Spacing:

- Fixed info panel offset: `2vw` from top and left.
- Manifest list left padding: `25vw` on desktop.
- Manifest list top padding: `16vh` to `24vh`.
- Panel padding: `24px` to `32px`, or `2vw`.
- Small control padding: `8px 0`.
- Row gap: `0`.
- Large display list uses tight line-height instead of margins.
- General panel gap: `16px` to `32px`.

The layout should feel asymmetric.

The left side informs.

The right side overwhelms.

The void between them is part of the manifest.

---

**color distribution**

74% bg and void-deep.

The dominant visual is darkness and negative space.

12% ink and ink-90.

Oversized manifest entries, active selected text, headings, and primary values use warm ink.

7% dim and dim-ghost.

Metadata, dividers, ASCII forms, inactive labels, checksums, and structural annotations use muted gray-brown.

4% overlay-bg and panel-dark.

Panels and overlays appear only slightly lifted from the void.

2% accent and accent-dim.

Actions, links, active states, and sequence markers use burnt orange.

1% danger and signal.

Failures and rare status annotations use muted red or signal tan.

The page should read as black space first, huge text second, metadata third, accent last.

---

**component patterns**

Manifest list:

- Signature element.
- Large stacked text on the right or center-right.
- CSS: `font-size: clamp(48px, 6.5vw, 132px); font-weight: 400; line-height: 0.85; letter-spacing: -0.04em; white-space: nowrap`.
- Color: `var(--ink-90)`.
- No bullets.
- No numbers.
- No checkboxes.
- No row backgrounds.
- Items can overlap optically through tight line-height but must remain legible.
- Selected item becomes full `var(--ink)`.
- Muted item becomes `var(--ink-70)`.
- Corrupt item becomes `var(--danger)`.

Fixed info panel:

- Position: `fixed; top: 2vw; left: 2vw; z-index: 50`.
- Width: `min(26vw, 420px)`.
- Text: tight Helvetica.
- Contains logo, sector, node, level, build, manifest count, active sequence, and operator state.
- Container background may be transparent or `var(--overlay-bg)`.
- If transparent, rely on line breaks and text scale.
- Interactive children use `pointer-events: auto`; passive container may use `pointer-events: none`.

Oversized heading:

- Heading is an object name, not a marketing headline.
- Examples: `Carbon Allotrope Array`, `Synthetic Trigo Base`, `Transit Lattice`, `Void Intake Node`.
- Mixed case.
- Negative tracking.
- No uppercase transform.
- No subtitle unless it is a sector code.

Buttons:

- Text-only by default.
- CSS: `background: transparent; border: none; color: var(--accent); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; padding: 8px 0`.
- Primary action can use `border-bottom: 1px solid var(--accent)`.
- Hover: opacity `0.7` or text to `var(--ink)`.
- Active: opacity `0.5`.
- Danger action: `color: var(--danger)`.
- No filled button blocks.
- No pills.
- No rounded controls.

Inputs:

- CSS: `background: transparent; border: none; border-bottom: 1px solid var(--dim); color: var(--ink); font-family: "Helvetica Neue"; font-size: 14px; padding: 8px 0`.
- Focus: `border-bottom-color: var(--accent); outline: none`.
- Placeholder: `color: var(--dim)`.
- Code input can use Courier New.
- Search input should feel like a manifest filter, not a rounded search bar.
- Invalid: red bottom rule and `Error: ...` text.

Panels:

- Base: `background: var(--overlay-bg); padding: 24px 32px; border-radius: 0`.
- No border unless a divider is functionally required.
- Important overlay: `box-shadow: 0 0 50px rgba(0,0,0,0.8)`.
- Panel titles use large info text, not standard card headers.
- Panels should feel pasted into the void.
- Do not create a grid of equal cards.

Navigation:

- Navigation is metadata, not app chrome.
- Fixed vertical text panel or sparse top-left command stack.
- Links in accent.
- Active state can be implicit through position or accent color.
- No hamburger.
- No app shell sidebar.
- No icon nav.

Headers:

- Header is usually the info panel.
- If a document header is required: left-aligned, oversized Helvetica, negative tracking, with sector metadata below.
- No centered hero header.
- No gradient hero.
- No decorative background image.

Footers:

- Minimal or absent.
- If present: one line of metadata, dim color, `11px`, uppercase, letter-spacing `0.05em`.
- Align bottom-left or bottom-right.
- Examples: `BUILD 0xF4`, `NODE 9A`, `MANIFEST INDEXED`.

Tables:

- Tables are rare and plain.
- No cell borders unless alignment fails.
- Header row: dim uppercase `11px`.
- Data rows: ink `14px`.
- Column gaps: `32px` minimum.
- Numeric and code values can be monospace.
- No alternating row colors.
- No rounded table container.

Lists:

- Large manifest list is primary.
- Small lists are raw stacked rows.
- No list markers.
- No icons.
- No badges unless text-only status codes.
- Use line-height and weight to create hierarchy.

Dividers:

- Use sparingly.
- Divider: `1px solid var(--dim)`.
- Subdivider: `1px solid var(--dim-ghost)`.
- Accent divider can mark active sequence.
- Never decorative.
- Never dashed unless it is ASCII or code output.

Modals:

- Overlay: `background: var(--overlay-bg); box-shadow: 0 0 50px rgba(0,0,0,0.8); padding: 2vw; border-radius: 0`.
- Position can be fixed and off-center.
- Close action is text-only: `TERMINATE` or `CLOSE`.
- Body can include ASCII forms, sector text, and manifest rows.
- Backdrop remains the void.
- No blur.

Badges and tags:

- Text-only.
- CSS: `color: var(--dim); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em`.
- Active: accent.
- Error: danger.
- No background fills.
- No pill tags.
- No rounded chips.

ASCII overlay:

- Non-functional atmospheric block.
- Font: Courier New.
- Color: var(--dim).
- Position: fixed or absolute.
- Opacity: `0.75` to `1`.
- Line-height: `0.8`.
- Can pulse slowly with opacity.
- Use abstract glyph fields, coordinates, or cargo silhouettes made from text.
- Avoid cute or illustrative ASCII.

Noise overlay:

- Fixed full-viewport overlay.
- `pointer-events: none`.
- `opacity: 0.03`.
- SVG fractalNoise or CSS grain.
- Always subtle.
- It should add analog grime, not visual busyness.

---

**interaction language**

Hover:

- Large list item brightens to full ink.
- Link opacity drops to `0.7` or color becomes ink.
- Panel action gets accent underline.
- No background hover fills on list rows.
- Transition: `color 0.1s linear`, `opacity 0.2s ease`.

Active:

- Pressed text action drops opacity to `0.5`.
- Active manifest item becomes full white-warm ink.
- Active sequence marker uses accent.
- No transform.
- No scale.
- No pressed button block.

Focus:

- Focus outline: `1px solid var(--accent); outline-offset: 2px`.
- Inputs use accent bottom rule.
- Large manifest focus can use a left accent tick.
- Keep focus sharp and industrial.

Selected:

- Selected item: `color: var(--ink)`.
- Optional marker: thin accent rule or small text code such as `ACTIVE`.
- No background fill.
- No checkmark icon.
- Context and brightness determine selection.

Disabled:

- Disabled controls: `opacity: 0.25`.
- Text remains in place.
- Optional label: `LOCKED`, `VOID`, or `UNAVAILABLE`.
- Cursor can be `not-allowed`.
- Do not hide disabled data.

Drag:

- Drag state: `cursor: grabbing; opacity: 0.6`.
- No shadow.
- No outline change unless the drop zone needs an accent rule.
- No physics.
- No card lift.

Validation:

- Success: accent text, short hold, then dim.
- Error: danger text, hard cut.
- Pending: dim text with animated dots.
- Do not use icons, spinners, or friendly illustrations.

---

**motion & feedback**

Motion is minimal.

The terminal should feel heavy, not lively.

Allowed transitions:

- `transition: color 0.1s linear`.
- `transition: opacity 0.2s ease`.
- No transform transitions.
- No scale.
- No translate.
- No rotation on UI elements.

Loading:

- ASCII-style ellipsis.
- Text: `Initializing...`, `Loading manifest...`, `Indexing sector...`, or `Awaiting transmission...`.
- Dots pulse through opacity.
- Optional rule: dim accent underline.
- No spinner.
- No progress bar.
- No skeleton cards.

Success:

- Text appears in accent for `1.5s`.
- Then fades to dim.
- Formats: `Manifest updated.`, `Sequence complete.`, `Transmission received.`, `Sector indexed.`
- No checkmark.
- No celebration.

Error:

- Text appears in danger with no fade-in.
- Format: `Error: sector not found.`
- Other examples: `Error: manifest corrupted - reindex required.`, `Error: node unreachable at specified frequency.`
- No shake.
- No bounce.

ASCII pulse:

- Slow opacity pulse between `0.8` and `1.0`.
- Duration: `4s`.
- Easing: `ease-in-out`.
- This is atmospheric, not interactive.

Noise:

- Static grain is preferred.
- If animated, keep change barely perceptible.
- Never create visible shimmer that fights the text.

Page enter:

- Content may hard-cut into existence.
- Optional: manifest list fades from opacity `0` to `1` over `0.4s`.
- Avoid cinematic boot-up sequences.
- Avoid terminal typewriter effects unless the prompt explicitly asks for initialization.

---

**atmosphere**

The atmosphere is industrial inventory at the edge of the void.

The page breathes through black space.

The text feels too large for the terminal.

The metadata feels too small for the scale of the system.

That tension is the identity.

Spatial structure:

- Fixed info panel at top-left.
- Large manifest text offset to the right.
- Optional ASCII overlay floating somewhere off-axis.
- Wide void zones are intentional.
- Scroll can feel monumental, like moving down a cargo index wall.

Texture:

- Subtle noise overlay.
- Dim ASCII forms.
- Burnt orange action lines.
- Warm off-white text.
- No stars.
- No nebulae.
- No spacecraft illustrations.

Industrial references:

- Cargo manifest.
- Sector ledger.
- Megastructure supply node.
- Cold operations terminal.
- Deep storage index.
- Synthetic material registry.
- Bulk inventory wall.
- Transmission manifest.

Composition:

- Asymmetry is required.
- Tight oversized type should contrast with empty black fields.
- Avoid symmetrical dashboard grids.
- Avoid normal app rhythm.
- One list can be the entire page.

The result should feel like a fictional industrial system that has no interest in being friendly.

It should be legible, austere, and strange.

---

**editorial voice**

The voice is operational, industrial, and clinical.

It uses noun phrases.

It uses sector codes.

It uses build identifiers.

It does not motivate the user.

Button labels:

- `Initialize`
- `Transmit`
- `Void Entry`
- `Sync Manifest`
- `Terminate`
- `Override`
- `Deploy Sequence`
- `Reindex`
- `Lock Sector`
- `Export Node`
- `Purge Entry`

Headings:

- `Carbon Allotrope Array`
- `Synthetic Trigo Base`
- `Quantum Centeno State`
- `Void Intake Node`
- `Thermal Lattice Spool`
- `Orbital Freight Chain`
- `Dark Sector Reserve`
- `Null Cargo Index`
- `Auxiliary Matter Registry`

Metadata:

- `0x9A4F 3B21 8C7D`
- `Sector 4, Void`
- `Level 00-A`
- `Terminal Node`
- `Initialize Sequence`
- `2089.03.14`
- `T+4382`
- `v0.9.1-alpha`
- `Build 0xF4`
- `Node identifier: AX-17`

Placeholders:

- `Enter sector code...`
- `Search manifest...`
- `Node identifier`
- `Frequency range`
- `Cargo class`
- `Sequence key`
- `Void index`

Empty states:

- `No entries in manifest.`
- `Sector uncharted.`
- `Void - awaiting transmission.`
- `No cargo indexed.`
- `Node has not reported.`

Error text:

- `Error: sector not found.`
- `Error: manifest corrupted - reindex required.`
- `Error: node unreachable at specified frequency.`
- `Error: cargo lock engaged.`
- `Error: transmission failed.`

Success text:

- `Manifest updated.`
- `Transmission received.`
- `Sector indexed.`
- `Sequence complete.`
- `Node synchronized.`
- `Entry voided.`

Writing rules:

- Prefer noun phrases over sentences.
- Use periods on status messages.
- Use title case for actions.
- Use uppercase only for labels and codes.
- Use hex, sector, node, and sequence references.
- Avoid friendly language.
- Avoid jokes.
- Avoid instructions like "try again" unless operationally necessary.

---

**cursor & selection**

Global cursor: `default`.

Interactive text actions: `pointer`.

Inputs and text areas: `text`.

ASCII overlay: `default`.

Drag targets: `grab`.

Dragging: `grabbing`.

Disabled controls: `not-allowed`.

Do not use custom cursors.

Do not use sci-fi crosshair cursors unless the prompt is explicitly about targeting, which this genome normally is not.

Selection:

```css
::selection {
  background: var(--ink);
  color: var(--bg);
}
```

Selection inverts the warm ink and void.

Selected manifest rows brighten.

Selected metadata can receive an accent underline.

Selected ASCII remains non-interactive unless explicitly configured.

---

**when to reach for this genome**

Use `void_manifest.ops` when the prompt asks for industrial operations, cargo manifests, inventory systems, logistics terminals, sector catalogs, dark sci-fi operations, megastructure supply chains, bulk material registries, terminal-like ledgers, oversized typographic lists, or stark inventory interfaces.

Use it when the product should feel operational, severe, dark, typographic, and industrial rather than futuristic in a glossy way.

Use it when the main experience can be a manifest list, metadata panel, sector readout, and command stack.

Use it for fictional operations tools, logistics dashboards, internal inventory pages, dark catalog browsers, supply-chain tracking, warehouse abstractions, deployment manifests, and terminal-inspired product surfaces.

Use it when the user asks for "void", "manifest", "industrial", "cargo", "sector", "synth", "oversized typography", "dark operations", or "fictional terminal".

Do not choose it merely because the user asks for dark mode.

Do not choose it for generic sci-fi unless the prompt also supports inventory, operations, sector coding, or material catalog logic.

For terminal command-line density, prefer a terminal genome.

For sonar, surveillance, aviation, or weather operations, prefer those specialized genomes.

This genome is strongest when the output can be typographic, asymmetric, black, sparse in space but dense in scale, and built around manifest nouns.

---

**anti-patterns - this genome NEVER:**

1. never uses rounded corners. all UI geometry is sharp and industrial.
2. never uses filled block buttons. buttons are text-only actions or underline actions.
3. never uses serif or decorative display type. Helvetica Neue owns the voice; Courier New only supports ASCII and code fragments.
4. never uses bullets, numbered list markers, or checklist affordances for manifest lists.
5. never uses transform animations such as scale, translate, rotate, bounce, or parallax on UI elements.
6. never uses friendly, casual, encouraging, or playful language.
7. never uses gradients, neon glows, glass panels, starfields, sci-fi light beams, or glossy futuristic effects.
8. never uses bright saturated hues outside the muted burnt palette.
9. never uses card grids, masonry layouts, dashboard tiles, or equal-sized content blocks as the primary structure.
10. never uses icon systems, emoji, illustrative pictograms, or decorative SVG symbols.
11. never centers everything into a balanced hero layout. asymmetry and offset tension are required.
12. never makes the manifest feel like a normal CRUD table. the list must be oversized, typographic, and spatially dominant.
