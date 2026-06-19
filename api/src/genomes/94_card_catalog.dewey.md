---
id: "94"
name: card_catalog.dewey
keywords:
  - library
  - catalog
  - dewey
  - card catalog
  - books
  - reference
  - index
  - archive
  - oak
  - brass
  - librarian
  - stacks
  - shelving
---

### genome 94: `card_catalog.dewey`

> identity: mid-century public library card catalog system. oak drawer fronts with brass pull handles, typed catalog cards on cream stock, Dewey Decimal classification numbers, rubber date-stamp ink marks, book-spine label typography. the hushed institutional warmth of a 1960s municipal library — oak furniture, green reading lamps, the whisper of turning pages and the thunk of catalog drawers sliding open. not a digital library app — this is the physical card catalog rendered as interface.

**surface**

colors:
```
--oak: #8B6B3D;                           /* oak wood drawer fronts, cabinet frame */
--oak-dark: #6B4E28;                      /* drawer edges, shadow sides, deep grain */
--oak-light: #A8845A;                     /* highlight sides, top surfaces, ambient warmth */
--card-cream: #F5F0E4;                    /* catalog card stock — primary surface */
--card-aged: #EDE5D0;                     /* slightly older card stock, recessed zones */
--card-shadow: #D8CEB8;                   /* card edge shadow, divider tabs, tray bottom */
--ink-black: #1A1A1A;                     /* typewriter ink — primary text */
--ink-faded: rgba(26, 26, 26, 0.55);      /* secondary text, call number labels */
--ink-ghost: rgba(26, 26, 26, 0.12);      /* ruled card lines, dividers */
--stamp-blue: #2B4A8C;                    /* rubber stamp ink — dates, "RETURNED", "OVERDUE" */
--stamp-blue-faint: rgba(43, 74, 140, 0.15); /* stamp wash background, highlight tint */
--brass: #B8963E;                         /* drawer pulls, hardware, accent marks */
--brass-light: #D4B060;                   /* brass highlight, hover shimmer */
--reading-green: #2A5C3A;                 /* banker's lamp shade, section marker tabs */
--reading-green-faint: rgba(42, 92, 58, 0.12); /* green wash on active rows */
--spine-red: #9B2D30;                     /* book spine cloth, urgent indicators */
--catalog-gray: #E8E2D6;                  /* card divider tabs, tray background, gutters */
--catalog-gray-deep: #C8BEA8;            /* darker divider, shadow accents, pressed states */
```

typography:
- catalog entries / body text: `'Courier Prime', 'Courier New', 'Courier', monospace` — weight 400. the typewriter mono is the genome's core voice. used for all catalog data, call numbers, author entries, subject headings, metadata. `font-size: 0.875rem`, `line-height: 1.55`. the slight irregularity of typewritten text is the texture.
- headings / signage / section titles: `'Libre Baskerville', 'Georgia', 'Times New Roman', serif` — weight 400-700. `font-size: 1.1rem` to `2rem`. used for section signs, drawer labels, institutional headings, navigation titles. not the catalog card itself — the signage above the cabinet.
- call numbers / classification codes: monospace, `font-variant: small-caps`, `letter-spacing: 0.08em`, `font-size: 0.75rem`. Dewey Decimal codes always set this way: `823.914 / HAR`.
- date stamps: monospace, `color: var(--stamp-blue)`, `font-size: 0.8rem`, `letter-spacing: 0.05em`, `font-weight: 700`. stamp marks are always mono and always in stamp-blue.
- spine labels: serif bold `font-weight: 700`, `font-size: 0.7rem`, `text-transform: uppercase`, `letter-spacing: 0.06em`. simulates the printed paper labels glued to book spines.
- guide cards / tab labels: serif small-caps `font-variant: small-caps`, `letter-spacing: 0.1em`, `font-size: 0.7rem`, `color: var(--ink-faded)`.

borders:
- catalog cards: `1px solid var(--card-shadow)`. `border-radius: 4px` — catalog cards have very slightly rounded corners from handling, not sharp factory-fresh corners.
- drawer fronts / cabinets: `1px solid var(--oak-dark)`. `border-radius: 6px` on outer cabinet panels, `4px` on individual drawer faces. corners are rounded from decades of use, not from modern design language.
- divider tabs (guide cards): `1px solid var(--catalog-gray-deep)`. no border-radius — tabs are die-cut with sharp corners.
- ruled card lines: `border-bottom: 1px solid var(--ink-ghost)` at `24px` intervals in note/body zones, simulating pre-printed card ruling.
- accent bars: `border-left: 3px solid var(--reading-green)` on active/selected catalog entries. `border-left: 3px solid var(--stamp-blue)` on reference/information rows. `border-left: 3px solid var(--spine-red)` on overdue/urgent items.
- no hairline (0.5px) borders — catalog card printing was never that precise. minimum border weight is `1px`.

