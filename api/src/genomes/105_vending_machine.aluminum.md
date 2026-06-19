---
id: "105"
name: vending_machine.aluminum
keywords:
  - vending
  - jihanki
  - tokyo
  - aluminum
  - dispenser
  - kiosk
  - drink
  - LCD
  - LED
  - back-alley
  - jidouhanbaiki
  - illuminated
  - bilingual
  - sold-out
---

### genome 105: `vending_machine.aluminum`

> identity: Japanese jihanki (自動販売機) UI — brushed aluminum panels, a rectangular grid of illuminated product bays with individual drink portraits, monochrome 7-segment LCD price readouts, the can/bottle dispenser slot at the bottom, a red SOLD OUT LED, bilingual JP/EN labels stamped into the chassis, the COIN/CHANGE bays under the price display. The late-night Tokyo glow of an illuminated drink machine humming in a back alley at 2:47 AM — industrial, hyper-functional, slightly weathered, condensation on the glass.

**surface**

colors:
```
--alu-mid: #B8BAB9;              /* brushed aluminum body — the main chassis */
--alu-light: #D6D7D5;            /* light highlight along brushed grain */
--alu-dark: #8E908F;             /* shadow side of brushed panel, recessed bays */
--alu-edge: #5B5C5C;             /* aluminum extrusion edge, panel seams */
--chassis-black: #1A1B1D;        /* coin-return mouth, deep recesses, dispenser bay interior */
--chassis-dark: #2A2C2E;         /* secondary dark surface, raised above the void */
--bay-glow: #FBE9A3;             /* warm internal-light yellow inside product bays */
--bay-glow-soft: rgba(251, 233, 163, 0.35); /* product-bay bloom on bezel */
--lcd-bg: #8FA68C;               /* monochrome reflective LCD backplate — dull olive-green */
--lcd-bg-dim: #6E826B;           /* unlit segment color, ghost digits */
--lcd-ink: #1A2118;              /* lit 7-segment dark slate, almost black on green */
--led-red: #E83232;              /* the SOLD OUT / 売切 red LED */
--led-red-glow: rgba(232, 50, 50, 0.55);
--led-green: #38D962;            /* COIN OK / つり銭あり green LED */
--button-red: #C8262C;           /* large emergency / return push button */
--label-cream: #F1ECDC;          /* stamped label cream-white plastic strip */
--ink-stamp: #1B1B1B;            /* black ink on stamped JP/EN labels */
--weather: rgba(0, 0, 0, 0.08);  /* faint weathering wash on aluminum */
--alley-warm: rgba(255, 198, 120, 0.05); /* the ambient sodium-lamp glow leaking in */
```

typography:
- product-bay labels / bilingual stamps: `"Roboto Condensed", "Arial Narrow", "Helvetica Neue Condensed", sans-serif` at `font-weight: 700; font-size: 11-13px; letter-spacing: 0.04em; text-transform: uppercase`. Black on cream stamped plastic — like the engraved nameplate strip below each bay. Japanese reading: same family with bilingual stack (EN on top, JP below at 0.85x size).
- LCD price digits: `"DSEG7 Classic", "Share Tech Mono", "Courier New", monospace` at `font-weight: 400; font-size: 28-44px; letter-spacing: 0.08em; color: var(--lcd-ink)`. Tabular numerals only. The 7-segment LCD glyph. Always show leading ghost segments at `color: var(--lcd-bg-dim)` behind active digits to evoke unlit segments — `888` ghosted under `120`.
- chassis nameplate / brand: `"Bebas Neue", "Oswald", "Roboto Condensed", sans-serif` at `font-weight: 700; font-size: 22-32px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-stamp)`. The big sans-serif logo wordmark stamped onto the front panel.
- system labels (COIN, CHANGE, SOLD OUT, RETURN, つり銭, 売切, 返却): `"Roboto Condensed", sans-serif` at `font-weight: 700; font-size: 9-11px; letter-spacing: 0.1em; text-transform: uppercase`. Always bilingual stacked: English upper, katakana/kanji lower at slightly smaller size. Stamped onto aluminum via cream label strips.
- body / instructional copy: `"Roboto", "Inter", "Helvetica Neue", sans-serif` at `font-weight: 500; font-size: 12-14px; line-height: 1.45; color: var(--ink-stamp)`. Used sparingly — the jihanki barely speaks in sentences.
- product name (within a bay): `"Roboto Condensed", sans-serif` at `font-weight: 700; font-size: 10-12px; text-transform: uppercase; letter-spacing: 0.03em; color: var(--label-cream); text-shadow: 0 1px 0 rgba(0,0,0,0.4)` — punched into the underlit shelf strip.
- sizes hierarchy: chassis brand 22-32px, LCD price 28-44px, product/bay labels 11-13px, system stamps 9-11px. No text exceeds 44px (LCD price display is the largest). Hierarchy comes from chassis-versus-display contrast, not scale.

