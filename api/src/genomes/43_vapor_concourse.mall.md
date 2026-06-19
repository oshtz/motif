---
id: "43"
name: vapor_concourse.mall
keywords:
  - vaporwave
  - mall
  - nostalgic
  - dreamy
  - pastel
  - gradient
  - marble
  - translucent
  - sunset
  - retro
  - consumer
---

### genome 43: `vapor_concourse.mall`

> identity: late-80s consumer paradise vaporwave. pink-to-cyan sunset gradients, marble column textures, faux-Roman aesthetic, palm fronds, and soft-focus nostalgia. the dreamy melancholy of dead shopping malls and early Macintosh interfaces. everything is slightly translucent, slightly too perfect, slightly sad.

**surface**

colors:
```
--bg: linear-gradient(135deg, #FFB8D0 0%, #C8A8E8 40%, #80E0E8 100%); /* sunset gradient — the eternal dusk of the concourse */
--bg-solid: #FFB8D0;         /* soft pink — fallback and dominant surface tone */
--lavender: #C8A8E8;         /* lavender mist — secondary surfaces, frosted panels */
--cyan: #80E0E8;             /* pool cyan — accents, links, interactive highlights */
--sunset: #FFB088;           /* sunset orange — warm accents, badges, notification glow */
--marble: #F0ECF0;           /* marble white — card surfaces, frosted glass base */
--ink: #2A1B3D;              /* deep purple — primary text, high-contrast anchors */
--glass: rgba(240, 236, 240, 0.55); /* frosted glass — translucent panel fill */
--glass-border: rgba(255, 255, 255, 0.3); /* glass edge — subtle panel delineation */
```

typography:
- display / headings: `'Cormorant Garamond', serif`. weight 300-400. `font-style: italic`. size range `clamp(3rem, 10vw, 9rem)` for hero, `2rem-2.8rem` for section heads, `1.2rem-1.5rem` for sub-heads. `letter-spacing: 0.02em`. `line-height: 1.0` for hero, `1.15` for section heads. dreamy, elegant, slightly wistful.
- body / UI: `'Outfit', sans-serif`. weight 300-400. size `0.95rem-1.05rem`. `line-height: 1.6`. `letter-spacing: 0.01em`. thin and airy, like early Macintosh system text.
- accent / decorative: Greek or Roman letterforms optional — `font-variant: small-caps` on select labels. `'Cormorant Garamond', serif` weight 300 for metadata and captions.
- hierarchy is established through weight contrast (light italic display vs thin sans body) and translucency (important text at full opacity, secondary text at 0.7 opacity).

borders:
- cards and panels: `border-radius: 14px`. `border: 1px solid var(--glass-border)`. frosted glass effect: `backdrop-filter: blur(12px)`. `background: var(--glass)`. `box-shadow: 0 8px 32px rgba(0,0,0,0.1)`.
- buttons: `border-radius: 12px`. `border: 1px solid var(--glass-border)`. frosted glass background. no sharp corners anywhere.
- inputs: `border: 1px solid var(--glass-border)`. `border-radius: 12px`. `backdrop-filter: blur(8px)`.
- dividers: when needed, `1px solid rgba(255,255,255,0.2)` — barely visible, like light refracting through glass. prefer spatial separation.

spacing:
- generous, spacious padding. `gap: 2rem` between stacked elements. `padding: 2.5rem` on panels. hero content centered with abundant vertical breathing room.
- content floats in pastel gradient space. no crowding. minimum `3rem` section gaps. cards at `200px` minimum width.

**color distribution**

- 35% gradient background (`--bg`) — the eternal sunset, always visible behind frosted panels
- 25% marble white / frosted glass (`--marble`, `--glass`) — card surfaces, panels, translucent overlays
- 15% deep purple (`--ink`) — text, contrast anchors, grounding the dreaminess
- 10% lavender (`--lavender`) — secondary surfaces, hover states, decorative fills
- 8% cyan (`--cyan`) — interactive highlights, links, selected states, cool-spectrum accents
- 7% sunset orange (`--sunset`) — warm accents, badges, notification indicators, CTA glow

