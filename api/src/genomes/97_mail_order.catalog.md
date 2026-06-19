---
id: "97"
name: mail_order.catalog
keywords:
  - catalog
  - mail order
  - sears
  - retail
  - shopping
  - vintage
  - 1970s
  - product
  - coupon
  - department store
  - price tag
  - wishbook
  - order form
---

### genome 97: `mail_order.catalog`

> identity: 1975 department store mail-order catalog. Sears Roebuck, JCPenney, Montgomery Ward product grids on newsprint-weight paper. Mail-order forms with fill-in boxes, price tags with slashed-through original prices, dotted-line cut-here coupons, product comparison charts, and the optimistic commercial warmth of mass-market American retail before the internet. The Wish Book at Christmas — dog-eared pages, circled items, order forms filled out at the kitchen table.

---

## surface

Colors:
```
--newsprint: #F2EBD9;
--ink-black: #1C1C1C;
--sale-red: #CC2222;
--navy: #1E2D4D;
--harvest-gold: #C4922A;
--avocado: #5B7A3A;
--coupon-yellow: #FFF4B8;
--dotted-line: #888888;
--price-strike: #CC2222;
--form-rule: #888888;
--product-bg: #F9F4EA;
--section-header-bg: #1E2D4D;
```

Typography:
- Product descriptions / body: `"Georgia", "Libre Baskerville", serif` at `font-weight: 400; font-size: 13-15px; line-height: 1.5; color: var(--ink-black)`. The workhorse reading font of every product paragraph.
- Prices / headers / labels: `"Oswald", "Barlow Condensed", sans-serif` at `font-weight: 700; text-transform: uppercase; letter-spacing: 0.03em`. Condensed and punchy — the bold price tags and section banners of mass retail.
- Order form fields / item numbers / catalog codes: `"Courier New", "Courier", monospace` at `font-size: 12-13px`. Typewriter fill-in style — the machine-printed fields of a mail-order form.
- Display sizes: sale banners 28-42px in Oswald; section headers 18-24px in Oswald; product names 14-16px in Georgia; prices 18-26px in Oswald bold; body descriptions 13-14px in Georgia; item codes 11-12px in Courier New; coupon text 11-13px in Oswald.
- Original/crossed-out price: `text-decoration: line-through; color: var(--ink-black); opacity: 0.55; font-size: 0.85em` — always adjacent to the bold red sale price.
- `letter-spacing: 0.01em` on Georgia body text. `letter-spacing: 0.04em` on Oswald uppercase.

Borders:
- Product cell borders: `1px solid rgba(28, 28, 28, 0.25)` — the thin rules that separate product grid cells on newsprint.
- Section dividers: `3px solid var(--navy)` — heavy rule separating catalog departments.
- Coupon strip border: `border: 1px dashed var(--dotted-line); border-radius: 0` — the perforated cut-here coupon edge.
- Order form field borders: `border: none; border-bottom: 1px solid var(--form-rule)` — underline-only form fields, typewriter style.
- `border-radius: 0` on everything. No exceptions. Corners are always sharp. This is newsprint, not software.
- Price tag outline: `border: 2px solid var(--sale-red)` — the rectangular red sale-price box.
- Comparison chart: `border: 1px solid rgba(28,28,28,0.3); border-collapse: collapse` — clean grid lines.

Spacing:
- Product grid cells: `padding: 10px 12px; gap: 0` — cells are edge-to-edge with only thin rule borders separating them. Maximum items per page.
- Section headers: `padding: 6px 12px` — tight, no excess room.
- Order forms: `padding: 16px 20px` — slightly more breathing room to suggest a fillable document.
- Coupon strips: `padding: 8px 14px` — compact, ready-to-clip.
- Body margin: `margin: 0 auto; max-width: 960-1200px` — the wide column of a catalog spread.
- Never generous. Information density is a feature, not a bug. Pack the page.

---

## color distribution

