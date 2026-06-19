---
id: "86"
name: playbill_marquee.bway
keywords:
  - broadway
  - playbill
  - theater
  - marquee
  - stage
  - showbill
  - drama
  - musical
  - off-broadway
  - vaudeville
  - tony awards
  - opening night
  - cast list
  - dramatic poster
---

### genome 86: `playbill_marquee.bway`

> identity: Broadway theatrical Playbill program and marquee poster. The yellow-and-black PLAYBILL magazine cover, the gold-leafed marquee letterboards of Times Square circa 1955, opening-night programs at Sardi's, "STARRING" credits in towering condensed sans-serif, cast lists in formal serif, "ACT I — ACT II" intermission cards. Not the Vegas casino floor (genome 100, gambling) and not the neon diner (41, roadside) — this is the legitimate theater: heavy black ink on yellow program covers, gold marquee bulbs surrounding star names, deep curtain red velvet accents. The energy of standing under the marquee at intermission while a yellow cab idles.

---

## surface

colors:
```
--playbill-yellow: #F2C722;      /* Playbill magazine yellow — primary brand accent */
--playbill-yellow-deep: #D9A91A; /* darker yellow for hover/active states */
--marquee-black: #0E0E12;        /* heavy black ink — primary text and dark surfaces */
--marquee-deep: #1A1A1F;         /* raised dark surface — orchestra pit */
--stage-curtain: #7A1A1F;        /* deep curtain red — accent for "starring" / featured */
--stage-curtain-bright: #A02B30; /* brighter curtain red for hover/active */
--gilt-bronze: #C9994C;          /* gold marquee bulb edge / brass railing */
--gilt-bright: #F2C46B;          /* hot golden marquee glow */
--paper-cream: #ECE3CC;          /* program-page cream — secondary light surface */
--ink-charcoal: #1F1A14;         /* program-page deep ink */
--ink-medium: #4A4035;           /* muted serif text */
--ink-faint: rgba(31,26,20,0.5); /* tertiary text */
--marquee-light: rgba(242,196,107,0.3); /* warm marquee bulb glow */
--stage-shadow: rgba(14,14,18,0.85); /* the dark behind the curtain */
```

typography:
- display/titles: `"Big Caslon", "Playfair Display", "Bodoni Moda", serif` for show titles — `font-weight: 700–900; text-transform: uppercase; letter-spacing: 0.04em;` — sizes `4rem–10rem`. The towering Didone serif of opening-night posters: high stroke contrast, sharp serifs, dramatic.
- alternate display (the "STARRING" line): `"Oswald", "Bebas Neue", "Antonio", sans-serif` — `font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em;` — the condensed sans of Broadway marquee letterboards.
- body/program: `"Cormorant Garamond", "Crimson Text", serif` — `font-weight: 400; font-size: 14–16px; line-height: 1.65; letter-spacing: 0.005em;` — the program-book body type.
- cast lists: `"Cormorant Garamond"; font-weight: 500; letter-spacing: 0.02em;` — character name in small-caps left, performer name in italic right, separated by dot leaders.
- meta: `"Cormorant Garamond"; font-style: italic; font-size: 0.85rem; color: var(--ink-medium);` — for "Act I, Scene 3" italic indicators.

borders:
- marquee frame (signature): a doubled-line frame — `box-shadow: inset 0 0 0 1px var(--gilt-bronze), inset 0 0 0 4px var(--marquee-black), inset 0 0 0 5px var(--gilt-bronze);` — like a gilded picture frame around a poster
- marquee bulb border: a `1px solid var(--marquee-black)` outer frame with SVG circles (the marquee bulbs) lined along the perimeter at small scale, alternating `--gilt-bright` and `--marquee-light` for a "lit" effect
- standard panel borders: `1px solid var(--marquee-black)` or `2px solid var(--playbill-yellow)`
- corner accent: small Art Deco fan or theatrical-mask glyphs in `--gilt-bronze` at panel corners (optional flourish for hero panels)
- border-radius: `0–4px` on cards (programs are mostly hard-edged); `2px` for typical card softness

spacing:
- page edge: `4vw` horizontal padding
- vertical rhythm: `8–14vh` between major sections — the dramatic act-break pacing
- card padding: `28–40px`
- moderate-high density on program-content sections (cast lists are packed); generous around hero/title (the show title commands space)

---

## color distribution

