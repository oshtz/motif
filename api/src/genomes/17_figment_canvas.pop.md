---
id: "17"
name: figment_canvas.pop
keywords:
  - creative
  - art
  - canvas
  - playful
  - colorful
  - imagination
  - studio
  - vibrant
  - pop
  - pink
  - bold
  - generative
  - maximalist
  - expressive
  - illustration
---

### genome 17: `figment_canvas.pop`

> identity: digital art studio meets pop maximalism. hot pink fields, warped grids, bold geometric sans-serif, and organic scalloped edges — a creative tool designed by someone who studied at both Bauhaus and an 80s Tokyo design school.

**surface**

colors:
```
--bg: #FFAAFA;            /* hot pink field — the canvas ground */
--grid: #F184EB;          /* magenta grid lines, slightly darker than bg */
--brand: #EF3922;         /* vermillion red — primary text, accents, CTAs */
--card-dark: #0E0E0E;     /* near-black — dark card fills, contrast anchors */
--card-green: #1B7F4E;    /* emerald — secondary card fill, data accents */
--card-orange: #F46927;   /* tangerine — tertiary card fill, warm highlights */
--card-light: #F2F2F2;    /* near-white — light card fill, input backgrounds */
--ink: #0E0E0E;           /* near-black — body text on light surfaces */
```

typography:
- display / headings: `'Syne', sans-serif`. weight 700-800. size range `clamp(3.5rem, 12vw, 12rem)` for hero, `2rem-3rem` for section heads, `1.2rem-1.5rem` for sub-heads. `letter-spacing: -0.04em`. `line-height: 0.9` for hero, `1.1` for section heads.
- accent / navigation: `'Cormorant Garamond', serif`. weight 400. `font-style: italic`. size `1.2rem-1.5rem`. used exclusively for nav labels, captions, and secondary metadata.
- body / UI: `'Syne', sans-serif`. weight 400. size `0.95rem-1.1rem`. `line-height: 1.5`. `letter-spacing: 0`.
- hierarchy is established through size contrast (massive display vs small body) and family switching (serif italic for accent vs geometric sans for structure).

borders:
- cards and panels: `border-radius: 12px`. no visible border — shape defined by background fill and `box-shadow: 0 10px 30px rgba(0,0,0,0.05)`.
- buttons: organic scalloped SVG border path, `stroke-width: 1.5px`, stroke color `var(--brand)`. `border-radius: 20px` on fallback `::before` pseudo-element.
- inputs: `border: 1.5px solid var(--brand)`. `border-radius: 12px`.
- dividers: none — sections separated by color field changes or spatial gaps.

spacing:
- generous whitespace. `gap: 1.5rem` between stacked elements. `padding: 2rem` on navigation items. hero content vertically centered with `translateY(-2vh)` offset.
- cards sized at `160px × 100px` minimum. orbit radius ~320px from center.

**color distribution**

- 45% hot pink (`--bg`) — the dominant canvas ground, immediately recognizable
- 20% vermillion red (`--brand`) — all text, borders, interactive elements on pink surfaces
- 15% near-black (`--card-dark`, `--ink`) — dark card fills, text on light surfaces, anchoring contrast
- 10% multi-color cards (`--card-green`, `--card-orange`, `--card-light`) — distributed across floating elements, no single secondary dominates
- 10% magenta grid (`--grid`) — atmospheric background texture only

**component patterns**

buttons:
- primary: organic scalloped-edge SVG border (8-point scallop, each arc ~20px wide, concave inward, stroke only `stroke-width: 1.5px`). transparent background. `color: var(--brand)`. `font-family: 'Syne', sans-serif`. `font-size: 1.1rem`. `padding: 1rem 2.5rem`. on hover, SVG path fills `var(--brand)` and text inverts to `var(--bg)`. `transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)` — bouncy spring.
- secondary: `border: 1.5px solid var(--brand)`. `border-radius: 20px`. transparent background. same hover fill behavior.
- icon buttons: circular, `40px × 40px`. `border-radius: 50%`. `border: 1.5px solid var(--brand)`.

inputs:
- `background: var(--card-light)`. `border: 1.5px solid var(--brand)`. `border-radius: 12px`. `padding: 0.75rem 1rem`. `font-family: 'Syne', sans-serif`. `font-size: 0.95rem`. placeholder in `var(--brand)` at `opacity: 0.4`.
- focus: `box-shadow: 0 0 0 3px rgba(239, 57, 34, 0.2)`. border stays `var(--brand)`.
- labels: `font-family: 'Cormorant Garamond', serif`. `font-style: italic`. `font-size: 1rem`. positioned above input with `margin-bottom: 0.5rem`.

cards:
- `border-radius: 12px`. `overflow: hidden`. `box-shadow: 0 10px 30px rgba(0,0,0,0.05)`. background varies per card (`--card-dark`, `--card-green`, `--card-orange`, `--card-light`). no visible border. cards contain SVG illustrations or content. slight rotation (`rotate(-10deg)` to `rotate(20deg)`) for playful scatter.

