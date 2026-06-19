---
id: "70"
name: carnival_midway.show
keywords:
  - carnival
  - circus
  - midway
  - fairground
  - marquee
  - sideshow
  - ticket
  - vintage
  - showman
  - tent
  - festive
  - hand-painted
---

### genome 70: `carnival_midway.show`

> identity: traveling circus and county-fair midway at dusk. Hand-painted wooden signs, red-and-cream canvas tents, ticket stubs, prize ribbons, carousel trim, sawdust floors, incandescent marquee bulbs, sideshow posters, and a barker calling from a striped booth. Every interface element should feel like a physical fairground artifact: a painted board, an admission ticket, a prize placard, or a lit marquee.

**surface**

colors:
```
--tent-red: #B8282E;                    /* big-top stripe, primary call to action */
--tent-red-dark: #7F1822;               /* shadowed canvas red, pressed states */
--tent-cream: #F5ECD7;                  /* canvas stripe, ticket stock, light panels */
--ticket-aged: #E8D6B7;                 /* worn ticket paper, secondary cards */
--gold-trim: #D4A843;                   /* gilt frames, stars, active accents */
--marquee-warm: #FFE4A8;                /* incandescent bulb glow */
--night-dark: #1C1520;                  /* dusk sky, deep page background */
--ink-dark: #271B16;                    /* painted lettering and strong text */
--wood-brown: #6B4226;                  /* painted booth wood, sign backing */
--wood-shadow: #3E2618;                 /* sign edges and hard shadows */
--ticket-blue: #2E5B88;                 /* admission ticket accent, secondary action */
--prize-teal: #1D7B72;                  /* prize booth, success highlights */
--sawdust: #E0D2B4;                    /* neutral floor texture */
--poster-pink: #C94C7A;                 /* sideshow poster accent */
--bulb-glow: rgba(255,228,168,0.44);   /* bulb halo */
--hard-shadow: rgba(28,21,32,0.72);    /* painted sign drop shadow */
```

typography:
- main sign lettering: `"Abril Fatface", "Cooper Black", "Playfair Display", serif; font-weight: 800-900; font-size: 34-72px; line-height: 0.95; letter-spacing: 0.04-0.1em; text-transform: uppercase;`
- showcard headings: `"Rye", "Clarendon", "Georgia", serif; font-weight: 700; font-size: 22-36px; letter-spacing: 0.05em; text-transform: uppercase;`
- script accent: `"Pacifico", "Dancing Script", cursive; font-weight: 400; font-size: 18-30px; line-height: 1.1;` used sparingly for "tonight", "live", "special", and secondary flourishes.
- body copy: `"Outfit", "Lato", "Inter", sans-serif; font-weight: 500; font-size: 14-16px; line-height: 1.5; color: var(--ink-dark);`
- ticket codes, prices, booth numbers: `"IBM Plex Mono", "Roboto Mono", monospace; font-weight: 700; font-size: 11-13px; letter-spacing: 0.06em; text-transform: uppercase; font-variant-numeric: tabular-nums;`
- display text is never delicate. It should look painted large enough to read across a midway.

borders:
- primary sign boards: `3px solid var(--ink-dark); border-radius: 8px; box-shadow: 4px 4px 0 var(--wood-shadow);`
- marquee frames: `4px solid var(--gold-trim); border-radius: 10px;`
- ticket stubs: `2px solid var(--ink-dark); border-radius: 8px;`
- light panels and booth cards: `2px solid var(--wood-brown); border-radius: 8px;`
- perforation rules: `border-left: 2px dashed rgba(39,27,22,0.36);` or radial cutout gradients.
- avoid 1px hairlines for containment. Carnival signage needs visible painted weight.

spacing:
- show signs use generous padding: `20-32px`.
- ticket cards use `padding: 14-18px`, with compact gutters for serial numbers and perforation strips.
- booth grids use `gap: 16-22px`.
- marquee headers need `padding: 24-36px`.
- keep content readable and open like a fairground aisle; do not pack rows like a data terminal.

