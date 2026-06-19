---
id: "98"
name: telegraph_office.wire
keywords:
  - telegraph
  - morse
  - wire
  - western union
  - brass
  - victorian
  - telegram
  - dot-dash
  - key
  - operator
  - cable
  - ticker
  - communication
---

### genome 98: `telegraph_office.wire`

> identity: Victorian-era telegraph and Morse communication office. Brass Morse keys on mahogany desks, paper tape readout spooling from Wheatstone receivers, electrochemical recording marks, Western Union message forms with "STOP" punctuation, cable routing diagrams. The first real-time long-distance communication technology — the original internet. A Western Union telegraph office circa 1880, with operators clicking brass keys and paper tape accumulating in coils on the floor.

**surface**

colors:
```
--mahogany: #3C1F0E;             /* dark mahogany wood desk — primary surface */
--mahogany-light: #5C3520;       /* lighter mahogany — raised panels, desktops */
--tape-cream: #F0E8D0;           /* paper tape stock — message forms, printout fields */
--tape-aged: #E0D4B0;            /* older/used tape — secondary paper surface */
--brass: #B8963E;                /* Morse key brass — primary interactive accent */
--brass-dim: rgba(184, 150, 62, 0.25); /* faint brass wash — borders, dividers */
--brass-glow: rgba(184, 150, 62, 0.4); /* brass halo — focus states, emphasis */
--ink-mark: #1A1A14;             /* telegraph ink marks — primary text on tape */
--ink-dim: #3A3A2E;              /* secondary ink — captions, metadata on tape */
--copper-wire: #B87333;          /* exposed copper wire — accent lines, conduit traces */
--form-blue: #2B4A7A;            /* Western Union form blue — headings, official text */
--form-blue-dim: rgba(43, 74, 122, 0.15); /* faint form blue wash */
--signal-green: #3B7A4A;         /* "line open" indicator — success, active states */
--signal-red: #8B2E2E;           /* "line busy/break" — error, alert states */
--insulator-amber: #C89030;      /* glass insulator amber — warnings, highlights */
--insulator-dim: rgba(200, 144, 48, 0.2); /* faint amber wash */
--room-shadow: rgba(20, 8, 2, 0.6); /* deep mahogany shadow */
--rule-ink: 1px solid rgba(26, 26, 20, 0.35); /* printed rule lines on forms */
--rule-heavy: 2px solid rgba(26, 26, 20, 0.6); /* heavy border rule on forms */
```

typography:
- telegram body text: `font-family: 'Courier Prime', 'Courier New', monospace; font-size: 0.9rem; line-height: 1.7; letter-spacing: 0.04em; text-transform: uppercase; color: var(--ink-mark);` — ALL CAPS always. every word of telegram content is uppercase without exception. this is the law of the wire.
- paper tape readout: `font-family: 'Courier Prime', monospace; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-mark); word-spacing: 0.3em;` — tighter, continuous-feed style.
- form headings and office signage: `font-family: 'Playfair Display', 'Libre Baskerville', serif; font-weight: 700; font-size: 1.2–2rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--form-blue);` — engraved office authority.
- form sub-labels: `font-family: 'Libre Baskerville', 'Georgia', serif; font-size: 0.65rem; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-dim);` — printed form field labels.
- Morse code / dot-dash display: `font-family: 'Courier Prime', monospace; font-size: 0.8rem; letter-spacing: 0.3em; color: var(--brass); font-weight: 700;` — dots and dashes rendered wide for legibility.
- metadata / timestamps / transmission headers: `font-family: 'Courier Prime', monospace; font-size: 0.65rem; color: var(--ink-dim); text-transform: uppercase; letter-spacing: 0.06em;`
- word count and charge notation: `font-family: 'Courier Prime', monospace; font-size: 0.7rem; color: var(--form-blue); text-transform: uppercase;`
- STOP punctuation is used in all telegram content as a period substitute. no full stops in message bodies. STOP is always written out. all message content runs uppercase.
- `font-variant-numeric: tabular-nums` on all numeric fields — message counts, charges, timestamps.

