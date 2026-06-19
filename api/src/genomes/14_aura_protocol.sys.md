---
id: "14"
name: aura_protocol.sys
keywords:
  - futuristic
  - sci-fi
  - biometric
  - identity
  - uplink
  - holographic
  - neural
  - sleek
  - frosted
  - void
  - aura
  - cyberpunk
  - authentication
  - login
  - dashboard
---

### genome 14: `aura_protocol.sys`

> identity: sleek near-future identity systems. biometric authentication terminals, neural uplink interfaces, and the frosted-glass UI panels from sci-fi film props — Westworld control rooms, Ex Machina diagnostics, Deus Ex menu screens.

**surface**

colors (dark mode — primary):
```
--bg-base: #030407;
--bg-surface-1: rgba(255, 255, 255, 0.02);
--bg-surface-2: rgba(255, 255, 255, 0.05);
--bg-surface-3: rgba(255, 255, 255, 0.10);
--bg-accent: #FFFFFF;
--bg-accent-hover: #E0EDFF;
--text-primary: #FFFFFF;
--text-secondary: rgba(255, 255, 255, 0.5);
--text-accent: #030407;
--text-tech: rgba(255, 255, 255, 0.3);
--glow-color: 255, 255, 255;
--fringe: #4A88FF;
```

colors (light mode — inverted polarity):
```
--bg-base: #F5F7FA;
--bg-surface-1: rgba(0, 0, 0, 0.03);
--bg-surface-2: rgba(0, 0, 0, 0.06);
--bg-surface-3: rgba(0, 0, 0, 0.12);
--bg-accent: #050608;
--bg-accent-hover: #1A1E26;
--text-primary: #050608;
--text-secondary: rgba(0, 0, 0, 0.5);
--text-accent: #FFFFFF;
--text-tech: rgba(0, 0, 0, 0.3);
--glow-color: 0, 0, 0;
--fringe: #8BA3CC;
```

typography:
- primary/body: `'Space Grotesk', sans-serif` — geometric sans with humanist warmth. weights 300–600. body text 14–15px. headings 28–36px, `font-weight: 500`, `letter-spacing: -0.02em`, `line-height: 1.1`.
- technical/system labels: `'JetBrains Mono', monospace` — used exclusively for badges, metadata tags, version numbers, divider text, and ambient tech labels. 10–12px. `letter-spacing: 0.1–0.2em`. `text-transform: uppercase`.
- labels above inputs: 12px, `font-weight: 500`, secondary color, `padding-left: 16px`.
- hierarchy through weight and opacity, not dramatic size jumps. headings never exceed 36px.

borders:
- `border: none` on all interactive elements — inputs, buttons, cards. borderless is the rule.
- `border-radius: 999px` (pill) on all interactive elements: buttons, inputs, badges, toggles.
- `border-radius: 48px` on container panels/cards — large, soft, squircle-adjacent.
- no visible borders anywhere. separation is achieved through surface opacity layering, not lines.

spacing:
- generous. `--space-xs: 4px; --space-sm: 8px; --space-md: 16px; --space-lg: 24px; --space-xl: 48px`.
- panel internal padding: 48px. gap between form elements: 16px. gap between major sections: 32px.
- outer page padding: 48px on desktop, 16px on mobile.

**color distribution**

- 80% void base (`--bg-base`) — near-black or near-white depending on theme. the dominant experience is emptiness.
- 10% frosted surfaces (`--bg-surface-1` through `--bg-surface-3`) — translucent layers that float above the void.
- 5% accent (`--bg-accent`) — used only on primary CTAs. high-contrast inversion (white button on dark, black button on light).
- 3% fringe blue (`--fringe`) — atmospheric glow, shader wash, subtle hover tints. never used on text or solid elements.
- 2% tech text (`--text-tech`) — ambient system labels at 30% opacity. decorative, not functional.

**component patterns**