borders:
- chassis panels: `border-radius: 4px` — the slight rounding of stamped sheet-metal panel edges. Never sharp 0px; never above 6px.
- product bays: `border-radius: 2px; border: 1px solid var(--alu-edge)` with `box-shadow: inset 0 2px 4px rgba(0,0,0,0.45)` to recess the bay into the chassis. Each bay is a discrete window into the lit interior.
- bay glass (overlay on each product): `border-radius: 2px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.25)` simulating glazing.
- LCD display window: `border-radius: 3px; border: 2px solid var(--alu-edge); box-shadow: inset 0 2px 6px rgba(0,0,0,0.55)` — sunken LCD viewport.
- coin slot / return: `border-radius: 1px; border: 1px solid var(--alu-edge); box-shadow: inset 0 3px 8px var(--chassis-black)` — narrow horizontal mouth pressed into the panel.
- dispenser bay (the big slot at the bottom): `border-radius: 4px 4px 2px 2px; border: 2px solid var(--alu-edge); box-shadow: inset 0 8px 24px var(--chassis-black), inset 0 -2px 4px rgba(255,255,255,0.06)` — a deep horizontal pocket cut into the chassis.
- push buttons (under each bay): `border-radius: 50%` for round selector buttons; `border-radius: 4px` for the larger rectangular RETURN / 返却 button. All buttons have a 1px aluminum bezel ring.
- LED indicators: `border-radius: 50%; width: 6-10px; height: 6-10px` — circular surface-mount LEDs flush with the panel.
- stamped label strips: `border-radius: 1px` cream rectangle adhered/inset into the chassis.
- panel seams: `border: 1px solid var(--alu-edge)` as visible structural divisions between sub-panels (display panel, selection grid, coin panel, dispenser).

spacing:
- `padding: 0` on the chassis itself — panels meet at seams, not gaps. The vending machine is a slab.
- product-bay grid: `gap: 6px` between bays in a row, `gap: 6px` between rows. Rows of 4-6 bays. Each bay is `aspect-ratio: 3/4` (portrait, can/bottle proportions).
- between sub-panels (display panel → selection grid → coin panel → dispenser): a `4-8px` aluminum seam strip rendered with `--alu-edge` border.
- selector button cluster: `gap: 4px; padding: 8px`.
- LCD panel: `padding: 12px 18px` internal — the digits float in the LCD well.
- stamped label strip below a bay: `padding: 4px 8px`.
- the chassis as a whole: `padding: 18-24px` perimeter from the alley darkness around it.

**color distribution**
- 50% brushed aluminum (`--alu-mid`, `--alu-light`, `--alu-dark`) — the chassis face. The entire body of the machine reads as aluminum. Every panel, every seam, every button bezel is some shade of this brushed-metal family.
- 18% chassis black (`--chassis-black`, `--chassis-dark`) — coin recesses, dispenser interior, bay shadows, the deep void inside hardware openings. The dark interior the LEDs and bay lights punch out of.
- 12% bay glow yellow (`--bay-glow`, `--bay-glow-soft`) — the warm internal lighting inside each product bay. The signature warm punch — every product bay is lit from within.
- 8% LCD green (`--lcd-bg`, `--lcd-bg-dim`, `--lcd-ink`) — the monochrome reflective LCD price readout. A discrete dull-olive window in the upper panel.
- 6% label cream (`--label-cream`) — stamped bilingual nameplate strips, product labels under each bay. Always rectangular cream strips with black ink.
- 3% LED red (`--led-red`, `--led-red-glow`) — SOLD OUT indicators, the emergency push button. Used only when a bay is empty or a warning fires. Never decorative.
- 2% LED green / button red (`--led-green`, `--button-red`) — COIN OK indicator (small green LED) and the large RETURN push button. Tiny, precise, functional.
- 1% weathering / alley warmth (`--weather`, `--alley-warm`) — faint atmospheric tint. Almost imperceptible.

