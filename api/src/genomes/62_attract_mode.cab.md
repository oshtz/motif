---
id: "62"
name: attract_mode.cab
keywords:
  - arcade
  - cabinet
  - retro gaming
  - pixel
  - coin-op
  - attract mode
  - high score
  - 8-bit
  - scanline
  - joystick
  - insert coin
  - fighting game
---

### genome 62: `attract_mode.cab`

> identity: 1990s arcade cabinet attract screen. The machine is unattended, cycling through its demo — bright saturated CRT colors on black, pixel bitmap fonts at display scale, scanline overlay, coin-slot UI metaphors, high-score table layouts. Capcom vs SNK character select screens, Pac-Man attract loops, Street Fighter II "INSERT COIN" prompts. Loud, bright, competitive, begging for your quarter.

**surface**

colors:
```
--bg: #000000;                /* pure black CRT void — the unlit phosphor */
--bg-cabinet: #0a0a0a;       /* barely-there dark for outer cabinet bezel */
--yellow: #FFD700;            /* electric coin-slot yellow — scores, headers, prompts */
--yellow-dim: #B8960F;        /* dimmed yellow for secondary score text */
--magenta: #FF2E8B;           /* hot P1 magenta — player one indicators, damage */
--cyan: #00E5FF;              /* electric P2 cyan — player two indicators, freezes */
--red: #FF0030;               /* danger red — health bars, damage flash, warnings */
--white: #FFFFFF;             /* pure CRT white — flash, highlight, selected text */
--white-20: rgba(255,255,255,0.2);  /* scanline overlay tint, ghost states */
--white-08: rgba(255,255,255,0.08); /* subtle grid, disabled elements */
--green: #00FF41;             /* matrix green — success, GO!, bonus indicators */
--blue: #3344FF;              /* deep arcade blue — background accents, P2 alt */
```

the screen is overwhelmingly black. every color exists as bright phosphor emission against the void. colors should feel like they're physically glowing — achieved through colored `box-shadow` bleeds on bright elements. nothing is pastel. nothing is muted. every hue is pushed to CRT saturation.

typography:
- display/title: `"Press Start 2P", monospace` — pixel bitmap font for all display text. `font-size: clamp(32px, 6vw, 64px); font-weight: 400; line-height: 1.4; letter-spacing: 2px; text-transform: uppercase`. this is the attract-screen headline font.
- body/ui: `"VT323", "Courier New", monospace` — secondary pixel font for readable blocks. `font-size: 20px; font-weight: 400; line-height: 1.5; text-transform: uppercase`.
- score/data: `"Press Start 2P", monospace` — `font-size: 16px; letter-spacing: 4px`. scores are always monospaced, always tracking wide for that tabular arcade look.
- minimum body size: `16px` — nothing smaller. arcade screens are viewed from standing distance.
- ALL text is `text-transform: uppercase`. no exceptions. lowercase does not exist in this genome.
- `text-shadow: 0 0 8px currentColor` on display text — simulates CRT phosphor bloom.

borders:
- structural: `2px solid var(--yellow)` — the default panel edge, evoking cabinet screen borders.
- accent: `3px solid var(--magenta)` or `3px solid var(--cyan)` — player-specific panel borders.
- `border-radius: 0px` — absolute zero on everything. pixels are rectangles. no rounding, no pills, no curves.
- decorative: `4px double var(--yellow)` — used for high-score tables and title frames, evoking arcade marquee borders.

spacing:
- tight and dense. `padding: 8px 12px` for most components. `gap: 4px–8px` between grid items.
- screen sections stack with `16px` vertical gaps — compact, every pixel of screen real estate used.
- outer page padding: `16px` — the cabinet bezel edge.
- hero/title areas get `24px–32px` vertical padding — the only breathing room.

**color distribution**

- 60% pure black CRT void (`--bg`) — the dominant surface, the unlit screen
- 20% electric yellow (`--yellow`) — scores, headers, coin prompts, primary UI text
- 8% magenta/cyan split (`--magenta`, `--cyan`) — player indicators, alternating accents
- 7% white (`--white`) — flash states, selected text, active highlights
- 5% red/green (`--red`, `--green`) — danger/success states, health bars, GO prompts

yellow is the workhorse. it's the color of credits, high scores, and INSERT COIN. magenta and cyan split player identity. red and green are functional — damage and success. black does the rest.

**component patterns**

