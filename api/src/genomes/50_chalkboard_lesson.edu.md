---
id: "50"
name: chalkboard_lesson.edu
keywords:
  - chalkboard
  - classroom
  - chalk
  - education
  - slate
  - lesson
  - teacher
  - blackboard
  - instruction
  - diagram
---

### genome 50: `chalkboard_lesson.edu`

> identity: classroom chalkboard teaching interface. dark green slate surface, chalk-white text, colored chalk accents, hand-drawn diagram energy. the UI is a teacher's blackboard — math proofs, biology diagrams, history timelines, all rendered as interactive interface. wooden frame border, chalk dust texture, eraser smudge zones. warm instructional authority with hand-placed imperfection. everything looks written in chalk on slate.

**surface**

colors:
```
--slate: #2D4A3E;                      /* dark green chalkboard — primary background, the board itself */
--chalk: #E8E4D8;                      /* chalk white — primary text, default writing color */
--chalk-yellow: #E8D44D;              /* yellow chalk — highlights, warnings, key terms */
--chalk-pink: #E88B9E;               /* pink chalk — accents, emphasis, corrections */
--chalk-blue: #7EB8DA;               /* blue chalk — links, diagrams, secondary info */
--chalk-orange: #E8A84D;             /* orange chalk — active states, notifications, warmth */
--frame: #5C4033;                     /* wooden frame brown — outer border, nav bar, structural elements */
--frame-light: #7A5C45;              /* lighter wood — hover states on frame elements, secondary wood */
--slate-light: #3A5F50;              /* lighter slate — eraser smudge zones, hover backgrounds, subtle panels */
--slate-dark: #1E352B;               /* deeper slate — contrast panels, table headers, inset areas */
--chalk-muted: rgba(232, 228, 216, 0.45);  /* faded chalk — secondary text, metadata, ghosted labels */
--chalk-faint: rgba(232, 228, 216, 0.12);  /* chalk dust — borders, dividers, subtle rules */
```

typography:
- display typeface: `"Caveat", cursive` — simulates chalk handwriting for headings, labels, and display text. weight 400-700. slightly irregular sizing is intentional — elements may carry `transform: rotate(-1deg)` or `rotate(1deg)` to feel hand-placed on the board.
- alternate display: `"Patrick Hand", cursive` — acceptable substitute for chalk writing. same weight range.
- data typeface: `"JetBrains Mono", monospace` — structured data, code blocks, formulas, proofs. weight 400. the monospace is for mathematical and technical precision — equations, coordinates, data tables.
- hero / display: `font-family: "Caveat", cursive; font-size: 44px; line-height: 1.15; font-weight: 700; color: var(--chalk)`.
- section titles: `font-family: "Caveat", cursive; font-size: 30px; line-height: 1.2; font-weight: 600; color: var(--chalk)`.
- card titles: `font-family: "Caveat", cursive; font-size: 23px; line-height: 1.25; font-weight: 600; color: var(--chalk-yellow)`.
- body text: `font-family: "Caveat", cursive; font-size: 18px; line-height: 1.6; font-weight: 400; color: var(--chalk)`.
- labels/metadata: `font-family: "Caveat", cursive; font-size: 14px; line-height: 1.4; font-weight: 400; color: var(--chalk-muted)`.
- structured data: `font-family: "JetBrains Mono", monospace; font-size: 13px; line-height: 1.5; font-weight: 400; color: var(--chalk)`.
- formulas/proofs: `font-family: "JetBrains Mono", monospace; font-size: 15px; font-weight: 400; color: var(--chalk-yellow)`.
- the defining split: Caveat carries the teacher's hand — warm, personal, written. JetBrains Mono carries precision — formulas, data, proofs. body text is in Caveat (unlike ceramic_workshop which uses DM Sans for body), because on a chalkboard everything is handwritten.

