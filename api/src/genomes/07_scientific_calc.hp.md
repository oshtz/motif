---
id: "07"
name: scientific_calc.hp
keywords:
  - calculator
  - scientific
  - LCD
  - instrument
  - engineering
  - retro
  - amber
  - precision
  - HP
  - segmented
  - membrane
  - laboratory
---

### genome 07: `scientific_calc.hp`

> identity: 1970s-80s scientific calculator interface. amber segmented LCD on dark charcoal plastic. HP-41C membrane keypads, TI-59 program slots, and the obsessive precision of hewlett-packard test & measurement instruments. every pixel earns its place on the display.

**surface**
- colors: `--bg: #2a2a28; --lcd-bg: #3d3826; --amber: #e8960c; --amber-bright: #ffb833; --bezel: #1c1c1a; --keyface: #3a3a38; --keyline: #555550; --dim: #6b6552; --danger: #cc3d2e; --lcd-shadow: rgba(0,0,0,0.45);`
- typography: `"Courier New", "Courier", monospace`. `text-transform: uppercase`. `letter-spacing: 0.12em`. headings and labels: 11-13px, `font-weight: 700`. body text: 11-12px, `font-weight: 400`. numeric readouts: 16-20px, `font-weight: 700`, `letter-spacing: 0.2em` (to evoke segmented digit spacing). `line-height: 1.5`. all numerals feel like segmented LCD glyphs — monospaced, evenly tracked.
- borders: `1px solid var(--keyline)` on panels and containers. `2px solid var(--dim)` on primary display areas. `border-radius: 3px` on buttons and small elements, `border-radius: 6px` on major panels (the gentle radius of molded plastic bezels). no sharp 0px corners — injection-molded plastic always has a slight radius.
- spacing: `padding: 10px 12px`. `gap: 6px` between keys/buttons. `gap: 12px` between sections. display areas have `padding: 12px 16px`. everything aligns to a tight grid — the economy of a 2-inch LCD viewport.

**color distribution**
- 55% dark plastic background (`--bg: #2a2a28`, `--bezel: #1c1c1a`) — the chassis. the housing.
- 20% LCD panel background (`--lcd-bg: #3d3826`) — the warm dark-olive of an unlit LCD substrate.
- 15% amber (`--amber: #e8960c`, `--amber-bright: #ffb833`) — active segments, primary readouts, status indicators. this is the display. it always has a faint glow.
- 5% dim keylines and labels (`--dim: #6b6552`, `--keyline: #555550`) — secondary legends, separator rules, inactive segments.
- 5% keyface (`--keyface: #3a3a38`) — button surfaces, slightly lighter than the chassis.

**component patterns**
- buttons: membrane key style. `background: var(--keyface); border: 1px solid var(--keyline); border-radius: 3px; padding: 8px 14px; color: var(--amber); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;`. primary function keys: `background: var(--amber); color: var(--bg); font-weight: 700;`. secondary keys: standard keyface with amber text. small legend text above keys for shift-functions in `color: var(--dim); font-size: 9px;`.
- inputs: `background: var(--lcd-bg); border: 2px solid var(--dim); border-radius: 3px; color: var(--amber-bright); font-size: 14px; letter-spacing: 0.15em; padding: 8px 12px; caret-color: var(--amber-bright);`. LCD display style — dark substrate with glowing amber text. focus: `border-color: var(--amber); box-shadow: 0 0 6px rgba(232,150,12,0.25);`.
- cards/panels: `background: var(--bg); border: 1px solid var(--keyline); border-radius: 6px; padding: 12px;`. display area cards use `background: var(--lcd-bg); border: 2px solid var(--dim);` with an inset shadow: `box-shadow: inset 0 1px 4px var(--lcd-shadow);` to simulate a sunken LCD window.
- navigation: horizontal row of membrane keys. `STO  RCL  SST  BST  GTO`. active item: `background: var(--amber); color: var(--bg);`. inactive: `color: var(--dim);`.
- headers: display register format. `REG 07 | MODE: RUN | PROG: 042`. monospaced, amber on dark, `font-size: 12px; letter-spacing: 0.12em;`. right-aligned status annunciators: `SHIFT`, `PRGM`, `ALPHA`, `BAT` — small, dim when inactive, amber-bright when active.
- footers: single status line. `HP-07 SCIENTIFIC | PWR: OK | MEM: 2.3K FREE`. `font-size: 10px; color: var(--dim); letter-spacing: 0.1em; border-top: 1px solid var(--keyline); padding-top: 8px;`.
- lists: prefixed with register notation: `R00:`, `R01:`, `R02:`. or step numbers: `001`, `002`, `003`. active item highlighted with amber background. separator: `1px solid var(--keyline)`. no bullet points — always numeric or register-indexed.
- tables: `border: 1px solid var(--keyline)`. header row: `background: var(--keyface); color: var(--amber); font-weight: 700; text-transform: uppercase; font-size: 10px; letter-spacing: 0.12em;`. data cells: `color: var(--amber-bright); font-size: 12px; letter-spacing: 0.15em; font-variant-numeric: tabular-nums;`. alternating rows: odd `background: var(--bg)`, even `background: rgba(61,56,38,0.3)`. all numbers right-aligned.
- dividers: `1px solid var(--keyline)`. or a thin amber rule for section breaks: `1px solid var(--dim)`.
- modals: `background: var(--bg); border: 2px solid var(--amber); border-radius: 6px; box-shadow: 0 0 20px rgba(232,150,12,0.15);`. header format: `[ ERROR 07 ]` or `[ CONFIRM ]` in amber, centered, `letter-spacing: 0.15em`.
- badges/tags: small rectangular indicators. `background: var(--lcd-bg); border: 1px solid var(--dim); border-radius: 2px; padding: 2px 8px; font-size: 9px; letter-spacing: 0.1em; color: var(--amber); text-transform: uppercase;`. active/on badges: `background: var(--amber); color: var(--bg);`.

