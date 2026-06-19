---
id: "106"
name: auction_lot.gavel
keywords:
  - auction
  - christie's
  - sotheby's
  - lot number
  - hammer price
  - provenance
  - estimate
  - paddle
  - catalog
  - tipped-in plate
  - editorial italic
  - fine art
  - rare books
  - hammer
  - bidding
---

### genome 106: `auction_lot.gavel`

> identity: A Christie's evening sale catalog, hand-bound on cream wove paper, 32cm tall, with tipped-in color plates protected by glassine interleaves. Italic editorial captions on the right page, rigorous lot numbers in the bottom-left, estimates in pound sterling. A small printed paddle-number block, a discreet provenance trail in ruled-line type, hammer prices in the post-sale supplement at the back. The hush of a saleroom at 7:08 PM, the auctioneer's lectern, the velvet rope, the gavel. Refined, ivory-colored, italic-serif, hand-edited, with the gravitas of an institution that has been selling rare objects since the eighteenth century.

**surface**

colors:
```
--ivory: #F4EDDA;                  /* primary cream wove paper of the catalog page */
--ivory-deep: #E8DFC4;             /* the warm shadow under a sheet of catalog stock */
--bone: #FAF6E8;                   /* the brighter mount-board where a plate is tipped in */
--ink-noir: #1A1612;               /* deep editorial black, slightly warm — the printed type */
--ink-dim: #4A4036;                /* secondary ruled-line gray, fine-print warmth */
--ink-faint: #8B7F6E;              /* tertiary metadata, footnote ink */
--rule-hairline: #C9BCA0;          /* the very thin engraved hairline rules on a catalog page */
--burgundy: #6E1F2C;               /* the catalog's signature ribbon-burgundy — lot-number tabs, headers */
--burgundy-deep: #4A1620;
--burgundy-faint: rgba(110, 31, 44, 0.12);
--gilt: #B59443;                   /* gilt edge of the page block, foiled lettering on the spine */
--gilt-deep: #8E7029;
--gilt-glint: rgba(220, 184, 89, 0.5);
--glassine: rgba(255, 255, 255, 0.5); /* the protective glassine interleaf — slightly milky */
--plate-shadow: rgba(0, 0, 0, 0.18); /* the soft shadow under a tipped-in plate */
--paddle-red: #C13F31;             /* the rare bright accent — paddle-card red, "SOLD" red */
--archive-stamp: #2C3D5C;          /* the small archival ink stamp on the back cover */
--velvet: #2A1218;                 /* the deep velvet of the lectern drape, the rope */
```

typography:
- display / lot-title: `"Cormorant Garamond", "EB Garamond", "Adobe Caslon Pro", "Garamond", serif` at `font-weight: 400; font-style: italic; font-size: 28-44px; letter-spacing: 0em; line-height: 1.15; color: var(--ink-noir)` — the editorial italic for lot titles, the genre's signature. Refined, lyrical, never bold.
- secondary heading: `"Cormorant Garamond", serif` at `font-weight: 500; font-style: normal; font-size: 18-24px; letter-spacing: 0.01em; line-height: 1.3; color: var(--ink-noir)` — for section titles, "PROVENANCE", "LITERATURE", "EXHIBITED".
- small-caps section labels: `"Cormorant SC", "Trajan Pro", "Cormorant Garamond", serif` at `font-weight: 500; font-size: 11-13px; letter-spacing: 0.12em; text-transform: uppercase; font-variant-caps: small-caps; color: var(--ink-dim)` — the discreet "ESTIMATE", "LOT", "PROVENANCE" labels above their content blocks.
- body / catalog descriptions: `"EB Garamond", "Adobe Caslon Pro", Garamond, serif` at `font-weight: 400; font-size: 14-15px; line-height: 1.55; letter-spacing: 0.005em; color: var(--ink-noir)` — the ruled-line catalog descriptions, the provenance lines, the literature citations.
- numerals (lot numbers, estimates, hammer prices): `"Cormorant Garamond", serif` at `font-weight: 500; font-feature-settings: "lnum"; letter-spacing: 0.02em; color: var(--ink-noir)` — lining (not oldstyle) numerals for legibility on auction figures. Estimates in italic with em-dash separator: `*£40,000–60,000*`.
- ruled-line metadata: `"EB Garamond", serif` at `font-weight: 400; font-style: italic; font-size: 11-12px; letter-spacing: 0.02em; line-height: 1.5; color: var(--ink-dim)` — the dense scholarly footnotes, provenance dates, condition notes.
- paddle / catalog-cover sans (rare): `"Trajan Pro", "Bodoni Display", "Didot", serif` at `font-weight: 600; font-size: 14-22px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-noir)` — used only for the catalog cover ("CHRISTIE'S · EVENING SALE · 14 NOVEMBER") and for paddle-card lettering. Never for body.
- the typographic mandate: ITALIC SERIF dominates display; UPRIGHT SERIF dominates body; SMALL-CAPS handles labels; SANS-SERIF and MONOSPACE are forbidden everywhere except the paddle-card serial number, which may use the same small-caps treatment.

