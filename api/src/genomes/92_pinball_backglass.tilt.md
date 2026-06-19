---
id: "92"
name: pinball_backglass.tilt
keywords:
  - pinball
  - backglass
  - tilt
  - arcade
  - flipper
  - bumper
  - multiball
  - highscore
  - chrome
  - playfield
  - wizard
  - solenoid
---

### genome 92: `pinball_backglass.tilt`

> identity: 1970s electromechanical pinball machine. Vivid hand-painted backglass art, dot-matrix LED score displays, chrome ball rails, bumper-flash feedback. Bally, Williams, Gottlieb energy. The backglass is the star — hand-painted sci-fi and fantasy illustration behind glass, lit from behind with incandescent flood lamps. Not a video game — this is electromechanical: relays clicking, solenoids firing, steel balls rolling on a wooden playfield under glass. The machine lives in a dim bar at 2am, backglass blazing, plunger warm from a thousand pulls.

---

## surface

Colors:
```
--playfield-black: #0D0B10;      /* deep void behind the glass — the unlit playfield */
--backglass-magenta: #FF1493;    /* hot painted magenta — dominant backglass color, wizard robes, rocket exhaust */
--chrome-yellow: #FFD000;        /* score display yellow — chrome ball flash, lane arrows */
--electric-blue: #2E5BFF;        /* cool backglass blue — lane inserts, hyperspace fills */
--bumper-red: #FF2020;           /* pop bumper red — danger zones, drain warning */
--white-hot: #FFFFFF;            /* flash lamp white — multiball jackpot, saucer lit */
--chrome-silver: #C0C0CC;        /* ball rail chrome — trim, cabinet hardware */
--playfield-green: #00C853;      /* bonus lane green — spinner lit, rollover active */
--magenta-dim: rgba(255,20,147,0.35);  /* backglass glow pool, unlit bumper ring */
--yellow-dim: rgba(255,208,0,0.3);     /* score glow, digit shadow */
--blue-dim: rgba(46,91,255,0.3);       /* lane insert glow, passive lighting */
--glass-sheen: rgba(255,255,255,0.06); /* painted glass highlight — light on varnish */
```

Typography:
- score display / numerals: `"Oswald", "Anton", "Impact", sans-serif` at `font-weight: 700-900; font-size: clamp(28px, 5vw, 72px); letter-spacing: 0.08em; text-transform: uppercase`. This is the seven-segment LED readout — heavy, condensed, all-caps. Score panels use tabular numerals with wide tracking.
- body / labels: `"Barlow Condensed", "Oswald", sans-serif` at `font-weight: 500-700; font-size: 13-16px; text-transform: uppercase; letter-spacing: 0.05em`. Backglass art panel descriptions, rule cards, bonus multiplier labels.
- backglass headline / identity: `"Oswald", sans-serif` at `font-weight: 900; font-size: clamp(36px, 7vw, 96px); text-transform: uppercase; letter-spacing: 0.04em` — the machine name, blazing across the top of the backglass.
- minimum readable size: `13px`. Pinball rule cards are read standing, leaning over the playfield.
- ALL text in score displays and data panels is `text-transform: uppercase`. No exceptions. The LED readout has no lowercase.

Borders:
- score display panels (dot-matrix / LED): `border-radius: 0px` — absolute zero. LED housings are rectangular extrusions. No curves on any data surface.
- backglass art panels: `border-radius: 12-16px` — painted glass has rounded cabinet corners, slightly convex. Inner art panels get `border-radius: 14px`.
- playfield inserts (lane arrows, bumper rings): `border-radius: 50%` for circle inserts; `0px` for rectangular lane guides.
- primary structural border: `2px solid var(--chrome-silver)` — the cabinet metalwork.
- accent / lit border: `2px solid var(--chrome-yellow)` or `2px solid var(--backglass-magenta)` — active lanes, lit inserts.
- `box-shadow: inset 0 0 0 1px var(--chrome-silver)` inside bordered panels for double-wall cabinet feel.

Spacing:
- score panels: `padding: 8px 16px; gap: 4px` — dense, every digit counts. Compact as a seven-segment display.
- backglass / art panels: `padding: 24px 28px; gap: 20px` — the backglass breathes. Art needs room. It is not an information display; it is a painting.
- playfield components: `padding: 12px 16px; gap: 8-12px` — mid-density. Lane separators are narrow.
- outer page margin: `20px` — the cabinet surround.

