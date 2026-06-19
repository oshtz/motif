---
id: "100"
name: casino_floor.aces
keywords:
  - casino
  - vegas
  - gambling
  - poker
  - cards
  - roulette
  - jackpot
  - chips
  - felt
  - neon
  - marquee
  - slots
  - blackjack
  - aces
---

### genome 100: `casino_floor.aces`

> identity: 1970s Las Vegas casino floor. Green felt tables, gold chip stacks, playing-card suit motifs (♠ ♥ ♦ ♣), marquee light-bulb borders, neon signage reflected in polished marble, the sensory overload of Caesars Palace circa 1975. Not the clean digital sportsbook — the physical casino floor: dealer trays, roulette wheels, craps tables, cocktail waitresses, and Wayne Newton on the marquee. The carpet is hideous. The lighting is golden. Everyone is smoking.

**surface**

colors:
```
--felt-green: #1B6B40;                      /* card table felt — the dominant work surface */
--felt-dark: #144F30;                       /* deeper felt, table shadow, inset panels */
--gold: #D4A836;                            /* chip gold, marquee gold, primary accent */
--gold-bright: #F0C84A;                     /* hot gold highlight, hover states, active chips */
--gold-glow: rgba(212, 168, 54, 0.4);       /* warm gold bloom for box-shadow */
--gold-dim: rgba(212, 168, 54, 0.18);       /* faint gold wash, dividers, borders */
--casino-black: #0E0C10;                    /* deep casino interior darkness — the room itself */
--casino-dark: #161219;                     /* raised surface above the void */
--card-red: #CC1133;                        /* hearts/diamonds red, hot accent, danger */
--card-red-glow: rgba(204, 17, 51, 0.35);   /* red neon bloom */
--card-white: #F5F0E8;                      /* playing card face white, primary text */
--marquee-pink: #FF3388;                    /* neon marquee pink, secondary neon accent */
--marquee-glow: rgba(255, 51, 136, 0.35);   /* pink neon bloom */
--royal-purple: #4A1A6B;                    /* VIP/high-roller purple, premium surface */
--royal-purple-dim: rgba(74, 26, 107, 0.4); /* purple wash for premium elements */
--chrome: #C0C0CC;                          /* slot machine chrome, trim, dividers */
--chrome-dim: rgba(192, 192, 204, 0.2);     /* faint chrome borders, structural lines */
--marble: #E8E4DC;                          /* polished marble floor, neutral light surface */
--smoke: rgba(240, 230, 210, 0.06);         /* the ambient haze — very faint warm overlay */
```

typography:
- display/marquee headings: `"Playfair Display", "Georgia", serif` at `font-weight: 700-900; text-transform: uppercase; letter-spacing: 0.08-0.14em`. The casino marquee — bold extended serif, the kind that announces Wayne Newton in 96pt letters. Use gold on dark.
- sub-headings / table labels: `"Playfair Display", serif` at `font-weight: 700; font-size: 18-24px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--gold)`.
- body / pit boss voice: `"Inter", "Helvetica Neue", sans-serif` at `font-weight: 400-500; font-size: 14-16px; line-height: 1.55; color: var(--card-white)`. Clean geometric sans for readable floor copy.
- chip values / odds / counters: `"Inter", sans-serif` at `font-weight: 700; font-size: 13-15px; font-variant-numeric: tabular-nums; letter-spacing: 0.03em`. Numbers always tabular. Odds always right-aligned.
- suit decorations (♠ ♥ ♦ ♣): treated as display glyphs at 1.2-2em scale. Hearts and diamonds in `--card-red`; spades and clubs in `--card-white` on dark, or `--casino-black` on light.
- sizes: marquee display 40-72px, section headings 24-32px, body 14-16px, chip labels / meta 11-13px.
- no lowercase-only labels. title case for proper nouns and CTAs. uppercase for marquee headings, suit labels, and table identifiers.

