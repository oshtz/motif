---
id: "04"
name: underground_terminal.crt
keywords:
  - hacker
  - terminal
  - CLI
  - system utility
  - monochrome
  - dark
  - mainframe
  - covert
  - command line
  - phosphor
  - retro
  - DOS
  - green-screen
---

### genome 04: `underground_terminal.crt`

> identity: boutique hardware utility. phosphor-glow amber on black. you found this interface on a decommissioned mainframe in a basement you shouldn't be in. covert, atmospheric, quietly beautiful.

**surface**

the surface is an amber-on-black command utility discovered on old hardware.

it should feel interactive, covert, and text-native.

it is not a generic developer terminal skin.

it is not a sci-fi telemetry monitor.

it is a command surface for someone who knows the right words to type.

core css variables:

- `--bg: #1A1A1A` - primary screen void, page background, panel wells.
- `--bg-deep: #0B0B0A` - deepest recessed terminal surface and modal backplates.
- `--bg-soft: #24211C` - hover backing, selected row shadow, subtle screen depth.
- `--ink: #E8E4D9` - secondary text, double borders, structural labels.
- `--ink-hot: #FFF6D7` - rare brightest text for focused prompts and active cursor.
- `--amber: #FFB800` - primary command text, active state, phosphor glow.
- `--amber-dim: #9C760A` - secondary amber, muted active data, old phosphor residue.
- `--amber-glow: rgba(255,184,0,0.38)` - text bloom, hover glow, active line halo.
- `--dim: #665E50` - tertiary text, dashed dividers, disabled values.
- `--dim-deep: #3D372F` - barely visible rule and inactive panel marks.
- `--danger: #FF4136` - error only, rare and abrupt.
- `--danger-dim: rgba(255,65,54,0.22)` - error backing and temporary border stain.
- `--scanline: rgba(0,0,0,0.16)` - scanline overlay.

typography:

- primary family: `"Courier New", "Courier", "IBM Plex Mono", "SFMono-Regular", monospace`.
- no sans-serif, no serif, no display fonts.
- text-transform: lowercase for all visible interface copy, labels, headings, nav, buttons, placeholders, and status.
- uppercase may appear only if it is user-provided data or a legacy protocol token that cannot be changed.
- body text: 12px to 13px.
- metadata: 11px to 12px.
- micro labels: 10px.
- no visible text exceeds 13px.
- line-height: `1.55` to `1.7` for terminal readability.
- letter-spacing: `0.05em`.
- use `font-variant-numeric: tabular-nums`.
- prefer aligned columns, fixed-width labels, and prompt prefixes over visual scale.

borders:

- major panels: `4px double var(--ink)`.
- active or alert panels: `4px double var(--amber)` or `4px double var(--danger)`.
- internal dividers: `1px dashed var(--dim)`.
- input dividers: `1px dashed var(--dim)` or `1px solid var(--amber)` on focus.
- border-radius: `2px` maximum.
- modal and root viewport may use `2px`; never rounded cards.
- no box-shadow for elevation. glow is allowed only as phosphor text or border bloom.

spacing:

- root padding: `16px` to `24px`.
- panel padding: `14px 16px`.
- compact row padding: `3px 0`.
- command row gap: `8px`.
- section gap: `16px`.
- terminal grid gap: `12px 18px`.
- use dense fixed-width columns.
- prefer viewport-locked compositions: `min-height: 100vh`, often `overflow: hidden` for single-screen utilities.
- when content must scroll, scroll within terminal panes, not the whole decorative page.

surface construction:

- screen background is dark and nearly flat.
- panels look like character-mode windows, not cards.
- structural lines are drawn with double borders, dashed rules, and ascii separators.
- every screen should include at least one prompt line, status line, or command rail.
- amber text carries a faint text-shadow by default.
- non-interactive body copy can be ink or dim, not amber everywhere.

**color distribution**

- 72% dark background and recessed screen void.
- 13% ink for borders, secondary text, and structural labels.
- 10% amber for commands, active states, prompts, cursor, and important data.
- 4% dim for tertiary text, disabled values, dashed rules, old state.
- 1% danger red for actual errors, intrusion warnings, and failed commands.

the interface should read black first, amber second, and everything else as old terminal residue.

amber is the phosphor, not a marketing color.

red is a breach or failure, not a routine alert palette.

**component patterns**

buttons:

- buttons are command labels, not chrome.
- default form: `[submit]`, `[cancel]`, `[run]`, `[wipe]`, `[exit]`.
- style: `background: transparent; border: 0; color: var(--amber); font-family: inherit; font-size: 12px; letter-spacing: 0.05em; text-transform: lowercase; padding: 0`.
- command buttons can be padded only inside text brackets: `padding: 2px 4px`.
- hover adds glow, not a button background.
- primary action can invert: `background: var(--amber); color: var(--bg); text-shadow: none`.
- destructive action: `[wipe]` in danger red, no filled red unless pressed.
- no rounded buttons, no icons, no glossy surfaces.

inputs:

- base: `background: transparent; color: var(--amber); border: 0; border-bottom: 1px dashed var(--dim); border-radius: 0; padding: 4px 0; font-family: inherit; font-size: 12px; letter-spacing: 0.05em`.
- prompt prefix: render `> ` or `:` before the field.
- caret: `caret-color: var(--amber)`.
- placeholder: dim lowercase, examples `enter passphrase...`, `query...`.
- focus: bottom border becomes `1px solid var(--amber)`, prompt marker brightens to amber.
- password fields should show old terminal masking, such as `********`, not bullets if possible.
- textarea: same as input but inside a dashed rectangular terminal pane.

cards and panels:

- panels are terminal windows.
- shell: `background: var(--bg); border: 4px double var(--ink); border-radius: 2px; padding: 14px 16px`.
- header format: `---[ section_name ]---` in amber.
- footer/status row: dim text with `sys.status`, `node`, `uptime`, or `trace`.
- panel body uses rows, command blocks, tables, or logs.
- active panel: border color amber and subtle `text-shadow` on title.
- never use panel shadows or nested rounded cards.
- if grouping inside a panel, use dashed lines and indentation.

navigation:

- nav is a command rail.
- row format: `[home]  [about]  [work]  [msg]  [logs]`.
- active item: `*[home]` or `[home]*` plus stronger amber glow.
- inactive items: ink or dim, not cream-heavy.
- nav container has no pill background.
- top status line can include: `> site_title // doc:a7f3 // terminal.crt // ctrl+h: help`.
- mobile nav remains text commands wrapped across lines.

headers:

- header is a single terminal status line or two-line boot plate.
- format examples:
- `> node:07 // link:stable // session:active // help:ctrl+h`
- `---[ covert_interface ]------------------------------------------------`
- title text is lowercase amber, 12-13px.
- metadata is dim or ink.
- no large hero header.
- no mixed-size marketing typography.

footers:

- footer is a status tail.
- format: `sys.status: nominal | uptime: 99.7% | trace: clean | node:07`.
- use dim text with occasional amber value.
- keep it one line where possible.
- no copyright symbol required; use `build:2026.06` or `hash:a7f3`.

lists:

- default prefix: `- `.
- active prefix: `> `.
- nested prefix: two spaces per level.
- row padding: `2px 0`.
- active row: amber text and dim background `linear-gradient(90deg, rgba(255,184,0,0.08), transparent)`.
- list metadata appended with `//`.
- examples: `> relay_status // stable // 04ms`.
- no bullets, no check icons, no card list tiles.

tables:

- tables are monospaced matrices.
- use fixed column widths and right-aligned numeric values.
- header row: amber text, lowercase labels.
- data rows: ink text, dim separators.
- borders: dashed top and bottom, not full grid unless explicitly data-heavy.
- row separator: `1px dashed var(--dim-deep)`.
- empty cell: `--`.
- active row: amber left prompt and brighter value.
- avoid modern table chrome, sticky rounded headers, and zebra cards.

dividers:

- standard divider: `1px dashed var(--dim)`.
- ascii divider: `------------------------------------------------`.
- section divider: `---[ name ]---`.
- major window divider can use double border around the containing panel.
- no decorative lines, no gradient separators.

modals and overlays:

- modal is an interrupt pane.
- shell: `background: var(--bg-deep); border: 4px double var(--amber); border-radius: 2px; padding: 16px; color: var(--ink)`.
- header: `---[ alert ]---`, `---[ confirm ]---`, or `---[ auth ]---`.
- backdrop: `rgba(0,0,0,0.78)`.
- no blur.
- close action: `[abort]` or `[exit]`.
- confirmation body uses command language and explicit prompt.
- error modal can switch border to danger for 500ms.

badges and tags:

- no pill badges.
- status tags are text tokens: `[stable]`, `[armed]`, `{node}`, `<trace>`.
- active token: amber.
- inactive token: dim.
- warning token: danger only for actual failure.
- badges have no background unless selected/inverted.

logs:

- event log rows are signature components.
- format: `21:04:33 // auth.accepted // node:07`.
- routine events: dim.
- active events: amber.
- error events: danger and prefixed `err:`.
- warning events: amber or danger depending on severity, prefixed `warn:`.
- logs scroll within a terminal pane.
- never use toast notifications for log events.