borders:
- `border-radius: 0px` everywhere. The catalog page is rectangular; the plate window is rectangular; the lot-number tab is rectangular. The only allowed radius is `border-radius: 2px` for the small burgundy lot-number tab (a very gentle softening — the foil-block edge).
- hairline rules are the structural language. `border-bottom: 1px solid var(--rule-hairline)` separates entries in a list. `border-top: 1px solid var(--ink-dim); border-bottom: 1px solid var(--ink-dim)` brackets a header. Never `border: 2px` or thicker on UI components — auction-catalog hairlines are 0.4-1px engraved rules.
- engraved-rule motif: a `border-top: 2px double var(--rule-hairline)` between major sections — the engraved double-rule from a 19th-century printed page.
- plate-window border: `2px solid var(--ink-noir)` thin rectangular frame around any image element, with an inner `padding: 8px` of `var(--bone)` — the inset matboard around a tipped-in plate. Outside this: `box-shadow: 0 6px 24px var(--plate-shadow), 0 1px 0 var(--ivory-deep)` — the soft shadow under a plate that has been pasted onto the page.

spacing:
- generous, page-set proportions. `padding: 32-48px` on cards (matching real catalog page margins). `column-gap: 32-48px` between text columns. Body paragraphs separated by `1em` of vertical space.
- the layout is BOOK-PAGE TWO-COLUMN — primary content in a wider left column, marginalia / metadata in a narrower right column. Headers span both columns. Lot images sit in either column with caption italic below.
- hairline rules add structural rhythm without adding visual weight. The page breathes.

**color distribution**
- 64% ivory / bone — the dominant page surface. The catalog stock is everywhere.
- 18% ink-noir — primary type, the printed editorial body.
- 8% ink-dim / ink-faint / rule-hairline — secondary type and the engraved rules that structure the page.
- 4% burgundy / burgundy-deep — the signature ribbon-color used on lot-number tabs, section markers, and the running header.
- 3% gilt / gilt-deep — sparing accent on cover-block decorative elements, the catalog spine, the page-block edge gilt-finish.
- 2% paddle-red / archive-stamp / velvet — the rarest accents: a single SOLD price flag, an institutional archive stamp, the lectern-drape deep red of the cover-page background.
- 1% glassine — used as overlay translucency on hovering plate frames and modal interleaves.

the rule: ivory dominates, ink structures, burgundy punctuates the institutional signature, gilt glints rarely. No color exists for its own sake; every accent is doing institutional signaling work.

**component patterns**

buttons: text-only editorial action, NEVER a filled rectangle. Primary — `background: transparent; color: var(--burgundy); border: none; padding: 4px 8px; font-family: "Cormorant Garamond", serif; font-style: italic; font-size: 16px; letter-spacing: 0.02em; text-decoration: underline; text-decoration-thickness: 1px; text-decoration-color: var(--burgundy); text-underline-offset: 4px`. The "BID NOW" or "REQUEST CONDITION REPORT" link reads as an italicized typographic flourish, not a chunky CTA.

