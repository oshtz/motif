---
id: "38"
name: ceramic_workshop.kiln
keywords:
  - ceramic
  - pottery
  - kiln
  - glaze
  - handmade
  - terracotta
  - craft
  - stoneware
  - organic
  - batch
  - earthenware
  - workshop
---

### genome 38: `ceramic_workshop.kiln`

> identity: handmade pottery studio inventory system. warm earth glazes, imperfect edges, kiln-fired textures. a potter's workshop management tool — tracking batches, glazes, firing schedules, and inventory. the UI itself feels hand-thrown: organic shapes, weighted motion, craft-process language. deep warm earth palette with terracotta, celadon, and ash. the ONLY genome using a handwriting-style display typeface.

**surface**

colors:
```
--terracotta: #C1714F;          /* kiln-fired red clay — primary accent, warmth, action */
--celadon: #8FAE8B;             /* green glaze — success states, growth, completed firings */
--ash-white: #F0EDE5;           /* kiln ash — page background, the studio ground */
--iron-oxide: #5C3D2E;          /* dark brown — primary text, deep contrast */
--stoneware: #A89F94;           /* warm gray — secondary elements, metadata, borders */
--slip-cream: #F7F3EC;          /* raw slip — card backgrounds, elevated surfaces */
--kiln-red: #A8553A;            /* deeper terracotta — hover/pressed states */
--charcoal-ash: #3D3530;        /* near-black — high-contrast text, table headers */
--oxide-muted: rgba(92, 61, 46, 0.5);  /* faded iron oxide — secondary labels, hints */
--oxide-faint: rgba(92, 61, 46, 0.15); /* ghost oxide — borders, dividers, subtle rules */
```

typography:
- display typeface: `"Caveat", cursive` — hand-drawn energy for headings and display text. the ONLY genome using a handwriting-style face. weight 400-700.
- body typeface: `"DM Sans", sans-serif` — humanist, warm, readable. weight 400-500.
- hero / display: `font-family: "Caveat", cursive; font-size: 40px; line-height: 1.15; font-weight: 700; color: var(--iron-oxide)`.
- section titles: `font-family: "Caveat", cursive; font-size: 28px; line-height: 1.2; font-weight: 600`.
- card titles: `font-family: "Caveat", cursive; font-size: 22px; line-height: 1.25; font-weight: 600`.
- body text: `font-family: "DM Sans", sans-serif; font-size: 15px; line-height: 1.65; font-weight: 400; color: var(--iron-oxide)`.
- labels/metadata: `font-family: "DM Sans", sans-serif; font-size: 12px; line-height: 1.4; font-weight: 500; letter-spacing: 0.03em; color: var(--oxide-muted)`.
- batch codes: `font-family: "DM Sans", sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: var(--stoneware)`.
- the two-typeface split is the defining contrast — Caveat carries warmth and personality, DM Sans carries clarity and data.

borders:
- card panels: `border-radius: 20px` as base, but with organic wobble via `clip-path: polygon(1% 0%, 99% 1%, 100% 98%, 2% 100%)` — slightly offset points simulate hand-cut imperfection. no perfect geometry.
- alternate wobble shapes for variety: `clip-path: polygon(0% 2%, 98% 0%, 100% 99%, 1% 97%)`, `clip-path: polygon(2% 1%, 100% 0%, 99% 100%, 0% 98%)`.
- soft border strokes: `border: 1.5px solid var(--oxide-faint)` on cards that need separation from the background.
- no hard straight edges on containers — everything is slightly organic.

spacing:
- page horizontal padding: `24px`.
- card internal padding: `28px`.
- hero padding: `36px 28px 40px`.
- section gap: `36px` between groups.
- card gap: `20px` in grid layouts.
- generous breathing room — each card is like an object sitting on a studio shelf.

**color distribution**