aluminum is the canvas. Yellow bay-glow is the heartbeat. LCD-green is the brain. Red is the alarm. Everything else is functional hardware.

**component patterns**

**product bay** (signature element): a vertically-oriented illuminated display window holding one product. `aspect-ratio: 3/4; background: linear-gradient(180deg, var(--bay-glow) 0%, #F4D880 100%); border: 1px solid var(--alu-edge); border-radius: 2px; box-shadow: inset 0 2px 6px rgba(0,0,0,0.5), 0 0 16px var(--bay-glow-soft), inset 0 -8px 12px rgba(180,140,40,0.25); padding: 12px 8px 22px 8px; position: relative; overflow: hidden`. Inside: the product portrait (can or bottle illustration) centered, then a cream label strip pinned to the bottom: `position: absolute; bottom: 0; left: 0; right: 0; background: var(--label-cream); color: var(--ink-stamp); font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 10px; text-transform: uppercase; letter-spacing: 0.03em; padding: 3px 6px; text-align: center; border-top: 1px solid var(--alu-edge)`. SOLD OUT state: a red LED dot in the top-right corner of the bay + the cream label strip switches to `background: var(--led-red); color: var(--label-cream)` reading "SOLD OUT / 売切". Bay light dims to `background: var(--chassis-dark); box-shadow: inset 0 2px 6px rgba(0,0,0,0.7)` — the bulb is out. Selectable bay: hover deepens the inner glow.

buttons:
- product selector (under each bay): circular `width: 28px; height: 28px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, var(--alu-light) 0%, var(--alu-mid) 60%, var(--alu-dark) 100%); border: 1px solid var(--alu-edge); box-shadow: 0 1px 0 rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.3), inset 0 -1px 2px rgba(0,0,0,0.2); color: var(--ink-stamp); font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 11px`. The small numeric/letter code sits centered. Hover: inner highlight brightens. Active: depresses with inset shadow.
- primary action (RETURN / 返却 / large rectangular): `background: var(--button-red); color: var(--label-cream); border: 2px solid var(--alu-edge); border-radius: 4px; padding: 12px 22px; font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; text-shadow: 0 1px 0 rgba(0,0,0,0.4); box-shadow: 0 2px 0 #8B1A1F, 0 4px 6px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)`. Bilingual label: EN above, JP below in 0.85em.
- secondary (ghost / utility): `background: var(--alu-mid); color: var(--ink-stamp); border: 1px solid var(--alu-edge); border-radius: 4px; padding: 10px 18px; font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.2)`.

inputs: rare in this genome — the jihanki receives coins, not text. When required: `background: var(--lcd-bg); border: 2px solid var(--alu-edge); border-radius: 3px; color: var(--lcd-ink); font-family: "DSEG7 Classic", "Share Tech Mono", monospace; font-size: 20px; letter-spacing: 0.08em; padding: 10px 14px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.4)`. Caret: `caret-color: var(--lcd-ink)`. The input is styled as a small LCD viewport. Label sits above on a cream stamped strip: `background: var(--label-cream); color: var(--ink-stamp); font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; padding: 3px 8px; border-radius: 1px; display: inline-block`.

**LCD price display** (signature element): the monochrome 7-segment readout in the upper panel. `background: var(--lcd-bg); border: 2px solid var(--alu-edge); border-radius: 3px; padding: 12px 18px; box-shadow: inset 0 2px 6px rgba(0,0,0,0.55); position: relative; min-width: 140px`. Digits in `"DSEG7 Classic", monospace` at 36-44px, `color: var(--lcd-ink)`. Behind the active digits: ghost `888` segments at `color: var(--lcd-bg-dim); position: absolute; opacity: 1` — the unlit segments of every 7-segment cell remain faintly visible. Currency prefix `¥` in `color: var(--lcd-ink); font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 22px`. Optional flashing colon `:` for time displays. The LCD has no glow — it is reflective, not backlit. Period authentic.

cards / sub-panels: each functional zone of the machine is its own riveted aluminum sub-panel. `background: linear-gradient(180deg, var(--alu-light) 0%, var(--alu-mid) 30%, var(--alu-mid) 70%, var(--alu-dark) 100%); border: 1px solid var(--alu-edge); border-radius: 4px; padding: 16px 18px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.18)`. Brushed-grain horizontal striations applied via `background-image: repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 3px)` overlaid on the gradient — the brushed aluminum texture. Each panel has small visible rivets at corners (`width: 4px; height: 4px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, var(--alu-light), var(--alu-dark)); box-shadow: inset 0 -1px 1px rgba(0,0,0,0.4)`).

