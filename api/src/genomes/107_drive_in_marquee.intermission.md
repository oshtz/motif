---
id: "107"
name: drive_in_marquee.intermission
keywords:
  - drive-in
  - intermission
  - cinema
  - 1950s
  - marquee
  - concession
  - popcorn
  - hot dog
  - soda
  - coming attractions
  - double feature
  - technicolor
  - snack bar
  - countdown
---

### genome 107: `drive_in_marquee.intermission`

> identity: 1950s drive-in cinema intermission reel projected against the night sky. "Let's All Go To The Lobby!" — dancing line-art hot dogs and soda cups, Technicolor concession ads, red-and-yellow striped popcorn boxes, blinking marquee bulbs around COMING ATTRACTIONS title cards, ALL-NIGHT DOUBLE FEATURE letterboard, the cardboard scent of a snack-bar countdown reel from 9 minutes to showtime. Saturated 1950s cinema palette, dancing line-art mascots, marquee-bulb chase animations, and a film-leader countdown spinning at the corner of the screen.

**surface**

colors:
```
--night-sky: #1A1428;                       /* the dark drive-in field behind the screen */
--projection-black: #0A0612;                /* deepest black, inter-frame gap, modal voids */
--screen-cream: #F4E8D0;                    /* projected screen base — warm aged film white */
--screen-cream-bright: #FBF3DC;             /* hot spot of the projector beam */
--popcorn-red: #D6262D;                     /* candy-stripe red — popcorn box, stripes, danger */
--popcorn-red-deep: #A21B22;                /* shadowed red, struck red, pressed states */
--candy-yellow: #FFC93C;                    /* candy-stripe yellow, marquee bulbs unlit core */
--bulb-on: #FFE680;                         /* marquee bulb hot filament, lit state */
--bulb-glow: rgba(255, 230, 128, 0.55);     /* warm tungsten bloom around bulbs */
--bulb-off: #7A6233;                        /* unlit bulb amber-bronze */
--soda-blue: #1F7AB8;                       /* mid-century concession blue — soda cup, COMING soon card stock */
--soda-blue-deep: #134A70;                  /* darker blue shadow, button shadow */
--mint-cream: #B8E6D0;                      /* ice-cream mint, soft pastel callout */
--carnival-pink: #F26FA0;                   /* cotton-candy pink, secondary accent */
--ink-black: #1F1810;                       /* line-art ink, body text on cream — never pure black */
--cardboard-tan: #C8A878;                   /* snack-bar cardboard, concession stand box */
--cardboard-shadow: rgba(60, 35, 12, 0.18); /* warm cardboard texture wash */
--reel-amber: rgba(255, 201, 60, 0.18);     /* warm projection beam diffuse fill */
```

typography:
- display / marquee letterboard: `"Limelight", "Alfa Slab One", "Bungee Inline", serif` at `font-weight: 400-700; text-transform: uppercase; letter-spacing: 0.08-0.14em`. The plastic marquee letters of an intermission card — chunky slab serif with bulb-frame energy. Use `--screen-cream` on `--projection-black` for the marquee, or `--popcorn-red` on `--screen-cream` for the snack-bar board.
- title cards ("COMING ATTRACTIONS"): `"Limelight", "Bungee Inline", serif` at `font-weight: 700; font-size: 36-72px; letter-spacing: 0.12em; text-transform: uppercase; text-align: center`. Center-stacked, slight vertical compression, painted-card energy.
- "Let's All Go To The Lobby!" jingle headings: `"Pacifico", "Lobster", cursive` at `font-weight: 400; font-size: 28-48px; color: var(--popcorn-red)`. The hand-painted concession script, the singing animated cartoon.
- body / snack-bar copy: `"Outfit", "Futura", "Avenir", sans-serif` at `font-weight: 400-600; font-size: 14-16px; line-height: 1.55; color: var(--ink-black)`. Clean mid-century geometric sans — readable as snack-bar menu copy on cream cardboard.
- countdown / showtime numerals: `"Bungee", "Anton", sans-serif` at `font-weight: 700; font-size: 48-96px; font-variant-numeric: tabular-nums; color: var(--screen-cream); text-shadow: 0 0 8px var(--reel-amber)`. The leader-countdown numeral filling the circle, 9 . . 8 . . 7 . .
- price tags / concession data: `"Outfit", sans-serif` at `font-weight: 700; font-size: 13-15px; font-variant-numeric: tabular-nums; letter-spacing: 0.03em` — "10¢", "25¢", "POPCORN — 15¢".
- sizes: marquee display 40-72px, title cards 36-56px, jingle headings 24-32px, body 14-16px, snack-bar meta 11-13px.
- title-case for proper labels; UPPERCASE for marquee letters, title cards, and concession-stand signage. The jingle-script lines are sentence case with friendly punctuation ("Let's all go to the lobby!").