**color distribution**

- 28% night dark / ink dark (`--night-dark`, `--ink-dark`) - dusk sky, text, sign outlines, hard shadows.
- 24% tent cream / ticket aged / sawdust (`--tent-cream`, `--ticket-aged`, `--sawdust`) - ticket stock, canvas, poster paper, light content fields.
- 20% tent red / dark red (`--tent-red`, `--tent-red-dark`) - big-top stripes, primary calls, booth headers.
- 12% wood brown / wood shadow (`--wood-brown`, `--wood-shadow`) - physical structure, booth frames, sign backs.
- 8% gold trim / marquee warm - bulbs, stars, trim, highlighted controls.
- 5% ticket blue - secondary route, admission details, informational tags.
- 3% prize teal / poster pink - success, prize booth, sideshow accents.

The palette is warm and theatrical. Red and cream build the canvas tent. Gold supplies show lights. Dark ink makes everything legible from the other side of the midway.

**component patterns**

buttons:
- primary: `background: var(--tent-red); color: var(--tent-cream); border: 3px solid var(--ink-dark); border-radius: 8px; padding: 12px 28px; font-family: "Abril Fatface", serif; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; box-shadow: 3px 3px 0 var(--ink-dark);`
- secondary ticket: `background: var(--tent-cream); color: var(--tent-red); border: 3px solid var(--tent-red); border-radius: 8px;`
- gold prize action: `background: var(--gold-trim); color: var(--ink-dark); border: 3px solid var(--ink-dark);`
- icon buttons are round prize-token buttons only when they represent compact tools; otherwise use labeled sign buttons.
- pressed buttons reduce the hard shadow and translate diagonally like a physical painted sign being pushed.

inputs:
- `background: var(--tent-cream); border: 2px solid var(--wood-brown); border-radius: 8px; color: var(--ink-dark); padding: 10px 14px; font-family: "Outfit", sans-serif; font-size: 15px;`
- labels: `font-family: "IBM Plex Mono", monospace; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--wood-brown);`
- focus: `border-color: var(--gold-trim); box-shadow: 0 0 0 3px rgba(212,168,67,0.24), 0 0 14px var(--bulb-glow); outline: none;`
- placeholder copy should feel like a ticket booth prompt, e.g. "Search attractions..." or "Name on the ticket...".

cards / ticket stubs:
- ticket card: `background: var(--ticket-aged); border: 2px solid var(--ink-dark); border-radius: 8px; box-shadow: 4px 4px 0 var(--hard-shadow); position: relative;`
- left or right perforation column: `width: 42px; border-left: 2px dashed rgba(39,27,22,0.35); background: rgba(255,255,255,0.18);`
- ticket serial: mono uppercase, rotated or tucked into the perforation area, e.g. `ADMIT-0147`.
- content panel: cream fill, red header strip, gold star or booth number.
- cards may use radial cutouts at one edge: `radial-gradient(circle at left center, transparent 0 8px, var(--ticket-aged) 9px)`.

tent panels:
- striped canvas blocks use `background: repeating-linear-gradient(90deg, var(--tent-red) 0 28px, var(--tent-red) 28px, var(--tent-cream) 28px, var(--tent-cream) 56px);`
- place real content inside an inset cream or night-dark placard so text remains readable.
- tent panels work well for hero headers, feature groups, or section breaks.

marquee headers:
- `background: var(--night-dark); color: var(--gold-trim); border: 4px solid var(--gold-trim); border-radius: 10px; padding: 26px 34px; box-shadow: 0 0 28px rgba(255,228,168,0.18), 6px 6px 0 var(--wood-shadow);`
- title uses large show lettering; subtitle uses script accent or mono ticket line.
- bulb border is simulated with repeating radial dots around an inner frame: `background-image: radial-gradient(circle, var(--marquee-warm) 3px, transparent 4px); background-size: 18px 18px;`
- add small star separators, booth numbers, and "TONIGHT ONLY" labels.

