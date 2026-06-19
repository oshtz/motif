---
id: "93"
name: noir_bureau.case
keywords:
  - noir
  - detective
  - 1940s
  - film noir
  - typewriter
  - shadow
  - hardboiled
  - fedora
  - case file
  - venetian blind
  - crime
  - mystery
  - smoky
---

### genome 93: `noir_bureau.case`

> identity: 1940s film noir detective office. high-contrast black and white with selective amber warmth — the desk lamp, the whiskey glass, the cigarette ember. venetian blind shadow stripes cut across everything. typewriter-struck text, case file manila folders, carbon-copy document layers. Humphrey Bogart's desk at midnight: a single pool of warm lamplight in a dark room full of filing cabinets. this is Double Indemnity, The Maltese Falcon, and Chinatown compressed into interface.

**surface**

colors:
```
--noir-black: #0C0C0E;           /* deep shadow — the room beyond the lamplight */
--bg-elevated: #131315;          /* raised surface — desktop, panel face */
--bg-surface: #1A1A1C;           /* card backgrounds — the folder sitting on the desk */
--paper-white: #F0ECE0;          /* aged typing paper — primary text */
--lamplight: #D4A04A;            /* warm amber desk lamp — primary accent */
--lamplight-glow: rgba(212, 160, 74, 0.25); /* warm halo from the lamp */
--lamplight-dim: rgba(212, 160, 74, 0.12);  /* faint amber wash, borders */
--smoke: #8A8A8A;                /* cigarette smoke gray — secondary text */
--manila: #C8B07A;               /* case folder manila — tertiary warm accent */
--carbon-blue: #2A3A5C;          /* carbon copy blue-tint — alternate dark surface */
--blood-red: #8B1A1A;            /* dark crime red — error, used very sparingly */
--shadow-stripe: rgba(0,0,0,0.15); /* venetian blind stripe overlay */
--paper-crease: rgba(240,236,224,0.04); /* aged paper texture wash */
--ink-dim: rgba(240,236,224,0.35);    /* faded ink — disabled, tertiary labels */
```

typography:
- body/all text: `'Courier New', 'Courier', monospace` — every word in this office was typed. `font-size: 13–14px`, `line-height: 1.7`, `letter-spacing: 0.02em`. the entire document is a typed report. the typewriter is the only voice.
- display/headings: `'Impact', 'Arial Narrow', sans-serif` — bold condensed newspaper headline sans-serif. `font-weight: 900`, `text-transform: uppercase`, `letter-spacing: 0.05–0.1em`. sizes: `2.5–5rem` for case titles, `1.2–1.8rem` for section headers. 1940s broadsheet — heavy ink on newsprint.
- labels/metadata: `'Courier New', monospace` — `font-size: 0.65–0.75rem`, `letter-spacing: 0.08em`, `text-transform: uppercase`, `color: var(--smoke)`. stamped, filed, cross-referenced.
- case numbers/codes: `'Courier New', monospace` — `font-size: 0.7rem`, `color: var(--lamplight)`, `letter-spacing: 0.12em`. the reference numbers on every folder tab.
- hierarchy is blunt: condensed headline sans at large scale for titles, courier monospace for all body text. no elegant serifs. this is a working office, not a library.

borders:
- structural panels: `1px solid rgba(240,236,224,0.1)` — faint paper edge, barely there in the dark. `border-radius: 0px` — filing cabinets, typewriters, and desks have no curves.
- lamplight accent borders: `1px solid var(--lamplight-dim)` — used on featured panels, active elements
- manila folder edge: `2px solid var(--manila)` — the top edge of a case file folder, used on case card components
- carbon copy edge: `1px solid rgba(42,58,92,0.4)` — the blue indent of a carbon layer
- no border-radius ever. every corner is a right angle. this city has no soft edges.

