---
id: "108"
name: videostore_rental.vhs
keywords:
  - vhs
  - video rental
  - blockbuster
  - hollywood video
  - be kind rewind
  - 1990s
  - clamshell
  - membership card
  - late fee
  - new release
  - friday night
  - VCR
  - tracking lines
  - tape
  - genre aisle
---

### genome 108: `videostore_rental.vhs`

> identity: 9:47 PM at the neighborhood video store, Friday 1996. Buzzing fluorescent ceiling lights over wall-to-wall plastic clamshell boxes, the "NEW RELEASE" wall in big yellow MEMBER-stripe vinyl signage, the action aisle smelling of new vinyl and microwave popcorn from the snack stand. A Blockbuster-blue and Hollywood-Video-electric-yellow palette, BE KIND REWIND stickers slapped on every spine, the orange-handwritten LATE FEE notice next to the register, a holographic membership card laminated thick, a VHS tracking line shudder across the back of the CRT TV by the new-releases wall. The clack of a tape ejecting from a VCR.

**surface**

colors:
```
--rental-blue: #1A3D8A;            /* primary signage blue — Blockbuster-stripe / Hollywood box trim */
--rental-blue-deep: #0F2862;
--rental-blue-glow: rgba(26, 61, 138, 0.4);
--member-yellow: #FFCB1F;          /* hot member-stripe yellow — NEW RELEASE banner */
--member-yellow-deep: #D9A800;
--rewind-orange: #FF6A1F;          /* the BE KIND REWIND sticker, late-fee handwriting */
--rewind-orange-glow: rgba(255, 106, 31, 0.35);
--clamshell-black: #15131A;        /* the deep matte plastic of a video clamshell case */
--clamshell-edge: #2A2632;         /* the lighter molded edge of the case */
--vhs-tape-brown: #3C2A1A;         /* the magnetic tape spool ribbon — deep cocoa */
--vhs-label-cream: #ECE3CC;        /* the printed label paper on a tape spine */
--vhs-label-shadow: #C7BD9F;
--crt-phosphor: #4CFFB0;           /* the cool-green phosphor cast of an old TV screen */
--crt-scan: rgba(76, 255, 176, 0.18);
--carpet-burgundy: #5A1F2C;        /* the wine-burgundy carpet of a video store */
--carpet-shadow: #3A1118;
--fluorescent: #F8FFF2;            /* the cool white of a fluorescent ceiling light */
--fluorescent-glow: rgba(248, 255, 242, 0.3);
--receipt-pink: #F4D8DE;           /* the membership-receipt thermal-paper pink */
--receipt-pink-edge: #D8AFBA;
--neon-pink: #FF5DA8;               /* the rare neon-sign accent — OPEN UNTIL MIDNIGHT */
--neon-pink-glow: rgba(255, 93, 168, 0.45);
--hologram-1: #6FE8FF;             /* membership card holographic foil */
--hologram-2: #FFE36F;
--hologram-3: #FF7DEC;
--ink-marker: #1C1410;             /* the black sharpie scrawl on a return-by date */
```

typography:
- display / store wordmark: `"Anton", "Bowlby One", "Squada One", "Bebas Neue", sans-serif` at `font-weight: 700-900; font-size: 44-80px; letter-spacing: -0.01em; line-height: 0.95; text-transform: uppercase; color: var(--member-yellow); text-shadow: 0 0 0 var(--rental-blue), 4px 4px 0 var(--rental-blue-deep), 6px 6px 0 var(--rental-blue), 0 0 16px rgba(0,0,0,0.4)` — the chunky condensed wordmark with a 4-6px offset blue dropshadow, like the store's vinyl signage above the entrance.
- section headers / aisle signage: `"Anton", "Oswald", "Squada One", sans-serif` at `font-weight: 700; font-size: 28-44px; letter-spacing: 0.02em; line-height: 1.0; text-transform: uppercase; color: var(--rental-blue); background: var(--member-yellow); padding: 8px 24px; box-shadow: 4px 4px 0 var(--clamshell-black)`. The aisle banner — uppercase block sans on hot yellow with a hard shadow.
- VHS box-art title: `"Anton", "Oswald", "Bebas Neue", sans-serif` at `font-weight: 700-900; font-size: 22-36px; letter-spacing: -0.005em; text-transform: uppercase; line-height: 0.95`. The action-movie clamshell-cover wordmark, often with a hard offset shadow.
- body / catalog descriptions: `"Inter", "Helvetica Neue", "Arial", sans-serif` at `font-weight: 500; font-size: 14-15px; line-height: 1.5; letter-spacing: 0em; color: var(--clamshell-black)`. The plot synopsis on the back of the clamshell case.
- membership-card / receipt monospace: `"VT323", "Press Start 2P", "Share Tech Mono", monospace` at `font-weight: 400; font-size: 13-14px; letter-spacing: 0.04em; color: var(--clamshell-black)` — the dot-matrix receipt print, the membership number, the return-by date.
- handwritten sharpie scrawl: `"Permanent Marker", "Caveat", cursive` at `font-weight: 400; font-size: 14-18px; letter-spacing: 0em; color: var(--ink-marker); transform: rotate(-2deg)` — the LATE FEE: $4.00 hand-marker over a Polaroid taped to the register.
- price-tag / late-fee: `"Anton", "Oswald", sans-serif` at `font-weight: 900; font-size: 18-24px; letter-spacing: 0.02em; color: var(--rewind-orange); text-shadow: 2px 2px 0 var(--clamshell-black)` — the orange-marker price tag with a hard black shadow.
- neon-sign: `"Bungee", "Squada One", "Anton", sans-serif` at `font-weight: 700; font-size: 24-36px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--neon-pink); text-shadow: 0 0 4px var(--neon-pink-glow), 0 0 12px var(--neon-pink-glow), 0 0 24px rgba(255, 93, 168, 0.3)` — the OPEN UNTIL MIDNIGHT window-glow text.

