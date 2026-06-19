---
id: "96"
name: sterile_field.surg
keywords:
  - surgical
  - operating room
  - medical
  - clinical
  - sterile
  - vital signs
  - scalpel
  - scrub
  - hospital
  - monitor
  - heartbeat
  - procedure
  - OR
---

### genome 96: `sterile_field.surg`

> identity: operating theater instrument interface: stainless instrument trays, scrub-green drapes, dark vital-sign monitors, ECG traces, anesthesia workstation data, instrument counts, medication logs, case timers, and clinical procedure records. This is the controlled sterility of a surgical suite, not a wellness app and not a research biolab.

---

**surface**

The surface is a live OR workstation.

It is dark enough for monitors to be readable and controlled enough for clinical action.

Every element should feel like a patient monitor, anesthesia display, surgical count board, circulating nurse record, instrument tray, or procedure timeline.

The interface must remain calm under stress.

Color must communicate patient state, instrument state, and workflow status.

Core palette:

- `--monitor-black: #0E1117` for the OR display background, vital monitor panels, page shell, and low-light room surface.
- `--panel-dark: #161B24` for secondary panels, procedure cards, medication logs, and instrument-count containers.
- `--panel-deep: #080B10` for recessed monitor wells, waveform lanes, and alarm backgrounds.
- `--surgical-white: #F5F7FA` for primary text, high-contrast readouts, clock values, and active labels.
- `--steel: #B8BCC4` for stainless steel text, secondary labels, dividers, and inactive controls.
- `--steel-dim: rgba(184, 188, 196, 0.35)` for panel borders, structural dividers, inactive instrumentation, and soft separators.
- `--steel-ghost: rgba(184, 188, 196, 0.10)` for zebra rows, monitor insets, faint data cells, and ghost backing.
- `--scrub-green: #4A8B6E` for scrub drapes, confirmed states, procedure progress, safe count states, and primary positive actions.
- `--scrub-green-deep: #2E6650` for hover states, secondary green fill, and drape-shadow surfaces.
- `--trace-green: #00E676` for ECG traces, live waveform lines, active cardiac values, and confirmed monitor signal.
- `--oxygen-blue: #2196F3` for SpO2, oxygen flow, airway, ventilation, and informational respiratory data.
- `--warning-amber: #FFC107` for marginal vitals, pending recounts, cautions, advisories, and values requiring review.
- `--alert-red: #FF1744` for critical alarms, count discrepancies, unsafe values, and urgent action.
- `--tissue-pink: #F8E0E0` for rare patient identity markers, surgical site tags, and warm human context.

Typography:

- Interface font: `"Inter", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Vital values: same sans stack with `font-variant-numeric: tabular-nums`.
- Timer fallback: `"JetBrains Mono", "SF Mono", monospace`.
- Large vital readouts: `36px` to `52px`, `font-weight: 700`, `line-height: 1`, `letter-spacing: -0.02em`.
- Medium clinical values: `18px` to `24px`, `font-weight: 600`.
- Body text: `13px` to `14px`, `font-weight: 400`, `line-height: 1.5`.
- Section labels: `10px` to `11px`, `font-weight: 600`, uppercase, `letter-spacing: 0.10em`.
- Instrument-count labels: `12px`, `font-weight: 600`, uppercase, `letter-spacing: 0.06em`.
- Metadata and logs: `11px` to `12px`, tabular numerals for timestamps.

No serif type.

No decorative type.

No handwritten labels.

Every value must be readable under surgical lighting and in a darkened room.

Borders:

- Structural panel border: `1px solid var(--steel-dim)`.
- Monitor bezel border: `1px solid rgba(184, 188, 196, 0.20)`.
- Data element border: `1px solid var(--steel-dim)`.
- Alert border: `1px solid var(--alert-red)` or `2px solid var(--alert-red)` for critical alarms.
- Warning border: `1px solid var(--warning-amber)`.
- Safe/confirmed border: `1px solid var(--scrub-green)`.
- Monitor radius: `8px`.
- Data element radius: `4px`.
- Badge radius: `4px`.
- Never use pill geometry except for small toggle tracks if required by the product.

Spacing:

- Monitor panel padding: `16px` to `20px`.
- Procedure panel padding: `20px` to `28px`.
- Vital cluster gap: `12px` to `16px`.
- Monitor wall gap: `2px` to `4px`.
- Label/value gap: `4px`.
- Instrument grid gap: `8px`.
- Event row padding: `8px 12px`.
- Header padding: `12px 20px`.
- Base spacing unit: `20px`.

Density is tiered.

Vitals are dense.

Procedure context is spacious.

Logs are compact.

Nothing is ornamental.

---

**color distribution**

54% monitor-black and panel-dark.

The OR system lives on dark monitor surfaces so values, traces, and alarms carry attention.

16% surgical-white.

Primary text, vital readouts, timestamps, case identifiers, and active labels are clean LED white.

12% steel and steel-dim.

Borders, secondary labels, instrument-tray structure, dividers, and inactive metadata use stainless steel gray.

8% scrub-green and scrub-green-deep.

Confirmed states, active progress, count-complete states, and calm primary actions use surgical green.

4% trace-green.

Live ECG and physiologic waveforms use high-intensity green, only on dark monitor panels.

3% oxygen-blue.

Oxygen and respiratory data get blue, never decorative.

2% warning-amber.

Cautions, marginal values, and pending counts use amber.

1% alert-red and tissue-pink.

Critical alerts use red sparingly but unmistakably.

Tissue-pink is rare and only for patient/site context.

The interface must not become colorful.

Most of the screen should read dark, steel, white, and scrub-green.

---

**component patterns**

Vital sign monitor:

- Signature component.
- Shell: `background: var(--monitor-black); border: 1px solid rgba(184,188,196,0.20); border-radius: 8px; padding: 16px 20px; overflow: hidden; position: relative`.
- Label: uppercase `10px`, `letter-spacing: 0.10em`, `color: var(--steel)`.
- Main value: large tabular sans, `36px` to `52px`, `font-weight: 700`.
- Unit: `12px`, `color: var(--steel)`, placed near the value.
- Alarm limits: top-right, `10px`, steel.
- Waveform lane: bottom or middle, SVG polyline clipped to the panel.
- Each panel should have one primary physiologic signal.

ECG trace:

- Stroke: `var(--trace-green)`.
- Stroke width: `1.5px`.
- Fill: none.
- Glow: `filter: drop-shadow(0 0 4px rgba(0,230,118,0.45))`.
- Runs continuously.
- If disconnected, show explicit `LEADS OFF` or `NO SIGNAL`; do not simply hide the trace.

SpO2 trace:

- Stroke: `var(--oxygen-blue)`.
- Numeric value in oxygen-blue or surgical-white with blue label.
- Waveform should remain crisp and small.
- Low SpO2 can escalate to amber or red depending on severity.

Capnography trace:

- Stroke: `var(--warning-amber)` or steel-white depending on status.
- Shape is square-ish plateau, not ECG zigzag.
- EtCO2 value uses tabular numerals.

Buttons:

- Default: `background: rgba(255,255,255,0.06); color: var(--surgical-white); border: 1px solid var(--steel-dim); border-radius: 4px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; padding: 8px 18px`.
- Confirm: `background: var(--scrub-green); border-color: var(--scrub-green); color: var(--surgical-white)`.
- Critical: `background: var(--alert-red); border-color: var(--alert-red); color: #FFFFFF`.
- Advisory: `background: var(--warning-amber); border-color: var(--warning-amber); color: var(--monitor-black)`.
- Destructive outline: transparent background, red border, red text.
- Button labels are clinical commands.
- Never use playful icon-only CTAs.

Inputs:

- Base: `background: var(--panel-dark); border: 1px solid var(--steel-dim); border-radius: 4px; color: var(--surgical-white); font-size: 13px; padding: 9px 12px`.
- Label: uppercase `10px`, `letter-spacing: 0.10em`, steel.
- Focus: green border and subtle green ring `0 0 0 3px rgba(74,139,110,0.18)`.
- Placeholder: steel at 70% opacity.
- Error: red border and subtle red ring.
- Medication inputs must include dose and route fields.
- Count inputs use tabular numerals.

Procedure card:

- Shell: `background: var(--panel-dark); border: 1px solid var(--steel-dim); border-radius: 8px; padding: 20px 24px`.
- Section label: uppercase small text, steel, margin-bottom `12px`.
- Content: `14px`, surgical-white and steel.
- Label/value grid: `grid-template-columns: auto 1fr; gap: 4px 16px`.
- Procedure cards are calmer than vital panels.
- They support reading, not alarm scanning.

Patient context panel:

- Show patient ID, case number, procedure, room, attending, anesthesia provider, allergies if relevant, and status.
- Patient identity data should be visually clear but not loud.
- Use tissue-pink only for surgical site or identity band accent.
- Avoid decorative patient avatars.

Procedure timeline:

- Horizontal progress bar.
- Track: `height: 4px; background: var(--steel-ghost); border-radius: 2px`.
- Fill: scrub-green.
- Milestones are small ticks with timestamp labels.
- Current milestone can use green label.
- Delayed/advisory milestone can use amber.

Instrument count table:

- Shell: `border: 1px solid var(--steel-dim); border-radius: 8px; overflow: hidden`.
- Header: panel-dark, uppercase steel labels, `10px`.
- Rows: monitor-black, surgical-white, `13px`, top border `1px solid var(--steel-ghost)`.
- Count values right aligned, tabular numerals.
- Correct count: green check text or green status.
- Discrepancy: red left border and red count value.
- Do not rely only on a symbol.

Medication log:

- Row: timestamp, medication, dose, route, provider.
- Timestamp: `11px`, steel, tabular.
- Medication name: surgical-white, `font-weight: 600`.
- Dose/route: steel or oxygen-blue if respiratory/anesthetic gas.
- Critical meds can use amber or red edge markers only when clinically flagged.
- Never use decorative pill tags for drugs.

Event log:

- Rows are terse and timestamped.
- Critical event: red left border.
- Advisory event: amber left border.
- Confirmed event: green left border.
- Recent event: subtle scrub-green background.
- Use the log to preserve procedural sequence.

Navigation:

- Horizontal tab row on dark background.
- Tabs: `VITALS`, `PROCEDURE`, `AIRWAY`, `MEDICATIONS`, `COUNTS`, `LOG`.
- Active tab: white text and green bottom border.
- Inactive: steel text.
- Hover: white text.
- No decorative side nav.

Header:

- Dark shell with bottom steel rule.
- Left: case identifier, room, case number.
- Center or right: local time and elapsed case time.
- Active alarms appear as small annunciators.
- Header must remain compact and readable.

Footer:

- Dark shell with top steel rule.
- Left: system status.
- Center: count summary.
- Right: record/logging status.
- All text is small, uppercase, and calm.
- No marketing footer.

Modals:

- Alert/advisory overlay: `background: var(--panel-dark); border-radius: 8px; padding: 20px 24px; max-width: 440px`.
- Border color matches severity.
- Title: uppercase, bold, severity color.
- Body: steel text, `13px`, line-height `1.5`.
- Backdrop: `rgba(14,17,23,0.75)`.
- No blur.
- No glassmorphism.
- Critical overlay must remain readable instantly.

Badges and annunciators:

- Base: `font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; padding: 3px 8px; border-radius: 4px`.
- `ACTIVE` / `CONFIRMED`: scrub-green fill.
- `CRITICAL`: alert-red fill.
- `CAUTION`: warning-amber fill with black text.
- `STANDBY`: transparent with steel border.
- `INFO`: oxygen-blue outline or low-opacity fill.

