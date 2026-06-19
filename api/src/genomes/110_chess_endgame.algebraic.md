---
id: "110"
name: chess_endgame.algebraic
keywords:
  - chess
  - endgame
  - algebraic notation
  - grandmaster
  - position
  - FIDE
  - chess study
  - opening
  - mate in three
  - PGN
  - chess clock
  - tournament
  - analysis
  - two-tone board
  - chess problem
---

### genome 110: `chess_endgame.algebraic`

> identity: A grandmaster's annotated study notebook, ICCF correspondence-postcard era. Two-tone board diagrams (cream / oak-stained), figurine algebraic notation (♔ ♕ ♖ ♗ ♘ ♙), endgame compositions, the cold rigor of FIDE problem-tournament evaluation. A chess clock ticking at the edge of the table; a folded analysis sheet on lined paper; the press-printed bookplate of "ENDGAME STUDIES — VOL. III, 1978"; a hairline-ruled column of move-by-move evaluation. This is not a casual chess app — this is the meticulously-bound endgame-study compendium of a 2400-rated correspondence player. Every move is annotated. Every position is evaluated. Nothing is decorative.

**surface**

colors:
```
--page-cream: #ECE4D0;             /* primary study-book page — slightly aged cream paper */
--page-cream-shadow: #DBD2B8;
--page-margin: #C9BFA3;
--ink-dark: #1A1814;               /* deep press-printed black, the analysis ink */
--ink-mid: #4A4438;                /* secondary annotation ink */
--ink-faint: #8A8270;              /* tertiary metadata, footnote dim */
--rule-hairline: #B5AB91;          /* the engraved hairline rules */
--board-light: #E8DAB4;            /* the cream square of a chess board — slightly warmer than page */
--board-light-edge: #D4C497;
--board-dark: #6B4F2E;             /* the oak-stained dark square */
--board-dark-edge: #4E371E;
--board-frame: #2A1E10;            /* the deep frame border around a diagram */
--coordinate-faint: #9A8E73;        /* the a-h / 1-8 coordinate labels */
--annotation-red: #8B1A1A;         /* the rare critical-move red — !! brilliant, ?? blunder */
--annotation-red-bleed: rgba(139, 26, 26, 0.3);
--evaluation-positive: #2C5530;     /* the deep forest-green +1.40 advantage indicator */
--evaluation-negative: #8B1A1A;     /* the deep red -2.10 disadvantage indicator */
--evaluation-equal: #6B5E45;        /* the neutral 0.00 brown */
--clock-dial: #F4ECDA;             /* the chess-clock cream face */
--clock-hand: #1A1814;
--clock-frame: #3B2C1E;             /* the wooden-trim chess clock body */
--ink-stamp: #1F2A4A;               /* a dark navy ink-stamp — the bookplate ink */
--press-bleed: rgba(26, 24, 20, 0.12); /* the slight bleed-halo of letterpress ink */
--paper-grain: rgba(0, 0, 0, 0.025); /* the very faint paper grain */
```

typography:
- display / study-title serif: `"Cormorant Garamond", "EB Garamond", "Adobe Caslon Pro", serif` at `font-weight: 500; font-size: 24-38px; letter-spacing: 0.005em; line-height: 1.2; color: var(--ink-dark)` — the chess-book chapter title, the position-name caption. Editorial-press refined.
- algebraic notation: `"JetBrains Mono", "Iosevka", "IBM Plex Mono", "Courier Prime", monospace` at `font-weight: 500; font-size: 14-16px; letter-spacing: 0.02em; color: var(--ink-dark)` — the move list. Tabular, precise, columnar. Notation is always in monospace — never proportional.
- figurine pieces (chess glyphs): same monospace but with `font-feature-settings: "ss01"` for figurine notation if available, or unicode chess symbols (♔ ♕ ♖ ♗ ♘ ♙ ♚ ♛ ♜ ♝ ♞ ♟) at `font-size: 1.1em` relative to surrounding move text. Pieces ALWAYS render as glyphs, never as letters (K, Q, R, B, N, P) — except in PGN-style export blocks.
- body / analysis prose: `"EB Garamond", "Adobe Caslon Pro", serif` at `font-weight: 400; font-size: 14-15px; line-height: 1.6; letter-spacing: 0.005em; color: var(--ink-dark)`. Italic for evaluative phrasing (`*White is winning.*`, `*Black's only move.*`).
- evaluation/score block: `"JetBrains Mono", monospace` at `font-weight: 600; font-size: 12-14px; letter-spacing: 0.04em; color: var(--evaluation-equal)`. Format: `+1.40`, `-0.50`, `0.00`, `+M5` (mate in 5). Color shifts based on sign: positive in `--evaluation-positive`, negative in `--evaluation-negative`, neutral/equal in `--evaluation-equal`.
- coordinates / metadata: `"JetBrains Mono", monospace` at `font-weight: 400; font-size: 10-11px; letter-spacing: 0.06em; color: var(--coordinate-faint)` — the a-h / 1-8 board labels, the move-number labels, page numbers.
- bookplate / stamp serif: `"Cormorant SC", "Trajan Pro", serif` at `font-weight: 500; font-size: 11-14px; letter-spacing: 0.16em; text-transform: uppercase; font-variant-caps: small-caps; color: var(--ink-stamp)` — the chess-book bookplate header, the volume-number stamp, the institutional label.
- annotation symbols: same monospace at full body size, with special treatment for `!` (good), `!!` (brilliant), `?` (dubious), `??` (blunder), `!?` (interesting), `?!` (questionable), `±` (white advantage), `∓` (black advantage), `+−` (winning), `=` (equal). `!!` and `??` in `var(--annotation-red)`; others in body color.
- typographic mandate: SERIF for prose and titles; MONOSPACE for notation and evaluation; SMALL-CAPS for institutional labels. Never sans-serif. Never script. Never display-fashion type.