borders:
- card panels: `border: 2px dashed var(--chalk-faint); border-radius: 0px` — dashed chalk outlines, sharp rectangular corners. chalkboards are rectangular, not rounded.
- outer viewport frame: `border: 8px solid var(--frame); background: linear-gradient(135deg, var(--frame) 0%, var(--frame-light) 50%, var(--frame) 100%)` — wooden frame border with subtle wood-grain gradient on the frame only.
- emphasis underlines: `text-decoration: underline; text-decoration-style: wavy; text-decoration-color: var(--chalk-yellow); text-underline-offset: 4px` — wavy chalk underline for key terms.
- divider lines: `border-top: 2px dashed var(--chalk-faint)` — dashed like chalk drawn with a ruler.
- no border-radius anywhere — 0px on all containers, cards, inputs. chalkboard geometry is strictly rectangular.

spacing:
- page horizontal padding: `28px`.
- card internal padding: `24px`.
- hero padding: `40px 28px`.
- section gap: `40px` between board sections.
- card gap: `24px` in grid layouts.
- generous spacing between sections — each "board section" is like a panel on a long classroom chalkboard, with clear ruled-off zones.

**color distribution**

- 40% slate (`--slate`) — the board surface, primary background, the ground of everything
- 20% chalk (`--chalk`) — primary text, all default writing
- 10% chalk-yellow (`--chalk-yellow`) — highlights, key terms, active accents, card titles
- 8% frame (`--frame`) — outer border, navigation bar, structural wood elements
- 7% slate-light (`--slate-light`) — eraser smudge zones, hover backgrounds, subtle card backgrounds
- 5% chalk-blue (`--chalk-blue`) — links, diagram elements, informational accents
- 4% chalk-pink (`--chalk-pink`) — emphasis, corrections, error states, important callouts
- 3% chalk-orange (`--chalk-orange`) — notifications, pressed states, warm action accents
- 2% slate-dark (`--slate-dark`) — inset panels, table headers, deep contrast areas
- 1% chalk-muted (`--chalk-muted`) — ghosted text, secondary metadata

**component patterns**

buttons:
- primary: `background: transparent; color: var(--chalk-yellow); border: 2px solid var(--chalk-yellow); border-radius: 0px; padding: 14px 24px; font-family: "Caveat", cursive; font-size: 18px; font-weight: 600; text-transform: none`.
- secondary: `background: transparent; color: var(--chalk); border: 2px dashed var(--chalk-faint); border-radius: 0px; padding: 12px 20px; font-family: "Caveat", cursive; font-size: 17px; font-weight: 400`.
- ghost: `background: none; border: none; color: var(--chalk-blue); font-family: "Caveat", cursive; font-size: 17px; font-weight: 400; text-decoration: underline; text-decoration-style: wavy; text-underline-offset: 3px`.
- action: `background: var(--chalk-orange); color: var(--slate-dark); border: none; border-radius: 0px; padding: 14px 24px; font-family: "Caveat", cursive; font-size: 18px; font-weight: 700` — filled chalk-orange for high-priority actions (like "Submit Quiz").
- all buttons feel like circled or boxed chalk annotations on the board.

inputs:
- `background: var(--slate-light); border: 2px dashed var(--chalk-faint); border-radius: 0px; padding: 12px 16px; font-family: "Caveat", cursive; font-size: 17px; color: var(--chalk)`.
- focus: `border-color: var(--chalk-yellow); border-style: solid; outline: none; box-shadow: 0 0 8px rgba(232, 212, 77, 0.15)` — yellow chalk glow on focus.
- label above: `font-family: "Caveat", cursive; font-size: 16px; font-weight: 600; color: var(--chalk-yellow); margin-bottom: 6px`.
- placeholder: `color: var(--chalk-muted); font-style: normal` — faint chalk, like ghosted writing.

cards/panels:
- board section card: `background: var(--slate); border: 2px dashed var(--chalk-faint); border-radius: 0px; padding: 24px; position: relative` — a ruled-off zone on the board.
- highlighted card: `background: var(--slate-light); border: 2px solid var(--chalk-yellow); border-radius: 0px; padding: 24px` — like a boxed theorem or key concept.
- hero card: `background: var(--slate-dark); border: 2px solid var(--chalk); border-radius: 0px; padding: 40px 28px; color: var(--chalk)` — deep slate for the main announcement board.
- lesson card: left accent bar `3px solid var(--chalk-yellow)` for active lessons, `3px solid var(--chalk-blue)` for reference, `3px solid var(--chalk-pink)` for homework. `border-left: 3px solid; border-radius: 0px; padding: 20px 24px`.
- cards sit on the board like chalk-drawn boxes — rectangular, dashed borders, no shadows, no elevation.

