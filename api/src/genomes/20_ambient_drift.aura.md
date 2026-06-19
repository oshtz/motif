---
id: "20"
name: ambient_drift.aura
keywords:
  - ambient
  - drift
  - organic
  - blob
  - aura
  - wellness
  - spatial
  - calm
  - floating
  - soft
  - mindful
  - gentle
  - meditation
  - breathing
  - voice assistant
---

### genome 20: `ambient_drift.aura`

> identity: ambient spatial computing. warm organic blobs drifting on cream canvas — wellness app meets lava lamp meets voice-first interfaces. everything floats, breathes, and dissolves.

**surface**

colors:
```
--canvas: #FAF7F2;        /* warm parchment cream */
--text-primary: #2A2A2A;  /* soft near-black */
--text-muted: #82817D;    /* warm mid-gray */
--text-ghost: #B4B3AD;    /* faded stone */
--amber: #F4A261;         /* warm amber */
--terracotta: #E76F51;    /* burnt terracotta */
--violet: #6D597A;        /* dusty violet */
--mauve: #B5838D;         /* soft mauve */
--sage: #588157;          /* deep sage */
--moss: #A3B18A;          /* light moss */
--peach: #F28482;         /* warm coral-peach */
--blush: #FFB5A7;         /* pale blush */
--surface: #FFFFFF;       /* card white */
```

typography:
- primary: `'Inter', -apple-system, sans-serif` — weight 400 for body, 500 for emphasis. never bold/700+.
- system/meta: `'JetBrains Mono', monospace` — weight 400-500, 11px, `letter-spacing: 0.05em`, always `text-transform: lowercase`.
- body text: 13-14px, `line-height: 1.5`, `letter-spacing: -0.01em`.
- headings: 20-24px, `font-weight: 400`, `letter-spacing: -0.02em`. hierarchy through size and color, never weight.
- monospace is used for labels, metadata, system status, and wordmarks — never for body content.
- maximum font size: 24px. no display type. scale is intimate.

borders:
- `border-radius: 22px` on all panels and cards. no exceptions below 16px.
- buttons: `border-radius: 30px` (full pill).
- circular elements (blobs, indicators, dots): `border-radius: 50%`.
- borders are almost never visible. separation comes from shadow, background, and spacing — not lines.
- when borders appear: `1px solid rgba(130, 129, 125, 0.3)` — translucent warm gray only.

spacing:
- generous. minimum `padding: 24px` on containers, `padding: 28px 32px` on cards.
- `gap: 12px` between stacked actions, `gap: 24px` between sections.
- elements breathe. whitespace is a feature, not waste.

**color distribution**

- 60% canvas cream (`--canvas`) — the ambient field, always present, never competing
- 15% soft near-black (`--text-primary`) — headlines, primary buttons, key text
- 10% warm mid-gray (`--text-muted`, `--text-ghost`) — system text, labels, metadata
- 15% organic accent gradients — distributed across amber/terracotta, sage/moss, mauve/violet, and peach/blush as radial-gradient fills on blob elements. no single accent dominates. accents appear as gradient pairs, never flat fills:
  - amber pair: `radial-gradient(circle at center, #F4A261, #E76F51)`
  - violet pair: `radial-gradient(circle at center, #B5838D, #6D597A)`
  - sage pair: `radial-gradient(circle at center, #A3B18A, #588157)`
  - peach pair: `radial-gradient(circle at center, #FFB5A7, #F28482)`

**component patterns**

buttons:
- primary: `background: var(--text-primary); color: var(--canvas); border: none; border-radius: 30px; padding: 16px 28px; font-size: 14px; font-weight: 500; box-shadow: 0 10px 30px rgba(0,0,0,0.1)`. dark pill on cream.
- ghost: `background: transparent; color: var(--text-muted); border: 1px solid rgba(130, 129, 125, 0.3); border-radius: 30px; padding: 16px 28px; box-shadow: none`.
- icon button (circular): `width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #FDEBD0, #FAD7A1); box-shadow: inset 0 0 20px rgba(255,255,255,0.6), 0 8px 24px rgba(222, 117, 20, 0.15); border: none`. warm glowing orb.

inputs:
- no visible border. `background: rgba(0,0,0,0.03); border-radius: 16px; padding: 16px 20px; font-size: 14px`. focus state: `box-shadow: 0 0 0 2px rgba(244, 162, 97, 0.3)`. placeholder in `--text-ghost`, lowercase.

cards:
- `background: #FFFFFF; border-radius: 22px; padding: 32px 28px; box-shadow: 0 20px 40px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.02)`. no border. soft double-shadow creates floating depth.
- card metadata uses a colored dot (`width: 10px; height: 10px; border-radius: 50%; background: linear-gradient(...)`) + monospace label.