navigation: not the dominant pattern here — the jihanki is essentially one screen. When navigation appears, it manifests as a row of stamped-label tabs at the top: `background: var(--alu-dark); border-bottom: 1px solid var(--alu-edge); padding: 0`. Each tab: `padding: 10px 18px; background: var(--alu-mid); color: var(--ink-stamp); font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; border-right: 1px solid var(--alu-edge); border-bottom: 2px solid transparent`. Bilingual stack inside each tab. Active tab: `background: var(--alu-light); border-bottom-color: var(--button-red)`.

headers: chassis nameplate bar — `background: linear-gradient(180deg, var(--alu-light), var(--alu-mid)); border-bottom: 2px solid var(--alu-edge); padding: 14px 22px; display: flex; justify-content: space-between; align-items: center`. Brand wordmark in Bebas Neue 22-32px, `color: var(--ink-stamp); letter-spacing: 0.06em`. To the right: a small bank of three status LEDs (power green, coin green, sold-out red) and the LCD price display. Below the header, a thin `2px solid var(--alu-edge)` panel seam separates header from the product-bay grid.

footers: dispenser bay strip — `background: var(--chassis-black); padding: 18px 22px; border-top: 2px solid var(--alu-edge); box-shadow: inset 0 8px 24px rgba(0,0,0,0.8)`. Contains the dispenser slot opening (a deep horizontal pocket), a small instruction label strip ("PUSH IN / 取り出し口"), and the model/serial nameplate in mono at 9px, `color: var(--alu-dark)`. The footer feels like a horizontal mouth cut into the bottom of the chassis.

lists: stamped label strips arranged vertically. Each entry: `background: var(--label-cream); color: var(--ink-stamp); padding: 6px 12px; font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; border: 1px solid var(--alu-edge); border-radius: 1px; margin-bottom: 4px`. Active entry: `background: var(--bay-glow); box-shadow: 0 0 8px var(--bay-glow-soft); border-color: var(--ink-stamp)`. SOLD OUT entry: `background: var(--led-red); color: var(--label-cream)`. The list reads like a column of nameplates riveted to the chassis.

tables: rare. When used: `border: 1px solid var(--alu-edge); border-radius: 2px; background: var(--alu-light); overflow: hidden`. Header row: `background: var(--alu-dark); color: var(--label-cream); font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; padding: 8px 12px`. Body cells: `background: var(--alu-light); color: var(--ink-stamp); padding: 8px 12px; border-bottom: 1px solid var(--alu-edge); font-size: 12px`. Price columns right-aligned in `font-family: "DSEG7 Classic", monospace; color: var(--lcd-ink)` on a small `var(--lcd-bg)` cell background — embedded mini-LCD cells inside the table.

dividers: aluminum panel seams — `1px solid var(--alu-edge)` with a `box-shadow: 0 1px 0 rgba(255,255,255,0.3)` highlight below for the extrusion edge. Structural only; never decorative. Stronger seam between major sub-panels: `2px solid var(--alu-edge); box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.25)`.

modals: error/maintenance overlay — `background: var(--alu-light); border: 2px solid var(--alu-edge); border-radius: 4px; box-shadow: 0 8px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.5)`. Top: a red LED bar pulsing across the header. Title in Bebas Neue uppercase, bilingual: "OUT OF SERVICE / 故障中". Body in stamped cream-label strips. Action button (CALL ATTENDANT / 係員呼出) in the large red push-button style. Backdrop: `background: rgba(20, 20, 22, 0.78)` — the alley around the machine goes dark.

badges:
- SOLD OUT / 売切: `background: var(--led-red); color: var(--label-cream); border: 1px solid #8B1A1F; border-radius: 1px; padding: 2px 8px; font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em; box-shadow: 0 0 6px var(--led-red-glow), inset 0 1px 0 rgba(255,255,255,0.15)`. Bilingual stack.
- HOT / つめたい-COLD / あったか-WARM: small rectangular stamp `background: var(--bay-glow); color: var(--ink-stamp); border: 1px solid var(--alu-edge); border-radius: 1px; padding: 2px 6px; font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 9px; text-transform: uppercase`. Blue stamp for COLD/つめたい: `background: #5B9FD4; color: var(--label-cream)`. Red stamp for HOT/あったか: `background: var(--button-red); color: var(--label-cream)`.
- NEW / 新発売: `background: var(--label-cream); color: var(--led-red); border: 1px dashed var(--led-red); padding: 2px 6px; font-weight: 700; font-size: 9px; text-transform: uppercase`.