spacing:
- catalog card padding: `16px 20px` — a catalog card has a specific text block zone with margins on all sides.
- card tray padding: `12px` — the inside of a drawer has just enough clearance.
- section gap: `24px` to `32px` between distinct catalog sections.
- component gap: `8px` to `12px` between stacked cards in a list view.
- page padding: `32px 40px` on desktop, `20px 24px` on mobile.
- drawer front grid gap: `4px` — drawers sit close together in the cabinet, separated only by thin rails.

**color distribution**

- 45% card-cream / card-aged / catalog-gray (`--card-cream`, `--card-aged`, `--catalog-gray`) — the catalog cards and their tray backgrounds dominate
- 20% oak / oak-dark / oak-light (`--oak`, `--oak-dark`, `--oak-light`) — cabinet wood structure, drawer fronts, navigation frames
- 18% ink-black / ink-faded / ink-ghost (`--ink-black`, `--ink-faded`, `--ink-ghost`) — all text, all ruled lines, all typewriter marks
- 8% stamp-blue / stamp-blue-faint (`--stamp-blue`, `--stamp-blue-faint`) — date stamps, active indicators, interactive highlights
- 5% brass / brass-light (`--brass`, `--brass-light`) — hardware, drawer pulls, accent markers
- 3% reading-green / reading-green-faint (`--reading-green`, `--reading-green-faint`) — section markers, active selection, lamp-green accents
- 1% spine-red (`--spine-red`) — urgent/overdue indicators only. used sparingly.

**component patterns**

buttons:
- primary: `background: var(--stamp-blue); color: #FFFFFF; border: none; border-radius: 4px; padding: 10px 20px; font-family: 'Courier Prime', monospace; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase`. looks like a rubber stamp impression — solid, institutional.
- secondary: `background: var(--card-cream); color: var(--ink-black); border: 1px solid var(--card-shadow); border-radius: 4px; padding: 10px 20px; font-family: 'Courier Prime', monospace; font-size: 0.8rem; letter-spacing: 0.03em`. looks like a card with a typed label.
- ghost: `background: transparent; color: var(--ink-faded); border: none; padding: 8px 12px; font-family: 'Courier Prime', monospace; font-size: 0.8rem; text-decoration: underline; text-decoration-style: dotted; text-underline-offset: 3px`. a quiet text reference, like a catalog note.
- destructive/overdue: `background: transparent; color: var(--spine-red); border: 1px solid var(--spine-red); border-radius: 4px; padding: 10px 20px; font-family: 'Courier Prime', monospace; font-size: 0.8rem; letter-spacing: 0.05em; text-transform: uppercase`.

inputs:
- `background: var(--card-cream); border: 1px solid var(--card-shadow); border-radius: 4px; padding: 10px 14px; font-family: 'Courier Prime', monospace; font-size: 0.875rem; color: var(--ink-black)`. the input looks like a blank line on a catalog card — the text you type is the typewritten entry.
- focus: `border-color: var(--stamp-blue); outline: none; box-shadow: 0 0 0 2px var(--stamp-blue-faint)`.
- label above: `font-family: 'Libre Baskerville', serif; font-size: 0.7rem; font-variant: small-caps; letter-spacing: 0.08em; color: var(--ink-faded); margin-bottom: 4px`. labeled like a catalog card field: "Author:", "Title:", "Subject:".
- placeholder: monospace, `color: var(--ink-ghost)`, italic-adjacent via `opacity: 0.6`. looks like faint guide text pre-printed on the card.
- search input: wider treatment, `padding: 12px 16px`, with a small `◆` character prefix in `var(--brass)` — the catalog reference mark.

