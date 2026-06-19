---
id: "29"
name: institutional_wire.macro
keywords:
  - finance
  - institutional
  - bloomberg
  - macro
  - credit
  - capital
  - research
  - wire
  - trading
  - quantitative
  - helvetica
  - editorial
  - banking
  - report
  - swiss
  - data
---

### genome 29: `institutional_wire.macro`

> identity: institutional macro research wire. bloomberg terminal meets monocle editorial meets swiss international typographic tradition — the quarterly report PDF from a $80B AUM credit fund, rendered as a live interface. black void, signal red, and hairline precision.

**surface**

colors:
```
--black: #0a0a0c;
--red: #ff3b30;
--white: #f4f4f4;
--dim: rgba(255, 255, 255, 0.4);
--muted: rgba(255, 255, 255, 0.6);
--hairline: 1px solid var(--black);
--hairline-light: 1px solid rgba(255, 255, 255, 0.4);
```

typography:
- font family: `'Helvetica Neue', Helvetica, Arial, sans-serif` for everything. no secondary typeface.
- display headings: `font-size: clamp(3rem, 8vw, 9rem); font-weight: 500; line-height: 0.85; letter-spacing: -0.04em;` — massive, tightly tracked, never bold (500 max).
- body text: `font-size: 0.85rem; line-height: 1.4; font-weight: 400;`
- lead paragraphs: `font-size: 1.25rem; line-height: 1.3; font-weight: 500; letter-spacing: -0.01em;` — one per section maximum.
- metadata / labels: `font-size: 0.65-0.75rem; font-weight: 500-600; letter-spacing: 0.05em; text-transform: uppercase;`
- footer / tertiary: `font-size: 0.7rem; color: var(--muted);`
- `text-wrap: balance` on all display headings.

borders:
- all panels and dividers use `1px solid` — never thicker. the word is "hairline."
- `border-radius: 0px` on all structural elements (panels, cards, grids, modals, data blocks).
- pills and tags are the sole exception: `border-radius: 999px;`

spacing:
- panel padding: `2rem`
- internal section gaps: `2rem`
- metadata/pill gaps: `0.25-0.5rem`
- flow item margin: `2.5rem` bottom

**color distribution**

- 55% black (`--black`) — primary backgrounds, void areas, data visualization blocks
- 20% red (`--red`) — secondary panel backgrounds, accent surfaces, data vis overlays. red is used as a *surface* color, not just an accent — entire panes or sections are red-backed.
- 15% white (`--white`) — primary text on dark, pill fills, markers
- 10% dim/muted (`--dim`, `--muted`) — secondary text, hairline borders on dark surfaces, footer metadata

critical: red is never a thin accent stripe. it occupies significant surface area — 50% split panes, full panel backgrounds, or large data blocks. the tension between black void and red surface *is* the visual identity.

**component patterns**

buttons:
- primary: `background: var(--white); color: var(--black); border: none; border-radius: 999px; padding: 0.3rem 0.8rem; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;` — pill-shaped, compact.
- secondary/ghost: `background: transparent; border: var(--hairline-light); border-radius: 999px; padding: 0.3rem 0.8rem; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.05em;` — outlined pill on dark.
- on red backgrounds: `border: 1px solid var(--black); color: var(--black);`
- never tall, never wide. buttons are tight, compact, understated. they look like metadata tags.

inputs:
- `background: transparent; border-bottom: var(--hairline-light); color: var(--white); font-size: 0.85rem; padding: 0.5rem 0;`
- no visible container — underline only.
- label: uppercase, 0.65rem, above the field, `color: var(--muted);`
- focus: border-bottom transitions to `var(--white)`.
- on red backgrounds: `border-bottom: 1px solid var(--black);`

cards/panels:
- split-pane layouts are the primary structural pattern. 50/50 or 60/40 vertical splits filling viewport.
- dark pane: `background: var(--black); color: var(--white);`
- red pane: `background: var(--red); color: var(--black);`
- panels are separated by `border-left: var(--hairline)` or `border-top: var(--hairline)`.
- no shadows. no rounded corners. no floating cards. panels are architectural, edge-to-edge.

navigation:
- horizontal header bar: `display: flex; justify-content: space-between; padding: 2rem 2rem 1rem 2rem; font-size: 0.8rem; font-weight: 600; border-bottom: var(--hairline);`
- typically 3 items: category, attribution, date.
- no hamburger menus. no icons. text-only navigation.

headers:
- corner numbers or codes in `0.75rem` at top-left and top-right of panels (like page numbers or section codes).
- no traditional header bars — information is distributed to corners and edges.

footers:
- `display: flex; justify-content: space-between; padding: 1rem 2rem; font-size: 0.8rem; border-top: var(--hairline); font-weight: 500;`
- typically: page number left, navigation hint right (`More on Next Page ->`).
- alternate: three-item spread in `0.7rem; color: var(--muted);`