command prompt:

- signature element.
- prompt prefix: `>`, `:`, or `$` if the product explicitly needs shell semantics.
- default: `>`.
- active cursor: blinking block or underscore after the command.
- command history appears above the prompt in dim/ink text.
- suggestions render as bracketed commands beneath the prompt.

progress:

- progress is character-built.
- examples: `[####------] 40%`, `[/////.....] sync`, or `receiving packet 07/18`.
- fill characters update stepwise.
- no CSS pill progress bars.
- no circular loaders.

images and media:

- images are rare.
- when needed, use amber-tinted monochrome: `filter: grayscale(1) sepia(0.55) contrast(1.18) brightness(0.86)`.
- render images inside double-bordered panes with text captions.
- images should feel like captured evidence, not portfolio thumbnails.

**interaction language**

hover:

- text glow intensifies: `text-shadow: 0 0 2px var(--amber), 0 0 12px var(--amber-glow)`.
- command tokens may brighten from ink to amber.
- no layout shift.
- no transform.
- no underline unless the item is a text link.

active / pressed:

- command inverts: `background: var(--amber); color: var(--bg); text-shadow: none`.
- inversion is instant.
- active destructive command can invert red: `background: var(--danger); color: var(--bg)`.
- keep inversion tight to the text, not full-width unless selecting a row.

focus:

- `outline: 1px solid var(--amber); outline-offset: 1px`.
- inputs focus by solid amber bottom border plus brighter prompt marker.
- focus must be visible without adding rounded rings.
- do not use browser-blue focus.

selected:

- selected command or row uses amber background with dark text, or amber left prompt plus low amber backing.
- selected nav command gets `*` marker.
- selected panel border becomes amber.
- selected text tokens remain lowercase.

disabled:

- `color: var(--dim); opacity: 0.45; text-decoration: line-through`.
- no hover glow.
- cursor stays default.
- disabled command can keep brackets but looks unpowered.

drag:

- drag is uncommon and used only for panes, log rows, or command reorder.
- idle cursor: `grab`.
- active cursor: `grabbing`.
- drag source gets amber dashed outline.
- drop target uses dashed amber rectangle and prompt text: `drop_target: ready`.
- no shadow lift.

terminal input states:

- valid command echoes back in ink and produces `> ok.`.
- invalid command echoes back in dim and produces `err: unknown command`.
- protected command asks for `enter passphrase...`.
- long-running command appends a character progress row.

**motion & feedback**

transitions:

- default: `transition: text-shadow 0.15s ease, color 0.10s ease`.
- active inversion is instant: no transition on background.
- panel border glow can transition over `0.15s`.
- no position, scale, layout, blur, or shadow animation.
- keep motion minimal enough to feel like old hardware.

loading:

- use terminal text, not spinner UI.
- examples:
- `processing...`
- `syncing node 07 [####------] 40%`
- `receiving packet 03/12`
- `decrypting key: a7f3****`
- dots can cycle every 180ms.
- character bars fill left-to-right at 60-90ms per character.

success:

- inline status: `> ok.`, `> done.`, `> saved.`, `> transmitted.`.
- success appears in amber for 600ms, then dims to ink or dim in the log.
- no green success.
- no toast.
- no celebratory animation.

warning:

- inline status: `warn: timeout near`, `warn: stale trace`.
- warning remains amber unless truly failed.
- no separate yellow.
- add a log entry rather than a floating alert.

error:

- inline status: `err: invalid input`, `err: connection refused`, `err: auth failed`.
- text color: danger.
- affected panel border shifts to danger for 500ms, then returns.
- optional single flicker: opacity 1 -> 0 -> 1 over 100ms.
- no shake, no bounce, no friendly apology.

page enter:

- instant render is valid and often preferred.
- optional terminal boot can reveal lines character by character over 0.6s to 1.2s.
- boot sequence should be sparse:
- `mounting /relay`
- `link: stable`
- `session: active`
- `ready.`
- do not use cinematic scroll reveals.

ambient motion:

- subtle screen flicker allowed: `opacity: 1 -> 0.97 -> 1` over 4s.
- scanlines remain fixed or move one pixel at long intervals.
- cursor blink: `1s step-end infinite`.
- avoid constant flashy hacker effects.

**atmosphere**

the atmosphere is covert hardware in a dark room.

screen overlay:

```css
body::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%),
    linear-gradient(90deg, rgba(255,0,0,0.05), rgba(0,255,0,0.018), rgba(0,0,255,0.05));
  background-size: 100% 2px, 3px 100%;
}
```

screen flicker:

```css
@keyframes crt-flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.97; }
}
```