**component patterns**

buttons:
- primary: `background: var(--glass)`. `backdrop-filter: blur(12px)`. `border: 1px solid var(--glass-border)`. `color: var(--ink)`. `font-family: 'Outfit', sans-serif`. `font-weight: 400`. `font-size: 0.95rem`. `padding: 0.85rem 2rem`. `border-radius: 12px`. `letter-spacing: 0.03em`. on hover: `background: rgba(128, 224, 232, 0.3)`. `border-color: var(--cyan)`. `box-shadow: 0 8px 24px rgba(128, 224, 232, 0.2)`. `transition: all 0.6s ease`.
- secondary: `background: transparent`. `border: 1px solid var(--glass-border)`. `color: var(--ink)`. same radius and padding. on hover: `background: rgba(200, 168, 232, 0.2)`.
- CTA / accent: `background: linear-gradient(135deg, var(--sunset), var(--bg-solid))`. `border: none`. `color: var(--ink)`. `box-shadow: 0 4px 20px rgba(255, 176, 136, 0.3)`. on hover: `box-shadow: 0 8px 32px rgba(255, 176, 136, 0.4)`. `transform: translateY(-2px)`.

inputs:
- `background: var(--glass)`. `backdrop-filter: blur(8px)`. `border: 1px solid var(--glass-border)`. `border-radius: 12px`. `padding: 0.85rem 1.2rem`. `font-family: 'Outfit', sans-serif`. `font-weight: 300`. `font-size: 0.95rem`. `color: var(--ink)`. placeholder in `var(--ink)` at `opacity: 0.4`.
- focus: `border-color: var(--cyan)`. `box-shadow: 0 0 0 3px rgba(128, 224, 232, 0.25)`. `transition: all 0.6s ease`.
- labels: `font-family: 'Cormorant Garamond', serif`. `font-style: italic`. `font-weight: 400`. `font-size: 1rem`. `color: var(--ink)`. `opacity: 0.8`. positioned above input with `margin-bottom: 0.5rem`.

cards:
- `background: var(--glass)`. `backdrop-filter: blur(12px)`. `border: 1px solid var(--glass-border)`. `border-radius: 14px`. `box-shadow: 0 8px 32px rgba(0,0,0,0.1)`. `overflow: hidden`. `padding: 2rem`. content in `var(--ink)`. on hover: `transform: translateY(-4px)`. `box-shadow: 0 16px 48px rgba(0,0,0,0.12)`. `transition: all 0.6s ease`.
- card headers in `'Cormorant Garamond', serif` italic. card body in `'Outfit', sans-serif` weight 300.

navigation:
- horizontal bar with frosted glass background. `background: var(--glass)`. `backdrop-filter: blur(16px)`. `border-bottom: 1px solid var(--glass-border)`. `padding: 1rem 2.5rem`. nav items in `'Cormorant Garamond', serif` italic, `font-size: 1.15rem`, `color: var(--ink)`. `letter-spacing: 0.02em`. active item: `color: var(--cyan)`. `border-bottom: 2px solid var(--cyan)`. hover: `color: var(--cyan)`. `transition: color 0.6s ease`.

headers:
- hero: `font-family: 'Cormorant Garamond', serif`. `font-style: italic`. `font-weight: 300`. `font-size: clamp(3.5rem, 10vw, 9rem)`. `color: var(--ink)`. `line-height: 1.0`. `letter-spacing: 0.02em`. centered. optional `text-shadow: 0 2px 20px rgba(42, 27, 61, 0.1)` for depth.
- section: `font-size: 2.2rem`. `font-weight: 400`. `font-style: italic`. `color: var(--ink)`. centered or left-aligned. `margin-bottom: 1rem`.

