---
id: "21"
name: figmint_desktop.84
keywords:
  - macintosh
  - personal computer
  - 1984
  - retro desktop
  - beige box
  - serif
  - floppy
  - classic computing
  - product launch
  - warm retro
  - hello
  - desktop publishing
  - apple
  - retro computer
---

### genome 21: `figmint_desktop.84`

> identity: 1984 personal computer revolution. warm beige plastic casings, serif editorial typography, CRT desktop GUIs, floppy disk slots, and the optimistic promise of "the computer for the rest of us." apple keynote meets the original macintosh unboxing.

**surface**

colors:
```
--bg: #f4f1e6;           /* warm parchment page background */
--beige-light: #F0EDE0;  /* highlight plastic surface */
--beige-main: #E0DCCF;   /* primary plastic casing */
--beige-dark: #C4C0B3;   /* recessed plastic, shadow side */
--beige-shadow: #A09C8F;  /* deep shadow, undersides */
--ink: #0f0f0f;           /* near-black ink for text and borders */
--screen-black: #222529;  /* CRT screen background */
--screen-glow: #3E434C;   /* CRT ambient glow */
--accent-blue: #2B6CB0;   /* cool accent — links, system icons */
--accent-orange: #C05621; /* warm accent — badges, alerts, stickers */
--white-glow: #ffffff;    /* CRT text, cursor, bright highlights */
--mid-gray: #444444;      /* secondary body text */
```

typography:
- display/headings: `'EB Garamond', 'Apple Garamond', Garamond, 'Times New Roman', serif`. weight 400-600. sizes 36-80px. `letter-spacing: -2px` at display scale. `line-height: 0.85-0.95` for tight headlines. italic variant used for product names and emphasis.
- body/lead: same serif stack. 18-24px. `letter-spacing: -0.5px`. `line-height: 1.2`. `color: var(--mid-gray)` for secondary text.
- technical/specs/metadata: `'VT323', 'Courier New', Courier, monospace`. 12-16px. used for prices, spec values, screen UI text, timestamps.
- labels/spec headings: serif or sans-serif, `text-transform: uppercase`, `letter-spacing: 1px`, `font-size: 0.8rem`.

borders:
- hardware panels: `border: 1px solid rgba(0,0,0,0.05)`. no visible hard borders on plastic surfaces — depth conveyed through `box-shadow` and gradient.
- buttons: `border: 2px solid var(--ink)`. `border-radius: 8px`.
- screen bezels: `border-radius: 16px` with heavy inset shadows.
- CRT screens: `border-radius: 40% 40% 40% 40% / 10% 10% 10% 10%` (barrel distortion shape).
- cards/panels: `border-radius: 0px` for hardware surfaces. `border-radius: 2-4px` for on-screen windows.
- general rule: rounded where organic/friendly (buttons, screens), square where industrial (cases, keyboards, panels).

spacing:
- generous. `padding: 4rem` on main containers. `gap: 2rem` between spec items. layouts breathe — this is a product showcase, not a dense dashboard.
- grid layouts: two-column for content/product splits. `grid-template-columns: 1fr 1.2fr`.

**color distribution**

- 55% warm parchment/beige (`--bg`, `--beige-light`, `--beige-main`) — the plastic casing dominates
- 20% ink black (`--ink`, `--screen-black`) — text, screen voids, strong contrast
- 10% beige shadows (`--beige-dark`, `--beige-shadow`) — depth, recessed surfaces
- 10% mid-gray (`--mid-gray`) — secondary text, subtle UI elements
- 5% accent blue + orange (`--accent-blue`, `--accent-orange`) — sparingly, for icons, stickers, interactive highlights

**component patterns**

buttons: `background: var(--ink); color: var(--bg); padding: 1rem 2rem; font-size: 1.25rem; font-family: serif; border: 2px solid var(--ink); border-radius: 8px; cursor: pointer; transition: all 0.2s ease`. on hover: `background: transparent; color: var(--ink)`. secondary buttons: `background: transparent; color: var(--ink); border: 2px solid var(--ink)`.

inputs: `background: var(--beige-light); border: 2px solid var(--beige-dark); border-radius: 4px; padding: 0.75rem 1rem; font-family: serif; font-size: 1rem`. focus: `border-color: var(--ink); box-shadow: inset 2px 2px 4px rgba(0,0,0,0.1)`. placeholder text in monospace, lighter color.

cards/panels: two modes. "hardware" cards: `background: linear-gradient(135deg, var(--beige-light), var(--beige-main)); box-shadow: inset 2px 2px 5px rgba(255,255,255,0.8), inset -5px -5px 15px rgba(0,0,0,0.1)`. no border-radius. "screen" cards: `background: #fff; border-radius: 2px; box-shadow: 2px 2px 0 rgba(0,0,0,0.5); font-family: monospace; padding: 5px`.

