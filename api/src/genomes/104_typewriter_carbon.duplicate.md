---
id: "104"
name: typewriter_carbon.duplicate
keywords:
  - typewriter
  - carbon copy
  - selectric
  - onion skin
  - dossier
  - civil service
  - bureaucracy
  - record
  - duplicate
  - file folder
  - tab divider
  - case file
  - memorandum
  - strikethrough
---

### genome 104: `typewriter_carbon.duplicate`

> identity: Civil-service typewriting bureau, c. 1968. The original on bond paper, the second sheet on flimsy onion-skin behind a carbon, a third on pink Telegraph Form 1170-B. Letters strike unevenly — some 'e's dimmer where the ribbon was wearing out, x'd-over typos, ink-stamp date receivers (red circle, "RECEIVED 14 MAR 1968"), pencilled marginalia, tab-divided manila file folders, page-numbered case dossiers. The platen is uneven; the M typebar sticks; everything is single-spaced and double-thick. This is not editorial publishing — this is the record. The official copy and its three duplicates.

**surface**

colors:
```
--bond-cream: #F2EAD2;             /* primary 25% rag bond paper — slightly aged warm cream */
--bond-shadow: #DDD3B5;            /* the soft shadow under a sheet of bond */
--onion-skin: #E9E3CC;             /* secondary onion-skin paper, slightly more translucent */
--onion-shadow: #C8C1A4;
--pink-form: #F2C8C0;              /* duplicate form pink — Telegraph Form / triplicate carbon */
--pink-form-edge: #D89D92;
--canary: #F6E58D;                 /* yellow inter-departmental form */
--canary-edge: #D9C25E;
--manila: #D9B770;                 /* manila file folder, tab-divider */
--manila-edge: #A88947;
--ribbon-black: #1A1814;           /* freshly-struck typewriter ribbon ink */
--ribbon-faded: #4A4438;           /* the dim/struck-through letter — worn ribbon */
--ribbon-ghost: #7A6E5A;           /* the very dim carbon-copy character on the lower sheet */
--carbon-smudge: rgba(26, 24, 20, 0.18); /* the gray smear of carbon transfer */
--stamp-red: #B6242A;              /* official red ink stamp — RECEIVED / DRAFT / CONFIDENTIAL */
--stamp-red-bleed: rgba(182, 36, 42, 0.35); /* the bleed-halo of a wet ink stamp */
--stamp-blue: #2A3E78;             /* secondary blue ink stamp — APPROVED / FILED */
--pencil-graphite: #4F4E4C;        /* pencilled marginalia, the proofreader's notes */
--pencil-faint: rgba(79, 78, 76, 0.6);
--paper-grain: rgba(0, 0, 0, 0.02); /* the very subtle bond-paper texture grain */
--paper-edge: #B5AB8E;             /* the darker edge of a stack of paper */
--folder-tab: #C5A567;             /* the manila folder tab color */
```

