---
id: "101"
name: subway_sticker.bombing
keywords:
  - sticker
  - graffiti
  - bombing
  - paste-up
  - slap
  - NYC
  - lamppost
  - street
  - eggshell
  - label
  - marker
  - layered
  - accumulation
  - tag
---

### genome 101: `subway_sticker.bombing`

> identity: Brooklyn lamppost, 2003 — the back of a Don't Walk signal pole, accumulated layer upon layer with 200+ stickers from every band, crew, brand, and tagger. USPS Priority Mail labels scrawled with Mean Streak markers, eggshell paste-ups peeling at the corners, Hello-My-Name-Is tags going up the meter, Avery 5160 office labels covered in ink, half-torn show flyers, holographic Mylar slaps from a sticker pack, hand-cut vinyl crew logos. This is not a single zine page — this is geological accumulation. Ink bleeds through cheap label paper. Corners curl and tear. New stickers go OVER old ones. The lamppost itself is barely visible underneath.

**surface**

colors:
```
--pole-galvanized: #8E938A;          /* the metal pole surface — only visible at edges */
--pole-shadow: #4A4D45;              /* deep recess between sticker layers */
--label-white: #F0EAD8;              /* Avery 5160 / Hello My Name Is label paper, slightly aged */
--label-cream: #E8E0C8;              /* sun-bleached label paper, older stickers */
--eggshell: #F5F1E0;                 /* paste-up paper, matte finish */
--postal-orange: #E8541E;            /* USPS Priority Mail / Hazard / construction sticker base */
--postal-orange-faded: #B8421A;      /* sun-bleached postal sticker */
--marker-black: #161412;             /* Mean Streak / Sharpie / Magnum tag, the dominant ink */
--marker-bleed: rgba(22, 20, 18, 0.6); /* ink that's soaked through cheap paper, soft halo */
--blue-bic: #1A2A6B;                 /* Bic pen blue, second-tier ink, written-on labels */
--red-marker: #C8211C;               /* paint marker red, secondary tag color */
--purple-marker: #6B2C8B;            /* secondary marker hue, occasional accent */
--hologram-1: #4FD8F8;               /* holographic mylar shimmer — cyan facet */
--hologram-2: #FF60D8;               /* holographic mylar shimmer — magenta facet */
--hologram-3: #C4F848;               /* holographic mylar shimmer — yellow-green facet */
--glue-stain: rgba(58, 42, 30, 0.18); /* the brown stain where adhesive has aged */
--paste-edge: rgba(0, 0, 0, 0.25);   /* shadow line under a sticker edge */
--torn-edge: #C4B898;                /* the underside of torn label paper, exposed fiber */
```

typography:
- crew tags / display "throwies": `"Permanent Marker", "Rock Salt", "Marker Felt", cursive` at `font-weight: 400; font-size: 28-72px; letter-spacing: -0.02em; line-height: 0.9; color: var(--marker-black); text-shadow: 0 0 1px var(--marker-bleed)` — the Mean Streak scrawl. Always angled slightly (`transform: rotate(-3deg to 5deg)`).
- label headlines (Hello My Name Is style): `"Impact", "Oswald", "Arial Black", sans-serif` at `font-weight: 900; font-size: 18-36px; text-transform: uppercase; letter-spacing: -0.01em; line-height: 0.95` — the pre-printed label header, the "MY NAME IS" band.
- hand-written body / label contents: `"Permanent Marker", "Caveat", cursive` at `font-weight: 400; font-size: 14-22px; color: var(--marker-black)` or `var(--blue-bic)` — what was scrawled INTO the blank label by hand. Slight rotation per element.
- printed label fine print: `"Courier Prime", "Courier New", monospace` at `font-weight: 400; font-size: 9-11px; letter-spacing: 0.02em; color: var(--marker-black)` — USPS form numbers, "AVERY 5160", "RETURN SERVICE REQUESTED", barcode captions.
- band / brand wordmarks on slap stickers: `"Bebas Neue", "Anton", "Impact", sans-serif` at `font-weight: 700-900; font-size: 16-32px; text-transform: uppercase; letter-spacing: 0.04em` — band logos, crew names, brand wordmarks. Often white knockout on a colored sticker.
- screen-printed paste-up text: `"Special Elite", "American Typewriter", monospace` at `font-size: 11-14px; letter-spacing: 0.01em` — the typewritten manifesto stapled to a lamppost.
- sizes: tags 28-72px, label headlines 18-36px, hand-written 14-22px, brand wordmarks 16-32px, printed fine print 9-11px, paste-up manifestos 11-14px.
- mixed case the way humans actually write — UPPER for shouted brand names, lower for scribbled notes, MixEd for chaotic taggers.

