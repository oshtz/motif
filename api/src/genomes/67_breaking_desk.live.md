---
id: "67"
name: breaking_desk.live
keywords:
  - news
  - broadcast
  - television
  - breaking
  - live
  - ticker
  - anchor
  - headline
  - chyron
  - bulletin
  - alert
  - broadcast journalism
---

### genome 67: `breaking_desk.live`

> identity: 24-hour television news control room graphics. Red breaking-news banners, white lower-third chyrons, scrolling tickers, LIVE bugs, countdown clocks, split-screen panels, field-correspondent windows, and anchor-desk authority. CNN urgency, BBC institutional discipline, NHK precision. The feed never stops and every element must look like it can go on air.

**surface**

colors:
```
--broadcast-red: #CC0000;                 /* breaking banners, alert bars, hard urgency */
--live-red: #FF0000;                      /* LIVE bug, recording dot, urgent pulse */
--anchor-blue: #003366;                   /* network authority, top bars, section headers */
--anchor-blue-deep: #001E3C;              /* deep studio blue, major panel background */
--ticker-dark: #111426;                   /* ticker bars, control-room void */
--field-gray: #2D3142;                    /* secondary panels, muted studio surfaces */
--chyron-white: #FFFFFF;                  /* lower-third text, cards, information plates */
--copy-ice: #EAF0F7;                      /* softer white for body text on dark */
--copy-muted: #9AA8B8;                    /* metadata and tertiary labels */
--signal-yellow: #FFD200;                 /* developing story, caution, priority flag */
--wire-orange: #FF8A00;                   /* special report, live route status */
--on-air-green: #00B341;                  /* confirmed, available, signal locked */
--glass-line: rgba(255,255,255,0.16);     /* split-screen separators */
--red-glow: rgba(204,0,0,0.34);           /* alert glow and focus halo */
--studio-shadow: rgba(0,0,0,0.55);        /* deep video-wall shadow */
```

typography:
- headline / breaking banner: `"Arial Narrow", "Roboto Condensed", "Inter", sans-serif; font-weight: 900; font-size: 30-56px; line-height: 0.95; letter-spacing: -0.01em; text-transform: uppercase;`
- lower-third headline: `"Inter", "Roboto", "Helvetica Neue", sans-serif; font-weight: 800; font-size: 18-28px; line-height: 1.05; letter-spacing: 0; text-transform: uppercase;`
- anchor copy / summaries: `"Inter", "Roboto", sans-serif; font-weight: 500; font-size: 14-16px; line-height: 1.45; color: var(--copy-ice);`
- metadata, timestamps, rundown IDs, countdowns: `"JetBrains Mono", "Roboto Mono", monospace; font-weight: 600; font-size: 11-13px; letter-spacing: 0.04em; font-variant-numeric: tabular-nums; text-transform: uppercase;`
- ticker text: `"Inter", sans-serif; font-weight: 700; font-size: 13-15px; letter-spacing: 0.03em; text-transform: uppercase; white-space: nowrap;`
- labels are almost always uppercase. body summaries may use sentence case only inside paragraph text.

borders:
- lower thirds and broadcast plates use `border-radius: 0px`; they are hard-edged television graphics.
- buttons, controls, and compact tags use `border-radius: 2px` or `3px`; never softer.
- major alert panels: `3px solid var(--broadcast-red)`.
- ordinary split-screen panels: `1px solid var(--glass-line)`.
- top/bottom broadcast rails: `border-top` or `border-bottom: 3px solid var(--broadcast-red)`.
- focus rings: `outline: 2px solid var(--signal-yellow); outline-offset: 2px; box-shadow: 0 0 0 3px rgba(255,210,0,0.22);`

spacing:
- dense television layout: `gap: 8-14px`, `padding: 8-16px` for most panels.
- top bars and lower thirds: `height: 48-64px`, `padding-inline: 18-28px`.
- ticker bars: `height: 32-40px`, `padding: 0 16px`.
- split-screen grids use 16:9 panels with `gap: 6px`; gutters are narrow like a control-room multiviewer.
- page chrome should leave room for persistent top banner and bottom ticker; never center a loose card in empty space.