typography:
- primary monospace (the typewriter): `"IBM Plex Mono", "Courier Prime", "Courier New", monospace` at `font-weight: 400; font-size: 13-14px; line-height: 1.55; letter-spacing: 0.01em; color: var(--ribbon-black)`. Single-spaced lines, never proportional. The Selectric-typeball ideal — clean monospace with slight inking irregularity.
- ink-irregularity rule: ~6% of characters render in `var(--ribbon-faded)` (worn-ribbon) and another ~3% in `var(--ribbon-ghost)` (very faded, almost ghost) — scattered randomly. Achieved via `:nth-child` selectors on spans or via a CSS filter that introduces slight contrast variation. The visual reads as "freshly typed but not perfectly inked."
- carbon-copy text rule: any "duplicate" or secondary content layer (pink-form text, onion-skin text) renders the same monospace but at `color: var(--ribbon-ghost); text-shadow: 0.5px 0 0 var(--carbon-smudge)` — the soft, slightly-offset, dimmer impression that a carbon paper produces.
- display / form heading: `"IBM Plex Mono", monospace` at `font-weight: 700; font-size: 18-26px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--ribbon-black)` — the form title or memo header, typed in all-caps for emphasis. Always preceded by a row of `=========` or hyphen-rule above it.
- stamp typography: `"Special Elite", "Stardos Stencil", "Black Ops One", "Courier Prime", monospace` at `font-weight: 700; font-size: 11-15px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--stamp-red); text-shadow: 0 0 0.5px var(--stamp-red-bleed)`. Surrounded by a circular or rectangular border in matching red — the rubber-stamp impression. Often slightly rotated (-2 to +5 deg) and slightly off-center within its border (the human-stamping irregularity).
- handwritten pencil marginalia: `"Caveat", "Kalam", "Patrick Hand", cursive` at `font-weight: 400; font-size: 13-16px; line-height: 1.3; letter-spacing: 0em; color: var(--pencil-graphite); transform: rotate(-1deg)` — the lightly-pencilled notes scrawled in the margin. Always slightly tilted, sometimes slightly faded.
- folder-tab label: `"IBM Plex Mono", monospace` at `font-weight: 500; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ribbon-black)` — typed onto a label strip, then taped or stapled to a manila tab.
- carbon-copy stamp (special): `"Special Elite", monospace` at `font-size: 9-11px; letter-spacing: 0.12em; color: var(--ribbon-faded); text-transform: uppercase` — e.g. "CARBON COPY", "DUPLICATE — FILE", "TRIPLICATE".
- sizes hierarchy: form titles 18-26px, body 13-14px, stamps 11-15px, marginalia 13-16px (handwritten reads at slightly larger scale to compensate for irregularity), folder-tab labels 11px. Body never exceeds 14px — the monospace IS the constraint.

borders:
- `border-radius: 0px` on all paper sheets, file folders, and form sections. Paper is rectangular. The only rounding is on the manila folder tabs (`border-radius: 4px 4px 0 0` for the protruding corner-rounded tab top).
- paper-edge treatment: every "sheet" has a 1px dark edge on right and bottom (`box-shadow: 1px 1px 0 var(--paper-edge), 2px 2px 4px rgba(0,0,0,0.15)`) — the layered shadow under a single sheet sitting on a desk.
- carbon-copy depth: when a "duplicate" sheet sits behind another, it's revealed via a `2-4px` offset to the right and below — the paper-stack-shift. Each underlying sheet gets `filter: brightness(0.96)` slightly darker.
- form rules: `border-top: 1px solid var(--ribbon-black)` or `border-bottom: 1px solid var(--ribbon-black)` to separate form sections. Also accepted: `border-top: 1px double var(--ribbon-black)` for major divisions and `1px dashed var(--ribbon-faded)` for "fill in below" lines.
- stamp borders: rubber-stamp shapes — `border: 2px solid var(--stamp-red); border-radius: 50%` for circular receivers, `border: 2px solid var(--stamp-red); border-radius: 4px` for rectangular CONFIDENTIAL/DRAFT/APPROVED stamps. Border has slight irregularity via `box-shadow: 0 0 0 1px var(--stamp-red-bleed)` halo.
- field-underline rule: form fields are underlined, not boxed. `border-bottom: 1px solid var(--ribbon-black); background: transparent`. Filled-in fields have the typewriter monospace sitting directly on top of the underline.

spacing:
- form-dense, not gridded. `padding: 24-36px` margins on a "sheet" (matching typewriter page margins). Internal sections: `padding: 12-16px`. Lines are tight (single-spaced via `line-height: 1.55`).
- the layout is COLUMN-FIRST — form labels in a left column at fixed width (`width: 140-180px`), filled values in a right column. The eye reads down the label column, then jumps across.

**color distribution**
- 56% bond-cream / onion-skin (`--bond-cream`, `--onion-skin`) — the dominant tone of paper. Most surfaces ARE paper.
- 22% ribbon-black / ribbon-faded / ribbon-ghost — the type. Black is everywhere because every line of text is a striking of the ribbon.
- 8% manila / folder-tab — file folder backgrounds, tab dividers, dossier headings.
- 5% pink-form / canary — the secondary duplicate-paper colors, used for "duplicate copies" of forms or for inter-departmental routing slips.
- 4% stamp-red — the rubber-stamp receivers (RECEIVED, CONFIDENTIAL, DRAFT, FILE).
- 3% pencil-graphite — the marginalia, the corrections, the proofreader's underlines.
- 2% stamp-blue — secondary stamp color (APPROVED, FILED, COPY).