spacing:
- page edge: `5vw` horizontal padding (`--grid-edge: 5vw`)
- section vertical rhythm: `6–10vh` between major sections — dense, case-file pragmatic
- card internal padding: `20–28px` — enough room to spread a document on the desk, no more
- moderate-high information density throughout. a detective's desk is covered in paper. the interface should feel like a file cabinet with purpose, not a gallery with air.
- gap between inline items: `20–32px`

**color distribution**

- 72% deep shadow field (`--noir-black`, `--bg-elevated`, `--bg-surface`) — the dark room. darkness is not decorative here — it is the whole atmosphere. light is the exception.
- 15% paper white (`--paper-white`, `--smoke`) — typed text, the documents on the desk. always monospace, always aged.
- 8% lamplight amber (`--lamplight`, `--lamplight-glow`, `--lamplight-dim`) — the single warm source. interactive elements, active states, case numbers, the glow around the lamp. used structurally, not decoratively.
- 4% manila/carbon (`--manila`, `--carbon-blue`) — folder tabs, carbon copy accents, document layers
- 1% blood red (`--blood-red`) — error states only. one drop of red in a black-and-white room.

the venetian blind stripe overlay is applied as a repeating `linear-gradient` pseudo-element across panels and cards — horizontal bars of `var(--shadow-stripe)` at `height: 4px` with `4px` gaps. static, not animated. the shadows don't move. that's what makes them ominous.

**component patterns**

buttons:
- primary CTA: `background: var(--lamplight); color: var(--noir-black); padding: 12px 28px; border-radius: 0; font-family: 'Courier New', monospace; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; border: none; box-shadow: 0 0 16px var(--lamplight-glow);` — the one lit thing in the room
- secondary: `background: transparent; color: var(--paper-white); border: 1px solid rgba(240,236,224,0.3); padding: 10px 22px; border-radius: 0; font-family: 'Courier New', monospace; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase;`
- ghost/text: `background: transparent; color: var(--smoke); border: none; padding: 8px 16px; font-family: 'Courier New', monospace; font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase;`
- danger: `background: transparent; color: var(--blood-red); border: 1px solid var(--blood-red); padding: 10px 22px; border-radius: 0; font-family: 'Courier New', monospace; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase;`

inputs:
- `background: var(--bg-elevated); border: none; border-bottom: 1px solid rgba(240,236,224,0.2); border-radius: 0; padding: 12px 0px; color: var(--paper-white); font-family: 'Courier New', monospace; font-size: 0.85rem; caret-color: var(--lamplight);`
- label above: `font-family: 'Courier New', monospace; font-size: 0.65rem; color: var(--smoke); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px;`
- placeholder: `color: var(--ink-dim); font-style: italic;`
- focus: `border-bottom-color: var(--lamplight); box-shadow: 0 1px 0 0 var(--lamplight);` — the cursor catches the light

cards/panels (case files):
- standard: `background: var(--bg-surface); border: 1px solid rgba(240,236,224,0.08); border-radius: 0;`
- venetian blind overlay applied via `::before` pseudo-element: `content: ""; position: absolute; inset: 0; pointer-events: none; background: repeating-linear-gradient(180deg, transparent 0px, transparent 4px, var(--shadow-stripe) 4px, var(--shadow-stripe) 8px); z-index: 1;`
- case file card: `border-top: 3px solid var(--manila); background: var(--bg-surface);` — the manila folder tab edge. the folder itself.
- carbon-copy card: `background: var(--carbon-blue); border: 1px solid rgba(42,58,92,0.6); color: var(--paper-white); opacity: 0.85;` — the blue ghost copy beneath
- featured panel (lamplight focus): `border: 1px solid var(--lamplight-dim); box-shadow: 0 0 30px var(--lamplight-glow), inset 0 0 60px rgba(212,160,74,0.03);` — as if the lamp is aimed here