---

**interaction language**

Hover:

- Panels and rows use `background: rgba(255,255,255,0.04)`.
- Borders brighten one step toward steel.
- Buttons lighten from 6% to 10% white fill.
- Hover transitions: `0.2s ease`.
- No dramatic motion.

Active:

- Buttons depress by `translateY(1px)` over `0.1s`.
- Active panel state uses green border or subtle green fill.
- Critical active states snap to red without delay.
- No scale.
- No bounce.

Focus:

- `outline: 2px solid var(--scrub-green); outline-offset: 2px`.
- Inputs use green border and soft green ring.
- Critical controls can use red border plus white focus outline.
- Focus must be clear for keyboard navigation.
- Never remove focus.

Selected:

- Selected tab gets green bottom border.
- Selected row gets `background: rgba(74,139,110,0.10)`.
- Selected panel gets green border.
- Selected instrument count should expose item name and count status.

Disabled:

- `opacity: 0.30`.
- `pointer-events: none`.
- Disabled items fade strongly because unavailable clinical controls must not invite action.
- Do not use cute disabled copy.

Drag:

- Used for monitor layout, count reordering, or timeline rearrangement only.
- Drag source: `cursor: grabbing; opacity: 0.9; border-color: var(--scrub-green)`.
- Shadow: `0 4px 16px rgba(0,0,0,0.5)`.
- Drop target: green outline.
- Keep movement restrained.

Acknowledgement:

- Acknowledged alarm becomes logged and subdued.
- Silenced alarm remains visible.
- Critical states cannot disappear without a trace.
- Record the action in event log.

---

**motion & feedback**

Motion is calm, fast, and clinically meaningful.

Default transitions:

- `0.2s` to `0.3s ease` for hover, focus, and non-critical status.
- `0.1s` for button press.
- Critical red state changes snap instantly.
- Never use transitions longer than `0.3s`.

ECG and waveform motion:

- Continuous by default.
- ECG scroll period tracks heart-rate conceptually.
- SpO2 and capnography traces scroll at their own rhythm.
- If a trace is stopped, show explicit disconnected or paused state.
- The trace is not decorative; it is a live signal metaphor.

Loading:

- Thin `2px` scrub-green bar sweeps across panel bottom.
- Text can read `CONNECTING MONITOR`, `LOADING CASE`, or `SYNCING RECORD`.
- No spinner.
- No skeleton.
- Content fades in after connection over `0.25s`.

Success:

- Panel flashes green at low opacity for `0.4s`.
- Badge appears: `CONFIRMED`, `COUNT COMPLETE`, `EVENT LOGGED`, `CASE CLOSED`.
- Badge can auto-dismiss after `2s`.
- Trace continues uninterrupted.

Caution:

- Amber border and badge.
- Text must name the condition.
- No flashing unless the state is urgent.
- Example: `COUNT PENDING`, `VALUE MARGINAL`, `VERIFY SENSOR`.

Critical alert:

- Red border snaps immediately.
- Pulse edge: `alert-pulse 1.2s ease-in-out infinite`.
- Header annunciator reads `ALARM ACTIVE`.
- Body text states the value or discrepancy.
- Do not animate the value in a way that hurts readability.

Error:

- Red text, red border, clear directive.
- Examples: `VALUE OUT OF RANGE - VERIFY SENSOR`, `CASE RECORD INCOMPLETE`.
- No shake.
- No friendly apology.

Page enter:

- Panels populate together.
- Values can count from zero to current over `0.4s ease-out`.
- Traces start immediately.
- The OR system feels live, not freshly booted.

---

**atmosphere**

The atmosphere is a darkened surgical room.

The patient monitor glows.

The instrument count is exact.

The procedure record is being written as the case proceeds.