**color distribution**

- 34% ticker dark / anchor blue deep (`--ticker-dark`, `--anchor-blue-deep`) - the studio void, video-wall background, and permanent rails.
- 22% chyron white / copy ice (`--chyron-white`, `--copy-ice`) - lower-third information, text, bright plates, data fields.
- 18% anchor blue (`--anchor-blue`) - authoritative sections, mastheads, active network identity.
- 14% field gray (`--field-gray`) - secondary panels, cards, rundown rows, muted video slots.
- 7% broadcast red / live red (`--broadcast-red`, `--live-red`) - breaking alerts, live markers, destructive action, urgent striping.
- 3% signal yellow / wire orange - developing story and special report highlights.
- 2% on-air green - confirmed signals and success states.

Red is never wallpaper. It is a command interrupt. Dark blue and black carry the room; white chyrons deliver facts.

**component patterns**

buttons:
- primary breaking action: `background: var(--broadcast-red); color: var(--chyron-white); border: none; border-radius: 3px; padding: 10px 22px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;`
- secondary network action: `background: var(--anchor-blue); color: var(--chyron-white); border: 1px solid rgba(255,255,255,0.22); border-radius: 3px; padding: 10px 20px;`
- ghost action: `background: transparent; color: var(--copy-ice); border: 1px solid var(--glass-line); border-radius: 3px;`
- icon buttons are square `36-40px`, red only for urgent/destructive commands, blue/gray otherwise.

inputs:
- `background: var(--field-gray); border: 1px solid var(--glass-line); border-radius: 3px; color: var(--chyron-white); padding: 10px 12px; font-family: "Inter", sans-serif;`
- labels sit above fields in mono uppercase: `font-size: 10px; color: var(--copy-muted); letter-spacing: 0.08em;`
- focus: `border-color: var(--signal-yellow); box-shadow: 0 0 0 2px rgba(255,210,0,0.22); outline: none;`
- placeholders: `color: rgba(234,240,247,0.38); text-transform: uppercase;`

cards / panels:
- default panel: `background: var(--ticker-dark); border: 1px solid var(--glass-line); border-radius: 3px; box-shadow: 0 8px 22px var(--studio-shadow);`
- panel header strip: `background: var(--anchor-blue); color: var(--chyron-white); padding: 8px 14px; font-weight: 800; text-transform: uppercase;`
- content area: `padding: 12px 14px; color: var(--copy-ice);`
- alert panel: same structure but `border: 3px solid var(--broadcast-red); box-shadow: 0 0 28px var(--red-glow), 0 12px 32px var(--studio-shadow);`

breaking banner:
- full-width top or mid-page strip: `background: var(--broadcast-red); color: white; min-height: 56px; display: flex; align-items: center;`
- left tab: `background: #8E0000; padding: 0 18px; height: 100%; font-weight: 900; letter-spacing: 0.08em;`
- headline area: `padding: 0 24px; font-weight: 900; font-size: clamp(24px, 4vw, 52px); text-transform: uppercase;`
- should feel like the system has interrupted the schedule.

lower thirds:
- signature element. `background: linear-gradient(90deg, var(--broadcast-red) 0 26%, var(--anchor-blue) 26% 100%); color: white; height: 56px; display: grid; grid-template-columns: 26% 1fr auto; align-items: center;`
- segment label: uppercase category in red segment, `font-weight: 900; letter-spacing: 0.08em; padding-inline: 18px;`
- story line: `font-weight: 800; font-size: 20-26px; padding-inline: 18px; text-transform: uppercase;`
- timestamp/call-sign block on right: mono, compact, white on `--anchor-blue-deep`.