Secondary button (small-caps catalog action): `background: transparent; color: var(--ink-noir); border-top: 1px solid var(--ink-noir); border-bottom: 1px solid var(--ink-noir); padding: 6px 18px; font-family: "Cormorant Garamond", serif; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; font-variant-caps: small-caps`. The hairline-ruled small-caps label — VIEW DETAILS, ADD TO PADDLE, SEND ENQUIRY. Hover: rules darken to `var(--burgundy)`.

Bid button (special, the rare filled element): `background: var(--burgundy); color: var(--ivory); border: 1px solid var(--burgundy-deep); border-radius: 2px; padding: 10px 28px; font-family: "Cormorant Garamond", serif; font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; font-variant-caps: small-caps; box-shadow: 0 2px 0 var(--burgundy-deep), 0 4px 12px rgba(110,31,44,0.2)`. The cover-stock burgundy block — used sparingly for the single most important action on a page.

Gilt-edge button (rarefied): `background: linear-gradient(180deg, var(--gilt) 0%, var(--gilt-deep) 100%); color: var(--ink-noir); border: 1px solid var(--gilt-deep); border-radius: 2px; padding: 10px 28px; font-family: "Cormorant Garamond", serif; font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; font-variant-caps: small-caps; box-shadow: 0 0 8px var(--gilt-glint)`. The foiled-spine effect, used for premium/membership actions only.

inputs: editorial form-field — `background: transparent; border: none; border-bottom: 1px solid var(--rule-hairline); border-radius: 0; padding: 6px 0; font-family: "EB Garamond", serif; font-size: 16px; color: var(--ink-noir); width: 100%`. Focus: `border-bottom-color: var(--burgundy); border-bottom-width: 1px` (no thicker — the rule remains hairline). Label above in small-caps italic: `font-family: "Cormorant Garamond"; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; font-variant-caps: small-caps; color: var(--ink-dim); margin-bottom: 6px`. Placeholder in italic dim ink: `color: var(--ink-faint); font-style: italic; font-family: "EB Garamond"`. Currency inputs prefixed with a serif `£` glyph at full body size.

cards / panels: LOT-ENTRY PANEL — `background: var(--ivory); border: none; padding: 36px 40px; box-shadow: 0 1px 0 var(--ivory-deep), 0 8px 24px var(--plate-shadow); position: relative; max-width: 720px`. A small burgundy tab in the top-left corner reads the lot number: `::before { content: "Lot " attr(data-lot-no); position: absolute; top: 0; left: 32px; background: var(--burgundy); color: var(--ivory); padding: 6px 14px 8px; font-family: "Cormorant Garamond"; font-style: italic; font-size: 14px; letter-spacing: 0.04em; border-radius: 0 0 2px 2px; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }`. The lot-number tab is the catalog's signature wayfinding device.

PLATE-CARD (image-led, alternate): `background: var(--bone); border: 2px solid var(--ink-noir); padding: 12px; box-shadow: 0 12px 32px var(--plate-shadow)`. The inner padding creates a matboard surround around the image. Below the plate, in italic-serif inside the mount: a single caption line — `*Lot 27. A Magnificent Tang Dynasty Ceramic Horse.*` Then small-caps below: `EARTHENWARE · CIRCA 700 AD · H. 47 CM`.

Featured card (lot supplement): wraps a plate-card in a wider ivory page with provenance lines and editorial description in two columns. The whole arrangement reads as an open catalog spread.

navigation: catalog SECTION-DIVIDER nav. `background: var(--ivory); border-top: 1px solid var(--ink-noir); border-bottom: 1px solid var(--ink-noir); padding: 14px 28px; display: flex; gap: 36px; justify-content: center`. Items in small-caps italic serif at 13px, letter-spacing 0.14em. Active item: `color: var(--burgundy); border-bottom: 1px solid var(--burgundy); padding-bottom: 2px`. No background fills; no pill shapes. The whole bar reads as the running-head from a printed catalog page.