**interaction language**
- hover: `background` lightens one step (mix toward `--keyline`). `box-shadow: 0 0 4px rgba(232,150,12,0.15);`. subtle amber proximity glow. no layout shift.
- active/pressed: `transform: scale(0.97) translateY(1px); transition: transform 0.05s ease`. membrane depress feel. `background: var(--amber); color: var(--bg);`. keys feel like they physically sink.
- focus: `outline: 2px solid var(--amber); outline-offset: 1px;`. clean instrument-grade focus ring.
- selected: `background: var(--amber); color: var(--bg); font-weight: 700;`. the segment is "lit."
- disabled: `opacity: 0.3; color: var(--dim);`. the segment is off — like an unlit LCD character. no strikethrough.
- drag: `cursor: grab` → `cursor: grabbing`. `border: 1px dashed var(--amber);`.

**motion & feedback**
- transitions: `transition: background 0.1s ease, box-shadow 0.15s ease, transform 0.08s ease;`. fast and mechanical — calculator keys have no linger. all transitions under 150ms. layout changes are instant.
- loading: segmented display cycling animation. `CALCULATING...` with each letter appearing sequentially left-to-right, 60ms per character. or a numeric counter spinning: `0000` → `0001` → ... → target value.
- success: display briefly reads `OK` or `DONE` in amber-bright, holds 500ms, then shows result. clean, no flourish.
- error: `ERROR 07` displayed in `--danger` red. display area border flashes red once — `border-color` snaps to `--danger` for 150ms via JS class toggle, then returns. no shaking, no bouncing.

**atmosphere**
- LCD panel texture: display areas have a subtle noise overlay via `::before`:
  ```css
  content: ""; position: absolute; inset: 0; z-index: 1; pointer-events: none;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg width='4' height='4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='%23000'/%3E%3C/svg%3E");
  background-size: 4px 4px;
  ```
- ambient LCD glow: `text-shadow: 0 0 3px rgba(232,150,12,0.4)` on all amber text in display areas. numbers glow slightly more: `text-shadow: 0 0 5px rgba(232,150,12,0.5)`.
- bezel frame: outermost container has `background: var(--bezel); border-radius: 8px; padding: 16px;` simulating the dark plastic housing around the display.
- sunken LCD wells: display panels use `box-shadow: inset 0 1px 4px var(--lcd-shadow);` to create the recessed window effect of a real calculator display.
- no scanlines. no flicker. this is LCD, not CRT — the display is steady and precise.

