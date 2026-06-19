---
id: "99"
name: seed_packet.plot
keywords:
  - garden
  - seed
  - planting
  - botanical
  - greenhouse
  - harvest
  - soil
  - bloom
  - packet
  - horticulture
  - grow
  - seasonal
  - potting
---

### genome 99: `seed_packet.plot`

> identity: Garden catalog and seed packet design. Woodcut botanical illustrations, planting zone charts, soil color bands, kraft paper packaging, hand-colored plate reproductions. Burpee seed catalogs, RHS planting guides, Victory Garden posters, kitchen garden markers stuck in the soil. The potting shed shelf full of labeled seed packets and hand-drawn planting calendars. Different from herbarium (genome 73) which is pressed scientific specimens in a research collection — this is commercial horticultural design, colorful and aspirational, meant to make you want to grow things.

---

## surface

Colors:
- `--kraft: #C8A96E` — kraft paper packaging, the primary container surface
- `--soil: #4A3728` — rich dark soil brown, primary text and grounding anchors
- `--leaf-green: #3D8B37` — healthy leaf green, primary accent and success tone
- `--tomato: #CC3B2A` — ripe tomato red, alert, danger, and high-emphasis accent
- `--sunflower: #F2B830` — sunflower yellow, warmth, highlights, and secondary accent
- `--sky: #5BA4D9` — clear sky blue, links, planting zone indicators, information
- `--seed-cream: #FAF5E8` — seed packet interior cream, primary background
- `--terracotta: #B8613A` — terracotta pot accent, warm mid-tone, decorative borders
- `--packet-shadow: #E8DFC8` — slightly darker cream, card edges and inner panels
- `--pencil-row: #D6CDB8` — pencil-row ruled lines, subtle grid on planting calendars

Typography:
- Body/descriptions: `"Libre Baskerville", "Georgia", serif` at `font-weight: 400; font-size: 14px; line-height: 1.65; color: var(--soil)`. Warm and readable — the text block on the back of a seed packet.
- Headings: `"Libre Baskerville", "Georgia", serif` at `font-weight: 700; font-size: 20-32px; line-height: 1.2; color: var(--soil)`. Bold but friendly, not institutional.
- Data tables (planting zones, spacing, days to harvest): `"DM Sans", "Inter", sans-serif` at `font-weight: 400; font-size: 12-13px; line-height: 1.5; letter-spacing: 0.01em; color: var(--soil)`. Clean legibility for compact zone/spacing grids.
- Caption/variety names: `"Libre Baskerville", "Georgia", serif` at `font-style: italic; font-size: 13px; color: var(--terracotta)`. The cultivar name beneath the illustration.
- Display/packet titles: `"Playfair Display", "Libre Baskerville", serif` at `font-weight: 700; font-size: 36-52px; letter-spacing: -0.01em; color: var(--soil)`. Large, proud, seed-catalog cover energy.
- Meta labels (zone, spacing, depth): `"DM Sans", "Inter", sans-serif` at `font-weight: 600; font-size: 11px; letter-spacing: 0.07em; text-transform: uppercase; color: var(--terracotta)`.
- No all-caps on body copy — uppercase only for compact meta labels and zone designations.

Borders:
- `1.5px solid var(--kraft)` — primary structural border, kraft paper edge on cards and packets.
- `1px solid var(--packet-shadow)` — inner panel dividers, subtle rules inside cards.
- `2px solid var(--terracotta)` — accent border on featured/header elements, the decorative band on a seed packet header.
- `border-radius: 6px` — default for cards, inputs, and most elements. Soft packet corners.
- `border-radius: 8px` — primary buttons and featured cards.
- `border-radius: 3px` — compact badges and table cells.
- No `border-radius: 0` except on horizontal rule dividers. Kraft paper has softly cut edges.

Spacing: Compact but breathable — a well-designed seed packet fits a lot on a small surface without feeling cramped. `padding: 16-28px; gap: 12-20px`. Data tables tighter: `padding: 8px 12px`. Primary layout containers: `padding: 24px 32px`. Display sections: `padding: 32-40px`.

---

## color distribution

- 45% seed-cream/packet-shadow — primary background, the inside of the packet and the catalog page
- 20% soil — primary text, grounding structure, dark accents
- 12% kraft — card borders, packet outer surface, the paper itself
- 8% leaf-green — interactive accents, success states, botanical highlights
- 6% terracotta — warm secondary accents, meta labels, decorative bands
- 5% sunflower — warm highlights, featured callouts, zone-warmth indicators
- 4% sky — links, zone maps, informational elements

---

## component patterns

