---
id: "10"
name: gallery_foyer.institution
keywords:
  - gallery
  - museum
  - exhibition
  - editorial
  - curatorial
  - renaissance
  - institutional
  - art
  - typography
  - serif
  - vernissage
  - foyer
  - white cube
  - fine art
  - contemporary
---

### genome 10: `gallery_foyer.institution`

> identity: contemporary art institution digital presence. gagosian gallery website meets swiss typographic tradition meets generative sculpture installation. the quiet authority of serif type at monumental scale on cool stone surfaces.

**surface**

colors:
```
--bg: #E6E6E8;          /* cool gallery stone */
--bg-deep: #D8D8DC;     /* recessed panel / footer zone */
--ink: #141414;          /* primary text, near-black */
--muted: #555555;        /* secondary text, metadata */
--accent: #0A3A8A;       /* institutional blue — used sparingly, always commanding */
--rule: #C0C0C4;         /* dividers, structural lines */
--surface: #F0F0F2;      /* card/panel backgrounds, slightly lifted */
--white: #FFFFFF;         /* modal overlays, highlighted panels */
```

typography:
- display / headings: `"Cormorant Garamond", "Playfair Display", "Georgia", serif` — weight 600, italic for logo/brand marks only. sizes: `clamp(3rem, 6vw, 7rem)` for hero, `clamp(1.8rem, 3vw, 3.5rem)` for section heads, `clamp(1.2rem, 1.8vw, 1.6rem)` for card titles. `line-height: 0.9` on hero, `1.05` on section heads. `letter-spacing: -0.02em`. never uppercase on display type.
- body: `"Manrope", "Inter", system-ui, sans-serif` — weight 300–500. body: `clamp(0.9rem, 1.1vw, 1.15rem)`. `line-height: 1.6`. `letter-spacing: 0.01em`.
- meta / navigation / labels: `"Manrope", sans-serif` — weight 500. size: `0.7rem–0.75rem`. `text-transform: uppercase`. `letter-spacing: 0.1em–0.15em`. this creates extreme scale contrast against the display serif — the defining typographic gesture.
- no monospace fonts anywhere except code blocks.

borders:
- structural dividers: `1px solid var(--rule)` — horizontal rules between major sections.
- accent rules: `1px solid var(--accent)` — vertical rules beside pull-quotes, subheads, active nav items.
- panels/cards: no visible border. separation through background color shift (`--surface` on `--bg`) or whitespace alone.
- `border-radius: 0px` on all UI elements. no exceptions. the architecture is rectilinear.

spacing:
- base unit: `max(2vw, 20px)`. page padding: `calc(var(--space-unit) * 2)`.
- section gaps: `calc(var(--space-unit) * 4)`.
- element gaps: `calc(var(--space-unit) * 1)`.
- generous margins. content never touches edges. the whitespace IS the design.

**color distribution**

- 60% cool stone backgrounds (`--bg`, `--bg-deep`, `--surface`) — the gallery walls
- 20% near-black ink (`--ink`) — typography carries the visual weight
- 10% muted grey (`--muted`, `--rule`) — metadata, structural lines
- 10% institutional blue (`--accent`) — used only for: active states, accent rules, geometric interventions, one key element per viewport. blue is the curatorial hand — it points, it doesn't fill.

**component patterns**

buttons:
- primary: `background: var(--ink); color: var(--bg); padding: 14px 32px; border: none; border-radius: 0px; font-family: Manrope; font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.12em;`. rectangular, solid, understated.
- secondary: `background: transparent; color: var(--ink); padding: 14px 32px; border: 1px solid var(--ink); border-radius: 0px;` same typography.
- text-link style: no background, no border. `text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.75rem;` with animated underline reveal on hover (slides in from left via `::after` pseudo-element, `transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)`).

inputs:
- `background: transparent; border: none; border-bottom: 1px solid var(--rule); border-radius: 0px; padding: 12px 0; font-family: Manrope; font-size: 0.95rem; font-weight: 300; color: var(--ink);`
- focus: `border-bottom-color: var(--accent); outline: none;`
- label: positioned above, `font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 8px;`
- placeholder: `color: var(--rule); font-weight: 300; font-style: italic;`

cards/panels:
- `background: var(--surface); padding: calc(var(--space-unit) * 1.5); border: none; border-radius: 0px;`
- card headers: serif type at `1.2–1.6rem`, weight 600, followed by a thin `1px solid var(--rule)` divider.
- no box-shadow. ever. elevation is communicated through color shift, not shadow.

