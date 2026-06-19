---
id: "23"
name: alpine_concierge.post
keywords:
  - hotel
  - hospitality
  - concierge
  - alpine
  - boutique
  - vintage
  - key card
  - reception
  - european
  - paper
  - stationery
  - postcard
  - travel
  - ski resort
  - luxury
---

### genome 23: `alpine_concierge.post`

> identity: warm boutique hotel ephemera. 1920s european alpine grand hotel — overlapping key cards, perforated receipts, rubber stamps, and typewriter metadata on textured paper stock.

**surface**

colors:
```
--mustard: #FFC233; --terracotta: #C65D3B; --warm-gray: #D1D1C9; --ink: #1F1F1F; --paper: #F4F1EA;
```

typography:
- display / headings: `"Cormorant Garamond", "Georgia", serif` — weights 300, 400, 600. sizes 28–72px. `line-height: 0.9–1.1`. italic used liberally for warmth. `letter-spacing: -0.02em` on large display text.
- metadata / labels / UI: `"Courier Prime", "Courier New", monospace` — weight 400, 700. sizes 8–13px. `text-transform: uppercase`. `letter-spacing: 0.1–0.2em`. this is the "typewriter" voice.
- utility / small sans: `"DM Sans", "Helvetica Neue", sans-serif` — weight 300–500. sizes 10–12px only. used sparingly for room numbers, small annotations.
- hierarchy is achieved through font-family switching (serif vs monospace) and italic, not through size alone.

borders:
- panels/cards: `border-radius: 8px`. `border: 1px solid rgba(0,0,0,0.05)`.
- circular elements (stamps, badges): `border-radius: 50%`. `border: 1px solid rgba(0,0,0,0.2)`. dashed inner ring: `border: 1px dashed rgba(0,0,0,0.3)`.
- perforated tear lines: `border-top: 2px dashed rgba(0,0,0,0.1)`.
- no sharp 0px radius anywhere. minimum 8px on rectangular elements.

spacing:
- generous padding: `padding: 32px–40px` on cards. `gap: 24px` between sections.
- vertical rhythm emphasizes breathing room — this is a lobby, not a cockpit.
- cards are tall portrait-oriented (aspect ratio ~0.7:1).

**color distribution**

- 40% paper (`--paper`) — the warm off-white ground, visible as background and card cutout shapes
- 20% mustard (`--mustard`) — the hero card, primary accent, CTA backgrounds
- 15% terracotta (`--terracotta`) — secondary cards, active nav indicators, hover states, selection color
- 15% warm-gray (`--warm-gray`) — tertiary cards, divider lines, scrollbar, muted backgrounds
- 10% ink (`--ink`) — body text, icons, dark circular buttons. never used as a large fill.

**component patterns**

buttons:
- primary: `background: var(--ink); color: var(--mustard); border-radius: 50%; width: 64px; height: 64px`. circular, icon-only. `box-shadow: 0 4px 12px rgba(0,0,0,0.15)`.
- secondary: no background, no border. `font-family: "Courier Prime", monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.15em`. text-only with optional leading dot indicator `●`.
- labels appear below circular buttons in typewriter micro-text, revealed on hover.

inputs:
- `border-bottom: 1px solid var(--warm-gray); background: transparent; padding: 8px 0`.
- label above in typewriter uppercase: `font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; opacity: 0.5`.
- value in serif: `font-family: "Cormorant Garamond", serif; font-size: 20px`.
- focus: `border-bottom-color: var(--terracotta)`.

cards:
- overlapping stacked composition — cards layer on top of each other with slight rotation (`transform: rotate(-2deg)` to `rotate(3deg)`).
- each card has a distinct background color from the palette (mustard, terracotta, warm-gray).
- `box-shadow: 0 8px 32px rgba(0,0,0,0.12)`. `border-radius: 8px`.
- `paper-texture` pseudo-element overlay: `::before` with SVG fractal noise at `opacity: 0.4; mix-blend-mode: multiply`.
- vertical text along card edges using `writing-mode: vertical-rl` in typewriter micro-text.

navigation:
- vertical list. `font-family: "Courier Prime", monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.15em`.
- active item: leading dot `●` in terracotta + full opacity.
- inactive items: `opacity: 0.5`. no dot.
- hover: `color: var(--terracotta)`.

headers:
- serif display at large scale (48–72px). `font-weight: 300`. line breaks mid-phrase for visual rhythm.
- italic on alternating words or the second line.
- typewriter subhead below: establishment date, location, origin. `opacity: 0.8; line-height: 1.6`.

