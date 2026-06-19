---
id: "88"
name: philately_album.stamp
keywords:
  - philately
  - postage stamps
  - stamp collecting
  - perforated
  - postmark
  - scott catalog
  - first day cover
  - airmail
  - definitive
  - commemorative
  - collector
  - hinge mount
  - cancellation
  - philatelic
---

### genome 88: `philately_album.stamp`

> identity: stamp collector's archival album, opened to a page of mounted specimens. Scott Standard Catalog meets Stanley Gibbons monthly meets a Victorian gentleman's leather-bound album. Perforated rectangular cards mounted in regular grids, cancellation postmark circles, denomination corners in tiny serif, country/year metadata in archival ink. Each "card" is literally a stamp — perforated edges, faded color, postmark crossing one corner. Not the herbarium plate (genome 73, pressed botanicals) or the mail-order catalog (97, consumer retail) — this is the collector's private library: hinged mounts on cream album paper, magnifier in hand, watermark fluid bottle on the desk.

---

## surface

colors:
```
--album-leather: #5C3623;        /* leather album cover deep brown */
--album-page: #ECDFC2;           /* aged album paper — primary cream surface */
--album-page-warm: #E2D2B0;      /* warmer cream alternate */
--album-page-shadow: #C8B68F;    /* paper edge / page-corner shadow */
--ink-archival: #1F1A12;         /* deep archival ink — primary text */
--ink-faded: #6B5D45;            /* faded handwritten ink */
--ink-faint: rgba(31,26,18,0.4); /* tertiary text */
--stamp-vermillion: #C73E2B;     /* classic 1d-stamp red */
--stamp-bottle-green: #2D4F38;   /* classic stamp bottle-green */
--stamp-prussian: #28406B;       /* classic Prussian blue */
--stamp-amber: #BC8E2A;          /* classic amber/orange-stamp */
--stamp-rose: #B85D7A;           /* commemorative rose-pink */
--stamp-violet: #6E4F8E;         /* Victorian violet */
--cancel-black: rgba(31,26,18,0.55);  /* postmark cancellation */
--perforation-edge: rgba(31,26,18,0.18); /* the tiny dots of stamp perforation */
--ribbon-red: #8B2A1E;           /* postal-ribbon archival red */
```

typography:
- display/titles: `"Cormorant Garamond", "Playfair Display", "Bodoni Moda", serif` — `font-weight: 500–700; letter-spacing: 0.04em;` — sizes `2.5rem–6rem`. The engraved-plate title typography of Victorian-era stamp catalogs.
- italic emphasis (signature for stamp variety names): `"Cormorant Garamond"; font-style: italic; font-weight: 400;` — for "Penny Black", "Inverted Jenny", "Treskilling Yellow", "Mauritius Post Office".
- body/catalog: `"Crimson Text", "Cormorant Garamond", serif` — `font-weight: 400; font-size: 14–15px; line-height: 1.7; letter-spacing: 0.005em;` — old-style serif catalog body.
- catalog numbers (Scott/SG): `"IBM Plex Mono", "JetBrains Mono", monospace; font-size: 0.75rem; letter-spacing: 0.08em; color: var(--ink-faded);` — for catalog references like `Sc. #C13`, `SG #137a`, `Yvert #54`.
- stamp denominations: `"Cormorant Garamond"; font-weight: 700; letter-spacing: 0; font-size: 0.7rem;` — tiny denomination text mimicking actual stamp corner-values like `1d`, `2½d`, `5c`, `10¢`.
- copperplate signature flourish: `"Pinyon Script", "Great Vibes", cursive; font-size: 1.4rem;` — for "Cancelled, Royal Mail, London EC1, 14 May 1862" handwritten postmark text.

borders:
- stamp perforation (signature element): a stamp card has dotted/punched perforated edges achieved via `border` + a repeating-radial-gradient mask:
  ```css
  background:
    radial-gradient(circle at center, var(--album-page) 99%, transparent 100%) 0 0 / 8px 8px space,
    var(--stamp-vermillion);
  ```
  or, more simply, a CSS box with `mask-image` creating semi-circular notches around the edges