headers: COVER-PAGE header — `background: var(--burgundy); color: var(--ivory); border-bottom: 3px double var(--gilt-deep); padding: 48px 40px; text-align: center`. Inside: the institution name in Trajan-style small-caps sans-serif-but-actually-roman-cap at 22px, `letter-spacing: 0.18em`. Below: the sale title in italic serif at 36-44px (`*Important Old Master Paintings — Evening Sale*`). Below that: date in small-caps at 12px (`14 NOVEMBER · 7 PM`). A gilt-flourished hairline rule above and below the title.

Catalog-page header (lighter, content-page version): `background: var(--ivory); border-top: 1px solid var(--ink-dim); border-bottom: 1px solid var(--ink-dim); padding: 18px 36px; font-family: "Cormorant Garamond"; font-style: italic; font-size: 14px; color: var(--ink-noir); display: flex; justify-content: space-between` — the running-head with section name on the left ("Lots 1–48 · Early European Drawings") and page number on the right (italic small-caps "iv" or "23").

footers: page-block bottom band. `background: var(--ivory); border-top: 1px solid var(--rule-hairline); padding: 24px 40px; font-family: "EB Garamond", serif; font-style: italic; font-size: 12px; color: var(--ink-faint); line-height: 1.6`. Includes: catalog copyright line, archival reference number, the small archive-stamp glyph. Optional: a row of small-caps section labels with hairline-rule separators (`*PROVENANCE · LITERATURE · CONDITION · ESTIMATE*`).

lists: PROVENANCE-CHAIN format. Each item rendered as a single line, italic serif, with a fine hairline `border-bottom: 1px solid var(--rule-hairline)` separator (`padding-bottom: 8px; margin-bottom: 8px`). Provenance items use the format `*Acquired from [source]; [year]*` with proper italic for sources and dates in lining numerals. Literature items use a similar format with citation style (`*Smith, R., "On Renaissance Bronzes," 1923, p. 47, no. 12.*`). No bullet glyphs — the hairline rule and the small-caps label above are the entire structure.

For UI lists (lot-listing, item rows): each item is a row with: lot number in small-caps left, italic title in middle, estimate range right-aligned in small-caps. Hairline border-bottom between items. Active row: `background: var(--burgundy-faint); border-left: 2px solid var(--burgundy); padding-left: 14px`.

tables: CONDITION-REPORT table — `border-top: 1px solid var(--ink-noir); border-bottom: 1px solid var(--ink-noir); font-family: "EB Garamond"; font-size: 13px; border-collapse: collapse`. Header row: small-caps `letter-spacing: 0.12em; font-style: italic; padding: 10px 14px; border-bottom: 1px solid var(--ink-noir); color: var(--ink-dim)`. Body cells: `padding: 10px 14px; border-bottom: 1px solid var(--rule-hairline)`. No row striping — the hairlines do the structural work. Numeric columns right-aligned with lining numerals.

dividers: never a colored bar. Always a hairline rule. Options: (a) `border-top: 1px solid var(--rule-hairline); margin: 36px 0` for section breaks, (b) `border-top: 2px double var(--rule-hairline); margin: 48px 0` for major section divisions (engraved double-rule), (c) a centered small-caps ornament — `* * *` or `❦` or `§` flanked by hairline rules — for decorative breaks. The ornament version is restrained, never decorative-for-decoration's-sake.

modals / overlays: CONDITION-REPORT MODAL — `background: var(--ivory); border: 1px solid var(--ink-noir); border-radius: 0; padding: 48px 56px; box-shadow: 0 24px 64px var(--plate-shadow); max-width: 560px; position: relative`. Top border: a `3px double var(--ink-noir)` engraved rule. Header in italic serif at 24px. Close action: a small-caps "DISMISS" link in the top-right at 11px italic. Backdrop: `background: rgba(244, 237, 218, 0.85); backdrop-filter: blur(2px)` — a glassine-interleaf overlay, not a dark dim. The room behind goes milky-cream, not black.