**editorial voice**
- button labels: function key style. `ENTER`, `STO`, `RCL`, `RUN`, `HALT`, `CLEAR`, `SHIFT`, `ALPHA`, `DELETE`, `EXECUTE`. all uppercase. terse, abbreviated like real calculator keys. primary actions are single words.
- headings: register/program style, uppercase. `PROGRAM LISTING`, `STACK REGISTER`, `DATA MEMORY`, `SYSTEM STATUS`, `CONFIGURATION`. clinical, labeled like instrument panel sections.
- metadata: instrument readout format. `REG: 07`, `STEP: 042`, `MEM: 2.3K`, `MODE: RUN`, `VER: 3.1A`, `SN: HP-4107-B`. always `KEY: VALUE` pairs, uppercase keys.
- placeholders: `ENTER VALUE...`, `INPUT REG...`, `SEARCH...`, `KEY SEQUENCE...`.
- empty states: `NO DATA IN REGISTER`, `MEMORY CLEARED`, `STACK EMPTY`, `NO PROGRAM LOADED`.
- error messages: `ERROR 07: INVALID INPUT`, `ERROR 12: OUT OF RANGE`, `ERROR 03: MEMORY FULL`. numbered error codes like real HP calculators. always uppercase.
- success messages: `OK`, `DONE`, `STORED`, `EXECUTED`, `PROGRAM SAVED`. single word or two. uppercase. no punctuation except periods.

**cursor & selection**
- cursor: `default` on body. `pointer` on buttons and interactive elements. `text` on inputs and display readouts.
- text selection: `::selection { background: var(--amber); color: var(--bg); }`.

**anti-patterns — this genome NEVER:**
- uses rounded corners above 6px. no pills, no circles — this is molded plastic, not software.
- uses serif or decorative typefaces. only monospace. the display is a fixed-width character matrix.
- uses drop shadows for elevation or floating effects. depth is only expressed through inset shadows (sunken LCD wells).
- uses gradients for decorative purposes. surfaces are flat matte plastic or flat LCD substrate.
- uses lowercase in labels, headings, or button text. the segmented display only speaks in capitals.
- uses emoji, icons with rounded features, or illustrative graphics. information is numeric and alphanumeric only.
- uses color photography or full-color images. any image is `filter: grayscale(1) sepia(0.6) brightness(0.8)` — amber-shifted.
- uses text larger than 20px. the display is small and precise. hierarchy comes from brightness and tracking, not scale.
- uses playful, casual, or conversational language. the voice is that of a technical instrument — terse, precise, abbreviated.
- uses animation durations over 150ms. calculator keys are instantaneous mechanical switches, not fluid gestures.
- uses freeform illustration, lifestyle photography, or decorative device mockups. if a device frame appears, it is functional chassis framing with screws, bezels, labels, and key rows.
- uses modern SaaS components such as pill nav, floating chat bubbles, gradient cards, rounded search bars, or soft status chips.
- uses analog meter needles, VU bars, or rotating knobs as primary controls. those belong to `precision_instrument.met` or `panavision.70s`; this genome is keypad, register, and LCD-first.
- uses green CRT scanlines, terminal prompts, or command-line phosphor aesthetics. this is amber LCD substrate, not CRT glass.
- uses large hero typography that breaks the small-instrument scale. even landing pages should make the device/display large, not the text itself.
- uses ambiguous status language like `Ready`, `Warning`, or `Processing`. status must be register-like: `MODE: RUN`, `ERR 07`, `MEM: 2.3K`, `BAT: OK`.

**when to reach for this genome**

