---
id: "102"
name: roller_disco.glitter
keywords:
  - roller disco
  - skating rink
  - mirror ball
  - studio 54
  - disco
  - 1970s
  - 1980s
  - lurex
  - glitter
  - polyester
  - skate
  - soul train
  - boogie
  - nightlife
  - polished maple
---

### genome 102: `roller_disco.glitter`

> identity: The Saturday-night rink, 1978. Mirror ball overhead throwing fractured light across a polished maple floor, the DJ booth in mirror-tile sheathing, hot pink + electric blue + violet + chrome-silver lurex, skate-key necklaces, candy-striped tube socks, the Bee Gees and Donna Summer bleeding from a quad-stack speaker. Studio 54 if Studio 54 had wheels. Every surface either reflects or sparkles. Type is rounded-bubble or italic-chrome wordmark. Everything moves — there are no still surfaces in a roller disco.

**surface**

colors:
```
--floor-maple: #C99B6B;          /* polished maple rink floor — warm honey wood */
--floor-shine: #E4BF8A;          /* the buffed lacquer highlight on the floor */
--floor-shadow: #8E6638;          /* the duller wood between coats of polish */
--hot-pink: #F03A99;             /* primary signature — hot pink lurex, signage, neon */
--hot-pink-glow: rgba(240, 58, 153, 0.45); /* the bleed-halo of a pink neon tube */
--electric-blue: #2A6BFF;        /* secondary signature — electric/cobalt blue, signage */
--electric-glow: rgba(42, 107, 255, 0.42);
--violet: #8A3DD8;               /* the lurex purple, midway between pink and blue */
--violet-glow: rgba(138, 61, 216, 0.4);
--chrome-1: #F4F1EC;             /* mirror-tile highlight, lurex glint */
--chrome-2: #C4C3BE;             /* mirror-tile midtone, brushed steel */
--chrome-3: #8B8A85;             /* mirror-tile shadow, recessed chrome */
--ink-dark: #18121B;             /* the dim corners between spotlights, deep eggplant-black */
--ink-warm: #2A1C28;             /* warmer dark for shadowed surfaces */
--gold-trim: #E8B845;            /* gold-tone speaker grille, skate-bearing brass */
--mint-stripe: #5BE3C4;          /* fluorescent mint accent — striped socks, candy lights */
--candy-cream: #F8E9D2;          /* the warm-white of arcade marquee bulbs */
--ball-sparkle: rgba(255, 255, 255, 0.92); /* the pinpoint mirror-ball glints */
--ball-cast: rgba(255, 255, 255, 0.08); /* the soft cast of light pieces drifting across surfaces */
```

typography:
- display / marquee headlines: `"Pacifico", "Lobster", "Yellowtail", cursive` at `font-weight: 400; font-size: 44-84px; letter-spacing: 0em; line-height: 0.95; color: var(--hot-pink); text-shadow: 0 0 6px var(--hot-pink-glow), 0 0 16px var(--hot-pink-glow), 0 0 32px rgba(240,58,153,0.25)` — the swoopy script wordmark, neon-tube outlined.
- secondary display / "boogie wonderland" sub-headers: `"Bowlby One", "Fredoka One", "Ultra", sans-serif` at `font-weight: 700-900; font-size: 24-44px; letter-spacing: 0em; text-transform: uppercase; line-height: 0.95` — the rounded chubby bubble-letter wordmark, often with a chrome inner fill (linear gradient `var(--chrome-1)` → `var(--chrome-3)`).
- skate-tag / number plate: `"Monoton", "Black Ops One", "Faster One", cursive` at `font-size: 28-40px; letter-spacing: 0.04em; text-transform: uppercase` — italic chrome wordmark style, the SKATE-A-RAMA marquee letters.
- body / instructions: `"Outfit", "Quicksand", "Nunito", sans-serif` at `font-weight: 500; font-size: 14-16px; line-height: 1.5; letter-spacing: 0.01em; color: var(--candy-cream)`.
- metadata / "lane 04 · party of 6": `"DM Mono", "JetBrains Mono", monospace` at `font-weight: 500; font-size: 11-12px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--mint-stripe)`.
- skate-key labels: `"Outfit", sans-serif` at `font-weight: 700; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-dark)` — stamped onto chrome.
- italic-chrome RULE: any display-scale text in `--electric-blue` or `--violet` gets a `text-shadow: 1px 0 0 var(--chrome-1), 2px 0 0 var(--chrome-2), 3px 0 0 var(--chrome-3)` offset stack — the airbrush-extruded chrome lettering of a 1978 skate-rink mural.

