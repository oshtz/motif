---
id: "13"
name: bespoke_planner.folio
keywords:
  - planner
  - stationery
  - journal
  - notebook
  - organizer
  - agenda
  - diary
  - elegant
  - feminine
  - botanical
  - wedding
  - schedule
  - to-do
  - task
  - calendar
---

### genome 13: `bespoke_planner.folio`

> identity: premium physical stationery rendered digitally. ring-bound leather planner on a linen desk, serif headings in ink, rose-blush accents, ruled lines, and page-curl corners. the tactile warmth of a hand-curated day planner for a florist or wedding designer.

**surface**

colors:
```
--paper: #FDFBF9;          /* main page surface — warm off-white */
--paper-shadow: #E8E4DF;   /* page edge shadow, tab borders */
--desk: #EAE6E1;           /* background surface — linen desk */
--ink: #171717;             /* primary text — near-black */
--ink-mid: #5A5652;         /* secondary text, subtitles */
--ink-light: #A39E99;       /* tertiary text, time labels, metadata */
--ink-faint: rgba(23, 23, 23, 0.08); /* ruled lines, dividers */
--rose: #BA6D73;            /* primary accent — dusty rose */
--blush: #F1BABA;           /* secondary accent — soft pink */
--blush-faint: rgba(241, 186, 186, 0.3); /* highlight wash, event backgrounds */
```

typography:
- display/headings: `'Lora', 'Georgia', serif` — weight 400-500, 1.4rem to 2.5rem. no uppercase on headings. title case or sentence case only. `line-height: 1.1`
- body/UI: `'Raleway', 'Helvetica Neue', sans-serif` — weight 300-600, 0.85rem to 0.95rem. `line-height: 1.4`
- metadata/labels: sans-serif, `text-transform: uppercase`, `letter-spacing: 2px`, 0.6rem to 0.75rem
- handwriting/notes: serif italic, 1.1rem, `color: var(--ink-mid)`, `line-height: 32px` aligned to ruled lines

borders:
- panels/pages: `1px solid var(--paper-shadow)`. `border-radius: 8px` to `12px` on outer containers. inner elements `4px` to `6px`
- event cards: `border-left: 3px solid var(--rose)`, `border-radius: 0 6px 6px 0`
- dividers: `1px solid var(--ink-faint)` (solid) or `1px dashed var(--ink-faint)` (ruled lines in note areas)
- no hard borders — everything is soft, never exceeds `1px` except accent left-borders at `3px`

spacing:
- page padding: `48px 56px`
- section gap: `24px` to `32px`
- task item padding: `12px 0`
- component gap: `12px` to `16px`
- generous whitespace everywhere — content never feels cramped

**color distribution**

- 60% paper surface (`--paper`, `--desk`) — warm whites and linens dominate
- 20% ink hierarchy (`--ink`, `--ink-mid`, `--ink-light`) — text and structure
- 15% blush wash (`--blush-faint`, `--blush`) — highlights, backgrounds, decorative touches
- 5% rose accent (`--rose`) — active indicators, accent borders, current-time markers, interactive highlights

**component patterns**

buttons:
- primary: `background: var(--rose); color: #fff; border: none; border-radius: 20px; padding: 10px 24px; font-family: var(--font-sans); font-size: 0.8rem; font-weight: 500; letter-spacing: 1px; text-transform: uppercase`
- secondary: `background: transparent; color: var(--rose); border: 1px solid var(--blush); border-radius: 20px; padding: 10px 24px`
- ghost: `background: transparent; color: var(--ink-mid); border: none; padding: 8px 16px` — text-only, underline on hover

inputs:
- `background: transparent; border: none; border-bottom: 1px dashed var(--ink-faint); padding: 8px 0; font-family: var(--font-serif); font-style: italic; color: var(--ink-mid); font-size: 1rem`
- focus: `border-bottom-color: var(--rose); border-bottom-style: solid`
- placeholder: serif italic, `color: var(--ink-light)`
- labels above inputs: sans-serif uppercase, `letter-spacing: 2px`, `font-size: 0.65rem`, `color: var(--rose)`

cards/panels:
- `background: var(--paper); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.04), 0 20px 40px rgba(0,0,0,0.08); padding: 48px`
- page-like appearance with subtle shadow layering to simulate stacked paper
- optional `::after` pseudo-element offset `4px` to show page depth beneath