borders:
- sticker edges: `border-radius: 2-6px` for rectangular stickers (Avery 5160, USPS labels). `border-radius: 24px` for the rounded oblong of Hello My Name Is. `border-radius: 50%` for circular promo dots. `border-radius: 0px` for paste-up flyers and torn squares.
- the paste shadow under every sticker: `box-shadow: 0 1px 0 var(--paste-edge), 2px 3px 6px rgba(0,0,0,0.35)` — sticker sits ON something, not in something. drop shadow is the depth layer of the entire genome.
- torn edge effect: `clip-path: polygon(0% 0%, 100% 4%, 98% 92%, 2% 100%, 0% 95%)` or jagged variants. Featured stickers and paste-ups use irregular clip-paths — never perfect rectangles for older layers.
- peeling corner: top-right corner lifted with a small triangle in `var(--torn-edge)`, `transform: rotate(-15deg) translate(2px, -1px)` — the "this is about to fall off" detail.
- borders on the printed labels themselves: `2px solid var(--marker-black)` for the pre-printed Hello My Name Is stripe; `1px solid var(--postal-orange-faded)` for USPS forms; `4px solid var(--marker-black)` on bold band-logo slaps.
- no borders on the page itself — the pole/sign is the substrate, not a frame.

spacing:
- COLLAGE, NOT GRID. `padding: 8-14px` inside individual stickers. `gap: -8px to -24px` (deliberate negative gap — stickers OVERLAP). Each sticker uses `position: relative` with z-index stacking (z-index range 1-50). New layers go on top.
- the layering is the spacing system. Older content has lower z-index, slight desaturation, more wear. Newer content is bright, sharply printed, on top.
- internal padding inside individual labels matches real-world labels — Avery 5160 has ~6px text padding, Hello My Name Is has ~10px below the printed band.

**color distribution**
- 35% label-white / eggshell / label-cream (`--label-white`, `--eggshell`, `--label-cream`) — the dominant tone is cheap label paper, paste-up paper, generic sticker stock. Most stickers are SOME shade of off-white.
- 22% marker-black (`--marker-black`) — ink. Tags, scribbles, printed text, sticker borders, the visible weight of accumulated writing. Black is everywhere because every sticker has been tagged ON or printed WITH it.
- 12% postal-orange / postal-orange-faded — the USPS Priority Mail label is the single most-bombed sticker substrate. Bright orange punctuation throughout.
- 10% pole-galvanized / pole-shadow — visible in cracks between sticker layers, at the edges of the surface, in the recesses where you can still see the pole.
- 8% red-marker / blue-bic / purple-marker — secondary ink colors, individual tags, hand-written notes on labels.
- 6% holographic accents (`--hologram-1/2/3`) — the rare shiny slaps, the holographic crew stickers, hot punctuation that catches the eye.
- 4% glue-stain — the brown aging halos around old stickers, the discoloration where paste has yellowed.
- 3% torn-edge / paste-edge — the structural shadows and exposed paper fibers that give the genome its depth.

the principle: white-label-paper backgrounds covered in BLACK MARKER, punctuated by hot ORANGE, with rare HOLO shimmer. Everything else is wear and shadow.

**component patterns**