borders:
- chunky and rectangular. Most elements use `border-radius: 4px` (the slightly-softened molded plastic edge of a clamshell case). Member cards and certain signage use `border-radius: 8px`. NEW RELEASE banners and aisle-headers use `border-radius: 0px` for the hard rectangular vinyl-sign feel.
- primary border: `3px solid var(--rental-blue)` or `4px solid var(--member-yellow)` — chunky, sign-vinyl weight, never a hairline.
- HARD-shadow rule (the genre signature): every "sign" element has a hard offset shadow with no blur — `box-shadow: 4px 4px 0 var(--clamshell-black)` or `5px 5px 0 var(--rental-blue-deep)`. The cardstock-on-cardstock layered look. This is the most identifying visual property of the genome.
- "BE KIND REWIND" sticker border (decorative): a `2px dashed var(--rewind-orange)` border on featured elements with the sticker overlaid — a "REWIND" callout pinned to the top-right at -8 deg rotation.
- clamshell-case edge: tape-spine elements use `border-left: 6px solid var(--vhs-label-cream); border-right: 6px solid var(--vhs-label-cream); border-top: 2px solid var(--clamshell-edge); border-bottom: 2px solid var(--clamshell-edge)` — the molded-plastic case profile.

spacing:
- aisle-density. `padding: 16-28px` on cards. `gap: 12-20px` between elements. The shelves are packed but legible — every spine is a tape, every tape has a sticker, every sticker has a price tag.
- the layout is GRID-WALL — content arranged in a regular rectangular grid like clamshell cases on a wall. Featured items (the "NEW RELEASE" wall) get larger tiles and bigger signage above.

**color distribution**
- 32% clamshell-black / clamshell-edge — the dominant matte plastic of the case spines and the dim store interior. The black backbone.
- 18% rental-blue / rental-blue-deep — the signage blue, primary brand color, header backgrounds.
- 14% member-yellow / member-yellow-deep — the hot accent yellow, NEW RELEASE banners, primary CTA color.
- 10% vhs-label-cream / vhs-label-shadow — the printed-label cream on tape spines, body content backgrounds.
- 8% rewind-orange — the BE KIND REWIND sticker, late-fee scrawl, secondary action accent.
- 7% carpet-burgundy / carpet-shadow — the wine-burgundy floor carpet, used for body backgrounds and lower-half panels.
- 4% receipt-pink / fluorescent — secondary lighter tones, receipt printouts, ceiling-light ambient.
- 4% neon-pink — the rare front-window neon-sign accent. Used very sparingly.
- 3% hologram-1/2/3 — membership-card foil shimmer, special accents.

the principle: BLUE-AND-YELLOW SIGNAGE dominates, BLACK CLAMSHELL fills the shelving, ORANGE REWIND-STICKERS punctuate, NEON PINK glows rarely. The contrast is high — this is fluorescent-lit retail.

**component patterns**

buttons: primary — `background: var(--rental-blue); color: var(--member-yellow); border: 3px solid var(--clamshell-black); border-radius: 4px; padding: 14px 28px; font-family: "Anton", sans-serif; font-weight: 700; font-size: 16px; letter-spacing: 0.04em; text-transform: uppercase; box-shadow: 5px 5px 0 var(--clamshell-black); position: relative; transition: all 0.12s ease-out`. The chunky aisle-signage button — uppercase block on blue with a hard black shadow.