55% newsprint/product-bg (`--newsprint`, `--product-bg`) — the page itself. Every background, every card surface, every blank area is cream newsprint. This is the dominant surface. 15% ink-black (`--ink-black`) — all body text, product descriptions, item numbers, form labels, borders. The press ink. 10% navy (`--navy`) — department section headers, comparison chart headers, navigation bars, strong structural elements. 8% sale-red (`--sale-red`) — SALE prices, clearance labels, attention callouts, promotional badges. Used purposefully and sparingly to create urgency. 6% harvest-gold (`--harvest-gold`) — accent headlines, star/rating callouts, featured product banners, seasonal highlights. 4% coupon-yellow (`--coupon-yellow`) — coupon strip backgrounds only. 2% avocado (`--avocado`) — secondary accent, "new arrival" badges, eco/garden department markers. A nod to the decade.

---

## component patterns

Buttons: ORDER NOW button — `background: var(--sale-red); color: #FFFFFF; border: none; border-radius: 0; padding: 10px 22px; font-family: "Oswald", sans-serif; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.04em`. Secondary — ADD TO ORDER: `background: var(--navy); color: #FFFFFF; same structure`. Ghost/text button: `background: transparent; color: var(--navy); border: 2px solid var(--navy); padding: 8px 18px; font-family: "Oswald", sans-serif; font-weight: 700; text-transform: uppercase`. No rounded corners, no gradients, no shadows. Flat and print-like. Buttons look like the rectangular order stamps on a catalog form.

Inputs: MAIL-ORDER FORM FIELDS — `background: transparent; border: none; border-bottom: 1.5px solid var(--ink-black); border-radius: 0; color: var(--ink-black); font-family: "Courier New", monospace; font-size: 13px; padding: 4px 6px; width: 100%`. Labels: `font-family: "Oswald", sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--ink-black); letter-spacing: 0.04em; margin-bottom: 2px`. Focus: `border-bottom-color: var(--navy); outline: none`. Placeholder: `color: var(--dotted-line); font-style: normal`. Boxed input variant (quantity fields, order codes): `border: 1px solid var(--ink-black); background: #FFFFFF; padding: 4px 8px; font-family: "Courier New", monospace; border-radius: 0`.

Product cards: THE fundamental unit — `background: var(--product-bg); border: 1px solid rgba(28,28,28,0.22); border-radius: 0; padding: 10px 12px`. Product image area at top: fixed-ratio square or portrait, `border: 1px solid rgba(28,28,28,0.15)`, no border-radius. Product name: `font-family: "Georgia", serif; font-weight: 700; font-size: 14px; color: var(--ink-black); margin: 6px 0 4px`. Item number: `font-family: "Courier New", monospace; font-size: 11px; color: var(--dotted-line); margin-bottom: 4px`. Description: `font-family: "Georgia", serif; font-size: 12-13px; color: var(--ink-black); line-height: 1.45`. Price block at bottom: original price struck through in small gray text, sale price in Oswald bold sale-red at 18-22px, side-by-side or stacked. "Reg. $XX.99" in gray, "NOW $XX.99" in red.

PRICE TAG component: `display: inline-block; border: 2px solid var(--sale-red); padding: 4px 10px; background: #FFFFFF`. Original price: `font-family: "Oswald", sans-serif; font-size: 12px; color: var(--ink-black); text-decoration: line-through; opacity: 0.6; display: block`. Sale price: `font-family: "Oswald", sans-serif; font-size: 22-28px; font-weight: 700; color: var(--sale-red); display: block`. "SAVE $X.XX" line below in `font-size: 10px; font-weight: 700; color: var(--sale-red); text-transform: uppercase`.

COUPON STRIP component: `background: var(--coupon-yellow); border: 1.5px dashed var(--dotted-line); border-radius: 0; padding: 10px 16px; display: flex; align-items: center; gap: 16px`. Left: scissors icon or "✂ CUT HERE" text in `font-family: "Oswald", sans-serif; font-size: 10px; color: var(--dotted-line); text-transform: uppercase; writing-mode: vertical-rl` rotated. Body: offer text in `font-family: "Oswald", sans-serif; font-weight: 700; font-size: 16-20px; color: var(--ink-black)`. Fine print below in `font-family: "Courier New", monospace; font-size: 9-10px; color: var(--ink-black); opacity: 0.7`. Expiry and code on the right in Courier New. Bottom border suggestion: `border-bottom: 2px dashed var(--dotted-line)` — the cut line.

