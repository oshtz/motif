---
id: "64"
name: panel_sequence.ink
keywords:
  - comic
  - manga
  - panel
  - speech bubble
  - halftone
  - graphic novel
  - ink
  - sequential art
  - pop art
  - superhero
  - cartoon
  - illustration
---

### genome 64: `panel_sequence.ink`

> identity: comic book page as interface. Bold black ink outlines, halftone dot shading, speech-bubble containers, POW/ZAP display type, gutter-separated panels as the fundamental layout primitive. The UI is literally a comic page — content lives inside panels with varied aspect ratios, separated by gutters. Jack Kirby's dynamic compositions, Osamu Tezuka's clean line work, Chris Ware's architectural precision. Every card is a panel, every modal is a splash page, every tooltip is a speech bubble.

**surface**

colors:
```
--ink-black: #1A1A1A;
--page-white: #FAFAF5;
--halftone-blue: #2B7BB9;
--action-red: #E02D2D;
--action-yellow: #FFD700;
--speech-white: #FFFFFF;
--gutter: #E8E4DC;
--shadow-gray: #9B9B9B;
--caption-cream: #FFF8DC;
--outline-stroke: #0D0D0D;
```

typography:
- display/headings: `"Bangers", "Comic Neue", cursive` — bold comic-book title lettering. `font-weight: 700`. `text-transform: uppercase`. `letter-spacing: 0.03em`. display: `36-56px`. section headers: `22-32px`.
- sound effects: `"Bangers"` at MASSIVE scale `4-8rem`, frequently rotated via `transform: rotate(-5deg)` to `rotate(10deg)`, with text stroke outlines: `-webkit-text-stroke: 2px var(--ink-black); paint-order: stroke fill`.
- body/narrative: `"Comic Neue", "Nunito", sans-serif` at `font-weight: 400-700`, `font-size: 14-16px`, `line-height: 1.55`.
- caption boxes: `"Comic Neue"` at `font-weight: 700; font-style: italic; font-size: 13-14px`.
- `letter-spacing: 0.03em` on all headings. `0.01em` on body.
- `text-transform: uppercase` on ALL comic lettering — traditional comics letter everything in caps.

borders:
- the ink outline defines everything: `3-4px solid var(--ink-black)` on all panels, cards, and structural elements.
- `border-radius: 4-6px` — slight rounding that suggests hand-drawn panel borders, not machine-cut.
- speech bubbles: organic rounded shapes — `border-radius: 50%` or `border-radius: 60% 40% 55% 45% / 45% 55% 40% 60%` for irregular hand-drawn feel.
- inner panel borders: `2px solid var(--ink-black)` for sub-divisions.
- thought bubbles: scalloped/cloud-shaped via `border-radius` with multiple `box-shadow` bumps, or CSS clip-path.

spacing:
- panel gutters: `gap: 8-12px` in `var(--gutter)` — the white space between panels on a comic page. this IS the layout system.
- internal padding: `16-24px` inside panels.
- the gutter color shows between every card/panel, creating the comic-page grid structure.
- panel arrangements: varied — `grid-template-columns` and `grid-template-rows` create asymmetric layouts where some panels span 2 columns (action shots) while others are narrow (reaction shots).

**color distribution**
- 55% page-white (`#FAFAF5`) — the paper ground. the comic page itself.
- 25% ink-black (`#1A1A1A`) — outlines, text, borders, fills. the ink on the page.
- 10% halftone-blue (`#2B7BB9`) — Ben-Day dot shading, secondary fills, cool tones. the traditional cheap-print blue.
- 5% action-red (`#E02D2D`) — POW!, alerts, danger, action accents. the punch.
- 5% action-yellow (`#FFD700`) — ZAP!, highlights, success bursts, starburst fills. the flash.

**component patterns**

buttons: bold, inked, unmistakable. primary: `background: var(--action-red); color: var(--speech-white); border: 3px solid var(--ink-black); border-radius: 6px; font-family: "Bangers", cursive; text-transform: uppercase; font-size: 1.1rem; letter-spacing: 0.05em; padding: 12px 28px; box-shadow: 4px 4px 0px var(--ink-black)`. secondary: `background: var(--page-white); color: var(--ink-black); border: 3px solid var(--ink-black); box-shadow: 3px 3px 0px var(--ink-black)`. action/yellow: `background: var(--action-yellow); color: var(--ink-black); border: 3px solid var(--ink-black)`. all buttons feel like they belong in a panel — bold, flat, outlined.

inputs: `background: var(--speech-white); border: 3px solid var(--ink-black); border-radius: 6px; font-family: "Comic Neue", sans-serif; font-weight: 500; font-size: 15px; padding: 12px 16px; color: var(--ink-black)`. focus: `border-width: 4px; box-shadow: 0 0 0 2px var(--halftone-blue)`. placeholder: `color: var(--shadow-gray); font-style: italic`. label above in Bangers uppercase at `font-size: 13px; letter-spacing: 0.06em`.