borders:
- form fields: `border: var(--rule-ink); border-radius: 2px;` — the minimal Victorian-precision rounding applied universally.
- panel/desk surfaces: `border: 1px solid rgba(60, 31, 14, 0.5); border-radius: 2px;` — dark mahogany framing.
- heavy section dividers on forms: `border-top: var(--rule-heavy);` — printed double-rule on official forms.
- brass-accent borders on interactive elements: `border: 1px solid var(--brass); border-radius: 2px;`
- `border-radius: 2px` is the universal value — applied to every element. minimal softening, Victorian precision. no pills, no large curves, no zero-radius sharpness.
- copper wire traces used as accent borders: `border-left: 2px solid var(--copper-wire);` on data panels.

spacing:
- page padding: `2rem 3rem` — desk surface breathing room.
- form internal padding: `1rem 1.25rem` — form field generosity, like a printed Western Union blank.
- component gaps: `1rem` — moderate. forms are structured, not packed.
- cell/field padding: `0.4rem 0.6rem`
- between message blocks: `1.5rem` — each telegram is a separate communication.
- tape readout gutters: `0.5rem` vertical between tape lines.

**color distribution**

- 40% tape cream (`--tape-cream`, `--tape-aged`) — the primary working surface. message forms, paper tape zones, field backgrounds. the office floor is covered in cream paper.
- 25% mahogany (`--mahogany`, `--mahogany-light`) — desk surfaces, structural panels, sidebar backgrounds. the wood that holds everything together.
- 15% ink mark (`--ink-mark`, `--ink-dim`) — all printed and transmitted text. dark, decisive marks.
- 12% form blue (`--form-blue`, `--form-blue-dim`) — official headings, Western Union branding, form structure. the institutional color of the wire service.
- 5% brass (`--brass`, `--brass-dim`, `--brass-glow`) — interactive accents, Morse key indicators, hardware details.
- 3% signal and copper (`--signal-green`, `--signal-red`, `--copper-wire`, `--insulator-amber`) — status indicators, live line states, alert accents.

tape cream dominates because this is an office built on paper. the mahogany grounds the room. form blue declares institutional authority. brass catches the eye for action. ink marks communicate.

**component patterns**

buttons:
- primary / send: `background: var(--form-blue); color: var(--tape-cream); border: none; border-radius: 2px; padding: 0.45rem 1.25rem; font-family: 'Courier Prime', monospace; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700;` — the official SEND action. form-blue authority.
- secondary: `background: var(--tape-cream); color: var(--form-blue); border: 1px solid var(--form-blue); border-radius: 2px; padding: 0.4rem 1.1rem; font-family: 'Courier Prime', monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em;`
- brass / hardware: `background: var(--brass); color: var(--mahogany); border: none; border-radius: 2px; padding: 0.4rem 1rem; font-family: 'Courier Prime', monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700;` — for Morse key actions, operator controls.
- ghost / cancel: `background: transparent; color: var(--ink-dim); border: var(--rule-ink); border-radius: 2px; padding: 0.35rem 0.9rem; font-family: 'Courier Prime', monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.06em;`
- Morse key button (dedicated UI element): circular brass-colored disc `width: 2.5rem; height: 2.5rem; border-radius: 50%; background: radial-gradient(circle at 35% 35%, #D4AE56 0%, var(--brass) 50%, #8B6F2A 100%); border: 2px solid #8B6F2A; cursor: pointer; box-shadow: 0 3px 8px var(--room-shadow);` — the only circular element in the genome, representing the physical key.

inputs / form fields:
- `background: var(--tape-cream); border: var(--rule-ink); border-radius: 2px; padding: 0.4rem 0.6rem; color: var(--ink-mark); font-family: 'Courier Prime', monospace; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.04em;` — typing on the form blank.
- label above field: `font-family: 'Libre Baskerville', serif; font-size: 0.6rem; color: var(--ink-dim); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 4px;` — printed field label on the form.
- focus: `border-color: var(--brass); box-shadow: 0 0 0 2px var(--brass-dim); outline: none;` — brass accent on active field.
- caret color: `var(--ink-mark)`.
- placeholder: `color: rgba(26, 26, 20, 0.3); text-transform: uppercase; font-family: 'Courier Prime', monospace;`
- multiline textarea (message body): same styling, `min-height: 6rem; resize: vertical;` — space to draft the full telegram. letter-count shown below in `0.65rem` Courier Prime.

