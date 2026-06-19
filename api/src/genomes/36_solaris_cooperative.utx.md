---
id: "36"
name: solaris_cooperative.utx
keywords:
  - solarpunk
  - cooperative
  - civic
  - solar
  - transit
  - dashboard
  - community
  - optimistic
  - infrastructure
  - bright
  - warm future
  - kiosk
---

### genome 36: `solaris_cooperative.utx`

> identity: optimistic near-future civic infrastructure. community solar grid dashboards, public transit kiosks, cooperative energy monitors — warm data for human benefit. solarpunk community boards meet Copenhagen urban planning displays. every pixel says: the future is bright, shared, and yours.

**surface**

colors:
```
--sunflower: #F2C94C;          /* primary — warm solar yellow, the signature */
--teal: #2D9CDB;               /* secondary — cool civic teal, trust and clarity */
--warmwhite: #FAFAF5;           /* background — soft warm white, not sterile */
--charcoal: #2D2D2D;            /* text — warm near-black, grounded */
--success: #27AE60;             /* affirmation — cooperative green, progress */
--sunflower-soft: rgba(242, 201, 76, 0.15);   /* subtle yellow wash for cards */
--sunflower-medium: rgba(242, 201, 76, 0.4);  /* yellow mid-tone for progress bars */
--teal-soft: rgba(45, 156, 219, 0.1);         /* teal wash for info regions */
--teal-medium: rgba(45, 156, 219, 0.3);       /* teal accent for secondary elements */
--success-soft: rgba(39, 174, 96, 0.12);      /* green wash for success feedback */
--charcoal-muted: rgba(45, 45, 45, 0.5);      /* secondary text, metadata */
--charcoal-faint: rgba(45, 45, 45, 0.15);     /* disabled states, ghost borders */
--gradient-warm: linear-gradient(135deg, #FAFAF5 0%, #FFF8E7 50%, #F0FAFF 100%);  /* warm-to-cool background sweep */
```

typography:
- display/headings: `'Nunito', sans-serif` — weight 700-800, 2rem-3rem display, 1.2-1.4rem section labels, `letter-spacing: -0.01em`, `line-height: 1.3` on headings. rounded terminals give warmth without childishness.
- body/data: `'Outfit', sans-serif` — weight 400-500, 0.9-1rem body, 0.75rem fine print/metrics, `letter-spacing: 0em`, `line-height: 1.7`
- headings use sentence case; metric labels are uppercase Outfit weight 500 at 0.7rem with `letter-spacing: 0.06em`
- large dashboard numbers use Nunito weight 800 at 3rem-4rem with `color: var(--sunflower)` or `color: var(--teal)`
- no italic emphasis — weight and color do all the differentiation

borders:
- card borders: `3px solid var(--sunflower)` — thick, visible, warm
- secondary borders: `3px solid var(--teal)` for info/transit elements
- `border-radius: 16px` on all cards and containers
- `border-radius: 100px` on buttons and badges — full pill shape
- `border-radius: 12px` on inputs
- internal dividers: `1px solid var(--charcoal-faint)`

spacing:
- outer padding: `1.5rem` on body, `2rem` on desktop
- card padding: `24px 28px`
- section margins: `2.5rem 0`
- gap between cards: `1.25rem`
- generous breathing room everywhere — density is comfortable, never cramped

**color distribution**

- 55% warmwhite/gradient (`--warmwhite`, `--gradient-warm`) — the bright optimistic ground
- 20% sunflower (`--sunflower`, `--sunflower-soft`, `--sunflower-medium`) — primary accent, progress indicators, hero numbers, card borders, active states
- 15% teal (`--teal`, `--teal-soft`, `--teal-medium`) — secondary accent, links, info cards, transit elements, navigation highlights
- 7% charcoal (`--charcoal`, `--charcoal-muted`) — text, icons, structural elements
- 3% success (`--success`, `--success-soft`) — reserved exclusively for positive outcomes, celebrations, milestones

this is a three-color genome: sunflower, teal, and charcoal on warm white. sunflower leads — it is the sun. teal balances — it is the sky. success green appears only when something genuinely good happens.

**component patterns**

buttons: `background: var(--sunflower); color: var(--charcoal); border: none; border-radius: 100px; padding: 12px 28px; font-family: 'Nunito'; font-weight: 700; font-size: 0.95rem`. hover: `background: #E5BC3F; transform: scale(1.03)`. secondary buttons: `background: transparent; border: 3px solid var(--teal); color: var(--teal); border-radius: 100px`. ghost buttons: `background: var(--teal-soft); color: var(--teal); border: none; border-radius: 100px`.