- 38% paper-cream / playbill-yellow — the program cover and inside page backgrounds, the dominant warm surface
- 26% marquee-black / marquee-deep — heavy black ink, dramatic typography fills, dark accent panels
- 14% ink-charcoal / ink-medium — body text on cream surfaces
- 10% stage-curtain / stage-curtain-bright — featured content, "STARRING" highlights, premiere callouts
- 8% gilt-bronze / gilt-bright — marquee bulb glow, awards, premium badges, hover accents
- 4% marquee-light + soft yellows — atmospheric glows around hero typography

a typical page is yellow + heavy black ink, with the curtain-red appearing on "STARRING" headers and one or two featured CTAs, and gilt-gold on marquee bulb rows and award badges.

---

## component patterns

buttons:
- primary (the BOX OFFICE button): `background: var(--marquee-black); color: var(--playbill-yellow); border: 2px solid var(--gilt-bronze); border-radius: 0; padding: 16px 36px; font-family: "Oswald", "Bebas Neue", sans-serif; font-weight: 700; font-size: 1rem; letter-spacing: 0.2em; text-transform: uppercase; box-shadow: 4px 4px 0 var(--marquee-black);` — looks like a printed Broadway ticket button
- yellow primary: `background: var(--playbill-yellow); color: var(--marquee-black); border: 2px solid var(--marquee-black);` — the Playbill-yellow CTA
- curtain (featured): `background: var(--stage-curtain); color: var(--paper-cream); border: 1px solid var(--gilt-bronze);` — the velvet-red premiere button
- secondary outline: `background: transparent; color: var(--marquee-black); border: 2px solid var(--marquee-black); padding: 14px 34px;`
- ghost/link: `background: transparent; color: var(--marquee-black); border: none; text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 2px; font-family: "Cormorant Garamond", serif; font-style: italic;`

inputs:
- `background: var(--paper-cream); border: 2px solid var(--marquee-black); border-radius: 0; padding: 14px 18px; font-family: "Cormorant Garamond", serif; font-size: 1rem; color: var(--ink-charcoal);`
- label above: `font-family: "Oswald", sans-serif; font-weight: 700; font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--marquee-black); margin-bottom: 8px;`
- placeholder: italic Cormorant in `--ink-faint`
- focus: `border-color: var(--stage-curtain); box-shadow: 4px 4px 0 var(--stage-curtain);` — hard offset shadow in curtain red

cards/panels (program pages):
- standard (a program page): `background: var(--paper-cream); border: 2px solid var(--marquee-black); border-radius: 0; padding: 36px; box-shadow: 6px 6px 0 var(--marquee-black);` — hard offset shadow, the printed-paper feel
- marquee panel (featured): yellow field with bulb-edge border — `background: var(--playbill-yellow); border: 4px solid var(--marquee-black); padding: 48px;` with a row of small SVG circles (marquee bulbs) inset along the inside top edge — used for hero/featured content
- act-card variant: dark `background: var(--marquee-black); color: var(--playbill-yellow); padding: 36px;` styled as an intermission/act card with a centered serif "ACT II" title
- ticket-stub variant: a narrow horizontal card with `clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 50%, calc(100% - 24px) 100%, 0 100%);` and a dashed `1px dashed var(--ink-faint)` perforation line down the middle

navigation:
- top bar: `background: var(--marquee-black); border-bottom: 4px solid var(--playbill-yellow); padding: 20px 4vw;`
- brand: a small SVG theatrical-mask glyph (comedy/tragedy) in `--gilt-bright` followed by `PLAYBILL`-style wordmark in `--playbill-yellow` Oswald
- nav items: `font-family: "Oswald", sans-serif; font-weight: 600; font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--paper-cream);`
- active: `color: var(--playbill-yellow); border-bottom: 2px solid var(--playbill-yellow);`

headers/hero:
- show title: `font-family: "Big Caslon", "Playfair Display", serif; font-weight: 900; font-size: 7–14vw; line-height: 0.95; letter-spacing: 0.02em; color: var(--marquee-black); text-transform: uppercase; text-align: center;` — towering Didone serif at maximum dramatic scale
- "STARRING" line above title: `font-family: "Oswald", sans-serif; font-weight: 700; font-size: 1rem; letter-spacing: 0.4em; text-transform: uppercase; color: var(--stage-curtain); text-align: center;` — the small condensed sans above the showname, tight tracking
- cast name beneath title: `font-family: "Big Caslon", serif; font-weight: 700; font-size: 2–4vw; letter-spacing: 0.04em; color: var(--marquee-black); text-align: center; font-style: italic;` — star names in italic Caslon at large scale
- marquee bulb border around hero: a row of SVG circles in `--gilt-bright` arranged along the perimeter, alternating with `--gilt-bronze` darker bulbs for "off" pattern — like an actual marquee letterboard
- hero composition: black-on-yellow OR cream-on-black, the show title dominating the center, "STARRING" tiny above, star names italic below, marquee bulb border framing the whole thing