borders:
- marquee bulb border (signature): `radial-gradient(circle, var(--bulb-on) 4px, var(--bulb-off) 4px, transparent 5px); background-size: 18px 18px; background-repeat: repeat-x` rendered along header and title-card frames — actual incandescent bulbs at 18px intervals, with `animation: bulbChase` cycling along the strip. Bulbs are ALWAYS rounded — never square dots.
- candy-stripe border: `background: repeating-linear-gradient(45deg, var(--popcorn-red) 0 12px, var(--candy-yellow) 12px 24px)` — the popcorn-box stripe pattern, used on snack-bar panels and CTA borders at 6-8px thickness.
- title-card frames: `8px solid var(--projection-black); outline: 2px solid var(--candy-yellow); outline-offset: 4px; border-radius: 4px` — the painted-card frame with a thin gold rule outside it.
- concession-stand cards: `3px solid var(--popcorn-red); border-radius: 6px` — small radius, painted-cardboard edge.
- snack-bar dividers: `4px dashed var(--cardboard-tan)` — the dashed coupon-cut line.
- screen-content panels: `border-radius: 8px` (gently rounded like film-print corners), `2px solid var(--screen-cream)` on dark, or `2px solid var(--popcorn-red)` on cream.

spacing:
- `padding: 1.5rem 2rem; gap: 18-22px`. The intermission card is composed — generous like a painted poster, not cramped like an arcade screen.
- marquee header components: `padding: 28px 36px` — the bulb border needs breathing room before the letterboard begins.
- title cards: `padding: 2.5rem 3rem` — centered headlines with white space around the painted slab letters.
- snack-bar concession rows: `padding: 12px 18px; gap: 14px` — tight grocery-list rhythm.
- sections separated by `32-44px` vertical gap — like reels stacked on the projector cabinet.

**color distribution**
- 35% night-sky / projection-black (`--night-sky`, `--projection-black`) — the outdoor darkness behind the screen, the inter-frame void, the modal backdrops.
- 30% screen-cream (`--screen-cream`, `--screen-cream-bright`) — the projected screen surface, the title-card stock, body content surfaces. The lit projection beam — warmly aged, never cold-white.
- 14% popcorn red (`--popcorn-red`, `--popcorn-red-deep`) — candy stripes, primary CTAs, danger, the concession stand's loudest color.
- 12% candy yellow + bulb-on (`--candy-yellow`, `--bulb-on`, `--bulb-glow`) — marquee bulbs, candy stripes, warm highlights, hover glow. The incandescent core of the intermission card.
- 5% soda blue (`--soda-blue`, `--soda-blue-deep`) — secondary CTAs, calm callouts, the COMING SOON title-card stock, link color.
- 2% mint cream + carnival pink (`--mint-cream`, `--carnival-pink`) — tertiary pastel accents on dancing-mascot illustrations and badge variants.
- 2% cardboard tan (`--cardboard-tan`) — concession-stand box texture, snack-bar surfaces.

popcorn red and candy yellow alternate as the dominant interactive pair (the candy-stripe pair). Bulb yellow handles all glow. Soda blue is the calmer counterpart for non-urgent secondary actions. Mint and pink appear ONLY on illustrated mascots and pastel variants — never as button fills.

**component patterns**

buttons: primary — `background: var(--popcorn-red); color: var(--screen-cream); border: 3px solid var(--projection-black); border-radius: 6px; padding: 12px 28px; font-family: "Limelight", serif; font-weight: 700; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.08em; box-shadow: 4px 4px 0 var(--popcorn-red-deep), 0 0 12px var(--bulb-glow)`. The painted snack-bar button — hard inked outline, offset shadow like a cardboard tag, warm bulb-glow halo. Secondary: `background: var(--soda-blue); color: var(--screen-cream); border: 3px solid var(--projection-black); border-radius: 6px; box-shadow: 4px 4px 0 var(--soda-blue-deep)`. Ghost/tertiary: `background: transparent; color: var(--popcorn-red); border: 2px dashed var(--popcorn-red); border-radius: 6px; padding: 10px 22px` — the coupon-cut tertiary. Danger: `background: var(--popcorn-red-deep); color: var(--candy-yellow); border: 3px solid var(--projection-black)`.

