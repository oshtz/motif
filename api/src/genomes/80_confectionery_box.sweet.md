---
id: "80"
name: confectionery_box.sweet
keywords:
  - chocolate
  - confectionery
  - patisserie
  - luxury
  - gift box
  - praline
  - macaron
  - gold foil
  - packaging
  - indulgent
  - sweet
  - gourmet
  - laduree
  - bonbon
---

### genome 80: `confectionery_box.sweet`

> identity: luxury chocolate box and patisserie packaging. Matte rose card stock, deep cacao paper, champagne foil stamping, cream tissue layers, ribbon closures, scalloped trays, praline compartments, macaron boxes, and quiet boutique service. Every surface should feel touched: embossed, folded, foil-stamped, nested, wrapped, and opened slowly.

**surface**

colors:
```
--dark-chocolate: #3C2415;                /* cacao ground, primary text, footer */
--cocoa-shadow: #24140D;                  /* deepest warm shadow, modal veil */
--milk-chocolate: #7B5B3A;                /* secondary text, warm structure */
--rose-blush: #E8C4C0;                    /* matte outer box, soft feature panels */
--dusty-rose: #C99698;                    /* pressed blush, selected panels */
--tissue-cream: #FFF8F0;                  /* tissue paper, main light background */
--box-ivory: #F5F0E8;                     /* tray compartments, cards, forms */
--almond-paper: #E7D9C6;                  /* aged liner paper, secondary surfaces */
--champagne-gold: #C4A265;                /* foil stamping, dividers, focus */
--foil-bright: #E8D08B;                   /* shimmer highlight, hover glint */
--berry-raspberry: #8B2252;               /* jewel accent, limited emphasis */
--pistachio-soft: #A9B88E;                /* optional macaron accent, success */
--sugar-gray: #B8ADA4;                    /* muted captions, disabled state */
--foil-wash: rgba(196,162,101,0.18);      /* light gold wash */
--warm-shadow: rgba(60,36,21,0.14);       /* card-stock shadow */
```

typography:
- display / box-lid titles: `"Playfair Display", "Bodoni Moda", "Didot", Georgia, serif; font-weight: 400-600; font-size: 30-54px; line-height: 1.08; letter-spacing: 0.035em;`
- collection headings: `"Playfair Display", "Bodoni Moda", serif; font-weight: 500; font-size: 22-34px; line-height: 1.15; letter-spacing: 0.045em;`
- body: `"Lato", "Montserrat", "Avenir Next", sans-serif; font-weight: 300-400; font-size: 13-15px; line-height: 1.72; letter-spacing: 0.018em; color: var(--milk-chocolate);`
- labels / provenance: `"Montserrat", "Lato", sans-serif; font-weight: 500; font-size: 10-12px; letter-spacing: 0.12em; text-transform: uppercase;`
- signature accent: `"Great Vibes", "Dancing Script", cursive; font-size: 18-26px; line-height: 1.15;` used only for short taglines, boutique signatures, and small flourishes.
- text is refined mixed case. Avoid shouting; uppercase appears only for tiny labels, origin tags, and foil-stamped metadata.

borders:
- luxury curves: `border-radius: 10-14px` for cards, trays, inputs, modals.
- compartment cards: `1px solid rgba(196,162,101,0.28)`.
- foil rules: `1px solid var(--champagne-gold)`.
- featured boxes: `border: 1px solid var(--champagne-gold); border-top: 2px solid var(--champagne-gold);`
- embossed card effect: `box-shadow: inset 1px 1px 2px rgba(255,248,240,0.72), inset -1px -1px 2px rgba(60,36,21,0.08), 0 3px 12px var(--warm-shadow);`
- scalloped tray edges may use radial gradients, but corners remain soft and controlled.

spacing:
- luxury spacing is generous: `padding: 24-44px`, `gap: 20-34px`.
- cards never use less than `20px` internal padding.
- product grids are sparse: 2-4 columns maximum with clear gutters.
- forms use wide fields and calm vertical rhythm.
- the page should feel like individual pieces nested in a tray, not a dense catalog.

**color distribution**

- 34% tissue cream / box ivory (`--tissue-cream`, `--box-ivory`) - main air, tissue layers, cards, form surfaces.
- 22% rose blush / dusty rose - box exterior, featured panels, soft brand color.
- 16% dark chocolate / cocoa shadow - text, grounding strips, footer, premium contrast.
- 12% champagne gold / foil bright - foil trim, focus, dividers, premium details.
- 8% milk chocolate / almond paper - secondary text, liner paper, warm structure.
- 5% berry raspberry - jewel calls, limited edition, error, flavor highlight.
- 3% pistachio soft / sugar gray - success, muted captions, disabled state.

