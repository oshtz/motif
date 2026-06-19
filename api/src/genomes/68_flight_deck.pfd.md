---
id: "68"
name: flight_deck.pfd
keywords:
  - aviation
  - cockpit
  - flight
  - aircraft
  - pilot
  - instrument
  - avionics
  - altitude
  - heading
  - navigation
  - glass cockpit
  - HUD
---

### genome 68: `flight_deck.pfd`

> identity: modern aircraft glass-cockpit avionics: Boeing 787 and Airbus A350 primary flight displays, Garmin G1000 general aviation panels, Collins Pro Line Fusion, Honeywell Primus Epic, mode-control panels, magenta flight directors, green route confirmation, white altitude and speed tapes, cyan sky, brown ground, and hard procedural clarity. Every element is an instrument, annunciator, tape, waypoint, checklist, or flight-management control.

---

**surface**

The surface is an avionics display.

It is not a decorative aviation moodboard.

It is not a travel brand.

It is not a pilot lifestyle site.

It is the screen the operator trusts while moving fast, checking constraints, confirming modes, and scanning values at a glance.

Primary palette:

- `--instrument-black: #0D0D12` for the cockpit display background, primary panel surfaces, dead zones, modal shells, and instrument bezels.
- `--panel-black: #171821` for secondary instrument wells, side panels, tapes, controls, and recessed avionics surfaces.
- `--tape-gray: #2A2A35` for altitude and airspeed tape backgrounds, inactive tables, value wells, and disabled selectors.
- `--sky-cyan: #00B8D4` for the positive sky half of attitude displays, informational route lines, horizon sky, and low-priority system status.
- `--ground-brown: #6D4C2A` for the ground half of attitude displays only, terrain references, and synthetic-vision ground planes.
- `--horizon-white: #FFFFFF` for horizon line, primary text, numeric values, selected outlines, tick marks, and essential labels.
- `--soft-white: #C8D0D8` for secondary labels, dimmed readouts, scale markings, and inactive text.
- `--path-magenta: #FF00FF` for active flight director, selected route, armed path, managed mode, and current selection.
- `--waypoint-green: #00E676` for active waypoint, confirmed value, navigation fix, execute-ready state, and success.
- `--caution-amber: #FFB300` for caution, advisory, unresolved issue, constraint warning, and abnormal but not immediate danger.
- `--warning-red: #FF1744` for warning, exceeded limit, invalid critical state, and immediate action.
- `--radar-blue: #3EA7FF` for optional weather, traffic, map range rings, and informational overlays.

Color is standardized and meaning-bearing.

Magenta means selected path or managed guidance.

Green means active, confirmed, valid, or navigation.

Amber means caution or advisory.

Red means warning.

Cyan and brown belong primarily to the attitude or synthetic-vision field.

Typography:

- Instrument values: `"JetBrains Mono", "SF Mono", "Roboto Mono", monospace`.
- Value weight: `600` or `700`.
- Value size: `20px` to `36px`.
- Value line-height: `1`.
- Value numerals: tabular.
- Labels: `"Inter", "Roboto", "Helvetica Neue", Arial, sans-serif`.
- Label size: `10px` to `12px`.
- Label weight: `600`.
- Label transform: uppercase.
- Label letter-spacing: `0.06em` to `0.1em`.
- Body notes: Inter `13px` to `15px`, `line-height: 1.45`.
- Header labels: Inter `700`, uppercase, `14px` to `18px`.
- Scratchpad and FMC text: JetBrains Mono `13px`, uppercase when command-like.

No decorative type.

No serif type.

No thin display type.

No handwriting.

Every glyph is chosen for cockpit legibility.

Borders:

- Standard panel border: `1px solid rgba(255, 255, 255, 0.18)`.
- Active value border: `2px solid var(--horizon-white)`.
- Selected mode border: `2px solid var(--path-magenta)`.
- Confirmed value border: `2px solid var(--waypoint-green)`.
- Caution border: `2px solid var(--caution-amber)`.
- Warning border: `2px solid var(--warning-red)`.
- Instrument bezel: `2px solid rgba(255, 255, 255, 0.12)`.
- Radius: `2px` to `4px`, never higher.
- Inset line: `box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.55)`.

Spacing:

- Instrument panel padding: `8px` to `16px`.
- Dense control spacing: `4px` to `8px`.
- Tape tick spacing: regular and tightly measured.
- Major panel gap: `8px` to `12px`.
- Header gap: `6px`.
- Alert padding: `10px` to `14px`.
- Full cockpit screen should use nearly all available space.

The layout is dense but never chaotic.

Every value has a stable box.

Every mode has a predictable place.