borders:
- felt surfaces: `border-radius: 0px` — felt is flat, cut square, no rounded corners on table surfaces or marquee display panels.
- chip-shaped elements: `border-radius: 50%` for circular chips; `border-radius: 8-12px` for card-shaped panels, slot reels, and chip-stack containers.
- gold trim: `2px solid var(--gold)` on featured cards and primary panels. `1px solid var(--gold-dim)` for structural dividers.
- marquee border: repeating light-bulb dot border — `background-image: radial-gradient(circle, var(--gold) 3px, transparent 3px); background-size: 14px 14px` as a repeating border pattern. Bulbs chase in animation.
- chrome trim: `2px solid var(--chrome)` on slot machine-style elements and input fields.
- card panels: `border-radius: 10px; border: 2px solid var(--gold-dim)` — the rounded corner of a playing card.
- felt table surface: `border-radius: 0px; border: 3px solid var(--gold)` — the lip of the table, gold-trimmed.

spacing:
- `padding: 1.5rem 2rem; gap: 20-24px`. The casino floor is not cramped — each table has room to breathe, each panel is legible across the floor.
- felt surfaces: `padding: 2rem 2.5rem` — generous, like the felt playing area in front of a dealer.
- chip stacks and suit motifs: tightly grouped — `gap: 8px` between chips in a stack.
- marquee components: `padding: 24px 32px` — the marquee needs its letters to land.
- sections separated by `28-36px` vertical gap. not airy white space — deliberate floor-plan spacing.

**color distribution**
- 40% casino black / casino dark (`--casino-black`, `--casino-dark`) — the room, the carpet, the ceiling. the casino floor at 2am is mostly darkness between pools of light.
- 20% felt green (`--felt-green`, `--felt-dark`) — the dominant work surface. every table, every card-action panel. the heart of the identity.
- 18% card white / marble (`--card-white`, `--marble`) — text, card faces, light content surfaces. the legible layer.
- 12% gold (`--gold`, `--gold-bright`, `--gold-glow`, `--gold-dim`) — chip edges, marquee frames, accents, interactive states. prominent but structural, not wallpaper.
- 5% card red (`--card-red`) — hearts, diamonds, danger states, hot neon accents.
- 3% marquee pink (`--marquee-pink`) — the neon sign. bright but used sparingly, like a flashing sign across the room.
- 2% royal purple (`--royal-purple`) — VIP rail elements, premium-tier indicators.

gold is everywhere structurally — chip rims, table lips, label text, border accents, hover states — but it is never a background wash. felt green is the dominant mid-tone that makes the gold pop.

**component patterns**

buttons: primary — `background: var(--gold); color: var(--casino-black); border: none; border-radius: 10px; padding: 12px 28px; font-family: "Playfair Display", serif; font-weight: 700; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.08em; box-shadow: 0 0 12px var(--gold-glow), 0 4px 12px rgba(0,0,0,0.5)`. The gold chip — substantial and weighty. Secondary: `background: transparent; color: var(--gold); border: 2px solid var(--gold); border-radius: 10px; padding: 12px 26px; font-family: "Playfair Display", serif; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em`. Ghost/tertiary: `background: transparent; color: var(--card-white); border: 1px solid var(--chrome-dim); border-radius: 10px; padding: 10px 22px; font-family: "Inter", sans-serif; font-weight: 500`. Danger: `background: var(--card-red); color: var(--card-white); border-radius: 10px; box-shadow: 0 0 10px var(--card-red-glow)`.

inputs: `background: var(--casino-dark); border: 2px solid var(--chrome); border-radius: 10px; color: var(--card-white); padding: 12px 16px; font-family: "Inter", sans-serif; font-size: 15px`. Focus: `border-color: var(--gold); box-shadow: 0 0 10px var(--gold-glow), 0 0 24px var(--gold-glow)`. Placeholder: `color: rgba(192, 192, 204, 0.4)`. Caret: `caret-color: var(--gold)`.

cards / felt panels: the signature component — `background: var(--felt-green); border: 3px solid var(--gold); border-radius: 0px; padding: 2rem 2.5rem`. Represents a section of the felt playing surface. Card-shaped content panels (not felt): `background: var(--casino-dark); border: 2px solid var(--gold-dim); border-radius: 10px; padding: 1.5rem`. Top-edge gold lip on featured cards: `border-top: 3px solid var(--gold)`. Subtle inner vignette: `box-shadow: inset 0 0 40px rgba(0,0,0,0.3)`.

