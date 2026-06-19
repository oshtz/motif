---
id: "33"
name: kampung_guideline.warmth
keywords:
  - cooperative
  - community
  - guideline
  - kampung
  - warm
  - earthy
  - monospace
  - torn
  - fortnightly
  - handbook
  - participation
  - craft
  - mutual aid
  - neighborhood
  - social
  - southeast asia
---

### genome 33: `kampung_guideline.warmth`

> identity: warm cooperative community guideline app. southeast asian kampung spirit meets monospace utility — fortnightly directives on cream stock with burnt-orange hero cards, torn-paper jagged edges, earth-toned tier cards, vertical rotated annotations, and pill-shaped call-to-action buttons. everything in one monospace typeface, all uppercase, all warm.

**surface**

colors:
```
--cream: #E3DACD;            /* warm parchment — the ground of everything */
--burnt-orange: #BD4E1D;     /* hero accent — primary action, warmth, urgency */
--tan: #BBA992;              /* muted earth — secondary card fill, borders */
--sage: #6B7253;             /* moss green — tertiary card fill, nature/growth */
--greige: #9A9C91;           /* neutral grey-beige — supporting card fill */
--ink: #2C2B29;              /* near-black — primary text, buttons, structure */
--parchment: #F2ECE4;        /* off-white — text on dark fills, light accent */
--ink-muted: rgba(44, 43, 41, 0.6);  /* faded ink — metadata, secondary labels */
--ink-faint: rgba(44, 43, 41, 0.2);  /* ghost ink — dashed rules, subtle borders */
```

typography:
- single typeface: `"Space Mono", monospace` — used for EVERYTHING. no exceptions.
- hero instruction: `font-size: 36px; line-height: 1.1; text-transform: uppercase; font-weight: 700`.
- section titles: `font-size: 20px; line-height: 1.2; text-transform: uppercase; font-weight: 400; letter-spacing: 0.05em`.
- body text: `font-size: 14px; line-height: 1.6; font-weight: 400`.
- labels/headers: `font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700`.
- sub-labels: `font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em`.
- meta/footnote: `font-size: 11px; font-style: italic; letter-spacing: 0.02em`.
- vertical annotations: `font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; writing-mode: vertical-rl; transform: rotate(180deg)`.
- the monospace-only constraint is the defining rule — hierarchy comes from size, weight, opacity, and color, never from font family.

borders:
- card panels: `border-radius: 24px` — generous, warm, inviting. the signature shape.
- hero cards: `border-radius: 24px 24px 0 0` — rounded top, torn bottom.
- pill buttons: `border-radius: 100px` — fully rounded capsules.
- no visible border strokes on cards — cards are distinguished by background fill color alone.
- dashed rules: `border-top: 1px dashed var(--ink-faint)` for informational separators.
- bottom nav: `border-top: 1px solid rgba(44, 43, 41, 0.05)` — barely visible.

spacing:
- page horizontal padding: `20px`.
- card internal padding: `24px`.
- hero padding: `32px 24px 80px` — generous bottom for torn-edge overlap.
- section gap: `32px` top, `16px` bottom for headers.
- scroll card width: `260px` fixed, `12px` gap between cards.
- action area margin-bottom: `60px` to clear fixed bottom nav.

**color distribution**

- 45% cream (`--cream`) — the warm stock ground, page background, nav background
- 20% burnt-orange (`--burnt-orange`) — hero cards, primary accent, warmth
- 12% ink (`--ink`) — text, primary buttons, structure
- 8% tan (`--tan`) — tier-1 cards, warm secondary fill
- 8% sage (`--sage`) — tier-2 cards, natural/growth association
- 5% greige (`--greige`) — tier-3 cards, neutral supporting fill
- 2% parchment (`--parchment`) — text-on-dark, light accents

**component patterns**