- mounted-stamp panel: an actual stamp card sits on a slightly larger cream album page, separated by `padding: 16px` showing the mount hinge
- album page border: `1px solid var(--album-page-shadow);` — the page edge of an open album
- standard card panels: `1px solid var(--ink-faint); border-radius: 2px;` — utility cream cards
- ribbon-red ribbon dividers: a horizontal strip of `--ribbon-red` `height: 4px` for premium sections
- border-radius: `1–3px` on standard cards (printed-paper softness); stamps themselves have crisp `0px` rectangular corners with perforated edges via mask

spacing:
- page edge: `5vw` horizontal padding
- vertical rhythm: `8–12vh` between major sections (an album page turn)
- card padding: `24–36px`
- stamp grid: tight `gap: 16–24px` between mounted stamps (album pages are densely populated)
- moderate-high information density. Album pages are full — many specimens visible, but each clearly framed by its mount.

---

## color distribution

- 48% album-page / album-page-warm — the cream album paper field, dominant warm surface
- 18% album-page-shadow / ink-faint — page edges, shadows, faded handwriting wash
- 14% ink-archival / ink-faded — text, catalog numbers, archival ink
- 12% stamp colors collectively (vermillion, bottle-green, prussian, amber, rose, violet) — distributed across mounted stamps as small concentrated rectangles
- 4% album-leather — premium accent (button, header band, premium card)
- 2% cancel-black — postmark stamps crossing corners of mounted stamps
- 2% ribbon-red — featured ribbon/banner accents

each page should feel like a 6×4 grid of mounted stamps on cream paper, each stamp being a small concentrated color rectangle with denomination text in the corner and a postmark cancellation arc crossing one edge.

---

## component patterns

buttons:
- primary (a Mount Stamp button): `background: var(--ink-archival); color: var(--album-page); border: 1px solid var(--ink-archival); border-radius: 2px; padding: 12px 28px; font-family: "Cormorant Garamond", serif; font-weight: 600; font-size: 0.9rem; letter-spacing: 0.08em; text-transform: uppercase;` — looks like the cover-stamped title of a leather-bound catalog
- stamp-frame button (signature): a button styled AS a stamp — `background: var(--stamp-vermillion); color: var(--album-page); padding: 16px 32px;` with perforated-edge mask, denomination corner indicator, and "ROYAL MAIL 1d" small text along the top
- secondary outline: `background: transparent; color: var(--ink-archival); border: 1px solid var(--ink-archival); border-radius: 2px; padding: 11px 26px;`
- ghost: `background: transparent; color: var(--ink-faded); border: none; font-style: italic; text-decoration: underline; text-underline-offset: 4px; text-decoration-color: var(--ink-faint);`
- ribbon button: `background: var(--ribbon-red); color: var(--album-page); border-radius: 0; padding: 10px 24px; box-shadow: 0 2px 0 rgba(0,0,0,0.15);` — like a sealed postal ribbon

inputs:
- `background: var(--album-page-warm); border: none; border-bottom: 1px solid var(--ink-faded); border-radius: 0; padding: 12px 0; font-family: "Cormorant Garamond", serif; font-size: 1rem; color: var(--ink-archival);` — like writing in an album with a fountain pen
- label above: `font-family: "IBM Plex Mono", monospace; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-faded);`
- placeholder: italic Cormorant in `var(--ink-faint)`
- focus: `border-bottom-color: var(--ribbon-red); border-bottom-width: 2px;`