buttons: each button IS a sticker. Primary button — Hello My Name Is style: `background: var(--label-white); color: var(--marker-black); border: none; border-radius: 24px; padding: 14px 28px; font-family: "Permanent Marker", cursive; font-weight: 400; font-size: 16px; box-shadow: 0 1px 0 var(--paste-edge), 3px 4px 8px rgba(0,0,0,0.4); transform: rotate(-1.5deg); position: relative; overflow: visible`. Before pseudo-element renders the red "HELLO my name is" stripe at top: `content: "HELLO my name is"; position: absolute; top: 0; left: 0; right: 0; background: var(--red-marker); color: var(--label-white); font-family: "Impact", sans-serif; font-size: 10px; padding: 3px 8px; text-transform: uppercase`.

Secondary button — USPS Priority Mail slap: `background: var(--postal-orange); color: var(--label-white); border-radius: 4px; padding: 12px 24px; font-family: "Impact", sans-serif; font-weight: 900; font-size: 14px; text-transform: uppercase; letter-spacing: 0.04em; box-shadow: 2px 3px 6px rgba(0,0,0,0.35); transform: rotate(2deg)`. Edges deliberately a few degrees off-axis.

Tertiary / ghost — Avery 5160 label: `background: var(--label-cream); color: var(--marker-black); border: 1px dashed rgba(22,20,18,0.4); border-radius: 3px; padding: 8px 18px; font-family: "Courier Prime", monospace; font-size: 11px; box-shadow: 0 1px 2px rgba(0,0,0,0.2); transform: rotate(-0.5deg)`. Tiny "AVERY 5160" caption at the bottom-right corner in 7px monospace.

Danger button — torn warning sticker: `background: var(--red-marker); color: var(--label-white); border-radius: 0; clip-path: polygon(0 0, 100% 2%, 98% 98%, 2% 100%); padding: 12px 22px; font-family: "Impact", sans-serif; text-transform: uppercase; box-shadow: 3px 4px 8px rgba(0,0,0,0.45); transform: rotate(-2.5deg)`.

Every button is rotated between -3deg and +3deg. No two share the same angle in a cluster. The shadow is the consistent thread.

inputs: a blank Hello My Name Is label waiting to be written in. `background: var(--label-white); border: none; border-radius: 22px; padding: 18px 16px 12px; font-family: "Permanent Marker", cursive; font-size: 17px; color: var(--marker-black); box-shadow: 0 1px 0 var(--paste-edge), 2px 3px 6px rgba(0,0,0,0.3); transform: rotate(-0.5deg); position: relative`. The pre-printed "MY NAME IS" stripe sits above as a `::before` element: `background: var(--red-marker); color: var(--label-white); padding: 4px 10px; font-family: "Impact"; font-size: 10px; text-transform: uppercase; letter-spacing: 0.02em`. Caret: `caret-color: var(--blue-bic)`. Placeholder: `color: rgba(22,20,18,0.35); font-style: italic`. Focus: shadow deepens, sticker rotates 0.5deg further, faint glue-stain halo appears around the edge.

cards / panels: the signature component — a sticker stack. `background: var(--label-white); border-radius: 4px; padding: 18px 20px; box-shadow: 0 1px 0 var(--paste-edge), 3px 5px 12px rgba(0,0,0,0.4); transform: rotate(-1deg); position: relative`. A second offset sticker peeks out from underneath at +2deg, a third at -3deg — `::before` and `::after` pseudo-elements positioned absolutely at `inset: -4px -8px 4px 6px` with smaller scale and slightly desaturated colors. The card itself is the TOP sticker on a stack; the layers underneath are visible at the edges, like archaeological strata.

Featured cards: a paste-up panel with `clip-path: polygon(0% 2%, 100% 0%, 98% 100%, 2% 96%); background: var(--eggshell); border: none; padding: 24px; box-shadow: 4px 6px 14px rgba(0,0,0,0.45); transform: rotate(-1.5deg)`. Corner curl applied via `::after`: a small triangular fold in `var(--torn-edge)` at the top-right.

