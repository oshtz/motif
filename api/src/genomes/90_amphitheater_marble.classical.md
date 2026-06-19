---
id: "90"
name: amphitheater_marble.classical
keywords:
  - classical antiquity
  - greek
  - roman
  - marble
  - trajan
  - sculpture
  - museum
  - antiquities
  - ionic
  - parthenon
  - bronze
  - amphora
  - acropolis
  - hellenistic
---

### genome 90: `amphitheater_marble.classical`

> identity: classical antiquity museum catalog. The British Museum's Greek hall, the Metropolitan's Roman antiquities wing, Vatican Museums cataloging marble statuary. Pentelic marble cream, weathered bronze patina, deep Pompeii red, inscribed Trajan-capital typography. Not the Art Deco luxury of deco_metropolitan (genome 44, 1920s gilt) and not the cathedral stained-glass (66, gothic) — this is classical antiquity proper: marble surfaces, bronze fittings, inscribed serifs cut into stone, archaeological catalog precision. The Acropolis at dusk, an amphora rotating on a velvet plinth, a Latin inscription chiseled into a pediment fragment. Authoritative, scholarly, archaeological.

---

## surface

colors:
```
--marble-pentelic: #F2EAD6;      /* warm Pentelic marble cream — primary surface */
--marble-paros: #ECE3CE;         /* Parian marble cool variant */
--marble-shadow: #D6CBB1;        /* marble shadow / veining */
--marble-deep-shadow: #B5A989;   /* deeper marble shadow on ridges */
--marble-vein: rgba(120,98,62,0.18); /* the gray-brown veining lines */
--bronze-aged: #6B5A2E;          /* deep aged bronze — secondary dark */
--bronze-patina: #4E7568;        /* verdigris bronze patina — accent */
--bronze-bright: #B8923F;        /* freshly polished bronze highlight */
--inscription-ink: #1F1814;      /* deep cinnabar-blackened inscription depth */
--pompeii-red: #9D2A2A;          /* the deep Pompeian red — premium accent */
--lapis-blue: #2A4B82;           /* lapis lazuli mosaic-blue accent */
--saffron-gold: #C49432;         /* saffron gold leaf accent */
--text-charcoal: #2C2820;        /* warm charcoal body text */
--text-medium: #5E5444;          /* muted catalog-body */
--text-faint: rgba(31,24,20,0.45); /* tertiary text */
--rule-bronze: rgba(107,90,46,0.45); /* the bronze structural rule */
```

typography:
- display/titles: `"Cinzel", "Trajan Pro", "EB Garamond", serif` — `font-weight: 500–700; text-transform: uppercase; letter-spacing: 0.15em;` — sizes `2.5rem–7rem`. Roman square-capital inscription typography, the kind chiseled into the Pantheon's portico. Wide letter-spacing is mandatory — the Romans set their capitals broad.
- alternate display: `"Bodoni Moda", "Playfair Display", serif` — for Hellenistic-period catalog headings (more flowing Italian Renaissance interpretation of classical letterforms).
- body: `"EB Garamond", "Crimson Text", serif` — `font-weight: 400; font-size: 14–16px; line-height: 1.75; letter-spacing: 0.005em;` — the scholarly catalog body type, old-style Garalde serif at generous leading.
- italic emphasis (for Greek/Latin names): `"EB Garamond"; font-style: italic;` — for terms like *kouros*, *amphora*, *kylix*, *kosmos*, *contrapposto*, *imago clipeata*.
- catalog notation: `"IBM Plex Mono", monospace; font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--bronze-aged);` — for catalog numbers like `BM.GR.1816.0610.84`, `MET.G.R.07.286.115`, dimensions like `H 1.82 m`.
- small-caps for captions: `"EB Garamond"; font-variant: small-caps; letter-spacing: 0.12em;` — for object labels: "MARBLE STATUE OF A KOUROS, ATTICA, CIRCA 530 B.C.E."

