---
id: "66"
name: cathedral_glass.lux
keywords:
  - stained glass
  - cathedral
  - gothic
  - medieval
  - jewel tone
  - sacred
  - luminous
  - church
  - rose window
  - tracery
  - blackletter
  - chapel
---

### genome 66: `cathedral_glass.lux`

> identity: Gothic stained glass window as interface. Deep jewel tones (sapphire, ruby, emerald, amethyst) glowing from within, dark iron lead caming as dividers and borders, lancet arch shapes for containers, blackletter display type. Every panel is a luminous translucent pane set in dark iron framing. Chartres Cathedral's rose windows, Sainte-Chapelle's wall of light, the Cologne Cathedral's Richter window. Light passes through colored glass — the UI glows, it doesn't reflect.

**surface**

colors:
```
--iron: #2A2A30;             /* lead caming, borders, dark framing */
--stone: #3D3A38;            /* stone wall background */
--sapphire: #1B4F9E;         /* primary jewel blue */
--ruby: #A01830;             /* red glass */
--emerald: #1A6B3C;          /* green glass */
--amethyst: #6B2D8B;         /* purple glass */
--gold-leaf: #C8A84E;        /* gilt accents, halos */
--ivory-light: #F0EBE0;      /* parchment text, illuminated manuscript cream */
--candle: #FFE4B5;           /* warm candle glow */
```

typography:
- display/headings: blackletter-inspired — `"UnifrakturMaguntia", "MedievalSharp", serif` for major headings and hero text. alternative: `"Cinzel", "Trajan Pro", serif` — `font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em` for a more legible gothic-inspired option. use Cinzel for section headings and navigation, UnifrakturMaguntia for hero display and modal titles. heading sizes: `2.5–4rem` for section titles, `5–8rem` for hero display.
- body/descriptions: `"Cormorant Garamond", "EB Garamond", Georgia, serif` — `font-weight: 400–500; font-size: 15–16px; line-height: 1.7`. readable, elegant, manuscript-quality. the body text carries the weight of a printed psalter.
- labels/metadata: `"Cinzel", serif` — `font-size: 11–12px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--gold-leaf)`. used for navigation items, badges, table headers, and structural metadata.
- hierarchy driven by formality of typeface: blackletter for the sacred/display, Cinzel for the structural/navigational, Cormorant Garamond for the readable/body. weight variation is secondary to typeface distinction.

borders:
- structural panels/cards: `2–3px solid var(--iron)` — heavy, dark, metallic. this represents lead caming holding glass panes together. `border-radius: 0px` on all rectangular elements. glass panes are angular, never rounded.
- lancet arch containers: pointed arch shapes on featured containers via `clip-path: polygon(0 8%, 50% 0, 100% 8%, 100% 100%, 0 100%)` or `border-radius: 50% 50% 0 0 / 70% 70% 0 0` approximations. used on hero cards, modal headers, and featured panels only.
- inner panel dividers: `2px solid var(--iron)` — sub-divisions within a card or panel, replicating the lead lines within a single window.
- no border-radius above `0px` on rectangular elements. lancet arches use clip-path, not border-radius.

spacing:
- card/panel internal: `padding: 20–28px` — generous interior space within each glass pane.
- caming gap (between panes): `gap: 3–4px` — the gap IS the lead caming. thin dark iron lines between colored panes. `background: var(--iron)` on the parent container makes the gap visible as lead.
- structural gaps (between sections): `8–12px` — wider iron framing between major panel groups.
- page margin: `padding: 24–40px` — the stone wall border around the window composition.
- section vertical rhythm: `60–100px` between major content sections.

**color distribution**

- 35% iron/stone dark (`--iron`, `--stone`) — the architectural structure. framing, borders, background walls. the darkness that makes the glass glow.
- 25% sapphire (`--sapphire`) — the dominant glass color. primary panels, buttons, and the largest panes.
- 15% ruby + emerald (`--ruby`, `--emerald`) — secondary glass panels. used for alternate card colors, danger/success states, and variety in multi-pane compositions.
- 10% gold-leaf (`--gold-leaf`) — accents, selected states, important callouts. the gilding on the manuscript, the halo around saints. never as a large background fill.
- 10% ivory-light (`--ivory-light`) — text, parchment-tinted areas. the light that passes through glass and lands on the page.
- 5% amethyst + candle (`--amethyst`, `--candle`) — tertiary accents. amethyst for variety in glass compositions. candle for warm glow highlights and loading states.

the sapphire-ruby-emerald-amethyst palette should feel like walking through Sainte-Chapelle — each panel a different jewel, all held together by dark iron.

**component patterns**