cards / message forms:
- telegram form card: `background: var(--tape-cream); border: var(--rule-ink); border-radius: 2px; padding: 1rem 1.25rem; box-shadow: 2px 3px 8px var(--room-shadow);` — a physical form blank lying on the desk.
- form header bar (Western Union branding zone): `background: var(--form-blue); color: var(--tape-cream); padding: 0.5rem 1.25rem; border-radius: 2px 2px 0 0; font-family: 'Playfair Display', serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;` — the blue printed header strip.
- mahogany desk panel: `background: var(--mahogany-light); border: 1px solid rgba(60, 31, 14, 0.6); border-radius: 2px; padding: 1rem; box-shadow: inset 0 1px 3px var(--room-shadow);` — equipment housing, instrument panels.
- received message card: `background: var(--tape-aged); border-left: 3px solid var(--copper-wire); border-radius: 2px; padding: 0.75rem 1rem;` — incoming tape, distinguished from outgoing forms.
- no large drop shadows. desk surface shadows only (`2–3px` offset, dark `var(--room-shadow)`).

navigation:
- top office bar: `background: var(--mahogany); border-bottom: 2px solid var(--brass-dim); padding: 0.75rem 3rem; display: flex; align-items: center; justify-content: space-between;`
- office name / logo: `font-family: 'Playfair Display', serif; color: var(--brass); font-size: 0.9rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em;` — e.g. "WESTERN UNION TELEGRAPH CO."
- nav links: `font-family: 'Courier Prime', monospace; font-size: 0.7rem; color: var(--tape-cream); text-transform: uppercase; letter-spacing: 0.08em; opacity: 0.8;`
- active link: `color: var(--brass); border-bottom: 1px solid var(--brass); opacity: 1;`
- no icons, no hamburger menus. text only. the office directory is written on a placard, not behind a button.

headers / page titles:
- primary office heading: `font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 700; color: var(--form-blue); text-transform: uppercase; letter-spacing: 0.15em; border-bottom: var(--rule-heavy); padding-bottom: 0.5rem;` — engraved signage authority.
- section headers: `font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; color: var(--form-blue); text-transform: uppercase; letter-spacing: 0.12em; border-bottom: var(--rule-ink); padding-bottom: 0.3rem; margin-bottom: 0.75rem;`
- desk label placard: `font-family: 'Libre Baskerville', serif; font-size: 0.65rem; color: var(--ink-dim); text-transform: uppercase; letter-spacing: 0.15em;` — "OUTGOING MESSAGES", "OPERATOR NO. 4", "TARIFF SCHEDULE".

footers:
- `background: var(--mahogany); border-top: 2px solid var(--brass-dim); padding: 0.6rem 3rem; display: flex; justify-content: space-between; align-items: center;`
- left: office address in `font-family: 'Courier Prime', monospace; font-size: 0.6rem; color: var(--tape-cream); opacity: 0.7; text-transform: uppercase;`
- center: transmission timestamp `font-family: 'Courier Prime', monospace; font-size: 0.6rem; color: var(--brass);` — "TRANSMITTED — 14 MAR 1883 — 14:32 EST"
- right: line status indicator — "LINE OPEN" in `var(--signal-green)` or "LINE BUSY" in `var(--insulator-amber)`.

lists:
- message queue list: items separated by `border-bottom: var(--rule-ink);` — each row is a queued telegram.
- row structure: sender left, destination center, word count right, timestamp far-right.
- row height: `2.5rem` minimum — more generous than pure data grids, like a ledger entry.
- selected row: `background: var(--insulator-dim); border-left: 3px solid var(--brass);`
- no bullet points. the ledger has columns.

tables / routing grids:
- cable routing table: `background: var(--tape-cream); border: var(--rule-ink); border-collapse: collapse; border-radius: 2px; width: 100%;`
- header row: `font-family: 'Libre Baskerville', serif; font-size: 0.65rem; color: var(--form-blue); text-transform: uppercase; letter-spacing: 0.1em; border-bottom: var(--rule-heavy); padding: 0.3rem 0.6rem; background: rgba(43, 74, 122, 0.07);`
- body cells: `font-family: 'Courier Prime', monospace; font-size: 0.8rem; color: var(--ink-mark); text-transform: uppercase; padding: 0.35rem 0.6rem; border-bottom: var(--rule-ink); border-right: var(--rule-ink);`
- columns: FROM | TO | VIA | RATE | STATUS | TIME
- status column values: "OPEN" in `var(--signal-green)`, "BUSY" in `var(--insulator-amber)`, "DOWN" in `var(--signal-red)`.