tickers:
- persistent bottom rail: `background: var(--ticker-dark); border-top: 3px solid var(--broadcast-red); height: 36px; overflow: hidden; display: flex; align-items: center;`
- ticker label: `background: var(--broadcast-red); color: white; height: 100%; padding: 0 14px; display: flex; align-items: center; font-weight: 900;`
- moving text: `animation: tickerScroll 22s linear infinite; padding-left: 20px;`
- separate stories with `//` or `|`; never bullet dots.

navigation:
- top network rail: `background: var(--anchor-blue-deep); border-bottom: 3px solid var(--broadcast-red); height: 48px;`
- brand block on left, live time on right, nav tabs centered or left aligned.
- active tab: `background: var(--chyron-white); color: var(--anchor-blue); border-bottom: 3px solid var(--signal-yellow);`
- inactive tabs: white text at `opacity: 0.76`, uppercase, compact.

headers:
- include LIVE bug, clock, program label, and headline deck.
- LIVE bug: red rectangle plus red dot, `font-weight: 900; font-size: 11px; padding: 4px 8px; animation: livePulse 1.6s infinite;`
- clock: mono tabular, e.g. `14:32:09 GMT`, always visible when the surface suggests live operation.

footers:
- usually a ticker, data source rail, or legal broadcast strip.
- `background: var(--ticker-dark); color: var(--copy-muted); border-top: 1px solid var(--glass-line); font-size: 11px;`
- include source and update cadence: `SOURCE: WIRE DESK // UPDATED 14:32 GMT`.

lists:
- rundown list rows: timestamp left in mono, slug/headline center, status badge right.
- breaking rows get `border-left: 4px solid var(--broadcast-red); background: rgba(204,0,0,0.08);`
- normal rows: `border-bottom: 1px solid rgba(255,255,255,0.08); padding: 9px 12px;`
- selected row uses blue fill plus yellow vertical rule.

tables:
- `background: var(--ticker-dark); border: 1px solid var(--glass-line); border-collapse: collapse;`
- header: `background: var(--anchor-blue); color: white; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;`
- body cells: `padding: 8px 10px; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 13px;`
- numeric columns use mono tabular; status columns use badges.

dividers:
- major: `height: 3px; background: var(--broadcast-red);`
- minor: `border-top: 1px solid var(--glass-line);`
- split-screen seams: `2px solid #000` with a subtle white inside line to mimic video-wall separators.

modals / overlays:
- alert modal: `background: var(--ticker-dark); border: 3px solid var(--broadcast-red); border-radius: 4px; box-shadow: 0 0 36px var(--red-glow), 0 20px 70px rgba(0,0,0,0.7);`
- header: `background: var(--broadcast-red); color: white; padding: 10px 16px; font-weight: 900; text-transform: uppercase;`
- backdrop: `background: rgba(0,10,22,0.78);` no blur; the studio remains visible but darkened.
- close button reads `CLOSE` or uses a compact X in white on red, not a floating soft-circle.

badges:
- LIVE: `background: var(--live-red); color: white; border-radius: 3px; padding: 3px 8px; font-weight: 900; font-size: 11px;`
- DEVELOPING: `background: var(--signal-yellow); color: #111426;`
- CONFIRMED: `background: var(--on-air-green); color: white;`
- EXCLUSIVE / SPECIAL REPORT: `background: var(--wire-orange); color: white;`
- all badges are uppercase, rectangular, and compact.

split-screen video wall:
- grid panels maintain `aspect-ratio: 16 / 9`, `background: #05080F`, `border: 2px solid #000`, and top-left source label.
- active feed gets red frame and LIVE bug; inactive feeds get gray or blue frames.
- use tiny signal labels like `CAM 04`, `FIELD UNIT`, `REMOTE`, `SAT LINK`.

**interaction language**

hover:
- buttons brighten by `filter: brightness(1.12)` and show `box-shadow: 0 0 14px var(--red-glow)` for red actions.
- rows gain red or blue left rule; video panels raise border contrast.
- transition stays fast: `transition: color 0.12s ease, background 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;`