borders:
- pill/oval radii dominate. `border-radius: 999px` for buttons, badges, and pills. `border-radius: 24-32px` for cards (the rounded marquee corner). `border-radius: 16px` for inputs. Never `0px`.
- primary borders: `2px solid var(--hot-pink)` or `2px solid var(--electric-blue)` with a `box-shadow: 0 0 8px [matching-glow], inset 0 0 8px [matching-glow]` — the neon-tube look, inner glow + outer bleed.
- chrome trim border: a 3px gradient `border: 3px solid transparent; background-image: linear-gradient(var(--ink-dark), var(--ink-dark)), linear-gradient(135deg, var(--chrome-1) 0%, var(--chrome-3) 50%, var(--chrome-1) 100%); background-origin: border-box; background-clip: padding-box, border-box` — the polished bumper around a marquee panel.
- dashed marquee-bulb border (decorative): repeating circles `background-image: radial-gradient(circle, var(--candy-cream) 4px, transparent 5px); background-size: 18px 18px` along edges of feature elements — a chase-light bulb strip.

spacing:
- generous, kinetic, NOT cramped. `padding: 20-32px` inside cards. `gap: 18-28px` between elements. Margins breathe like a dance floor.
- the layout is asymmetric and orbital — elements rotate around a hot-pink centerpiece. Avoid strict grid alignment for hero/feature areas.

**color distribution**
- 38% ink-dark / ink-warm (`--ink-dark`, `--ink-warm`) — the dim arena beyond the spotlights, dominant nighttime backdrop.
- 22% floor-maple / floor-shine / floor-shadow — the rink floor itself, used as a horizontal surface treatment, hero-section background, table backgrounds. The warm honey-wood is what your skates roll on.
- 14% hot-pink — primary signature, headlines, primary buttons, neon-script accents.
- 10% electric-blue — secondary signature, secondary buttons, link color, "BOOGIE" callouts.
- 7% violet — tertiary accent, blended midway between pink and blue, used in gradients and chrome glints.
- 5% chrome (`--chrome-1/2/3`) — mirror-tile panels, button-edge metallic gradients, skate-bearing trim.
- 2% mint-stripe — punctuating fluorescent flash, "OPEN" indicators, success states.
- 2% gold-trim — speaker-grille panels, skate-key icons, secondary metallic accent.

the rule: every dark expanse must catch at least one chrome glint and one neon bleed. Empty black is a missed opportunity; a roller disco never has un-lit corners.

**component patterns**

buttons: primary — `background: linear-gradient(135deg, var(--hot-pink) 0%, var(--violet) 100%); color: var(--candy-cream); border: 2px solid var(--candy-cream); border-radius: 999px; padding: 14px 32px; font-family: "Bowlby One", sans-serif; font-size: 16px; text-transform: uppercase; letter-spacing: 0.04em; box-shadow: 0 0 0 2px var(--hot-pink), 0 0 16px var(--hot-pink-glow), 0 4px 12px rgba(0,0,0,0.4); position: relative; overflow: hidden`. The pill is bordered in cream-white like a marquee bulb-rim. A subtle moving sheen (a 60% white linear-gradient at 30deg) drifts across once every 6 seconds — the mirror ball's reflection rolling over.

Secondary button: `background: transparent; color: var(--electric-blue); border: 2px solid var(--electric-blue); border-radius: 999px; padding: 12px 28px; box-shadow: 0 0 0 1px var(--electric-blue) inset, 0 0 12px var(--electric-glow); font-family: "Bowlby One"; text-transform: uppercase`. The neon-tube outlined pill.

Chrome button: `background: linear-gradient(180deg, var(--chrome-1) 0%, var(--chrome-3) 100%); color: var(--ink-dark); border: 2px solid var(--chrome-3); border-radius: 999px; padding: 12px 28px; box-shadow: inset 0 1px 0 var(--chrome-1), inset 0 -1px 0 var(--chrome-3), 0 2px 4px rgba(0,0,0,0.3)`. Looks like a polished metal skate bearing.

