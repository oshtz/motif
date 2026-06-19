---
id: "37"
name: darkroom_proof.contact
keywords:
  - darkroom
  - contact sheet
  - safelight
  - analog photography
  - film grain
  - chemical process
  - red light
  - negatives
  - sprocket holes
  - exposure
  - print developing
  - photographic proof
---

### genome 37: `darkroom_proof.contact`

> identity: analog photographic darkroom under red safelight. contact sheets pinned on a line, chemical trays of developer and fixer, sprocket holes along film strips, and the slow materialization of an image in the bath. this is the red-lit room where negatives become prints — chemical, tactile, patient.

**surface**

colors:
```
--safelight: #8B1A1A;
--void: #0D0A0A;
--paper: #F5F0E8;
--darkpanel: #3D1515;
--filmbase: #1A1210;
--frameline: #F5F0E8;
--chemical: #6B2020;
--contact-border: #C8C0B4;
```

- typography: `"Barlow Condensed", "Arial Narrow", sans-serif` for frame numbers, navigation, labels, and UI elements at `font-weight: 500`. `"IBM Plex Mono", "Courier New", monospace` for EXIF data, technical readouts, and metadata at `font-weight: 400`. `letter-spacing: 0.06em` on labels (wide, stenciled). sizes: display 28–40px, headers 16–22px, body 12–13px, meta/EXIF 10–11px. labels: `text-transform: uppercase`.
- borders: `0px border-radius` on frame cells and image containers — photographic contact sheet cells are always rectangular. `2px solid var(--frameline)` = film border around image frames. `1px solid var(--chemical)` for panel dividers. sprocket-hole decorative edges: repeating `8px × 12px` rounded-rect cutouts along strip borders.
- spacing: dense contact-sheet grid. `padding: 8px; gap: 2px` between frames. panel padding: `16px`. the layout is tight, systematic — rows of frames packed edge to edge like a real proof sheet.

**color distribution**
- 50% void (`--void`) — the dominant near-black darkroom canvas. everything floats in darkness.
- 20% darkpanel (`--darkpanel`) — panels, sidebars, card backgrounds. dim red-tinted surfaces.
- 15% paper (`--paper`) — exposed/developed content areas, text on dark backgrounds, image placeholders representing photographic paper.
- 10% safelight (`--safelight`) — accent color, active states, glowing indicators, the red safelight cast. used for interactive highlights and focus rings.
- 5% chemical (`--chemical`) — secondary accents, hover states, borders. the murky red-brown of developing chemicals.

**component patterns**
- buttons: `background: var(--darkpanel); color: var(--paper); border: 1px solid var(--chemical); border-radius: 0px; padding: 10px 20px`. primary/CTA: `background: var(--safelight); color: var(--paper)`. subtle inner shadow: `box-shadow: inset 0 1px 2px rgba(0,0,0,0.4)`. text in Barlow Condensed, uppercase, letter-spaced.
- inputs: `background: var(--filmbase); border: 1px solid var(--chemical); border-radius: 0px; color: var(--paper); padding: 10px 14px; font-family: "IBM Plex Mono"`. focus: `box-shadow: 0 0 0 2px var(--safelight); border-color: var(--safelight)`.
- cards/panels: `background: var(--darkpanel); border: 1px solid var(--chemical); border-radius: 0px`. optional top accent: `border-top: 2px solid var(--safelight)`.
- navigation: horizontal strip of text links in Barlow Condensed uppercase. active: `color: var(--safelight); border-bottom: 2px solid var(--safelight)`. inactive: `color: var(--contact-border); opacity: 0.6`.
- headers: `background: var(--void); color: var(--paper); border-bottom: 1px solid var(--chemical)`. frame-counter style label on the left in IBM Plex Mono: `FR 001`.
- footers: `background: var(--filmbase); color: var(--contact-border); border-top: 1px solid var(--chemical)`. technical strip: exposure data, timestamps in monospace.
- lists: rows separated by `1px solid rgba(139,26,26,0.2)`. active row: `background: var(--darkpanel); border-left: 3px solid var(--safelight)`.
- tables: `border: 1px solid var(--chemical)`. header: `background: var(--darkpanel); color: var(--paper)`. cells: `background: var(--void); color: var(--contact-border)`. all corners 0px.
- dividers: `1px solid var(--chemical)`.
- modals: `background: var(--darkpanel); border: 2px solid var(--safelight); border-radius: 0px`. backdrop: `rgba(13,10,10,0.92)` — almost total darkness.
- badges: `background: var(--safelight); color: var(--paper); border-radius: 0px; font-size: 10px; font-family: "IBM Plex Mono"; padding: 2px 8px`.
- **contact sheet grid** (signature element): CSS grid of equal rectangular cells, `2px solid var(--frameline)` border on each. frame number in top-left corner (`font-size: 9px; font-family: "IBM Plex Mono"; color: var(--contact-border)`). cells have no radius, no gap — edge to edge with the white film border separating them. along the top and bottom edges of each strip: sprocket-hole pattern via repeating background or pseudo-elements.
- progress bars: `height: 4px; background: var(--filmbase); border-radius: 0px; border: 1px solid var(--chemical)`. fill: `background: var(--safelight); box-shadow: 0 0 8px rgba(139,26,26,0.4)`.
- **film strip element**: horizontal or vertical strip with sprocket holes on both edges. `background: var(--filmbase); border: 2px solid var(--frameline)`. sprocket holes: `8px × 12px` rounded-rect shapes repeated every 20px along the strip edge, punched out via CSS mask or pseudo-elements.