active / pressed:
- `filter: brightness(0.86); transform: translateY(1px); transition: 0.05s;`
- no squishy scale or spring. broadcast controls click like switcher buttons.

focus:
- `outline: 2px solid var(--signal-yellow); outline-offset: 2px; box-shadow: 0 0 0 3px rgba(255,210,0,0.22);`
- focus must be obvious against red, blue, and dark backgrounds.

selected:
- `background: var(--broadcast-red); color: white; border-color: var(--broadcast-red);`
- selected non-alert items may use `background: var(--anchor-blue); border-left: 4px solid var(--signal-yellow);`

disabled:
- `opacity: 0.34; filter: grayscale(1); pointer-events: none;`
- disabled labels may read `OFF AIR`, `NO SIGNAL`, or `STANDBY`.

drag:
- `cursor: grabbing; box-shadow: 0 8px 28px rgba(0,0,0,0.55); border: 2px dashed var(--signal-yellow); background: rgba(0,51,102,0.88);`
- drag-over targets show red/blue split outline, as if a production switcher bus is armed.

**motion & feedback**

transitions:
- baseline: `0.12-0.16s ease` for ordinary UI state. Broadcast graphics snap into place.
- lower-third entrance: `transform: translateY(100%)` to `translateY(0)` over `180ms cubic-bezier(0.2, 0, 0, 1)`.
- breaking banner entrance: slide down from top over `160ms`, then hold.
- never use slow fades, bouncy springs, elastic easing, or decorative parallax.

loading:
- top red progress bar sweeping left-to-right: `height: 3px; background: var(--broadcast-red); animation: sweep 1.1s linear infinite;`
- ticker loading copy: `STANDBY // ACQUIRING SIGNAL // STANDBY` scrolling in the bottom rail.
- video feed loading can show `NO SIGNAL` on a dark panel with a tiny pulsing red dot.

success:
- green `ON AIR` or `CONFIRMED` badge appears for 1.5s.
- panel border flashes `var(--on-air-green)` once, then returns to blue/gray.
- copy examples: `SIGNAL LOCKED`, `REPORT FILED`, `WIRE CONFIRMED`.

error:
- red flash twice on affected plate: `box-shadow: 0 0 24px var(--red-glow)`.
- error badge says `SIGNAL LOST`, `SOURCE DOWN`, `WIRE ERROR`, or `TRANSMISSION FAILED`.
- avoid shaking UI. broadcast error states are controlled and legible.

keyframes:
```css
@keyframes livePulse { 0%,100% { opacity: 1; } 50% { opacity: 0.45; } }
@keyframes tickerScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes sweep { from { transform: translateX(-100%); } to { transform: translateX(100vw); } }
```

**atmosphere**

The page should feel like a control room monitor wall. Dark surfaces, blue institutional rails, red emergency graphics, and white chyrons form the permanent broadcast shell.

backgrounds:
- body: `background: radial-gradient(ellipse at 50% 0%, rgba(0,51,102,0.28), transparent 55%), var(--ticker-dark);`
- subtle video-wall glow behind major content: `box-shadow: inset 0 0 80px rgba(0,30,60,0.35);`
- optional scanline texture: `repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 3px)` at 2% opacity.

textures:
- red strips can use a barely visible diagonal broadcast hatch: `repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 8px)`.
- never make the texture decorative or retro CRT-heavy; this is modern broadcast graphics, not terminal nostalgia.

overlays:
- persistent top rail and bottom ticker are encouraged on dashboards, apps, news feeds, and monitoring surfaces.
- a small LIVE bug in a corner of key previews makes the layout feel broadcast-ready.
- split-screen seams and source labels create the sense of multiple live feeds.

images/video:
- use hard rectangular crops.
- apply mild contrast/saturation lift: `filter: contrast(1.08) saturate(1.05);`
- captions sit on opaque chyrons, never translucent gradient overlays.

**editorial voice**

