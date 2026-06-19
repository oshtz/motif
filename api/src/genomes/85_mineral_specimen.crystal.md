---
id: "85"
name: mineral_specimen.crystal
keywords:
  - mineralogy
  - crystal
  - gem
  - geology
  - lapidary
  - museum
  - specimen
  - lattice
  - faceted
  - mohs scale
  - quartz
  - amethyst
  - obsidian
  - mineralogical
---

### genome 85: `mineral_specimen.crystal`

> identity: museum mineralogy display under low gallery lighting. Smithsonian gem hall meets faceted crystal lattice diagrams meets a Victorian gentleman-naturalist's cabinet. Specimens mounted on black velvet bases with engraved brass labels, Mohs hardness scale markers, lapidary cut diagrams (brilliant, princess, marquise), and crystallographic axis annotations. Not herbarium (genome 73, pressed botanicals on cream paper) — this is geology: deep dark velvet field, hot specimen colors (amethyst purple, citrine yellow, ruby red, malachite green), faceted polygon shapes with refractive highlights, and the cold authority of a scientific catalog.

---

## surface

colors:
```
--velvet-base: #0E0C12;        /* deep museum velvet — primary dark */
--velvet-warm: #161320;        /* raised surface — display plinth */
--velvet-pedestal: #1F1A2A;    /* card backgrounds — the specimen mount */
--cabinet-cream: #ECE3D0;      /* engraved brass label cream — primary text */
--brass-warm: #B8924E;         /* engraved brass accent */
--brass-bright: #D9B26F;       /* polished brass highlight */
--brass-dim: rgba(184,146,78,0.32); /* faded brass */
--specimen-amethyst: #7B3FA8;  /* purple gem accent */
--specimen-citrine: #D9A036;   /* yellow gem accent */
--specimen-ruby: #B5283C;      /* red gem accent */
--specimen-malachite: #2D8262; /* green gem accent */
--specimen-azurite: #2557B8;   /* blue gem accent */
--obsidian-shine: #C8C2D1;     /* polished obsidian surface highlight, primary light text */
--crystal-edge: rgba(216,206,225,0.4); /* refractive edge highlight on facets */
--lattice-grid: rgba(184,146,78,0.18); /* the crystallographic grid lines */
```

typography:
- display/titles: `"Cormorant Garamond", "Playfair Display", serif` — `font-weight: 400–600; letter-spacing: 0.02em;` — sizes `2.5rem–6rem`. The engraved label-card aesthetic of museum specimens. Italic variant used for Latin nomenclature.
- body: `"Crimson Text", "Cormorant Garamond", serif` — `font-weight: 400; font-size: 14–16px; line-height: 1.7; letter-spacing: 0.005em;` — the descriptive catalog body type.
- meta/scientific notation: `"IBM Plex Mono", "JetBrains Mono", monospace` — `font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--brass-warm);` — for `Sp.Gr. 2.65`, `Mohs 7`, `Trigonal/Hexagonal`, `H₂O · SiO₂ trace`.
- latin names: `font-family: "Cormorant Garamond"; font-style: italic; font-weight: 400;` — for `Amethystus quartz`, `Beryl var. emerald`, mineral binomial nomenclature.
- engraved label: `font-family: "Cormorant Garamond"; font-variant: small-caps; letter-spacing: 0.15em; color: var(--brass-bright);` — like the small-caps inscription on brass plaques.

borders:
- specimen frames (signature element): `1px solid var(--brass-warm); box-shadow: inset 0 0 0 1px var(--brass-dim), 0 0 0 4px var(--velvet-warm);` — a thin brass frame with a velvet-recessed mount
- crystallographic grid: `1px solid var(--lattice-grid)` — used as overlay on certain cards to suggest the underlying crystal structure
- facet edges (signature): polygonal `clip-path` shapes — `polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)` (hexagonal crystal cross-section) on hero panels
- standard panel borders: `1px solid rgba(184,146,78,0.18);` — faint brass edge in velvet darkness
- border-radius: `2–4px` for soft cabinet drawer feel; `0px` for hard-cut facet edges; polygon clip-paths for crystal-cut faces

