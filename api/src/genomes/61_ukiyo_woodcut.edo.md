---
id: "61"
name: ukiyo_woodcut.edo
keywords:
  - japanese
  - woodblock
  - ukiyo-e
  - edo
  - hokusai
  - washi
  - sumi
  - zen
  - wave
  - traditional
  - print
  - oriental
---

### genome 61: `ukiyo_woodcut.edo`

> identity: Edo-period Japanese woodblock print rendered as interface. Hokusai's wave crests, Hiroshige's rain lines, Utamaro's figure studies — sumi ink outlines on washi paper, flat color fills in indigo and vermillion. the UI is a printed ukiyo-e sheet: layered color blocks with visible registration, carved woodgrain texture, deliberate asymmetry. every element looks stamped, not drawn.

**surface**

colors:
```
--washi: #F3ECE0;
--washi-dark: #E8DFD0;
--sumi: #2A2422;
--sumi-light: #4A4340;
--indigo: #264E70;
--indigo-light: #3A6B8C;
--indigo-pale: rgba(38, 78, 112, 0.12);
--vermillion: #C7432B;
--vermillion-dark: #A3351F;
--ochre: #C49A3C;
--ochre-light: #D4AE5A;
--sage: #8A9A7B;
--sage-pale: rgba(138, 154, 123, 0.15);
--woodgrain: rgba(42, 36, 34, 0.03);
--selection-bg: rgba(38, 78, 112, 0.14);
```

typography:
- display/headings: `"Playfair Display", "Noto Serif Display", "Georgia", serif` at `font-weight: 700-800`. `font-size: 32-52px`. `letter-spacing: 0.08em` — evoking carved characters on title cartouches. `text-transform: none` — elegance, not shouting.
- body: `"Noto Sans", "Helvetica Neue", sans-serif` at `font-weight: 400-500`. `font-size: 14-16px`. `line-height: 1.7`. clean and readable against washi.
- labels/metadata: `"Noto Sans", sans-serif` at `font-weight: 500`. `font-size: 11-12px`. `letter-spacing: 0.06em`. `text-transform: uppercase` on category labels.
- vertical text: sidebar labels and decorative elements use `writing-mode: vertical-rl; text-orientation: mixed` for traditional Japanese vertical reading direction. `font-size: 12-14px`.
- sizes: display 36-52px, section headers 22-28px, body 14-16px, metadata/badges 11-12px, vertical labels 12-14px.

borders:
- primary: `2-3px solid var(--sumi)`. `border-radius: 0px` on most elements — woodblock prints are rectangular, blocks are carved sharp.
- worn edges: select decorative cards may use `border-radius: 4-6px` to suggest a worn woodblock edge. never more than 6px.
- inner dividers: `1px solid rgba(42, 36, 34, 0.15)`.
- accent borders: `2px solid var(--indigo)` or `2px solid var(--vermillion)` on highlighted elements.
- no double borders, no dashed/dotted lines. all borders are solid — ink on paper.

spacing:
- generous and contemplative. `padding: 1.5rem 2rem; gap: 24px`. the Japanese aesthetic of ma (negative space) governs layout.
- sections breathe — `margin-bottom: 2.5-3rem` between major content blocks.
- inner card padding: `1.5rem-2rem`. elements never crowd each other.
- asymmetric margins are acceptable and encouraged — perfect symmetry is mechanical, not handcrafted.

**color distribution**
- 55% washi paper (`--washi`, `--washi-dark`) — the warm, textured ground. the paper itself is the dominant presence, as in a real print.
- 20% sumi black (`--sumi`, `--sumi-light`) — outlines, text, structural borders. the carved ink lines that define every form.
- 12% indigo blue (`--indigo`, `--indigo-light`) — the signature ukiyo-e blue from imported Prussian blue pigment (bero-ai). section fills, selected states, secondary actions.
- 8% vermillion red (`--vermillion`) — accent, CTA, seals, important markers. the cinnabar pigment used for artist stamps and key focal points.
- 3% ochre gold (`--ochre`) — tertiary accent, badges, metadata highlights. the warm mineral pigment.
- 2% sage green (`--sage`) — subtle accents, success states, tags. the organic, vegetal dye.