---

## color distribution

- 55% playfield-black (`--playfield-black`) — the dominant void. The machine at rest, the unlit playfield between shots.
- 18% backglass-magenta (`--backglass-magenta`) — the painted heat. Wizard robes, rocket fire, fantasy sky. The eye goes here first.
- 12% chrome-yellow (`--chrome-yellow`) — score digits, lane arrows, ball-in-play indicators. The machine's number voice.
- 7% electric-blue (`--electric-blue`) — cool counterweight. Lane inserts, bonus multiplier panels, passive backglass fills.
- 4% bumper-red (`--bumper-red`) — danger and activation. Pop bumpers, drain area, TILT warning.
- 2% white-hot (`--white-hot`) — the flash. Jackpot, multiball, saucer-lit events. Used sparingly so it lands with impact.
- 2% chrome-silver + playfield-green — trim and bonus lane indicators.

Magenta is the backglass soul. Yellow is the machine's voice. Blue is the cool depth of the illustration. Red is the machine warning you. White is the machine celebrating.

---

## component patterns

Buttons:
- primary / LAUNCH: `background: var(--backglass-magenta); color: var(--playfield-black); border: 2px solid var(--backglass-magenta); border-radius: 0; padding: 12px 28px; font-family: "Oswald", sans-serif; font-weight: 700; font-size: 15px; text-transform: uppercase; letter-spacing: 0.08em; box-shadow: 0 0 14px var(--magenta-dim), 3px 3px 0px rgba(0,0,0,0.5)` — the plunger button. Hot magenta, no curves, punched.
- secondary / FLIP: `background: transparent; color: var(--chrome-yellow); border: 2px solid var(--chrome-yellow); border-radius: 0; padding: 10px 24px; font-family: "Oswald", sans-serif; font-weight: 700; font-size: 14px; text-transform: uppercase; box-shadow: 0 0 8px var(--yellow-dim)` — outlined score-color button.
- danger / TILT: `background: var(--bumper-red); color: var(--white-hot); border: 2px solid var(--bumper-red); border-radius: 0; font-weight: 700; box-shadow: 0 0 12px rgba(255,32,32,0.4)`.
- ghost / REPLAY: `background: transparent; color: var(--chrome-silver); border: 2px solid var(--chrome-silver); border-radius: 0; opacity: 0.7` — passive machine state.

Inputs:
- `background: var(--playfield-black); border: 2px solid var(--chrome-silver); border-radius: 0; color: var(--chrome-yellow); padding: 10px 14px; font-family: "Oswald", sans-serif; font-size: 15px; text-transform: uppercase; letter-spacing: 0.05em`
- placeholder: `color: rgba(192,192,204,0.4)` — dim chrome, like an unlit digit.
- focus: `border-color: var(--chrome-yellow); box-shadow: 0 0 10px var(--yellow-dim)` — the digit illuminates.
- caret: `caret-color: var(--chrome-yellow)` with blinking matching score-counter rhythm.

Score display panel (signature component):
- `background: #080608; border: 2px solid var(--chrome-silver); border-radius: 0; padding: 8px 16px; font-family: "Oswald", sans-serif; font-weight: 900; font-size: clamp(24px, 4vw, 56px); color: var(--chrome-yellow); letter-spacing: 0.1em; text-align: right; text-shadow: 0 0 8px var(--yellow-dim), 0 0 20px rgba(255,208,0,0.2); font-variant-numeric: tabular-nums`
- label above display: `font-size: 11px; color: var(--chrome-silver); letter-spacing: 0.12em; text-transform: uppercase` — "1UP", "HIGH SCORE", "BALL".
- multiple score panels sit in a row with `gap: 2px` — the backglass score header register.

Backglass art panel:
- `background: linear-gradient(145deg, #1A0D2E 0%, #0D0B10 50%, #0A1428 100%); border: 2px solid var(--chrome-silver); border-radius: 14px; padding: 28px; overflow: hidden; position: relative`
- inner painted-glass sheen: `::before { content: ""; position: absolute; inset: 0; border-radius: 14px; background: linear-gradient(135deg, var(--glass-sheen) 0%, transparent 40%); pointer-events: none }` — light catching the varnish.
- backlit glow from behind: `box-shadow: inset 0 0 40px rgba(255,20,147,0.08), inset 0 0 80px rgba(46,91,255,0.05), 0 0 30px rgba(0,0,0,0.6)` — the flood lamps behind the glass.