the principle: bond paper dominates, type covers it, manila folders frame it, and a few hot punctuations of stamp-red and pencil-gray accent everything.

**component patterns**

buttons: each button is a TYPED-LABEL STRIP, like a form-action option. Primary — `background: var(--bond-cream); color: var(--ribbon-black); border: 1px solid var(--ribbon-black); border-radius: 0; padding: 10px 22px; font-family: "IBM Plex Mono", monospace; font-weight: 500; font-size: 13px; letter-spacing: 0.04em; text-transform: uppercase; box-shadow: 1px 1px 0 var(--paper-edge), 2px 2px 4px rgba(0,0,0,0.15); position: relative`. Label format: surrounded in brackets — `[ TRANSMIT ]` or `[ FILE COPY ]`. The brackets are typed characters, part of the label.

Stamp-style action button (secondary/destructive): `background: transparent; color: var(--stamp-red); border: 2px solid var(--stamp-red); border-radius: 4px; padding: 8px 20px; font-family: "Special Elite", monospace; font-weight: 700; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; text-shadow: 0 0 0.5px var(--stamp-red-bleed); transform: rotate(-2deg); box-shadow: 0 0 0 1px var(--stamp-red-bleed)`. Looks like a rubber-stamp impression on the page.

Pencil-marginalia link (tertiary): handwritten font `"Caveat"` in `var(--pencil-graphite)` at 14px, underlined with a slightly wavy hand-drawn line (a subtle `text-decoration: underline; text-decoration-style: wavy; text-decoration-color: var(--pencil-graphite)`). Hover: the underline thickens, ink darkens. The "see also..." cross-reference.

Approval button (success/affirm): the APPROVED stamp — `background: var(--bond-cream); color: var(--stamp-blue); border: 2px solid var(--stamp-blue); border-radius: 4px; padding: 8px 22px; font-family: "Special Elite", monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; transform: rotate(1.5deg)`. Same rubber-stamp impression style, but in blue.

inputs: form-field style — `background: transparent; border: none; border-bottom: 1px solid var(--ribbon-black); border-radius: 0; padding: 4px 2px; font-family: "IBM Plex Mono", monospace; font-size: 14px; color: var(--ribbon-black); width: 100%`. The label above is uppercase-monospace in `var(--ribbon-black)` at 11px with letter-spacing 0.08em, followed by a colon (`NAME: `). Placeholder: `color: var(--ribbon-ghost); font-style: normal` — the dim trace of "answer here" pre-printed on the form. Focus: `border-bottom-width: 2px; border-color: var(--ribbon-black); background: rgba(0,0,0,0.02)` — the field paper gets a faint shadow as if pressed into. Cursor: `caret-color: var(--ribbon-black)`.

textarea: same form-field treatment but with horizontal `1px dashed var(--ribbon-faded)` rules every line — the lined paper underneath. Each ruling matches a single-line height.

cards / panels: PAPER-SHEET PANEL — `background: var(--bond-cream); border: none; border-radius: 0; padding: 28px 32px; box-shadow: 1px 1px 0 var(--paper-edge), 3px 4px 8px rgba(0,0,0,0.2); position: relative; background-image: repeating-linear-gradient(0deg, var(--paper-grain) 0 1px, transparent 1px 4px)`. The card is a single sheet of bond paper with a soft drop-shadow and very faint horizontal grain texture. A few sheets may sit underneath, peeking out at +3px and +6px offsets (carbon-copy duplicate stack).

carbon-stack card (alternate): a 3-layer paper stack. The top sheet (`var(--bond-cream)`) renders normally; ::before pseudo-element renders behind it as `var(--pink-form)` at `top: 4px; left: 6px; right: -6px; bottom: -4px; transform: rotate(-0.5deg); z-index: -1`; ::after renders behind that as `var(--canary)` at `top: 8px; left: 12px; right: -12px; bottom: -8px; transform: rotate(0.8deg); z-index: -2`. The visible result: a top bond sheet with pink and canary duplicates fanned out beneath.