spacing:
- page edge: `5vw` horizontal padding
- vertical rhythm: `8–12vh` between major sections — the slow museum walk
- card padding: `28–40px`
- moderate density. Museum displays balance information richness with breathing space. Each specimen earns its case.

---

## color distribution

- 64% velvet (`--velvet-base`, `--velvet-warm`, `--velvet-pedestal`) — the museum darkness that absorbs light
- 14% cabinet-cream / obsidian-shine — text, primary labels, brass-engraved typography
- 10% brass (`--brass-warm`, `--brass-bright`, `--brass-dim`) — frames, rules, accents, interactive highlights
- 6% specimen-amethyst — the primary feature color (one specimen color leads per page)
- 3% specimen-citrine — secondary specimen accent
- 2% specimen-ruby — tertiary specimen accent, alert/error signal
- 1% specimen-malachite + azurite — minor accent specimens, used sparingly

each page leads with ONE specimen color (e.g., amethyst-led page, ruby-led page) and uses the others only as supporting micro-accents. The dominant specimen color appears as a hero faceted shape, in chip badges, and as interactive highlights.

---

## component patterns

buttons:
- primary (cut-gem button): `background: var(--specimen-amethyst); color: var(--obsidian-shine); border: 1px solid var(--brass-warm); border-radius: 2px; padding: 14px 32px; font-family: "Cormorant Garamond", serif; font-weight: 500; font-size: 0.95rem; letter-spacing: 0.06em; text-transform: uppercase; box-shadow: inset 0 1px 0 var(--crystal-edge), 0 0 24px rgba(123,63,168,0.25);` — like a faceted gem catching light from above
- alternate cut buttons: same shape with citrine, ruby, malachite as `--background` for variant CTAs
- secondary: `background: transparent; color: var(--brass-bright); border: 1px solid var(--brass-warm); border-radius: 2px; padding: 13px 30px; letter-spacing: 0.06em; text-transform: uppercase;`
- ghost: `background: transparent; color: var(--obsidian-shine); border: none; font-style: italic; text-decoration: underline; text-underline-offset: 4px; text-decoration-color: var(--brass-dim);`
- faceted button (signature): clip-path polygon `clip-path: polygon(8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%, 0 50%);` — gem-cut button shape

inputs:
- `background: var(--velvet-warm); border: none; border-bottom: 1px solid var(--brass-warm); border-radius: 0; padding: 14px 0; font-family: "Cormorant Garamond", serif; font-size: 1.05rem; color: var(--obsidian-shine);`
- label above: `font-family: "IBM Plex Mono", monospace; font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--brass-warm); margin-bottom: 8px;`
- placeholder: italic Cormorant in `rgba(216,194,209,0.4)`
- focus: `border-bottom-color: var(--brass-bright); box-shadow: 0 1px 0 0 var(--brass-bright), 0 0 20px rgba(217,178,111,0.15);`

cards/panels (specimen displays):
- standard (a mounted specimen): `background: var(--velvet-pedestal); border: 1px solid var(--brass-warm); border-radius: 4px; padding: 32px; box-shadow: inset 0 0 24px rgba(0,0,0,0.5), 0 12px 32px rgba(0,0,0,0.4), 0 0 0 1px var(--brass-dim);` — velvet inset with brass frame
- engraved label section at the base of each card: `background: var(--velvet-warm); border-top: 1px solid var(--brass-warm); padding: 16px 24px; font-family: "Cormorant Garamond"; font-variant: small-caps; letter-spacing: 0.15em; color: var(--brass-bright);` — like a brass plaque mounted to a wooden display
- hexagonal specimen card (signature): `clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);` — a hexagonal crystal-cut card shape used for hero specimens
- gem-led card: leftside of the card features a polygonal SVG facet rendering of the specimen color (amethyst/ruby/etc) with subtle refractive highlights via CSS `radial-gradient`
- cabinet-drawer variant: a card styled as a pulled-out wooden cabinet drawer with `border-top: 4px solid var(--brass-warm); background: var(--velvet-pedestal);` and a small brass pull-handle SVG centered at the top