ORDER FORM component: `background: var(--newsprint); border: 2px solid var(--ink-black); border-radius: 0; padding: 20px 24px`. Header: `background: var(--navy); color: #FFFFFF; padding: 8px 12px; font-family: "Oswald", sans-serif; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 0.06em; margin: -20px -24px 16px`. Order line rows: `display: grid; grid-template-columns: 80px 1fr 60px 80px 80px; gap: 0; border-bottom: 1px solid rgba(28,28,28,0.2)`. Column labels: ITEM NO., DESCRIPTION, QTY, UNIT PRICE, TOTAL — in `font-family: "Oswald", sans-serif; font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 4px 6px; background: rgba(28,28,28,0.06)`. All field text in Courier New. Total row: `border-top: 3px double var(--ink-black); font-weight: 700`.

Navigation: `background: var(--navy); border-radius: 0; padding: 0`. Nav items are DEPARTMENT tabs: `font-family: "Oswald", sans-serif; font-weight: 700; font-size: 13px; text-transform: uppercase; color: rgba(255,255,255,0.8); padding: 10px 16px; letter-spacing: 0.04em; border-right: 1px solid rgba(255,255,255,0.15); display: inline-block`. Active/current: `background: var(--harvest-gold); color: var(--ink-black)`. Hover: `background: rgba(255,255,255,0.12); color: #FFFFFF`. No icons, no hamburger menus. Pure department-store category tabs.

Section headers: DEPARTMENT BANNERS — `background: var(--navy); color: #FFFFFF; padding: 8px 16px; font-family: "Oswald", sans-serif; font-weight: 700; font-size: 20-26px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 4px solid var(--harvest-gold)`. Page number and department code in top-right corner: `font-family: "Courier New", monospace; font-size: 11px; color: rgba(255,255,255,0.6)`. Sub-section banners: `background: var(--harvest-gold); color: var(--ink-black); font-size: 15-18px; padding: 5px 12px`.

Product grid: CORE LAYOUT — CSS grid of 2, 3, or 4 columns depending on product type. `display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid rgba(28,28,28,0.2)`. Each cell bordered. No gap — borders create the separation. The grid FILLS the page width completely, edge to edge, like a printed spread.

COMPARISON CHART component: `width: 100%; border-collapse: collapse; border: 1px solid rgba(28,28,28,0.3)`. Header row: `background: var(--navy); color: #FFFFFF; font-family: "Oswald", sans-serif; font-weight: 700; font-size: 12px; text-transform: uppercase; padding: 6px 10px; text-align: center`. Feature column: `font-family: "Georgia", serif; font-size: 13px; padding: 6px 10px; border-right: 1px solid rgba(28,28,28,0.2); border-bottom: 1px solid rgba(28,28,28,0.15); background: rgba(28,28,28,0.03)`. Value cells: `text-align: center; font-family: "Oswald", sans-serif; font-size: 13px; padding: 6px 10px; border-right: 1px solid rgba(28,28,28,0.15); border-bottom: 1px solid rgba(28,28,28,0.15)`. Check marks: ✓ in `color: var(--avocado); font-weight: 700`. Dashes: — in `color: var(--dotted-line)`.

Footers: `background: var(--newsprint); border-top: 3px solid var(--navy); padding: 16px 20px; font-family: "Courier New", monospace; font-size: 11px; color: var(--ink-black); display: flex; justify-content: space-between`. Left: catalog number and print date. Center: mailing address and P.O. box. Right: toll-free order number `1-800-XXX-XXXX`. All in monospace, catalog-document style.

Tables: Product specification tables — `border-collapse: collapse; border: 1px solid rgba(28,28,28,0.25); font-family: "Georgia", serif; font-size: 13px`. Header row: `background: rgba(28,28,28,0.07); font-family: "Oswald", sans-serif; font-weight: 700; text-transform: uppercase; font-size: 11px; padding: 6px 10px`. Body rows: `padding: 5px 10px; border-bottom: 1px solid rgba(28,28,28,0.12)`. Alternating rows: subtle `background: rgba(28,28,28,0.025)` tint. No rounded corners anywhere.

