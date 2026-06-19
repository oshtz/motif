---
id: "79"
name: surveillance_grid.cctv
keywords:
  - surveillance
  - cctv
  - security
  - camera
  - monitoring
  - recording
  - motion detection
  - guard
  - feed
  - night vision
  - PTZ
  - incident
  - watch
---

### genome 79: `surveillance_grid.cctv`

> identity: overnight security operations center: a 16-camera CCTV wall, PTZ dome controls, grainy low-light feeds, timestamp watermarks, motion detection boxes, recording dots, incident logs, and cold institutional interface chrome. This is a fixed monitoring room, not a cinematic spy fantasy.

---

**surface**

The surface is a dark monitoring workstation.

The screen is already running.

The operator is watching, reviewing, acknowledging, exporting, and logging.

Every element should feel like security hardware, DVR software, a casino surveillance desk, a parking garage control room, a building command center, or a low-light camera matrix.

Primary palette:

- `--monitor-black: #141618` for the room darkness, page background, full workstation shell, and unlit display zones.
- `--camera-black: #1E2024` for individual camera feed cards, input fields, side panels, dead feeds, and control wells.
- `--panel-gray: #2A2E32` for control bars, sidebar backgrounds, table headers, rail surfaces, and inactive chrome.
- `--grid-line: #3A3E42` for feed separators, table rules, panel borders, and camera card outlines.
- `--daylight-wash: #9CA0A4` for secondary text, inactive metadata, daylight feed tint, offline labels, and subtle annotations.
- `--overlay-white: #E8E8E8` for timestamp overlays, camera labels, primary labels, selected outlines, and high-priority text.
- `--rec-red: #CC2222` for recording dots, alarm states, breach markers, critical incidents, and active recording badges.
- `--detect-green: #44CC44` for motion detection boxes, tracking states, successful signal, armed zones, and text selection.
- `--alert-amber: #CCAA22` for warnings, held doors, advisory states, and operator attention.
- `--nightvision: #3A4A3A` for low-light feed tint, night mode overlays, muted green camera wash, and infrared zones.
- `--signal-blue: #4A6F8A` for rare archive, network, or camera configuration states.

Color must communicate operational state.

Red means recording, alarm, breach, or failure.

Green means motion detection, tracking, live signal, or armed state.

Amber means warning, pending review, caution, or unresolved event.

Blue is rare and administrative.

Typography:

- Timestamp and recorder data: `"JetBrains Mono", "SF Mono", "Courier New", monospace`.
- Timestamp size: `10px` to `12px`.
- Timestamp weight: `500`.
- Timestamp transform: uppercase.
- Timestamp letter-spacing: `0.04em`.
- Timestamp text-shadow: `1px 1px 0 #000`.
- Camera labels: `"Barlow Condensed", "Arial Narrow", sans-serif`.
- Camera label size: `10px` to `13px`.
- Camera label weight: `500` or `600`.
- Camera label transform: uppercase.
- Camera label letter-spacing: `0.06em`.
- Event log body: `"Inter", "Helvetica Neue", Arial, sans-serif`.
- Event log size: `12px` to `13px`.
- Event log line-height: `1.3` to `1.45`.
- Numeric and IDs use tabular numerals.

All camera labels, timestamps, and statuses are uppercase.

Descriptions can be sentence case only when they are secondary incident notes.

Borders:

- Feed border: `1px solid var(--grid-line)`.
- Selected feed border: `2px solid var(--overlay-white)`.
- Motion box: `2px dashed var(--detect-green)`.
- Alarm zone: `2px dashed var(--rec-red)`.
- Warning zone: `2px dashed var(--alert-amber)`.
- Panel divider: `1px solid #23272B`.
- Radius: `0px` on every surface.

Spacing:

- Feed grid gap: `2px` to `4px`.
- Feed overlay padding: `4px` to `6px`.
- Control bar padding: `4px 12px`.
- Sidebar row padding: `6px 8px`.
- Dense panel padding: `8px` to `12px`.
- Modal padding: `16px` to `20px`.
- Major layout gutters: no more than `8px`.

The interface is dense because surveillance is simultaneous.

There is no decorative whitespace.