Cards / data panels:
- `background: #100D18; border: 2px solid var(--chrome-silver); border-radius: 0; padding: 14px 18px` — information panels with zero-radius LED housing.
- header row inside panel: `border-bottom: 1px solid rgba(192,192,204,0.2); padding-bottom: 8px; margin-bottom: 10px; font-size: 11px; color: var(--chrome-silver); text-transform: uppercase; letter-spacing: 0.12em`.

Navigation:
- horizontal bar: `background: #080608; border-bottom: 2px solid var(--chrome-silver); padding: 10px 20px`
- items: `font-family: "Oswald", sans-serif; font-size: 13px; font-weight: 700; color: var(--chrome-silver); text-transform: uppercase; letter-spacing: 0.1em`
- active item: `color: var(--chrome-yellow); text-shadow: 0 0 8px var(--yellow-dim); border-bottom: 3px solid var(--chrome-yellow); padding-bottom: 7px`
- inactive hover: color shifts to `var(--chrome-yellow)` at `opacity: 0.7`.

High score table:
- `border-collapse: collapse; width: 100%; font-family: "Oswald", sans-serif`
- header: `font-size: 11px; color: var(--chrome-silver); text-transform: uppercase; letter-spacing: 0.12em; border-bottom: 2px solid var(--chrome-silver); padding: 6px 8px`
- rows: `border-bottom: 1px solid rgba(192,192,204,0.1); padding: 8px; font-size: 16px; color: var(--chrome-yellow); font-weight: 700; letter-spacing: 0.06em`
- rank column: `color: var(--chrome-silver); width: 32px; text-align: center`
- rank 1: `color: var(--white-hot); text-shadow: 0 0 8px rgba(255,255,255,0.4)` — GRAND CHAMPION.
- rank 2: `color: var(--backglass-magenta)` — WIZARD.
- rank 3: `color: var(--electric-blue)` — EXPERT.
- score column: `text-align: right; letter-spacing: 0.1em; font-variant-numeric: tabular-nums`.

Lane insert indicators (status dots):
- unlit: `width: 14px; height: 14px; border-radius: 50%; background: #1A1520; border: 2px solid var(--chrome-silver); opacity: 0.5`
- lit / active: `background: var(--chrome-yellow); border-color: var(--chrome-yellow); box-shadow: 0 0 8px var(--yellow-dim), 0 0 16px rgba(255,208,0,0.2)` — the insert glows.
- bumper lit: `background: var(--bumper-red); border-color: var(--bumper-red); box-shadow: 0 0 10px rgba(255,32,32,0.5)`.
- special / bonus lane: `background: var(--playfield-green); border-color: var(--playfield-green); box-shadow: 0 0 8px rgba(0,200,83,0.4)`.

Lists:
- no bullets. items prefixed with `▸` in `var(--chrome-yellow)` or rank numeral.
- `font-family: "Oswald", sans-serif; font-size: 15px; font-weight: 600; color: var(--chrome-silver); text-transform: uppercase; letter-spacing: 0.05em; padding: 6px 0`
- active item: `color: var(--chrome-yellow); text-shadow: 0 0 6px var(--yellow-dim)`.

Modals / overlays:
- `background: #100D18; border: 3px solid var(--chrome-yellow); border-radius: 0; padding: 28px 32px; box-shadow: 0 0 40px var(--yellow-dim), 0 0 80px rgba(255,208,0,0.1), 0 20px 60px rgba(0,0,0,0.7); position: fixed; z-index: 1000`
- backdrop: `background: rgba(13,11,16,0.9)` — near total blackout. The machine tilts.
- modal title: `font-family: "Oswald", sans-serif; font-size: 32px; font-weight: 900; color: var(--chrome-yellow); text-align: center; text-transform: uppercase; letter-spacing: 0.1em; text-shadow: 0 0 12px var(--yellow-dim)`.
- TILT modal: border switches to `var(--bumper-red)`, title `color: var(--bumper-red)`, animation: flicker 3 times then freeze.