DOSSIER folder (special card): `background: var(--manila); border-radius: 4px 4px 0 0; padding: 24px 28px 28px; position: relative; box-shadow: 0 6px 16px rgba(0,0,0,0.25); border: 1px solid var(--manila-edge)`. The folder tab protrudes from the top: `::before { content: "FILE: " attr(data-file-no); position: absolute; top: -22px; left: 32px; background: var(--manila); padding: 4px 18px; border-radius: 4px 4px 0 0; border: 1px solid var(--manila-edge); border-bottom: none; font-family: "IBM Plex Mono"; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ribbon-black); }`. Inside the folder: a typed memo sheet, marginalia, stamps.

navigation: the FILE-TAB BAR. Horizontal row of manila tabs (`background: var(--folder-tab); padding: 6px 18px; border: 1px solid var(--manila-edge); border-bottom: none; border-radius: 4px 4px 0 0; font-family: "IBM Plex Mono"; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ribbon-black); position: relative; margin-right: -1px`). Each tab is a file-folder protrusion. Active tab: brought forward via `z-index` and `background: var(--bond-cream); border-bottom: 1px solid var(--bond-cream); transform: translateY(-2px)` — the selected folder is pulled slightly out of the cabinet. Beneath the tab row: a `1px solid var(--manila-edge)` continuous horizontal rule (the front edge of the drawer).

headers: MEMORANDUM-STYLE header. A panel with two sections:
- top strip: `background: var(--bond-cream); border-bottom: 1px double var(--ribbon-black); padding: 12px 24px`. Contains: "MEMORANDUM" or form-title in uppercase monospace at 22-26px, plus the form serial number in the right corner (`Form 1170-B · Rev. 03/68`).
- meta block: 2-column key-value layout — `TO:` / `FROM:` / `RE:` / `DATE:` labels in left column, values in right. All uppercase monospace at 13px.

A red RECEIVED stamp may sit in the top-right at +12 deg rotation: `position: absolute; top: 14px; right: 30px; transform: rotate(12deg); border: 2px solid var(--stamp-red); border-radius: 50%; padding: 14px; font-family: "Special Elite"; color: var(--stamp-red); text-align: center; box-shadow: 0 0 0 1px var(--stamp-red-bleed)`.

footers: a thin paper-edge band with form metadata — `background: var(--bond-cream); border-top: 1px solid var(--ribbon-faded); padding: 14px 24px; font-family: "IBM Plex Mono"; font-size: 11px; letter-spacing: 0.04em; color: var(--ribbon-faded)`. Format: `PAGE 1 OF 1 · FILED 14 MAR 1968 · INITIALS: ___`. Often includes a small handwritten signature flourish in pencil-graphite.

lists: each item is a NUMBERED FORM-ITEM — prefix `1.`, `2.`, `3.` (or `(a)`, `(b)`, `(c)` for sub-items) in monospace at the same weight as body. Items separated by `4-8px` vertical gap. Active item: a small `►` or `▸` in pencil-graphite scribbled in the left margin (via `::before` pseudo-element with `position: absolute; left: -20px; font-family: "Caveat"; color: var(--pencil-graphite); transform: rotate(-8deg)`). For checklists: `[ ]` brackets typed as the prefix, filled with `[X]` (typed-X over the bracket) when checked.

tables: TYPED TABULAR DATA — `border: 1px solid var(--ribbon-black); border-collapse: collapse; font-family: "IBM Plex Mono"; font-size: 13px`. Header row: `background: var(--bond-cream); border-bottom: 2px solid var(--ribbon-black); padding: 8px 12px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ribbon-black)`. Cell borders: `1px solid var(--ribbon-faded)`. Alternating row backgrounds: even rows transparent, odd rows `background: rgba(26, 24, 20, 0.02)` — the barely-visible carbon-impression band. Numeric columns right-aligned, text columns left-aligned, tabular numerals always.

dividers: never plain hairlines. Either: (a) a typed rule of equal-signs `==============` rendered as actual monospace text in `var(--ribbon-black)` at 13px (genuinely typed, not CSS), (b) a `1px double var(--ribbon-black)` form-section division, or (c) a row of typed hyphens `- - - - -` for soft sub-section breaks. For decorative: a centered typed `* * *`.

