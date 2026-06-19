---
id: "59"
name: mosaic_signal.data
keywords:
  - mosaic
  - dataset
  - structured
  - intelligence
  - editorial
  - serif
  - warm paper
  - data platform
  - SaaS
  - japanese
  - modernist
  - color blocking
---

### genome 59: `mosaic_signal.data`

> identity: editorial data intelligence. Japanese modernist composition meets premium SaaS — warm uncoated paper, serif+sans typography pairing, bold geometric color-block shapes, structured grid layouts with 1px cell borders, and quiet authority. a data company's annual report designed by a Tokyo-trained Swiss typographer.

**surface**

colors:
```
--paper: #F1EADD;           /* warm uncoated stock */
--ink: #2B3B48;              /* desaturated dark slate — primary text */
--sky: #175C88;              /* deep cerulean — hero surfaces, primary brand */
--coral: #CE5A48;            /* burnt coral — accent, action, warmth signal */
--forest: #10362A;           /* deep forest green — footer, grounding surfaces */
--sand: #D5C4A1;             /* warm sand — secondary surface, section alternation */
--line-ink: rgba(43, 59, 72, 0.2);    /* structural rules on light surfaces */
--line-paper: rgba(241, 234, 221, 0.25); /* structural rules on dark/colored surfaces */
--ink-muted: rgba(43, 59, 72, 0.6);  /* secondary text, metadata */
```

typography:
- display/headings: `'Newsreader', 'Times New Roman', serif` — weight 200–500, `font-size: clamp(4rem, 8vw, 9rem)` for hero, `2–3rem` for section titles, `line-height: 0.95`, `letter-spacing: -0.03em` on hero, `-0.02em` on section titles. sentence case, never uppercase on display type.
- body/data: `'Inter', -apple-system, sans-serif` — weight 400–600, `0.8–1rem` body, `0.65–0.75rem` labels and metadata, `line-height: 1.5`, `letter-spacing: 0` body, `0.05–0.1em` on uppercase labels.
- labels/micro: sans, weight 500–600, `font-size: 0.65rem`, `text-transform: uppercase`, `letter-spacing: 0.08–0.1em`. used for nav links, category tags, announcement bars, footer column titles.
- the serif is for presence and editorial weight (headlines, quotes, brand marks, table titles). the sans is for precision and data (body, labels, buttons, metadata). never mix their roles.

borders:
- all borders: `1px solid var(--line-ink)` on paper/sand surfaces, `1px solid var(--line-paper)` on sky/forest surfaces.
- `border-radius: 0px` everywhere — no exceptions. all corners are sharp.
- no box-shadow anywhere. no elevation simulation. depth comes from color-block stacking, not shadow.

spacing:
- outer section padding: `5rem` vertical (`--space-lg`), `2.5rem` horizontal (`--space-md`).
- cell/card padding: `2.5rem`.
- compact cell padding: `0.5–1rem`.
- gap rhythm: `0.5rem` (xs), `1rem` (sm), `2.5rem` (md), `5rem` (lg), `12vh` (xl — hero vertical).
- generous vertical whitespace between sections. tight horizontal grid cells.

**color distribution**

- 35% paper (`--paper`) — primary light surface, testimonials, logo bar
- 25% sky (`--sky`) — hero environment, primary brand surface. always paired with paper-colored text.
- 15% sand (`--sand`) — secondary warm surface for alternating sections (blog/research)
- 10% forest (`--forest`) — footer, grounding dark surface
- 10% ink (`--ink`) — text on light surfaces, announcement bar background
- 5% coral (`--coral`) — geometric accent shapes, hover states, selection highlight, company names in testimonials

the three colored surfaces (sky, forest, coral) appear as full-bleed architectural blocks, never as small UI accents. coral is the only color that appears at small scale (inline text accents, hover states, geometric shapes). the genome's signature is a single bold geometric shape (rounded on one edge, filling 60–80% of the hero viewport) in coral, floating over the sky surface.

**component patterns**

