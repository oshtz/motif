---
id: "60"
name: signal_broadsheet.live
keywords:
  - data journalism
  - forecast
  - election
  - broadsheet
  - neon
  - live data
  - poll
  - chart
  - statistics
  - FiveThirtyEight
  - Bloomberg
  - signal
---

### genome 60: `signal_broadsheet.live`

> identity: data journalism broadsheet printed on neon stock. FiveThirtyEight's probability models meet Swiss editorial typography on highlighter-green newsprint — live-updating, crosshair-interactive, black ink on saturated color field.

**surface**

colors:
```
--bg: #79f673;              /* saturated green field — the "stock paper" */
--ink: #000000;             /* pure black — all primary text and structural lines */
--ink-40: rgba(0,0,0,0.4);  /* secondary data lines, muted chart elements */
--ink-20: rgba(0,0,0,0.2);  /* tertiary text, disabled states */
--ink-10: rgba(0,0,0,0.1);  /* grid lines, subtle dividers, box-shadows */
--ink-06: rgba(0,0,0,0.06); /* hover backgrounds, faint wells */
--white: #FFFFFF;            /* tooltip backgrounds when inverted, highlights */
```

the entire page is one saturated hue. there is no secondary background color. panels, cards, and tooltips use `--bg` as their background with `--ink` borders. the color field IS the identity — it should feel like holding a sheet of neon paper.

typography:
- family: `"Helvetica Neue", Helvetica, Arial, sans-serif` — the only permitted stack. no serif, no monospace, no display.
- hero/display: `font-size: clamp(32px, 5vw, 64px); font-weight: 400; line-height: 1.05; letter-spacing: -1px` — large, tight, light-weight. hierarchy through scale, not boldness.
- nav/labels: `font-size: 14px; font-weight: 400; letter-spacing: -0.2px` — small, precise, understated.
- section headers: `font-size: 14px; font-weight: 400; text-transform: none` — same size as nav. differentiated by position, not styling.
- body: `font-size: 18px; font-weight: 400; line-height: 1.3` — readable, airy.
- axis/chart labels: `font-size: 12px; font-weight: 400` — smallest tier, data-dense contexts.
- weight range: 400 only. no bold except inside tooltips for primary data values. hierarchy comes from size and opacity, never weight.

borders:
- structural dividers: `width: 100%; height: 1px; background-color: var(--ink)` — full-bleed 1px rules separating major sections.
- component borders: `1px solid var(--ink)` — tooltips, cards, inputs.
- `border-radius: 0px` — no exceptions. every rectangle is a rectangle.

spacing:
- edge padding: `24px` on left and right — consistent page margin.
- section vertical rhythm: `12px` padding top/bottom for compact sections (nav, chart headers), `24px–32px` for hero sections, `64px` bottom padding on final sections.
- grid gap: `24px` between columns on desktop.

**color distribution**

- 70% saturated green background (`--bg`) — the dominant surface, visible everywhere, defines the genome
- 20% pure black (`--ink`) — all text, all dividers, all chart lines, all borders
- 8% reduced-opacity black (`--ink-40`, `--ink-20`) — secondary chart lines, muted text, supporting data
- 2% faint black (`--ink-10`, `--ink-06`) — grid lines, shadows, hover states

this is essentially a two-color genome. the green and black do all the work. there are no accent colors. differentiation comes through opacity levels of black.

**component patterns**

buttons:
- primary: `background: var(--ink); color: var(--bg); border: none; padding: 10px 20px; font-size: 14px; font-weight: 400; border-radius: 0; cursor: pointer` — black pill on green field.
- secondary: `background: transparent; color: var(--ink); border: 1px solid var(--ink); padding: 10px 20px; font-size: 14px; border-radius: 0` — outlined, no fill.
- text/link: plain text with no decoration. on hover, `border-bottom: 1px solid var(--ink)`.

inputs:
- `background: transparent; border: 1px solid var(--ink); padding: 10px 12px; font-size: 14px; font-family: inherit; color: var(--ink); border-radius: 0`
- label: positioned above, `font-size: 12px; margin-bottom: 4px`
- placeholder: `color: var(--ink-40)`
- focus: `outline: 2px solid var(--ink); outline-offset: 1px`

cards/panels:
- `background: var(--bg); border: 1px solid var(--ink); padding: 16px` — same background as page, differentiated only by border.
- elevated variant: `box-shadow: 4px 4px 0 var(--ink-10)` — offset shadow, no blur. the tooltip pattern.
- no header bars, no background fills. card header is just the first line of text in a smaller size.

navigation:
- horizontal bar between two full-bleed dividers. `display: flex; justify-content: space-between; padding: 12px 24px`.
- three zones: left (section label, uppercase), center (descriptor), right (status/date).
- active item: no special styling — context is obvious from page position.
- mobile: stacks vertically, all left-aligned.

