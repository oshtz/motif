---
id: "05"
name: handheld_gb.dmg
keywords:
  - retro games
  - chiptune
  - lo-fi
  - pixel art
  - nostalgia
  - 8-bit
  - cartridge
  - gameboy
  - handheld
  - gaming
---

### genome 05: `handheld_gb.dmg`

> identity: 1989 portable hardware. 4-shade green-scale LCD. chunky, dithered, pixel-perfect. the constraints are the aesthetic.

**surface**
- colors: only four exist. `--c1: #0f380f` (darkest), `--c2: #306230`, `--c3: #8bac0f`, `--c4: #9bbc0f` (lightest/background). no other colors. this is absolute.
- typography: `"Press Start 2P", monospace`. imported from Google Fonts. `line-height: 1.4`. body: 8px. headers: 10px. **there is almost no size variation** — the constraint is the aesthetic. hierarchy through color shade, position, and content, not scale.
- borders: `4px solid var(--c1)`. `border-radius: 4px` (mimics the plastic housing). inner borders: `2px solid var(--c2)`.
- spacing: everything snaps to a 4px grid. `padding: 8px; gap: 4px`. modular widths based on 160px or 320px.

**color distribution**
- 40% c4 (`#9bbc0f`) — lightest shade. backgrounds, empty space. the "LCD off" color.
- 30% c3 (`#8bac0f`) — secondary shade. panel backgrounds, header bars, button fills.
- 20% c1 (`#0f380f`) — darkest shade. text, borders, active elements.
- 10% c2 (`#306230`) — mid-dark. dividers, secondary borders, dimmed elements.

**component patterns**
- buttons: `background: var(--c3); color: var(--c1); border: 2px solid var(--c1); border-radius: 4px`. "start/select" buttons: pill-shaped (`border-radius: 8px; height: 20px; width: 48px`).
- inputs: `background: var(--c4); border: 2px solid var(--c1); border-radius: 4px`. 8px font. label above.
- cards/panels: `background: var(--c4); border: 4px solid var(--c1)`. header bar: `background: var(--c3)`.
- navigation: chunky buttons in a row. active: inverted (`background: var(--c1); color: var(--c4)`).
- headers: `background: var(--c3); border: 4px solid var(--c1)`. text in c1. labels truncated to ~16 characters (like a ROM title).
- footers: `background: var(--c2); color: var(--c4)`. abbreviated status. 8px text.
- lists: active item prefixed with `>`. others prefixed with ` `. no other decoration.
- tables: c1 borders on all cells. header: `background: var(--c1); color: var(--c4)`.
- dividers: `2px solid var(--c2)`. or: a dithered line (alternating c2/c3 pixels).
- modals: `border: 4px solid var(--c1); background: var(--c4)`. feels like a game dialog box.
- badges: simple text in brackets `[NEW]` or inverted inline `background: var(--c1); color: var(--c4)`.

**interaction language**
- hover: color inverts (c1↔c4). **instant swap. no transition.**
- active/pressed: `transform: scale(0.95)`. snaps back instantly.
- focus: `box-shadow: 0 0 0 2px var(--c3)`.
- selected: fully inverted: `background: var(--c1); color: var(--c4)`.
- disabled: rendered in c2 only (mid-tone — intentionally hard to read, like a grayed-out game menu item).
- drag: element flickers (rapid c1/c4 alternation, 100ms interval).

**motion & feedback**
- transitions: **`none`**. everything is instantaneous. pixel-perfect state snapping. this is non-negotiable — the hardware this genome emulates has zero transition capability.
- loading: `LOADING...` with dots appearing one at a time, 200ms each.
- success: a `♪` character appears near the element for 300ms (no actual sound — just the visual cue).
- error: the entire panel inverts (c1↔c4) for 100ms (a "flash"), then a `!` appears.
- page enter: no animation. everything appears at once, fully rendered.

**atmosphere**
- the root container has an outer bezel: `background: #8a8a6e; border-radius: 12px; padding: 16px` — the app is visually embedded inside a handheld device shell. the bezel color is the ONLY non-palette color allowed.
- optional: a 2×2 dithered pattern background using a repeating data-URI (alternating c3/c4 pixels).
- `image-rendering: pixelated` on all images and canvases.
- `box-shadow: inset 2px 2px 0px var(--c2)` on the main display area — an LCD "sunken" effect.