phosphor bleed:

- amber text uses `text-shadow: 0 0 2px var(--amber), 0 0 7px rgba(255,184,0,0.18)`.
- hover text can intensify to `0 0 12px var(--amber-glow)`.
- ink text does not glow unless it becomes active.

vignette:

- optional viewport edge darkening: `radial-gradient(circle at 50% 45%, transparent 55%, rgba(0,0,0,0.52) 100%)`.
- keep it subtle enough that text remains readable.

texture:

- use scanlines, faint chromatic offset, and phosphor glow.
- no paper grain.
- no dirty grunge.
- no decorative blobs or background imagery.
- no green matrix rain.

composition:

- single-screen utilities are ideal.
- use one top status line, one or more command panes, one log pane, and one bottom prompt.
- split panes can be `grid-template-columns: 1fr 320px` on desktop and stacked on mobile.
- text alignment matters more than whitespace.
- keep the eye moving down command rows, not across marketing cards.

contrast with neighbors:

- unlike `phosphor_telemetry.amb`, this is lowercase, command-oriented, and interactive rather than uppercase read-only gauge telemetry.
- unlike `lab_manual.80s`, this is dark, glowing, and covert rather than printed red-white documentation.
- unlike `kernel_grid.dev`, this is retro hardware atmosphere rather than modern developer productivity.
- unlike `signal_capture.unit`, this is a full terminal screen, not a compact spy device control surface.

**editorial voice**

the voice is terse, lowercase, procedural, and slightly illicit.

button labels:

- `[transmit]`
- `[wipe]`
- `[run]`
- `[exit]`
- `[confirm]`
- `[abort]`
- `[open]`
- `[trace]`
- `[listen]`
- `[decrypt]`
- `[mount]`
- `[seal]`

headings:

- `system overview`
- `incoming signals`
- `access credentials`
- `data log`
- `relay status`
- `node map`
- `packet trace`
- `archive mount`
- `dead drop`
- `session keys`

metadata:

- `doc:a7f3`
- `node:07`
- `uplink:stable`
- `lat:32.08 lon:34.78`
- `session:active`
- `trace:clean`
- `port:443`
- `hash:0x7ac9`
- `uptime:99.7%`
- `route:basement`

placeholders:

- `enter passphrase...`
- `query...`
- `type command...`
- `filter log...`
- `node id...`
- `packet hash...`
- `mount path...`
- `reply address...`

empty states:

- `no records found.`
- `awaiting input.`
- `signal lost.`
- `log empty.`
- `no route selected.`
- `archive unmounted.`
- `no packets captured.`

error messages:

- `err: invalid input`
- `err: connection refused`
- `err: auth failed`
- `err: route unavailable`
- `err: packet checksum mismatch`
- `warn: timeout exceeded`
- `warn: stale credentials`

success messages:

- `ok.`
- `done.`
- `saved.`
- `transmitted.`
- `mounted.`
- `trace clean.`
- `route open.`
- `key accepted.`

writing rules:

- keep everything lowercase.
- use periods for final status only.
- use `err:` and `warn:` prefixes.
- use short commands instead of friendly verbs.
- use slashes, hashes, node IDs, and session IDs.
- avoid exclamation marks.
- avoid "welcome", "get started", "oops", "nice", and "all set".
- every sentence should feel typed into or printed by the machine.

**cursor & selection**

- global cursor: `default`.
- command buttons and nav tokens: `pointer`.
- text inputs and selectable logs: `text`.
- draggable panes or rows: `grab`; dragging: `grabbing`.
- disabled commands: `default`.
- do not use custom bitmap cursors.
- do not use crosshair as default; this is a terminal, not a survey instrument.

selection:

```css
::selection {
  background: var(--amber);
  color: var(--bg);
}
```

selected command rows:

- use amber background with dark text for full-row command selection.
- use amber left prompt only for softer selection.
- preserve lowercase text.
- danger rows stay danger even when selected; add amber outline if needed for focus.

**anti-patterns - this genome NEVER:**