navigation:
- top bar: `background: var(--frame); padding: 14px 24px; border-bottom: 3px solid var(--frame-light); display: flex; justify-content: space-between; align-items: center` — the wooden chalk tray / frame top.
- nav title: `font-family: "Caveat", cursive; font-size: 26px; font-weight: 700; color: var(--chalk)`.
- tab navigation: `display: flex; gap: 4px; padding: 6px; background: var(--slate-dark); border-radius: 0px`.
- tab item: `padding: 10px 18px; border-radius: 0px; font-family: "Caveat", cursive; font-size: 16px; font-weight: 400; color: var(--chalk-muted); border: 1px dashed transparent`.
- active tab: `border: 1px dashed var(--chalk); color: var(--chalk); background: var(--slate-light)` — the currently selected subject on the board.

headers:
- page title: `font-family: "Caveat", cursive; font-size: 40px; font-weight: 700; color: var(--chalk); padding: 28px 28px 8px; text-decoration: underline; text-decoration-style: wavy; text-decoration-color: var(--chalk-yellow); text-underline-offset: 6px`.
- section header: `font-family: "Caveat", cursive; font-size: 26px; font-weight: 600; color: var(--chalk-yellow); padding: 32px 0 12px`.
- sub-header: `font-family: "Caveat", cursive; font-size: 16px; font-weight: 400; color: var(--chalk-muted); letter-spacing: 0.02em`.

footers:
- chalk tray footer: `padding: 32px 24px; text-align: center; border-top: 2px dashed var(--chalk-faint); background: var(--frame)`.
- footer text: `font-family: "Caveat", cursive; font-size: 18px; color: var(--chalk-muted)` — a scribbled note at the bottom of the board.
- utility links: `font-family: "JetBrains Mono", monospace; font-size: 11px; color: var(--chalk-muted); letter-spacing: 0.04em`.

lists:
- lesson list: `display: grid; grid-template-columns: 1fr; gap: 16px` on mobile, `grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))` on wider screens.
- list items as board-section cards — each item is a chalk-boxed panel on the board.
- numbered lists use large Caveat numerals in chalk-yellow: `font-family: "Caveat", cursive; font-size: 28px; font-weight: 700; color: var(--chalk-yellow); margin-right: 12px`.
- bullet lists use chalk-drawn bullet marks: `list-style: disc; color: var(--chalk-pink)`.

tables:
- `border-collapse: collapse; border: 2px solid var(--chalk-faint); border-radius: 0px; background: var(--slate)`.
- header: `background: var(--slate-dark); color: var(--chalk-yellow); font-family: "Caveat", cursive; font-size: 16px; font-weight: 600; padding: 12px 16px; border-bottom: 2px solid var(--chalk-faint)`.
- cells: `padding: 12px 16px; border-bottom: 1px dashed var(--chalk-faint); font-family: "Caveat", cursive; font-size: 16px; color: var(--chalk)`.
- numeric cells: `font-family: "JetBrains Mono", monospace; font-size: 13px; color: var(--chalk-blue)` — data and numbers get monospace treatment.

dividers:
- primary: `border-top: 2px dashed var(--chalk-faint)`.
- decorative: hand-drawn chalk line — a slightly wavy SVG stroke: `height: 4px; opacity: 0.2; background: url("data:image/svg+xml,...")` with a chalk-textured sine wave path in chalk-white.
- section break: `40px` vertical padding — like the teacher clearing space on the board for the next topic.

modals/overlays:
- `background: var(--slate); border: 3px solid var(--chalk); border-radius: 0px; padding: 32px 28px; box-shadow: 0 0 40px rgba(0,0,0,0.5)` — a clean section of the board pulled forward.
- backdrop: `background: rgba(30, 53, 43, 0.75); backdrop-filter: blur(2px)` — slate darkened, chalk dust haze.
- modal title: `font-family: "Caveat", cursive; font-size: 28px; font-weight: 700; color: var(--chalk-yellow); margin-bottom: 16px; text-decoration: underline; text-underline-offset: 4px`.
- close button: `24px` square, `border: 2px solid var(--chalk-faint); border-radius: 0px; color: var(--chalk)` — rectangular, not circular.