navigation:
- vertical tabs on the side: `writing-mode: vertical-rl; text-orientation: mixed; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--ink-light)`
- active tab: `color: var(--rose); font-weight: 600; background: #fff; transform: translateX(4px)`
- tab shape: `border-radius: 0 8px 8px 0`, border on three sides, open on the book-spine side

headers:
- date headers: meta line (sans uppercase, rose) → large serif title (2.5rem) → serif italic subtitle
- section headers: serif 1.4rem with `::after` highlight bar — `height: 8px; background: var(--blush-faint)` positioned behind the text baseline
- meta decorators: horizontal `1px` line in blush-faint stretching between metadata spans

footers:
- minimal: centered sans-serif, `font-size: 0.65rem`, `color: var(--ink-light)`, `letter-spacing: 2px`, uppercase
- optional decorative dots: `4px` circles in `--blush`

lists:
- task lists: circular checkboxes (`18px`, `border-radius: 50%`, `1px solid var(--ink-light)`)
- completed: checkbox fills with `var(--rose)`, white checkmark, text gets `color: var(--ink-light); text-decoration: line-through; text-decoration-color: var(--blush)`
- item separator: `border-bottom: 1px solid var(--ink-faint)`
- no bullet points — always custom checkboxes or clean undecorated lists

tables:
- `border-collapse: collapse`. no outer border. header row: `border-bottom: 2px solid var(--ink-faint); font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: var(--ink-light)`
- body rows: `border-bottom: 1px solid var(--ink-faint)`. no alternating row colors
- cell padding: `12px 16px`

dividers:
- structural: `1px solid var(--ink-faint)`
- decorative ruled lines (notes area): `1px dashed var(--ink-faint)`, evenly spaced at `32px` height
- accent dividers: thin horizontal line in `--blush-faint` used between metadata items

modals/overlays:
- `background: var(--paper); border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.12); padding: 48px`
- backdrop: `rgba(23, 23, 23, 0.15)` — very light, not heavy darkening
- header: serif title + rose accent line beneath

badges/tags:
- `background: var(--desk); padding: 2px 8px; border-radius: 10px; font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--ink-light)`
- status badges in rose: `background: var(--blush-faint); color: var(--rose)`

**interaction language**

- hover: `transform: translateX(4px)` on list items and cards. buttons: `background` lightens slightly. tabs: `color: var(--ink-mid); transform: translateX(2px)`. checkboxes: `border-color: var(--rose)`. all transitions `0.2s ease`
- active/pressed: buttons: `transform: scale(0.97)`. cards: `box-shadow` compresses. no color flash
- focus: `outline: 2px solid var(--blush); outline-offset: 2px`. inputs: border-bottom becomes solid rose
- selected: `color: var(--rose); font-weight: 600`. tabs: translate + background change + deeper shadow
- disabled: `opacity: 0.4`. no strikethrough, no grayscale — just faded
- drag: `cursor: grab` → `cursor: grabbing`. element gets `box-shadow: 0 12px 32px rgba(0,0,0,0.1); transform: rotate(1deg)` — like picking up a card from the desk

**motion & feedback**

- transitions: `0.2s ease` for color, opacity, transform. `0.3s ease` for box-shadow. `0.4s cubic-bezier(0.25, 1, 0.5, 1)` for page-curl and larger reveals. nothing is instant — everything has gentle paper-like movement
- loading: pulsing rose dot (opacity 0.3 → 1 → 0.3, `1.5s ease-in-out infinite`). no spinners, no progress bars
- success: blush background wash fades in behind confirmed element, holds 1.5s, fades out. checkbox fills with satisfying rose + checkmark
- error: `border-left: 3px solid #C45B5B` (muted red, not bright). text in muted red. no shaking, no flashing — errors are stated calmly

**atmosphere**

- desk surface behind the planner: `radial-gradient(circle at 50% 0%, #F5F2EF 0%, #EAE6E1 100%)` — warm overhead lighting feel
- page depth: layered `box-shadow` on main container (3-4 shadow layers at varying offsets to simulate a thick book sitting on a desk)
- page-edge effect: `::after` pseudo-elements showing paper-stack depth behind the main panel
- gutter shadow: `linear-gradient` darkening at the center spine where pages meet
- page curl: corner `linear-gradient(135deg, transparent 45%, #fff 50%, #e0dcd7 55%, transparent 60%)` starting at `20px` size, expanding to `40px` on hover — reveals the page can be turned
- ring binder: metallic `linear-gradient(90deg, #d5d1cc 0%, #fcfbfa 30%, #b8b3ae 80%, #9e9a95 100%)` strips at the spine. 3 punch holes spaced every `120px` vertical, `diameter: 8px`, with `inset` shadows
- watermark: faint SVG motif (botanical, floral, or monogram) at `opacity: 0.03`, rotated, in the notes area
- corner decorations: small `4px` blush dots in corners, understated

