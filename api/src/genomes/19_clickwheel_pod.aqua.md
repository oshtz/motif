---
id: "19"
name: clickwheel_pod.aqua
keywords:
  - ipod
  - apple
  - click wheel
  - brushed metal
  - aqua
  - media player
  - aluminum
  - 2000s
  - podcast
  - music player
  - jukebox
  - scroll wheel
  - itunes
  - cover flow
  - podcast player
---

### genome 19: `clickwheel_pod.aqua`

> identity: mid-2000s Apple iPod Classic interface. brushed aluminum hardware, Aqua-era blue gradients, click wheel tactility, and the focused single-task elegance of a pocket jukebox.

**surface**

colors:
```
--metal-light: #fdfdfd; --metal-mid: #e4e5e7; --metal-dark: #c0c2c6; --metal-edge: #9ca0a6;
--screen-bg: #ffffff; --bezel: #030303; --bezel-border: #222222;
--header-blue-top: #79a1f2; --header-blue-bot: #4371d3; --header-rule: #224388;
--accent-fill-top: #8bb0f9; --accent-fill-bot: #5480e8; --accent-border: #3362c4;
--bar-bg-top: #cfd0d2; --bar-bg-bot: #e9eaec; --bar-border: #999999;
--text-dark: #000000; --text-grey: #666666; --text-muted: #88898b;
--wheel-base: #f4f5f6; --wheel-shadow: rgba(0,0,0,0.15);
--success-green: #5fdb5f; --overlay-bg: rgba(255,255,255,0.9);
```