navigation:
- top booth rail: `background: var(--wood-brown); border-bottom: 4px solid var(--gold-trim); color: var(--tent-cream);`
- nav labels use showcard serif uppercase.
- active item: `background: var(--gold-trim); color: var(--ink-dark); border: 2px solid var(--ink-dark); box-shadow: 2px 2px 0 var(--ink-dark);`
- separators may be small stars, ticket slashes, or bulb dots; never plain gray separators.

headers:
- layout should resemble a painted entrance sign or tent-front facade.
- include a show label such as `MIDWAY`, `ADMIT ONE`, `TONIGHT`, `GATE B`, or `MAIN EVENT`.
- large display text should sit on a solid sign board, not directly on a busy stripe field.
- use a small serial or booth marker in mono to ground the fantasy in UI utility.

footers:
- booth plank footer: `background: var(--wood-brown); border-top: 3px solid var(--gold-trim); color: var(--tent-cream); padding: 16px 24px;`
- include ticket terms, gate number, show time, or "Est. 1923" details.
- decorative star row in gold is acceptable when it supports the sign system.

lists:
- attraction lineup rows have gold star bullets or numbered ticket tabs.
- row title in showcard serif; supporting copy in Outfit.
- active row: `background: rgba(212,168,67,0.16); border-left: 4px solid var(--gold-trim);`
- list dividers use dashed ticket perforations, not thin gray lines.

tables / price boards:
- price board: `background: var(--tent-cream); border: 3px solid var(--ink-dark); border-radius: 8px; box-shadow: 4px 4px 0 var(--wood-shadow);`
- header: `background: var(--tent-red); color: var(--tent-cream); font-family: "Abril Fatface", serif; text-transform: uppercase;`
- body cells: `padding: 10px 14px; border-bottom: 2px dashed rgba(39,27,22,0.22);`
- prices and counts use mono tabular numerals; prize values can be gold or ticket blue.

dividers:
- primary divider: red-and-cream stripe band, `height: 10-16px`.
- decorative divider: centered gold star row, e.g. `* * *`, flanked by dark painted rules.
- ticket divider: `border-top: 2px dashed rgba(39,27,22,0.34);`
- avoid neutral horizontal rules that feel like SaaS cards.

modals / overlays:
- sideshow poster modal: `background: var(--tent-cream); border: 4px solid var(--ink-dark); border-radius: 10px; box-shadow: 0 0 34px rgba(255,228,168,0.18), 7px 7px 0 var(--ink-dark);`
- modal header: red show strip with cream lettering and gold small caps.
- footer: ticket-stub strip reading `ADMIT ONE`, `CLAIM`, or `GATE PASS`.
- backdrop: `background: rgba(28,21,32,0.86);` no blur. The night sky dims behind the poster.

badges / ribbons:
- round prize badge: `background: var(--gold-trim); color: var(--ink-dark); border: 2px solid var(--ink-dark); border-radius: 50%; width: 30px; height: 30px; display: inline-flex; align-items: center; justify-content: center; font-weight: 800;`
- ribbon badge: `background: var(--ticket-blue); color: var(--tent-cream); border: 2px solid var(--ink-dark); border-radius: 4px; padding: 4px 10px; text-transform: uppercase;`
- featured badge: `background: var(--poster-pink); color: var(--tent-cream);`
- badges should feel printed, stamped, or pinned, never like neutral pills.

signature booth card:
- a booth card combines a striped tent cap, cream ticket body, hard ink outline, price/token metadata, and a gold star/ribbon status.
- recommended for product tiles, event cards, feature cards, game entries, or onboarding choices.

**interaction language**

hover:
- hard shadow grows slightly: `box-shadow: 5px 5px 0 var(--ink-dark), 0 0 16px var(--bulb-glow);`
- gold accents brighten to `--marquee-warm`.
- striped/ticket components may rotate by `-1deg` at most; motion should feel hand-made, not chaotic.
- baseline transition: `0.18-0.24s ease`.