Dividers: `border-top: 3px solid var(--navy)` for major section breaks. Thin rules: `1px solid rgba(28,28,28,0.2)` between rows and product cells. Dotted coupon lines: `border-top: 1.5px dashed var(--dotted-line)`. Never decorative flourishes — this is functional newsprint division.

Modals: ORDER CONFIRMATION overlay — `background: var(--newsprint); border: 3px solid var(--navy); border-radius: 0; padding: 0; box-shadow: 4px 4px 0 rgba(28,28,28,0.4)`. Header: `background: var(--navy); color: #FFFFFF; padding: 10px 16px; font-family: "Oswald", sans-serif; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 0.05em`. Content: `padding: 20px 24px; font-family: "Georgia", serif; font-size: 14px`. Backdrop: `background: rgba(28,28,28,0.6)` — no blur. Hard, opaque. The overlay sits on top like a confirmation slip placed on the page. Close: a small "X" button in Oswald, top-right, `color: rgba(255,255,255,0.8)`.

Badges/labels: `border-radius: 0; padding: 2px 8px; font-family: "Oswald", sans-serif; font-weight: 700; font-size: 10-11px; text-transform: uppercase; letter-spacing: 0.04em`. SALE badge: `background: var(--sale-red); color: #FFFFFF`. NEW badge: `background: var(--avocado); color: #FFFFFF`. SPECIAL badge: `background: var(--harvest-gold); color: var(--ink-black)`. CLEARANCE badge: `background: var(--ink-black); color: #FFFFFF`. All rectangular, no rounded corners.

---

## interaction language

Hover: a subtle `background: rgba(196,146,42,0.08)` wash on product cards — like a pencil circle drawn around a product of interest. Buttons darken slightly: `filter: brightness(0.9)`. No glow, no shadow expansion. `transition: none` — this is a printed catalog; interactions are abrupt and immediate. Links: `color: var(--navy); text-decoration: underline` on hover, color darkens to `var(--ink-black)`.

Active/pressed: buttons show `filter: brightness(0.75)` — the depression of pressing a physical stamp. No scale transform. Instant state change.

Focus: `outline: 2px solid var(--navy); outline-offset: 1px; border-radius: 0`. Inputs show `border-bottom-color: var(--navy)`. No glow — catalog forms do not glow.

Selected: product cards get `outline: 2px solid var(--sale-red); outline-offset: -2px` — like a red pen circle drawn around a selected item. Checkbox-style selected state: `background: rgba(204,34,34,0.06)`.

Disabled: `opacity: 0.4; pointer-events: none` — like a grayed-out "OUT OF STOCK" notice printed over a product. No special color, just faded.

Drag: `opacity: 0.7; outline: 2px dashed var(--dotted-line); cursor: grabbing` — like picking up a product slip.

---

## motion & feedback

Transitions: `transition: none` on ALL elements. Zero animation, zero transition delay. Content appears instantly, as if turning a page. State changes are hard cuts — printed catalogs do not animate. This is a non-negotiable constraint of the identity.

Loading: the only concession to the digital medium — a simple `opacity: 0` to `opacity: 1` snap on page load (no duration, hard appear). Or a static placeholder box in `background: rgba(28,28,28,0.06)` — a gray rectangle where the product image will be, suggesting the unpainted area of a catalog page coming off the press. No spinners, no progress bars, no skeletons with shimmer.

Success: order confirmation text appears in the order form: `ORDER RECEIVED — CATALOG NO. XXXXX` printed in ink-black Courier New. A rectangular navy banner replaces the form header: `background: var(--navy); color: #FFFFFF`. Hard cut, no animation.

Error: form field border-bottom turns `var(--sale-red)`. Error message appears below in `font-family: "Oswald", sans-serif; font-size: 11px; font-weight: 700; color: var(--sale-red); text-transform: uppercase; margin-top: 3px`. No shake, no pulse. Errors are printed notes, not alarms.

Page load: content renders immediately in place — no stagger, no fade, no fly-in. The catalog page is complete before you see it, the way a physical page exists fully formed before you turn to it.