Gold is structural and precise, not a broad fill. Cream and blush create softness. Chocolate supplies depth. Berry appears like a single ganache in the tray.

**component patterns**

buttons:
- primary foil action: `background: var(--champagne-gold); color: var(--dark-chocolate); border: 1px solid var(--champagne-gold); border-radius: 11px; padding: 12px 32px; font-family: "Playfair Display", serif; font-size: 14px; font-weight: 500; letter-spacing: 0.045em; box-shadow: 0 2px 8px rgba(196,162,101,0.18);`
- secondary outline: `background: transparent; color: var(--dark-chocolate); border: 1px solid var(--champagne-gold); border-radius: 11px; padding: 12px 30px;`
- quiet text action: `background: transparent; color: var(--milk-chocolate); border: none; text-decoration: underline; text-underline-offset: 4px;`
- berry action: `background: var(--berry-raspberry); color: var(--tissue-cream); border: 1px solid var(--berry-raspberry);`
- buttons use gentle hover shimmer and never shout with full uppercase marketing language.

inputs:
- `background: var(--tissue-cream); border: 1px solid rgba(196,162,101,0.42); border-radius: 10px; color: var(--dark-chocolate); padding: 12px 18px; font-family: "Lato", sans-serif; font-weight: 300; font-size: 14px;`
- focus: `border-color: var(--champagne-gold); box-shadow: 0 0 0 3px rgba(196,162,101,0.14); outline: none;`
- labels: uppercase Montserrat 10px, gold or milk chocolate, wide tracking.
- placeholder: `color: rgba(123,91,58,0.48); font-style: italic;`
- textarea should feel like a gift message card, with generous line-height and cream paper background.

cards / tray compartments:
- compartment card: `background: var(--box-ivory); border: 1px solid rgba(196,162,101,0.26); border-radius: 12px; padding: 28px 32px; box-shadow: inset 1px 1px 2px rgba(255,248,240,0.8), inset -1px -1px 2px rgba(60,36,21,0.06), 0 3px 12px rgba(60,36,21,0.06);`
- content is centered or calmly aligned, with one precious focal item.
- product image area: rounded 8px, soft ivory mat, no harsh cropping.
- title in Playfair, description in light Lato, provenance label in uppercase small caps.

gift box feature:
- `background: var(--rose-blush); border: 1px solid var(--champagne-gold); border-radius: 14px; padding: 34px 42px; box-shadow: inset 0 1px 3px rgba(255,248,240,0.48), 0 6px 20px rgba(60,36,21,0.08);`
- top foil line: `border-top: 2px solid var(--champagne-gold);`
- ribbon divider: centered gold rule with small bow knot or diamond ornament.
- use for hero cards, collection highlights, plan cards, premium recommendations.

macaron / praline tiles:
- small tile: square or vertical pill-like capsule with `border-radius: 14px`.
- background can rotate softly between blush, ivory, almond, pistachio, raspberry.
- include tiny gold label and flavor note.
- tile shadow remains soft and warm, never hard.

navigation:
- `background: var(--tissue-cream); border-bottom: 1px solid var(--champagne-gold); padding: 16px 40px;`
- logo in script accent or Playfair, dark chocolate.
- nav items: Playfair or Montserrat, 14-15px, milk chocolate, 0.04em tracking.
- active item: `color: var(--dark-chocolate); border-bottom: 2px solid var(--champagne-gold);`
- separators may be small gold dots or fine foil rules.

headers:
- box-lid header: `background: var(--rose-blush); padding: 42px 52px; text-align: center; border-bottom: 1px solid var(--champagne-gold); box-shadow: inset 0 1px 3px rgba(255,248,240,0.55), inset 0 -1px 3px rgba(60,36,21,0.08);`
- title: Playfair/Bodoni 38-54px, dark chocolate, gentle letter-spacing.
- subtitle: signature script or light sans, milk chocolate.
- metadata line: uppercase small caps, champagne gold.

footers:
- `background: var(--dark-chocolate); color: var(--tissue-cream); padding: 32px 42px; border-top: 1px solid var(--champagne-gold);`
- links and legal copy in light Lato, 12px.
- brand signature can use script accent in champagne gold.
- keep footer sparse, like the underside of a box lid with maker details.

lists:
- collection list: no bullets. Items separated by thin gold rules.
- item title: Playfair 16-20px, dark chocolate.
- description: Lato light, milk chocolate.
- flavor / origin tags: uppercase tiny labels.
- row padding `16px 0`; content should breathe.