Every vacant pixel should be assigned to a feed, a log, a control, a timestamp, or a status.

---

**color distribution**

62% monitor-black and camera-black.

The room, feed cells, dead cameras, sidebars, inputs, and most surfaces stay between `#141618` and `#1E2024`.

14% panel-gray and grid-line.

The interface chrome, borders, control rails, table headers, and separators use `#2A2E32` and `#3A3E42`.

10% overlay-white.

Camera labels, timestamps, selected states, and primary log text use `#E8E8E8`, usually with black text-shadow when placed over feed imagery.

5% daylight-wash.

Secondary text, inactive filters, old log rows, offline camera labels, and muted metadata use `#9CA0A4`.

4% rec-red.

Recording indicators, critical alerts, alarm modals, breach events, failed cameras, and active emergency actions use `#CC2222`.

3% detect-green.

Motion detection boxes, live signal, armed zones, success, focus, and selection use `#44CC44`.

1.5% alert-amber.

Warnings, unresolved events, held-door notices, and caution states use `#CCAA22`.

0.5% nightvision or signal-blue.

Low-light and administrative accents are rare.

The visual field should read dark first, status-coded second.

Do not let the colored states turn into a colorful dashboard.

---

**component patterns**

Camera feed card:

- Base: `background: var(--camera-black); border: 1px solid var(--grid-line); border-radius: 0; position: relative; overflow: hidden`.
- Aspect: `aspect-ratio: 16 / 9` unless the product requires a fixed wall grid.
- Top-left label: absolute `top: 4px; left: 6px`.
- Label font: Barlow Condensed, `11px`, uppercase, `letter-spacing: 0.06em`.
- Label color: `var(--overlay-white)`.
- Label shadow: `text-shadow: 1px 1px 0 #000`.
- Bottom-left timestamp: absolute `bottom: 4px; left: 6px`.
- Timestamp font: JetBrains Mono, `10px`, tabular, `color: var(--overlay-white)`.
- Top-right REC: absolute `top: 4px; right: 6px`, red, monospace, `10px`.
- Bottom-right status: optional badge such as `LIVE`, `OFFLINE`, `NO SIGNAL`, `PTZ`.
- Feed image treatment: grayscale, low contrast, slightly green or blue gray.
- Noise layer: `opacity: 0.03`, pointer-events none, mix-blend overlay.

Camera wall:

- Primary layout: `display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 2px`.
- Full screen shell: top status bar, central feed wall, right event log, bottom control rail.
- Alternative layouts: `3x3`, `2x2`, single enlarged feed with side rail, or split review mode.
- Grid cells should share exact dimensions.
- No masonry.
- No staggered cards.
- No rounded preview tiles.

Buttons:

- Control button: `background: var(--panel-gray); color: var(--overlay-white); border: 1px solid var(--grid-line); border-radius: 0; padding: 6px 14px; font-family: "Barlow Condensed", sans-serif; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em`.
- Active recording button: `background: var(--rec-red); color: #FFFFFF; border-color: var(--rec-red)`.
- Motion button: `background: transparent; color: var(--detect-green); border-color: var(--detect-green)`.
- Warning action: `background: var(--alert-amber); color: var(--monitor-black); border-color: var(--alert-amber)`.
- PTZ controls are compact square buttons, usually `28px` to `34px`.
- Button labels are short: `ACK`, `REVIEW`, `EXPORT`, `LOCK`, `ZOOM`, `PRESET`.

Inputs:

- Base: `background: var(--camera-black); border: 1px solid var(--grid-line); border-radius: 0; color: var(--overlay-white); font-family: "JetBrains Mono", monospace; font-size: 12px; padding: 6px 10px`.
- Placeholder: `color: var(--daylight-wash); opacity: 0.65`.
- Search field label: Barlow Condensed, `10px`, uppercase, `color: var(--daylight-wash)`.
- Incident ID inputs use monospace uppercase values.
- Checkboxes are square armed-zone toggles.
- Sliders, if needed for zoom or playback, are narrow track controls with square thumbs.

Navigation:

- Top control bar: `background: var(--panel-gray); border-bottom: 1px solid var(--grid-line); height: 36px; display: flex; align-items: center; gap: 16px; padding: 0 12px`.
- Nav labels use Barlow Condensed, uppercase, `11px`.
- Active nav item is `color: var(--overlay-white)` plus a green or red status dot.
- Inactive nav item is `color: var(--daylight-wash)`.
- Route labels look like system modes: `LIVE`, `REVIEW`, `INCIDENTS`, `ARCHIVE`, `CONFIG`.

Header/status bar:

- Top status bar: `height: 28px; background: var(--panel-gray); border-bottom: 1px solid var(--grid-line); padding: 4px 12px; display: flex; justify-content: space-between; align-items: center`.
- System title: `SURVEILLANCE GRID`, `BUILDING SECURITY`, or site name in uppercase.
- Clock sits at the right edge in JetBrains Mono.
- Status group displays small square or circular dots with labels such as `REC`, `ARMED`, `NETWORK`, `ALARM`.
- Dots are the only rounded shape allowed if implemented as hardware LEDs; square LEDs are preferred.

Footer/control rail:

- Bottom rail: `height: 32px` to `44px`, `background: var(--panel-gray)`, `border-top: 1px solid var(--grid-line)`.
- Contains keyboard hints, archive status, selected camera ID, PTZ mode, and export state.
- Text uses monospace `10px` to `11px`.
- Hints are compact: `F1 HELP`, `SPACE REVIEW`, `ESC CLEAR`.

Event log:

- Sidebar width: `260px` to `360px`.
- Base: `background: var(--panel-gray); border-left: 1px solid var(--grid-line); overflow-y: auto`.
- Row: `padding: 6px 8px; border-bottom: 1px solid #1E2024`.
- Row timestamp: JetBrains Mono `10px`, `color: var(--daylight-wash)`.
- Row code: JetBrains Mono `11px`, uppercase, `color: var(--overlay-white)`.
- Row description: Inter `12px`, `color: var(--daylight-wash)`.
- Critical row: `border-left: 3px solid var(--rec-red)`.
- Motion row: `border-left: 3px solid var(--detect-green)`.
- Warning row: `border-left: 3px solid var(--alert-amber)`.
- New rows appear at the top.

Tables:

- Shell: `border: 1px solid var(--grid-line); border-collapse: collapse; border-radius: 0; background: var(--camera-black)`.
- Header: `background: var(--panel-gray); color: var(--daylight-wash); font-family: "Barlow Condensed"; font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em`.
- Cells: `padding: 5px 8px; border-bottom: 1px solid #1E2024; font-family: "JetBrains Mono"; font-size: 11px`.
- Selected row: `background: #252A2E; color: var(--overlay-white)`.
- Numeric columns align right.

Dividers:

- Dividers are structural, never decorative.
- Use `border-top: 1px solid var(--grid-line); margin: 0`.
- Sidebar sections can use a muted `border-top: 1px solid rgba(156, 160, 164, 0.25)`.
- Do not add airy spacing around rules.

Modals:

- Incident modal: `background: var(--camera-black); border: 2px solid var(--rec-red); border-radius: 0; padding: 16px 20px; max-width: 520px`.
- Review modal: same shell with `border-color: var(--grid-line)`.
- Backdrop: `background: rgba(20, 22, 24, 0.86)`.
- Title: Barlow Condensed `18px`, uppercase, `color: var(--rec-red)` for alarms or `var(--overlay-white)` for neutral.
- Metadata block: monospace rows for camera, event, operator, timestamp, and file ID.
- No blur.
- No soft shadow.

Badges:

- Base badge: Barlow Condensed `10px`, uppercase, `letter-spacing: 0.04em`, `padding: 2px 6px`, `border-radius: 0`.
- `REC`: red fill, white text.
- `MOTION`: green fill, black text.
- `ALERT`: amber fill, black text.
- `OFFLINE`: daylight-wash fill, black text.
- `LIVE`: transparent background, green border, green text.
- `PTZ`: transparent background, signal-blue border, signal-blue text.

Playback timeline:

- Timeline track: `height: 18px; background: #101214; border: 1px solid var(--grid-line)`.
- Recorded sections are red or gray blocks.
- Motion events are green ticks.
- Current head is a white `1px` vertical line.
- Scrubbing knob is square.
- Timestamp labels are monospace.

