---
id: "87"
name: dive_log.aqua
keywords:
  - scuba
  - diving
  - dive log
  - underwater
  - PADI
  - dive computer
  - depth gauge
  - reef
  - aquatic
  - submersible
  - dive watch
  - blue water
  - oceanography
  - dive tables
---

### genome 87: `dive_log.aqua`

> identity: recreational SCUBA diver's logbook and dive-computer interface. PADI/NAUI training manuals, Suunto and Shearwater dive computers, the laminated cards of no-decompression-limit tables. Bright underwater turquoise transitioning to deep abyssal blue, with safety yellow and high-vis orange for critical indicators. Not the dystopian submarine sonar room (genome 74, military gray-green darkness) — this is the cheerful, technical, recreational sport: water-resistant printed cards, plastic dive-computer LCD screens with high-contrast number readouts, depth-gauge dials with red/green safe-zone arcs. Caribbean reef energy with German-engineered instrument precision.

---

## surface

colors:
```
--abyss-deep: #021A2E;          /* deepest abyssal blue — primary dark background */
--depth-mid: #053456;           /* mid-water column — raised surface */
-- depth-shallow: #0A4F7A;      /* shallow water — card surface */
--surface-water: #28A0C9;       /* reef-water turquoise — primary accent */
--surface-bright: #4FC0DC;      /* sunlit shallow water — bright accent */
--coral-bleach: #ECEEEA;        /* coral-bleach white — primary text */
--coral-warm: #DDD8C5;          /* sun-faded warm white — secondary text */
--safety-yellow: #F2D026;       /* dive-buoy yellow — safety stops and warnings */
--hi-vis-orange: #F26A1F;       /* surface marker orange — critical/alarm */
--reef-green: #2EC089;          /* safe-zone green — within limits */
--depth-blue: #1A78A8;          /* depth-gauge needle blue */
--lcd-cyan: #6DEFFF;            /* dive-computer LCD glow */
--lcd-cyan-dim: rgba(109,239,255,0.35); /* dimmed LCD readout */
--no-deco-red: #D62742;         /* no-decompression-limit red, dangerous */
--caustic-light: rgba(109,239,255,0.08); /* underwater light caustics */
```

typography:
- display/titles: `"Inter", "DM Sans", sans-serif` — `font-weight: 800–900; font-size: 2.5rem–6rem; letter-spacing: -0.01em; text-transform: uppercase;` — clean geometric sans, like the cover of a PADI manual or a modern dive-computer brand. Tight tracking at scale.
- LCD readouts (signature): `"VT323", "Share Tech Mono", "Orbitron", monospace` — `font-weight: 400; font-size: 1.4rem–4rem; letter-spacing: 0.05em; color: var(--lcd-cyan); text-shadow: 0 0 8px var(--lcd-cyan-dim);` — the segmented-display look of dive computer numerals (depth, time, decompression).
- body: `"Inter", sans-serif` — `font-weight: 400; font-size: 14–16px; line-height: 1.6; letter-spacing: 0.01em;` — utility body type.
- meta/labels: `"JetBrains Mono", monospace; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--surface-water);` — for "DEPTH", "NDL", "AIR", "SAC", "MOD".
- numerical data: monospace tabular figures throughout — every depth, time, and pressure reading aligns vertically.

borders:
- dive-computer bezel: a chunky rounded-rect frame with `border: 4px solid #1A1F26; border-radius: 12px; box-shadow: inset 0 2px 4px rgba(255,255,255,0.08), 0 8px 24px rgba(0,0,0,0.4);` — plastic dive-computer housing look
- LCD screen frame: `1px solid var(--surface-water); border-radius: 4px; padding: 16px; background: linear-gradient(180deg, var(--abyss-deep) 0%, var(--depth-mid) 100%); box-shadow: inset 0 0 24px rgba(109,239,255,0.06);` — the LCD readout window
- depth-gauge dial: `border-radius: 50%; border: 3px solid var(--coral-warm); box-shadow: inset 0 0 20px rgba(0,0,0,0.4);` — circular instrument
- card panel borders: `1px solid var(--surface-water);` or `1px solid rgba(109,239,255,0.2)` for subtle delineation
- border-radius: `8–12px` for dive-computer hardware cards; `4px` for utility cards; `50%` for circular gauges and badges

