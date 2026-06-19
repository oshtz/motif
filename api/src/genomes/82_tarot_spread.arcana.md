---
id: "82"
name: tarot_spread.arcana
keywords:
  - tarot
  - occult
  - mystical
  - arcana
  - divination
  - rider-waite
  - astrology
  - esoteric
  - alchemy
  - fortune
  - card spread
  - mystic
  - oracle
  - gold leaf
---

### genome 82: `tarot_spread.arcana`

> identity: occult tarot deck laid out for a reading. Deep indigo velvet table cloth, gold-foil border ornaments, hand-illuminated Major Arcana cards, candlelit fortune-teller's parlor. Rider-Waite-Smith iconography rendered through Pamela Colman Smith's line work, with Aleister Crowley's Thoth-deck color palette underneath. Not the cathedral stained-glass jewel-tone interface (genome 66) — this is the matte deck itself, the card stock, the gilded edges, the table where the reader turns each card slowly. Hermetic Order of the Golden Dawn aesthetics: alchemical sigils, astrological glyphs, hand-lettered Roman numerals (I–XXII), and the quiet drama of revelation.

---

## surface

colors:
```
--tarot-indigo: #0F0C2E;       /* deep midnight indigo — primary table cloth */
--tarot-purple: #1F1745;       /* raised surface — card backs */
--tarot-velvet: #2A1F4F;       /* soft warm purple — card faces */
--card-ivory: #ECE1C4;         /* aged card stock — primary light surface */
--card-cream: #F2EAD0;         /* lighter card edge */
--gold-leaf: #C9A557;          /* gold foil borders and sigils */
--gold-bright: #E2BC6C;        /* highlight on gilt edges */
--gold-dim: rgba(201,165,87,0.32);  /* faded gold accent */
--blood-arcana: #6B1322;       /* deep occult blood-red, sacred and rare */
--moon-pale: #DDD3B7;          /* moonlit ivory, secondary text */
--star-violet: #6B4D9E;        /* purple ink for minor symbology */
--ink-deep: #1A1426;           /* card linework, body text on light */
--smoke-violet: rgba(107,77,158,0.18);  /* incense smoke wash */
```

typography:
- display/titles: `"Cinzel", "Trajan Pro", "Cormorant Garamond", serif` — `font-weight: 500–700; text-transform: uppercase; letter-spacing: 0.15em;` — sizes `2rem–5rem`. Roman-inscription serif, the kind chiseled into temple lintels. Card titles like "THE FOOL — 0", "THE TOWER — XVI", "THE STAR — XVII".
- body/divination text: `"EB Garamond", "Cormorant Garamond", "Baskerville", serif` — `font-size: 14–17px; line-height: 1.75; letter-spacing: 0.005em;` — for readings, card meanings, the diviner's voice.
- meta/sigils: `"Cinzel", serif` — `font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold-leaf);` — for "MAJOR ARCANA", "CUPS · WANDS · SWORDS · PENTACLES", suit headers, classifications.
- numerals: Roman numerals throughout — `font-family: "Cinzel"; font-weight: 600;` — `I`, `II`, `III`, …, `XXII`. Never Arabic digits in titles or card numbering.
- italic accents: `"Cormorant Garamond", italic` — for whispered phrases, divinatory shorthand ("upright · reversed"), and atmospheric pull-quotes.

borders:
- card frames (signature element): `2px solid var(--gold-leaf); border-radius: 6px; box-shadow: 0 0 0 1px var(--gold-bright), 0 0 24px rgba(201,165,87,0.18);` — gold-foil framing with a slim highlight ring suggesting embossed leaf
- inner ornamental frame: `1px solid var(--gold-dim); border-radius: 3px; margin: 8px;` — the second concentric border inside a tarot card
- panel borders: `1px solid rgba(201,165,87,0.22);` — faint gilt edges on indigo surfaces
- corner ornaments: small SVG fleur-de-lis or sigil glyphs in `--gold-leaf` placed in the four corners of card components
- never a sharp 0px corner; this is the deck, not the table. cards always have at least 4–8px radius.

spacing:
- page edge: `5vw` horizontal padding — generous parlor breathing room
- vertical rhythm: `8–14vh` between major sections — the slow, deliberate pacing of a reading
- card padding: `28–40px` internally — the figure on a tarot card stands in a frame, never crowded
- moderate-low density. each element is a card; cards don't crowd each other; the spread breathes.

---

## color distribution