Buttons: seed packet label style — friendly, earthy, action-oriented.
- Primary: `background: var(--leaf-green); color: var(--seed-cream); border: 1.5px solid var(--leaf-green); border-radius: 8px; font-family: "DM Sans", sans-serif; font-weight: 600; font-size: 14px; letter-spacing: 0.02em; padding: 10px 24px; transition: background 0.2s ease, box-shadow 0.2s ease`.
- Secondary: `background: var(--seed-cream); color: var(--soil); border: 1.5px solid var(--kraft); border-radius: 8px; font-family: "DM Sans", sans-serif; font-weight: 500; font-size: 14px; padding: 10px 24px`.
- Tertiary/ghost: `background: transparent; color: var(--leaf-green); border: 1.5px solid var(--leaf-green); border-radius: 8px; padding: 10px 24px`.
- Danger: `background: var(--tomato); color: var(--seed-cream); border: 1.5px solid var(--tomato); border-radius: 8px; padding: 10px 24px`.
- No bold shadows. Flat with a very subtle lift on hover.

Inputs: hand-filled catalog form — soil-toned field entries.
- `background: var(--seed-cream); border: 1.5px solid var(--packet-shadow); border-radius: 6px; color: var(--soil); font-family: "Libre Baskerville", "Georgia", serif; font-size: 14px; padding: 10px 14px; transition: border-color 0.2s ease`.
- Focus: `border-color: var(--leaf-green); box-shadow: 0 0 0 3px rgba(61, 139, 55, 0.12); outline: none`. The field comes alive with garden-green focus ring.
- Placeholder: `color: var(--pencil-row); font-style: italic`. Pencil-light suggestion before you write.

Cards: seed packet face — the front of the packet.
- `background: var(--seed-cream); border: 1.5px solid var(--kraft); border-radius: 6px; padding: 20px 24px; box-shadow: 0 2px 6px rgba(74, 55, 40, 0.08)`.
- Top accent band: a `4px` solid bar of `var(--terracotta)` at the top edge, inset flush — `border-top: 4px solid var(--terracotta); border-radius: 6px 6px 0 0` on a pseudo-element. This is the colored variety-band at the top of a real seed packet.
- Card header: large variety name in display serif. Cultivar/subtype in italic below.
- Data grid at card base: `background: var(--packet-shadow); border-top: 1px solid var(--kraft); border-radius: 0 0 6px 6px; padding: 10px 16px`. Compact planting data in DM Sans — Zone, Days, Depth, Spacing in a tight row.
- Featured/catalog card variant: `background: var(--seed-cream); border: 2px solid var(--terracotta); border-radius: 8px; padding: 28px 32px`.

Navigation: planting guide tab index.
- Horizontal tabs: `border-bottom: 2px solid var(--packet-shadow); padding: 0`. Each tab: `font-family: "DM Sans", sans-serif; font-weight: 500; font-size: 14px; color: var(--kraft); padding: 10px 20px; border-bottom: 2px solid transparent; margin-bottom: -2px; transition: color 0.2s, border-color 0.2s`.
- Active: `color: var(--soil); border-bottom-color: var(--leaf-green)`.
- Hover: `color: var(--soil)`.
- Sidebar variant: each item `font-family: "DM Sans", sans-serif; font-size: 13px; color: var(--soil); padding: 9px 16px; border-left: 3px solid transparent`. Active: `border-left-color: var(--leaf-green); background: var(--packet-shadow); font-weight: 600`.

Headers: catalog cover / potting shed shelf label.
- `background: var(--seed-cream); border-bottom: 2px solid var(--terracotta); padding: 20px 32px; display: flex; align-items: center; gap: 24px`.
- Brand/title in Playfair Display at 28-32px, soil-colored.
- Season indicator in DM Sans uppercase at 11px, terracotta — "SPRING CATALOG", "KITCHEN GARDEN EDITION".
- Optional soil-band accent: a narrow `6px` strip of `var(--soil)` color across the very top of the header, like the dark band on period seed catalogs.

Footers:
- `background: var(--kraft); border-top: 1.5px solid var(--terracotta); padding: 20px 32px; color: var(--seed-cream); font-family: "DM Sans", sans-serif; font-size: 12px; font-weight: 400; letter-spacing: 0.02em`.
- Links in footer: `color: var(--sunflower)`.

Lists: seed catalog variety listings.
- `list-style: none; padding: 0`. Each item: `border-bottom: 1px solid var(--packet-shadow); padding: 12px 0; display: flex; align-items: baseline; gap: 12px`.
- Leading marker: a small filled circle `●` in `var(--leaf-green)` at 6px — a seed dot.
- Variety name in body serif, bold. Days to harvest in DM Sans, `color: var(--terracotta)`, trailing.
- Last item: `border-bottom: none`.