spacing:
- page edge: `4vw` horizontal padding
- vertical rhythm: `8–12vh` between major sections — paced like dive-plan stages
- card padding: `24–36px` — utility-dense but readable
- moderate-high information density. A dive log is data-rich: depths, durations, temperatures, gas mixes, all visible at once.

---

## color distribution

- 56% abyss-deep / depth-mid / depth-shallow — the deep blue water column dominates everything
- 14% coral-bleach / coral-warm — text, primary information surfaces
- 10% surface-water / surface-bright — primary accent, headers, interactive elements
- 6% lcd-cyan — dive-computer readout color (concentrated in LCD displays only)
- 5% safety-yellow — safety stops, time markers, "ASCEND" indicators
- 4% reef-green — within-limits indicators, "safe" markers
- 3% hi-vis-orange — surface-marker buoy, important callouts, secondary alerts
- 2% no-deco-red — critical alarms ("NDL exceeded", decompression required), used sparingly

the page should feel like a dive computer screen surrounded by reef water: deep blue field, cyan LCD digits, safety-yellow markers, and one or two orange/red points of high-visibility data.

---

## component patterns

buttons:
- primary (dive-computer mode button): `background: var(--surface-water); color: var(--abyss-deep); border: 1px solid var(--surface-bright); border-radius: 8px; padding: 14px 32px; font-family: "Inter", sans-serif; font-weight: 700; font-size: 0.95rem; letter-spacing: 0.04em; text-transform: uppercase; box-shadow: 0 2px 0 var(--depth-blue), inset 0 1px 0 var(--surface-bright);` — backlit-button feel
- LCD button: `background: var(--abyss-deep); color: var(--lcd-cyan); border: 1px solid var(--surface-water); border-radius: 8px; font-family: "VT323", monospace; letter-spacing: 0.06em; text-shadow: 0 0 6px var(--lcd-cyan-dim);`
- emergency (orange): `background: var(--hi-vis-orange); color: var(--coral-bleach);`
- safety-stop (yellow): `background: var(--safety-yellow); color: var(--abyss-deep);`
- secondary outline: `background: transparent; color: var(--surface-water); border: 1px solid var(--surface-water); border-radius: 8px; padding: 13px 30px;`
- ghost: `background: transparent; color: var(--coral-warm); border: none; text-decoration: underline; text-underline-offset: 4px;`

inputs:
- `background: var(--depth-mid); border: 1px solid var(--surface-water); border-radius: 8px; padding: 14px 18px; color: var(--coral-bleach); font-family: "Inter", sans-serif; font-size: 1rem; font-weight: 500;`
- label above: `font-family: "JetBrains Mono", monospace; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--surface-water);`
- placeholder: `color: rgba(236,238,234,0.4);`
- focus: `border-color: var(--lcd-cyan); box-shadow: 0 0 0 2px rgba(109,239,255,0.18), inset 0 0 12px rgba(109,239,255,0.06);` — the LCD-glow focus

cards/panels (dive log entries):
- standard dive log card: `background: var(--depth-shallow); border: 1px solid var(--surface-water); border-radius: 12px; padding: 28px; box-shadow: 0 8px 24px rgba(2,26,46,0.4), inset 0 1px 0 rgba(109,239,255,0.08);`
- dive-computer card (signature): styled as a plastic dive computer — `background: linear-gradient(180deg, #1A1F26 0%, #0E1318 100%); border-radius: 16px; padding: 24px; box-shadow: 0 12px 32px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.08);` — with an LCD screen inset showing depth/time/temp in cyan
- depth-gauge card: a perfect circle `width: 280px; height: 280px; border-radius: 50%;` with a needle indicator and degree markers around the perimeter — analog gauge feel
- buoy card: a small orange-topped card with `border-top: 6px solid var(--hi-vis-orange);` — surface-marker style
- the LCD screen content area inside any card uses `background: var(--abyss-deep); padding: 16px; border-radius: 4px; border: 1px solid rgba(109,239,255,0.2);` with all numerical text in `--lcd-cyan` VT323 mono