**LED indicator** (signature element): a small surface-mount LED dot embedded in the chassis. `width: 8px; height: 8px; border-radius: 50%; box-shadow: inset 0 1px 1px rgba(0,0,0,0.4)`. Red: `background: radial-gradient(circle at 35% 30%, #FF6868 0%, var(--led-red) 60%, #8B1A1F 100%); box-shadow: 0 0 6px var(--led-red-glow), inset 0 1px 1px rgba(0,0,0,0.4)`. Green: `background: radial-gradient(circle at 35% 30%, #8AF09B 0%, var(--led-green) 60%, #196B2C 100%); box-shadow: 0 0 6px rgba(56, 217, 98, 0.5)`. Unlit: `background: var(--chassis-dark); box-shadow: inset 0 1px 1px rgba(0,0,0,0.6)` — gray socket only. Always accompanied by a bilingual label below: "COIN OK / つり銭あり".

**coin slot** (signature element): a narrow horizontal mouth in the chassis. `width: 32px; height: 8px; background: var(--chassis-black); border: 1px solid var(--alu-edge); border-radius: 1px; box-shadow: inset 0 3px 6px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.3); position: relative`. Above: a "¥10 ¥50 ¥100 ¥500 / 紙幣 ¥1000" denomination stamp in cream-label. The slot has a faint internal warm bay-glow leaking out, suggesting the coin-mech is awake.

**dispenser slot** (signature element): the large product-pickup bay at the bottom. `width: 100%; height: 64px; background: var(--chassis-black); border: 2px solid var(--alu-edge); border-radius: 4px 4px 2px 2px; box-shadow: inset 0 12px 32px rgba(0,0,0,0.95), inset 0 -2px 4px rgba(255,255,255,0.05); position: relative`. A heavy rubber flap implied via a slightly raised lip: `&::before { content: ''; position: absolute; top: 0; left: 8px; right: 8px; height: 14px; background: linear-gradient(180deg, #1A1B1D 0%, #2A2C2E 100%); border-radius: 0 0 6px 6px; box-shadow: inset 0 -2px 4px rgba(0,0,0,0.8) }`. Label strip above: "PUSH IN / 取出口" in stamped cream label.

**interaction language**

hover: aluminum brightens subtly — `filter: brightness(1.05)`. Product bays: inner glow intensifies, `box-shadow: inset 0 2px 6px rgba(0,0,0,0.5), 0 0 24px var(--bay-glow-soft), inset 0 -8px 12px rgba(200,160,60,0.35); transition: box-shadow 0.18s ease, filter 0.18s ease`. Push buttons: top highlight brightens, suggesting fingertip proximity. LEDs do not change on hover — LEDs only change with state.

active / pressed: the physical thunk of a panel push-button. `transform: translateY(1px); box-shadow: inset 0 2px 4px rgba(0,0,0,0.4), 0 0 0 transparent; transition: transform 0.06s linear, box-shadow 0.06s linear`. Round selector buttons depress with `box-shadow: inset 0 3px 5px rgba(0,0,0,0.5); background: radial-gradient(circle at 35% 30%, var(--alu-mid) 0%, var(--alu-dark) 60%, #6E6F70 100%)`. The large red RETURN button: `transform: translateY(2px); box-shadow: 0 0 0 #8B1A1F, 0 1px 2px rgba(0,0,0,0.4), inset 0 2px 4px rgba(0,0,0,0.3)` — the bottom shadow collapses as the button bottoms out.

focus: `outline: 2px solid var(--bay-glow); outline-offset: 2px; box-shadow: 0 0 12px var(--bay-glow-soft)`. The bay-glow yellow ring — like a service light has illuminated the focused element.

selected (bay or product chosen): the bay's internal glow brightens to full saturation, `background: linear-gradient(180deg, #FFF1B0 0%, var(--bay-glow) 100%); box-shadow: inset 0 2px 6px rgba(0,0,0,0.5), 0 0 32px var(--bay-glow-soft), 0 0 60px rgba(251,233,163,0.25)`. A small green LED dot appears in the top-left corner of the bay. The LCD price display animates to show the bay's price.

