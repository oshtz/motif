---
id: "72"
name: geocities_page.www
keywords:
  - geocities
  - 90s web
  - retro internet
  - homepage
  - personal page
  - web 1.0
  - angelfire
  - tripod
  - netscape
  - old web
  - nostalgic
  - amateur
---

### genome 72: `geocities_page.www`

> identity: a 1997 personal homepage hosted on GeoCities, Angelfire, or Tripod: tiled starfields, table layouts, visitor counters, guestbooks, web rings, beveled browser-default buttons, rainbow rules, under-construction banners, hand-coded Notepad enthusiasm, and a proud lack of modern taste. This is the old web as a bedroom wall, not a polished retro brand system.

---

**surface**

The surface is amateur web.

It is earnest.

It is hand-built.

It is loud because the author has just discovered that every HTML tag can have color.

The page should feel like it was uploaded by FTP after midnight, checked in Netscape Navigator, and linked from an AIM profile.

Core palette:

- `--gc-navy: #000080` for the classic dark blue body background, old-web panels, and link-era page fields.
- `--gc-royal: #0000CC` for alternate blue panels, selected text, active links, and table headers.
- `--gc-blue: #0000FF` for default unvisited links and browser-standard link references.
- `--gc-yellow: #FFFF00` for major headings, emphasis, warning banners, starburst labels, and important text.
- `--gc-lime: #00FF00` for "new", "updated", counter text, success messages, and fluorescent secondary emphasis.
- `--gc-hotpink: #FF00FF` for fun links, magenta decorations, personal-page accents, and guestbook calls.
- `--gc-cyan: #00FFFF` for secondary headings, visited-style accents, and web-ring details.
- `--gc-red: #FF0000` for "hot", broken links, error messages, construction warnings, and flame energy.
- `--gc-white: #FFFFFF` for readable body text on dark backgrounds and table cells.
- `--gc-black: #000000` for high-contrast table cells, text on silver controls, and shadow strokes.
- `--gc-silver: #C0C0C0` for default browser chrome, table bevels, visitor counters, HR fallbacks, and form controls.
- `--gc-gray: #808080` for disabled text, old dialog borders, and faded metadata.

All colors are hard web-safe extremes.

No subtle palette tuning.

No tasteful desaturation.

No modern warm neutral backgrounds.

Typography:

- Body font: `"Times New Roman", Times, serif`.
- Body size: `14px`.
- Body weight: `400`.
- Body line-height: `1.35` to `1.45`.
- Fun heading font: `"Comic Sans MS", "Comic Sans", cursive`.
- H1 size: `36px` to `44px`.
- H2 size: `26px` to `32px`.
- H3 size: `20px` to `24px`.
- Counter and code font: `"Courier New", Courier, monospace`.
- Counter size: `12px` to `16px`.
- Navigation link size: `16px`.
- Footer size: `11px` to `12px`.

Use `text-align: center` far more than a modern designer would tolerate.

Links are underlined.

Body copy can be centered.

Lists and guestbook entries may be left aligned inside bordered table cells.

Italic and bold tags are allowed to feel manually applied.

Borders:

- Primary table border: `2px ridge var(--gc-silver)`.
- Raised control border: `3px outset var(--gc-silver)`.
- Pressed control border: `3px inset var(--gc-silver)`.
- Dark cell border: `2px groove var(--gc-silver)`.
- Image border: `2px solid var(--gc-yellow)` or `2px solid var(--gc-hotpink)`.
- Radius: `0px` globally.
- Table spacing: `border-collapse: separate; border-spacing: 2px`.

Spacing:

- Main wrapper: `width: 640px; max-width: 640px; margin: 0 auto`.
- Page padding: `8px` to `16px`.
- Table cell padding: `4px` to `8px`.
- Section margin: often simulated with `<br>` energy.
- HR margin: `8px 0` to `14px 0`.
- Guestbook row padding: `6px`.
- Nav padding: `6px 12px`.

The composition should look fixed-width.

It should not fluidly breathe.

It should behave as if the target monitor is 800 by 600.

---

**color distribution**

32% navy and royal blue.

The body background, large tables, side panels, and broad page fields use `#000080` and `#0000CC`.

18% white.

Body text, page copy, table content, and default readable text use pure white on dark surfaces.

14% yellow.

Headings, emphasis, under-construction warnings, starburst labels, and section titles use pure yellow.

11% hotpink and cyan.

Links, secondary headings, web-ring details, guestbook calls, and fun accents use magenta and cyan.