Nothing shifts around as values change.

---

**color distribution**

54% instrument-black and panel-black.

The cockpit display, control zones, modal shells, readout wells, and background stay nearly black.

14% horizon-white and soft-white.

Primary values, scale markings, tick labels, horizons, borders, and essential copy stay white or pale gray.

10% tape-gray.

Airspeed tapes, altitude tapes, side rails, inactive panels, tables, and readout wells use dark gray.

8% sky-cyan and ground-brown.

The attitude indicator, synthetic vision, and horizon reference fields carry cyan sky and brown ground.

5% path-magenta.

Selected route, flight director, active mode, course pointer, and selected objects use magenta.

4% waypoint-green.

Active waypoint, valid entry, confirmation, navigation targets, and success states use green.

3% caution-amber.

Advisories, cautions, unresolved constraints, stale values, and abnormal non-critical states use amber.

2% warning-red and radar-blue.

Red is rare and severe.

Blue is optional for weather, map, range, and informational overlays.

The page should read as a black cockpit display with precise colored meaning, not as a neon dashboard.

---

**component patterns**

Primary flight display:

- PFD shell: `background: var(--instrument-black); border: 2px solid rgba(255,255,255,0.12); border-radius: 4px; position: relative; overflow: hidden`.
- Central attitude region: cyan upper half and brown lower half divided by a white horizon line.
- Horizon line: `2px solid var(--horizon-white)`.
- Pitch ladder: white ticks and numerals, centered and symmetric.
- Flight director: magenta crossbar or V-bars.
- Aircraft symbol: fixed white reference mark at center.
- Bank scale: white arc at top with triangular pointer.
- Lower status strip: mode, heading, and altitude reference.

Airspeed tape:

- Vertical tape on the left edge.
- Shell: `background: var(--tape-gray); border: 1px solid rgba(255,255,255,0.18); width: 72px`.
- Tick marks: white horizontal rules.
- Current speed box: `background: var(--instrument-black); border: 2px solid var(--horizon-white); color: var(--horizon-white); font-family: "JetBrains Mono"; font-size: 22px; font-weight: 700`.
- Speed trend: cyan or green vertical bar.
- Low-speed caution range: amber marks.
- Overspeed range: red marks.

Altitude tape:

- Vertical tape on the right edge.
- Same structure as airspeed tape.
- Current altitude box: white border, black fill, large monospace value.
- Selected altitude bug: magenta marker.
- Constraint altitude: amber marker.
- Altitude trend: green or cyan vertical bar.

Heading tape:

- Horizontal compass strip along the bottom.
- Base: `background: var(--panel-black); border-top: 1px solid rgba(255,255,255,0.18)`.
- Values: monospace or Inter uppercase, `12px`, white.
- Current heading: centered white triangle.
- Selected heading: magenta bug.
- Active waypoint bearing: green marker.
- Track difference can be shown as small magenta offset.

Mode annunciator:

- Top row, always visible.
- Columns: autothrottle, lateral mode, vertical mode, approach status, armed status.
- Active modes: green text.
- Armed modes: white or magenta text depending on system.
- Caution modes: amber text.
- Mode changes can momentarily invert background.
- Labels are short: `LNAV`, `VNAV`, `HDG SEL`, `ALT HOLD`, `LOC`, `G/S`, `APPR`.

Buttons:

- Instrument switch button: `background: rgba(255,255,255,0.08); color: var(--horizon-white); border: 1px solid rgba(255,255,255,0.2); border-radius: 3px; padding: 8px 16px; font-family: "Inter"; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em`.
- Active/engaged: green fill with black text or magenta fill with white text.
- Armed: transparent with magenta border and magenta label.
- Caution: amber fill with black text.
- Warning: red fill with white text.
- Button groups should look like a mode control panel.
- Keep labels short enough for hardware-style keys.

Inputs:

- FMC input: `background: var(--instrument-black); border: 1px solid rgba(255,255,255,0.2); border-radius: 3px; color: var(--waypoint-green); font-family: "JetBrains Mono"; font-size: 13px; padding: 8px 12px`.
- Focus: magenta outline or border.
- Placeholder: `color: rgba(255,255,255,0.38)`.
- Invalid: amber or red border depending on severity.
- Numeric fields use tabular numerals and fixed-width boxes.
- Input labels sit above in uppercase white or soft-white.

Cards:

- Cards are instrument panels, not content cards.
- Base: `background: var(--instrument-black); border: 1px solid rgba(255,255,255,0.15); border-radius: 4px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.05); padding: 12px`.
- Label: uppercase `10px`, soft-white, `letter-spacing: 0.1em`.
- Main value: large monospace, white, green, magenta, amber, or red.
- Secondary value: small monospace, soft-white.
- Panels should be fixed-size where possible.