Badges / status tags:
- `display: inline-block; border: 2px solid var(--chrome-yellow); border-radius: 0; padding: 3px 10px; font-family: "Oswald", sans-serif; font-size: 11px; font-weight: 700; color: var(--chrome-yellow); text-transform: uppercase; letter-spacing: 0.1em`
- active / lit badge: `background: var(--chrome-yellow); color: var(--playfield-black)` — inverted, the insert is on.
- MULTIBALL badge: `background: var(--backglass-magenta); color: var(--white-hot); border-color: var(--backglass-magenta); box-shadow: 0 0 10px var(--magenta-dim); animation: bumper-flash 0.5s step-end infinite`
- TILT badge: `background: var(--bumper-red); color: var(--white-hot); border-color: var(--bumper-red)`.
- EXTRA BALL: `background: var(--playfield-green); color: var(--playfield-black); border-color: var(--playfield-green)`.

Dividers:
- playfield lane guide: `1px solid rgba(192,192,204,0.15)` — the hairline under glass.
- score register separator: `2px solid var(--chrome-silver)` — between player scores.
- decorative backglass band: a narrow `4px` horizontal strip in `var(--backglass-magenta)` with `box-shadow: 0 0 8px var(--magenta-dim)` — the painted separator between score area and art panel.

---

## interaction language

Hover: bumper-flash approach — glow intensifies sharply. `transition: box-shadow 0.08s ease-out, border-color 0.08s ease-out`. Bordered elements gain a brighter `box-shadow`. Text elements get `text-shadow` bloom. Not smooth — fast, like a relay engaging.

Active / pressed: solenoid snap — `transform: scale(0.94); transition: transform 0.04s step-end` — a hard mechanical snap, barely perceptible, absolutely physical. Box-shadow contracts and then blooms back on release.

Focus: `outline: 2px solid var(--chrome-yellow); outline-offset: 3px; box-shadow: 0 0 8px var(--yellow-dim)` — the insert is selected, it glows.

Selected: `background: var(--chrome-yellow); color: var(--playfield-black); box-shadow: 0 0 12px var(--yellow-dim)` — the lane is lit, the insert is active.

Disabled: `opacity: 0.2; color: rgba(192,192,204,0.3); border-color: rgba(192,192,204,0.15); box-shadow: none; pointer-events: none` — the lamp is burned out. The insert is dark.

Drag: `cursor: grabbing; outline: 2px dashed var(--backglass-magenta); box-shadow: 0 0 12px var(--magenta-dim); transform: scale(1.02)` — the ball is in the air.

---

## motion & feedback

Transitions: FAST and PHYSICAL. `0.04s–0.12s` maximum on mechanical responses. Score increments use `step-end` — digital counters don't ease. Physical ball-entry events use `ease-out` — steel ball decelerating. Never `ease-in` on impact events; the strike is instantaneous.

Bumper flash keyframe — the signature event:
```css
@keyframes bumperFlash {
  0%   { background: var(--bumper-red); box-shadow: 0 0 20px rgba(255,32,32,0.8); }
  50%  { background: var(--white-hot);  box-shadow: 0 0 40px rgba(255,255,255,0.9); }
  100% { background: var(--bumper-red); box-shadow: 0 0 20px rgba(255,32,32,0.8); }
}
/* duration: 0.1s step-end — the fastest visible flash */
```

Score counter keyframe:
```css
@keyframes scoreIncrement {
  0%   { color: var(--chrome-yellow); transform: scaleY(1); }
  30%  { color: var(--white-hot);     transform: scaleY(1.04); }
  100% { color: var(--chrome-yellow); transform: scaleY(1); }
}
/* animation: scoreIncrement 0.15s step-end — each digit tick */
```

TILT keyframe:
```css
@keyframes tiltShake {
  0%   { transform: translateX(0); }
  20%  { transform: translateX(-6px); }
  40%  { transform: translateX(6px); }
  60%  { transform: translateX(-4px); }
  80%  { transform: translateX(4px); }
  100% { transform: translateX(0); }
}
/* animation: tiltShake 0.3s ease-out — machine is tilted, ball drains */
```

Multiball cascade: `animation: bumperFlash 0.08s step-end 6` — three rapid bumper flashes in magenta then white. Score display briefly shows `MULTIBALL` text blinking at `0.4s step-end infinite`.

Loading: Score digits count up from `00000000` to a random value in `0.8s step-end` — the machine is tallying. Text reads `SCORING...` in chrome-yellow, letter-by-letter reveal using step-end keyframes. No spinners. No skeletons.

Success: Element flashes `var(--white-hot)` for one frame (0.05s), then blooms to `var(--chrome-yellow)` glow, holds 400ms, fades back. Text reads `BONUS!` or `EXTRA BALL!` — the exclamation point is earned.