**chip component** (signature element): circular token. `width: 48px; height: 48px; border-radius: 50%; background: var(--casino-dark); border: 3px solid var(--gold); box-shadow: 0 0 8px var(--gold-glow), inset 0 0 10px rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; font-family: "Inter", sans-serif; font-weight: 700; font-size: 13px; color: var(--gold)`. Color-coded by value: $1 `border-color: var(--chrome); color: var(--chrome)` (white chip), $25 `border-color: var(--card-red)` (red chip), $100 `border-color: var(--casino-black); background: var(--casino-dark)` (black chip), $500 `border-color: var(--marquee-pink)` (pink chip), $1000 `border-color: var(--royal-purple); background: var(--royal-purple-dim)` (purple chip).

navigation: `background: var(--casino-black); border-bottom: 2px solid var(--gold)`. Nav items in Playfair Display uppercase, `color: var(--chrome)`, `letter-spacing: 0.06em`. Active item: `color: var(--gold); border-bottom: 3px solid var(--gold); box-shadow: 0 2px 8px var(--gold-glow)`. Hover: gold color fades in. Small suit glyphs (♠) as optional decorative separators between nav sections, in `color: rgba(212,168,54,0.3)`.

headers / marquee: `background: var(--casino-black); padding: 2rem 2.5rem`. Logo/title in Playfair Display at 40-56px: `color: var(--gold); text-shadow: 0 0 12px var(--gold-glow), 0 0 30px var(--gold-glow)`. Marquee light-bulb border around the header container. Subtitle in chrome. The marquee border: `border: 3px solid var(--casino-dark); background-image: radial-gradient(circle, var(--gold) 3px, transparent 3px); background-size: 14px 14px; padding: 4px` — simulates the incandescent bulb ring.

footers: `background: var(--casino-black); border-top: 2px solid var(--gold-dim); color: var(--chrome); padding: 1.5rem 2rem`. Footer links in Playfair Display uppercase at 0.7rem, gold on hover. Small card suit row as decorative motif: `♠ ♥ ♦ ♣` centered in gold at `opacity: 0.35`. Feels like the felt edge of the table — the last border before the floor.

lists: each item on dark background, separated by `1px solid var(--gold-dim)`. Active / hovered item: `border-left: 3px solid var(--gold); padding-left: 14px; background: rgba(212,168,54,0.06); box-shadow: -4px 0 10px var(--gold-glow)` — a chip sliding to indicate selection. List text in Inter. Values / payouts in tabular numerals, right-aligned, `color: var(--gold)`.

tables: `border: 2px solid var(--gold); border-radius: 10px; overflow: hidden`. Header row: `background: var(--felt-dark); color: var(--gold); font-family: "Playfair Display", serif; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.75rem`. Body cells: `background: var(--casino-dark); color: var(--card-white); border-bottom: 1px solid var(--gold-dim); padding: 10px 16px; font-family: "Inter", sans-serif`. Numeric columns right-aligned with tabular-nums. Alternating rows: `rgba(212,168,54,0.03)` tint — the faintest green-gold. Like the payout table above a slot machine.

dividers: `1px solid var(--gold-dim)` as structural. Decorative: a centered suit row `♠ · ♥ · ♦ · ♣` in gold at `opacity: 0.25`, flanked by thin gold lines. Or a solid `2px solid var(--gold)` with a small centered diamond ◆ glyph. Never a plain gray line.

modals: `background: var(--casino-dark); border: 2px solid var(--gold); border-radius: 12px; box-shadow: 0 0 30px var(--gold-glow), 0 0 60px rgba(212,168,54,0.12), 0 20px 60px rgba(0,0,0,0.7)`. Modal title in Playfair Display uppercase gold. Inner backdrop: `background: rgba(14,12,16,0.88)`. Feels like the private VIP room — high contrast, gold framing, velvet darkness outside.

badges: `background: var(--gold); color: var(--casino-black); border-radius: 8px; font-family: "Playfair Display", serif; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; padding: 3px 10px; box-shadow: 0 0 6px var(--gold-glow)`. Outline variant: `background: transparent; border: 1px solid var(--card-red); color: var(--card-red)`. Purple/VIP variant: `background: var(--royal-purple); color: var(--card-white); border: 1px solid var(--marquee-pink)`.

