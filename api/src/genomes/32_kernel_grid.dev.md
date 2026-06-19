---
id: "32"
name: kernel_grid.dev
keywords:
  - bento
  - developer
  - grid
  - tech blog
  - engineering
  - monochrome
  - cards
  - terminal
  - portfolio
  - minimalist
  - content platform
  - vercel
  - github
  - notion
  - blog
---

### genome 32: `kernel_grid.dev`

> identity: developer content platform as architecture. the tight bento grid of Vercel's marketing, the achromatic restraint of a Notion workspace, and the quiet authority of a well-organized GitHub profile — ultralight type on white canvas, 4px gaps, square cards with embedded terminal blocks.

**surface**

colors (CSS custom properties):
```
--canvas: #FFFFFF;
--card: #F7F7F7;
--card-hover: #F0F0F0;
--ink: #111111;
--ink-secondary: #666666;
--ink-muted: #999999;
--border-subtle: #E5E5E5;
--dark-card: #111111;
--dark-card-hover: #000000;
--dark-text-muted: #888888;
```

typography:
- display/headlines: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif` — weight 200-300, sizes 28-48px, `letter-spacing: -0.02em`, `line-height: 1.2`. large headlines use weight 200 at 48px. standard headlines weight 300 at 28px. never heavier than 300 on headlines.
- body/copy: `'Inter', sans-serif` — weight 400, 13px, `line-height: 1.5`, `color: var(--ink-secondary)`, max-width 300px per text block.
- meta/labels: `'Inter', sans-serif` — weight 500, 9-11px, `text-transform: uppercase`, `letter-spacing: 0.1em`, `color: var(--ink-muted)`.
- terminal/code: `'JetBrains Mono', 'SF Mono', 'Fira Code', monospace` — weight 300-400, 12px, no uppercase.
- brand text: weight 500, 14px, uppercase, `letter-spacing: 0.05em`.

borders:
- cards: no border, no border-radius. cards are defined by background color difference alone.
- nav pills/CTAs: `border-radius: 100px` (full pill shape). `background: var(--ink); color: var(--canvas)`.
- menu links: `border: 1px solid var(--border-subtle); border-radius: 100px; padding: 8px 16px`.
- terminal blocks: `border-top: 1px solid var(--border-subtle); padding-top: 20px` (separator, not container).
- dark card terminal blocks: `border-top: 1px solid #333`.

spacing:
- layout wrapper: `max-width: 1600px; margin: 0 auto; padding: 40px`.
- grid gap: `4px` — this is non-negotiable. the tight gap is the defining spatial signature.
- card padding: `32px` internal.
- header padding-bottom: `40px`.
- minimum card height: `320px`.

**color distribution**

- 45% white canvas (`--canvas`) — the void between and around the grid
- 30% light gray cards (`--card`) — the dominant card surface
- 15% black ink (`--ink`) — dark card variants, text, nav pills, brand
- 10% gray spectrum (`--ink-secondary`, `--ink-muted`, `--border-subtle`) — copy text, meta labels, borders

this genome is strictly achromatic. no accent colors. no brand colors. no tinted grays. the entire palette lives on the pure black-to-white axis. color enters only through photographic images, never through UI elements.

**component patterns**

buttons/CTAs:
- primary: pill shape (`border-radius: 100px`), `background: var(--ink); color: var(--canvas); padding: 10px 24px; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em`. no border.
- secondary/menu: pill shape, `background: transparent; border: 1px solid var(--border-subtle); color: var(--ink); padding: 8px 16px; font-size: 11px`. border darkens on hover.
- no icon buttons. no ghost buttons. no filled color buttons.

inputs:
- minimal underline style: `border: none; border-bottom: 1px solid #ddd; padding-bottom: 8px; background: transparent; font-size: 12px; color: var(--ink-muted)`. right-aligned arrow `→` as submit indicator.
- no outlines, no filled backgrounds, no floating labels.

cards:
- default: `background: var(--card); padding: 32px; min-height: 320px`. no border, no radius, no shadow.
- dark variant: `background: var(--ink); color: var(--canvas)`. body text on dark cards: `#aaaaaa`. meta labels on dark cards: `#666666`.
- image card: full-bleed `<img>` with `position: absolute; object-fit: cover; filter: grayscale(100%) contrast(1.1); transition: filter 0.4s ease, transform 0.6s ease`. on hover: `filter: grayscale(0%) contrast(1); transform: scale(1.02)`. content overlays with `position: relative; z-index: 1`.
- every linkable card has a `↗` arrow icon at `top: 24px; right: 24px; font-size: 14px`.

navigation:
- horizontal flex layout: brand left, menu center, CTA right.
- brand: two-line stack — name (weight 500, 14px) over subtitle (weight 400, 10px, muted).
- menu: horizontal list of pill-bordered links with `gap: 24px`.
- all navigation text is uppercase with `letter-spacing: 0.05em`.