borders:
- `border-radius: 0px` everywhere on UI surfaces. Chess boards are rectangular. Study pages are rectangular. Move-list columns are rectangular. The only allowed radius is `border-radius: 2px` on a small notation-block badge (the engraved-foil-block softening).
- BOARD-FRAME border: chess-board diagrams use a `3px solid var(--board-frame)` border with an inner `1px solid var(--page-cream-shadow)` for a recessed plate-frame look. Outside this: `box-shadow: 0 6px 16px var(--press-bleed)` — the slight letterpress-impression depth.
- hairline rules: `1px solid var(--rule-hairline)` for most separators. `2px double var(--rule-hairline)` for major section divisions (the engraved double-rule motif).
- coordinate-label rule: a thin `1px solid var(--ink-faint)` rule between a board and its coordinate strip — the binding-line of the diagram.
- move-list column rule: a `1px solid var(--rule-hairline)` vertical rule between the move-number column and the move-notation column. Tabular structure.

spacing:
- study-book proportions. `padding: 36-48px` on a page-card; `padding: 16-24px` on a board-diagram container; `padding: 8-12px` on a move-list row.
- the layout is TWO-COLUMN BOOK-PAGE — board diagram on the left (or top), move list and analysis on the right (or below). Generous gutters (`column-gap: 48px`).
- monospace columns ALIGN — move-number, white-move, black-move, evaluation form four aligned columns reading like sheet music. Use `font-feature-settings: "tnum"` for tabular numerals.

**color distribution**
- 50% page-cream / page-cream-shadow — the dominant study-book page surface.
- 15% ink-dark / ink-mid — the press-printed analysis text.
- 12% board-light / board-light-edge — the cream squares of board diagrams.
- 10% board-dark / board-dark-edge — the oak-stained dark squares.
- 5% rule-hairline / coordinate-faint / ink-faint — the structural hairlines and tertiary metadata.
- 4% evaluation-positive / evaluation-negative — the green/red of score evaluation.
- 2% annotation-red — the rare critical-move !! and ?? indicators.
- 1% board-frame / clock-frame — the deep frame-wood accent.
- 1% ink-stamp / clock-dial — the rare bookplate-blue and clock-face accents.

the principle: page-cream dominates, two-tone board punctuates the visual rhythm, ink writes the analysis, evaluation-color flags advantage. Annotation-red appears only at critical moments — once or twice per page maximum.

**component patterns**

buttons: text-only, small-caps editorial. Primary — `background: transparent; color: var(--ink-dark); border-top: 1px solid var(--ink-dark); border-bottom: 1px solid var(--ink-dark); border-radius: 0; padding: 8px 22px; font-family: "Cormorant Garamond", serif; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; font-variant-caps: small-caps; transition: all 0.32s cubic-bezier(0.2, 0.6, 0.2, 1)`. The bracketed editorial action — STUDY THIS POSITION, BROWSE OPENINGS, OPEN VOLUME III. Hover: rules darken slightly, optional letter-spacing tightens.