navigation:
- minimal. wordmark centered at top in monospace uppercase with `letter-spacing: 0.2em`, color `--text-ghost`.
- bottom controls centered, stacked vertically with `gap: 24px`.
- no nav bars, no tabs, no hamburgers. screens crossfade.

headers:
- simple centered monospace wordmark. no underlines, no borders. `padding-top: 48px`.
- sub-headers as monospace system text below wordmark.

footers:
- not traditional footers. bottom-anchored control zones: `position: absolute; bottom: 64px; width: 100%`. centered column layout.

lists:
- no bullets or numbers. items are blob-shaped elements floating in space with monospace text centered inside.
- alternatively, stacked cards with generous `gap: 16px`.

tables:
- avoid traditional tables. data presented as floating labeled blobs or stacked card rows.
- if tabular data required: no borders, no alternating rows. `padding: 16px 0; border-bottom: 1px solid rgba(0,0,0,0.05)`.

dividers:
- invisible. separation through spacing and background color shifts. if absolutely needed: `border: none; height: 1px; background: rgba(0,0,0,0.05); margin: 24px 0`.

modals/overlays:
- full-screen blur overlay: `backdrop-filter: blur(12px); background: rgba(250, 247, 242, 0.4)`.
- centered card rises from below with spring easing. `transform: translateY(20px)` → `translateY(0)`.

badges/tags:
- small colored dots (10px circles with gradient fill) paired with monospace lowercase labels. no pill badges, no outlined tags.

blob elements (unique to this genome):
- circular `border-radius: 50%` containers with radial gradient backgrounds.
- sized 60-140px. `mix-blend-mode: multiply`. text centered inside in monospace 11px.
- float in space with physics-based drift animation.
- cluster into semantic groups with colored aura halos behind them (`filter: blur(40px); opacity: 0.12`).

**interaction language**

hover:
- buttons: `box-shadow` deepens slightly. no color change, no scale. `transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`.
- blobs: glow intensifies via larger `box-shadow` spread.

active/pressed:
- primary buttons: `transform: scale(0.96); box-shadow: 0 4px 15px rgba(0,0,0,0.05)`. shrinks gently.
- ghost buttons: `background: rgba(0,0,0,0.02)`.
- icon buttons: `transform: scale(0.95)`.

focus:
- `box-shadow: 0 0 0 3px rgba(244, 162, 97, 0.3)`. warm amber ring. no hard outline.

selected:
- blob brightens to full opacity. unselected items fade to `opacity: 0.6`.
- scale shift: selected `scale(1.05)`, unselected `scale(1)`.

disabled:
- `opacity: 0.3`. no other visual change. no strikethrough.

drag:
- element gains `filter: blur(2px)` as if being pulled through atmosphere. `cursor: grab`.

**motion & feedback**

transitions:
- default: `0.4s cubic-bezier(0.4, 0, 0.2, 1)` (fluid ease).
- spring: `0.6s cubic-bezier(0.175, 0.885, 0.32, 1.1)` for elements entering view (slight overshoot).
- screen crossfades: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)`.
- all motion is languid and unhurried. nothing snaps. nothing is instant.

loading:
- monospace lowercase text: `sorting...` or `listening...`. centered. `color: var(--text-muted)`.
- blobs converge toward center and blur: `filter: blur(4px)`. text inside fades to `opacity: 0.3`.

success:
- blob or element gently pulses once: `box-shadow` expands with 2s `cubic-bezier(0.215, 0.61, 0.355, 1)` then fades.
- checkmark icon fades in, replacing previous icon.

error:
- warm amber glow flickers. `box-shadow: 0 0 20px rgba(244, 162, 97, 0.4)` pulses twice then settles.
- monospace status text: `couldn't catch that.` or `try again.` in `--text-muted`.

physics-based drift (signature motion):
- elements have position, velocity, and drift offset. `acceleration = (target - position) * 0.03; velocity *= 0.85` (damped spring).
- sinusoidal ambient drift: `dx = sin(time * speed + offset) * 20px`. elements never sit perfectly still.
- elements enter from off-screen and float to their positions with physics easing.

**atmosphere**

- background: warm cream `#FAF7F2` with optional WebGL ambient gradient (radial amber/sage/gold blend at 60% opacity).
- fine analog grain via shader noise: `(random(st) - 0.5) * 0.08` intensity. never harsh. barely perceptible motion.
- aura halos: large blurred circles (`width: 250-300px; border-radius: 50%`) at 12% opacity in amber, violet, and sage. blur radius scales with element size: `blur = element_width * 0.3`, min 30px, max 60px. positioned behind blob clusters. create soft colored atmosphere zones.
- overall canvas feels like warm watercolor paper with faint living light underneath.
- `mix-blend-mode: multiply` on all colored blob elements — blobs visually merge with the canvas rather than sitting on top of it.
- no hard edges anywhere in the atmosphere. everything diffuses and bleeds.