navigation: a horizontal row of slap stickers across the top of the page. Each nav item is its own sticker style (Hello My Name Is, USPS, Avery, paste-up — cycling through types). `background: var(--pole-shadow)` for the nav strip itself, suggesting the metal pole. Nav items overlap each other by 8-14px with z-index increasing left-to-right (so the rightmost sticker is "newest" / on top). Active item: bumped up in z-index, slight scale (1.04), brighter shadow, a marker scribble underline drawn through it (`text-decoration: underline; text-decoration-color: var(--red-marker); text-decoration-thickness: 3px; text-decoration-skip-ink: none`).

headers: the title of the page is a hand-scrawled tag at 56-72px Permanent Marker, with marker-bleed text-shadow, rotated -2 to -5 degrees. Subtitle: a small printed sticker underneath (a USPS Priority strip or a torn flyer scrap) with metadata. Behind the title: at least 4-6 absolutely-positioned background stickers (low opacity, drifting at various angles) suggesting the layer underneath. Always feels like the title was written ON something pre-existing.

footers: a dense horizontal band of small sticker scraps, half-overlapping, with hand-written copyright notes. `background: var(--pole-galvanized)`. Inside: tiny stickers (24-40px wide) with abbreviated metadata. A scrawled signature/tag at the right end in marker. Optional: a torn strip across the bottom edge showing exposed pole metal.

lists: each list item is a small label sticker peeled and stuck slightly off-axis. Items overlap subtly at the edges (`margin-top: -6px`, z-index increasing top-to-bottom or bottom-to-top depending on "newness"). Bullet/prefix: a hand-drawn dot or asterisk in marker (`▸` `●` `✗` `+` — randomized). Active item: gains a marker-circle around it (border-radius 50%, dashed marker-black border at 2px, slight rotation). Hover: the sticker lifts (`transform: translateY(-2px) rotate(extra-deg); box-shadow: deepens`), as if you're about to peel it off.

tables: a grid of stuck-on labels arranged in rough rows. Each cell is an Avery 5160 label `background: var(--label-cream); border-radius: 2px; padding: 6px 10px; box-shadow: 1px 2px 4px rgba(0,0,0,0.25); transform: rotate(varied)`. Header row: USPS Priority Mail style — `background: var(--postal-orange); color: var(--label-white); font-family: "Impact", sans-serif; text-transform: uppercase; font-size: 11px`. The table is read as "a sheet of labels that's been mostly stuck-on" — slight grid irregularity, occasional missing/torn cells, hand-written corrections in blue Bic in some cells.

dividers: never a clean line. Either: (a) a torn strip of paste-up paper across the page with frayed `clip-path` edges in `var(--eggshell)`, or (b) a row of small repeating sticker-dots in alternating colors, or (c) a thick marker scrawl `background: var(--marker-black); height: 6px; border-radius: 3px; clip-path: polygon(0% 30%, 5% 0%, 95% 10%, 100% 70%, 95% 100%, 5% 90%);` — uneven, hand-drawn-looking. Never a 1px gray hairline.

modals: a giant paste-up flyer slapped over the page. `background: var(--eggshell); border: none; clip-path: polygon(1% 0%, 100% 3%, 98% 98%, 0% 100%); padding: 32px; box-shadow: 0 12px 40px rgba(0,0,0,0.7), 4px 6px 14px rgba(0,0,0,0.4); transform: rotate(-1deg); max-width: 560px`. Modal title in 36px Permanent Marker rotated -3deg, in marker-bleed black. Close button: a small "X" hand-drawn in marker at the top-right, with a circle-scribbled around it. Backdrop: `background: rgba(22,20,18,0.65); backdrop-filter: none` — the rest of the wall goes dark, but no blur (this is a physical paste-up, not glass).