Secondary button (notation-style action): `background: var(--page-cream); color: var(--ink-dark); border: 1px solid var(--ink-dark); border-radius: 0; padding: 6px 14px; font-family: "JetBrains Mono", monospace; font-size: 12px; letter-spacing: 0.04em; font-weight: 500`. Format reads as a piece notation: `[ ♘f3 ]`, `[ O-O ]`, `[ Resign ]`. The brackets are typed, part of the label.

Critical/destructive button (rare annotation-red): `background: transparent; color: var(--annotation-red); border-top: 1px solid var(--annotation-red); border-bottom: 1px solid var(--annotation-red); padding: 8px 22px; font-family: "Cormorant Garamond"; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; font-variant-caps: small-caps; text-shadow: 0 0 0.5px var(--annotation-red-bleed)`. Used for RESIGN, CLAIM DRAW, FORFEIT — the bordered-with-red small-caps emphasis.

Evaluation button (success/affirm): `background: var(--evaluation-positive); color: var(--page-cream); border: 1px solid var(--board-frame); border-radius: 2px; padding: 6px 16px; font-family: "JetBrains Mono"; font-size: 12px; letter-spacing: 0.04em; font-weight: 600`. The "+1.40 — STUDY ANALYZED" affirmative — small, monospace, restrained.

inputs: editorial-notation field. `background: transparent; border: none; border-bottom: 1px solid var(--rule-hairline); border-radius: 0; padding: 6px 0; font-family: "JetBrains Mono", monospace; font-size: 15px; color: var(--ink-dark); width: 100%`. Focus: `border-bottom-color: var(--ink-dark); border-bottom-width: 1px` (no thicker — the hairline stays a hairline). Label above: small-caps `font-family: "Cormorant SC"; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 6px`. Placeholder: italic serif `font-family: "EB Garamond"; font-style: italic; color: var(--ink-faint)`. For move-input fields: a 6px monospace prefix `move:` followed by the input — accepts algebraic notation directly (`Nf3`, `O-O`, `Bxe5+`).

cards / panels: STUDY-PAGE PANEL — `background: var(--page-cream); border: none; padding: 40px 48px; box-shadow: 0 1px 0 var(--page-cream-shadow), 0 8px 24px var(--press-bleed); position: relative; max-width: 760px`. A position-number tab in the top-left in small-caps editorial style: `::before { content: "STUDY " attr(data-study-no); position: absolute; top: 0; left: 32px; background: var(--ink-stamp); color: var(--page-cream); padding: 4px 12px; font-family: "Cormorant SC"; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; font-variant-caps: small-caps; border-radius: 0 0 2px 2px; }`. The bookplate-blue lot-tab signals "this is a numbered study."

BOARD-DIAGRAM card (the signature element): `background: var(--page-cream); border: none; padding: 24px; box-shadow: 0 8px 24px var(--press-bleed); position: relative`. Inside: the 8x8 chess board rendered as a CSS grid. Each square: `aspect-ratio: 1; width: 56-72px` (adjustable). Light squares: `background: var(--board-light)`. Dark squares: `background: var(--board-dark)`. Outer frame: `border: 3px solid var(--board-frame)`. Coordinate strip: `1-8` numerals on left edge in monospace `var(--coordinate-faint)` at 11px, `a-h` letters on bottom edge similarly. Pieces are unicode chess symbols at `font-size: 40-52px` centered in each square, in `var(--ink-dark)` for one side and `var(--page-cream)` (with `text-shadow: 0 0 1px var(--ink-dark)`) for the other.

MOVE-LIST card: `background: transparent; padding: 24px; border-top: 1px solid var(--ink-dark); border-bottom: 1px solid var(--ink-dark); font-family: "JetBrains Mono", monospace; font-size: 14px; line-height: 1.5; column-count: 1`. A header row in small-caps serif at the top: `MV  WHITE     BLACK     EVAL`. Then aligned rows: `1. e4       e5       +0.10`. Annotations (`!`, `?`, `!!`, `??`) appear inline. Active move row highlights with `background: var(--page-cream-shadow); border-left: 2px solid var(--annotation-red); padding-left: 14px`.

PGN-EXPORT panel: `background: var(--page-cream-shadow); border: 1px solid var(--ink-dark); border-radius: 0; padding: 20px 24px; font-family: "JetBrains Mono", monospace; font-size: 13px; line-height: 1.7; color: var(--ink-dark); white-space: pre-wrap; max-width: 480px`. Renders raw PGN with headers in italic-serif and moves in monospace. The "copy as PGN" affordance — a study-portable format.