buttons:
- primary: `background: var(--sapphire); color: var(--ivory-light); border: 2px solid var(--iron); border-radius: 0; font-family: "Cinzel", serif; text-transform: uppercase; letter-spacing: 0.1em; padding: 12px 24px; box-shadow: inset 0 0 12px rgba(255,255,255,0.08);` — a sapphire glass pane you press.
- danger: same structure, `background: var(--ruby)`.
- success: same structure, `background: var(--emerald)`.
- accent: `background: var(--gold-leaf); color: var(--iron); border: 2px solid var(--iron); box-shadow: inset 0 0 12px rgba(255,255,255,0.1);` — gilt button, dark text.
- ghost: `background: transparent; color: var(--ivory-light); border: 2px solid var(--iron); padding: 10px 20px; font-family: "Cinzel"; text-transform: uppercase; letter-spacing: 0.1em;`

inputs:
- `background: rgba(26,42,48,0.6); border: 2px solid var(--iron); border-radius: 0; color: var(--ivory-light); font-family: "Cormorant Garamond", serif; font-size: 15px; padding: 12px 16px;`
- label above: `font-family: "Cinzel"; font-size: 11px; color: var(--gold-leaf); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 6px;`
- placeholder: `color: rgba(240,235,224,0.4); font-style: italic;`
- focus: `border-color: var(--gold-leaf); box-shadow: 0 0 8px rgba(200,168,78,0.3);`

cards:
- stained glass PANES — each card is a colored glass panel. `background: var(--sapphire)` (or ruby, emerald, amethyst — each card can be a different jewel color). `border: 3px solid var(--iron); border-radius: 0;`
- inner glow: `box-shadow: inset 0 0 20px rgba(255,255,255,0.06);` — light transmitting through the glass.
- card title: `font-family: "Cinzel"; text-transform: uppercase; letter-spacing: 0.08em; color: var(--gold-leaf);`
- card body: `font-family: "Cormorant Garamond"; color: var(--ivory-light); font-size: 15px; line-height: 1.7;`
- featured card: lancet arch top via clip-path. gold-leaf top border accent: `border-top: 3px solid var(--gold-leaf)`.

navigation:
- iron tracery bar — `background: var(--iron); border-bottom: 3px solid var(--iron); padding: 0;`
- nav items as individual glass panes: each item has a jewel background color. `padding: 12px 20px; font-family: "Cinzel"; font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--ivory-light); border-right: 2px solid var(--iron);`
- active item: glows brighter — `box-shadow: 0 0 12px` of its jewel color, increased brightness. `border-bottom: 3px solid var(--gold-leaf)`.
- inactive items: darker, muted version — `filter: brightness(0.7);`

headers:
- rose window composition — centered, radiant. `background: var(--stone); padding: 40px 24px; text-align: center;`
- large heading: `font-family: "UnifrakturMaguntia", serif; font-size: 4–6rem; color: var(--gold-leaf); text-shadow: 0 0 20px rgba(200,168,78,0.2);`
- subtitle: `font-family: "Cormorant Garamond"; font-size: 16px; color: var(--ivory-light); font-style: italic; margin-top: 8px;`
- flanked by decorative jewel-colored elements — small sapphire and ruby squares or diamond shapes on either side of the title.

footers:
- stone ledge — `background: var(--stone); border-top: 3px solid var(--iron); padding: 24px 40px; color: var(--ivory-light);`
- footer text: `font-family: "Cinzel"; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(240,235,224,0.5);`
- small gold-leaf decorative cross or trefoil as center ornament.

lists:
- each item separated by iron caming lines — `border-bottom: 2px solid var(--iron); padding: 12px 16px;`
- leading decorative element: a small jewel-colored diamond marker — `width: 8px; height: 8px; transform: rotate(45deg); background: var(--sapphire); display: inline-block; margin-right: 12px;`
- text: `font-family: "Cormorant Garamond"; font-size: 15px; color: var(--ivory-light); line-height: 1.7;`
- alternate diamond colors through the list for variety: sapphire, ruby, emerald, amethyst.

tables:
- leaded glass grid — every cell bordered by iron. `border-collapse: separate; border-spacing: 2px; background: var(--iron);` — the spacing becomes the lead caming.
- header row: `background: var(--iron); color: var(--gold-leaf); font-family: "Cinzel"; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; padding: 12px 16px;`
- body cells: `background: rgba(27,79,158,0.15); color: var(--ivory-light); font-family: "Cormorant Garamond"; padding: 10px 16px;` — alternating subtle jewel tints: sapphire-tint and amethyst-tint rows.
- `border: 2px solid var(--iron)` on all cells.

dividers:
- iron caming rules — `height: 2–3px; background: var(--iron); border: none;`
- decorative variant: iron rule with small trefoil or fleur-de-lis SVG centered, `color: var(--gold-leaf)`. the ornament sits at the midpoint of the line.

