---
id: "74"
name: sonar_array.sub
keywords:
  - submarine
  - sonar
  - underwater
  - naval
  - tactical
  - phosphor
  - sweep
  - hydrophone
  - torpedo
  - depth
  - periscope
  - cold war
  - hunt
  - contact
---

### genome 74: `sonar_array.sub`

> identity: Cold War attack submarine sonar room: AN/BQQ-5 hydrophone arrays, green phosphor PPI scopes, acoustic waterfall spectrograms, bearing-time recorders, tactical contact plots, frequency analyzers, and claustrophobic console density. Operators listen in red-black darkness for faint tonals in ocean noise while every display asks whether a contact is a whale, a merchant, an attack boat, or a torpedo.

---

**surface**

The surface is a sonar shack below the waterline.

It is dark, cramped, quiet, and tense.

Every interface object should feel like an instrument panel, phosphor display, tactical tracker, acoustic analyzer, or submarine console.

Nothing should feel like a consumer dashboard.

Nothing should feel decorative.

The UI is emitted light inside near-total black.

Primary palette:

- `--hull-black: #0A0E0A` for the submarine interior, page background, console wells, dead display space, and operational darkness.
- `--black-green: #020702` for the deepest CRT glass, off-state scopes, and recessed cavities.
- `--dim-phosphor: #0D1F0D` for inactive display wells, low-energy traces, muted panels, and old screen persistence.
- `--trace-green: #1A3D2A` for panel borders, grid lines, inactive traces, rack seams, and dim screen markings.
- `--phosphor-green: #00CC66` for active sweep lines, primary data, locked tracks, instrument labels, and readout highlights.
- `--hot-phosphor: #7CFFB2` for the brightest contact blips, sweep core, current cursor, and just-detected data.
- `--bearing-cyan: #00AACC` for bearing, range rings, depth markers, frequency bands, and tactical coordinate data.
- `--deep-cyan: #0A5261` for secondary bearing data, water-column overlays, and inactive range values.
- `--caution-amber: #CCAA00` for unknown contacts, degraded array status, possible biologic, and advisory states.
- `--threat-red: #CC2200` for hostile classification, torpedo warnings, weapon alerts, and system faults.
- `--red-light: #4A0906` for rare control-room red wash, alert panels, and emergency status strips.
- `--screen-noise: rgba(0, 204, 102, 0.04)` for CRT noise, phosphor dust, and trace persistence.

Color is light emission.

Green is the base of the world.

Cyan is measurement.

Amber is uncertainty.

Red is danger.

Black is the ocean and the hull.

Typography:

- Primary type: `"JetBrains Mono", "SF Mono", "Courier New", monospace`.
- Body size: `11px` to `14px`.
- Body weight: `400` or `500`.
- Body line-height: `1.35` to `1.45`.
- Tactical labels: monospace `10px` to `12px`, uppercase, `font-weight: 600`, `letter-spacing: 0.08em`.
- Instrument readouts: monospace `18px` to `28px`, `font-weight: 700`, `letter-spacing: 0.08em`.
- Large bearing values: `28px` to `44px`, monospace, tabular, uppercase units.
- Event log text: monospace `11px`, uppercase, `line-height: 1.3`.

Use monospace only.

Every numeral should align.

Every designation should scan quickly.

No proportional fonts.

No display fonts.

No serif fonts.

Borders:

- Standard panel border: `2px solid var(--trace-green)`.
- Dim panel border: `1px solid rgba(26, 61, 42, 0.55)`.
- Active panel border: `2px solid var(--phosphor-green)`.
- Caution border: `2px solid var(--caution-amber)`.
- Threat border: `2px solid var(--threat-red)`.
- Circular scope border: `2px solid var(--trace-green); border-radius: 50%`.
- Rectangular panel radius: `4px` to `6px`.
- Hard instrument rack corner: `0px` to `2px`.
- Recessed panel: `box-shadow: inset 0 2px 6px rgba(0,0,0,0.65), inset 0 0 0 1px rgba(26,61,42,0.4)`.

Spacing:

- Page shell padding: `8px` to `12px`.
- Panel padding: `6px` to `10px`.
- Internal row padding: `4px 6px`.
- Grid gap: `4px` to `8px`.
- Major instrument gap: max `8px`.
- Scope label offset: `4px`.
- Status bar height: `24px` to `32px`.

The layout is extremely dense.

Every pixel can hold a trace, readout, range ring, bearing, contact, signal band, or command.

The pressure hull is narrow.

The interface must feel physically constrained.

---

**color distribution**

58% hull-black and black-green.

The page, racks, dead screen space, console cavities, and background are almost entirely black-green.

14% dim-phosphor and trace-green.

Borders, grid lines, inactive traces, historical echoes, panel separators, and screen graticules use muted green.

12% phosphor-green and hot-phosphor.

Current sweep, active tracks, primary text, contact designation, confirmed states, and readout highlights use bright green.

7% bearing-cyan and deep-cyan.

Bearing values, range rings, coordinate markers, frequency labels, depth lines, and tactical geometry use cyan.

4% caution-amber.

Unknown contacts, biologic classifications, degraded sensor states, and advisory messages use amber.

3% threat-red and red-light.

Torpedo alerts, hostile contacts, weapon danger, system faults, and emergency strips use red.

2% screen-noise and glow.

Phosphor persistence, low opacity scan lines, and screen dust texture are subtle.

The palette must feel like green light in a dark metal room, not a neon brand system.

---

**component patterns**

PPI sonar scope:

- Signature element.
- Circular shell: `width: 220px` to `420px`; `aspect-ratio: 1`; `border-radius: 50%`; `background: radial-gradient(circle, var(--dim-phosphor) 0%, var(--black-green) 72%, var(--hull-black) 100%)`.
- Border: `2px solid var(--trace-green)`.
- Inner glow: `box-shadow: inset 0 0 24px rgba(0,204,102,0.05), 0 0 12px rgba(0,204,102,0.08)`.
- Range rings: concentric circles in `rgba(0,204,102,0.16)`.
- Crosshair: horizontal and vertical lines in muted trace-green.
- Sweep line: bright green radial line with trailing wedge at low opacity.
- Contact blip: `4px` to `7px` dot or small square.
- Friendly/held: green.
- Unknown: amber.
- Hostile/weapon: red.
- Bearing label: cyan text on outer edge.
- Center mark: small green cross.

Waterfall spectrogram:

- Signature element.
- Shell: `background: var(--black-green); border: 2px solid var(--trace-green); border-radius: 4px; overflow: hidden`.
- Horizontal axis: frequency, cyan labels.
- Vertical axis: time, dim green labels.
- Bright tonal lines: phosphor-green or hot-phosphor.
- Background bands: low-opacity green blocks.
- New data enters at top and scrolls downward.
- Annotated tonal: small cyan bracket with designation.
- Threat tonal: red bracket and red event row.

Bearing-time recorder:

- Rectangular grid with bearing on x-axis and time on y-axis.
- Grid lines: muted trace-green.
- Contact line: phosphor-green diagonal trace.
- Possible solution line: cyan.
- Uncertain/biologic: amber.
- Torpedo track: red, heavier stroke.
- Axis labels are monospace `10px`.
- The display should look like a tactical plotter, not a stock chart.

Contact tracker:

- Row layout: designation, class, bearing, range, CPA, source, status.
- Example designation: `SIERRA-7`, `MASTER-14`, `GOBLIN-02`.
- Row: `padding: 4px 6px; border-bottom: 1px solid rgba(26,61,42,0.35)`.
- Active track: `background: rgba(0,204,102,0.06); border-left: 2px solid var(--phosphor-green)`.
- Unknown track: amber text or amber left edge.
- Hostile track: red left edge and red classification badge.
- Numeric columns right aligned.

Buttons:

- Console switch: `background: var(--dim-phosphor); color: var(--phosphor-green); border: 2px solid var(--trace-green); border-radius: 4px; font-family: "JetBrains Mono"; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; font-size: 11px; padding: 6px 14px`.
- Inset shadow: `box-shadow: inset 0 1px 4px rgba(0,0,0,0.45)`.
- Active: green fill with hull-black text.
- Armed: amber border and amber text.
- Alert: red fill with white or black-green text.
- Disabled: opacity `0.2`, no pointer.
- Labels: `TRACK`, `DESIGNATE`, `CLASSIFY`, `REPLAY`, `MARK`, `DROP`.

Inputs:

- Sonar entry field: `background: var(--hull-black); border: 2px solid var(--trace-green); border-radius: 4px; color: var(--phosphor-green); font-family: "JetBrains Mono"; font-size: 12px; padding: 6px 10px; letter-spacing: 0.04em`.
- Focus: `border-color: var(--phosphor-green); box-shadow: 0 0 8px rgba(0,204,102,0.2)`.
- Placeholder: `color: rgba(0,204,102,0.32)`.
- Caret: phosphor-green.
- Invalid designation: red border and `DESIGNATION ERROR`.
- Bearing input uses fixed format: `BRG 247`.
- Range input uses fixed format: `3200 YDS`.

Cards and panels:

- Base panel: `background: var(--dim-phosphor); border: 2px solid var(--trace-green); border-radius: 6px; padding: 8px`.
- Recessed panel: inset shadow and darker fill.
- Label header: uppercase `10px`, letter-spacing `0.1em`, `color: var(--trace-green)`, bottom rule.
- Value readout: large monospace, bright green or cyan.
- Important panel: brighter border and tiny corner screws or rack marks.
- Never use airy card spacing.

Navigation:

- Sonar mode selector.
- Layout: horizontal or vertical row of console buttons.
- Modes: `PASSIVE`, `ACTIVE`, `INTERCEPT`, `TRACK`, `REPLAY`, `ARRAY`, `CLASS`.
- Active mode: green fill.
- Standby mode: dim green text.
- Caution mode: amber.
- Threat mode: red.
- No friendly tabs.
- No top marketing nav.

Headers:

- Console top bar: `background: var(--hull-black); border-bottom: 2px solid var(--trace-green); padding: 6px 10px`.
- System label: uppercase monospace, phosphor-green.
- Status group: depth, heading, speed, mode, array state.
- Alert indicator shapes: green circle, amber triangle, red square.
- Header height stays compact.

Footers:

- Status/comms line: `background: var(--hull-black); border-top: 2px solid var(--trace-green); padding: 6px 10px`.
- Text: monospace `10px`, uppercase, dim green.
- Include depth, heading, speed, array status, time, and last contact.
- Footer is a tactical readout, not legal links.

Lists:

- Contact and event lists are dense.
- No bullets.
- Rows separated by faint trace-green.
- Each row starts with a designation or event code.
- Use double slashes for metadata separation.
- Example: `03:47:22Z // NEW CONTACT // BRG 247 // SIERRA-7`.

Tables:

- Tactical data table: `border-collapse: collapse; width: 100%; background: var(--black-green)`.
- Header: uppercase monospace `10px`, trace-green, bottom border `2px solid var(--trace-green)`.
- Body: monospace `11px` to `12px`, `padding: 4px 8px`.
- Row border: `1px solid rgba(26,61,42,0.25)`.
- Bearing/range values: cyan.
- Contact names: green.
- Unknown: amber.
- Hostile: red.
- Keep rows tight.

Dividers:

- Major divider: `2px solid var(--trace-green)`.
- Minor divider: `1px solid rgba(26,61,42,0.4)`.
- Scope dividers are range rings and crosshairs.
- Do not use decorative dividers unrelated to instrumentation.

Modals:

- Tactical alert overlay: `background: var(--hull-black); border: 2px solid var(--caution-amber)` or red/green by severity.
- Shadow: `0 0 24px` in severity color at low opacity.
- Title: uppercase severity designation.
- Body: terse contact data and required action.
- Backdrop: nearly black with no blur.
- Alert modal should feel like a console interruption, not a web dialog.

Badges:

- Classification badge: monospace `10px`, uppercase, `font-weight: 700`, `letter-spacing: 0.06em`, `padding: 2px 6px`, `border-radius: 2px`.
- `SUBSURFACE`: green.
- `SURFACE`: cyan.
- `BIOLOGIC`: amber.
- `UNKNOWN`: amber.
- `HOSTILE`: red.
- `WEAPON`: red fill.
- `HOLD`: dim green outline.

Periscope or tactical plot inset:

- Only if the prompt needs visual contact context.
- Keep it dark, green, and instrument-like.
- Use crosshair overlays and bearing ticks.
- Do not introduce photographic hero imagery.

---

**interaction language**

Hover:

- Hover brightens a dim phosphor state.
- Panel hover: `background: rgba(0,204,102,0.05)`.
- Button hover: border changes from trace-green to phosphor-green.
- Track row hover: faint green fill and brighter designation.
- Scope hover: crosshair cursor and cyan bearing readout.
- Transition: `0.15s ease`.
- No scale.
- No lift.

Active:

- Active control is filled phosphor-green with black-green text.
- Active track gets green left edge and brighter designation.
- Active warning gets red or amber fill.
- Active scope mode shows label in the top corner.
- Do not animate active controls theatrically.

Focus:

- Focus ring: `outline: 1px solid var(--phosphor-green); outline-offset: 2px`.
- On green fill, use black-green or cyan outline.
- On red alert, use hot-phosphor or white outline.
- Focus must be visible in dark rooms.

Selected:

- Selected track: green border or green left edge.
- Selected bearing: cyan bracket.
- Selected contact on scope: small square reticle.
- Selected unknown: amber reticle.
- Selected hostile: red reticle plus text label.
- Selection must preserve the contact data.

Disabled:

- Disabled equipment looks off, not hidden.
- Opacity `0.15` to `0.25`.
- Border remains trace-green but dim.
- Text reads `OFFLINE`, `NO RETURN`, `ARRAY DEGRADED`, or `STANDBY`.
- Do not remove inactive systems from the layout.

Drag:

- Drag is rare and tactical.
- Used only for plot extents, contact reassignment, or time-window selection.
- Drag source: cyan dashed outline.
- Drop target: cyan wash.
- No tilt.
- No shadow-lift polish.
- No card ghost animation.

Alert acknowledgement:

- Amber unknown can be acknowledged to dim amber.
- Red threat remains red until cleared.
- Acknowledged state must log a row.
- Use text such as `ACK CONN` or `HELD`.

---

**motion & feedback**

Motion is functional instrumentation.

It is slow where the ocean is slow and immediate where command is immediate.

PPI sweep:

- Signature motion.
- `@keyframes sweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`.
- Rotation period: `4s` to `6s`.
- Sweep line is bright green.
- Trailing wedge uses low-opacity phosphor.
- Old contacts fade with persistence.

Waterfall cascade:

- New data enters from top.
- Scroll cycle: `8s` to `12s`.
- Bright tonals persist as vertical lines.
- Do not make the waterfall decorative; it represents acoustic energy.

Contact blink:

- New contact: `1.5s` blink between opacity `1` and `0.3`.
- Classified contact becomes steady.
- Unknown can blink amber slowly.
- Threat blinks red rapidly at `0.5s`.

Transitions:

- Button and row state: `0.1s` to `0.2s ease`.
- Scope data: linear or step-like.
- No spring physics.
- No page fade choreography.

Loading:

- Mini PPI sweep.
- Cycling phosphor dots.
- Text: `LISTENING`, `ARRAY CALIBRATING`, `SIGNAL PROCESSING`.
- No spinner.
- No skeleton cards.

Success:

- Green message: `CONTACT CLASSIFIED`, `TRACK ESTABLISHED`, `SOLUTION READY`, `DESIGNATION CONFIRMED`.
- Holds for `2s`, then dims into the log.
- No celebration.

Caution:

- Amber text and border.
- Slow blink, `2s` cycle.
- Messages: `ARRAY DEGRADED`, `UNCERTAIN CLASS`, `BIOLOGIC POSSIBLE`, `CHECK BEARING`.

Threat:

- Red rapid blink, `0.5s` cycle.
- Messages: `TORPEDO IN THE WATER`, `HOSTILE CONTACT`, `WEAPON BEARING 185`.
- Pair blink with text and position.
- Do not rely on color alone.

Error:

- Red triple flash, then steady.
- Messages: `SYSTEM FAULT`, `SIGNAL LOST`, `INVALID DESIGNATION`, `ARRAY FAULT`.
- No shake.
- No friendly retry copy.

Page enter:

- Instruments power up from black.
- Phosphor traces fade in.
- Sweep begins.
- Waterfall starts cascading.
- Initialization total: `0.5s` to `1s`.
- The room should feel like stations coming online at battle stations.

---

**atmosphere**

The atmosphere is near-total darkness inside a submarine.

No windows.

No daylight.

No comfort.

Only instrument light, hull metal, ocean pressure, and acoustic uncertainty.

Primary background:

- `background: var(--hull-black)`.
- Optional CRT noise overlay at `opacity: 0.03`.
- Optional scan-line pattern at very low opacity.
- No bright panels.
- No white backgrounds.

Room artifacts:

- Circular sonar scopes.
- Range rings.
- Rotating sweep lines.
- Waterfall analyzers.
- Bearing-time displays.
- Contact trackers.
- Frequency tables.
- Tactical status bars.
- Submarine comms log.
- Array health indicators.

Composition:

- Dense wall of instruments.
- One large PPI scope can dominate.
- Supporting panels wrap around it.
- Status bars at top and bottom.
- Contact table close to the scope.
- Waterfall beside or below the scope.
- No empty hero zones.

Texture:

- Phosphor glow, extremely subtle.
- Screen persistence.
- Low opacity screen dust.
- Recessed panel shadows.
- Rack seams.
- No decorative ocean waves.
- No submarine illustration.

Mood:

- Claustrophobic.
- Procedural.
- Patient.
- High consequence.
- Tense without being cinematic.

The output should feel like an operator can listen, classify, and report, not like a generic sci-fi command screen.

---

**editorial voice**

The voice is submarine tactical shorthand.

It is terse.

It is uppercase.

It is double-slash delimited.

It is built for command relay under stress.

Button labels:

- `TRACK`
- `DESIGNATE`
- `DROP`
- `MARK ON TOP`
- `CLASSIFY`
- `ALERT CONN`
- `SECURE`
- `INITIATE`
- `REPLAY`
- `EXPAND`
- `HOLD`
- `VERIFY`

Headings:

- `BROADBAND DISPLAY`
- `NARROWBAND ANALYZER`
- `CONTACT EVALUATION PLOT`
- `BEARING-TIME RECORDER`
- `TACTICAL SUMMARY`
- `ACOUSTIC INTERCEPT`
- `ARRAY STATUS`
- `FREQUENCY ANALYSIS`
- `CONTACT LOG`

Metadata:

- `CONTACT SIERRA-7 // BRG 247 // CPA 3200 YDS`
- `DESIGNATE: MASTER 14`
- `DEPTH: 400 FT // SPEED: 8 KTS // HEADING: 274`
- `FREQ: 127.4 HZ // SNR: +12 DB`
- `TIME: 03:47:22Z`
- `ARRAY: PASSIVE // SECTOR: AFT`
- `SOLUTION: HOLDING`

Placeholders:

- `AWAITING CONTACT`
- `NO TRACK DATA`
- `ENTER DESIGNATION`
- `BRG ___`
- `RANGE ___ YDS`
- `CLASS UNKNOWN`

Empty states:

- `ALL SECTORS CLEAR`
- `NO CONTACTS HELD`
- `PASSIVE SEARCH // STANDING BY`
- `NO TONAL DETECTED`
- `ARRAY QUIET`

Error text:

- `ARRAY FAULT`
- `SIGNAL LOST`
- `DESIGNATION ERROR`
- `CHECK BEARING`
- `TRACK LOST`
- `INVALID SOLUTION`

Success text:

- `CONTACT CLASSIFIED`
- `TRACK ESTABLISHED`
- `SOLUTION READY`
- `DESIGNATION CONFIRMED`
- `BEARING HELD`
- `CONTACT MARKED`

Comms phrases:

- `CONN: SONAR // NEW CONTACT`
- `SONAR: CONN // REDESIGNATE SIERRA-7 AS MASTER 14`
- `CONN: SONAR // TORPEDO IN THE WATER // BEARING 185`
- `HELM: MAKE YOUR DEPTH 400 FT`
- `SONAR: LOST CONTACT // LAST BEARING 247`

Writing rules:

- Use uppercase for operational text.
- Use double slashes as separators.
- Use tactical designations.
- Use units.
- Avoid pleasantries.
- Avoid jokes.
- Avoid consumer wording.
- Every word is a contact, state, command, or measurement.

---

**cursor & selection**

Global cursor: `default`.

PPI scopes: `crosshair`.

Tactical plots: `crosshair`.

Buttons and rows: `pointer`.

Inputs: `text`.

Timeline or waterfall scrubbers: `ns-resize` or `ew-resize` depending on axis.

Disabled equipment: `default`.

Do not use custom cursors.

Do not use novelty submarine or crosshair images.

Selection:

```css
::selection {
  background: var(--phosphor-green);
  color: var(--hull-black);
}
```

Selected contacts use reticles, brackets, or left-edge track markers.

Selected bearing values use cyan.

Selected threats use red plus label and shape.

Selected unknowns use amber plus label and shape.

Scope selections should remain square or reticle-based, never pill-shaped.

---

**when to reach for this genome**

Use `sonar_array.sub` when the prompt asks for submarine systems, sonar, underwater tracking, hydrophones, naval tactical displays, torpedo alerts, contact classification, acoustic analysis, passive search, active ping, bearing-time records, waterfall spectrograms, Cold War control rooms, periscope-adjacent systems, or high-pressure underwater operations.

Use it when the interface should feel dark, claustrophobic, instrument-dense, phosphor-lit, procedural, and tactical.

Use it for products where users identify signals, hold contacts, classify tracks, monitor arrays, inspect frequency traces, or coordinate tactical action.

Use it for non-naval products only when the sonar metaphor is genuinely useful: signal intelligence, anomaly detection, audio forensics, underwater robotics, industrial acoustic monitoring, seismic trace review, or threat tracking in a low-light command environment.

Use it when the main experience can be a scope, waterfall, tactical table, and event log rather than a standard content page.

Do not choose it merely because the user asks for "dark mode".

For surveillance camera grids, prefer `surveillance_grid.cctv`.

For aviation instruments, prefer `flight_deck.pfd`.

For weather radar and formal warnings, prefer `weather_bureau.wx`.

For hacker terminals, prefer a terminal or kernel genome.

This genome is strongest when the output can be black-green, data-dense, contact-driven, slow-scanning, and operationally severe.

---

**anti-patterns - this genome NEVER:**

1. never uses serif, proportional sans, decorative, or display type. sonar consoles use monospace for scanability and alignment.
2. never uses white, cream, paper, or light app backgrounds. the base is dark hull interior and CRT glass.
3. never uses generous whitespace, airy cards, large marketing hero regions, or spacious SaaS dashboards.
4. never uses bright color families outside phosphor green, cyan, amber, and red as emitted instrument light.
5. never uses playful, casual, emotional, or conversational copy. the voice is tactical shorthand.
6. never uses decorative gradients. gradients are allowed only for PPI scope depth or acoustic intensity displays.
7. never uses rounded consumer patterns such as pill buttons, chat bubbles, soft cards, or friendly badges.
8. never uses animation that is not instrumentation: sweep, waterfall, contact blink, signal trace, or alert flash.
9. never uses ocean-wave decoration, submarine illustrations, bubbles, cute icons, or nautical clip art.
10. never hides units, bearings, designations, classifications, or timestamps for visual simplicity.
11. never relies on color alone for threat states; red alerts also need labels, blink rate, border, or position.
12. never turns the interface into generic sci-fi neon. It must stay like practical submarine equipment under pressure.