navigation:
- top bar: `background: var(--velvet-base); border-bottom: 1px solid var(--brass-warm); padding: 20px 5vw; box-shadow: 0 2px 24px rgba(0,0,0,0.5);`
- brand: a small SVG crystalline glyph in `--brass-bright` next to a serif wordmark in `--obsidian-shine`
- nav items: `font-family: "Cormorant Garamond", serif; font-style: italic; font-size: 1rem; color: var(--obsidian-shine);` separated by `·` brass dots
- active: `color: var(--brass-bright); border-bottom: 1px solid var(--brass-bright);`

headers/hero:
- hero title: `font-family: "Cormorant Garamond", serif; font-weight: 500; font-size: 5–8vw; letter-spacing: 0.02em; line-height: 1.05; color: var(--obsidian-shine);` — museum-catalog title weight
- italic Latin subtitle: `font-family: "Cormorant Garamond"; font-style: italic; font-size: 1.4rem; color: var(--brass-bright);` — the scientific binomial below the title
- a large polygonal SVG facet of the specimen (hexagonal, faceted, refractive) placed beside the title at hero scale — rendered with internal facet planes in varying tints of the specimen color
- mono catalog number: `cat.no. 85.137-A` in `--brass-warm` mono at small size

footers:
- `background: var(--velvet-base); border-top: 1px solid var(--brass-warm); padding: 56px 5vw;`
- a horizontal line of small specimen-color faceted glyphs in a row across the top of the footer — the Mohs scale visualized
- text in `--obsidian-shine` italic Cormorant
- catalog signature: `cabinet of mineralogical curiosities · est. 1872` in small-caps `--brass-bright`

dividers (signature — crystallographic axis):
- a thin brass rule with a centered crystal-facet glyph: `border: none; height: 1px; background: var(--brass-warm); margin: 48px 0;` with a `::after` pseudo-element rendering an SVG hexagon or diamond glyph in `--brass-bright`
- a "Mohs scale" divider: a horizontal sequence of 10 small numbered squares from 1 (talc) to 10 (diamond), used to mark specimen hardness sections
- never a plain `<hr>` — always brass rule + crystal glyph

lists:
- prefixed with small specimen-color faceted glyphs — `◆` or polygon SVGs in the dominant specimen color
- ordered: numerals in `--brass-bright` Cormorant followed by `.` and the body text in `--obsidian-shine`
- specimen lists: each item is a mini-card with a facet glyph on the left, Latin name in italic, common name in roman, and Mohs/Sp.Gr. metadata on the right in mono

tables (specimen catalog):
- header: `background: var(--velvet-warm); color: var(--brass-bright); font-family: "Cormorant Garamond"; font-variant: small-caps; letter-spacing: 0.15em; padding: 14px 20px; border-bottom: 1px solid var(--brass-warm);`
- body rows: `font-family: "Cormorant Garamond"; color: var(--obsidian-shine); padding: 12px 20px; border-bottom: 1px solid rgba(184,146,78,0.12);`
- alternating rows: `background: rgba(184,146,78,0.04);`
- Latin name column: rendered italic; numerical columns rendered mono; categorical columns small-caps

modals (a specimen vitrine):
- `background: var(--velvet-pedestal); border: 1px solid var(--brass-warm); border-radius: 4px; padding: 48px 40px; box-shadow: inset 0 0 32px rgba(0,0,0,0.4), 0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px var(--brass-dim);`
- a thin `1px solid var(--brass-bright)` accent line at the top (the brass display rail)
- backdrop: `background: rgba(14,12,18,0.92); backdrop-filter: blur(4px);` — gallery dimmed
- close: an italic `× close case` link in `--brass-warm`