inputs: `background: var(--screen-cream); border: 3px solid var(--projection-black); border-radius: 6px; color: var(--ink-black); padding: 12px 16px; font-family: "Outfit", sans-serif; font-size: 15px; box-shadow: 3px 3px 0 var(--cardboard-shadow)`. Focus: `border-color: var(--popcorn-red); box-shadow: 3px 3px 0 var(--popcorn-red-deep), 0 0 14px var(--bulb-glow)`. Placeholder: `color: rgba(31, 24, 16, 0.4); font-style: italic`. Caret: `caret-color: var(--popcorn-red)`. Label above input in Limelight uppercase `color: var(--popcorn-red); letter-spacing: 0.1em; font-size: 0.7rem`.

cards / title cards: the signature component — `background: var(--screen-cream); border: 8px solid var(--projection-black); outline: 2px solid var(--candy-yellow); outline-offset: 4px; border-radius: 4px; padding: 2.5rem 3rem; text-align: center`. The painted intermission title card with a hand-inked outer frame and a thin gold rule. Featured cards add a marquee-bulb border around the outside. Concession content cards: `background: var(--cardboard-tan); border: 3px solid var(--popcorn-red); border-radius: 6px; padding: 1.25rem 1.5rem; box-shadow: 4px 4px 0 rgba(0,0,0,0.25)`. Subtle inner candy-stripe accent strip across top: 6px tall `repeating-linear-gradient(45deg, var(--popcorn-red) 0 8px, var(--candy-yellow) 8px 16px)`.

**dancing concession mascot** (signature element): line-art container — `width: 80-140px; aspect-ratio: 1; display: inline-flex; align-items: center; justify-content: center; color: var(--ink-black); stroke: var(--ink-black); stroke-width: 2.5px; fill: var(--screen-cream); animation: mascotBounce 0.6s ease-in-out infinite alternate`. Three canonical mascots: Hot Dog (rendered as inline SVG line-art with mustard-yellow squiggle fill), Soda Cup (cream with `--soda-blue` straw and red-stripe paper sleeve), Popcorn Box (red-and-yellow vertical stripes with cream kernels overflowing). Each mascot is rendered in clean 1950s ink-style outlines, dancing in place. Used as section-header decorations, empty-state characters, and floating callout illustrations.

**marquee letterboard** (signature element): `background: var(--projection-black); border: 6px solid var(--projection-black); padding: 12px 20px; position: relative; font-family: "Limelight", serif; font-size: 32-48px; color: var(--screen-cream); text-transform: uppercase; letter-spacing: 0.1em`. Wrapped in a bulb-chase border (see borders above), each character has a faint `text-shadow: 0 0 6px var(--bulb-glow)` as if backlit. Used for hero titles and primary navigation labels — "TONIGHT", "NOW SHOWING", "ALL-NIGHT DOUBLE FEATURE".

**intermission countdown clock** (signature element): circular SVG container — `width: 120px; height: 120px; border-radius: 50%; background: var(--screen-cream-bright); border: 6px solid var(--projection-black); display: flex; align-items: center; justify-content: center; font-family: "Bungee", sans-serif; font-size: 72px; font-weight: 700; color: var(--ink-black); position: relative`. Inside: a rotating crosshair line (`::before` element rotating 360deg over the second) and the leader-countdown numeral (9, 8, 7…). Used as the loading state and the showtime announcement. Numerals tick over with a hard 1s `step-end` swap.

navigation: `background: var(--projection-black); border-bottom: 4px solid var(--popcorn-red); padding: 1rem 2rem; position: relative`. Nav items in Limelight uppercase, `color: var(--screen-cream)`, `letter-spacing: 0.08em`. Active item: `color: var(--candy-yellow); text-shadow: 0 0 10px var(--bulb-glow); border-bottom: 4px solid var(--candy-yellow)`. Hover: bulb-glow fades in around the link. The nav bar sits beneath a thin candy-stripe ribbon (6px tall, `repeating-linear-gradient(45deg, var(--popcorn-red) 0 10px, var(--candy-yellow) 10px 20px)`) at the top edge — the intermission card's pinned ribbon.