**component patterns**

buttons: `background: var(--indigo); color: var(--washi); border: 2px solid var(--sumi); border-radius: 0px; padding: 11px 28px; font-family: "Noto Sans", sans-serif; font-weight: 600; font-size: 14px; letter-spacing: 0.04em`. primary CTA: `background: var(--vermillion); color: var(--washi); border: 2px solid var(--sumi)`. secondary: `background: var(--washi); color: var(--sumi); border: 2px solid var(--sumi)`. ghost: `background: transparent; color: var(--indigo); border: 1px solid var(--indigo)`. all buttons feel like stamps — flat color, solid outline, no gradient.

inputs: `background: var(--washi); border: 2px solid var(--sumi); border-radius: 0px; color: var(--sumi); padding: 11px 14px; font-family: "Noto Sans", sans-serif; font-weight: 400; font-size: 14px`. focus: `border-color: var(--indigo); box-shadow: 0 0 0 2px var(--indigo-pale)`. placeholder: `color: rgba(42, 36, 34, 0.35); font-style: italic`. label above in Noto Sans 500, `font-size: 12px`, `letter-spacing: 0.04em`.

cards/panels: `background: var(--washi); border: 2px solid var(--sumi); border-radius: 0px; padding: 1.5rem`. each card feels like an individual woodblock print sheet — self-contained, rectangular, with clear sumi outlines. header area within card: `border-bottom: 2px solid var(--sumi); padding-bottom: 12px; margin-bottom: 16px`. optional indigo or vermillion top accent: `border-top: 4px solid var(--indigo)`. cards may carry a faint woodgrain texture overlay at 2-3% opacity.

navigation: horizontal bar. `background: var(--washi-dark); border-bottom: 2px solid var(--sumi); padding: 0 2rem`. nav items in Noto Sans 500, `font-size: 14px`, `letter-spacing: 0.03em`. active item: `color: var(--indigo); border-bottom: 3px solid var(--indigo); font-weight: 600`. inactive: `color: var(--sumi-light)`. items spaced generously — `gap: 2rem`. the nav bar feels like the title cartouche strip at the top of a print series.

headers: `background: var(--washi); padding: 2rem 2.5rem; border-bottom: 3px solid var(--sumi)`. title in Playfair Display at 36-48px, `color: var(--sumi); letter-spacing: 0.06em`. subtitle in Noto Sans 400 at 14-16px, `color: var(--sumi-light)`. optional vertical text label on the right side: `writing-mode: vertical-rl; color: var(--indigo); font-size: 12px`. the header evokes the title cartouche (題簽) of a print — a bordered rectangular area containing the series title and print number.

footers: `background: var(--washi-dark); border-top: 2px solid var(--sumi); padding: 1.5rem 2rem; color: var(--sumi-light)`. text in Noto Sans 400 at 13px. links in `color: var(--indigo)`. a centered decorative element — a small wave motif or cloud pattern rendered in sumi — may sit above the footer content. feels like the colophon area of a print.

lists: rows separated by `1px solid rgba(42, 36, 34, 0.12)`. row padding: `12px 0`. text in Noto Sans. hovered row: `background: var(--indigo-pale)`. selected row: `background: var(--indigo-pale); border-left: 3px solid var(--indigo)`. numbering in Playfair Display at slightly larger scale for a woodblock-carved numeral feel.

tables: `border: 2px solid var(--sumi); border-radius: 0px; overflow: hidden`. header row: `background: var(--sumi); color: var(--washi); font-family: "Noto Sans", sans-serif; font-weight: 600; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; padding: 10px 16px`. body cells: `background: var(--washi); color: var(--sumi); border-bottom: 1px solid rgba(42, 36, 34, 0.1); padding: 10px 16px`. alternating rows: `var(--washi-dark)` tint on even rows.

