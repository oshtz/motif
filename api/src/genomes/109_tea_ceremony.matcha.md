---
id: "109"
name: tea_ceremony.matcha
keywords:
  - tea ceremony
  - chanoyu
  - matcha
  - wabi-sabi
  - sumi-e
  - ma
  - kanji
  - seal stamp
  - rice paper
  - washi
  - bamboo
  - ink wash
  - tatami
  - minimal
  - meditation
---

### genome 109: `tea_ceremony.matcha`

> identity: A chashitsu (茶室) tea-ceremony room at 3:14 PM, late autumn. Soft northern light through shoji paper screens; a single hanging scroll (kakemono) in the alcove; a tatami floor with measured ma (間, negative space); a black-iron kettle (kama) on a sunken charcoal hearth; a chawan (tea bowl) glazed in unevenly-applied iron oxide held in two hands. Sumi-e ink wash, washi rice paper, hand-pressed kanji seal-stamps, brushed strokes that leave the texture of the brush visible. Wabi-sabi: the beauty of imperfection, asymmetry, the acknowledgment of time. The four virtues of chanoyu — wa (和 harmony), kei (敬 respect), sei (清 purity), jaku (寂 tranquility). Everything reduced. Everything intentional. Negative space is the design.

**surface**

colors:
```
--washi: #F0EAD8;                  /* primary rice-paper warm cream — slightly aged */
--washi-shadow: #E2DAC2;           /* the soft shadow under a sheet of washi */
--washi-fold: #D4C9A8;             /* the deeper fold-crease tone of folded paper */
--sumi: #1A1815;                   /* sumi-e ink — deep warm-black, slightly brown-toned */
--sumi-wash: rgba(26, 24, 21, 0.7);  /* the diluted ink wash, brush-pull texture */
--sumi-faint: rgba(26, 24, 21, 0.25); /* the very dilute ink — gradation tone */
--sumi-ghost: rgba(26, 24, 21, 0.08); /* the barest ink ghost — wabi-sabi imperfection */
--matcha: #6B8E4E;                 /* the bright koicha matcha green */
--matcha-deep: #4A6B33;             /* the deeper usucha tone */
--matcha-foam: #95B870;             /* the whisked-tea pale-green foam */
--matcha-shadow: rgba(74, 107, 51, 0.4);
--clay-iron: #4E3A2A;              /* the iron-glazed chawan clay */
--clay-iron-deep: #2E2018;
--clay-warm: #8B6B4E;               /* the lighter raku-fired clay tone */
--seal-red: #A82A1F;                /* the inkan / hanko cinnabar seal-stamp red */
--seal-red-deep: #7A1B14;
--seal-red-bleed: rgba(168, 42, 31, 0.45); /* the slight bleed of cinnabar on washi */
--bamboo: #B5A578;                  /* the bamboo whisk and ladle tone */
--bamboo-deep: #8B7B52;
--tatami: #C9B58A;                  /* the woven straw mat tone */
--tatami-shadow: #A89469;
--tatami-edge: #1A1815;             /* the black silk edging on a tatami border */
--moss-stone: #5C6B4A;              /* the moss-green of a garden stone */
```