**roulette wheel display** (signature element): circular container `border-radius: 50%; border: 4px solid var(--gold); box-shadow: 0 0 20px var(--gold-glow), 0 0 50px rgba(212,168,54,0.1); background: conic-gradient(var(--casino-dark) 0deg, var(--felt-green) 9.72deg, var(--casino-dark) 19.44deg, ...)` — alternating dark/green sectors with gold rim. The idle state barely rotates; a spin trigger uses `animation: rouletteSpIn 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`.

**slot reel display** (signature element): fixed-width column `width: 80px; background: var(--casino-dark); border: 2px solid var(--chrome); border-radius: 8px; overflow: hidden; box-shadow: inset 0 0 20px rgba(0,0,0,0.6)`. Reel strip scrolls vertically with `animation: reelSpin`. Symbols (7, ♦, ♠, ★) rendered in card-white or gold. Active payline: `box-shadow: 0 0 0 2px var(--gold), 0 0 12px var(--gold-glow)` across the middle row.

**suit motif decoration**: large background suit glyphs at `opacity: 0.04; font-size: 120-200px; color: var(--gold); position: absolute; pointer-events: none; user-select: none` — used in felt panels and section backgrounds as a watermark. Rotate alternately for visual variety (`transform: rotate(-15deg)`). The ♣ and ♠ in darker tones; ♥ and ♦ at a slightly warmer tint.

**interaction language**

hover: gold warms and brightens — `box-shadow` spreads, `border-color` brightens to `--gold-bright`. `transition: all 0.25s ease`. Buttons shift to `--gold-bright` background. Cards gain `border-color: var(--gold); box-shadow: 0 0 16px var(--gold-glow)`. Text links gain `color: var(--gold); text-shadow: 0 0 6px var(--gold-glow)`.

active / pressed: the chip lands — `transform: scale(0.96); box-shadow: 0 0 6px var(--gold-glow), inset 0 2px 6px rgba(0,0,0,0.4); transition: transform 0.08s ease`. The tactile thud of placing a bet.

focus: `outline: 2px solid var(--gold); outline-offset: 3px; box-shadow: 0 0 10px var(--gold-glow)`. Clean, visible, warm.

selected: `border-color: var(--gold); background: rgba(212,168,54,0.1); box-shadow: 0 0 14px var(--gold-glow), inset 0 0 20px rgba(212,168,54,0.05)`. The chip is committed — the bet is placed.

disabled: `opacity: 0.28; filter: saturate(0.15) brightness(0.7); pointer-events: none`. Grayed out like a closed table — the felt cover is on.

drag: `transform: scale(1.05) rotate(1deg); box-shadow: 0 12px 30px rgba(0,0,0,0.5), 0 0 16px var(--gold-glow); cursor: grabbing; z-index: 100`. Like sliding a chip stack across the felt.

**motion & feedback**

transitions: `transition: all 0.25s ease` as the baseline. Gold glow properties animate fluidly. Border-color and box-shadow are always transitioned — nothing snaps cold.

marquee light-bulb chase: lights around a marquee border cycle on in sequence:
```css
@keyframes marqueeChase {
  0%   { opacity: 1; }
  50%  { opacity: 0.2; }
  100% { opacity: 1; }
}
/* stagger each bulb dot: animation-delay: calc(var(--bulb-index) * 0.08s) */
```

card flip: panels with reversible state (e.g. face-down to face-up) use:
```css
@keyframes cardFlip {
  0%   { transform: rotateY(0deg); }
  50%  { transform: rotateY(90deg); }
  51%  { transform: rotateY(-90deg); }
  100% { transform: rotateY(0deg); }
}
/* duration: 0.45s ease-in-out. transform-style: preserve-3d on parent. */
```

chip stack: chips appearing animate with:
```css
@keyframes chipLand {
  0%   { transform: translateY(-20px) scale(0.9); opacity: 0; }
  60%  { transform: translateY(3px) scale(1.04); opacity: 1; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
/* duration: 0.3s ease-out. Stagger multiple chips by 0.06s. */
```

roulette spin easing: `animation: rouletteSpIn 3s cubic-bezier(0.1, 0.7, 0.1, 1) forwards` — fast initial acceleration, long decelerating tail, lands with weight.

slot reel: `animation: reelSpin 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards` per reel, staggered 0.15s between reels. Snaps on deceleration — the mechanical clunk of the reel stopping.