PTZ pad:

- PTZ control is a square cluster.
- Direction buttons form a `3x3` grid.
- Center button is `LOCK` or `HOME`.
- Buttons are `32px` square, no radius.
- Crosshair area uses `cursor: crosshair`.

---

**interaction language**

Hover:

- Feed hover brightens border from `var(--grid-line)` to `var(--overlay-white)`.
- Button hover shifts one shade lighter: `var(--panel-gray)` to `#363A3E`.
- Event row hover uses `background: #252A2E`.
- Timeline tick hover reveals timestamp tooltip in a square black label.
- Transition is `0.1s` maximum.
- No lift, no scale, no soft glow.

Active:

- Active camera gets `border: 2px solid var(--overlay-white)`.
- Active recording control gets red fill.
- Active motion zone gets green dashed overlay.
- Active review mode darkens the selected row and locks the bottom rail to that camera.
- Pressed buttons darken to `#1A1E22`.

Focus:

- Focus ring: `outline: 1px solid var(--detect-green); outline-offset: 1px`.
- On green elements, use white outline.
- On red elements, use white outline.
- Focus must remain visible against feed imagery.
- Avoid subtle-only focus states.

Selected:

- Only one primary feed should be selected unless multi-review mode is explicitly shown.
- Selected feed has a bright white border and `SELECTED` or `LIVE` status.
- Selected log row gets a muted panel background and a status edge.
- Selected camera details appear in the bottom rail or side rail.

Disabled:

- Disabled camera feed shows `NO SIGNAL`, `OFFLINE`, or `CAMERA DISCONNECTED`.
- Disabled opacity: `0.25` to `0.45`.
- Dead feed background stays `var(--camera-black)`.
- Controls that cannot run are dimmed with `color: var(--daylight-wash)`.
- Do not hide disabled controls if the operator needs system awareness.

Drag:

- Camera feed order is normally fixed.
- If arranging zones or review clips, the drag state is rectangular and technical.
- Drag source: `border: 1px dashed var(--detect-green); opacity: 0.65`.
- Drop target: green edge marker.
- No tilt.
- No shadow.
- No playful ghost card.

Alerts:

- Critical alert uses red border and event row edge.
- Warning uses amber edge.
- Motion uses green bounding box.
- Acknowledged event becomes gray and moves from `OPEN` to `ACK`.
- Never use friendly toast language.

---

**motion & feedback**

Motion is sparse and operational.

It should feel like hardware status, not animation polish.

Allowed transitions:

- `transition: background-color 0.1s linear`.
- `transition: border-color 0.1s linear`.
- No duration above `0.12s` except timestamp update and progress playback.

Recording blink:

- Red dot uses `animation: rec-blink 1s step-start infinite`.
- Keyframes: visible at `0%`, hidden at `50%`, visible at `100%`.
- Dot or label sits top-right of each recording feed.
- The blink is sharp, not eased.

Timestamp:

- Timestamps update once per second.
- Format: `HH:MM:SS` or `YYYY-MM-DD HH:MM:SS`.
- Updates are data changes, not CSS transitions.

Motion detection:

- Detection box appears instantly.
- Box style: `2px dashed var(--detect-green)`.
- Optional label: `MOTION ZONE B`.
- Event log row is appended immediately.
- No animated scanning beams.

Loading:

- Feed loading message: `CONNECTING...`.
- Centered monospace text, `11px`, `color: var(--daylight-wash)`.
- Progress line: `height: 1px; background: var(--daylight-wash)`.
- No spinner.
- No skeleton shimmer.

Success:

- `CONNECTED.`
- `RECORDING.`
- `EVENT ACKNOWLEDGED.`
- Text is monospace or condensed uppercase.
- Green badge can appear for `2s`.
- No celebration.

Error:

- `SIGNAL LOST.`
- `NO SIGNAL.`
- `RECORDING FAILED.`
- `CONNECTION TIMEOUT.`
- Border shifts to red.
- Feed body remains dark.
- No shake or bounce.

Playback:

- Review head moves linearly along the timeline.
- Fast-forward state can use repeated timestamp jumps.
- Clip boundaries appear as hard rectangular blocks.
- Motion markers remain fixed ticks.