typography:
- display / kanji-flavored serif: `"Shippori Mincho", "Noto Serif JP", "Shippori Antique", "EB Garamond", serif` at `font-weight: 400-500; font-size: 22-42px; letter-spacing: 0.04em; line-height: 1.4; color: var(--sumi)` — a Japanese-influenced mincho-style serif for hero text. Refined, thin-stroke, slightly calligraphic. Kanji and Latin alphabet harmonize in the same family.
- secondary / hira-kana / mincho: `"Shippori Mincho", "Noto Serif JP", serif` at `font-weight: 400; font-size: 14-18px; letter-spacing: 0.02em; line-height: 1.7` — for body text. Always with generous line-height (`1.7-1.9`) — the page must breathe.
- small-caps / tsuyo / micro-labels: `"Cormorant SC", "Noto Sans JP", sans-serif` at `font-weight: 400; font-size: 9-11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--sumi-wash)` — for the rare label/metadata, very rare, very small.
- kanji-stamp (seal-style): `"Klee One", "Yuji Mai", "Zen Kaku Gothic New", "Noto Serif JP", serif` at `font-weight: 600; font-size: 22-44px; color: var(--seal-red); text-shadow: 0 0 0.5px var(--seal-red-bleed)` — the chiseled-look seal kanji, when used as a hero glyph or stamp.
- meta / understated metadata: `"Shippori Mincho", "Noto Serif JP", serif` at `font-weight: 400; font-style: italic; font-size: 11-13px; letter-spacing: 0.04em; color: var(--sumi-wash)` — for dates, page numbers, captions. Italic, dim, marginal.
- brush-script accent (rare): `"Sawarabi Mincho", "Yuji Boku", brush-script` at `font-weight: 400; font-size: 28-56px; letter-spacing: 0em; line-height: 1.2; color: var(--sumi)` — used for a single hero kanji glyph, like a hanging-scroll calligraphy. Rare — once per page maximum.
- size hierarchy: hero brush-glyph 56px max, display mincho 22-42px, body mincho 14-18px, micro-labels 9-11px. Most text sits between 14-18px. Large display is for one element per page.

borders:
- mostly NO borders. Containment is achieved through MA — generous negative space — not through boxed enclosure. When borders are needed: `1px solid var(--sumi-faint)` hairline, `border-radius: 0px`.
- the only meaningful structural rule: `1px solid var(--sumi-wash)` or `1px solid var(--sumi-faint)` separator between sections. Never `2px+`.
- "ink-wash edge" (signature element): featured elements may have one side bleeding into ink-wash via a `border-bottom: 0; box-shadow: 0 1px 0 var(--sumi-faint), 0 8px 24px var(--sumi-ghost)` — a single soft shadow as if the element rests on washi.
- seal-stamp red border: rectangular or square stamps use `border: 2px solid var(--seal-red); border-radius: 0; transform: rotate(-1deg)` — the chiseled-stone hanko impression. Slightly imperfect, always slightly rotated.
- chawan bowl outline (decorative): a CSS-shaped bowl using `border-radius: 0 0 50% 50% / 0 0 80% 80%`, with `border: 2px solid var(--clay-iron-deep)` — used for featured circular/elliptical content containers.

spacing:
- GENEROUS MA. Padding is the entire structural language. `padding: 48-96px` on major containers; `padding: 24-32px` on cards. Vertical space between elements: `margin: 36-72px`. The page must breathe.
- the layout is ASYMMETRIC — content sits off-center, like a single kanji on a hanging scroll. Symmetry is forbidden; the eye must travel through composed negative space.
- line-height is GENEROUS — body text uses `line-height: 1.7-1.9`. Paragraph spacing: `1.4em` between paragraphs.
- the principle: if you can subtract an element and the meaning still reads, subtract it. Every retained element earns its space.

**color distribution**
- 72% washi (`--washi`) — the dominant tone of rice paper. Most of the page is paper.
- 14% sumi / sumi-wash — ink. Type, illustrations, hairline rules. The brush-mark.
- 6% tatami / tatami-shadow — the woven mat tone, used for footer/border bands and as a textural accent.
- 3% matcha / matcha-deep / matcha-foam — the rare bright green, used for ONE accent per page: a featured callout, a hero glyph, an action color.
- 2% seal-red — the rare cinnabar stamp impression. Single-use per page in most cases — when used twice, both must be intentional anchors.
- 2% clay-iron / clay-warm — the chawan and kettle accents, used for image-framing and rare body backgrounds.
- 1% bamboo / moss-stone — the very rare warm-natural punctuation.

the principle: WASHI dominates, SUMI ink writes, MATCHA + SEAL-RED accent once each. Anything else is meditation noise — subtract it.

**component patterns**

buttons: text-only, brush-stroke restraint. Primary — `background: transparent; color: var(--sumi); border: none; padding: 6px 14px; font-family: "Shippori Mincho", serif; font-weight: 400; font-size: 16px; letter-spacing: 0.04em; position: relative; transition: color 0.5s ease`. Below the text: a hand-brush-stroke underline via `::after` — `content: ""; position: absolute; bottom: 0; left: 14px; right: 14px; height: 1px; background: var(--sumi); transform-origin: left center`. The underline appears thin and is slightly imperfect (a CSS variation of width or a faint background-gradient suggesting brush-stroke variance).