buttons:
- primary: `background: var(--ink); color: var(--parchment); border: none; border-radius: 100px; padding: 18px 24px; font-family: "Space Mono", monospace; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; width: 100%`.
- secondary link: `text-align: center; font-size: 12px; color: var(--ink); text-decoration: none; opacity: 0.7; text-transform: uppercase; letter-spacing: 0.05em`.
- no box-shadow on buttons. no border on primary. shape and fill do the work.

inputs:
- `background: transparent; border: 1px solid var(--ink-faint); border-radius: 100px; padding: 14px 20px; font-family: "Space Mono", monospace; font-size: 13px; color: var(--ink); text-transform: uppercase; letter-spacing: 0.02em`.
- focus: `border-color: var(--burnt-orange); outline: none`.
- label above: `font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink-muted); font-weight: 700; margin-bottom: 8px`.
- placeholder: `color: var(--ink-muted); text-transform: uppercase`.

cards/panels:
- tier cards: `border-radius: 24px; padding: 24px; min-height: 220px; display: flex; flex-direction: column`. no border stroke — differentiated purely by background fill color.
- hero card: `background: var(--burnt-orange); color: var(--parchment); border-radius: 24px 24px 0 0; padding: 32px 24px 80px; margin: 0 12px`. extra bottom padding for torn-edge SVG overlap.
- colored fills: tier-1 `var(--tan)` with dark text, tier-2 `var(--sage)` with light text, tier-3 `var(--greige)` with dark text.
- vertical annotation text positioned absolutely: `position: absolute; right: 16px; top: 50%; transform: translateY(-50%) rotate(180deg); writing-mode: vertical-rl; font-size: 10px; opacity: 0.5`.

navigation:
- fixed bottom tab bar: `position: fixed; bottom: 0; background: var(--cream); display: flex; justify-content: space-around; padding: 12px 20px`.
- nav items: `flex-direction: column; align-items: center; gap: 6px; font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em`.
- icons: 24px SVG, `stroke: currentColor; stroke-width: 1.5; fill: none`.
- active state: `color: var(--ink)`. inactive: `color: var(--ink-muted)`.
- active indicator: `3px` dot below icon via `::after` pseudo-element.

headers:
- page header: `padding: 16px 20px 8px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink-muted); font-weight: 700`.
- section header: same typography, with `padding: 32px 20px 16px` for vertical rhythm.
- no horizontal rules — headers float as standalone uppercase labels.

footers:
- not a traditional footer — the bottom nav serves as the footer.
- info rows: `padding: 20px 0; border-top: 1px dashed var(--ink-faint); font-size: 11px; color: var(--ink-muted); text-align: center; letter-spacing: 0.02em`.

lists:
- horizontal scroll: `display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 12px; scrollbar-width: none`.
- items snap: `scroll-snap-align: start; flex: 0 0 260px`.
- no bullet points, no numbered prefixes — items are self-contained cards.

tables:
- `border-collapse: separate; border-spacing: 0; border-radius: 24px; overflow: hidden`.
- header: `background: var(--ink); color: var(--parchment); font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; padding: 12px 16px`.
- cells: `padding: 12px 16px; border-bottom: 1px dashed var(--ink-faint); font-size: 13px`.

dividers:
- primary: `border-top: 1px dashed var(--ink-faint)` — always dashed, never solid.
- section break: generous `32px` vertical padding serves as the visual separator, not lines.
- decorative: `·` middle dots between inline metadata items.

modals/overlays:
- `background: var(--cream); border-radius: 24px; padding: 32px 24px`. no border stroke.
- backdrop: `background: rgba(44, 43, 41, 0.5)`.
- modal title: `font-size: 20px; text-transform: uppercase; font-weight: 700; margin-bottom: 16px`.

badges/tags:
- pill: `border-radius: 100px; padding: 6px 14px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700`.
- tier badges: colored fill matching their tier card (`--tan`, `--sage`, `--greige`).
- status: `background: var(--burnt-orange); color: var(--parchment)` for active.