navigation: BOOKPLATE nav — `background: var(--page-cream); border-top: 1px solid var(--ink-dark); border-bottom: 1px solid var(--ink-dark); padding: 16px 32px; display: flex; gap: 40px; justify-content: center; font-family: "Cormorant SC"; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; font-variant-caps: small-caps`. Items in `var(--ink-dark)`. Active item: `color: var(--annotation-red); border-bottom: 1px solid var(--annotation-red); padding-bottom: 2px`. The whole bar reads as a running-head from a chess-volume.

headers: VOLUME-FRONTISPIECE header. `background: var(--page-cream); border-bottom: 3px double var(--ink-dark); padding: 40px 48px; text-align: center; position: relative`. Top: the volume label in small-caps (`ENDGAME STUDIES · VOLUME III · 1978`). Below: the title in editorial-serif at 32-38px (`*Rook and Pawn Versus Rook*`). Below: a single-line metadata in monospace (`123 STUDIES · 47 PROBLEMS · 9 MATES`). A small institutional ink-stamp in `var(--ink-stamp)` at the bottom-right corner (slightly rotated, slight bleed-halo). Optionally, a small board-diagram thumbnail (a featured position) sits to the left.

CHESS-CLOCK header (special): a horizontal element rendered as a wooden-trim analog chess clock. `background: var(--clock-frame); border-radius: 0; padding: 16px 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); display: flex; gap: 4px`. Two square dial-panels in `var(--clock-dial)` with monospace time-displays (`1:24:08`) at 24px in `var(--clock-hand)`. The active player's dial gains a subtle `box-shadow: inset 0 0 0 2px var(--annotation-red)` and a thin red second-hand sweep.

footers: study-book footer band. `background: var(--page-cream); border-top: 1px solid var(--rule-hairline); padding: 24px 36px; font-family: "EB Garamond", serif; font-size: 12px; color: var(--ink-faint); line-height: 1.7; font-style: italic`. Format: `*Vol. III, p. xiv. ENDGAME STUDIES — published by the Bibliographic Press, 1978. ISBN 0-947-12-345.*` Page numbers in small-caps Roman numerals or lining numerals at the right edge.

lists: MOVE-LIST format — described above in the move-list card. Each item: monospace move-number, monospace white-move, monospace black-move, monospace evaluation. For non-move lists (studies, opening lines, problems): each item is a single line, serif body, with a monospace prefix (`§1`, `§2`) or a small bullet-glyph (`•`, `▪`). Hairline rules between items. Active row treatment as in cards.

tables: ANALYSIS table — `border-top: 1px solid var(--ink-dark); border-bottom: 1px solid var(--ink-dark); font-family: "JetBrains Mono", monospace; font-size: 13px; border-collapse: collapse`. Header row: small-caps serif `font-family: "Cormorant SC"; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; padding: 10px 14px; border-bottom: 1px solid var(--ink-dark); color: var(--ink-mid)`. Body cells: `padding: 10px 14px; border-bottom: 1px solid var(--rule-hairline)`. Tabular numerals via `font-feature-settings: "tnum"`. Evaluation cells colored: green if positive, red if negative, brown if equal.

dividers: never a colored bar. Options: (a) `1px solid var(--rule-hairline)` hairline rule for sub-section breaks, (b) `2px double var(--rule-hairline)` engraved-double for major sections, (c) a centered serif ornament — `❦`, `§`, `❧`, or `* * *` — flanked by hairline rules for decorative breaks. (d) For move-list breaks (a new move-number page break): a thin `1px solid var(--ink-dark)` rule with the move-number label centered above in small-caps.

modals / overlays: ANALYSIS-NOTE modal — `background: var(--page-cream); border: 1px solid var(--ink-dark); border-radius: 0; padding: 40px 48px; box-shadow: 0 24px 64px var(--press-bleed); max-width: 520px; position: relative`. Header: `3px double var(--ink-dark)` top-rule. Title in editorial serif at 22px. Body in serif at 15px. A small position-thumbnail (the board state being discussed) sits in the top-right at 80x80px. Close action: small-caps "DISMISS" link at top-right. Backdrop: `background: rgba(26, 24, 20, 0.7); backdrop-filter: blur(3px)` — the room behind dims.

badges / tags: hairline-bordered editorial tags. Status: `background: transparent; color: var(--ink-dark); border-top: 1px solid var(--ink-dark); border-bottom: 1px solid var(--ink-dark); border-radius: 0; padding: 2px 8px; font-family: "Cormorant SC"; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; font-variant-caps: small-caps`. Variants: WINNING in `var(--evaluation-positive)` with green rules; LOSING in `var(--evaluation-negative)` with red rules; DRAWN in `var(--ink-mid)` with neutral rules; UNSOLVED in `var(--ink-faint)`; MATE IN N — uses notation-style monospace `M3`, `M5`, `M11` with red rules. Annotation glyph badges (!!, ?, !?): monospace, single character, in annotation-red.

