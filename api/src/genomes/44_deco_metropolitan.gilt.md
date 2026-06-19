---
id: "44"
name: deco_metropolitan.gilt
keywords:
  - deco
  - metropolitan
  - luxury
  - gold
  - geometric
  - gatsby
  - sunburst
  - chevron
  - navy
  - opulent
  - architectural
---

### genome 44: `deco_metropolitan.gilt`

> identity: 1920s Art Deco luxury. gold on deep navy, geometric sunburst and fan patterns, Chrysler Building verticality, Gatsby-era opulence rendered as interface. thin gold rules, chevron dividers, faceted geometry. the elevator lobby of a 1928 Manhattan skyscraper.

**surface**

colors:
```
--bg-base: #0A1628;           /* deep navy void — the midnight field */
--bg-elevated: #0F1D33;       /* raised panel surface, slightly lighter navy */
--bg-surface: #152540;        /* card/panel backgrounds */
--gold: #C9A84C;              /* primary accent — burnished art deco gold */
--gold-sheen: linear-gradient(135deg, #C9A84C 0%, #E8D88C 45%, #C9A84C 100%); /* metallic sheen for key elements */
--gold-dim: rgba(201, 168, 76, 0.2);   /* faint gold wash for borders, dividers */
--gold-glow: rgba(201, 168, 76, 0.35); /* glow halos, box-shadows */
--cream: #F5EFE0;             /* primary text — warm parchment white */
--champagne: #E8DCC8;         /* secondary text — muted warm */
--text-dim: #6B7A8E;          /* tertiary labels, captions */
--charcoal: #1E1E28;          /* deep structural accent, alternate dark surface */
--surface-line: rgba(201, 168, 76, 0.12); /* gold-tinted panel borders */
--danger: #C44040;            /* error state — muted ruby */
--success: #7AAF6B;           /* success state — muted jade */
```

typography:
- display/headings: `'Playfair Display', serif` — `font-weight: 700`, `text-transform: uppercase`, `letter-spacing: 0.2–0.25em`. hero sizes: `8–14vw` for splash, `2–3.5rem` for section headings. extreme high-contrast serif strokes evoke engraved gold lettering.
- body/descriptions: `'Josefin Sans', sans-serif` — `font-weight: 300–400`, `font-size: 0.75–1rem`, `line-height: 1.65`, `letter-spacing: 0.03em`. geometric sans — open, airy, period-appropriate.
- labels/metadata: `'Playfair Display', serif` — `font-weight: 400`, `font-size: 0.65–0.75rem`, `letter-spacing: 0.15–0.2em`, `text-transform: uppercase`, `color: var(--gold)`.
- hierarchy is driven by massive scale jumps between display serif and geometric body sans. a hero heading at 14vw next to 0.75rem body text is the signature contrast. all headings uppercase without exception.

borders:
- structural panels: `1px solid var(--surface-line)`, `border-radius: 0px` — sharp, architectural corners. no rounding on any structural element.
- gold accent borders: `1px solid var(--gold)` — used on featured panels, dividers, table headers
- decorative double-rule: `border-top: 1px solid var(--gold); padding-top: 4px; box-shadow: 0 -4px 0 0 transparent, 0 -5px 0 0 var(--gold-dim);` — art deco double-line motif
- CTA buttons: `border-radius: 0px` — rectangular with sharp corners, no pills. geometric precision.
- no radius ever exceeds `0px`. every edge is cut, faceted, angular. roundness is forbidden.

spacing:
- page edge: `8vw` horizontal padding (CSS variable `--grid-edge: 8vw`)
- section vertical rhythm: `15–25vh` between major sections — monumental, architectural proportion
- card internal padding: `24–40px` — generous, breathable
- generous vertical rhythm throughout. content is presented like exhibits in a grand lobby — each piece given its own monument of space.
- gap between inline items: `40–60px` horizontal

**color distribution**

- 70% deep navy field (`--bg-base`, `--bg-elevated`, `--bg-surface`) — the midnight architecture. navy dominates everything.
- 12% warm text (`--cream`, `--champagne`) — warm-toned typography floating against cold navy
- 13% gold (`--gold`, `--gold-dim`, `--gold-glow`, `--gold-sheen`) — borders, labels, decorative patterns, interactive elements. more prominent than typical accent — this is gilded.
- 5% geometric pattern texture — chevrons, sunbursts, fan shapes rendered in `var(--gold-dim)` as atmospheric ornament

gold is used prominently but structurally — as borders, rules, text labels, decorative patterns, and button fills. it appears on: 1px rules between sections, chevron/fan ornamental patterns, heading underscores, label text, CTA backgrounds, and geometric dividers. never as a large background wash — it is always linear, structural, or typographic.

**component patterns**