- 35% ash-white (`--ash-white`) — studio ground, page background
- 20% slip-cream (`--slip-cream`) — card surfaces, elevated panels
- 15% terracotta (`--terracotta`) — primary accent, actions, hero elements
- 12% iron-oxide (`--iron-oxide`) — primary text, headings, structure
- 8% stoneware (`--stoneware`) — metadata, secondary text, subtle borders
- 5% celadon (`--celadon`) — success states, completed batches, growth
- 3% charcoal-ash (`--charcoal-ash`) — table headers, high-contrast moments
- 2% kiln-red (`--kiln-red`) — hover/pressed states, depth

**component patterns**

buttons:
- primary: `background: var(--terracotta); color: var(--ash-white); border: none; border-radius: 16px; padding: 16px 28px; font-family: "DM Sans", sans-serif; font-size: 14px; font-weight: 500; letter-spacing: 0.02em; clip-path: polygon(1% 0%, 100% 2%, 99% 100%, 0% 98%)`.
- secondary: `background: transparent; color: var(--iron-oxide); border: 1.5px solid var(--oxide-faint); border-radius: 16px; padding: 14px 24px; font-family: "DM Sans", sans-serif; font-size: 14px; font-weight: 500`.
- ghost: `background: none; border: none; color: var(--terracotta); font-family: "DM Sans", sans-serif; font-size: 14px; font-weight: 500; text-decoration: underline; text-underline-offset: 3px`.
- no box-shadow on buttons — flatness and material honesty.

inputs:
- `background: var(--slip-cream); border: 1.5px solid var(--oxide-faint); border-radius: 14px; padding: 14px 18px; font-family: "DM Sans", sans-serif; font-size: 15px; color: var(--iron-oxide)`.
- focus: `border-color: var(--terracotta); outline: none; box-shadow: 0 0 0 3px rgba(193, 113, 79, 0.15)` — a warm glow, like kiln heat.
- label above: `font-family: "Caveat", cursive; font-size: 18px; font-weight: 600; color: var(--iron-oxide); margin-bottom: 8px`.
- placeholder: `color: var(--oxide-muted); font-style: italic`.

cards/panels:
- inventory card: `background: var(--slip-cream); padding: 28px; clip-path: polygon(1% 0%, 99% 1%, 100% 98%, 2% 100%); position: relative`.
- hero card: `background: var(--terracotta); color: var(--ash-white); padding: 36px 28px 40px; clip-path: polygon(0% 2%, 98% 0%, 100% 99%, 1% 97%)`.
- glaze swatch card: small card with a `48px` circular glaze color preview at top, title below. `text-align: center; padding: 20px`.
- batch status card: left accent bar `4px` wide in status color (terracotta = in progress, celadon = fired, stoneware = queued). `border-left: 4px solid var(--terracotta); border-radius: 0 20px 20px 0; padding: 24px`.
- cards sit on the page like glazed tiles on a shelf — spaced, individual, tactile.

navigation:
- top bar: `background: var(--slip-cream); padding: 16px 24px; border-bottom: 1.5px solid var(--oxide-faint); display: flex; justify-content: space-between; align-items: center`.
- nav title: `font-family: "Caveat", cursive; font-size: 24px; font-weight: 700; color: var(--iron-oxide)`.
- tab navigation: `display: flex; gap: 8px; padding: 8px; background: var(--ash-white); border-radius: 14px`.
- tab item: `padding: 10px 20px; border-radius: 12px; font-family: "DM Sans", sans-serif; font-size: 13px; font-weight: 500; color: var(--oxide-muted)`.
- active tab: `background: var(--slip-cream); color: var(--iron-oxide); box-shadow: 0 1px 3px rgba(92, 61, 46, 0.08)`.

headers:
- page title: `font-family: "Caveat", cursive; font-size: 36px; font-weight: 700; color: var(--iron-oxide); padding: 24px 24px 8px`.
- section header: `font-family: "Caveat", cursive; font-size: 24px; font-weight: 600; color: var(--iron-oxide); padding: 32px 0 12px`.
- sub-header: `font-family: "DM Sans", sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: var(--stoneware)`.

footers:
- studio footer: `padding: 40px 24px; text-align: center; border-top: 1.5px solid var(--oxide-faint)`.
- footer text: `font-family: "Caveat", cursive; font-size: 18px; color: var(--oxide-muted)` — a hand-signed feel.
- utility links below: `font-family: "DM Sans", sans-serif; font-size: 12px; color: var(--stoneware)`.

