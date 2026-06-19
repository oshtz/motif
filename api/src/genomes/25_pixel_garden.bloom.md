---
id: "25"
name: pixel_garden.bloom
keywords:
  - portfolio
  - creative
  - pixel
  - botanical
  - flower
  - garden
  - whimsical
  - indie
  - artist
  - cobalt
  - playful
  - floating
  - personal site
  - art portfolio
  - indie web
---

### genome 25: `pixel_garden.bloom`

> identity: creative portfolio pixel garden. saturated cobalt field, floating pixel-art botanicals, italic serif display type paired with monospace utility. an indie artist's personal site that feels like walking through a digital flower meadow at dusk.

**surface**

colors:
- `--pg-cobalt: #0044CC` — primary background, dominant field color
- `--pg-deep-blue: #003399` — secondary panels, dropdown backgrounds, card surfaces
- `--pg-white: #FFFFFF` — primary text, borders at low opacity
- `--pg-gold: #FFD700` — accent, hover states, selection highlight, pixel flower centers
- `--pg-red: #FF3333` — pixel flower petals (warm variant), alerts, active states
- `--pg-green: #228B22` — pixel stems, success states, secondary accent
- `--pg-green-dark: #006400` — pixel leaves, subtle foliage details
- `--pg-brown: #8B4513` — pixel flower centers (warm variant), tertiary accent
- `--pg-grid: rgba(255, 255, 255, 0.08)` — grid overlay lines

typography:
- display: `'Playfair Display', serif` — italic only, weight 400. used for hero headings, page titles, names. always italic. tracking: -0.03em. line-height: 0.95.
- body/ui: `'Space Mono', monospace` — weights 400, 700. used for navigation, labels, metadata, body text. tracking: 0.05em for body, 0.2em for uppercase labels. line-height: 1.5.
- headings: display font at viewport-relative sizes (10vw–16vw for heroes, 3vw–5vw for section titles). always italic serif.
- labels/nav: body font, uppercase, bold (700), tracking 0.05em–0.2em, 12px–16px.
- metadata: body font, 11px–12px, uppercase, tracking 0.2em, opacity 0.7.

borders:
- `border-radius: 2px` for panels and dropdowns. never rounded, never pill. `rounded-sm` maximum.
- border color: `rgba(255, 255, 255, 0.1)` — barely visible white borders.
- border width: 1px. no thick borders.

spacing:
- generous padding: 24px–48px on containers. nav padding: 24px–48px horizontal, 32px vertical.
- section spacing: 80px–120px vertical rhythm.
- element gaps: 24px–48px between nav items, 8px–16px between stacked metadata lines.

**color distribution**

- 60% `--pg-cobalt` — the saturated blue field dominates everything. backgrounds, page canvas, all negative space is cobalt.
- 30% `--pg-white` at varying opacities — text, grid lines, borders. full opacity for primary text, 0.6–0.8 for secondary, 0.08 for grid.
- 10% `--pg-gold` + `--pg-red` + `--pg-green` — accent colors appear through pixel-art decorative elements, hover states, and selection. gold is the primary accent for interaction. red and green are environmental/decorative only.

**component patterns**

buttons:
- primary: `background: transparent; border: 1px solid rgba(255,255,255,0.3); color: var(--pg-white); font-family: 'Space Mono'; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 12px 28px; border-radius: 2px; font-size: 13px`.
- hover: `background: var(--pg-gold); color: var(--pg-deep-blue); border-color: var(--pg-gold)`. instant color flip.
- secondary: text-only with underline animation. no background, no border.

inputs:
- `background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.15); color: var(--pg-white); font-family: 'Space Mono'; font-size: 14px; padding: 12px 16px; border-radius: 2px`.
- focus: `border-color: var(--pg-gold); outline: none; box-shadow: 0 0 0 2px rgba(255,215,0,0.2)`.
- placeholder: `color: rgba(255,255,255,0.35)`.

cards:
- `background: var(--pg-deep-blue); border: 1px solid rgba(255,255,255,0.1); border-radius: 2px; padding: 24px–32px`.
- hover: subtle `transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.3)`.
- card titles in italic serif. card metadata in monospace uppercase.