badges/tags:
- subject tag: `border: 1.5px solid; border-radius: 0px; padding: 4px 10px; font-family: "Caveat", cursive; font-size: 13px; font-weight: 600`.
- subject colors: `border-color: var(--chalk-yellow); color: var(--chalk-yellow)` for math, `border-color: var(--chalk-blue); color: var(--chalk-blue)` for science, `border-color: var(--chalk-pink); color: var(--chalk-pink)` for humanities, `border-color: var(--chalk-orange); color: var(--chalk-orange)` for assignments.
- grade badge: `background: var(--chalk); color: var(--slate-dark); font-family: "Caveat", cursive; font-size: 18px; font-weight: 700; padding: 4px 12px; border-radius: 0px; transform: rotate(-2deg)` — like a grade circled by the teacher.

diagram elements:
- chalk-drawn boxes: `border: 2px solid var(--chalk); border-radius: 0px; padding: 12px; background: transparent`.
- arrows drawn with SVG: `stroke: var(--chalk); stroke-width: 2; stroke-dasharray: 6 4; fill: none` — dashed chalk arrows connecting concepts.
- circles for Venn diagrams or emphasis: `border: 2px solid var(--chalk-pink); border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center`.
- annotation callouts: small rotated text `transform: rotate(-3deg); font-family: "Caveat", cursive; font-size: 14px; color: var(--chalk-pink)` — marginal notes from the teacher.

**interaction language**

hover:
- buttons: `background: var(--slate-light); border-style: solid; transition: all 0.2s ease`. chalk border solidifies on hover.
- cards: `background: var(--slate-light); transition: background 0.2s ease` — a subtle brightening, like fresh chalk dust on that area.
- links: `color: var(--chalk-yellow); transition: color 0.2s ease`.

active/pressed:
- buttons: `transform: scale(0.98); transition: transform 0.1s ease` — pressed into the board.
- cards: `background: var(--slate); transition: background 0.15s ease`.

focus:
- `outline: 2px solid var(--chalk-yellow); outline-offset: 3px; border-radius: 0px`.

selected:
- card: `border: 2px solid var(--chalk-yellow)` — yellow chalk box drawn around it.
- checkbox: filled square `background: var(--chalk-yellow); border-radius: 0px` — a chalk checkmark in a box.

disabled:
- `opacity: 0.25; pointer-events: none` — faded chalk, nearly erased.

drag:
- `outline: 2px dashed var(--chalk-blue); cursor: grab`. while dragging: `cursor: grabbing; opacity: 0.7; transform: rotate(1deg)` — like moving a magnet on the board.

**motion & feedback**

transitions:
- default transitions: `0.2s ease` — chalk writing is quick and decisive, not slow. the teacher writes with confidence.
- page transitions: `0.3s ease` for route changes.
- card appearance: `opacity 0.3s ease, transform 0.3s ease` — elements appear as if written onto the board.
- NO bounce, NO spring — chalk snaps. motion is quick, light, crisp.
- the genome moves like chalk on slate: quick strokes, decisive placement.

loading:
- "write-on" animation: text content appears character-by-character from left to right. `@keyframes writeon { from { width: 0 } to { width: 100% } }` with `overflow: hidden; white-space: nowrap; animation: writeon 1.5s steps(30) forwards`.
- below: `font-family: "Caveat", cursive; font-size: 20px; color: var(--chalk-muted)` — text like `Writing...` or `Drawing diagram...`.

success:
- element flashes chalk-yellow briefly: `color: var(--chalk-yellow); transition: color 0.3s ease`, then returns to chalk.
- text: `Correct!`, `Well done!`, `Saved to board`, `Lesson recorded` — teacher encouragement.
- a subtle `transform: scale(1.02)` over `0.2s` — the teacher circling the right answer.