Member-stripe button (alternate primary): `background: var(--member-yellow); color: var(--rental-blue); border: 3px solid var(--clamshell-black); border-radius: 4px; padding: 14px 28px; font-family: "Anton"; font-weight: 700; font-size: 16px; letter-spacing: 0.04em; text-transform: uppercase; box-shadow: 5px 5px 0 var(--rental-blue-deep)`. The yellow-on-blue inverse — the "JOIN AS MEMBER" button.

Rewind button (secondary): `background: var(--rewind-orange); color: var(--vhs-label-cream); border: 2px solid var(--clamshell-black); border-radius: 4px; padding: 10px 22px; font-family: "Anton"; font-size: 14px; letter-spacing: 0.04em; text-transform: uppercase; box-shadow: 3px 3px 0 var(--clamshell-black); transform: rotate(-1.5deg)`. A REWIND-sticker button, slightly tilted, like it was slapped on.

Receipt link (tertiary): `background: var(--receipt-pink); color: var(--clamshell-black); border: 1px dashed var(--clamshell-black); border-radius: 0; padding: 6px 14px; font-family: "VT323", monospace; font-size: 13px; letter-spacing: 0.04em; text-transform: uppercase`. The thermal-receipt tear-off link.

Late-fee danger button: `background: var(--vhs-label-cream); color: var(--rewind-orange); border: 3px solid var(--rewind-orange); border-radius: 4px; padding: 12px 24px; font-family: "Permanent Marker", cursive; font-size: 18px; letter-spacing: 0em; text-transform: uppercase; text-shadow: 1px 1px 0 var(--ink-marker); box-shadow: 4px 4px 0 var(--clamshell-black); transform: rotate(-2deg)`. The orange-marker LATE FEE warning.

inputs: VHS-LABEL FIELD — `background: var(--vhs-label-cream); border: 2px solid var(--clamshell-black); border-radius: 4px; color: var(--clamshell-black); padding: 12px 16px; font-family: "Inter", sans-serif; font-size: 15px; box-shadow: 3px 3px 0 var(--clamshell-black) inset, 3px 3px 0 var(--rental-blue)` (the inset gives the impression of a recessed label area, the outer shadow gives the signage-stack feel). Label above: `font-family: "Anton", sans-serif; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--rental-blue)`. Focus: `border-color: var(--rewind-orange); box-shadow: 3px 3px 0 var(--rewind-orange); outline: none`. Placeholder: dot-matrix `font-family: "VT323"; color: var(--clamshell-edge)`.

cards / panels: CLAMSHELL CASE — `background: var(--clamshell-black); border: 3px solid var(--clamshell-edge); border-radius: 6px; padding: 0; box-shadow: 6px 6px 0 var(--rental-blue), 0 12px 24px rgba(0,0,0,0.4); position: relative; overflow: hidden; min-height: 320px`. The case is the card. Inside: an artwork area (top 60%) and a label-strip (bottom 40%) styled as `background: var(--vhs-label-cream); padding: 16px 20px; border-top: 2px solid var(--clamshell-edge)` with title in Anton uppercase and a brief synopsis in Inter. A "BE KIND REWIND" sticker overlay sits at the top-right at -8 deg rotation. A small rental-tag dangles from the spine via a CSS pseudo-element.

NEW RELEASE wall (alternate featured card): the same clamshell base, but elevated and emphasized — `border: 4px solid var(--member-yellow); box-shadow: 8px 8px 0 var(--rental-blue), 0 16px 32px rgba(0,0,0,0.5); transform: translateY(-4px)`. A NEW RELEASE banner sits across the top: `background: var(--member-yellow); color: var(--rental-blue); padding: 6px 18px; font-family: "Anton"; font-size: 18px; text-transform: uppercase; letter-spacing: 0.04em; transform: rotate(-2deg) translateX(-6px); box-shadow: 3px 3px 0 var(--clamshell-black)` — the yellow vinyl banner stuck across the top of the wall.

MEMBERSHIP CARD (special card variant): laminated-feel card — `background: linear-gradient(135deg, var(--rental-blue) 0%, var(--rental-blue-deep) 100%); color: var(--vhs-label-cream); border-radius: 12px; padding: 24px 28px; box-shadow: 4px 4px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15); position: relative; min-height: 180px`. The store wordmark in member-yellow at the top, member name and number in dot-matrix monospace below. A holographic accent stripe (animated gradient cycling through `--hologram-1/2/3`) along the right edge — the foil-stamp.