lists:
- flow items: circular marker (`width: 20px; height: 20px; border-radius: 50%; background: var(--black); color: var(--red); font-size: 0.6rem; font-weight: bold;`) + text block.
- marker contains a single letter abbreviation.
- items spaced with `margin-bottom: 2.5rem;` — generous vertical rhythm.
- label line: `font-weight: 600; display: block; margin-bottom: 0.2rem;`

tables/data grids:
- `display: grid; grid-template-columns: 1.5fr 1fr; border-top: var(--hairline);`
- columns divided by `border-right: var(--hairline);`
- generous internal padding: `2rem`.
- no alternating row colors. data differentiation through typography weight and spacing, not color.

dividers:
- `1px solid` only. on dark: `rgba(255, 255, 255, 0.4)`. on red: `var(--black)`.
- used at section boundaries (metadata rows, column separators, header/footer borders).

modals/overlays:
- `background: var(--black); border: var(--hairline-light); border-radius: 0;`
- no backdrop blur. dark void behind.
- header: uppercase label + close `X` in top corners.
- content padding: `2rem`.

badges/tags (pills):
- `border: var(--hairline-light); border-radius: 999px; padding: 0.3rem 0.8rem; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.05em;`
- solid variant: `background: var(--white); color: var(--black); font-weight: 600;`
- ghost variant: transparent with hairline border.
- group multiple pills with `gap: 0.25rem;`
- use `backdrop-filter: blur(4px);` when overlaying imagery or 3D content.

**interaction language**

hover:
- pills/buttons: `background: var(--white); color: var(--black);` — ghost pills fill on hover.
- text links: `opacity: 0.7;` — no underlines, no color change.
- on red surface: `background: var(--black); color: var(--red);` — invert.

active:
- `transform: scale(0.97);` — subtle compression, no color change.

focus:
- `outline: 1px solid var(--white); outline-offset: 2px;` — on dark.
- `outline: 1px solid var(--black); outline-offset: 2px;` — on red.
- no glow. no ring. just hairline offset outline.

selected:
- solid pill treatment: `background: var(--white); color: var(--black); font-weight: 600;`
- on red surface: `background: var(--black); color: var(--red);`

disabled:
- `opacity: 0.3; pointer-events: none;` — dimmed, not greyed out. no strikethrough.

drag:
- `opacity: 0.6; cursor: grabbing;`

**motion & feedback**

transitions:
- `transition: all 0.2s ease;` on interactive elements.
- no spring physics. no bounce. no overshoot.
- panel transitions (if layout changes): `0.4s ease` — slow, deliberate.

loading:
- pulsing dot: small circle (`8px`) alternating `opacity: 0.3` to `opacity: 1` at `1.5s` interval.
- or: binary text stream (monospace `0` and `1` characters) flowing across a black block.
- never a spinner. never a progress bar.

success:
- brief flash: element background flashes `var(--white)` then returns. `0.15s` duration.
- or: a single checkmark character appears inline, no animation.

error:
- element gets `border-color: var(--red)` (on dark surfaces) or `border-color: var(--white)` (on red surfaces).
- error text: `font-size: 0.7rem; font-weight: 500;` below the element.
- no shake. no bounce. no dramatic animation.

**atmosphere**

backgrounds:
- primary: flat `var(--black)`. no gradients on main surfaces.
- dark pane ambient: `radial-gradient(circle at center, #111116 0%, #050505 100%)` — subtle depth without visible gradient edges.
- red surfaces: flat `var(--red)`. no gradient, no texture.
- data visualization blocks: `background: var(--black);` with monospace binary text overlay (`content: "101001010..."`) in `var(--red); font-family: monospace; font-size: 0.5rem; opacity: 0.8;` — machine-readable texture.

textures:
- no noise, no grain, no paper texture.
- data textures only: binary strings, coordinate grids, or topology wireframes.
- `mix-blend-mode: multiply;` on data visualization blocks over red surfaces.

overlays:
- `pointer-events: none;` overlays with metadata text at panel corners.
- corner codes (numbers, abbreviations) at `0.75rem` in `font-weight: 500`.

ambient effects:
- WebGL wireframe globes (40 lat segments, 20 lon segments, `stroke: rgba(255,255,255,0.15)`, rotation `0.001` rad/frame) or network topology visualizations behind dark panes.
- animated arc paths between geographic nodes — thin white lines that draw progressively.
- binary text overlay spec: `font-family: monospace; font-size: 0.5rem; opacity: 0.8; word-break: break-all`, regenerate random string every 200ms.
- these are *background atmospheric elements*, not interactive features.

**editorial voice**

button labels: `VIEW REPORT`, `DOWNLOAD PDF`, `ACCESS DATA`, `SUBSCRIBE`, `EXPLORE FLOWS`, `FILTER`, `APPLY`, `CLEAR FILTERS`

headings: massive, lowercase or sentence case, multi-line with `<br>` breaks for typographic control. evocative, never generic. examples:
- "The architecture of cross-border private credit"
- "Structural asymmetry in Western hemisphere absorption"
- "Sovereign wealth routing through emerging nodes"
- "Dark pool transit velocity analysis"