error:
- `border-color: var(--chalk-pink); color: var(--chalk-pink)` — pink chalk correction marks.
- text: `Not quite — try again` / `Check your work` / `Couldn't save — try again` — teacher feedback, warm, corrective, never harsh.

erase:
- elements being removed: `opacity: 0; filter: blur(3px); transition: all 0.4s ease` — fading with blur, like chalk being wiped off the board with an eraser.

**atmosphere**

background:
- body: `background-color: var(--slate)` — dark green chalkboard surface.
- chalk dust texture overlay: `background-image: url("data:image/svg+xml,...")` — a very faint noise pattern at `opacity: 0.03` simulating the micro-texture of slate and chalk dust residue.
- outer frame: the entire viewport is wrapped in `border: 8px solid var(--frame)` with a subtle wood-grain linear-gradient on the frame border only (not on content surfaces).
- the darkness is the foundation — this is a dark-mode genome by nature. the board is the ground.

ambient details:
- eraser smudge zones: rectangular patches of `background: var(--slate-light)` at `opacity: 0.4` placed behind certain sections — lighter areas where the board has been wiped, with slight blur `filter: blur(8px)`.
- chalk dust particles near bottom edge: small dots `2-4px` in chalk-white at `opacity: 0.1-0.2` scattered along the bottom `60px` of sections, simulating chalk dust that falls to the tray.
- hand-placed rotation: headings and badges carry slight random rotation (`transform: rotate(-1deg)` to `rotate(2deg)`) to feel hand-written rather than typeset.
- dashed borders everywhere — the defining visual motif. all containers use dashed chalk outlines.
- wooden frame as recurring structural element — nav bar, footer, and outer border share the frame brown palette.
- diagram annotations: small rotated chalk-pink or chalk-blue notes appear as ambient margin comments.

mobile-first:
- designed for portrait mobile. cards stack vertically with `24px` gap.
- responsive grid for wider screens: `grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))`.
- all touch targets minimum `44px`.
- safe-area padding: `env(safe-area-inset-bottom)`.

**editorial voice**

button labels: `Let's begin`, `Check Answer`, `Next Lesson`, `Submit`, `Erase`, `Draw Diagram`, `See Example`, `Pop Quiz!`, `Review`, `Done`
- instructional imperatives. teacher energy — warm authority, encouragement, clear direction. sentence case.

headings: Caveat chalk-written style. teacher phrases: `Today's Lesson`, `Key Concepts`, `Remember This`, `Practice Problems`, `Proof:`, `Example:`, `Homework`, `Pop Quiz!`, `Class Notes`, `Extra Credit`.
- no uppercase headings — chalk handwriting at natural case. underline key terms with wavy decoration instead.

metadata format:
- lesson codes: `LESSON-04` — uppercase prefix, zero-padded number.
- subject labels: `Math`, `Biology`, `History`, `Physics`, `Chemistry` — capitalized, in chalk-blue.
- dates: `March 22, 2026` — full written date, as a teacher would write.
- difficulty: `Beginner`, `Intermediate`, `Advanced` — in chalk-orange.
- progress: `3 of 10 complete` / `Step 2 of 5` — instructional step format.
- formulas: `E = mc²`, `a² + b² = c²` — in JetBrains Mono, chalk-yellow.

placeholders: `Write your answer here...`, `Search lessons...`, `Add a note...`, `Type your proof...` — lowercase, ellipsis, inviting student participation.

empty states: `Nothing on the board yet` / `No lessons here — check back soon` / `This section is blank` / `The board has been erased` — spatial chalkboard metaphor, gentle. `font-family: "Caveat", cursive; font-size: 22px; color: var(--chalk-muted); text-align: center`.

error messages: `Not quite — try again` / `Couldn't save your work` / `Something went wrong — let's try once more` — teacher voice, warm correction, never blaming. no codes.

success messages: `Correct!` / `Well done!` / `Saved to the board` / `Lesson complete` / `A+ work!` — teacher encouragement, warm praise.

**cursor & selection**

- default: `cursor: default`
- interactive (buttons, links, tabs): `cursor: pointer`
- text inputs: `cursor: text`
- drag: `cursor: grab` / `cursor: grabbing`
- disabled: `cursor: not-allowed`
- `::selection { background: var(--chalk-yellow); color: var(--slate-dark); }` — yellow chalk highlight, like a teacher underlining a key term