cards/PANELS: the fundamental element — `background: var(--page-white); border: 3px solid var(--ink-black); border-radius: 4px`. panels are arranged in a CSS grid with `gap: 10px` (the gutter). panels have VARIED aspect ratios — some span 2 columns for wide "establishing shots", some are narrow vertical "close-ups". panel header: `font-family: "Bangers"; text-transform: uppercase; font-size: 1.2rem; padding: 12px 16px; border-bottom: 2px solid var(--ink-black)`. content area: `padding: 16px 20px`.

CAPTION BOXES (signature element): narrative text in a rectangular box — `background: var(--caption-cream); border: 2px solid var(--ink-black); border-radius: 3px; padding: 8px 14px; font-family: "Comic Neue"; font-weight: 700; font-style: italic; font-size: 13px; position: absolute; top: 8px; left: 8px; z-index: 2`. placed in the corner of a panel like a comic narrator box. "MEANWHILE...", "LATER THAT DAY...", "EDITOR'S NOTE:".

SPEECH BUBBLES (signature element): tooltips and popover containers — `background: var(--speech-white); border: 2px solid var(--ink-black); border-radius: 20px; padding: 12px 18px; position: relative`. CSS triangle tail: `&::after { content: ""; position: absolute; bottom: -12px; left: 24px; width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 12px solid var(--ink-black); }` with an inner white triangle to create the outlined tail effect. thought bubbles use circle-chain tails instead of triangles.

navigation: panel-strip across top — `background: var(--page-white); border-bottom: 4px solid var(--ink-black); padding: 0; display: flex`. each nav item: `padding: 12px 22px; font-family: "Bangers"; text-transform: uppercase; font-size: 1rem; letter-spacing: 0.04em; border-right: 2px solid var(--ink-black); color: var(--ink-black)`. active: `background: var(--action-red); color: var(--speech-white)`. the nav reads like a comic strip title banner.

headers: splash-panel style — `background: var(--page-white); border: 4px solid var(--ink-black); padding: 24px 32px; position: relative; overflow: visible`. title in Bangers at `3-5rem`, possibly rotated `transform: rotate(-2deg)`. optional: starburst/burst shape behind title — a CSS `clip-path: polygon(...)` element in `var(--action-yellow)` peeking out behind the text. speed lines radiating outward via repeating `linear-gradient`.

footers: thin panel strip — `background: var(--gutter); border-top: 3px solid var(--ink-black); padding: 12px 20px`. metadata in Comic Neue: `font-size: 12px; color: var(--shadow-gray)`. issue number, page count, credits.

lists: sequential mini-panels — each list item: `border: 2px solid var(--ink-black); border-radius: 4px; background: var(--page-white); padding: 12px 16px; margin-bottom: 8px`. numbered items use bold oversized numbers in Bangers: `font-size: 2rem; color: var(--action-red); float: left; margin-right: 12px; line-height: 1`. unordered items use ink-dot bullets: `list-style: disc; color: var(--ink-black)`.

tables: grid of small panels — `border: 3px solid var(--ink-black); border-radius: 4px; overflow: hidden; border-collapse: separate; border-spacing: 0`. header row: `background: var(--ink-black); color: var(--speech-white); font-family: "Bangers"; text-transform: uppercase; letter-spacing: 0.05em; padding: 10px 14px`. body cells: `background: var(--page-white); border-bottom: 2px solid var(--ink-black); border-right: 2px solid var(--ink-black); padding: 10px 14px`. each cell is its own mini-panel.

dividers: ink brush strokes — not plain `<hr>`. rendered via SVG `border-image` or a jagged/organic line background-image. alternatives: a zigzag line, a row of halftone dots, or a drawn "squiggle". `margin: 20px 0`. the divider should look hand-drawn.

modals: SPLASH PAGE — `background: var(--page-white); border: 4px solid var(--ink-black); border-radius: 8px; box-shadow: 8px 8px 0px var(--ink-black); padding: 0; overflow: hidden`. modal header: `background: var(--action-red); color: var(--speech-white); font-family: "Bangers"; text-transform: uppercase; font-size: 1.5rem; padding: 16px 24px; border-bottom: 3px solid var(--ink-black)`. content: `padding: 20px 24px`. backdrop: `background: rgba(26,26,26,0.6)` with a halftone dot overlay at 8% opacity — `background-image: radial-gradient(circle, rgba(26,26,26,0.15) 1px, transparent 1px); background-size: 4px 4px`.