Ghost / "skip" button: text-only, italic script in `var(--candy-cream)`, hot-pink underline `text-decoration: underline; text-decoration-color: var(--hot-pink); text-decoration-thickness: 3px; text-underline-offset: 4px`. The "no thanks, I'll take the next song" link.

inputs: `background: var(--ink-warm); border: 2px solid var(--violet); border-radius: 16px; color: var(--candy-cream); padding: 14px 18px; font-family: "Outfit", sans-serif; font-size: 16px; box-shadow: inset 0 0 12px rgba(138,61,216,0.25), 0 0 0 1px var(--violet)`. Focus: border shifts to `var(--hot-pink)`, `box-shadow: 0 0 0 3px var(--hot-pink-glow), inset 0 0 16px var(--hot-pink-glow)` — the field lights up like a marquee. Label above: `font-family: "Pacifico", cursive; font-size: 16px; color: var(--hot-pink); text-shadow: 0 0 6px var(--hot-pink-glow)` — a hand-scripted label glowing pink.

cards / panels: rink-floor panel — `background: linear-gradient(180deg, var(--floor-shine) 0%, var(--floor-maple) 50%, var(--floor-shadow) 100%); border-radius: 28px; border: 3px solid transparent; background-image: linear-gradient(180deg, var(--floor-shine), var(--floor-maple), var(--floor-shadow)), linear-gradient(135deg, var(--chrome-1), var(--chrome-3), var(--chrome-1)); background-origin: border-box; background-clip: padding-box, border-box; padding: 28px; box-shadow: 0 12px 32px rgba(0,0,0,0.5)`. The card is a slice of waxed maple floor with a chrome bumper around it. Lacquer-shine highlights drift slowly across.

Spotlight panel (alternate): `background: radial-gradient(ellipse at top, rgba(240,58,153,0.18) 0%, var(--ink-dark) 70%); border: 2px solid var(--hot-pink); border-radius: 24px; padding: 28px; box-shadow: 0 0 24px var(--hot-pink-glow), inset 0 0 32px rgba(240,58,153,0.12)`. The card is lit from above by a pink spotlight — content reads as if floor-illuminated.

navigation: marquee-bar nav — `background: var(--ink-warm); border-bottom: 4px solid var(--hot-pink); border-radius: 0 0 24px 24px; padding: 18px 28px; box-shadow: 0 0 16px var(--hot-pink-glow); position: relative`. Above the nav: a strip of chase-light bulbs (`background: radial-gradient(circle, var(--candy-cream) 3px, transparent 4px); background-size: 18px 18px; height: 8px; animation: chaseLights 1.4s linear infinite`). Nav items in chrome-bubble script `"Bowlby One"` at 18px, white. Active item: gains a `text-shadow: 0 0 8px var(--electric-glow); color: var(--mint-stripe)` and a small "ON DECK" badge floats above-right.

headers: the section opener is a MARQUEE — `background: var(--ink-dark); border: 4px solid var(--gold-trim); border-radius: 32px; padding: 36px 40px; box-shadow: 0 0 32px rgba(232,184,69,0.3), inset 0 0 48px rgba(0,0,0,0.5)`. Title rendered in massive `"Pacifico"` script at 64-84px in hot pink with full neon-glow `text-shadow`. Underneath: subtitle in `"Bowlby One"` chrome at 24px. The whole header is framed in marquee-bulb dots around the perimeter (decorative repeating-radial-gradient border).

footers: `background: var(--ink-dark); border-top: 2px solid var(--violet); padding: 24px 32px; color: var(--chrome-2); font-family: "Outfit", sans-serif; font-size: 13px; line-height: 1.6`. Featured: a small `"Pacifico"` script flourish in `var(--mint-stripe)` ("see you at the rink ♥"). Decorative skate-key icon glyphs in `var(--gold-trim)`.

lists: each item gets a glittered prefix bullet — small chrome-disk circle (`width: 14px; height: 14px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, var(--chrome-1) 0%, var(--chrome-3) 80%); box-shadow: 0 0 6px var(--ball-cast)`) — the mirror-ball facet bullet. Active item: prefix becomes hot-pink with `box-shadow: 0 0 10px var(--hot-pink-glow)`. Items separated by `1px solid rgba(244,241,236,0.08)` hairline.