headers:
- three-column flex layout between hairline rules. left: section name (caps). center: subtitle. right: timestamp or status.
- `font-size: 14px; font-weight: 400` — deliberately small. the header is structural, not decorative.

footers:
- full-bleed `1px` divider on top, then `padding: 12px 24px`. same three-column layout as header or simple centered text.
- `font-size: 12px; color: var(--ink-40)` — minimal, nearly invisible.

lists:
- no bullets, no numbers. items separated by `1px solid var(--ink-10)` dividers.
- active/selected item: `font-weight: 400` still, but `border-left: 3px solid var(--ink); padding-left: 12px`.
- legend lists: inline swatch (24px wide line) + label. swatch styles: solid 3px, solid 3px at 40% opacity, or dashed 2px.

tables:
- `border-collapse: collapse`. header row: `font-size: 12px; text-transform: uppercase; border-bottom: 1px solid var(--ink)`.
- body rows: `border-bottom: 1px solid var(--ink-10); padding: 8px 0; font-size: 14px`.
- no alternating row colors. no hover highlight on rows. data density through tight vertical spacing.

dividers:
- primary: `width: 100%; height: 1px; background: var(--ink)` — full-bleed, black, structural.
- secondary: `border-bottom: 1px solid var(--ink-10)` — within sections, faint.

modals/overlays:
- `background: var(--bg); border: 1px solid var(--ink); box-shadow: 4px 4px 0 var(--ink-10); padding: 24px` — same green background, offset shadow.
- no backdrop blur. overlay backdrop: `rgba(0,0,0,0.2)` — just enough to dim, not obscure.
- close action: `×` character in top-right, plain text.

badges/tags:
- `display: inline-block; border: 1px solid var(--ink); padding: 2px 8px; font-size: 12px; border-radius: 0` — rectangular, outlined.
- active/live badge: `background: var(--ink); color: var(--bg)` — inverted.
- no colored badges. all black/green.

charts/data visualization:
- primary line: `stroke: var(--ink); stroke-width: 2.5; fill: none`
- secondary line: `stroke: var(--ink-40); stroke-width: 2.5; fill: none`
- tertiary/reference line: `stroke: var(--ink); stroke-width: 1.5; stroke-dasharray: 4 4; fill: none`
- grid lines: `stroke: var(--ink-10); stroke-width: 1`
- axis: `1px solid var(--ink)` on bottom only. y-axis labels left-aligned outside chart area.
- `cursor: crosshair` on all chart interaction areas.

tooltips:
- `position: absolute; background: var(--bg); border: 1px solid var(--ink); padding: 16px; box-shadow: 4px 4px 0 var(--ink-10); min-width: 200px`
- tooltip header: date/label in `12px`, separated by `1px solid var(--ink)` bottom border with `8px` padding.
- tooltip rows: `display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 4px`.
- primary row: `font-weight: bold` — the only place bold appears.
- secondary row: `color: var(--ink-40)`.
- appears on hover, follows cursor horizontally, flips side when near edge.

**interaction language**

- hover: `background: var(--ink-06)` on interactive elements. no transform, no shadow change. for text links: `border-bottom: 1px solid var(--ink)` appears.
- active/pressed: `background: var(--ink); color: var(--bg)` — full inversion. instantaneous.
- focus: `outline: 2px solid var(--ink); outline-offset: 2px` — visible, sharp, no glow.
- selected: `background: var(--ink); color: var(--bg)` — same as active. selected state is permanent inversion.
- disabled: `opacity: 0.2; pointer-events: none` — nearly invisible, clearly unavailable.
- drag: `cursor: grabbing; outline: 1px dashed var(--ink)`

**motion & feedback**

- transitions: minimal. `opacity 0.1s` on tooltips and hover lines only. all other state changes are instantaneous.
- no easing curves, no spring physics, no entrance animations. data appears; it does not slide in.
- loading: text reads `Updating...` in nav position (top-right). no spinner, no skeleton screen. optionally: a thin `1px` black progress bar at the very top of the viewport, left-to-right.
- success: brief `0.1s` flash where the updated element inverts (`background: var(--ink); color: var(--bg)`) then returns to normal. no icons, no toasts.
- error: `border-color` of the affected element changes to `var(--ink)` with `2px` weight (doubles from 1px). error text appears inline below in `12px`.

**atmosphere**

- the saturated green background IS the atmosphere. no textures, no gradients, no overlays, no grain.
- the effect is physical — it should feel like a printed broadsheet on colored stock paper. the green is not a UI choice; it's the paper.
- full-bleed dividers create strong horizontal banding across the viewport. the page reads as stacked horizontal strips.
- generous whitespace (greenspace) around hero text creates breathing room. the hero block should feel like a newspaper headline with air around it.
- data visualization areas are the focal point — large (50vh minimum), with crosshair cursor signaling interactivity.
- no ambient animation. the page is still until the user interacts.