**editorial voice**

- button labels: "Add to Planner", "Mark Complete", "View Schedule", "New Entry", "Save Note", "Turn Page", "This Week", "Archive"
- headings: sentence case or title case, serif, never uppercase for main titles. section titles like "Priorities", "Journal & Notes", "This Week's Focus", "Appointments"
- metadata: dates written longhand — "March 21st, 2024" not "03/21/24". week numbers as "Week 12". time as "2:00 PM". seasons noted — "Spring Equinox"
- placeholders: serif italic — "Write your thoughts here...", "Add a new task...", "What's on your mind today?"
- empty states: "This page is waiting for you." / "No appointments yet — enjoy the open space." / "Your notes will appear here."
- error messages: calm and personal — "That didn't save — shall we try again?" / "We couldn't find that entry." / "Something went wrong with your schedule."
- success messages: warm confirmation — "Saved to your planner." / "Task complete — nicely done." / "Your schedule has been updated."

**cursor & selection**

- default: `cursor: default`
- interactive elements: `cursor: pointer`
- text areas / note sections: `cursor: text`
- page-curl corner: `cursor: pointer`
- drag operations: `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--blush); color: var(--ink); }` — soft pink highlight

**when to reach for this genome**

Use `bespoke_planner.folio` when the prompt asks for a personal planner, day agenda, wedding schedule, florist organizer, boutique service calendar, task journal, diary app, weekly focus board, appointment book, premium stationery dashboard, ring-bound notebook, or warm lifestyle productivity surface where paper, tabs, ruled lines, blush accents, and gentle page metaphors should define the interface.

Reach for it when the user wants the product to feel curated, tactile, and personal: linen desk backgrounds, stacked cream pages, rose highlights, serif headings, handwritten note fields, circular checkboxes, vertical planner tabs, page-curl corners, ring-binder details, and calm schedule/task language.

Do not use it for rugged expedition notes, specimen sketches, or naturalist field records; use `field_journal.expedition`. Do not use it for hotel concierge ephemera, key cards, receipts, room service, or alpine travel hospitality; use `alpine_concierge.post`. Do not use it for literary publishing, reading-room pages, book margins, or typeset essays; use `manuscript_press.lit`. Do not use it for bureaucratic forms, carbon copies, official memos, or file-folder records; use `typewriter_carbon.duplicate`. Do not use it for Victorian herbalist labels, pharmacy dosage cards, ornate bottle shelves, or botanical medicine; use `apothecary_label.rx`. Do not use it for cool Swiss finance folios, institutional reports, or strict Helvetica grids; use `structured_folio.swiss`.

It is strongest when the primary action is planning a human day, event, week, note, task, or appointment with a premium stationery feel; if the prompt needs official records, scientific observation, hotel artifacts, literary pages, or institutional reporting, choose a sharper genome.

**anti-patterns — this genome NEVER:**

1. uses monospace or pixel fonts — all typography is serif display + sans-serif UI
2. uses dark/black backgrounds — the world is warm paper and linen, never dark mode
3. uses hard 0px border-radius — every corner has softness, minimum `4px`
4. uses bright saturated accent colors — the palette is muted, dusty, blush-toned. no neon, no primary colors
5. uses uppercase for main headings or titles — uppercase is reserved exclusively for small metadata labels and tags
6. uses heavy drop shadows or glows — shadows are always soft, layered, and suggest physical depth rather than digital elevation
7. uses instant transitions or zero-duration state changes — everything moves with gentle paper-like easing
8. uses aggressive error states (red flashing, shaking, exclamation icons) — errors are stated calmly with muted tones
9. uses dense grid layouts or packed information — spacing is always generous, pages breathe
10. uses generic UI chrome (toolbars, hamburger menus, floating action buttons) — navigation is through planner tabs, page turns, and stationery metaphors