buttons:
- primary: `background: var(--yellow); color: var(--bg); border: 2px solid var(--yellow); padding: 12px 24px; font-family: "Press Start 2P", monospace; font-size: 14px; text-transform: uppercase; border-radius: 0; cursor: pointer; text-shadow: none; box-shadow: 0 0 12px var(--yellow-dim)` — glowing arcade prompt.
- secondary: `background: transparent; color: var(--yellow); border: 2px solid var(--yellow); padding: 12px 24px; font-family: "Press Start 2P", monospace; font-size: 14px; text-transform: uppercase; border-radius: 0` — outlined coin-slot style.
- danger: same as primary but with `--red` replacing `--yellow`. used for destructive actions, "GAME OVER" confirms.
- P1 action: `background: var(--magenta); color: var(--bg); border: 2px solid var(--magenta); box-shadow: 0 0 12px rgba(255,46,139,0.4)` — player one specific.
- P2 action: `background: var(--cyan); color: var(--bg); border: 2px solid var(--cyan); box-shadow: 0 0 12px rgba(0,229,255,0.4)` — player two specific.

inputs:
- `background: var(--bg); border: 2px solid var(--yellow); padding: 10px 12px; font-family: "VT323", monospace; font-size: 20px; color: var(--yellow); text-transform: uppercase; border-radius: 0`
- placeholder: `color: var(--yellow-dim)` — dimmed yellow, like faded screen phosphor.
- focus: `border-color: var(--white); box-shadow: 0 0 8px var(--yellow)` — glows on focus.
- caret: `caret-color: var(--yellow)` with blinking animation matching arcade cursor rhythm.

cards/panels:
- `background: var(--bg); border: 2px solid var(--yellow); padding: 16px` — black screen panel with yellow border.
- header inside card: `border-bottom: 2px solid var(--yellow); padding-bottom: 8px; margin-bottom: 12px; font-family: "Press Start 2P"; font-size: 14px; color: var(--yellow); text-transform: uppercase`.
- player cards use their color: P1 gets `--magenta` border, P2 gets `--cyan` border.
- featured/highlight card: `border: 4px double var(--yellow); box-shadow: 0 0 20px rgba(255,215,0,0.3)` — the marquee treatment.

navigation:
- horizontal bar with `background: var(--bg); border-bottom: 2px solid var(--yellow); padding: 12px 16px`.
- items styled as menu selections: `font-family: "Press Start 2P"; font-size: 12px; color: var(--yellow); text-transform: uppercase; letter-spacing: 2px`.
- active item: `color: var(--bg); background: var(--yellow)` — full inversion, like a highlighted menu option.
- prefix active items with `>` or `>>` — the arcade menu cursor indicator.

tables (high-score format):
- `border-collapse: collapse; width: 100%; font-family: "Press Start 2P", monospace`.
- header: `font-size: 12px; color: var(--yellow); text-transform: uppercase; border-bottom: 2px solid var(--yellow); padding: 8px 4px; text-align: left`.
- rows: `border-bottom: 1px solid var(--white-08); padding: 8px 4px; font-size: 14px; color: var(--yellow)`.
- rank column: `color: var(--white); width: 40px` — position numbers in white.
- top 3 rows get special treatment: 1st `color: var(--yellow)`, 2nd `color: var(--cyan)`, 3rd `color: var(--magenta)`.
- score column: `text-align: right; letter-spacing: 4px; font-variant-numeric: tabular-nums`.

lists:
- no bullets. items prefixed with rank number or `>` cursor.
- `font-family: "VT323"; font-size: 20px; color: var(--yellow); padding: 4px 0`.
- active list item: `background: var(--yellow); color: var(--bg); padding: 4px 8px` — full highlight inversion.

modals/overlays:
- `background: var(--bg); border: 4px double var(--yellow); padding: 24px; box-shadow: 0 0 40px rgba(255,215,0,0.3); position: fixed; z-index: 1000`
- backdrop: `background: rgba(0,0,0,0.85)` — deep dark, almost total blackout.
- modal title centered, large: `font-family: "Press Start 2P"; font-size: 24px; color: var(--yellow); text-align: center; text-shadow: 0 0 12px var(--yellow)`.
- "CONTINUE?" modals include countdown text: `color: var(--red); animation: blink 0.5s step-end infinite`.
- close action: `[ESC]` text in corner or `X` button in `--red`.

badges/tags:
- `display: inline-block; border: 2px solid var(--yellow); padding: 2px 10px; font-family: "Press Start 2P"; font-size: 10px; color: var(--yellow); text-transform: uppercase; border-radius: 0`.
- multiplier badges: `background: var(--yellow); color: var(--bg)` — inverted, like "x2", "x5", "BONUS".
- rank badges: S rank in `--yellow`, A in `--cyan`, B in `--magenta`, C in `--white`.
- live/active badge: blinking border via `animation: border-flash 1s step-end infinite`.