navigation:
- horizontal centered layout. items are bold uppercase monospace with generous tracking.
- hover: text turns `var(--pg-gold)`, underline expands from left (`width: 0 → 100%`) as a `::after` pseudo-element, `height: 2px; background: var(--pg-gold)`.
- dropdowns: `background: var(--pg-deep-blue); border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 8px 24px rgba(0,0,0,0.3)`. items highlight with full gold background on hover.
- active page: permanent gold underline.

headers:
- minimal. logo area left, nav center, social links right. all uppercase monospace. generous horizontal padding (48px).
- no background color — transparent over page content with high z-index.

footers:
- three-column layout: left info, center scroll indicator, right credits.
- all text: monospace, uppercase, bold, 11px–12px, tracking 0.1em, opacity 0.6.
- flush to bottom, generous padding.

lists:
- no bullet points. items separated by `border-bottom: 1px solid rgba(255,255,255,0.08)`.
- item padding: 16px vertical. text in monospace.
- hover: background shifts to `rgba(255,255,255,0.03)`.

tables:
- header row: monospace uppercase bold, opacity 0.6, `border-bottom: 1px solid rgba(255,255,255,0.15)`.
- cells: monospace 14px, padding 12px 16px.
- alternating rows: no striping. separate with subtle bottom borders.

dividers:
- `border-top: 1px solid rgba(255,255,255,0.08)`. no decorative dividers.
- alternatively: grid lines serve as ambient dividers across the full viewport.

modals:
- `background: var(--pg-deep-blue); border: 1px solid rgba(255,255,255,0.1); border-radius: 2px; padding: 32px; box-shadow: 0 16px 48px rgba(0,0,0,0.5)`.
- backdrop: `background: rgba(0,0,0,0.6); backdrop-filter: blur(4px)`.
- title in italic serif, body in monospace.

badges/tags:
- `background: rgba(255,255,255,0.08); color: var(--pg-white); font-family: 'Space Mono'; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 10px; border-radius: 2px`.
- accent badge: `background: var(--pg-gold); color: var(--pg-deep-blue)`.

**interaction language**

hover:
- text elements: color transitions to `var(--pg-gold)`, `transition: color 300ms ease`.
- buttons/links: underline grows from left via width animation, `transition: all 300ms ease`.
- cards: `translateY(-2px)` lift with shadow deepening.
- dropdown items: full `background: var(--pg-gold); color: var(--pg-deep-blue)` swap.

active:
- `background: var(--pg-red); color: var(--pg-white)` for buttons.
- scale: `transform: scale(0.98)` for pressable elements.

focus:
- `border-color: var(--pg-gold); box-shadow: 0 0 0 2px rgba(255,215,0,0.2); outline: none`.
- visible focus ring always present for accessibility.

selected:
- `background: var(--pg-gold); color: var(--pg-deep-blue)`. bold swap — selection is unmistakable.
- `::selection { background: var(--pg-gold); color: var(--pg-deep-blue) }` for text selection.

disabled:
- `opacity: 0.3; pointer-events: none; filter: grayscale(0.5)`.
- no cursor change — just visually faded.

drag:
- `opacity: 0.7; transform: scale(1.02); box-shadow: 0 12px 36px rgba(0,0,0,0.4)`.
- drop target: `border: 2px dashed var(--pg-gold)`.

**motion & feedback**

transitions:
- color/opacity transitions: `300ms ease`. this is the signature timing.
- layout transitions: `300ms ease` for width, transform, box-shadow.
- no instant snaps. everything eases gently.

loading:
- floating animation: `translateY(0) → translateY(-15px) → translateY(0)`, `ease-in-out`, 4s–6s infinite. staggered delays across elements.
- skeleton states: pulsing `opacity: 0.3 → 0.6` on cobalt backgrounds.

success:
- brief gold flash: element background flashes `var(--pg-gold)` then fades back, 600ms.
- pixel flower bloom: optional decorative SVG flower scales from 0 → 1 at the success point.

