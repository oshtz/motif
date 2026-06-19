---
id: "02"
name: modern_studio.pro
keywords:
  - clean
  - SaaS
  - modern app
  - prosumer
  - boutique software
  - premium
  - polished
  - apple
  - minimal
  - professional
  - startup
  - creative tool
  - design app
---

### genome 02: `modern_studio.pro`

> identity: high-end boutique creative suite. the $12/month app that makes you feel like a professional. apple keynote energy. every surface feels considered and premium.

**surface**
- colors: `--bg: #F4F4F6; --ink: #121212; --accent: #C2B1FF; --neon: #CCFF00; --white: #FFFFFF; --muted: #8E8E93; --surface: rgba(0,0,0,0.03); --surface-2: rgba(0,0,0,0.06);`
- typography: `"Inter", -apple-system, BlinkMacSystemFont, sans-serif`. display: `font-weight: 800; letter-spacing: -0.03em; font-size: 48–72px`. headers: `font-weight: 700; font-size: 24–32px`. labels: `font-weight: 600; text-transform: capitalize; font-size: 12–13px`. body: `font-weight: 400; font-size: 15px; line-height: 1.5`. meta: `font-weight: 400; font-size: 11–12px; color: var(--muted)`.
- borders: `1.5px solid var(--ink)`. panels/cards: `border-radius: 24px`. buttons: `border-radius: 9999px` (pill). small interactive elements: `12px`. inputs: `9999px`.
- spacing: `gap: 20px; padding: 20px–40px`. card-based architecture. generous whitespace between sections. content areas max-width `1200px` centered.

**color distribution**
- 60% light gray (`--bg`) and white (`--white`) — the background canvas.
- 25% dark ink (`--ink`) — text, borders, primary buttons. the structural skeleton.
- 10% accent violet (`--accent`) — focus rings, secondary buttons, decorative highlights.
- 5% neon chartreuse (`--neon`) — active states, selected items, glowing call-to-action. this is the "pop" color. it is rare and therefore powerful. never used for large surface areas.

**component patterns**
- buttons: pill-shaped. default: ink border, no fill, ink text. primary: `background: var(--ink); color: var(--white)`. accent: `background: var(--neon); color: var(--ink)`. icon buttons: circular, `width: 48px; height: 48px`. all buttons `height: 48–64px`.
- inputs: pill-shaped. `background: var(--surface); border: none; padding: 0 24px; height: 56px`. focus: `background: var(--surface-2)`. placeholder: `color: rgba(0,0,0,0.25)`. label above: `font-weight: 600; text-transform: capitalize; font-size: 12px; color: var(--muted); padding-left: 16px`.
- cards/panels: `background: var(--white); border-radius: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.06)`. for floating/overlay cards: add `backdrop-filter: blur(20px); background: rgba(255,255,255,0.85)`.
- navigation: pill buttons in a horizontal row. active: `background: var(--neon); color: var(--ink)`. or: underline-based with weight change.
- headers: floating card-style bar with `border-radius: 24px`. logo/title weight 800 left, action pills right.
- footers: floating pill bar at bottom. `backdrop-filter: blur(10px); background: rgba(255,255,255,0.8); border-radius: 9999px`.
- lists: clean rows with `border-bottom: 1px solid var(--surface-2)`. hover: row lifts via deepened shadow.
- tables: `border-radius: 16px` on wrapper. rounded top corners on header. rows separated by `var(--surface-2)`.
- dividers: `height: 2px; background: var(--surface); border-radius: 9999px`.
- modals: `border-radius: 24px; backdrop-filter: blur(24px); background: rgba(255,255,255,0.9)`. centered, with layered shadow.
- badges/tags: pill-shaped. `background: var(--surface); font-size: 11px; padding: 4px 12px`.
- tooltips: pill-shaped. `background: var(--ink); color: var(--white); padding: 6px 14px; border-radius: 12px; font-size: 12px; backdrop-filter: blur(10px); box-shadow: 0 4px 12px rgba(0,0,0,0.1)`. no arrow.