tone: factual, urgent, anchored, and concise. No warmth for its own sake. No jokes. No product-marketing excitement. Copy sounds like a newsroom desk deciding what can go to air.

button labels:
- `Watch Live`
- `Open Briefing`
- `File Update`
- `Confirm Source`
- `Send to Wire`
- `View Rundown`
- `Refresh Feed`
- `Cut to Live`
- `Stand By`

headings:
- uppercase or title case depending on scale. examples: `BREAKING NEWS`, `DEVELOPING STORY`, `LIVE UPDATE`, `TOP STORIES`, `SPECIAL REPORT`, `THE BRIEFING`, `FIELD REPORTS`, `ELECTION DESK`, `MARKET ALERT`, `WEATHER CENTER`.

metadata:
- `LIVE 14:32 GMT`
- `UPDATED 02 MIN AGO`
- `SOURCE: WIRE DESK`
- `FIELD UNIT: CAM 04`
- `RUNDOWN ID: A-17`
- `STATUS: CONFIRMED`
- `ANCHOR DESK // NEW YORK`

placeholders:
- `Search headlines...`
- `Enter story slug...`
- `Filter sources...`
- `Type field update...`
- `Add rundown note...`

empty states:
- `No stories filed.`
- `Feed offline.`
- `Awaiting dispatch.`
- `No confirmed sources yet.`
- `Rundown is clear.`

errors:
- `Signal lost.`
- `Source unavailable.`
- `Report could not be filed.`
- `Wire desk rejected the update.`
- `No live feed detected.`

success:
- `Report filed.`
- `Update confirmed.`
- `Signal locked.`
- `Added to wire.`
- `Rundown updated.`

**cursor & selection**

cursor: `default` on ordinary content, `pointer` on controls, `grab/grabbing` on draggable rundown cards or video feeds.

selection: `::selection { background: var(--broadcast-red); color: var(--chyron-white); }`

**when to reach for this genome**

Use `breaking_desk.live` for dashboards, monitoring products, alert centers, media/news concepts, crisis rooms, live operations, incident response, sports scoreboards, election-night views, market-moving bulletins, and any UI that needs authoritative urgency with dense, real-time information.

It is especially strong when the prompt mentions live updates, feeds, tickers, alerts, sources, timeline/rundown, field reports, incident status, command centers, or broadcast-style presentation.

Avoid it for calm portfolios, wellness apps, luxury commerce, soft editorial sites, playful games, minimalist landing pages, and any product where urgency would make the experience feel hostile.

**anti-patterns - this genome NEVER:**

1. uses serif, script, handwritten, or decorative typefaces. broadcast graphics are clean sans-serif and mono utility only.
2. uses border-radius above 4px on standard UI elements. lower thirds and chyrons are hard rectangles; controls are barely softened.
3. uses pastel, beige, muted, or wellness palettes. the visual language is red, blue, black, white, yellow, green - signal colors with authority.
4. spreads red everywhere as a decorative background. red is reserved for interruption, live state, alert, or destructive urgency.
5. uses slow transitions above 0.2s, spring easing, elastic motion, or playful bounces. graphics snap on like live broadcast packages.
6. uses casual, emotional, cute, or marketing copy. the voice is factual, active, and newsroom-direct.
7. uses generous empty whitespace as the main luxury signal. broadcast screens are information-dense and structured by rails, panels, and tickers.
8. uses frosted glass, heavy blur, translucent gradient captions, or dreamy overlay treatments. chyrons are opaque and readable from across the room.
9. uses organic shapes, blobs, stickers, or hand-drawn marks. every shape is a plate, rail, lower third, source box, ticker, or video frame.
10. hides status metadata. live time, source, rundown ID, signal state, or update cadence should be visible whenever relevant.
11. uses generic SaaS card stacks without broadcast framing. if it looks like a neutral analytics dashboard with red buttons, it failed.
12. lets decorative ticker or motion obscure primary content. movement supports the live-feed metaphor but facts remain readable at all times.