footers:
- `background: var(--marquee-black); color: var(--paper-cream); padding: 48px 4vw; border-top: 4px solid var(--playbill-yellow);`
- columns of program info (venue, run time, intermission notice) in italic Cormorant cream on black
- final tagline in Oswald uppercase yellow: `NOW PLAYING · BROADWAY · 2025`
- thin gilt-bronze rule with theatrical-mask glyph centered

dividers (signature — the act break):
- centered "ACT I — INTERMISSION — ACT II" divider: a horizontal bar with `border-top: 2px solid var(--marquee-black); border-bottom: 2px solid var(--marquee-black);` containing centered uppercase Oswald text `— INTERMISSION —` flanked by small theatrical-mask glyphs
- standard divider: thick `4px solid var(--marquee-black)` horizontal rule with optional centered gilt-bronze sunburst glyph
- bulb-row divider: a horizontal row of small alternating gilt circles (lit/unlit) suggesting a marquee bulb strip

lists (cast lists):
- cast list format: character name in left column small-caps Cormorant, dot-leader filling the middle (`. . . . . . . . . . . .` in `--ink-faint`), performer name in italic Cormorant on right
- featured cast: larger size, `font-weight: 600`, optional `*` asterisk prefix in `--stage-curtain` indicating principal role
- ordered (act lists): Roman numerals (`ACT I`, `ACT II`) in Oswald uppercase as section headers, scene numbers nested in italic Cormorant below
- nav lists in footer: dot-leader separators between items

tables (program credits):
- header: `background: var(--marquee-black); color: var(--playbill-yellow); font-family: "Oswald"; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 14px 20px;`
- body rows: `font-family: "Cormorant Garamond"; color: var(--ink-charcoal); padding: 12px 20px; border-bottom: 1px dotted var(--ink-faint);`
- alternating rows: subtle `background: rgba(14,14,18,0.03)`
- italic in performer-name columns; uppercase Oswald in role-name columns

modals (a sealed program revealed):
- `background: var(--paper-cream); border: 4px solid var(--marquee-black); border-radius: 0; padding: 56px 48px; box-shadow: 8px 8px 0 var(--stage-curtain), 0 24px 64px rgba(14,14,18,0.6);`
- top edge gilt accent: `border-top: 6px solid var(--gilt-bronze);`
- title in serif Big Caslon uppercase
- backdrop: `background: rgba(14,14,18,0.9); backdrop-filter: blur(2px);`
- close: an italic Cormorant `× close program` link in `--ink-medium`

badges/tags (show categories and tickets):
- ticket-stub style: `clip-path: polygon(8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%, 0 50%); background: var(--marquee-black); color: var(--playbill-yellow); padding: 4px 16px; font-family: "Oswald", sans-serif; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;` — like a torn ticket stub
- TONY-style award: a small SVG laurel wreath in `--gilt-bright` flanking text "TONY AWARD WINNER 2024" in `--marquee-black` Oswald uppercase
- premiere: filled stage-curtain `background: var(--stage-curtain); color: var(--paper-cream);` reading `WORLD PREMIERE`
- standard: outline `background: transparent; border: 1px solid var(--marquee-black); color: var(--marquee-black);`

progress bars (act progression):
- track: `height: 4px; background: var(--paper-cream); border: 1px solid var(--marquee-black);`
- fill: `background: var(--stage-curtain); height: 100%;` — the curtain rising
- label: Oswald uppercase to the right `ACT I · SCENE 4`

tooltips:
- `background: var(--marquee-black); color: var(--playbill-yellow); border: 1px solid var(--gilt-bronze); border-radius: 0; padding: 8px 14px; font-family: "Oswald"; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase;` — like a tiny program-note label

---

## interaction language

- hover (buttons): the offset shadow shifts and the bulbs glow — primary button gains `box-shadow: 6px 6px 0 var(--marquee-black); transform: translate(-2px, -2px);`. For yellow buttons, the offset shadow becomes curtain red. `transition: 0.15s ease;` — fast theatrical snap
- hover (marquee panels): the bulb border around hero panels animates — alternating bulbs swap their lit/unlit state on a `0.4s ease-out` cycle, creating a chasing-marquee-lights effect
- hover (cards): the offset shadow grows — `box-shadow: 10px 10px 0 var(--marquee-black); transform: translate(-2px, -2px);`. `transition: 0.2s ease;`
- hover (links): underline thickens — `text-decoration-thickness: 3px; color: var(--stage-curtain);`
- active/pressed: `transform: translate(4px, 4px); box-shadow: 0 0 0 transparent;` — the button presses flat into the page
- focus: `outline: 3px solid var(--stage-curtain); outline-offset: 2px;` — hot red focus ring
- selected: `background: var(--playbill-yellow); color: var(--marquee-black);` for list items, with a small `★` prefix in `--stage-curtain`
- disabled: `opacity: 0.4; filter: grayscale(0.5);` — the show is dark this night
- drag: `cursor: grab; transform: rotate(2deg); box-shadow: 12px 12px 0 var(--marquee-black);` — lifting a stack of programs