tables: rink-roster table — `border: 2px solid var(--chrome-3); border-radius: 20px; overflow: hidden`. Header: `background: linear-gradient(180deg, var(--violet), var(--electric-blue)); color: var(--candy-cream); font-family: "Bowlby One"; text-transform: uppercase; font-size: 13px; letter-spacing: 0.06em; padding: 14px 16px`. Body rows alternate `background: rgba(244,241,236,0.04)` and transparent. Active row: full hot-pink wash `background: var(--hot-pink-glow); color: var(--candy-cream)`.

dividers: never a hairline — always a STROBE BAR. A horizontal bar `height: 4px; border-radius: 999px; background: linear-gradient(90deg, var(--hot-pink), var(--violet), var(--electric-blue), var(--mint-stripe), var(--hot-pink)); background-size: 200% 100%; animation: strobeBar 6s linear infinite` — the rainbow striplight scrolling across.

modals / overlays: SPOTLIGHT MODAL — `background: var(--ink-warm); border: 3px solid var(--hot-pink); border-radius: 28px; padding: 36px; box-shadow: 0 0 0 2px var(--candy-cream) inset, 0 0 48px var(--hot-pink-glow), 0 24px 64px rgba(0,0,0,0.7); max-width: 520px`. A circular spotlight glow caps the top edge: `::before { content: ""; position: absolute; top: -120px; left: 50%; transform: translateX(-50%); width: 180px; height: 180px; background: radial-gradient(circle, var(--hot-pink-glow) 0%, transparent 70%); pointer-events: none; }`. Backdrop: `background: radial-gradient(ellipse at center, rgba(138,61,216,0.4) 0%, rgba(24,18,27,0.92) 70%); backdrop-filter: saturate(1.3)`. The room behind goes dim with a violet wash.

badges: skate-tag style — `background: var(--ink-dark); color: var(--mint-stripe); border: 2px solid var(--mint-stripe); border-radius: 999px; padding: 4px 12px; font-family: "Bowlby One"; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; box-shadow: 0 0 8px rgba(91,227,196,0.4)`. Hot-pink variant: `border-color: var(--hot-pink); color: var(--hot-pink); box-shadow: 0 0 8px var(--hot-pink-glow)`. Chrome-disk badge: `background: radial-gradient(circle at 30% 30%, var(--chrome-1), var(--chrome-3)); color: var(--ink-dark); border-radius: 50%; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; font-family: "Bowlby One"; font-size: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.4), inset 0 1px 0 var(--chrome-1)`.

**signature element — the mirror ball overlay**: a body-level `::after` pseudo-element renders a subtle field of pinpoint white sparkles drifting across the page. `position: fixed; inset: 0; pointer-events: none; background-image: radial-gradient(circle at 12% 18%, var(--ball-sparkle) 1px, transparent 2px), radial-gradient(circle at 38% 62%, var(--ball-sparkle) 1px, transparent 2px), radial-gradient(circle at 71% 8%, var(--ball-sparkle) 1px, transparent 2px), radial-gradient(circle at 87% 84%, var(--ball-sparkle) 1px, transparent 2px), radial-gradient(circle at 24% 91%, var(--ball-sparkle) 1px, transparent 2px), radial-gradient(circle at 56% 34%, var(--ball-sparkle) 1px, transparent 2px); opacity: 0.7; animation: ballSpin 22s linear infinite; mix-blend-mode: screen`. Sparkles slowly migrate across the page surface — never still.

**signature element — the chrome-script wordmark**: any hero-scale text gets an offset chrome stack. SVG version preferred but CSS fallback: `text-shadow: 1px 0 0 var(--chrome-1), 2px 0 0 var(--chrome-2), 3px 1px 0 var(--chrome-3), 4px 2px 6px rgba(0,0,0,0.5)`. The hot-pink script tilts 4-8 degrees and casts a chrome-extruded shadow.

**signature element — the floor-shine sweep**: hero cards and primary buttons have a thin diagonal highlight (a 60deg linear-gradient of `transparent → rgba(255,255,255,0.18) → transparent` at 20% width) that animates from `background-position: -100% 0` to `200% 0` over 6 seconds, looping. The mirror-ball reflection sweeping over polished surfaces.

**interaction language**

