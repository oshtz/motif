---
id: "41"
name: neon_diner.route
keywords:
  - diner
  - neon
  - retro
  - americana
  - route 66
  - chrome
  - jukebox
  - 1950s
  - signage
  - roadside
  - vinyl
  - warm glow
---

### genome 41: `neon_diner.route`

> identity: 1950s American roadside diner. hot neon tube glow (pink, blue, amber) on near-black exterior walls. chrome trim, vinyl booth textures, jukebox selector UI. handpainted signage fonts. the warm buzz of a neon "OPEN" sign at midnight on Route 66.

**surface**

colors:
```
--exterior: #121016;
--neon-pink: #FF2D7B;
--neon-blue: #00B4FF;
--neon-amber: #FFB627;
--chrome: #C8C8D0;
--cream-board: #F5F0E0;
--vinyl-red: #8B1A2B;
--counter-dark: #1E1A24;
--glow-pink: rgba(255, 45, 123, 0.4);
--glow-blue: rgba(0, 180, 255, 0.35);
--glow-amber: rgba(255, 182, 39, 0.4);
```

typography:
- display/signage: `"Righteous", "Pacifico", cursive` for neon script headings. `"Oswald", sans-serif` at `font-weight: 700; text-transform: uppercase` for block signage and section headers.
- body: `"Outfit", sans-serif` at `font-weight: 400-500`. `font-size: 14-16px`. `line-height: 1.5`.
- menu items / data: `"IBM Plex Mono", "Courier New", monospace` at `font-size: 13-14px` for prices, item lists, tabular data.
- sizes: display 36-56px, headers 20-28px, body 14-16px, meta/badges 11-12px.
- `letter-spacing: 0.04em` on uppercase Oswald headings. `-0.01em` on body text.

borders:
- primary: `2px solid var(--chrome)`. `border-radius: 10px`.
- chrome accent: `border: 2px solid transparent; background-clip: padding-box; outline: 2px solid var(--chrome)` or double-border technique with inner `box-shadow: inset 0 0 0 1px var(--chrome)`.
- neon elements: border replaced by glow — `box-shadow: 0 0 8px var(--glow-pink), 0 0 20px var(--glow-pink)`.
- internal dividers: `1px solid rgba(200, 200, 208, 0.2)`.
- minimum radius: 8px. typical: 10-12px. no sharp 0px corners anywhere.

spacing:
- `padding: 1.5rem 2rem; gap: 20px`. comfortable menu-board proportions.
- sections are clearly delineated — like menu categories on a diner board.
- not cramped, not sparse. generous padding inside cards and panels.

**color distribution**
- 50% dark exterior (`--exterior`, `--counter-dark`) — the near-black walls and surfaces of a diner at night.
- 15% cream (`--cream-board`) — menu boards, content areas, card surfaces. the lit interior warmth.
- 12% neon pink (`--neon-pink`) — primary CTA, active states, key highlights. the dominant neon tube.
- 10% neon amber (`--neon-amber`) — secondary accents, warnings, warm indicators. the "OPEN" sign glow.
- 8% neon blue (`--neon-blue`) — tertiary accents, links, informational highlights. the cool counterpoint.
- 5% chrome (`--chrome`) — borders, dividers, structural trim. the reflective metal frame.

**component patterns**

buttons: `background: var(--neon-pink); color: var(--cream-board); border: none; border-radius: 10px; padding: 12px 24px; font-family: "Oswald", sans-serif; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; box-shadow: 0 0 10px var(--glow-pink), 0 0 25px var(--glow-pink)`. secondary: `background: transparent; color: var(--neon-blue); border: 2px solid var(--neon-blue); box-shadow: 0 0 8px var(--glow-blue)`. ghost/tertiary: `background: transparent; color: var(--chrome); border: 1px solid var(--chrome)`.

