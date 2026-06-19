---
id: "52"
name: vitreous_panel.frost
keywords:
  - glass
  - glassmorphism
  - frosted
  - translucent
  - blur
  - acrylic
  - vibrancy
  - fluent
  - floating
  - luminous
  - ios
  - control center
---

### genome 52: `vitreous_panel.frost`

> identity: material-realistic glass UI. iOS control center, Windows Fluent acrylic, macOS vibrancy panels — translucent surfaces with physical light behavior: top-edge highlights, inner depth shadows, refraction glow on focus, and atmospheric color bleed through every layer.

**surface**

colors:
```
--sky-top: #1A222E;                          /* gradient sky — dark slate apex */
--sky-bottom: #546B84;                       /* gradient sky — steel blue horizon */
--glass-fill: rgba(255, 255, 255, 0.08);    /* resting glass surface */
--glass-fill-elevated: rgba(255, 255, 255, 0.12); /* top of internal gradient on panels */
--glass-fill-recessed: rgba(255, 255, 255, 0.02); /* bottom of internal gradient on panels */
--glass-border: rgba(255, 255, 255, 0.15);  /* translucent border — visible but soft */
--glass-highlight: rgba(255, 255, 255, 0.45); /* inset top-edge light catch */
--glass-shadow: rgba(0, 0, 0, 0.15);        /* inset bottom shadow — depth */
--glass-drop: rgba(0, 0, 0, 0.25);          /* external drop shadow */
--text-primary: rgba(255, 255, 255, 0.95);  /* high-contrast white text */
--text-secondary: rgba(255, 255, 255, 0.5); /* muted labels, placeholders */
--text-ghost: rgba(255, 255, 255, 0.3);     /* faintest system labels */
--glow: rgba(140, 190, 255, 0.4);           /* cool blue focus/active glow */
--glow-subtle: rgba(140, 190, 255, 0.15);   /* ambient glow wash */
--accent: #8CBEFF;                           /* interactive accent — ice blue */
--accent-warm: #FFB574;                      /* secondary accent — amber signal */
--success: #7EDBA0;                          /* success — soft mint */
--danger: #FF7B7B;                           /* error — soft coral */
```