The visual language is controlled, sterile, and deliberate.

Primary layout:

- Upper area: vital sign monitor wall.
- Lower area: procedure context, instrument counts, medications, and event log.
- Monitor panels use tight `2px` to `4px` gaps.
- Context panels use larger spacing.
- Header and footer remain compact.

Visual references:

- Anesthesia workstation.
- Multiparameter patient monitor.
- Scrub tech count board.
- Circulator case log.
- Stainless steel tray.
- Scrub-green sterile drapes.
- Clinical white surgical lamps.

Light:

- The monitor face is dark.
- Text and traces provide light.
- ECG trace glow is the main atmosphere.
- Avoid ambient gradients.
- Avoid decorative lighting.

Texture:

- Surfaces are matte.
- No paper.
- No biological texture.
- No blood/red decorative theme.
- No background photography.
- Steel appears through color and borders, not metallic effects.

Information density:

- Vitals are high-density and glanceable.
- Procedure panels are medium-density and readable.
- Event logs are compact but timestamped.
- Every value needs units or clinical abbreviation.

This genome must feel human-critical without becoming dramatic.

The calm is part of the authority.

---

**editorial voice**

The voice is clinical, procedural, and direct.

It does not apologize.

It does not joke.

It records.

Button labels:

- `ACKNOWLEDGE`
- `SILENCE ALARM`
- `START CASE`
- `END CASE`
- `ADD EVENT`
- `RECOUNT`
- `PRINT LABEL`
- `CONFIRM COUNT`
- `RECORD DOSE`
- `PAUSE TIMER`
- `VERIFY SENSOR`

Section labels:

- `CURRENT PROCEDURE`
- `PATIENT`
- `SURGEON`
- `ANESTHESIA PROVIDER`
- `ANESTHESIA TYPE`
- `AIRWAY`
- `POSITION`
- `ELAPSED TIME`
- `SCHEDULED DURATION`
- `ROOM`
- `INSTRUMENT COUNT`

Vital labels:

- `HR`
- `SpO2`
- `NIBP`
- `ETCO2`
- `TEMP`
- `RR`
- `MAP`
- `CVP`
- `FiO2`
- `ISO%`
- `TIDAL VOL`

Metadata:

- `OR-3 - CASE #2604 - 08:14 LOCAL - 02:34:17 ELAPSED`
- `ATTENDING: DR. HUANG - RESIDENT: DR. OSEI`
- `PROCEDURE: RIGHT TOTAL HIP ARTHROPLASTY`
- `INCISION: 08:47 - TOURNIQUET ON: 09:02`
- `ROOM: OR-3 - STATUS: ACTIVE`

Instrument count examples:

- `SPONGES: 4/4 CONFIRMED`
- `RAY-TEC: 12/12 CONFIRMED`
- `NEEDLES: 3/3 CONFIRMED`
- `COTTONOIDS: 8/8 CONFIRMED`
- `INSTRUMENTS: 47/47 CONFIRMED`
- `SPONGES: 3/4 DISCREPANCY`

Medication log examples:

- `09:14:32 PROPOFOL 200 mg IV - DR. OSEI`
- `09:15:01 SUCCINYLCHOLINE 100 mg IV - DR. OSEI`
- `09:22:47 CEFAZOLIN 2 g IV - CIRCULATOR`

Event log examples:

- `08:47:03 - INCISION`
- `09:02:11 - TOURNIQUET APPLIED - 350 mmHg`
- `09:44:30 - IMPLANT SEATED`
- `10:12:17 - TOURNIQUET RELEASED`

Placeholders:

- `ENTER DRUG NAME`
- `DOSE (mg)`
- `SEARCH MED RECORD`
- `CASE NOTE`
- `SCAN INSTRUMENT`
- `ENTER COUNT`

Empty states:

- `NO ACTIVE EVENTS.`
- `AWAITING COUNT CONFIRMATION.`
- `NO MEDICATIONS LOGGED.`
- `CASE NOT STARTED.`
- `NO ALARMS ACTIVE.`

Errors:

- `COUNT DISCREPANCY: SPONGES. RECOUNT REQUIRED.`
- `ALARM LIMIT EXCEEDED: HR > 120.`
- `VALUE OUT OF RANGE - VERIFY SENSOR.`
- `CASE RECORD INCOMPLETE.`
- `SENSOR DISCONNECTED: SpO2.`

Success:

- `COUNT CONFIRMED.`
- `CASE CLOSED.`
- `EVENT LOGGED.`
- `ALARM SILENCED.`
- `DOSE RECORDED.`

Writing rules:

- Use clinical abbreviations where they are standard.
- Include units.
- Include timestamps.
- Use direct imperatives.
- Use periods.
- Avoid emotional language.
- Avoid consumer-friendly softening.
- Every message should be actionable or recordable.

---

**cursor & selection**

Global cursor: `default`.

Buttons, tabs, clickable panels, and log entries: `pointer`.

Editable fields: `text`.

Draggable panel elements: `grab`.

Dragging: `grabbing`.

Disabled controls: `default`.

Do not use custom cursors.

Do not use medical novelty cursors.

Selection:

```css
::selection {
  background: var(--scrub-green);
  color: var(--surgical-white);
}
```

Selected rows use subtle green fill and clear status text.

Selected count discrepancies remain red even when selected.

Selected vital panels preserve waveform visibility.

---

**when to reach for this genome**

Use `sterile_field.surg` when the prompt asks for surgical interfaces, operating room dashboards, clinical monitoring, vital signs, anesthesia workstations, instrument counts, medication logs, procedure timelines, case records, hospital OR tools, scrub workflows, perioperative checklists, or real-time patient-monitor-style UI.

Use it when the product should feel clinical, precise, dark, sterile, high-trust, and human-critical.

Use it for interfaces where live values, traces, count reconciliation, procedural logs, alarm states, and exact timestamps matter.

Use it for surgical simulation tools, hospital workflow prototypes, operating-room status boards, procedure tracking, anesthesia record mockups, instrument tray management, sterile processing dashboards, and clinical training surfaces.

Use it when the main UI can be a monitor wall plus case context, not a friendly consumer health app.

Do not choose it for general wellness, fitness, consumer telehealth, biotech lab dashboards, genomics tools, or specimen tracking.

For biotech or organism tracking, prefer `biosequence_lab.gen`.

For broader hospital administrative dashboards, use this only if the OR/surgical context is central.

For emergency dispatch or command screens, prefer a command or surveillance genome.

This genome is strongest when the output can be dark, clinical, trace-driven, timestamped, and procedural.

---

**anti-patterns - this genome NEVER:**

1. never uses soft wellness aesthetics, pastel health colors, friendly rounded consumer cards, or lifestyle medical imagery.
2. never uses border-radius above `8px` for monitor panels or above `4px` for data/instrument elements.
3. never uses warm saturated backgrounds, decorative red fields, or blood-themed styling.
4. never stops or hides a live trace without an explicit disconnected, paused, or no-signal state.
5. never uses serif, script, decorative, handwritten, or playful fonts.
6. never uses gentle apologetic copy such as "Oops", "Sorry", "No worries", or "Looks like".
7. never uses transitions longer than `0.3s`, spring physics, bounce, confetti, or celebratory success effects.
8. never uses blur, glassmorphism, frosted panels, or translucent monitor overlays that reduce legibility.
9. never uses icons or emoji as the only carrier of clinical meaning; text labels and units are mandatory.
10. never omits units, timestamps, clinical abbreviations, count totals, or provider/source context when those values are shown.
11. never conflates surgical OR monitoring with biotech specimen tracking or wellness app design.
12. never treats alerts as decorative. red and amber states must name the issue and required review/action.