**signature element — the chess board diagram**: an 8x8 grid container rendered with CSS. Light squares `var(--board-light)`, dark squares `var(--board-dark)`, alternating across rows and columns. Coordinate strips on left and bottom edges in monospace `var(--coordinate-faint)`. A 3px `var(--board-frame)` outer border with subtle inner shadow. Pieces are unicode glyphs (♔♕♖♗♘♙♚♛♜♝♞♟). Active/move-target squares can be highlighted with `box-shadow: inset 0 0 0 3px var(--annotation-red)` (the critical-move indicator). Available-move squares show a small dot at center (`background-image: radial-gradient(circle, var(--annotation-red) 4px, transparent 5px)`). The board IS the signature visual.

**signature element — the move annotation glyph**: a small inline indicator beside any move. `!` (good) and `!!` (brilliant) render in `var(--evaluation-positive)` and `var(--annotation-red)` respectively. `?` (dubious) and `??` (blunder) in `var(--ink-mid)` and `var(--annotation-red)`. `!?` (interesting) and `?!` (questionable) in `var(--ink-mid)`. Used inline within move lists. The glyph IS the analytical voice.

**signature element — the evaluation gauge**: a horizontal bar showing the current position's evaluation. `width: 200px; height: 6px; background: var(--rule-hairline); border-radius: 0; position: relative; display: flex; justify-content: center`. A vertical center-line in `var(--ink-dark)` marks the equality threshold. A `var(--evaluation-positive)` or `var(--evaluation-negative)` bar fills from center toward the side of the advantage — width proportional to the centipawn evaluation. Above the gauge: the monospace evaluation number (`+1.40`, `-2.10`, `0.00`, `+M5`).

**signature element — the engraved double-rule**: section divisions get `2px double var(--ink-dark)` rules — top and bottom — to bracket major content. The mark of a 19th-century printed page applied to chess-book typography.

**signature element — the bookplate stamp**: featured study pages get a small ink-stamp impression in the bottom-right or top-right. `background: var(--ink-stamp); color: var(--page-cream); padding: 6px 14px; border: 1px solid var(--ink-stamp); font-family: "Cormorant SC"; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; font-variant-caps: small-caps; box-shadow: 0 0 0 1px rgba(31, 42, 74, 0.3); transform: rotate(-1.5deg)`. The library bookplate impression — "EX LIBRIS — INSTITUTE OF CHESS STUDIES."

**interaction language**

hover: refined, restrained. Links and small-caps buttons: `letter-spacing: 0.16em` (slight tightening from default 0.14em); `border-color: var(--annotation-red)` for primary actions or `var(--ink-dark)` for secondary; `transition: all 0.32s cubic-bezier(0.2, 0.6, 0.2, 1)`. Cards lift `transform: translateY(-2px); box-shadow: 0 12px 32px var(--press-bleed); transition: all 0.5s cubic-bezier(0.2, 0.6, 0.2, 1)`. Board squares on hover (during move selection): `box-shadow: inset 0 0 0 3px var(--annotation-red); cursor: pointer`. The critical-square indicator engaged.

active / pressed: discreet acknowledgment. `transform: translateY(0); box-shadow: 0 1px 8px var(--press-bleed); transition: all 0.16s ease`. For board squares: a brief inversion of the square color over 0.1s, then settled.

focus: hairline rule frames the element. `outline: 1px solid var(--ink-dark); outline-offset: 4px`. For inputs: `border-bottom-color: var(--ink-dark)`, plus a tiny annotation-glyph (`▸`) appears in the left margin. Quiet, editorial.

selected: small-caps `(SELECTED)` label appears in annotation-red at the top-right corner, plus the element gains `box-shadow: inset 0 0 0 1px var(--annotation-red); background: rgba(139, 26, 26, 0.04)`. For move-list rows: `background: var(--page-cream-shadow); border-left: 2px solid var(--annotation-red); padding-left: 14px`. For board squares: critical-move red indicator.

disabled: `opacity: 0.4; cursor: not-allowed; filter: grayscale(0.6) sepia(0.1)`. Fades like sun-bleached ink. No strikethrough — fading is the disabled signal.

