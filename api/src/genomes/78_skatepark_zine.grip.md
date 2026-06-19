---
id: "78"
name: skatepark_zine.grip
keywords:
  - skate
  - skateboard
  - thrasher
  - zine
  - grip tape
  - VX1000
  - street
  - trick
  - deck
  - sticker
  - punk
  - DIY
  - shred
  - halfpipe
---

### genome 78: `skatepark_zine.grip`

> identity: late-90s skate video cover meets photocopied punk zine. Grip tape black, VX1000 fisheye frame grabs, sticker-bombed decks, torn paper, hazard yellow, flame red, construction orange, Sharpie annotations, spot maps, trick logs, and raw street footage. Everything feels cut, taped, scanned, dragged across concrete, and reprinted at Kinko's on heavy card stock.

**surface**

colors:
```
--grip-black: #111111;                 /* grip tape, dominant ground, nav surfaces */
--asphalt-black: #050505;              /* deepest shadow, modal backdrop, photo void */
--knockout-white: #F5F5E8;             /* photocopied paper, zine pages, body panels */
--paper-aged: #E6E0C9;                 /* older copy stock, secondary paper cards */
--caution-yellow: #FFD600;             /* hazard headline, active sticker, focus */
--flame-red: #E8432A;                  /* slam/error, destructive actions, hot stickers */
--construction-orange: #FF6B1A;        /* cone marker, hover, secondary sticker */
--concrete-gray: #8C8882;              /* skatepark concrete, metadata, inactive text */
--rail-silver: #B9B7AE;                /* ledge/rail metal, separators, utility trim */
--deck-blue: #2C5D9E;                  /* deck graphic blue, secondary accent */
--marker-purple: #6F38B8;              /* occasional marker note, visited/alt accent */
--photocopy-noise: rgba(17,17,17,0.08);/* toner grit on paper */
--hazard-shadow: rgba(255,214,0,0.28); /* yellow glow on dark */
--hard-shadow: rgba(0,0,0,0.72);       /* harsh zine-card shadow */
```

typography:
- impact headlines: `"Impact", "Anton", "Oswald", "Arial Black", sans-serif; font-weight: 900; font-size: 42-82px; line-height: 0.88; letter-spacing: -0.03em; text-transform: uppercase;`
- spot headers and section labels: `"Oswald", "Arial Narrow", sans-serif; font-weight: 800; font-size: 18-34px; letter-spacing: 0.04em; text-transform: uppercase;`
- marker annotations: `"Permanent Marker", "Rock Salt", "Comic Sans MS", cursive; font-size: 13-22px; line-height: 1.1; transform: rotate(-2deg);`
- body copy: `"Inter", "Helvetica Neue", Arial, sans-serif; font-weight: 500; font-size: 13-15px; line-height: 1.48; color: var(--grip-black);`
- metadata / tape labels: `"IBM Plex Mono", "Roboto Mono", monospace; font-weight: 700; font-size: 10-12px; letter-spacing: 0.06em; text-transform: uppercase; font-variant-numeric: tabular-nums;`
- display text screams in all caps. body text can be mixed case, but labels, buttons, badges, and metadata stay uppercase.

borders:
- default panels: `2px solid var(--grip-black); border-radius: 0px;`
- dark panels: `2px solid var(--knockout-white); border-radius: 0px;`
- sticker cards: `3px solid var(--grip-black); border-radius: 12-16px;`
- photo frames: `3px solid var(--knockout-white); outline: 2px solid var(--grip-black);`
- torn zine edges use jagged `clip-path: polygon(...)` or rough border masks.
- major separators are `3px solid var(--caution-yellow)` or dashed concrete lines, not subtle hairlines.

spacing:
- dense collage: `gap: 8-16px`, `padding: 12-24px`.
- zine cards use `padding: 18-22px`; photo frames use small `padding: 4-6px`.
- controlled overlap is encouraged: `margin-top: -8px`, `margin-left: -12px`, and layered z-index.
- the underlying layout can be grid-based, but individual stickers, labels, and photo frames should break alignment.

**color distribution**

- 52% grip/asphalt black (`--grip-black`, `--asphalt-black`) - main ground, nav bars, full-bleed video title cards.
- 20% knockout white / paper aged - zine panels, body cards, frame mats, text fields.
- 10% caution yellow - headlines, active states, focus, primary stickers.
- 8% concrete gray / rail silver - metadata, dividers, inactive state, skatepark materials.
- 6% flame red / construction orange - error, destructive, hover pops, slam labels, cones.
- 4% deck blue / marker purple - optional deck art, marker notes, alternate sticker colors.

Yellow and red hit hard because black dominates. White panels are the readable zine layer. Gray keeps the concrete and film metadata grounded.

**component patterns**