cards/panels (mounted stamps and catalog cards):
- standard album-page card: `background: var(--album-page); border: 1px solid var(--ink-faint); border-radius: 2px; padding: 32px; box-shadow: 0 1px 3px rgba(31,26,18,0.06), 0 8px 24px rgba(31,26,18,0.04);`
- mounted-stamp card (signature): a colored rectangular "stamp" with perforated edges sitting inside a cream album page mount with hinge corners:
  - outer mount: `background: var(--album-page); padding: 20px; border: 1px solid var(--album-page-shadow);`
  - inner stamp: colored rectangle (any `--stamp-*` color) with `mask` creating perforated edges, denomination text top-left, country text top-right, central illustration area, postmark arc crossing one corner
- corner-mount detail: small triangular paper hinges in `--album-page-shadow` at each corner of mounted stamps, suggesting how the stamp is physically attached
- catalog-entry card: a horizontal layout with the mounted stamp on the left and italic Cormorant catalog text on the right — "Sc. #C13 — 24c Black & Brown — Inverted Jenny — 1918 — Estimated $1.5M"

navigation:
- top bar: `background: var(--album-leather); color: var(--album-page); padding: 18px 5vw; border-bottom: 4px solid var(--ribbon-red);`
- brand: a small SVG postage-stamp icon in `--album-page` followed by wordmark in italic Cormorant
- nav items: `font-family: "Cormorant Garamond", serif; font-style: italic; font-size: 1rem; color: var(--album-page-warm); letter-spacing: 0.04em;`
- active: `color: var(--album-page); border-bottom: 1px solid var(--album-page);`
- separators: small `·` characters in `--album-page-shadow`

headers/hero:
- album title: `font-family: "Cormorant Garamond", serif; font-weight: 600; font-size: 5–8vw; letter-spacing: 0.02em; line-height: 1.05; color: var(--ink-archival);` — the engraved-plate album cover title
- italic subtitle: `font-family: "Cormorant Garamond"; font-style: italic; font-size: 1.3rem; color: var(--ink-faded);` — "Volume IV — British Colonies, 1840–1901"
- decorative element: a large SVG postmark cancellation circle in `--ink-archival` placed in the corner, with rotated text inside reading "POSTED · 14 MAY 1862 · LONDON EC1"
- catalog number in mono: `Sc. #88` placed in the page corner
- hero composition: a featured stamp at large scale on one side (e.g., a Penny Black at 4vw width), the album title on the other, separated by italic Cormorant body text

footers:
- `background: var(--album-leather); color: var(--album-page-warm); padding: 56px 5vw; border-top: 4px solid var(--ribbon-red);`
- italic Cormorant tagline: "Philatelic Archive of the Royal Society · est. 1841"
- footer columns of italic links in `--album-page-warm`
- a final small postmark SVG glyph centered

dividers (signature — perforation strip):
- a horizontal strip of stamp-perforation pattern across the page width — using a `mask: radial-gradient(circle at center, transparent 4px, var(--ink-faded) 4px)` repeating
- standard: italic Cormorant `* * *` (three asterisks in italic serif) centered between thin `--ink-faint` rules
- ribbon divider: a horizontal `4px` `--ribbon-red` band with a small SVG postmark glyph centered

lists:
- catalog listings: each item formatted as `Sc. #137a` mono prefix in `--ink-faded`, then italic stamp variety name `Pence Red`, then small text description in roman Cormorant
- bullet glyphs: small `◆` or `❖` ornament glyphs in `--ribbon-red` for unordered lists
- specimen lists feature mini-stamp glyphs on the left (small colored rectangles representing the stamp)

tables (catalog tables):
- header: `background: var(--album-leather); color: var(--album-page); font-family: "Cormorant Garamond"; font-variant: small-caps; letter-spacing: 0.15em; padding: 12px 18px; border-bottom: 2px solid var(--ribbon-red);`
- body rows: `font-family: "Crimson Text", serif; color: var(--ink-archival); padding: 12px 18px; border-bottom: 1px solid var(--ink-faint);`
- alternating rows: `background: rgba(31,26,18,0.025);`
- variety-name columns italic; catalog-number columns mono
- price columns right-aligned in `--ribbon-red` bold