drag: piece-on-board feel. `transform: scale(1.08); box-shadow: 0 16px 32px rgba(0,0,0,0.4); cursor: grabbing; z-index: 999`. For chess pieces specifically: the piece scales 110% and gains a subtle drop-shadow, and target squares illuminate with `box-shadow: inset 0 0 0 3px var(--annotation-red)`. The original square dims to `filter: brightness(0.92)`.

**motion & feedback**

transitions: deliberate and unhurried — `transition: all 0.32s cubic-bezier(0.2, 0.6, 0.2, 1)`. Editorial-press pace. No springs, no bounces. The pace of a grandmaster's hand reaching for a piece, considering, then placing it.

**keyframes**:

```css
@keyframes pieceMove {
  0%   { transform: translate(0, 0); }
  50%  { transform: translate(var(--move-x), var(--move-y)) scale(1.04); box-shadow: 0 8px 16px rgba(0,0,0,0.3); }
  100% { transform: translate(var(--move-x), var(--move-y)); box-shadow: none; }
}
/* a piece slides from one square to another, slight lift mid-motion; 0.4s cubic-bezier(0.4, 0.0, 0.2, 1) */

@keyframes inkSet {
  0%   { opacity: 0; filter: blur(0.5px); transform: translateY(2px); }
  100% { opacity: 1; filter: blur(0); transform: translateY(0); }
}
/* text fades in like press-ink setting on paper; 0.5s ease-out */

@keyframes stampPress {
  0%   { opacity: 0; transform: scale(1.3) rotate(varies + 5deg); }
  60%  { opacity: 1; transform: scale(0.95) rotate(varies - 0.5deg); }
  100% { opacity: 1; transform: scale(1) rotate(varies); }
}
/* the bookplate stamp impresses onto the page; 0.4s cubic-bezier(0.34, 1.2, 0.64, 1) */

@keyframes clockTick {
  0%, 100% { transform: rotate(0); }
  50%      { transform: rotate(6deg); }
}
/* the chess-clock second hand discreet pulse; 1s linear */

@keyframes evaluationFill {
  0%   { width: 0%; }
  100% { width: var(--eval-percent); }
}
/* the evaluation gauge fills to the new evaluation level; 0.6s cubic-bezier(0.2, 0.6, 0.2, 1) */
```

loading: a chess piece glyph (♘) appears centered with a slow rotation (`animation: spin 2s linear infinite`). Below in small-caps serif italic: `*Computing line — depth 24...*` Plus a chess-clock counts up in monospace `0:00:08`. No spinners. The loading state is mid-analysis.

success: a bookplate stamp lands via `stampPress` keyframe — small-caps "ANALYZED" in `var(--evaluation-positive)` with a 3px green rule above and below. A monospace evaluation appears below (`+1.40 — STUDY COMPLETE`). For a mate: the stamp reads "CHECKMATE" in `var(--annotation-red)` and the affected square gains a small `!!` annotation glyph.

error: a small-caps "ILLEGAL MOVE" or "INVALID NOTATION" label in `var(--annotation-red)` appears below the affected field. The input gets `border-bottom-color: var(--annotation-red); background: rgba(139, 26, 26, 0.04)`. For board moves: the attempted move briefly highlights then snaps back. A discreet italic-serif explanation follows (`*The bishop cannot leap.*`). No shake, no flash.

page enter: pages fade in via `inkSet` keyframe — staggered 100-150ms in document order. Board diagrams render first (with pieces appearing via `inkSet` one-by-one 30-50ms apart). Move lists fill in tabular row-by-row. Stamps and decorations appear last via `stampPress`. The whole choreography takes 1.4-1.8s — page-by-page, study-by-study.

**atmosphere**

background: `var(--page-cream)` flat with a very subtle paper-grain texture overlay at `opacity: 0.025` — the wove-paper texture only visible at close range.

press-bleed halo: hero elements (board diagrams, study cards) have a slight `box-shadow: 0 6px 20px var(--press-bleed)` — the depth of letterpress ink slightly impressed into thick paper.

vignette: `box-shadow: inset 0 0 120px rgba(217, 207, 178, 0.5)` on the viewport — page corners are warmer-dim than center, where the desk lamp is.

decorative chess-piece glyph (atmospheric): a single large chess-piece unicode glyph (a knight ♘ or king ♔) at very low opacity (0.05-0.08) drifts off-center as a background watermark. Suggests "this is about chess" without crowding the page.