- 55% deep indigo / purple field (`--tarot-indigo`, `--tarot-purple`) — the velvet table that holds everything
- 18% card ivory / cream (`--card-ivory`, `--card-cream`) — the card faces, primary content surfaces
- 12% gold-leaf (`--gold-leaf`, `--gold-bright`, `--gold-dim`) — every border, sigil, title accent, interactive highlight
- 8% ink-deep / moon-pale text colors — body type on card faces
- 4% star-violet (`--star-violet`) — secondary symbology, suit minor accents
- 3% blood-arcana (`--blood-arcana`) — sacred crimson reserved for reversed-card states, occasional accent on Major Arcana like the Tower or Death

the page should feel like a tarot reading on a candle-lit table: indigo velvet base, several ivory cards laid out in a spread, every card edge gilded, with gold sigils and Roman numerals catching the candlelight.

---

## component patterns

buttons:
- primary (cast/divine action): `background: var(--gold-leaf); color: var(--tarot-indigo); border: 1px solid var(--gold-bright); border-radius: 4px; padding: 12px 32px; font-family: "Cinzel", serif; font-size: 0.85rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; box-shadow: 0 0 24px rgba(201,165,87,0.35), inset 0 1px 0 var(--gold-bright);` — gold foil pressed into card stock
- secondary: `background: transparent; color: var(--gold-leaf); border: 1px solid var(--gold-leaf); border-radius: 4px; padding: 11px 30px; font-family: "Cinzel", serif; letter-spacing: 0.2em; text-transform: uppercase;`
- ghost/whisper: `background: transparent; color: var(--moon-pale); border: none; font-family: "Cormorant Garamond", italic; font-size: 0.9rem; letter-spacing: 0.04em; text-decoration: underline; text-underline-offset: 4px; text-decoration-color: var(--gold-dim);`
- reversed (warning/destructive): `background: var(--blood-arcana); color: var(--card-ivory); border: 1px solid var(--gold-dim);`

inputs:
- `background: rgba(236,225,196,0.06); border: 1px solid var(--gold-dim); border-radius: 4px; padding: 14px 18px; color: var(--card-ivory); font-family: "EB Garamond", serif; font-size: 1rem;`
- label above: `font-family: "Cinzel", serif; font-size: 0.65rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold-leaf); margin-bottom: 10px;`
- placeholder: `color: rgba(236,225,196,0.4); font-style: italic;`
- focus: `border-color: var(--gold-leaf); box-shadow: 0 0 0 1px var(--gold-leaf), 0 0 20px rgba(201,165,87,0.2);`

cards/panels (Tarot cards):
- standard (a Major Arcana card): `background: var(--card-ivory); border: 2px solid var(--gold-leaf); border-radius: 8px; padding: 32px 28px; box-shadow: 0 0 0 1px var(--gold-bright), 0 12px 40px rgba(15,12,46,0.6), 0 0 60px rgba(201,165,87,0.08);`
- Roman numeral header at top: `font-family: "Cinzel"; font-size: 0.8rem; letter-spacing: 0.3em; color: var(--gold-leaf); text-align: center; border-bottom: 1px solid var(--gold-dim); padding-bottom: 12px;` — like `· XVII ·`
- card title in caps: `font-family: "Cinzel", serif; font-size: 1.6rem; letter-spacing: 0.18em; color: var(--ink-deep); text-transform: uppercase; text-align: center;`
- card image area: `aspect-ratio: 3/5;` with `filter: sepia(0.15) contrast(1.05);` and a `1px solid var(--gold-dim)` inner frame
- footer of card: italic divinatory text in `--ink-deep`, centered, `font-family: "Cormorant Garamond", italic;`
- reversed state (when card is "reversed" in a reading): `transform: rotate(180deg);` with a faint `--blood-arcana` cast via `filter: hue-rotate(15deg);` — the same card flipped upside-down, indicating reversed meaning

navigation:
- top bar: `background: var(--tarot-indigo); border-bottom: 1px solid var(--gold-dim); padding: 20px 5vw;`
- brand/sigil: a small gold sigil glyph (eye, star, moon) followed by mark in `font-family: "Cinzel"; letter-spacing: 0.2em; color: var(--gold-leaf);`
- nav items: `font-family: "Cinzel", serif; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--moon-pale);`
- active: `color: var(--gold-leaf); border-bottom: 1px solid var(--gold-leaf);`
- divider between items: a small `·` or `✦` sigil in gold