modals (a stamp examined under magnifying glass):
- `background: var(--album-page); border: 2px solid var(--ink-archival); border-radius: 4px; padding: 48px 40px; box-shadow: 0 24px 64px rgba(31,26,18,0.4);`
- top edge: a `4px solid var(--ribbon-red)` ribbon
- modal title in serif Cormorant uppercase
- backdrop: `background: rgba(92,54,35,0.6); backdrop-filter: blur(2px);` — leather album darkness behind
- close: italic Cormorant `× close folder` in `--ink-faded`
- a small SVG postmark stamp can appear in the upper-right corner of the modal as decoration

badges/tags (stamp classification):
- pill `border-radius: 999px; padding: 4px 12px; font-family: "Cormorant Garamond"; font-style: italic; font-size: 0.7rem; letter-spacing: 0.04em;`
- DEFINITIVE: `background: transparent; border: 1px solid var(--ink-faded); color: var(--ink-faded);`
- COMMEMORATIVE: filled `background: var(--ribbon-red); color: var(--album-page);`
- AIRMAIL: `background: transparent; border: 1px solid var(--stamp-prussian); color: var(--stamp-prussian);` with small SVG airplane glyph
- MINT: filled `background: var(--stamp-bottle-green); color: var(--album-page);`
- USED: filled `background: var(--cancel-black); color: var(--album-page);` — postmarked
- RARE: filled `background: var(--album-leather); color: var(--album-page);` with small star glyph

progress bars (collection completion):
- track: `height: 6px; background: var(--album-page-shadow); border-radius: 2px;`
- fill: `background: var(--ribbon-red); height: 100%; border-radius: 2px;`
- label: italic Cormorant to the right `Volume IV · 87 of 124 complete`

tooltips:
- `background: var(--album-page); color: var(--ink-archival); border: 1px solid var(--ink-archival); border-radius: 2px; padding: 8px 12px; font-family: "Cormorant Garamond"; font-style: italic; font-size: 0.85rem; box-shadow: 0 4px 12px rgba(31,26,18,0.15);` — like a small catalog gloss

---

## interaction language

- hover (buttons): subtle paper-shadow shift — `box-shadow: 0 2px 6px rgba(31,26,18,0.1), 0 8px 16px rgba(31,26,18,0.06); transform: translateY(-1px);`. `transition: 0.25s ease;`
- hover (mounted stamps): the stamp lifts slightly off its mount — `transform: rotate(0.5deg) translateY(-2px); box-shadow: 0 8px 20px rgba(31,26,18,0.15);`. A faint pencil-edge highlight appears around the perforation. `transition: 0.4s ease;`
- hover (album-page cards): the page corner lifts slightly via a CSS `transform: rotate()` or `clip-path` shift — like the corner of a turning album page
- hover (links): `color: var(--ribbon-red);` — pure color shift, light italic emphasis
- active/pressed: `transform: scale(0.99);` — the firm press of a hinge mount
- focus: `outline: 1px solid var(--ribbon-red); outline-offset: 3px;`
- selected (stamp): the stamp gains a thin `--ribbon-red` border and a subtle gold-edge `box-shadow: 0 0 0 1px var(--ribbon-red), 0 0 0 4px rgba(188,142,42,0.15);` — like being selected for the featured page
- disabled: `opacity: 0.35; filter: grayscale(0.6);` — the stamp has been removed from the album
- drag: `cursor: grab; transform: rotate(-2deg); box-shadow: 0 24px 48px rgba(31,26,18,0.3);` — lifting a stamp with philatelic tongs

---

## motion & feedback

transitions: `0.3–0.5s ease` default — slow, deliberate, like the methodical handling of philatelic tongs. Stamps are fragile; nothing moves quickly.

page-turn animation (signature): tabbed content uses a 3D `rotateY` transform over `0.8s ease-in-out`, simulating turning an album page from right to left.

