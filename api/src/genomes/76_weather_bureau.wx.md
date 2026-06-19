---
id: "76"
name: weather_bureau.wx
keywords:
  - weather
  - meteorology
  - forecast
  - synoptic
  - metar
  - radar
  - storm
  - warning
  - barometric
  - isobar
  - front
  - aviation
  - NWS
  - climate
---

### genome 76: `weather_bureau.wx`

> identity: National Weather Service forecast office: synoptic surface analysis charts, isobar contours, hand-plotted fronts, METAR and TAF coded reports, radar composites, upper-air soundings, barograph traces, warning products, teletype bulletins, and urgent operational weather language. This is chart-room meteorology, not a sunny consumer forecast card.

---

**surface**

The surface is chart paper.

It should feel like a forecast desk, a printed analysis chart, an aviation weather terminal, and a warning operations board at the same time.

Every element must serve observation, plotting, analysis, issuance, or verification.

This genome is precise, coded, urgent when needed, and otherwise quietly procedural.

Core palette:

- `--chart-paper: #F8F8F5` for the main plotting surface, chart cards, forecast discussion paper, and most panels.
- `--paper-warm: #F2F0E9` for secondary chart stock, inactive panels, product sheets, and old teletype paper.
- `--light-wash: #EEF2F8` for ocean areas, map wash, quiet data rows, and cool background fills.
- `--station-black: #1A1A1A` for station plots, wind barbs, text, chart neatlines, plotted symbols, and primary data.
- `--chart-grid: #CCCCCC` for latitude and longitude graticules, table dividers, contour support lines, and secondary frames.
- `--chart-border: #888888` for neatline frames, inset panel borders, legends, and inactive boundaries.
- `--cold-front: #2255AA` for cold fronts, isobars, advisories, pressure lines, selected controls, and informational states.
- `--warm-front: #CC3333` for warm fronts, critical temperature values, hurricane/tornado warnings, and urgent alerts.
- `--precip-green: #33AA55` for radar returns, precipitation, valid observations, hydrologic data, and success.
- `--occluded: #7744AA` for occluded fronts, upper-air data, sounding traces, and mixed boundary states.
- `--severe-yellow: #DDAA00` for severe thunderstorm watches, warning attention, active advisories, and highlighted hazards.
- `--radar-cyan: #34AFC2` for radar range rings, velocity markers, coastal/water overlays, and scanning surfaces.

Color is meteorological notation.

Blue means cold, pressure, advisory, or selected map overlay.

Red means warm front, tornado/hurricane/severe danger, or critical threshold.

Green means precipitation, valid observation, or hydrologic return.

Purple means occlusion, upper air, or mixed boundary.

Yellow means watch, warning attention, or severe potential.

Typography:

- Coded data: `"JetBrains Mono", "SF Mono", "Courier New", monospace`.
- Coded data size: `11px` to `13px`.
- Coded data weight: `500` or `600`.
- Coded data letter-spacing: `0.03em` to `0.05em`.
- Coded data transform: uppercase.
- Operational labels: `"Barlow Condensed", "Arial Narrow", sans-serif`.
- Operational label size: `11px` to `14px`.
- Operational label weight: `500` to `700`.
- Operational label transform: uppercase.
- Operational label letter-spacing: `0.04em` to `0.08em`.
- Chart titles: `"Baskerville", "Georgia", "Times New Roman", serif`.
- Chart title size: `20px` to `30px`.
- Chart title weight: `500` or `600`.
- Forecast discussion body: Georgia/Baskerville `14px` to `16px`, `line-height: 1.55`.
- Map annotations: condensed sans or monospace, `10px` to `12px`.

Coded products are monospace.

Map labels are condensed.

Narrative forecast discussion is formal serif.

No friendly consumer-weather type.

Borders:

- Chart panel border: `1.5px solid var(--chart-border)`.
- Data table rule: `1px solid var(--chart-grid)`.
- Neatline frame: `2px solid var(--station-black)`.
- Double neatline: `outline: 1px solid var(--station-black); outline-offset: 3px`.
- Warning border: `2px solid var(--severe-yellow)` or `2px solid var(--warm-front)`.
- Station model circle: `border: 1.5px solid var(--station-black); border-radius: 50%`.
- Rectangular radius: `0px` to `2px`.