paper-fold accent: optional vertical crease line down the page center at `opacity: 0.3` — a `linear-gradient(90deg, transparent 49.7%, var(--page-margin) 49.8%, var(--page-margin) 50.2%, transparent 50.3%)` — the spine-fold of a bound study-book opened to a two-page spread.

hairline grid (decorative): an extremely faint horizontal hairline pattern at every 80-120px in `var(--rule-hairline)` at `opacity: 0.3` on background sections — suggests an underlying graph-paper analysis sheet.

scrollbar: `width: 8px; track: var(--page-cream-shadow); thumb: var(--ink-dark); thumb:hover: var(--annotation-red)`. Discreet press-black.

ambient feel: a Sunday-afternoon study session. The 1978 edition of Endgame Studies, Vol. III is open to page xiv. A chess clock ticks on the corner of the desk. A folded analysis sheet covered in pencil notation sits beside the book. The afternoon light from the west window falls across the cream pages. Every move on every page has been annotated, every position has been evaluated, every problem has been solved (or marked unsolved, with a small `?`). This is concentration.

**editorial voice**

precise, evaluative, scholarly. The voice of a 2400-rated correspondence player annotating studies for publication. Period-terminated, italic-serif for evaluations, small-caps for institutional labels. Never exclamation marks (except as annotation glyphs `!`, `!!`).

button labels: `*Analyze*`, `*Study This Position*`, `*Open Volume*`, `*Next Move*`, `*Take Back*`, `*Reset to Mainline*`, `*Annotate*`, `*Export PGN*`, `*Solve*`, `*Compare Variations*`, `*Resign*`, `*Offer Draw*`. Italic-serif title-case, or small-caps for institutional actions (`BROWSE STUDIES`, `OPEN OPENING REFERENCE`).

headings: editorial-serif for study titles. `*Rook and Pawn Versus Rook*`, `*The Lucena Position*`, `*Knight Endgames — A Theoretical Survey*`, `*Mate in Three: A Composition by Loyd*`, `*Pawn Promotion Patterns*`. Italic-serif. Title case. Often subtitled with a monospace metadata line (`STUDY 47 · WHITE TO MOVE · MATE IN 5`).

metadata: small-caps + monospace mix. `STUDY 47 · WHITE TO MOVE · MATE IN 5`, `ELO 2400 · DEPTH 28 · 12 PLY`, `OPENING: SICILIAN NAJDORF`, `BOARD POSITION: 7K/8/8/8/8/8/PPP5/4R3 W - - 0 1` (FEN strings rendered in monospace). Dates: small-caps Roman (`MCMLXXVIII`) or short-form (`1978`).

placeholders: italic prompts in dim ink. `*Enter move in algebraic notation...*`, `*Position FEN...*`, `*Search studies, openings, problems...*`, `*Your evaluation...*`. Italic-serif. Always with ellipsis.

empty states: scholarly restraint. `*No studies match your criteria.*`, `*The board is empty — place pieces to begin.*`, `*No moves recorded — start the line.*`, `*This variation is unanalyzed.*`. Italic-serif. Period-terminated. Never apologetic.

error messages: discreet and precise. `*Illegal move — the bishop cannot leap.*`, `*Invalid notation — see PGN reference.*`, `*This position cannot be analyzed.*`, `*Move ambiguous — disambiguate (e.g., Nbd2 vs. Nfd2).*`, `*King would be in check — reconsider.*`. Always italic-serif, always with a corrective hint, always specific.

success messages: spare and definitive. `*Move played.*`, `*Study analyzed — see evaluation.*`, `*Checkmate.*`, `*Position saved.*`, `*Variation appended.*`, `*Drawn by repetition.*`. Single word or short phrase. Italic-serif. Period-terminated.

confirmation prompts: `*Resign this game?*`, `*Accept draw offer?*`, `*Reset to starting position?*`, `*Delete this annotation?*`. Italic-serif. Never demanding.

evaluation phrasing (italic body): `*White has a small advantage.*`, `*Black's only move.*`, `*This loses to a known refutation.*`, `*A theoretical novelty.*`, `*The natural move, but stronger is Nf3.*`, `*Equal — the game is balanced.*`, `*White is winning.*`, `*Mate is forced.*`. Always italic.

**cursor & selection**

cursor: `cursor: default` globally. Interactive: `cursor: pointer`. Inputs: `cursor: text`. Chess pieces: `cursor: grab` → `cursor: grabbing`. Board squares (during piece selection): `cursor: pointer`. Custom cursor option: a small chess-knight glyph `♘` in `var(--ink-dark)`.

