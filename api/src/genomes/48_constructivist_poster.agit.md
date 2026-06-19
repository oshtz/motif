---
id: "48"
name: constructivist_poster.agit
keywords:
  - constructivist
  - propaganda
  - soviet
  - diagonal
  - photomontage
  - revolutionary
  - geometric
  - agitprop
  - poster
  - bold
  - declarative
  - political
---

### genome 48: `constructivist_poster.agit`

> identity: Soviet constructivist propaganda poster as UI. Rodchenko's photomontages, El Lissitzky's "Beat the Whites with the Red Wedge," the Stenberg brothers' film posters — all compressed into a digital interface. Red, black, and cream. Dramatic diagonal compositions. Extreme typographic scale. Every element is a declaration, a proclamation, a call to action. This is political art — not punk zine collage, not rave flyer minimalism — this is the state speaking through geometry.

**surface**
- colors: `--bg: #F0E6D0; --red: #CC0000; --black: #1A1A1A; --cream: #F0E6D0; --gold: #D4A017; --red-dark: #990000; --cream-dark: #DDD0B8;`
- typography: `"Anton", "Oswald", "Impact", sans-serif` for display — MASSIVE scale: `font-size: 5rem` minimum for hero display, up to `10rem` for single-word declarations. `font-weight: 700–900`. `text-transform: uppercase` on ALL headings, no exceptions. Body text: `"Inter", "Helvetica Neue", Arial, sans-serif` at `font-weight: 500`, `font-size: 14–16px`, `line-height: 1.6`. Label/metadata text: `font-weight: 400`, `font-size: 11–12px`. Extreme weight contrast: 900 display vs 400 body. Display text frequently rotated via `transform: rotate(-15deg)` to `rotate(-45deg)` — diagonals are the compositional backbone.
- borders: `4–8px solid var(--black)` or `4–8px solid var(--red)` on major elements. `border-radius: 0px` on everything — all geometry is hard-edged. Diagonal lines achieved via CSS transforms (`rotate`, `skew`). Triangular/wedge dividers via clipped elements or rotated borders.
- spacing: overlapping, layered, non-grid. elements break containment, overlap each other, and create dynamic diagonal compositions. `padding: 16–24px` inside panels. Negative margins and absolute positioning used liberally to create photomontage-style layering. `z-index` stacking is deliberate and dramatic.

**color distribution**
- 40% cream stock (`--bg: #F0E6D0`) — the poster paper ground.
- 30% propaganda red (`--red: #CC0000`) — diagonal bands, header bars, accent fills, button backgrounds, section overlays.
- 25% near-black (`--black: #1A1A1A`) — text, borders, structural weight, photomontage frames.
- 5% worker's gold (`--gold: #D4A017`) — sparingly used for stars, accents, badges, occasional highlight text. gold is the reward, not the default.