dividers: `1px solid rgba(42, 36, 34, 0.2)` for simple dividers. decorative dividers: a centered wave or cloud motif — a small SVG or CSS-drawn pattern in sumi at `opacity: 0.2`, flanked by thin horizontal lines. `margin: 2rem 0`. never a heavy bar — dividers are delicate, like the space between scenes in a multi-panel print.

modals: `background: var(--washi); border: 3px solid var(--sumi); border-radius: 0px; box-shadow: 8px 8px 0px rgba(42, 36, 34, 0.15)`. the hard offset shadow creates depth like layered print sheets. header: `border-bottom: 2px solid var(--sumi); font-family: "Playfair Display", serif; font-size: 22px; padding: 1.25rem 1.5rem`. backdrop: `background: rgba(42, 36, 34, 0.5)` — like looking through rice paper.

badges/tags: `background: var(--vermillion); color: var(--washi); border: 1px solid var(--sumi); border-radius: 0px; font-family: "Noto Sans", sans-serif; font-weight: 600; font-size: 11px; padding: 3px 10px; letter-spacing: 0.03em`. variant — indigo badge: `background: var(--indigo); color: var(--washi)`. variant — outline badge: `background: transparent; border: 1px solid var(--sumi); color: var(--sumi)`. variant — ochre badge: `background: var(--ochre); color: var(--sumi)`. all badges are rectangular stamps.

**seal stamp** (signature element): a small vermillion circle or rounded square used as a visual accent — evokes the artist's hanko (印) seal. `width: 28-36px; height: 28-36px; background: var(--vermillion); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: var(--washi); font-size: 12px; font-weight: 700`. placed in card corners, next to author names, or as success indicators. contains a single character or small icon. `transform: rotate(-3deg)` for an authentic hand-stamped feel.

**interaction language**

hover: subtle ink darkening. buttons: `filter: brightness(0.9)`. cards: `box-shadow: 4px 4px 0px rgba(42, 36, 34, 0.1)` — sheet lifts slightly from the surface. text links: `color: var(--indigo); text-decoration: underline; text-underline-offset: 3px`. `transition: all 0.3s ease`. no flashy effects — the print shifts, it does not glow.

active/pressed: stamp impression. buttons: `transform: translateY(1px); box-shadow: inset 0 2px 4px rgba(42, 36, 34, 0.2)` — pressed into the paper like a block stamp. cards: `box-shadow: none; transform: translateY(1px)`. the interaction is tactile — pressure, impression, release.

focus: `outline: 2px solid var(--indigo); outline-offset: 2px`. on indigo backgrounds: `outline-color: var(--ochre)`. clean rectangular focus ring — no rounded outlines.

selected: `background: var(--indigo); color: var(--washi)`. or on lighter elements: `background: var(--indigo-pale); border-color: var(--indigo)`. selection is a flat color fill — like a printed color block.

disabled: faded like an old, sun-bleached print. `opacity: 0.35; filter: saturate(0.3)`. borders become `rgba(42, 36, 34, 0.15)`. text pales. the element looks like a centuries-old print that has lost its pigment.

drag: element lifts like a floating print sheet. `box-shadow: 6px 6px 0px rgba(42, 36, 34, 0.12); transform: rotate(-1deg) scale(1.01)`. a slight rotation as if picked up at one corner — a loose sheet lifted from a stack.

**motion & feedback**

transitions: `transition: all 0.3s ease`. deliberate and unhurried, like a brush stroke. nothing snaps or slams — motion has the quality of ink spreading on absorbent paper.