---

## atmosphere

The background is `var(--newsprint)` — a warm cream throughout, never white. The slightly yellowed, absorptive quality of newsprint stock. A very subtle paper texture can be suggested via `background-image: url("data:image/svg+xml,...")` or `filter: none` — or simply accepted as the flat #F2EBD9 color, which reads warm enough.

The grid is tight and packed. Every row of the product grid extends to the full page width. No breathing room at the edges of product cells — the catalog layout respects no margin for whitespace comfort. Products compete for the eye.

The navy section headers create strong horizontal banding across the page — the visual rhythm of turning through a department store catalog, each department announced in bold white-on-navy.

SALE RED appears as a controlled alarm — the eye catches it instantly against the newsprint ground. It is used only for prices and sale labels, never decoratively.

The harvest-gold functions as the warm headline accent — featured product banners, special offer callouts, Christmas Wish Book promotional headers. It evokes the warmth of the holiday season and the aspirational optimism of the catalog era.

Product images are assumed to be photographs with slight warm print tone: `filter: contrast(1.05) saturate(0.95) sepia(0.05)` — the slightly oversaturated, slightly warm color reproduction of offset printing on absorbent newsprint.

The page evokes the sensory memory of flipping through a thick catalog at the kitchen table — the slight roughness of the paper, the smell of print ink, the dense rows of products each with their own item number, the order form at the back ready to be filled out and mailed.

---

## editorial voice

Direct, optimistic, value-forward. The language of mass-market American retail — confident, product-specific, price-led. Benefit statements, not features alone. You are always getting a good deal.

Button labels: `Order Now`, `Add to Order Form`, `See All Colors`, `Compare Models`, `Shop This Dept.`, `Request Catalog`, `Check Availability`, `Order by Phone`. Title case. Never lowercase. Never terse one-word buttons.

Section headers and banners: promotional, all-caps, declarative. `BIG SAVINGS — FAMILY APPAREL`, `HOLIDAY WISH BOOK — TOY DEPARTMENT`, `NEW ARRIVALS — SMALL APPLIANCES`, `COMPARE AND SAVE — ELECTRONICS`, `ORDER BY DEC. 15 FOR CHRISTMAS DELIVERY`, `SEARS BEST — CRAFTSMAN HAND TOOLS`. Oswald bold.

Product names: specific, descriptive, model-number-inclusive. "Lady Kenmore® 2-Speed Portable Dishwasher", "Montgomery Ward Men's Plaid Flannel Shirt — Sizes S-XL", "JCPenney 21" Portable Color TV, Model 685-321B". Georgia serif.

Price copy: `Reg. $XX.99 — NOW $XX.99`, `SAVE $X.XX`, `COMPARE AT $XX — OUR PRICE $XX`, `ONLY $X.99 EACH OR 3 FOR $XX`. Sale red.

Item codes and metadata: `Cat. No. 42-1863-5`, `Order No. ___________`, `Size: ___  Color: ___  Qty: ___`, `Shipping Wt. 4 lbs.`, `Allow 4-6 weeks for delivery`. Courier New monospace.

Placeholders: `Item No.`, `Your Name as on Card`, `ZIP Code`, `Qty.`, `Daytime Phone`.

Empty states: `No items in this department.`, `This page intentionally left blank.`, `See page 247 for continued selection.`.

Error messages: `This item is currently out of stock. Please call 1-800-XXX-XXXX to check availability.`, `Order could not be processed — please verify item number and resubmit.`, `Invalid catalog number. Refer to current edition.`.

Success messages: `Your order has been received. Order Confirmation No. XXXXXXX. Please allow 4-6 weeks for delivery.`, `Item added to your order form.`, `Your catalog request is on file.`.

---

## cursor & selection

Default cursor throughout. `cursor: pointer` on all interactive elements — buttons, product cards, nav tabs, coupon strips. `cursor: text` inside order form fields. No custom cursors.

`::selection { background: var(--harvest-gold); color: var(--ink-black); }` — the gold highlight of a pen mark on the page.

---

**when to reach for this genome**