navigation:
- top bar: `position: fixed; padding: 20px var(--grid-edge); display: flex; justify-content: space-between; align-items: center; background: rgba(12,12,14,0.95); border-bottom: 1px solid rgba(240,236,224,0.08);`
- agency name/logo: `font-family: 'Impact', 'Arial Narrow', sans-serif; color: var(--paper-white); letter-spacing: 0.1em; font-weight: 900; text-transform: uppercase; font-size: 1rem;`
- nav links: `font-family: 'Courier New', monospace; font-size: 0.7rem; color: var(--smoke); letter-spacing: 0.1em; text-transform: uppercase;`
- active link: `color: var(--lamplight); border-bottom: 1px solid var(--lamplight);`
- right-side CTA using primary amber button style

headers/hero:
- case title: `font-family: 'Impact', 'Arial Narrow', sans-serif; font-size: 4–8vw; line-height: 0.9; letter-spacing: 0.04em; color: var(--paper-white); text-transform: uppercase;` — splashed across the front of the folder in heavy ink
- case subtitle/tagline: `font-family: 'Courier New', monospace; font-size: 0.85rem; color: var(--smoke); letter-spacing: 0.06em; font-style: italic;` — typed beneath the headline, the one-line summary
- section headers: `font-family: 'Impact', 'Arial Narrow', sans-serif; font-size: 1.4–2rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--paper-white);` with a `1px solid rgba(240,236,224,0.15)` rule beneath
- case number stamp: `font-family: 'Courier New', monospace; color: var(--lamplight); font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;` — `CASE NO. 0047-B` — amber stamped in the corner
- hero atmosphere: dark room with radial lamplight glow — `background: radial-gradient(ellipse 60% 40% at 30% 60%, rgba(212,160,74,0.08) 0%, transparent 70%)` — the desk lamp illuminating the hero area from one side

footers:
- `border-top: 1px solid rgba(240,236,224,0.1);`
- centered agency stamp in `--smoke`: `CONFIDENTIAL — NOT FOR PUBLIC DISTRIBUTION`
- small copyright in `--ink-dim`
- footer links in `--smoke`, uppercase Courier, tightly spaced
- no decorative ornament. footers are the back of the file folder.

case file dividers (signature component):
- dashed typed rule: `border: none; border-top: 1px dashed rgba(240,236,224,0.15); margin: 24px 0;`
- typed separator row: a line of repeated hyphens `————————————————————————————` in `--smoke` at `font-size: 0.7rem`, evoking the typewriter line separator
- section stamp: a short string like `— EXHIBIT A —` or `— CONTINUED —` in `font-family: 'Courier New'; font-size: 0.65rem; color: var(--smoke); letter-spacing: 0.15em; text-transform: uppercase;` centered between two dashed rules
- these dividers replace standard `<hr>` elements throughout

lists:
- prefixed with `—` em-dash at `color: var(--lamplight)`, space, then item text in `--paper-white` courier
- active item: `color: var(--lamplight); padding-left: 20px;` with `border-left: 2px solid var(--lamplight)`
- item labels (if categorized): `color: var(--smoke); text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.65rem;` above the item text
- ordered lists: item number in `color: var(--lamplight); font-weight: 700;` followed by a period and the item text

tables:
- header row: `font-family: 'Courier New', monospace; font-size: 0.65rem; color: var(--smoke); letter-spacing: 0.12em; text-transform: uppercase; border-bottom: 1px solid rgba(240,236,224,0.15); padding: 8px 0;`
- body rows: `font-family: 'Courier New', monospace; font-size: 0.8rem; color: var(--paper-white); border-bottom: 1px dashed rgba(240,236,224,0.06); padding: 10px 0;`
- alternating rows: every other row gets `background: rgba(240,236,224,0.02)` — a faint page-ruled line
- the table is a witness log, a case chronology, a list of suspects

modals:
- `background: var(--bg-elevated); border: 1px solid rgba(240,236,224,0.15); border-radius: 0; border-top: 2px solid var(--lamplight);`
- modal title: condensed headline sans, uppercase, `color: var(--paper-white)` with `1px dashed rgba(240,236,224,0.15)` rule beneath
- body text in `'Courier New'`, `color: var(--paper-white)`, `font-size: 0.85rem`
- close button: ghost style, `color: var(--smoke)`, courier uppercase `[CLOSE]`
- backdrop: `background: rgba(12,12,14,0.92)` — the room goes dark
- venetian blind overlay applied to modal surface