footers:
- grid of 3 info blocks. each block: circular icon badge + serif title + typewriter detail text.
- icon badges: `width: 32px; height: 32px; border-radius: 50%` with distinct palette color per badge.
- `opacity: 0.8` on the entire footer zone.

lists:
- no bullets. each item is a `border-bottom: 1px solid rgba(0,0,0,0.1)` row.
- label in typewriter uppercase above, value in serif below.
- `padding: 16px 0` per row.

tables:
- styled as receipt/ledger. typewriter font throughout.
- header row: `text-transform: uppercase; letter-spacing: 0.1em; font-size: 10px; opacity: 0.5`.
- cell values in serif. thin bottom borders.

dividers:
- `border-top: 1px solid rgba(0,0,0,0.1)` for standard dividers.
- perforated tear line variant: `border-top: 2px dashed rgba(0,0,0,0.1)` with micro-text "tear here" in typewriter.
- scissors icon (✂) at the end of tear lines.

modals:
- card aesthetic — same rounded corners, paper texture, shadow.
- `background: var(--paper)`. centered with slight rotation (1-2deg) for the ephemera feel.
- close button is a circular icon button in the top-right cutout zone.

badges/tags:
- circular stamp style: `border-radius: 50%; border: 1px solid; width: 80–96px; height: 80–96px`.
- inner dashed ring. typewriter text centered inside, tiny (8–10px).
- rotation variance: random between `-15deg` and `-8deg`, assigned once per stamp instance, for hand-stamped feel.

**interaction language**

- hover: cards — `transform: rotate(Ndeg ± 1deg)` (reduce rotation toward 0). `transition: transform 0.5s ease`. circular buttons — `transform: scale(1.1)`. text links — `color: var(--terracotta)`.
- active/pressed: circular buttons — `transform: scale(0.95)`. cards — `translateY(-5px)`. brief shadow intensification.
- focus: `outline: 2px solid var(--terracotta); outline-offset: 4px`. visible, warm, not aggressive.
- selected: full opacity + terracotta dot indicator. background subtle tint.
- disabled: `opacity: 0.3`. no strikethrough — just faded, like aged paper.
- drag: `cursor: grab` / `cursor: grabbing`. slight scale-up and deeper shadow. card lifts off the stack.

**motion & feedback**

- transitions: `transition: 0.3–0.5s ease` on transforms and colors. smooth, unhurried — hotel lobby pace.
- ambient: slow circular text rotation (`animation: rotate 20–60s linear infinite`) on decorative stamp elements. purely atmospheric.
- loading: typewriter dots appearing one at a time `...` in Courier Prime. or a slowly rotating circular stamp.
- success: a brief warm glow — `box-shadow` pulse in mustard, fading over 1s.
- error: terracotta border flash. text in typewriter: "we're unable to process this request."
- page transitions: cards slide and rotate into position with staggered timing.

**atmosphere**

- paper texture: SVG `feTurbulence` noise (fractalNoise, baseFrequency 0.5–0.8) applied as `::before` pseudo-element on card surfaces. `opacity: 0.08–0.15`. `mix-blend-mode: multiply`. grain shift animation: `feTurbulence seed` changes every 4s via JS for subtle living texture.
- global grain: fixed full-viewport SVG noise overlay at `opacity: 0.03`. `pointer-events: none; z-index: 50`.
- card cutout shapes: occasional `clip-path` or rounded-bottom semicircle notch at card top (key card slot aesthetic).
- rotating circular text: SVG `<textPath>` on a circle, rotating slowly. decorative, at low opacity (0.1). hotel name and location repeating.
- vertical edge text: `writing-mode: vertical-rl` metadata running along card left/right edges in typewriter micro-text.
- no gradients. no blur/glass effects. texture comes from noise and layering, not from frosted glass.
- `::selection { background: var(--terracotta); color: white; }`

**editorial voice**

button labels:
- `Unlock` · `Reserve` · `Request` · `Explore` · `Back to Booking` · `View Receipt` · `Ring Concierge` · `Check In`
- warm, hospitable verbs. never technical. never aggressive.

headings:
- serif, mixed case, often split across lines with italic on the emotional word.
- examples: "For cosy *days*" · "Your *stay* awaits" · "Explore *the area*" · "Room *service*"
- no periods on headings. no all-caps headings.

metadata:
- dates: `Oct 24, 2024` (month abbreviated, not numeric).
- room numbers: `Room No 204` (typewriter, inside geometric shape).
- receipt numbers: `NO. 992` inside circular stamp.
- establishment: `Est. 1924` in typewriter.
- versions/statuses: `s. 1421` (serial number in vertical edge text).

placeholders:
- `Your name as it appears on booking…` · `Preferred arrival time…` · `Special requests or dietary notes…`
- sentence case, trailing ellipsis, warm and personal.

