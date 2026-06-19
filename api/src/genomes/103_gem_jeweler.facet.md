---
id: "103"
name: gem_jeweler.facet
keywords:
  - jewelry
  - jeweler
  - gem
  - diamond
  - facet
  - velvet
  - vitrine
  - tiffany
  - cartier
  - prong
  - carat
  - hexagon
  - showcase
  - specular
---

### genome 103: `gem_jeweler.facet`

> identity: High-end jewelry showcase. Black velvet display tray under pinpoint spotlights, gold prong settings, cushion-cut gemstones throwing specular highlights, hexagonal facet motifs, the hushed luxury of a Tiffany or Cartier vitrine at 6pm. Object-scale precision — not the architecture of the building, but the millimeter-precise cradle of a single stone. Italic gold serif captions, tiny carat-weight metadata, the felt-lined drawer of a master jeweler's bench.

**surface**

colors:
```
--velvet-black: #07060A;                    /* deep velvet display surface — the void around each stone */
--velvet-deep: #0C0A12;                     /* raised velvet pad, inset trays */
--velvet-shadow: #030205;                   /* the absolute dark beneath a setting */
--gold-prong: #C9A24A;                      /* primary 18k gold — prongs, bezels, italic serif text */
--gold-bright: #E6C36B;                     /* polished gold highlight, hover, lit edges */
--gold-rose: #D8997A;                       /* rose-gold accent for secondary settings */
--gold-glow: rgba(201, 162, 74, 0.32);      /* gold bloom under spotlight */
--gold-faint: rgba(201, 162, 74, 0.14);     /* faint gold wash, structural lines */
--diamond-white: #F2EEE4;                   /* primary text — the cool-warm sparkle of a brilliant cut */
--specular: #FFFFFF;                        /* pinpoint pure-white facet flash — used sparingly */
--specular-glow: rgba(255, 255, 255, 0.55); /* the bloom around a facet flash */
--ruby: #8E1A2A;                            /* deep ruby red, danger and accent stones */
--ruby-glow: rgba(142, 26, 42, 0.32);       /* ruby bloom */
--sapphire: #1E3A6B;                        /* deep blue stone, secondary accent */
--emerald: #0F4A38;                         /* deep emerald green, success state */
--platinum: #A9ADB4;                        /* cool platinum trim, chrome */
--platinum-dim: rgba(169, 173, 180, 0.22);  /* faint platinum borders, dividers */
--silk-ivory: #E8E2D2;                      /* warm ivory caption card, the paper tag under a stone */
--spotlight: rgba(255, 248, 220, 0.06);     /* the pinpoint warm wash from a halogen pinspot */
```

typography:
- display / atelier headings: `"Cormorant Garamond", "Didot", "Garamond", serif` at `font-weight: 500-600; font-style: italic; letter-spacing: 0.01em; color: var(--gold-prong)`. The italic engraved-gold serif of a jewelry case caption — slender, refined, slightly reclined. Sizes 32-56px for hero captions, 22-28px for case titles.
- sub-headings / lot labels: `"Cormorant Garamond", serif` at `font-weight: 600; font-style: italic; font-size: 16-20px; letter-spacing: 0.04em; color: var(--gold-prong)`. The italic remains constant — even sub-headings tilt.
- body / catalog descriptions: `"Cormorant Garamond", serif` at `font-weight: 400; font-style: normal; font-size: 14-15px; line-height: 1.65; color: var(--diamond-white)`. Upright roman serif for paragraph copy, but always the same family — one face, two postures.
- carat weights / specifications / pricing: `"Inter", "Helvetica Neue", sans-serif` at `font-weight: 500; font-size: 11-13px; font-variant-numeric: tabular-nums; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gold-prong)`. Tiny, precise, all caps. The "1.42 CT · VS1 · D · GIA #2185629847" line beneath every stone.
- hexagonal facet glyphs (⬢ ⬡ ◆ ◇): treated as decorative glyphs at 0.9-1.4em scale, in `var(--gold-faint)` as ornament or `var(--gold-prong)` as active markers.
- sizes: hero captions 32-56px, case titles 22-28px, body 14-15px, spec lines 11-13px. Hierarchy is never loud — the stones are the subject, the type is the placard.
- never all-uppercase serif. uppercase is reserved for sans-serif spec lines. italic-serif is mixed case, always.