cards / catalog card panels:
- catalog card: `background: var(--card-cream); border: 1px solid var(--card-shadow); border-radius: 4px; padding: 16px 20px; position: relative`. the fundamental unit of the interface. everything reads like a typed catalog entry.
- card anatomy: call number block top-left in small-caps mono (`font-size: 0.75rem; color: var(--ink-faded)`), then author on the first typed line, then title indented 4 spaces in mono, then subject tracings at the bottom in smaller faded mono.
- featured / highlighted card: `background: var(--card-cream); border: 1px solid var(--card-shadow); border-left: 3px solid var(--reading-green); border-radius: 0 4px 4px 0`. the left bar marks it as the "main entry" card.
- aged card variant: `background: var(--card-aged); border-color: var(--catalog-gray-deep)` — for older or archived entries.
- drawer panel (container): `background: var(--catalog-gray); border: 1px solid var(--catalog-gray-deep); border-radius: 6px; padding: 12px`. the tray the cards sit in.

navigation:
- top bar (cabinet sign): `background: var(--oak); padding: 14px 40px; border-bottom: 2px solid var(--oak-dark); display: flex; justify-content: space-between; align-items: center`.
- nav title: `font-family: 'Libre Baskerville', serif; font-size: 1.2rem; font-weight: 700; color: var(--card-cream); letter-spacing: 0.03em`. the brass plate on the front of the catalog cabinet.
- tab navigation (drawer range labels): `display: flex; gap: 2px; background: var(--oak-dark); padding: 4px 6px; border-radius: 4px`.
- drawer tab: `padding: 8px 14px; border-radius: 4px; font-family: 'Libre Baskerville', serif; font-size: 0.75rem; font-variant: small-caps; letter-spacing: 0.08em; color: var(--oak-light); background: transparent`.
- active drawer tab: `background: var(--card-cream); color: var(--ink-black); font-weight: 700` — the pulled-open drawer, lighter than its neighbors.
- sidebar navigation (drawer cabinet face): vertical stack of drawer fronts. each drawer front is a nav item with a brass-colored label: `background: linear-gradient(135deg, var(--oak-light) 0%, var(--oak) 50%, var(--oak-dark) 100%); border-radius: 4px; padding: 10px 16px; color: var(--card-cream); font-family: 'Libre Baskerville', serif; font-size: 0.75rem; font-variant: small-caps`. the range label (e.g., "Aa — Az") sits left; brass pull accent sits right.

headers:
- page / section header: `font-family: 'Libre Baskerville', serif; font-size: 1.6rem; font-weight: 700; color: var(--ink-black); letter-spacing: 0.01em; border-bottom: 2px solid var(--catalog-gray-deep); padding-bottom: 12px; margin-bottom: 24px`. the institutional sign above a section of the catalog.
- sub-header: `font-family: 'Libre Baskerville', serif; font-size: 1rem; font-weight: 400; color: var(--ink-faded); font-variant: small-caps; letter-spacing: 0.08em`.
- guide card header (in-list divider heading): `background: var(--catalog-gray-deep); padding: 6px 20px; font-family: 'Libre Baskerville', serif; font-size: 0.75rem; font-variant: small-caps; letter-spacing: 0.1em; color: var(--ink-black); border-radius: 0`. the protruding tab guide card that divides alphabetical sections.

footers:
- `background: var(--oak); padding: 20px 40px; border-top: 2px solid var(--oak-dark)`. the bottom rail of the cabinet.
- footer text: `font-family: 'Libre Baskerville', serif; font-size: 0.7rem; font-variant: small-caps; letter-spacing: 0.08em; color: var(--oak-light)`. library hours, branch information, classification system attribution.
- stamp mark in footer: `font-family: 'Courier Prime', monospace; font-size: 0.7rem; color: var(--stamp-blue); opacity: 0.7`. version or date stamp.

lists:
- catalog card list: `display: flex; flex-direction: column; gap: 8px`. stacked catalog cards in a tray. each card is a full catalog card component.
- checklist / due-date list: uses square checkboxes (`14px`, `border-radius: 2px`, `1px solid var(--card-shadow)`) filled with `var(--reading-green)` when checked. completed items get `color: var(--ink-faded); text-decoration: line-through; text-decoration-style: dotted`.
- subject tracing list (tags below a card): inline, separated by ` — ` dashes in `var(--ink-ghost)`. `font-family: monospace; font-size: 0.75rem; color: var(--ink-faded)`.
- numbered lists: `list-style: none`. each item counter preceded by oldstyle number in mono, right-aligned in a `2ch` column: `1.` `2.` etc.

