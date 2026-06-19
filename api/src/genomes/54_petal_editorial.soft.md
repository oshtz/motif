---
id: "54"
name: petal_editorial.soft
keywords:
  - soft
  - petal
  - luxury
  - editorial
  - pastel
  - bloom
  - wellness
  - lifestyle
  - premium
  - gentle
  - serif
  - smart home
---

### genome 54: `petal_editorial.soft`

> identity: editorial luxury softened to a whisper. a premium lifestyle app where Playfair Display meets frosted glass, pastel gradient orbs drift behind translucent cards, and every surface feels like touching a rose petal. the visual language of a high-end wellness brand's control interface.

**surface**

colors:
```
--bg: #fcfcfc;                              /* near-white canvas */
--surface: #FFFFFF;                          /* card/panel white */
--ink: #1a1a1a;                             /* primary text — warm near-black */
--ink-mid: rgba(26, 26, 26, 0.6);          /* secondary text */
--ink-light: rgba(26, 26, 26, 0.4);        /* tertiary text, timestamps */
--ink-ghost: rgba(26, 26, 26, 0.08);       /* dividers, faint lines */
--rose: #f8bbd0;                            /* primary petal — soft pink */
--rose-deep: #f48fb1;                       /* active pink, notification dots */
--blush-wash: #fce4ec;                      /* pink wash backgrounds */
--blush-gradient-from: #fef4f7;             /* gradient start — barely pink */
--blush-gradient-to: #fae6ee;              /* gradient end — soft rose */
--sage: #a5d6a7;                            /* green accent — botanical */
--sage-wash: #e8f5ed;                       /* green wash backgrounds */
--sky: #90caf9;                             /* blue accent — calm */
--sky-wash: #e3f2fd;                        /* blue wash backgrounds */
--mist: #f3f1f5;                            /* neutral muted — segmented controls, inactive surfaces */
--border: #f0f0f0;                          /* structural border — barely visible */
```

typography:
- display/headings: `'Playfair Display', 'Georgia', serif` — weight 400–600. display numerals at 4rem–6.5rem, headings at 1rem–1.25rem. `letter-spacing: 0` to `-0.02em`. `line-height: 1` on display, `1.2` on headings
- body/UI: `'DM Sans', -apple-system, sans-serif` — weight 400–700, 0.7rem to 0.95rem. `line-height: 1.4`
- labels/meta: sans-serif, `text-transform: uppercase`, `letter-spacing: 0.1em` to `0.2em`, 0.6rem to 0.7rem, `font-weight: 500–600`
- serif is used for all display content: temperatures, prices, names, section headings. sans-serif is used for metadata, labels, badges, and button text. the two never swap roles
- italic serif for selected states and active options in segmented controls

borders:
- cards/panels: `border-radius: 28px` to `32px`. `border: 1px solid var(--border)` or `border: 1px solid white` on tinted cards
- buttons (pill): `border-radius: 9999px`. round icon buttons: `border-radius: 50%`
- segmented controls: outer `border-radius: 24px`, inner segments `border-radius: 18px`
- small elements (badges, status pills): `border-radius: 9999px`
- minimum border-radius on any element: `12px`. nothing has sharp corners

spacing:
- page padding: `20px` horizontal
- card padding: `20px` to `32px`
- section gap: `24px` to `32px`
- element gap within cards: `12px` to `16px`
- generous whitespace — content never feels compressed

**color distribution**

- 60% near-white canvas (`--bg`, `--surface`) — pristine, airy, dominant
- 15% mist and borders (`--mist`, `--border`, `--ink-ghost`) — structural elements, segmented controls, inactive states
- 10% ink hierarchy (`--ink`, `--ink-mid`, `--ink-light`) — text at various weights
- 10% rose/blush family (`--rose`, `--blush-wash`, gradients) — primary accent, hero cards, active states
- 5% sage and sky accents (`--sage`, `--sky`, their wash variants) — secondary information, status indicators, supporting tints

**component patterns**

buttons:
- primary round: `width: 56px; height: 56px; border-radius: 50%; background: rgba(255,255,255,0.8); backdrop-filter: blur(12px); border: 1px solid white; color: var(--ink); box-shadow: 0 4px 12px rgba(0,0,0,0.06)`. icon centered inside
- secondary round: same dimensions, `background: var(--surface); border: 1px solid var(--border)`
- pill badge button: `background: rgba(255,255,255,0.5); backdrop-filter: blur(8px); border: 1px solid white; border-radius: 9999px; padding: 6px 14px; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; font-family: var(--font-sans); box-shadow: 0 2px 6px rgba(0,0,0,0.03)`
- card-style button: `background: gradient or wash color; border-radius: 28px; border: 1px solid white; padding: 20px; text-align: left; box-shadow: 0 4px 12px rgba(0,0,0,0.04)`. contains icon circle + serif title + sans-serif detail