Secondary button (the rare matcha accent): `background: transparent; color: var(--matcha-deep); border: none; padding: 6px 14px; font-family: "Shippori Mincho", serif; font-size: 16px; letter-spacing: 0.04em`. Underline in `var(--matcha)`. Same restraint as primary; only the color differs.

Seal-stamp button (the rare emphasis CTA): `background: var(--seal-red); color: var(--washi); border: none; border-radius: 0; padding: 10px 24px; font-family: "Klee One", "Noto Serif JP", serif; font-weight: 500; font-size: 14px; letter-spacing: 0.08em; box-shadow: 0 0 0 1px var(--seal-red-bleed); transform: rotate(-1.5deg); transition: transform 0.5s ease, box-shadow 0.5s ease`. The cinnabar seal-stamp impression — used very rarely as the single "act on this" element on a page.

Ghost / "see more" link: italic mincho `font-family: "Shippori Mincho"; font-style: italic; font-size: 14px; color: var(--sumi-wash); letter-spacing: 0.04em`. No underline, no border. Just a discreet italic phrase.

inputs: brush-stroke field — `background: transparent; border: none; border-bottom: 1px solid var(--sumi-wash); border-radius: 0; padding: 8px 0; font-family: "Shippori Mincho", serif; font-size: 17px; color: var(--sumi); width: 100%`. Label above: small-caps `font-family: "Cormorant SC"; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--sumi-wash); margin-bottom: 8px`. Placeholder: italic faint `font-style: italic; color: var(--sumi-faint)`. Focus: `border-bottom-color: var(--sumi); border-bottom-width: 1px` (no thicker — the brush-stroke remains a brush-stroke). A subtle expanding-from-center underline animation on focus (the rule expands from a single point to full width over 0.5s).

cards / panels: KAKEMONO PANEL (the hanging-scroll card) — `background: var(--washi); border: none; padding: 56px 48px; box-shadow: 0 2px 0 var(--washi-shadow), 0 24px 48px var(--sumi-ghost); position: relative; max-width: 480px; margin: 0 auto`. A single piece of washi rice paper. The shadow underneath is soft and warm — the paper rests on a tatami floor. Hero content is a single brush kanji or a sumi-e ink illustration at the top, followed by 1-3 lines of mincho serif body.

CHAWAN CARD (special circular variant): an off-center elliptical container — `background: var(--clay-iron); color: var(--washi); border-radius: 50%; padding: 64px; aspect-ratio: 1; max-width: 320px; position: relative; box-shadow: 0 12px 32px rgba(46, 32, 24, 0.3), inset 4px 8px 16px rgba(46, 32, 24, 0.3)`. The iron-glazed tea bowl — used for hero/featured callouts. The clay surface has subtle texture (a low-opacity SVG noise or repeating-radial pattern).

SHOJI PANEL (translucent overlay variant): a grid-divided paper screen — `background: rgba(240, 234, 216, 0.85); backdrop-filter: blur(8px) saturate(0.9); border: 1px solid var(--sumi-wash); border-radius: 0; padding: 48px; box-shadow: 0 8px 32px var(--sumi-ghost); position: relative`. A subtle 9-square grid overlay via `background-image: linear-gradient(90deg, transparent 33%, var(--sumi-faint) 33%, var(--sumi-faint) 33.5%, transparent 33.5%), linear-gradient(0deg, transparent 33%, var(--sumi-faint) 33%, var(--sumi-faint) 33.5%, transparent 33.5%)` — the wooden-lattice frame of a shoji screen.

navigation: tokonoma alcove-style nav. A single horizontal row of mincho-serif links, generously spaced (`gap: 56px`), centered on the page. `background: transparent; padding: 32px 0; font-family: "Shippori Mincho", serif; font-size: 15px; letter-spacing: 0.06em`. Items in `var(--sumi-wash)`. Active item: `color: var(--sumi); border-bottom: 1px solid var(--sumi); padding-bottom: 4px`. No backgrounds, no boxes, no pills. The nav is the kakemono — a single composed line.