Navigation:

- Navigation should resemble a mode control panel or flight management computer.
- Top nav mode row: black background, small uppercase labels, active green or magenta state.
- Left/right softkeys: vertically stacked function keys with labels aligned to data rows.
- Tab patterns should be rectangular and hardware-like.
- Active tab can use green text and a white underline.

Headers:

- Header shell: `background: var(--instrument-black); border-bottom: 1px solid rgba(255,255,255,0.15); padding: 8px 12px`.
- Title: uppercase Inter `14px` to `18px`.
- Status indicators align right.
- Time or UTC labels use JetBrains Mono.
- Header copy should be terse: `PFD`, `NAV DISPLAY`, `PERF INIT`, `LEGS`, `APPROACH`.

Footers:

- Footer is a scratchpad or softkey row.
- Base: black with top border.
- Scratchpad: green monospace text.
- Function keys along bottom: `LSK1`, `LSK2`, `EXEC`, `CLR`, `MENU`.
- Error scratchpad turns amber.
- Execute-ready indicator turns green or magenta.

Lists:

- Flight-plan list: waypoint name in green, constraints in white, discontinuities in amber.
- Active waypoint: magenta line or magenta left marker.
- Rows: `padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.06)`.
- Distances and bearings in monospace.
- List density is high.
- Preserve alignment across rows.

Tables:

- Performance table: dark shell, thin white dividers.
- Header: uppercase soft-white `10px`.
- Body: monospace values `12px` to `14px`.
- Active/confirmed values: green.
- Entered but not executed: magenta.
- Constraint/caution: amber.
- Invalid: red.
- Numeric values right aligned.
- Units shown consistently: `KT`, `FT`, `NM`, `Z`, `LB`, `KG`.

Dividers:

- Use `1px solid rgba(255,255,255,0.1)`.
- Strong divider: `2px solid rgba(255,255,255,0.18)`.
- Colored divider only for alert severity.
- Dividers are precise, never decorative.

Modals:

- Advisory overlay: black shell with severity border.
- Normal advisory border: green.
- Caution border: amber.
- Warning border: red.
- Modal title includes severity: `ADVISORY`, `CAUTION`, `WARNING`.
- Body uses short procedural text.
- Backdrop is dark but does not blur the instrument behind it.
- Do not cover essential context unless the state is critical.

Badges:

- Annunciator badge: `font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; padding: 2px 8px; border-radius: 2px`.
- Green: active or normal.
- Magenta: selected or managed.
- Amber: caution.
- Red: warning.
- White outline: advisory.
- Badges should look like flight deck annunciators, not marketing tags.

Charts and maps:

- Map range rings are thin blue or white lines.
- Route line is magenta when active.
- Waypoints are green diamonds or boxed names.
- Weather overlay can use radar-blue, green, amber, and red, but only when meteorological context exists.
- Terrain overlay can use brown and amber.
- Labels must stay legible over maps.

Checklists:

- Checklist rows are procedural.
- Item text left, status right.
- Normal completed state: green `COMPLETE`.
- Required action: white or magenta.
- Caution: amber.
- Warning: red.
- No decorative checkmark animations.

---

**interaction language**

Hover:

- Hover is subtle and immediate.
- Button hover: `background: rgba(255,255,255,0.12)`.
- Panel hover: border brightens slightly.
- Flight-plan row hover: background `rgba(255,255,255,0.04)`.
- Hover transition: `0.1s linear`.
- No lift.
- No scale.
- No soft glow.

Active:

- Engaged mode becomes green.
- Selected but not executed mode becomes magenta.
- Pressed hardware key darkens for a moment.
- Active flight-plan leg uses magenta.
- Active waypoint uses green text and marker.
- Critical active state can be red only when warning-level.

Focus:

- Focus ring: `outline: 1px solid var(--path-magenta); outline-offset: 1px`.
- For warning controls, focus can use white outline.
- Focus must be visible against black and map imagery.
- Do not rely only on color; pair focus with outline, box, or marker.

Selected:

- Selected object uses magenta background, border, or route marker.
- Confirmed selected value turns green.
- Selection in lists uses a magenta left edge plus fixed row fill.
- Selected tape bug is magenta.
- Selected map object receives a magenta bracket or box.

Disabled:

- Disabled values dim to `opacity: 0.25`.
- Disabled controls retain their position to preserve scan pattern.
- Text should remain barely legible for context.
- Do not remove disabled instruments from layout.

Drag:

- Drag is rare.
- If used for route editing or map handles, drag marker is magenta.
- Drag outline: `1px dashed var(--path-magenta)`.
- Do not tilt, float, shadow, or animate draggable objects.
- Route edits should show before/after path clearly.

Validation:

- Valid entry: green.
- Entered pending execute: magenta.
- Advisory: amber.
- Critical invalid: red.
- Always include a text label such as `CHECK INPUT`, `INVALID ENTRY`, or `NOT IN DATABASE`.

---

**motion & feedback**

Motion is instrument-precise.

It should be fast, linear, and legible.

Default transition:

- `transition: background-color 0.1s linear, border-color 0.1s linear, color 0.1s linear`.
- Avoid easing curves that feel soft.
- Avoid durations above `0.15s` for controls.

Power-up:

- If the screen starts from empty, instruments initialize in `0.3s` to `0.5s`.
- Values can count to current values quickly.
- Annunciators appear immediately.
- Do not use cinematic boot sequences.

Loading:

- Use a magenta progress rule or green data-valid indicator.
- Label: `LOADING ROUTE`, `COMPUTING PERF`, `SYNCING NAV DATA`.
- No spinner.
- No skeleton shimmer.
- A rotating compass rose is allowed only for navigation-specific loading.

Success:

- Use green annunciator text: `CONFIRMED`, `INSERTED`, `EXECUTED`, `ACTIVE`.
- Hold `1.5s` to `2s`.
- No celebration.
- No confetti.

Caution:

- Amber annunciator flashes three times, then holds steady.
- Text examples: `CHECK INPUT`, `VERIFY PERF`, `DISCONTINUITY`, `ALT CONSTRAINT`.
- Flash must be square and direct, not smooth.

Warning:

- Red annunciator flashes rapidly for immediate-danger states.
- Text examples: `WARNING`, `INVALID CRITICAL`, `LIMIT EXCEEDED`.
- Warning should also change shape/position/text, not color alone.

Tape movement:

- Tape values may scroll vertically when changing.
- Current value box remains fixed.
- Scrolling must be smooth enough to read but not decorative.
- Use linear timing.

Map movement:

- Map pan and range changes can redraw instantly or with a very short linear transition.
- Route updates should snap to new coordinates.
- Do not use playful zoom easing.

Page enter:

- Prefer immediate instrument presence.
- The cockpit was already active.
- Avoid staggered content animations.

---

**atmosphere**

The atmosphere is a night flight deck.

Instrument-black fills the screen.

Values glow by contrast, not by bloom.

The operator reads, scans, confirms, and executes.

Visual references:

- Boeing 787 primary flight display.
- Airbus A350 flight mode annunciator.
- Garmin G1000 glass cockpit.
- Honeywell Primus Epic.
- Collins Pro Line Fusion.
- Flight management computer scratchpad.
- Mode control panel.
- Synthetic vision horizon.
- Navigation display range rings.

Layout structure:

- Central instrument dominates.
- Vertical speed and altitude tapes flank the main readout.
- Mode annunciator sits at the top.
- Heading or map strip sits at the bottom.
- Side panels hold checklists, performance, messages, and route data.
- Controls are compact and stable.

Background:

- `background: var(--instrument-black)`.
- No paper texture.
- No clouds.
- No runway hero image.
- No travel photography.
- No decorative airplane silhouettes.

Light:

- Use crisp colored values.
- Use very subtle inset bevels.
- A faint readout glow is allowed at extremely low opacity: `box-shadow: 0 0 12px rgba(0,230,118,0.05)`.
- Do not use neon ambience or game HUD bloom.

Composition:

- Symmetry is useful around the PFD.
- Asymmetry is useful for FMC pages and checklists.
- Dense but not cluttered.
- Values align to a rigorous grid.
- Units and labels stay near their values.
- Changing numbers should not resize the interface.

The interface must feel serious, procedural, and immediately readable.

---

**editorial voice**

The voice is procedural avionics.

It is abbreviated, standardized, and unambiguous.

Button labels:

- `EXEC`
- `CLR`
- `DIR`
- `LEGS`
- `DEP/ARR`
- `PERF`
- `INIT`
- `PROG`
- `MENU`
- `HOLD`
- `APPR`
- `NAV`
- `IDENT`

Headings:

- `PFD`
- `NAV DISPLAY`
- `FLIGHT PLAN`
- `PERFORMANCE`
- `SYSTEMS`
- `APPROACH`
- `STATUS`
- `CHECKLIST`
- `FUEL PRED`
- `ROUTE DATA`
- `MODE CONTROL`

Metadata:

- `FL380`
- `M.82`
- `OAT -54C`
- `HDG 274`
- `TRK 276`
- `ETA 14:32Z`
- `DIST 482NM`
- `WPT EGLL`
- `ALT SEL 12000`
- `SPD 250KT`
- `VS -700FPM`

Placeholders:

- `ENTER WAYPOINT`
- `SCRATCHPAD`
- `ROUTE ID`
- `CRZ ALT`
- `COST INDEX`
- `DEST`
- `V-SPEED`
- `[ ]`

Empty states:

- `NO FLIGHT PLAN ACTIVE`
- `AWAITING INPUT`
- `DATA NOT AVAILABLE`
- `NO ACTIVE LEG`
- `NO PERF DATA`
- `CHECKLIST EMPTY`

Error text:

- `INVALID ENTRY`
- `NOT IN DATABASE`
- `CHECK INPUT`
- `DISCONTINUITY`
- `ROUTE INCOMPLETE`
- `PERF DATA REQUIRED`
- `LIMIT EXCEEDED`

Success text:

- `CONFIRMED`
- `INSERTED`
- `EXECUTED`
- `ACTIVE`
- `ROUTE UPDATED`
- `PERF COMPLETE`
- `CHECKLIST COMPLETE`

Writing rules:

- Prefer abbreviations used as interface labels.
- Use units.
- Use uppercase for operational states.
- Use UTC `Z` when referencing time.
- Use no jokes.
- Use no marketing language.
- Use no emotional tone.
- Every word must earn its place on the display.

---

**cursor & selection**

Global cursor: `default`.

Buttons and selectors: `pointer`.

Map target, route editing, and flight-path selection: `crosshair`.

Timeline or heading scrub controls: `ew-resize`.

Numeric inputs: `text`.

Disabled controls: `default`.

Do not use custom cursors.

Do not use novelty aircraft cursors.

Selection:

```css
::selection {
  background: var(--path-magenta);
  color: var(--horizon-white);
}
```

Text selection is magenta because selected values are pending path or mode attention.

Confirmed selected values turn green.

Critical selected states pair color with border and text.

Range selections use rectangular brackets or tape bugs.

Map selections use magenta boxes, brackets, or route-line emphasis.

---

**when to reach for this genome**

Use `flight_deck.pfd` when the prompt asks for aviation, cockpit, avionics, flight planning, aircraft systems, pilot tools, air traffic-adjacent displays, navigation, altitude, airspeed, route management, performance calculators, checklists, glass cockpit, HUD, PFD, synthetic vision, FMC, mode control, or high-consequence operational dashboards.

Use it when the product should feel precise, procedural, instrument-like, and safety-critical.

Use it for dashboards that need stable numeric readouts, status annunciators, route paths, tape scales, checklists, and compact controls.

Use it when color must communicate state under pressure.

Use it when users scan rather than browse.

Use it when values, modes, and confirmations are more important than copy.

Use it for technical products outside aviation only when they need an avionics metaphor: mission control, telemetry, fleet operations, high-speed logistics, emergency operations, simulator tools, or equipment monitoring with procedural control.

Do not choose it for consumer travel booking, airline marketing, boarding-pass design, destination discovery, or lifestyle aviation pages.

For radar-heavy command displays, prefer a radar or sonar genome.

For terminal-like operations, prefer `kernel_grid.dev` or `underground_terminal.crt`.

For cinematic aerospace drama, prefer a more cinematic genome.

This genome is strongest when the UI can be dense, black, numeric, mode-driven, and deeply legible.

---

**anti-patterns - this genome NEVER:**

1. never uses serif, script, decorative, handwritten, or novelty fonts. instrument displays require sans and monospace legibility.
2. never uses border radius above `4px`. panels are avionics hardware surfaces, not soft SaaS cards.
3. never uses warm lifestyle palettes, cream backgrounds, travel blues, beach imagery, sunset gradients, or airline-brand gloss.
4. never uses color decoratively. magenta, green, amber, red, cyan, brown, and blue each carry operational meaning.
5. never uses slow, gentle, or theatrical transitions. cockpit responses must feel immediate.
6. never uses playful, emotional, chatty, or marketing copy. the voice is procedural and abbreviated.
7. never uses decorative textures, background photos, clouds, aircraft silhouettes, paper grain, or ornamental patterns.
8. never uses translucent blur over readouts. critical values must stay opaque and readable.
9. never communicates warnings through color alone. pair color with shape, text, position, or border.
10. never lets numeric values resize their containers as digits change. readout boxes are stable.
11. never uses excessive glow, cyberpunk neon, gaming HUD bloom, or sci-fi fantasy panels.
12. never hides units, labels, modes, or confirmation states for minimalism. avionics clarity beats visual cleanliness.