badges: STARBURST shapes — `background: var(--action-yellow); color: var(--ink-black); border: 2px solid var(--ink-black); font-family: "Bangers"; text-transform: uppercase; font-size: 12px; padding: 4px 12px; transform: rotate(-5deg)`. ideally rendered with a `clip-path: polygon(...)` starburst shape. alternative: `border-radius: 3px` simple rectangle with rotation. status badges: `background: var(--halftone-blue); color: white` for info, `background: var(--action-red)` for urgent.

**interaction language**

hover: halftone overlay appears — the hovered element gains a subtle dot-pattern background via `background-image: radial-gradient(circle, var(--halftone-blue) 1px, transparent 1px); background-size: 6px 6px` at 8% opacity. `transition: 0.15s ease`. slight scale: `transform: scale(1.02)`. border color may shift to `var(--halftone-blue)`.

active/pressed: hard offset shadow appears — `box-shadow: 4px 4px 0px var(--ink-black); transform: translate(-2px, -2px)`. the element "lifts off the page" and casts an ink shadow. on release, it slams back: `box-shadow: none; transform: translate(0, 0)`.

focus: `outline: 3px solid var(--halftone-blue); outline-offset: 3px`. bold, visible, comic-weight. the focus ring itself is a panel border.

selected: `background: var(--halftone-blue); color: var(--speech-white); border-color: var(--ink-black)`. the selected panel is "colored in" — filled with the halftone blue.

disabled: `opacity: 0.4; border-style: dashed`. ink borders become dashed lines — like a pencil sketch that hasn't been inked yet. the element exists but isn't finalized.

drag: element lifts off the page — `box-shadow: 6px 6px 0px var(--ink-black); transform: rotate(3deg) scale(1.03)`. like peeling a panel off the page. on drop: snaps to position with a brief scale bounce.

**motion & feedback**

transitions: `0.15-0.2s ease-out`. quick, punchy, decisive — like turning a page. nothing lingers. comic panels don't fade in — they're there or they're not.

loading: speech bubble with animated dots — `"..."` where each dot appears sequentially at 0.3s intervals (typing indicator in a speech bubble). the bubble has the standard ink outline and tail.

success: starburst animation — a burst shape in `var(--action-yellow)` with text like "POW!", "YES!", "DONE!" scales up from `0.5` to `1.0` over `0.2s`, holds `0.5s`, then fades. `font-family: "Bangers"; font-size: 2rem; transform: rotate(-8deg)`.

error: action-red burst — "WHAM!", "OOPS!", "UH OH!" in action-red starburst. slight shake animation: `@keyframes comicShake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-4px) rotate(-1deg); } 75% { transform: translateX(4px) rotate(1deg); } }` — `animation: comicShake 0.3s ease`.

page enter: panels slide in sequentially in reading order — left-to-right, top-to-bottom. each panel: `transform: scale(0.9) rotate(-2deg); opacity: 0` to `transform: scale(1) rotate(0); opacity: 1` over `0.2s ease-out`, staggered by `60ms`. the page "assembles" panel by panel.

**atmosphere**

page-white background (`var(--page-white)`) — the comic book page. warm, slightly off-white paper.

halftone dot patterns: the signature atmospheric texture. used as shading overlays on backgrounds and hover states: `background-image: radial-gradient(circle, var(--halftone-blue) 1px, transparent 1px); background-size: 5px 5px; opacity: 0.08`. Ben-Day dots at larger scale for decorative fills: `background-size: 8px 8px; opacity: 0.12`.

speed lines: radiating lines from a center point behind hero content. implemented via `background: repeating-conic-gradient(var(--ink-black) 0deg 0.5deg, transparent 0.5deg 5deg)` at low opacity, or a radial SVG pattern. used sparingly — behind headers, hero panels, or call-to-action elements.

panel gutters: `var(--gutter)` color (`#E8E4DC`) visible between every card/panel. this warm off-white gap is the "binding" of the comic page. it structures the entire layout.

paper texture: a very subtle noise pattern at 2-3% opacity over `var(--page-white)` — the tooth of comic-book newsprint. not smooth, not rough — just present enough to feel physical.

ink splatter: optional decorative elements — small ink dots or splashes placed near panel edges via absolutely-positioned pseudo-elements. `background: var(--ink-black); border-radius: 50%; width: 4-8px; height: 4-8px; opacity: 0.15`.

**editorial voice**

energetic, narrative, exclamatory. the genome SPEAKS IN COMICS.

button labels: action-word energy. `"GO!"`, `"NEXT →"`, `"SMASH IT!"`, `"Read More"`, `"Save Draft"`, `"POW!"`, `"SEND!"`, `"Let's Go!"`, `"DO IT!"`. title case or all-caps. short, punchy.