disabled / sold out: bay light extinguishes — `background: var(--chassis-dark); box-shadow: inset 0 2px 8px rgba(0,0,0,0.7); filter: saturate(0.2) brightness(0.55); pointer-events: none`. A red SOLD OUT/売切 cream-label strip overlays the product. Other disabled controls: `opacity: 0.4; filter: grayscale(0.4); pointer-events: none` — the chassis goes inert.

drag: rare. If used: `cursor: grabbing; opacity: 0.85; box-shadow: 0 6px 18px rgba(0,0,0,0.5)` — like lifting a panel away from the chassis.

**motion & feedback**

transitions: `transition: all 0.18s ease` baseline. Mechanical-feeling, not springy. Aluminum doesn't bounce. Most state changes are sub-200ms.

LED pulse: status LEDs blink at a slow industrial cadence. `@keyframes ledPulse { 0%, 60% { opacity: 1; box-shadow: 0 0 6px var(--led-red-glow) } 80% { opacity: 0.4; box-shadow: 0 0 2px var(--led-red-glow) } 100% { opacity: 1; box-shadow: 0 0 6px var(--led-red-glow) } }`. Duration `2s ease-in-out infinite`. SOLD OUT LEDs are steady-on; insert-coin LEDs pulse slowly.

bay light flicker (first-render warming up): `@keyframes bayWarmup { 0% { opacity: 0; box-shadow: none } 30% { opacity: 0.4 } 35% { opacity: 0.15 } 45% { opacity: 0.7 } 50% { opacity: 0.3 } 100% { opacity: 1; box-shadow: inset 0 2px 6px rgba(0,0,0,0.5), 0 0 16px var(--bay-glow-soft), inset 0 -8px 12px rgba(180,140,40,0.25) } }`. Duration `0.9s steps(8, end)` on page enter — the fluorescent tube in each bay coming to life. Staggered across bays at `60ms` per bay, left-to-right, top-to-bottom.

LCD segment update: when the price display changes, the new digits do not crossfade. `@keyframes lcdRefresh { 0% { opacity: 1 } 30% { opacity: 0.15 } 31% { opacity: 1 } 100% { opacity: 1 } }`. Duration `0.12s steps(1)`. A single hard segment-blink, then settled. No transitions, no easing — LCD segments switch instantly.

dispenser drop (success feedback): the can/bottle drops into the dispenser bay — a brief `@keyframes canDrop { 0% { transform: translateY(-200%); opacity: 1 } 70% { transform: translateY(8px) } 80% { transform: translateY(-4px) } 100% { transform: translateY(0); opacity: 1 } }` over `0.5s cubic-bezier(0.5, 0, 0.7, 1)` — a heavy weighted bounce. Accompanied by a brief `@keyframes chassisShake { 0%, 100% { transform: translateY(0) } 70% { transform: translateY(2px) } 80% { transform: translateY(-1px) } }` on the dispenser panel — the thunk of a can hitting the bottom.

loading: an LED-style horizontal progress bar — segmented dashes lighting up sequentially. `▮▮▮▮▯▯▯▯` in `var(--led-red)` or `var(--led-green)`. Or the LCD displays cycling `888` ghost digits resolving to the final value. No spinners — the jihanki does not spin.

success: the green COIN OK LED illuminates steady. The selected bay's light pulses once at full brightness. The dispenser-drop animation fires. Then a small label strip below the LCD reads "THANK YOU / ありがとう" in cream-stamp style for 1.5s, then clears.

error: the red SOLD OUT or maintenance LED pulses rapidly (`0.4s ease infinite` for 2s). The LCD blinks `Err` or `---` in the price area. A red banner stamp may slide down: `background: var(--led-red); color: var(--label-cream); font-family: "Roboto Condensed", sans-serif; font-weight: 700; text-transform: uppercase; padding: 6px 16px; bilingual stack`. No shake — industrial machines are bolted down.

page enter: the bay-warmup cascade plays — the fluorescent tubes in each bay flicker on in sequence. The LCD ghost-segments resolve from `888` to the operational display. LEDs perform a single self-test cycle (all on for 200ms, then off, then operational state). Approx `1.4s` total — the machine booting up.

**atmosphere**