badges/tags (Mohs and specimen markers):
- pill `border-radius: 999px; padding: 4px 12px; font-family: "IBM Plex Mono", monospace; font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase;`
- Mohs hardness chip: `background: transparent; border: 1px solid var(--brass-warm); color: var(--brass-bright);` reading like `Mohs 7`
- specimen-class chip (one per dominant gem color): filled `background: var(--specimen-amethyst); color: var(--obsidian-shine);`
- rare/featured: filled gold `background: var(--brass-bright); color: var(--velvet-base);`
- alert: `background: var(--specimen-ruby); color: var(--obsidian-shine);`

progress bars (Mohs scale visualized):
- track: `height: 6px; background: var(--velvet-warm); border-radius: 0; border: 1px solid var(--brass-dim);`
- fill: `background: linear-gradient(90deg, var(--specimen-malachite), var(--specimen-amethyst), var(--specimen-ruby)); height: 6px;` — the geological hardness gradient
- mono label to the side: `Mohs 7 of 10`

tooltips:
- `background: var(--velvet-warm); color: var(--obsidian-shine); border: 1px solid var(--brass-warm); border-radius: 2px; padding: 8px 12px; font-family: "Cormorant Garamond"; font-style: italic; font-size: 0.85rem; box-shadow: 0 8px 24px rgba(0,0,0,0.6);` — italic specimen description

---

## interaction language

- hover (buttons): the gem catches more light — `box-shadow: inset 0 1px 0 var(--crystal-edge), 0 0 36px rgba(123,63,168,0.4); filter: brightness(1.1);`. `transition: 0.5s ease;` — slow refractive shift
- hover (cards): the specimen rotates slightly — `transform: perspective(800px) rotateY(-2deg) rotateX(1deg); box-shadow: inset 0 0 32px rgba(0,0,0,0.5), 0 16px 48px rgba(0,0,0,0.5), 0 0 80px rgba(184,146,78,0.08);` — a faint warm glow appears as if a museum spotlight has shifted. `transition: 0.6s ease;`
- hover (facet shapes): an internal CSS `radial-gradient` highlight repositions to follow the cursor — simulating light catching the gem's facet
- hover (links): `color: var(--brass-bright);` — pure color shift, slight italic emphasis
- active/pressed: `transform: scale(0.985); filter: brightness(0.95);` — pressed into the velvet
- focus: `outline: 1px solid var(--brass-bright); outline-offset: 4px;`
- selected (specimen): the card gains a strong brass frame `box-shadow: 0 0 0 2px var(--brass-bright), 0 0 60px rgba(217,178,111,0.25);`
- disabled: `opacity: 0.3; filter: grayscale(0.7);` — the specimen has been removed from display
- drag: `cursor: grab; transform: rotate(-1deg); box-shadow: 0 30px 80px rgba(0,0,0,0.8);` — lifting a specimen from its mount

---

## motion & feedback

transitions: `0.4–0.7s ease` default — slow, weighted, like the heavy walk through a gallery. Crystals do not move quickly.

facet-light animation: hero specimen facets have an internal `radial-gradient` that slowly drifts position via animated `background-position` over `12s ease-in-out infinite` — simulating slow rotation of light across a polished gem face.

```css
@keyframes facet-shimmer {
  0%, 100% { background-position: 25% 25%; }
  50% { background-position: 75% 75%; }
}
.facet { animation: facet-shimmer 12s ease-in-out infinite; }
```

loading: a faceted hexagon rotates slowly via `transform: rotate(360deg); transition: 4s linear infinite;` — paired with a small-caps text `EXAMINING SPECIMEN...` in brass.