buttons:
- primary CTA: `background: var(--gold); color: var(--bg-base); padding: 14px 36px; border-radius: 0; font-family: 'Playfair Display', serif; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; border: none; box-shadow: 0 0 20px var(--gold-glow);`
- secondary: `background: transparent; color: var(--gold); border: 1px solid var(--gold); padding: 12px 30px; border-radius: 0; font-family: 'Playfair Display', serif; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;`
- ghost: `background: transparent; color: var(--cream); border: none; padding: 10px 20px; font-family: 'Josefin Sans', sans-serif; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; opacity: 0.6;`

inputs:
- `background: var(--bg-elevated); border: 1px solid var(--surface-line); border-radius: 0; padding: 14px 18px; color: var(--cream); font-family: 'Josefin Sans', sans-serif; font-size: 0.85rem;`
- label above: `font-family: 'Playfair Display', serif; font-size: 0.65rem; color: var(--gold); letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 8px;`
- placeholder: `color: var(--text-dim); font-weight: 300;`
- focus adds `border-color: var(--gold);` with `box-shadow: 0 0 12px var(--gold-glow);`

cards/panels:
- `background: var(--bg-surface); border: 1px solid var(--surface-line); border-radius: 0;`
- featured cards add a gold top-border: `border-top: 2px solid var(--gold)` — like a gilded lintel above a doorway
- decorative fan corner: top-left corner gets a `background: conic-gradient(from 180deg at 0% 0%, var(--gold-dim) 0deg, transparent 60deg)` pseudo-element as art deco fan ornament
- no drop shadows. depth comes from layered border work and background value shifts.

navigation:
- fixed top bar: `position: fixed; padding: 30px var(--grid-edge); display: flex; justify-content: space-between; align-items: center; background: rgba(10, 22, 40, 0.9); backdrop-filter: blur(8px); border-bottom: 1px solid var(--gold-dim);`
- logo: `font-family: 'Playfair Display', serif; color: var(--gold); letter-spacing: 0.3em; font-weight: 700; text-transform: uppercase; font-size: 0.9rem;`
- nav links: `font-family: 'Josefin Sans', sans-serif; font-size: 0.65rem; color: var(--champagne); letter-spacing: 0.15em; text-transform: uppercase;`
- active link: `color: var(--gold); border-bottom: 1px solid var(--gold);`
- right-side CTA in nav using primary rectangular gold style

headers/hero:
- display heading: `font-family: 'Playfair Display', serif; font-size: 10–14vw; line-height: 0.85; letter-spacing: 0.05em; color: var(--cream); text-transform: uppercase;`
- decorative underline beneath hero heading: `width: 120px; height: 1px; background: var(--gold); margin: 30px auto;` with small gold diamond at center (`width: 8px; height: 8px; transform: rotate(45deg); background: var(--gold);`)
- sunburst background motif: `background: conic-gradient(from 0deg at 50% 100%, var(--gold-dim) 0deg, transparent 15deg, var(--gold-dim) 30deg, transparent 45deg, ...repeating)` radiating upward from base — the signature art deco sunburst
- section headers: `font-family: 'Playfair Display', serif; font-size: 2–3rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--cream);` with gold rule beneath

footers:
- gold top border: `border-top: 1px solid var(--gold);` with decorative chevron pattern above
- centered logo in gold, small copyright in `--text-dim`
- footer links in `--champagne`, uppercase Josefin Sans, widely spaced
- geometric fan ornament centered above the border line

chevron/zigzag dividers (signature component):
- CSS-generated chevron pattern: `background: linear-gradient(135deg, var(--gold) 25%, transparent 25%) -20px 0, linear-gradient(225deg, var(--gold) 25%, transparent 25%) -20px 0; background-size: 40px 20px; background-position: 0 0; height: 20px;` rendered in `var(--gold-dim)` — a zigzag gold band separating sections
- simpler variant: single chevron `▽` glyph in gold centered between thin gold rules
- these dividers replace standard `<hr>` elements throughout

lists:
- no bullets. items separated by `1px solid var(--gold-dim)` horizontal gold rules
- item text in Josefin Sans `--cream`, category/label in Playfair Display `--gold` uppercase
- active item gets `border-left: 2px solid var(--gold); padding-left: 16px;`
- item numbers (if ordered) displayed in oversized gold Playfair Display: `font-size: 2rem; color: var(--gold); font-weight: 700;`

tables:
- header row: `font-family: 'Playfair Display', serif; font-size: 0.65rem; color: var(--gold); letter-spacing: 0.15em; text-transform: uppercase; border-bottom: 2px solid var(--gold);`
- body rows: `font-family: 'Josefin Sans', sans-serif; font-size: 0.85rem; color: var(--cream); border-bottom: 1px solid var(--gold-dim);`
- no alternating row colors. consistent navy field.
- table corners may feature small geometric ornament