modals / overlays: OFFICIAL NOTICE — `background: var(--bond-cream); border: 2px double var(--ribbon-black); border-radius: 0; padding: 36px 40px; box-shadow: 0 16px 48px rgba(0,0,0,0.4), 1px 1px 0 var(--paper-edge); max-width: 540px; position: relative`. Header has a typed `NOTICE` or `CONFIDENTIAL` banner with a double-rule above and below. Often has a red CONFIDENTIAL stamp tilted 8° in the top-right corner. Close action: a typed `[X]` button in the top-right or a typed `[ CLOSE ]` button at the bottom. Backdrop: `background: rgba(26, 24, 20, 0.55); backdrop-filter: blur(2px) sepia(0.2)` — the dimmed office room behind.

badges / tags: typed-label badges. `background: transparent; color: var(--ribbon-black); border: 1px solid var(--ribbon-black); border-radius: 0; padding: 2px 8px; font-family: "IBM Plex Mono"; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase`. Format: `[ DRAFT ]`, `[ FINAL ]`, `[ COPY ]`. Stamp variant: red rotated stamp using the stamp-style treatment above. Pencil variant: hand-circled letter or word in pencil — `border-radius: 50%; border: 1px solid var(--pencil-graphite); transform: rotate(-3deg); padding: 4px 8px; font-family: "Caveat"; color: var(--pencil-graphite)`.

**signature element — the rubber stamp**: a reusable component. SVG or CSS-rendered circular or rectangular impression. Always slightly rotated, always with a slight bleed-halo via `text-shadow` or `box-shadow`. Common stamps: `RECEIVED [date]`, `CONFIDENTIAL`, `DRAFT`, `FILE COPY`, `APPROVED [initials]`, `DUPLICATE`, `URGENT`, `DO NOT DISTRIBUTE`. Always in red or blue ink. The stamp can be applied anywhere on the page — over headers, across body text, in margins.

**signature element — the strikethrough correction**: any text can be "corrected" inline — `<s>` element with `text-decoration: line-through; text-decoration-color: var(--ribbon-black); text-decoration-thickness: 2px` — followed by the correction. Or x-overstrike: the original character is overlaid with `XXX` in slightly fainter ink (`color: var(--ribbon-faded)`), then the corrected text follows in line. Used freely throughout — it adds authenticity.

**signature element — the carbon-copy ghost**: any "secondary" content (form duplicates, file copies, "see also" references) renders as the carbon-copy ghost: same monospace, but `color: var(--ribbon-ghost); filter: contrast(0.7); text-shadow: 0.5px 0 0 var(--carbon-smudge), 1px 0.5px 0 var(--carbon-smudge)` — the soft, slightly-blurred, slightly-offset character impression of carbon transfer.

**interaction language**

hover: paper LIFTS slightly off the desk. `transform: translate(-1px, -1px); box-shadow: 2px 2px 0 var(--paper-edge), 4px 4px 8px rgba(0,0,0,0.2); transition: transform 0.16s ease, box-shadow 0.16s ease`. The shadow grows because the sheet is picked up. On typed-label buttons: text darkens slightly (`color: var(--ribbon-black)` already, but `filter: contrast(1.1)`), brackets gain a hairline weight.

active / pressed: paper SLAPS down. `transform: translate(0, 0); box-shadow: 1px 1px 0 var(--paper-edge), 1px 1px 2px rgba(0,0,0,0.15); transition: transform 0.06s ease`. The sheet hits the desk.

focus: a typed BRACKET emerges around the focused element. `outline: none; box-shadow: 0 0 0 1px var(--ribbon-black), 0 0 0 4px var(--bond-cream), 0 0 0 5px var(--ribbon-black)` — a nested-rectangle frame, like the typed-bracket label `[__]`. Alternative for inputs: `border-bottom-width: 2px` and a small `►` glyph appears in the left margin.

selected: a typed `[X]` overlays the element's identifier, plus a pencil-circled overlay if available. `position: relative; ::after { content: "[X]"; position: absolute; top: -8px; left: -28px; font-family: "IBM Plex Mono"; font-size: 13px; color: var(--ribbon-black); }`. The element also gains `background: rgba(182, 36, 42, 0.04)` — a faint pink wash like a stamp-bleed.

disabled: the element is X'd OUT. `color: var(--ribbon-faded); cursor: not-allowed; pointer-events: none; position: relative; ::after { content: "✗✗✗"; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-family: "IBM Plex Mono"; font-size: 18px; color: var(--ribbon-faded); letter-spacing: 0.5em; }` — overstruck typewriter X's, the way you'd kill a line on a real form.