tables:
- `border-collapse: collapse; border: 1px solid var(--card-shadow); background: var(--card-cream); border-radius: 4px; overflow: hidden`.
- header row: `background: var(--catalog-gray-deep); font-family: 'Libre Baskerville', serif; font-size: 0.7rem; font-variant: small-caps; letter-spacing: 0.08em; color: var(--ink-black); padding: 10px 16px; border-bottom: 1px solid var(--card-shadow)`.
- body rows: `font-family: 'Courier Prime', monospace; font-size: 0.8rem; padding: 10px 16px; border-bottom: 1px solid var(--ink-ghost); color: var(--ink-black)`. alternating rows: even rows get `background: var(--card-aged)`.
- call number column: `font-variant: small-caps; letter-spacing: 0.08em; color: var(--ink-faded)` — the Dewey column always looks like a call number label.
- hover row: `background: var(--stamp-blue-faint)`.

dividers:
- primary structural: `border-top: 1px solid var(--card-shadow)` with `24px` vertical margin.
- guide card divider: a full-width tab card at `background: var(--catalog-gray-deep); height: 32px; padding: 0 20px` with the alphabetical range in small-caps serif. visually protrudes from the card list like a real guide card tab.
- within a catalog card: `border-top: 1px solid var(--ink-ghost)` separating the main entry from the tracing section at the bottom of the card.
- call number separator: a short `border-right: 1px solid var(--card-shadow)` isolating the call number block from the entry body.

modals / overlays:
- full card view modal: `background: var(--card-cream); border: 1px solid var(--card-shadow); border-radius: 6px; padding: 32px 36px; max-width: 540px; box-shadow: 0 8px 32px rgba(26,26,26,0.14), 0 2px 8px rgba(26,26,26,0.08)`. the card pulled out of the tray and laid flat on the reading desk.
- backdrop: `background: rgba(139, 107, 61, 0.25)` — the warm oak color bleeds into the overlay, not a cold gray. library light dims, not office light.
- modal header: call number block + title in mono at top, then ruled separation line, then body content.
- close affordance: small mono text "← return to catalog" top-left. no X button — the drawer slides back.

badges / labels:
- call number badge: `background: var(--ink-black); color: var(--card-cream); font-family: 'Courier Prime', monospace; font-size: 0.7rem; font-variant: small-caps; letter-spacing: 0.06em; padding: 2px 6px; border-radius: 2px`. simulates the white spine label with black ink.
- status stamp: `color: var(--stamp-blue); font-family: 'Courier Prime', monospace; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; border: 1.5px solid var(--stamp-blue); padding: 2px 8px; border-radius: 2px; transform: rotate(-2deg); display: inline-block`. rubber stamp impression — slightly rotated, blue, all-caps mono. used for "REFERENCE", "CHECKED OUT", "RESERVED".
- overdue stamp: same as status stamp but `color: var(--spine-red); border-color: var(--spine-red)`.
- section tag: `background: var(--reading-green); color: #FFFFFF; font-family: 'Libre Baskerville', serif; font-size: 0.65rem; font-variant: small-caps; letter-spacing: 0.08em; padding: 2px 8px; border-radius: 2px`. the green section marker — "Fiction", "Reference", "Periodicals".

date-due slips:
- the "Date Due" component: `background: var(--card-cream); border: 1px solid var(--card-shadow); border-radius: 4px; padding: 12px 16px; font-family: 'Courier Prime', monospace; font-size: 0.8rem`. a narrow panel listing date stamps in `var(--stamp-blue)`. each stamped date on its own line. the visual history of the item's circulation.

call number blocks:
- isolated call number display: mono small-caps in a `56px × 72px` block with `border: 1px solid var(--card-shadow); background: var(--card-cream); padding: 6px 8px; text-align: center; border-radius: 4px; font-size: 0.75rem; line-height: 1.4`. Dewey number on first line(s), Cutter number below, date on the last line — exactly as printed on a physical spine label.

**interaction language**

hover:
- catalog cards: `box-shadow: 0 2px 8px rgba(26,26,26,0.08); transform: translateY(-1px); border-color: var(--catalog-gray-deep); transition: all 0.2s ease`. a card lifted very slightly from the tray.
- drawer fronts (nav items): `background: linear-gradient(135deg, var(--brass-light) 0%, var(--brass) 50%, var(--oak) 100%)`. the brass pull catches the light.
- buttons: primary brightens `filter: brightness(1.08)`. secondary gets `background: var(--card-aged)`. all `transition: 0.2s ease`.
- table rows: `background: var(--stamp-blue-faint); transition: background 0.2s ease`.
- links: `color: var(--stamp-blue); text-decoration: underline; text-decoration-style: dotted; transition: color 0.2s ease`.