navigation:
- horizontal, `display: flex; gap: calc(var(--space-unit) * 2);`
- items: `font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 500; color: var(--ink);`
- active indicator: `::after` underline that slides in from left. `width: 100%; height: 1px; background: var(--ink); transform: translateX(-101%); transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);`
- on hover, `::after` slides to `translateX(0)`.

headers:
- site header: logo (serif italic, `1.5rem`) on left, nav on right. `font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase;`
- section headers: serif display type, left-aligned, with generous margin-bottom. optionally preceded by a numbered label in meta style: `01 —` in `0.7rem` uppercase mono.

footers:
- `font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--muted);`
- two-column layout: metadata (volume, coordinates, dates) on left, scroll/CTA indicator on right.
- separated from content by generous whitespace, not a border.

lists:
- no bullets. items separated by `1px solid var(--rule)` horizontal rules.
- each item: title in serif (`1rem–1.2rem`, weight 600), metadata in sans uppercase (`0.7rem`).
- active/hover: `color: var(--accent)` on title, accent rule appears on left edge.

tables:
- `border-collapse: collapse;`
- header row: `font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); border-bottom: 1px solid var(--ink);`
- body rows: `font-size: 0.9rem; border-bottom: 1px solid var(--rule); padding: 12px 0;`
- no alternating row colors. no cell backgrounds.

dividers:
- `1px solid var(--rule)` — horizontal, full-width.
- accent dividers: `1px solid var(--accent)` — vertical, used beside quotes and subheads.

modals/overlays:
- `background: var(--white); border: none; border-radius: 0px; padding: calc(var(--space-unit) * 2);`
- backdrop: `background: rgba(20, 20, 20, 0.6); backdrop-filter: blur(8px);`
- modal header: serif type, large, with a close icon (thin `+` rotated 45deg).

badges/tags:
- `display: inline-block; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.12em; padding: 4px 12px; border: 1px solid var(--muted); color: var(--muted); border-radius: 0px;`
- active/selected badge: `border-color: var(--accent); color: var(--accent);`

**interaction language**

- hover: underline slides in from left via `::after` transform on text links. buttons: `background: var(--accent)` (primary), `border-color: var(--accent); color: var(--accent)` (secondary). cards: no change — cards don't react, content does. `transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);`
- active/pressed: `transform: none` (no scale). primary button: `background: #062860` (darker blue). text elements: `color: var(--accent)`.
- focus: `outline: 1px solid var(--accent); outline-offset: 4px;` — generous offset gives the focus ring breathing room. no glow, no shadow.
- selected: accent-colored left border rule (`border-left: 2px solid var(--accent); padding-left: 16px`). text color shifts to `var(--accent)`.
- disabled: `opacity: 0.3`. no other visual change. no strikethrough.
- drag: `cursor: grab` / `cursor: grabbing`. `opacity: 0.7` on dragged element.

**motion & feedback**

transitions: default `0.4s cubic-bezier(0.19, 1, 0.22, 1)` — the easing is fast-out, slow-in, creating a feeling of weight and deliberation. used on underline reveals, color shifts, opacity changes.

loading: a thin horizontal line animates left-to-right across the element, `2s cubic-bezier(0.65, 0, 0.35, 1) infinite`. the line is `1px solid var(--ink)`. subtle, architectural.

success: the accent blue briefly appears — a `1px` rule or color flash — then fades. `transition: opacity 0.6s ease-out`. no checkmarks, no bounces.

error: text color shifts to `#8B2020` (muted burgundy, not bright red). a subtle `1px solid #8B2020` rule appears beneath the error field. errors are quiet, not alarming.

no page-enter animations. content is present immediately, as if it was always there — like walking into a gallery room.

**atmosphere**

- background: flat `var(--bg)` — no gradients, no noise textures. the cool grey is the gallery wall.
- geometric interventions: one large color plane per viewport, `background: var(--accent); mix-blend-mode: multiply; opacity: 0.75;`. positioned off-center, partially behind content. floats with a `20s ease-in-out infinite alternate` animation (1–2% position drift, oscillating between 1deg and 3deg rotation). this is the installation piece in the room.
- generative element: a Three.js or CSS-based particle/point-cloud sculpture occupying the right or background of the viewport. 200–400 white/silver particles, size 0.5–2px, `opacity: 0.2–0.4`, brownian drift at 0.1px/frame. `pointer-events: none`. reacts subtly to mouse position. this is ambient art, not interactive UI.
- floating debris: tiny white particles (`opacity: 0.3–0.5`, `size: 0.05`) scattered across the viewport, rotating imperceptibly. dust motes in gallery light.
- `text-shadow: 0 2px 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)` on hero serif text — creates a soft radiance as if the text is lit from behind, lifting it off the geometric plane.
- parallax: content layer shifts subtly on mousemove (`transform: translate3d(Xpx, Ypx, 0)` where X/Y are derived from mouse position * -20). restrained, architectural.