dividers:
- standard: `var(--rule-ink)` — printed form lines separating fields and sections.
- heavy section break: `var(--rule-heavy)` — between form zones (header block / message body / accounting footer).
- copper wire trace: `border-top: 1px solid var(--copper-wire); opacity: 0.5;` — used inside mahogany panels to suggest internal wiring runs.
- used consistently everywhere. every boundary is marked. this is a form-driven office.

modals / overlays:
- `background: var(--tape-cream); border: var(--rule-heavy); border-radius: 2px; box-shadow: 4px 6px 20px var(--room-shadow);`
- modal header: `background: var(--form-blue); color: var(--tape-cream); padding: 0.5rem 1rem; font-family: 'Playfair Display', serif; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; border-radius: 2px 2px 0 0;`
- close control: `font-family: 'Courier Prime', monospace; font-size: 0.65rem; color: var(--tape-cream); opacity: 0.7; text-transform: uppercase;` — "CLOSE" not an X icon.
- backdrop: `background: rgba(20, 8, 2, 0.65);` — dark room behind the lit form. no blur.

badges / message status tags:
- `font-family: 'Courier Prime', monospace; font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.08em; padding: 0.15rem 0.5rem; border-radius: 2px; font-weight: 700;`
- SENT: `background: var(--form-blue); color: var(--tape-cream);`
- RECEIVED: `background: var(--signal-green); color: var(--tape-cream);`
- PENDING: `background: transparent; border: 1px solid var(--insulator-amber); color: var(--insulator-amber);`
- FAILED: `background: var(--signal-red); color: var(--tape-cream);`
- URGENT / RUSH: `background: var(--insulator-amber); color: var(--mahogany); font-weight: 700;`

paper tape display (dedicated component):
- the signature continuous-feed element. a narrow `4.5rem` tall horizontal strip of tape cream paper: `background: var(--tape-cream); border-top: var(--rule-ink); border-bottom: var(--rule-ink); padding: 0.6rem 0; overflow: hidden; position: relative;`
- punched hole margin guides: `background-image: repeating-linear-gradient(90deg, transparent, transparent 1.8rem, rgba(26,26,20,0.15) 1.8rem, rgba(26,26,20,0.15) 1.9rem);` — faint vertical tick marks along the strip.
- tape text: `font-family: 'Courier Prime', monospace; font-size: 0.75rem; color: var(--ink-mark); text-transform: uppercase; letter-spacing: 0.15em; white-space: nowrap;` scrolling left in continuous animation.

Morse code display panel:
- `background: var(--mahogany); border: 1px solid var(--brass-dim); border-radius: 2px; padding: 0.75rem 1rem;`
- dot-dash text: `font-family: 'Courier Prime', monospace; color: var(--brass); font-size: 0.85rem; letter-spacing: 0.4em; line-height: 2;` — each character group spaced wide. dots are `·`, dashes are `—`.
- decoded text below in smaller Courier Prime ink-mark color.

**interaction language**

hover:
- form buttons: `background` lightens slightly. primary: `filter: brightness(1.12); transition: 0.2s ease;`. brass button: `box-shadow: 0 0 8px var(--brass-glow); transition: 0.2s ease;`
- form card: `box-shadow: 3px 5px 14px var(--room-shadow); transition: 0.2s ease;` — card lifts fractionally from the desk.
- nav links: `color: var(--brass); opacity: 1; transition: 0.15s ease;`
- table rows: `background: var(--insulator-dim); transition: 0.12s ease;`
- Morse key button: `transform: scale(1.05); box-shadow: 0 4px 12px var(--room-shadow); transition: 0.1s ease;`

active / pressed:
- buttons: `filter: brightness(0.88); transform: translateY(1px); transition: 0.05s;` — physical press down.
- Morse key: `transform: scale(0.93) translateY(2px); box-shadow: 0 1px 4px var(--room-shadow); transition: 0.04s;` — the key depresses. immediate, tactile.
- table rows: `background: rgba(43, 74, 122, 0.1);`