**interaction language**
- hover: dim red glow: `box-shadow: 0 0 12px rgba(139,26,26,0.4)`. `transition: all 0.4s ease`.
- active/pressed: `background: var(--safelight); color: var(--paper)`. shadow deepens: `box-shadow: 0 0 20px rgba(139,26,26,0.6)`.
- focus: `outline: 2px solid var(--safelight); outline-offset: 1px`.
- selected: `background: var(--darkpanel); border-color: var(--safelight); box-shadow: 0 0 8px rgba(139,26,26,0.3)`.
- disabled: `opacity: 0.25; filter: grayscale(0.8)`.
- drag: dark red trailing shadow: `box-shadow: 0 8px 24px rgba(139,26,26,0.3)`.

**motion & feedback**
- transitions: `transition: all 0.4s ease`. slower than typical — deliberate, chemical-process pacing.
- loading: a slow fade-in from pure black. the element materializes like a print developing in a chemical tray — opacity 0 → 1 over `1.5s ease-in`. content areas may reveal top-to-bottom with a soft wipe.
- success: safelight glow pulses once — `box-shadow: 0 0 30px var(--safelight)`, holds 300ms, eases back over 600ms.
- error: border flashes bright red (`#CC2222`), pulses once, returns to chemical over 400ms.
- page enter: elements fade in staggered over `1.5–2s` with `ease-in` timing — like successive prints developing in a tray. no spring physics. no bounce. slow, chemical, inexorable.

**atmosphere**
- background: `var(--void)` — near-total darkness. a very subtle radial gradient from center: `radial-gradient(ellipse at 50% 30%, rgba(139,26,26,0.06) 0%, transparent 70%)` — the ambient red glow of a safelight on the ceiling.
- film grain noise overlay on the body: CSS noise texture or SVG filter at `opacity: 0.04` — the visible grain of high-ISO film.
- panels have a dark vignette: `box-shadow: inset 0 0 30px rgba(0,0,0,0.3)`.
- images: `filter: contrast(1.1) brightness(0.9) saturate(0.3)` — desaturated, high-contrast, like a darkroom proof. optional red-cast: `sepia(0.2) hue-rotate(-10deg)`.
- the overall feel is RED DARKNESS — a room illuminated only by safelight, where white paper glows and everything else recedes into shadow.

**editorial voice**
- button labels: process-oriented, photographic. `Develop`, `Print`, `Expose`, `Fix`, `Contact`, `Proof`, `Enlarge`, `Strip`. title case.
- headings: technical, minimal, stencil-like. `Contact Sheet`, `Proof Archive`, `Exposure Log`, `Print Queue`, `Negative Index`. title case.
- metadata: exposure/EXIF readout style. `FR 024`, `f/2.8 · 1/125 · 400`, `35mm · TRI-X`, `DEV: D-76 1:1 · 8min`, `STRIP 04 OF 12`.
- placeholders: `Search negatives...`, `Enter frame number...`, `Roll ID`.
- empty states: `No exposures`, `Contact sheet empty`, `Awaiting development`.
- error messages: `Exposure failed`, `Print rejected`, `Chemical exhausted`.
- success messages: `Developed`, `Fixed`, `Print ready ●`.