```css
@keyframes magnify-pulse {
  0%, 100% { box-shadow: 0 0 0 0 transparent; }
  50% { box-shadow: 0 0 0 8px rgba(188,142,42,0.1); }
}
.featured-stamp { animation: magnify-pulse 4s ease-in-out infinite; }
```

loading: a magnifying-glass SVG slowly drifts across an image of a stamp via `transform: translate()` over `2s linear infinite`, simulating an examiner looking for varieties. Or: a cancellation postmark stamps slowly into view via opacity ramp.

success: a small SVG postmark cancellation appears beside the affected element, "stamping in" via `transform: scale(0) rotate(-15deg) → scale(1) rotate(0deg)` over `0.5s ease-out`. Italic confirmation: `Catalogued.` or `Mounted to album.`

error: the field gains a `--stamp-vermillion` border at `transition: 0.4s ease;` and a small italic `Record incomplete.` or `Variety not recognized.` appears below. No shake; the archivist does not flinch.

page enter: stamps reveal in album-grid order, each fading and slightly rotating `rotate(-2deg) → rotate(0deg)` over `0.5s ease-out` with a `0.06s` stagger — like being placed one by one onto the page by hand.

ambient: a single dust mote SVG slowly drifts across the page background — a subtle reminder of the archive's age.

---

## atmosphere

- album-page paper grain: a subtle SVG turbulence texture overlay on all cream surfaces at very low opacity — aged uncoated paper
- page-corner shadow: pages have a soft gradient at the corners suggesting they're slightly curling — `background: radial-gradient(circle at top right, var(--album-page-shadow) 0%, transparent 8%);`
- watermark texture: a subtle SVG watermark pattern (crowns, scrollwork) can appear at very low opacity in the corner of pages — like the maker's watermark in archival paper
- postmark cancellations: SVG circular postmark stamps with curved text appear as decorative atmosphere on hero panels — `POSTED · LONDON EC1 · 14 MAY 1862`
- philatelic-tongs ornament: small SVG philatelic tweezers, magnifying glasses, and stamp-hinge ornaments scattered as corner decorations on premium pages
- images: `filter: sepia(0.1) contrast(1.08) saturate(0.92);` with thin `1px solid var(--ink-archival)` borders. Photographs of stamps and historic postal documents feel like reproductions from a serious philatelic publication.
- the album-leather header band: a deep brown leather strip at the top of premium pages with gilt-letterpress text suggesting the album spine

---

## editorial voice

button labels: archival, philatelic. `MOUNT STAMP`, `ADD TO ALBUM`, `CATALOGUE`, `VIEW VARIETY`, `MAGNIFY`, `CANCEL POSTMARK`, `RECORD ACQUISITION`, `ENTER COLLECTION`. uppercase Cormorant. archival register.

headings: scholarly catalog style. `BRITISH COLONIES · 1840–1901`, `THE PENNY BLACK · A STUDY`, `ESTABLISHED VARIETIES OF THE 1864 ISSUE`, `MOUNTED IN VOLUME IV`, `RECENT ACQUISITIONS`. Title case. italic Cormorant for stamp variety names.

metadata: catalog-entry format. `Sc. #137 · 2c Carmine · 1862`, `Perf. 12 × 12`, `Watermark: Crown CA`, `Cancellation: London EC1, 14 May 1862`, `Estimated Catalog Value: £24,000`. mono for catalog references, italic for stamp names.

placeholders: italic Cormorant. `catalog number...`, `stamp variety...`, `notes on this acquisition...`, `country of origin...`. lowercase, italic.

empty states: `No stamps in this volume yet.`, `The album page is empty.`, `Awaiting acquisition for this set.`, `No record of this variety in your collection.`. Title-case sentence, formal-archival register.

error messages: `Variety not recognized — consult catalogue.`, `Mount failed — check hinge.`, `Catalog reference incomplete.`, `Provenance cannot be verified.`. Period, archival-formal, no apology.

success messages: `Catalogued.`, `Mounted to Volume IV.`, `Provenance recorded.`, `Variety entered.`. Title case past-tense, quiet collector satisfaction.