focus:
- `outline: none; border-color: var(--brass); box-shadow: 0 0 0 2px var(--brass-dim);` — brass halo, not a browser outline.
- keyboard focus rings use `outline: 2px solid var(--brass); outline-offset: 2px;` on non-input elements.

selected:
- list items: `background: var(--insulator-dim); border-left: 3px solid var(--brass);`
- nav item: `color: var(--brass); border-bottom: 1px solid var(--brass);`
- form radio / checkbox equivalent: brass-filled square `background: var(--brass); border-color: var(--brass);` with ink-mark checkmark.

disabled:
- `opacity: 0.35; pointer-events: none;` — line is down. instrument inactive.

drag:
- `opacity: 0.6; border: 1px dashed var(--brass); border-radius: 2px; cursor: grabbing; box-shadow: 2px 4px 10px var(--room-shadow);` — message form being moved across the desk.

**motion & feedback**

transitions:
- default interactive: `transition: 0.15–0.2s ease-out` on color, opacity, box-shadow, transform. measured and deliberate — Victorian precision.
- paper tape scroll (signature animation): `@keyframes tape-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }` applied as `animation: tape-scroll 20s linear infinite;` on the inner tape text container. continuous, unhurried, left-to-right pull as if feeding from a Wheatstone receiver. never pauses.
- dot-dash rhythm (loading state): `@keyframes dot-dash { 0%, 100% { opacity: 1; } 40% { opacity: 0.2; } }` applied with staggered `animation-delay` to three dots: short-short-long rhythm (··—) suggesting a Morse letter. `animation-duration: 1.2s`.
- no spring, bounce, or elastic easing. no slide-in or fade-cascade reveals. the office is still except for the tape machine.

loading:
- paper tape loading: a short tape strip scrolls across a slot reading `AWAITING TRANSMISSION STOP AWAITING TRANSMISSION STOP` in continuous loop.
- or: three Morse dots `· · ·` pulsing with the dot-dash animation in `var(--brass)` on `var(--mahogany)` background. `font-size: 1.25rem; letter-spacing: 0.5em;`
- no spinner, no progress bar, no skeleton screens. operators wait for the wire to respond.

success:
- form border briefly shifts to `var(--signal-green)`: `border-color: var(--signal-green); transition: 0.1s;` then returns to `var(--rule-ink)` over `1s`.
- status text in `var(--signal-green)` Courier Prime uppercase: "MESSAGE DISPATCHED STOP" or "TRANSMISSION CONFIRMED STOP".

error:
- border shifts to `var(--signal-red)`. error text below field: `font-family: 'Courier Prime', monospace; font-size: 0.65rem; color: var(--signal-red); text-transform: uppercase; letter-spacing: 0.04em;`
- no shake animation. no alarm. the wire signals the fault and waits for correction.

**atmosphere**

backgrounds:
- primary (tape/form areas): `background-color: var(--tape-cream);` — the working surface is paper.
- primary (desk/chrome areas): `background-color: var(--mahogany);` — the structural surface is wood.
- form feed line texture on tape backgrounds: `background-image: repeating-linear-gradient(0deg, transparent, transparent 1.7rem, rgba(26,26,20,0.07) 1.7rem, rgba(26,26,20,0.075) 1.75rem);` — faint horizontal ruled lines like pre-printed form paper. applied globally to tape-cream backgrounds.
- aged paper vignette on forms: `background: radial-gradient(ellipse at 50% 0%, rgba(200,144,48,0.08) 0%, transparent 60%)` at top of form — slight warmth at the top edge suggesting age and lamp-light.
- mahogany grain suggestion: `background-image: repeating-linear-gradient(91deg, transparent, transparent 14px, rgba(20,8,2,0.06) 14px, rgba(20,8,2,0.06) 15px);` on `var(--mahogany-light)` surfaces — faint vertical wood grain lines.

textures:
- form ruled lines: horizontal gradient stripes on all tape-cream backgrounds (see above). foundational — every form surface has lines.
- wood grain: faint vertical stripes on mahogany surfaces.
- tape perforation guides: periodic vertical tick marks along paper tape component edges.
- no noise/grain filters, no CSS blur. all texture is geometric and structural, like printed office supplies.