empty states:
- "Your itinerary is waiting to be written." · "No reservations yet — shall we arrange something?" · "The concierge desk is ready when you are."
- always phrased as an invitation, never as an error.

error messages:
- "We're unable to locate that reservation." · "Something went amiss — please try once more." · "The connection was briefly interrupted."
- polite, understated, never alarming. hotel-staff composure.

success messages:
- "Your room is ready." · "Reservation confirmed — we look forward to your arrival." · "Receipt sent to your address."
- warm, brief, confident.

**cursor & selection**

- default: `cursor: default` — no custom cursor.
- interactive elements: `cursor: pointer` on buttons and links.
- drag contexts: `cursor: grab` / `cursor: grabbing`.
- text: `cursor: text` on inputs.
- `::selection { background-color: #C65D3B; color: #FFFFFF; }` — terracotta selection, white text.

**when to reach for this genome**

Use `alpine_concierge.post` when the prompt asks for a boutique hotel site, alpine resort concierge, grand-hotel booking flow, reception desk interface, key-card UI, room-service menu, guest itinerary, stay confirmation, travel postcard, resort activity planner, ski-lodge hospitality surface, perforated receipt, rubber-stamped reservation card, or any warm European hospitality product that should feel like layered 1920s hotel ephemera on paper stock.

Reach for it when the user wants mustard/terracotta/warm-gray paper cards, Cormorant Garamond display type, Courier Prime metadata, overlapping rotated cards, room numbers, receipt numbers, key-card notches, circular stamps, perforated tear lines, vertical edge text, subtle paper grain, concierge verbs like `Reserve`, `Ring Concierge`, `Check In`, and composed guest-facing copy like `Your room is ready.` or `Reservation confirmed — we look forward to your arrival.`

Do not use it for personal planners, wedding/florist schedules, diary pages, ruled agendas, or premium stationery dashboards; use `bespoke_planner.folio`. Do not use it for naturalist field notebooks, specimen labels, botanical sketches, hand-numbered margins, or expedition observations; use `field_journal.expedition`. Do not use it for Victorian pharmacy labels, amber glass bottles, herbalist cabinets, Latin dosage copy, or ornate medicinal borders; use `apothecary_label.rx`. Do not use it for premium lifestyle/wellness editorial, rose-petal softness, frosted cards, pastel gradients, or luxury beauty controls; use `petal_editorial.soft`. Do not use it for auction house catalogs, lot numbers, provenance trails, paddle registration, condition reports, or saleroom gravitas; use `auction_lot.gavel`. Do not use it for tea ceremony, washi, shoji, tatami, sumi-e brushwork, or ritual quietness; use `tea_ceremony.matcha`. Do not use it for mass-market department-store product grids, order forms, coupons, price tags, or Christmas catalog warmth; use `mail_order.catalog`. Do not use it for library drawer cards, Dewey numbers, book-spine labels, or municipal catalog systems; use `card_catalog.dewey`. Do not use it for 1950s neon roadside diners, chrome booths, jukebox selectors, or Route 66 signage; use `neon_diner.route`.

It is strongest when the product interaction is hospitality-first: book, check in, unlock, request, reserve, view receipt, plan a stay, or ask the concierge. If the prompt centers on general stationery, scientific notes, pharmacy, retail catalogs, institutional catalogs, auctions, wellness editorial, tea ritual, diner culture, or military field documentation, choose another genome.

**anti-patterns — this genome NEVER:**

1. uses sharp 0px border-radius on cards or panels — everything has at least 8px radius, like real paper cards with worn corners.
2. uses monospace as the primary display font — Courier Prime is for metadata labels only, never for headings or hero text.
3. uses dark backgrounds as the dominant surface — the base is always warm paper (#F4F1EA or similar). dark is accent only (ink-colored buttons, small badges).
4. uses neon, saturated blue, saturated green, or any cool-spectrum accent colors — the palette is strictly warm: mustard, terracotta, warm gray, ink.
5. uses flat single-plane layouts — cards must overlap, rotate, and stack to create the ephemera-on-desk composition.
6. uses aggressive or technical language — the voice is hospitality: warm, composed, inviting. never "ERROR", "FAILED", "SUBMIT", "EXECUTE".
7. uses glassmorphism, backdrop-blur, or frosted effects — texture comes from paper noise and physical layering, not from transparency.
8. uses uniform card sizing — cards in a stack should vary in width, height, and rotation to feel hand-placed.
9. uses bullet points or numbered lists for navigation — nav is a vertical text list with dot indicators, never bulleted.
10. uses sans-serif for display headings — headings are always in the serif face (Cormorant Garamond), italic for emphasis.