buttons:
- primary: `height: 64px; border-radius: 999px; background: var(--bg-accent); color: var(--text-accent); font-size: 16px; font-weight: 600; letter-spacing: 0.02em; font-family: 'Space Grotesk'; box-shadow: 0 0 40px rgba(var(--glow-color), 0.2)`. text is uppercase imperative verb phrase + right arrow icon.
- secondary/SSO: `height: 56px; border-radius: 999px; background: var(--bg-surface-2); color: var(--text-primary)`. icon-only. no text label.
- all buttons: `border: none; outline: none; cursor: pointer; display: flex; align-items: center; justify-content: center`.

inputs:
- `height: 56px; padding: 0 24px; border: none; outline: none; border-radius: 999px; background: var(--bg-surface-2); color: var(--text-primary); font-family: 'Space Grotesk'; font-size: 15px`.
- placeholder: `color: rgba(120, 120, 120, 0.4)`.
- label sits above the input (not inside), styled as monospace uppercase tech label.
- focus: `background: var(--bg-surface-3)`. no outline, no border, no ring — only a surface brightness shift.

cards/panels:
- `background: var(--bg-surface-1); border-radius: 48px; padding: 48px; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px)`.
- no border. no shadow. the frosted glass effect (backdrop-filter) is the defining treatment.
- panels float in void space — never touch viewport edges on desktop.

navigation:
- top bar: absolutely positioned, `top: 48px; right: 48px`. contains version tag + theme toggle.
- nav items are pill-shaped frosted buttons: `height: 40px; padding: 0 16px; background: var(--bg-surface-1); backdrop-filter: blur(10px); border-radius: 999px`.
- active nav item: `background: var(--bg-surface-2)`.

headers:
- system badge above heading: monospace, `font-size: 11px; background: var(--bg-surface-2); padding: 4px 12px; border-radius: 999px; letter-spacing: 0.1em`.
- heading: `font-size: 32px; font-weight: 500; letter-spacing: -0.02em; line-height: 1.1`.
- subtitle below: `font-size: 14px; color: var(--text-secondary); font-weight: 400`.

footers:
- minimal or absent. if present, uses tech-label styling: monospace, 10px, uppercase, 30% opacity, absolutely positioned at bottom-left.

lists:
- no bullets. items separated by `gap: 8px`. each item is a pill-shaped surface: `background: var(--bg-surface-2); border-radius: 999px; padding: 12px 24px`.
- active item: `background: var(--bg-surface-3)`.

tables:
- no traditional table borders. each row is a pill-shaped surface with `border-radius: 999px; margin-bottom: 8px`.
- header row: monospace uppercase tech labels at 50% opacity.
- cells separated by padding, not dividers.

dividers:
- `height: 2px; background: var(--bg-surface-2); border-radius: 999px`.
- often paired with centered monospace text: `font-family: 'JetBrains Mono'; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-tech)`.
- flanking lines use `flex: 1` with the text centered between them.

modals/overlays:
- `background: var(--bg-surface-1); border-radius: 48px; padding: 48px; backdrop-filter: blur(30px)`.
- overlay backdrop: `background: rgba(3, 4, 7, 0.8)` (dark mode) or `rgba(245, 247, 250, 0.8)` (light mode).
- no border, no shadow. the blur is stronger (30px) than standard panels.

badges/tags:
- `font-family: 'JetBrains Mono'; font-size: 11px; background: var(--bg-surface-2); padding: 4px 12px; border-radius: 999px; letter-spacing: 0.1em; text-transform: uppercase`.
- always self-contained pills. never rectangular.

**interaction language**