badges/tags (case stamps):
- `font-family: 'Courier New', monospace; font-size: 0.6rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 4px 10px; border: 1px solid rgba(240,236,224,0.2); color: var(--smoke); border-radius: 0;` — typed classification labels
- active/open case: `border-color: var(--lamplight); color: var(--lamplight);`
- closed case: `border-color: var(--ink-dim); color: var(--ink-dim);`
- urgent/red: `border-color: var(--blood-red); color: var(--blood-red);`
- filled variant: `background: var(--lamplight); color: var(--noir-black);` — the amber stamp of approval

progress/status bars:
- `background: rgba(240,236,224,0.08); border-radius: 0; height: 4px;`
- fill: `background: var(--lamplight); height: 4px;`
- typed percentage label beside: `font-family: 'Courier New'; font-size: 0.65rem; color: var(--smoke);`

tooltips:
- `background: var(--bg-elevated); border: 1px solid rgba(240,236,224,0.15); border-radius: 0; padding: 8px 12px; font-family: 'Courier New', monospace; font-size: 0.7rem; color: var(--paper-white);`
- arrow: none. just the hard-edged box.

**interaction language**

- hover (buttons): primary `box-shadow: 0 0 28px var(--lamplight-glow); filter: brightness(1.1);` — the amber flares briefly. `transition: 0.4s ease;`. secondary gets `border-color: rgba(240,236,224,0.5); color: var(--paper-white);`. ghost gets `color: var(--paper-white);`.
- hover (cards): `border-color: rgba(240,236,224,0.2);` — the file edges catch the light. `box-shadow: 0 0 20px rgba(0,0,0,0.4);` — the card lifts slightly from the desk. `transition: 0.4s ease;`
- hover (nav links): `color: var(--paper-white);`
- hover (list items): `color: var(--paper-white); border-left-color: var(--lamplight);`
- active/pressed: `transform: scale(0.98);` — a quiet, firm press. `transition: 0.1s ease;`. no bounce.
- focus: `outline: 1px solid var(--lamplight); outline-offset: 3px;` — the lamp catches the focused element
- selected: `color: var(--lamplight); border-left: 2px solid var(--lamplight);` for list items. nav items get `color: var(--lamplight); border-bottom: 1px solid var(--lamplight);`. badges fill amber.
- disabled: `opacity: 0.25; pointer-events: none;` — the file has been redacted. it's still there, but you can't read it.
- drag: `opacity: 0.65; cursor: grabbing; box-shadow: 0 12px 40px rgba(0,0,0,0.7);` — picking up a folder from the pile

**motion & feedback**

transitions:
- default: `transition: 0.4s ease-out` on color, opacity, border-color, box-shadow, transform — slow, deliberate, like a man who has seen everything and hurries for nothing
- page/section reveal: elements enter with `opacity: 0 → 1; transform: translateY(16px) → translateY(0); transition: 0.5s ease-out;` — content emerges from shadow as if the lamp is being aimed at it
- stagger: child elements within a case file section animate in sequence with `transition-delay` increments of `0.06s` — each item types itself into existence
- no bounce, no spring, no elastic easing. everything moves like a tired detective who still has three more leads to run down tonight.
- venetian blind overlay: static. those stripes don't move. the shadows are permanent.

loading:
- typed ellipsis: `CROSS-REFERENCING...` in `--smoke` courier, with cycling dot count — `...` → `....` → `.....` → `...` on a `0.5s` loop
- or: a fake case number filling in character by character: `CASE NO. ____` → `CASE NO. 0047` over `0.8s`

success:
- amber glow pulse on the affected element: `box-shadow: 0 0 30px var(--lamplight-glow)` expanding and fading over `0.5s ease-out`
- text confirmation in courier uppercase amber: `FILED.` or `CONFIRMED.`