typography:
- primary: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` — the system font stack. this genome uses whatever the OS provides. weight 400 body, 500 labels, 600 headings.
- body text: 14–15px, `line-height: 1.5`, `letter-spacing: 0`.
- headings: 18–24px, `font-weight: 600`, `letter-spacing: -0.01em`. hierarchy through weight and size, never through decoration.
- labels/meta: 12–13px, `font-weight: 500`, `color: var(--text-secondary)`.
- small system text: 11px, `font-weight: 400`, `color: var(--text-ghost)`.
- maximum font size: 28px. scale is restrained — the glass material is the hero, not the typography.
- `-webkit-font-smoothing: antialiased` everywhere.

borders:
- panels/cards: `1px solid var(--glass-border)`. `border-radius: 16px`.
- buttons: `border-radius: 999px` (full pill). `1px solid var(--glass-border)`.
- inputs: `border-radius: 999px` (full pill). `1px solid var(--glass-border)`.
- small elements (badges, toggles): `border-radius: 12px`.
- borders are always visible — they define the glass edge. never borderless.
- border color shifts on interaction: hover brightens to `rgba(255, 255, 255, 0.25)`, focus shifts to `rgba(140, 190, 255, 0.3)`.

spacing:
- panel padding: `20px 24px`.
- section gap: `16px`.
- element gap within panels: `12px`.
- page padding: `24px`.
- comfortable but not lavish — panels are functional containers, not art objects.

**color distribution**

- 55% gradient sky (`--sky-top` through `--sky-bottom`) — the atmospheric backdrop that bleeds through all glass surfaces.
- 20% glass surfaces (`--glass-fill` and its gradients) — translucent panels floating in the sky.
- 10% text (`--text-primary`, `--text-secondary`) — crisp white type on frosted surfaces.
- 10% shadow and depth (`--glass-shadow`, `--glass-drop`, `--glass-highlight`) — the layered light simulation that makes glass feel physical.
- 5% accent glow (`--glow`, `--accent`) — focus states, active indicators, interactive highlights.

**component patterns**

buttons:
- primary: `background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%); backdrop-filter: blur(12px); border: 1px solid var(--glass-border); border-radius: 999px; padding: 10px 20px; color: var(--text-primary); font-size: 14px; font-weight: 500; box-shadow: inset 0 1px 1px var(--glass-highlight), inset 0 -1px 4px var(--glass-shadow), 0 4px 12px var(--glass-drop)`.
- accent: same glass treatment but `border-color: rgba(140, 190, 255, 0.3); box-shadow: inset 0 1px 1px var(--glass-highlight), inset 0 -1px 4px var(--glass-shadow), 0 4px 12px var(--glass-drop), 0 0 12px var(--glow-subtle)`. accent text `color: var(--accent)`.
- icon button: `width: 36px; height: 36px; border-radius: 50%; background: transparent; border: none; color: var(--text-secondary)`. glass treatment appears only on hover.
- all buttons: `cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`.

inputs:
- `background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(12px); border: 1px solid var(--glass-border); border-radius: 999px; padding: 0 16px; height: 44px; color: var(--text-primary); font-size: 15px; font-weight: 400`.
- placeholder: `color: var(--text-secondary)`.
- focus: `background: rgba(255, 255, 255, 0.08); border-color: rgba(140, 190, 255, 0.3); box-shadow: 0 0 16px var(--glow-subtle), inset 0 0 10px var(--glow-subtle)`. placeholder fades to `var(--text-ghost)`.
- label above: 12px, `font-weight: 500`, `color: var(--text-secondary)`, positioned 6px above input.

cards/panels:
- `background: linear-gradient(180deg, var(--glass-fill-elevated) 0%, var(--glass-fill-recessed) 100%); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid var(--glass-border); border-radius: 16px; box-shadow: inset 0 1.5px 1px var(--glass-highlight), inset 0 -2px 6px var(--glass-shadow), 0 10px 30px var(--glass-drop)`.
- the triple shadow stack is the genome's signature: top-edge highlight + inner depth + external drop. this creates the illusion of a real glass slab catching light from above.
- panels float — `margin: auto` centering, never edge-to-edge.

navigation:
- horizontal row of glass pill segments. `border-radius: 999px; background: var(--glass-fill); backdrop-filter: blur(12px); border: 1px solid var(--glass-border); padding: 4px`.
- nav items inside: `padding: 8px 16px; border-radius: 999px; color: var(--text-secondary); font-size: 13px; font-weight: 500`.
- active item: `background: rgba(255, 255, 255, 0.12); color: var(--text-primary); box-shadow: inset 0 1px 1px var(--glass-highlight)`.
- segmented control style — items within a shared glass container.

headers:
- glass bar: `border-radius: 999px; padding: 8px 8px 8px 20px; display: flex; align-items: center; justify-content: space-between`. same triple shadow as panels.
- title left: `font-size: 15px; font-weight: 600; color: var(--text-primary)`.
- action buttons right: icon buttons in a row, separated by glass dividers.

footers:
- minimal glass bar at bottom. same material treatment as headers. `padding: 12px 20px`. small text in `var(--text-ghost)`, centered.

lists:
- items separated by glass dividers (`1px solid rgba(255,255,255,0.08)`). each item: `padding: 12px 16px; color: var(--text-primary); font-size: 14px`.
- hover: `background: rgba(255, 255, 255, 0.04)`.
- active item: `background: rgba(140, 190, 255, 0.08); color: var(--accent)`.

tables:
- header row: `font-size: 12px; font-weight: 500; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--glass-border)`.
- body rows: `font-size: 14px; padding: 10px 16px; border-bottom: 1px solid rgba(255,255,255,0.05)`.
- alternating rows: odd `background: transparent`, even `background: rgba(255,255,255,0.02)`.

dividers:
- vertical: `width: 1px; height: 20px; background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)` — gradient fade, never hard lines.
- horizontal: `height: 1px; background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 100%)` — same gradient fade treatment.

modals/overlays:
- `background: linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%); backdrop-filter: blur(24px); border: 1px solid var(--glass-border); border-radius: 20px; box-shadow: inset 0 1.5px 1px var(--glass-highlight), inset 0 -2px 6px var(--glass-shadow), 0 20px 50px rgba(0,0,0,0.4)`.
- overlay backdrop: `background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px)` — the backdrop itself blurs, compounding with the modal's own blur.
- modal header: `font-size: 16px; font-weight: 600; padding: 20px 24px; border-bottom: 1px solid rgba(255,255,255,0.08)`.

badges/tags:
- `font-size: 11px; font-weight: 500; padding: 4px 10px; border-radius: 12px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1); color: var(--text-secondary); backdrop-filter: blur(8px)`.
- colored variants: `background: rgba(140, 190, 255, 0.12); color: var(--accent); border-color: rgba(140, 190, 255, 0.2)`.

**interaction language**

- hover (buttons): `background` brightens (`rgba(255,255,255,0.18)`). border brightens to `rgba(255,255,255,0.25)`. shadow deepens slightly. `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`.
- hover (icon buttons): `color: var(--text-primary); background: rgba(255,255,255,0.08)`.
- active/pressed: `transform: scale(0.96)`. shadow contracts. highlight intensifies. `transition: transform 0.1s ease`.
- focus: `border-color: rgba(140, 190, 255, 0.3); box-shadow: inset 0 1.5px 1px rgba(255,255,255,0.6), inset 0 -2px 6px var(--glass-shadow), 0 10px 40px rgba(0,0,0,0.3), 0 0 20px var(--glow-subtle), inset 0 0 12px var(--glow-subtle)`. the glass illuminates from within — this is the signature focus state.
- selected: `background: rgba(140, 190, 255, 0.12); border-color: rgba(140, 190, 255, 0.25); color: var(--accent)`. subtle blue tint through the glass.
- disabled: `opacity: 0.35; pointer-events: none`. glass becomes nearly invisible — the element fades into the sky.
- drag: `cursor: grabbing; transform: scale(1.02); box-shadow: inset 0 1.5px 1px var(--glass-highlight), inset 0 -2px 6px var(--glass-shadow), 0 20px 50px rgba(0,0,0,0.35)`. element lifts — deeper drop shadow, same glass material.

**motion & feedback**

transitions:
- default: `0.3s cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) on background, border-color, box-shadow, color. this is the signature easing — fast initiation, graceful deceleration.
- transform: `0.2s cubic-bezier(0.16, 1, 0.3, 1)` — slightly faster for scale/translate.
- expanding/collapsing elements (search bars, drawers): `0.4s cubic-bezier(0.16, 1, 0.3, 1)` on width, height, max-height. the glass panel morphs fluidly.
- all motion is smooth and deliberate. nothing snaps, nothing bounces. glass is a calm material.