drag: the sheet PEELS off the desk with a curl. `transform: rotate(-3deg) scale(1.04); box-shadow: 0 16px 32px rgba(0,0,0,0.4), 1px 1px 0 var(--paper-edge); cursor: grabbing; z-index: 999; filter: brightness(1.02)`. A faint rectangle outline (the impression where the sheet lay) remains in the original location at `rgba(0,0,0,0.04)`.

**motion & feedback**

transitions: deliberate and mechanical — `transition: transform 0.16s ease, box-shadow 0.16s ease, opacity 0.18s ease`. No spring, no bounce. Paper moves like paper — flat, controlled. Stamps land hard (faster: 0.08s). Pencil annotations appear via stroke-draw (slower: 0.6s).

**keyframes**:

```css
@keyframes typeStrike {
  0%   { opacity: 0; transform: translateY(-1px); }
  50%  { opacity: 1; transform: translateY(0.5px); }
  100% { opacity: 1; transform: translateY(0); }
}
/* a character strikes the page — fast, with a tiny overshoot */

@keyframes stampLand {
  0%   { opacity: 0; transform: scale(1.3) rotate(varies + 6deg); }
  60%  { opacity: 1; transform: scale(0.95) rotate(varies + 1deg); }
  100% { opacity: 1; transform: scale(1) rotate(varies); }
}
/* the rubber stamp slams down, slight overshoot — duration 0.25s ease-out */

@keyframes pencilDraw {
  0%   { stroke-dashoffset: 100; opacity: 0; }
  20%  { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 1; }
}
/* SVG path draws itself as if a pencil is scribbling — 0.6s linear */

@keyframes paperFlip {
  0%   { transform: rotateY(0); }
  100% { transform: rotateY(-180deg); }
}
/* turning a page over — for tab/folder switches; 0.4s cubic-bezier(0.4, 0.0, 0.2, 1) */
```

loading: a typewriter striking characters one-at-a-time. Text appears character-by-character via `typeStrike` keyframe, with a slight irregular stagger (45-65ms per character). Label reads `TYPING...` then continues to fill in the full message. Optional: a brief carriage-return SOUND would be in spirit but isn't required visually.

success: a rubber-stamp APPROVAL lands across the affected element. `stampLand` keyframe places an `APPROVED [date]` blue stamp at +4 deg rotation. Or a typed checkmark `[✓]` appears with `typeStrike`. A small pencil annotation may scribble in the margin: "OK — JL". The whole sequence takes ~0.6s.

error: a red `REJECTED` or `INVALID` stamp lands across the field at -5 deg via `stampLand`. The affected input gains `border-bottom-color: var(--stamp-red); background: rgba(182, 36, 42, 0.05)`. A small pencil note appears in the margin: "see correction below." No shake, no flash — the form is simply marked as rejected.

page enter: paper sheets DROP into place. Each "sheet" element starts at `transform: translateY(-12px) rotate(-1deg); opacity: 0` and lands at settled with cubic-bezier(0.4, 0, 0.2, 1) over 0.3s. Staggered 80-120ms in document order — top sheet first, then the carbon copies underneath, then the stamps and marginalia (which appear last via `stampLand` and `pencilDraw`).

**atmosphere**

background: `var(--paper-edge)` — the dim warm-gray of a desk surface. A subtle texture overlay: `background-image: repeating-linear-gradient(90deg, rgba(0,0,0,0.015) 0 1px, transparent 1px 4px), radial-gradient(circle at 20% 30%, rgba(0,0,0,0.03) 0%, transparent 50%)` — the very faint wood-grain or desk-pad texture.

paper-grain layer: a body-level `::after` pseudo-element renders a very subtle high-frequency noise texture over the entire viewport at `opacity: 0.03` — the bond-paper grain that's visible up close.

shadow-rim layer: a vignette `box-shadow: inset 0 0 80px rgba(0,0,0,0.18)` on the viewport — the corners of the room are dimmer than the center, where the desk lamp is.

decorative marginalia layer: 2-4 scattered hand-pencilled glyphs (a `?`, an arrow, an underline, a wavy line, the word "see file") in `"Caveat"` at low opacity (0.35-0.5), positioned absolutely at varied angles around the page edges. `pointer-events: none`. These don't refer to anything specific — they're the residue of someone reading the document.