navigation:
- top bar: `background: var(--abyss-deep); border-bottom: 1px solid var(--surface-water); padding: 18px 4vw; box-shadow: 0 2px 12px rgba(0,0,0,0.4);`
- brand: a small SVG dive-tank icon in `--surface-water` next to a wordmark in `--coral-bleach`
- nav items: `font-family: "Inter", sans-serif; font-weight: 600; font-size: 0.85rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--coral-warm);`
- active: `color: var(--lcd-cyan); border-bottom: 2px solid var(--lcd-cyan); text-shadow: 0 0 6px var(--lcd-cyan-dim);`

headers/hero:
- hero title: `font-family: "Inter"; font-weight: 900; font-size: 5–10vw; line-height: 0.95; letter-spacing: -0.02em; text-transform: uppercase; color: var(--coral-bleach);`
- depth subtitle (signature): a giant LCD-style number reading the depth — `font-family: "VT323", monospace; font-size: 6–12vw; color: var(--lcd-cyan); text-shadow: 0 0 24px var(--lcd-cyan-dim); letter-spacing: 0.06em;` — like `-28.4 m` or `92 ft`
- a small "DIVE 087" or "LOG ENTRY 2024-08-14" mono uppercase tag in `--surface-water`
- hero composition: deep blue gradient background with light caustic patterns drifting; oversized LCD depth-reading in the center; surrounded by smaller LCD readouts (time, temp, NDL)

footers:
- `background: var(--abyss-deep); border-top: 1px solid var(--surface-water); padding: 48px 4vw;`
- a horizontal row of small dive-computer stats in mono — depth, total dives, total hours, deepest depth — like a profile bar
- text in `--coral-warm` and `--surface-water`
- regulatory text in mono uppercase: `LOGBOOK · v2.1 · DIVE-CERTIFIED RECREATIONAL`

dividers (signature — depth markers):
- depth-tick divider: a horizontal line in `--surface-water` with vertical tick marks at intervals and depth labels in mono cyan — `0m — 5m — 10m — 18m — 30m` — like the depth ruler on a dive computer
- standard divider: `1px solid var(--surface-water)` with a small dive-flag SVG (red/white diagonal) centered
- safety-stop divider: a yellow horizontal bar reading `— SAFETY STOP · 3 min @ 5m —` in monospace uppercase

lists:
- ordered (dive sequence): mono numbers in cyan `01.`, `02.`, `03.` followed by Inter body text in coral-bleach
- unordered: small dive-flag glyphs or chevron arrows (`>`, `▶`) as bullets in `--surface-water`
- gas-mix lists: pill-style breakdown with chips showing `AIR 21/79` or `EAN32 32%` or `TMX 18/45`
- profile lists (dive log entries): each item displays as a horizontal card with depth, duration, temp, and dive site in tabular mono columns

tables (dive profile data):
- header: `background: var(--depth-mid); color: var(--surface-water); font-family: "JetBrains Mono", monospace; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 12px 16px; border-bottom: 1px solid var(--surface-water);`
- body rows: `font-family: "JetBrains Mono", monospace; color: var(--coral-bleach); padding: 10px 16px; border-bottom: 1px solid rgba(109,239,255,0.1);`
- numerical columns: right-aligned tabular figures
- alternating rows: `background: rgba(109,239,255,0.03);`
- depth column may use `--lcd-cyan` color for emphasis

modals (dive plan / decompression detail):
- styled as a chunky dive computer: `background: linear-gradient(180deg, #1A1F26 0%, #0E1318 100%); border-radius: 16px; padding: 32px; box-shadow: 0 24px 80px rgba(0,0,0,0.7), inset 0 2px 0 rgba(255,255,255,0.08);` — with a large LCD-screen inset showing the dive plan data in cyan VT323
- backdrop: `background: rgba(2,26,46,0.92); backdrop-filter: blur(4px);` — deep water dimming the view
- close: an LCD-style `[X] CLOSE` button in cyan mono