inputs: `border: 3px solid var(--charcoal-faint); border-radius: 12px; padding: 14px 18px; background: var(--warmwhite); font-family: 'Outfit'; font-size: 0.95rem`. focus state: `border-color: var(--teal); box-shadow: 0 0 0 4px var(--teal-soft)`. label above in Nunito weight 700 at 0.85rem. placeholder in `var(--charcoal-muted)`.

cards/panels: `background: var(--warmwhite); border: 3px solid var(--sunflower); border-radius: 16px; padding: 24px 28px; box-shadow: 0 4px 20px rgba(45, 45, 45, 0.06)`. cards float slightly above the gradient background. stat cards use large Nunito 800 numbers with colored values. secondary cards use `border-color: var(--teal)`. success cards use `border-color: var(--success); background: var(--success-soft)`.

navigation: horizontal bar with pill-shaped nav items. active item: `background: var(--sunflower); color: var(--charcoal); border-radius: 100px; padding: 8px 20px; font-weight: 700`. inactive items: `color: var(--charcoal-muted); padding: 8px 20px`. hover on inactive: `background: var(--sunflower-soft)`. nav bar itself has `background: var(--warmwhite); border-bottom: 3px solid var(--sunflower); border-radius: 0`.

headers: full-width with `background: var(--gradient-warm)` or `var(--warmwhite)`. large Nunito 800 heading (2.5rem) with a sunflower underline accent (`border-bottom: 4px solid var(--sunflower); width: 60px; border-radius: 2px` below heading). subheading in Outfit 400, `color: var(--charcoal-muted)`.

footers: `background: var(--charcoal); color: var(--warmwhite); border-radius: 24px 24px 0 0; padding: 2.5rem`. links in `var(--sunflower)`. section titles in Nunito 700. body text in Outfit 400, `opacity: 0.8`. the footer is the one dark surface — it grounds the page.

lists: card-based list items with `border-left: 4px solid var(--sunflower); border-radius: 12px; background: var(--warmwhite); padding: 16px 20px; margin-bottom: 0.75rem; box-shadow: 0 2px 8px rgba(45, 45, 45, 0.04)`. numbered lists use large teal Nunito 800 numerals. active item: `border-left-color: var(--teal); background: var(--teal-soft)`.

tables: `border-radius: 16px; overflow: hidden; border: 3px solid var(--sunflower)`. header row: `background: var(--sunflower); color: var(--charcoal); font-family: 'Nunito'; font-weight: 700`. data rows alternate `var(--warmwhite)` and `var(--sunflower-soft)`. hover row: `background: var(--teal-soft)`. cell padding: `14px 18px`. text in Outfit 400.

dividers: `border-top: 2px solid var(--sunflower-medium); border-radius: 1px`. section dividers may use a small sun icon (☀) centered on the rule. alternative: `border-top: 2px dashed var(--teal-medium)` for secondary divisions.

modals/overlays: `background: var(--warmwhite); border: 3px solid var(--sunflower); border-radius: 24px; padding: 2rem; box-shadow: 0 12px 40px rgba(45, 45, 45, 0.12)`. backdrop: `background: rgba(45, 45, 45, 0.3); backdrop-filter: blur(8px)`. title in Nunito 800 at 1.8rem. close button is a pill-shaped ghost button.

badges/tags: `background: var(--teal-soft); color: var(--teal); border-radius: 100px; padding: 4px 14px; font-family: 'Outfit'; font-weight: 500; font-size: 0.75rem`. status variants: active = `background: var(--success-soft); color: var(--success)`, highlight = `background: var(--sunflower-soft); color: #8B7020`, neutral = `background: var(--charcoal-faint); color: var(--charcoal-muted)`.

progress bars: `background: var(--charcoal-faint); border-radius: 100px; height: 12px`. fill: `background: linear-gradient(90deg, var(--sunflower), var(--success)); border-radius: 100px`. animated fill with `transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)`. percentage label in Nunito 700 next to bar.

**interaction language**