inputs: `background: var(--counter-dark); border: 2px solid var(--chrome); border-radius: 10px; color: var(--cream-board); padding: 12px 16px; font-family: "Outfit", sans-serif`. focus: `border-color: var(--neon-blue); box-shadow: 0 0 8px var(--glow-blue), 0 0 20px var(--glow-blue)`. placeholder: `color: rgba(200, 200, 208, 0.4)`.

cards/panels: `background: var(--counter-dark); border: 2px solid var(--chrome); border-radius: 12px`. chrome trim gradient overlay on top edge: `border-top: 3px solid var(--chrome); background-image: linear-gradient(180deg, rgba(200,200,208,0.06) 0%, transparent 40%)`. inner padding: `1.5rem`.

navigation: horizontal bar with `background: var(--exterior); border-bottom: 2px solid var(--chrome)`. nav items in Oswald uppercase. active item: `color: var(--neon-pink); text-shadow: 0 0 8px var(--glow-pink); border-bottom: 3px solid var(--neon-pink)`. inactive: `color: var(--chrome)`. hover: neon glow fades in.

headers: `background: var(--exterior); padding: 1.5rem 2rem`. logo/title in Righteous or Pacifico at 36-48px with neon glow: `color: var(--neon-pink); text-shadow: 0 0 10px var(--glow-pink), 0 0 30px var(--glow-pink), 0 0 60px var(--glow-pink)`. subtitle in Oswald chrome. chrome bottom border.

footers: `background: var(--exterior); border-top: 2px solid var(--chrome); color: var(--chrome); padding: 1.5rem 2rem`. footer links glow neon amber on hover. small Outfit text. feels like the bottom edge of a diner counter.

lists: rows on dark background separated by `1px solid rgba(200,200,208,0.12)`. active/hovered row gets a left accent bar: `border-left: 3px solid var(--neon-pink); box-shadow: -4px 0 12px var(--glow-pink)`. list text in Outfit. prices or values in monospace, right-aligned.

tables: `border: 2px solid var(--chrome); border-radius: 10px; overflow: hidden`. header row: `background: var(--exterior); color: var(--neon-amber); font-family: "Oswald", sans-serif; text-transform: uppercase; text-shadow: 0 0 4px var(--glow-amber)`. cells: `background: var(--counter-dark); color: var(--cream-board); border-bottom: 1px solid rgba(200,200,208,0.1); padding: 10px 16px`. alternating rows: subtle `rgba(200,200,208,0.03)` tint.

dividers: `1px solid rgba(200,200,208,0.15)`. or decorative: a centered row of small diamond characters in chrome `color: var(--chrome); opacity: 0.3`.

modals: `background: var(--counter-dark); border: 2px solid var(--neon-pink); border-radius: 14px; box-shadow: 0 0 30px var(--glow-pink), 0 0 60px rgba(255,45,123,0.15), 0 20px 60px rgba(0,0,0,0.6)`. header in Oswald with neon glow. backdrop: `background: rgba(18,16,22,0.85)`.

badges: `background: var(--neon-amber); color: var(--exterior); border-radius: 8px; font-family: "Oswald", sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 3px 10px; box-shadow: 0 0 6px var(--glow-amber)`. variant — outline badge: `background: transparent; border: 1px solid var(--neon-blue); color: var(--neon-blue)`.

**jukebox selector** (signature element): a row of selectable option tiles. each tile: `background: var(--counter-dark); border: 2px solid var(--chrome); border-radius: 10px; padding: 16px; cursor: pointer`. selected tile: `border-color: var(--neon-pink); box-shadow: 0 0 12px var(--glow-pink), inset 0 0 20px rgba(255,45,123,0.08)`. label in Oswald, sublabel in Outfit. selection snaps with a quick 0.1s transition.

**interaction language**

hover: neon glow intensifies — `box-shadow` spreads and brightens. `transition: all 0.25s ease`. buttons gain deeper glow. text elements gain `text-shadow` bloom.

active/pressed: glow contracts and brightens sharply — `box-shadow: 0 0 4px var(--glow-pink), 0 0 10px var(--glow-pink)`. slight `transform: scale(0.97)` on buttons.