loading: three gold chips appearing and fading in sequence — `chipLand` animation staggered, or a horizontal progress fill in `--gold` on a `--casino-dark` track. Never a spinner. The pit boss doesn't spin — the wheel spins.

success (jackpot): gold chip animation fires — `chipLand` repeats several times, element pulses with `box-shadow: 0 0 30px var(--gold-glow), 0 0 60px var(--gold-glow)` expanding over 400ms then easing back. Message in Playfair Display gold.

error (bust): `border-color: var(--card-red)` replaces gold borders. Element pulses red twice: `box-shadow: 0 0 20px var(--card-red-glow)` × 2 over 400ms. Text shifts to `var(--card-red)` briefly. No shake — the dealer's hand gesture, not a slot malfunction.

page enter: elements enter from `opacity: 0; transform: translateY(10px)` with staggered 60ms delays, `transition: 0.4s ease-out`. Marquee headings play the flicker variant (opacity flutter 0→1 over 0.5s) on first render, as if the marquee is warming up.

**atmosphere**

background: `var(--casino-black)` solid void. The body carries a radial warm bloom: `radial-gradient(ellipse at 50% 20%, rgba(212,168,54,0.05) 0%, transparent 55%)` — the overhead chandelier effect. The casino floor glows gold from above.

felt table sections: within felt panels, a subtle noise texture at 3-4% opacity simulates the woven felt surface. Plus a very faint inner vignette `box-shadow: inset 0 0 50px rgba(0,0,0,0.25)` — the lamp above the table casting toward the edges.

neon sign reflections: `box-shadow: 0 0 50px var(--marquee-glow), 0 0 100px rgba(255,51,136,0.06)` on key header elements — as if the pink marquee outside is bleeding in through the doorway.

marble reflection: light card-white / marble-tone surfaces use `background: linear-gradient(135deg, rgba(232,228,220,0.04) 0%, transparent 50%, rgba(232,228,220,0.02) 100%)` — the cold polished floor reflecting just a trace of light.

smoke haze: the whole page carries `var(--smoke)` as a faint warm overlay — `background: rgba(240,230,210,0.035)` on a fixed pseudo-element behind all content. Almost imperceptible — like the room's ambient haze.

suit watermarks: large low-opacity suit glyphs positioned absolutely in section backgrounds (see suit motif decoration above). They drift between sections, reinforcing the playing-card identity without announcing themselves.

images: `filter: contrast(1.08) saturate(1.1) brightness(0.88) sepia(0.08)` — warm, slightly rich, slightly aged. The amber of incandescent light and tobacco haze.

the ambient feel: walking through the Caesars Palace casino floor in 1975. Everything is a little dark and a little gold. The felt is very green. The chips click. The roulette wheel murmurs behind you. The carpet — you don't look at the carpet.

**editorial voice**

button labels: dealer-speak, pit boss directness. `Place Your Bet`, `Deal Me In`, `Hit Me`, `Stand Pat`, `Double Down`, `Split the Pot`, `Cash Out`, `Ante Up`, `Let It Ride`, `Take the Odds`. Title case. Imperative or invitation.

headings: marquee-scale confidence. Playfair Display uppercase. `The Main Floor`, `High Rollers Only`, `Tonight's Action`, `The House Pays`, `Winners' Circle`, `The Pit`, `All Bets Down`, `No More Bets`, `Jackpot Board`, `Table Limits`. Big. Loud. The sign is twelve feet tall.

metadata: dealer tray style. `Table 7`, `Seat 3`, `Minimum Bet: $25`, `Pot: $4,400`, `Hand #0119`, `Dealer: House`, `Odds: 35:1`, `Payout: 3:2`. Numeric, precise, no nonsense.

placeholders: `Search the floor...`, `Enter your player number...`, `How much?`, `Your name for the list...`.

empty states: `No action at this table.`, `The wheel is still.`, `No bets on the board.`, `This seat is open.`.

error messages: `That bet doesn't fly.`, `Table limit exceeded.`, `No more bets — wheel is spinning.`, `Something went sideways.`.

success messages: `Winner! Pay the man.`, `Bet placed.`, `You're on the list.`, `Chips confirmed.`, `You're in.`.

**cursor & selection**

cursor: `default` globally. `pointer` on all interactive elements — buttons, chips, nav items, table cells with actions. `grab` / `grabbing` when dragging chip components.