Spacing:

- Main chart padding: `16px` to `24px`.
- Panel padding: `12px` to `20px`.
- Table cell padding: `4px 8px`.
- Legend padding: `8px 12px`.
- Radar tile gap: `4px`.
- Forecast grid gap: `8px` to `12px`.
- Product bulletin margin: `12px` to `16px`.

The layout is dense but ordered.

It can hold many observations, but each value must remain traceable to a station, product, timestamp, or hazard area.

---

**color distribution**

46% chart-paper and paper-warm.

Most surfaces are paper, chart stock, and forecast discussion sheets.

18% station-black.

Primary text, plotted observations, wind barbs, station models, borders, map labels, and product headings use black.

12% chart-grid and chart-border.

Grid lines, graticules, table rows, legends, frame rules, and secondary metadata stay gray.

8% cold-front blue.

Isobars, cold fronts, selected overlays, advisory states, and active chart controls use blue.

5% warm-front red.

Warm fronts, critical warnings, temperature emphasis, tornado/hurricane products, and urgent errors use red.

4% precip-green.

Precipitation areas, valid observation states, radar returns, and hydrology values use green.

3% severe-yellow.

Watches, active warning attention, risk highlights, and severe potential use yellow.

2% occluded purple.

Occluded fronts, upper-air data, sounding traces, and mixed systems use purple.

2% light-wash and radar-cyan.

Oceans, range rings, water, cool panel fills, and radar supports use pale blue/cyan.

The page should never become a rainbow dashboard.

Weather color appears where the data demands it.

---

**component patterns**

Chart panel:

- Base: `background: var(--chart-paper); border: 1.5px solid var(--chart-border); border-radius: 1px; box-shadow: 0 1px 3px rgba(0,0,0,0.06)`.
- Header: serif title, `font-size: 18px`, `font-weight: 600`, `border-bottom: 1px solid var(--chart-grid)`.
- Body: `padding: 12px`.
- Neatline option: double border frame for major map products.
- Warning panel: left border `4px solid var(--severe-yellow)` or `4px solid var(--warm-front)`.

Surface analysis map:

- Map surface: `background: var(--chart-paper)`.
- Graticule: light gray grid lines every `40px` or domain-specific spacing.
- Isobars: blue SVG paths or CSS borders, `stroke-width: 1.5px`.
- Pressure labels: blue condensed text or monospace, `font-size: 10px`.
- High pressure: red `H`.
- Low pressure: blue `L`.
- Front symbols must follow meteorological convention: cold triangles, warm semicircles, occluded purple alternation.
- Station models sit above map layers.

Station model:

- Circle: `12px` to `14px`, black border, fill based on sky cover.
- Clear: transparent fill.
- Overcast: black fill.
- Partial coverage: half or quarter fill if possible.
- Wind barb: thin black line from the circle.
- Temperature: northwest position, red or black monospace.
- Dewpoint: southwest position, green or black monospace.
- Pressure: northeast position, black monospace.
- Present weather symbol: east or below, small coded mark.
- Keep values tight around the station.

Radar composite:

- Tile shell: `background: #07130A` only inside radar imagery, not the whole page.
- Range rings: `1px solid rgba(52,175,194,0.35)`.
- Radar returns: green/yellow/red patches by intensity.
- Legend: small horizontal reflectivity ramp with labels.
- Loop controls: compact buttons under the map.
- Timestamp: monospace top-right.
- Radar panel is an operational inset, not the default global theme.

Warnings map:

- Counties/zones outlined with gray rules.
- Active warning polygon: red or yellow boundary and transparent fill.
- Watch box: yellow fill at low opacity.
- Advisory: blue boundary.
- Labels use product IDs: `TOR`, `SVR`, `FFW`, `WCN`, `SIGMET`.
- Warning map must include valid time and issuing office.

Buttons:

- Standard button: `background: var(--chart-paper); color: var(--station-black); border: 1px solid var(--chart-border); border-radius: 2px; font-family: "Barlow Condensed"; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; padding: 6px 14px`.
- Active overlay button: `background: var(--cold-front); color: #FFFFFF; border-color: var(--cold-front)`.
- Warning button: `background: var(--severe-yellow); color: var(--station-black); border-color: var(--severe-yellow); font-weight: 700`.
- Critical button: `background: var(--warm-front); color: #FFFFFF; border-color: var(--warm-front)`.
- Disabled: gray, low opacity, no pointer.
- Button labels use operational verbs such as `PLOT`, `DECODE`, `LOOP`, `ISSUE`.

Inputs:

- METAR entry: `background: #FFFFFF; border: 1.5px solid var(--chart-grid); border-radius: 1px; color: var(--station-black); font-family: "JetBrains Mono"; font-size: 13px; text-transform: uppercase; padding: 6px 10px`.
- Focus: `border-color: var(--cold-front); box-shadow: 0 0 0 2px rgba(34,85,170,0.15)`.
- Placeholder: uppercase examples like `ENTER STATION ID`.
- Invalid station: red border and `INVALID STATION ID`.
- Date/time fields use `YYYYMMDD/HHMMZ`.
- Inputs should feel like coded weather entry fields, not consumer search boxes.

Navigation:

- Operations toolbar: `background: var(--station-black); padding: 4px 8px; display: flex; gap: 4px`.
- Tabs: condensed uppercase, `font-size: 12px`, white at 70% opacity.
- Active tab: white text plus blue bottom border.
- Warning product tab: yellow text.
- Critical product tab: red text.
- No soft top navigation.
- No hamburger unless mobile forces it.

Headers:

- Product header: `background: var(--chart-paper); border-bottom: 2px solid var(--station-black); padding: 12px 16px`.
- Title: serif, `22px` to `30px`, `font-weight: 600`.
- Subtitle: condensed uppercase, gray, includes product, valid time, office, and contour interval.
- Warning header: yellow or red fill, black/white text, uppercase.
- Header must always state temporal validity.

Footers:

- Footer is a teletype information bar.
- `background: var(--light-wash); border-top: 1px solid var(--chart-grid); padding: 8px 16px`.
- Font: JetBrains Mono, `11px`, uppercase.
- Content examples: data source, update time, station count, product version, office ID.

Lists:

- Observation list rows: station ID, time, wind, visibility, ceiling, temperature, pressure.
- Row: `padding: 6px 0; border-bottom: 1px solid rgba(204,204,204,0.4)`.
- Station ID: condensed bold uppercase.
- Observation: monospace.
- Active observation: faint blue wash.
- Warning product row: yellow or red edge marker.
- Expired product row: gray and lower opacity.

Tables:

- Observation table: `border-collapse: collapse; width: 100%`.
- Header: light-wash fill, condensed uppercase, `11px`, `letter-spacing: 0.05em`, `border-bottom: 2px solid var(--station-black)`.
- Cells: JetBrains Mono, `12px`, `padding: 4px 8px`, `border-bottom: 1px solid var(--chart-grid)`.
- Alternating rows: `rgba(238,242,248,0.5)`.
- Severe values: red or yellow text with bold weight.
- Numeric values align right.
- Units stay visible.

Dividers:

- Standard divider: `1px solid var(--chart-grid)`.
- Section divider: `2px solid var(--station-black)`.
- Map neatline: double black rule.
- Warning divider: severe-yellow or warm-front red.
- Never use decorative dotted separators unrelated to map/chart convention.

Modals:

- Alert overlay: `background: var(--chart-paper); border: 2px solid var(--severe-yellow); border-radius: 1px`.
- Tornado/hurricane overlay: red border and title bar.
- Title bar: severity color fill, uppercase condensed text.
- Body combines monospace coded product and serif narrative.
- Backdrop: `rgba(26,26,26,0.35)`.
- No blur.
- No frosted glass.

Badges:

- Badge base: condensed uppercase, `11px`, `font-weight: 700`, `letter-spacing: 0.06em`, `padding: 2px 8px`, `border-radius: 2px`.
- `WATCH`: yellow fill, black text.
- `WARNING`: red fill, white text.
- `ADVISORY`: blue fill, white text.
- `STATEMENT`: gray fill, black text.
- `METAR`: black outline, paper fill.
- `VALID`: green fill, black text.

Forecast discussion:

- Use serif body text.
- Product code block appears first in monospace.
- Narrative sections use uppercase headings such as `DISCUSSION`, `SHORT TERM`, `AVIATION`, `MARINE`.
- Ellipsis syntax is acceptable: `DISCUSSION...`.
- Paragraphs are compact and formal.

Sounding panel:

- Skew-T or upper-air panel uses paper background and grid.
- Temperature trace: red.
- Dewpoint trace: green.
- Wind barbs along side.
- Labels in monospace.
- Convective indices in a compact table.

Barograph trace:

- Pressure chart panel with thin axes.
- Trace color: black or blue.
- Falling pressure annotation can be red.
- Use line drawing style, not stock chart styling.

---

**interaction language**

Hover:

- Row hover uses faint blue chart wash: `background: rgba(34,85,170,0.06)`.
- Map feature hover increases stroke width or reveals a label.
- Button hover darkens border and fills with pale wash.
- No playful transforms.
- Transition: `0.2s ease` maximum.

Active:

- Active map overlay uses blue fill with white label.
- Active warning product uses yellow or red fill.
- Active radar loop button uses blue.
- Active station row gets blue left edge.
- Active issued product remains high-contrast until acknowledged.

Focus:

- `outline: 2px solid var(--cold-front); outline-offset: 1px`.
- For warning controls, focus can use black outline on yellow or white outline on red.
- Focus must remain visible on map surfaces and paper panels.
- Do not remove native keyboard visibility.

Selected:

- Selected station: blue halo or blue left edge.
- Selected warning polygon: thicker red/yellow stroke plus label.
- Selected table row: `background: rgba(34,85,170,0.12)`.
- Selected product: bold condensed header and blue edge.
- Use text and border, not color alone.

Disabled:

- Disabled products are gray and low opacity.
- Expired products can remain visible with `EXPIRED` badge.
- Disabled controls do not disappear because operational context matters.
- Cursor returns to default.

Drag:

- Drag is used only for map extents, time ranges, or plotted overlays.
- Drag source: blue dashed outline.
- Drop target: blue wash.
- No tilt, bounce, shadow-lift polish, or playful ghost.

Validation:

- Valid decoded product: green `DECODED`.
- Pending data: gray `PENDING`.
- Expired data: amber `EXPIRED`.
- Failed feed: red `COMMUNICATION FAILURE`.
- Every validation color must be paired with text.

---

**motion & feedback**

Motion is slow, measured, and data-specific.

Weather evolves; it does not bounce.

Default transition:

- `transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease`.
- No spring motion.
- No hover scale.
- No parallax.

Radar sweep:

- Signature motion.
- `animation: radar-sweep 10s linear infinite`.
- Sweep line rotates in a radar panel only.
- Range rings stay static.
- The sweep should be subtle, not sci-fi neon.

Radar loop:

- Frame loop changes radar returns every `0.8s` to `1.5s`.
- Timestamp updates each frame.
- Controls include `LOOP`, `PAUSE`, `STEP`, `BASE`, `REFL`, `VEL`.
- Use step-like changes, not smooth morphs.

Front progression:

- Front lines may crawl very slowly when representing forecast progression.
- `animation: front-crawl 12s linear infinite` is acceptable for concept demos.
- Operational products should prefer static valid-time panels.

Barograph trace:

- SVG pressure line draws over `4s` to `6s`.
- Use `stroke-dasharray` and `stroke-dashoffset`.
- Animation should feel like a pen on a drum recorder.

Loading:

- Radar sweep.
- Barograph line draw.
- Teletype text `RECEIVING PRODUCT...`.
- No spinner.
- No skeleton cards.

Success:

- Text: `TRANSMITTED`, `DECODED`, `PLOTTED`, `OBSERVATION RECEIVED`.
- Blue or green flash holds briefly.
- Keep the message compact and operational.

Warning:

- Severe-yellow border pulse: `2s ease-in-out infinite`.
- Red warning can blink between red and dark red only for active critical products.
- Use sparingly.
- Warnings must remain readable during pulse.

Error:

- Red header or border.
- Text: `COMMUNICATION FAILURE`, `DATA NOT AVAILABLE`, `STATION NOT REPORTING`.
- No shake.
- No confetti.
- No friendly apology.