active / pressed:
- buttons: `transform: scale(0.97); transition: transform 0.1s ease` — the stamp pressing down.
- drawer fronts: `transform: translateY(1px)` — the drawer pushed slightly in before opening.
- cards: `transform: translateY(0); box-shadow: none` — card pressed flat back into the tray.

focus:
- `outline: 2px solid var(--stamp-blue); outline-offset: 2px; border-radius: 4px`. the stamp-blue focus ring echoes the institutional ink color.

selected:
- card: `border-left: 3px solid var(--reading-green); background: var(--reading-green-faint)` — the selected card is marked with the reading lamp's green.
- tab / nav item: active drawer state (lighter background, bolder weight, card-cream surface).
- checkbox: filled with `var(--reading-green)`, white checkmark mark.

disabled:
- `opacity: 0.35; pointer-events: none` — faded, like a catalog card for a withdrawn title. not removed, not struck through — just dimmed.

drag:
- `cursor: grab`. while dragging: `cursor: grabbing; box-shadow: 0 8px 24px rgba(26,26,26,0.15); transform: rotate(1.5deg); opacity: 0.9` — a card picked up from the tray, slightly angled as if held between two fingers.

**motion & feedback**

transitions:
- standard: `0.2s ease` for color, opacity, background, border-color. the library is still and quiet — state changes are immediate but not instant.
- elevation (hover lift): `0.2s ease` for `transform` and `box-shadow`. cards lift without ceremony.
- drawer open (panel expand): `0.2s ease` — drawers slide with a single decisive motion. no bounce, no spring. `0.2s` feels like a well-maintained wooden drawer: smooth, quiet, purposeful.
- NO transitions exceeding `0.3s` on interactive elements. the library does not animate. it responds.
- page / route changes: `opacity 0.2s ease` — cross-fade only. no slides, no wipes, no page-turn effects. those are decorative flourishes the reference desk does not indulge.

loading:
- a horizontal `2px` line in `var(--stamp-blue)` that fills from left to right across the top of the active panel. `transition: width 0.3s ease`. no spinners, no skeleton screens. the catalog is being consulted.
- loading text (if needed): `font-family: 'Courier Prime', monospace; font-size: 0.8rem; color: var(--ink-faded)` — "Searching catalog..." / "Consulting index..." / "Retrieving record..."

success:
- the catalog card's left border transitions to `var(--reading-green)` for `1.5s`, then fades back. `border-left: 3px solid var(--reading-green); transition: border-color 0.3s ease`.
- success text: monospace, stamp-blue — "Record filed." / "Entry saved." / "Hold placed." — the librarian's confirmation stamp. brief, institutional.

error:
- `border-color: var(--spine-red); transition: border-color 0.2s ease`. input field or card border shifts to spine-red. no shaking, no flashing.
- error text: `color: var(--spine-red); font-family: 'Courier Prime', monospace; font-size: 0.8rem` — "Title not found in catalog." / "Record could not be saved." / "That section is unavailable." — matter-of-fact reference desk language.

**atmosphere**

background:
- body: `background-color: var(--catalog-gray)` — the neutral linen of the library floor, the reading room walls. not the card stock itself (that belongs to the cards), but the environment holding everything.
- cabinet backdrop: a subtle `linear-gradient(180deg, var(--oak-light) 0%, var(--oak) 40%, var(--oak-dark) 100%)` applied to the main navigation/sidebar panel. the cabinet recedes in light from top to bottom.
- reading desk surface (main content area background): `background: var(--card-cream); box-shadow: inset 0 0 80px rgba(139, 107, 61, 0.06)` — the surface you lay the cards on. warm, slightly vignette-dimmed at the edges.