buttons:
- primary: `background: var(--caution-yellow); color: var(--grip-black); border: 2px solid var(--grip-black); border-radius: 0; padding: 10px 28px; font-family: "Impact", sans-serif; font-size: 15px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 3px 3px 0 var(--grip-black);`
- secondary dark: `background: transparent; color: var(--knockout-white); border: 2px solid var(--knockout-white); border-radius: 0;`
- slam/danger: `background: var(--flame-red); color: var(--knockout-white); border: 2px solid var(--grip-black);`
- sticker alternate: `background: var(--construction-orange); color: var(--grip-black); border-radius: 14px; border: 2px solid var(--grip-black); font-family: "Permanent Marker", cursive; transform: rotate(-2deg);`
- buttons are uppercase, high contrast, and tactile. No soft pill CTAs.

inputs:
- `background: var(--knockout-white); border: 2px solid var(--concrete-gray); border-radius: 0; color: var(--grip-black); font-family: "Inter", sans-serif; font-size: 14px; padding: 10px 14px;`
- focus: `border-color: var(--caution-yellow); box-shadow: 0 0 0 2px var(--caution-yellow); outline: none;`
- label: `font-family: "Impact", sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--caution-yellow);`
- placeholder: `color: var(--concrete-gray); font-style: italic;`
- textarea should resemble a zine note block or trick log margin, not a polished form field.

cards / zine pages:
- page card: `background: var(--knockout-white); color: var(--grip-black); border: 2px solid var(--grip-black); border-radius: 0; padding: 20px 18px; box-shadow: 5px 5px 0 var(--hard-shadow); transform: rotate(-1deg);`
- toner texture: `background-image: repeating-linear-gradient(0deg, transparent 0 8px, var(--photocopy-noise) 8px 9px);`
- title: Impact/Anton uppercase at 24-40px, tight line-height.
- body: Inter 13-15px with enough padding to remain legible inside the collage.
- overlapping sticker badge may cover a corner; content must still fit.

sticker cards:
- `background: var(--caution-yellow); color: var(--grip-black); border: 3px solid var(--grip-black); border-radius: 14px; padding: 14px 18px; transform: rotate(2deg); box-shadow: 3px 3px 0 var(--grip-black);`
- alternate colors: flame red, construction orange, deck blue, marker purple.
- sticker cards are used for tags, CTAs, short feature panels, and status chips.

photo / video frames:
- `background: var(--asphalt-black); border: 3px solid var(--knockout-white); outline: 2px solid var(--grip-black); padding: 4px; transform: rotate(-1deg);`
- aspect ratio usually `4 / 3` or `16 / 9`; fisheye photos can be circular only if explicitly presented as a lens crop.
- captions sit below as mono tape labels: `VX1000 // TAPE 003 // 00:04:22`.
- apply rough media treatment: `filter: contrast(1.18) saturate(0.92) grain`.

navigation:
- grip-tape bar: `background: var(--grip-black); border-bottom: 3px solid var(--caution-yellow); height: 52px; padding: 0 24px; display: flex; align-items: center;`
- nav labels: Impact/Oswald uppercase, `font-size: 14px`, `letter-spacing: 0.04em`, `color: var(--concrete-gray)`.
- active: `color: var(--caution-yellow); text-decoration: underline; text-decoration-thickness: 3px; text-underline-offset: 6px;`
- logo/brand can be a marker-style sticker rotated slightly.

headers:
- video title card: `background: var(--grip-black); border-bottom: 4px solid var(--caution-yellow); padding: 40px 28px 32px;`
- title: Impact 56-82px, yellow or knockout white, line-height under 1.
- subtitle: Inter or mono, concrete gray, clipped like tape metadata.
- annotation: Permanent Marker orange/red, rotated `-3deg`, overlapping the headline.

footers:
- `background: var(--grip-black); border-top: 2px solid var(--concrete-gray); color: var(--concrete-gray); padding: 20px 28px; font-size: 12px;`
- links in caution yellow; location/credits in mono.
- footer copy can mention `FILMED ON LOCATION`, `TAPE`, `SPOT`, or `CREW`.

lists:
- trick or spot list rows use `//` prefixes, square bullets, or small yellow tape tabs.
- row title in Impact/Oswald uppercase; detail in Inter.
- separator: `border-top: 1px dashed var(--concrete-gray);`
- active row: `background: rgba(255,214,0,0.12); border-left: 4px solid var(--caution-yellow);`
- avoid neat checklist styling. This is a spot list taped into a zine margin.

tables / trick logs:
- `background: var(--knockout-white); border: 2px solid var(--caution-yellow); border-radius: 0;`
- header: `background: var(--caution-yellow); color: var(--grip-black); font-family: "Impact", sans-serif; text-transform: uppercase; letter-spacing: 0.05em;`
- body cells: `padding: 10px 14px; border-bottom: 1px solid var(--concrete-gray); font-size: 13px;`
- columns should feel like log labels: `SPOT`, `TRICK`, `CLIP`, `TAPE`, `STATUS`, `CREW`.
- status values use stickers or slam badges.