headers/hero:
- hero title: `font-family: "Cinzel", serif; font-size: 5–9vw; letter-spacing: 0.12em; line-height: 1.05; color: var(--card-ivory); text-transform: uppercase;` — like `THE STARLIT SPREAD` or `MAJOR ARCANA`
- hero subtitle: italic Garamond, `font-size: 1.1rem; letter-spacing: 0.04em; color: var(--gold-leaf); font-style: italic;` — a whispered divinatory phrase
- decorative gold rule: a thin horizontal line `height: 1px; background: var(--gold-leaf);` with small sigil glyphs centered on it via SVG
- hero atmosphere: a radial candlelight glow `background: radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,165,87,0.12) 0%, transparent 70%);` rising from the bottom — the table lit by a single candle

footers:
- `background: var(--tarot-indigo); border-top: 1px solid var(--gold-dim); padding: 40px 5vw; text-align: center;`
- a small gold sigil centered, followed by italic Garamond colophon text: `An offering of the Arcana, eternal · MMXXV`
- links in `--moon-pale` Cinzel, uppercase, gold dotted dividers between them
- never a busy multi-column corporate footer — the footer is a colophon, a closing benediction

dividers (signature component — illuminated rule):
- `border: none; height: 1px; background: linear-gradient(90deg, transparent, var(--gold-leaf), transparent); position: relative; margin: 48px 0;`
- centered ornamental glyph: a small fleur-de-lis or sigil (`✦`, `✧`, `❉`) in `--gold-leaf` via `::after` pseudo-element on the rule
- never a plain `<hr>` — every divider is an illuminated rule with a centered glyph

lists:
- prefixed with Roman numerals (`I.`, `II.`, `III.`) in `--gold-leaf` Cinzel
- or prefixed with small gold sigils (`✦`, `❀`, `❉`) for unordered lists
- item text in `--card-ivory` or `--ink-deep` Garamond
- active item: `color: var(--gold-leaf); border-left: 1px solid var(--gold-leaf); padding-left: 16px;`

tables (a reading log / interpretation table):
- header: `background: var(--tarot-purple); color: var(--gold-leaf); font-family: "Cinzel"; letter-spacing: 0.2em; text-transform: uppercase; padding: 14px 20px; border-bottom: 1px solid var(--gold-leaf);`
- body rows: `font-family: "EB Garamond", serif; color: var(--card-ivory); padding: 14px 20px; border-bottom: 1px solid var(--gold-dim);`
- alternating rows: `background: rgba(236,225,196,0.02)`
- italic accent in any "meaning" cell: `font-style: italic;`

modals (the revealed card):
- `background: var(--card-ivory); border: 2px solid var(--gold-leaf); border-radius: 8px; padding: 48px 40px; box-shadow: 0 0 0 1px var(--gold-bright), 0 24px 80px rgba(15,12,46,0.85), 0 0 100px rgba(201,165,87,0.15);`
- centered title in Cinzel with Roman numeral above
- backdrop: `background: rgba(15,12,46,0.92); backdrop-filter: blur(4px);` — the rest of the table goes to deep velvet darkness
- close: a small italic Garamond `close the spread` link or a gold `×` glyph

badges/tags (suit markers):
- pill `border-radius: 999px; padding: 4px 12px; font-family: "Cinzel"; font-size: 0.6rem; letter-spacing: 0.22em; text-transform: uppercase;`
- WANDS: `background: transparent; border: 1px solid var(--gold-leaf); color: var(--gold-leaf);` with `♣` glyph
- CUPS: `border-color: var(--star-violet); color: var(--star-violet);` with `♥` glyph
- SWORDS: `border-color: var(--moon-pale); color: var(--moon-pale);` with `♠` glyph
- PENTACLES: filled gold `background: var(--gold-leaf); color: var(--tarot-indigo);` with `★` glyph
- MAJOR ARCANA: filled blood `background: var(--blood-arcana); color: var(--card-ivory);`

progress bars (a slow divination):
- track: `height: 2px; background: rgba(201,165,87,0.15); border-radius: 0;`
- fill: `background: linear-gradient(90deg, var(--gold-dim), var(--gold-leaf), var(--gold-bright)); height: 2px;`
- label: Cinzel uppercase Roman numerals (`III / XII` instead of percentages)

tooltips:
- `background: var(--card-ivory); color: var(--ink-deep); border: 1px solid var(--gold-leaf); border-radius: 4px; padding: 10px 14px; font-family: "EB Garamond", serif; font-style: italic; font-size: 0.85rem; box-shadow: 0 8px 24px rgba(15,12,46,0.6);` — a small card whispered into

---

## interaction language