footers:
- frosted glass bar. `background: var(--glass)`. `backdrop-filter: blur(12px)`. `border-top: 1px solid var(--glass-border)`. `padding: 2rem 2.5rem`. `font-family: 'Cormorant Garamond', serif`. `font-style: italic`. `font-size: 0.95rem`. `color: var(--ink)`. `opacity: 0.7`. links in `var(--cyan)`.

lists:
- no bullets. items separated by `gap: 1rem`. `font-family: 'Outfit', sans-serif`. `font-weight: 300`. active item: `color: var(--cyan)`. `font-weight: 400`. inactive: `color: var(--ink)`. `opacity: 0.7`. optional left border on active: `border-left: 2px solid var(--cyan)`. `padding-left: 1rem`.

tables:
- `border-radius: 14px` on outer container. `overflow: hidden`. `backdrop-filter: blur(12px)`. `background: var(--glass)`. `border: 1px solid var(--glass-border)`. header row: `background: rgba(42, 27, 61, 0.08)`. `color: var(--ink)`. `font-family: 'Cormorant Garamond', serif`. `font-style: italic`. body rows alternate between `transparent` and `rgba(255, 255, 255, 0.15)`. no visible cell borders — separation through alternating translucency. `padding: 1rem 1.5rem` per cell.

dividers:
- avoided. use spatial gaps and gradient transitions. when absolutely necessary: `1px solid rgba(255, 255, 255, 0.2)`. `margin: 2rem 0`.

modals:
- `background: var(--glass)`. `backdrop-filter: blur(16px)`. `border: 1px solid var(--glass-border)`. `border-radius: 16px`. `box-shadow: 0 24px 64px rgba(0,0,0,0.15)`. backdrop: `background: rgba(42, 27, 61, 0.4)` with `backdrop-filter: blur(8px)`. header in `'Cormorant Garamond', serif` italic. `padding: 2.5rem`. entry animation: `opacity 0` to `1`, `translateY(20px)` to `0`, over `0.6s ease`.

badges/tags:
- pill-shaped. `border-radius: 9999px`. `padding: 0.3rem 1rem`. `font-family: 'Outfit', sans-serif`. `font-size: 0.75rem`. `font-weight: 400`. `letter-spacing: 0.04em`. `text-transform: uppercase`. background rotates through `rgba(128, 224, 232, 0.25)`, `rgba(200, 168, 232, 0.25)`, `rgba(255, 176, 136, 0.25)`. `color: var(--ink)`. `backdrop-filter: blur(4px)`. `border: 1px solid var(--glass-border)`.

**interaction language**

- hover: elements lift gently. `transform: translateY(-3px)`. `transition: all 0.6s ease`. frosted panels brighten: `background: rgba(240, 236, 240, 0.7)`. buttons gain soft glow via `box-shadow`. no snappy or bouncy motion — everything is smooth and dreamy.
- active/pressed: `transform: translateY(0px)`. `opacity: 0.9`. gentle sink back. `transition: all 0.3s ease`.
- focus: `box-shadow: 0 0 0 3px rgba(128, 224, 232, 0.3)`. `outline: none`. `border-color: var(--cyan)`. visible on all interactive elements.
- selected: `background: rgba(128, 224, 232, 0.2)`. `border-color: var(--cyan)`. `color: var(--ink)`. subtle cyan tint.
- disabled: `opacity: 0.35`. `pointer-events: none`. `filter: saturate(0.3)`. faded, like a memory dissolving.
- drag: `cursor: grabbing`. `transform: translateY(-6px) scale(1.02)`. `box-shadow: 0 20px 48px rgba(0,0,0,0.12)`. element lifts dreamily.

**motion & feedback**