borders:
- jewelry case panels: `border-radius: 4px` — the soft inset corner of a velvet tray, almost square but never sharp.
- featured stone display cards (signature): `border-radius: 0px` with hexagonal `clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)` — the hexagon is the genome's master facet motif.
- gold prong frame: `1px solid var(--gold-prong)` on featured cards. `0.5px solid var(--gold-faint)` for structural dividers — hairlines, like the edge of a bezel setting.
- velvet inset wells: no visible border, definition comes from `box-shadow: inset 0 1px 4px rgba(0,0,0,0.7), inset 0 0 0 0.5px var(--gold-faint)` — the depression in a velvet tray.
- platinum trim: `1px solid var(--platinum)` on tool-style elements, chrome jeweler's loupe components.
- caption tags (silk-ivory paper cards): `border-radius: 2px; border: none; box-shadow: 0 1px 3px rgba(0,0,0,0.5)` — the small paper tag tied to a stone with a thread.

spacing:
- `padding: 1.5rem 2rem; gap: 18-22px`. Each display has air around it — a stone is never crowded by another stone in a Cartier vitrine.
- featured stones: `padding: 2rem 2.5rem` and isolated with `margin: 32px` — the spotlight needs darkness around the subject.
- prong settings / chip stacks: tight `gap: 4-6px` between adjacent prongs.
- caption to stone: `margin-top: 12px` — the paper tag sits just below the gem.
- section vertical rhythm: `36-48px` between cases. Generous but not architectural — this is object-scale, not building-scale.

**color distribution**
- 58% velvet black / velvet deep (`--velvet-black`, `--velvet-deep`, `--velvet-shadow`) — the showcase interior, the void from which every stone emerges. dominant by a wide margin.
- 14% gold (`--gold-prong`, `--gold-bright`, `--gold-glow`, `--gold-faint`) — italic captions, prong settings, bezels, hover states, structural hairlines. linear and metallic, never a fill.
- 12% diamond white / silk ivory (`--diamond-white`, `--silk-ivory`) — body text and the small paper caption cards. the legible warm-white layer.
- 6% specular white (`--specular`, `--specular-glow`) — the pinpoint facet flashes. used sparingly, like literal light catching a cut. never as a background.
- 4% ruby (`--ruby`) — danger states, hot accent, the occasional ruby in a pendant.
- 3% sapphire (`--sapphire`) — secondary accent stones, link colors.
- 2% emerald (`--emerald`) — success states, the emerald in a setting.
- 1% platinum / rose-gold (`--platinum`, `--gold-rose`) — chrome trim, secondary metal cues.

specular white is the most carefully rationed color — only true pinpoint highlights get it. gold is everywhere structurally as line, never as field. velvet black is the substrate that makes the gold and the diamonds sparkle.

**component patterns**

buttons: primary — `background: transparent; color: var(--gold-prong); border: 1px solid var(--gold-prong); border-radius: 2px; padding: 11px 26px; font-family: "Cormorant Garamond", serif; font-style: italic; font-weight: 500; font-size: 0.95rem; letter-spacing: 0.02em; box-shadow: 0 0 8px var(--gold-glow), inset 0 0 0 0.5px var(--gold-faint)`. The engraved gold caption-button — italic serif, hairline frame, soft warm bloom. Secondary: `background: var(--velvet-deep); color: var(--diamond-white); border: 0.5px solid var(--platinum-dim); border-radius: 2px; padding: 10px 24px; font-family: "Cormorant Garamond", serif; font-style: italic`. Ghost: `background: transparent; color: var(--diamond-white); border: none; padding: 8px 18px; font-family: "Cormorant Garamond", serif; font-style: italic; text-decoration: underline; text-decoration-color: var(--gold-faint); text-underline-offset: 4px`. Danger: `background: transparent; color: var(--ruby); border: 1px solid var(--ruby); box-shadow: 0 0 8px var(--ruby-glow)`.