**interaction language**

- hover: instant color flash — `background: var(--yellow); color: var(--bg)` for text elements. `box-shadow: 0 0 16px` glow intensifies on bordered elements. `transition: none` — all changes are instantaneous, no easing.
- active/pressed: `transform: scale(0.95)` brief pulse, `transition: transform 0.05s step-end` — a hard, mechanical press like a physical arcade button.
- focus: `outline: 2px solid var(--white); outline-offset: 2px; animation: blink-outline 0.8s step-end infinite` — blinking cursor outline, the arcade select indicator.
- selected: `background: var(--yellow); color: var(--bg); animation: selected-pulse 1s step-end infinite` — inverted with a blink. the machine is always alive.
- disabled: `opacity: 0.2; color: var(--white-20); border-color: var(--white-08); pointer-events: none` — ghosted phosphor, burned-out look.
- drag: `cursor: grabbing; outline: 2px dashed var(--cyan); box-shadow: 0 0 8px var(--cyan)`.

**motion & feedback**

- transitions: FAST. `0.05s–0.1s` maximum. most state changes are `transition: none` — instant, like CRT pixel switching. use `step-end` timing for anything that does animate, never smooth easing.
- keyframe signature: `@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }` with `step-end` — the arcade blink. used on INSERT COIN prompts, selected states, cursor indicators.
- loading: `NOW LOADING` text with cycling dots (`...` animating), or horizontal color bars scrolling, or a percentage counter incrementing `078%...079%...080%`. never a spinner. never a skeleton.
- success: score-increment animation — number rapidly counts up with `color: var(--green)` flash. element briefly flashes white then returns. text reads `PERFECT!` or `NEW RECORD!`.
- error: screen-shake effect (`transform: translateX` oscillation, 3 frames, ±4px). `color: var(--red)` flash. text reads `GAME OVER` or `ERROR` or `FAULT`. a brief full-screen red tint flash.
- page transitions: hard cut. no fade, no slide. instant swap like switching game screens.
- attract-mode idle animation: key UI elements blink and cycle — "INSERT COIN" flashes, high scores scroll, colors shift between magenta and cyan in demo areas. this ambient blinking is the genome's heartbeat.

**atmosphere**

- CRT scanline overlay: `background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px); pointer-events: none; position: fixed; inset: 0; z-index: 9999` — applied to the entire viewport, always visible.
- CRT screen curvature: outer container gets `border-radius: 8px` (the ONLY border-radius in the genome — simulating the CRT glass edge) and `box-shadow: inset 0 0 60px rgba(0,0,0,0.5)` for vignette darkening at edges.
- phosphor glow: bright elements bleed light via `box-shadow: 0 0 Npx color` where N scales with element importance. headers glow more than body text. buttons glow more than labels.
- screen flicker: subtle `animation: flicker 0.15s infinite` with opacity varying `0.97–1.0` on the main content container — simulates CRT refresh variance. barely perceptible but adds life.
- the ambient feel: a dark arcade at 11pm. screens are the only light source. colors bleed into the surrounding black. the room hums with idle attract loops.
- no gradients on UI surfaces. no blur effects. no frosted glass. the CRT has only two states: pixel-on (bright) and pixel-off (black).

**editorial voice**

button labels: `INSERT COIN`, `PRESS START`, `CONTINUE`, `SELECT`, `FIGHT!`, `READY`, `GO!`, `QUIT`, `YES / NO`, `REMATCH`, `VIEW SCORES`
- ALL CAPS. short. imperative. urgent. every button is a command barked by the machine.

headings: ALL CAPS declarative statements or single-word callouts.
- examples: `HIGH SCORE`, `PLAYER SELECT`, `STAGE CLEAR`, `ROUND 1`, `BONUS STAGE`, `GAME OVER`, `WINNER!`, `FINAL RESULTS`, `HALL OF FAME`, `CREDITS`
- headings are announcements. the cabinet is shouting at passers-by.

metadata: score format with leading zeros: `SCORE: 000000`, `HI-SCORE: 999999`, `CREDIT: 00`, `ROUND: 03`, `STAGE: 07`, `TIME: 99`, `1UP`, `2UP`, `RANK: S`, `COMBO: x12`.
- always monospaced, always tracking wide, always uppercase.