navigation:
- corner-anchored layout. nav items positioned absolutely in the four viewport corners (`top-left`, `top-right`, `bottom-left`, `bottom-right`). `font-family: 'Cormorant Garamond', serif`. `font-style: italic`. `font-size: 1.5rem`. `color: var(--brand)`. `padding: 2rem`. `transition: opacity 0.3s ease`. hover: `opacity: 0.6`.

headers:
- hero: single word or short phrase. `font-size: clamp(6rem, 12vw, 12rem)`. `font-weight: 700`. `letter-spacing: -0.04em`. `line-height: 0.9`. `color: var(--brand)`. centered.
- section: `font-size: 2rem`. `font-weight: 700`. `color: var(--brand)`. left-aligned or centered depending on context.

footers:
- minimal. same corner-anchor pattern as nav — info distributed to viewport edges rather than a traditional footer bar. `font-family: 'Cormorant Garamond', serif`. `font-style: italic`.

lists:
- no bullets. items separated by `gap: 0.75rem`. active item: `color: var(--brand)`. `font-weight: 700`. inactive: `color: var(--ink)`. `opacity: 0.6`.

tables:
- `border-radius: 12px` on outer container. `overflow: hidden`. header row: `background: var(--card-dark)`. `color: var(--card-light)`. body rows alternate between `var(--bg)` and `rgba(255,255,255,0.3)`. no visible cell borders — separation through color.

dividers:
- avoided. use spatial gaps and color field transitions instead. when absolutely necessary: `1px solid var(--grid)`.

modals:
- `background: var(--card-light)`. `border-radius: 16px`. `box-shadow: 0 20px 60px rgba(0,0,0,0.15)`. no border. backdrop: `background: rgba(255,170,250,0.8)` with `backdrop-filter: blur(8px)`. header in `'Cormorant Garamond', serif` italic.

badges/tags:
- pill-shaped. `border-radius: 9999px`. `padding: 0.25rem 0.75rem`. `font-size: 0.75rem`. `font-weight: 700`. `text-transform: uppercase`. `letter-spacing: 0.05em`. background rotates through `var(--card-green)`, `var(--card-orange)`, `var(--brand)`. text white or `var(--card-light)`.

**interaction language**

- hover: elements scale up with spring easing. `transform: scale(1.05)`. `transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)`. rotated elements un-rotate to `0deg`. buttons fill with `var(--brand)`, text inverts. nav items: `opacity: 0.6`.
- active/pressed: `transform: scale(0.97)`. spring back. for buttons: momentary invert — `background: var(--brand)`, `color: var(--bg)`.
- focus: `box-shadow: 0 0 0 3px rgba(239, 57, 34, 0.3)`. `outline: none`. visible on all interactive elements.
- selected: `background: var(--brand)`. `color: var(--bg)`. badge or card gets `box-shadow: 0 0 0 3px var(--brand)`.
- disabled: `opacity: 0.3`. `pointer-events: none`. `filter: grayscale(0.5)`.
- drag: `cursor: grabbing`. `transform: scale(1.08) rotate(2deg)`. `box-shadow: 0 20px 40px rgba(0,0,0,0.15)`. element lifts off surface.

**motion & feedback**

transitions:
- default: `0.3s ease` for opacity and color changes.
- spatial transforms: `0.2s cubic-bezier(0.34, 1.56, 0.64, 1)` — bouncy spring overshoot.
- card hover straightening: `0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)` — elastic settle.
- background grid: `animation: breathe 20s ease-in-out infinite alternate` — very slow scale pulse.
- floating cards: `animation: float 5-8s ease-in-out infinite alternate` — gentle vertical bobbing, staggered durations per card.

loading:
- pulsing circle animation. three dots in `var(--brand)`, `var(--card-green)`, `var(--card-orange)` bouncing in sequence. `animation: bounce 0.6s ease-in-out infinite alternate` with stagger.

success:
- brief green flash. element border glows `var(--card-green)` via `box-shadow: 0 0 0 3px var(--card-green)`. fades over `0.5s`.

error:
- element border pulses `var(--brand)` (vermillion). `box-shadow: 0 0 0 3px var(--brand)`. text shakes with `animation: shake 0.3s ease` — `translateX(-4px, 4px, -2px, 0)`.

**atmosphere**

- warped grid background: CSS grid lines (`1px` lines, `60px` spacing) in `var(--grid)` on `var(--bg)`. distorted via SVG filter:
  ```xml
  <feTurbulence type="turbulence" baseFrequency="0.003" numOctaves="2" result="noise"/>
  <feDisplacementMap in="SourceGraphic" in2="noise" scale="80"/>
  ```
  creates organic, wavy distortion of the grid — like looking through heat haze or thick glass. `opacity: 0.7`.