typography:
- primary family: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif`
- display/headings: `font-weight: 600; font-size: 14-16px; color: var(--text-dark)`
- body/labels: `font-weight: 400; font-size: 12px; color: var(--text-grey)`
- micro/metadata: `font-weight: 700; font-size: 10px; color: var(--text-dark)`
- nav/wheel labels: `font-weight: 700; font-size: 12-14px; letter-spacing: 1-2px; text-transform: uppercase; color: var(--text-muted); text-shadow: 0 1px 0 rgba(255,255,255,0.8)`
- hierarchy through weight and color, not dramatic size variation. maximum heading size 18px. no text larger than 18px.
- `line-height: 1.3` body, `line-height: 1.1` headings
- `white-space: nowrap; overflow: hidden; text-overflow: ellipsis` on all single-line content — the screen is small, text truncates

borders:
- device/outer panels: `border-radius: 36px; border: 1px solid var(--metal-edge)`
- screen bezel: `border-radius: 12px; border: 2px solid var(--bezel-border)`
- inner display: `border-radius: 0px` (sharp LCD edge)
- progress bars: `border-radius: 6px; border: 1px solid var(--bar-border)`
- buttons/controls: `border-radius: 50%` (circular) or `border-radius: 6px` (pill-ish)
- no sharp 0px corners on interactive elements — everything has gentle rounding

spacing:
- `padding: 10-12px` inside panels. `gap: 2-4px` between text lines. `margin-bottom: 40px` between major sections.
- compact, efficient use of space — every pixel matters on a small screen

**color distribution**

- 45% aluminum metallic grays (`--metal-light` through `--metal-edge`) — the hardware surround
- 25% white screen (`--screen-bg`) — the display area
- 15% Aqua blue gradient (`--header-blue-top` through `--accent-fill-bot`) — active elements, headers, progress fills
- 10% dark text and bezel (`--text-dark`, `--bezel`) — content and framing
- 5% muted grays (`--text-grey`, `--text-muted`) — secondary labels, wheel text

**component patterns**

buttons: circular or pill-shaped. primary: `background: linear-gradient(135deg, #f8f8f8, #e0e0e0); border-radius: 50%; box-shadow: inset 0 3px 6px rgba(0,0,0,0.15), inset 0 -2px 4px rgba(255,255,255,0.8), 0 1px 3px rgba(0,0,0,0.2)`. secondary: no background, uppercase label only in `var(--text-muted)` with `letter-spacing: 1px`. icon buttons use clip-path shapes (play triangles, forward/back arrows). no text buttons with colored backgrounds — buttons are physical, tactile, gray.

inputs: `background: var(--screen-bg); border: 1px solid var(--bar-border); border-radius: 6px; padding: 6px 8px; font-size: 12px`. focus: `border-color: var(--accent-fill-bot); box-shadow: 0 0 0 2px rgba(67,113,211,0.3)`. placeholder: `color: var(--text-muted); font-style: italic`.

cards/panels: two-layer system. outer shell: `background: linear-gradient(135deg, var(--metal-light) 0%, var(--metal-mid) 40%, var(--metal-dark) 100%); border-radius: 36px; border: 1px solid var(--metal-edge); box-shadow: inset 0 0 0 2px rgba(255,255,255,0.8), inset 0 0 10px rgba(0,0,0,0.1), 0 20px 50px rgba(0,0,0,0.8)`. inner display: `background: var(--screen-bg); border-radius: 0` nested inside a dark bezel `background: var(--bezel); border-radius: 12px; border: 2px solid var(--bezel-border); padding: 12px; box-shadow: inset 0 4px 8px rgba(0,0,0,0.9)`.

navigation: horizontal header bar with `background: linear-gradient(to bottom, var(--header-blue-top), var(--header-blue-bot)); height: 24px; padding: 0 6px; color: white; font-size: 12px; font-weight: 600; border-bottom: 1px solid var(--header-rule); box-shadow: inset 0 1px 0 rgba(255,255,255,0.3)`. center-aligned title text. left icon, right status indicator (battery).

headers: compact, single-line. `font-size: 12px; font-weight: 600; color: white` on blue gradient bar. page-level titles sit inside the Aqua gradient header. no large hero headers.

footers: none. the device has no footer — the click wheel IS the bottom interaction zone.

lists: vertical stack. each row: `padding: 8px 10px; border-bottom: 1px solid #e0e0e0`. active row: `background: linear-gradient(to bottom, var(--header-blue-top), var(--header-blue-bot)); color: white`. chevron `>` on right side of navigable rows. text truncates with ellipsis.

tables: list-style layout (no traditional grid tables). alternating background: `#ffffff` / `#f4f5f6`. column headers: `font-size: 10px; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 1px`.

dividers: `border-bottom: 1px solid #e0e0e0`. no heavy rules. clean, minimal separation.

modals/overlays: slide-up panels. `background: var(--overlay-bg); border-top: 1px solid #ccc; backdrop-filter: none`. slide in from bottom with `transform: translateY(100%)` to `translateY(0)`. compact height (40-60px), single-purpose (volume bar, confirmation).

badges/tags: small rounded pills. `border-radius: 6px; padding: 2px 6px; font-size: 10px; font-weight: 600`. status colors: `background: var(--success-green); color: white` for active, `background: var(--bar-bg-top); color: var(--text-grey)` for neutral.

progress bars: `height: 12px; background: linear-gradient(to bottom, var(--bar-bg-top), var(--bar-bg-bot)); border: 1px solid var(--bar-border); border-radius: 6px; overflow: hidden`. fill: `background: linear-gradient(to bottom, var(--accent-fill-top), var(--accent-fill-bot)); border-right: 1px solid var(--accent-border)`. these are a signature element — Aqua-era glossy gradients.

**interaction language**

- hover: `background: rgba(67,113,211,0.08)` on list items. wheel labels: no hover change. buttons: inner shadow deepens slightly `box-shadow: inset 0 4px 8px rgba(0,0,0,0.18)`. no scale, no lift, no color change on hover — this is hardware, not a website.
- active/pressed: buttons depress physically: `box-shadow: inset 0 5px 10px rgba(0,0,0,0.2), inset 0 -1px 2px rgba(255,255,255,0.5); background: linear-gradient(135deg, #e8e8e8, #d0d0d0)`. wheel zones tilt: `transform: rotateX(2deg)` or `rotateY(2deg)` depending on direction. immediate snap, no easing on press.
- focus: `outline: 2px solid var(--accent-fill-bot); outline-offset: 2px; border-radius: 6px`. subtle, clean.
- selected: list items get full blue gradient background with white text, matching the Aqua header bar style.
- disabled: `opacity: 0.35; pointer-events: none`. no grayscale filter, no strikethrough — just faded out.
- drag: circular wheel rotation model. `cursor: grabbing`. no drag handles. rotational input mapped to linear output (volume, scroll position). deceleration: `velocity *= 0.92` per frame, minimum threshold `0.5` before stop.

**motion & feedback**

- transitions: minimal and mechanical. `transition: all 0.1s ease` on button press/release. `transition: transform 0.2s cubic-bezier(0.2, 0, 0, 1)` on overlay slide-in. no decorative animations. motion serves tactile feedback only.
- loading: progress bar fills smoothly. thin blue Aqua gradient bar advancing left-to-right. no spinners, no skeleton screens.
- success: green battery-fill-style confirmation. brief green highlight `background: var(--success-green)` for 400ms, then fade.
- error: red tint flash. `background: rgba(255,0,0,0.1)` on the display area for 200ms. no shake, no bounce — hardware doesn't shake.

audio feedback (for interactive implementations): click wheel tick sound — triangle wave oscillator, 600Hz→100Hz in 20ms, gain 0→0.2→0.001. center button click — square wave, 300Hz→50Hz in 30ms, gain 0.3→0.01. these are mechanical sounds, not UI chimes.

**atmosphere**

- outer body: brushed aluminum gradient. `background: linear-gradient(135deg, var(--metal-light) 0%, var(--metal-mid) 40%, var(--metal-dark) 100%)`. inner light reflection: `inset 10px 0 20px rgba(255,255,255,0.5)`. shadow side: `inset -10px 0 20px rgba(0,0,0,0.2)`. polished but not mirror — satin aluminum.
- screen bezel: deep black recess. `background: var(--bezel)`. heavy inset shadow simulates depth: `box-shadow: inset 0 4px 8px rgba(0,0,0,0.9), inset 0 -1px 2px rgba(255,255,255,0.2)`. glass reflection overlay via `::after`: `background: linear-gradient(150deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 30%, transparent 31%)`.
- screen glow: `box-shadow: 0 0 15px rgba(255,255,255,0.1)` on the display — backlit LCD warmth.
- dark environment surround: `background-color: #0a0a0c` — the device floats in darkness, dramatic product-shot framing.
- drop shadow: `0 20px 50px rgba(0,0,0,0.8)` — heavy, grounding the device in space.
- reflections: album art reflection below image using `transform: scaleY(-1); opacity: 0.3` with gradient mask: `mask-image: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 60%)`. this is the signature iPod Cover Flow reflection aesthetic.

**editorial voice**

- button labels: `MENU`, `SELECT`, `PLAY`, `PAUSE`, `SHUFFLE`, `REPEAT`. uppercase, single-word, hardware-engraved feel. no verbs like "click" or "tap" — these are physical button labels.
- headings: title case, compact. "Now Playing", "Albums", "Artists", "Playlists", "Settings". no articles, no descriptions — just nouns.
- metadata: `2 of 22` for track position. `1:24` / `-2:39` for time elapsed/remaining (negative prefix for remaining). `80%` for battery. all numeric, terse, instrument-panel style.
- placeholders: `Search...` — single word, ellipsis. no conversational placeholder text.
- empty states: `No Music` or `No Playlists`. two words maximum. no illustrations, no suggestions, no onboarding — just the fact.
- error messages: `Cannot Play` or `No Connection`. terse, declarative, no exclamation marks. hardware error style — the device tells you what it can't do, not how to fix it.
- success messages: `Synced` or `Added`. single past-tense word. confirmation is instant and minimal.

**cursor & selection**

- default cursor: `cursor: default` on body and all non-interactive areas
- interactive elements: `cursor: pointer` on list items, buttons, wheel surface
- wheel interaction: `cursor: grab` on wheel idle, `cursor: grabbing` during rotation drag
- `::selection` — `background: var(--accent-fill-bot); color: white` — Aqua blue selection, matching the header gradient

**when to reach for this genome**

Use `clickwheel_pod.aqua` when the prompt asks for a mid-2000s iPod-style media player, click-wheel music app, compact podcast player, pocket jukebox, album browser, playlist navigator, Aqua-era playback screen, Cover Flow-inspired music library, brushed-aluminum device frame, or scroll-and-select interface where the product should feel like focused portable hardware rather than a full desktop app.

Reach for it when the user wants the interface to behave like a small dedicated playback device: brushed metal shell, black recessed bezel, white LCD screen, Aqua blue selected rows, glossy progress bars, tiny Helvetica UI, click-wheel labels, battery/time metadata, album-art reflection, and terse hardware copy like `Now Playing`, `Albums`, `Shuffle`, `No Music`, or `Synced`.

Do not use it for general premium Apple-like SaaS, modern creative suites, or spacious professional app surfaces; use `modern_studio.pro`. Do not use it for 1989 green LCD portable games, dithered pixel graphics, cartridges, or Game Boy constraints; use `handheld_gb.dmg`. Do not use it for original Macintosh desktop metaphors, beige CRT GUIs, floppy disks, or 1984 personal-computer optimism; use `figmint_desktop.84`. Do not use it for cassette J-cards, mixtape labels, magnetic tape packaging, or hand-lettered tracklists; use `cassette_inlay.tape`. Do not use it for vinyl LP jackets, gatefold sleeves, liner notes, record labels, or 33 rpm album-object design; use `vinyl_jacket.lp`. Do not use it for VHS rental stores, clamshell video catalogs, membership cards, late-fee flows, or VCR tracking; use `videostore_rental.vhs`.

It is strongest when the product is a small single-purpose music/podcast playback appliance: browse, scroll, select, play, pause, sync, shuffle, and show progress. If the prompt centers on desktop productivity, retro gaming hardware, physical music packaging, video rental retail, or modern SaaS polish, choose another genome.

**anti-patterns — this genome NEVER:**

1. uses text larger than 18px — the screen is physically small, hierarchy comes from weight and color, not scale
2. uses decorative illustrations, icons, or emoji — this is a hardware display with text and album art only
3. uses rounded corners larger than 6px on screen elements — only the outer hardware shell and bezel are rounded; the display content is compact and rectilinear
4. uses skeleton loading screens or shimmer effects — hardware shows a progress bar or nothing
5. uses conversational UI copy like "Looks like you haven't added anything yet!" — hardware speaks in terse noun phrases
6. uses drop shadows on content inside the display — shadows exist only on the physical hardware layers (bezel, wheel, body), never on list items or text
7. uses more than one accent color family — everything active/selected is Aqua blue gradient, no secondary accent colors
8. uses serif or decorative typefaces — Helvetica Neue / system sans-serif only, as Apple intended
9. uses full-width layouts — all content is contained within a device-width frame (max 400px), centered in a dark void
10. uses hover tooltips, popovers, or dropdown menus — this is a scroll-and-select interface with no hover culture; navigation is linear and hierarchical