**editorial voice**

button labels: `Update`, `View Forecast`, `Full Results`, `Methodology`, `Download Data`, `Compare`, `Reset View`
- sentence case. short. functional. no excitement, no urgency.

headings: sentence case, no period, declarative statements that summarize data findings.
- examples: `The incumbent's probability has stabilized at 58%`, `Key swing districts shift toward challenger`, `Model uncertainty narrows as election approaches`
- headings read like newspaper ledes — they tell you the conclusion first.

metadata: uppercase section labels (`ELECTION DESK`, `FORECAST MODEL`), plain date strings (`Updated Today`, `Jan 15, 2024`), percentage values with one decimal (`58.2%`, `39.5%`).
- status indicators are text-only: `Live`, `Updated`, `Final`.

placeholders: `Search districts...`, `Enter date range`, `Filter by region`
- lowercase start, ellipsis when appropriate, minimal.

empty states: `No data available for this period.` or `Select a region to view forecast.`
- one sentence, period, neutral tone. no illustrations, no emoji, no suggestions.

error messages: `Failed to load forecast data.` or `Invalid date range.`
- terse, factual, period-terminated. no apology, no "oops".

success messages: `Forecast updated.` or `Data exported.`
- past tense, period, done. no celebration.

**cursor & selection**

- default body: `cursor: default`
- interactive elements (buttons, links): `cursor: pointer`
- chart/data areas: `cursor: crosshair` — signals precision interaction
- drag handles: `cursor: grab`, `cursor: grabbing` when active
- text areas: `cursor: text`
- `::selection { background: var(--ink); color: var(--bg); }` — inverted selection. black highlight with green text.

**when to reach for this genome**

Use `signal_broadsheet.live` when the prompt asks for data journalism, public forecasts, election-night models, polling dashboards, probability explainers, live chart pages, statistical news analysis, methodology-led reporting, or a broadsheet-like public data product that should feel printed on saturated highlighter-green stock.

Reach for it when the visual cues are a single neon-green page field, pure black Helvetica, 1px full-bleed dividers, crosshair chart interaction, sparse live timestamps, black-on-green tooltips, probability model ledes, forecast percentages, compact tables, methodology/download actions, and restrained copy such as `Forecast updated.`, `View Forecast`, `Full Results`, or a headline that states the finding first.

Do not choose it for premium data-company annual reports, Japanese modernist brand pages, warm paper with sky/coral/forest blocks, serif display headlines, or polished dataset SaaS marketing; use `mosaic_signal.data`. Do not choose it for broadcast news control rooms, red breaking banners, lower-thirds, chyrons, anchor-desk panels, or crisis-room alert graphics; use `breaking_desk.live`. Do not choose it for dark macro research wires, institutional finance, black/red Bloomberg-like dashboards, fund reporting, AUM/bps figures, or executive market intelligence; use `institutional_wire.macro`. Do not choose it for stock exchange floors, order books, live price boards, green/red market polarity, LED tickers, or open-outcry trading urgency; use `ticker_floor.nyse`. Do not choose it for technical weather offices, radar, synoptic charts, warnings, METAR/TAF products, or operational meteorology; use `weather_bureau.wx`. Do not choose it for social feeds, public timelines, posts, likes, follows, notifications, or creator streams; use `public_timeline.x`.

It is strongest when a public reader needs to understand a live model through a chart, lede, and timestamp on one two-color newsprint surface. If the prompt emphasizes newsroom broadcast urgency, finance terminals, or brand storytelling more than public statistical reporting, choose the named alternative.

**anti-patterns — this genome NEVER:**

1. uses border-radius on any element — every shape is a hard rectangle, no rounding, no pills
2. uses font-weight above 400 outside of tooltip primary values — hierarchy comes from size and opacity, not boldness
3. uses more than one hue — there is green and there is black. no blue links, no red errors, no yellow warnings. everything is black at varying opacities on green
4. uses gradients, shadows with blur, or glow effects — the only shadow is `4px 4px 0` offset with no blur
5. uses skeleton screens, spinners, or loading animations — loading states are text-only
6. uses decorative elements, illustrations, icons, or emoji — this is a data publication, not an app
7. uses card backgrounds that differ from the page background — cards are bordered regions of the same green surface, not elevated layers
8. uses entrance animations, slide-ins, or fade-ins on content — data appears instantly. only tooltips get a `0.1s` opacity transition
9. uses serif or monospace fonts — Helvetica Neue is the only typeface, full stop
10. uses exclamation marks, casual language, or emotional tone in any UI text — the voice is a wire service reporter: factual, declarative, dispassionate