---

## motion & feedback

transitions: `0.15–0.3s ease` default — quick, snappy, the rhythm of a curtain cue. Marquee bulbs flash fast.

marquee-bulb chase animation (signature): a row of bulb SVGs has its `:nth-child(n)` elements opacity-cycle between `var(--gilt-bright)` and `var(--gilt-bronze)` on a `0.8s` infinite loop, creating the classic chasing-lights effect on the page header.

```css
@keyframes bulb-chase {
  0%, 100% { fill: var(--gilt-bronze); }
  50% { fill: var(--gilt-bright); filter: drop-shadow(0 0 8px var(--gilt-bright)); }
}
.bulb:nth-child(odd) { animation: bulb-chase 1.6s ease-in-out infinite; }
.bulb:nth-child(even) { animation: bulb-chase 1.6s ease-in-out infinite 0.8s; }
```

loading: a marquee letterboard animation — letters appear one by one spelling `NOW LOADING`, with a final dramatic pause and curtain-rise effect.

success: a yellow stage-light spotlight expands from the affected element via `radial-gradient` animation over `0.6s ease-out`. Confirmation text in Oswald: `BOOKED!` or `CURTAIN UP!`

error: the curtain red flashes — `background: var(--stage-curtain); transition: 0.2s ease;` briefly, then fades back to normal. Message in italic Cormorant: `Tickets sold out for this date.` or `Box office closed.`.

page enter: hero title appears with a dramatic curtain-rise effect — `clip-path: inset(0 0 100% 0)` animating to `inset(0 0 0% 0)` over `0.9s ease-out`, revealing the title from top to bottom. Other elements fade up in stagger.

intermission interstitial: between major sections, a brief "INTERMISSION" card can briefly appear and dissolve, holding `1.2s`, then fading to reveal the next section.

---

## atmosphere

- the page background can be `--paper-cream` (program-page mode) OR `--marquee-black` (marquee-mode) — both are valid; choose based on whether the page is the program interior or the marquee exterior
- marquee bulb perimeter: hero sections feature a row of SVG circles along the inside border, alternating between `--gilt-bright` (lit) and `--gilt-bronze` (off) — the chasing-bulb pattern animates ambiently
- gold-leaf texture wash on yellow surfaces: a subtle gold-foil shimmer via animated `linear-gradient` with `background-size: 200%` — barely-perceptible Vegas-glamour shimmer
- spotlight cone on hero typography: `background: radial-gradient(ellipse 70% 50% at 50% 30%, rgba(242,196,107,0.15) 0%, transparent 70%);` — a warm theater-spotlight pool behind the show title
- the program-page noise texture: subtle SVG paper-grain noise on cream surfaces at very low opacity
- images: `filter: contrast(1.1) saturate(0.9);` framed in `4px solid var(--marquee-black)` with `box-shadow: 6px 6px 0 var(--gilt-bronze);` — like vintage production stills mounted in a program

---

## editorial voice

button labels: theatrical imperatives in uppercase Oswald. `BOOK NOW`, `BUY TICKETS`, `RESERVE YOUR SEAT`, `CURTAIN UP`, `VIEW CAST`, `MEET THE COMPANY`, `BEHIND THE SCENES`, `OPENING NIGHT`. All caps. weighty.

headings: dramatic, theatrical, occasionally italic. `STARRING`, `THE COMPANY`, `ACT I — SCENE 1`, `INTERMISSION`, `A WORD FROM THE DIRECTOR`, `CRITICAL ACCLAIM`, `OPENING NIGHT 2025`. Mix of uppercase Oswald (for marquee headers) and italic Big Caslon (for show titles).

metadata: program-style label-colon-value pairs. `Venue: Majestic Theatre`, `Run Time: 2h 35m incl. intermission`, `Premiere: October 14, 2025`, `Director: M. Greene`, `Composer: T. Bernstein`. Title case labels, formal punctuation.