hover: element brightens and the glow intensifies. `box-shadow` doubles in spread, `filter: brightness(1.08) saturate(1.1)`. Buttons gain a `transform: translateY(-2px) scale(1.02)` lift. `transition: all 0.24s cubic-bezier(0.34, 1.56, 0.64, 1)` — a bouncy, springy ease, like the rebound off a freshly-waxed floor. Chrome surfaces shift their gradient angle 8° to suggest a tilt-of-the-disk reflection.

active / pressed: snaps back hard. `transform: translateY(0) scale(0.98); transition: all 0.08s ease-out`. Glow contracts briefly. For pill buttons: the inner shadow deepens (`inset 0 4px 8px rgba(0,0,0,0.3)`) — pressing a marquee button into the cabinet.

focus: `outline: 3px solid var(--mint-stripe); outline-offset: 4px; box-shadow: 0 0 0 6px rgba(91,227,196,0.25)` — a fluorescent mint halo. For inputs already glowing: the focus halo is layered on top of the existing pink glow, creating a pink-with-mint-edge effect.

selected: a small chrome-disk indicator (mirror-ball-facet bullet) appears at the top-left corner with `transform: scale(1.2); box-shadow: 0 0 12px var(--ball-cast)`. Plus `border-color: var(--hot-pink); background: linear-gradient(135deg, rgba(240,58,153,0.18), transparent)`.

disabled: `opacity: 0.35; filter: saturate(0.3) brightness(0.7); cursor: not-allowed`. The element looks like an unlit corner of the rink — chrome dulls, neon goes dark. No glow at all.

drag: the element scales up slightly with a long trailing shadow — `transform: scale(1.06) rotate(-3deg); box-shadow: 0 24px 48px rgba(240,58,153,0.5), 0 0 32px var(--hot-pink-glow); cursor: grabbing; z-index: 999`. Behind it: a faint trail of pink-glow afterimage at lower opacity — the skate-trail across waxed floor.

**motion & feedback**

transitions: spring-bouncy by default — `transition: transform 0.24s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.18s ease, box-shadow 0.24s ease`. Colors and glows ease smoothly; positions overshoot slightly. Nothing in this genome moves linearly — the rink is built on momentum and rebound.

**keyframes — the foundation library**:

```css
@keyframes ballSpin {
  0%   { background-position: 0% 0%, 25% 50%, 50% 25%, 75% 75%, 0% 50%, 50% 0%; }
  100% { background-position: 100% 100%, 125% 150%, 150% 125%, 175% 175%, 100% 150%, 150% 100%; }
}
/* the mirror-ball sparkle drift */

@keyframes strobeBar {
  0%   { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
}
/* divider strobe-bar rainbow scroll */

@keyframes chaseLights {
  0%   { background-position: 0 0; }
  100% { background-position: 18px 0; }
}
/* marquee-bulb chase-light advance */

@keyframes neonFlicker {
  0%, 96%, 100% { opacity: 1; }
  97%, 99%      { opacity: 0.7; }
  98%           { opacity: 0.95; }
}
/* applied subtly to neon-glow elements — a rare flicker every few seconds */
```

loading: a mirror-ball spinning in place — a circular element with the chrome-disk gradient and `animation: spin 1.8s linear infinite`. Beneath in script: "spinning up..." in `"Pacifico"` hot-pink. Optional: the chase-lights border activates as the loading-progress channel.

success: the element fills momentarily with a pink-violet gradient burst (`background: radial-gradient(circle at center, var(--hot-pink-glow), transparent 70%); animation: pulse 0.5s ease`), then a small `"Pacifico"` flourish "GO!" appears and fades up + away over 0.8s. A mint-stripe sparkle confetti (3-5 small dots) bursts from the element center.

error: element flashes through the rainbow strobe palette (`background-color` rapidly cycles pink → violet → blue → pink over 0.3s, 3 cycles), then settles with `border-color: var(--hot-pink)` and an italic script "skip this song." in `"Pacifico"` 14px below. No shaking — the rink doesn't shake, it disco-stutters.

page enter: elements drop in from above with a slight rotation (`transform: translateY(-32px) rotate(-2deg)` to settled), staggered 70-100ms in spatial order. The bouncy cubic-bezier ease causes a gentle overshoot — each element lands like a skater coming down from a jump. Background mirror-ball sparkles fade in over 1.5s.