navigation: AISLE-BAR nav. `background: var(--rental-blue); border-bottom: 4px solid var(--member-yellow); padding: 0; height: 64px; display: flex; align-items: stretch; box-shadow: 0 6px 0 var(--clamshell-black)`. Each nav item is a vertical aisle-divider with hover, separated by `border-right: 2px solid var(--rental-blue-deep)`. Items in `"Anton"` uppercase at 16px, color `var(--member-yellow)`. Active item: `background: var(--member-yellow); color: var(--rental-blue); box-shadow: inset 0 -4px 0 var(--rewind-orange)`. The whole bar reads as a row of aisle-end signs.

headers: STORE-FRONT header — `background: var(--rental-blue); border-bottom: 6px solid var(--member-yellow); padding: 32px 40px; text-align: center; position: relative; overflow: hidden`. The store wordmark in massive Anton-uppercase yellow with the offset-blue dropshadow. Subtitle in member-yellow Anton 18px. The header has a subtle scan-line overlay (3-4% opacity) — the CRT-TV monitor near the new-releases. A neon-pink "OPEN" sign decorates the top-right corner.

footers: register-receipt footer — `background: var(--receipt-pink); border-top: 2px dashed var(--clamshell-black); padding: 28px 36px; color: var(--clamshell-black); font-family: "VT323", monospace; font-size: 14px; letter-spacing: 0.04em; line-height: 1.6`. A tear-off serrated bottom edge via `clip-path: polygon(0 0, 100% 0, 100% 92%, 95% 100%, 90% 92%, 85% 100%, 80% 92%, 75% 100%, ...)`. Content: store address in monospace, hours-of-operation, "BE KIND REWIND" reminder, member-number lookup link.

lists: RENTAL-LINEUP list. Each item: `background: var(--vhs-label-cream); border: 2px solid var(--clamshell-black); border-radius: 4px; padding: 12px 18px; margin-bottom: 8px; box-shadow: 3px 3px 0 var(--rental-blue); display: flex; align-items: center; gap: 14px`. A small spine-strip on the left (4px wide vertical bar in `var(--rental-blue)`). Title in Anton uppercase. Genre badge on the right. Active item: shadow color shifts to `var(--rewind-orange)`, item lifts via `transform: translate(-1px, -1px); box-shadow: 4px 4px 0 var(--rewind-orange)`. No bullets — the spine-strip and shadow are the structural language.

tables: INVENTORY-MATRIX table — `border: 3px solid var(--clamshell-black); border-radius: 6px; overflow: hidden; box-shadow: 4px 4px 0 var(--rental-blue)`. Header: `background: var(--rental-blue); color: var(--member-yellow); font-family: "Anton"; font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em; padding: 12px 14px; border-bottom: 3px solid var(--clamshell-black)`. Body rows alternate `background: var(--vhs-label-cream)` and `background: var(--receipt-pink)` — the cream-and-pink ledger alternation. Cell padding `10px 14px`, body font `"Inter"` at 14px. Status cells with badges (NEW / RENTED / OVERDUE / RETURNED) in chunky Anton-style colored badges.

dividers: never a thin line. Either: (a) a `4px solid var(--member-yellow)` bar with `box-shadow: 3px 3px 0 var(--clamshell-black)` — the aisle-end stripe, or (b) a `2px dashed var(--clamshell-black)` for tear-off receipt edges, or (c) a row of small VHS-tape glyph icons (`◼ ▮ ◼ ▮`) in `var(--rental-blue)` for decorative sub-section breaks. Always emphatic, never hairline.

modals / overlays: LATE-FEE NOTICE modal — `background: var(--vhs-label-cream); border: 4px solid var(--rewind-orange); border-radius: 6px; padding: 36px 40px; box-shadow: 0 24px 64px rgba(0,0,0,0.6), 8px 8px 0 var(--clamshell-black); max-width: 480px; position: relative; transform: rotate(-1deg)`. Title in Permanent Marker at 32px in `var(--rewind-orange)`. A "URGENT" sticker overlay at the top-right at +12 deg rotation. Backdrop: `background: rgba(21, 19, 26, 0.85); backdrop-filter: blur(2px) saturate(1.1)` — the store interior dimming around the receipt-counter spotlight. Close button: a small `[X]` in dot-matrix monospace, or a "DISMISS" mini-button in REWIND-style.

badges / tags: GENRE-STICKER badges. Action: `background: var(--rental-blue); color: var(--member-yellow); border: 2px solid var(--clamshell-black); border-radius: 4px; padding: 3px 10px; font-family: "Anton"; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; box-shadow: 2px 2px 0 var(--clamshell-black)`. Variants by category: COMEDY in `--member-yellow / --rental-blue`, HORROR in `--clamshell-black / --rewind-orange`, FAMILY in `--receipt-pink / --rental-blue`, NEW RELEASE in `--member-yellow / --rental-blue` with a star icon. RENTED badge: `background: var(--clamshell-black); color: var(--member-yellow); font-family: "Permanent Marker"; transform: rotate(-3deg)`. OVERDUE badge: `background: var(--rewind-orange); color: var(--vhs-label-cream); font-family: "Permanent Marker"`.