Tables: planting zone and spacing charts.
- `border: 1px solid var(--packet-shadow); border-radius: 6px; overflow: hidden; border-collapse: collapse; width: 100%`.
- Header: `background: var(--soil); color: var(--seed-cream); font-family: "DM Sans", sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 0.07em; text-transform: uppercase; padding: 9px 12px`.
- Body rows: `background: var(--seed-cream)`. Alternating rows: `background: var(--packet-shadow)`.
- Cell: `border: 1px solid var(--packet-shadow); padding: 8px 12px; font-family: "DM Sans", sans-serif; font-size: 13px; color: var(--soil)`.
- Zone indicator cells: small pill badge with zone-specific color coding — zone 3-5 uses `var(--sky)`, zone 6-9 uses `var(--leaf-green)`, zone 10+ uses `var(--sunflower)`.

Dividers: pencil-ruled rows, like the pre-printed lines on a planting calendar.
- Primary: `border-top: 1px solid var(--pencil-row); margin: 20px 0`.
- Accent: `border-top: 2px solid var(--kraft); margin: 24px 0`.
- Section: a short centered ornament — a small sprig glyph (✦ or ❧) in `var(--terracotta)` centered over a `1px solid var(--kraft)` line, via `::before/::after` pseudo-elements.

Modals: germination tray overlay — close inspection of a single variety.
- `background: var(--seed-cream); border: 1.5px solid var(--kraft); border-radius: 8px; padding: 32px 36px; box-shadow: 0 8px 32px rgba(74, 55, 40, 0.15)`.
- Backdrop: `background: rgba(74, 55, 40, 0.35)`. Rich soil-brown dimming.
- Title in Playfair Display at 28px, soil-colored. Close button: `×` in terracotta.
- Optional: top accent band in `var(--leaf-green)` — `border-top: 4px solid var(--leaf-green); border-radius: 8px 8px 0 0`.

Badges: seed packet category labels and variety tags.
- Category: `background: var(--leaf-green); color: var(--seed-cream); border-radius: 3px; font-family: "DM Sans", sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; padding: 3px 8px`. Used for VEGETABLE, ANNUAL, PERENNIAL, HERB.
- Heirloom/featured: `background: var(--sunflower); color: var(--soil); border-radius: 3px; font-size: 11px; padding: 3px 8px`.
- Outline/neutral: `background: transparent; color: var(--terracotta); border: 1px solid var(--terracotta); border-radius: 3px; font-size: 11px; padding: 3px 8px`. For companion planting notes.
- Alert: `background: var(--tomato); color: var(--seed-cream); border-radius: 3px`. For frost-sensitive, deer-resistant, or restricted variety warnings.

Planting calendar: the hand-drawn monthly sow/harvest chart.
- A grid of 12 columns (months) × N rows (varieties). Columns thin: `min-width: 40px`. Row height: `36px`.
- Header row: month abbreviations in DM Sans uppercase, 10px, `color: var(--terracotta)`, `background: var(--packet-shadow)`.
- Sow window: filled cell `background: var(--sunflower); border-radius: 3px; margin: 2px`.
- Transplant window: `background: var(--leaf-green)`.
- Harvest window: `background: var(--tomato)`.
- Outside-season cells: `background: transparent`.
- Grid lines: `1px solid var(--pencil-row)`.

---

## interaction language

- Hover: warm and welcoming — cards gain subtle lift `transform: translateY(-2px); box-shadow: 0 4px 12px rgba(74, 55, 40, 0.12); transition: all 0.2s ease`. Buttons warm slightly: `background` deepens by one tone. Links: `color: var(--soil); text-decoration-color: var(--leaf-green)`.
- Active: gentle press into the soil — `transform: translateY(0); box-shadow: 0 1px 4px rgba(74, 55, 40, 0.08)`. Button: `background` momentarily darkens. The satisfying press of a garden marker into soft earth.
- Focus: `outline: 2px solid var(--leaf-green); outline-offset: 3px; border-radius: 6px`. Clean garden-green focus ring. No glow blur — sharp and clear as a garden line.
- Selected: `background: var(--packet-shadow); border-left: 3px solid var(--leaf-green)`. Like a seed packet pulled from the shelf and held open.
- Disabled: `opacity: 0.45; pointer-events: none; filter: saturate(0.4)`. A seed packet past its germination date — faded, dormant.
- Drag: `transform: translateY(-4px) rotate(-1.5deg); box-shadow: 0 8px 24px rgba(74, 55, 40, 0.16); cursor: grabbing`. Like lifting a labeled marker from the soil and repositioning it.