background: deep alley darkness `var(--chassis-black)` with a faint warm sodium-lamp gradient overlay: `background: radial-gradient(ellipse at 50% -10%, var(--alley-warm) 0%, transparent 60%), var(--chassis-black)` — the streetlight glow from above-left, leaking into the scene.

bay-glow ambient bloom: the aggregate glow of all illuminated bays casts onto the chassis. A diffuse warm wash via `box-shadow: 0 0 80px rgba(251,233,163,0.12), 0 0 160px rgba(251,233,163,0.06)` on the chassis container — as if the machine is the only light source on a back-alley wall at 2 AM.

brushed-aluminum texture: every aluminum surface carries a horizontal-grain texture overlay — `background-image: repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 3px), repeating-linear-gradient(0deg, transparent 0px, transparent 5px, rgba(255,255,255,0.02) 5px, rgba(255,255,255,0.02) 6px)`. Fine, perceptible only on close inspection.

weathering: subtle dark wash in corners and around the dispenser slot — `background: radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.15), transparent 60%)` on the lower chassis. Fingerprint smudges and grime accumulate where hands touch most.

condensation (cold-drink bays): on bays marked COLD/つめたい, a faint glass-fogging gradient overlay: `background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.02) 100%); mix-blend-mode: overlay` — the condensation on the bay window. Optional.

faint reflections on bay glass: `&::after { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.06) 100%); pointer-events: none; border-radius: inherit }`.

LCD reflection: a single faint diagonal sheen across the LCD glass: `background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.06) 45%, transparent 55%)` overlaid.

no scanlines, no flicker beyond the warmup. The machine is steady-state. Only the LEDs pulse.

ambient feel: 2:47 AM. The vending machine hums. The aluminum is cool to the touch and slightly dewed. The yellow bay-light is the brightest thing for half a block. Somewhere a cat is in a trash bin. The LCD shows ¥150 indefinitely.

**editorial voice**

button labels: bilingual stamped-label style — EN above (uppercase Roboto Condensed), JP below in 0.85em. Functional, terse, no personality.
- `RETURN / 返却`
- `PURCHASE / 購入`
- `SELECT / 選択`
- `CANCEL / 取消`
- `CALL ATTENDANT / 係員呼出`
- `INSERT COIN / 硬貨投入`
- `CONFIRM / 確認`
- `RECEIPT / 領収書`

headings: chassis-nameplate cadence. Brand wordmark in Bebas Neue. Section labels in stamped-cream style. Always bilingual.
- `BEVERAGES / 飲料`
- `COLD / つめたい`
- `HOT / あったか`
- `OUT OF SERVICE / 故障中`
- `EXACT CHANGE ONLY / お釣り切れ`
- `NEW ARRIVALS / 新発売`

metadata: instrument-panel format. Always uppercase, always tabular, often bilingual for the operative term.
- `MODEL: TC-2400 / 型式: TC-2400`
- `SERIAL: 00742881`
- `LAST SERVICED: 2024.03.18`
- `COIN STOCK: ¥10 × 64, ¥50 × 32, ¥100 × 21`
- `TEMP: 4°C (COLD ZONE)`
- `PRICE: ¥150`
- `STOCK: 6 / 12`

placeholders: stamped-label style, ALL CAPS Roboto Condensed.
- `ENTER CODE...`
- `SEARCH PRODUCTS...`
- `AMOUNT...`

empty states: terse, bilingual where appropriate.
- `NO PRODUCTS AVAILABLE / 商品がありません`
- `SOLD OUT / 売切`
- `OUT OF SERVICE / 故障中`
- `INSERT COIN TO BEGIN / 硬貨を入れてください`

error messages: machine-error format. Numeric error codes prefer.
- `Err 02 — COIN JAM / 硬貨詰り`
- `Err 11 — DISPENSE FAULT / 排出異常`
- `EXACT CHANGE ONLY / お釣り切れ`
- `INSUFFICIENT FUNDS / 金額不足`
- `BILL REJECTED / 紙幣使用不可`

success messages: brief, gracious, bilingual.
- `THANK YOU / ありがとうございました`
- `DISPENSED / 排出完了`
- `RETURNED ¥80 / つり ¥80`
- `RECEIPT PRINTED / 領収書発行`

**cursor & selection**

cursor: `default` on the chassis body. `pointer` on all push-buttons, product bays, and selector controls. `not-allowed` on SOLD OUT bays. `text` on the rare input field.