transitions:
- default: `0.6s ease` for all property changes. nothing snaps. everything drifts.
- spatial transforms: `0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)` — smooth deceleration, no bounce.
- background gradient: `animation: gradientShift 20s ease-in-out infinite alternate` — slow continuous hue drift, the sunset that never ends. `background-size: 200% 200%`.
- parallax drift: background elements move at `0.3x` scroll speed. foreground panels at `1x`. creates depth like looking through mall atrium levels.
- ambient float: `animation: float 8s ease-in-out infinite alternate` — decorative elements (palm fronds, column silhouettes) drift slowly. `translateY(-8px)` to `translateY(8px)`.

loading:
- three softly pulsing circles in `var(--bg-solid)`, `var(--lavender)`, `var(--cyan)`. `animation: pulse 1.2s ease-in-out infinite` with `0.2s` stagger. slow, hypnotic, like a shopping mall fountain.

success:
- soft cyan glow. element border shimmers: `box-shadow: 0 0 0 3px rgba(128, 224, 232, 0.4)`. fades over `0.8s ease`. no sudden flash — gentle confirmation.

error:
- soft sunset-orange glow. `box-shadow: 0 0 0 3px rgba(255, 176, 136, 0.5)`. text in `var(--sunset)`. gentle pulse, no shake — errors are polite here. `animation: softPulse 1s ease-in-out` — two gentle opacity oscillations.

**atmosphere**

- gradient background: `background: linear-gradient(135deg, #FFB8D0 0%, #C8A8E8 35%, #80E0E8 70%, #FFB088 100%)`. `background-size: 200% 200%`. animated via `gradientShift` keyframes — slow diagonal sweep creating an eternal pastel sunset.
- frosted glass panels: all content containers use `backdrop-filter: blur(12px)` over the gradient. creates depth layering — gradient visible through translucent surfaces.
- faux-marble texture: optional CSS pattern on card surfaces:
  ```css
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 20px,
    rgba(255,255,255,0.05) 20px,
    rgba(255,255,255,0.05) 40px
  );
  ```
  subtle diagonal veining, barely perceptible — marble memory, not marble replica.
- palm frond silhouettes: decorative SVG overlays positioned at viewport edges. `opacity: 0.06`. `color: var(--ink)`. `pointer-events: none`. slow drift animation. placed in bottom-left and top-right corners.
- column motif: optional vertical `border-left: 3px solid rgba(255,255,255,0.15)` on major section containers — suggests Roman columns without literal illustration.
- no scanlines, no noise, no CRT effects. the atmosphere is soft-focus, translucent, and bathed in gradient light — a dream of a place that never quite existed.
- the overall feeling is wandering through an empty shopping mall at sunset, muzak playing softly, fountains running, everything beautiful and slightly abandoned.

**editorial voice**

button labels: `Welcome Inside`, `Browse Collection`, `Now Available`, `Add to Wishlist`, `View Selection`, `Continue Shopping`, `Learn More`, `Visit Again`
— title case. soft, polite, consumer-aspirational. never urgent or pushy.

headings: `Welcome to Paradise`, `Premium Selection`, `The Concourse`, `Now Featuring`, `A Curated Experience`, `Thank You for Shopping`
— title case. nostalgic retail language. warm, slightly formal, like a department store PA system from 1988.

metadata: `Est. 1987`, `Level 3`, `Atrium Collection`, `Currently Open`, `Featured Selection`
— title case. mall-directory style. no technical jargon. timeless, slightly anachronistic.

placeholders: `Search the directory...`, `Enter your name`, `Leave a message...`, `What are you looking for?`
— sentence case. ellipsis for open-ended. warm and inviting, like a helpful concierge.

empty states: `The shelves are empty for now. New arrivals coming soon.`, `Nothing to display yet. Please come again.`, `This space is being prepared for you.`
— warm, polite, never blaming. the mall is always welcoming, even when empty.

error messages: `We're sorry, something went wrong. Please try again.`, `This selection is temporarily unavailable.`, `We couldn't complete your request. Our apologies.`
— formal-polite, never casual or slangy. the mall customer service voice — always apologetic, always composed.