loading: ink wash spreading — a dark sumi wash that expands outward from center, fading to transparency:
```css
@keyframes inkWash {
  0% { background: radial-gradient(circle at center, rgba(42,36,34,0.15) 0%, transparent 0%); }
  50% { background: radial-gradient(circle at center, rgba(42,36,34,0.08) 0%, transparent 40%); }
  100% { background: radial-gradient(circle at center, transparent 0%, transparent 60%); }
}
/* applied: animation: inkWash 1.2s ease-out; */
```
Alternatively: three small circles pulsing in sequence in sumi, `opacity` oscillating 0.3–1.0 over 1.5s.

success: a small vermillion seal stamp appears — `background: var(--vermillion); color: var(--washi); border-radius: 4px; transform: rotate(-5deg) scale(0)` animates to `scale(1)` over `0.3s ease-out`. holds 1.5s, fades. the artist's seal of approval.

error: a subtle shake — `transform: translateX(-3px)` to `translateX(3px)` oscillating twice over 0.3s. border briefly flashes `var(--vermillion)`. text turns vermillion. the misprint — an error in the block.

page enter: elements fade in from `opacity: 0; transform: translateY(6px)` with staggered 60ms delays. `transition: 0.4s ease-out`. feels like print sheets being laid out one by one on a display table.

**atmosphere**

background: `var(--washi): #F3ECE0` — warm paper ground. the body carries a subtle paper-like texture: a faint noise pattern at 2-3% opacity overlaid via CSS or a tiled texture image. the surface is never flat digital white — it breathes like handmade paper.

woodgrain overlay: a very faint horizontal or diagonal grain pattern at `opacity: 0.02-0.04` across the page — the ghost of the printing block's wood grain transferred to paper, a hallmark of woodblock prints.

cloud and wave motifs: decorative background elements — simplified wave crests (nami) or cloud bands (kumo) rendered in sumi at `opacity: 0.04-0.06`. placed at section boundaries, page edges, or as decorative fills. implemented via subtle CSS patterns or SVG backgrounds.

registration marks: occasional very faint cross-mark registration symbols (kento) at the edges of major sections at `opacity: 0.06` — the alignment marks used by printers to ensure color layers align. a quiet nod to the printing process.

images: `border: 2px solid var(--sumi); filter: contrast(1.05) saturate(0.85)` — slightly desaturated, as if printed with natural pigments rather than photographed. images sit flat within their sumi borders like prints mounted on backing paper.

ambient feel: the screen should evoke a print shop gallery — washi paper everywhere, sumi outlines defining every form, flat indigo and vermillion color blocks, generous empty space. the quietude of a museum displaying Hiroshige's "Fifty-three Stations of the Tokaido."

**editorial voice**

button labels: craft-oriented, contemplative. `Compose`, `View Print`, `Archive`, `Next Sheet`, `Seal`, `Collect`, `Browse Series`, `Begin`. sentence case. verbs that evoke printmaking and curation, not technology.

headings: elegant, serif-feeling even in sans. `The Collection`, `Thirty-six Views`, `Recent Impressions`, `Master Prints`, `The Workshop`, `Selected Works`, `From the Archive`. title case. Playfair Display. the headings feel carved, not typed.

metadata: edition-style, print-catalog language. `Sheet 3 of 12`, `Block IV`, `Series: Thirty-six Views`, `Impression: Third State`, `Published: Eisen, 1835`, `Catalog No. 061`, `Edition: 200`.

placeholders: `Search the collection...`, `Describe the subject...`, `Title this print...`, `Enter your seal name...`.

empty states: zen, contemplative. `The gallery awaits.`, `No prints displayed.`, `The collection is empty.`, `Nothing yet — begin composing.`, `Awaiting the first impression.`.

error messages: `The block was misaligned.`, `This print could not be made.`, `An error in the impression.`, `The ink did not take.`.

success messages: `Print sealed.`, `Added to the collection.`, `Impression complete.`, `The seal is set.`, `Archived successfully.`.

**cursor & selection**

cursor: `default` globally. `pointer` on interactive elements — buttons, links, cards, nav items.

text selection: `::selection { background: var(--selection-bg); color: var(--sumi); }` — pale indigo on washi, like a translucent indigo wash over paper.