headers: HANGING-SCROLL header. A vertically-tall element with: a single hero kanji or brush-glyph at the top (in `var(--sumi)` at 48-56px); the title in mincho serif italic at 28-36px; a single thin hairline `1px solid var(--sumi-faint)` rule below; the subtitle in small-caps at 11px in `var(--sumi-wash)`. All center-aligned and asymmetrically placed (offset 8-12% from page center). A subtle seal-red hanko impression sits at the bottom-right corner (`transform: rotate(-2deg)`) — the artist's signature stamp.

footers: tatami-band footer. `background: var(--tatami); border-top: 1px solid var(--tatami-edge); padding: 28px 36px; color: var(--sumi); font-family: "Shippori Mincho", serif; font-size: 12px; line-height: 1.7; letter-spacing: 0.04em`. Optionally with a 2px black band along the top — the silk-edged tatami border. Content: the date in mincho format (`平成 28年 11月 14日` or `2026 — late autumn`), a small chanoyu-virtue glyph (和敬清寂), a sparing decorative kanji or moss-stone-colored ornament.

lists: each item is a SINGLE LINE in mincho serif, with the prefix being a single brush-stroke (◯, △, ▪, or a small ink-wash dot in `var(--sumi)`). Items separated by `1px solid var(--sumi-ghost)` rule with `padding-bottom: 16px; margin-bottom: 16px`. Active item: prefix shifts to seal-red `var(--seal-red)`. Numbered lists use kanji numerals (一、二、三) in `var(--sumi-wash)` at the same size as body. Indented sub-items use the same hairline rule but with `padding-left: 32px`.

tables: TEA-LEDGER table — `border-top: 1px solid var(--sumi); border-bottom: 1px solid var(--sumi); font-family: "Shippori Mincho", serif; font-size: 14px; border-collapse: collapse`. Header row: small-caps `font-family: "Cormorant SC"; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; padding: 14px 18px; border-bottom: 1px solid var(--sumi); color: var(--sumi-wash)`. Body cells: `padding: 14px 18px; border-bottom: 1px solid var(--sumi-ghost)`. No row striping — the hairlines structure alone. Numeric columns right-aligned with lining numerals. The table reads as a meticulously kept ledger of teas served.

dividers: never a thick line. Options: (a) `border-top: 1px solid var(--sumi-faint); margin: 56px 0` — the hairline rule, (b) a centered single brush-stroke glyph (`一`, `丶`, `◯`, or a small ink-dot) in `var(--sumi)` with `padding: 32px 0`, (c) a single seal-red dot `width: 8px; height: 8px; border-radius: 50%; background: var(--seal-red); margin: 56px auto`. Always quiet, never assertive.

modals / overlays: SHOJI-PANEL MODAL — `background: var(--washi); backdrop-filter: blur(12px); border: 1px solid var(--sumi-wash); border-radius: 0; padding: 56px 64px; box-shadow: 0 24px 64px var(--sumi-ghost), 0 0 0 1px var(--washi-shadow); max-width: 480px; position: relative`. Header: a single brush-kanji glyph or a mincho-italic title. A faint shoji-grid lattice via subtle `background-image: linear-gradient(...)` runs across the entire panel at very low opacity. Close action: a single small `閉` (close) glyph or italic `dismiss` link at the top-right. Backdrop: `background: rgba(26, 24, 21, 0.65); backdrop-filter: blur(12px) saturate(0.7)` — the room beyond goes ink-wash quiet.

badges / tags: minimal mincho labels. `background: transparent; color: var(--sumi); border-bottom: 1px solid var(--sumi); border-radius: 0; padding: 2px 8px; font-family: "Shippori Mincho", serif; font-size: 11px; letter-spacing: 0.08em`. Status variants: ACTIVE in italic; CONCLUDED with `text-decoration: line-through` (the brush-stroke through); FEATURED in `var(--seal-red)` with seal-red underline. Seasonal badges (春, 夏, 秋, 冬) use kanji glyphs in `var(--sumi)` with no border.