badges/tags (gas mixes, certifications):
- gas mix pills: `border-radius: 999px; padding: 4px 12px; font-family: "JetBrains Mono", monospace; font-size: 0.65rem; letter-spacing: 0.1em;`
- AIR (21/79): `background: transparent; border: 1px solid var(--surface-water); color: var(--surface-water);`
- NITROX EAN32: `background: transparent; border: 1px solid var(--reef-green); color: var(--reef-green);`
- NITROX EAN36: `background: transparent; border: 1px solid var(--safety-yellow); color: var(--safety-yellow);`
- TRIMIX: `background: transparent; border: 1px solid var(--hi-vis-orange); color: var(--hi-vis-orange);`
- DECOMPRESSION: filled `background: var(--no-deco-red); color: var(--coral-bleach);`
- certification: filled `background: var(--surface-water); color: var(--abyss-deep);` reading `PADI OWD`, `PADI AOWD`, `RESCUE DIVER`, etc.

progress bars (NDL, ascent rate, gas remaining):
- track: `height: 8px; background: var(--depth-mid); border-radius: 4px; border: 1px solid var(--surface-water);`
- fill (within limits): `background: var(--reef-green);`
- fill (caution): `background: var(--safety-yellow);`
- fill (warning): `background: var(--hi-vis-orange);`
- fill (critical): `background: var(--no-deco-red);`
- label in mono cyan to the right showing the value: `NDL 18:24` or `AIR 110 BAR`

tooltips:
- `background: var(--abyss-deep); color: var(--lcd-cyan); border: 1px solid var(--surface-water); border-radius: 4px; padding: 8px 12px; font-family: "JetBrains Mono", monospace; font-size: 0.7rem; box-shadow: 0 0 16px rgba(109,239,255,0.15);` — like a small LCD popup

---

## interaction language

- hover (buttons): the LCD glow intensifies — `box-shadow: 0 2px 0 var(--depth-blue), inset 0 1px 0 var(--surface-bright), 0 0 24px rgba(40,160,201,0.3); filter: brightness(1.1);`. `transition: 0.2s ease;`
- hover (LCD elements): cyan glow strengthens — `text-shadow: 0 0 12px var(--lcd-cyan); color: var(--lcd-cyan);`
- hover (cards): the card lifts slightly with deeper shadow — `transform: translateY(-2px); box-shadow: 0 16px 40px rgba(2,26,46,0.5);`. `transition: 0.25s ease;`
- hover (links): `color: var(--lcd-cyan); text-shadow: 0 0 6px var(--lcd-cyan-dim);`
- active/pressed: `transform: scale(0.98) translateY(0); box-shadow: 0 1px 0 var(--depth-blue);` — the dive-computer button press
- focus: `outline: 2px solid var(--lcd-cyan); outline-offset: 3px; box-shadow: 0 0 16px rgba(109,239,255,0.25);`
- selected: `background: rgba(40,160,201,0.15); border-color: var(--surface-water); box-shadow: inset 0 0 12px rgba(109,239,255,0.1);`
- disabled: `opacity: 0.35; filter: grayscale(0.6);` — outside dive computer's range
- drag: `cursor: grab; box-shadow: 0 24px 56px rgba(2,26,46,0.7);` — lifting a dive-log card

---

## motion & feedback

transitions: `0.2–0.4s ease-out` default — quick instrument-response feel. Modern dive computers refresh their LCD readouts in clipped intervals, not smooth animations.

LCD-tick animation (signature): numerical readouts on dive-computer cards tick at `1s steps(1)` for a discrete digital-display feel (depth, time, air pressure update in clean snaps, not smooth interpolation).

```css
@keyframes lcd-flicker {
  0%, 100% { text-shadow: 0 0 8px var(--lcd-cyan-dim); }
  50% { text-shadow: 0 0 12px var(--lcd-cyan); }
}
.lcd-readout { animation: lcd-flicker 2s ease-in-out infinite; }
```