**signature element — the BE KIND REWIND sticker**: a reusable component. A small circular orange sticker at -8 deg rotation, with the text "BE KIND REWIND" in `"Anton"` uppercase wrapping around the circle perimeter or stacked across 2 lines in `var(--clamshell-black)`. `background: var(--rewind-orange); color: var(--clamshell-black); border-radius: 50%; width: 72-96px; height: 72-96px; padding: 16px; font-size: 10px; font-weight: 700; letter-spacing: 0.04em; text-align: center; line-height: 1.1; box-shadow: 3px 4px 8px rgba(0,0,0,0.3); transform: rotate(-8deg); position: absolute`. Can be applied to any card, banner, or featured element — the "stuck-on" reminder badge.

**signature element — the chunky offset shadow**: the genre's most identifying property. Every "sign" element (button, banner, card, badge) renders with a `box-shadow` of `Npx Npx 0 [color]` where N is 3-8 and color is one of `--clamshell-black`, `--rental-blue-deep`, `--rewind-orange`, or `--member-yellow-deep`. The shadow is hard-edged (no blur), offset 100% to the bottom-right (the southeast direction always — never north or northwest). This creates the layered cardstock look of vinyl signage stuck on vinyl signage.

**signature element — the VHS tracking-line glitch**: a body-level animated overlay rendering occasional horizontal scan-line distortion bars that drift down the page once every 8-12 seconds. `position: fixed; inset: 0; pointer-events: none; background: linear-gradient(180deg, transparent 0%, transparent 48%, var(--crt-scan) 49%, var(--crt-phosphor) 50%, var(--crt-scan) 51%, transparent 52%, transparent 100%); background-size: 100% 12px; animation: vhsScroll 9s linear infinite; opacity: 0.18; mix-blend-mode: screen`. The tracking-line shudder of an old VCR feed.

**signature element — the price-tag overlay**: featured cards get a small price-tag overlay at the bottom-right corner. `position: absolute; bottom: 12px; right: -10px; background: var(--member-yellow); color: var(--clamshell-black); padding: 6px 14px; font-family: "Anton"; font-size: 16px; letter-spacing: 0.04em; transform: rotate(-3deg); box-shadow: 2px 3px 0 var(--clamshell-black); clip-path: polygon(0 0, 100% 0, 100% 100%, 12px 100%, 0 50%)` — the slanted-edge price tag, with a punched hole notch at the left.

**interaction language**

hover: the sign LIFTS off the wall. `transform: translate(-2px, -2px); box-shadow: 7px 7px 0 [original-shadow-color]; transition: transform 0.12s ease-out, box-shadow 0.12s ease-out`. The hard shadow grows because the element rises off the surface. Color treatments: signage backgrounds may invert (blue→yellow or yellow→blue) on hover. Stickers tilt slightly more — `transform: rotate(angle + 2deg)`.

active / pressed: HARD slap into the wall. `transform: translate(2px, 2px); box-shadow: 1px 1px 0 [shadow-color]; transition: transform 0.05s ease, box-shadow 0.05s ease`. The shadow collapses to almost nothing — the sign just got pressed flat against the surface. Buttons may briefly invert their fill color for 80ms.

focus: a `3px solid var(--member-yellow)` outline at `outline-offset: 3px` — the yellow signage-stripe outline. On dark backgrounds (clamshell cards): `outline-color: var(--rewind-orange)` for contrast. Plus an additional `box-shadow: 0 0 0 6px var(--rental-blue-deep)` to thicken the indicator on focus.

selected: a star-burst NEW! sticker appears at the top-right corner at -12 deg rotation, via `::after` pseudo-element. `content: "PICK!"; background: var(--member-yellow); color: var(--rental-blue); border: 2px solid var(--clamshell-black); padding: 4px 10px; font-family: "Anton"; font-size: 12px; transform: rotate(-12deg); box-shadow: 2px 2px 0 var(--clamshell-black)`. Plus the element gains `box-shadow: 8px 8px 0 var(--rewind-orange)` — bumped to a heavier-shadow.

disabled: the element is X'd-OUT with a hand-drawn marker slash. `position: relative; opacity: 0.55; pointer-events: none; ::after { content: "OUT"; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-12deg); font-family: "Permanent Marker"; font-size: 28px; color: var(--rewind-orange); text-shadow: 1px 1px 0 var(--clamshell-black); }`. Plus a diagonal `background-image: repeating-linear-gradient(135deg, transparent 0 16px, rgba(28,20,16,0.15) 16px 18px)` stripe overlay.