Use `mail_order.catalog` when the prompt asks for a 1970s retail catalog, Sears/Ward/JCPenney-style department spread, product grid, mail-order form, coupon clipping, price-tag promotion, comparison chart, order-by-phone flow, or any commerce interface that should feel like a dense printed catalog page meant to sell household goods.

Reach for it when the concrete cues are newsprint cream, sharp rectangular product cells, no-radius grids, Georgia product descriptions, Oswald price banners, Courier item numbers, slashed regular prices, sale-red price boxes, navy department headers, harvest-gold offers, avocado secondary labels, dotted coupon perforations, order forms, catalog numbers, `Reg. $XX.99`, `NOW $XX.99`, `Cat. No.`, and delivery copy like `Allow 4-6 weeks for delivery`. It is strongest when the product mechanic is browse departments, compare models, clip offers, fill order lines, and add items to a physical-feeling order form.

Choose it for retro commerce, catalog shopping, wish-book gift lists, product comparison pages, coupon/clearance concepts, vintage retail ordering, department navigation, and product grids where price, item number, description, size/color/quantity, and shipping promise are the main information units.

Do not choose it for library reference indexes, Dewey cards, oak drawers, brass pulls, or book-catalog records; use `card_catalog.dewey`. Do not use it for medicinal bottle labels, tinctures, dosage instructions, ornate Rx borders, or Victorian herbal commerce; use `apothecary_label.rx`. Do not use it for bureaucratic forms, carbon copies, manila dossiers, rubber-stamped memos, or official records; use `typewriter_carbon.duplicate`. Do not use it for modern clean storefronts, SaaS product marketing, or premium boutique packaging; use `modern_studio.pro` or a more product-specific luxury/packaging genome. Do not use it for seed catalogs, planting zones, kraft packets, or garden planning; use `seed_packet.plot`.

---

## anti-patterns — this genome NEVER:

1. uses border-radius greater than 0px on any element. Everything is rectangular — product cells, buttons, order form fields, badges, modals, coupons. Newsprint has no rounded corners. No pills, no rounded cards, no softened inputs. `border-radius: 0` is absolute.
2. uses animation, transition, or motion of any kind. `transition: none` is global and inviolable. No hover animations, no fade-ins, no page transitions, no skeleton shimmers. The catalog is a static printed object. Content appears or it does not.
3. uses dark backgrounds as primary surfaces. The page is always newsprint cream (`--newsprint`, `--product-bg`). Navy and ink-black are used only for headers, text, and structural accents — never as full-page backgrounds. This is not a dark-mode design.
4. uses sans-serif for product descriptions or body copy. Body text is always Georgia or Libre Baskerville serif — the workhorse typefaces of printed catalog description copy. Sans-serif is reserved for prices, headers, and labels only.
5. uses generous whitespace or sparse layouts. Information density is the core aesthetic. Product grids pack 3-4 items per row minimum. Empty space is page space wasted. Every square inch of the catalog serves a commercial purpose.
6. uses soft shadows, drop shadows, or elevation effects as primary visual language. The only shadow in the catalog is the flat hard `4px 4px 0 rgba(28,28,28,0.4)` offset on modal dialogs — the shadow of a paper slip lying on a table. No blurred box-shadows, no card elevation, no depth system.
7. uses color gradients on backgrounds or components. Every surface is flat. Newsprint doesn't gradient. Buttons are flat solid colors. Cards are flat cream. Section headers are flat navy. No `linear-gradient` on structural elements.
8. uses conversational, casual, or informal language. The voice is retail-formal — product descriptions, benefit statements, price comparisons, delivery timelines. No "Awesome!", no "Looks like nothing here yet!", no emoji. The catalog speaks in the measured, optimistic tone of mass-market retail copy.
9. uses neon, saturated accent colors beyond the defined palette. No electric blue, no hot pink, no lime green. The palette is controlled — newsprint cream, ink black, sale red, department navy, harvest gold, avocado. Avocado and harvest gold are the limits of chromatic ambition for this era.
10. uses monospace fonts for anything other than order form fields, item codes, and catalog numbers. Monospace is the typewriter — the fill-in form, the stamped item number. It is not for product names, section headers, prices, or body descriptions.