1. never uses border-radius above 2px. rounded cards, pills, and soft app surfaces break the character-mode hardware.
2. never uses box-shadow for elevation. glow is allowed only for phosphor text, active borders, and amber screen bloom.
3. never uses capitalized, title-case, or uppercase interface copy. everything authored by the UI is lowercase.
4. never uses sans-serif, serif, display, script, or pixel novelty fonts. the terminal is monospace.
5. never uses text larger than 13px. hierarchy comes from brightness, borders, prompt markers, and position.
6. never uses modern components such as floating action buttons, hamburger menus, rounded SaaS cards, toast notifications, or skeleton loaders.
7. never uses bright white backgrounds, pastel surfaces, blue focus rings, green success, or multicolor dashboard semantics.
8. never uses friendly copy such as `welcome`, `get started`, `oops`, `no worries`, or `great job`.
9. never becomes uppercase read-only life-support telemetry. for amber gauges, uppercase labels, chart frames, and monitor shells, use `phosphor_telemetry.amb`.
10. never becomes printed red-white dossier documentation. for classified documents, red grids, and uppercase forms, use `lab_manual.80s`.
11. never uses decorative hacker cliches such as matrix rain, skull icons, neon green code waterfalls, or fake cyberpunk gradients.
12. never hides the prompt. every substantial screen needs a command rail, status line, log, or input prompt.

**when to reach for this genome**

use `underground_terminal.crt` when the prompt asks for hacker aesthetic, terminal UI, command-line tool, covert mainframe, dark monochrome utility, amber phosphor, basement hardware, DOS-like control surface, CLI dashboard, packet log, encrypted archive, or an interface that should feel discovered rather than designed.

reach for it when the concrete cues are lowercase commands, bracketed actions, amber-on-black phosphor, scanlines, command prompts, system logs, node IDs, passphrases, hash values, dashed dividers, double borders, and terse procedural copy.

use it for portfolios with terminal navigation, CLI admin tools, security demos, covert utility landing pages, command dashboards, log viewers, access gates, retro shell experiences, packet analyzers, and interactive text-first systems.

do not use it for warm analog camera equipment, cream surfaces, rounded toggles, or cinematic product controls; use `panavision.70s`.

do not use it for red-white classified document systems, technical manuals, government filing, or uppercase dossiers; use `lab_manual.80s`.

do not use it for amber CRT telemetry with uppercase labels, chart frames, life-support gauges, monitor shells, or read-only status matrices; use `phosphor_telemetry.amb`.

do not use it for modern developer tools, clean IDE dashboards, or productivity grids without retro covert atmosphere; use a modern developer genome.

it is strongest when the interface lets the user issue commands, inspect logs, authenticate, trace, mount, transmit, and decide whether to wipe the record.

**page archetype guidance**

landing page:

- first viewport is a terminal screen, not a hero card.
- top line shows node, session, and help command.
- central content is an amber ascii title or command output.
- primary CTA is a bracketed command such as `[transmit]` or `[open relay]`.
- footer is a dim status line.

dashboard:

- use split panes: status, logs, active command, and node table.
- active values glow amber.
- inactive values sit in dim.
- tables align by monospace columns.
- alerts appear in the log, not floating widgets.

portfolio:

- project list as command rows: `> project_name // 2026 // [view]`.
- project detail opens inside a terminal pane.
- images are optional and must be amber-tinted evidence panes.
- navigation remains bracketed commands.

login/auth:

- use passphrase prompt.
- show `session:pending` in header.
- invalid auth prints `err: auth failed`.
- successful auth prints `key accepted.` and routes to the next command pane.

documentation:

- use command examples, log transcripts, and section headers.
- keep headings lowercase.
- code blocks share the same terminal surface.
- inline links appear as `[ref]` tokens.

**signature techniques**

prompt line:

- every meaningful screen includes a `>` prompt or command rail.
- the active prompt has amber cursor blink.
- the prompt anchors the user in the terminal world.

double-border panes:

- major panes use `4px double var(--ink)`.
- active panes shift to amber.
- internal grouping uses dashed rules, never nested cards.

phosphor glow:

- amber text gets faint default glow.
- hover and focus intensify glow.
- glow never creates physical elevation.

scanline overlay:

- use a fixed root overlay with 2px horizontal scanlines.
- keep pointer-events none.
- text legibility is more important than texture.

lowercase command voice:

- lowercase is non-negotiable for authored UI.
- bracketed commands are the primary button pattern.
- status words are terse: `ok.`, `done.`, `err:`, `warn:`.

character progress:

- progress is built from ascii characters.
- bars fill stepwise.
- use status text beside the bar.
- avoid smooth CSS meter fill.

selection guidance:

- if the user says "terminal", "cli", "hacker", "mainframe", "covert", "phosphor", "dos", or "command line", choose this genome unless the requested object is clearly a telemetry monitor or printed dossier.
- if the user says "telemetry", "life support", "amber gauges", "readout", "vitals", or "crt monitor", route to `phosphor_telemetry.amb`.
- if the user says "classified document", "technical manual", "redacted", "government", or "swiss clinical", route to `lab_manual.80s`.
- if the user says "warm tech", "analog camera", "control room", "dieter rams", or "70s product", route to `panavision.70s`.