loading:
- pulsing glow: panel border oscillates between `var(--glass-border)` and `rgba(140, 190, 255, 0.25)` on a 2s cycle. the glass gently breathes.
- text: `Searching...` or `Loading...` in `var(--text-secondary)`, sentence case.

success:
- panel border briefly flashes `rgba(126, 219, 160, 0.4)` (mint). `box-shadow` expands with green-tinted glow for 600ms, then settles. the glass flushes with color.

error:
- panel border shifts to `rgba(255, 123, 123, 0.3)` (coral). gentle pulse, not a hard flash. error text in `var(--danger)`, regular weight.

**atmosphere**

- background: `background: linear-gradient(180deg, var(--sky-top) 0%, var(--sky-bottom) 100%)` — a twilight gradient that reads as atmospheric sky, not flat color. the gradient bleeds through every glass surface via `backdrop-filter: blur()`, tinting each panel with its position in the sky.
- the blur bleed is the defining atmospheric effect: panels near the top of the page appear slightly cooler (more slate), panels near the bottom appear slightly warmer (more steel blue). the UI feels embedded in an environment, not painted on a canvas.
- inset highlights: every glass surface has `inset 0 1.5px 1px var(--glass-highlight)` — a thin bright line along the top edge simulating overhead light refracting through the glass. this is non-negotiable. it is what makes the glass look like glass.
- layered depth: the triple shadow stack (highlight + inner shadow + drop shadow) appears on every elevated glass surface. this creates physical depth without hard edges.
- no textures, no noise, no grain, no scanlines. glass is optically clean.
- no WebGL, no shaders, no particles. atmosphere comes from CSS only — gradients, blur, and layered shadows.
- optional: subtle `radial-gradient(circle at 30% 20%, rgba(140, 190, 255, 0.06) 0%, transparent 50%)` on the body for a soft ambient light source.

**editorial voice**

button labels: `Search`, `Apply`, `Cancel`, `Done`, `Continue`, `Add Filter`, `Clear All`, `Save`. sentence case. brief, plain, functional. the voice of an OS, not a brand. never clever, never urgent.

headings: sentence case, short noun phrases. `Notifications`, `Quick Settings`, `Search Results`, `Recent Files`, `System Preferences`. 1–3 words. no punctuation. no verbs.

metadata: plain system style. `3 items`, `Updated today`, `2.4 GB available`, `Wi-Fi connected`. sentence case, natural language, no technical formatting.