---

## cursor & selection

- default: `cursor: default`
- interactive: `cursor: pointer`
- text input: `cursor: text; caret-color: var(--ribbon-red);`
- drag (mounting a stamp): `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--ribbon-red); color: var(--album-page); }` — selection reads like a ribbon-stamp

---

**when to reach for this genome**

Use `philately_album.stamp` when the prompt asks for postage stamps, stamp collecting, philatelic archives, first-day covers, postmarks, cancellations, perforation studies, Scott or Stanley Gibbons cataloging, mounted stamp albums, specimen pages, acquisition records, or any product that should feel like a collector handling fragile postal artifacts in a private archive.

Reach for it when the concrete cues are cream album pages, perforated rectangular specimens, hinge mounts, corner tabs, denomination marks, country/year metadata, circular postmark cancellations crossing one corner, faded Victorian stamp dyes, catalog numbers like `Sc. #C13`, magnifier/tongs handling, leather album bands, and formal collector actions such as `MOUNT STAMP`, `CATALOGUE`, `VIEW VARIETY`, or `RECORD ACQUISITION`.

Do not use it for pressed botanical specimens, Latin plant names, collection locality slips, dried leaves, or institutional herbarium sheets; use `herbarium_plate.specimen`. Do not use it for library catalog drawers, Dewey Decimal cards, book-spine labels, oak furniture, or typed bibliographic records; use `card_catalog.dewey`. Do not use it for department-store product grids, order forms, coupon cuts, price comparisons, or consumer retail nostalgia; use `mail_order.catalog`. Do not use it for telegraph messages, Morse tape, Western Union forms, cable routing, or communication-office operations; use `telegraph_office.wire`. Do not use it for rare-object sale estimates, paddle numbers, hammer prices, or saleroom catalog ceremony; use `auction_lot.gavel`.

It is strongest when the object is a stamp as a collectible specimen: mounted, catalogued, inspected, cancelled, valued, and arranged on an album page. If the prompt centers plants, books, retail products, messages, or auction lots, route to the genome that owns that archive.

---

## anti-patterns — this genome NEVER:

1. uses bright modern brand colors (electric blue, neon green, hot magenta) as accents. All accent colors are aged-stamp dyes: Victorian vermillion, bottle-green, Prussian blue, amber, rose, violet. They look slightly faded, never freshly printed.
2. uses sans-serif typography for primary content. Display is Cormorant/Playfair Didone serif; body is Crimson/Cormorant old-style serif; mono is for catalog references only. Sans-serif feels too modern for an archival collection.
3. uses border-radius above 4px on rectangular content. Stamps and album pages are flat, square-cornered objects. The only round elements are postmark cancellation circles and pill badges (999px).
4. uses fast snappy transitions. Motion is slow and careful — `0.3–0.5s ease`. Philately is an unhurried hobby; the interface respects that pace.
5. uses casual modern UX copy. Voice is archival-scholarly: `Catalogued.`, `Mount stamp.`, `View variety.`. Never `Saved!`, `Click here!`, or `Quick action`.
6. uses photographs without sepia/contrast treatment. Images get slight sepia (0.1) and reduced saturation — they read as reproductions in a scholarly catalog, not modern stock photography.
7. uses bouncy, springy, or elastic animation curves. All motion is `ease`, `ease-in-out`, or `linear`. Stamps don't bounce. The archive is patient.
8. mixes more than 3 stamp colors as broad accent fills. Each page leads with at most 2–3 dominant stamp colors (e.g., a Penny Black page leads with vermillion + black); the others appear only as small inline accents.
9. uses stamp-perforation edges on non-stamp elements. The perforated mask is reserved for actual stamp-styled components and the perforation-strip dividers. Adding it to buttons, cards, or modals dilutes the signature.
10. uses theatrical drop shadows or web-3D depth effects. Shadows are gentle, paper-soft, archival — the suggestion of an open album under desk lighting, never theatrical or neon.