headers / marquee panel: `background: var(--projection-black); padding: 2.5rem 3rem; border-radius: 8px; position: relative`. Title in Limelight at 48-72px: `color: var(--screen-cream); text-shadow: 0 0 14px var(--bulb-glow), 0 0 30px var(--bulb-glow)`. Marquee bulb-chase border around the container (radial-gradient bulb pattern). A small candy-stripe banner sits above the title reading "TONIGHT ONLY" or "COMING ATTRACTIONS" in popcorn-red on cream.

footers: `background: var(--projection-black); border-top: 6px solid var(--popcorn-red); color: var(--screen-cream); padding: 1.5rem 2rem; text-align: center`. Footer links in Limelight uppercase, candy-yellow on hover. A row of small dancing mascots (hot dog, soda, popcorn) stand across the footer at 32px tall in `opacity: 0.6`. A centered hand-script jingle line in Pacifico: *"Let's all go to the lobby!"* in `--carnival-pink`.

lists: each item on cream background, separated by `2px dashed var(--cardboard-tan)`. Active / hovered item: `border-left: 4px solid var(--popcorn-red); padding-left: 16px; background: rgba(214,38,45,0.06); box-shadow: -4px 0 0 var(--candy-yellow)`. List text in Outfit. Concession prices in tabular numerals, right-aligned, `color: var(--popcorn-red); font-weight: 700`. Bullet prefix: a small candy-stripe square (8x8px) or a tiny mascot glyph.

tables: `border: 4px solid var(--projection-black); border-radius: 6px; overflow: hidden; background: var(--screen-cream)`. Header row: `background: var(--popcorn-red); color: var(--screen-cream); font-family: "Limelight", serif; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.78rem; padding: 12px 18px`. Body cells: `background: var(--screen-cream); color: var(--ink-black); border-bottom: 2px dashed var(--cardboard-tan); padding: 10px 18px; font-family: "Outfit", sans-serif`. Alternating rows: `background: rgba(255,201,60,0.06)` — faint yellow wash. Numeric columns right-aligned with tabular-nums, in `--popcorn-red`. Like a snack-bar price board.

dividers: `4px dashed var(--cardboard-tan)` for content separation — the coupon-cut line. Decorative variant: a centered row of dancing mascots ` 🌭 🥤 🍿 ` (or SVG equivalents) in `opacity: 0.6`, flanked by candy-stripe rules. Marquee-style variant: a single line of small bulb dots (`background-image: radial-gradient(circle, var(--bulb-on) 3px, transparent 3px); background-size: 12px 12px; background-repeat: repeat-x; height: 8px`).

modals: `background: var(--screen-cream); border: 8px solid var(--projection-black); outline: 2px solid var(--candy-yellow); outline-offset: 4px; border-radius: 6px; padding: 2.5rem 3rem; box-shadow: 0 20px 60px rgba(0,0,0,0.7), 0 0 40px var(--reel-amber)`. Title in Limelight uppercase centered, `color: var(--popcorn-red)`. Inner backdrop: `background: rgba(10,6,18,0.85)`. Optional bulb-chase border around the outer frame. Feels like a "COMING ATTRACTIONS" title card pulled forward on the projection screen.

badges: `background: var(--popcorn-red); color: var(--candy-yellow); border: 2px solid var(--projection-black); border-radius: 4px; font-family: "Limelight", serif; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; padding: 4px 10px; box-shadow: 2px 2px 0 var(--popcorn-red-deep)`. Yellow variant: `background: var(--candy-yellow); color: var(--popcorn-red); box-shadow: 2px 2px 0 var(--bulb-off)`. Blue variant: `background: var(--soda-blue); color: var(--screen-cream)`. "NEW!" and "TONIGHT ONLY!" treatments wear the hand-painted starburst SVG behind them.

**candy-stripe ribbon** (signature element): horizontal strip used as section separator and atmospheric trim — `height: 10px; background: repeating-linear-gradient(45deg, var(--popcorn-red) 0 14px, var(--candy-yellow) 14px 28px); border-top: 2px solid var(--projection-black); border-bottom: 2px solid var(--projection-black)`. Used to flank title cards, frame the top of nav, and divide major sections.