**editorial voice**

button labels: "Discover", "Enter", "View Exhibition", "Read Thesis", "Explore Collection", "Request Access", "Subscribe". sentence case or title case. never all-caps on buttons (caps is reserved for metadata).

headings: serif, mixed case (title case for proper nouns, sentence case for phrases). dramatic, evocative, occasionally poetic: "The Modern Renaissance", "Digital Humanism", "Between Signal and Silence", "New Acquisitions". no periods on headings. em-dashes for subclauses.

metadata: uppercase sans-serif. `Vol. I — Digital Humanism`. `Coordinates: 40.7128° N, 74.0060° W`. `2024 — Ongoing`. `No. 037`. dates as month/year or full ISO. use em-dashes, not hyphens.

placeholders: italic, lowercase, suggestive: "search the collection...", "your name", "leave a note..."

empty states: serif italic, centered, one line: "Nothing here yet." or "The collection awaits." or "No results — try broadening your search."

error messages: quiet, matter-of-fact, serif italic: "We couldn't complete that request." / "This field requires your attention." / "Something went wrong — please try again."

success messages: brief, warm: "Submitted successfully." / "Added to your collection." / "Welcome."

**cursor & selection**

- default: `cursor: default` on body.
- interactive elements (links, buttons, nav): `cursor: pointer`.
- drag targets: `cursor: grab` / `cursor: grabbing`.
- text: `cursor: text`.
- `::selection { background: var(--accent); color: var(--white); }` — blue selection reinforces the institutional accent color.

**when to reach for this genome**

Use this genome when the request calls for a contemporary art institution, museum exhibition, gallery website, curatorial publication, collection index, artist programme, biennial microsite, opening invitation, institutional archive, or editorial art-world interface that should feel quiet, authoritative, spatial, and typographically serious.

Reach for it when the product needs white-cube restraint, monumental serif display type, cool stone surfaces, uppercase metadata, measured institutional blue, generous margins, and the feeling of walking into a carefully lit foyer. It is strongest when the interface is about framing cultural material: exhibitions, artists, collections, essays, lectures, acquisitions, tickets, memberships, press releases, and public programmes.

Choose it for:
- exhibition landing pages that need one large title, a few dates, a curator line, and a restrained call to enter the show.
- collection browsers where artworks, essays, departments, rooms, dates, accession numbers, and provenance need calm hierarchy.
- editorial art publications, museum magazines, artist monographs, residency pages, lecture series, and institutional announcements.
- premium cultural brands that want gallery authority rather than luxury retail gloss.
- interfaces where generative sculpture, particles, or color-plane interventions can act as a quiet installation backdrop.

Do not choose it for code-led creative portfolios, experimental monochrome canvas sites, auction bidding floors, library card catalogs, commercial ecommerce galleries, maximalist art fairs, entertainment venues, or dense admin systems. Use `signal_void.cc` for creative-coding portfolios and live computational specimens; use `auction_lot.gavel` for sale estimates, bidding, provenance, and lot mechanics; use `card_catalog.dewey` for library cataloguing; use `celestial_plate.obs` for scientific plate archives; use `mosaic_signal.data` for contemporary data/editorial systems that should feel less institutional.

**anti-patterns — this genome NEVER:**

1. uses border-radius on any element. all corners are sharp 90-degree angles. the architecture is rectilinear and precise.
2. uses box-shadow for elevation. depth is communicated through color shift and whitespace, never shadow.
3. uses bright saturated colors beyond the single institutional blue. no red CTAs, no green success, no yellow warnings. the palette is restrained to greys and one blue.
4. uses monospace fonts outside of code blocks. typography is serif display + geometric sans — never terminal aesthetic.
5. uses emoji, icons, or illustrative graphics. the only visual elements are typography, color planes, and generative/particle art.
6. uses pill-shaped buttons or rounded badges. everything is rectangular.
7. uses casual or enthusiastic language. no exclamation marks. no "awesome!", "great job!", "oops!". the voice is curatorial — warm but measured.
8. uses dense, packed layouts. whitespace is sacred. content breathes. if it feels crowded, something must be removed.
9. uses gradients on UI elements. backgrounds are flat. color planes are solid. the only atmospheric effects are mix-blend-mode and particle systems.
10. uses bounce, wobble, or elastic animations. all motion is deliberate, weighted, and architectural — fast-out, slow-in easing only.