headings: bold narrative. `"The Story So Far"`, `"What Happens Next?"`, `"Breaking News!"`, `"Chapter One"`, `"Meanwhile..."`, `"Previously..."`, `"The Big Reveal"`, `"Origins"`. title case in Bangers.

metadata: issue/serial format. `"Issue #14"`, `"Page 3 of 8"`, `"Panel IV"`, `"Vol. 2"`, `"Ch. 3"`, `"Arc: The Beginning"`, `"Series #001"`.

placeholders: `"What's your story?"`, `"Type your message..."`, `"Enter the scene..."`, `"Name your hero..."`.

empty states: `"This page is blank."`, `"Nothing to see here... yet!"`, `"The story hasn't started."`, `"Waiting for the first panel..."`.

error messages: sound-effect energy. `"WHAM! Something went wrong."`, `"Plot twist — that didn't work."`, `"Uh oh!"`, `"CRASH! Try again."`.

success messages: `"KAPOW! Done!"`, `"Saved!"`, `"Nice move!"`, `"BAM! Nailed it."`, `"To be continued..."`.

**cursor & selection**

cursor: `default` globally. `pointer` on all interactive elements — buttons, nav items, clickable panels, badges.

text selection: `::selection { background: var(--action-yellow); color: var(--ink-black); }`.

**when to reach for this genome**

Use `panel_sequence.ink` when the prompt asks for comics, manga, graphic novels, sequential art, panel layouts, speech bubbles, caption boxes, halftone shading, superhero energy, cartoon storytelling, illustrated product tours, or any interface that should read like a comic page unfolding in panels.

Reach for it when the visual cues are thick black ink outlines, warm page paper, visible gutters, varied panel aspect ratios, Bangers/Comic Neue lettering, all-caps captions, halftone dots, speech and thought bubbles, action bursts, speed lines, POW/ZAP-style feedback, and red/yellow/blue print accents. It is strongest when the product benefits from sequence, narration, reveal, reaction shots, or a story-like progression through content.

Choose it for:
- story-driven landing pages, creator portfolios, comic shops, manga libraries, explainer flows, launch walkthroughs, playful dashboards, issue trackers with narrative framing, and campaign pages where panels can organize the experience.
- interactions where `Next Panel`, `Read More`, `Chapter One`, `Meanwhile...`, `Issue #14`, `KAPOW! Done!`, or speech-bubble tooltips feel native rather than decorative.
- interfaces that need bold printed energy, asymmetric panel grids, dramatic feedback, and physical ink-on-paper texture without becoming a zine collage.

Do not choose it for punk xerox/riso layouts without speech bubbles or sequential panels; use `neo_brutalist.zine` or `skatepark_zine.grip` for that. Use `tattoo_flash.ink` for tattoo-shop icon sheets, banner scrolls, and flash catalogs; `constructivist_poster.agit` for political poster geometry; `subway_sticker.bombing` for layered street stickers; `geocities_page.www` for old-web cartoon chaos; and `ukiyo_woodcut.edo` for Japanese woodblock print aesthetics. If the brief asks for official signage or transit maps, use `transit_wayfinding.sys` instead.

**anti-patterns — this genome NEVER:**
1. uses thin/hairline borders (1px) as primary panel outlines. all structural borders are 3px minimum — bold ink outlines define this genome. the weight of the ink line is the visual signature.
2. uses gradient fills on UI surfaces. colors are flat and solid — this is printed ink on paper, not digital rendering. a panel is one color, not a gradient.
3. uses blur, backdrop-filter, or frosted glass effects. comic pages are opaque newsprint paper. nothing is translucent, nothing is frosted. the only "overlay" is halftone dots.
4. uses serif typefaces for display text. display type is always bold comic lettering (Bangers) — not elegant serifs, not thin sans. the lettering must feel hand-drawn and bold.
5. uses muted, desaturated, or pastel color palettes. accent colors are pure, bold, CMYK primaries — the inks of cheap comic-book printing. red is RED. yellow is YELLOW.
6. uses subtle, quiet, or understated feedback. every interaction should feel like a comic-book sound effect — punchy, visible, a little dramatic. a click is a POW, not a whisper.
7. uses uniform grid layouts where all panels are identical size. panel variety is the compositional signature — mix wide establishing shots, narrow reaction panels, tall dramatic reveals. the grid is asymmetric.
8. uses smooth/gentle transitions longer than 0.3s. everything is snappy and impactful, like turning a page. no slow fades, no ease-in-out over 500ms.
9. uses dark/black backgrounds as the primary page surface. the page is always light — warm white paper. this is printed material, not a screen. dark fills only inside specific panels or elements.
10. uses clean geometric borders or plain horizontal rules as dividers. dividers are hand-drawn, organic, or decorative — ink brush strokes, zigzags, dot patterns. nothing that looks machine-made.