- the grid layer is oversized (`140% width/height`, offset `-20%`) to prevent edge gaps during animation.
- slow breathing animation on the grid: subtle scale pulse (`scale(1)` to `scale(1.05)`) over 20s.
- no scanlines, no noise textures, no vignettes. the atmosphere is bright, open, and alive — not dark or gritty.
- cards scattered in orbital arrangement create a sense of creative chaos — tools floating around a central idea.
- the overall feeling is a sun-drenched creative workspace, not a dark lab.

**editorial voice**

button labels: `Start creating`, `Imagine this`, `Open canvas`, `Generate`, `Remix`, `Share it`, `Try again`, `Explore more`
— sentence case. short, active, inviting. never imperative-aggressive.

headings: single evocative words or very short phrases. `Imagine.`, `Create.`, `Your canvas`, `What if?`, `Start here`
— sentence case with period for single words. no ALL CAPS. aspirational but not corporate.

metadata: `Made with Figment`, `v2.4`, `3 layers`, `Updated today`, `Public`
— lowercase-leaning. casual. no timestamps with seconds.

placeholders: `Describe what you see...`, `Name your project`, `Search your creations`, `Add a note`
— lowercase start (except first word). ellipsis for open-ended prompts. warm, inviting.

empty states: `Nothing here yet — start creating something.`, `Your canvas is blank. That's where every masterpiece begins.`, `No results. Try a different search?`
— encouraging, never scolding. acknowledges emptiness as potential.

error messages: `Something went sideways. Try again?`, `We couldn't save that. Check your connection.`, `This format isn't supported yet.`
— casual, non-technical, non-alarming. question marks invite retry.

success messages: `Saved!`, `Nice — your project is live.`, `Creation exported.`, `Remixed successfully.`
— brief. celebratory but restrained. occasional dash for rhythm.

**cursor & selection**

- default body: `cursor: default`.
- interactive elements (buttons, cards, nav): `cursor: pointer`.
- draggable cards: `cursor: grab` (resting), `cursor: grabbing` (active drag).
- text inputs: `cursor: text`.
- `::selection { background: var(--brand); color: var(--bg); }` — vermillion selection on pink text reversal.

**when to reach for this genome**

Use `figment_canvas.pop` when the prompt asks for a playful digital art studio, generative canvas, illustration tool, creative remix app, expressive portfolio workspace, imagination board, maximalist design surface, bold creator dashboard, hot-pink art playground, or experimental visual editor where saturated color, warped grids, floating cards, organic scalloped controls, and inviting creative copy should dominate.

Reach for it when the user wants a sun-drenched pop creative workspace rather than a restrained tool: hot pink fields, vermillion text, Syne display type, Cormorant italic captions, scattered orbital cards, bouncy hover motion, creative prompts, and friendly "start creating" language.

Do not use it for spatial voxel editors, low-poly scene builders, warm parchment 3D construction tools, or WebGL module grids; use `voxel_atelier.xyz`. Do not use it for 90s rave flyers, warehouse events, risograph indigo ink, or music-poster ephemera; use `groove_flyer.90s`. Do not use it for roller disco, skating rinks, mirror balls, chrome wordmarks, or retro nightlife booking flows; use `roller_disco.glitter`. Do not use it for pixel-art botanical portfolios, cobalt fields, indie artist gardens, or flower-meadow worlds; use `pixel_garden.bloom`. Do not use it for formal Bauhaus workshop grids, primary-color design-school exercises, or didactic geometric pedagogy; use `bauhaus_workshop.modernist`. Do not use it for constructivist political posters, propaganda diagonals, red wedges, or state-like declarations; use `constructivist_poster.agit`.

It is strongest when the interface itself should feel like an expressive creative act: if the prompt centers on nightlife, retro print flyers, formal modernism, political poster language, pixel gardens, or 3D voxel construction, choose a more exact genome.

**anti-patterns — this genome NEVER:**

1. uses dark or black backgrounds as the primary surface — the canvas is always a saturated color field (pink)
2. uses monospace or pixel fonts — typography is always geometric sans-serif (Syne) and elegant serif (Cormorant Garamond)
3. uses sharp 0px border-radius — all containers have soft rounding (12px minimum), buttons have organic or pill shapes
4. uses rigid grid-locked layouts without organic elements — always includes at least one warped, rotated, or floating element
5. uses muted, desaturated, or pastel-only palettes — colors are bold, saturated, and high-contrast
6. uses formal, corporate, or technical language — editorial voice is always casual, warm, and creatively inviting
7. uses visible borders as primary panel separators — cards and panels are defined by fill color and shadow, not stroke
8. uses static layouts without any motion — there is always gentle ambient animation (floating, breathing, pulsing)
9. uses dropdown menus or traditional nav bars — navigation is spatially distributed (corner-anchored, orbital) not linear
10. uses gray as an accent color — grays are only structural (near-black for contrast, near-white for light fills), never decorative