loading: a depth-gauge needle sweeping from 0m to 40m and back, paired with `INITIALIZING DIVE...` text in mono cyan. Or: caustic light patterns drifting across the page background simulating sunlight refracting through water surface.

success: a brief reef-green glow expands around the affected element — `box-shadow: 0 0 0 0 var(--reef-green)` to `0 0 32px 0 transparent` over `0.5s ease-out`. Mono text: `LOGGED.` or `ASCENT COMPLETE.`

error: the element border flashes `--no-deco-red` and a small alarm-icon SVG appears beside it — `transition: 0.3s ease;`. Message in mono uppercase: `EXCEEDED NDL.` or `RAPID ASCENT — REVIEW.`. Brief but firm; dive errors are serious.

page enter: dive cards reveal with `0.06s` stagger, each fading and translating from `translateY(8px) → 0` over `0.4s ease-out`. Caustic light patterns continue drifting in the background.

ambient caustics: a subtle SVG/CSS animation of underwater light caustics drifting slowly across the body background — overlapping bright spots that wave and shift like sunlight through pool water.

---

## atmosphere

- caustic-light overlay (signature): the body background uses a `--abyss-deep` to `--depth-mid` vertical gradient with an animated overlay of SVG caustic patterns at low opacity, slowly drifting via `transform: translate()` over `30s linear infinite` — the wavering light from the surface above
- depth gradient: pages can include a top-to-bottom gradient suggesting depth — surface-bright at the top fading to abyss-deep at the bottom, with content cards arranged vertically along this depth column
- dive-computer faux hardware: cards can be styled to look like physical dive computer housing — chunky dark plastic with embedded LCD screens, raised buttons with cyan backlight
- bubbles ambient effect: small SVG circles rising slowly across the page background at very low opacity — drifting bubbles of trapped air
- images: `filter: contrast(1.08) saturate(1.05);` with a thin `2px solid var(--surface-water)` border and `border-radius: 8px`. Underwater photographs feel underwater-corrected: slight blue cast retained, hot coral colors preserved.
- LCD screen glow: any LCD-styled element gains a soft cyan halo `box-shadow: 0 0 20px rgba(109,239,255,0.12); inset 0 0 16px rgba(109,239,255,0.06);` — the characteristic backlit-pixel glow of dive-computer displays

---

## editorial voice

button labels: dive-instructor imperatives. `LOG DIVE`, `START DESCENT`, `CHECK GAS`, `BEGIN SAFETY STOP`, `END DIVE`, `VIEW PROFILE`, `PLAN NEXT DIVE`, `ABORT — ASCEND NOW`. uppercase. mono or Inter bold. clinical-but-cheerful.

headings: log-entry style. `DIVE 087 · BLUE HOLE, BELIZE`, `LOG SUMMARY`, `DECOMPRESSION OBLIGATION`, `SURFACE INTERVAL`, `EQUIPMENT CHECKLIST`. Uppercase Inter or Cap-mono depending on hierarchy.

metadata: dive-computer data format in mono. `DEPTH: 28.4 m`, `RUN TIME: 47:32`, `NDL: 18:00`, `TEMP: 24°C`, `AIR: 110 bar`, `SAC: 14.2 L/min`, `MOD EAN32: 33.5 m`. Uppercase mono labels, tabular figures for values.

placeholders: lowercase Inter. `dive site name...`, `your buddy's name...`, `notes from the dive...`, `depth in meters...`. utility, clean.

empty states: `No dives logged yet. Time to get wet.`, `The logbook is empty. Plan your first dive.`, `No equipment registered.`, `No certifications on file.`. Friendly-instructive, two-sentence pairs.

error messages: `EXCEEDED NDL — review profile.`, `RAPID ASCENT detected — log incident.`, `GAS LOW — surface now.`, `BUDDY OFFLINE — check team status.`. Uppercase warning then sentence-case detail. The voice is the dive computer's: clipped, decisive, safety-first.

success messages: `Dive logged.`, `Profile saved.`, `Safety stop complete.`, `Surfaced — welcome back.`. Sentence case, period, brief. Quietly satisfied.

---

## cursor & selection