**component patterns**
- buttons: bold rectangular blocks. `background: var(--red); color: var(--cream); border: 4px solid var(--black); border-radius: 0; text-transform: uppercase; font-family: "Anton", sans-serif; font-weight: 700; font-size: 1.1rem; letter-spacing: 0.08em; padding: 14px 32px`. optional: slight rotation (`transform: rotate(-2deg)`). secondary buttons: `background: var(--black); color: var(--cream)`. tertiary: `background: var(--cream); color: var(--black); border: 4px solid var(--black)`.
- inputs: `border: 4px solid var(--black); border-radius: 0; background: var(--cream); font-family: "Inter", sans-serif; font-weight: 500; padding: 12px 16px`. focus: `border-color: var(--red); box-shadow: inset 0 0 0 2px var(--red)`. label above in Anton uppercase, `font-size: 0.85rem`, `letter-spacing: 0.1em`.
- cards/panels: `border: 4–6px solid var(--black)`. header stripe in `var(--red)` or `var(--black)` with cream text. panels may be rotated 2–5 degrees for dynamism. content sections overlap neighboring cards. no soft shadows — weight comes from thick borders and color contrast.
- navigation: a bold top bar — `background: var(--black); color: var(--cream)`. nav items in uppercase Anton. active item: `background: var(--red)`. the nav bar may have a diagonal bottom edge via `clip-path` or rotated pseudo-element. alternatively: vertical sidebar nav with items stacked as bold rotated labels.
- headers: full-width. title in Anton at 5–10rem, rotated -5 to -15 degrees, breaking out of its container. subtitle in Inter 500 below, horizontal. red or black background bands behind text. the header IS the poster — it dominates the viewport.
- footers: `background: var(--black); color: var(--cream)`. bold top border in red (`8px solid var(--red)`). content in uppercase Inter. metadata arranged in a horizontal band. optional gold star decorative elements.
- lists: numbered with bold red or black numerals (`01`, `02`, `03`) in Anton at oversized scale. items separated by `2px solid var(--black)` borders. text in Inter 500. no bullets — numerals only.
- tables: all cells bordered `2px solid var(--black)`. header row: `background: var(--red); color: var(--cream); font-family: "Anton"; text-transform: uppercase`. body rows alternate `var(--cream)` and `#E8DCC6`. the table itself has a `4px solid var(--black)` outer border.
- dividers: diagonal bands — a full-width element rotated 5–15 degrees, `background: var(--red)` or `var(--black)`, height 6–12px. alternatively: triangular wedge shapes via CSS clip-path. never a simple horizontal line.
- modals: `border: 6px solid var(--black)`. header bar in red with cream text in Anton. the modal itself may be slightly rotated (`transform: rotate(-1deg)`). no backdrop blur — instead a solid `rgba(26, 26, 26, 0.85)` overlay. the modal feels like a poster pinned over another poster.
- tooltips: `background: var(--red); color: var(--cream); border: 3px solid var(--black); border-radius: 0; padding: 8px 14px; font-family: "Anton"; text-transform: uppercase; font-size: 0.85rem; transform: rotate(-3deg)`.
- badges/tags: `background: var(--red); color: var(--cream)` or `background: var(--gold); color: var(--black)`. `border: 2px solid var(--black); border-radius: 0`. uppercase Anton. `padding: 4px 12px`. optional rotation.
- images: circular photomontage-style cutouts via `border-radius: 50%` (the ONE exception to the no-radius rule — only for photomontage circles). `border: 4–6px solid var(--black)`. `filter: grayscale(1) contrast(1.4)` by default. high-contrast black-and-white treatment. on hover: slight scale (`transform: scale(1.05)`). images often overlap other elements with `position: absolute` and `z-index` layering.

**interaction language**
- hover: immediate color inversion — `background` and `color` swap instantly. no transition duration (or max `0.05s`). elements may shift 2–3px diagonally on hover (`transform: translate(-2px, -2px)`).
- active/pressed: `transform: translate(2px, 2px)` — element slams forward. background shifts to darker variant (`--red-dark` or pure black).
- focus: `outline: 4px solid var(--red); outline-offset: 2px`. bold and visible. on dark backgrounds: `outline-color: var(--gold)`.
- selected: `background: var(--red); color: var(--cream)`. the selection is a declaration — bold and unambiguous.
- disabled: reduced to cream and light gray. `opacity: 0.4`. diagonal strike-through line via pseudo-element (`::after` with a rotated 2px red line across the element).
- drag: element gains a `6px 6px 0px var(--black)` hard shadow and rotates slightly (`transform: rotate(-3deg)`). feels like lifting a paper cutout from the poster.