drag: the case LIFTS off the shelf. `transform: scale(1.06) rotate(-3deg); box-shadow: 0 24px 48px rgba(0,0,0,0.6), 10px 10px 0 var(--rental-blue); cursor: grabbing; z-index: 999`. A faint silhouette outline remains in the original location — the empty space where the case sat.

**motion & feedback**

transitions: snappy and chunky — `transition: transform 0.12s ease-out, box-shadow 0.12s ease-out, background-color 0.12s ease`. Buttons snap, signs lift, shadows shift. No spring-bounce — this is rigid vinyl on rigid vinyl. The most-used easing is `ease-out` and `cubic-bezier(0.25, 1, 0.5, 1)` (a slight overshoot for stickers).

**keyframes**:

```css
@keyframes vhsScroll {
  0%   { background-position: 0 -50%; }
  100% { background-position: 0 150%; }
}
/* the VHS tracking-line drifts down the screen once every 9s */

@keyframes signSlap {
  0%   { transform: translate(-12px, -8px) rotate(-6deg) scale(1.05); opacity: 0; }
  60%  { transform: translate(2px, 1px) rotate(1deg) scale(0.98); opacity: 1; }
  100% { transform: translate(0) rotate(0) scale(1); opacity: 1; }
}
/* a sign slaps onto the wall — for newly-arrived elements; 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) */

@keyframes tapeEject {
  0%   { transform: translateY(0); opacity: 1; }
  40%  { transform: translateY(-8px) rotate(2deg); opacity: 1; }
  100% { transform: translateY(120%) rotate(8deg); opacity: 0; }
}
/* a VHS case ejects from the slot — for dismissal/removal; 0.4s ease-in */

@keyframes neonFlicker {
  0%, 96%, 100% { opacity: 1; }
  97%, 99%      { opacity: 0.5; }
  98%           { opacity: 0.85; }
}
/* the OPEN sign flickers rarely — applied to neon-pink elements */

@keyframes hologramShift {
  0%   { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
/* the membership-card foil shimmer cycles every 4s */
```

loading: a VHS REWIND animation — a horizontal bar with two reels (one filling, one emptying) and the text "REWINDING..." in monospace `var(--member-yellow)` on `var(--rental-blue)` background. Or a dot-matrix loading message: "PROCESSING — PLEASE WAIT" cycling with a blink. No spinners.

success: a "RENTED!" or "RETURNED ✓" sticker SLAPS onto the element via `signSlap` keyframe in `var(--member-yellow)` with a hard `var(--clamshell-black)` shadow. A small bell-ring icon may flicker in `var(--rewind-orange)`. The whole sequence takes 0.4s.

error: a red "ERROR" or "OUT OF STOCK" sign slaps in via `signSlap` at -6 deg rotation in `var(--rewind-orange)` on `var(--vhs-label-cream)` with a thick `var(--clamshell-black)` border and offset shadow. A brief VHS-tracking-glitch effect plays on the affected element for 0.3s. The fluorescent ceiling-light overlay briefly dims (0.15 → 0.05 opacity over 0.2s, then back).

page enter: signs SLAP into place via `signSlap`, staggered 70-100ms. New-release tiles drop in slightly later (additional 200ms delay) — the wall arranges itself as if a stockroom employee just finished setting up Friday's new releases. Background VHS-tracking begins at 1.5s after first load.

**atmosphere**

background: `var(--carpet-burgundy)` base — the burgundy carpet of the store interior. A subtle texture overlay (low-opacity SVG noise) at `opacity: 0.04` gives the carpet weave. Plus a vertical gradient: `background-image: linear-gradient(180deg, var(--rental-blue-deep) 0%, var(--rental-blue-deep) 8%, transparent 8.5%, transparent 100%)` — the top edge has a strip of rental-blue at the very top suggesting the wall-meets-ceiling line.

fluorescent ceiling-light overlay: a body-level top-aligned linear-gradient `background-image: linear-gradient(180deg, var(--fluorescent-glow) 0%, transparent 18%); pointer-events: none` — the cool-white wash of overhead fluorescent fixtures. Subtle animation: opacity oscillates 0.3 → 0.34 → 0.3 over 6s — the bulb hum.

VHS tracking-line layer (described above) drifts perpetually.

scan-line pattern: a very subtle horizontal scan-line at low opacity on dark backgrounds — `background-image: repeating-linear-gradient(0deg, transparent 0 2px, var(--crt-scan) 2.5px, transparent 3px); opacity: 0.04` — the CRT-monitor cast.