tables / catalog grids:
- praline catalog: `border: 1px solid rgba(196,162,101,0.32); border-radius: 12px; overflow: hidden; background: var(--box-ivory);`
- header: `background: var(--rose-blush); color: var(--dark-chocolate); font-family: "Playfair Display"; font-weight: 500; font-size: 13px; letter-spacing: 0.04em;`
- cells: `padding: 13px 20px; border-bottom: 1px solid rgba(196,162,101,0.16);`
- numeric fields such as pieces, weight, cacao percent use tabular-nums.
- keep rows lightly spaced and premium, not spreadsheet dense.

dividers:
- simplest: `border-top: 1px solid var(--champagne-gold); opacity: 0.6;`
- ribbon divider: gold line with centered small diamond, bow, or monogram.
- scalloped divider: subtle cream/ivory radial edge for package trays.
- never use thick black lines or aggressive section breaks.

modals / overlays:
- gift-box modal: `background: var(--tissue-cream); border: 1px solid var(--champagne-gold); border-radius: 14px; padding: 38px 44px; box-shadow: 0 18px 48px rgba(60,36,21,0.16), 0 0 0 1px rgba(196,162,101,0.18);`
- header centered, Playfair title, script or small-caps subtitle.
- close control: small gold or chocolate icon/text, not a loud red button.
- backdrop: `background: rgba(60,36,21,0.42); backdrop-filter: blur(2px);`
- modal opening should feel like a lid lifting, not a toast snapping in.

badges:
- foil badge: `background: var(--champagne-gold); color: var(--dark-chocolate); border-radius: 999px; padding: 4px 12px; font-family: "Montserrat"; font-size: 10px; font-weight: 500; letter-spacing: 0.09em; text-transform: uppercase;`
- berry badge: `background: var(--berry-raspberry); color: var(--tissue-cream);`
- outline badge: `background: transparent; color: var(--champagne-gold); border: 1px solid var(--champagne-gold);`
- badges are small package labels, not status pills from a dashboard.

signature nested box:
- use a large blush or chocolate outer panel, an ivory inner tray, compartment cards, gold dividers, and optional ribbon/gift-note affordance.
- this pattern works for product detail, checkout, onboarding, portfolio highlights, recipe cards, and premium service comparisons.

**interaction language**

hover:
- cards lift gently: `transform: translateY(-2px); box-shadow: 0 8px 24px rgba(60,36,21,0.10);`
- gold accents brighten to `--foil-bright`.
- foil shimmer may glide once across primary buttons.
- transition: `0.28-0.35s ease`; calm and unhurried.

active / pressed:
- `transform: translateY(0); box-shadow: 0 2px 8px rgba(60,36,21,0.08);`
- button feels like closing a box lid or pressing a ribbon seal.

focus:
- `outline: 2px solid var(--champagne-gold); outline-offset: 3px; box-shadow: 0 0 0 4px rgba(196,162,101,0.14);`
- focus states are visible but elegant.

selected:
- `background: rgba(196,162,101,0.13); border-color: var(--champagne-gold);`
- selected product cards may show a small foil check or "Selected" label.

disabled:
- `opacity: 0.42; filter: grayscale(0.25);`
- disabled controls look like faded tissue paper, not an error.

drag:
- `box-shadow: 0 10px 28px rgba(60,36,21,0.14); transform: translateY(-4px) rotate(-1deg); cursor: grabbing;`
- drop target uses soft gold outline and blush fill.

**motion & feedback**

transitions:
- default: `transition: transform 0.32s ease, box-shadow 0.32s ease, border-color 0.32s ease, background 0.32s ease;`
- page enter: fade and rise from `opacity: 0; transform: translateY(8px)` to settled, staggered by `60ms`.
- modal enter: scale from `0.985` and fade in over `260ms`.
- no bounce, no shake, no hyperactive confetti.

loading:
- foil shimmer: `linear-gradient(90deg, var(--box-ivory), var(--foil-bright), var(--box-ivory)); background-size: 220% 100%; animation: foilShimmer 1.8s ease infinite;`
- alternate: three tiny champagne dots pulsing in sequence.
- copy: `Preparing selection...`, `Wrapping gift...`, `Opening box...`.

success:
- small gold checkmark or foil seal fades in and holds.
- success copy: `Added to your selection.`, `Gift note saved.`, `Box prepared.`
- optional pistachio-soft wash for confirmed states.

error:
- border briefly warms to `var(--berry-raspberry)` and fades back.
- error copy remains polite and calm.
- never shake the element.

keyframes:
```css
@keyframes foilShimmer { 0% { background-position: -220% center; } 100% { background-position: 220% center; } }
@keyframes tissueReveal { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
@keyframes sealFade { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
```

**atmosphere**

The interface is the interior of a premium confectionery box. Cream and ivory surfaces read as tissue paper and tray inserts; blush panels read as matte packaging lids; gold rules feel foil stamped rather than decorative UI chrome.