**editorial voice**

button labels: `let's go →`, `show me where to start →`, `not this one`, `keep going`, `done for now`. lowercase or sentence case. arrows (→) on forward actions. gentle, inviting, never commanding.

headings: lowercase or sentence case. short phrases, not sentences. `here's what I heard from you.` / `start here` / `today` / `later`. period at end of full phrases, no period on labels.

metadata: monospace lowercase. `start here`, `today`, `later`, `sorting...`, `listening...`. categories are feelings or time-relative, not technical.

placeholders: lowercase, conversational. `what's on your mind?` / `say anything.` / `type here.`

empty states: warm and reassuring. `nothing here yet. that's okay.` / `start by saying something.` / `your space is clear.`

error messages: gentle, blame-free. `couldn't catch that.` / `try again, no rush.` / `something slipped.`

success messages: brief acknowledgment. `got it.` / `saved.` / `done.` monospace, lowercase, with period.

**cursor & selection**

- default: `cursor: default` on body.
- interactive elements: `cursor: pointer` on buttons and clickable blobs.
- drag contexts: `cursor: grab`, active: `cursor: grabbing`.
- `::selection { background: rgba(244, 162, 97, 0.25); color: var(--text-primary); }` — warm amber tint.
- `-webkit-tap-highlight-color: transparent` — no tap flash on mobile.

**when to reach for this genome**

Use `ambient_drift.aura` when the prompt asks for a calm wellness app, meditation or breathing interface, voice-first assistant, reflective journaling space, gentle onboarding flow, soft spatial canvas, floating organic blob UI, ambient personal dashboard, mindful habit check-in, emotional state tracker, or any product that should feel warm, low-pressure, and alive without becoming luxury editorial or sci-fi.

Reach for it when the user wants cream canvas, diffused amber/sage/mauve blobs, lowercase conversational copy, pill controls, large rounded panels, subtle grain, physics-based drift, crossfades, listening states, and gentle messages like `listening...`, `got it.`, `try again, no rush.`, or `nothing here yet. that's okay.`. It should feel like a soft ambient companion that listens and rearranges itself slowly.

Do not use it for biometric identity terminals, neural uplinks, access-control dashboards, holographic sci-fi panels, or frosted protocol surfaces; use `aura_protocol.sys`. Do not use it for tea ceremony, wabi-sabi ritual, shoji/tatami/washi materials, sumi-e brushwork, or Japanese hospitality; use `tea_ceremony.matcha`. Do not use it for premium beauty/lifestyle editorial, serif luxury, rose-petal glass, high-end wellness branding, or translucent pastel cards; use `petal_editorial.soft`. Do not use it for glossy black WebGL metaballs, neon shader demos, liquid data art, or razor-thin glassmorphism panels; use `viscous_flux.gl`. Do not use it for deep-ocean bioluminescence, near-black organic darkness, jellyfish/plankton atmospheres, or abyssal instrument beauty; use `abyssal_bloom.deep`. Do not use it for hostile-environment monitoring, hazard consoles, isometric telemetry, or additive neon wireframes; use `abyssal_telemetry.rift`.

It is strongest when the product interaction is slow, reassuring, and personal: speak, breathe, choose, save, reflect, continue, or gently sort feelings into floating objects. If the prompt needs dense information, hard technical authority, luxury brand polish, ritual minimalism, black-background shader spectacle, or operational telemetry, choose another genome.

**anti-patterns — this genome NEVER:**

1. uses sharp corners. minimum border-radius is 16px on containers, 30px on buttons, 50% on indicators. `border-radius: 0` does not exist in this genome.
2. uses visible borders for separation. panels and sections are distinguished by background color, shadow, and spacing only.
3. uses bold or heavy font weights (700+). maximum weight is 500. hierarchy comes from size and color.
4. uses flat solid-color fills on decorative elements. all colored shapes use radial or linear gradients.
5. uses instant transitions. every state change animates with at least 0.2s duration. nothing snaps or flickers.
6. uses traditional navigation patterns (navbars, tabs, sidebars, hamburger menus). screens crossfade. controls float.
7. uses uppercase text in body or UI labels. monospace meta-labels may be lowercase with `letter-spacing: 0.05em`. wordmarks use uppercase with `letter-spacing: 0.2em`. nothing else.
8. uses dense information layouts, data tables, or grid-packed content. space is generous. content breathes.
9. uses harsh or commanding language. editorial voice is always gentle, inviting, and unhurried. no exclamation marks. no urgency.
10. uses drop shadows darker than `rgba(0,0,0,0.1)`. all shadows are subtle, diffused, and warm-toned.