badges / tags: each badge is a mini-sticker. Crew/brand badge: `background: var(--marker-black); color: var(--hologram-3); padding: 4px 10px; font-family: "Bebas Neue", sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; border-radius: 2px; box-shadow: 1px 1px 3px rgba(0,0,0,0.5); transform: rotate(-2deg)`. Holographic variant: `background: linear-gradient(135deg, var(--hologram-1), var(--hologram-2), var(--hologram-3)); color: var(--marker-black)` with `text-shadow: 0 0 1px var(--label-white)`. Hand-scrawled tag badge: `background: var(--label-white); color: var(--marker-black); font-family: "Permanent Marker", cursive; padding: 2px 8px; border-radius: 50%; transform: rotate(-5deg)`.

**signature element — the sticker stack**: any container can become a stack. The base element renders, plus 2-4 absolutely positioned smaller stickers behind it at varying offsets (`top: -8px; left: -12px; transform: rotate(-4deg)` for the back layer; `bottom: -6px; right: -10px; transform: rotate(3deg)` for another). Each underneath layer is slightly desaturated (`filter: saturate(0.7) brightness(0.9)`) and uses an older sticker style (USPS faded, torn Avery). The pile reads as accumulated history.

**signature element — the marker tag**: a decorative element that can drop into any spare space. Free-form `<span>` rendered in Permanent Marker at 40-72px, rotated -8 to +8 degrees, in `var(--marker-black)` with `text-shadow: 0 0 1.5px var(--marker-bleed), 1px 1px 0 var(--marker-bleed)` — the bleed-through halo of a fat-tip marker on cheap paper. Often a crew name, a year ('03), a short tag (3-5 characters).

**signature element — the torn corner**: applied as `::after` to any sticker. `content: ""; position: absolute; top: -2px; right: -2px; width: 18px; height: 18px; background: var(--torn-edge); clip-path: polygon(100% 0%, 0% 0%, 100% 100%); transform: rotate(-12deg); box-shadow: -1px 1px 2px rgba(0,0,0,0.3)`. The peeling corner — every layered sticker eventually starts to peel.

**interaction language**

hover: the sticker LIFTS slightly off the surface. `transform: translateY(-3px) rotate(varies); box-shadow: 0 2px 0 var(--paste-edge), 5px 8px 14px rgba(0,0,0,0.5); transition: transform 0.18s ease-out, box-shadow 0.18s ease-out`. The shadow grows because the sticker is peeling up. On nav items: the rotation amplifies slightly (e.g. -2deg becomes -4deg) — the corner is curling.

active / pressed: the sticker SLAPS flat. `transform: translateY(0) rotate(varies); box-shadow: 0 1px 0 var(--paste-edge), 1px 2px 4px rgba(0,0,0,0.3); transition: transform 0.06s ease, box-shadow 0.06s ease`. The fast snap of "smack" — applying a slap sticker hard to a pole.

focus: a marker-scribbled outline. `outline: 3px dashed var(--marker-black); outline-offset: 4px` — looks like someone drew around it with a Sharpie. Alternative for inputs: a red marker-circle overlay drawn around the focused field via SVG or `box-shadow: 0 0 0 3px var(--red-marker)` plus a slight irregular rotation jitter.

selected: a hand-drawn marker checkmark or circle scrawled OVER the sticker. `position: relative; ::after { content: "✓"; position: absolute; top: -8px; right: -6px; font-family: "Permanent Marker", cursive; font-size: 28px; color: var(--red-marker); transform: rotate(15deg); text-shadow: 0 0 1px var(--marker-bleed); }`. The sticker is also bumped one z-index higher and gains a `filter: saturate(1.1)`.

disabled: the sticker has been GRAFFITIED OVER. Diagonal slashes drawn through it: `background-image: repeating-linear-gradient(15deg, transparent 0 18px, var(--marker-black) 18px 22px); opacity: 0.55; pointer-events: none`. Plus `filter: grayscale(0.4)` — sun-bleached and crossed out.

drag: sticker peels off completely. `transform: scale(1.06) rotate(varies + 4deg); box-shadow: 0 16px 32px rgba(0,0,0,0.6), 0 2px 0 var(--paste-edge); cursor: grabbing; z-index: 999; filter: brightness(1.05)`. A faint adhesive residue shadow remains in the original location (a slightly darker rectangle in `var(--glue-stain)`).

**motion & feedback**

transitions: `transition: transform 0.18s ease-out, box-shadow 0.18s ease-out` as baseline. Fast and tactile — slapping a sticker is a quick gesture, not a smooth ease. Rotation transitions are deliberately a touch overshoot — sticker wobbles on landing.

stickerSlap (the signature animation for newly-added elements):
```css
@keyframes stickerSlap {
  0%   { transform: translateY(-40px) scale(1.15) rotate(-12deg); opacity: 0; }
  60%  { transform: translateY(2px) scale(1.05) rotate(varies + 1deg); opacity: 1; }
  80%  { transform: translateY(-1px) scale(1.0) rotate(varies - 0.5deg); }
  100% { transform: translateY(0) scale(1.0) rotate(varies); opacity: 1; }
}
/* duration: 0.32s cubic-bezier(0.34, 1.56, 0.64, 1); element starts above and SLAMS down with overshoot */
```

markerScribble (used for selected / success / annotation elements):
```css
@keyframes markerScribble {
  0%   { stroke-dashoffset: 100; opacity: 0; }
  20%  { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 1; }
}
/* an SVG path "draws" itself as if a marker is scrawling it. duration: 0.4s linear */
```

peelOff (used for removal / dismissal):
```css
@keyframes peelOff {
  0%   { transform: rotate(varies); opacity: 1; }
  40%  { transform: rotate(varies - 8deg) translate(-4px, -8px); opacity: 1; }
  100% { transform: rotate(varies - 25deg) translate(-40px, -60px); opacity: 0; }
}
/* duration: 0.35s ease-in. The sticker peels and falls off */
```

loading: a sticker being SLAPPED onto an empty space — `stickerSlap` repeats with a label-cream sticker rotating through 4 angles (-3, +2, -1, +4 degrees) every 350ms. Or a marker scrawling "loading..." letter by letter in Permanent Marker.

success: a giant red marker check or circle is SCRIBBLED across the affected element using `markerScribble` on an SVG path. The element also gets a small "DONE" or "OK!" sticker slapped on its corner. Duration ~600ms total.

error: the element gets X'd OUT with two angry red marker slashes (`markerScribble` × 2 perpendicular strokes), and a torn "VOID" sticker slaps in. The element does NOT shake — graffiti doesn't shake, it just defaces.

page enter: stickers `stickerSlap` in sequence, staggered 60-90ms, in spatial reading order. Some come in with bigger rotations than others. Background tags fade in slowly behind everything else over 800ms.

**atmosphere**

background: the surface is `var(--pole-galvanized)` with a subtle vertical metal texture — `background-image: linear-gradient(180deg, transparent 0, transparent 4px, rgba(0,0,0,0.04) 4px, rgba(0,0,0,0.04) 5px), repeating-linear-gradient(180deg, var(--pole-galvanized) 0px, var(--pole-shadow) 1px, var(--pole-galvanized) 2px)`. A subtle vignette darkens the page edges — the recess between sticker layers casts shadow toward the perimeter.

ambient layer — accumulated stickers: behind ALL primary content, 12-25 absolutely positioned background sticker elements drift across the page at varying angles, opacities (0.4-0.85), z-indexes (1-8), and styles (postal-orange faded, torn paste-up edges, ancient Avery labels, shredded flyer corners). They're decorative — `pointer-events: none; user-select: none` — but they create the "wall of stickers" depth that defines this genome. Mix tiny stickers (24-50px) with mid-sized ones (80-140px). No two at the same angle. They populate the negative space the way real bombing fills every gap.

marker bleed: any element using marker-black text gains `text-shadow: 0 0 1px var(--marker-bleed)`. The ink has soaked into the cheap paper and bled outward.

glue stain halos: random "discoloration" patches via radial gradients at 0.08-0.15 opacity in `var(--glue-stain)` — older areas of the surface have these brown wash patches behind them, suggesting where adhesive has aged.

graffiti tags overlay: 4-8 large hand-scrawled marker tags drift across the entire page at low opacity (0.18-0.35), rotated, in `var(--marker-black)` or `var(--red-marker)`. They cut across stickers, modals, EVERYTHING — graffiti respects nothing. Positioned absolutely, fixed-position optional so they persist on scroll.

torn paper at the edges: the entire page edge can carry a frayed/torn `clip-path` border-mask, as if you're looking at a stuck panel that has had pieces ripped off.

images: `filter: contrast(1.12) saturate(1.05) brightness(0.96)` — slightly punched up. Plus a 1-2px white border like a polaroid sticker, plus the standard paste-shadow. Optional: a `mix-blend-mode: multiply` on certain images so they integrate with the sticker layers.

holographic shimmer: holographic-tagged elements use an animated gradient that slowly cycles: `background: linear-gradient(135deg, var(--hologram-1) 0%, var(--hologram-2) 50%, var(--hologram-3) 100%); background-size: 200% 200%; animation: holoShimmer 4s ease-in-out infinite` where the gradient drifts. Used sparingly — these are the rare expensive stickers.

the ambient feel: walking up to a lamppost on Bedford Avenue at 2pm. You can't see the pole. You can only see 200 layers of stickers, half of them tagged on, half of them torn through. Every brand, every band, every crew that came through Brooklyn between 1998 and 2009 left something here. The newest stuff is on top, bright; the oldest stuff is sun-bleached at the bottom. Eternal accumulation.

**editorial voice**

button labels: tag-shout, abbreviated, street. `SEND IT`, `SLAP`, `BOMB`, `POST UP`, `GO UP`, `STICK IT`, `RACK UP`, `PEEL`, `TAG IN`, `THROW UP`, `HIT`, `OUT`. Mix UPPER-case sticker-brand and lower-case scrawled. Sometimes hand-written: `do it`, `hit me back`, `??`.

headings: shouted, scribbled, tag-like. Permanent-Marker scrawl in big rotated text. `the FEED`, `wanted`, `ON DECK`, `latest drops`, `SHOWS`, `crew page`, `STICKER SWAP`, `LOST + FOUND`, `FROM THE STREETS`. Lowercase for personal/scribbled, ALL-CAPS for printed sticker headlines. Often tagged with a year: `'24`, `EST '03`.

metadata: hand-written label info. `MY NAME IS: ___`, `RETURN TO: BK 11211`, `est. 2003`, `LOT 12`, `BATCH 04`, `NYC > BK > Q`, `SEEN: 4x`, `STUCK: 6mo ago`, `BY: anonymous`, `crew: OFK`. Always feels like it was just scribbled on with a marker before being stuck up.

placeholders: scrawled prompts. `your tag here...`, `write something...`, `?????`, `name?`, `holler at me`, `what crew?`.

empty states: `nothing's been stuck here yet.`, `bare pole. start bombing.`, `no one's tagged this.`, `clean slate. won't last.`.

error messages: blunt scrawls. `nah.`, `dead link.`, `that ain't it.`, `BUFFED.` (graffiti term for cleaned off), `VOID.`, `tried it. no.`. Often hand-written.

success messages: street acknowledgment. `up.`, `STUCK.`, `landed.`, `bombed.`, `slapped.`, `you up.`, `respect.`, `noted.`, `running.`. Lowercase and quick.

confirmation prompts: `peel this off?`, `kill this tag?`, `take it down?`.

**cursor & selection**

cursor: a fat-tip marker. Custom CSS cursor (or a `crosshair` fallback) — the metaphor is "you're holding a Magnum marker, about to tag something." Interactive elements use `pointer`. Draggable stickers use `grab` / `grabbing`. Inputs use a text cursor that's slightly thicker than default.

text selection: `::selection { background: var(--postal-orange); color: var(--marker-black); }` — a strip of highlighter-orange (or, alternatively, the postal-mail orange wash) over the marker text. Like someone has gone over a sticker with a fluorescent highlighter to mark it.

**when to reach for this genome**

Use this genome when the request calls for a sticker-bombed wall, lamppost collage, street-label interface, paste-up archive, graffiti-adjacent event page, underground show flyer system, zine drop, crew directory, sticker swap, streetwear launch, tag index, or any product that should feel like accumulated stickers layered on a public surface over years.

Reach for it when the user wants physical irregularity: off-axis sticker stacks, USPS labels, Hello My Name Is bands, marker scrawls, torn paper, peeling corners, glue stains, holographic slaps, poster scraps, and the sense that newer content is pasted over older content. It is strongest when the interface can treat every control, card, nav item, badge, modal, and state as a separate sticker or paste-up fragment.

Choose it for:
- underground music, skate, streetwear, art-pop-up, sticker-trade, zine, and event pages where layered street texture is the actual brand language.
- community boards, drop calendars, show listings, crew rosters, street-art archives, and merch launches that need collision, overlap, handwriting, and DIY materiality.
- interfaces where content should feel found, tagged, re-tagged, peeled, crossed out, or slapped over an older layer.
- playful social surfaces where "post", "tag", "stick", "peel", "buff", and "swap" metaphors map directly to the workflow.

Do not choose it for official transit signage, civic wayfinding, museum curation, polished editorial layouts, enterprise dashboards, luxury retail, clean creator portfolios, education products, healthcare, banking, or any context where street vandalism cues would be confusing or inappropriate. Use `transit_wayfinding.sys` for official subway or route systems, `neo_brutalist.zine` or `skatepark_zine.grip` for print-zine energy without sticker accumulation, `drive_in_marquee.intermission` for show/event nostalgia, `gallery_foyer.institution` for curated art authority, and `constructivist_poster.agit` for poster-driven graphic force.

**anti-patterns — this genome NEVER:**

1. uses a clean, gridded, properly-aligned layout. Everything is off-axis between -5 and +5 degrees. Perfect right angles read as fake. The genome's existence depends on physical irregularity — stickers landed by hand, never by Figma.
2. uses soft, blurred drop shadows alone. EVERY sticker has both a soft drop shadow (depth from the wall) AND a hard 1px `paste-edge` shadow directly underneath (the sharp edge of the paper sitting on the surface). One without the other reads wrong.
3. uses pristine, uniformly-spaced rows of identical components. This genome is layered ACCUMULATION — repetition exists only as overlap, never as a clean grid. Stickers must overlap each other; the cluster IS the design.
4. uses thin, elegant serif or refined geometric sans typography on display elements. Display text is fat-tip marker scrawl, Impact knockout, or Bebas band-logo capitals. Refined typography contradicts the street-accumulation identity.
5. uses pastel, muted, or earth-tone color palettes. The hot punctuation is USPS Priority orange, marker black, and holographic mylar. Muted palettes read as artisanal-paper-goods, not street bombing.
6. uses smooth, slow eases (>300ms) on interactions. Slap stickers slap — snappy 100-180ms with slight overshoot. Slow eases break the tactile slap-and-press feel.
7. uses standalone elements floating in negative white space. Negative space gets filled with decorative background stickers, graffiti tags, marker bleeds, and glue stains. Empty space is anti-genome — the wall is COVERED.
8. uses corporate-clean voice or marketing-speak. The voice is hand-scrawled street slang — abbreviated, lowercased when personal, ALL-CAPS only when shouting from a printed wordmark. Never "Click here to learn more!" — always "do it" or "GO UP".
9. uses zero-radius rectangles as the ONLY shape vocabulary. Mixes round-corner labels (Avery 5160), oblong-rounded Hello My Name Is, perfect circles (promo dots), and torn polygon clip-paths. A monoshape grid kills the variety.
10. uses neat, clean borders on the page itself. The page is a substrate (a pole, a sign back, a wall) — it has no frame. Content bleeds to the edges, gets cut off by the viewport, peels off. Frames belong to art galleries, not lampposts.