---

## motion & feedback

Near-static, like a printed packet. Motion is used sparingly and only to confirm life — germination, not animation for its own sake.

Transitions: `0.2s ease` on color, box-shadow, and transform for interactive elements. No spring physics, no bounce, no overshooting. Gentle and resolved.

Loading: three small circles pulsing in sequence — sized at 6px diameter, colored `var(--leaf-green)`, staggered 0.2s each — `animation: seed-pulse 1.2s ease-in-out infinite`. Like three seeds swelling before sprout. No spinning spinners.

```css
@keyframes seed-pulse {
  0%, 80%, 100% { transform: scale(1); opacity: 0.5; }
  40% { transform: scale(1.4); opacity: 1; }
}
```

Success: a gentle grow-in — the success element enters with `transform: scale(0.92); opacity: 0` and blooms to `scale(1); opacity: 1` over `0.35s ease-out`. Like a seedling emerging from soil. Leaf-green checkmark, brief and clean.

```css
@keyframes seed-bloom {
  from { transform: scale(0.92); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}
```

Error: element border briefly flushes `var(--tomato)` for 0.4s then returns to kraft. A short, single pulse — no shake, no repeat. Text appears in tomato immediately.

Page enter: elements settle in from `opacity: 0; transform: translateY(6px)` to resting state — `0.3s ease-out`, staggered 40ms per element. Like laying out seed packets on the potting shed bench, one at a time.

---

## atmosphere

The ground of the experience is seed-cream — warm, slightly off-white, like the interior paper of a Burpee packet. No pure white.

```css
background-color: var(--seed-cream);
```

The kraft color appears at card edges and structural borders — the paper packaging itself. The terracotta accent band at card tops and borders is the colored variety stripe that distinguishes vegetable from flower from herb. The soil color grounds all text with earthy, warm darkness — never pure black.

A subtle paper texture can be approximated with:

```css
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23FAF5E8'/%3E%3Ccircle cx='1' cy='1' r='0.4' fill='%23E8DFC8' opacity='0.5'/%3E%3C/svg%3E");
```

Or left as flat seed-cream — the color carries the identity without grain overlay.

The planting zone chart and calendar grid are the signature structural elements — thin pencil-row ruled lines creating a quiet grid that evokes hand-drawn planting calendars pinned above a potting bench. These are `1px solid var(--pencil-row)` borders on table cells and list rows.

The top accent band on cards — a 4px bar of terracotta or leaf-green — is the genome's visual signature, lifted directly from real seed packet design where a colored band identifies the variety type. Implemented as:

```css
.card::before {
  content: "";
  display: block;
  height: 4px;
  background: var(--terracotta);
  border-radius: 6px 6px 0 0;
  margin: -20px -24px 16px -24px;
}
```

No gradients on backgrounds. No glassmorphism. No dramatic shadows. The potting shed is lit by a single window — warm, even, unhurried.

---

## editorial voice

Horticultural and aspirational — the voice of a good seed catalog: informative, encouraging, seasonal. You're making someone want to grow something.

- Button labels: "Sow Now", "Add to Plot", "View Variety", "Plan My Garden", "Harvest Guide", "Browse Catalog", "Save to Bed", "Compare Varieties".
- Headings: evocative and useful — "Heirloom Tomatoes", "Spring Sowing Guide", "Your Planting Calendar", "What to Grow This Season", "Kitchen Garden Essentials", "Days to First Harvest", "Companion Planting Guide".
- Metadata: "Sow: March–May", "Harvest: 75–85 days", "Depth: ½ inch", "Spacing: 18 in.", "Zones: 4–9", "Sun: Full sun", "Height: 36–48 in.", "Packet: 30 seeds".
- Placeholders: "Search varieties...", "Enter your hardiness zone...", "Filter by days to harvest...", "Name this planting bed...".
- Empty states: "Nothing sown here yet. Add a variety to start your plot.", "Your planting calendar is empty — the season awaits.", "No varieties in this bed. Browse the catalog to begin.".
- Error: "This variety couldn't be added. Please try again.", "Your zone couldn't be determined. Enter it manually.", "Something went to seed — please refresh and try again.".
- Success: "Added to your plot.", "Variety saved.", "Planting date recorded.", "Your bed is ready to sow.".
- Dates: natural seasonal format — "Sow by 15 April", "Harvest from late August", "Last frost: 12 May (est.)".

---

## cursor & selection