**atmosphere**

background: `var(--ink-dark)` base with a layered radial-gradient overlay — `background-image: radial-gradient(ellipse 80% 50% at 30% 20%, var(--hot-pink-glow) 0%, transparent 50%), radial-gradient(ellipse 60% 50% at 75% 80%, var(--electric-glow) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 50% 50%, var(--violet-glow) 0%, transparent 60%)`. Three overlapping color washes — pink in the top-left, electric blue in the bottom-right, violet in the middle. The page is bathed in moving stagelight color.

the mirror-ball sparkle layer (described above) drifts perpetually over everything at low opacity.

the chrome-tile DJ-booth strip: optional left-side or right-side accent rail rendered as a vertical strip of 80x80px chrome tiles with subtle highlights and reflections (`background-image: repeating-linear-gradient(45deg, var(--chrome-2), var(--chrome-1) 10px, var(--chrome-2) 20px); border: 2px solid var(--chrome-3)`). Each tile slightly offset to look like real mirror cladding.

the speaker-grille texture: secondary atmospheric element — a horizontal band rendered as repeating thin gold-trim ovals (`background-image: radial-gradient(ellipse 8px 4px, var(--gold-trim) 0%, transparent 60%); background-size: 14px 8px`) in dark sections — the perforated metal of a stack of speakers.

floor-shine highlights: any large dark surface has a subtle conic-gradient or linear-gradient highlight slowly drifting across — the mirror-ball reflection sweeping the floor.

scrollbar: `width: 10px; track: var(--ink-warm); thumb: linear-gradient(180deg, var(--hot-pink), var(--violet)); thumb:hover: linear-gradient(180deg, var(--mint-stripe), var(--electric-blue))`. The scrollbar is its own lit pill.

ambient feel: standing at the rail of a rink at 11:30 PM. The mirror ball is the only light source you actually notice; everything else is what it reflects. Pink, violet, electric blue, chrome glints, and the warm honey of the floor. Music thuds through your skates. Nothing is still.

**editorial voice**

WARM, exuberant, slightly campy. Roller-rink barker energy. Heart emojis welcome, exclamation marks frequent.

button labels: `Lace Up`, `Hit the Rink`, `Skate In`, `Take a Lap`, `Spin It`, `Boogie`, `Drop the Needle`, `Sign Me Up ♥`, `Reserve Lane`, `Light It Up`, `Last Call`. Mixed case, friendly, theatrical.

headings: marquee-style — `Saturday Night Skate ♥`, `Couples Only`, `All-Skate`, `Boogie Wonderland`, `The Main Event`, `Disco Inferno`, `Birthday Party Booking`, `Now Spinning`, `Tonight's Set`. Script-flourish or chrome-bubble. The `♥` glyph appears frequently as a flourish.

metadata: rink/lane/song format — `LANE 04 · PARTY OF 6`, `SESSION 9PM–MIDNIGHT`, `BPM 124`, `DJ STARLIGHT`, `EST. 1978`, `RINK 02 · SKATE SIZE 8`, `MEMBER #04832`. Always UPPERCASE monospace, mint-green or chrome.

placeholders: `your name on the marquee...`, `pick a song...`, `who's joining you?`, `party of how many?`, `what size skate?`. Lowercase, friendly, with ellipsis.

empty states: `Floor's empty. Be the first one out there ♥`, `No songs queued — drop one in!`, `The DJ booth is dark. Light it up.`, `Quiet rink. Start a lap.`.

error messages: `That move didn't land. Try again ♥`, `Skate-size mismatch — check the rack.`, `Lane's taken — pick another.`, `Session's full tonight. There's always tomorrow.`. Never harsh, always with a soft re-direct.

success messages: `You're in, sweetheart ♥`, `Saved — see you on the floor!`, `Locked in for the All-Skate.`, `Reservation confirmed ♥`, `Track queued up.`. Always with `♥` flourishes and a script-italic warmth.

confirmation prompts: `Cancel your lane?`, `Drop this song from the queue?`, `Sign out for the night?`.

**cursor & selection**

cursor: `cursor: default` globally — but interactive elements use `cursor: pointer`. Optional custom cursor: a small chrome-disk (mirror-ball facet) with a subtle pink glow. Inputs use `cursor: text`. Draggable: `cursor: grab` → `grabbing`.