- hover: cards lift with `transform: translateY(-3px); box-shadow: 0 8px 28px rgba(45, 45, 45, 0.1)`. buttons scale with `transform: scale(1.03)`. nav items fill with `background: var(--sunflower-soft)`. `transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)` on all hover changes.
- active/pressed: `transform: scale(0.97)`. buttons darken slightly. `transition: 0.1s ease`.
- focus: `outline: 3px solid var(--teal); outline-offset: 3px`. inputs gain `box-shadow: 0 0 0 4px var(--teal-soft)`.
- selected: `background: var(--sunflower-soft); border-color: var(--sunflower)`. text gains weight 700.
- disabled: `opacity: 0.4; pointer-events: none`. no color shift — just fade.
- drag: `cursor: grab` → `cursor: grabbing`. element gains `box-shadow: 0 12px 32px rgba(45, 45, 45, 0.15); transform: scale(1.02); border-color: var(--teal)`.

**motion & feedback**

transitions: `0.3s cubic-bezier(0.34, 1.56, 0.64, 1)` on transform, box-shadow, background, border-color. the spring easing gives a subtle bounce — optimistic, not cartoonish. `0.2s ease` on opacity and color for instant-feel changes.

loading: a sunflower-yellow progress ring animates with `stroke-dashoffset` rotation. below it, Outfit 400 text: "Gathering your data..." — always second-person, always warm.

success: celebratory micro-animation — the success card border pulses once with `box-shadow: 0 0 0 0 var(--success)` → `0 0 0 12px transparent` (a ring expanding outward and fading). a checkmark draws itself with `stroke-dasharray` animation over 0.4s. confirmation text in Nunito 700 with `color: var(--success)`: "You did it!" or "Saved successfully."

error: `border-color` shifts to `#EB5757` (a warm red, used ONLY for errors) with a gentle `0.3s` transition. error text in Outfit 500: "Something went wrong — let's try again." always recoverable language, never blame.

celebration: when milestones are hit (e.g., community goals reached), a brief particle burst of small `var(--sunflower)` circles radiates outward from the trigger point and fades over 0.6s. used sparingly — only for genuine shared achievements.

page enter: cards stagger in with `opacity: 0; transform: translateY(16px)` → `opacity: 1; transform: translateY(0)`, 50ms stagger between siblings, `0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`.

**atmosphere**

background: `var(--gradient-warm)` — a barely-there warm gradient sweeping from warm white through faint yellow to faint blue. the gradient is so subtle it registers as "bright and airy" without being identifiable as a gradient. never flat white, never stark.

floating cards: all content lives in rounded cards with soft shadows that float above the gradient ground. the card metaphor is central — each card is a tile on the community dashboard, a window into shared data.

data visualization: bar charts with `border-radius: 8px` tops and `var(--sunflower)` fill (secondary bars in `var(--teal)`). line charts with `stroke-width: 3px; stroke-linecap: round` and subtle `fill` area underneath at 10% opacity. pie/donut charts with thick segments and `stroke-linecap: round`. all data viz uses the three-color palette. data points are `r: 6px` circles with white fill and colored stroke. gridlines are `var(--charcoal-faint)` at 1px.

iconography: simple rounded line icons (2px stroke, round caps, round joins) in `var(--charcoal)` or `var(--teal)`. sun, leaf, lightning bolt, bus, bicycle, house, people, arrow-up motifs. icons at 20-24px. no filled icons — always outlined, always friendly.

illustrations: if illustration is needed, use simple geometric shapes — circles for sun, rounded rectangles for buildings, gentle curves for hills. `var(--sunflower)`, `var(--teal)`, `var(--success)` fills with `var(--charcoal)` outlines at 2px. solarpunk, not corporate.

**editorial voice**

button labels: warm imperative, second-person — "See your impact", "Join your neighbors", "Share this win", "View the grid", "Track your savings", "Get started". title case. never cold or transactional.

headings: Nunito 700-800, sentence case, declarative and celebratory — "Your neighborhood saved 2.4 MWh today", "Community goals: 84% there", "How your energy flows", "Transit running smoothly". statements, not questions. facts that feel good.

metric labels: uppercase Outfit 500, small — "ENERGY SAVED", "NEIGHBORS PARTICIPATING", "CO₂ OFFSET", "NEXT BUS", "GRID STATUS". terse but human — these are public dashboard labels, not database column names.

metadata: friendly format — "Updated 3 minutes ago", "Since January 2026", "Your block · Zone 4". relative time by default. geographic context with dot separator.

placeholders: warm and inviting — "Search your neighborhood...", "Enter your address to get started", "What would you like to track?"