Page enter:

- Feeds appear immediately.
- Logs are already populated.
- REC dots begin blinking.
- The operator has arrived mid-shift.

---

**atmosphere**

The atmosphere is 2 AM in a security office.

The room is dark.

The feeds glow.

The coffee is cold.

The interface never sleeps.

Layout atmosphere:

- Full viewport workstation.
- Top system status bar.
- Central camera matrix.
- Right event log.
- Bottom controls.
- Optional left rail for camera groups.
- High density.
- Fixed rectangles.

Feed atmosphere:

- Slight grain.
- Desaturated imagery.
- Low-light green gray.
- Overlaid timestamps.
- Camera IDs.
- REC indicators.
- Occasional signal noise.
- Dead feeds with static or black screen.

Texture:

- Use subtle CSS noise over feeds only.
- Use `opacity: 0.03` or lower.
- Do not animate the noise unless the prompt explicitly asks for degraded analog tape.
- Use black text-shadow behind overlay labels for readability.

Environmental references:

- Casino surveillance room.
- Parking garage security desk.
- Hospital security office.
- Transit station camera wall.
- Loading dock control center.
- Apartment building guard booth.
- Industrial perimeter monitoring.
- DVR archive review software.

Composition:

- The camera grid dominates.
- Secondary panels are narrow and useful.
- Controls are compact.
- Event rows are dense.
- Text is small but legible.
- The entire screen should feel monitored and recorded.

Lighting:

- Dark background.
- Feed cells provide visual brightness.
- White overlay text cuts through feed imagery.
- Colored states should glow only through contrast, not effects.

Do not make it glossy.

Do not make it cinematic.

Do not make it hacker neon.

The aesthetic is institutional surveillance software: cold, readable, repetitive, watchful.

---

**editorial voice**

The voice is surveillance log format.

It is terse, coded, timestamped, and operational.

Camera labels:

- `CAM-01 NORTH ENTRY`
- `CAM-02 LOBBY`
- `CAM-03 PERIMETER WEST`
- `CAM-07 LOADING DOCK`
- `CAM-09 PARKING B2`
- `CAM-12 SERVICE HALL`
- `CAM-14 ROOF ACCESS`
- `CAM-16 STAIRWELL E`

Status labels:

- `REC`
- `LIVE`
- `OFFLINE`
- `NO SIGNAL`
- `CONNECTING...`
- `ARMED`
- `ACK`
- `REVIEW`
- `LOCKED`

Event log format:

- `EVENT #4471 // MOTION DETECTED // CAM-09 // 23:15:22`
- `EVENT #4472 // DOOR HELD OPEN // CAM-14 // 23:16:01`
- `EVENT #4473 // SIGNAL LOST // CAM-06 // 23:16:48`
- `EVENT #4474 // PERIMETER BREACH // CAM-03 // 23:17:10`
- `EVENT #4475 // OPERATOR ACK // CAM-03 // 23:18:02`

Button labels:

- `ACK`
- `REVIEW`
- `EXPORT`
- `LOCK`
- `ZOOM`
- `PAN`
- `TILT`
- `PRESET`
- `PATROL`
- `CLEAR`
- `ARM ZONE`
- `SAVE CLIP`

Headings:

- `LIVE MONITORING`
- `EVENT LOG`
- `SYSTEM STATUS`
- `CAMERA GRID`
- `INCIDENT REPORT`
- `RECORDING STATUS`
- `PTZ CONTROL`
- `ARCHIVE REVIEW`
- `MOTION ZONES`
- `OPERATOR NOTES`

Placeholders:

- `ENTER EVENT ID`
- `SEARCH LOG`
- `CAMERA NUMBER`
- `FILTER BY ZONE`
- `OPERATOR NOTE`
- `ARCHIVE DATE`
- `INCIDENT TYPE`

Empty states:

- `NO EVENTS.`
- `ALL FEEDS NOMINAL.`
- `NO INCIDENTS LOGGED.`
- `AWAITING SIGNAL.`
- `NO ARCHIVE MATCH.`
- `NO MOTION DETECTED.`

Errors:

- `SIGNAL LOST.`
- `RECORDING FAILED.`
- `CONNECTION TIMEOUT.`
- `CAMERA OFFLINE.`
- `ARCHIVE UNAVAILABLE.`
- `ACCESS DENIED.`

Success:

- `RECORDING.`
- `CONNECTED.`
- `EVENT ACKNOWLEDGED.`
- `PRESET LOADED.`
- `CLIP EXPORTED.`
- `ZONE ARMED.`

Writing rules:

- Use 24-hour time.
- Use camera numbers.
- Use event IDs.
- Use `//` as a field separator.
- Prefer terse phrases over prose.
- Avoid emotional language.
- Avoid exclamation marks.
- Treat every interaction as part of an incident log.

---

**cursor & selection**

Global cursor: `default`.

Clickable feeds: `pointer`.

Control buttons: `pointer`.

Timeline scrubber: `ew-resize`.

PTZ targeting area: `crosshair`.

Text fields: `text`.

Disabled feeds and controls: `default`.

Do not use custom cursors.

Do not use playful camera cursors.

Selection:

```css
::selection {
  background: var(--detect-green);
  color: var(--monitor-black);
}
```

Text selection is detection green because selected text is being identified and tracked.

Selected camera feeds use a white border.

Selected motion zones use dashed green boxes.

Selected incident rows use a muted panel fill with a severity edge marker.

Multi-select, if required, uses square check cells, not rounded check pills.

---

**when to reach for this genome**

Use `surveillance_grid.cctv` when the prompt asks for security monitoring, CCTV, live camera feeds, incident review, guard operations, casino surveillance, building access, parking garage cameras, perimeter monitoring, DVR archive, PTZ controls, motion zones, alarm response, control rooms, network camera management, or any app where users watch multiple live feeds and respond to events.

Use it for interfaces that need to feel continuous, operational, dark, dense, and status-coded.

Use it when the product is about observing, recording, detecting, acknowledging, reviewing, or exporting incidents.

Use it when a camera wall, event log, timestamp overlay, or monitoring dashboard is the core experience.

Use it for nighttime facility dashboards, transit security tools, industrial perimeter systems, door access monitors, and shift handoff screens.

Use it when the user mentions low light, night vision, REC indicators, motion boxes, feed grids, DVR, archive review, operator station, guard booth, or control room.

Do not choose it just because the user asks for a dark dashboard.

If the desired result is hacker terminal, prefer `underground_terminal.crt` or `kernel_grid.dev`.

If the desired result is military radar, sonar, or command-and-control abstraction, prefer a radar or sonar genome.

If the desired result is cinematic spy luxury, this genome is too utilitarian.

If the desired result is friendly home-security consumer app, soften only enough for usability; keep the recording/logging structure intact.

This genome is strongest when the interface can be rectangular, dark, repetitive, data-dense, and operationally severe.

---

**anti-patterns - this genome NEVER:**

1. never uses rounded corners. camera feeds, panels, badges, buttons, timelines, and event rows are rectangular.
2. never uses warm, friendly, pastel, candy, luxury, or decorative color palettes. red, green, amber, blue, gray, black, and white have operational meanings.
3. never uses generous whitespace or airy SaaS spacing. surveillance work is dense because many feeds must be visible at once.
4. never uses conversational UX copy such as "Oops", "Welcome", "Nice work", "You are all set", or "Let's go".
5. never uses emoji, mascots, friendly illustrations, playful icons, or decorative graphics.
6. never uses serif display type, script type, handwritten fonts, or expressive editorial typography.
7. never uses transitions longer than `0.12s`, spring motion, entrance fades, animated cards, bounce, scale, parallax, or decorative motion.
8. never uses light mode as the default. the monitoring room is dark and feed-first.
9. never uses glassmorphism, frosted panels, backdrop blur, soft shadows, glow-heavy neon, or glossy gaming aesthetics.
10. never uses consumer social patterns such as chat bubbles, profile avatars, carousels, rounded cards, or floating reaction UI.
11. never hides timestamps, camera IDs, or status labels for visual cleanliness. surveillance UI must expose evidence and context.
12. never treats alert color as decoration. red, green, and amber appear only when a state, event, or control requires them.