overlays:
- continuous paper tape bar: fixed at bottom of viewport. `height: 4.5rem; overflow: hidden;` with tape scroll animation. the room is never silent — the receiver is always printing.
- `pointer-events: none;` on all atmospheric texture pseudo-elements.
- corner transmission metadata: `position: absolute; top: 0.4rem; right: 0.5rem; font-family: 'Courier Prime', monospace; font-size: 0.55rem; color: var(--ink-dim); text-transform: uppercase;` on every message form — circuit ID, date, operator number.

ambient effects:
- lamp warmth: `background: radial-gradient(ellipse at 50% -10%, rgba(200,144,48,0.12) 0%, transparent 55%);` applied as a fixed overlay at top of viewport — the oil lamp over the operator's desk.
- subtle paper aging at edges of forms: `box-shadow: inset 0 0 20px rgba(200,144,48,0.08);` on tape-cream card elements.
- these are background atmospheric details, reinforcing the lit-office-at-night ambiance.

**editorial voice**

button labels: `SEND`, `TRANSMIT`, `DISPATCH`, `RECEIVE`, `CONFIRM`, `CANCEL`, `FILE TELEGRAM`, `PRINT COPY`, `CLEAR FORM`, `RELAY`

headings: uppercase, formal, Victorian office style. examples:
- "WESTERN UNION TELEGRAPH COMPANY"
- "OUTGOING MESSAGES — STATION 4"
- "CABLE ROUTING — EASTERN DIVISION"
- "LINE STATUS — ALL CIRCUITS"
- "TARIFF SCHEDULE — DOMESTIC RATES"
- "RECEIVED THIS DAY — 14 MARCH 1883"

telegram message body format: ALL CAPS always. STOP used in place of period. no lowercase anywhere in message content. examples:
- "ARRIVED SAFELY STOP MEETING CONFIRMED FOR THURSDAY STOP REPLY REQUESTED STOP"
- "GOODS DISPATCHED VIA FREIGHT THIS MORNING STOP INVOICE TO FOLLOW BY POST STOP"
- "URGENT STOP LINE FAULT REPORTED AT JUNCTION 7 STOP OPERATOR DISPATCHED STOP"

metadata format:
- circuit designators: `CKT-14-EAST`, `VIA ALBANY`, `RELAY CHICAGO` — abbreviated routing codes in Courier Prime.
- timestamps: `14 MAR 1883 — 14:32 EST` — day month year, 24-hour time, timezone. no slashes.
- word count and tariff: `WORDS: 14 — CHARGE: $0.42` — always shown on outgoing forms.
- operator ID: `OPR: J. HENDERSON — STN 4` — abbreviated with initials and station number.
- message number: `MSG NO. 1,847` — sequential, always shown.

placeholder text: `ADDRESSEE NAME`, `DESTINATION CITY`, `MESSAGE TEXT IN CAPS`, `SENDER NAME`, `ACCOUNT NO.` — printed form labels, uppercase, terse.

empty states: `NO MESSAGES IN QUEUE`, `LINE INACTIVE`, `AWAITING TRANSMISSION`, `NO RECORDS THIS DATE` — brief, declarative. no explanation.

error messages: `CIRCUIT BREAK — LINE DOWN`, `MESSAGE UNDELIVERABLE — STATION CLOSED`, `INVALID DESTINATION`, `TRANSMISSION INTERRUPTED — RETRY` — uppercase, direct, no apology.

success messages: `MESSAGE DISPATCHED STOP`, `TRANSMISSION CONFIRMED STOP`, `LINE OPEN STOP`, `RECEIVED AND ACKNOWLEDGED STOP` — STOP punctuation in success messages. single sentence.

figure captions: formal, printed-caption style. `FIG. 1 — CABLE ROUTING, EASTERN DIVISION, 1880.` uppercase serif, centered below any diagrams or routing maps.

**cursor & selection**

cursor:
- default: `cursor: default;`
- interactive elements: `cursor: pointer;`
- text inputs / form fields: `cursor: text;`
- Morse key button: `cursor: pointer;` — becomes `cursor: grabbing;` if draggable.
- disabled: `cursor: not-allowed;`
- no custom cursor graphics.