buttons:
- primary: `background: var(--paper); color: var(--sky); padding: 8px 16px; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; border: none`. hover: `background: var(--coral); color: var(--paper)`.
- outline: `background: transparent; color: var(--paper); border: 1px solid var(--paper); padding: 8px 16px`. hover: `background: var(--paper); color: var(--sky)`.
- never pill-shaped, never rounded. no icons inside buttons.

inputs:
- `border-bottom: 1px solid var(--ink)` only — no full border box. `background: transparent; padding: 10px 0; font-family: var(--font-sans); font-size: 0.85rem`.
- label above in sans, uppercase, `0.65rem`, `letter-spacing: 0.08em`.
- focus: `border-bottom: 2px solid var(--sky)`.
- placeholder: `color: var(--ink-muted); font-style: normal`.

cards/panels:
- testimonial cells: `padding: 5rem 2.5rem; border-right: 1px solid var(--line-ink); border-bottom: 1px solid var(--line-ink)`. quote text in serif `2rem`, line-height 1.1, letter-spacing -0.02em. attribution below in sans uppercase `0.65rem`.
- logo cells: `padding: 2.5rem 1rem; border-right: 1px solid var(--line-ink)`. centered serif text at `1.1rem`, `opacity: 0.6`. grid-based, equal columns.

navigation:
- horizontal flex: `justify-content: space-between; padding: 1rem 2.5rem; border-bottom: 1px solid var(--line-paper)`.
- brand left in serif, `1.5rem`, weight 500, `letter-spacing: -0.02em`.
- links in sans, `0.75rem`, uppercase, `letter-spacing: 0.05em`, weight 500. `gap: 2.5rem`.
- CTA button right (outline variant on dark backgrounds).
- `backdrop-filter: blur(4px)` when sticky over colored hero.

headers/hero:
- full-viewport colored environment (`min-height: 100vh; background: var(--sky)`).
- small label pill: `border: 1px solid var(--line-paper); padding: 4px 12px; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em`.
- headline in serif at maximum scale (`clamp(4rem, 8vw, 9rem)`), weight 400, `line-height: 0.95`. paper-colored text with subtle text-shadow for depth.
- subtext in sans, `1rem`, `max-width: 32ch`, `opacity: 0.9`.
- geometric background shape: a single oversized element (coral-colored, `border-top-left-radius: 100%` on one corner only, filling 60–80% of viewport) creates compositional tension. this shape is architectural, not decorative.

footers:
- `background: var(--forest); color: var(--sand); padding: 5rem 2.5rem 2.5rem`.
- grid layout: `2fr 1fr 1fr 1fr` columns.
- brand column: serif brand name at `2rem`, paper-colored. description in sans `0.8rem`, `opacity: 0.8`, `max-width: 30ch`.
- link columns: title in sans uppercase `0.65rem`, `letter-spacing: 0.1em`, paper-colored, weight 600. links in sans `0.8rem`, `opacity: 0.8`, `gap: 8px`.
- bottom bar: `border-top: 1px solid rgba(213, 196, 161, 0.2); padding-top: 2.5rem; font-size: 0.7rem; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em`. flex between copyright and status.

lists:
- no bullet points. each item is a row separated by `1px solid var(--line-ink)`. label left in sans, value right-aligned. hover: `color: var(--coral); padding-left: 8px` shift.

tables:
- full-width, `border-collapse: collapse; text-align: left`.
- header row: sans `0.65rem`, uppercase, `letter-spacing: 0.1em`, weight 500, `opacity: 0.7`. `border-bottom: 1px solid var(--ink)`.
- data rows: `padding: 2.5rem 0; border-bottom: 1px solid var(--line-ink)`.
- date column: sans `0.8rem`. category column: sans `0.7rem`, uppercase, `letter-spacing: 0.05em`. title column: serif `1.5rem`, `letter-spacing: -0.01em`.
- row hover: `color: var(--coral); padding-left: 8px; transition: all 0.2s ease`.