Page enter:

- Chart can draw in with contour lines tracing and station models appearing.
- Total sequence: `1s` to `2s`.
- Forecast operations screens can also appear instantly if urgency is higher.

---

**atmosphere**

The atmosphere is a weather forecast office at 3 AM.

Charts are taped to walls.

Radar loops are running.

METARs arrive in coded strings.

Pressure is falling.

The phone may ring because a warning is about to be issued.

Primary background:

- `background: var(--chart-paper)`.
- Optional graticule: linear gradients every `40px`.
- Optional ocean wash in `var(--light-wash)`.
- No dark app shell except operations toolbar or radar imagery.

Chart-room artifacts:

- Surface analysis maps.
- Isobar contours.
- Front symbols.
- Station plots.
- Wind barbs.
- Radar panels.
- Warning polygons.
- Teletype bars.
- Sounding charts.
- Barograph traces.
- Product headers with valid times.

Composition:

- Main analysis chart dominates.
- Right or lower side holds observations, warnings, and products.
- Top bar holds product selection and valid time.
- Dense tables support the map.
- Legend is always present when symbols appear.
- Valid time is always visible.

Texture:

- Paper is matte.
- Grid is faint.
- Lines are crisp.
- Radar is the only dark and luminous surface.
- No decorative weather icons.

Operational urgency:

- Most screens are calm and analytical.
- Warning states become bold, yellow/red, and unmistakable.
- Severe weather alerts are procedural, not dramatic.

The output should feel like meteorologists use it to make decisions, not like a consumer app telling someone whether to bring an umbrella.

---

**editorial voice**

The voice is coded meteorological operations plus formal forecast discussion.

It is not friendly.

It is not marketing.

It is not whimsical.

Button labels:

- `TRANSMIT`
- `DECODE`
- `PLOT`
- `REFRESH`
- `LOOP`
- `OVERLAY`
- `ANIMATE`
- `ISSUE WARNING`
- `CANCEL ALERT`
- `LOAD METAR`
- `RUN ANALYSIS`
- `EXPORT PRODUCT`

Headings:

- `SURFACE ANALYSIS`
- `UPPER-AIR SOUNDINGS`
- `RADAR COMPOSITE`
- `FORECAST DISCUSSION`
- `WARNINGS AND WATCHES`
- `METAR OBSERVATIONS`
- `TAF PRODUCTS`
- `PILOT REPORTS`
- `HYDROLOGY`
- `MESOSCALE DISCUSSION`

Metadata:

- `VALID 231200Z MAR 2026`
- `ANALYSIS TIME: 06Z`
- `STATION: KJFK`
- `PRESSURE: 1013.2 MB`
- `CONTOUR INTERVAL: 4 MB`
- `ISSUED BY: WFO OUN`
- `PRODUCT: SVR`
- `EXPIRES: 1845Z`
- `UPDATE: 003`

Placeholders:

- `ENTER STATION ID`
- `ICAO IDENTIFIER`
- `YYYYMMDD/HHMMZ`
- `PRODUCT CODE`
- `FORECAST ZONE`
- `LAT/LON PAIR`
- `METAR STRING`

Empty states:

- `NO WARNINGS IN EFFECT`
- `OBSERVATIONS PENDING`
- `PRODUCT NOT YET ISSUED`
- `AWAITING DATA TRANSMISSION`
- `NO RADAR RETURN`
- `NO STATIONS SELECTED`

Errors:

- `COMMUNICATION FAILURE`
- `STATION NOT REPORTING`
- `INVALID STATION ID`
- `DATA EXPIRED`
- `PRODUCT NOT FOUND`
- `RADAR FEED UNAVAILABLE`

Success:

- `TRANSMITTED`
- `DECODED`
- `PLOTTED`
- `WARNING ISSUED`
- `OBSERVATION RECEIVED`
- `PRODUCT UPDATED`

Coded text examples:

- `METAR KJFK 231455Z 27015G25KT 10SM SCT045 BKN250 24/18 A3012 RMK AO2`
- `TAF KDEN 231720Z 2318/2424 16012KT P6SM FEW080 SCT140`
- `SPECI KOUN 231845Z 21028G42KT 1SM +TSRA BKN018CB`
- `SIGMET NOVEMBER 3 VALID 231900/232300Z`