inputs:
- `background: var(--surface); border: 1px solid var(--border); border-radius: 9999px; padding: 12px 20px; font-size: 15px; font-family: var(--font-sans); color: var(--ink)`
- focus: `border-color: var(--rose); box-shadow: 0 0 0 3px rgba(248, 187, 208, 0.3)`
- placeholder: `color: var(--ink-light); font-family: var(--font-sans)`

cards/panels:
- standard: `background: var(--surface); border-radius: 28px; padding: 20px; border: 1px solid var(--border); box-shadow: 0 4px 20px -10px rgba(0,0,0,0.05)`
- hero card: `background: linear-gradient(to bottom right, var(--blush-gradient-from), var(--blush-gradient-to)); border-radius: 32px; padding: 32px; border: 1px solid white; box-shadow: 0 8px 30px -12px rgba(0,0,0,0.08); position: relative; overflow: hidden` — with gradient orbs positioned absolutely inside
- stat card: `background: var(--bg) or gradient wash; border-radius: 28px; padding: 20px; border: 1px solid var(--border) or white; position: relative; overflow: hidden` — blurred gradient orb behind content

navigation:
- top bar: `position: sticky; top: 0; background: rgba(252,252,252,0.8); backdrop-filter: blur(20px); padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; z-index: 50`
- nav title: `font-family: var(--font-serif); font-size: 1.25rem; font-weight: 500`
- nav icons: round icon buttons (`border-radius: 50%; padding: 8px`)

headers:
- sticky frosted glass bar with serif title centered, icon buttons on each side
- section headers: `font-family: var(--font-serif); font-size: 0.875rem; font-weight: 500; letter-spacing: 0.05em; padding-left: 4px; margin-bottom: 12px`

footers:
- minimal or absent. bottom content fades with `padding-bottom: 40px`. no visible footer chrome

lists:
- settings-style: `background: var(--surface); border-radius: 28px; border: 1px solid var(--border); padding: 8px`
- list items: `padding: 14px; display: flex; align-items: center; justify-content: space-between; gap: 16px`
- item icons: `width: 44px; height: 44px; border-radius: 50%; background: #f8f8f8; display: flex; align-items: center; justify-content: center; color: var(--ink-mid)`
- item labels: `font-family: var(--font-serif); font-size: 15px; font-weight: 400`
- separators: `height: 1px; background: #f5f5f5; margin: 2px 20px`

tables:
- avoid traditional tables. present data as stat cards or list items
- if required: no outer border. header row `font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink-light); border-bottom: 1px solid var(--border)`. body rows `border-bottom: 1px solid var(--ink-ghost); padding: 12px 0`

dividers:
- structural: `1px solid #f5f5f5` inset from card edges by `20px`
- between sections: whitespace only (no visible divider)

modals/overlays:
- `background: var(--surface); border-radius: 32px; padding: 32px; box-shadow: 0 20px 60px rgba(0,0,0,0.12); border: 1px solid var(--border)`
- backdrop: `rgba(26, 26, 26, 0.1); backdrop-filter: blur(8px)` — very light, preserving the airy feel
- header: serif title + sans-serif subtitle beneath

badges/tags:
- status pill: `background: rgba(255,255,255,0.5); backdrop-filter: blur(8px); border: 1px solid white; border-radius: 9999px; padding: 6px 14px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 500; box-shadow: 0 2px 6px rgba(0,0,0,0.03)`
- colored dot: `width: 6px; height: 6px; border-radius: 50%` in sage, rose, or sky — paired with label text
- notification dot: `width: 12px; height: 12px; border-radius: 50%; background: var(--rose-deep); border: 2px solid white`

segmented controls:
- outer: `background: var(--mist); border-radius: 24px; padding: 6px; border: 1px solid rgba(255,255,255,0.5); box-shadow: inset 0 2px 4px rgba(0,0,0,0.04)`
- segment inactive: `padding: 12px; border-radius: 18px; font-family: var(--font-sans); font-size: 14px; font-weight: 500; color: var(--ink-mid)`
- segment active: `background: var(--surface); border-radius: 18px; border: 1px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.04); font-family: var(--font-serif); font-weight: 500; color: var(--ink)`