success: a slow brass-warm glow expands from the affected element — `box-shadow: 0 0 0 0 var(--brass-bright)` to `0 0 60px 0 transparent` over `0.9s ease-out`. Italic confirmation text: `catalogued.` or `specimen logged.`

error: a slow ruby flash on the element border — `border-color: var(--specimen-ruby); transition: 0.5s ease;` — paired with italic `not a match.` or `specimen unrecognised.`. No shake, no flash; geology is patient.

page enter: specimen cards reveal with `0.12s` stagger, each fading and scaling from `0.97` to `1.0` over `0.7s ease-out`. As if being placed one at a time into the cabinet.

idle ambient: subtle slow drift on hero facet — `transform: rotate(0deg) translateZ(0)` to `rotate(0.5deg)` over `8s ease-in-out alternate infinite` — as if the specimen turns lazily on its mount.

---

## atmosphere

- velvet field texture: body background is `--velvet-base` with a subtle SVG noise overlay at very low opacity, giving the deep darkness a faint velvet nap
- spot lighting: hero sections use `background: radial-gradient(ellipse 60% 50% at 50% 30%, rgba(184,146,78,0.08) 0%, transparent 70%);` — a single warm museum spotlight from above
- crystallographic grid (optional, on cards): a faint `1px` hairline grid in `--lattice-grid` underlying card content, suggesting the unit cell of a crystal lattice
- faceted polygon backgrounds: large SVG hexagonal/octahedral shapes rendered behind hero content in deeper velvet tones with brass-warm edge highlights — gem-cut backgrounds
- images: `filter: contrast(1.12) saturate(1.05) brightness(0.95);` with a thin `1px solid var(--brass-warm)` border. Photographs feel like specimen plates: dark velvet background, dramatic spot lighting, hot specimen color.
- refractive edge highlights: hero specimen shapes have a `box-shadow: inset 0 1px 0 var(--crystal-edge);` to simulate light catching the polished facet edge — the signature look
- one big shape per page: an oversized faceted hexagon, octahedron, or rough crystal cluster rendered in SVG, placed asymmetrically, dominating the composition

---

## editorial voice

button labels: museum-catalog imperatives. `EXAMINE SPECIMEN`, `OPEN CASE`, `VIEW LATTICE`, `CATALOGUE`, `MOUNT ON DISPLAY`, `RETIRE FROM EXHIBITION`, `REQUEST FROM ARCHIVE`. uppercase Cormorant. weighty, scholarly.

headings: scholarly, scientific, slightly archaic. `Cabinet of Mineralogical Curiosities`, `On the Crystallography of Amethyst`, `Specimen 85.137-A · Brazilian Citrine`, `The Mohs Hardness Scale`, `Notes on Faceted Cuts`. Title case for headings, italic for Latin nomenclature.

metadata: scientific notation in mono uppercase. `Sp.Gr. 2.65`, `MOHS 7`, `HABIT · TRIGONAL`, `LUSTRE · VITREOUS`, `FRACTURE · CONCHOIDAL`, `LOCALITY · MINAS GERAIS`. Period for abbreviations, uppercase for terms.

placeholders: italic Cormorant. `search the catalogue...`, `specimen name or accession number...`, `notes on this specimen...`. lowercase, italic.

empty states: `No specimens in this case.`, `The cabinet is empty.`, `No matching records in the archive.`, `Awaiting acquisition.`. Title case sentences, formal museum register.

error messages: `Specimen not recognised.`, `Unable to retrieve catalogue entry.`, `Mounting failed — try again.`, `Access to the archive denied.`. Period, formal, no apology, no exclamation.

success messages: `Catalogued.`, `Specimen mounted.`, `Entered into the archive.`, `Display updated.`. Title case past-tense, satisfied institutional restraint.

---

## cursor & selection

- default: `cursor: default`
- interactive: `cursor: pointer`
- text input: `cursor: text; caret-color: var(--brass-bright);`
- drag: `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--brass-warm); color: var(--velvet-base); }` — selected text reads like polished brass