- hover (buttons): `background: var(--bg-surface-3); transform: translateY(-2px)`. primary button hover: `background: var(--bg-accent-hover); box-shadow: 0 0 60px rgba(var(--glow-color), 0.3)`.
- hover (inputs): no hover state. interaction begins on focus only.
- active/pressed: `transform: translateY(0px); opacity: 0.9`. glow contracts.
- focus (inputs): `background: var(--bg-surface-3)`. no outline, no ring, no border — surface brightness is the only indicator.
- focus (buttons): `box-shadow: 0 0 0 2px var(--fringe)`. subtle fringe-colored ring.
- selected: `background: var(--bg-accent); color: var(--text-accent)`. full polarity inversion.
- disabled: `opacity: 0.3; pointer-events: none`. no text-decoration change, no color shift.
- drag: `cursor: grabbing; transform: scale(1.02); box-shadow: 0 0 80px rgba(var(--glow-color), 0.15)`.

**motion & feedback**

transitions:
- theme transitions: `background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1), color 0.6s cubic-bezier(0.16, 1, 0.3, 1)`. deliberate, languid polarity shift.
- element transitions: `background-color 0.3s ease, transform 0.2s ease, opacity 0.3s ease`. smooth but not sluggish.
- the `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) curve is the signature easing — fast initiation, graceful deceleration.

loading:
- pulsing glow ring: primary accent color fading between 20% and 60% opacity on a 2s cycle. no spinner. no progress bar. just breathing light.
- text: monospace, "UPLINK IN PROGRESS" or "SYNCHRONIZING" — never "Loading...".

success:
- primary button briefly flashes `box-shadow: 0 0 80px rgba(var(--glow-color), 0.5)` then settles. glow bloom.
- text: "LINK ESTABLISHED" or "AUTHENTICATED" — never "Success!" or "Done!".

error:
- input background shifts to `rgba(255, 65, 54, 0.1)`. no red border, no icon. subtle surface tint.
- text: monospace, "PROTOCOL MISMATCH" or "CREDENTIALS INVALID" — clinical, impersonal.

**atmosphere**

- WebGL shader background: 3–5 organic, slowly-animating light arcs rendered via Three.js fragment shader. arc thickness 2–4px visual, sweeping curves with exponential glow falloff (`exp(-distance * 3.0)`). the arcs use `--fringe` blue tones with `--bg-accent` core highlights. in light mode, shader palette inverts to draw dark structures on light backgrounds.
- mouse parallax: shader responds to cursor position with gentle offset (`(mouse - 0.5) * 0.1`), creating depth.
- frosted glass panels: `backdrop-filter: blur(20px)` on all elevated surfaces. the shader bleeds through panels as diffused light.
- ambient tech labels: monospace text at 30% opacity positioned at viewport corners — "SYS.CORE // ON-LINE", "UPLINK_ESTABLISHED_". purely decorative. rotated labels on right edge using `transform: rotate(90deg)`.
- glow halos: primary buttons emit soft light via `box-shadow: 0 0 40px rgba(var(--glow-color), 0.2)`.
- theme polarity: dark mode is the canonical state. light mode inverts all surfaces and accents — the shader adjusts its palette to draw dark structures on light backgrounds.
- no textures, no gradients on surfaces, no patterns. atmosphere comes from light and transparency, never from surface decoration.

**editorial voice**

button labels: `INITIALIZE UPLINK`, `AUTHENTICATE`, `ESTABLISH LINK`, `SYNCHRONIZE`, `TERMINATE SESSION`, `GRANT ACCESS`, `VERIFY IDENTITY`. always uppercase. always imperative. uses technical/military register. often paired with a right-arrow icon.

headings: title case or single-word imperatives. `Authenticate`, `Dashboard`, `Credentials`, `Signal Overview`. short — 1–2 words preferred. never end with periods. `letter-spacing: -0.02em`.

metadata: monospace, uppercase, dot-separated namespacing. `AURA.IDENTITY`, `SYS.CORE`, `NET.STATUS`. version numbers as `V03.01`. statuses as `ON-LINE`, `STANDBY`, `OFFLINE`.

placeholders: lowercase with domain hints. `user@domain.net`, `enter passphrase`, `search nodes...`. muted at 40% opacity.

empty states: monospace, terse. `NO SIGNAL DETECTED`, `AWAITING INPUT`, `NODE ARRAY EMPTY`. no emoji, no illustrations, no friendly copy.

error messages: clinical and impersonal. `PROTOCOL MISMATCH — VERIFY CREDENTIALS`, `UPLINK FAILED — RETRY IN 30S`, `INVALID SEQUENCE`. never apologetic ("sorry"), never casual ("oops").

success messages: confirmational, brief. `LINK ESTABLISHED`, `IDENTITY VERIFIED`, `SESSION ACTIVE`. no exclamation marks. stated as fact.

**cursor & selection**

- default: `cursor: default` on body.
- interactive elements: `cursor: pointer` on buttons, links, toggles.
- text inputs: `cursor: text`.
- drag targets: `cursor: grab`, `cursor: grabbing` when active.
- no custom cursor graphics. the interface is sleek, not theatrical.
- `::selection { background: var(--fringe); color: var(--text-accent); }` — fringe blue selection with inverted text. in light mode: `::selection { background: var(--bg-accent); color: var(--text-accent); }`.

**when to reach for this genome**

Use `aura_protocol.sys` when the prompt asks for a sleek near-future identity system, biometric login, authentication terminal, neural uplink, access-control dashboard, sci-fi credentials flow, holographic system panel, secure session console, user verification surface, protocol status screen, or frosted-glass control room where void space, translucent pills, shader arcs, and clinical uppercase system copy should define the experience.

Reach for it when the product should feel like a premium film-prop interface for verifying identity or establishing a link: Space Grotesk headings, JetBrains Mono status labels, borderless frosted panels, pill inputs/buttons, polarity inversion, blue fringe glows, breathing uplink feedback, and impersonal protocol language.

Do not use it for soft wellness ambience, breathing apps, warm organic blobs, or voice-assistant calm; use `ambient_drift.aura`. Do not use it for generic realistic glassmorphism, macOS/iOS acrylic panels, or physical glass material studies; use `vitreous_panel.frost`. Do not use it for spacecraft environmental controls, rotary dials, atmosphere monitors, or Braun-style hardware HUDs; use `atmospheric_control.void`. Do not use it for amber CRT telemetry, scanlines, life-support logs, or retro sci-fi hardware; use `phosphor_telemetry.amb`. Do not use it for deep-sea bioluminescent organisms, jellyfish, plankton, or organic luminous darkness; use `abyssal_bloom.deep`. Do not use it for quiet ritual, wabi-sabi spacing, washi paper, or meditation journals; use `tea_ceremony.matcha`.

It is strongest when the interface is a system gate: authenticate, verify, synchronize, establish, terminate, grant, or deny. If the prompt is about calm atmosphere, glass material realism, physical instruments, retro telemetry, organic nature, or ritual restraint, choose another genome.

**anti-patterns — this genome NEVER:**

1. uses visible borders on any element. separation is achieved through surface opacity layers and backdrop-filter, never lines.
2. uses border-radius values between 1px and 47px. elements are either fully pill-shaped (999px), large-radius panels (48px), or not applicable. no subtle rounding.
3. uses warm colors. the palette is cool: near-black voids, whites, blue fringes. no oranges, no ambers, no creams, no warm grays.
4. uses decorative illustrations, emoji, or iconography beyond Phosphor icons. atmosphere comes from light and shader, not drawings.
5. uses casual or friendly copy. no "Welcome back!", no "Oops!", no exclamation marks, no first-person. the system addresses the user impersonally.
6. uses drop shadows on panels or cards. elevation is communicated through backdrop-filter blur intensity and surface opacity, never shadow.
7. uses solid opaque surface colors on elevated panels. all surfaces above the base layer must be translucent (rgba with low alpha).
8. uses serif or display typefaces. only Space Grotesk (geometric sans) and JetBrains Mono (monospace). no exceptions.
9. uses dense layouts or tight spacing. minimum padding on panels is 48px. minimum gap between major sections is 32px. the void is sacred.
10. uses progress bars, spinners, or skeleton loaders. loading states are breathing glow pulses with monospace status text.