dividers:
- `1px solid var(--line-ink)` on light surfaces. `1px solid var(--line-paper)` on dark surfaces. no thick rules, no dashed, no dotted.

modals/overlays:
- `background: var(--paper); border: 1px solid var(--line-ink); padding: 2.5rem`. no border-radius. title in serif `2rem`. content sections separated by `border-top: 1px solid var(--line-ink)`. no shadow. no backdrop blur — a translucent `rgba(43, 59, 72, 0.4)` overlay behind.

badges/tags:
- inline sans text, `0.65rem`, uppercase, `letter-spacing: 0.1em`. no background fill, no border. coral-colored for company/brand names. ink-muted for secondary metadata.

announcement bar:
- `background: var(--ink); color: var(--paper); font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.08em; text-align: center; padding: 0.5rem 1rem; font-weight: 500`. always at very top of page.

**interaction language**

- hover: links and interactive text fade to `opacity: 0.6` with `transition: opacity 0.2s ease`. table rows shift `padding-left: 8px` and change `color: var(--coral)`. buttons swap background/foreground colors. nav items fade to `opacity: 0.6`.
- active/pressed: `opacity: 0.4`. no transform, no scale.
- focus: `outline: 2px solid var(--sky); outline-offset: 2px`. no glow, no shadow.
- selected: persistent `background: rgba(23, 92, 136, 0.08)`. text gains `font-weight: 600`.
- disabled: `opacity: 0.3; pointer-events: none`. no strikethrough, no graying.
- drag: `cursor: grab` → `cursor: grabbing`. `outline: 1px dashed var(--line-ink)`.

**motion & feedback**

transitions: `0.2s ease` on opacity, background-color, color, padding. transitions are quiet and functional — they confirm interaction, not celebrate it. no spring physics, no bounce, no overshoot.

loading: announcement bar text pulses `opacity: 0.4 → 1` over 1.2s. skeleton rows use `background: var(--sand)` with gentle opacity pulse. serif text appears: *"Retrieving signal..."*

success: a thin `1px` horizontal rule draws across the container width over 0.3s in coral. confirmation text in sans: "Signal received." then the rule fades to ink color.

error: the affected element gains `border-left: 3px solid var(--coral)`. error text in sans: "Could not resolve this request." — no exclamation marks, no urgency.

**atmosphere**