modals:
- illuminated manuscript page — `background: var(--stone); border: 3px solid var(--iron); border-radius: 0;`
- outer glow: `box-shadow: 0 0 40px rgba(200,168,78,0.15), 0 20px 60px rgba(0,0,0,0.5);` — warm candlelight aura.
- modal title: `font-family: "UnifrakturMaguntia"; font-size: 2rem; color: var(--gold-leaf); text-align: center; padding: 20px; border-bottom: 2px solid var(--iron);`
- modal body: `padding: 24px; background: rgba(240,235,224,0.05); font-family: "Cormorant Garamond"; color: var(--ivory-light);` — a slightly parchment-tinted content area.
- overlay backdrop: `background: rgba(0,0,0,0.75);`

badges:
- `background: var(--gold-leaf); color: var(--iron); font-family: "Cinzel"; text-transform: uppercase; font-size: 10px; letter-spacing: 0.12em; padding: 4px 12px; border: 1px solid var(--iron); border-radius: 0;`
- variant (outline): `background: transparent; color: var(--gold-leaf); border: 1px solid var(--gold-leaf);`

**interaction language**

- hover: glass pane brightens — inner glow intensifies. `box-shadow: inset 0 0 24px rgba(255,255,255,0.12); transition: 0.3s ease;` the glass "catches the light." on buttons, `filter: brightness(1.15)`.
- active/pressed: glow contracts, element subtly darkens — pressing the glass inward. `filter: brightness(0.9); box-shadow: inset 0 0 8px rgba(255,255,255,0.04); transition: 0.1s ease;`
- focus: gold-leaf outline — `outline: 2px solid var(--gold-leaf); outline-offset: 2px;` a gilt frame around the focused element.
- selected: gold-leaf border and intensified glow — the pane is illuminated. `border-color: var(--gold-leaf); box-shadow: inset 0 0 30px rgba(255,255,255,0.1), 0 0 12px rgba(200,168,78,0.2);`
- disabled: stained glass in shadow, no light passing through. `filter: saturate(0.3) brightness(0.6); pointer-events: none;` — desaturated, darkened, the color drained from the glass.
- drag: element lifts with warm golden shadow — `box-shadow: 0 8px 24px rgba(200,168,78,0.2); transform: translateY(-2px); transition: 0.3s ease;`

**motion & feedback**

transitions:
- default: `transition: 0.3s ease` on background, box-shadow, filter, border-color, opacity, transform. slow, reverent. light shifts gradually through glass.
- never faster than `0.15s` on any property. the cathedral does not rush.

loading:
- warm candle-glow pulse — a `var(--candle)` tinted element brightening and dimming. `animation: candle-pulse 1.5s ease-in-out infinite;` with `@keyframes candle-pulse { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }`.
- or: three small jewel-colored diamonds pulsing in sequence.

success:
- gold-leaf shimmer — a brief brightening sweep across the element. `background: linear-gradient(90deg, transparent 0%, rgba(200,168,78,0.3) 50%, transparent 100%); background-size: 200% 100%; animation: shimmer 0.8s ease forwards;`

error:
- ruby pane flash — element briefly tints red via `box-shadow: inset 0 0 30px rgba(160,24,48,0.3)`, fades back over `0.5s`.
- error text in `var(--ruby)` with Cinzel uppercase.

page enter:
- panels brighten from dark to illuminated, staggered `100ms` per panel. `animation: illuminate 0.6s ease forwards;` with `@keyframes illuminate { from { filter: brightness(0.3); opacity: 0; } to { filter: brightness(1); opacity: 1; } }`. as if light is gradually entering the cathedral at dawn.

**atmosphere**

- dark stone background: `background: var(--stone)` — the cathedral wall. the surface behind all glass panels. never white, never truly black. warm dark stone.
- candlelight radial: `background: radial-gradient(ellipse at 50% 30%, rgba(255,228,181,0.06) 0%, transparent 70%);` — a faint warm glow emanating from the upper center of the viewport, as if a high window lets in afternoon light.
- jewel panels glow against darkness — the contrast between `var(--stone)` background and jewel-colored card surfaces creates the stained glass illusion. the panels are luminous; the framing is dark.
- decorative tracery: thin iron lines in gothic arch shapes as subtle background SVG patterns at very low opacity (`opacity: 0.04–0.08`). trefoil and quatrefoil motifs. these are atmospheric, not functional.
- the overall effect: standing inside a cathedral as light streams through colored glass — luminous panels floating in darkness, held together by heavy iron caming, surrounded by ancient stone.

**editorial voice**

button labels: "Proceed", "Illuminate", "Archive", "Compose", "Bestow", "Chronicle", "Inscribe", "Consecrate". formal, reverent, active. single-word or two-word commands. never casual, never modern-tech.

headings: formal, weighty — "The Collection", "Chapter & Verse", "Index of Works", "The Registry", "Illuminated Texts", "The Scriptorium", "Book of Hours", "The Nave". article + noun construction. the heading names a sacred space or manuscript section.