decorative aisle-banners floating overlay: 2-4 absolutely-positioned background banners (NEW RELEASE, ACTION, COMEDY, HORROR, FAMILY, NEW THIS WEEK) at low opacity (0.15) in the page edges and corners. Drift slowly in `transform: translateY(-2px)` cycles. The store-signage atmospheric depth.

snack-counter glow (optional): a warm radial gradient in the bottom-right corner — `background-image: radial-gradient(circle at 90% 95%, var(--rewind-orange-glow) 0%, transparent 30%)` — the warm cast of a microwave-popcorn snack stand in the corner.

scrollbar: `width: 12px; track: var(--clamshell-black); thumb: var(--member-yellow); thumb:hover: var(--rewind-orange)`. Chunky and signage-bright.

ambient feel: 9:47 PM, Friday night. Fluorescent lights buzz overhead. The new-release wall glows yellow. A young employee at the register is hand-writing a return-by date on a sticker with a sharpie. The neon-pink OPEN UNTIL MIDNIGHT sign in the window flickers once. Someone hits PLAY on a demo tape and the CRT TV near the new-releases starts running a Tom Cruise trailer. Friday night, every aisle is a vinyl-signed expedition.

**editorial voice**

friendly retail clerk, slightly campy 90s-mall energy. Big chunky labels, enthusiastic adjectives, all-caps for signage, mixed-case for body. Exclamation marks welcome, especially on banners.

button labels: `RENT NOW`, `ADD TO CART`, `BE KIND REWIND`, `CHECKOUT`, `MEMBER LOGIN`, `BROWSE NEW RELEASES`, `RETURN TAPE`, `RENEW RENTAL`, `JOIN AS MEMBER`, `CHECK AVAILABILITY`, `RESERVE TONIGHT'S PICK`. ALL CAPS for chunky signage buttons, Title Case for inline links. Often with an exclamation: `RENT 3 GET 1 FREE!`.

headings: store-front signage — `NEW RELEASES!`, `THIS WEEK'S TOP RENTALS`, `BACK IN STOCK`, `BE KIND — REWIND!`, `MIDNIGHT MADNESS`, `FRIDAY-NIGHT PICKS`, `GENRE AISLES`, `MEMBERS ONLY`, `OVERDUE? CALL THE STORE`, `STAFF PICK OF THE WEEK`. Always uppercase, often with an exclamation mark, often with the dropshadow-style yellow-on-blue treatment.

metadata: rental/tape format — `MEMBER #048372`, `RENTED 14 MAR 1996`, `RETURN BY 17 MAR 1996 BY 8 PM`, `LATE FEE: $4.00`, `RATING: PG-13`, `RUNTIME: 124 MIN`, `STOCK: 4 IN`, `AISLE: ACTION B-3`, `ARTWORK BY: ___`, `RELEASE WEEK: 12 OF 1996`. Always uppercase monospace or chunky Anton, dot-matrix for receipts.

placeholders: friendly retail prompts. `Search for a movie...`, `Type your title here...`, `Member number?`, `Enter return-by date`, `What genre are you in the mood for?`, `Late fee inquiry`. Lowercase, often with an ellipsis.

empty states: `Aisle's empty — back in stock soon!`, `No rentals on file. Pick one for tonight!`, `Your cart's empty — be kind to your Friday night.`, `No overdue items. You're a model member!`, `Stockroom hasn't restocked yet — check back tomorrow.`. Friendly, slightly cheeky, never apologetic.

error messages: `Out of stock — try the next aisle.`, `Membership expired — renew at the counter.`, `Late fees owed — pay $4.00 to continue.`, `Tape damaged on return — see the cashier.`, `Card declined — try a different payment.`. Always with a re-direct, always concrete.

success messages: `RENTED! Have a great night!`, `Returned ✓ Thanks for being kind & rewinding.`, `Added to cart — checkout when ready!`, `Member sign-up confirmed — welcome to the family!`, `Late fee paid in full — clean slate!`. Often with `✓` glyph and an exclamation.

confirmation prompts: `Cancel this rental?`, `Remove from cart?`, `Pay late fees now?`, `Sign out of member account?`.

handwritten scrawl overlays (decorative): `LATE FEE: $4.00`, `BE KIND REWIND PLZ`, `OVERDUE — CALL!`, `LAST COPY`, `STAFF PICK!`, `RECOMMENDED!`. In Permanent Marker at varied rotations, always in `--ink-marker` or `--rewind-orange`.

**cursor & selection**

cursor: `cursor: default` globally. Interactive: `cursor: pointer`. Inputs: `cursor: text`. Draggable cases: `cursor: grab` → `grabbing`. Custom cursor option: a chunky VHS-tape silhouette glyph in `var(--rental-blue)`.