toggle switches:
- off: `width: 50px; height: 30px; background: #e5e5e5; border-radius: 9999px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05)`. thumb: `width: 24px; height: 24px; background: white; border-radius: 50%; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transform: translateX(0)`
- on: `background: var(--sky-wash); border: 1px solid white`. thumb: `transform: translateX(20px)`
- transition: `0.3s ease`

mode cards (grid):
- `border-radius: 24px; padding: 20px; display: flex; flex-direction: column; align-items: center; gap: 8px`
- inactive: `background: var(--surface); border: 1px solid var(--border); color: var(--ink-mid); box-shadow: 0 2px 8px rgba(0,0,0,0.02)`
- active: `background: linear-gradient(to bottom right, var(--blush-gradient-from), var(--blush-wash)); border: 1px solid white; color: var(--ink); box-shadow: 0 4px 12px rgba(0,0,0,0.05)` — with small gradient orb inside

**interaction language**

- hover: buttons — `box-shadow` deepens slightly, `background` brightens. cards — `box-shadow: 0 8px 24px rgba(0,0,0,0.08)`. list items — icon background shifts to `#f0f0f0`. all `transition: all 0.25s ease`
- active/pressed: `transform: scale(0.95)` on buttons and cards. round buttons: `transform: scale(0.90)`. no color flash. `transition: transform 0.1s ease`
- focus: `outline: none; box-shadow: 0 0 0 3px rgba(248, 187, 208, 0.4)` — soft pink focus ring
- selected: active segmented control gets serif font + white background + shadow. active mode card gets gradient background + gradient orb. selected list item: icon background becomes accent wash
- disabled: `opacity: 0.35; pointer-events: none`. no other visual change
- drag: `cursor: grab` → `cursor: grabbing`. element gets `box-shadow: 0 12px 32px rgba(0,0,0,0.1); transform: scale(1.02)`

**motion & feedback**

transitions:
- default: `0.25s ease` for color, background, box-shadow, border-color
- transform: `0.15s ease` for scale (active press), `0.3s ease` for translate (toggle thumb)
- page transitions: `0.3s cubic-bezier(0.4, 0, 0.2, 1)` — smooth but not languorous
- nothing is instant, but nothing lingers. motion is crisp and polite

loading:
- pulsing gradient orb: opacity oscillates `0.3 → 0.6 → 0.3` on `2s ease-in-out infinite`. text beneath in sans-serif: `Updating...` in `var(--ink-light)`

success:
- brief green wash: element background fades to `var(--sage-wash)` for 1.2s, then returns. check icon fades in with serif label

error:
- `border-left: 3px solid #e57373` (muted coral). text in `#c62828` at reduced weight. no shaking, no flashing — errors are understated

**atmosphere**