---

**when to reach for this genome**

Use `mineral_specimen.crystal` when the prompt asks for mineralogy, geology, natural-history collections, crystal specimens, museum gem halls, specimen databases, lapidary diagrams, Mohs hardness, crystallographic lattices, accessioned rocks, or any product that should feel like a geological specimen mounted on black velvet with a brass catalog label.

Reach for it when the concrete cues are dark velvet fields, brass frames, old-style serif catalog text, italic Latin/mineral names, mono scientific notation, faceted hexagon or crystal-cluster shapes, amethyst/citrine/ruby/malachite/azurite specimen colors, Mohs scale chips, specific-gravity metadata, locality labels, cabinet drawers, spot lighting, and workflow verbs like examine, catalogue, mount, retrieve, compare hardness, view lattice, or update a specimen case.

Do not use it for high-end jewelry retail, ring configurators, bridal appointments, GIA certificates, carat/clarity comparison, gold prongs, loupe views, or one-stone luxury ecommerce; use `gem_jeweler.facet`. Do not use it for pressed plants, herbarium sheets, botanical taxonomy, dried leaves, or Kew-style research archives; use `herbarium_plate.specimen`. Do not use it for white-cube museum programming, curatorial essays, exhibition pages, or gallery institutional authority without geological specimen mechanics; use `gallery_foyer.institution`. Do not use it for Art Deco hotel glamour, sunburst architecture, navy-and-gold ceremony, or Gatsby patronage; use `deco_metropolitan.gilt`. Do not use it for auction estimates, lot cards, bidding rooms, provenance sale mechanics, or gavel-led object commerce; use `auction_lot.gavel`.

It is the right choice when science, geology, and collection classification are as important as the crystal visuals. If the prompt is luxury retail, botanical science, general cultural authority, Deco ceremony, or sale-room bidding, choose the neighboring genome that owns that institution and transaction.

## anti-patterns — this genome NEVER:

1. uses bright daylight backgrounds. The genome lives in gallery darkness; backgrounds are velvet, never paper-white. Light comes FROM the specimens (their colors), not FROM the field.
2. uses primary colors at full saturation as broad fills. Specimen colors (amethyst, citrine, ruby, malachite, azurite) appear as concentrated gem-points and facets, never as flat broad color blocks like a Mondrian.
3. uses sans-serif typography for primary content. All display and body are old-style serif (Cormorant, Crimson, Playfair). Mono is reserved for scientific notation only. Sans-serif feels too contemporary for a 19th-century mineral cabinet.
4. uses border-radius above 8px on rectangular elements. Specimens are cut, faceted, and polished — corners are crisp. Polygonal clip-paths give the curved feel through facets, not blur.
5. uses fast snappy animations (under 0.4s). Motion is heavy, slow, gallery-paced. Light slowly catches a facet; specimens rotate lazily; cabinets open with weight.
6. uses casual or technical UX copy. Voice is scholarly-museum: `Catalogued.`, `Specimen mounted.`, `Examine specimen.` Never `Saved!`, `Click here!`, `Quick action`.
7. uses bright glow effects, neon outlines, or CSS-shader rave aesthetics. Lighting is warm tungsten brass — `rgba(184,146,78,...)`. The room is dark and slow; nothing screams.
8. mixes more than 2 specimen colors as broad accents on one page. One dominant gem color (e.g., amethyst), supported by at most one secondary (e.g., brass/citrine highlights), and minor mono accents for catalog data. More than that becomes a gem-shop window, not a curated specimen cabinet.
9. uses Latin nomenclature in roman type. Binomial scientific names (`Amethystus quartz`, `Beryl var. emerald`) are ALWAYS italic, per museum-publication convention. Anything else feels typographically incorrect.
10. uses brutalist hard shadows or web-3D drop shadows. Shadows are inset velvet recessions and outer warm-tungsten glows — atmospheric, never theatrical.