empty states: illustration of a small sun rising over rooftops. Nunito 700 heading: "Nothing here yet." Outfit 400 body: "Your community data will appear as neighbors join in." a primary pill button: "Invite your neighbors."

error messages: recoverable and warm — "We couldn't load the grid data. Let's try again." or "Something's off with that address — double-check and resubmit?" no blame, no jargon. always offer a next step.

success messages: celebratory but not excessive — "You're all set!", "Goal reached — your neighborhood did this together.", "Saved. Your preferences are updated." Nunito 700, `color: var(--success)`.

**cursor & selection**

- default: `cursor: default`
- interactive elements (buttons, cards, links, toggles): `cursor: pointer`
- drag handles and sortable items: `cursor: grab` → `cursor: grabbing`
- inputs: `cursor: text`
- disabled elements: `cursor: not-allowed`
- `::selection { background: var(--sunflower); color: var(--charcoal); }` — warm yellow selection highlight

**when to reach for this genome**

Use `solaris_cooperative.utx` when the prompt asks for solarpunk civic infrastructure, community solar dashboards, neighborhood energy savings, grid monitors, public transit kiosks, cooperative utilities, sustainability trackers, public-benefit scoreboards, city service portals, or optimistic operational tools where shared progress is visible and useful.

Reach for it when visual or product cues include sunflower yellow and teal on warm white, rounded cards with thick colorful borders, pill navigation, simple charts, progress bars, friendly line icons, public dashboard language, "your neighborhood" metrics, cooperative milestones, transit/energy status, and second-person copy that turns infrastructure into a shared civic win.

Do not use it for torn-paper community directives, monospace-only warmth, Southeast Asian kampung language, horizontal participation cards, or handbook-style opt-in rounds; use `kampung_guideline.warmth`. Do not use it for hard architectural civic systems, permits, facilities, route plans, concrete mass, or permanent institutional authority; use `brutalist_slab.concrete`. Do not use it for pure metro signage, platform arrows, route-line strips, enamel panels, or wayfinding read at speed; use `transit_wayfinding.sys`. Do not use it for calibrated hardware panels, oscilloscope readouts, dials, machined chassis, or analog measurement consoles; use `precision_instrument.met`. Do not use it for live-news urgency, alerts, tickers, crisis rooms, or broadcast command centers; use `breaking_desk.live`. Do not use it for generic social timelines, posts, follows, and reply streams; use `public_timeline.x`.

It is strongest when the product turns public-good data into an inviting action surface: track progress, join neighbors, understand flows, and celebrate shared outcomes. If the prompt needs surveillance, crisis, raw technical instrumentation, or serious municipal mass, choose the more exact genome.

**anti-patterns — this genome NEVER:**

1. uses dark backgrounds for primary content surfaces — this is a bright, daylight genome. the only dark surface is the footer. no dark mode aesthetics, no deep navy hero sections, no black cards
2. uses sharp/square corners on containers — all cards, buttons, badges, and inputs have generous border-radius (12px minimum). no rectilinear boxes, no sharp-cornered panels
3. uses thin hairline borders (1px) as primary container borders — borders are thick (3px) and colorful. thin 1px lines are reserved only for internal dividers
4. uses cold, clinical, or technical language — no "submit", "execute", "terminate", "null", "configure parameters". the voice is warm, inclusive, second-person. every label should feel like a neighbor talking, not a system reporting
5. uses grayscale-dominant interfaces or monochromatic palettes — there must always be visible sunflower yellow and teal. the palette is deliberately warm and colorful, never desaturated
6. uses blob shapes, amorphous forms, or organic flowing layouts — geometry is rounded-rectangular, structured, card-based. this is NOT ambient_drift.aura. no lava lamps, no floating orbs, no morphing shapes
7. uses monospace typography, torn/rough edges, or handcraft aesthetics — this is NOT kampung_guideline.warmth. no typewriter fonts, no jagged clip-paths, no paper texture. this is clean, geometric, future-civic
8. uses pessimistic, cautionary, or dystopian framing — no "warning: system overload", no red alert aesthetics, no surveillance metaphors. even error states are optimistic and recoverable
9. uses dense data tables as the primary layout pattern — data is presented in friendly cards, progress bars, and simple charts. tables exist but are styled warmly with rounded corners and alternating tinted rows, never raw grid-data dumps
10. uses flat text-only buttons with no background — all buttons have either a filled background or a visible border. the pill shape is mandatory. no bare text links masquerading as buttons