text selection: `::selection { background: var(--gold); color: var(--casino-black); }` — gold highlight, black text. Like a chip landing on a number.

**when to reach for this genome**

Use this genome when the request calls for a casino floor, Vegas entertainment venue, poker room, blackjack table, roulette experience, slot-machine display, jackpot board, card-game interface, high-roller club, nightlife booking flow, tournament lobby, prize draw, odds/payout surface, or any product that should feel like an analog table game under gold marquee lights.

Reach for it when the user wants warm opulence, green felt, chip stacks, playing-card suits, gold trim, neon marquee glow, roulette wheels, slot reels, VIP purple, smoky darkness, and tactile "place the bet" interactions. It is strongest when the interface can borrow physical casino mechanics: chips land, cards flip, reels stop, table limits appear, odds are tabular, and the house voice speaks in short dealer commands.

Choose it for:
- game, event, entertainment, or loyalty surfaces that benefit from poker, blackjack, roulette, slots, jackpot, or high-roller metaphors.
- casino resort pages, nightlife schedules, VIP club flows, tournament brackets, prize dashboards, and table-reservation interfaces.
- playful finance-adjacent or probability displays where the brief explicitly asks for chips, odds, payouts, risk, stakes, or "Las Vegas" atmosphere.
- card-game and tabletop simulations where suits, felt panels, chip counters, table limits, and dealer-language CTAs make the product more legible.

Do not choose it for regulated financial products, serious trading desks, sports-betting analytics, compliance tools, generic dashboards, minimalist luxury retail, children-focused games, healthcare, public-sector services, or any interface where gambling cues would be irresponsible or misleading. Use `ticker_floor.nyse` for market floors, `auction_lot.gavel` for bidding and sale estimates, `pinball_backglass.tilt` for arcade-score energy, `drive_in_marquee.intermission` for retro entertainment without gambling mechanics, and `gallery_foyer.institution` for premium cultural authority.

**anti-patterns — this genome NEVER:**

1. uses sharp 0px border-radius on chip-shaped or card-panel elements. `border-radius: 0px` is reserved for felt table surfaces and marquee display panels. All chip containers, card panels, inputs, and buttons have 8-12px radius or `50%` for circular chips.
2. uses cold blue, teal, or clinical accent colors as primary interactive hues. the interactive palette is gold and warm red. cool tones exist only as chrome trim and are never dominant.
3. uses a clean, digital, sportsbook aesthetic — flat data tables, minimal white space, modern sans-serif headers. this is a physical casino floor, not a DraftKings interface. the identity is opulent, warm, and analog.
4. uses pure white (`#FFFFFF`) as a background surface. all light surfaces are warm: `--card-white` (#F5F0E8) for card faces, `--marble` (#E8E4DC) for neutral panels. no cold white.
5. uses thin hairline 1px borders as the primary structural containment on major panels. table lips are 2-3px gold. inputs are 2px chrome. hairlines (1px) are only for internal row dividers.
6. uses instantaneous state changes with no transition. every hover glow, every chip land, every card flip has at least 0.15s easing. the felt absorbs motion — nothing is abrupt.
7. uses sans-serif for marquee headings or featured display text. Playfair Display is mandatory for the marquee. clean geometric sans is for body copy and pit-boss utility text only.
8. uses emoji or casual internet language in the editorial voice. no 🎰, no "Let's gooo", no "Check it out!". The pit boss speaks plainly: "Place your bet. The minimum is twenty-five."
9. uses pastel or muted colors for chip elements. chip color coding follows casino convention — red, black, white, purple are saturated and distinct. desaturated chips read as disabled only.
10. uses modern card-hover micro-interactions from design systems (shadow lifts, scale-up-and-shine). the interaction language is weighted and deliberate: chips land, cards flip, felt absorbs. physics are heavy, not springy.
11. uses gradients as primary background fills on large surfaces. felt is flat green. the void is flat black. gradients appear only as glow blooms, vignettes, and the marquee's incandescent warmth — never as hero background treatments.
12. uses hyperactive or rapid-fire animations. the casino floor is alive but not frantic — chips land with weight, wheels decelerate, marquee lights chase at a measured rhythm. "Not hyperactive like arcade" is the standing rule.