**interaction language**
- hover: shadow deepens (`box-shadow: 0 4px 16px rgba(0,0,0,0.1)`), element lifts `translateY(-2px)`. `transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1)`.
- active/pressed: `transform: scale(0.98)`. shadow flattens to `box-shadow: 0 1px 4px rgba(0,0,0,0.06)`. for accent elements: `box-shadow: 0 0 0 3px var(--neon)`.
- focus: `outline: 2.5px solid var(--accent); outline-offset: 2px; border-radius: inherit`.
- selected: `background: var(--neon); color: var(--ink)`.
- disabled: `opacity: 0.4; pointer-events: none`.
- drag: `cursor: grabbing`. dragged element: `box-shadow: 0 16px 48px rgba(0,0,0,0.15); transform: scale(1.02)`.

**motion & feedback**
- transitions: everything animates. default: `transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`. page-level: `0.4s cubic-bezier(0.16, 1, 0.3, 1)`.
- loading: skeleton shimmer — `background: linear-gradient(90deg, var(--surface) 25%, var(--surface-2) 50%, var(--surface) 75%); background-size: 200% 100%; animation: shimmer 1.5s ease-in-out infinite` sweeping left-to-right. or a thin progress bar at the top.
- success: checkmark icon fades in. the relevant element's border pulses once with `--neon` (`box-shadow: 0 0 0 3px var(--neon)` → `0 0 0 0px` over 400ms).
- error: input border flashes `#FF3B30`, element shakes (`translateX(4px)` → `translateX(-4px)` twice, 80ms each).
- page enter: elements stagger in from below with `opacity: 0; transform: translateY(20px)` → `opacity: 1; transform: translateY(0)`. use `animation-delay` increments of `0.05s` for sequence.

**atmosphere**
- background: `#F4F4F6` with optional subtle noise grain (2% opacity, small-scale noise via data-URI).
- cards cast ambient shadow: `box-shadow: 0 8px 32px rgba(0,0,0,0.08)`.
- overlays and modals use `backdrop-filter: blur(10px–24px)`.
- the page feels **airy, premium, and spacious**. like opening a very well-designed app for the first time.

**editorial voice**
- button labels: clean, confident, brief. `Continue`, `Get Started`, `Sign In`, `Create Project`, `Explore`. capitalize first word. no all-caps except badges.
- headings: tight-tracked, large, bold. `Build Something Beautiful`, `Your Workspace`, `Studio Dashboard`. sentence case or title case.
- metadata: soft, understated. `Updated 3 hours ago`, `Version 2.4`, `Pro Plan`.
- placeholders: `your@email.com`, `Search anything...`, `Project name`.
- empty states: `Nothing here yet`, `Create your first project`, `No results found`.
- error messages: gentle. `That doesn't look right`, `Please try again`, `Something went wrong`.
- success messages: `All set!`, `Saved`, `You're in`.

**cursor & selection**
- cursor: `default` globally. `pointer` on interactive elements. no custom cursor unless the output is a creative/art piece.
- text selection: `::selection { background: var(--accent); color: var(--white); }`.