inputs: `background: var(--velvet-shadow); border: none; border-bottom: 1px solid var(--gold-faint); border-radius: 0; color: var(--diamond-white); padding: 10px 4px; font-family: "Cormorant Garamond", serif; font-style: italic; font-size: 15px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.6)`. Focus: `border-bottom-color: var(--gold-prong); border-bottom-width: 1px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.6), 0 1px 0 var(--gold-prong), 0 0 12px var(--gold-glow)`. Placeholder: `color: rgba(242, 238, 228, 0.3); font-style: italic`. Caret: `caret-color: var(--gold-prong)`. Labels sit above in tiny uppercase sans-serif spec style.

cards / velvet display panels: the signature surface — `background: linear-gradient(180deg, var(--velvet-deep) 0%, var(--velvet-black) 100%); border: 0.5px solid var(--gold-faint); border-radius: 4px; padding: 2rem 2.5rem; box-shadow: inset 0 0 60px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.6)`. Represents the inside of a vitrine — top-lit, deep, with a faint inner vignette. Featured cards add a hairline gold top border: `border-top: 1px solid var(--gold-prong)` — the chrome-and-gold lip of the case.

**hexagonal stone display** (signature element): the master component. `width: 180px; aspect-ratio: 1; clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); background: radial-gradient(circle at 35% 30%, var(--specular-glow) 0%, transparent 25%), radial-gradient(circle at 50% 50%, var(--velvet-deep) 30%, var(--velvet-black) 100%); border: 0.5px solid var(--gold-prong); position: relative; box-shadow: 0 0 0 1px var(--velvet-shadow), 0 0 24px var(--gold-glow), inset 0 0 30px rgba(0,0,0,0.6)`. A pinpoint specular highlight in the upper-left third simulates the catch of a halogen pinspot on a facet. Inner ::after element draws a smaller hexagon outline at 70% scale in `var(--gold-faint)` — the inner facet plan.

**prong setting frame**: rectangular content can be wrapped in a four-prong frame. `position: relative; padding: 24px`. Four ::before/::after children positioned at corners as small gold triangular prongs: `width: 12px; height: 12px; background: linear-gradient(135deg, var(--gold-bright) 0%, var(--gold-prong) 50%, var(--velvet-shadow) 100%); clip-path: polygon(0% 0%, 100% 0%, 50% 100%)`. The setting holds the content as a prong holds a stone.

**paper caption card** (signature element): small ivory tag beneath stones — `background: var(--silk-ivory); color: var(--velvet-black); border-radius: 2px; padding: 6px 12px; font-family: "Cormorant Garamond", serif; font-style: italic; font-weight: 500; font-size: 13px; box-shadow: 0 1px 3px rgba(0,0,0,0.5), 0 0 0 0.5px var(--gold-faint); max-width: 160px; text-align: center`. As if a small handwritten paper price tag is tied to the stone. Inside: a serif italic name on top, a thin gold rule, a tiny sans-serif spec line below.

navigation: `background: var(--velvet-black); border-bottom: 0.5px solid var(--gold-faint); padding: 18px 32px`. Nav items in italic Cormorant Garamond at `font-size: 15px; color: var(--diamond-white); letter-spacing: 0.02em`. Active item: `color: var(--gold-prong); border-bottom: 1px solid var(--gold-prong); padding-bottom: 4px; text-shadow: 0 0 6px var(--gold-glow)`. Hover: gold prong color fades in. Small hexagon ⬢ glyphs as optional separators between major sections in `color: var(--gold-faint)`.

