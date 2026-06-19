---
id: "18"
name: groove_flyer.90s
keywords:
  - rave
  - flyer
  - underground
  - house
  - 90s
  - poster
  - risograph
  - letterpress
  - vinyl
  - warehouse
  - club
  - riso
  - techno
  - acid house
  - UK garage
---

### genome 18: `groove_flyer.90s`

> identity: 90s underground house music flyer. single-color risograph on aged stock. warehouse rave promotion meets letterpress poster shop — monochrome indigo ink pressed into warm, mottled paper.

**surface**

colors:
```
--ink: #393375;          /* deep indigo — the only "color" */
--ink-dim: #6b6399;      /* 50% ink for secondary text, faded print */
--ink-ghost: #a9a3c2;    /* 25% ink for hints, watermarks, disabled */
--paper: #d8d2b8;        /* aged stock — warm, creamy, slightly yellow */
--paper-dark: #c8c1a3;   /* shadow/vignette tone, paper in shade */
--paper-light: #e6e0cc;  /* highlight, paper catching light */
--spot-red: #c1362e;     /* rare spot color — used ONLY for critical emphasis, max 2% of surface */
```

typography:
- display/headings: `"Archivo Black", "Impact", sans-serif` — weight 400 (it's a single-weight black face). `text-transform: uppercase`. `line-height: 0.85–0.9`. `letter-spacing: 0.02em` at large sizes, `0.1em–0.2em` at small sizes.
- body/meta/labels: `"Space Mono", "Courier New", monospace` — weight 700 for labels, 400 for body. `text-transform: uppercase`. `font-size: 0.75rem–0.9rem`. `letter-spacing: -0.03em` to `0.05em`. `line-height: 1.2`.
- display sizes scale aggressively: `clamp(3rem, 14vw, 7rem)` for hero titles, `clamp(1.5rem, 6vw, 2.5rem)` for section heads, `clamp(1rem, 4vw, 1.5rem)` for sub-heads.
- justified text blocks with `text-align: justify; text-align-last: justify` for taglines and sub-headings that span full width — a key flyer technique.
- no italics. ever.

borders:
- primary dividers: `height: 3px; background: var(--ink)`. full-width horizontal rules between sections.
- vertical dividers in grids: `width: 2px; background: var(--ink)`.
- `border-radius: 0px` — absolute. no rounded corners anywhere.
- panel outlines when used: `border: 3px solid var(--ink)`.

spacing:
- sections separated by full-width divider rules, not whitespace alone.
- internal padding: `4vw` (viewport-relative for poster scaling).
- grid gaps: `2vw`.
- poster max-width constraint: `600px` centered, creating a tall narrow format.

**color distribution**

- 65% paper (`--paper` and its light/dark variants) — the stock dominates, ink sits on top
- 30% ink (`--ink`) — all text, dividers, borders, graphic strokes
- 4% ink-dim/ink-ghost — secondary info, metadata, faded print areas
- 1% spot-red (`--spot-red`) — rare, single accent, like a second plate on a riso print. maximum one element per viewport — if the page scrolls, each viewport-height section may have at most one spot-red element.

**component patterns**

buttons:
- primary: `background: var(--ink); color: var(--paper); border: none; padding: 14px 28px; font-family: "Archivo Black"; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 0.1em; border-radius: 0`.
- secondary: `background: transparent; color: var(--ink); border: 3px solid var(--ink); padding: 11px 25px`. same typography.
- icon buttons: `width: 44px; height: 44px; border: 2px solid var(--ink); display: flex; align-items: center; justify-content: center`. icon as inline SVG, stroke only, `stroke: var(--ink); stroke-width: 2`.

inputs:
- `background: transparent; border: none; border-bottom: 3px solid var(--ink); padding: 10px 0; font-family: "Space Mono"; font-size: 0.85rem; color: var(--ink); text-transform: uppercase; letter-spacing: 0.05em`.
- label above input: `font-family: "Space Mono"; font-weight: 700; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-dim); margin-bottom: 4px`.
- placeholder: `color: var(--ink-ghost)`.

cards/panels:
- no background fill — defined by bordering dividers above and below, or by a `border: 3px solid var(--ink)` box.
- header is a bold `Archivo Black` title inside the bordered area, separated from content by a `2px solid var(--ink)` internal rule.
- no shadows. ever.

navigation:
- horizontal: items separated by `·` (middle dot) or `×` in monospace. `font-family: "Space Mono"; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em`.
- active item: `border-bottom: 3px solid var(--ink)`.
- vertical: items stacked, active item has `border-left: 3px solid var(--ink); padding-left: 12px`.

headers:
- multi-column grid: `display: grid; grid-template-columns: 1fr auto 1fr` with vertical divider between columns.
- left column: display text in Archivo Black. right column: metadata in Space Mono.
- full-width divider rule below.

footers:
- single line of monospace text, centered, `font-size: 0.7rem; letter-spacing: 0.05em`.
- items separated by `•` with generous spacing: `&nbsp;&nbsp;•&nbsp;&nbsp;`.
- full-width divider rule above.

lists:
- no bullets. items are full-width blocks separated by `1px solid var(--ink-dim)` rules.
- active/selected item: `background: var(--ink); color: var(--paper); padding: 8px 12px`.
- prefix numbering when ordered: `font-family: "Archivo Black"; margin-right: 12px`.

tables:
- `border-collapse: collapse`. all borders `2px solid var(--ink)`.
- header row: `background: var(--ink); color: var(--paper); font-family: "Archivo Black"; text-transform: uppercase; letter-spacing: 0.08em; padding: 10px 14px`.
- body cells: `padding: 8px 14px; font-family: "Space Mono"; font-size: 0.8rem`.
- no alternating row colors — uniform paper background.

dividers:
- primary: `height: 3px; background: var(--ink); width: 100%`.
- secondary: `height: 1px; background: var(--ink-dim); width: 100%`.
- decorative: `X X X` or `• • •` in Archivo Black, centered, `letter-spacing: 3vw`, used as section breaks.

modals/overlays:
- `background: var(--paper); border: 3px solid var(--ink); padding: 5vw`. no shadow, no blur, no rounded corners.
- backdrop: `background: rgba(57, 51, 117, 0.7)` (ink at 70% opacity).
- modal title: Archivo Black, large, with divider rule below.

badges/tags:
- `display: inline-block; border: 2px solid var(--ink); padding: 4px 10px; font-family: "Space Mono"; font-weight: 700; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.08em`.
- no background fill by default. critical badge: `background: var(--spot-red); color: var(--paper); border-color: var(--spot-red)`.

**interaction language**

hover:
- buttons: `background: var(--paper); color: var(--ink); outline: 3px solid var(--ink); outline-offset: 3px` (ink shifts to outline, creating a "double-strike" print effect).
- links/nav: `text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 2px`.
- cards: no change. static.

active/pressed:
- buttons: `transform: translate(1px, 1px)` — simulates letterpress impression. no color change.
- list items: `background: var(--ink); color: var(--paper)` — hard inversion.

focus:
- `outline: 2px dashed var(--ink); outline-offset: 4px`. no glow, no shadow.

selected:
- `background: var(--ink); color: var(--paper)` — full inversion. for toggles, checkboxes, and active states.
- selected text in lists: prepend `▶` character.

disabled:
- `color: var(--ink-ghost); border-color: var(--ink-ghost)`. no opacity change — simulates faded/poorly-printed ink.
- `cursor: not-allowed`.

drag:
- `outline: 2px dashed var(--ink); cursor: grab`. while dragging: `cursor: grabbing; opacity: 0.7`.

**motion & feedback**

transitions:
- `transition: none` as the default. UI state changes are instantaneous — mimics the static nature of printed matter.
- the ONLY exception: background paper texture may have a subtle, slow ambient animation (grain shift) at `< 0.01` opacity variation over `4s+` loops. this is atmosphere, not UI motion.

loading:
- text-based: `LOADING · · ·` with dots appearing sequentially at 300ms intervals via CSS animation. monospace, centered. alternatively: a simple horizontal bar that fills left-to-right, `height: 3px; background: var(--ink)`.

success:
- flash the container `background: var(--ink); color: var(--paper)` for 150ms, then snap back. a single hard "stamp" of confirmation.

error:
- `border-color: var(--spot-red); color: var(--spot-red)`. error text in Space Mono: `! ERROR: [message]`. the `!` prefix is mandatory.

**atmosphere**

background:
- base body color: `background-color: #d8d2b8` (warm aged paper).
- WebGL or CSS paper texture: mottled, fibrous, with subtle vignette darkening at edges. use `feTurbulence` fractalNoise + `feDisplacementMap` SVG filter for ink bleed on content, or a canvas-based FBM noise background.
- `mix-blend-mode: multiply` on the content layer — makes ink feel printed INTO the paper rather than sitting on top.

ink bleed filter:
```xml
<filter id="ink-bleed">
  <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise"/>
  <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 1 0" result="centered"/>
  <feDisplacementMap in="SourceGraphic" in2="centered" scale="3"/>
  <feGaussianBlur stdDeviation="0.5"/>
  <feComponentTransfer><feFuncA type="discrete" tableValues="0 1"/></feComponentTransfer>
</filter>
```
apply to the main content wrapper via `filter: url(#ink-bleed)`.
- `contrast(1.1)` on the filtered wrapper — makes ink edges slightly harder, like over-inked riso.

ambient details:
- 4-point or 8-point star SVG decorations (stroke only, `stroke: var(--ink); stroke-width: 2`, size range 24–48px) placed at corners or section breaks.
- arched/curved SVG text paths for decorative labels.
- geometric line-art illustrations using only `stroke: var(--ink)` — no fills except for solid ink shapes and paper-color knockouts.

**editorial voice**

button labels: `ENTER`, `SUBMIT`, `JOIN`, `RESERVE`, `GET IN`, `DETAILS`, `BACK`, `CLOSE`
- terse, imperative, one or two words max. all caps. no articles, no politeness.

headings: all uppercase. Archivo Black. single words or two-word phrases preferred: `LINEUP`, `DETAILS`, `LOCATION`, `ABOUT`, `TICKETS`. longer headings use justified full-width spans.

metadata format:
- dates: `SAT APRIL 11` / `SUN APRIL 12` — abbreviated day, full month, no year unless necessary.
- times: `23:59` / `05:30` — 24-hour, no AM/PM.
- phone: `07878 900 876` — spaced groups.
- location: `UNDERGROUND LOCATION SE19` — vague, postcode only, as per rave flyer tradition.
- versions/IDs: `VOL.003` / `NO.018` / `SERIES A`.

placeholders: `ENTER NAME`, `YOUR EMAIL`, `TYPE HERE`, `SEARCH...` — blunt, uppercase, no "please".

empty states: `NOTHING HERE YET` / `NO RESULTS` / `EMPTY` — short, flat, no emoji, no illustration. centered in the panel.

error messages: `! INVALID INPUT` / `! CONNECTION LOST` / `! SOMETHING WENT WRONG — TRY AGAIN` — always prefixed with `!`, uppercase, terse.

success messages: `CONFIRMED` / `DONE` / `REGISTERED` / `SENT` — single word when possible, uppercase, no exclamation marks.

**cursor & selection**

- default cursor: `cursor: default` on body.
- interactive elements: `cursor: pointer`.
- text inputs: `cursor: text`.
- drag: `cursor: grab` / `cursor: grabbing`.
- disabled: `cursor: not-allowed`.
- `::selection { background: var(--ink); color: var(--paper); }` — hard inversion, like highlighting on a printed page with a marker.

**when to reach for this genome**

Use `groove_flyer.90s` when the prompt asks for a 90s underground house flyer, warehouse rave poster, techno/acid-house/UK-garage event page, club-night lineup, vinyl DJ announcement, riso music flyer, letterpress event broadside, late-night ticket page, monochrome party invite, or venue details surface where aged paper, single-plate indigo ink, hard divider rules, uppercase typography, and blunt event metadata should define the interface.

Reach for it when the user wants a static printed artifact translated into UI: tall narrow poster format, mottled stock, over-inked risograph edges, Archivo Black headlines, Space Mono metadata, full-width rules, postcode-style locations, 24-hour times, terse CTAs, and the feeling of a flyer handed out outside a warehouse at 2 AM.

Do not use it for roller disco, skating rinks, mirror balls, chrome type, or glittering 1978 dance-party energy; use `roller_disco.glitter`. Do not use it for Broadway programs, cast lists, marquee bulbs, Playbill covers, or theatrical ticketing; use `playbill_marquee.bway`. Do not use it for sticker-bombed lamppost layers, paste-ups, slaps, tag archives, or streetwear sticker drops; use `subway_sticker.bombing`. Do not use it for skate-video covers, punk zines, grip tape, fisheye footage, trick logs, or Kinko's concrete grit; use `skatepark_zine.grip`. Do not use it for constructivist political posters, red wedges, propaganda geometry, or state-like declarations; use `constructivist_poster.agit`. Do not use it for playful hot-pink creative tools, generative canvases, or pop-maximalist editor surfaces; use `figment_canvas.pop`.

It is strongest when the whole interface can plausibly be read as a one-color printed music flyer with event facts: lineup, date, location, ticket action, and underground scene texture. If the prompt centers on performance theater, skating nightlife, political poster rhetoric, street sticker accumulation, skate culture, or general creative tooling, choose another genome.

**anti-patterns — this genome NEVER:**

1. uses `border-radius` on any element. every corner is sharp. no exceptions.
2. uses `box-shadow` or `drop-shadow`. depth comes from layering, ink weight, and divider rules — not shadows.
3. uses gradient backgrounds on UI elements. the only gradient is the ambient paper texture.
4. uses more than one accent color. indigo ink is the single plate. spot-red appears at most once per page as a second riso plate.
5. uses italic or oblique text. all emphasis is through weight, size, case, or inversion.
6. uses smooth transitions on interactive elements. state changes are instantaneous. printed matter doesn't animate.
7. uses emoji, decorative icons from icon libraries, or illustrative imagery. all graphics are geometric SVG line art with `stroke: var(--ink)`.
8. uses serif fonts. typography is strictly divided between a black-weight display sans and a monospace.
9. uses lowercase for any visible UI text. everything is uppercase, always.
10. uses light font weights. minimum weight is 400 (Space Mono regular). display text is always black weight. there are no thin, light, or extra-light treatments.