**interaction language**

hover: bulb glow blooms — `box-shadow` warms with `var(--bulb-glow)`, border thickens, the candy stripe shifts +4px diagonally (the stripes appear to move). `transition: all 0.2s ease`. Buttons gain a brighter offset shadow and a faint bulb halo. Cards lift `transform: translateY(-2px)` and gain `box-shadow: 6px 6px 0 var(--popcorn-red-deep), 0 0 20px var(--bulb-glow)`.

active / pressed: the cardboard tag presses in — `transform: translate(2px, 2px); box-shadow: 2px 2px 0 var(--popcorn-red-deep); transition: transform 0.08s ease`. The hard mechanical thunk of a button on a metal kiosk.

focus: `outline: 3px solid var(--candy-yellow); outline-offset: 3px; box-shadow: 0 0 14px var(--bulb-glow)`. The marquee bulb lights up around the focused element.

selected: `border-color: var(--popcorn-red); background: rgba(255,201,60,0.18); box-shadow: 4px 4px 0 var(--popcorn-red-deep), inset 0 0 0 2px var(--candy-yellow)`. A bright candy outline marks the chosen showing.

disabled: `opacity: 0.4; filter: saturate(0.3); pointer-events: none`. The lobby is closed — the bulbs are dark.

drag: `transform: scale(1.04) rotate(-1.5deg); box-shadow: 8px 12px 0 var(--popcorn-red-deep), 0 0 24px var(--bulb-glow); cursor: grabbing; z-index: 100`. Like peeling a coupon off the bulletin board.

**motion & feedback**

transitions: `transition: all 0.2s ease` as baseline. Bulb glow and box-shadow animate. Candy stripes shift on hover.

marquee bulb chase (signature): each bulb in a bulb-border cycles brightness in sequence:
```css
@keyframes bulbChase {
  0%, 100% { background: radial-gradient(circle, var(--bulb-on) 4px, var(--bulb-off) 4px, transparent 5px); filter: drop-shadow(0 0 6px var(--bulb-glow)); }
  50%      { background: radial-gradient(circle, var(--bulb-off) 4px, var(--bulb-off) 4px, transparent 5px); filter: none; }
}
/* bulb strip: animation: bulbChase 1.2s linear infinite; with staggered background-position to create chasing effect */
```

candy-stripe scroll: stripe patterns translate diagonally:
```css
@keyframes stripeScroll {
  0%   { background-position: 0 0; }
  100% { background-position: 56px 0; }
}
/* duration: 1.5s linear infinite on candy-stripe-ribbon elements */
```

mascot bounce: dancing concession mascots animate continuously:
```css
@keyframes mascotBounce {
  0%   { transform: translateY(0) rotate(-2deg); }
  100% { transform: translateY(-6px) rotate(2deg); }
}
/* duration: 0.6s ease-in-out infinite alternate. Stagger multiple mascots by 0.2s. */
```

leader countdown: numerals tick over hard:
```css
@keyframes countdownTick {
  0%, 100% { transform: scale(1); }
  10%      { transform: scale(1.08); }
}
/* duration: 1s step-end infinite. The rotating crosshair inside the countdown clock rotates 360deg over 1s linear. */
```

loading: the intermission countdown clock appears, ticking 9 → 1 over 9s with the rotating crosshair. Or three dancing mascots (hot dog, soda, popcorn) appear in sequence and bounce together. Never a generic spinner.

success ("Now Showing!"): the screen flashes `--candy-yellow` for 200ms, then `--bulb-on` bulb-chase runs around the affected card with intensified glow. Message in Limelight: "NOW SHOWING!" appears with a small starburst SVG behind it.

error ("Concession closed"): the affected element gains `border-color: var(--popcorn-red-deep)`, the candy stripes briefly invert (yellow becomes red, red becomes black), and a small "OUT OF STOCK" stamp SVG rotates in at -8deg. No screen-shake — the mascots stop dancing and look sad for a moment.

page enter: elements enter from `opacity: 0; transform: translateY(12px)` with staggered 80ms delays, `transition: 0.35s ease-out`. Marquee headings play a bulb warm-up: bulbs light from left to right over 0.5s before settling into the chase loop.

**atmosphere**