selection:
- `::selection { background: var(--insulator-amber); color: var(--mahogany); }` — amber highlight like a glass insulator catching lamp-light. ink-dark selection text against warm amber.

**when to reach for this genome**

Use `telegraph_office.wire` when the prompt asks for Victorian telegraphy, Western Union message forms, Morse communication, wire routing, telegram dispatch, paper tape receivers, operator queues, cable office workflows, or any product that should feel like real-time long-distance communication before telephones and computers.

Reach for it when the visual/product cues are mahogany desks, brass Morse keys, cream telegram blanks, form-blue Western Union headers, copper wire traces, amber glass insulators, Courier uppercase message bodies, `STOP` punctuation, circuit IDs, word counts, tariff charges, paper tape strips, dot-dash displays, line open/busy/down states, and formal operator labels like `TRANSMIT`, `RELAY`, `WORDS: 14`, `CKT-14-EAST`, or `MESSAGE DISPATCHED STOP`. It is strongest when the interaction is compose, transmit, receive, relay, file, price, or monitor messages moving over a wire.

Choose it for telegram drafting tools, historical communication dashboards, Morse trainers, cable-routing diagrams, operator consoles, message queue systems, and period interfaces where each message is a form with sender, destination, word count, route, status, and transmission timestamp.

Do not choose it for institutional finance, Bloomberg-style research wires, capital-flow analysis, Helvetica split panes, or severe black/red reports; use `institutional_wire.macro`. Do not use it for stock-market ticker boards, trading-floor LED urgency, green/red deltas, order books, or live quote walls; use `ticker_floor.nyse`. Do not use it for civil-service memos, carbon-copy dossiers, typewriter corrections, or office routing slips; use `typewriter_carbon.duplicate`. Do not use it for generic terminal screens, CRT hacking, or sci-fi telemetry; use `underground_terminal.crt` or `phosphor_telemetry.amb`. Do not use it for train timetables or platform boards just because they mention dispatch; use `split_flap.rail`.

**anti-patterns — this genome NEVER:**

1. never uses `border-radius` larger than `2px`. the only exception is the physical Morse key button component, which is circular to represent the actual instrument. all form elements, panels, buttons, tags, and modals are `border-radius: 2px` — minimal Victorian precision. no pill buttons, no large rounded cards, no soft bubbles.
2. never uses lowercase text in telegram message bodies or UI labels. all content is uppercase throughout. `text-transform: uppercase` is applied globally. the telegraph office does not whisper.
3. never uses full stops (periods) in telegram message body text. STOP is always written out as the word. this is the law of the wire. punctuation in message bodies is exclusively STOP, QUERY, or similar telegraph conventions.
4. never uses sans-serif fonts for headings or office signage. serif faces (Playfair Display, Libre Baskerville) carry institutional authority. Courier Prime handles all message and data content. no Helvetica, no Inter, no modern geometric sans on anything visible to the operator.
5. never uses bright, saturated, or modern UI colors. the palette is period-appropriate organic tones: mahogany wood, brass hardware, paper cream, printer's ink, form blue, copper wire, glass insulator amber. no `#FF0000`, no `#0000FF`, no pure `#FFFFFF`.
6. never uses loading spinners, skeleton screens, or animated progress bars. waiting states are expressed through Morse dot-dash rhythm or the scrolling paper tape. the wire either works or it doesn't.
7. never uses drop shadows with large blur radii or colored glows on UI elements (except the `box-shadow: 0 0 8px var(--brass-glow)` on the brass Morse key button). depth is expressed through offset desk shadows (`2–4px` max blur, dark `var(--room-shadow)`).
8. never uses slide-in animations, parallax effects, or fade-cascade reveals. the only continuous motion is the paper tape scroll. all other state changes transition cleanly over `0.15–0.2s`. no elements fly in from off-screen.
9. never uses casual, promotional, or modern SaaS language. no "Get Started", no "Unlock your potential", no emoji, no exclamation points in UI chrome. the voice is the printed Western Union form: formal, terse, transactional, abbreviated.
10. never uses dense data-grid layouts at the expense of form structure. this is not a ticker board or a stock terminal. the telegram form is the primary unit of content — each message gets its own form card with breathing room, a header, a body, and a footer. information density is moderate, like a well-designed printed blank.