navigation: sidebar layout with icon-circle indicators. `width: 30%; border-right: 1px solid rgba(255,255,255,0.2)`. items stacked vertically with `gap: 6px`. icon circles: `width: 8px; height: 8px; border-radius: 50%` in accent-blue or accent-orange.

headers: large serif display text with italic product names. `font-size: 5rem; line-height: 0.85; letter-spacing: -2px; font-weight: 500`. split across multiple `<span>` lines for typographic control.

footers: minimal. monospace spec grids. `display: grid; grid-template-columns: 1fr 1fr; gap: 2rem`. spec labels uppercase, values in monospace.

lists: icon-circle prefix + label. no bullets. `display: flex; align-items: center; gap: 4px`. separator: none (spacing only).

tables: spec-grid style. `grid-template-columns: 1fr 1fr`. header cells: `text-transform: uppercase; letter-spacing: 1px; font-size: 0.8rem`. value cells: monospace.

dividers: `border-bottom: 1px dotted var(--ink)` for on-screen windows. no dividers on hardware surfaces — use shadow gradients instead.

modals/overlays: "window" style. `background: #fff; color: #000; border-radius: 2px; box-shadow: 2px 2px 0 rgba(0,0,0,0.5)`. window header with title and `[x]` close in monospace, `border-bottom: 1px dotted #000`.

badges/tags: sticker aesthetic. round: `border-radius: 50%; width: 40px; height: 40px; background: var(--accent-orange)`. rectangular: `background: #8B0000; color: #F0E68C; font-family: monospace; font-size: 6px; font-weight: bold; letter-spacing: 0.5px`. square with icon: `background: #fff; border-radius: 8px; border: 2px solid #fff`.

**interaction language**

- hover: buttons invert (`background: transparent; color: var(--ink)`). 3D objects rotate subtly toward viewer (`transform: rotateY(-5deg) rotateX(2deg)`). `transition: all 0.2s ease` for flat elements, `transition: transform 0.5s ease-out` for 3D scenes.
- active/pressed: keyboard keys depress physically: `transform: translateZ(-2px) translateY(5px); box-shadow: 0 1px 0 #C4C0B3`.
- focus: `border-color: var(--ink); box-shadow: 0 0 0 2px var(--accent-blue)`. visible but not harsh.
- selected: `background: var(--ink); color: var(--bg)`. solid fill inversion.
- disabled: `opacity: 0.4; cursor: not-allowed`. beige-shadow color replaces ink.
- drag: `cursor: grab` / `cursor: grabbing`. `box-shadow: 0 8px 20px rgba(0,0,0,0.2)`. slight lift.

**motion & feedback**

- transitions: present but restrained. `transition: all 0.2s ease` for UI elements. `transition: transform 0.5s ease-out` for 3D perspective shifts. never flashy — elegant, physical.
- loading: typewriter animation. characters appear one at a time with `100ms + random(50ms)` delay. blinking cursor: `animation: blink 1s step-end infinite` (opacity 1→0→1).
- success: typewriter completes its message. brief pause (3s), then text clears and retypes. no confetti, no color flash.
- error: screen flicker — `opacity` dip to 0.95 for 100ms. error text appears in monospace on the CRT.
- keyboard keys animate presses on staggered timings: `animation: typeKey 1.2-2.5s infinite` with varied delays. creates ambient "someone is working" feel.

**atmosphere**

- CRT scanlines: `::before` pseudo-element with `background: linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%); background-size: 100% 2px`. RGB subpixel overlay: `linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06)); background-size: 3px 100%`.
- plastic surface depth: `box-shadow: inset 2px 2px 5px rgba(255,255,255,0.8), inset -5px -5px 15px rgba(0,0,0,0.1)` for lit surfaces. `box-shadow: inset 10px 0 20px rgba(0,0,0,0.05-0.1)` for side faces.
- CRT glow: `text-shadow: 0 0 2px rgba(255,255,255,0.5)` on screen text.
- 3D perspective: `perspective: 2000px` on product containers. objects use `transform-style: preserve-3d` with default viewing angle `rotateY(-15deg) rotateX(5deg)`. on hover, shifts to `rotateY(-10deg) rotateX(3deg)` via `transition: transform 0.5s ease-out`.
- ground shadow: `box-shadow: 0 50px 80px rgba(0,0,0,0.3)` beneath hardware. heavy, grounding.
- warm page: `background-color: #f4f1e6` — never pure white. the entire page feels like aged paper or a product catalog.
- sticker culture: decorative sticker elements placed on hardware surfaces. round, square, and rectangular badges at random static rotations (range: `-15deg` to `15deg`, assigned per sticker). layered with `translateZ` for subtle depth on 3D objects.
- rainbow logo badge: six-color vertical stripe in apple-style shape. nostalgic, humanizing detail.

**editorial voice**