dividers:
- bold tear: `border-top: 3px solid var(--caution-yellow); margin: 24px 0;`
- rough break: `border-top: 1px dashed var(--concrete-gray);`
- sticker slash divider: repeated `////` in mono gray or yellow.
- never use elegant low-contrast HR lines.

modals / overlays:
- zine-page modal: `background: var(--knockout-white); color: var(--grip-black); border: 3px solid var(--grip-black); border-radius: 0; padding: 28px; box-shadow: 7px 7px 0 var(--grip-black); max-width: 520px;`
- modal title: Impact 32-44px uppercase.
- close action: flame-red sticker or square black/yellow button.
- backdrop: `background: rgba(17,17,17,0.88);` no blur.
- modal should look like a page slapped on top of a grip-tape desk.

badges:
- slam badge: `background: var(--flame-red); color: var(--knockout-white); border: 2px solid var(--grip-black); border-radius: 0; font-family: "Impact"; font-size: 11px; letter-spacing: 0.06em; padding: 3px 10px; text-transform: uppercase;`
- sticker badge: `background: var(--caution-yellow); color: var(--grip-black); border-radius: 12px; border: 2px solid var(--grip-black); padding: 3px 12px; transform: rotate(-3deg);`
- tape label: `background: var(--grip-black); color: var(--knockout-white); border: 1px solid var(--concrete-gray); font-family: "IBM Plex Mono";`

signature collage stack:
- base grip surface, a rotated zine page, a VX1000 frame, one or two sticker badges, and a marker annotation.
- keep rotations within `-4deg` to `4deg`.
- use this pattern for feature cards, dashboards, gallery tiles, profile cards, and onboarding steps.

**interaction language**

hover:
- borders snap to `var(--caution-yellow)`, text brightens, and sticker elements rotate by 1-2 degrees.
- dark buttons gain `box-shadow: 4px 4px 0 var(--caution-yellow)`.
- transition: `0.1-0.15s ease`; no slow polish.

active / pressed:
- hard slam: `transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--grip-black); filter: brightness(0.92);`
- sticker buttons flatten rotation toward `0deg`.
- tactile, abrupt, and mechanical.

focus:
- `outline: 2px solid var(--caution-yellow); outline-offset: 2px;`
- on yellow surfaces use `outline: 2px solid var(--flame-red);`
- keyboard focus must be high contrast, like hazard tape around the active element.

selected:
- `background: var(--caution-yellow); color: var(--grip-black); border-color: var(--grip-black);`
- selected cards get a sticker badge reading `LOCKED`, `LANDED`, `SAVED`, or `CLIP`.

disabled:
- `opacity: 0.32; filter: grayscale(1) contrast(0.8); pointer-events: none;`
- disabled elements look like faded photocopies or washed-out stickers.

drag:
- `cursor: grabbing; transform: rotate(-4deg) scale(1.03); box-shadow: 6px 8px 0 rgba(0,0,0,0.55);`
- drop targets use dashed yellow outline and rough tape corners.

**motion & feedback**

transitions:
- default: `transition: transform 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;`
- page elements enter as hard cuts or quick drops, not elegant fades.
- stagger, if used, is `40-60ms` per layer.

loading:
- top hazard bar: `height: 3px; background: var(--caution-yellow); animation: hardFill 0.9s linear infinite;`
- alternate: repeated `//// LOADING ////` tape strip sliding horizontally.
- copy: `LOADING...`, `STACKING CLIPS...`, `CHECKING TAPE...`.
- no spinners.

success:
- Impact text stamp: `LANDED`, `CLIP SAVED`, `BOLTS`, or `STACKED`.
- quick pop: `scale(1.12)` to `scale(1)` over `150ms`.
- yellow border flash once, then return to default.

error:
- border flashes flame red; element jitters horizontally twice.
- copy: `BAIL`, `SLAM`, `BOARD SNAPPED`, `SPOT NOT FOUND`, `TRY AGAIN`.
- VHS tracking line can flicker briefly; do not use polished toast animations.

keyframes:
```css
@keyframes hardFill { from { transform: translateX(-100%); } to { transform: translateX(100vw); } }
@keyframes tapeJitter { 0%,100% { transform: translateX(0); } 35% { transform: translateX(-2px); } 70% { transform: translateX(2px); } }
@keyframes stampPop { from { transform: scale(1.12) rotate(-2deg); } to { transform: scale(1) rotate(0deg); } }
```

**atmosphere**

The page lives on a black grip-tape desk covered with photocopied pages, stickers, trick notes, and video stills.