Error / TILT: Full-screen red tint `rgba(255,32,32,0.15)` flashes for 0.1s. `tiltShake` applied to main container. Score display shows `TILT` blinking in `var(--bumper-red)`. Machine goes silent — all animations pause for 800ms (ball-drain time).

Page transitions: hard cut, then a rapid score-register flash — like switching from one ball to the next. No fades. No slides.

Idle / attract mode: Score display cycles high scores with `step-end` digit rolls every 3s. Lane inserts pulse at staggered intervals — a slow traveling wave from left to right across the backglass. The machine is always alive, never static.

---

## atmosphere

Background: `var(--playfield-black)` — the absolute void of an unlit cabinet interior. The body carries a faint radial from the backglass position: `radial-gradient(ellipse at 50% 20%, rgba(255,20,147,0.06) 0%, rgba(46,91,255,0.03) 40%, transparent 70%)` — the flood lamps behind the glass washing the dark playfield.

Backglass glow: The central art panel emits ambient colored light onto surrounding surfaces via large diffuse `box-shadow: 0 0 80px rgba(255,20,147,0.12), 0 0 120px rgba(46,91,255,0.08)`. This is the incandescent flood lamp behind the painted glass — it colors the machine's interior.

Chrome reflections: Rails, trim, and border elements carry `background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, rgba(255,255,255,0.04) 100%)` — the chrome ball rail catching room light.

LED digit glow: Score display digits bleed light via `text-shadow: 0 0 6px var(--yellow-dim), 0 0 14px rgba(255,208,0,0.15)`. Inactive digit housings show a faint ghost: `color: rgba(255,208,0,0.08)` — the unlit segments.

Painted glass texture: Backglass art panels optionally carry a faint `noise` texture at 2% opacity — the hand-painted brush texture seen through glass. Not photographic grain; more like slight canvas tooth.

The ambient feel: A working-class bar or bowling alley at 2am. The pinball machine is the brightest object in the room. Its backglass blazes with painted sci-fi imagery — a wizard in magenta robes against a chrome-blue cosmos. The plunger is warm. The flippers are responsive. The machine is waiting for a quarter.

---

## editorial voice

Button labels: machine imperative — LAUNCH, FLIP, TILT, PLUNGE, DRAIN, REPLAY, CREDIT, MULTIBALL, EXTRA BALL, SPECIAL, MATCH. ALL CAPS. One word where possible. The machine gives commands, not suggestions.

Headings: machine announcements and painted-sign declarations:
- `PINBALL WIZARD`, `EXTRA BALL`, `MULTIBALL`, `HIGH SCORE`, `GAME OVER`, `TILT`, `BALL 1`, `BALL 2`, `BALL 3`, `PLAYER 1`, `PLAYER 2`, `GRAND CHAMPION`, `REPLAY`, `MATCH`, `BONUS X2`, `JACKPOT`, `SPECIAL`
- headings are what the backglass would say if it could speak. bold, declarative, no hedging.

Metadata: score register format — `1UP: 00000000`, `HI: 9999990`, `BALL: 3`, `PLAYER: 2`, `BONUS: X5`, `CREDITS: 02`, `MATCH: 17`. Leading zeros always. Monospaced. Wide tracking. ALL CAPS.

Placeholders: `ENTER INITIALS`, `_ _ _`, `INSERT COIN`, `PRESS START`. Three-letter initial entry is canonical. The machine does not ask "please enter your name." It says `_ _ _`.

Empty states: `NO CREDITS`, `INSERT COIN`, `GAME OVER`, `PRESS START`, `WAITING FOR PLAYER`. Machine voice. Terse. Not apologetic.

Error messages: `TILT`, `FAULT`, `DRAIN`, `MACHINE ERROR`, `OUT OF ORDER`. Single words. The machine tilted. It does not explain.

Success messages: `EXTRA BALL!`, `MULTIBALL!`, `JACKPOT!`, `NEW HIGH SCORE!`, `BONUS!`, `REPLAY!`, `WIZARD MODE!`, `GRAND CHAMPION!`. Exclamation points earned. The machine celebrates briefly, then resets.

---

## cursor & selection

Default: `cursor: default`.
Interactive elements: `cursor: pointer`.
Playfield / drag areas: `cursor: crosshair` — the aiming reticle over the plunger lane.
Text inputs: `cursor: text; caret-color: var(--chrome-yellow)`.
`::selection { background: var(--backglass-magenta); color: var(--white-hot); }` — hot magenta selection, white text. The ball is selected.