ambient details:
- card ruled lines: in note/description zones, `repeating-linear-gradient(transparent, transparent 23px, var(--ink-ghost) 23px, var(--ink-ghost) 24px)` as a background image creates pre-printed card ruling.
- stamp rotation: status stamp badges always carry `transform: rotate(-2deg)` or `rotate(1.5deg)` — no rubber stamp ever lands perfectly square.
- brass drawer pulls: each drawer-front nav item has a small `12px × 8px` element with `background: linear-gradient(135deg, var(--brass-light) 0%, var(--brass) 40%, var(--oak-dark) 70%)` and `border-radius: 2px` positioned at the right edge. on hover, `background` shifts toward `var(--brass-light)`.
- oak grain suggestion: the sidebar/nav panel uses `background: linear-gradient(135deg, var(--oak-light) 0%, var(--oak) 50%, var(--oak-dark) 100%)` — not a texture image, but a directional gradient that reads as grain.
- green lamp glow: an optional ambient `radial-gradient(ellipse 200px 120px at 50% -20px, rgba(42, 92, 58, 0.08) 0%, transparent 70%)` at the top of the reading surface — the suggestion of the banker's lamp above.
- card depth in tray: in card list views, the last visible card edge (bottom of the drawer) is `2px` of `var(--catalog-gray-deep)` — the front face of the drawer itself.

mobile-first:
- portrait mobile: cards stack full-width with `8px` gap. drawer cabinet navigation collapses to a top tab bar.
- all touch targets: minimum `44px` height. drawer front nav items are `48px` tall.
- safe-area padding: `env(safe-area-inset-bottom)`.
- card typography scales down: catalog entry mono at `0.8rem` on mobile, `0.875rem` on desktop.

**editorial voice**

button labels: institutional, imperative, reference-desk phrasing — "Search Catalog", "Place Hold", "View Record", "Check Availability", "Request Item", "New Entry", "File Card", "Return to Stacks", "Mark Reference", "Consult Index". mono typeface, title case or uppercase.

headings: serif, institutional authority — "Card Catalog", "Reference Index", "Subject Headings", "Author Entries", "Current Circulation", "Overdue Items", "Reserve Shelf", "Periodicals Room". not questions, not invitations — directory signs.

metadata format:
- call numbers: `823.914 / HAR` — Dewey class, slash, Cutter number. always mono small-caps.
- dates in stamp format: `MAR 23 2026` — all-caps, abbreviated month, spaced digits. the date-due stamp.
- acquisition dates: `Acquired: 1962` — year only.
- edition / copy: `Copy 2 of 3` / `First Edition, 1958` — typewriter phrasing.
- entry IDs: `CARD-0094-B` — library card number format.
- status codes in stamp style: `REFERENCE — DO NOT CIRCULATE` / `ON RESERVE` / `CHECKED OUT` / `AVAILABLE`.

placeholders: monospace, matter-of-fact — "Search by author, title, or subject...", "Enter call number...", "Add subject heading...", "Type annotation...". no ellipsis emotion — the catalog is not sentimental.

empty states: `font-family: 'Courier Prime', monospace; font-size: 0.875rem; color: var(--ink-faded); text-align: center`. text such as "No cards found in this section." / "This drawer is empty." / "No records match your search." / "The catalog contains no entries under this subject." — the librarian's neutral report. not apologetic, not whimsical.

error messages: mono, dry, institutional — "Title not found in catalog." / "This record is unavailable." / "Your request could not be processed." / "The index returned no results." — reference desk language. no exclamation marks, no colloquialisms.

success messages: brief, filed, done — "Record saved." / "Hold placed successfully." / "Entry added to catalog." / "Card filed." — the librarian's quiet stamp of completion.

annotation / notes voice: when users add notes or annotations to records, placeholder text is `"Add a note to this record..."` — the tradition of pencilled marginalia in the library's copy of the card.

**cursor & selection**

- default: `cursor: default`
- catalog cards (clickable): `cursor: pointer`
- text inputs / annotation zones: `cursor: text`
- drawer pulls / nav items: `cursor: pointer`
- drag (reordering cards): `cursor: grab` → `cursor: grabbing`
- disabled items: `cursor: not-allowed`
- `::selection { background: var(--stamp-blue-faint); color: var(--ink-black); }` — the stamp-blue tint as selection highlight, like underlining in blue ink

**when to reach for this genome**

Use `card_catalog.dewey` when the prompt asks for a library card catalog, Dewey Decimal browser, public-library index, reference-desk tool, book archive, subject-heading search, call-number lookup, circulation record, holds/availability system, stacks directory, oak drawer cabinet, or any product that should feel like typed catalog cards filed in a mid-century municipal library.