**when to reach for this genome**

Use `ukiyo_woodcut.edo` when the prompt asks for ukiyo-e, Edo-period woodblock printing, Hokusai/Hiroshige references, Japanese print catalogs, washi-paper galleries, printmaking portfolios, cultural archives, art-market editorial pages, or a product surface that should feel like a hand-pulled sheet of carved ink and flat pigment.

Reach for it when the visual brief includes sumi outlines, warm washi ground, Prussian indigo, vermillion seal stamps, ochre/sage pigment, visible registration marks, woodgrain transfer, wave or cloud motifs, vertical side labels, edition metadata, and deliberate asymmetry. It is strongest when the interface can be contemplative, printed, rectangular, and spacious, with cards behaving like separate sheets in a print series.

Choose it for:
- art collections, museum microsites, print shops, cultural editorial, artisan marketplaces, exhibition guides, and quiet portfolio flows that need Japanese woodblock specificity rather than generic paper texture.
- product experiences where `View Print`, `Next Sheet`, `Seal`, `Collect`, `Browse Series`, or edition/catalog language naturally fits the workflow.
- layouts that need flat color blocks, hard sumi borders, washi texture, gentle ma, and a handcrafted but still legible interface.

Do not choose it for tea ceremony ritual, matcha hospitality, or sparse chashitsu meditation; use `tea_ceremony.matcha` for those. Use `origami_folio.paper` for folded-paper facets and crease diagrams, `field_journal.expedition` or `nature_folio.craft` for naturalist notebooks and scrapbook craft, `manuscript_press.lit` for Western bookish letterpress, `gallery_foyer.institution` for neutral museum austerity, and `vending_machine.aluminum` for Japanese machine/kiosk hardware. If the user asks for anime, manga panels, speech bubbles, or comic sequencing, use `panel_sequence.ink` instead.

**anti-patterns — this genome NEVER:**
1. uses neon, saturated digital colors, or any hue that could not be mixed from Edo-period mineral and vegetable pigments. no electric blue, no hot pink, no lime green. the palette is natural: sumi, indigo, vermillion, ochre, sage.
2. uses heavy drop shadows or diffused `box-shadow` with large blur radii. shadows are hard-offset (`6px 6px 0px`) or absent entirely. woodblock prints are flat — depth comes from layered color, not shadow.
3. uses rounded pill shapes (`border-radius: 50px` or `9999px`) on buttons, badges, or inputs. all UI elements are rectangular blocks — the shape of carved woodblocks and printed sheets. maximum radius is 6px for worn-edge effects.
4. uses aggressive, loud, or heavy-condensed display typography (Impact, Anton, Black weights). the typographic voice is carved elegance — refined serif or clean sans, never shouting. letter-spacing is generous, not compressed.
5. uses gradients on UI elements. colors are flat and absolute — indigo is indigo, vermillion is vermillion. woodblock printing applies color in flat layers from separate carved blocks. no `linear-gradient`, no `radial-gradient` on components.
6. uses sans-serif display type that feels tech-forward or startup-modern (Poppins Black, Montserrat Bold, etc.). display type must evoke carved letterforms, not Silicon Valley branding.
7. uses pure white (#FFFFFF) backgrounds or surfaces. the ground is always warm washi — `#F3ECE0` or similar. pure white is screen-native; this genome is paper-native.
8. uses dense, cramped layouts that ignore negative space. the principle of ma (間) — meaningful emptiness — is foundational. every section must breathe. crowded interfaces violate the aesthetic at its core.
9. uses flashy animations, bouncing effects, elastic easing, or any motion that feels digital or playful. motion is ink spreading, paper shifting, stamps pressing — slow, material, physical. no `cubic-bezier` bounce, no spring physics.
10. uses glassmorphism, frosted glass, backdrop-filter blur, or transparency effects that evoke digital screens. this genome is printed matter — opaque paper, opaque ink. no blur, no frosted overlays, no translucent panels.