active / pressed:
- sign press: `transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--ink-dark); filter: brightness(0.94); transition: 0.06s;`
- ticket selection: perforation edge darkens and serial number becomes gold or red.

focus:
- `outline: 3px solid var(--gold-trim); outline-offset: 3px; box-shadow: 0 0 0 4px rgba(255,228,168,0.28);`
- focus must be visible on cream, red, wood, and night backgrounds.

selected:
- `background: var(--gold-trim); color: var(--ink-dark); border-color: var(--ink-dark);`
- selected cards gain a small `ADMIT ONE` stamp or gold star badge.

disabled:
- `opacity: 0.42; filter: sepia(0.55) saturate(0.55);`
- disabled copy should read like a closed attraction: `Closed`, `No Tickets`, `Dark Tonight`, or `Standby`.

drag:
- `cursor: grabbing; transform: rotate(-2deg) scale(1.02); box-shadow: 0 10px 24px rgba(0,0,0,0.38), 5px 5px 0 var(--ink-dark);`
- drop targets show a dashed ticket outline and gold glow.

**motion & feedback**

transitions:
- ordinary interactions: `0.18-0.24s ease`.
- sign entrance: `transform: translateY(-18px) rotate(-2deg)` to `translateY(0) rotate(0)` over `280ms ease-out`.
- ticket entrance: `opacity: 0; transform: translateY(10px)` to visible over `220ms ease-out`.
- no glossy startup gradient motion. Motion comes from signs, tickets, bulbs, and booth mechanics.

loading:
- marquee bulb chase around a frame: dots brighten in sequence with `animation: bulbChase 1.1s linear infinite`.
- ticket-tear loading: dashed perforation line advances across a stub.
- copy: `COMING SOON...`, `OPENING THE GATE...`, or `COUNTING TICKETS...`.

success:
- gold star pops from the control center: `transform: scale(0.4) rotate(-15deg)` to `scale(1) rotate(0)`, `duration: 260ms`.
- success copy: `Ticket Claimed`, `Prize Won`, `Welcome to the Show`, `Gate Open`.
- selected ticket may receive an `ADMIT ONE` stamp in red.

error:
- sign wobble: `rotate(-2deg) -> rotate(2deg) -> rotate(-1deg) -> rotate(0)` over `320ms`.
- error color is tent red on cream, never neon danger red.
- copy: `Ticket Not Valid`, `Attraction Closed`, `That Trick Failed`.

keyframes:
```css
@keyframes bulbChase { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
@keyframes signWobble { 0% { transform: rotate(0); } 35% { transform: rotate(-2deg); } 70% { transform: rotate(2deg); } 100% { transform: rotate(0); } }
@keyframes starPop { from { transform: scale(0.4) rotate(-15deg); opacity: 0; } to { transform: scale(1) rotate(0); opacity: 1; } }
```

**atmosphere**

The environment is an evening fairground. Backgrounds should feel like a warm midway under string lights, not a flat party theme.

backgrounds:
- body: `background: radial-gradient(ellipse at 50% 0%, rgba(255,228,168,0.08), transparent 52%), var(--night-dark);`
- canvas areas use red/cream stripes.
- ticket surfaces use subtle aged paper: `linear-gradient(135deg, rgba(255,255,255,0.22), transparent 45%), var(--ticket-aged);`
- wood surfaces get faint plank lines: `repeating-linear-gradient(90deg, rgba(62,38,24,0.16) 0 1px, transparent 1px 18px)`.

textures:
- sawdust grain: very subtle speckle or warm beige stipple at 3-5% opacity.
- painted sign imperfections can be simulated with small offset shadows, slightly uneven decorative borders, and inset paper warmth.
- do not use CSS blur or frosted glass for atmosphere.

overlays:
- string-light glow can live at the page top or around headers using small gold dots.
- stars and ticket serials may decorate dark gutters.
- decorative elements should stay behind or beside content; they cannot reduce legibility.

images:
- use warm contrast and slightly aged treatment: `filter: sepia(0.12) saturate(1.08) contrast(1.04);`
- frame images like attraction posters or booth signs with dark outlines and gold corners.