- default: `cursor: default`
- interactive: `cursor: pointer`
- text input: `cursor: text; caret-color: var(--lcd-cyan);` — the cyan LCD-cursor blink
- drag: `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--surface-water); color: var(--abyss-deep); }` — selection is reef-water turquoise

---

**when to reach for this genome**

Use `dive_log.aqua` when the prompt asks for recreational scuba, dive planning, diver certification, underwater trip logs, dive-computer readouts, gas and depth monitoring, reef exploration, buddy checks, safety-stop workflows, no-decompression-limit tables, or any product that should feel like a water-resistant sport instrument used before, during, or after a dive.

Reach for it when the concrete cues are bright reef turquoise over deep blue water, chunky plastic dive-computer bezels, cyan LCD numerals, depth/time/air/temperature columns, ascent-rate or NDL status bars, safety yellow caution markers, high-vis orange surface-buoy alerts, green safe-zone arcs, waterproof log cards, dive flags, and clipped instructor language such as `CHECK GAS`, `BEGIN SAFETY STOP`, or `LOG DIVE`.

Do not use it for submarine warfare, sonar contact classification, torpedo alerts, passive search rooms, naval command tables, or gray-green tactical darkness; use `sonar_array.sub`. Do not use it for hostile deep-ocean research stations, anomaly monitoring, abyssal wireframes, or sci-fi void telemetry; use `abyssal_telemetry.rift`. Do not use it for general laboratory instruments, multimeters, oscilloscopes, or industrial measurement hardware without the diving context; use `precision_instrument.met`. Do not use it for aircraft instruments, attitude tapes, waypoints, or avionics procedure panels; use `flight_deck.pfd`. Do not use it for synoptic maps, radar composites, METAR/TAF bulletins, or public weather warnings; use `weather_bureau.wx`.

It is strongest when the main workflow is plan, descend, monitor, stop, surface, log, review profile, or verify safety. If the prompt is underwater but not recreational diving, route to the genome that owns the operational environment.

---

## anti-patterns — this genome NEVER:

1. uses warm Caribbean-tourism colors as flat broad surfaces (tropical pink, hibiscus red, sunset orange beyond hi-vis-orange). The genome is technical-recreational: cool deep blues dominate; warm colors appear only as safety/alert markers.
2. uses serif typography for primary content. All display and body are clean modern sans (Inter, DM Sans). Mono is reserved for LCD readouts, scientific notation, and tabular data. Serifs feel wrong on a dive computer.
3. uses border-radius below 4px on hardware-style cards. Dive-computer housing is chunky rounded plastic; cards mimicking it use 8–16px. Pure 0px corners feel brutalist, not recreational sport.
4. uses fast bouncy animations. Motion is clipped, mechanical, instrument-precise. LCD readouts tick discretely (`steps()`); transitions are short eased curves; nothing wobbles.
5. uses lifestyle-marketing voice ("Discover your next adventure!", "Dive into something amazing!"). Voice is technical-recreational: `Log dive.`, `Begin safety stop.`, `Check gas.`. Clipped, useful, like a dive instructor's briefing.
6. uses bright daylight backgrounds. The genome lives underwater — backgrounds are abyss-deep to depth-shallow gradients. The only bright tones are LCD cyan, safety yellow, and surface-marker orange, all of which appear as concentrated points against the blue.
7. uses photographs without the underwater-light treatment. Images carry slight blue cast retention and `contrast: 1.08` — they read as taken under water, not on a sunlit beach.
8. uses warning red (`--no-deco-red`) for decoration. Red is reserved exclusively for genuine alerts: NDL exceeded, decompression required, gas critical. Decorative use desensitizes the user to actual danger.
9. uses smooth gradient interpolation on numerical readouts. Numbers change in discrete steps (depth, time, pressure). Smooth lerp on a dive-computer number is unrealistic and feels like a toy.
10. mixes more than 2 alert/safety colors on screen simultaneously. The hierarchy is strict: green (safe), yellow (caution), orange (warning), red (critical). Showing all four at once creates alarm-fatigue; show only the most severe relevant state.