headers:
- meta tag above headline: 9px uppercase, 0.1em tracking, muted color, `margin-bottom: 16px`.
- headline below: 28-48px, weight 200-300, negative tracking.
- copy below headline: 13px, secondary color, `max-width: 300px`.
- vertical stack: meta → headline → copy, with `justify-content: space-between` stretching the card.

footers:
- `border-top: 1px solid #f0f0f0` — barely visible.
- 4-column grid matching the main bento grid.
- column headings: 10px uppercase, 0.1em tracking, muted color.
- links: 12px, black, `margin-bottom: 12px`. fade to muted on hover.

lists:
- no bullets, no numbers. vertical stack of text links.
- `margin-bottom: 12px` between items.
- footer pattern: heading → link list per column.

tables:
- minimal: hairline bottom borders only. no alternating rows. headers in uppercase 9px muted.
- data in 13px regular weight.

dividers:
- terminal blocks use `border-top: 1px solid var(--border-subtle)` as section dividers within cards.
- footer uses `border-top: 1px solid #f0f0f0`.
- no decorative dividers. no thick rules. no colored lines.

modals/overlays:
- if needed: `background: var(--canvas); padding: 32px`. no border-radius. no shadow. full-bleed overlay with `background: rgba(0,0,0,0.5)`.

badges/tags:
- meta tags only: `font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink-muted)`. no background, no border, no pill shape on tags (pills are reserved for nav/CTAs).

stat displays:
- `font-size: 64px; font-weight: 200; letter-spacing: -0.04em`. pushed to bottom of card with `margin-top: auto`.

terminal blocks:
- `font-family: var(--font-mono); font-size: 12px; color: #333`. pushed to bottom of card.
- prompt lines prefixed with `➜` in muted color.
- optional blinking cursor: `width: 6px; height: 14px; background: var(--ink); animation: blink 1s step-end infinite`.
- dark card variant: text `#aaa`, cursor white.

**interaction language**