stamps overlay: 1-3 faint, low-opacity background stamps (`RECEIVED 14 MAR 1968`, `FILED 19 MAR 1968`, `COPY 03 OF 04`) drift behind primary content at `opacity: 0.18-0.35` and various rotations. They're decorative atmospheric residue.

paper-stack edge: an optional left-side or bottom-edge accent — a few horizontal hairline stripes simulating the side of a paper stack (`background: repeating-linear-gradient(0deg, var(--bond-cream) 0 0.5px, var(--paper-edge) 0.5px 1px, var(--bond-cream) 1px 1.5px)` for ~6-12px depth) — the side-edge of a stack of pages in a folder.

the ambient feel: a steno pool at 3:30 PM. The clack of typewriters has stopped for a moment. On the desk are three carbon copies of a memorandum, a pink Telegraph Form, a manila dossier with two file tabs sticking out, and a half-eaten cigarette. The air smells of carbon black and damp paper. Everything has been touched by hand, stamped by hand, corrected by hand.

**editorial voice**

clinical, bureaucratic, terse, official. The voice of an inter-departmental memo from a civil service that does not use the word "user." Always uppercase for labels, sentence-case for body content. Never exclamation marks.

button labels: `[ TRANSMIT ]`, `[ FILE COPY ]`, `[ ROUTE FOR REVIEW ]`, `[ AMEND ]`, `[ STRIKE ]`, `[ ARCHIVE ]`, `[ ATTACH ]`, `[ INITIAL ]`, `[ CIRCULATE ]`, `[ HOLD ]`. Always in brackets, always uppercase monospace, never "click here."

headings: form-title and memo-header style — `MEMORANDUM`, `CASE FILE 1170-B`, `INTER-DEPARTMENTAL ROUTING`, `OFFICIAL CORRESPONDENCE`, `DUPLICATE COPY — FOR FILE`, `TRANSCRIPT OF RECORD`, `ACTION REQUIRED BY 03/14/1968`. Always uppercase, often preceded by a row of `=====`.

metadata: form-field key-value pairs. `TO: ` / `FROM: ` / `RE: ` / `DATE: ` / `FILE NO: ` / `REV: ` / `INITIALS: ` / `CC: ` / `ENC: `. Values in monospace. Dates always in `DD MMM YYYY` format (`14 MAR 1968`). File numbers always include section/sub-section (`1170-B/03`).

placeholders: pre-typed field hints in dim ink — `(enter name)`, `(department)`, `(case reference)`, `(initial here)`, `(approve / deny — circle one)`.

empty states: `NO RECORDS ON FILE.`, `FILE EMPTY — AWAITING TRANSMITTAL.`, `NO ENTRIES MATCH SEARCH.`, `THIS DOSSIER CONTAINS NO DOCUMENTS.`. Period-terminated, all caps, never apologetic.

error messages: `ERROR — FIELD REQUIRED.`, `INVALID FORMAT — SEE INSTRUCTIONS.`, `RECORD NOT FOUND.`, `TRANSMITTAL FAILED — RETRY.`, `DUPLICATE ENTRY — SEE EXISTING RECORD.`. Always with an em-dash, always with a corrective hint.

success messages: `TRANSMITTED.`, `FILED.`, `RECORD UPDATED.`, `COPY ARCHIVED.`, `STAMPED — APPROVED.`. Single word or short phrase. Period-terminated. No celebration — only confirmation.

confirmation prompts: `DESTROY THIS COPY?`, `OVERWRITE EXISTING RECORD?`, `MARK AS FINAL?`, `REMOVE FROM FILE?`.

handwritten marginalia (decorative): `see file 1170-A`, `cf. revised draft`, `?`, `??`, `confirm w/ J.L.`, `verify date`, `not on file`, `→ archive`. These appear in pencil-graphite handwriting around content.

**cursor & selection**

cursor: `cursor: default` globally — but interactive elements use `cursor: pointer`. Inputs use `cursor: text`. Draggable: `cursor: grab` → `grabbing`. Custom cursor option: a small typewriter typeball pin-point.