- hover (buttons): gold gain — `box-shadow: 0 0 36px rgba(201,165,87,0.5); filter: brightness(1.08);`. `transition: 0.6s ease;` — slow and ceremonial
- hover (cards): the card lifts slightly with deeper shadow — `transform: translateY(-3px); box-shadow: 0 0 0 1px var(--gold-bright), 0 18px 60px rgba(15,12,46,0.75);`. A faint gold glow blooms behind via `::before`. `transition: 0.5s ease;`
- hover (links): `color: var(--gold-bright); text-decoration-color: var(--gold-leaf);`
- active/pressed: `transform: scale(0.985);` — the slow press of a card laid down. `transition: 0.2s ease;`
- focus: `outline: 1px solid var(--gold-leaf); outline-offset: 4px;`
- selected (card chosen from a spread): the card gains a stronger gold glow `box-shadow: 0 0 0 2px var(--gold-leaf), 0 0 60px rgba(201,165,87,0.35);` and slight `transform: translateY(-6px);`
- disabled: `opacity: 0.3; filter: grayscale(0.6);` — the card has been turned face-down
- drag: `cursor: grab; transform: rotate(-3deg); box-shadow: 0 30px 80px rgba(15,12,46,0.8);` — picking up a card from the table, slight twist

---

## motion & feedback

transitions: `0.5–0.8s ease` default — slow, ceremonial, deliberate. The reader does not rush. Each card is turned with intention.

card-reveal animation: when a card is "drawn", it flips from face-down to face-up via a `rotateY(180deg)` 3D flip over `0.9s ease-in-out`. The back of the card is a `--gold-leaf` ornamental pattern; the face is the ivory illustrated card.

```css
@keyframes shimmer {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.12); }
}
.gilt { animation: shimmer 4s ease-in-out infinite; }
```

loading: a slow rotating sigil — `transform: rotate(360deg); transition: 4s linear infinite;` — paired with italic Garamond text "consulting the deck..." or "the cards are turning..."

success: a faint gold ripple expands from the affected element (a circular `box-shadow` expanding from 0 to 60px and fading over `0.8s ease-out`). Italic confirmation text fades in: "the reading is set."

error: the element gains a `--blood-arcana` border at `transition: 0.6s`. A small italic message appears: "the spread refuses." No shake, no flash — the cards withhold what they cannot give.

page enter: cards reveal in sequence with `0.15s` stagger, each one fading in while sliding up `translateY(16px) → 0`. As if being laid down one at a time by an unseen hand.

ambient: a slow drifting smoke wash on the page background using a low-opacity `--smoke-violet` radial gradient animated via `transform: translate()` at `20s ease-in-out infinite` — incense in the parlor.

---

## atmosphere

- velvet background field: the page body has `background: linear-gradient(180deg, var(--tarot-indigo) 0%, var(--tarot-purple) 100%);` with a subtle SVG noise texture overlay at low opacity for cloth grain
- ambient candlelight glow: `background: radial-gradient(ellipse 40% 40% at 70% 30%, rgba(201,165,87,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 30% 80%, rgba(201,165,87,0.05) 0%, transparent 70%);` — two soft amber pools where invisible candles burn
- ornamental gold filigree: SVG sigil glyphs scattered as decorative corner ornaments — eyes, stars, moons, hand glyphs, alchemical signs — always in `--gold-leaf` at moderate opacity
- card stock paper grain: card components carry a subtle off-white noise via SVG `<feTurbulence>` filter at very low opacity — slight aging on the ivory paper
- images: `filter: sepia(0.2) contrast(1.08) brightness(0.96);` with gold inner frame; never bright modern color photography. Anything image-like should feel illustrated in the Pamela Colman Smith line-engraving tradition.
- the One Big Moment of every page: a single ornate gold sigil or initial letter at oversized scale, placed asymmetrically — like the illuminated capital at the start of a hand-copied manuscript.

---

## editorial voice

button labels: divinatory, ceremonial. `DRAW A CARD`, `CAST THE SPREAD`, `REVEAL THE ARCANA`, `TURN THE NEXT`, `SHUFFLE THE DECK`, `CONSULT`, `CLOSE THE READING`, `OFFER`, `INVOKE`. uppercase Cinzel. weighty, never glib.

headings: declarative, archaic, occasionally Latin. `THE FOOL · 0`, `THE MAJOR ARCANA`, `WHAT THE CARDS SHOW`, `A READING FOR YOU`, `THE SUITS OF MINOR ARCANA`, `THE SPREAD UNFOLDS`. Roman numerals where appropriate.

metadata: ritual-style label-value pairs. `Card · The Star`, `Number · XVII`, `Element · Air`, `Aspect · Hope`, `Reading · Upright`, `Date · the third moon of waning autumn`. italic Garamond for values, Cinzel for labels.

placeholders: italic Garamond. `your question for the cards...`, `name of the seeker...`, `the matter at hand...`, `whispered intention...`. lowercase.