**motion & feedback**
- transitions: instant or near-instant. maximum `0.15s ease-out`. most state changes are `0s` — things SLAM into their new state. no smooth easing, no gentle fades. the only deliberate motion is elements that slam into position: `transform` with `0.15s ease-out`.
- loading: a bold red bar that slams across the top of the viewport. below it, the word "FORWARD!" in Anton at 3rem, pulsing between red and black at 0.5s intervals. no spinners — spinners are bourgeois.
- success: a large stamp appears — red background, cream text, rotated 8–12 degrees, reads "COMPLETED!" or "VICTORY!" or "ACHIEVED!". `animation: slam 0.15s ease-out` (scales from 1.3 to 1.0). visible for 2 seconds.
- error: element border flashes red 3 times rapidly (50ms on/off). a stamp appears: "REJECTED!" or "FAILURE!" or "UNACCEPTABLE!" in black on gold, rotated.
- page enter: elements slam in from off-screen — `transform: translateX(-100vw) rotate(-15deg)` to `translateX(0) rotate(0)` over `0.2s ease-out`. staggered by 50ms per element. diagonal entry, not vertical. alternatively: instant appearance (also valid — posters don't animate).

**atmosphere**
- background: `var(--bg): #F0E6D0` — warm cream poster stock.
- diagonal bands of red or black cross the background at 15–30 degree angles via rotated pseudo-elements or `linear-gradient` at angles. these are structural, not decorative — they organize the composition.
- geometric shapes — circles, triangles, wedges — placed as background elements via CSS. red circles (`border-radius: 50%`) act as photomontage frames. black triangles point toward CTAs (directional energy).
- a subtle paper texture is acceptable at low opacity (3–5%) — this is printed poster stock, not a screen.
- star motifs (five-pointed) in gold or red, used sparingly as decorative accents. implemented via CSS clip-path or Unicode (`★`).
- the overall composition should feel DIAGONAL — not a neat vertical scroll. elements rotated, bands crossing at angles, text at diagonals. the screen should feel like looking at a Rodchenko poster.

**editorial voice**
- button labels: imperative, commanding. `FORWARD!`, `BUILD!`, `JOIN!`, `ACT NOW!`, `UNITE!`, `COMMENCE!`, `SUBMIT!`, `ENLIST!`, `PROCEED!`. all-caps. always exclamatory.
- headings: declarative proclamations. `THE FUTURE IS NOW!`, `WORKERS OF THE WORLD!`, `A NEW ORDER!`, `THE PLAN ADVANCES!`, `PRODUCTION REPORT!`, `ONWARD TO VICTORY!`. massive scale. extreme typographic weight. often rotated.
- metadata: bureaucratic, systematic. `BULLETIN NO.048`, `SECTOR 7`, `UNIT //03`, `CYCLE 2026`, `PRIORITY: MAXIMUM`, `STATUS: ACTIVE`, `DIRECTIVE 12.4`.
- placeholders: `ENTER YOUR DESIGNATION...`, `STATE YOUR PURPOSE...`, `YOUR CONTRIBUTION HERE...`.
- empty states: `NO DATA RECEIVED!`, `AWAITING INPUT!`, `THE QUEUE IS EMPTY!`, `NOTHING TO REPORT!`.
- error messages: `REJECTED!`, `UNACCEPTABLE!`, `ERROR IN SECTOR 4!`, `DIRECTIVE FAILED!`, `RETRY IMMEDIATELY!`.
- success messages: `VICTORY!`, `MISSION ACCOMPLISHED!`, `COMPLETED!`, `APPROVED!`, `THE PLAN SUCCEEDS!`.

**cursor & selection**
- cursor: `default` globally — the poster commands, you obey. `pointer` on interactive elements.
- text selection: `::selection { background: var(--red); color: var(--cream); }`.

**anti-patterns — this genome NEVER:**
- uses border-radius on any element except photomontage circular image cutouts. everything else is hard-edged, 0px radius.
- uses soft shadows (`box-shadow` with blur). only hard offset shadows (`4px 4px 0px` or `6px 6px 0px`) when shadows appear at all.
- uses pastel colors, muted tones, or low-saturation palettes. the palette is high-contrast: red, black, cream, gold. no gray, no beige, no soft blue.
- uses smooth, slow transitions (anything > 200ms). state changes are immediate and impactful. no gentle fades, no ease-in-out over 300ms.
- uses centered, symmetrical, grid-aligned compositions exclusively. the layout must break symmetry with diagonal elements, rotated text, overlapping panels. a perfectly neat grid is anti-constructivist.
- uses thin, light, or decorative typefaces for headings. display text is always heavy condensed geometric sans at 700–900 weight. no serifs, no scripts, no thin weights on headlines.
- uses polite, conversational, or questioning language. the voice is imperative, declarative, exclamatory. never "Would you like to...?" — always "ACT!" or "PROCEED!".
- uses rounded UI patterns (pill buttons, soft cards, bubble tooltips). every shape is angular, every edge is sharp.
- uses backdrop-filter, blur effects, or frosted glass. this is printed poster, not digital glass. opacity overlays are solid-color, not blurred.
- uses gradient fills on UI elements. color is flat and absolute — red is red, black is black. no gradients on buttons, cards, or panels.

**when to reach for this genome**

When the request is for a manifesto landing page, an activist/cause-driven site, a bold creative-agency portfolio, an "anti-corporate" brand statement, or any artifact that should feel like a printed political poster from the 1920s. Reach for it when the user wants extreme typographic scale and diagonal energy — and explicitly distinct from punk zine collage (genome 03) and Bauhaus modernism (genome 83).

**page archetype guidance**

- landing page: massive hero title in Anton at 8–10rem rotated `-10deg`, bleeding off the edge; red diagonal band cutting across the viewport; circular photomontage image overlapping the title; commanding CTA `JOIN!` in bold red block.
- manifesto/about: numbered declarations (`01.`, `02.`, `03.`) at oversized scale, each on its own diagonal panel, alternating red/black/cream backgrounds with rotated typography.
- portfolio: project cards as photomontage circles with thick black borders, project names in Anton rotated, gold accent badges for featured works, hover scales images to full saturation.
- call-to-action page: full-viewport hero with single declarative word (`UNITE!` / `BUILD!` / `FORWARD!`) in Anton at 14rem, diagonal red band beneath, single bold CTA button.

**layout grammar & responsive behavior**

- page shell: `body { background: var(--cream); color: var(--black); overflow-x: hidden; }`; composition may bleed horizontally but must not create accidental scrollbars.
- poster stage: use `position: relative; min-height: 100vh; isolation: isolate;` so diagonal bands, circles, and type layers can stack deliberately.
- primary grid: not a neutral card grid. Use large diagonal zones with `clip-path: polygon(...)`, rotated bands, and overlapping columns.
- safe reading zone: despite diagonals, body copy should sit in stable rectangular or trapezoid panels with max width `60ch`.
- desktop hero: title can occupy 55-75% of the first viewport; a red wedge or black band should cut through or behind it.
- mobile hero: reduce rotation to `-4deg` to `-8deg`, keep giant type but prevent clipping critical words; single-word headings can stay huge.
- z-index ladder: background bands `0`, image circles `1`, large type `2`, CTA blocks `3`, stamps/badges `4`, modal overlays `10`.
- negative margins: allowed for poster energy, but each overlap must reveal at least one complete readable label.
- diagonal gutters: use bands as section separators instead of white space; `height: 8px-18px`, `transform: rotate(-3deg)` or `skewX(-12deg)`.
- responsive panels: rotated cards return closer to `0deg` below 520px while keeping thick borders and red/black blocks.
- footer: should feel like the bottom imprint of a poster, not a generic site footer; keep it black with red top rule and bureaucratic metadata.
- avoid center-only symmetry: even when text is centered, add a wedge, circle, or rotated caption to break the axis.

**expanded component recipes**

- proclamation banner: full-width red or black strip with cream text, `font-family: "Anton"; font-size: clamp(2rem, 8vw, 7rem); line-height: 0.9`.
- wedge CTA: `clip-path: polygon(0 0, 100% 12%, 92% 100%, 0 86%)`; fill red, border black, text cream.
- manifesto block: numbered declarations with huge `01`, `02`, `03` in black or red, body text inside a cream panel bordered 4px black.
- recruitment form: labels in Anton uppercase, fields cream with 4px black border, submit button red and offset by hard black shadow.
- statistics panel: big number in Anton, label in Inter uppercase, diagonal underline; examples `5,000`, `72%`, `DIRECTIVE 12`.
- progress indicator: not a thin bar. Use block segments like printed registration marks; completed segments red, remaining cream with black border.
- accordion: header is a red block with a black numeral; body slams open into a cream bordered panel. No smooth height animation.
- carousel: cards overlap like poster sheets; active card gets hard black shadow and larger rotation, inactive cards are partially occluded.
- timeline: diagonal stair-step sequence with red/black blocks; dates in small bureaucratic text, declarations in Anton.
- modal: rotated at most `-1deg` on desktop; keep content readable and square on mobile. Header reads `DIRECTIVE!` or `NOTICE!`.
- tooltip: small red label attached like a paste-up correction; no arrow bubble, no rounded pointer.
- menu: black panel with red active rows and cream text; menu items are huge enough to feel like poster headlines, not a tiny dropdown.
- checkbox: square black border; checked state is red fill with cream `X` or check mark. No rounded toggles.
- toggle: represent as two adjacent block buttons `OFF!` / `ON!`; active block red, inactive cream, both bordered black.
- badges: gold is for rare priority/award labels only: `HERO!`, `PRIORITY!`, `APPROVED!`.
- image caption: red or black strip pasted over the image corner, rotated `-4deg`, with Anton uppercase text.
- quote block: enormous opening quote mark in red, body in Inter 600, attribution in Anton uppercase.
- table variant: use poster-like oversized first column for rank/number, but keep data cells aligned; all borders remain straight and black.

**state rules & validation**

- hover color inversion must be legible in both directions: red-to-black, black-to-red, cream-to-red.
- hover transforms are hard and small: `translate(-2px, -2px)` or `rotate(-1deg)`; no smooth hover drift.
- active buttons move down/right with `transform: translate(3px, 3px)` and lose any hard shadow, like a block being struck.
- focus outline is never subtle. Use `outline: 4px solid var(--gold)` on red/black surfaces and `outline: 4px solid var(--red)` on cream.
- selected rows or cards get red fill and black border; add a stamped label `SELECTED!` if the selection is central to the workflow.
- disabled controls are visibly crossed out with a diagonal red or black pseudo-element; opacity alone is not enough.
- invalid inputs receive a red-black warning band above the field and copy such as `FIELD REJECTED!`.
- success states are declarative stamps, not gentle confirmations; attach the stamp near the completed component.
- errors can flash or slam once, but do not loop indefinitely; poster agitation should not make the UI unusable.
- drag states treat components as paper cutouts: hard shadow, slight rotation, no blur.
- loading should be textual and graphic: a red block sweep plus `FORWARD!`, `PROCESSING!`, or `ASSEMBLING!`.
- reduce motion preference: if `prefers-reduced-motion`, disable slam entrances and use instant state changes while preserving rotations and stamps.

**photomontage, geometry & texture**

- image treatment: `filter: grayscale(1) contrast(1.45); border: 6px solid var(--black); background: var(--cream)`.
- circular cutouts are allowed only for photomontage portraits/products; use `border-radius: 50%` and thick black ring.
- rectangular images use hard clipping and diagonal overlays; do not radius them.
- halftone texture: acceptable as `radial-gradient(var(--black) 1px, transparent 1px)` at 3-6% opacity over images or red fields.
- paper grain: low opacity only; it should read as print stock, not distressed grunge.
- geometric inventory: wedges, circles, rectangles, thick rules, star marks, registration crosses, and arrows.
- arrows: huge black or red directional arrows are allowed when they push the eye toward a CTA.
- diagonal angles: common range `-18deg` to `18deg`; extreme `-45deg` only for large background wedges or typographic shock.
- color registration: slight offset red/black duplicate text can be used sparingly for print misregistration, `transform: translate(2px, 2px)`.
- avoid collage clutter: every shape should aim attention or frame content; random scraps weaken the state-poster identity.

**copy blocks & examples**

- hero heading: `FORWARD TO THE PLAN!`.
- secondary heading: `PRODUCTION REPORT!`.
- CTA label: `JOIN THE WORK!`.
- form label: `DESIGNATION!`.
- placeholder: `ENTER SECTOR CODE...`.
- status badge: `PRIORITY: MAXIMUM!`.
- success stamp: `VICTORY REGISTERED!`.
- error stamp: `DIRECTIVE FAILED!`.
- empty state: `NO REPORTS RECEIVED!`.
- metadata line: `BULLETIN NO.048 | SECTOR 7 | CYCLE 2026 | UNIT //03`.
- table columns: `RANK!`, `UNIT!`, `OUTPUT!`, `STATUS!`.
- footer imprint: `PRINTED BY THE COMMITTEE FOR VISUAL ORDER | EDITION 04`.

**selection boundaries & overlap notes**

- choose `constructivist_poster.agit` over `neo_brutalist.zine` when the composition should feel like disciplined political poster art, not photocopied punk collage.
- choose `neo_brutalist.zine` for raw zine edges, chaotic photocopy energy, and anti-polish editorial grit.
- choose `bauhaus_workshop.modernist` for rational geometry, primary-color restraint, and workshop pedagogy; constructivist uses sharper propaganda urgency and diagonal force.
- choose `deco_metropolitan.gilt` for luxury poster elegance; constructivist rejects glamour in favor of red/black public command.
- choose `signal_broadsheet.live` for newspaper/live-bulletin layouts; constructivist is less journalistic and more declarative.
- choose this genome for manifesto pages, campaign launches, bold cause-driven brands, aggressive portfolios, and high-impact landing screens.
- avoid it for ordinary admin dashboards unless the product intentionally wants rhetorical pressure and theatrical composition.
- if the prompt says "poster" but asks for calm cultural programming, consider Deco, Bauhaus, or Playbill before this agitprop route.

**production checklist**

- use red, black, and cream as the dominant triad; gold appears only as a small reward or priority signal.
- include at least one diagonal band or wedge in any major page.
- use Anton/Impact-like display scale large enough to dominate the composition.
- keep body copy readable inside stable panels.
- keep every UI control square-edged except photomontage circles.
- ensure every exclamation-mark command still names a clear action.
- use hard offset shadows only when treating elements as pasted paper.
- provide reduced-motion behavior for slam entrances.

**implementation tokens & QA notes**

- CSS radius token: `--radius: 0px`; only `.photomontage-circle` may set `border-radius: 50%`.
- CSS border token: `--poster-rule: 4px solid var(--black)`; use as the baseline control and panel border.
- CSS shadow token: `--hard-shadow: 6px 6px 0 var(--black)`; no blur value is permitted.
- CSS angle token: `--poster-angle: -8deg`; use for repeated headings and small card rotation.
- CSS slam token: `--slam: 150ms ease-out`; never exceed 200ms for impact motion.
- responsive QA: at 375px width, giant headings may wrap but must not hide the CTA or primary navigation.
- readability QA: rotated body copy is allowed only for short labels; paragraphs stay horizontal or near-horizontal.
- motion QA: implement `@media (prefers-reduced-motion: reduce)` with no slam entrance and no flashing error loop.
- color QA: gold appears as a 5% accent only; if gold becomes a large field, the design drifts toward Deco or luxury.
- composition QA: each major section needs a diagonal, wedge, oversized numeral, photomontage circle, or thick rule.
- copy QA: exclamation marks are required for commands, but the verb must remain clear: `SUBMIT!`, not vague noise.
- overlap QA: torn edges, photocopy grime, and hand-scrawled annotations belong to `neo_brutalist.zine`, not this genome.
- overlap QA: tidy primary-color teaching diagrams belong to `bauhaus_workshop.modernist`, not this urgent poster voice.
- interaction QA: hover/active states should feel like print blocks snapping, not like modern material elevation.
- image QA: photomontage cutouts need high contrast and strong cropping; soft lifestyle photography breaks the grammar.
- finish QA: the page should feel like a public proclamation translated into UI, not an app wearing red paint.

**signature techniques**

- diagonal rotation as compositional spine: hero titles use `transform: rotate(-10deg)` to `rotate(-15deg)`; cards and panels rotate `2–5deg`. Diagonals are not decoration — they organize the entire composition.
- extreme typographic scale: hero text is `font-size: 8–14rem` MINIMUM. Section headers are `5–7rem`. The contrast between these and 14px body text is the defining typographic move. Anything smaller on display breaks the genome.
- photomontage circles: the ONE exception to the 0px-radius rule — circular image cutouts via `border-radius: 50%; border: 4–6px solid var(--black); filter: grayscale(1) contrast(1.4)`. These are Rodchenko-style photomontage elements, never used for buttons or chrome.
- diagonal bands as dividers: full-width `4–12px` colored bars rotated `5–15deg` via `transform: rotate()` — replacing standard `<hr>` elements throughout. These cross the composition at angles.
- slam entrance: page elements enter via `transform: translateX(-100vw) rotate(-15deg)` → `translateX(0) rotate(0)` over `0.2s ease-out` with `50ms` per-element stagger. The poster pieces slam into place.
- stamp success/error: success/error feedback is a rotated rectangular stamp element (`transform: rotate(8deg)`) reading `VICTORY!` or `REJECTED!` — never a quiet toast or modal dialog.
- exclamatory voice mandate: every button label, every heading, every success/error message ends with `!`. The genome speaks in proclamations, never in questions or polite suggestions.
- five-pointed gold star as decorative accent: `★` via Unicode or CSS clip-path, in `--gold`, placed sparingly at section corners — the reward symbol of socialist iconography.