text selection: `::selection { background: var(--ribbon-black); color: var(--bond-cream); }` — the type IS the highlight; selecting text inverts the impression. Alternative: `background: var(--stamp-red-bleed); color: var(--ribbon-black)` for a stamp-wash highlight.

**when to reach for this genome**

Use this genome when the request calls for a typewritten dossier, civil-service form, carbon-copy memo, case file, file-folder archive, bureaucratic workflow, paper records system, office routing slip, duplicate-copy tracker, memorandum interface, correspondence archive, FOIA-style records browser, or any product that should feel like a 1960s typewriting bureau handling official paper.

Reach for it when the user wants cream bond paper, onion-skin duplicates, pink or canary forms, manila folder tabs, monospace typewriter text, rubber stamps, pencilled marginalia, strikethrough corrections, carbon-copy ghosting, numbered forms, and terse official language. It is strongest when the interface is about filing, routing, amending, stamping, archiving, cross-referencing, or preserving a paper trail.

Choose it for:
- document-management concepts where the record, duplicate, routing history, stamped status, and typed field values are the core interaction.
- case-file, archive, civil-service, clerical, correspondence, memo, file-room, administrative, or compliance-adjacent surfaces that need bureaucratic materiality.
- fictional/in-world interfaces for secretarial pools, government offices, investigative files, typed transcripts, records desks, and analog office workflows.
- products whose actions can be phrased as `[ FILE COPY ]`, `[ ROUTE FOR REVIEW ]`, `[ AMEND ]`, `[ ARCHIVE ]`, `[ INITIAL ]`, or `[ CIRCULATE ]`.

Do not choose it for modern legal briefs, news/editorial publishing, military technical manuals, library catalogs, high-polish document apps, minimalist productivity tools, or general retro computing. Use `milspec_field.tm` for military manuals and rugged field documentation, `card_catalog.dewey` for library index cards, `editorial_inquiry.rev` for investigative journalism/editorial reports, `noir_bureau.case` for detective case atmosphere, and `institutional_wire.macro` for formal financial/institutional communications.

**anti-patterns — this genome NEVER:**

1. uses proportional sans-serif as the primary body or display font. Monospace is the entire identity — every line is a column of fixed-width type. Inter, Helvetica, and any proportional sans-serif belong to a different era of officework.
2. uses border-radius above 4px on any content surface. Paper is rectangular; folder tabs round at 4px maximum. Pill shapes, large rounding, or organic curves contradict the form-and-paper geometry.
3. uses bright saturated tech-startup color palettes (neon green, electric purple, vivid orange). The palette is desk-pad neutrals: cream, manila, pink-form, canary, stamp-red, stamp-blue. Saturation belongs to the rubber-stamp impressions only.
4. uses fast snappy spring-bounce animations. Motion is mechanical and deliberate — paper drops, stamps land hard once, ink dries. No bouncy transitions, no springy overshoots, no cute hover scales.
5. uses casual, friendly, encouraging, or marketing-style language. The voice is bureaucratic: terse, official, period-terminated, all-uppercase labels. Never "Let's get started!" — always "[ COMMENCE ]" or "INITIATE TRANSMITTAL.".
6. uses dropshadows with large blur radii or modern glassmorphism effects. Shadows are tight, paper-on-desk shadows (1-4px offset, 4-8px blur max). No `backdrop-filter`, no frosted glass — this is bond paper, not glass.
7. uses uniform clean lines and perfect alignment. Typed lines have slight irregularity (varying ink density), stamps land at slight rotations, pencil marginalia tilts -3 to +3 degrees, sheets are stacked with offsets. Perfect digital precision reads as a different aesthetic.
8. uses icons or pictographs. Visual language is TYPED CHARACTERS — `[X]`, `[✓]`, `→`, `►`, `*`, `=`. Material Icons, Font Awesome, and emoji belong to a different era; this genome speaks only in typewriter glyphs and rubber-stamp shapes.
9. uses gradients or shading on UI elements. Paper is flat, typing is flat, stamps are flat. Depth comes only from paper-stack offset shadows and the texture of the page surface — never from gradient fills.
10. uses light-on-dark UI as the default. The substrate is paper; paper is cream-colored; type is dark on cream. Dark-mode interpretations contradict the entire identity — there is no dark mode for a 1968 typewritten dossier.