empty states: `the deck waits in silence.`, `no cards have been drawn.`, `the spread is yet to be cast.`, `nothing has yet been revealed.`. period. quiet, suggestive.

error messages: `the cards refuse this question.`, `the spread is incomplete.`, `the path is obscured — try again.`, `the deck is shuffled too quickly.`. period. mystical-flavored, never technical.

success messages: `the reading is set.`, `the card is drawn.`, `your spread is complete.`, `the arcana speaks.`. period. understated revelation.

---

## cursor & selection

- default: `cursor: default`
- interactive: `cursor: pointer`
- text input: `cursor: text; caret-color: var(--gold-leaf);`
- drag (drawing a card): `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--gold-leaf); color: var(--tarot-indigo); }` — selected text is gilded
- optional custom cursor on creative-focused pages: a small SVG hand glyph or all-seeing-eye that follows mouse with lerp, in `--gold-leaf` with a faint glow

---

**when to reach for this genome**

Use `tarot_spread.arcana` when the prompt asks for tarot, oracle cards, divination, occult readings, Major or Minor Arcana, card spreads, fortune-teller tools, ritual selection flows, deck browsers, meaning journals, or any product that should feel like illustrated cards laid slowly on indigo velvet.

Reach for it when visual or product cues include Rider-Waite-Smith linework, Thoth-deck color, Roman numerals, upright and reversed states, shuffle/draw/reveal actions, gold-foil card borders, candlelit parlor atmosphere, alchemical or astrological glyphs tied to a deck, suits of cups/wands/swords/pentacles, and interpretation copy written like a reading.

Do not use it for medieval vellum manuscripts, rubricated chapters, monastic archives, gold initials, or scriptorium folios; use `illuminated_codex.aureum`. Do not use it for stained-glass windows, cathedral tracery, jewel panes, lead caming, or sacred architecture; use `cathedral_glass.lux`. Do not use it for astronomy, observatory charts, ephemerides, orbital diagrams, star catalogs, or scientific celestial plates; use `celestial_plate.obs`. Do not use it for ancient Egyptian scrolls, cartouches, hieroglyphic borders, royal-scribe inventories, or papyrus administration; use `papyrus_scroll.ankh`.

It is strongest when the interface can become a card spread: draw, turn, reveal, read, compare positions, mark reversed meanings, and let each record behave like a card in a ritual layout. If the prompt mentions occult atmosphere but the product is really historical manuscript, stained glass, scientific astronomy, or Egyptian papyrus, choose that more specific genome.

## anti-patterns — this genome NEVER:

1. uses bright saturated neon colors, hot pink, cyan, or chartreuse. The palette is matte, dim, candlelit — indigo, ivory, gold, blood-red, violet. Anything brighter breaks the parlor atmosphere instantly.
2. uses sans-serif typography for primary content. All display is Cinzel/Trajan Roman-inscription serif; all body is Garamond/Baskerville old-style serif. Sans-serif belongs to clinical modernity, not occult ceremony.
3. uses Arabic digits in card titles or major numbering. Roman numerals only: I, II, III, IV, V, …, XXII. Page numbers and minor metadata may use Arabic, but anything ceremonial uses Roman.
4. uses border-radius above 12px. Tarot cards have softly rounded corners (6–8px). Nothing here is a circle or a bubble — these are flat illustrated cards stacked on velvet.
5. uses fast, snappy animations (under 0.3s). Motion is slow, ceremonial, reverent. The cards turn with weight. The minimum transition is 0.5s.
6. uses casual, friendly UX copy. "Click here to learn more" or "Sign up free!" would shatter the voice. Voice is archaic, divinatory, slightly Latin-flavored. "Draw a card." "The spread awaits."
7. uses flat single-tone gold. Gold is always treated with at least two values — `--gold-leaf` and `--gold-bright` — to suggest leaf-foil reflectivity, embossed shadow, candlelight catching the edge.
8. uses crisp modern photography. Imagery is illustrated, woodcut-engraved, Pamela Colman Smith linework with flat color fills. If a photograph must appear, it gets heavy sepia/contrast treatment and a gold inner frame so it reads as a Victorian illustration.
9. uses the blood-arcana red for anything other than the gravest signals — reversed cards, occult warnings, sacred emphasis. It is the single drop of sacrificial color in a deck otherwise built of gold and indigo.
10. uses bouncy, springy, or elastic easing curves. All motion is `ease`, `ease-in`, `ease-in-out`, or `linear`. The cards do not bounce. The deck does not wiggle. Gravity in this genome is slow and inevitable.