**cursor & selection**
- cursor: `default` globally. `pointer` on interactive elements.
- text selection: `::selection { background: var(--safelight); color: var(--paper); }`.

**anti-patterns — this genome NEVER:**
- uses rounded corners (border-radius > 0px on content frames). contact sheet cells and photographic frames are always sharp rectangles.
- uses pure white (#FFFFFF) as a background. the lightest surface is `--paper` (#F5F0E8) — the off-white of photographic paper.
- uses cool colors (blue, cyan, teal, purple). the palette is exclusively warm: red, black, cream, brown.
- uses bouncy or spring-based animations. all motion is slow, linear, fade-based — chemical developing, not digital snapping.
- uses serif fonts. only condensed sans-serif (Barlow Condensed) and monospace (IBM Plex Mono).
- uses drop shadows with visible offset (e.g., `4px 4px`). shadows are always soft glows or inset vignettes.
- uses bright or saturated orange (that's panavision.70s territory). the accent here is deep blood-red safelight, never amber or warm orange.
- uses squircle shapes or large border-radius (that's panavision.70s). everything is rectangular, hard-edged, film-strip geometry.
- uses amber/phosphor CRT aesthetics (scanlines, electron-gun artifacts — that's phosphor_telemetry.amb). this is chemical photography, not screens.
- uses light backgrounds or cream-dominant layouts. the canvas is DARK — near-black void with red accents. the room is lit only by safelight.

**when to reach for this genome**

When the request is for a photography portfolio, an analog-craft brand site, a film-lab tool, an archival image management UI, or any artifact that should feel like it lives in the slow chemical patience of a darkroom. Reach for it when the user wants chemical-photography atmosphere rather than digital-camera UX (that's precision_optics.lens) and red-safelight darkness rather than amber-CRT glow (that's underground_terminal.crt).

**page archetype guidance**

- landing page: dark void background, contact-sheet hero grid showing 12–24 numbered frames, hero title in Barlow Condensed uppercase, red safelight accent on a single CTA, EXIF-style monospace metadata strip at the bottom.
- portfolio: contact-sheet grid as the primary layout — each project a numbered frame with `FR 014` in the corner, click expands to detail view; sprocket-hole bordered film strips between sections.
- detail view: large center image with `paper` background mounting, EXIF data table in monospace below, red-bordered metadata panel on the right with exposure/developer/strip annotations.
- about/process: long-form pages with slow fade-in materializing transitions, technical specs in monospace, red rule dividers, no playful imagery — process photographs in grayscale only.

**signature techniques**

- contact-sheet grid: CSS grid of equal `aspect-ratio: 3/2` cells with `2px solid var(--frameline)` borders, frame-number tags in `FR 001` format at top-left of each cell — the literal contact-print proof layout.
- sprocket-hole borders: along the top/bottom edges of strip elements, `8px × 12px` rounded-rect cutouts repeated every 20px via CSS `mask-image` or SVG patterns — the perforated edges of 35mm film.
- chemical-developing transitions: opacity 0 → 1 over `1.5s ease-in` — content materializes like a print emerging in a developer tray. NEVER snap, never fast.
- safelight radial glow: hero areas use `radial-gradient(ellipse at 50% 30%, rgba(139,26,26,0.06) 0%, transparent 70%)` — the ambient red wash of a ceiling-mounted safelight.
- film-grain noise overlay: a CSS noise texture at `opacity: 0.04` on the body — the visible grain of high-ISO film.
- EXIF metadata format: `f/2.8 · 1/125 · 400`, `35mm · TRI-X`, `DEV: D-76 1:1 · 8min` — always monospace, always `·`-separated, never colon-separated.
- desaturated image filter: `filter: contrast(1.1) brightness(0.9) saturate(0.3)` on all photographs — the high-contrast low-saturation look of a darkroom proof print.