background: `var(--night-sky)` solid dark with a warm radial bloom from above: `radial-gradient(ellipse at 50% 0%, var(--reel-amber) 0%, transparent 60%)` — the projection beam shining down from the projector booth. Plus a fine cardboard-tan noise overlay at 4% opacity for snack-bar texture.

projection beam: key headers and modal containers cast a diffuse warm glow — `box-shadow: 0 0 60px var(--reel-amber), 0 0 100px rgba(255,201,60,0.08)` — as if light from the projector is bleeding through the title card.

candy-stripe trim: ribbons of red-and-yellow diagonal stripes accent the top of pages, the bottom of nav, and the borders of featured cards. These stripes gently scroll on hover.

cardboard texture: concession-stand panels and snack-bar cards carry a subtle noise texture at 5% opacity in `--cardboard-shadow` tone — the warm pulp of a popcorn box.

film grain: optional 2% opacity noise overlay on dark backgrounds — the visible grain of a projected film print.

dancing mascot watermarks: large low-opacity SVG mascots (hot dog, soda cup, popcorn box) positioned absolutely in section backgrounds at `opacity: 0.08`, slowly bouncing with `mascotBounce`. They drift between sections as silent companions.

images: `filter: contrast(1.12) saturate(1.25) brightness(0.92)` — punchy mid-century Technicolor saturation, slightly darkened to feel projected. Optional `sepia(0.08)` for an aged-print warmth.

the ambient feel: 1955, you're parked at the drive-in, the second feature is about to start, the speaker on your window crackles, the screen brightens with the cardboard-painted countdown card and a dancing hot dog inviting you to the lobby for a Coca-Cola and a fresh-popped box of popcorn. The bulbs around the marquee chase in a slow circle. The air smells like butter and exhaust.

**editorial voice**

button labels: snack-bar enthusiasm, intermission emcee energy. `Buy Tickets`, `Get Popcorn`, `Visit the Lobby`, `Start the Show`, `Reserve a Spot`, `Add to Order`, `See the Trailer`, `Tonight's Feature`, `Skip Intermission`, `Reel It Back`. Title case. Cheerful imperatives.

headings: marquee announcements and title cards. `Coming Attractions`, `Tonight's Double Feature`, `Now Showing`, `The Main Feature`, `Intermission`, `The Snack Bar`, `Let's All Go To The Lobby`, `Pre-Show`, `Reel One`, `Refreshments`, `Showtime`, `Be Back In 10 Minutes`. Title case for jingle lines, UPPERCASE for marquee letterboard items.

metadata: drive-in ticket-stub style. `Showtime: 8:45 PM`, `Reel 2 of 4`, `Stall #14`, `Ticket #0188`, `Feature Runtime: 1h 42m`, `Rated G`, `Concession #007`, `Tray: $2.50`. Numeric, theatrical, with a slight nostalgia for monetary punctuation (¢ where appropriate — "15¢", "25¢").

placeholders: `What are you craving from the lobby?`, `Search tonight's features...`, `Your seat row...`, `How many in your car?`.

empty states: `The screen is dark. Showtime is at 8:45.`, `The lobby is quiet for now.`, `No features yet — check back tonight.`, `The reels are still on their spools.`. A dancing mascot appears beside the message.

error messages: `Reel broke — give us a minute.`, `That feature's already started.`, `Snack bar's out of that one.`, `Projection trouble — please hold.`. Light, apologetic, never panicked. The usher's voice on the speaker.

success messages: `You're in! Enjoy the show.`, `Order's in — meet us at the lobby.`, `Reserved.`, `Popcorn coming right up.`, `Tickets printed.`.

**cursor & selection**

cursor: `default` globally. `pointer` on all interactive elements — buttons, nav, mascots, ticket cards. `grab` / `grabbing` on draggable items. Text inputs use `cursor: text` with `caret-color: var(--popcorn-red)`.

text selection: `::selection { background: var(--candy-yellow); color: var(--popcorn-red); }` — bulb-yellow highlight, hot popcorn-red text. Like a hand-stamped ticket.

**when to reach for this genome**

Use this genome when the request calls for a drive-in cinema, outdoor movie night, intermission reel, concession stand, popcorn/snack-bar menu, double-feature schedule, coming-attractions page, ticket-stub flow, pre-show countdown, retro family entertainment, or any product that should feel like a 1950s projected title card under marquee bulbs.