text selection: `::selection { background: var(--hot-pink); color: var(--candy-cream); text-shadow: none; }` — the hot-pink highlighter swipe.

**when to reach for this genome**

Use this genome when the request calls for a roller disco, skating rink, disco-night event, party booking flow, DJ set page, retro nightlife venue, dance-class signup, rink roster, birthday reservation, skate rental, music queue, all-skate schedule, mirror-ball landing page, or any product that should feel like a 1970s/1980s rink full of neon, chrome, glitter, and motion.

Reach for it when the user wants hot pink, electric blue, violet, chrome glints, polished maple floors, mirror-ball sparkles, chase lights, script wordmarks, rounded bubble type, bouncy momentum, and warm campy copy. It is strongest when the interface can behave like a lit rink: buttons glow, panels shimmer, dividers strobe, cards rebound, and the atmosphere keeps moving even when the user is still.

Choose it for:
- skating-rink websites, party reservations, nightlife calendars, DJ lineups, music queues, dance events, birthday packages, and roller-skate rental flows.
- retro entertainment launches where the specific reference is disco, boogie, mirror balls, lurex, chrome, and polished rink flooring.
- playful membership, ticketing, or queue interfaces where saturated motion and theatrical warmth are desirable.
- campaigns that need a joyful, kinetic, nostalgic surface without becoming arcade-machine, casino, or drive-in signage.

Do not choose it for quiet luxury, museum/editorial pages, professional SaaS, healthcare, finance, civic services, serious dashboards, minimal portfolios, grunge streetwear, or arcade/pinball systems that need harder score-machine logic. Use `pinball_backglass.tilt` for arcade scoring and mechanical cabinet energy, `casino_floor.aces` for gambling/table-game metaphors, `drive_in_marquee.intermission` for retro cinema and roadside entertainment, `confectionery_box.sweet` for candy-colored premium packaging, and `modern_studio.pro` or `ambient_drift.aura` when the brief wants polished motion without disco excess.

**anti-patterns — this genome NEVER:**

1. uses 0px border-radius on UI components. Pill-and-oval shapes dominate; the only sharp-cornered elements allowed are the chrome-tile DJ-booth strips. Sharp UI reads as a hardware-store sign, not a roller disco.
2. uses muted, earth-tone, or "tasteful" color palettes. Hot pink, electric blue, violet, mint, chrome — these are SATURATED, fluorescent, neon-tube saturation. Pastels and earth tones contradict the rink's identity.
3. uses sterile, modern, sans-serif-only display typography. Display text is script (`Pacifico`) or rounded bubble (`Bowlby One`) — never Inter or Helvetica at hero scale. The wordmark is the marquee, not the dashboard.
4. uses linear, snappy, broadcast-graphic motion. Everything bounces, spring-overshoots, drifts. Linear transitions read as flat — the rink is built on momentum and rebound.
5. uses still, unanimated atmospheric layers. The mirror-ball sparkle drift, the floor-shine sweep, the chase-lights, the strobe-bar — at least one ambient layer must be perpetually in motion. Stillness is the anti-rink.
6. uses cold, corporate, clinical, or technical voice. The voice is roller-rink barker — warm, exuberant, slightly campy. Lots of `♥`, lots of script flourishes, lots of "sweetheart" energy. Never "Please click Submit to proceed" — always "Light It Up ♥".
7. uses dense, gridded, packed-information layouts. The rink layout is orbital and asymmetric — elements drift around a hot-pink centerpiece with generous breathing room. Dense grids read as spreadsheets, not dance floors.
8. uses pure black backgrounds. The dark backdrop is `--ink-dark` (deep eggplant-black, slightly warm) and is always overlaid with at least one radial-gradient color wash. Pure `#000` reads as a void; this genome is bathed in stagelight.
9. uses brutalist or grunge texture treatments. The surfaces here are POLISHED — waxed maple, chrome, lacquer, lurex. Texture comes from sparkle and reflection, not noise or scratch.
10. uses minimalist whitespace-heavy gallery layouts. The rink is busy — bulbs chase, sparkles drift, the strobe-bar scrolls. Minimal-quiet aesthetics belong to celestial_plate or modern_studio; this genome is the opposite end of the energy spectrum.