- Default: `cursor: default` on static content and surfaces.
- Interactive elements: `cursor: pointer` on buttons, cards, nav items, links.
- Text input areas: `cursor: text`.
- Draggable garden markers and calendar rows: `cursor: grab` / `cursor: grabbing`.
- `::selection { background: rgba(61, 139, 55, 0.22); color: var(--soil); }` — leaf-green highlight, like a fluorescent marking pen on kraft paper.
- No custom cursor images. Clean and purposeful.

---

**when to reach for this genome**

Use `seed_packet.plot` when the prompt asks for seed packets, garden catalogs, kitchen-garden planning, planting calendars, variety cards, greenhouse retail, soil/harvest dashboards, hardiness-zone tools, or any horticultural product that should feel like commercial seed packaging and a potting-shed planning guide.

Reach for it when the visual/product cues are kraft paper, seed-cream packet interiors, Playfair or Baskerville variety names, botanical illustrations, terracotta packet bands, leaf-green actions, sunflower sowing windows, sky-blue zone indicators, planting-depth/spacing/days-to-harvest data, monthly sow/transplant/harvest charts, category tags like `VEGETABLE` or `HEIRLOOM`, and copy such as `Sow: March-May`, `Zones: 4-9`, `Packet: 30 seeds`, `Add to Plot`, or `Sow Now`. It is strongest when the user is choosing what to plant, planning when to sow, comparing varieties, tracking beds, or turning catalog aspiration into a garden plot.

Choose it for seed-commerce pages, gardening apps, planting calendars, variety comparison tools, greenhouse inventory, community garden planning, seasonal grow guides, and warm horticultural dashboards where the primary objects are packets, beds, zones, dates, spacing, harvest windows, and cultivar metadata.

Do not choose it for institutional pressed specimens, accession numbers, Latin taxonomy sheets, mounting corners, or zero-motion botanical archives; use `herbarium_plate.specimen`. Do not use it for handmade naturalist scrapbooks, torn paper, taped photos, birdwatching notes, or personal field observations; use `nature_folio.craft`. Do not use it for herbal medicine, tinctures, amber bottles, dosage labels, or Victorian pharmacy commerce; use `apothecary_label.rx`. Do not use it for scientific field notebooks, topographic observations, expedition logs, or graph-paper ecology notes; use `field_journal.expedition`. Do not use it for pixel-art gardens, game-like flower grids, or saturated cobalt/pixel bloom motifs; use `pixel_garden.bloom`.

---

## anti-patterns — this genome NEVER:

1. uses pure white (#FFFFFF) or pure black (#000000). Backgrounds are always seed-cream (#FAF5E8). Text is always soil-brown (#4A3728). Cold whites and pure blacks belong in a laboratory, not a potting shed.
2. uses dramatic animation, spring physics, or decorative motion. Motion is seed-bloom slow — a single gentle ease-in on success states. All other transitions are `0.2s ease` maximum. The packet is printed; it does not dance.
3. uses glassmorphism, blur, backdrop-filter, or frosted-glass effects. The surface is kraft paper and cream stock. It does not transmit light. No `backdrop-filter`, no `rgba` transparency panels.
4. uses gradients as background fills. The palette is flat, warm, and matte — the look of offset-printed catalog pages. No `linear-gradient` or `radial-gradient` on card or section backgrounds.
5. uses cold or desaturated colors. Every color is warm — grounded in soil, leaf, sun, terracotta, and sky. No grays, no cool blues, no neutrals that read as tech-interface. Even the sky color (#5BA4D9) is a warm, sunny-day blue, not a cold corporate one.
6. uses sans-serif as the primary display or body typeface. Libre Baskerville and Playfair Display carry the catalog voice. DM Sans is reserved strictly for data — planting tables, zone charts, and compact meta labels. No page-level headings in sans-serif.
7. uses border-radius above 8px on cards or containers. Seed packets have soft corners, not pill shapes or circles. `border-radius: 6-8px` maximum on all structural elements.
8. uses heavy, dramatic box-shadows or deep drop shadows. The catalog is printed flat. Shadows are limited to `0 2px 6px rgba(74, 55, 40, 0.08)` at rest — just enough to lift a card off the page, no more.
9. uses tech-startup, SaaS, or urgency-driven language. No "Get Started!", "Boost your yield!", "Free trial". The voice is patient and seasonal — sowing time is not a conversion funnel. "Sow Now" is the most urgent the copy ever gets.
10. uses icon libraries or emoji in place of typographic or botanical ornament. Decorative marks use typographic glyphs (✦, ❧, ●) or inline SVG botanical elements. No Heroicons, no Lucide, no 🌱 emoji in the UI.