hover:
- cards: `background-color` shifts one step darker (card → card-hover, dark → #000). `transition: background-color 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)`.
- arrow icons: `transform: translate(4px, -4px)` with `transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)`.
- image cards: image desaturates to full color (`filter: grayscale(0%) contrast(1)`) and scales to `1.02`.
- nav pills: `transform: scale(1.05)`.
- menu links: border color darkens from `#E5E5E5` to `var(--ink)`.
- footer links: color fades to `var(--ink-muted)`.

active/pressed:
- cards: `background-color` snaps to hover state instantly (no additional pressed state beyond hover).
- nav pills: `transform: scale(0.98)`.

focus:
- `outline: 2px solid var(--ink); outline-offset: 2px`. no glow, no shadow, no color accents.

selected:
- background shifts to `var(--ink); color: var(--canvas)`. the card inverts.

disabled:
- `opacity: 0.3`. no strikethrough, no graying — just fade.

drag:
- `opacity: 0.6; cursor: grabbing`. no shadow lift, no scale change.

**motion & feedback**

transitions:
- default easing: `cubic-bezier(0.215, 0.61, 0.355, 1)` — Expo.easeOut character.
- background-color: `0.4s`.
- transform (arrows, scale): `0.3s`.
- border-color, color: `0.2s ease`.
- image filter + transform: `filter 0.4s ease, transform 0.6s ease`.
- all transitions are subtle and functional. nothing bounces, overshoots, or draws attention.

loading:
- blinking cursor block (6x14px, `animation: blink 1s step-end infinite`) in a terminal block. no spinners, no skeleton screens.

success:
- brief `background: var(--ink); color: var(--canvas)` flash on the triggering element (200ms), then revert.

error:
- `border-bottom: 2px solid var(--ink)` appears under the errored element. error text in `var(--ink)` at 11px below the element. no red, no icons — just emphasis through weight.

**atmosphere**

- pure white canvas. no texture, no grain, no noise, no gradient backgrounds.
- the atmosphere comes from the bento grid itself — the 4px gaps create a visible but restrained lattice that gives the page its architectural quality.
- grayscale image treatment (`filter: grayscale(100%) contrast(1.1)`) creates visual unity across photographic content. color is earned through hover interaction.
- dark card variants (`background: var(--ink)`) punctuate the grid like negative space in a photo contact sheet.
- no ambient animations, no floating particles, no parallax, no scroll-triggered effects.
- `overflow: hidden` on cards crops content cleanly at card edges.
- the page feels like a developer's curated grid — everything in its place, nothing decorative.

**editorial voice**

button labels: `SUBSCRIBE`, `VIEW ALL`, `READ MORE`, `EXPLORE`, `GET STARTED`, `SEND`. always uppercase, always terse.

headings: uppercase when making a statement (`COMPUTING AS CRAFT.`), title case when descriptive (`Transformer Latency`, `Self-Hosting LLMs`). periods on manifesto-style headlines only. weight 200-300. occasionally use `//` as a separator (`KERNEL // ARCHITECTURE`).

metadata: single-word or two-word category labels. always uppercase. examples: `Manifesto`, `Artificial Intelligence`, `Engineering`, `Tutorial`, `Homelab`, `Philosophy`, `Terminal`, `Newsletter`. these are taxonomic, not descriptive.

placeholders: lowercase, muted: `email@address.com`, `search articles...`, `enter command`.

empty states: monospace terminal style: `> no results found`, `> 0 items`, `> awaiting input...`. prefixed with `>` prompt character.

error messages: terminal-style: `> error: connection refused`, `> 404: resource not found`. monospace, lowercase, prefixed with `>`.

success messages: terminal-style: `> done.`, `> subscribed.`, `> 1 item added.`. minimal confirmation, monospace.

stat callouts: oversized numbers at weight 200 with trailing symbols: `142+`, `98.4%`, `42ms`. numbers tell the story, not words.

**cursor & selection**

- default: `cursor: default` on body.
- interactive elements (cards, links, pills): `cursor: pointer`.
- terminal blocks: `cursor: text`.
- `::selection { background: var(--ink); color: var(--canvas); }` — inverted black selection. no accent color.

**when to reach for this genome**

Use `kernel_grid.dev` when the prompt asks for a developer content platform, engineering blog, technical portfolio, documentation hub, changelog, newsletter archive, GitHub-style profile, Vercel-like marketing grid, Notion-like knowledge surface, code-heavy landing page, homelab index, or minimalist content product organized as modular cards.

Reach for it when the visual cues are pure white canvas, tight 4px bento gaps, square light-gray cards, dark-card punctuation, no card borders or radius, Inter headlines at light weights, JetBrains Mono terminal snippets, uppercase taxonomic metadata, pill navigation/CTAs, diagonal arrow marks, grayscale image cards, terminal-style empty states, and a strictly black/white/gray interface where color appears only through photography.

Use it when the product should be technical, quiet, current, and content-first: browse essays, read release notes, compare project cards, subscribe to engineering writing, inspect code snippets, present open-source work, or package a developer's body of work as a disciplined grid.

Do not use it for generic polished SaaS dashboards, prosumer creative tools, soft shadows, 24px rounded cards, chartreuse/violet accents, or app-store professionalism; use `modern_studio.pro`. Do not use it for 1984 Macintosh nostalgia, beige CRT desktops, Finder windows, floppy disks, Garamond product-launch warmth, or friendly retro computer hardware; use `figmint_desktop.84`. Do not use it for hacker terminals, amber CRT glow, basement CLI tools, covert utilities, bracket commands, or dark phosphor screens; use `underground_terminal.crt`. Do not use it for creative-coding portfolios whose main material is a generative canvas, shader specimen, coordinate system, or monochrome interactive artwork; use `signal_void.cc`. Do not use it for social feeds, microblogging, creator timelines, follows, likes, reposts, notifications, or X/Twitter-style products; use `public_timeline.x`. Do not use it for warm editorial data intelligence, Japanese modernist color blocks, serif headlines, sand/sky/coral surfaces, or premium data-company annual reports; use `mosaic_signal.data`. Do not use it for cool Swiss finance publications, outlined display numerals, institutional ledgers, vertical text markers, or quarterly report grids; use `structured_folio.swiss`.

It is strongest when the page is a browsable architecture of content modules rather than a conventional app shell. If the prompt mainly wants a workflow dashboard, social timeline, retro desktop, terminal emulator, art canvas, financial report, or colored editorial system, choose another genome.

**anti-patterns — this genome NEVER:**

1. uses color accents — no blue links, no green success, no red errors. the palette is strictly black, white, and gray. color enters only through photographic images.
2. uses border-radius on cards or panels — cards are always sharp rectangles. pill radius is reserved exclusively for navigation pills and CTA buttons.
3. uses drop shadows or box-shadows on cards — depth is communicated through background color difference, never shadow.
4. uses font weights above 500 — the heaviest weight in the system is 500 for brand text. headlines use 200-300. bold (600-900) does not exist here.
5. uses decorative icons, illustrations, or emoji — the only icon is the `↗` arrow on linkable cards. everything else is typography and photography.
6. uses colored backgrounds — cards are `#F7F7F7` or `#111111`. never tinted, never gradient, never saturated.
7. uses large grid gaps — the 4px gap is the defining spatial signature. gaps wider than 4px between grid items violate the genome's architectural density.
8. uses skeleton loading screens or spinner animations — loading states use blinking terminal cursors only.
9. uses rounded corners on images — images are always cropped to the sharp rectangle of their container card.
10. uses serif or decorative typefaces — Inter and JetBrains Mono only. no display fonts, no handwriting, no pixel fonts.