**signature element — the seal stamp (hanko)**: a reusable element. A small (50-80px) red cinnabar stamp impression with a kanji glyph or initial inside, slightly rotated and slightly imperfect. CSS: `background: var(--seal-red); color: var(--washi); width: 64px; height: 64px; border-radius: 0; padding: 8px; display: flex; align-items: center; justify-content: center; font-family: "Klee One", "Noto Serif JP", serif; font-weight: 600; font-size: 32px; box-shadow: 0 0 0 1px var(--seal-red-bleed), 0 0 0 3px var(--seal-red), 0 0 0 5px var(--washi); transform: rotate(-2deg); position: absolute`. Uses include: bottom-right of a hero panel (the artist's signature), inline within a card (the certification stamp), as a "selected" indicator. Always slightly rotated, always with the subtle bleed-halo.

**signature element — the brush-stroke divider**: a hand-drawn looking horizontal stroke. SVG path with `stroke: var(--sumi); stroke-width: 2px; stroke-linecap: round; fill: none; opacity: 0.85; transform: rotate(-0.5deg)` rendering as a single brush-pull. The stroke is irregular — wider at the start, tapering off, with a hint of dryness toward the end. Used for section dividers in featured/hero locations only.

**signature element — the kakemono (hanging-scroll layout)**: any featured content can be presented as a vertical scroll — narrower-than-tall (`aspect-ratio: 1 / 2`), with content vertically composed: hero glyph at top, mincho body in middle, seal stamp at bottom. The whole thing sits in generous ma. Surrounded by negative space, never crowded.

**signature element — the ma (negative space) rule**: the genome's core structural principle. NO ELEMENT IS ALLOWED TO BE CRAMPED. Every component has a minimum `padding: 24px` inside and `margin: 36px` outside. Grids use a minimum `gap: 32px`. Headers are followed by a minimum `margin-top: 56px` before body content. If the page feels dense, subtract elements until it doesn't.

**interaction language**

hover: refined and slow. Links and text-buttons: the underline draws in from left-to-right over 0.5s via `transform: scaleX(0)` → `scaleX(1)` with `transform-origin: left`. Color shifts to `var(--sumi)` (from `var(--sumi-wash)`). `transition: color 0.5s ease, transform 0.5s ease`. Cards: `transform: translateY(-2px); box-shadow: 0 4px 0 var(--washi-shadow), 0 32px 64px var(--sumi-ghost); transition: all 0.6s cubic-bezier(0.2, 0.6, 0.2, 1)` — a slow, deliberate lift. No glow, no flash, no instant snap.

active / pressed: a quiet acknowledgment. `transform: translateY(0); box-shadow: 0 1px 0 var(--washi-shadow), 0 12px 24px var(--sumi-ghost); transition: all 0.18s ease`. The element settles back. For seal-stamp buttons: a brief deepen to `var(--seal-red-deep)` then back over 0.4s.

focus: a hairline brush-stroke surrounds the element. `outline: none; box-shadow: 0 0 0 1px var(--sumi); transition: box-shadow 0.4s ease`. For inputs: the `border-bottom` shifts and a tiny seal-red dot appears at the left edge (`::before` pseudo-element). Quiet, restrained, never a halo.

selected: a seal-stamp hanko appears at the top-right corner (the artist's signature on a chosen scroll). The element gains `box-shadow: 0 0 0 1px var(--sumi-faint)` inset. Plus an italic-mincho `(chosen)` label appears in `var(--seal-red)` somewhere unobtrusive.

disabled: `opacity: 0.4; cursor: not-allowed; filter: grayscale(0.5)`. Fades into the page like sun-bleached calligraphy. No strikethrough, no x-out — just gentle disappearance into the washi.

drag: the element lifts like a scroll being unfurled. `transform: scale(1.02) rotate(-0.5deg); box-shadow: 0 32px 64px var(--sumi-ghost); cursor: grabbing; z-index: 999; transition: transform 0.4s cubic-bezier(0.2, 0.6, 0.2, 1)`. Gentle, never violent. The original location remains visible as a faint outline (`box-shadow: inset 0 0 0 1px var(--sumi-ghost)`).

**motion & feedback**

transitions: SLOW and meditative — default `transition: all 0.5s cubic-bezier(0.2, 0.6, 0.2, 1)`. The pace of pouring tea. Nothing snaps, nothing bounces, nothing flashes. Everything eases. 0.4-0.6s is the standard range; 0.8-1.2s for atmospheric reveals.

**keyframes**:

```css
@keyframes inkDraw {
  0%   { stroke-dashoffset: 200; opacity: 0; }
  20%  { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 1; }
}
/* SVG path draws itself as if a brush is pulling across washi — 1.2s ease-out */

@keyframes washiFade {
  0%   { opacity: 0; transform: translateY(8px); filter: blur(2px); }
  100% { opacity: 1; transform: translateY(0); filter: blur(0); }
}
/* content fades in like ink setting on rice paper — 0.8s ease-out */

@keyframes sealPress {
  0%   { transform: scale(1.2) rotate(varies + 4deg); opacity: 0; }
  50%  { transform: scale(0.95) rotate(varies - 0.5deg); opacity: 1; }
  100% { transform: scale(1) rotate(varies); opacity: 1; }
}
/* the seal stamp impresses onto paper — 0.4s cubic-bezier(0.34, 1.2, 0.64, 1) */

@keyframes teaSteam {
  0%   { transform: translateY(0) scaleX(1); opacity: 0.4; }
  50%  { transform: translateY(-12px) scaleX(1.1); opacity: 0.6; }
  100% { transform: translateY(-24px) scaleX(1.2); opacity: 0; }
}
/* atmospheric tea-steam wisps — continuous loop, 6s, used very sparingly */
```

loading: a single brush-stroke draws itself across an SVG path over 1.2s using `inkDraw`. Or a single small ink-wash circle slowly fades in via `washiFade` over 0.8s. Optionally: italic-mincho "*Steeping...*" in `var(--sumi-wash)`. No spinners. The loading state itself is meditative.

success: a seal-stamp hanko presses down via `sealPress` — landing with a slight scale-overshoot. Below it, mincho-italic confirmation: "*Received.*" or "*Concluded.*". Optionally a small ink-wash dot or single brush-stroke appears at the element. The whole sequence takes 0.6s.

error: a small italic-mincho note in `var(--seal-red)` appears below the affected element: "*Not yet.*" or "*Awaiting clarity.*". The input gains `border-bottom-color: var(--seal-red)`. No shake, no flash, no harshness — the page registers the missing harmony with a single quiet note.

page enter: elements fade in via `washiFade` keyframe, staggered 150-250ms. The seal-stamp and brush-stroke decorative elements appear last via `sealPress` and `inkDraw` (additional 600ms delay). The whole choreography takes 1.5-2s — deliberate, unhurried, one element at a time.

**atmosphere**

background: `var(--washi)` flat. A very subtle washi-paper texture overlay — irregular fiber pattern via SVG filter or low-opacity noise — at `opacity: 0.04`. The texture is non-uniform: some areas slightly more textured, suggesting the hand-pressed irregularity of real washi paper.

light-from-shoji effect: a soft vertical-gradient overlay along the top or left side — `background-image: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 30%)` — the northern light filtering through paper screens. The light is COOL and DIFFUSE, never warm or harsh.

ink-wash decorative element: 1-3 large sumi-e ink-wash strokes (SVG paths with brush-texture) drift across the page background at very low opacity (0.06-0.12). A single bamboo branch, a wave, a mountain silhouette — never more than one composition per viewport. The brush-strokes are always positioned asymmetrically — never centered.

vignette: a very gentle `box-shadow: inset 0 0 200px rgba(232, 218, 194, 0.4)` — the room edges are warmer-dim than the center. Subtle, atmospheric.

seasonal accent (optional): a single seasonal motif drifts in the background — a falling maple leaf (秋), a cherry petal (春), a snowflake (冬), or a fern frond (夏). Single, slow, gentle. Animates over 30-60s — barely noticeable. Used sparingly.

tatami-edge accent (optional): a horizontal band at the bottom of the viewport rendered as `background: var(--tatami); height: 80-120px; border-top: 1px solid var(--tatami-edge); border-bottom: 1px solid var(--tatami-edge); background-image: repeating-linear-gradient(0deg, transparent 0 6px, rgba(168, 148, 105, 0.15) 6px 7px)` — the woven mat texture, with the black silk edge.

steam wisps (rare atmospheric detail): a `::after` pseudo-element on hero containers may render 1-2 thin wavy lines drifting upward at low opacity — the rising steam from a kettle. Very subtle, very intermittent.

scrollbar: `width: 4px; track: transparent; thumb: var(--sumi-wash); thumb:hover: var(--sumi)`. Minimal — almost invisible.

ambient feel: a chashitsu in late autumn. A scroll hangs in the alcove with a single brush-painted character. Outside the shoji, the garden is composed of three stones and one moss-bed. The kettle hums faintly on the hearth. The host has just placed the chawan in front of you. The room is silent. The composition is everything you need; the negative space is the rest.

**editorial voice**

QUIET, contemplative, precise. The voice of a tea master who has done this 10,000 times. Period-terminated, brief, mincho-italic for emphasis. Never exclamation marks. Often a single seasonal kanji or virtue-character serves as a subheading.

button labels: italic-serif, sparse. `*Begin*`, `*Receive*`, `*Compose*`, `*Offer*`, `*Conclude*`, `*Return*`, `*See more*`, `*Open the scroll*`, `*Pour*`, `*Reflect*`. Italic mincho. Single-word or short-phrase. No call-to-action exhortation.

headings: lyrical-mincho, often a single kanji or short phrase. Hero glyphs in brush-script: `茶`, `和`, `敬`, `清`, `寂`, `間` (the chanoyu virtues, ma, tea itself). Section titles: `*Late Autumn — A Single Bowl*`, `*The Hearth — Awaiting Steam*`, `*Compositions in Ink Wash*`, `*A Quiet Survey of Recent Practice*`. Italic when sentence-style; brush-glyph when single character.

metadata: italic-mincho, dim, restrained. `*平成 28年 — late autumn*`, `*Composition III. Brushed in cinnabar.*`, `*Steeped 2 minutes. Whisked thirty strokes.*`, `*Practice 47 of 100*`, `*Pages xiv–xvii*`. Dates in mincho format when possible, in serif italic always.

placeholders: italic prompts. `*name...*`, `*write a few words...*`, `*the season you observe...*`, `*your seal here*`. Italic mincho. Lowercase. Always with ellipsis.

empty states: contemplative, brief. `*Awaiting first composition.*`, `*The scroll is yet unbrushed.*`, `*No teas served this season.*`, `*The hearth is cold — light it.*`, `*Quiet.*`. Single sentence, italic, period-terminated.

error messages: gentle, philosophical. `*Not yet aligned.*`, `*The composition wants for clarity.*`, `*This brush is dry — refresh.*`, `*Awaiting harmony.*`, `*Try once more — quietly.*`. Italic-mincho. Always with a path forward, never alarm.

success messages: spare and definitive. `*Received.*`, `*Stamped.*`, `*Concluded.*`, `*Steeped.*`, `*Sealed.*`, `*The bowl is empty — well-received.*`. Single word or short phrase. Italic-mincho. Period-terminated.

confirmation prompts: italic-quiet. `*Conclude this composition?*`, `*Empty the bowl?*`, `*Roll the scroll closed?*`. Never demanding, always permission-asking.

decorative inline kanji (atmospheric): `茶` (cha — tea), `和` (wa — harmony), `静` (sei — quiet), `間` (ma — interval), `美` (bi — beauty), `心` (kokoro — heart/mind). Used sparingly as inline decorative glyphs or as section-marker hero characters. Always in `var(--sumi)` brush-style font.

**cursor & selection**

cursor: `cursor: default` globally. Interactive elements use `cursor: pointer`. Inputs: `cursor: text`. Draggable scrolls: `cursor: grab` → `cursor: grabbing`. Custom cursor option: a small ink-brush tip glyph in `var(--sumi)`.

text selection: `::selection { background: var(--seal-red-bleed); color: var(--sumi); }` — a faint cinnabar-bleed wash, like the seal-stamp ink on washi. Body type remains in sumi-noir throughout.

**when to reach for this genome**

Use this genome when the request calls for a tea ceremony, chanoyu-inspired experience, matcha ritual, meditation journal, washi-paper publication, sumi-e composition, chashitsu booking, seasonal practice log, quiet hospitality page, calligraphy portfolio, contemplative product flow, or any product that should feel like a single bowl of tea composed inside deliberate negative space.

Reach for it when the user wants washi cream, sumi ink, matcha green, cinnabar seal stamps, shoji light, tatami texture, brush-stroke dividers, kanji glyphs, kakemono scroll layouts, slow motion, and the structural use of ma. It is strongest when the interface is about ceremony, reflection, invitation, seasonal observation, a small number of choices, or one carefully composed action at a time.

Choose it for:
- tea, matcha, meditation, contemplative writing, slow hospitality, Japanese craft, calligraphy, washi, ink-wash, or seasonal cultural experiences.
- minimalist pages where the brief explicitly wants ritual, asymmetry, paper, silence, brushwork, and intentional restraint rather than generic app minimalism.
- appointment or invitation flows where `Begin`, `Receive`, `Offer`, `Conclude`, `Reflect`, or `Open the scroll` naturally fit the workflow.
- editorial/product surfaces that need calm, hand-material texture and very sparse content density.

Do not choose it for generic wellness SaaS, high-density dashboards, retail ecommerce, anime/J-pop aesthetics, restaurant menu systems, official Japanese transit/government signage, corporate minimalism, or decorative "Japanese style" without ritual and restraint. Use `modern_studio.pro` or `ambient_drift.aura` for contemporary minimal digital polish, `vending_machine.aluminum` for Japanese machine hardware, `gallery_foyer.institution` for art-institution austerity, `ceramic_workshop.kiln` for clay/craft production, and `solar_cooperative.utx` or other operational genomes when the task needs data density.

**anti-patterns — this genome NEVER:**

1. uses dense, packed, information-heavy layouts. The page is composed of MA — generous negative space is the design. Density reads as overwhelm; subtraction is the mode. If a layout feels busy, remove an element.
2. uses saturated, bright, or fluorescent color palettes. The palette is washi-cream, sumi-ink, matcha-green, cinnabar-red — earthy, restrained, slightly warm. Hot pinks, electric blues, and neon accents contradict the chashitsu identity entirely.
3. uses chunky filled buttons or rectangular CTA blocks. Buttons are text-only with a brush-stroke underline, or the rare seal-stamp impression. Filled rectangular buttons belong to retail genomes; here, action is restrained typographic emphasis.
4. uses bold weights or heavy display type. Maximum font-weight is 500 — never bold (700+). The genre is brush-stroke and mincho-thin — heaviness contradicts the calligraphic restraint.
5. uses snappy fast transitions or spring-bounce animations. Motion is SLOW and EASE-BASED — 0.4-0.8s standard, 1.0-1.5s for atmospheric reveals. Anything faster than 0.3s reads as digital snap; this genome flows at the pace of pouring tea.
6. uses casual marketing-speak or enthusiastic exclamation voice. The voice is the tea master — period-terminated, italic-mincho, single-word confirmations. Never "Discover your perfect blend!" — always "*Received.*".
7. uses dropshadows with high blur or strong contrast. Shadows are SOFT and WARM — washi-on-tatami `0 4px 16px var(--sumi-ghost)` softness. Hard offset shadows belong to retail/zine genomes; here, depth is barely perceptible.
8. uses symmetric, center-aligned, grid-locked compositions. The composition is ASYMMETRIC — content sits off-center, like a single kanji on a hanging scroll. Symmetry contradicts wabi-sabi entirely. Off-center is structural, not decorative.
9. uses icons, pictographs, or modern UI iconography. Visual language is BRUSH STROKES, KANJI GLYPHS, HAIRLINE RULES, SEAL STAMPS. Material Icons and Font Awesome belong to other vocabularies; here, decoration comes from typography and ink alone.
10. uses dark-mode backgrounds as the default. The substrate is washi-cream; ink is dark-on-cream; the entire identity rests on warm-paper. Dark-mode interpretations obliterate the genome. The room is lit by northern light through paper screens — never by a black void.