badges / tags: editorial labels, hairline-bordered. `background: transparent; color: var(--ink-noir); border-top: 1px solid var(--ink-noir); border-bottom: 1px solid var(--ink-noir); border-radius: 0; padding: 2px 10px; font-family: "Cormorant Garamond"; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; font-variant-caps: small-caps`. Status variants: `SOLD` in `var(--paddle-red)` text with red rules; `WITHDRAWN` in `var(--ink-faint)`; `PASSED` in `var(--ink-dim)`; `RECORD PRICE` in burgundy text with burgundy rules. Lot-number badge: burgundy small tab as described in card pattern.

**signature element — the lot-number tab**: every "lot" element gets a small burgundy ribbon-tab at the top-left corner displaying `Lot 27` or similar. Italic serif typography on burgundy ground, with a fine 1px box-shadow underneath. The tab is decorative wayfinding that signals "this is a numbered catalog entry."

**signature element — the tipped-in plate**: any image element renders inside a 2px-bordered ink-noir frame with 12px bone-colored matboard padding, sitting on a softly-shadowed ivory surface. The plate appears to have been pasted onto the page by hand. A 2-3px offset shadow below evokes the slight physical lift. Optional: an italic-serif caption directly below in `var(--ink-dim)`.

**signature element — the engraved double-rule**: top and bottom of major sections render with a `2-3px double` engraved rule, slightly thicker in the center than the edges (via two `border-top: 1px solid` and `border-bottom: 1px solid` with `height: 3px` between). The mark of a 19th-century printed page.

**signature element — the small-caps italic citation**: provenance and literature lines render with the rule "italic for the source, small-caps for the year." E.g.: `*Acquired from the Collection of Mrs. Hartford,* CIRCA 1923. *Sold at Christie's, London,* 18 JUNE 1956, *lot 47.*` — italic mixed with small-caps creates the dense scholarly rhythm of a catalog provenance line.

**interaction language**

hover: refined, restrained. Links and text-buttons: `text-decoration-thickness: 2px; color: var(--burgundy-deep); transition: color 0.24s ease, text-decoration-thickness 0.24s ease`. Cards and lot panels: `transform: translateY(-2px); box-shadow: 0 12px 36px var(--plate-shadow); transition: all 0.32s cubic-bezier(0.2, 0.6, 0.2, 1)`. The page lifts subtly — like turning a leaf. No scale, no glow, no color flash.

active / pressed: a brief depression. `transform: translateY(0); box-shadow: 0 2px 8px var(--plate-shadow); transition: all 0.12s ease`. For text-buttons: the underline briefly thickens to 3px.

focus: a hairline rule surrounds the element. `outline: 1px solid var(--burgundy); outline-offset: 4px; border-radius: 0`. The focus indicator is a thin burgundy frame at a 4px margin — the editorial outline.

selected: a small-caps `(SELECTED)` label appears in burgundy italic at the top-right of the element. Plus the element gains `background: var(--burgundy-faint); border-left: 2px solid var(--burgundy)` if it's a row, or `box-shadow: 0 0 0 1px var(--burgundy)` inset if it's a card.

disabled: `opacity: 0.45; cursor: not-allowed; filter: sepia(0.15)` — a fading-into-the-margin gray. The element looks like a withdrawn lot in the catalog. No strikethrough — fading is the disabled signal.

drag: the element LIFTS from the page like a tipped-in plate being peeled off the matboard. `transform: rotate(-1.5deg) scale(1.02); box-shadow: 0 24px 48px var(--plate-shadow), 0 1px 0 var(--ivory-deep); cursor: grabbing; z-index: 999; filter: brightness(1.02)`. Behind it, the original location shows a faint `box-shadow: inset 0 0 0 1px var(--rule-hairline)` — the matboard ghost where the plate sat.

**motion & feedback**

transitions: dignified and unhurried — `transition: all 0.32s cubic-bezier(0.2, 0.6, 0.2, 1)`. Page-turn ease. Nothing snaps, nothing bounces, nothing flashes. The pace of an auctioneer.