headers / case titles: `background: var(--velvet-black); padding: 2.5rem 2.5rem 2rem`. Hero italic serif at 40-56px in `var(--gold-prong)` with very faint text-shadow: `text-shadow: 0 0 14px var(--gold-glow), 0 0 1px var(--specular-glow)` — gold with a whisper of facet flash. Below: a thin gold rule `width: 80px; height: 0.5px; background: var(--gold-prong); margin: 18px 0` flanked optionally by a small hexagon glyph. Subtitle in body serif at 16px in `var(--diamond-white)` with italic catalog reference in `var(--gold-prong)`.

footers: `background: var(--velvet-black); border-top: 0.5px solid var(--gold-faint); padding: 1.5rem 2.5rem`. Three columns: maison name in italic Cormorant Garamond gold, center hexagon row `⬢ ⬡ ⬢ ⬡ ⬢` at `opacity: 0.3` in gold, catalog reference in tiny uppercase sans-serif tabular. Feels like the engraved interior plaque at the back of a vitrine.

lists: each item on velvet background, separated by `0.5px solid var(--gold-faint)`. Item layout: italic serif name on left, tiny uppercase sans-serif spec on right (carat / clarity / GIA number). Active / hovered item: `background: linear-gradient(90deg, var(--gold-faint) 0%, transparent 100%); border-left: 1px solid var(--gold-prong); padding-left: 16px; box-shadow: -4px 0 14px var(--gold-glow)` — like a spotlight has shifted onto this item.