background: flat `var(--paper)` (#F1EADD). no texture simulation, no grain, no noise. the warmth of the paper tone itself provides atmosphere — it evokes uncoated premium stock without mimicking it.

color-block architecture: the hero viewport is a full-bleed sky environment with a single massive coral geometric form (rounded on one corner, sharp on others) filling the lower-right quadrant. this compositional device — asymmetric color mass against colored field — is the genome's signature atmospheric element. inspired by Japanese modernist poster design: bold, minimal, architectural.

cloud lines: thin horizontal `1px` lines at `var(--line-paper)` opacity span partially across the hero at staggered positions (25%, 40%, 55%, 75% from top), creating subtle horizontal rhythm against the vertical color mass. these are decorative but restrained.

section alternation: paper → sand → paper creates gentle warmth oscillation without contrast shock. the forest footer grounds the entire composition with a dark anchor.

no ambient animations. no particle effects. no floating elements. the page is still and composed — atmosphere comes from color temperature, typographic scale contrast, and geometric tension.

**editorial voice**

button labels: uppercase, imperative, concise — "Explore Datasets", "Start Building", "View Research", "Get Started", "Download Report", "Request Access". no clever wordplay, no emoji.

headings: serif, sentence case (only first word capitalized), dramatic, often with line breaks for typographic effect. punctuation is intentional — periods and commas used as compositional tools:
- "Truth,\nextraced."
- "Research & Updates"
- "Signal, refined."
- "Structure at scale."
max two lines. line breaks create visual hierarchy, not reading flow.

metadata: dates in `Mon DD, YYYY` format ("Oct 12, 2023"). categories as single uppercase words ("Research", "Product", "Engineering", "Case Study"). statuses in sentence case. version numbers as "v2.0". no parenthetical formatting.

placeholders: sans, sentence case — "Search datasets...", "Enter your email", "Filter by category". no conversational tone.

empty states: serif italic centered — *"No results match your criteria."* followed by sans link: "clear filters"

error messages: sans, observational — "This dataset could not be loaded." or "Request timed out. Try again." no apologies, no exclamation marks. errors are facts.

success messages: sans, brief — "Dataset exported.", "Access granted.", "Subscription confirmed." — factual, no celebration.

**cursor & selection**

- default: `cursor: default`
- interactive elements (links, buttons, table rows): `cursor: pointer`
- inputs: `cursor: text`
- disabled: `cursor: not-allowed`
- `::selection { background: var(--coral); color: var(--paper); }` — warm coral highlight, high contrast against paper

**when to reach for this genome**

Use `mosaic_signal.data` when the prompt asks for a premium data platform, research company site, SaaS intelligence product, dataset marketplace, annual report, data-company editorial landing page, structured case-study hub, or public-facing analytics brand that should feel like Japanese modernist composition applied to business intelligence.

Reach for it when the visual cues are warm uncoated paper, serif display headlines, Inter-like sans data labels, sharp 1px grid cells, full-bleed sky or forest color blocks, a single oversized coral geometric form, sand section alternation, testimonial/report cells, logo grids, research tables, dataset CTAs, and measured copy such as "Explore Datasets", "Download Report", "Signal, refined.", or "Structure at scale."

Do not choose it for highlighter-green live journalism, election forecasts, polling models, public probability charts, or newspaper-like real-time analysis; use `signal_broadsheet.live`. Do not choose it for cool Swiss institutional finance, audit packets, gray report fields, Helvetica grids, outlined display numerals, or vertical edge labels; use `structured_folio.swiss`. Do not choose it for dark Bloomberg-like macro research, private-credit wires, black/red split panes, AUM figures, or severe market intelligence; use `institutional_wire.macro`. Do not choose it for blue-ink question-led analysis, ivory inquiry frames, interrogative labels, or cultural-research dashboards that ask questions before conclusions; use `editorial_inquiry.rev`. Do not choose it for developer architecture grids, embedded terminal blocks, Vercel/Notion/GitHub restraint, or technical docs platforms; use `kernel_grid.dev`. Do not choose it for generic polished SaaS with soft rounded cards, pill nav, chartreuse/violet accents, and app-store professionalism; use `modern_studio.pro`.

It is strongest when brand, publication, and data credibility all matter at once. If the prompt is mainly an internal dashboard, live operations desk, or finance terminal, route to a more operational genome instead.

**anti-patterns — this genome NEVER:**

1. uses border-radius greater than 0px on UI elements (buttons, cards, inputs, modals, badges) — the only exception is a single hero-scale geometric shape which may use a large radius on ONE corner for compositional effect
2. uses box-shadow, drop-shadow, or elevation simulation — depth comes from color-block layering and border structure, never from shadow
3. uses gradient fills or gradient text — all surfaces are flat solid colors
4. uses monospace or pixel typefaces — typography is exclusively Newsreader (serif) and Inter (sans-serif), cleanly paired
5. uses playful, exclamatory, or conversational language — the voice is measured, authoritative, and observational. no emoji, no exclamation marks, no slang
6. uses more than one geometric background shape per viewport — the single bold form is the signature; multiples would dilute the compositional tension
7. uses icons, illustrations, or pictographic elements in navigation or buttons — all communication is typographic. logo partner names are set in serif text, not logo images
8. uses dark mode as default — the warm paper surface is fundamental to the genome's identity. colored surfaces (sky, forest) provide contrast without inverting the warmth
9. uses centered hero text or symmetrical layouts — headlines are left-aligned, geometric shapes are asymmetrically placed, and grid columns are intentionally unequal
10. introduces neon, pastel, or highly saturated accent colors that break the muted warmth — the palette is grounded in natural tones (paper, sand, sky, coral, forest) and any additional colors must feel equally organic