**keyframes**:

```css
@keyframes pageTurn {
  0%   { transform: perspective(1200px) rotateY(-12deg); opacity: 0; }
  60%  { transform: perspective(1200px) rotateY(2deg); opacity: 1; }
  100% { transform: perspective(1200px) rotateY(0); opacity: 1; }
}
/* a catalog page turning over with subtle perspective; 0.5s cubic-bezier(0.4, 0, 0.2, 1) */

@keyframes plateLift {
  0%   { transform: translateY(0) scale(1); box-shadow: 0 8px 24px var(--plate-shadow); }
  100% { transform: translateY(-3px) scale(1.005); box-shadow: 0 16px 40px var(--plate-shadow); }
}
/* the tipped-in plate lifts subtly from the page; hover-driven */

@keyframes gavelStrike {
  0%   { transform: scale(1); opacity: 1; }
  50%  { transform: scale(1.04); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
/* a discreet emphasis pulse when a SOLD badge lands — 0.3s ease-out */

@keyframes inkSet {
  0%   { opacity: 0; filter: blur(0.5px); }
  100% { opacity: 1; filter: blur(0); }
}
/* type fades in from a soft blur — like ink setting on paper; 0.6s ease-out */
```

loading: an italic-serif "*Cataloguing...*" in `var(--ink-dim)` appears, with a thin hairline rule beneath that grows from 0% to 100% width over 1.4s. Or a single italic-serif "*Awaiting result*" with a slowly-drifting ornament glyph ( `❦` rotating once at 6s). No spinners. No progress bars in the modern sense — only the engraved rule filling in.

success: when a bid is placed or a lot is won — a small `SOLD` badge in `var(--paddle-red)` with hairline-double-rule borders lands via `gavelStrike` keyframe with a slight scale-up. A small-caps "*Hammer at £74,000*" label appears below. The whole event takes 0.4s. No celebration animation — the gavel falls once, definitively.

error: a small-caps "BID DECLINED" or "OUTBID" label appears in `var(--paddle-red)` with hairline-rules above and below. The affected element gets `box-shadow: inset 0 0 0 1px var(--paddle-red)`. A discreet italic-serif explanation follows in `var(--ink-dim)`. No flash, no shake. The page reports the result with the same restraint it reports everything else.

page enter: catalog pages turn in via `pageTurn` keyframe — staggered 100-150ms in document order. Plates fade in via `inkSet` after a 200ms additional delay, as if the ink is still setting. The whole choreography takes 1.2-1.6s — deliberate, page-by-page, never simultaneous.

**atmosphere**

background: `var(--ivory)` flat. A very subtle paper-grain texture overlay (SVG noise or repeating-radial pattern) at `opacity: 0.025` — the wove-paper texture you can only see at a foot or closer.

vignette: `box-shadow: inset 0 0 120px rgba(232, 223, 196, 0.6)` on the viewport — the page corners are warmer/dimmer than the center, where the gallery spotlight is.

gilt-edge accent: optional left or right viewport edge accent — a `4-8px` vertical strip of gilt-gradient (`background: linear-gradient(90deg, var(--gilt) 0%, var(--gilt-deep) 50%, var(--gilt) 100%)`) running the full height. The page-block edge of a hand-bound catalog.

hairline-rule field: faint horizontal hairlines drift across at 80-200px intervals in `var(--rule-hairline)` at `opacity: 0.4` — the suggestion of an underlying ruled-grid. Used very sparingly, only on document-style backgrounds.

archival watermark (decorative): a 280px italic-serif ornament glyph (`❦`, `§`, or the institution monogram) drifts at 0.06 opacity in `var(--ink-noir)` somewhere off-center — the page-block watermark visible when held to the light.

glassine-interleaf overlay (modal backdrops only): a milky `rgba(255, 255, 255, 0.5)` overlay with subtle `backdrop-filter: blur(2px) saturate(0.95)` — the protective interleaf paper between catalog plates.