**editorial voice**
- button labels: short, game-like. `START`, `SELECT`, `OK`, `BACK`, `SAVE`, `LOAD`, `EXIT`, `MENU`, `GO`. all caps. max 8 characters.
- headings: ROM-title style. truncated. `MY PROJECT`, `HIGH SCORE`, `OPTIONS`, `PLAYER 01`, `LEVEL 03`. all caps.
- metadata: abbreviated. `LV.01`, `HP: 100`, `EXP: 0420`, `P1`, `SAV.01`.
- placeholders: `ENTER NAME...`, `TYPE...`, `????`.
- empty states: `EMPTY`, `NO DATA`, `- - -`.
- error messages: `ERROR!`, `INVALID!`, `TRY AGAIN`.
- success messages: `OK!`, `SAVED!`, `NICE!`. the `♪` symbol is appended.

**cursor & selection**
- cursor: `default` globally. or: render a custom cursor that's a chunky pixel arrow using a data-URI.
- text selection: `::selection { background: var(--c1); color: var(--c4); }`.

**anti-patterns — this genome NEVER:**
- uses more than 4 colors. the c1–c4 palette is absolute (bezel color is the sole exception).
- uses border-radius above 4px on any UI element (only the outer bezel shell is 12px).
- uses non-pixel fonts. only "Press Start 2P" or equivalent 8-bit pixel fonts.
- uses transitions or animations. all state changes are instant.
- uses transparency, opacity, or alpha values (the original hardware can't do it).
- uses box-shadow with blur (only solid inset shadows for the LCD effect).
- uses text larger than 10px.
- uses gradients.
- uses long words or sentences. everything is abbreviated, truncated, game-UI terse.

**when to reach for this genome**

When the request is playful, retro, gaming-adjacent, or constraint-celebrating — game UIs, retro-tech showcases, nostalgia pieces, "the simplest possible interface" exercises. Reach for it specifically when the constraint (4 colors, no motion, 8px text) is itself the design's hook, not a limitation to apologize for.

**page archetype guidance**

- landing page: a centered "title screen" — `MY APP` in big chunky letters, `PRESS START` button below, optional flashing `▾ PRESS START ▾` prompt. Bezel framing the entire page.
- dashboard: thick black panels framing a c4 LCD area; HP/EXP-style bars for metrics; status row at bottom in c2 abbreviating system state (`LV.04 | HP:089 | MEM:62%`).
- portfolio: a "stage select" grid — each project as a chunky bordered tile with a 16-color pixel-art preview, title in 10px, hover inverts c1/c4.
- editor: an "options menu" — labeled rows with chunky `< value >` selectors, save/load slots at the bottom, all keyboard-navigable like a Game Boy menu.

**production implementation notes**

Use these concrete defaults when turning the genome into production HTML/CSS:

```css
:root {
  --c1: #0f380f;
  --c2: #306230;
  --c3: #8bac0f;
  --c4: #9bbc0f;
  --bezel: #8a8a6e;
  --bezel-dark: #4f5142;
  --pixel-font: "Press Start 2P", "Courier New", monospace;
}
```

- palette rule: UI pixels inside the LCD use only `--c1`, `--c2`, `--c3`, and `--c4`; `--bezel` and `--bezel-dark` belong only to the outer device shell.
- body shell: `background: var(--bezel); color: var(--c1); font-family: var(--pixel-font); image-rendering: pixelated;`.
- LCD viewport: `width: min(100%, 640px); aspect-ratio: 160 / 144; background: var(--c4); border: 4px solid var(--c1); box-shadow: inset 2px 2px 0 var(--c2);`.
- scaled display: scale the 160x144 logic grid by integer multiples when possible; if responsive, preserve `aspect-ratio: 160 / 144` and avoid fractional pixel art assets.
- safe area: keep important content inside `padding: 8px`; nothing touches the LCD border unless it is a deliberate status frame.
- root grid: use `display: grid; grid-template-columns: repeat(20, 1fr); grid-auto-rows: 8px;` for title screens and menu layouts.
- spacing: every margin, padding, gap, border, and icon size uses a 4px multiple; common values are `4px`, `8px`, `12px`, `16px`, `24px`.
- typography: body stays 8px; title text can be 10px or 12px only when it is a logo/title screen; never use fluid viewport text.
- line height: use `line-height: 1.5` for dense menu rows and `line-height: 1.25` for title labels; avoid descenders clipping by padding text boxes.
- labels: all caps, 8px, max 12-16 characters; truncate with dots or abbreviations rather than wrapping long prose.
- buttons: rectangular menu buttons use `min-height: 20px; padding: 4px 8px; border: 2px solid var(--c1); background: var(--c3); color: var(--c1);`.
- primary action: invert on selection rather than adding a new fill; `background: var(--c1); color: var(--c4);`.
- start/select controls: visual controls outside the LCD may be pill-shaped, but in-screen controls remain 4px radius max.
- d-pad control: use a cross-shaped 3x3 grid; active direction fills with `--c1`; inactive arms use `--c2`; no circular joystick.
- icon buttons: 16x16 or 20x20 pixel boxes with 1-bit icons; draw icons with CSS box-shadow, pixel art sprites, or text glyphs.
- inputs: show a prompt row like `NAME: ______`; focused input has an inverted caret block, not a smooth blinking line.
- textarea equivalent: use a bordered "message box" with fixed rows; scroll indicators are tiny `UP`/`DN` labels or triangle glyphs.
- menus: one active row at a time; active row starts with `>` and uses inverted colors; inactive rows keep normal background.
- tabs: render as cartridge slots or save-file labels: `INV`, `MAP`, `STAT`; active tab is inverted with a 2px bottom seam.
- cards/panels: use nested 2px inner borders sparingly; too many nested boxes make the tiny LCD unreadable.
- modal dialogs: center in a 128px-wide or 144px-wide box; title bar in `--c3`; body in `--c4`; actions on the bottom row.
- toasts: avoid modern floating toasts; use a bottom status strip like `SAVED!` for 600ms or a small dialog box.
- badges: use bracketed text `[NEW]`, `[MAX]`, `[OK]`, `[P1]`; keep badges 8px and aligned to the grid.
- progress bars: character bars are preferred: `[####----]`; if CSS, use 4px block segments with `gap: 2px`, not smooth fills.
- health/status bars: use 2px or 4px block segments, `--c1` filled and `--c2` empty; label as `HP`, `MP`, `BAT`, or `MEM`.
- tables: avoid large data tables; if needed, use 2-3 columns, 8px type, and paginated rows like `PAGE 1/4`.
- charts: use sparkline-like pixel paths, block histograms, or 4-shade heatmaps; never anti-aliased SVG gradients.
- images: reduce to 1-bit or 4-shade dither; use ordered Bayer dither or checker patterns, not opacity.
- hover rule: hover is optional because this world is button/keyboard driven; when present, it is exactly the selected-row inversion.
- keyboard rule: arrow keys move selection one row/cell at a time; Enter activates; Escape maps to `B`/`BACK`; Space maps to `A`/`START`.
- focus ring: use `outline: 2px solid var(--c1); outline-offset: 2px;` or an active row marker; never a blue browser default.
- disabled state: use `--c2` text and keep the row in place; do not reduce opacity because alpha is outside the hardware model.
- drag state: represent dragging as a blinking outline or marching 1-bit border; avoid freeform smooth pointer motion as a primary interaction.
- loading state: use `LOADING`, `LOADING.`, `LOADING..`, `LOADING...` at 200ms steps; keep the text in one fixed-width cell.
- save state: show `SAVING...` then `SAVED!` in a status strip; optionally flash the whole LCD invert once for 100ms.
- error state: invert the active panel, show `ERR!` or `BAD INPUT`, and return to the menu; no red, no emoji, no toast stack.
- soundless feedback: imply sound visually with `BEEP!`, `CLICK`, or a tiny `*` flash; do not use literal audio controls unless the generated app needs audio.
- reduced motion: already satisfied by instant state changes; any optional blink should pause under `prefers-reduced-motion: reduce`.
- atmosphere: add a faint `repeating-linear-gradient(0deg, rgba(15,56,15,0.06) 0 1px, transparent 1px 4px)` only if it uses palette-compatible darkening; avoid alpha inside UI components.
- cartridge framing: landing pages may show a cartridge label above the LCD, but the interactive app still lives inside the four-shade display.
- mobile: treat the whole viewport as the handheld shell; keep the LCD at top, controls below, and avoid scrolling inside the LCD unless the UI is explicitly a list.
- desktop: center the handheld shell; do not stretch the LCD beyond an integer-scale feel; use empty bezel space rather than adding modern side panels.
- cursor refinement: default cursor is acceptable; interactive rows can use `cursor: pointer`, but the visible selector arrow is the real affordance.
- selection refinement: `::selection { background: var(--c1); color: var(--c4); }`; if text is inside an already inverted row, selection may swap to `background: var(--c4); color: var(--c1);`.
- editorial examples: `PRESS START`, `NEW GAME`, `CONTINUE`, `SAV.02`, `ITEM GET!`, `BAT LOW`, `LINK OK`, `PAUSE`, `GAME OVER`.
- metadata examples: `P1 000420`, `LV.07`, `HP 08/10`, `TIME 12:04`, `CART ID DMG-05`, `AREA 03`, `MEM 62%`.
- empty state examples: `NO SAVE`, `EMPTY SLOT`, `NO ITEM`, `MAP ???`, `SIGNAL ---`.
- selection guidance: choose this over `underground_terminal.crt` when the brief is handheld/game hardware rather than covert terminal hardware.
- selection guidance: choose this over `attract_mode.cab` when the interface should be tiny, muted, and portable rather than arcade-bright and cabinet-sized.
- selection guidance: choose this over `pixel_garden.bloom` when the pixel constraint is monochrome hardware, not cute illustrative pixel art.
- anti-pattern specificity: never introduce antialiasing, translucent overlays, smooth scrolling carousels, glass panels, modern icon gradients, or large responsive type.
- anti-pattern specificity: never use the bezel colors for in-LCD UI controls; the shell can be tan-gray, the screen cannot.
- anti-pattern specificity: never solve cramped layouts by shrinking below 8px; abbreviate, paginate, or create menu pages instead.

**production recipes**

- Title screen recipe: app title, tiny subtitle, `PRESS START`, one blinking selector, and a bottom copyright/status strip like `DMG-05 2026`.
- Menu recipe: 5-7 rows maximum, active `>` marker, one-line help strip at bottom, and pagination if the list exceeds the screen.
- Inventory recipe: 2-column grid of item names, selected item preview on the right or bottom, count labels like `x03`.
- Save/load recipe: `SAV.01`, `SAV.02`, `SAV.03` slots with timestamp or level code; empty slots render `EMPTY`.
- Settings recipe: rows with `< value >` selectors; no modern sliders unless rendered as block segments.
- Map recipe: 16x16 or 20x18 tile grid; player marker is a dark blinking block; undiscovered tiles are `--c2` dither.
- Battle/status recipe: top opponent panel, middle message box, bottom command menu; preserve the turn-based reading rhythm.
- Dashboard recipe: translate metrics into game stats: `HP`, `EXP`, `LV`, `MEM`, `BAT`, `SCORE`; charts become block meters.
- Login recipe: name-entry screen with 3-character or 8-character grid keyboard; confirmation row `OK / DEL / END`.
- Error dialog recipe: small centered box reading `ERR!` plus a single `OK` action; avoid explanatory paragraphs.
- Mobile recipe: bezel and controls can be vertical; keep the LCD aspect ratio and put A/B/START/SELECT below the display.
- Desktop recipe: show the full handheld device shell; keep extra viewport as desk/background, not more UI columns.
- Copy rule: every string should survive an 8-character button and 16-character title constraint; abbreviate before reducing type size.
- Pagination rule: use `1/3`, `PAGE 02`, or arrows; never infinite scroll inside the LCD.
- Icon rule: icons are 8x8 or 16x16 pixel sprites; if a sprite cannot read at 1-bit, use text.
- Touch rule: physical controls can be larger outside the LCD, but the in-screen selection remains grid-based.
- Accessibility rule: the palette is fixed, so create hierarchy with inversion, position, borders, and repeated labels; do not rely on color shade alone for status.
- Contrast rule: `--c2` text is for disabled/secondary only; primary instructions use `--c1` on `--c4` or inverted `--c4` on `--c1`.
- Texture rule: use dither to make tones, never opacity overlays; if alpha is unavoidable in generated CSS, keep it outside the LCD content.
- Border rule: outer LCD border 4px, panel border 2px, internal dividers 1-2px; never mix in thin modern hairlines.
- Motion rule: only blink, flash, or instant swap; no easing curves, no fades, no parallax, no spring motion.
- Loading copy examples: `NOW LOAD`, `PLEASE WAIT`, `READ CART`, `SAVE DATA`, `LINK...`.
- Error copy examples: `ERR!`, `BAD NAME`, `NO CART`, `SAVE FAIL`, `LINK LOST`.
- Success copy examples: `OK!`, `SAVED!`, `ITEM GET!`, `LINK OK`, `CLEAR!`.
- Anti-overlap rule: keep this distinct from general "retro" by enforcing the green LCD, tiny type, and portable device controls every time.

**implementation safeguards**

- Preserve the tiny-screen premise: every generated page should feel like it could fit on a 160x144 LCD, even when scaled up.
- Preserve four-shade logic: do not simulate depth with alpha, blur, or shadows inside the LCD; use darker/lighter palette steps and dithering.
- Use pagination early: if content needs more than 6 menu rows or 3 compact panels, create `PAGE 1/2` instead of shrinking the system.
- Use one active target: handheld menus rarely show multiple simultaneous selections; avoid multi-select unless the app explicitly needs inventory management.
- Use physical metaphors: `A`, `B`, `START`, and `SELECT` labels can guide actions; modern verbs should be translated into game verbs.
- Use abbreviations consistently: `SAV`, `CFG`, `INV`, `STAT`, `OPT`, `MEM`, `BAT`, `LV`, `EXP`.
- Use fixed-width values: scores and IDs should pad with zeros, such as `000420`, `LV.03`, `SAV.02`.
- Use one message box at a time: status, narrative, or error copy appears in the same bottom dialog area whenever possible.
- Use block carets: input carets are inverted rectangles or blinking underscores; never a thin modern text cursor inside the LCD.
- Use simple sprites: if an icon needs antialiasing to read, replace it with text.
- Use a visible focus path: the user should know what arrow keys will move next; selector arrows, inverted rows, and outlines provide that path.
- Use device shell sparingly: the bezel supports atmosphere, but it should not add extra modern navigation or unrelated content panels.
- Use scroll only as a last resort: prefer paging, save slots, tabs, and menu branches over smooth scrolling lists.
- Use instant transitions globally: if a generated framework applies default transitions, explicitly reset LCD elements with `transition: none;`.
- Use non-LCD color only for shell parts: speaker holes, labels, cartridge strip, and physical controls may use bezel tones; app content cannot.
- Use block loading indicators: progress advances by chunks, dots, or character bars; never smooth percentages sliding across a fluid track.
- Use readable contrast: `--c3` on `--c4` is weak for essential text; reserve it for panels and background shade.
- Use practical tap zones outside the LCD: physical controls can be large enough for touch while preserving the tiny visual language inside.
- Keep the genome distinct: if it becomes amber-on-black command-line, use `underground_terminal.crt`; if it becomes colorful arcade attract mode, use `attract_mode.cab`.
- Keep the constraint visible: the charm disappears if the generated UI hides the LCD grid behind modern cards, gradients, or hero typography.

**signature techniques**

- bezel shell: wrap the entire `<body>` content in a `background: #8a8a6e; border-radius: 12px; padding: 16px;` container. The bezel color is the ONE permitted out-of-palette value.
- 4px snap grid: enforce `padding`, `gap`, and `margin` values in multiples of 4. The 4px snap is the aesthetic — anything off-grid looks broken.
- dithered patterns: where a 5th tone is needed, use a 2×2 dithered checker of c2/c3 via a 4×4 SVG data-URI `background-image` — not a 50% alpha (this genome has zero alpha).
- inverted hover (c1↔c4) and the `♪` success glyph: these two micro-interactions carry the whole personality of the genome. Use them.
- "ROM title" truncation: pad metadata labels to ~16 characters with leading zeros and dots to feel like a cartridge label (`PROJECT_03.SAV`, `LV04.HP089`).
- `image-rendering: pixelated` on every `img` and `canvas` element — anti-aliasing is anti-genome. Pixel-art assets must stay crisp at any scale.
- LCD "sunken" effect via `box-shadow: inset 2px 2px 0px var(--c2)` on the main display area — the recessed reflective look of the original Game Boy screen, achieved with a hard inset shadow (no blur, since this genome forbids blur).
- save/load slot UI: literal numbered slots (`SAV.01`, `SAV.02`, `SAV.03`) — every persistent state in the UI is named like a Game Boy save slot.