- background: flat `var(--bg)` (#fcfcfc) — pristine near-white canvas
- gradient orbs: large `div` elements with `position: absolute; border-radius: 50%; filter: blur(40px); mix-blend-mode: multiply; opacity: 0.2–0.6; pointer-events: none`. placed inside `overflow: hidden` cards. colors drawn from rose, sage, sky families. sizes 160px–288px. positioned at card edges (top-right, bottom-left) to create ambient color zones
- noise texture: `body::after` with SVG fractalNoise (`baseFrequency: 0.8, numOctaves: 3`), `opacity: 0.06`, `mix-blend-mode: color-burn`, `pointer-events: none`, fixed position covering viewport. adds grain without weight
- frosted glass elements: `backdrop-filter: blur(12px–20px)` on sticky headers and pill badges that sit over gradient backgrounds. `background: rgba(252,252,252,0.8)` with the blur creates translucent depth
- selection highlight: `::selection { background: var(--blush-wash); color: var(--ink); }` — pink selection
- no hard atmospheric edges anywhere — everything diffuses through blur and opacity

**editorial voice**

button labels: "Set Temperature", "View Schedule", "Save Settings", "Turn Off", "Apply", "See Details", "Start Routine", "Clear". sentence case, sans-serif, concise. no exclamation marks

headings: serif, sentence case or title case. short descriptive nouns: "Living Room AC", "Fan Speed", "Mode", "Airflow & Features", "Smart Routines", "Energy Usage". 1–3 words preferred. no punctuation

metadata: sans-serif, `text-transform: uppercase`, small. status labels: "COOLING", "ACTIVE", "GOOD". time: "11:30 PM". distance: "1km away". measurements: "40°C", "42 AQI"

placeholders: sans-serif, sentence case. "Search devices...", "Enter temperature", "Add a note..."

empty states: gentle and reassuring. "No routines set up yet." / "Your schedule is clear." / "No data available for this period."

error messages: calm, understated. "Couldn't connect to device." / "Temperature out of range." / "Something went wrong — try again."

success messages: brief confirmation. "Settings saved." / "Routine activated." / "Temperature updated." sans-serif, sentence case, period

**cursor & selection**

- default: `cursor: default` on body
- interactive elements: `cursor: pointer` on buttons, cards, toggles, links
- text inputs: `cursor: text`
- drag operations: `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--blush-wash); color: var(--ink); }` — soft pink highlight matching the rose accent family

**when to reach for this genome**

Use `petal_editorial.soft` when the prompt asks for premium lifestyle controls, soft luxury wellness, beauty-tech dashboards, smart-home climate/air routines, boutique self-care products, gentle health-adjacent tracking, high-end household devices, or an editorial app surface that should feel rose-petal soft, airy, rounded, and quietly expensive.

Reach for it when the concrete cues are near-white canvas, rose/blush/sage/sky washes, Playfair Display headings, DM Sans labels, 28px-32px rounded cards, pastel gradient orbs inside panels, frosted sticky headers, circular icon buttons, pill badges, large serif numerals, uppercase micro-labels, and calm lifestyle copy such as `Set Temperature`, `Start Routine`, `Living Room AC`, `Settings saved.`, or `No routines set up yet.`

Do not use it for material-realistic OS glass, system fonts, dark sky gradients, utility panels, and physical glass light simulation; use `vitreous_panel.frost`. Do not use it for warm voice-first wellness blobs, meditation check-ins, lowercase companion copy, and organic cream-canvas drift; use `ambient_drift.aura`. Do not use it for ring-bound agendas, ruled note fields, planner tabs, wedding schedules, or premium stationery dashboards; use `bespoke_planner.folio`. Do not use it for hotel key cards, alpine concierge flows, receipts, stamps, or layered travel ephemera; use `alpine_concierge.post`. Do not use it for tea ceremony, washi paper, matcha, sumi-e brushwork, seal stamps, and ritual negative space; use `tea_ceremony.matcha`. Do not use it for black velvet jewelry vitrines, gold prongs, carat metadata, and private atelier object pages; use `gem_jeweler.facet`. Do not use it for chocolate boxes, patisserie packaging, ribbon trays, praline compartments, or confectionery gifting; use `confectionery_box.sweet`.

It is strongest when the interface is a soft premium lifestyle control surface: tune, schedule, save, start a routine, view gentle status, and let pastel editorial material do the emotional work. If the prompt centers on actual glass material, voice-first calm, stationery, hospitality ephemera, ritual Japanese restraint, jewelry vitrines, or packaging luxury, choose the closer genome.

**anti-patterns — this genome NEVER:**

1. uses monospace, pixel, or bitmap fonts — all typography is serif display (Playfair Display) + geometric sans-serif (DM Sans)
2. uses dark backgrounds or dark mode — the world is near-white (#fcfcfc) and white, with color provided only by translucent gradient orbs
3. uses border-radius below 12px on any element — corners are always generously rounded, with panels at 28–32px, buttons at 50% or 9999px
4. uses hard-edged shadows or solid drop shadows — all shadows are diffused (`-10px` to `-12px` spread) and barely visible, suggesting air rather than elevation
5. uses flat solid accent backgrounds — accent color always appears as gradients, washes, or translucent fills. active states use `linear-gradient`, never `background: #hex`
6. uses aggressive interaction feedback (color inversion, shaking, flashing, bounce) — interactions are gentle scale transforms (0.95) and shadow shifts
7. uses dense information grids, compact tables, or tightly packed layouts — spacing is always generous, sections breathe, cards float in whitespace
8. uses visible structural borders heavier than 1px — separation comes from whitespace, background tints, and barely-there 1px lines in #f0f0f0 or #f5f5f5
9. uses cold, clinical, or technical language — editorial voice is warm, concise, and lifestyle-oriented. never says "error code", "invalid input", or "operation failed"
10. uses traditional navigation chrome (hamburger menus, bottom tab bars, breadcrumbs) — navigation is through sticky frosted headers with icon buttons and contextual back arrows