scrollbar: `width: 8px; track: var(--ivory-deep); thumb: var(--burgundy); thumb:hover: var(--burgundy-deep)`. A discreet burgundy ribbon along the side.

ambient feel: 7:08 PM at King Street. Velvet ropes line the saleroom corridor; the gilt-edged catalog rests on a leather lectern; a paddle-card with a serial number waits face-down on the cream-suede chair. The hush before the gavel falls.

**editorial voice**

formal, scholarly, italic. The voice of a senior cataloger with thirty years at the institution. Always italic-serif for emphasis; never exclamation marks; small-caps for institutional labels; em-dashes liberally.

button labels: `*View Provenance*`, `*Request Condition Report*`, `*Submit Absentee Bid*`, `*Add to Paddle*`, `*View Plate*`, `*Browse Sale*`, `*Send Enquiry*`, `*Reserve Catalog*`. Italic serif. Title-case. Often prefixed by an em-dash for tabular alignment in lists: `— Request Condition Report`.

headings: lyrical italic for lot titles, small-caps for section labels. Lot titles: `*A Rare Tang Dynasty Earthenware Horse and Groom*`, `*An Important Pair of George III Mahogany Side Tables*`, `*A Magnificent Suite of Burgundian Tapestries*`. Section labels: `PROVENANCE`, `LITERATURE`, `EXHIBITED`, `CONDITION`, `ESTIMATE`. The lot title is always italic; the section label is always small-caps uppercase.

metadata: small-caps with em-dash separators. `LOT 27 · TANG DYNASTY · CIRCA 700 AD · H. 47 CM`. Estimates: `£40,000–60,000` (en-dash, lining numerals, currency-prefixed). Provenance lines: italic with year in small-caps (`*Acquired from the Estate of Mrs. Hartford,* CIRCA 1923.`). Catalog page-numbers in small-caps lowercase Roman: `xiv` or `cxlvii`. Sale references: `EVENING SALE · 14 NOVEMBER 2026 · KING STREET, LONDON`.

placeholders: italic-dim prompts. `*Search lots, artists, periods...*`, `*Enter a maximum bid...*`, `*Your paddle number*`, `*Sale or lot reference*`. Italic serif, never bracketed.

empty states: scholarly, restrained. `*No lots match your criteria.*`, `*Catalog forthcoming.*`, `*This sale is concluded — see post-sale supplement.*`, `*Awaiting hammer prices.*`. Always italic, always period-terminated, never an exhortation.

error messages: discreet and precise. `*Bid declined — reserve not met.*`, `*This lot has been withdrawn.*`, `*An enquiry could not be transmitted; please retry.*`, `*Catalog unavailable for this sale.*`. Always italic, always reasoned, never alarmed.

success messages: spare and definitive. `*Submitted.*`, `*Hammer at £74,000.*`, `*Added to paddle.*`, `*Enquiry sent — a specialist will respond.*`, `*Condition report attached.*`. The gavel falls once.

confirmation prompts: `*Withdraw this bid?*`, `*Remove from paddle?*`, `*Cancel your reservation?*`. Italic-serif, period-terminated.

**cursor & selection**

cursor: `cursor: default` globally. Interactive elements: `cursor: pointer`. Inputs: `cursor: text`. Draggable plates: `cursor: grab` → `cursor: grabbing`. Custom cursor option: a small black serif `❦` ornament with a subtle gilt glint.

text selection: `::selection { background: var(--burgundy-faint); color: var(--ink-noir); }` — a faint burgundy wash, the catalog's signature ribbon-color used as a highlight. The body type remains readable in noir-ink throughout.

**when to reach for this genome**

Use this genome when the request calls for an auction house, evening sale catalog, lot browser, provenance record, condition report, absentee bid flow, paddle registration, hammer-price result, rare-object sale, fine-art auction, rare-books auction, saleroom preview, or any product that should feel like a printed Christie's/Sotheby's catalog with tipped-in plates and scholarly lot notes.