text selection: `::selection { background: var(--member-yellow); color: var(--rental-blue); }` — the highlighter-yellow swipe against rental-blue. Like someone marking a movie title on a printed catalog.

**when to reach for this genome**

Use this genome when the request calls for a video rental store, VHS catalog, clamshell-case grid, membership card, late-fee workflow, new-release wall, genre aisle, staff-pick shelf, tape return, rewind reminder, rental checkout, VCR/tracking-line nostalgia, or any product that should feel like a 1990s neighborhood video store under fluorescent lights.

Reach for it when the user wants Blockbuster-blue and member-yellow signage, chunky vinyl shadows, VHS labels, clamshell boxes, BE KIND REWIND stickers, laminated membership cards, dot-matrix receipts, late-fee notices, genre tags, CRT tracking lines, and Friday-night retail-clerk energy. It is strongest when the interface can map content to tapes on shelves: browse, reserve, rent, return, mark overdue, show availability, recommend staff picks, and organize by aisle or genre.

Choose it for:
- movie catalogs, retro rental flows, staff-pick walls, VHS archive browsers, membership dashboards, late-fee screens, checkout receipts, and tape inventory concepts.
- entertainment surfaces where the specific reference is 1990s rental retail, not cinema projection or modern streaming.
- physical-media archives, nostalgia campaigns, pop-up video-store events, collectible tape catalogs, and genre-browsing experiences.
- playful product grids where every item can be treated as a clamshell case, spine label, genre sticker, price tag, or new-release banner.

Do not choose it for drive-in cinema, streaming platforms, serious film criticism, museum film archives, generic ecommerce, arcade/pinball interfaces, theater ticketing, or polished media SaaS. Use `drive_in_marquee.intermission` for outdoor cinema and concession intermission cards, `gallery_foyer.institution` for film-institution authority, `pinball_backglass.tilt` for arcade cabinet energy, `mail_order.catalog` for paper retail catalogues, and `modern_studio.pro` for contemporary media-product polish.

**anti-patterns — this genome NEVER:**

1. uses thin, hairline borders or subtle 1px rules on UI components. Borders are CHUNKY — 2-4px minimum, with hard offset shadows. Hairline rules read as editorial/print, not retail signage. The genome lives in the 90s mall, not the gallery.
2. uses smooth gradient buttons or modern gradient fills. Buttons are FLAT-COLOR with HARD-OFFSET SHADOWS — the vinyl-on-vinyl layered look. Gradients (linear or radial) belong to other genomes; here the only gradient allowed is the holographic membership-card foil cycling.
3. uses elegant serif typography for display or body. The genre is BLOCK SANS-SERIF — Anton, Oswald, Bebas, Squada One. Serifs (Garamond, Caslon, Cormorant) belong to other genomes — here, every letter is a chunky vinyl block.
4. uses muted, sophisticated, or "tasteful" color palettes. The palette is SIGNAGE-BRIGHT — Blockbuster blue, hot yellow, REWIND orange, neon pink. Pastels, earth tones, and muted neutrals contradict the fluorescent-mall identity.
5. uses minimalist whitespace-heavy gallery layouts. The store is PACKED — clamshell wall-to-wall, signage on every shelf, stickers on every spine. Gallery-quiet aesthetics belong to celestial_plate; this genome is the maximalist opposite.
6. uses spring-bounce or playful cute animations. Motion is SIGN-SLAP and TAPE-EJECT — hard, mechanical, vinyl-on-vinyl. Spring-bounce reads as a children's app; this genome is a retail establishment for adults who came in for an action movie.
7. uses casual-corporate marketing-speak voice. The voice is RETAIL-CLERK ENTHUSIASTIC — "RENT NOW!", "BE KIND REWIND!", "STAFF PICK!". Marketing-speak ("Discover your next favorite", "Curated selection") reads as a modern subscription service, not a 1996 mall video store.
8. uses pure black backgrounds. The dark backbone is `--clamshell-black` (a slightly-warm dark with a hint of purple), and the store interior is `--carpet-burgundy` (the wine-burgundy carpet). Pure `#000` reads as a tech-startup void; this genome is the lived-in dim of fluorescent retail at 9 PM.
9. uses backdrop-filter blur or glassmorphism. The materials are HARD VINYL, MOLDED PLASTIC, and CARDSTOCK — physical, opaque, light-absorbing. Frosted glass and translucent panels belong to other genomes.
10. uses fashion-forward editorial typography or experimental layout. The grid is RECTANGULAR AISLE-WALL — every clamshell tile in a regular spacing. Asymmetric editorial layouts, vertical-text, broken-grid experiments belong to design-magazine genomes; here, the cases sit on the shelf in straight rows.