backgrounds:
- body: `background: linear-gradient(180deg, var(--tissue-cream), var(--box-ivory));`
- premium dark sections: `background: var(--dark-chocolate); color: var(--tissue-cream);`
- blush panels: matte card stock with soft inset highlights.
- tray surfaces: ivory with subtle inset embossing.

textures:
- card stock: layered inset shadows, mild paper grain, and fine foil rules.
- tissue paper: very subtle translucent cream layers or soft gradients.
- gold foil: short shimmer on hover, never constant sparkle.
- no loud patterns; scallops and ribbon dividers are sparse.

overlays:
- ribbon closures, monogram seals, small foil corner marks, and flavor labels can decorate panels.
- decorative flourishes must be small and precise.
- the layout must feel slow and curated, never busy.

images:
- product imagery should be softly cropped, warm-toned, and framed like a tray compartment.
- `filter: saturate(0.96) contrast(1.02) brightness(1.02);`
- avoid dark, dramatic food photography unless paired with warm cream surfaces.

**editorial voice**

tone: refined, sensory, calm, and gift-oriented. It should sound like a boutique confectionery catalog, not a sales funnel.

button labels:
- `Discover`
- `Add to Selection`
- `View Collection`
- `Unwrap`
- `Prepare Gift`
- `Add Note`
- `Choose Pieces`
- `Continue`
- `Reserve Box`

headings:
- `Signature Collection`
- `The Art of Chocolate`
- `Seasonal Offerings`
- `Gift Selection`
- `Praline Assortment`
- `Macaron Atelier`
- `Wrapped with Care`
- `A Quiet Indulgence`

metadata:
- `Origin: Peru 72%`
- `Pieces: 24`
- `Net 250g`
- `Collection: Spring`
- `Limited Edition`
- `Ribbon: Blush`
- `Box No. 014`
- `Flavor: Raspberry Ganache`

placeholders:
- `Search the collection...`
- `Your name...`
- `A personal message for the recipient...`
- `Choose a flavor note...`
- `Delivery instructions...`

empty states:
- `Your selection is empty.`
- `No pieces in this collection yet.`
- `Discover our offerings to begin.`
- `No gift notes added.`
- `This tray is waiting.`

errors:
- `We could not complete your request.`
- `This selection is currently unavailable.`
- `Please review the gift details.`
- `The requested box is out of stock.`
- `Please try again.`

success:
- `Added to your selection.`
- `Your gift is ready.`
- `Gift note saved.`
- `Box prepared.`
- `Order confirmed.`

**cursor & selection**

cursor: `default` for reading, `pointer` on buttons, links, product cards, collection tiles, and foil labels, `grab` and `grabbing` on reorderable selections.

selection: `::selection { background: var(--champagne-gold); color: var(--dark-chocolate); }`

**when to reach for this genome**

Use `confectionery_box.sweet` for luxury commerce, food and beverage, gift selection, premium hospitality, boutique packaging, patisserie, chocolate, beauty, jewelry-adjacent gifting, calm onboarding, and any product that benefits from tactile packaging, soft ceremony, and high-end restraint.

It is strongest when prompts mention chocolate, pralines, macarons, gift boxes, patisserie, premium packaging, foil, ribbon, boutique, indulgence, handcrafted goods, or curated selections.

Avoid it for high-density dashboards, incident response, developer tools, sports/action content, punk or streetwear surfaces, healthcare urgency, finance operations, or any interface where slow luxury would make the product feel impractical.

**anti-patterns - this genome NEVER:**

1. uses heavy black body text or aggressive font weights. body copy is light, airy, and calm.
2. uses sharp 0px corners as the dominant geometry. luxury packaging uses soft 10-14px curves and rounded tray compartments.
3. uses neon colors, pure black, cold blues, or sterile gray palettes. the world is warm chocolate, blush, cream, foil gold, berry, and soft nut tones.
4. uses dense cramped layouts. generous whitespace is a primary luxury signal.
5. uses urgent SaaS copy, growth language, or hype. no "Get started free" energy; use collection, selection, gift, and care language.
6. uses aggressive motion, shakes, bounces, or confetti. motion is tissue reveal, foil shimmer, lid lift, and seal fade.
7. uses hard drop shadows or brutal containment. depth is embossed, debossed, inset, warm, and subtle.
8. uses monospace, system UI, or utilitarian type as display. display is Didone or refined serif; mono-like precision is not part of this package.
9. uses flat textureless cards. surfaces need card stock, foil, tissue, or tray dimensionality.
10. covers large areas in gold. foil is precise trim and accent, not wallpaper.
11. makes every element sweet or decorative. the system is restrained: box lid, tray compartment, ribbon divider, foil badge, gift note.
12. sacrifices legibility for delicacy. light typography still needs readable contrast and generous line-height.