error:
- `border-color: var(--pg-red); color: var(--pg-red)`. gentle — no shaking or aggressive animation.
- error text appears with `fadeIn` (opacity 0 → 1, translateY 10px → 0), 300ms.

page enter:
- fade-in with upward drift: `opacity: 0; transform: translateY(10px)` → `opacity: 0.8; transform: translateY(0)`, staggered 1s–1.5s delays per element group.

ambient motion:
- floating pixel elements drift continuously with `ease-in-out` animations at varying speeds (4s, 5s, 6s) and staggered delays (`animation-delay: index * 800ms`). creates a living garden feel.
- parallax on mousemove: decorative elements shift position based on cursor, each at a different speed multiplier.

**atmosphere**

background:
- primary: flat `var(--pg-cobalt)` (#0044CC). saturated, confident, deep.
- grid overlay: 60px × 60px white grid at 0.08 opacity, fading via `mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 70%)` from center (opaque) to edges (transparent). creates a subtle spatial field.
- no gradients on the background itself. the blue is flat and unbroken.

textures:
- none. surfaces are clean and flat. texture comes from the pixel-art decorative elements, not from surface treatment.

overlays:
- grid is the only overlay on the main surface.
- modal backdrops use `rgba(0,0,0,0.6)` with `backdrop-filter: blur(4px)`.

ambient elements:
- floating pixel-art flowers/botanicals scattered across the viewport. rendered as SVG with `image-rendering: pixelated; shape-rendering: crispEdges`. 5–8 flowers at varying sizes (16px–40px), positions, and float speeds.
- flowers use the accent palette: gold petals, red petals, brown centers, green stems/leaves. each flower is a simple cross shape (5x5 grid: center + 4 cardinal arms of 2 rects each) or diamond (5px wide, rotated 45deg) built from `<rect>` elements on a pixel grid.
- a larger signature flower can be integrated into typography (replacing a letter or serving as a divider).
- the pixel art creates a deliberate contrast: the low-res SVG botanicals float over the high-res typography, creating visual tension between analog craft and digital precision.

depth:
- `drop-shadow` on pixel flowers: `drop-shadow(0 4px 8px rgba(0,0,0,0.3))`.
- cards/modals use `box-shadow` for elevation. maximum two depth levels.
- no blur effects on content. blur only on modal backdrops.

**editorial voice**

button labels:
- "VIEW WORKS" / "GET IN TOUCH" / "SEE ALL" / "EXPLORE" / "DOWNLOAD CV" / "SEND MESSAGE" / "LEARN MORE"
- uppercase, action-oriented, warm but professional. never aggressive. feels like a friendly invitation.

headings:
- hero: single name or phrase in italic serif at massive viewport-relative scale. lowercase or title case. elegant, personal.
- section: italic serif, 3vw–5vw, lowercase. e.g., "selected works", "about me", "let's connect"
- never all-caps for serif headings. caps are reserved for monospace labels only.

metadata:
- all caps monospace: "PORTFOLIO 2024" / "AVAILABLE FOR FREELANCE" / "BASED IN PARIS" / "JUL 2024"
- format: `LABEL — VALUE` or just `LABEL` standing alone. opacity 0.6–0.7.

placeholders:
- "your name..." / "write a message..." / "search works..."
- lowercase, ellipsis, gentle tone. monospace.

empty states:
- italic serif heading: "nothing here yet"
- monospace body: "CHECK BACK SOON — NEW WORKS ARE ALWAYS IN PROGRESS."
- optionally: a single floating pixel flower as decoration.

error messages:
- monospace uppercase: "SOMETHING WENT WRONG" / "COULD NOT SEND — PLEASE TRY AGAIN"
- no emoji, no exclamation marks. calm and factual.

success messages:
- monospace uppercase: "MESSAGE SENT SUCCESSFULLY" / "THANK YOU — I'LL BE IN TOUCH"
- warm but restrained. the gold accent color reinforces the positive state.

**cursor & selection**

cursors:
- default: `cursor: default` on body and non-interactive elements.
- links/buttons: `cursor: pointer`.
- text: `cursor: text` on input fields.
- draggable: `cursor: grab` (idle), `cursor: grabbing` (active).
- no custom cursor images.

selection:
- `::selection { background: var(--pg-gold); color: var(--pg-deep-blue) }` — gold highlight with dark blue text. unmistakable, on-brand.

**when to reach for this genome**

Use `pixel_garden.bloom` when the prompt asks for an indie artist portfolio, personal creative site, whimsical art portfolio, pixel botanical landing page, digital flower meadow, cobalt personal homepage, floating pixel-flower interface, gentle artist contact page, selected-works gallery, playful personal brand, or an indie-web surface that should feel polished and intentional rather than chaotic old-web nostalgia.

Reach for it when the user wants a saturated cobalt field, flat 60px grid overlay, Playfair Display italic hero names, Space Mono uppercase utility text, tiny pixel-art flowers built from rects, gold hover/selection states, sharp 2px card corners, portfolio labels like `PORTFOLIO 2024`, `AVAILABLE FOR FREELANCE`, `VIEW WORKS`, `GET IN TOUCH`, and soft ambient drift rather than noisy maximalism.

Do not use it for white-gallery creative-coding portfolios, shader ateliers, sparse monochrome signal/noise work, or computational artist sites; use `signal_void.cc`. Do not use it for pop-maximalist creative tools, hot-pink art playgrounds, warped grids, scalloped forms, or Bauhaus/Tokyo studio energy; use `figment_canvas.pop`. Do not use it for voxel editors, spatial creative studios, isometric module browsers, low-poly fields, or 3D WebGL geometry galleries; use `voxel_atelier.xyz`. Do not use it for GeoCities, Angelfire, tiled starfields, guestbooks, visitor counters, browser-default buttons, or unpolished 1997 homepage nostalgia; use `geocities_page.www`. Do not use it for naturalist field notebooks, botanical specimen labels, pencil sketches, cream grid paper, or pressed-flower scientific observation; use `field_journal.expedition`. Do not use it for luxury wellness/editorial softness, pastel gradient orbs, frosted cards, rose-petal surfaces, or premium lifestyle control interfaces; use `petal_editorial.soft`. Do not use it for Game Boy-style handheld hardware, green LCD constraints, cartridges, dithered sprites, or four-shade retro games; use `handheld_gb.dmg`. Do not use it for skate zines, grip tape, VX1000 footage, sticker-bombed decks, photocopied punk layouts, or Kinko's street ephemera; use `skatepark_zine.grip`.

It is strongest when the product is a personal creative presence: browse works, read an artist statement, contact the maker, download a CV, show availability, or float through a calm digital garden. If the prompt centers on software tools, old-web chaos, scientific botanical records, luxury brand softness, retro gaming hardware, or punk zine grit, choose another genome.

**anti-patterns — this genome NEVER:**

1. never uses border-radius greater than 2px. no rounded corners, no pills, no circles for containers. pixel art is rectilinear; so is everything else.
2. never uses sans-serif typefaces. only monospace (Space Mono) and italic serif (Playfair Display). the tension between these two families is the entire typographic identity.
3. never uses gradients on surfaces or backgrounds. the cobalt is flat. depth comes from shadow and opacity, not from color blending.
4. never uses light/white backgrounds. every surface is a shade of blue (#0044CC or darker). the genome lives in its saturated cobalt world.
5. never uses outline or line icons. if iconography is needed, it is pixel-art SVG built from small rectangles — the same visual language as the decorative flowers.
6. never uses photography or raster images for decoration. all decorative elements are vector pixel art. content images (portfolio pieces) are acceptable but framed within the blue field.
7. never uses aggressive or loud interaction patterns — no shaking, no bouncing error states, no confetti. motion is always gentle: floating, drifting, fading. the garden is calm.
8. never uses more than two levels of depth/elevation. flat cobalt → card surface → modal. no stacked layers, no floating toolbars, no nested shadows.
9. never uses serif type at small sizes. Playfair Display is reserved for display/heading use (minimum 24px / 3vw). all small text is monospace.
10. never breaks the grid overlay pattern. the 60px grid is always present as an ambient texture. it may fade at edges but is never replaced with a different pattern or removed entirely.