error:
- `border-color: var(--blood-red)` replaces amber on the affected element. `color: var(--blood-red)` on error text. `transition: 0.4s ease`.
- no shake, no flash. the detective doesn't flinch. the border just goes red.
- error resolves back to normal on correction, same `0.4s ease` transition.

**atmosphere**

- venetian blind stripe overlay (root-level): applied via `body::after` — `content: ""; position: fixed; inset: 0; z-index: 9999; pointer-events: none; background: repeating-linear-gradient(180deg, transparent 0px, transparent 6px, var(--shadow-stripe) 6px, var(--shadow-stripe) 10px);` — the whole room is striped with shadow. static, permanent.
- desk lamp radial glow: `background: radial-gradient(ellipse 50% 60% at 20% 80%, rgba(212,160,74,0.06) 0%, transparent 65%)` applied as a fixed pseudo-element behind page content — the lamp is always in the bottom-left corner, casting its single warm cone upward and across the desk.
- aged paper texture wash: `background: rgba(240,236,224,0.015)` noise — achieved with a subtle repeating SVG grain filter or CSS noise gradient applied to panels at very low opacity — the paper has history.
- carbon copy ghost: secondary panels can use `filter: sepia(0.15) contrast(1.05)` to suggest the blue-tinted flatness of a carbon duplicate.
- cigarette smoke vignette: `background: radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(12,12,14,0.7) 100%)` as a fixed overlay — the edges of the room are lost in darkness and smoke.
- no gradients except the lamplight cone and the smoke vignette. no color photography except treated black-and-white (images get `filter: grayscale(1) contrast(1.1) brightness(0.85)`). this is a black-and-white world with one warm light source.

**editorial voice**

button labels: terse, investigative, period-appropriate. `OPEN CASE`, `FILE REPORT`, `RUN SUSPECT`, `CLOSE FILE`, `SUBMIT EVIDENCE`, `REQUEST BACKUP`, `PULL RECORD`, `LOG IT`. uppercase. courier. no friendliness. this is a professional relationship.

headings: condensed headline sans, uppercase. noun-heavy, clipped. `THE ACTIVE CASELOAD`, `SUSPECT PROFILE`, `EVIDENCE LOG`, `KNOWN ASSOCIATES`, `LAST KNOWN LOCATION`, `CASE SUMMARY`, `FOLLOW THE MONEY`, `WHAT THE FILE SAYS`. the tone is the front page of a 1947 tabloid.

metadata: typed label-colon-value pairs. `CASE NO: 0047-B`, `FILED: 14 NOV 1947`, `STATUS: OPEN`, `LEAD DETECTIVE: —`, `PRIORITY: HIGH`. colons as separators. uppercase labels in smoke. values in paper white.

placeholders: `type here...`, `search the files...`, `enter case number...`, `name, alias, or known associate...`. lowercase, italic. the blank line on a form.

empty states: `Nothing in the file yet.`, `No records pulled on this subject.`, `The case is cold.`, `No leads. Keep looking.`. sentence case, flat affect, not apologetic.

error messages: `That doesn't check out.`, `Record not found.`, `Access denied — above your clearance.`, `Something went wrong with the filing.`. period. no capitalization beyond sentence start. the detective has seen worse.

success messages: `Filed.`, `Case updated.`, `Evidence logged.`, `Got it.`. one word or one short sentence. period. understated. the job is done and there's another case waiting.

**cursor & selection**

- default: `cursor: default`
- interactive elements: `cursor: pointer`
- drag targets: `cursor: grab` → `cursor: grabbing`
- disabled: `cursor: not-allowed`
- text input: `cursor: text; caret-color: var(--lamplight);` — the amber cursor blinks in the dark
- `::selection { background: var(--lamplight); color: var(--noir-black); }` — selecting text catches the lamplight

**when to reach for this genome**

Use `noir_bureau.case` when the prompt asks for a film-noir detective office, private-investigator case file, murder-mystery dashboard, suspect board, witness log, evidence registry, cold-case archive, hardboiled story interface, smoky midnight bureau, or any product that should feel like a 1940s case folder lit by one amber desk lamp.