text selection: `::selection { background: var(--annotation-red-bleed); color: var(--ink-dark); }` — a faint critical-move red wash. The body type remains in press-ink dark throughout.

**when to reach for this genome**

Use `chess_endgame.algebraic` when the prompt is explicitly chess-centered: endgame studies, board-position analysis, mate-in-N puzzles, PGN/FEN explorers, opening references, tournament prep, chess clocks, correspondence play, grandmaster annotation, problem composition, move trees, engine-evaluation views, algebraic notation input, or a playable/studyable board where every piece, square, line, and evaluation matters.

Reach for it when the user wants the interface to feel like a printed chess study volume rather than a casual game screen: cream paper, oak two-tone board diagrams, figurine piece glyphs, aligned move lists, FIDE/correspondence metadata, chess-clock pacing, bookplate stamps, small-caps headers, and scholarly italic annotations.

Do not use it just because a prompt mentions books, paper, study, or rules; use `manuscript_press.lit` for literary publishing and reading-room pages. Do not use it for classroom diagrams, math lessons, or general teaching boards; use `chalkboard_lesson.edu`. Do not use it for occult card layouts or symbolic spreads; use `tarot_spread.arcana`. Do not use it for library catalogs, Dewey cards, or archival search; use `card_catalog.dewey`. Do not use it for auction catalogs, provenance, rare-object sales, or saleroom lots; use `auction_lot.gavel`. Do not use it for archaeological scholarship, marble antiquities, or classical museum catalogs; use `amphitheater_marble.classical`.

It is strongest when chess is the product model, not merely the metaphor: if the generated UI cannot plausibly render a board diagram, legal move, notation line, evaluation, clock, or problem study, choose another genome.

**anti-patterns — this genome NEVER:**

1. uses sans-serif typography for body or display text. The genre is press-serif (`Cormorant`, `Caslon`, `EB Garamond`) and monospace (`JetBrains Mono`, `Iosevka`). Inter, Helvetica, and any modern sans-serif belong to a different era of chess publishing. The study-book is a printed volume, not a web app.
2. uses border-radius above 2px on UI surfaces. The board is rectangular; the page is rectangular; the diagram-frame is rectangular. Pill shapes, large rounding, and organic curves contradict the press-printed-volume geometry entirely.
3. uses bright saturated colors (neon green, electric blue, hot pink). The palette is page-cream + press-ink + board-oak + the rare annotation-red and evaluation-green/red. Saturation belongs only to the rare critical-move red and the bookplate-blue stamp.
4. uses chunky filled buttons or marketing-CTA blocks. Primary actions are small-caps hairline-bracketed labels; secondary actions are notation-style monospace `[ Nf3 ]` brackets. The rare filled element is an evaluation-tag in green or red. The genome prefers typographic emphasis over fill-color.
5. uses fast snappy spring-bounce animations. Motion is press-pace — 0.32-0.5s cubic-bezier(0.2, 0.6, 0.2, 1). The grandmaster considers, then moves; nothing snaps. Spring-bounce reads as a children's app; this genome is a 1978 published volume.
6. uses casual, friendly, marketing-style voice. The voice is scholarly editor — italic-serif, period-terminated, em-dashed, never exclamation-marked (except for annotation glyphs). "*Move played.*" never "Move made!". "*This loses to a known refutation.*" never "Oops!".
7. uses dropshadows with high blur or strong color. Shadows are press-bleed soft — `0 4-12px var(--press-bleed)` warm-paper softness. Hard offset shadows belong to retail/zine genomes; here, depth is the slight letterpress impression of ink-on-paper.
8. uses icons or pictographs outside the chess-piece vocabulary. Visual language is HAIRLINE RULES, SMALL CAPS, ITALIC SERIF, MONOSPACE NOTATION, and UNICODE CHESS GLYPHS. Material Icons and Font Awesome belong to other vocabularies; here, every symbol is a piece, a coordinate, or a typographic ornament.
9. uses dark-mode backgrounds as the default. The substrate is page-cream; ink is dark-on-cream; the entire identity rests on warm-paper. Dark-mode interpretations would obliterate the press-printed volume identity. Optional: a "night-study" variant could darken background to `--board-dark-edge`, but this is an exception, not a default.
10. uses gradients or shading on UI elements. The page is FLAT — press-ink on cream paper. The board is two-tone, not gradient. Pieces are solid color, not shaded. Depth comes only from soft press-bleed shadows beneath cards and the slight inset of a recessed board-frame. Modern gradient-fill UI contradicts the press-printed identity.