placeholders: italic Cormorant. `your name as it appears on the playbill...`, `seating preference...`, `subscriber number...`, `gift recipient...`. Lowercase, italic.

empty states: `No performances on this date.`, `Box office is dark.`, `The house has not yet been seated.`, `No cast listed for this production.`. Title case, formal-theatrical register.

error messages: `Sold out — try a later performance.`, `That seat has been taken.`, `Box office closed for the evening.`, `Curtain is up — late seating only.`. Period. dramatic-but-pragmatic.

success messages: `Booked. See you at curtain.`, `Welcome to the theater.`, `Your tickets are at will-call.`, `Subscribed for the season.`. Period. quietly satisfied, slightly theatrical.

---

## cursor & selection

- default: `cursor: default`
- interactive: `cursor: pointer`
- text input: `cursor: text; caret-color: var(--stage-curtain);`
- drag: `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--playbill-yellow); color: var(--marquee-black); }` — the highlight is Playbill yellow on black

---

**when to reach for this genome**

Use `playbill_marquee.bway` when the prompt asks for Broadway, legitimate theater, Playbill programs, musical or drama landing pages, box-office booking, cast lists, opening night, marquee posters, theater subscriptions, Tony-style awards, intermission cards, or any product that should feel like a yellow-and-black program cover framed by Times Square marquee bulbs.

Reach for it when the concrete cues are Playbill yellow, heavy black ink, cream program pages, curtain-red feature accents, gilt bulb borders, towering Didone show titles, condensed `STARRING` lines, formal serif cast lists with dot leaders, ticket-stub cards, act/scene metadata, box-office language, opening-night ceremony, and product actions like book seats, view cast, reserve will-call, meet the company, browse performances, or read program notes.

Do not use it for drive-in cinema, outdoor movie nights, concession countdowns, dancing snack-bar mascots, double-feature schedules, projected title cards, or family intermission reels; use `drive_in_marquee.intermission`. Do not use it for Las Vegas gambling, poker/blackjack/roulette, chip stacks, odds, payouts, green felt, or smoky casino opulence; use `casino_floor.aces`. Do not use it for county fairs, circus tents, midway games, prize booths, painted wooden signs, or general festival spectacle; use `carnival_midway.show`. Do not use it for diner menus, Route 66 booths, chrome trim, jukebox selectors, neon `OPEN` signs, or late-night counter service; use `neon_diner.route`. Do not use it for Art Deco private clubs, navy-and-gold lobby ceremony, sunburst invitations, or Gatsby-era hospitality; use `deco_metropolitan.gilt`.

It is strongest when the theater program and box office are the governing metaphor: the show title, cast, venue, performance time, seat, and curtain cue should organize the interface. If the prompt wants cinema snacks, gambling tables, fairground play, diner hospitality, or Deco luxury without theater program mechanics, route away.

## anti-patterns — this genome NEVER:

1. uses cool-tech blue, teal, or any cool-shifted color as an accent. The palette is hot stage colors: Playbill yellow, curtain red, gilt gold, marquee black. Anything cool feels wrong on a Broadway poster.
2. uses border-radius above 6px. Programs and tickets are hard-edged printed paper. Soft rounded buttons belong to apps, not theaters. (Pills at 999px for chips are the lone exception.)
3. uses gradients except the subtle gold-foil shimmer and the radial spotlight cone. Solid black on solid yellow is the core ink-on-paper logic.
4. uses lightweight or thin typography. Display is heavy Didone serif (700–900) or bold condensed sans (Oswald 700). Light type belongs to art galleries, not Broadway.
5. uses casual modern UX copy like "Click here!" or "Quick checkout." Voice is theatrical-formal: "Book Now", "Curtain Up", "Reserve your seat". The register matches a real Broadway box office.
6. uses photography in full saturation with bokeh. Production stills are treated: slight desaturation, hard black frames, hard offset shadow — they look like images mounted in a program.
7. uses bouncy/elastic animation curves. Theatrical timing is snappy, sharp, cue-driven. `0.15–0.3s ease` is the rhythm.
8. uses the curtain red as a broad fill color. It's a featured accent for "STARRING" lines, premium CTAs, focus states — a small percentage of the page. The dominant colors remain yellow, black, and cream.
9. uses cursive or scripted display fonts. Display is Big Caslon Didone or Oswald condensed — both authoritative print-shop faces. Cursive belongs to wedding invitations, not Broadway.
10. uses bulb-chase animations everywhere. The marquee bulb effect is reserved for hero/featured panels only. Using it on every card cheapens the effect; the marquee is meant to be the focal point.