borders:
- structural Trajan-rule: `2px solid var(--bronze-aged)` — the heavy bronze structural rule, used on hero panels and section dividers
- pedestal panel border: `1px solid var(--rule-bronze); box-shadow: inset 0 0 0 1px var(--marble-shadow);` — the slim bronze edge of a museum display plinth
- inscription frame: a rectangular `border: 2px solid var(--inscription-ink); border-radius: 0;` — like the frame of a stone tablet
- corner palmette ornaments: small SVG palmette (anthemion) flourishes in `--bronze-aged` at the corners of premium panels
- border-radius: `0–2px` predominantly (marble doesn't curve at corners); pill `999px` for chips/badges; `50%` only for circular bronze medallions

spacing:
- page edge: `5vw` horizontal padding
- vertical rhythm: `10–14vh` between major sections — the slow museum walk between display halls
- card padding: `32–48px` — generous like a marble plinth
- low-to-medium density. Museum catalogs balance information richness with reverent breathing space. Each object earns its case.

---

## color distribution

- 56% marble-pentelic / marble-paros / marble-shadow — the dominant warm-cream marble field
- 14% text-charcoal / text-medium — body text, scholarly content
- 10% bronze-aged / rule-bronze — structural rules, frames, secondary accents
- 6% inscription-ink — display typography, deep emphasis text
- 5% pompeii-red — premium accent for featured objects, hero callouts
- 4% bronze-patina (verdigris) — secondary accent for aged-bronze elements
- 3% bronze-bright / saffron-gold — interactive highlights, premium badges
- 2% lapis-blue — rare mosaic-accent color, used sparingly for cultural-specific markers

each page should feel like an open page in a museum's classical antiquities catalog: cream marble surface, deep Trajan-capital titles, bronze-edged plinth photographs, and one or two warm accents (Pompeii red or saffron gold) on featured objects.

---

## component patterns

buttons:
- primary (inscribed-bronze button): `background: var(--bronze-aged); color: var(--marble-pentelic); border: 1px solid var(--bronze-bright); border-radius: 0; padding: 14px 36px; font-family: "Cinzel", serif; font-weight: 600; font-size: 0.85rem; letter-spacing: 0.22em; text-transform: uppercase; box-shadow: inset 0 1px 0 var(--bronze-bright);` — like a chiseled bronze plaque
- pompeii-red CTA: `background: var(--pompeii-red); color: var(--marble-pentelic); border: 1px solid var(--bronze-aged);` — the premium featured CTA, used sparingly
- secondary outline: `background: transparent; color: var(--bronze-aged); border: 1px solid var(--bronze-aged); border-radius: 0; padding: 13px 34px; letter-spacing: 0.22em;`
- ghost: `background: transparent; color: var(--text-medium); border: none; font-style: italic; text-decoration: underline; text-underline-offset: 4px; text-decoration-color: var(--rule-bronze);`
- medallion button: a circular `width: 64px; height: 64px; border-radius: 50%; background: var(--bronze-aged); color: var(--marble-pentelic);` with a Roman numeral or sigil glyph — used for navigation chevrons or premium markers

inputs:
- `background: var(--marble-paros); border: none; border-bottom: 1px solid var(--bronze-aged); border-radius: 0; padding: 14px 0; font-family: "EB Garamond", serif; font-size: 1.05rem; color: var(--text-charcoal);` — like writing into a stone tablet
- label above: `font-family: "Cinzel"; font-weight: 500; font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--bronze-aged);`
- placeholder: italic Garamond in `var(--text-faint)`
- focus: `border-bottom-color: var(--pompeii-red); border-bottom-width: 2px;`

cards/panels (museum display plinths):
- standard plinth card: `background: var(--marble-pentelic); border: 1px solid var(--rule-bronze); border-radius: 0; padding: 40px; box-shadow: 0 2px 8px rgba(31,24,20,0.06), inset 0 0 0 1px var(--marble-shadow);` — marble panel with subtle inner highlight
- inscription panel (signature): `background: var(--marble-paros); border: 2px solid var(--bronze-aged); border-radius: 0; padding: 48px; box-shadow: inset 0 0 0 4px var(--marble-pentelic), inset 0 0 0 5px var(--bronze-aged);` — doubled bronze frame like an inscribed stone tablet
- bronze plinth variant (featured object): `background: var(--bronze-aged); color: var(--marble-pentelic); padding: 40px; border-radius: 0;` with palmette corner ornaments — dark bronze panels for premium featured content
- pompeii-red premium card: `background: var(--pompeii-red); color: var(--marble-pentelic); padding: 40px;` with `border: 1px solid var(--bronze-bright);` and gold-leaf accent details — the showcase Pompeian-red panel for hero features
- specimen-mounted card: a marble panel with a centered photographic plate framed in bronze, with italic Greek/Latin name beneath in Cinzel small caps

navigation:
- top bar: `background: var(--marble-pentelic); border-bottom: 2px solid var(--bronze-aged); padding: 22px 5vw; display: flex; justify-content: space-between;`
- brand: a small SVG anthemion glyph in `--bronze-aged` + wordmark in Cinzel uppercase letter-spaced 0.22em
- nav items: `font-family: "Cinzel", serif; font-weight: 500; font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-charcoal);`
- active: `color: var(--pompeii-red); border-bottom: 1px solid var(--pompeii-red);`
- separators: small palmette glyphs or vertical `1px` bronze rules

headers/hero:
- hero title: `font-family: "Cinzel", serif; font-weight: 600; font-size: 6–12vw; line-height: 1; letter-spacing: 0.1em; text-transform: uppercase; color: var(--inscription-ink);` — Trajan-capital scale title, dramatic letter-spacing
- italic Greek/Latin subtitle: `font-family: "EB Garamond"; font-style: italic; font-size: 1.4rem; color: var(--bronze-aged);` — "From the Acropolis Museum, Athens"
- catalog reference small-caps: `font-family: "EB Garamond"; font-variant: small-caps; letter-spacing: 0.15em; color: var(--text-medium); font-size: 0.85rem;` — "Catalogue №. 137 · Hellenistic Period"
- decorative palmette frieze: a horizontal SVG decorative band of anthemion (palmette) ornaments in `--bronze-aged` running across the top or bottom of hero panels — the architectural frieze
- hero composition: a large photographic plate of a marble sculpture (treated with cool marble light filtering) on one side; the Trajan-capital title on the other; a thin bronze-rule divider between

footers:
- `background: var(--bronze-aged); color: var(--marble-pentelic); padding: 64px 5vw; border-top: 2px solid var(--marble-pentelic);`
- columns of italic Garamond catalog links in `--marble-paros`
- center: a small SVG laurel-wreath ornament in `--bronze-bright`
- bottom row: catalog colophon in italic small-caps: "Pinacoteca delle Antichità · Founded MDCCCXVI · v. III"

dividers (signature — bronze rule with palmette):
- a horizontal `2px solid var(--bronze-aged)` rule with a centered palmette/anthemion SVG glyph via `::after` pseudo-element
- inscription divider: text in Cinzel uppercase letter-spaced `· EX VOTO ·` or `· CAPVT IX ·` centered between two thin bronze rules
- meander (Greek key) divider: an SVG band of the classic Greek-meander pattern in `--bronze-aged` running across the page width for major section breaks

lists:
- ordered with Roman numerals (`I.`, `II.`, `III.`, etc.) in `--bronze-aged` Cinzel followed by `.` and the body text in Garamond
- unordered with small palmette glyphs (`❀`, `✦`, `·`) in `--bronze-aged`
- specimen lists: each item shows a small marble-portrait thumbnail on the left, italic Greek/Latin name, period in small-caps, and catalog number on the right in mono

tables (catalog tables):
- header: `background: var(--bronze-aged); color: var(--marble-pentelic); font-family: "Cinzel"; font-variant: small-caps; letter-spacing: 0.2em; padding: 14px 20px; border-bottom: 2px solid var(--bronze-bright);`
- body rows: `font-family: "EB Garamond", serif; color: var(--text-charcoal); padding: 14px 20px; border-bottom: 1px solid var(--rule-bronze);`
- alternating rows: `background: rgba(107,90,46,0.04);`
- italic for object names (Greek/Latin), small-caps for period classifications, mono for dimensions

modals (a specimen vitrine):
- `background: var(--marble-pentelic); border: 2px solid var(--bronze-aged); border-radius: 0; padding: 56px 48px; box-shadow: inset 0 0 0 4px var(--marble-paros), inset 0 0 0 5px var(--bronze-aged), 0 24px 64px rgba(31,24,20,0.35);` — doubled bronze frame like a museum display label
- a small palmette ornament in the upper corner
- modal title in Cinzel uppercase Trajan capitals
- backdrop: `background: rgba(31,24,20,0.85); backdrop-filter: blur(3px);` — museum-hall darkness
- close: italic Garamond `× close case` link

badges/tags (period classifications):
- pill `border-radius: 999px; padding: 4px 14px; font-family: "Cinzel"; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;`
- ARCHAIC (c. 800–480 B.C.E.): `background: transparent; border: 1px solid var(--bronze-aged); color: var(--bronze-aged);`
- CLASSICAL (480–323 B.C.E.): filled `background: var(--bronze-aged); color: var(--marble-pentelic);`
- HELLENISTIC (323–31 B.C.E.): filled `background: var(--bronze-patina); color: var(--marble-pentelic);`
- ROMAN: filled `background: var(--pompeii-red); color: var(--marble-pentelic);`
- LATE ANTIQUITY: filled `background: var(--saffron-gold); color: var(--inscription-ink);`
- VOTIVE / RARE: filled `background: var(--lapis-blue); color: var(--marble-pentelic);` — used sparingly

progress bars:
- track: `height: 4px; background: var(--marble-shadow); border-radius: 0; border: 1px solid var(--rule-bronze);`
- fill: `background: var(--bronze-aged); height: 100%;`
- label in Cinzel uppercase small caps: `Catalogue · 27 of 137`

tooltips:
- `background: var(--inscription-ink); color: var(--marble-pentelic); border: 1px solid var(--bronze-aged); border-radius: 0; padding: 10px 14px; font-family: "EB Garamond", serif; font-style: italic; font-size: 0.85rem; box-shadow: 0 8px 24px rgba(31,24,20,0.4);` — like a small bronze museum label

---

## interaction language

- hover (buttons): the bronze brightens — `box-shadow: inset 0 1px 0 var(--bronze-bright), 0 0 24px rgba(184,146,63,0.18); filter: brightness(1.08);`. `transition: 0.5s ease;` — slow museum pace
- hover (cards): the plinth gains a subtle warm uplight — `box-shadow: 0 12px 40px rgba(31,24,20,0.18), inset 0 0 0 1px var(--marble-shadow); transform: translateY(-2px);`. `transition: 0.6s ease;`
- hover (marble images): the photograph brightens slightly via `filter: brightness(1.04);` — as if the museum spotlight has shifted
- hover (links): `color: var(--pompeii-red); border-bottom: 1px solid var(--pompeii-red);` — pure color shift to the deep Pompeian red
- active/pressed: `transform: scale(0.99); filter: brightness(0.97);` — the heavy press of stone
- focus: `outline: 1px solid var(--bronze-aged); outline-offset: 4px;`
- selected: `background: var(--marble-paros); border-left: 3px solid var(--pompeii-red); padding-left: 16px;` for list items
- disabled: `opacity: 0.35; filter: grayscale(0.65);` — the specimen has been deaccessioned
- drag: `cursor: grab; transform: rotate(-0.5deg); box-shadow: 0 32px 80px rgba(31,24,20,0.4);` — lifting a marble fragment from its plinth

---

## motion & feedback

transitions: `0.5–0.8s ease` default — slow, weighted, the pace of museum visits. Marble does not move quickly; bronze patina takes centuries to form; motion respects this.

museum-spotlight animation: hero images and featured specimens have a subtle radial-gradient highlight that slowly drifts position via `background-position` over `12s ease-in-out infinite` — simulating the slow movement of museum lighting across a sculpture.

```css
@keyframes spotlight-drift {
  0%, 100% { background-position: 30% 30%; }
  50% { background-position: 60% 40%; }
}
.specimen-image { animation: spotlight-drift 16s ease-in-out infinite; }
```

loading: a thin bronze-aged rule traces around the affected element via `clip-path` animation over `1.2s ease-out`, suggesting the chiseling of an inscription. Or: a small SVG laurel wreath rotates slowly.

success: a slow bronze-bright glow expands from the affected element via `box-shadow` over `0.9s ease-out`. Italic Garamond confirmation: `Recorded in the catalogue.` or `Specimen accessioned.`

error: the field gains a `--pompeii-red` underline at `transition: 0.6s ease;`. Italic message: `Reference cannot be verified.` or `The catalogue does not record this artefact.`. No flash; museum errors are quiet.

page enter: cards reveal with `0.12s` stagger, each fading from `opacity: 0` to `1` and translating from `translateY(16px) → 0` over `0.8s ease-out`. As if specimens are being placed on plinths one at a time.

ambient: hero marble plinth photographs can have a very slow `transform: rotate()` of `0deg → 0.5deg` over `12s ease-in-out alternate infinite` — the gentle simulated rotation of an object on a museum's display turntable.

---

## atmosphere

- marble surface texture: body backgrounds and primary card surfaces use a faint SVG `<feTurbulence>` filter at very low opacity to simulate marble veining — gentle warm-gray noise on cream
- vein streaks: a few subtle `--marble-vein` colored streaks drawn via SVG paths placed asymmetrically on hero panels — the real veining of Pentelic marble
- museum spotlight: hero sections use `background: radial-gradient(ellipse 60% 50% at 50% 30%, rgba(196,148,50,0.06) 0%, transparent 65%);` — a single warm gallery spotlight from above
- bronze-rule frame: hero compositions often include a thin bronze rectangular frame around major content groups — the museum vitrine outline
- palmette/anthemion friezes: decorative SVG bands of classical Greek-meander or Roman-fillet ornament running horizontally across hero panels in `--bronze-aged`
- images: `filter: contrast(1.08) saturate(0.85) sepia(0.05);` — slight desaturation and warm cast suggesting museum-spot lighting on marble. Bordered with `1px solid var(--bronze-aged)` plus `box-shadow: 0 12px 32px rgba(31,24,20,0.15);`
- the page should feel like an open page from a leather-bound museum catalog: marble field, bronze rules, Trajan-capital titles, italic Garamond captions, classical ornaments at the corners

---

## editorial voice

button labels: museum-catalog imperatives in Cinzel uppercase. `EXAMINE`, `CONSULT THE CATALOGUE`, `OPEN VITRINE`, `RECORD ACCESSION`, `RETURN TO PLINTH`, `VIEW PROVENANCE`, `ENTER THE GALLERY`. wide letter-spacing, weighty.

headings: scholarly archaeological titles. `MARBLE STATUE OF A KOUROS · ATTICA · c. 530 B.C.E.`, `THE PARTHENON FRIEZE · NORTH SECTION`, `HELLENISTIC FRESCO FRAGMENTS`, `ON THE CONTRAPPOSTO POSE`, `CATALOGUE №. 137 · ROMAN PERIOD`. Title case for prose headings, all-caps Cinzel for object titles.

metadata: archaeological catalog-label format. `Material · Pentelic marble`, `Dimensions · H 1.82 m × W 0.94 m`, `Provenance · The Acropolis, Athens · Excavated 1882`, `Accession № BM.GR.1816.0610.84`, `Period · Late Archaic`, `Condition · Fragmentary; head and right arm restored`. Title case labels, italic for material/style descriptors.

placeholders: italic Garamond. `accession number...`, `provenance details...`, `notes on the specimen...`, `period and style...`. lowercase, italic.

empty states: `No artefacts currently catalogued in this gallery.`, `The vitrine awaits acquisition.`, `No specimens of this period in the collection.`, `Provenance unrecorded.`. Title case sentences, formal museum register.

error messages: `The catalogue does not record this reference.`, `Provenance cannot be authenticated.`, `Accession failed — consult the registrar.`, `Reference incomplete — supply provenance.`. Period, formal-archaeological, no apology.

success messages: `Accessioned.`, `Specimen catalogued.`, `Provenance recorded.`, `Returned to the plinth.`. Title case past-tense. Institutional satisfaction.

---

## cursor & selection

- default: `cursor: default`
- interactive: `cursor: pointer`
- text input: `cursor: text; caret-color: var(--pompeii-red);`
- drag: `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--bronze-aged); color: var(--marble-pentelic); }` — selection reads like inscribed bronze

---

**when to reach for this genome**

Use `amphitheater_marble.classical` when the prompt asks for Greek or Roman antiquity, marble statuary, archaeological cataloging, museum object labels, amphorae, friezes, kouroi, classical inscriptions, provenance records, accessioned antiquities, bronze patina, Pompeian red accents, or any product that should feel like an authoritative classical antiquities catalogue.

Reach for it when the concrete cues are Pentelic or Parian marble surfaces, bronze rules, Trajan-style wide-lettered capitals, Cinzel or Garamond scholarly type, Latin/Greek object names, Roman numerals, plinth cards, vitrine modals, palmette or Greek-key ornaments, accession numbers, dimensions, excavation provenance, desaturated sculpture photography, and formal museum actions such as `EXAMINE`, `CONSULT THE CATALOGUE`, `OPEN VITRINE`, or `RECORD ACCESSION`.

Do not use it for contemporary gallery websites, white-cube exhibition programs, generative sculpture portfolios, or cool institutional web restraint; use `gallery_foyer.institution`. Do not use it for 1920s gold-on-navy hotel luxury, Gatsby ceremony, sunbursts, chevrons, or Art Deco membership pages; use `deco_metropolitan.gilt`. Do not use it for Gothic stained glass, cathedrals, rose windows, leaded jewel panes, or sacred luminosity; use `cathedral_glass.lux`. Do not use it for Egyptian papyrus documents, hieroglyphic borders, cartouches, House-of-Life registers, or warm ochre scroll administration; use `papyrus_scroll.ankh`. Do not use it for medieval vellum manuscripts, illuminated initials, rubricated columns, or monastic codices; use `illuminated_codex.aureum`. Do not use it for crystals, Mohs hardness, black velvet specimen plinths, or mineralogy exhibits; use `mineral_specimen.crystal`.

It is strongest when the subject is classical antiquity treated as a museum specimen: stone, bronze, inscription, provenance, period, accession, and scholarly caption. If the prompt is gallery-modern, Deco luxury, Gothic sacred, Egyptian administrative, medieval manuscript, or geology, choose the more specific neighboring genome.

---

## anti-patterns — this genome NEVER:

1. uses bright modern brand colors (electric blue, neon green, hot magenta). The palette is archaeological-authentic: marble cream, bronze ages, deep Pompeian red, lapis blue, saffron gold. Anything brighter feels anachronistic.
2. uses sans-serif typography for any primary content. All display is Cinzel/Trajan Roman-capital serif; body is EB Garamond Garalde serif. Mono is reserved for catalog numbers and dimensions only. Sans-serif feels too contemporary for an antiquities catalog.
3. uses border-radius above 4px on rectangular elements. Marble plinths, bronze frames, and stone tablets are square. The only curved elements are bronze medallions (50%) and pill badges (999px).
4. uses fast snappy transitions. Motion is slow, gallery-paced, archaeological — `0.5–0.8s ease`. The minimum transition is 0.4s; nothing snaps.
5. uses Arabic numerals for major numbering or chapter markers. Use Roman numerals: I, II, III, IV, MDCCCXVI. Arabic is acceptable for catalog accession numbers and dates only.
6. uses casual or playful UX copy. Voice is scholarly-archaeological: `Examine specimen.`, `Open vitrine.`, `Accessioned.`. Never `Click here!`, `Quick action`, or `Saved!`.
7. uses heavily saturated photography. Images get slight sepia (0.05) + desaturation + warm cast suggesting museum spotlighting. Modern color photography feels wrong on a marble plinth.
8. uses italic for body text indiscriminately. Italic is reserved for Greek/Latin object names, scholarly terms (*kouros*, *amphora*, *contrapposto*), and divinatory captions. Body prose is roman Garamond.
9. uses neon glow effects, CSS shaders, or web-2025 visual gimmickry. The genome lives in 19th-century scholarly catalog tradition. Glow shaders belong to other genomes.
10. uses the Pompeian red as a broad fill color. It is a premium accent reserved for featured CTAs, period badges, and hero callouts — a small percentage of the page. The dominant colors remain marble cream and bronze.