Forecast discussion tone:

- `DISCUSSION...A DEEPENING LOW PRESSURE SYSTEM WILL TRACK NORTHEAST ACROSS THE REGION TONIGHT.`
- `AVIATION...MVFR CEILINGS WILL LIFT AFTER 15Z WITH GUSTY WEST WINDS PERSISTING.`
- `SEVERE...TORNADO WARNING IN EFFECT UNTIL 1845Z FOR PORTIONS OF CENTRAL OKLAHOMA.`

Writing rules:

- Use uppercase for coded products and operational labels.
- Use UTC time with `Z`.
- Use station identifiers.
- Use product codes.
- Use units.
- Avoid cheerful phrasing.
- Avoid puns.
- Avoid consumer weather language.

---

**cursor & selection**

Global cursor: `default`.

Interactive controls: `pointer`.

Chart inspection areas: `crosshair`.

Table text and product text: `text`.

Timeline/radar loop scrubbers: `ew-resize`.

Disabled controls: `default`.

Do not use custom cursors.

Do not use cloud, sun, or radar novelty cursors.

Selection:

```css
::selection {
  background: rgba(34, 85, 170, 0.25);
  color: var(--station-black);
}
```

Selected stations use a blue halo or edge marker.

Selected warning products use their hazard color plus text.

Selected chart extents use dashed blue rectangles.

Selected coded text remains legible on chart paper.

---

**when to reach for this genome**

Use `weather_bureau.wx` when the prompt asks for weather, meteorology, forecast offices, radar, storms, warnings, watches, aviation weather, METAR, TAF, SIGMET, NWS-style products, synoptic charts, isobars, fronts, barometric pressure, station models, upper-air soundings, climate observations, hydrology, or operational environmental monitoring.

Use it when the product should feel like an expert forecast tool rather than a consumer weather widget.

Use it for dashboards where time validity, observations, hazard products, map overlays, coded data, and forecast discussion matter.

Use it when the UI should combine paper chart precision with operational urgency.

Use it for severe weather workflows, aviation briefing tools, storm tracking, forecast verification, radar review, climate station monitoring, marine products, and emergency operations weather desks.

Use it when users need to decode, plot, issue, transmit, acknowledge, or verify weather products.

Do not choose it for friendly daily weather apps unless the user explicitly asks for a forecast-office or technical meteorology look.

Do not choose it for generic map dashboards that lack weather symbols, time validity, or coded products.

For cockpit avionics, prefer `flight_deck.pfd`.

For surveillance and event monitoring, prefer `surveillance_grid.cctv`.

For ocean sonar or submarine displays, prefer `sonar_array.sub`.

This genome is strongest when the interface can be paper-white, map-heavy, code-dense, warning-aware, and grounded in real meteorological notation.

---

**anti-patterns - this genome NEVER:**

1. never uses a dark app background as the primary surface. chart paper is the base; dark surfaces belong only inside radar imagery or toolbars.
2. never uses rounded cards, pill buttons, or soft SaaS modules. rectangular chart panels and 0-2px radii dominate.
3. never uses casual consumer forecast copy such as "Looks sunny!", "Bring an umbrella", or "Cozy rain vibes".
4. never uses fast playful motion, bounce, spring easing, hover scale, confetti, or animated weather mascots.
5. never uses decorative weather icons in place of meteorological symbols, station models, coded products, or plotted data.
6. never uses gradient hero backgrounds, glassmorphism, blur, frosted panels, glossy weather-app cards, or app-store polish.
7. never uses color decoratively. blue, red, green, purple, and yellow each map to weather concepts or operational states.
8. never hides valid time, station ID, product code, units, or source metadata for visual cleanliness.
9. never uses novelty display type, handwriting, rounded consumer fonts, or cute icon labels.
10. never communicates warning severity through color alone; pair color with product code, label, border, and position.
11. never turns radar into sci-fi neon. radar panels are technical, bounded, and secondary to chart-room credibility.
12. never treats weather as ambiance. every line, symbol, badge, and table value must support forecast analysis or warning operations.