lists:
- inventory list: `display: grid; grid-template-columns: 1fr; gap: 16px` on mobile, `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))` on wider screens.
- list items as cards — no bare text rows. each item is a self-contained tile.
- batch list: vertical stack with left status accent bar per item. `gap: 12px`.

tables:
- `border-collapse: separate; border-spacing: 0; border-radius: 16px; overflow: hidden; background: var(--slip-cream)`.
- header: `background: var(--charcoal-ash); color: var(--ash-white); font-family: "DM Sans", sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; padding: 14px 18px; font-weight: 500`.
- cells: `padding: 14px 18px; border-bottom: 1px solid var(--oxide-faint); font-family: "DM Sans", sans-serif; font-size: 14px; color: var(--iron-oxide)`.
- temperature cells: `font-weight: 500; color: var(--terracotta)` — kiln temps get visual emphasis.

dividers:
- primary: `border-top: 1.5px solid var(--oxide-faint)`.
- decorative: wavy SVG line `height: 8px; opacity: 0.2` — a hand-drawn rule, not a straight line. `background: url("data:image/svg+xml,...")` with a gentle sine wave path.
- section break: `48px` vertical padding serves as breathing room between studio zones.

modals/overlays:
- `background: var(--slip-cream); border-radius: 24px; padding: 32px 28px; clip-path: polygon(1% 0%, 100% 1%, 99% 100%, 0% 99%)`.
- backdrop: `background: rgba(61, 53, 48, 0.55); backdrop-filter: blur(4px)` — kiln smoke.
- modal title: `font-family: "Caveat", cursive; font-size: 28px; font-weight: 700; color: var(--iron-oxide); margin-bottom: 16px`.
- close button: `24px` circle, `border: 1.5px solid var(--oxide-faint); border-radius: 50%`.

badges/tags:
- glaze tag: `border-radius: 10px; padding: 5px 12px; font-family: "DM Sans", sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.04em`.
- status colors: `background: var(--terracotta); color: var(--ash-white)` for in-kiln, `background: var(--celadon); color: var(--charcoal-ash)` for fired, `background: var(--stoneware); color: var(--ash-white)` for queued.
- cone badge: `background: var(--charcoal-ash); color: var(--ash-white); font-size: 10px; font-weight: 500; padding: 4px 10px; border-radius: 8px` — kiln cone rating.

glaze swatches:
- circular color preview: `width: 48px; height: 48px; border-radius: 50%; border: 2px solid var(--oxide-faint)`.
- glaze swatches have a subtle `box-shadow: inset 0 2px 4px rgba(0,0,0,0.1)` to simulate gloss/depth on the swatch only (the one exception to the no-shadow rule — glazes are literally glossy).
- arranged in a flex row: `display: flex; gap: 12px; flex-wrap: wrap`.

**interaction language**

hover:
- buttons: `background: var(--kiln-red)` (primary darkens). `transition: background 0.3s ease-out`. weighted, not snappy.
- cards: `transform: translateY(-2px); transition: transform 0.4s ease-out` — a slow, heavy lift, like picking up a pot.
- links: `color: var(--terracotta); transition: color 0.3s ease-out`.

active/pressed:
- buttons: `transform: scale(0.97); transition: transform 0.15s ease-out` — pressing into clay.
- cards: `transform: translateY(0); transition: transform 0.2s ease-out` — settles back down.

focus:
- `outline: 2px solid var(--terracotta); outline-offset: 3px; border-radius: 16px`.

selected:
- card: `border-color: var(--terracotta); border-width: 2px`. a warm ring, like a kiln mark.
- checkbox: filled circle with `background: var(--terracotta)`.

disabled:
- `opacity: 0.35; pointer-events: none; filter: grayscale(30%)` — unfired, dull.

drag:
- `outline: 2px dashed var(--terracotta); cursor: grab`. while dragging: `cursor: grabbing; opacity: 0.8; transform: rotate(1deg)` — the slight rotation suggests a physical object being moved.

**motion & feedback**