success messages: `Thank You for Your Selection.`, `Added to your collection.`, `Saved successfully. Please come again.`, `Your request has been processed.`
— polite, slightly formal. period-terminated. the gentle chime of a completed transaction.

**cursor & selection**

- default body: `cursor: default`.
- interactive elements (buttons, cards, nav): `cursor: pointer`.
- draggable elements: `cursor: grab` (resting), `cursor: grabbing` (active drag).
- text inputs: `cursor: text`.
- `::selection { background: rgba(128, 224, 232, 0.4); color: var(--ink); }` — soft cyan selection, translucent like everything else.

**when to reach for this genome**

Use `vapor_concourse.mall` when the prompt asks for vaporwave, dead-mall nostalgia, pastel consumer fantasy, an 80s/early-90s shopping concourse, a dreamy retail directory, a nostalgic product catalog, a soft lifestyle landing page, or any interface that should feel like a translucent atrium at sunset rather than a literal store counter.

Reach for it when the visual cues are pink-lavender-cyan gradients, frosted glass panels, faux-marble surfaces, palm silhouettes, Roman-column hints, Cormorant Garamond italic display type, thin Outfit body text, polite mall-concierge copy, wishlist/catalog actions, and spacious layouts where the background glow remains visible through every panel.

Do not use it for neon tubes, chrome trim, jukebox selectors, roadside Americana, or midnight diner warmth; use `neon_diner.route`. Do not use it for 90s warehouse rave flyers, one-color risograph stock, lineups, venues, or club-night ticket pages; use `groove_flyer.90s`. Do not use it for GeoCities, guestbooks, web rings, visitor counters, tiled GIF backgrounds, or intentionally amateur old-web pages; use `geocities_page.www`. Do not use it for iPod/Aqua hardware, brushed aluminum, click-wheel music browsing, or tiny playback screens; use `clickwheel_pod.aqua`. Do not use it for Art Deco gold/navy luxury, Gatsby-era geometry, sunbursts, or sharp gilt lobby architecture; use `deco_metropolitan.gilt`.

It is strongest when the product can plausibly live inside a premium-but-melancholy mall experience: browse, enter, select, wishlist, visit, feature, and thank the customer. If the prompt centers on darker neon nightlife, printed music ephemera, chaotic old internet nostalgia, physical playback hardware, or angular luxury architecture, choose the more specific genome.

**anti-patterns — this genome NEVER:**

1. uses sharp corners or 0px border-radius — all elements have soft rounding (12px minimum), everything is smoothed and dream-like
2. uses bold, saturated, high-contrast color palettes — colors are always pastel, translucent, gradient-blended, never harsh or punchy
3. uses bouncy, springy, or snappy animations — all motion is slow (0.6s minimum), smooth, and dreamy, like moving underwater
4. uses opaque solid backgrounds on content panels — panels are always frosted glass (backdrop-filter blur + semi-transparent fill), the gradient always shows through
5. uses dark/black primary backgrounds — the world is always bathed in pastel gradient light, darkness exists only in text contrast
6. uses aggressive, urgent, or casual-slangy copy — the editorial voice is always polite, warm, slightly formal, consumer-aspirational, like a luxury mall PA system
7. uses monospace, pixel, or heavy-weight display fonts — typography is always thin, italic, serif for display (Cormorant Garamond 300) and light sans for body (Outfit 300-400)
8. uses flat, static layouts without atmospheric depth — there is always gradient background, frosted glass layering, parallax drift, and ambient animation creating spatial depth
9. uses bright primary colors (pure red, blue, yellow, green) as accents — the palette stays in the pastel-sunset spectrum (pink, lavender, cyan, peach), never primary or neon
10. uses crowded, dense, information-heavy layouts — spacing is always generous, content floats in pastel space, the mall concourse has room to breathe