Reach for it when the user wants Technicolor red/yellow/blue, dancing concession mascots, popcorn stripes, marquee bulb chase, title-card frames, film-leader countdowns, warm projection beams, snack-bar copy, and cheerful mid-century showtime language. It is strongest when the interface can behave like an intermission card: showtimes, tickets, trailers, snack orders, countdowns, features, lobby calls, and family-friendly outdoor-cinema announcements.

Choose it for:
- movie-night landing pages, drive-in theater schedules, outdoor screening events, cinema concessions, ticketing, trailer queues, and showtime countdowns.
- retro event pages where the specific reference is 1950s outdoor cinema, snack-bar cards, projector light, and wholesome intermission reels.
- food, beverage, and entertainment surfaces where popcorn boxes, soda cups, hot dogs, marquee bulbs, and painted cardboard signs are useful metaphors.
- playful booking or ordering flows where `Visit the Lobby`, `Get Popcorn`, `Start the Show`, `Tonight's Feature`, and `Coming Attractions` fit naturally.

Do not choose it for casino/Vegas themes, arcade cabinets, 1980s video-store rental nostalgia, diner interiors, serious film criticism, luxury cultural institutions, general restaurant menus, or modern streaming dashboards. Use `casino_floor.aces` for gold-on-black gambling and table-game mechanics, `pinball_backglass.tilt` for arcade scoring, `videostore_rental.vhs` for VHS rental shelves, `neon_diner.route` for diner booths and roadside chrome, and `gallery_foyer.institution` for museum/cinema institution authority.

**anti-patterns — this genome NEVER:**

1. uses sharp `border-radius: 0px` on cards, buttons, or modals. Title cards and concession panels are gently rounded (4-8px) — like the corners of a 35mm film frame or a painted cardboard sign. Only the candy-stripe ribbon and the marquee letterboard interior use straight edges.
2. uses cold or clinical colors. The palette is saturated 1950s Technicolor — popcorn red, candy yellow, bulb amber, soda blue. No slate, no charcoal, no cool gray. Even the night sky is `--night-sky` (#1A1428), a warm violet-tinged dark.
3. uses a 1980s arcade aesthetic — pixel fonts, CRT scanlines, neon glow on black, "INSERT COIN" prompts. This is 1950s outdoor cinema, not coin-op arcade. No scanlines, no pixel fonts, no Press Start 2P. (Contrast `attract_mode.cab`.)
4. uses interior-diner styling — neon tube glow, chrome trim, vinyl booth red, jukebox tiles. The drive-in is OUTDOORS — projection beam, painted cardboard, marquee bulbs, night-sky violet behind the screen. (Contrast `neon_diner.route`.)
5. uses Vegas-casino opulence — gold-on-felt, Playfair Display marquee, chip motifs, smoke-haze atmosphere. The drive-in marquee uses Limelight slab and red-yellow candy stripes, NOT Playfair gold. The aesthetic is wholesome, family-friendly, painted-sign — not luxury, smoky, or adult. (Contrast `casino_floor.aces` — both have marquee bulb borders, but this genome's bulb chase is faster, warmer, and embedded in red-yellow striped trim, not gold-on-black serif.)
6. uses generic shadow lifts or design-system micro-interactions (smooth scale-and-shine). The interaction language is hand-printed cardboard: offset solid shadows (`4px 4px 0`), hard-stepped countdowns, bouncing mascots, candy-stripe scroll. Physics are mechanical and theatrical.
7. uses small or restrained typography on display elements. Marquee letterboard letters are LOUD — 32-72px slab serif with bulb-bloom text-shadow. Title cards announce themselves. The cinema is shouting "COMING ATTRACTIONS" across the parking lot.
8. uses muted pastels as primary fills. Mint cream and carnival pink exist only as illustrated-mascot accents and pastel variants — never as button backgrounds, never as card fills. The primary interactive palette is saturated red, yellow, and blue.
9. uses serif headings beyond the Limelight slab family. No Playfair, no Garamond, no Cormorant. The cinema marquee is plastic slab letters or hand-painted script (Pacifico/Lobster) — nothing engraved, nothing classical.
10. uses cynical, ironic, or "cool" editorial voice. The intermission card is unironically cheerful, family-friendly, mid-century Americana. "Let's all go to the lobby!" with no air quotes. The mascots are dancing, the popcorn is fresh, the show is about to start. No darkness, no snark, no postmodern wink.