transitions:
- all transitions: `0.4s ease-out` minimum — nothing moves fast. elements feel weighted like clay.
- page transitions: `0.6s ease-out` for route changes.
- card appearance: `opacity 0.5s ease-out, transform 0.5s ease-out` — cards fade and rise into position slowly.
- NO bounce, NO spring, NO elastic easing — gravity and material weight only.
- the genome moves like hands shaping clay: slow, deliberate, weighted.

loading:
- a spinning potter's wheel SVG: `animation: spin 2s linear infinite; width: 40px; height: 40px; stroke: var(--stoneware); stroke-width: 1.5; fill: none`.
- below: `font-family: "Caveat", cursive; font-size: 20px; color: var(--oxide-muted)` — text like `Firing...` or `Shaping...`.

success:
- card briefly glows celadon: `background: var(--celadon); transition: background 0.4s ease-out`, then returns.
- text: `Fired`, `Glazed`, `Batch Recorded` — craft-process confirmation.
- a subtle `transform: scale(1.01)` pulse over `0.3s` — the piece settling after kiln.

error:
- `border-color: #B44A3A; color: #B44A3A`. warm red, not cold alarm red.
- text: `Couldn't Fire — Try Again` / `Glaze Not Applied` / `Batch Not Saved` — material language, warm, no codes.

**atmosphere**

background:
- body: `background-color: var(--ash-white)` — kiln ash, dusty warm white.
- subtle paper texture overlay: `background-image: url("data:image/svg+xml,...")` — a very faint noise pattern at `opacity: 0.03` to simulate studio dust / paper grain.
- the warmth is baked into the palette, not applied artificially.

ambient details:
- organic clip-path edges on all major cards — no two cards feel identical.
- glaze swatch circles as recurring motif — small `48px` color circles appear as icons, list decorators, and status indicators.
- hand-drawn wavy SVG dividers between sections — `stroke: var(--oxide-faint); stroke-width: 1.5; fill: none` with a sine-wave path.
- batch codes as secondary annotations: `BATCH-042`, `CONE-6`, `KILN-A` in small uppercase DM Sans.
- temperature callouts: `1222°C` / `Cone 6` styled as emphasized metadata.
- generous whitespace — every piece (card) needs space around it, like objects on a drying shelf.

mobile-first:
- designed for portrait mobile. cards stack vertically with `20px` gap.
- responsive grid for wider screens: `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`.
- all touch targets minimum `44px`.
- safe-area padding: `env(safe-area-inset-bottom)`.

**editorial voice**

button labels: `Fire This Batch`, `Add Glaze`, `Start New Batch`, `Log Firing`, `View Schedule`, `Shape`, `Record`, `Close`
- craft-process imperatives. material language. direct, warm, physical. sentence case for multi-word, single word for quick actions.

headings: Caveat hand-drawn style. warm phrases: `Today's Firings`, `Glaze Library`, `Kiln Schedule`, `Batch History`, `Drying Shelf`, `Studio Inventory`.
- no uppercase headings — the handwriting typeface provides warmth, not authority.

metadata format:
- batch codes: `BATCH-042` — uppercase prefix, zero-padded number.
- temperatures: `Cone 6 / 1222°C` — cone number with celsius.
- timing: `Fires in 4 hours` / `Cooling for 12 hours`.
- glaze names: descriptive, poetic — `Ash Celadon`, `Iron Red`, `Tenmoku`, `Shino`.
- status: `In Kiln`, `Cooling`, `Drying`, `Ready to Fire`, `Fired`, `Glazed`.

placeholders: `Name this batch...`, `Search glazes...`, `Add firing notes...`, `Describe the glaze...` — lowercase, ellipsis, inviting.

empty states: `Nothing on the shelf yet` / `No batches in the kiln` / `Your glaze library is empty` — gentle, spatial metaphor, no urgency. `font-family: "Caveat", cursive; font-size: 22px; color: var(--oxide-muted); text-align: center`.

error messages: `Couldn't save this batch — try again` / `Glaze not applied` / `Something cracked` — material language, warm, never blaming. no codes or brackets.