placeholders: `ENTER NAME...`, `AAA`, `SEARCHING...`, `PRESS ANY KEY`
- three-letter initial entry is the canonical input pattern. placeholders reference arcade conventions.

empty states: `NO DATA`, `WAITING FOR PLAYER 2`, `INSERT COIN TO BEGIN`, `PRESS START`
- terse, direct, machine-voice. the cabinet speaks in imperatives.

error messages: `ERROR`, `FAULT`, `CONNECTION LOST`, `OUT OF CREDITS`, `SERVICE REQUIRED`
- single phrases. no explanation. the machine doesn't apologize.

success messages: `PERFECT!`, `NEW RECORD!`, `STAGE CLEAR!`, `BONUS!`, `WINNER!`, `ROUND COMPLETE`
- exclamation points are permitted here — the machine celebrates.

**cursor & selection**

- default body: `cursor: default`
- interactive elements: `cursor: pointer`
- game/interactive areas: `cursor: crosshair` — targeting reticle.
- custom cursor option: a 16x16 pixel crosshair PNG in `--yellow`, or `cursor: crosshair` as fallback.
- text inputs: `cursor: text` with `caret-color: var(--yellow)`.
- `::selection { background: var(--yellow); color: var(--bg); }` — electric yellow highlight on black text. the selection itself glows.
- `::selection` on colored text (magenta/cyan): maintains the text color as background, swaps to black text.

**when to reach for this genome**

Use `attract_mode.cab` when the prompt asks for an arcade cabinet, coin-op machine, attract screen, high-score table, player select, fighting-game menu, retro game launcher, cabinet kiosk, score chase, "insert coin" callout, or a product that should feel like a saturated CRT demo loop pulling people in from across a dark arcade.

Reach for it when the visual cues are pure black phosphor void, electric yellow prompts, magenta/cyan P1/P2 accents, red/green game-state flashes, scanlines, pixel bitmap type, all-caps machine voice, blinking step-end motion, dense scoreboards, hard rectangular borders, and zero-radius controls. It is strongest when the UI can shout, blink, count points, rank players, and use game-screen conventions as the actual information architecture.

Choose it for:
- game dashboards, leaderboard products, esports overlays, retro kiosk demos, launch screens, gamified onboarding, arcade-themed landing pages, and competitive tools where score, rank, credit, round, stage, or combo metadata matters.
- flows where `INSERT COIN`, `PRESS START`, `PLAYER SELECT`, `HIGH SCORE`, `CONTINUE?`, `READY`, or `GAME OVER` naturally describe the interaction.
- interfaces that benefit from CRT scanlines, phosphor glow, instant state changes, and loud visual urgency rather than subtle nostalgia.

Do not choose it for monochrome handheld-console constraints; use `handheld_gb.dmg` for Game Boy green LCD. Use `pinball_backglass.tilt` for electromechanical pinball, painted backglass, bulbs, and solenoids; `geocities_page.www` for early-web amateur HTML; `carnival_midway.show` for fairground booths, tickets, and incandescent midway signs; `groove_flyer.90s` for rave-poster print energy; and `vending_machine.aluminum` for coin-operated hardware without the arcade game screen. If the prompt asks for refined cyberpunk terminals or developer consoles, route to `underground_terminal.crt` or `kernel_grid.dev` instead.

**anti-patterns — this genome NEVER:**

1. uses serif fonts or elegant display typefaces — only pixel/bitmap/monospace fonts exist in this world
2. uses subtle, muted, or pastel colors — every color is pushed to maximum CRT saturation; nothing is gentle
3. uses transitions longer than `0.2s` or smooth easing curves — state changes are instant or use `step-end`; the CRT does not ease
4. uses `border-radius` on UI components — everything is pixel-sharp rectangles (the only radius is on the outer CRT screen container)
5. uses lowercase text in any UI element — headings, buttons, labels, metadata, placeholders: ALL CAPS, always
6. uses sophisticated, conversational, or apologetic editorial voice — the machine barks commands: INSERT COIN, PRESS START, GAME OVER
7. uses transparency, backdrop-blur, frosted glass, or glassmorphism — the CRT has on-pixels and off-pixels, nothing in between
8. uses generous whitespace or airy layouts — arcade screens are dense; every pixel is used; information is packed tight
9. uses icons from modern icon libraries (Material, Feather, etc.) — if icons are needed, they are pixel-art style or simple geometric shapes
10. uses slow fade-in content reveals or scroll-triggered animations — content appears instantly, like a screen change in a game