tables: `border: 0.5px solid var(--gold-faint); border-radius: 4px; overflow: hidden`. Header row: `background: var(--velvet-deep); color: var(--gold-prong); font-family: "Inter", sans-serif; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.7rem; padding: 10px 14px; border-bottom: 0.5px solid var(--gold-faint)`. Body cells: `background: transparent; color: var(--diamond-white); border-bottom: 0.5px solid rgba(201,162,74,0.06); padding: 12px 14px; font-family: "Cormorant Garamond", serif`. Numeric columns (carat, price, GIA #) in tabular-nums sans-serif, right-aligned, gold. No alternating rows — the velvet is uniform. Like the inventory ledger in the back room.

dividers: `0.5px solid var(--gold-faint)` as structural hairline. Decorative: a centered hexagon row `⬢ · ⬡ · ⬢` in `var(--gold-prong)` at `opacity: 0.4`, flanked by `0.5px` gold rules — the master facet motif as section break. Never a thick line. Never gray.

modals: `background: linear-gradient(180deg, var(--velvet-deep) 0%, var(--velvet-black) 100%); border: 1px solid var(--gold-prong); border-radius: 6px; box-shadow: 0 0 40px var(--gold-glow), 0 0 80px rgba(201,162,74,0.1), 0 20px 60px rgba(0,0,0,0.8), inset 0 0 60px rgba(0,0,0,0.4)`. Modal title in italic Cormorant Garamond gold. A pinpoint white facet-flash highlight in the top-left corner of the modal: `radial-gradient(circle at 8% 10%, var(--specular-glow) 0%, transparent 18%)`. Inner backdrop: `background: rgba(7,6,10,0.92); backdrop-filter: blur(4px)`. Feels like the private viewing room — a single spotlight on the case.

badges: `background: transparent; color: var(--gold-prong); border: 0.5px solid var(--gold-prong); border-radius: 2px; font-family: "Inter", sans-serif; font-weight: 500; font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; padding: 3px 8px`. Variants by stone: ruby `border-color: var(--ruby); color: var(--ruby)`, sapphire `border-color: var(--sapphire); color: var(--sapphire)`, emerald `border-color: var(--emerald); color: var(--emerald)`. "GIA CERTIFIED" badge: filled `background: var(--gold-prong); color: var(--velvet-black)`.

**carat-weight metadata block** (signature): the small line that appears below every stone. `font-family: "Inter", sans-serif; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold-prong); font-variant-numeric: tabular-nums`. Format: `1.42 CT · VS1 · D · GIA #2185629847`. Middots as separators. Always one line. Always tiny.

**interaction language**

hover: gold warms and brightens — `border-color: var(--gold-bright); box-shadow: 0 0 16px var(--gold-glow), 0 0 1px var(--specular-glow)`. A pinpoint facet flash pulses in via `::before` on hexagonal stone displays: a small radial-gradient highlight that drifts 4px to the right. `transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1)`. Slow and luxurious — the spotlight does not snap.

active / pressed: the prong settles — `transform: scale(0.985); box-shadow: 0 0 10px var(--gold-glow), inset 0 1px 4px rgba(0,0,0,0.5); transition: transform 0.12s ease`. Almost no compression — heavy stones do not bounce.

focus: `outline: 1px solid var(--gold-prong); outline-offset: 4px; box-shadow: 0 0 14px var(--gold-glow)`. A halo of gold light, never a tight ring.

selected: `border-color: var(--gold-prong); box-shadow: 0 0 20px var(--gold-glow), 0 0 0 0.5px var(--gold-bright), inset 0 0 40px rgba(201,162,74,0.04)`. A second concentric prong appears — the stone is locked into the setting.

disabled: `opacity: 0.25; filter: saturate(0.2) brightness(0.6); pointer-events: none`. Like a closed display case with the cloth thrown over it.

drag: `transform: scale(1.03); box-shadow: 0 16px 40px rgba(0,0,0,0.7), 0 0 24px var(--gold-glow); cursor: grabbing; z-index: 100`. Lifting a stone from its setting onto a velvet pad — heavy, deliberate, with a halo.

**motion & feedback**

transitions: `transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1)` as the baseline — a slow elegant ease-out, like a spotlight being adjusted by hand. Gold-glow and box-shadow always transitioned. Nothing snaps cold. Nothing bounces.

facet flash (signature animation): the pinpoint specular highlight drifts across the surface of a stone:
```css
@keyframes facetFlash {
  0%   { background-position: 30% 30%; opacity: 0.5; }
  40%  { background-position: 55% 35%; opacity: 1; }
  100% { background-position: 75% 60%; opacity: 0.3; }
}
/* duration: 2.4s ease-in-out infinite alternate, on radial-gradient overlay */
```

prong shimmer: gold prongs and bezels catch light periodically:
```css
@keyframes prongShimmer {
  0%, 100% { box-shadow: 0 0 8px var(--gold-glow); }
  50%      { box-shadow: 0 0 14px var(--gold-glow), 0 0 2px var(--specular-glow); }
}
/* duration: 3.5s ease-in-out infinite, staggered per prong by 0.4s */
```

caption card reveal: paper tags fade in from below the stone:
```css
@keyframes captionReveal {
  0%   { opacity: 0; transform: translateY(8px) rotate(-1deg); }
  100% { opacity: 1; transform: translateY(0) rotate(0); }
}
/* duration: 0.6s ease-out. Stagger per caption by 0.08s. */
```

loading: a single hexagon rotating slowly in gold outline, with a drifting pinpoint specular highlight on one facet. `animation: spin 4s linear infinite`. Slow — the jeweler is examining the stone under a loupe, not running a server.

success: gold prong shimmer fires twice on the affected element, then a small caption appears with `captionReveal`. Message in italic Cormorant Garamond gold: "Set." The element gains a `box-shadow: 0 0 30px var(--gold-glow), 0 0 60px var(--gold-glow)` halo that decays over 600ms.

error: `border-color: var(--ruby)` replaces gold borders. The element pulses ruby twice: `box-shadow: 0 0 18px var(--ruby-glow)` × 2 over 600ms. Text shifts to `var(--ruby)` briefly. No shake — the jeweler shakes their head slowly, not violently.

page enter: stones fade in from `opacity: 0; transform: scale(0.96)` with staggered 80ms delays, `transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1)`. Captions fade in 200ms after their stones. The hero italic heading plays a `facetFlash` once across its surface on first render — a single pinpoint catch of light.

**atmosphere**

background: `var(--velvet-black)` solid, with subtle velvet-pile texture overlay at `opacity: 0.04` — a fine noise pattern that simulates the nap of cotton velvet. The body carries pinpoint warm spotlight blooms: `radial-gradient(circle at 30% 20%, var(--spotlight) 0%, transparent 25%), radial-gradient(circle at 75% 60%, var(--spotlight) 0%, transparent 20%)` — two or three halogen pinspots casting pools of warm light onto the velvet.

inset velvet wells: featured sections sit in inset wells `box-shadow: inset 0 4px 16px rgba(0,0,0,0.7), inset 0 0 0 0.5px var(--gold-faint)` — the depression in a velvet tray that cradles each piece.

specular pinpoints: large stones get an absolutely-positioned `::before` element rendering a single white pinpoint via `radial-gradient(circle, var(--specular) 0%, var(--specular-glow) 8%, transparent 18%); width: 12px; height: 12px; mix-blend-mode: screen` — the literal flash of light off a facet. One per stone. Never more than three on screen at once.

ambient gold haze: `box-shadow: 0 0 80px var(--gold-glow)` on key featured elements — as if the warm spotlights are bleeding gold into the surrounding velvet.

hexagonal watermark: large low-opacity hexagon outlines positioned absolutely in section backgrounds at `opacity: 0.04; color: var(--gold-prong)` — drifting facet plans, rotated at varied angles. Reinforces the facet identity without announcing itself.

images: `filter: contrast(1.12) saturate(1.05) brightness(0.92)` plus a faint `box-shadow: 0 0 30px rgba(0,0,0,0.6), 0 0 12px var(--gold-glow)`. Stones in photographs feel embedded in the same velvet world.

the ambient feel: 6:48pm at the Fifth Avenue Tiffany's. The chandeliers have dimmed. The pinspots are on. The cases are velvet-deep and the gold is humming. Someone has just unlocked a drawer. You are leaning over a single stone.

**editorial voice**

button labels: master jeweler's voice. `View the Setting`, `Request a Viewing`, `Reserve this Piece`, `Schedule an Appointment`, `Speak with the Atelier`, `Commission a Piece`, `Inquire`, `By Appointment`. Title case. Formal, hushed, never imperative. Never "Click here."

headings: italic serif, sentence case (not uppercase), often a single noun. `The Cushion Cut`, `An Emerald, Colombian`, `The Tennis Bracelet, Reset`, `A Solitaire, 4.10 ct`, `The Atelier`, `The Provenance`. Articles "The" and "A" lead — the language of a curated catalog, not a sales floor.

metadata: tiny uppercase sans-serif spec lines. `1.42 CT · VS1 · D · GIA #2185629847`, `PT950 · 18K YG`, `LOT 0119 · CIRCA 1962`, `PROVENANCE: PRIVATE COLLECTION, GENEVA`, `RING SIZE: 6.25 US`. Middot separators. Tabular numerals. Carat weights to two decimals.

placeholders: `Carat weight...`, `Stone color, D–Z...`, `Ring size or sample...`, `Your name, for the appointment...`. Sentence case, italic, ellipsis. Quiet.

empty states: `The atelier has not yet placed this piece.`, `No stones match these criteria.`, `Awaiting certification from the laboratory.`, `This setting has been reserved.`. Hushed, third-person, composed.

error messages: `This piece is no longer available.`, `The carat weight must be a positive value.`, `We could not confirm the certification number. Please verify with the laboratory.`. Polite, no apology, no exclamation. The atelier does not panic.

success messages: `Reserved.`, `Your appointment is confirmed for Thursday at 4pm.`, `The stone has been set.`, `Added to your private viewing.`. Single sentence. Period. Never "!".

**cursor & selection**

cursor: `default` globally. `pointer` on all interactive elements — captions, hexagonal stones, paper tags, italic buttons. `grab` / `grabbing` when moving a stone between settings. `zoom-in` on stone images suggesting a loupe view.

text selection: `::selection { background: var(--gold-prong); color: var(--velvet-black); }` — gold highlight, velvet black text. Like a thin gold loupe ring laid over the word.

**when to reach for this genome**

Use this genome when the request calls for a high-end jeweler, diamond showcase, gemstone product page, private viewing, atelier appointment, ring configurator, carat/clarity comparison, boutique collection, bridal jewelry flow, luxury watch-and-jewelry vitrine, certification lookup, or any product that should feel like a single stone resting in black velvet under a pinpoint spotlight.

Reach for it when the user wants velvet darkness, hairline gold prongs, italic serif captions, hexagonal facet geometry, carat metadata, tiny GIA-style specification lines, paper caption tags, loupe-level precision, and hushed appointment-only luxury. It is strongest when the interface centers individual objects rather than architecture: one stone, one setting, one certificate, one private viewing, one deliberate decision.

Choose it for:
- jewelry ecommerce that needs atelier restraint rather than loud retail merchandising.
- appointment, consultation, commission, private viewing, bridal, ring-size, certification, and gemstone-comparison workflows.
- object pages for diamonds, emeralds, rubies, sapphires, platinum settings, heirloom pieces, and fine watch/jewelry displays.
- premium product surfaces where micro-metadata, materials, provenance, and precision matter more than broad lifestyle storytelling.

Do not choose it for general luxury hotels, fashion lookbooks, casino/Vegas themes, auction bidding rooms, museum galleries, mineral-science catalogs, beauty packaging, or mass-market ecommerce. Use `auction_lot.gavel` for estimates, lots, sale rooms, and bidding mechanics; use `mineral_specimen.crystal` for natural-history specimen cases and geological classification; use `gallery_foyer.institution` for cultural institution authority; use `casino_floor.aces` when gold/chips/table mechanics are the point; use `confectionery_box.sweet` for gift-box luxury and confectionery trays.

**anti-patterns — this genome NEVER:**

1. uses heavy borders or thick frames. every border is 0.5px or 1px hairline — the metalwork of a fine setting. nothing has a 2px or 3px border. fine jewelry is delicate, not industrial.
2. uses uppercase italic serif headings. the italic Cormorant Garamond is always mixed case. uppercase is strictly reserved for tiny tabular sans-serif spec lines beneath stones. shouting in italic serif breaks the catalog voice.
3. uses warm pure-white (`#FFFFFF`) anywhere except as a pinpoint specular highlight. text is `--diamond-white` (#F2EEE4), paper tags are `--silk-ivory`. pure white is a single facet flash, never a fill.
4. uses circular chip shapes, marquee-bulb borders, or repeating dot patterns. the master facet motif is the hexagon — six-sided, sharp, geometric. circles are reserved for stone images (where appropriate) and loupe cursors. this is not a casino.
5. uses gold as a large background fill. gold is line, prong, hairline border, italic serif text, and glow bloom — never wallpaper. felt-green-style large color fields do not exist here.
6. uses sharp snap transitions or fast easing. every interaction is `0.4s cubic-bezier(0.16, 1, 0.3, 1)` — slow, elegant, almost cinematic. nothing snaps. the jeweler's hand is steady, not quick.
7. uses casual, technical, or promotional language. no "Shop Now", no "Get Yours Today", no emoji, no "✨". the voice is the atelier — "Request a Viewing", "By Appointment", "Reserved." understated.
8. uses architectural Art-Deco motifs — sunbursts, chevrons, ziggurats, stepped geometry. those belong to the building. this is object-scale — the focus is on the cradle of a single stone, not the lobby of the Chrysler Building.
9. uses casino chip rims, suit glyphs (♠ ♥ ♦ ♣), or gambling iconography. the gold here is settings and bezels, not casino chip edges. shared color palette, completely different identity.
10. uses ambient noise textures that read as paper, fabric weave, or grunge. the only background texture is the fine nap of cotton velvet at 4% opacity — soft, dark, absorbing light. nothing should feel like paper.