9% lime.

Visitor counters, "new", "updated", success messages, and active status use fluorescent green.

6% red.

Errors, "hot", flame labels, broken link warnings, and caution copy use red.

6% silver and gray.

Beveled borders, default buttons, old dialogs, disabled controls, and counter boxes use browser chrome colors.

4% black.

High-contrast cells, text shadows, old dialog title bars, and decorative striping use black.

The overall effect should be saturated and uneven.

Color balance should feel discovered, not art-directed.

---

**component patterns**

Page shell:

- Body background uses `var(--gc-navy)` plus tiled starfield dots.
- Main wrapper: `width: 640px; margin: 0 auto; text-align: center`.
- Page begins with a decorative title, rainbow HR, nav links, and a welcome message.
- Sections are table cells, not modern cards.
- The page can scroll vertically with many unrelated modules stacked together.

Tiled background:

- Use repeated small CSS radial dots or a simple repeating pattern.
- CSS fallback: several `radial-gradient(1px 1px at X Y, var(--gc-white), transparent)` layers.
- `background-size: 250px 120px`.
- Repeat in both directions.
- Starfield is preferred.
- Checkerboard, tiny hearts, or tiled clouds can be used only when the prompt asks for a specific personal-page subject.

Buttons:

- Browser-style button: `background: var(--gc-silver); color: var(--gc-black); border: 3px outset var(--gc-silver); border-radius: 0; font-family: "Times New Roman", serif; font-size: 14px; padding: 4px 16px`.
- Active button: `border-style: inset`.
- Fun button: navy background, yellow text, ridge silver border.
- Guestbook button: silver button with label such as `Sign Guestbook!`.
- No icon button polish.
- No pill buttons.
- No modern spacing.

Inputs:

- Text input: `background: var(--gc-white); color: var(--gc-black); border: 2px inset var(--gc-silver); border-radius: 0; font-family: "Times New Roman"; font-size: 14px; padding: 2px 4px`.
- Textarea: same inset border, fixed `cols` and `rows` feeling.
- Select: default silver browser control.
- Labels are plain text above or beside fields.
- Form table cells can hold labels in left column and inputs in right column.
- Placeholder copy is simple and direct.

Tables:

- Tables are the primary layout system.
- Shell: `width: 100%; border: 2px ridge var(--gc-silver); border-collapse: separate; border-spacing: 2px; background: var(--gc-navy)`.
- Header cell: `background: var(--gc-black); color: var(--gc-yellow); font-family: "Comic Sans MS"; font-size: 16px; border: 2px outset var(--gc-silver); padding: 6px`.
- Body cell: `background: var(--gc-navy); color: var(--gc-white); font-family: "Times New Roman"; font-size: 14px; border: 2px outset var(--gc-silver); padding: 4px 8px; text-align: center`.
- Nested table: allowed and encouraged.
- Cell background colors may clash.
- Do not flatten the table structure into modern cards.

Cards:

- There are no modern cards.
- Use table cells or bordered boxes.
- Content box: `background: var(--gc-navy); border: 2px ridge var(--gc-silver); padding: 8px; color: var(--gc-white); text-align: center`.
- Dark content box: `background: var(--gc-black); border: 2px groove var(--gc-silver)`.
- Highlight box: yellow background, black text, red border.
- Award box: silver border around a small "award" image placeholder and caption.

Navigation:

- Text links separated by pipes, brackets, or arrows.
- Canonical pattern: `[ Home | About Me | My Links | Guestbook | Webrings ]`.
- Link style: `color: var(--gc-hotpink); text-decoration: underline; font-family: "Comic Sans MS"; font-size: 16px`.
- Pipe separators: yellow or white.
- Nav can sit in a black table row with ridge border.
- No dropdowns.
- No hamburger menu.
- No sticky modern app nav.

Headers:

- H1: centered Comic Sans, yellow, large, with black text-shadow.
- Pattern: `~*~ Welcome to My Homepage!! ~*~`.
- Decoration can include ASCII tildes, asterisks, brackets, and repeated punctuation.
- Rainbow HR above and below.
- Subheads can be cyan or lime.
- Use excessive punctuation.

Footers:

- Footer is centered, small, and packed with old-web metadata.
- Include last updated date.
- Include visitor counter.
- Include email link.
- Include web ring links.
- Include "Best viewed in Netscape Navigator 4.0 at 800x600".
- Include "Made with Notepad" or "Hosted on GeoCities".
- Use silver text and small Times or Courier.

Lists:

- Use browser-default `disc` or `square`.
- Bullets can be manually typed: `*`, `>`, `-`, or `--`.
- Lists often sit inside a bordered table cell.
- Align list text left inside an otherwise centered page.
- Link lists can use bright magenta or blue underlined anchors.
- Favorite-links pages should feel like directories of hand-picked sites.

Dividers:

- Rainbow HR is signature.
- CSS: `height: 3px; border: none; background: linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF)`.
- Silver HR fallback: `height: 2px; background: var(--gc-silver)`.
- ASCII divider: `~*~*~*~*~*~` or `=-=-=-=-=-=-=`.
- Use dividers frequently.

Modals:

- Prefer inline messages or browser-alert energy.
- If a modal is required, render it like a Windows 95 dialog.
- Shell: `background: var(--gc-silver); border: 3px outset var(--gc-silver); border-radius: 0; color: var(--gc-black); font-family: "Times New Roman"; padding: 0`.
- Title bar: `background: var(--gc-navy); color: var(--gc-white); padding: 4px 8px; font-weight: 700; text-align: left`.
- Body: `padding: 16px`.
- Close button: `[X]` in a tiny outset square.
- Backdrop: plain semi-transparent black.
- No blur.

Badges:

- Badges are inline text, not pills.
- `NEW!`: red or lime, blinking.
- `HOT!`: red text on yellow rectangle with red border.
- `COOL!`: cyan.
- `UPDATED!`: lime.
- `UNDER CONSTRUCTION`: yellow and black striped rectangle.
- `AWARD WINNER`: small bordered badge with fake seal energy.
- No rounded badges.

Visitor counter:

- Counter box: black background, lime or red monospace digits, silver inset border.
- Text: `You are visitor #004821`.
- Digits can be separated into small boxes.
- Font: Courier New.
- Place counter near footer or top welcome panel.

Guestbook:

- Guestbook form uses a table layout.
- Name, email, website, and message fields.
- Submit button says `Sign Guestbook!`.
- Existing entries are bordered rows with date, name, and message.
- Success message says `Thanks for signing my guestbook!!`.

Web ring:

- Small footer module.
- Pattern: `[<< Prev | Hub | Next >>]`.
- Label: `Member of the Retro Web Ring`.
- Border: ridge silver.
- Background: black or navy.
- Link colors: hotpink, cyan, yellow.

Under-construction panel:

- Background: repeating yellow and black diagonal stripes.
- Inner text: red or black, all caps, Comic Sans.
- Use for incomplete sections, loading placeholders, and "coming soon".
- It should be intentionally loud.

Images and placeholders:

- Images use fixed pixel dimensions and borders.
- Broken image-style placeholders are acceptable when the prompt asks for old-web incompleteness.
- CSS approximations of animated GIFs are allowed: spinning badge, blinking text, flame bar, construction stripe.
- Always center images unless the content is a left-aligned link list.

---

**interaction language**

Hover:

- Link hover changes color instantly, usually from hotpink or blue to yellow.
- Underline remains visible.
- Button hover can switch background to yellow and text to black.
- Table cells may not respond at all.
- `transition: none`.
- No scale.
- No shadow.
- No easing.

Active:

- Button active state reverses bevel with `border-style: inset`.
- Link active state can turn red.
- Guestbook submit can show pressed silver button.
- No transform.
- No animation except blink/marquee already running.

Focus:

- Use browser-default dotted focus energy.
- CSS: `outline: 1px dotted var(--gc-black); outline-offset: 1px`.
- On dark backgrounds, use `outline-color: var(--gc-yellow)`.
- Do not remove focus.
- Do not replace with modern glow.

Selected:

- Text selection: royal blue background and white text.
- Selected table row can become navy with yellow text.
- Selected link can use red or cyan.
- Selected nav item can be bracketed with `>>` and `<<`.

Disabled:

- Disabled text is gray.
- Disabled button keeps silver chrome but looks flat or ridge.
- Use `color: var(--gc-gray)`.
- Do not use opacity blur or modern disabled treatment.

Drag:

- Drag-and-drop is not native to this world.
- If required for a modern product, keep it crude.
- Drag source: `opacity: 0.7`.
- Drop target: dashed yellow border.
- No ghost preview polish.
- No physics.

Links:

- Links are the primary interaction.
- They should look like links.
- Underline always.
- Blue, hotpink, yellow, cyan, and red are acceptable.
- Do not make links look like subtle text buttons.

Form validation:

- Error appears as red inline text with `ERROR!!`.
- Success appears as lime text with multiple exclamation marks.
- Required fields can be marked with red asterisks.
- No tasteful toast notifications.

---

**motion & feedback**

Motion is crude, looping, and attention-seeking.

No smooth modern animation.

Marquee:

- Announcement text can scroll horizontally.
- CSS: `animation: marquee-scroll 12s linear infinite`.
- Text examples: `WELCOME TO MY PAGE!!!`, `SIGN MY GUESTBOOK!!!`, `NEW LINKS ADDED!!!`.
- The motion should feel like an HTML marquee.

Blink:

- Use `animation: gc-blink 1s step-end infinite`.
- Apply to `NEW!`, `HOT!`, and `UNDER CONSTRUCTION!!`.
- Blink is abrupt.
- Do not soften it.

Spin:

- A small badge or email icon may spin.
- Use `animation: spin 2s linear infinite`.
- Keep it small, like a 24px to 40px GIF.
- Do not use 3D polish.

Loading:

- Text: `Loading... please wait`.
- Font: Courier New.
- Color: lime.
- Optional construction stripe square as a CSS animated-GIF substitute.
- Optional visitor counter increment.
- No spinner component.
- No skeleton.

Success:

- Lime or yellow text appended inline.
- Examples: `Thanks for visiting!!`, `You signed my guestbook!!`, `Message sent!!`.
- Can blink once or simply appear.
- No toast component.

Error:

- Red text.
- Examples: `ERROR!! Something went wrong.`, `404 - File Not Found`, `This link is broken :(`.
- Can blink if important.
- No subtle validation icons.

Page transitions:

- None.
- Page content appears all at once.
- Images may appear as if loading top-down.
- No fade-in.
- No stagger.
- No route animation.

Allowed decorative motion:

- Marquee.
- Blink.
- Spinning 2D badge.
- Flame-strip color step.
- Construction stripe shift.

Everything else should be static.

---

**atmosphere**

The atmosphere is a personal homepage.

It is a scrapbook.

It is a bedroom wall.

It is a links page, a guestbook, a web ring, a counter, and a half-finished "cool stuff" section.

Background:

- Dark blue starfield is the default.
- The starfield tiles.
- The main content column is fixed at 640px.
- Body scrolls vertically.
- The page does not attempt to be responsive.

Layout feeling:

- Centered title.
- Rainbow divider.
- Link row.
- Welcome paragraph.
- Table of sections.
- Guestbook call.
- Links page.
- Under construction area.
- Counter and footer.

Old-web artifacts:

- Visitor counter.
- Guestbook.
- Email link.
- Web ring.
- "Best viewed in Netscape Navigator".
- "Last updated" date.
- "Made with Notepad".
- "Vote for my site".
- "Awards I won".
- "Under construction".
- "Cool links".

Decorative texture:

- Starfield dots.
- Rainbow HR.
- Yellow-black construction stripes.
- Silver bevels.
- ASCII dividers.
- Faux animated GIF boxes.
- Repeated small badges.

Composition:

- Cluttered but legible.
- Earnest but chaotic.
- Amateur but specific.
- Fixed width.
- Centered.
- Table based.
- Content modules stack without modern hierarchy.

The page should feel loved, not professionally designed.

The best result is charmingly wrong by modern standards.

It should look like someone learned HTML last week and discovered they could make their favorite thing public.

---

**editorial voice**

The voice is enthusiastic personal-web copy.

It is direct.

It overuses punctuation.

It decorates headings with ASCII.

It talks to visitors because the internet still feels like a guestbook party.

Button labels:

- `Click Here!!`
- `Enter My Page`
- `Sign My Guestbook!`
- `Go!`
- `Submit`
- `Send`
- `Vote for My Site!`
- `Add to Favorites`
- `Email Me!`
- `View My Links`
- `Back Home`

Headings:

- `~*~ Welcome to My Homepage!! ~*~`
- `About Me`
- `My Favorite Links`
- `Cool Stuff!!`
- `What's New!`
- `Awards I've Won`
- `Under Construction!!`
- `Sign My Guestbook!`
- `My Web Rings`
- `Email Me!!`

Metadata:

- `Last updated: March 15, 1997`
- `You are visitor #004821`
- `Best viewed in Netscape Navigator 4.0 at 800x600`
- `Made with Notepad`
- `Hosted on GeoCities`
- `Member of the Astronomy Web Ring`
- `This page is always under construction`

Placeholder text:

- `Type your name here`
- `Enter your email`
- `Write a message`
- `Search my page`
- `Your homepage URL`
- `Tell me what you think!`

Empty states:

- `This page is under construction!! Come back soon!!`
- `Nothing here yet... check back later!`
- `More coming soon!!!`
- `No guestbook entries yet!! Be the first!`
- `Links coming soon!!`

Error text:

- `ERROR!! Something went wrong.`
- `404 - File Not Found`
- `This link is broken :(`
- `Sorry, the guestbook is full!`
- `Could not load image!!`

Success text:

- `Thanks for visiting!!`
- `Your message has been sent!!`
- `You signed my guestbook!! :)`
- `Welcome!!!!`
- `Link added!!`

Writing rules:

- Use exclamation marks.
- Use ASCII smileys such as `:)`, `:-D`, and `^_^`.
- Use `~`, `*`, `[ ]`, `< >`, and `|` as decorative characters.
- Use simple human phrasing.
- Do not sound corporate.
- Do not sound minimalist.
- Do not sound like a modern product manager.

---

**cursor & selection**

Global cursor: `default`.

Links: `pointer`.

Buttons: default or pointer is acceptable, but avoid modern cursor choreography.

Inputs: `text`.

Disabled controls: `default`.

No custom cursors unless the user explicitly asks for old-web cursor novelty.

Do not use smooth cursor effects.

Do not use hover-following graphics.

Selection:

```css
::selection {
  background: var(--gc-royal);
  color: var(--gc-white);
}
```

Selected navigation links can be bracketed: `>> Home <<`.

Selected table rows can use navy fill and yellow text.

Selected guestbook entries can use a silver inset border.

Keep all selection effects immediate and rectangular.

---

**when to reach for this genome**

Use `geocities_page.www` when the prompt asks for GeoCities, Angelfire, Tripod, Netscape, web 1.0, 90s internet, personal homepage, guestbook, web ring, old web nostalgia, amateur HTML, tiled backgrounds, visitor counters, under-construction pages, retro fan sites, link directories, hobby pages, school-computer-lab websites, or early internet charm.

Use it when the product should feel handmade, chaotic, personal, and historically web-native.

Use it for playful landing pages, retro fan pages, portfolio experiments, nostalgia tools, personal archives, museum exhibits about the old web, and intentionally amateur micro-sites.

Use it when the user wants "first website" energy rather than polished retro design.

Use it when fixed-width table layout, saturated color, default fonts, and loud decoration are assets.

Use it for interfaces where guestbook, links, updates, counters, and "coming soon" sections are conceptually useful.

Do not choose it for serious production SaaS dashboards unless the prompt explicitly wants old-web parody or nostalgic theming.

Do not choose it for pixel-art games; use a pixel or handheld genome instead.

Do not choose it for terminal, hacker, or BBS interfaces; use a terminal or CRT genome instead.

Do not choose it when the user asks for refined retro, Swiss retro, vaporwave, or Y2K chrome polish.

This genome is strongest when the output can afford to be fixed-width, cluttered, link-heavy, personal, saturated, and deliberately pre-CSS.

---

**anti-patterns - this genome NEVER:**

1. never uses rounded corners. the old web is rectangles, tables, default controls, and hard browser chrome.
2. never uses modern font stacks such as Inter, system-ui, Helvetica Neue, or polished sans-serif branding. use Times New Roman, Comic Sans MS, and Courier New.
3. never uses smooth transitions, easing, spring motion, modern hover polish, route fades, or tasteful animation.
4. never uses subtle muted palettes, warm neutrals, carefully tuned gradients, soft pastels, or contemporary brand color systems.
5. never treats whitespace as luxury. the page is cluttered, centered, table-based, and full of visible section breaks.
6. never uses glassmorphism, backdrop blur, soft card shadows, neumorphism, glossy app chrome, or modern visual effects.
7. never behaves like a responsive app shell. the target is a fixed 640px page inside an 800x600 mental screen.
8. never uses minimalist lowercase copy, restrained punctuation, corporate UX voice, or polished onboarding language.
9. never uses modern icon systems, SVG illustration sets, lucide-style toolbar icons, or design-system tokens as the main visual language.
10. never hides links by making them subtle. links must be visible, underlined, and obviously clickable.
11. never removes old-web artifacts such as counters, guestbooks, web rings, last-updated text, email links, or under-construction panels when they fit the prompt.
12. never makes the nostalgia too tasteful. the genome must preserve amateur excess, saturated color, and hand-coded charm.