placeholders: `Search commands, files...`, `Type a message`, `Enter URL`, `Filter by name...`. sentence case, ellipsis-terminated for search contexts.

empty states: `No results found`, `Nothing here yet`, `No notifications`. plain, factual, not emotional. no illustrations, no emoji.

error messages: `Couldn't connect. Check your network and try again.`, `Something went wrong.`, `File not found.`. human but impersonal. sentence case, periods. never apologetic ("sorry"), never casual ("oops").

success messages: `Saved.`, `Connected.`, `Upload complete.`, `Settings updated.`. one-word or short phrase, past tense, period. stated as fact.

**cursor & selection**

- default: `cursor: default` on body.
- interactive elements: `cursor: pointer` on buttons, links, clickable list items.
- text inputs: `cursor: text`.
- drag targets: `cursor: grab`, active: `cursor: grabbing`.
- resize handles: `cursor: ns-resize`, `cursor: ew-resize`.
- `::selection { background: rgba(140, 190, 255, 0.3); color: var(--text-primary); }` — ice-blue translucent selection, maintaining the glass metaphor even in text highlighting.

**when to reach for this genome**

Use `vitreous_panel.frost` when the prompt asks for realistic frosted glass, OS-native acrylic panels, iOS Control Center, Windows Fluent, macOS vibrancy, translucent utility overlays, settings surfaces, command palettes, search panels, file/system widgets, notification centers, or a generic app interface where the material behavior of glass is the main visual idea.

Reach for it when the concrete cues are translucent panels over a colored backdrop, `backdrop-filter: blur`, visible glass borders, top-edge highlights, inner depth shadows, external drop shadows, soft rounded panels, pill controls, system fonts, muted white text, ice-blue focus glow, and plain OS-style copy such as `Search`, `Apply`, `Done`, `No results found`, `Saved.`, or `Connected.`

Do not use it for biometric access terminals, neural uplinks, shader arcs, protocol copy, polarity inversion, or sci-fi identity systems; use `aura_protocol.sys`. Do not use it for premium rose-petal lifestyle apps, Playfair serif headings, pastel editorial cards, smart-home wellness controls, or luxury beauty softness; use `petal_editorial.soft`. Do not use it for warm cream canvases, floating organic blobs, voice-first calm, or lowercase companion copy; use `ambient_drift.aura`. Do not use it for iPod hardware, click wheels, Aqua list selection, brushed aluminum, or pocket music players; use `clickwheel_pod.aqua`. Do not use it for deep-ocean bioluminescence, organic glows, jellyfish/plankton atmospheres, or dark translucent marine panels; use `abyssal_bloom.deep`. Do not use it for WebGL liquid shaders, neon metaballs, glossy fluid simulations, or razor-thin data-art glass; use `viscous_flux.gl`.

It is strongest when glass itself is the product language: layered, rounded, translucent controls floating over an atmospheric but non-narrative background. If the prompt's glass is actually sci-fi access, wellness editorial, hardware nostalgia, living ocean light, or liquid shader spectacle, route to the specialized genome instead.

**anti-patterns — this genome NEVER:**

1. uses opaque solid backgrounds on elevated surfaces. every panel, card, modal, and bar is translucent with `backdrop-filter: blur`. the sky always bleeds through.
2. uses sharp corners (`border-radius: 0`) on interactive elements. minimum radius is 12px on small elements, 16px on panels, 999px on buttons/inputs. glass has no sharp edges.
3. uses flat surfaces without the triple shadow stack (highlight + inner shadow + drop shadow). a glass surface without physical light simulation is just a div.
4. uses bold/heavy display typography (700+) for decorative emphasis. maximum weight is 600. the glass is the visual spectacle, not the type.
5. uses hard-edged dividers or full-opacity borders. all structural lines use gradient fades or low-opacity values. separation is soft, not sharp.
6. uses dark/black backgrounds behind glass panels. the background is always a gradient sky with color variation — the whole point of glass is seeing through to something with color.
7. uses decorative illustrations, emoji, or branded iconography. the aesthetic is OS-native utility, not product personality.
8. uses monospace or pixel fonts. this genome uses the system font stack exclusively — it inherits the platform's native voice.
9. uses neon, saturated, or high-chroma accent colors. the palette is muted and atmospheric: ice blue, soft coral, pale mint. colors feel filtered through frosted glass, never raw.
10. uses instant state changes without transitions. every interaction animates with the expo-out curve. glass is a smooth material — nothing about it is abrupt.