backgrounds:
- body: `background: var(--grip-black);` plus subtle grip noise.
- paper zones: `background: var(--knockout-white);` with toner grain and slight off-white warmth.
- concrete sections: `background: linear-gradient(135deg, rgba(255,255,255,0.04), transparent), var(--concrete-gray);`
- photo sections: black matted frames with off-white borders.

textures:
- grip tape: low-opacity noise or tiny speckle pattern at 4-8%.
- photocopy: horizontal toner streaks, small black speckles, slightly uneven paper background.
- sticker wear: optional chipped border masks; never glossy app gradients.
- concrete: faint scratches and scuffs, not decorative grunge overload.

overlays:
- Sharpie annotations can sit over cards at small rotations.
- tape labels and `REC 00:04:22` style metadata can decorate media frames.
- sticker piles should not hide primary controls.

media:
- use harsh contrast and limited polish: `filter: contrast(1.18) saturate(0.92);`
- fisheye framing is encouraged for hero/video cards.
- captions should look taped or stamped, not floating over gradients.

**editorial voice**

tone: raw skate-zine editor plus friend behind the fisheye. Direct, clipped, energetic, and allergic to corporate polish.

button labels:
- `FULL SEND`
- `DROP IN`
- `PUSH`
- `LOCK IN`
- `NEXT SPOT`
- `STACK CLIP`
- `SAVE TAPE`
- `ROLL IT`
- `TRY AGAIN`

headings:
- `SLAM SECTION`
- `TRICK TIP`
- `BOARD SETUP`
- `SPOT CHECK`
- `FULL PART`
- `RAW FOOTAGE`
- `THE ENDER`
- `CREW NOTES`
- `TAPE LOG`

metadata:
- `SPOT: 3RD & ARMY`
- `TAPE 003`
- `VX1000 / MK1`
- `TRICK: KICKFLIP BS TAIL`
- `STANCE: GOOFY`
- `SETUP: 8.25 / INDYS / 52MM`
- `CLIP: 00:04:22`

placeholders:
- `type spot name...`
- `search tricks...`
- `what are you skating?`
- `add tape note...`
- `crew name...`

empty states:
- `Nothing here yet - go skate.`
- `No footage.`
- `Spot list empty.`
- `No clips saved.`
- `Tape is blank.`

errors:
- `Bail. Try again.`
- `Slam - that did not work.`
- `Board snapped. Retry.`
- `Spot not found.`
- `Tape got chewed.`

success:
- `Landed.`
- `Clip saved.`
- `Stacked.`
- `Bolts.`
- `Clean.`

**cursor & selection**

cursor: `default` for reading, `pointer` for interactive stickers/buttons/nav, `grab` and `grabbing` for draggable stickers, zine pages, and media frames.

selection: `::selection { background: var(--caution-yellow); color: var(--grip-black); }`

**when to reach for this genome**

Use `skatepark_zine.grip` for action-sports products, music/punk/event sites, streetwear, youth culture, creator portfolios, video libraries, clip review tools, game menus, skate shop surfaces, DIY community boards, and any prompt that asks for raw collage energy rather than polished brand design.

It is strongest when prompts mention skateboarding, zines, punk, street, stickers, deck graphics, video parts, trick logs, harsh black/yellow/red graphics, fisheye footage, or DIY culture.

Avoid it for enterprise SaaS, medical/legal/finance, luxury commerce, calm wellness, formal institutions, or any product where rawness would read as careless instead of intentional.

**anti-patterns - this genome NEVER:**

1. uses elegant serif display typography, light weights, or refined editorial type. headlines are impact sans, marker scrawl, or rough zine labels.
2. uses soft pastel palettes, muted accents, or tasteful gradients. accents are full-force hazard yellow, flame red, orange, and deck graphic color.
3. uses rounded pills or soft universal radius as the main shape system. default geometry is square; only stickers get intentional rounding.
4. uses corporate copy, product-marketing voice, or polished lifestyle language. copy sounds like a skate zine, tape log, or crew note.
5. uses slow luxurious transitions, spring easing, or elegant fade cascades. interactions cut, slam, jitter, and stamp.
6. uses sparse Swiss minimalism as the core layout. compositions are layered zine collage with controlled overlap and rough alignment breaks.
7. uses glassmorphism, blur, translucent cards, or glossy mobile-app surfaces. materials are grip tape, photocopy paper, stickers, concrete, and video frames.
8. lets chaos destroy usability. rotations, overlap, and stickers must frame content while preserving readable text and accessible controls.
9. uses low contrast because it feels gritty. skate zines are harsh and readable: black, off-white, yellow, red.
10. turns every component into a different gimmick. repeat the system: zine page, sticker, tape label, photo frame, hazard divider, marker note.
11. hides metadata that makes the culture specific. spot, trick, tape, clip time, setup, stance, and crew labels make the genome work.
12. uses polished stock-photo treatments. media should feel like VX1000 frame grabs, scanned photos, or taped prints.