metadata: "Folio XII · Verse III", "Catalogued MMXXVI", "Section the Third", "Registry No. 4481", "Illuminated · Anno Domini MMXXVI". roman numerals where appropriate. interpuncts as separators.

placeholders: "Inscribe your query...", "Seek within the archive...", "Enter the folio number...", "Name the manuscript...". imperative, slightly archaic, italicized.

empty states: "The archive stands empty.", "No illuminations found.", "Awaiting inscription.", "The registry contains no entries.", "This chapter has yet to be written.". complete sentences, period-terminated, dignified.

error messages: "The path is obscured.", "Entry not found within the registry.", "A fault in the chronicle.", "The seal cannot be verified.", "Inscription failed — consult the index.". formal, measured, no apology, no emoji, no exclamation.

success messages: "Inscribed.", "Illuminated.", "Added to the registry.", "The chronicle is updated.", "Sealed and recorded.". past tense or passive voice, single sentence, period-terminated. no exclamation marks.

**cursor & selection**

- default: `cursor: default`
- interactive elements: `cursor: pointer`
- drag targets: `cursor: grab` then `cursor: grabbing`
- disabled: `cursor: not-allowed`
- text selection: `::selection { background: var(--gold-leaf); color: var(--iron); }` — gold-leaf highlight with iron text, as if selecting illuminated manuscript text.

**when to reach for this genome**

Use `cathedral_glass.lux` when the prompt asks for Gothic stained glass, a cathedral or chapel interface, sacred archive, ecclesiastical event page, medieval ceremony, rose-window composition, jewel-toned membership experience, or any product that should feel like colored light passing through leaded glass inside a dark stone interior.

Reach for it when the concrete cues are sapphire/ruby/emerald/amethyst panes, heavy iron caming, lancet arches, rose windows, trefoils, quatrefoils, blackletter display type, Cinzel labels, gold-leaf focus frames, candle glow, and formal copy such as `Illuminate`, `Inscribe`, `Chronicle`, or `The Nave`. It is strongest when the interface can be divided into luminous panes held by dark structure: navigation as tracery, cards as glass panels, status as gilded seals, and page sections as chapel bays.

Do not use it for vellum manuscripts, gold initials, rubricated columns, marginalia, or book-of-hours page layouts; use `illuminated_codex.aureum`. Do not use it for 1920s gold-on-navy hotel luxury, sunbursts, chevrons, or Gatsby-era private-club ceremony; use `deco_metropolitan.gilt`. Do not use it for gemstones, jewelry configurators, loupe views, carat metadata, or faceted product detail; use `gem_jeweler.facet`. Do not use it for mineral specimens, geology catalogs, black velvet displays, crystallographic axes, or Mohs hardness data; use `mineral_specimen.crystal`. Do not use it for Greek/Roman antiquity, marble statuary, bronze patina, or classical inscriptions; use `amphitheater_marble.classical`.

It is the right choice when colored glass, Gothic structure, and sacred luminosity are the primary metaphor. If the prompt is manuscript, luxury lobby, jewelry, mineral science, or classical archaeology, choose the more specific adjacent genome.

**anti-patterns — this genome NEVER:**

1. uses sans-serif fonts for display or body text. all typography is serif, blackletter, or uncial — the medieval manuscript tradition. no Helvetica, no Inter, no system sans-serif anywhere.
2. uses neon, electric, or digitally saturated colors. all colors are deep jewel tones — the saturation of pigmented glass, not LED light. no `#00FF00`, no `#FF00FF`, no electric blue.
3. uses border-radius above `0px` on rectangular elements. lancet arches use clip-path, not border-radius. glass panes are angular. no rounded corners, no pills, no circles on structural elements.
4. uses light/white backgrounds as primary surfaces. the world is dark stone with colored light — not a white page. `var(--stone)` is the lightest background allowed on large surfaces.
5. uses casual, playful, or modern-tech language. the editorial voice is formal, measured, slightly archaic. no "oops!", no emoji, no "hey there!", no Silicon Valley jargon.
6. uses fast snappy transitions under `0.15s`. all motion is slow and reverent — light moves through glass gradually. no bounce, no spring, no snap.
7. uses flat, unlit surfaces. every colored panel must have an inner glow or luminosity — `box-shadow: inset 0 0 ...`. the glass transmits light. a flat sapphire rectangle is not a glass pane.
8. uses thin hairline (`1px`) structural borders. the lead caming is heavy — `2–3px` minimum on all structural borders. `1px` is only acceptable for inner subdivisions within an already-framed pane.
9. uses drop shadows with large blur radius on cards as a primary depth mechanism. light comes THROUGH the glass, not around it. shadows are used sparingly for depth, and the golden glow on modals is warm candlelight, not generic elevation shadow.