Reach for it when the user wants oak cabinet fronts, brass pull handles, cream card stock, Courier Prime catalog entries, Libre Baskerville signage, Dewey numbers, spine labels, rubber date stamps, blue ink marks, green reading-lamp accents, guide-card tabs, drawer-tray depth, alphabetized subject headings, and quiet institutional copy. It is strongest when the interface can treat each record as a physical card with author, title, subject, call number, edition, copy, status, notes, and tracing fields.

Choose it for:
- book, archive, reference, knowledge-base, collection, or records-search products where the primary object is a catalog card rather than a modern feed or database row.
- library circulation flows such as search, file, retrieve, hold, check out, return, mark overdue, annotate, and shelve.
- curated indexes that need warm institutional authority, precise cross-references, alphabetical ranges, drawer navigation, and quiet scanability.
- educational, civic, archival, or scholarly products where users should feel like they are consulting a physical reference cabinet.

Do not choose it for generic typewritten bureaucracy, carbon-copy memos, FOIA records, routing slips, or file-folder archives outside a library setting; use `typewriter_carbon.duplicate`. Do not choose it for mass-market retail catalogues, product grids, coupons, order forms, or Sears/JCPenney warmth; use `mail_order.catalog`. Do not choose it for auction lots, provenance chains, estimates, paddle registration, or saleroom reports; use `auction_lot.gavel`. Do not choose it for pressed plant specimens, botanical taxonomy, determination slips, or herbarium sheets; use `herbarium_plate.specimen`. Do not choose it for hotel reservation cards, key tags, concierge receipts, or hospitality ephemera; use `alpine_concierge.post`. Do not choose it for VHS shelves, rental checkout, genre aisles, late fees, or video-store membership cards; use `videostore_rental.vhs`.

**anti-patterns — this genome NEVER:**

1. uses sans-serif typefaces for body text or catalog entries — all catalog data, entry text, call numbers, and metadata are in `Courier Prime` or `Courier New` monospace. sans-serif is entirely absent. the typewriter mono is non-negotiable.
2. uses border-radius larger than 6px on any element — cards have `4px`, cabinets have `6px`. no pill shapes, no circular buttons, no modern-rounded-rectangle components. the catalog is mid-century furniture, not a smartphone app.
3. uses flat bright colors or neon accents — the palette is oak, cream, stamp-blue, and brass. no lime green, no hot pink, no electric blue. all color has the saturation of institutional materials: natural wood, aged paper, rubber stamp ink.
4. uses animation durations longer than 0.3s on interactive elements — the library is still. nothing drifts, nothing floats, nothing transitions with cinematic weight. drawers open in `0.2s` because they are well-maintained. they do not perform their opening.
5. uses decorative illustrations, icons from icon libraries, or emoji — the catalog interface communicates through typography, typographic ornaments, and the structural forms of catalog cards and drawer fronts. no icon sets, no SVG decorations, no pictograms.
6. uses gradient fills on catalog card surfaces — cards are flat cream stock. `background: var(--card-cream)` only. gradients belong exclusively to wood surfaces (oak navigation panels, drawer fronts). a catalog card with a gradient is an anachronism.
7. uses bounce, spring, or elastic easing — `ease` and `ease-in-out` only. the physics of a wooden drawer on metal guides is smooth, linear, and quiet. no CSS spring physics, no `cubic-bezier` overshoot curves.
8. uses colloquial or casual language — the editorial voice is always the reference desk: neutral, precise, institutional. no "Oops!", no "Awesome!", no "Let's go!". the catalog does not have feelings about your search query.
9. uses floating action buttons, bottom navigation bars, or hamburger menus — navigation is through the catalog cabinet's drawer fronts and the reference tabs across the top. the spatial metaphor of drawers and trays is the navigation system, not mobile app chrome.
10. uses dark mode or dark backgrounds for the reading surface — the catalog card and reading desk surfaces are always light (card-cream, catalog-gray). the oak cabinet is dark, but it is furniture, not a reading surface. content is never light-text-on-dark in this genome. the only dark element is the oak wood itself.
11. uses drop shadows exceeding two layers — catalog cards are thin. their shadow is `0 2px 8px rgba(26,26,26,0.08)` at most. they are not floating panels, not elevated modals hovering in space. they are paper cards in a wooden drawer.
12. presents status information through color alone — every status stamp uses both color (`var(--stamp-blue)`, `var(--spine-red)`) AND typographic text ("CHECKED OUT", "OVERDUE"). the catalog was designed before anyone thought about color accessibility, but its redundancy (color + text label) remains.