button labels: "Order Fig Mint", "Get Started", "Learn More", "See Inside", "Try It Now", "Reserve Yours". warm, inviting imperative. serif-rendered. never technical jargon.

headings: large serif, often split across lines. italic for product names. example: "Introducing / *Fig Mint.*" — sentence case, minimal punctuation, dramatic pause between lines. headline as event announcement.

metadata: monospace. prices formatted `$2,495.00` with full decimals. specs as label/value pairs: "Processor — Neural Engine", "Memory — 512K Synapse", "Storage — 5.25\" Floppy", "Display — 9\" Phosphor". units always included.

placeholders: monospace, lowercase. "type something...", "enter your name", "search files...". conversational but quiet.

empty states: friendly, personified. "Nothing here yet. Your desk is clean." / "No files found. Try inserting a disk." the computer speaks like a helpful assistant from 1984.

error messages: gentle, non-technical. "Something went wrong. Please try again." / "File not found. Check the disk." monospace, on CRT screen. never alarming.

success messages: warm confirmation. "Done. Your file is saved." / "Good morning. Your memo is drafted, your files are sorted, and your calendar is set. Ready when you are." typewritten, unhurried.

**cursor & selection**

- default body: `cursor: default`
- interactive elements: `cursor: pointer`
- text: `cursor: text`
- draggable: `cursor: grab` → `cursor: grabbing`
- `::selection { background: var(--ink); color: var(--bg); }` — inverted beige-on-black.

**when to reach for this genome**

Use `figmint_desktop.84` when the prompt asks for an original Macintosh-inspired interface, 1984 personal computer launch page, beige CRT desktop, classic desktop-publishing workspace, floppy-disk file browser, warm retro computer product showcase, Finder-like window system, friendly early-computing assistant, vintage Apple-style announcement, or "computer for the rest of us" optimism rendered as a web UI.

Reach for it when the user wants warm parchment and beige plastic, inset hardware shadows, CRT scanlines, Garamond display headlines, monospace screen/file text, floppy slots, vent grilles, rainbow logo badges, sticker details, typewriter loading, spec grids, editorial product-launch composition, and copy like `Introducing Fig Mint.`, `No files found. Try inserting a disk.`, or `Good morning. Your memo is drafted...`.

Do not use it for modern premium Apple-like SaaS, sleek creative-suite dashboards, violet/chartreuse polish, or contemporary app-store professionalism; use `modern_studio.pro`. Do not use it for mid-2000s iPod/Aqua media players, click wheels, playlist browsers, Cover Flow, or brushed-aluminum pocket hardware; use `clickwheel_pod.aqua`. Do not use it for 1989 handheld gaming, green LCD constraints, cartridges, dithered sprites, or Game Boy-style controls; use `handheld_gb.dmg`. Do not use it for GeoCities, Angelfire, tiled starfields, guestbooks, visitor counters, browser-default buttons, or 1997 personal homepages; use `geocities_page.www`. Do not use it for modern developer platforms, bento grids, white-canvas documentation, embedded terminals, GitHub/Notion/Vercel-style surfaces, or austere technical marketing; use `kernel_grid.dev`. Do not use it for literary book interfaces, drop caps, Penguin-style reading rooms, or letterpress manuscripts; use `manuscript_press.lit`. Do not use it for civil-service forms, carbon copies, typewritten dossiers, routing slips, or bureaucratic paper archives; use `typewriter_carbon.duplicate`.

It is strongest when the product is a friendly retro computer or a launch-page fantasy about one: files, memos, desktop publishing, disk insertion, product specs, CRT windows, and warm hardware-as-character. If the prompt centers on a modern app surface, handheld device, old-web homepage, developer docs, book publishing, or paper bureaucracy, choose another genome.

**anti-patterns — this genome NEVER:**

1. uses flat, shadowless surfaces — every hardware element has inset shadows and gradients that convey physical depth and plastic materiality
2. uses neon, saturated, or high-chroma accent colors — accents are muted blue (#2B6CB0) and burnt orange (#C05621), never electric
3. uses sans-serif for display typography — headings are always serif (Garamond family). monospace is reserved for technical/screen content only
4. uses pure white (#ffffff) backgrounds for the page — the background is always warm parchment (#f4f1e6) or beige
5. uses sharp, aggressive interactions — no hard snaps, no flashing, no screen shake. all motion is gentle and physical
6. uses dark mode as default — this is a warm, light, optimistic aesthetic. the only dark areas are CRT screens
7. uses generic card grids or dashboard layouts — composition is editorial and product-showcase-oriented: hero splits, spec grids, 3D product views
8. uses emoji, playful illustrations, or cartoon iconography — decoration comes from physical objects: stickers, logo badges, vent grills, floppy slots
9. uses more than two type families simultaneously — one serif (Garamond) and one monospace (VT323/Courier). no third family
10. uses thin hairline borders or invisible separators — borders are either absent (shadow-defined) or clearly visible (2px solid). nothing in between