text selection: `::selection { background: var(--bay-glow); color: var(--ink-stamp); }` — the warm yellow bay-light wash highlights selected text, dark stamp-ink remains.

**when to reach for this genome**

Use this genome when the request calls for a Japanese vending machine, drink dispenser, product-bay selector, coin-operated kiosk, late-night alley machine, bilingual JP/EN hardware interface, stock/sold-out board, automated retail cabinet, self-service beverage wall, or any product that should feel like a brushed-aluminum jihanki with glowing product windows and physical push-buttons.

Reach for it when the user wants aluminum chassis panels, illuminated drink bays, 7-segment LCD prices, coin/change slots, dispenser pockets, red SOLD OUT LEDs, green coin-ready indicators, bilingual stamped labels, condensation on glass, panel seams, rivets, and a functional machine voice. It is strongest when the interface can map each choice to a visible bay and every state to hardware: selected bay, price readout, coin accepted, exact change, dispense fault, product dropped, sold out.

Choose it for:
- vending, automated retail, kiosk, dispenser, drink menu, snack wall, ticket-machine, product-selection, stock-status, or machine-maintenance concepts.
- Japanese urban, late-night, street-corner, back-alley, convenience, or transit-adjacent experiences where the machine itself should be the interface.
- product grids where each item needs a physical window, selection button, price display, stock state, and dispense outcome.
- playful hardware metaphors for selecting, paying, dispensing, returning change, or showing a machine fault.

Do not choose it for generic ecommerce grids, restaurant menus, sleek touchscreen kiosks, airport check-in, retro arcade cabinets, calculator interfaces, public transit wayfinding, or software dashboards. Use `scientific_calc.hp` for pocket-calculator instrument logic, `clickwheel_pod.aqua` for glossy consumer-device LCD nostalgia, `transit_wayfinding.sys` for official route signage, `pinball_backglass.tilt` for arcade cabinet scoring, and `confectionery_box.sweet` or `mail_order.catalog` for product merchandising without machine hardware.

**anti-patterns — this genome NEVER:**

1. uses a flat-color background on the chassis. brushed aluminum requires the gradient + brushed-grain texture treatment. a flat gray `#B8BAB9` rectangle is dead — the brushed metal must read as physical surface every time.
2. uses cool LCD blue or backlit LCD aesthetics. the price display is a reflective monochrome dull-olive LCD, with no glow and no backlight. blue LCDs belong to genome 19 (clickwheel_pod.aqua); this machine uses period-correct 1990s reflective green-gray LCDs only.
3. uses the calculator/handheld scale of genome 07. this is a full-size 1.8m vending machine, not a pocket instrument. components are room-scale: bays the size of cans, LCD digits at 36-44px, dispenser slots large enough for a 500ml bottle. never miniaturize the chassis.
4. uses non-bilingual labels on system stamps and primary buttons. SOLD OUT, COIN, CHANGE, RETURN, RECEIPT, OUT OF SERVICE must appear with their Japanese counterpart (売切, 硬貨, つり, 返却, 領収書, 故障中). single-language labels break the jihanki identity.
5. uses smooth fades between LCD digit values. 7-segment LCDs switch instantly with a single hard segment-blink — no opacity ease, no transform, no morphing digits. period-mechanical authenticity overrides smoothness.
6. uses purple, magenta, hot-pink, or any chroma not native to industrial hardware. the palette is aluminum-gray + chassis-black + bay-glow yellow + LCD-green + LED-red + button-red. introducing fashion colors breaks the back-alley identity.
7. uses generic radio-button or checkbox UI for product selection. selection happens through round aluminum push-buttons beneath each bay, or through bay-tap. no native form controls — every interaction is physical hardware.
8. uses drop shadows for decorative elevation on UI elements. all shadows are physical and architectural: insets for recessed bays/LCDs, beveled lifts for buttons, the heavy ambient drop under the chassis itself. never a CSS shadow-elevation card system.
9. uses sans-serif geometric typography (Inter/SF Pro/Geist) for the LCD price display. the LCD price uses 7-segment glyphs (DSEG7 Classic or similar) exclusively. proportional sans-serif on the LCD destroys the period.
10. uses warm soft-ambient lighting on the whole interface. the warm yellow bay-glow is contained within the product bays and bleeds slightly to the chassis. the rest of the machine reads as cool industrial aluminum under sodium-streetlight. don't bathe the whole UI in golden hour — only the bays glow.