dividers:
- standard: `1px solid var(--gold-dim)` — faint gold structural lines
- accent: `1px solid var(--gold)` with diamond center ornament for major section breaks
- chevron band: the signature zigzag pattern divider described above

modals:
- `background: var(--bg-elevated); border: 1px solid var(--gold-dim); border-radius: 0; border-top: 2px solid var(--gold);`
- modal title in Playfair Display gold uppercase with gold rule beneath
- close button: ghost style, `color: var(--champagne)`, no border
- backdrop: `background: rgba(10, 22, 40, 0.92); backdrop-filter: blur(12px);`

badges/tags:
- `font-family: 'Playfair Display', serif; font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; padding: 5px 14px; border: 1px solid var(--gold); color: var(--gold); border-radius: 0;`
- filled variant: `background: var(--gold); color: var(--bg-base);`
- all badges are sharp-cornered rectangles. never rounded.

**interaction language**

- hover (buttons): primary CTA `background: var(--cream); color: var(--bg-base); box-shadow: 0 0 30px var(--gold-glow);` — gold flips to cream. secondary gets `background: var(--gold-dim);`. ghost gets `opacity: 1; color: var(--gold);`. `transition: 0.35s ease;`
- hover (cards): `border-color: var(--gold);` — the faint gold border brightens to full gold. `transition: 0.35s ease;`
- hover (nav links): `color: var(--gold);`
- active/pressed: `transform: scale(0.98);` — subtle, dignified compression. `transition: 0.1s ease;`
- focus: `outline: 2px solid var(--gold); outline-offset: 4px;` — floating gold halo, not tight border
- selected: `color: var(--gold); border-bottom: 2px solid var(--gold);` for nav items. `border-left: 2px solid var(--gold);` for list items. badges fill solid gold.
- disabled: `opacity: 0.2; pointer-events: none;` — nearly invisible against navy. no strikethrough.
- drag: `opacity: 0.6; cursor: grabbing; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);`

**motion & feedback**

transitions:
- default: `transition: 0.35s ease-out` on color, opacity, transform, border-color, box-shadow
- reveal animations: elements enter with `opacity: 0 → 1; transform: translateY(30px) → translateY(0); transition: 0.5s ease-out;` — a stately curtain-rise reveal, triggered on viewport entry
- staggered reveal: child elements within a section animate in sequence with `transition-delay` increments of `0.08s` — each item rises into place one after another, like doors opening down a grand corridor
- gold shimmer: decorative elements get `background-position` animation on hover, shifting the `--gold-sheen` gradient to create a metallic light-catch effect over `0.5s ease`
- no bounce, no spring, no elastic easing. all motion is measured, elegant, architectural.

loading:
- rotating geometric: a small gold outlined octagon rotating slowly with `animation: spin 3s linear infinite` — faceted, not circular
- or: three small gold diamond shapes `◆ ◆ ◆` fading in sequence left to right

success:
- brief gold glow pulse: `box-shadow: 0 0 40px var(--gold-glow)` expanding then fading over `0.5s`
- text confirmation in Playfair Display uppercase gold

error:
- `border-color: var(--danger)` replaces gold accents momentarily. `color: var(--danger)` on error text.
- no shake animation — errors are communicated with composure. border color shift only.

**atmosphere**

- geometric fan pattern: `background: conic-gradient(from 270deg at 50% 100%, var(--gold-dim) 0deg, transparent 12deg, var(--gold-dim) 24deg, transparent 36deg, var(--gold-dim) 48deg, transparent 60deg, var(--gold-dim) 72deg, transparent 84deg, var(--gold-dim) 96deg, transparent 108deg);` — repeating fan/sunburst pattern radiating from bottom-center, rendered at `opacity: 0.15` as a background watermark. the defining art deco motif.
- vertical gilt lines: thin `1px` gold vertical rules at `20vw` intervals across the viewport at `opacity: 0.06` — evoking the vertical fluting of a Chrysler Building facade
- chevron band texture: horizontal zigzag patterns in `var(--gold-dim)` at `opacity: 0.08` used as section background texture, like decorative metalwork banding
- radial gold vignette: `background: radial-gradient(ellipse at 50% 0%, var(--gold-glow) 0%, transparent 50%)` at viewport top — a faint warm glow as if from a grand chandelier above
- stepped geometry: background shapes using `clip-path: polygon(...)` to create stepped/terraced geometric forms in `var(--bg-elevated)` — the ziggurat silhouettes of art deco architecture
- no scanlines, no CRT effects, no pixel textures. this is polished stone, brushed metal, and etched glass.

**editorial voice**

button labels: `THE COLLECTION`, `PRIVATE VIEWING`, `REQUEST AN AUDIENCE`, `GRAND OPENING`, `MEMBERS ONLY`, `BY APPOINTMENT`, `ENTER THE GALLERY`, `RESERVE`. uppercase, formal, title case within uppercase. never casual. never technical. the language of a private club.