focus: `outline: 2px solid var(--neon-blue); outline-offset: 3px; box-shadow: 0 0 8px var(--glow-blue)`.

selected: neon border + inner glow. `border-color: var(--neon-pink); box-shadow: 0 0 12px var(--glow-pink), inset 0 0 20px rgba(255,45,123,0.06)`.

disabled: `opacity: 0.3; filter: saturate(0.2)`. neon glow removed entirely. chrome borders dim to `rgba(200,200,208,0.15)`.

drag: element lifts with colored shadow — `box-shadow: 0 12px 30px rgba(255,45,123,0.25), 0 0 12px var(--glow-pink); transform: scale(1.02)`.

**motion & feedback**

transitions: `transition: all 0.25s ease`. smooth, satisfying. glow properties animate fluidly.

neon flicker on load: elements with neon glow play a flicker keyframe on entrance:
```css
@keyframes neonFlicker {
  0% { opacity: 0.4; }
  5% { opacity: 1; }
  8% { opacity: 0.3; }
  12% { opacity: 1; }
  15% { opacity: 0.7; }
  20% { opacity: 1; }
  100% { opacity: 1; }
}
/* applied: animation: neonFlicker 0.6s ease-out forwards; */
```

loading: a neon tube warming up — glow starts dim and narrow, expands to full brightness over 0.8s. or: three dots pulsing in sequence with neon pink glow.

success: element flashes neon amber glow — `box-shadow: 0 0 20px var(--glow-amber), 0 0 40px var(--glow-amber)` — holds 300ms, eases back over 400ms.

error: border flashes `var(--neon-pink)` with intensified glow, pulses twice over 500ms, returns to normal. text turns neon pink briefly.

page enter: elements fade in from `opacity: 0; transform: translateY(8px)` with staggered 50ms delays. neon heading elements play the flicker animation.

**atmosphere**

background: `var(--exterior)` solid dark. the body carries a very subtle radial gradient: `radial-gradient(ellipse at 50% 0%, rgba(255,45,123,0.04) 0%, transparent 60%)` — a faint neon wash from above.

neon glow pools: key headings and CTA elements cast colored light onto their surroundings via large, soft `box-shadow` — `0 0 40px var(--glow-pink)`, `0 0 60px rgba(255,45,123,0.1)`. this creates the effect of neon tubes illuminating a dark wall.

chrome reflections: interactive surfaces carry a subtle `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)` overlay to simulate chrome or glass reflectivity.

vinyl texture: card backgrounds can optionally include a very faint noise texture at 2-3% opacity for a vinyl-booth feel.

images: `filter: contrast(1.1) saturate(1.2) brightness(0.9)` — punchy, slightly darkened, neon-lit mood.

ambient feel: the dark exterior with pools of neon color should evoke standing outside a diner at night — the sign buzzing overhead, colored light spilling onto the sidewalk.

**editorial voice**

button labels: warm, inviting, diner speak. `Order Up`, `Take a Seat`, `Check, Please`, `Grab a Booth`, `Ring the Bell`, `Flip It`, `Add to Tab`, `Serve`. title case.

headings: handpainted sign style, confident and friendly. `Today's Special`, `What'll It Be?`, `The Menu`, `Daily Favorites`, `Counter Service`, `Late Night Bites`, `The Jukebox`. title case, Righteous or Oswald.

metadata: diner ticket style. `#0041`, `Table 7`, `Ticket: 0188`, `Served at 11:42 PM`, `Tab: $14.50`, `Order #12`.

placeholders: `What are you craving?`, `Search the menu...`, `Your name for the order...`, `Leave a note...`.

empty states: `Kitchen's quiet right now.`, `Nothing on the grill yet.`, `No orders up.`, `The counter is clear.`.

error messages: `Whoa, something burned.`, `That didn't go through.`, `Order lost — try again.`, `We're all out of that.`.