**editorial voice**

tone: showman, inviting, practical, and a little theatrical. The copy calls people toward the booth without becoming childish or internet-cute.

button labels:
- `Step Right Up`
- `Get Your Ticket`
- `Enter the Tent`
- `Claim Prize`
- `Ring the Bell`
- `Try Your Luck`
- `Open Booth`
- `Join the Line`
- `See the Show`

headings:
- `The Main Event`
- `Tonight's Lineup`
- `Prize Gallery`
- `Midway Map`
- `Hall of Wonders`
- `The Big Show`
- `Ticket Booth`
- `Carousel Schedule`
- `Games of Skill`

metadata:
- `Ticket #0044`
- `Gate B`
- `Admit One`
- `Showtime 8:00 PM`
- `Price: 3 Tokens`
- `Booth 12`
- `Est. 1923`
- `Prize Tier: Gold`

placeholders:
- `Search attractions...`
- `Name on the ticket...`
- `Choose a booth...`
- `How many tokens?`
- `Find a showtime...`

empty states:
- `The show has not started yet.`
- `No tickets claimed.`
- `The midway awaits.`
- `No prizes on the shelf.`
- `This booth is closed tonight.`

errors:
- `Ticket not valid.`
- `Attraction closed.`
- `That trick failed.`
- `No tokens left.`
- `Gate not open yet.`

success:
- `Ticket claimed.`
- `Prize won.`
- `Welcome to the show.`
- `Gate open.`
- `You are on the list.`

**cursor & selection**

cursor: `default` for reading, `pointer` for signs/tickets/buttons, `grab` and `grabbing` for draggable ticket cards or attraction tiles.

selection: `::selection { background: var(--gold-trim); color: var(--night-dark); }`

**when to reach for this genome**

Use `carnival_midway.show` for event sites, playful dashboards, onboarding flows, game menus, entertainment products, local fair/festival pages, prize or loyalty programs, ticketing surfaces, kids/family attractions, creative portfolios that want theatrical warmth, and interfaces that can benefit from physical signage, tickets, and show-booth metaphors.

It is strongest when prompts mention carnival, circus, fairground, tickets, prizes, games, booths, vintage posters, marquee lights, festivals, fairs, attractions, or showtime scheduling.

Avoid it for serious medical, legal, finance, enterprise security, calm wellness, minimalist editorial, or high-density technical monitoring products. The genome creates spectacle; it should not be used where spectacle undermines trust.

**anti-patterns - this genome NEVER:**

1. uses thin minimalist display typography. headlines are painted sign letters, slab-serif showcards, or restrained script accents.
2. uses 0px radius as the dominant shape language. signs and tickets have softened physical corners, usually 6-10px.
3. uses cold blue-gray SaaS palettes, monochrome themes, or sterile neutrals as the primary mood. the midway is warm red, cream, wood, ink, and gold.
4. uses frosted glass, translucent blur, glossy app gradients, or mobile-app pill components. surfaces are canvas, wood, ticket paper, and painted boards.
5. uses 1px hairlines for primary containment. booth signs and tickets need thick painted outlines and hard shadows.
6. lets stripes, stars, bulbs, or paper texture compete with text. spectacle frames the content; it never obscures the sign.
7. uses overly cute emoji language or internet slang. the voice is theatrical and warm, but still crafted like a show poster.
8. uses flat shadowless cards. every major component should feel like it has physical thickness, a hard shadow, or a printed edge.
9. turns every element into a different gimmick. the system has a few repeatable artifacts: marquee, ticket stub, booth sign, tent stripe, price board, ribbon.
10. uses smooth corporate animations, spring physics, or glassy microinteractions. motion belongs to bulbs, signs, tickets, stars, and gate mechanics.
11. uses low-contrast color pairings because they look vintage. carnival signs must be legible from across the midway.
12. forgets utility metadata. ticket numbers, gate labels, prices, booth IDs, times, and prize tiers keep the showmanship usable.