Reach for it when the user wants ivory catalog paper, italic serif titles, small-caps section labels, burgundy lot tabs, gilt edges, hairline rules, estimate ranges, provenance chains, condition reports, paddle numbers, glassine overlays, and the hush of a saleroom. It is strongest when the interface is about numbered lots, scholarly descriptions, value estimates, bid states, sale sessions, withdrawn/sold/passed statuses, and post-sale hammer results.

Choose it for:
- auction catalogs, lot-detail pages, condition-report requests, bidding forms, paddle registration, sale calendars, post-sale supplements, and provenance-driven object records.
- fine art, rare books, antiques, design objects, estates, jewelry auctions, and collectible sales where institutional gravity matters.
- product/detail pages where the object is framed as a lot with title, estimate, material, date, provenance, literature, exhibition history, and condition.
- formal sale-room experiences where the primary actions are `Request Condition Report`, `Submit Absentee Bid`, `Add to Paddle`, `View Plate`, and `Browse Sale`.

Do not choose it for museum exhibitions without bidding, general ecommerce, high-end jewelry boutique pages, casino/gambling mechanics, library catalogs, newspaper/editorial reports, or casual marketplace listings. Use `gallery_foyer.institution` for museum and exhibition authority, `gem_jeweler.facet` for private jewelry vitrine and certification flows, `mail_order.catalog` for mass-market product catalogues, `card_catalog.dewey` for library index systems, and `casino_floor.aces` only when the betting/table-game metaphor is explicit.

**anti-patterns — this genome NEVER:**

1. uses sans-serif or monospace as the primary display or body face. The genre is editorial italic serif (`Cormorant Garamond`, `EB Garamond`, `Adobe Caslon`) — Inter, Helvetica, and IBM Plex Mono belong to other institutions. The catalog is a printed book, not a database.
2. uses border-radius above 2px on any UI surface. The catalog page is rectangular; the matboard is rectangular; the lot-tab rounds at 2px maximum (the foil-block softening). Pill shapes, large rounding, and organic curves contradict the printed-page geometry.
3. uses bright saturated colors (electric blue, hot pink, neon green, vivid orange). The palette is ivory + ink + burgundy + gilt — refined, institutional, slightly warm. Saturation belongs only to a single paddle-red SOLD flag.
4. uses bold weights or heavy black type at display scale. The genre is italic and regular weight — `font-weight: 400-500` — at large size. Bold serif at hero scale reads as a textbook cover, not an auction catalog. Weight is for emphasis on inline words, never for headers.
5. uses filled buttons or chunky rectangular CTAs as the primary action style. Primary actions are italic-serif underlined links; secondary actions are small-caps hairline-bracketed labels. The rare filled button is a burgundy small-caps block reserved for the single most important action on a page.
6. uses dropshadows with strong contrast or glow effects. Shadows are soft, ivory-toned, plate-on-page (`rgba(0,0,0,0.18)` at 8-24px blur). No glow, no neon halo, no backdrop-filter beyond a subtle blur on modal backdrops.
7. uses fast snappy transitions or spring-bounce animations. Motion is page-turn ease — 0.32s cubic-bezier(0.2, 0.6, 0.2, 1). Snappy 0.15s eases read as a tech-startup; spring-bounce reads as a children's app. This genome turns pages, it doesn't snap them.
8. uses casual, friendly, or marketing-style language. The voice is scholarly cataloger — italic-serif, period-terminated, em-dashed, never exclamation-marked. "*Submit your bid.*" never "Bid now!". "*A magnificent suite of tapestries.*" never "Check out these tapestries!".
9. uses icons or pictographs. Visual language is HAIRLINE RULES, SMALL CAPS, ITALIC SERIF, and rare typographic ornaments (`❦`, `§`, `* * *`). Material Icons and Font Awesome belong to a different vocabulary; here, structure comes from typography and rule-work alone.
10. uses dark-mode backgrounds as the default. The catalog stock is cream-ivory; type is dark-on-cream; the entire genre is BUILT on the warm-paper substrate. A dark-mode interpretation would obliterate the identity. Cover pages may use deep burgundy or velvet backgrounds, but body pages are always ivory.