torn-paper edge:
- SVG jagged edge element: `position: absolute; bottom: -1px; left: 12px; right: 12px; height: 60px; pointer-events: none`.
- SVG path: irregular zigzag polygon filled with `var(--cream)` to mask the bottom of hero cards. example path: `M0,0 L10,8 L20,2 L30,10 L40,4 L50,12 L60,3 L70,9 L80,1 L90,11 L100,5 L100,60 L0,60 Z` (scale to container width).
- the torn edge is a signature motif — it appears at the boundary between hero cards and the page background.

**interaction language**

hover:
- buttons: `opacity: 0.85`. no color change, no lift, no shadow.
- links: `opacity: 1` (from 0.7 default).
- cards: no change — static.

active/pressed:
- buttons: `transform: scale(0.98); transition: transform 0.1s ease` — a subtle inward press.
- cards: no change.

focus:
- `outline: 2px solid var(--burnt-orange); outline-offset: 2px; border-radius: 24px`.

selected:
- checkmark SVG icon appears: `stroke: currentColor; stroke-width: 3`.
- card border or background shifts slightly: `opacity: 1` vs default `0.9`.

disabled:
- `opacity: 0.35; pointer-events: none`.

drag:
- `outline: 2px dashed var(--burnt-orange); cursor: grab`. while dragging: `cursor: grabbing; opacity: 0.7`.

**motion & feedback**

transitions:
- only `transform` transitions allowed: `transition: transform 0.1s ease` on interactive elements.
- no color transitions, no opacity animations — state changes in color are instantaneous.
- the genome is mostly static — it feels like printed community material, not a software interface.

loading:
- monospace text: `LOADING...` centered, `color: var(--ink-muted)`, with an ellipsis that cycles.
- alternatively: a thin `2px` progress bar in `var(--burnt-orange)` sliding left to right.

success:
- brief green tint: `background: var(--sage); color: var(--parchment)` on the element for 200ms, then return.
- text confirmation: `MARKED` or `RECORDED`.

error:
- `border-color: #B91C1C; color: #B91C1C`. error text: `NOT RECORDED — TRY AGAIN`. no brackets, no technical prefix — warm but clear.

**atmosphere**

background:
- body: `background-color: var(--cream)` — warm parchment stock. no texture overlay, no noise filter.
- the warmth comes from the color palette itself, not from applied filters.

ambient details:
- vertical rotated text annotations on cards: `writing-mode: vertical-rl; transform: rotate(180deg)`. reference codes like `#G-RUMAH-03`, tier labels like `LVL-1`.
- jagged torn-paper SVG edges at hero card bottoms — irregular, hand-torn feel.
- centered SVG line icons (48px, stroke only, `stroke-width: 1.5`) at the top of hero cards — representational but minimal.
- middle-dot separators `·` between inline metadata.
- generous whitespace between sections — the page breathes.

mobile-first:
- designed for portrait mobile viewport. `max-scale: 1.0, user-scalable: no`.
- fixed bottom nav with safe-area padding: `env(safe-area-inset-bottom)`.
- horizontal scroll with snap for card tiers.
- all touch targets minimum `44px` height.

**editorial voice**

button labels: `Mark My Participation`, `Join This Round`, `View Guidelines`, `Opt In`, `Share With Neighbours`, `See History`, `Submit`, `Close`
- warm imperative. inclusive ("my", "this", "with"). title case for multi-word, uppercase for single-word. never cold or technical.

headings: uppercase monospace. short phrases: `THIS FORTNIGHT'S GUIDELINE`, `PARTICIPATION LEVEL`, `WARM HOME`, `COMMUNITY ROUNDS`. bilingual sub-headings welcome: `Rumah Hangat`, `Gotong Royong`.

metadata format:
- rotation timers: `Rotates in 8 days`
- effort estimates: `~10 min effort`
- qualifiers: `Optional but celebrated`
- reference codes: `#G-RUMAH-03` — hashtag prefix, abbreviated category, zero-padded number
- tier levels: `LVL-1`, `LVL-2`, `LVL-3`
- framework references: `Doughnut Economics + Co-opetition + Ihsan` — named frameworks separated by `+`

placeholders: `Your Name`, `Search Guidelines...`, `Add a Note`, `Enter Your Response` — warm, capitalized, never shouting.