metadata format:
- dates: `15 February 2024` — day month year, no abbreviation.
- locations: 3-letter codes uppercase: `LND`, `NYK`, `SGP`, `DXB`, `HKG`, `ZRH`.
- financial figures: `AUM $84.2B`, `$1.2T VOLUME`, `+340bps YTD`.
- attribution: `By System Director`, `By [Role Title]` — never by person name.
- section labels: `Q4 MACRO REPORT`, `CREDIT MARKETS`, `SYSTEMATIC QUANT TEAM`.

placeholder text: `Enter search query...`, `Filter by corridor...`, `Select time period...` — terse, functional.

empty states: `No data available for selected corridor.`, `Awaiting upstream signal.`, `No active flows in this period.` — clinical, institutional.

error messages: `Signal interrupted. Retry connection.`, `Authentication required for this data tier.`, `Rate limit exceeded. Queue position: 3.` — technical, impersonal.

success messages: `Data refreshed.`, `Report generated.`, `Subscription confirmed.`, `Filters applied.` — two words where possible. no exclamation marks. never celebratory.

figure captions: italic or small text with `*` prefix. technical, precise. example: `* Analysis of dark pool transit velocity across four primary nodes. Line intensity corresponds to capital volume deployed in trailing 30-day period.`

**cursor & selection**

cursor:
- default: `cursor: default;`
- interactive elements: `cursor: pointer;`
- data visualization areas: `cursor: crosshair;`
- text: `cursor: text;`
- no custom cursors.

selection:
- on dark: `::selection { background: var(--red); color: var(--white); }`
- on red: `::selection { background: var(--black); color: var(--red); }`

**when to reach for this genome**

Use `institutional_wire.macro` when the prompt asks for institutional finance, macro research, credit markets, capital-flow analysis, fund reporting, banking intelligence, quantitative research, Bloomberg-adjacent dashboards, private-credit publications, market corridor analysis, or executive research wires where the interface should feel severe, editorial, and live.

Reach for it when the visual cues are black voids, large signal-red surface panes, white Helvetica, hairline panel divisions, compact metadata pills, 50/50 split layouts, corner codes, AUM/bps/volume figures, city codes like `LND` or `SGP`, binary/data textures, wireframe globes, and impersonal report language like `Data refreshed.`, `Q4 MACRO REPORT`, or `STRUCTURAL ASYMMETRY`. It is strongest when the product is a serious research surface: filter, compare, route, publish, download, inspect flows, and brief decision-makers.

Do not use it for cool gray Swiss publication systems, outlined display numerals, muted gold/steel/terracotta accents, architecture-wealth annual reports, or calm grid folios; use `structured_folio.swiss`. Do not use it for 1980s trading floors, pure LED green/red tickers, open-outcry urgency, paper tape spools, or shouting all-caps market boards; use `ticker_floor.nyse`. Do not use it for live broadcast news, crisis rooms, rundowns, chyrons, lower-thirds, or media alert centers; use `breaking_desk.live`. Do not use it for highlighter-green data-journalism broadsheets, probability models, or newspaper-like public analysis; use `signal_broadsheet.live`. Do not use it for auction lots, provenance, condition reports, paddle registration, or hammer-price flows; use `auction_lot.gavel`. Do not use it for Victorian Western Union wires, Morse keys, paper tape telegrams, or mahogany/brass communication offices; use `telegraph_office.wire`.

**anti-patterns — this genome NEVER:**

1. never uses rounded corners on structural elements. `border-radius: 0` on all panels, cards, grids, modals, data blocks. pills (999px) are the only exception.
2. never uses shadows — no `box-shadow`, no `drop-shadow`, no elevation. depth comes from color contrast (black vs red), not shadow.
3. never uses serif or monospace typefaces for primary text. Helvetica Neue only. monospace appears only inside data visualization textures (binary overlays), never as readable body text.
4. never uses gradients on visible surfaces. the only gradient is the subtle radial ambient behind 3D content. all color panels are flat.
5. never uses icons or emoji. navigation, labels, and actions are text-only. the sole graphical element is the circular flow marker with a single letter.
6. never strays from the institutional severity. additional colors beyond the core black/red/white system are permissible when functionally necessary (e.g. data visualization, status states) but must feel austere and institutional — no pastels, no playful hues.
7. never uses celebratory or casual language. no "Great job!", no "Oops!", no emoji in messages. the voice is institutional, impersonal, and precise.
8. never stacks content in single-column layouts when viewport width permits multi-pane splits. the default is side-by-side architectural panes, not scrollable single columns.
9. never uses visible loading spinners or progress bars. loading states are pulsing dots or flowing binary text.
10. never makes the red accent thin — red occupies significant surface area (full panes, large blocks). a thin red line or small red dot violates the genome's fundamental tension between black void and red mass.