success messages: `Batch recorded` / `Glaze applied` / `Fired successfully` / `Saved to shelf` — simple craft confirmation.

**cursor & selection**

- default: `cursor: default`
- interactive (buttons, links, tabs): `cursor: pointer`
- text inputs: `cursor: text`
- drag: `cursor: grab` / `cursor: grabbing`
- disabled: `cursor: not-allowed`
- `::selection { background: var(--terracotta); color: var(--ash-white); }` — warm terracotta highlight, like iron oxide brushed on clay

**when to reach for this genome**

Use `ceramic_workshop.kiln` when the prompt asks for a pottery studio, ceramic brand, glaze library, kiln schedule, firing log, handmade inventory, stoneware catalog, craft workshop, clay class, batch tracker, or any product that should feel like physical objects being shaped, glazed, fired, and placed on a shelf.

Reach for it when the user wants terracotta clay, celadon glaze, ash-white studio stock, iron oxide text, soft organic cards, hand-thrown imperfection, Caveat handwriting, glaze swatches, kiln cone metadata, batch codes, slow weighted motion, and warm craft-process language. It is strongest when the interface manages material transformation: wet clay to dry shelf, glaze test to fired piece, batch to inventory, or studio schedule to kiln load.

Choose it for:
- pottery and ceramics ecommerce, maker portfolios, studio inventory systems, firing schedules, glaze recipe tools, workshop booking, craft-class dashboards, and artisan product catalogs where clay is the central material.
- product flows where `Fire This Batch`, `Add Glaze`, `Log Firing`, `Start New Batch`, or `Saved to shelf` naturally describe the work.
- tactile warm interfaces that need organic wobble, rounded forms, earthy surfaces, and a small-shop craft voice rather than formal institutional polish.
- collection views where individual pieces should feel like handmade objects, not documents, feeds, specimens, or luxury stationery.

Do not choose it for generic handmade scrapbook pages, botanical field observation, seed catalogs, tea ceremony ritual, premium planners, community guideline boards, or Japanese wabi-sabi minimalism without an actual clay/kiln/glaze production cue. Use `nature_folio.craft` for torn-paper scrapbook layering, `field_journal.expedition` for naturalist notebook records, `seed_packet.plot` for gardening and horticultural packaging, `tea_ceremony.matcha` for matcha ritual and deliberate negative space, `bespoke_planner.folio` for stationery planning, and `kampung_guideline.warmth` for warm community directives with torn-paper edges.

**anti-patterns — this genome NEVER:**

1. uses perfect geometric shapes — all cards use organic clip-path polygons with slightly offset points. no mathematically precise rectangles. the wobble is the signature.
2. uses sans-serif for display headings — display text is always `Caveat` cursive. `DM Sans` is for body, labels, and data only. the handwriting typeface is the soul of this genome.
3. uses cold, clinical, or neon colors — the palette is strictly deep warm earth: terracotta, celadon, ash, iron oxide, stoneware. no blue, no purple, no cyan, no fluorescent anything.
4. uses fast or bouncy animations — all motion is `0.4s+` ease-out. no spring physics, no bounce, no elastic easing. elements move like clay: slow, heavy, deliberate.
5. uses monospace typefaces — this genome is the antithesis of terminal/code aesthetics. Caveat and DM Sans only. no `Space Mono`, no `JetBrains Mono`, no courier.
6. uses gradient fills on surfaces — all backgrounds are flat solid earth tones. no linear-gradient, no radial-gradient. material honesty.
7. uses torn-paper or jagged SVG edges — that is kampung_guideline.warmth territory. this genome uses organic clip-path wobble instead. different kind of imperfection.
8. uses leather, stitching, or stationery metaphors — that is bespoke_planner.folio territory. this genome is clay, glaze, kiln, fire — craft process, not desk objects.
9. uses sharp 0px border-radius on any interactive element — minimum radius is `10px`, default is `14-20px`. the genome is round and organic.
10. uses uppercase headings — headings are in Caveat cursive at natural case. uppercase is reserved for small metadata labels in DM Sans only (`BATCH-042`, `CONE-6`). the handwriting must breathe.