headings: uppercase Playfair Display. formal, architectural, monumental. `THE GRAND FOYER`, `PRIVATE COLLECTION`, `THE EXHIBITION`, `GILDED ARCHIVE`, `MEMBER PRIVILEGES`, `THE OBSERVATORY`. article "THE" used frequently for ceremony. noun-forward with occasional adjective.

metadata: formal label format. label in gold uppercase Playfair, value in cream Josefin Sans. `ESTABLISHED — MCMXXVIII`, `COLLECTION — AUTUMN`, `PROVENANCE — VERIFIED`, `EDITION — LIMITED`. dashes as separators. roman numerals where appropriate.

placeholders: `Your full name...`, `Search the collection...`, `Membership number...`. sentence case, formal, understated.

empty states: `The gallery is being prepared.`, `No items in the collection.`, `This exhibition has concluded.`. formal, third-person, composed.

error messages: `Access denied. Please present credentials.`, `This item is unavailable.`, `Your request could not be fulfilled.`. polite but firm. no apology, no emoji. the tone of a concierge declining entry.

success messages: `Your reservation is confirmed.`, `Added to the collection.`, `Credentials verified.`. single sentence, present tense or past participle. period. no exclamation marks.

**cursor & selection**

- default: `cursor: default`
- interactive elements: `cursor: pointer`
- drag targets: `cursor: grab` → `cursor: grabbing`
- disabled: `cursor: not-allowed`
- `::selection { background: var(--gold); color: var(--bg-base); }` — gold highlight with deep navy text

**when to reach for this genome**

Use `deco_metropolitan.gilt` when the prompt asks for Art Deco, Gatsby-era luxury, 1920s hotel or private-club interfaces, a grand metropolitan lobby, gold-on-navy ceremony, architectural invitations, membership experiences, upscale event pages, formal hospitality, or any product that should feel like a 1928 Manhattan elevator foyer rendered as UI.

Reach for it when the concrete visual cues are deep navy fields, burnished gold hairline rules, sharp 0px geometry, Playfair Display uppercase headings, Josefin Sans body text, sunburst or fan ornaments, chevron dividers, diamond center marks, stepped ziggurat forms, formal membership/reservation copy, and monumental spacing where each section feels installed in a lobby.

Do not use it for contemporary white-cube museum pages, cool stone surfaces, curatorial essays, or restrained gallery programmes; use `gallery_foyer.institution`. Do not use it for dark luxury tech launches, carbon void staging, product spec callouts, or cinematic hardware reveals; use `carbon_stage.lux`. Do not use it for individual gemstones, ring configurators, black velvet vitrines, carat metadata, or loupe-level jewelry detail; use `gem_jeweler.facet`. Do not use it for Greek/Roman antiquity, archaeological catalogs, marble statuary, bronze patina, or Latin inscriptions; use `amphitheater_marble.classical`. Do not use it for Bauhaus primary-color workshops or constructivist red-wedge propaganda; use `bauhaus_workshop.modernist` or `constructivist_poster.agit`.

It is strongest when the interface is about ceremony, entry, access, collection, reservation, or patronage in an angular gold-and-navy world. If the prompt emphasizes cultural restraint, product-launch futurism, object-scale jewelry, classical antiquity, educational modernism, or political poster energy, choose the neighboring genome that owns that reference point.

**anti-patterns — this genome NEVER:**

1. uses rounded corners or pill shapes — every element is sharp-cornered, `border-radius: 0`. roundness contradicts the angular, faceted geometry of Art Deco. no exceptions.
2. uses cool-toned accents (blue, teal, violet) as interactive colors — the only accent is gold and its derivatives. the palette is strictly warm-on-cool: warm gold against cold navy.
3. uses sans-serif for display headings — display type is always high-contrast serif (Playfair Display). the geometric sans (Josefin Sans) is for body text only. the serif/sans contrast is structural.
4. uses casual, playful, or technical language — no slang, no emoji, no exclamation marks, no developer jargon. the voice is a 1920s luxury establishment. "Request an Audience" not "Get Started".
5. uses flat minimal layouts without decorative geometry — every page must include at least one Art Deco geometric motif: fan pattern, chevron band, sunburst, stepped form, or diamond ornament. ornament is not optional.
6. uses bounce, spring, or elastic easing in animations — all motion is stately `ease-out` with `0.3–0.5s` duration. no playful physics. the building does not bounce.
7. uses light or white backgrounds — all surfaces are deep navy (`#0A1628` to `#152540`). the darkest charcoal (`#1E1E28`) may appear in overlays. cream and champagne are text colors only, never backgrounds.
8. uses dense data-heavy layouts or cramped grids — content is monumental, exhibited with generous space. each section commands the viewport like a gallery installation.