empty states: `No Guidelines This Round` / `Nothing Here Yet` / `Check Back Soon` — gentle, patient, no urgency. centered, `color: var(--ink-muted)`.

error messages: `Couldn't Save — Try Again` / `Something Went Wrong` / `Not Recorded` — plain, human, no codes or brackets. never blame the user.

success messages: `Participation Marked` / `Saved` / `Thank You` / `Recorded` — warm confirmation. title case. may include `Thank You`.

**cursor & selection**

- default: `cursor: default`
- interactive (buttons, links, nav): `cursor: pointer`
- text inputs: `cursor: text`
- drag: `cursor: grab` / `cursor: grabbing`
- disabled: `cursor: not-allowed`
- `::selection { background: var(--burnt-orange); color: var(--parchment); }` — warm orange highlight, like a marker on parchment

**when to reach for this genome**

Use `kampung_guideline.warmth` when the prompt asks for a neighborhood cooperative, mutual-aid program, participation challenge, community guideline app, rotating household practice, local stewardship board, resident pledge, social-impact handbook, or any mobile-first product that should feel like warm communal instruction printed on cream stock.

Reach for it when visual or product cues include Southeast Asian kampung or gotong royong language, burnt-orange hero cards, earth-tone participation tiers, torn-paper edges, vertical annotation labels, a single monospace family, horizontal card rounds, bottom-tab participation flows, inclusive prompts like "Join this round", and lightweight opt-in or mark-complete actions.

Do not use it for clean future-civic dashboards, energy or transit data, solar grid metrics, thick sunflower/teal borders, or rounded chart cards; use `solaris_cooperative.utx`. Do not use it for generic social feeds, posts, follows, replies, or infinite timelines; use `public_timeline.x`. Do not use it for field sketches, botanical observation, hand-drawn notebook layouts, or expedition records; use `field_journal.expedition`. Do not use it for handmade scrapbook collage, taped photos, stitches, and imperfect craft layers; use `nature_folio.craft`. Do not use it for garden catalogs, planting zones, seed packaging, or horticultural commerce; use `seed_packet.plot`.

It is strongest when participation is the product: neighborhood actions, shared rituals, opt-in rounds, civic care tasks, mutual aid, and warm local guidance. If the request is primarily operational infrastructure, social media, naturalist documentation, or decorative paper craft, choose the more exact genome.

**anti-patterns — this genome NEVER:**

1. uses more than one typeface — `Space Mono` monospace is the only font family. no serif, no sans-serif, no display faces. hierarchy is achieved through size, weight, opacity, and color.
2. uses sharp 0px border-radius on cards or containers — all panels have `24px` radius minimum. only full-width page elements (body, sections) have no radius. the genome is round, not angular.
3. uses box-shadow or drop-shadow on any element — depth comes from background fill color and layering, never from shadows.
4. uses cold or technical editorial voice — no bracket prefixes like `[ERROR]`, no mission-control jargon, no ALL-CAPS error codes. the voice is warm, human, and community-oriented.
5. uses gradient fills — all backgrounds are flat solid colors from the earth-tone palette. no linear-gradient, no radial-gradient.
6. uses neon, saturated, or cool-toned accent colors — the palette is strictly warm earth tones: cream, burnt orange, tan, sage, greige. no blue, no purple, no hot pink, no cyan.
7. uses dense information layouts or data tables as primary content — this genome is spacious, mobile-first, card-based. content is parceled into discrete, scrollable, generous-padded cards.
8. uses complex animations or transition chains — the only transition is `transform 0.1s ease` on button press. everything else is instantaneous. the genome feels printed, not interactive.
9. uses photographic imagery or complex illustrations — decoration is limited to single-stroke SVG icons (48px, `stroke-width: 1.5`) and the torn-paper jagged-edge SVG motif.
10. uses visible border strokes on cards — cards are differentiated by their fill color against the cream background, not by outlined borders. the lack of borders keeps the feel soft and approachable.