**anti-patterns — this genome NEVER:**
- uses sharp corners (0px radius) on any element. the minimum radius is `12px`.
- uses all-uppercase text on headings or body copy. only labels and badges are capitalized.
- uses monospaced fonts for anything except code blocks.
- uses hard 1px borders without radius (this is the brutalist genome's territory).
- uses primary colors at full saturation (red, blue, green). its accent palette is muted (violet, chartreuse).
- uses instantaneous state changes with no transition. everything eases.
- uses system-jargon labels like "EXECUTE", "INITIALIZE", "TERMINATE". the voice is human and friendly.

**when to reach for this genome**

When the request is for a polished SaaS / prosumer software product, a marketing site for a creative tool, an onboarding flow that should feel premium, or any "this looks like it costs $12/month and is worth it" energy. Reach for it when the user wants the artifact to feel like a finished product rather than a sketch.

**page archetype guidance**

- landing page: floating pill-bar header, oversized 800-weight hero title with tight `-0.03em` tracking, a single neon-chartreuse CTA, soft white cards on light-gray field, testimonial pills, footer pill-bar at bottom.
- dashboard: 24px-radius cards in a generous grid, soft ambient shadows, sidebar with pill nav items (active = neon chartreuse fill), metric cards with large numerals and `--muted` labels.
- editor: floating top-bar with action pills, central canvas on `--bg`, right-side inspector panel as a `border-radius: 24px` card with `backdrop-filter: blur(20px)`, status pill bar at the bottom.
- pricing: three rounded cards in a row, recommended plan elevated with `--neon` accent ring, all CTAs as pill buttons, FAQ accordion below in soft surface cards.

**production implementation notes**

Use these concrete defaults when turning the genome into production HTML/CSS:

```css
:root {
  --bg: #F4F4F6;
  --ink: #121212;
  --accent: #C2B1FF;
  --neon: #CCFF00;
  --white: #FFFFFF;
  --muted: #8E8E93;
  --hairline: rgba(18, 18, 18, 0.1);
  --surface: rgba(0, 0, 0, 0.03);
  --surface-2: rgba(0, 0, 0, 0.06);
  --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.08);
  --shadow-hover: 0 14px 44px rgba(0, 0, 0, 0.12);
  --ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
}
```

- body shell: `min-height: 100vh; background: var(--bg); color: var(--ink); font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;`.
- root layout: `max-width: 1240px; margin: 0 auto; padding: 24px clamp(18px, 4vw, 48px) 32px;`.
- page grid: use `display: grid; grid-template-columns: minmax(0, 1fr); gap: 24px;` on mobile and `grid-template-columns: 280px minmax(0, 1fr);` for app shells at `min-width: 900px`.
- card grid: use `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;` with no nested cards; repeated items may be cards, page sections are unframed bands.
- hero or primary workspace: `min-height: min(720px, calc(100vh - 96px));` but always leave a hint of the next section visible on landing pages.
- typography clamp: display text may use `font-size: clamp(42px, 6vw, 72px);` only in true hero contexts; app panels use 18-28px headings.
- letter spacing: keep `letter-spacing: -0.03em` only on 48px+ display type; labels and compact UI use `letter-spacing: 0`.
- line length: marketing copy maxes at `62ch`; dense tool copy maxes at `44ch`; never let long text stretch across the full viewport.
- buttons: primary pills use `height: 52px; padding: 0 24px; display: inline-flex; align-items: center; gap: 10px;`.
- compact icon buttons: `width: 40px; height: 40px; border-radius: 9999px; padding: 0;` with a lucide-style 18px icon and accessible label.
- segmented controls: one pill track `background: var(--surface); padding: 4px; gap: 2px;` with active segment `background: var(--white); box-shadow: 0 2px 8px rgba(0,0,0,0.08);`.
- tabs: tabs are pills or soft underlines, not bordered rectangles; active tab uses either `--ink` fill or a single `--neon` dot/underline.
- sidebars: use `background: rgba(255,255,255,0.72); border-radius: 24px; backdrop-filter: blur(18px); padding: 12px;` with nav rows at `height: 44px`.
- inspectors: right panels use `width: min(360px, 100%); border-radius: 24px; background: var(--white); box-shadow: var(--shadow-card); padding: 20px;`.
- toolbars: floating, centered, and pill-like; `height: 56px; padding: 6px; border-radius: 9999px; background: rgba(255,255,255,0.86); backdrop-filter: blur(18px);`.
- dropdown menus: `border-radius: 18px; padding: 8px; min-width: 220px; background: rgba(255,255,255,0.96); box-shadow: 0 18px 60px rgba(0,0,0,0.14);`.
- menu items: `height: 40px; border-radius: 12px; padding: 0 12px;` hover background `var(--surface)`.
- sliders: use a 4px rounded track, neon fill only for active value, and a 20px white thumb with `box-shadow: 0 2px 8px rgba(0,0,0,0.18)`.
- checkboxes/toggles: toggles are preferred; track `width: 44px; height: 26px; border-radius: 9999px; background: var(--surface-2);` and checked track `background: var(--neon)`.
- charts: axes and gridlines use `rgba(18,18,18,0.08)`; primary series uses `--ink`; one highlight series may use `--neon`; annotations use `--accent`.
- tables: use rounded wrappers with overflow hidden; header cells `height: 44px; font-size: 12px; color: var(--muted);`; row cells `height: 52px`.
- metric cards: large numerals `font-size: 40px; font-weight: 800; line-height: 1;`, label above in muted 12px, trend pill below.
- notifications/toasts: floating rounded rectangles, `border-radius: 18px; background: rgba(255,255,255,0.94); backdrop-filter: blur(16px); box-shadow: 0 12px 40px rgba(0,0,0,0.12);`.
- success toast: small neon status dot plus `Saved`; do not flood the surface with neon.
- error toast: use restrained `--danger: #FF3B30` only in text/icon/border, not as a large red fill.
- empty states: centered inside the content area, not a giant marketing card; use one compact icon, a short heading, and one pill action.
- skeletons: card skeletons keep the exact card radius; shimmer speed `1.4s`; never use pulsing gray blocks that change layout size.
- focus rings: preserve accessibility even in premium layouts; use `outline: 2.5px solid var(--accent); outline-offset: 3px;`.
- reduced motion: if `prefers-reduced-motion: reduce`, replace staggered entrance with instant opacity and keep hover lift below `translateY(-1px)`.
- dark mode: this genome is light-first; if a dark variant is unavoidable, keep the premium feel with `--bg: #111113; --ink: #F6F6F7; --white: #1B1B1F; --surface: rgba(255,255,255,0.08);` and keep neon scarce.
- imagery: product screenshots should be crisp, bright, and inspectable; use rounded 20-24px masks, soft shadows, and no fake device chrome unless the product is explicitly a device.
- cursor refinement: use `cursor: pointer` only on controls and clickable cards; drag handles use `grab`/`grabbing`; resize handles use `ew-resize`/`ns-resize`; decorative surfaces stay `default`.
- selection refinement: `::selection` should be `background: var(--accent); color: var(--ink);` when contrast against white text is weak; avoid making selected text unreadable.
- keyboard affordance: command palettes, menus, and list rows use a visible active row with `background: var(--surface); box-shadow: inset 0 0 0 1px var(--hairline);`.
- selection guidance: choose this over `panavision.70s` when the product should feel like current premium software rather than tactile vintage equipment.
- selection guidance: choose this over `lab_manual.80s` when warmth, onboarding, and friendly polish matter more than dense document authority.
- selection guidance: choose this over `neo_brutalist.zine` when the brand is confident and refined, not confrontational or handmade.
- anti-pattern specificity: avoid giant glassmorphism blobs, lavender full-page gradients, card-in-card dashboards, and marketing hero layouts that hide the actual product.
- anti-pattern specificity: avoid radius inconsistency; if a component family is pill-shaped, every state, menu, and skeleton for that family keeps the same radius.
- anti-pattern specificity: avoid using `--neon` for backgrounds behind paragraphs, sidebars, or large illustrations; it is a signal, not a brand wash.

**production recipes**

- SaaS dashboard recipe: floating top chrome, compact sidebar, 3-4 metric cards, one primary chart, one activity list, and a bottom-right toast region.
- Dashboard metric recipe: muted eyebrow, 40px number, small delta pill, and one-line interpretation; never stack multiple unrelated charts inside the same card.
- Creative editor recipe: top action bar, central canvas, right inspector, bottom status pill; inspector sections use accordions with 16px spacing and no nested cards.
- Onboarding recipe: one focused question per screen, a visible progress pill, one primary neon action, one quiet secondary action, and soft page-entry stagger.
- Settings recipe: grouped rows inside one white panel; toggles on the right; destructive actions separated by a hairline rule and red text only.
- Command palette recipe: centered overlay `max-width: 640px`, 20px radius, search input at top, grouped result rows at `height: 48px`, selected row `var(--surface)`.
- Billing/pricing recipe: three 24px cards, recommended card raised by 6px with a neon ring, feature rows as check icons plus compact text.
- File browser recipe: toolbar pill at top, cards or table toggle, selected files outlined with `--accent`, drag preview with soft shadow and no rotation.
- Analytics recipe: white chart cards on gray field; legends are pill filters; neon marks only the currently selected series or threshold.
- AI/chat recipe: input composer is a floating rounded bar; assistant messages in white panels, user messages in soft `--surface`; never imitate terminal logs.
- Marketing hero recipe: product screenshot or generated bitmap must be first-viewport signal; text overlays or sits adjacent with no card wrapping the headline.
- Mobile recipe: top bar becomes a 56px rounded dock; primary action sticks above the bottom safe area as a pill; cards reduce to 16px radius only when space is tight.
- Tablet recipe: keep two-column cards at `minmax(0, 1fr)` and reserve the inspector/drawer for secondary actions.
- Data density rule: premium does not mean sparse to the point of emptiness; repeated operational rows may be dense if spacing, type, and hierarchy stay calm.
- Copy density rule: one short heading plus one supporting sentence per card; avoid multi-paragraph explanations inside tool panels.
- Icon rule: use simple 18-20px line icons; icons inherit `currentColor`; accent icons may sit in a 32px soft circle, not a decorative illustration badge.
- Avatar rule: avatars are 32-40px circles with subtle border; status is a tiny neon or muted dot; avoid cartoon mascot treatments.
- Image placeholder rule: use a real product screenshot, generated visual, or clean skeleton; never use vague gradient rectangles as final imagery.
- Scrollbar rule: custom scrollbars may use `width: 8px; thumb: rgba(0,0,0,0.18); border-radius: 9999px;`; keep them understated.
- Z-index rule: floating chrome sits at 20, dropdowns at 40, modals at 80, toasts at 100; avoid arbitrary huge values.
- Border rule: use either the 1.5px ink border or no visible border with shadow; do not mix many gray border weights.
- Elevation rule: base cards use `--shadow-card`; menus/modals use stronger shadow; page sections should not all float.
- Neon rule: if two neon elements appear in one viewport, one must be a small status/selection mark; never two large neon CTAs.
- Accent rule: violet is for focus, selection glow, and gentle highlight; neon is for the single active decision.
- Accessibility rule: small muted labels need at least `#6F6F75` equivalent on light surfaces when they carry essential meaning.
- Print/export rule: exported reports can drop backdrop-filter but keep radius, hierarchy, and restrained neon callouts.
- Loading copy examples: `Preparing workspace`, `Syncing changes`, `Rendering preview`, `Saving draft`.
- Error copy examples: `Couldn't save changes`, `Connection interrupted`, `That file is too large`, `Permission needed`.
- Success copy examples: `Published`, `Invite sent`, `Draft saved`, `Changes synced`, `Preview ready`.

**implementation safeguards**

- Preserve first-screen utility: if building an app, the first viewport should contain the actual workspace, dashboard, editor, or onboarding task, not an abstract brand splash.
- Preserve polish through restraint: one soft shadow family, one radius family, one rare neon action, and one accent focus language are enough.
- Use density tiers: marketing pages use 32-48px section spacing; app screens use 16-24px; compact menus use 8-12px.
- Use explicit control states for every generated component: hover, pressed, focus, selected, disabled, loading, and error.
- Keep layout stable: skeletons, hover lifts, selected tabs, and validation messages must not resize cards or shift neighboring controls.
- Keep cards single-purpose: one card can hold a metric, chart, form group, or list, but not a nested dashboard inside another card.
- Keep panels shallow: avoid card inside card; use white panels on the gray canvas and hairline dividers inside them.
- Keep forms calm: validation text appears below fields in 12px muted/red text; errors do not expand into banners unless the whole flow failed.
- Keep copy human: say `Save changes`, not `Commit mutation`; say `Invite teammate`, not `Provision user`.
- Keep actions predictable: primary action is rightmost or bottom-right in dialogs; destructive action is separated and never neon.
- Keep modals focused: title, one sentence max, primary/secondary pills, and one content region; long workflows become full pages.
- Keep overlays legible: backdrop blur may be used, but backdrop opacity should still let the modal read against busy content.
- Keep charts quiet: no 3D, no rainbow palettes, no decorative gradients, no glowing area fills.
- Keep nav obvious: active nav state is visible without relying on hover; use neon fill, ink fill, or clear underline.
- Keep touch targets at least 44px; reduce padding only in dense tables where row-level click targets remain clear.
- Keep keyboard focus visible on every interactive element, including icon-only buttons, tabs, menus, drag handles, and chart filters.
- Keep empty states small in dashboards; a missing row should not become a full-page illustration unless the entire product is empty.
- Keep generated imagery product-relevant: screenshots, UI previews, asset thumbnails, or actual object photography beat abstract blobs.
- Keep responsive behavior planned: sidebars collapse to drawers, inspectors become bottom sheets, toolbars wrap into two rows before clipping.
- Keep bottom sheets premium: `border-radius: 24px 24px 0 0; background: var(--white); box-shadow: 0 -12px 40px rgba(0,0,0,0.12);`.
- Keep code blocks rare: when needed, use `font-family: "SFMono-Regular", Consolas, monospace; font-size: 12px; border-radius: 14px; background: #18181B; color: #F4F4F6;`.
- Keep contrast honest: neon on white is decorative unless paired with ink text or an ink outline.
- Keep premium motion cancellable: every animation must have a reduced-motion fallback that preserves the same final layout.
- Keep the genome distinct: if the design starts looking like black-bordered stickers, switch to `neo_brutalist.zine`; if it starts looking like warm equipment, switch to `panavision.70s`.

**signature techniques**

- pill-bar floating chrome: header and footer are `border-radius: 9999px` rounded-pill bars with `backdrop-filter: blur(10px)` and translucent white backgrounds — they float above content rather than spanning edge-to-edge.
- neon scarcity: `--neon` (`#CCFF00`) appears in at most ONE element per visible viewport. It is the focus signal, never an ambient color.
- ambient soft shadows: cards use `box-shadow: 0 8px 32px rgba(0,0,0,0.08)` — broad, soft, low-opacity. Never offset hard shadows.
- skeleton shimmer for loading: a horizontal `linear-gradient(90deg, var(--surface), var(--surface-2), var(--surface))` sweep with `background-size: 200% 100%` animated at `1.5s ease-in-out infinite` — the canonical "I'm a premium app" loading state.
- staggered enter animations: page-entry elements use `cubic-bezier(0.16, 1, 0.3, 1)` with `0.05s` stagger increments — the "premium product reveal" easing curve.
- backdrop-filter on overlays: floating chrome and modals use `backdrop-filter: blur(20px)` with `background: rgba(255,255,255,0.85)` — the iOS Control Center / macOS vibrancy aesthetic. This is one of the few genomes that legitimately uses backdrop-filter.
- hover-lift micro-interaction: `transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.1)` on cards — the canonical "this is interactive and premium" feedback.
- 1.5px border (not 1px, not 2px): the structural border weight is `1.5px solid var(--ink)` — slightly heavier than utilitarian 1px, slightly lighter than brutalist 2px. The proportion matters.