Reach for it when the user wants near-black rooms, venetian blind shadows, amber lamplight, grayscale photography, manila folder edges, carbon-copy blue layers, typewriter Courier body text, clipped case-number metadata, cigarette-smoke vignettes, confidential stamps, and world-weary investigative copy. It is strongest when the interface is about following leads, logging evidence, cross-referencing subjects, pulling records, marking exhibits, opening/closing cases, and deciding what the lamp should reveal.

Choose it for:
- mystery games, true-crime companion tools, detective fiction launches, noir film/book/podcast pages, and narrative archives built around clues, suspects, timelines, exhibits, and case status.
- investigative workflows where atmosphere matters more than neutral office bureaucracy and every card can be an exhibit, folder, transcript, lead, or witness statement.
- dark editorial or promotional surfaces that need cinematic black-and-white drama with one warm focal accent.
- in-world agency, bureau, or police-adjacent interfaces where the language can stay terse: `Filed.`, `No leads.`, `Case updated.`, `Access denied.`

Do not choose it for neutral civil-service paperwork, FOIA records, routing slips, carbon-copy memos, official forms, or generic typewriter bureaucracy; use `typewriter_carbon.duplicate`. Do not choose it for library index cards, Dewey numbers, book records, or oak catalog drawers; use `card_catalog.dewey`. Do not choose it for live camera feeds, guard operations, DVR archives, incident response, or real CCTV control rooms; use `surveillance_grid.cctv`. Do not choose it for photographic proof sheets, negatives, safelight red, or darkroom chemistry; use `darkroom_proof.contact`. Do not choose it for journalism, magazine investigations, editorial reports, or public-interest article layouts; use `editorial_inquiry.rev`.

**anti-patterns — this genome NEVER:**

1. uses border-radius on any structural element — `border-radius: 0px` without exception. filing cabinets, typewriter keys, window frames, and venetian blinds are all right angles. a rounded corner would shatter the atmosphere entirely.
2. uses cool blues, teals, purples, or bright greens as accent colors — the only warm accent is amber lamplight (`--lamplight`). the carbon-blue (`--carbon-blue`) exists only as a background surface for carbon-copy document layers, never as an interactive color.
3. uses sans-serif for body text — body copy is always `'Courier New', monospace`. every word was typed on a typewriter. a clean sans-serif would read as modern, digital, wrong. the typewriter is non-negotiable.
4. uses bright whites or light backgrounds — all surfaces are near-black (`#0C0C0E` to `#1A1A1C`). `--paper-white` (`#F0ECE0`) is a text color only, never a background. the room is dark. that is the whole point.
5. uses bouncy, springy, or fast animations — all transitions are `0.4–0.6s ease-out`. nothing bounces. nothing snaps. motion is unhurried and deliberate. a man who runs has something to hide.
6. uses bright, saturated color photography — all images are treated: `filter: grayscale(1) contrast(1.1) brightness(0.85)`. black-and-white, slightly darkened. selective amber color-grading may be applied via `mix-blend-mode: multiply` with a low-opacity amber overlay. the city is monochrome except for the lamp.
7. uses casual, friendly, exclamatory, or technically precise UX copy — no "Awesome!", no "Let's go!", no API error codes. the voice is a detective narrating a case file. clipped. professional. slightly world-weary. every label sounds like it was dictated into a recorder at 2am.
8. uses the venetian blind overlay as an animated element — the stripes are static. they are not a loading indicator, not a transition, not a hover effect. they are the permanent shadow of the blinds across the desk. they do not move.
9. uses generous whitespace or gallery-style layouts — this is a working detective's office. information density is moderate-high. the desk has papers on it. cards are filled. labels are present. the space is used.
10. uses blood red (`--blood-red`) for anything other than error states — it is the one drop of color that means something went very wrong. using it for decoration or branding would waste the only truly alarming signal in an otherwise monochrome world.