success messages: `Order up!`, `You're all set.`, `Added to your tab.`, `Seat saved.`, `Nice pick.`.

**cursor & selection**

cursor: `default` globally. `pointer` on all interactive elements — buttons, links, jukebox tiles, nav items.

text selection: `::selection { background: var(--neon-pink); color: var(--cream-board); }`.

**when to reach for this genome**

Use `neon_diner.route` when the prompt asks for a 1950s diner, roadside restaurant, late-night menu, Route 66 stop, jukebox selector, booth reservation, counter-service ordering flow, chrome-and-vinyl brand, neon `OPEN` sign, or any product that should feel like a warm diner glowing against a dark highway.

Reach for it when the user wants neon pink/blue/amber tubes, dark exterior walls, cream menu boards, chrome trim, vinyl-red booths, jukebox tiles, handpainted signage fonts, soft colored glow, diner ticket metadata, and friendly service language. It is strongest when the interface can borrow diner mechanics: menu categories, specials, tabs, order tickets, booth numbers, counter pickup, jukebox selections, and midnight hospitality.

Choose it for:
- restaurant menus, diner brands, ordering kiosks, retro food trucks, late-night event pages, jukebox/music selectors, roadside motel-adjacent hospitality, and casual booking flows where the diner itself is the visual reference.
- food, service, and entertainment surfaces where `Order Up`, `Grab a Booth`, `Check, Please`, `Add to Tab`, or `Today's Special` fit naturally.
- retro Americana pages that need neon glow, chrome borders, rounded vinyl forms, and warm customer-service copy rather than hard marquee or casino spectacle.
- dark-mode interfaces where colored light should feel like glass neon tubing, not CRT phosphor, LED scoreboards, or vaporwave gradients.

Do not choose it for drive-in cinema intermission cards, Broadway theater marquees, Las Vegas gambling, pinball/arcade scoring, vaporwave mall nostalgia, Art Deco luxury, circus/fairground booths, VHS rental stores, or generic neon cyberpunk. Use `drive_in_marquee.intermission` for outdoor movie nights and concession countdowns, `playbill_marquee.bway` for legitimate theater programs, `casino_floor.aces` for gambling floors, `pinball_backglass.tilt` or `attract_mode.cab` for arcade machines, `vapor_concourse.mall` for pink-cyan mall vaporwave, `deco_metropolitan.gilt` for 1920s gold geometry, `carnival_midway.show` for county-fair signage, and `videostore_rental.vhs` for rental-shelf nostalgia.

**anti-patterns — this genome NEVER:**
1. uses sharp 0px border-radius. minimum is 8px on all elements. this is rounded chrome and smooth vinyl, not angular machinery.
2. uses monochrome or single-color palettes. the identity requires at least two distinct neon hues (pink and blue) plus amber warmth. it is never just amber-on-black.
3. uses monospace as the primary typeface. monospace is only for menu prices and tabular data — display and body text use Righteous/Oswald/Outfit.
4. uses scanline overlays or CRT phosphor effects. this is neon glass tubing, not a cathode ray tube. no scanlines, no electron-gun artifacts, no screen flicker.
5. uses cold, clinical, or procedural language. the voice is always warm, casual, and inviting — diner speak, not system speak. never `ERR:`, `PROCESSING...`, `NOMINAL`, or `AWAITING INPUT`.
6. uses pure white (#FFFFFF) backgrounds or large white surfaces. the exterior is dark; interior warmth comes from cream and neon glow, not white.
7. uses hard offset drop shadows (e.g., `4px 4px 0px black`). all shadows are soft neon glows — diffused, colorful, atmospheric.
8. uses thin hairline (1px) borders as primary containment. structural borders are 2px minimum with chrome weight. hairlines are only for internal dividers.
9. uses text-transform: lowercase on headings or labels. headings are title case or uppercase — this is painted signage, not a terminal prompt.
10. uses instantaneous state changes without transition. neon warms up, glows intensify, selections snap with at least 0.1s easing. nothing appears or disappears without a glow transition.