---

**when to reach for this genome**

Use `pinball_backglass.tilt` when the prompt asks for an electromechanical pinball machine, painted backglass, playfield UI, flipper controls, score display, high-score board, arcade-bar cabinet, bumper-lit game state, multiball reward flow, plunger launch, tilt warning, or any product that should feel like a 1970s Bally/Williams/Gottlieb machine under glass.

Reach for it when the user wants hot backglass magenta, chrome yellow score digits, electric-blue inserts, bumper red flashes, steel rails, incandescent bulbs, zero-radius score housings, step-end digit changes, solenoid-like feedback, leading-zero point totals, `PLAYER 1` labels, `CREDITS`, `BALL`, `BONUS`, `TILT`, and command-copy that barks from the machine. It is strongest when the interface can map actions to launch, flip, score, drain, replay, jackpot, extra ball, match, and high-score entry.

Choose it for:
- arcade, game, contest, leaderboard, loyalty, reward, or event surfaces where points, bonus states, and cabinet hardware are the main organizing metaphor.
- entertainment venue pages, bowling-alley/bar experiences, tournament lobbies, or playful kiosks that need physical-machine energy rather than generic retro color.
- product flows that can be scored in rounds, balls, credits, jackpots, multipliers, initials, and replay states.
- playful hardware-adjacent controls where buttons should feel like plungers, flippers, bumpers, insert lights, and score reels.

Do not choose it for CRT arcade attract screens, fighter menus, pixel fonts, scanlines, or `INSERT COIN` demo loops; use `attract_mode.cab`. Do not choose it for casino floors, poker/blackjack/roulette, chips, odds, table limits, or gambling stakes; use `casino_floor.aces`. Do not choose it for roller rink glitter, mirror balls, disco choreography, or bouncy nightlife motion; use `roller_disco.glitter`. Do not choose it for drive-in cinema title cards, concession reels, projected countdowns, or family showtime language; use `drive_in_marquee.intermission`. Do not choose it for VHS rental shelves, clamshell cases, late fees, or video-store membership cards; use `videostore_rental.vhs`. Do not choose it for coin-operated product grids without game scoring; use `vending_machine.aluminum`.

## anti-patterns — this genome NEVER:

1. uses `border-radius` on score displays, LED panels, data tables, or digit readouts — zero radius only. The seven-segment LED housing is a rectangular extrusion. Rounding a score panel is like rounding a solenoid coil.
2. uses smooth easing (`ease-in-out`, `cubic-bezier`) on score increments or bumper events — mechanical events are `step-end`. The digit changes state. It does not transition. The bumper fires. It does not ease.
3. uses pastel, muted, or desaturated versions of the palette colors — backglass paint is mixed for maximum vibrancy under incandescent light. Every color is pushed. Nothing is soft.
4. uses lowercase text on score displays, labels, buttons, or headings — the seven-segment LED readout has no lowercase characters. The machine never whispers.
5. uses serif fonts or script typefaces for score readouts or data panels — only heavy condensed sans. Score fonts must read from standing distance in a dark room.
6. uses frosted glass, `backdrop-filter: blur`, or glassmorphism — this is painted glass lit from behind, not digital glass layered over a blurred surface. The backglass is opaque, vivid, and physical.
7. uses thin borders (1px) as primary structural containment on interactive elements — chrome metalwork has weight. Minimum 2px on all borders that define components.
8. uses slow reveal animations (`> 0.3s`) on bumper flashes, score events, or insert activations — the machine is electromechanical. Solenoids fire in milliseconds. Flash durations are 50-100ms.
9. uses apologetic, conversational, or lowercase-style editorial voice — the machine barks. TILT. GAME OVER. EXTRA BALL. It does not say "Oops, something went wrong."
10. uses gradients on score display panels or LED housings — the digit is either lit or unlit. No gradient fills on data surfaces. Gradients exist only in the painted backglass illustration behind the glass.
11. uses rounded pill buttons as the primary action style — the plunger is a rod, the flipper button is a rectangle. Primary buttons are zero-radius. The only curves are on the painted backglass art panels.
12. places the backglass art panel in a dense information layout — the backglass is spacious, centered, breathing. It is not a data grid. It is a painting lit from behind.