**when to reach for this genome**

Use `chalkboard_lesson.edu` when the prompt asks for a classroom chalkboard, teacher-led lesson, tutoring interface, quiz review, math proof, science diagram, history timeline, course module, homework board, instructional dashboard, or any learning product that should look hand-written in chalk on a dark green slate.

Reach for it when the concrete cues are slate-green dark mode, chalk-white handwriting, yellow/pink/blue chalk accents, dashed chalk box outlines, wooden frame or chalk tray structure, wavy underlines, eraser smudges, simple diagrams, formula/proof blocks in monospace, and warm teacher copy such as `Check Answer`, `Next Lesson`, `Pop Quiz!`, `Saved to board`, or `Not quite - try again`.

Do not use it for cream paper notebooks, naturalist sketches, specimen records, or expedition observations; use `field_journal.expedition`. Do not use it for CAD drawings, construction documents, dimension lines, title blocks, all-uppercase drafting labels, or Prussian-blue engineering sheets; use `blueprint_draft.eng`. Do not use it for pottery studios, glaze libraries, kiln schedules, terracotta/celadon palettes, or handmade craft inventory; use `ceramic_workshop.kiln`. Do not use it for literary reading rooms, chapter pages, drop caps, folio numbers, footnotes, or all-serif manuscript interfaces; use `manuscript_press.lit`. Do not use it for calculator hardware, HP-style keypad logic, or instrument control surfaces; use `scientific_calc.hp` or `precision_instrument.met`. Do not use it for rugged maintenance manuals, warning classifications, field procedures, or olive technical documentation; use `milspec_field.tm`.

It is strongest when the interaction is teaching: draw, explain, quiz, prove, correct, review, and move through a lesson. If the prompt is about papers, manuals, blueprints, craft objects, literary pages, or hardware instruments, choose the genome whose material is native to that world.

**anti-patterns — this genome NEVER:**

1. uses rounded border-radius on containers or cards — all corners are `0px`, sharp, rectangular. chalkboards are flat rectangular surfaces. `border-radius: 0px` is mandatory on cards, inputs, buttons, modals, badges. the only exception is diagram circles (Venn diagrams, bullet points).
2. uses light or white backgrounds for page surfaces — the background is always dark green slate (`--slate`). this is a dark-mode genome. no cream, no white, no light gray page backgrounds. the board is dark.
3. uses polished sans-serif for display headings — display text is always `Caveat` or `Patrick Hand` cursive. no `DM Sans`, no `Inter`, no `Helvetica` for headings. the handwriting simulates chalk.
4. uses drop shadows or elevation on cards — chalkboard content is flat. no `box-shadow` on any element. everything is drawn on the same plane — the board surface. depth is implied by border weight and color, never shadow.
5. uses warm earth tones (terracotta, cream, brown) as primary palette — that is ceramic_workshop.kiln territory. this genome's primary palette is cool dark green slate with chalk-white. the only brown is the wooden frame. no terracotta, no ash-white, no celadon.
6. uses solid borders on general containers — borders are `dashed` by default, simulating chalk-drawn lines. solid borders are reserved for emphasis (highlighted cards, active states, the outer frame). dashed is the baseline.
7. uses slow weighted animations (0.4s+) — chalk writing is quick. transitions are `0.2s ease`, not `0.4s ease-out`. the teacher writes fast. the only slow animation is the erase blur effect at `0.4s`.
8. uses cream/paper/notebook backgrounds — that is field_journal.expedition territory. this genome is slate, not paper. no parchment, no lined paper, no cream. dark green board only.
9. uses organic clip-path wobble shapes — that is ceramic_workshop.kiln territory. this genome uses strict rectangles with dashed borders. the imperfection comes from rotation transforms and handwriting fonts, not from clip-path polygon wobble.
10. uses gradient fills on content surfaces — the board surface is flat solid slate. gradients are only permitted on the wooden frame border (simulating wood grain). no gradient backgrounds on cards, buttons, or panels.