When the request is for a calculator-style tool, a unit converter, a precision instrument simulator, a numerical-input-heavy admin tool, or any UI that should feel like a piece of test-and-measurement equipment from a 1980s lab. Reach for it when the user wants tactile keypad energy and segmented-display precision rather than warm tape-deck nostalgia (that's panavision.70s).

**page archetype guidance**

- landing page: bezel-framed hero showing the "device" — a large LCD readout area with model number and key specs, surrounded by membrane key buttons; the whole thing rendered as if it's a product photo of the HP-41C.
- dashboard: each metric is an LCD register window with `REG: 07 | VALUE: 1.247e+03 | MODE: SCI` formatting; nav is a row of function-key buttons across the top; status annunciators in the corners (`SHIFT`, `PRGM`, `BAT`).
- editor: the page IS the calculator — a center LCD area showing current state, surrounded by a grid of membrane-key buttons for actions; the editor's "operations" are the keys.
- documentation: HP-manual style — numbered sections (`§ 3.2 — Program Steps`), monospace technical specs, register-table layouts with right-aligned tabular numerals.

**signature techniques**

- sunken LCD wells: display areas use `box-shadow: inset 0 1px 4px var(--lcd-shadow)` to create the recessed-window effect of a real calculator LCD set into plastic.
- amber glow on display text: `text-shadow: 0 0 3px rgba(232,150,12,0.4)` on body LCD text, increasing to `0 0 5px rgba(232,150,12,0.5)` on numerals — the faint phosphorescent glow of unlit segments.
- segmented-digit letter-spacing: numerical readouts use `letter-spacing: 0.2em` to evoke the gap between segmented LCD digits. Tabular figures (`font-variant-numeric: tabular-nums`) ensure column alignment.
- membrane-key press: `transform: scale(0.97) translateY(1px); transition: 0.05s ease` on active — the tiny mechanical "click" of a calculator key.
- HP-style numbered error codes: `ERROR 07: INVALID INPUT` — never just "Error". Real HP calculators had a fixed list of numbered errors and so does this genome.
- bezel framing: outermost container has `background: var(--bezel); border-radius: 8px; padding: 16px;` simulating the dark plastic housing around the working display.
- shift-function legend text: above primary keys, small `0.7em` dim labels indicate the alternate (shift) function — like the orange/blue lettering above HP keys.

**production expansion details**

Core CSS token set should be explicit and reusable:

```css
:root {
  --calc-shell: #242421;
  --calc-shell-edge: #111110;
  --calc-recess: #171715;
  --lcd-bg: #3d3826;
  --lcd-bg-deep: #2b271a;
  --lcd-line: #6b6552;
  --segment-off: rgba(232, 150, 12, 0.12);
  --segment-on: #ffb833;
  --keyface: #3a3a38;
  --keyface-raised: #444440;
  --key-text: #e8960c;
  --key-shift: #6b6552;
  --danger: #cc3d2e;
}
```

Production layout rules:
- Use a single centered chassis container for tool-like pages: `max-width: 980px; margin: 24px auto; background: var(--calc-shell); border-radius: 8px; padding: 18px`.
- The screen should occupy the top third of the chassis: `display: grid; grid-template-rows: auto 1fr auto; min-height: 180px`.
- Keypads should use fixed tracks, not fluid button widths: `grid-template-columns: repeat(5, minmax(52px, 1fr)); gap: 6px`.
- Dense dashboards can use multiple LCD wells, but each well needs a register label, value, and mode line.
- Sidebars should become vertical banks of function keys, not modern navigation drawers.
- On narrow screens, preserve keypad geometry with horizontal scrolling if necessary; do not collapse keys into rounded mobile list items.
- Avoid viewport-filling marketing whitespace. The page should feel like a compact physical object on a bench.

Extended component recipes:
- Stack display: four rows labeled `X`, `Y`, `Z`, `T`; active row uses `--amber-bright`, inactive rows use `--segment-off`.
- Program listing: monospaced rows with `STEP`, `KEY`, `OP`, `ARG`; current step gets amber fill and charcoal text.
- Annunciator strip: `SHIFT`, `PRGM`, `ALPHA`, `RAD`, `BAT`, `BUSY`; each is a 9px uppercase label with `opacity: 0.28` when off and `color: var(--amber-bright)` when on.
- Numeric keypad: digits use slightly larger text (`12px`) than operation keys (`10px`), but all remain monospaced and uppercase.
- Function-key legends: place secondary function text above the key in `--dim`, `font-size: 8px`, `letter-spacing: 0.08em`; never use tooltips for the primary alternate function.
- Toggle groups: render as mutually exclusive membrane keys; selected key is amber-filled. no sliders.
- Search/filter fields: styled as LCD command lines with label prefix `FIND:` and placeholder `ENTER QUERY...`.
- Toasts: avoid floating modern toasts. use the display status line or a narrow LCD message well at the top.
- Charts: use amber segmented bars, register tables, or right-aligned numbers. no smooth area charts, gradients, or colorful multi-series legends.
- Icons: if unavoidable, use ASCII-like text (`+`, `-`, `x`, `/`, `SIG`, `MEM`) rather than pictographic icon sets.

State rules:
- `SHIFT` is a first-class state. When active, alternate legends brighten and primary key labels dim by one step.
- `PRGM` mode changes the display from result readout to step listing; key presses append program rows rather than executing immediately.
- `ALPHA` mode allows text entry but still forces uppercase and fixed-width spacing.
- `BUSY` state disables all non-cancel keys, shows `BUSY` in the annunciator strip, and cycles a small amber segment block.
- `BAT` warning never uses a toast. It lights the `BAT` annunciator and may show `LOW BAT` in the footer.
- Validation errors stay inside the LCD well: `ERROR 07` headline, one diagnostic line, and a function-key prompt such as `CLR TO CONT`.
- Selected table rows should invert amber/charcoal, but numeric alignment and register labels must remain stable.
- Disabled keys remain visible as unlit hardware; use `opacity: 0.3` rather than hiding.

Motion and feedback refinements:
- Key press feedback is the only transform: `translateY(1px) scale(0.97)` for 50ms.
- Display text swaps instantly or character-writes at 60ms per character. no fade transitions.
- Error flash is one pulse only: red border for 150ms, then back to amber/dim. repeated flashing feels like arcade UI and should be avoided.
- Loading can use `SEG 00`, `SEG 01`, `SEG 02` cycling, or a small 7-segment block stepping left-to-right.
- Success holds for exactly 500ms before returning to value display, unless the screen is a confirmation page.
- Any continuous animation should be absent; a calculator display is steady.

Atmosphere details:
- Add tiny screw heads only at the chassis corners: 6px circles with inset shadow, `background: var(--calc-shell-edge)`.
- Add molded seams as `1px solid rgba(255,255,255,0.04)` between keyboard zones.
- Use a shallow inset around key banks: `box-shadow: inset 0 1px 3px rgba(0,0,0,0.55)`.
- LCD wells may include inactive segment ghosts with `--segment-off`; this is better than generic opacity.
- If images are required, crop them into the LCD display and amber-filter them so they read like diagnostic captures.
- Keep all ambient light local to text glow. The page background itself should not glow.

Editorial examples for generated UIs:
- Unit converter: `UNIT MODE | IN: M/S | OUT: KPH`, buttons `CONV`, `INV`, `SCI`, `FIX`.
- Finance calculator: `PV`, `FV`, `PMT`, `I/YR`, `N`, status `AMORT: 012`.
- Engineering dashboard: `REG 04: TEMP`, `VALUE: 23.842`, `TOL: +/-0.002`.
- Program editor: `042  XEQ  "CAL"`, `043  STO  07`, `044  RCL  03`.
- Empty state: `NO VALUE STORED IN R07`.
- Confirmation: `STORED R07` or `PROGRAM 02 SAVED`.
- Severe error: `ERROR 12: OUT OF RANGE | CLR TO CONT`.

Cursor and selection refinements:
- Key grid cursor is always `pointer`; screen readouts are `text` only when copyable.
- Dragging program rows uses `grab`/`grabbing` and a dashed amber outline; do not animate row reordering beyond the immediate position swap.
- Hovering an LCD readout should not imply it is clickable unless it is a copy target.
- `::selection` inside the LCD uses amber fill and charcoal text; outside the LCD it can use dim amber to avoid overpowering key labels.
- Focus rings should sit just outside the key or LCD well; never draw focus inside a segmented value where it can obscure digits.

Nearby genome boundaries:
- Use `panavision.70s` for warm analog media equipment with squircle toggles, soft glow, and proportional sans type. Use this genome when the interface is an actual calculator or keypad-driven instrument.
- Use `precision_instrument.met` for machined metal chassis, dials, LEDs, and oscilloscope-like waveform hardware. Use this genome for membrane keys, LCD registers, and HP/TI calculator logic.
- Use `lab_manual.80s` when the output should feel like printed technical documentation. Use this genome when the UI should feel like the device itself.
- Use `phosphor_telemetry.amb` or `underground_terminal.crt` for CRT scanlines and terminal command surfaces. This genome forbids CRT behavior and keeps LCD steady.
- Use `biosequence_lab.gen` for green lab panels and organism telemetry. This genome is numeric, amber, and hardware constrained.

Quality bar for generated screens:
- At least one visible LCD well with amber register text.
- At least one fixed-grid membrane key bank or register table.
- At least one annunciator/status strip using uppercase technical codes.
- No border radius above 8px anywhere in the device frame.
- No serif/sans mix, no friendly copy, no freeform illustration.
- Every visible number uses tabular alignment and a unit, register, or mode label.
