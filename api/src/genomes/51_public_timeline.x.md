---
id: "51"
name: public_timeline.x
keywords:
  - twitter
  - x
  - social
  - feed
  - timeline
  - microblog
  - social media
  - post
  - follow
  - trending
  - thread
  - notification
---

### genome 51: `public_timeline.x`

> identity: the global public feed. stark black-and-white canvas with a single blue accent, pill-shaped actions, circular avatars, and relentless vertical scroll. X (formerly Twitter) in its current form — Chirp type, pure-black dark mode, the X mark replacing the bird, and the casual intimacy of broadcasting to everyone at once.

**surface**

colors (light mode primary, dark mode "Lights Out" alternate):
```
/* light mode */
--bg: #FFFFFF;
--bg-hover: #F7F9F9;
--bg-secondary: #EFF3F4;
--ink: #0F1419;
--ink-secondary: #536471;
--ink-tertiary: #8B98A5;
--blue: #1D9BF0;
--blue-hover: #1A8CD8;
--blue-light: rgba(29, 155, 240, 0.1);
--border: #EFF3F4;
--border-strong: #CFD9DE;
--danger: #F4212E;
--success: #00BA7C;
--like: #F91880;

/* dark mode ("Lights Out" — pure AMOLED black) */
--bg-dark: #000000;
--bg-hover-dark: #1D1F23;
--bg-secondary-dark: #16181C;
--ink-dark: #E7E9EA;
--ink-secondary-dark: #71767B;
--border-dark: #2F3336;
```

typography:
- primary font stack: `"Chirp", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. Chirp is a custom sans-serif by Grilli Type blending American Gothic and European Grotesque
- display/profile names: weight 800, `font-size: 20–31px`, `line-height: 1.2`, `letter-spacing: -0.02em`
- body/post text: weight 400, `font-size: 15px`, `line-height: 20px` — the canonical post text size, never deviate
- post detail view: weight 400, `font-size: 17px`, `line-height: 24px`
- compose text: weight 400, `font-size: 20px`, `line-height: 28px`
- display name inline: weight 700, `font-size: 15px`, `line-height: 20px`
- @handle / timestamp: weight 400, `font-size: 15px`, `line-height: 20px`, `color: var(--ink-secondary)`
- small metadata / counts: weight 400, `font-size: 13px`, `line-height: 16px`, `color: var(--ink-secondary)`
- count labels (followers, likes): weight 700, `font-size: 13px`
- tab nav text: weight 500–700, `font-size: 15px`, `line-height: 20px`
- no uppercase transforms. `text-transform` is essentially unused. hierarchy comes from weight (400 → 700 → 800), not case or scale
- `font-weight: 700` is the primary emphasis mechanism

borders:
- `border-radius: 16px` on cards, images, media attachments, sidebar modules, modals
- `border-radius: 12px` on dropdown menus, embedded tweet cards
- `border-radius: 9999px` on buttons (pill), avatars (circle), search inputs, tags, nav item hover backgrounds
- `border-radius: 8px` on tooltips/popovers
- feed item dividers: `border-bottom: 1px solid var(--border)` — bottom only
- no visible card borders — separation is through hairline bottom rules
- avatar sizes: `40x40px` in-feed, `48x48px` DM list, `133.5x133.5px` profile page (with `4px solid var(--bg)` border ring), `32x32px` notifications

spacing:
- feed item padding: `12px 16px`
- content layout: flex row — avatar left + content column right, `gap: 12px`
- sidebar module padding: `12px 16px`
- consistent `16px` horizontal rhythm throughout
- vertical gaps between feed items: `0` — continuous scroll, items separated only by border-bottom
- section thick dividers: `4px` of `--bg-secondary`

**color distribution**

- 70% white (`--bg`) — the blank canvas. in dark mode, pure black `#000000`. content is the color
- 15% secondary gray (`--bg-secondary`, `--border`) — search backgrounds, sidebar module fills, dividers, hover tints
- 10% ink hierarchy (`--ink`, `--ink-secondary`, `--ink-tertiary`) — display names to faint timestamps
- 5% blue (`--blue`) — follow buttons, compose CTA, active tab indicators, links, focus rings. blue is the only chromatic accent. it signals "action" every time it appears and must remain scarce

the genome supports 6 user-selectable accent colors: blue `#1D9BF0` (default), yellow `#FFD400`, rose `#F91880`, purple `#7856FF`, orange `#FF7A00`, green `#00BA7C`. but blue is the canonical default.

**component patterns**

buttons:
- primary (Follow / Post): `background: var(--blue); color: #FFFFFF; border: none; border-radius: 9999px; padding: 0 16px; min-height: 36px; font-weight: 700; font-size: 15px; line-height: 20px; transition: background-color 0.2s ease`. hover: `background: var(--blue-hover)`. disabled: `opacity: 0.5`
- primary large (sidebar compose): same but `min-height: 52px; padding: 0 32px; font-size: 17px; min-width: 236px`
- secondary/outline (Following): `background: transparent; color: var(--ink); border: 1px solid var(--border-strong); border-radius: 9999px; padding: 0 16px; min-height: 36px; font-weight: 700; font-size: 15px`
- danger reveal (Unfollow on hover): `color: var(--danger); border-color: var(--danger); background: rgba(244, 33, 46, 0.1)`. text changes to "Unfollow"
- icon button: `background: transparent; border: none; border-radius: 50%; width: 34.75px; height: 34.75px; display: flex; align-items: center; justify-content: center`. icon in `--ink-secondary`. hover: circular tinted background at 10% opacity of the action color
- button sizes: small `min-height: 32px; padding: 0 12px`, medium `min-height: 36px; padding: 0 16px`, large `min-height: 40–52px; padding: 0 24–32px`

inputs:
- search: `background: var(--bg-secondary); border: 1px solid transparent; border-radius: 9999px; padding: 0 16px 0 48px; height: 42px; font-size: 15px`. search icon absolutely positioned left. focus: `background: var(--bg); border-color: var(--blue); box-shadow: 0 0 0 1px var(--blue)`
- compose textarea: `background: transparent; border: none; font-size: 20px; padding: 12px 0; min-height: 52px; resize: none`. placeholder: `color: var(--ink-tertiary); font-size: 20px`
- no visible labels — placeholders serve as labels

cards/panels:
- feed items: no card wrapper. flex row (avatar + content column), `padding: 12px 16px; border-bottom: 1px solid var(--border)`. hover: `background: var(--bg-hover)`. the CSS reset applies `display: flex; flex-direction: column; flex-shrink: 0; margin: 0; padding: 0; border: 0 solid black; box-sizing: border-box; position: relative; z-index: 0` to all div elements
- sidebar modules ("What's happening", "Who to follow"): `background: var(--bg-secondary); border-radius: 16px; overflow: hidden`. header: `padding: 12px 16px; font-size: 20px; font-weight: 800`. items separated by `1px solid var(--border)`. "Show more" link at bottom in `var(--blue)`
- quoted posts: `border: 1px solid var(--border); border-radius: 16px; padding: 12px 16px; margin-top: 12px`
- media attachments: `border: 1px solid var(--border); border-radius: 16px; overflow: hidden`

navigation:
- vertical sidebar nav (desktop): icon + label pairs, `height: 50px; padding: 0 24px; border-radius: 9999px; font-size: 20px; font-weight: 400`. active: `font-weight: 700` + icon fills solid (outline → filled SVG). hover: `background: var(--bg-secondary)`. icons are 26.25px outlined SVG. below ~1280px viewport, sidebar collapses to icon-only
- bottom tab bar (mobile): horizontal row, icons only, centered. active: filled icon
- X logo at top of sidebar in black (light) or white (dark), simple geometric SVG mark
- no underline indicators, no colored sidebar highlights — weight change and icon fill state are the only active signals

headers:
- page header: `padding: 0 16px; height: 53px; backdrop-filter: blur(12px); background: rgba(255, 255, 255, 0.85); position: sticky; top: 0; z-index: 2; border-bottom: 1px solid var(--border)`. title left `font-weight: 700; font-size: 20px`. optional subtitle `font-size: 13px; color: var(--ink-secondary)`
- profile header: cover image (200px) + overlapping circular avatar (`133.5px; border: 4px solid var(--bg); border-radius: 50%; margin-top: -18%`)

footers:
- no visible footer in the feed. sidebar bottom: minimal links in `font-size: 13px; color: var(--ink-tertiary)` with `·` dot separators

lists:
- no bullets, no numbers. each row: `padding: 12px 16px; border-bottom: 1px solid var(--border)`. hover: `background: var(--bg-hover)`. content: avatar + text column (display name bold, description regular, metadata secondary)
- trending items: category `font-size: 13px; color: var(--ink-secondary)`, trend name `font-weight: 700; font-size: 15px`, post count `font-size: 13px; color: var(--ink-secondary)`

tables:
- rarely used — data is feed items or list rows, not tables
- when needed: no outer border, `border-bottom: 1px solid var(--border)` on rows, header `font-weight: 700; font-size: 13px; color: var(--ink-secondary)`, cell padding `12px 16px`

dividers:
- `1px solid var(--border)` only. no dashed, no dotted. always full-width
- thick section dividers: `4px solid var(--bg-secondary)` between major content sections

modals/overlays:
- `background: var(--bg); border-radius: 16px; max-width: 600px; max-height: 90vh; box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px`
- backdrop: `rgba(91, 112, 131, 0.4)` — no backdrop-filter blur, simple semi-transparent overlay
- modal header: `height: 53px; padding: 0 16px; border-bottom: 1px solid var(--border)`. close (X icon) left, action button (pill, blue) right
- compose modal: full-screen on mobile (no border-radius), `border-radius: 16px` on desktop

badges/tags:
- pill: `background: var(--bg-secondary); border-radius: 9999px; padding: 0 12px; height: 32px; font-size: 14px; font-weight: 700`
- notification dot: `background: var(--blue); color: #FFFFFF; border-radius: 50%; min-width: 18px; height: 18px; font-size: 11px; font-weight: 700`
- verified badge: inline SVG checkmark, blue circle `18x18px`. premium gold badge: `#E2B719`

**interaction language**

- hover: `background: var(--bg-hover)` on feed rows and list items (`rgba(0, 0, 0, 0.03)` light). buttons: background darkens one step. icon buttons: circular tinted background at 10% opacity of action color — reply `rgba(29, 155, 240, 0.1)` + icon `#1D9BF0`, repost `rgba(0, 186, 124, 0.1)` + icon `#00BA7C`, like `rgba(249, 24, 128, 0.1)` + icon `#F91880`. all `transition: 0.2s ease`
- active/pressed: buttons `opacity: 0.85`, no transform. icon buttons: icon scales to `0.9` briefly. like heart: fill animation (scale up + color fill from outline to solid `#F91880`). repost icon fills solid `#00BA7C`
- focus: `outline: none; box-shadow: 0 0 0 2px var(--blue); border-radius: inherit`. inputs: border-color becomes `var(--blue)`
- selected: nav items `font-weight: 700` + icon fills solid. tabs: `font-weight: 700; border-bottom: 4px solid var(--blue); border-radius: 2px`
- disabled: `opacity: 0.5; pointer-events: none`
- drag: `cursor: grabbing`. drag is rarely used in this genome

**motion & feedback**

- transitions: `0.2s ease` for background-color, opacity, transform. `0.15s ease-out` for icon scale. everything animates but quickly — no lingering, no spring physics
- loading: skeleton placeholders shaped like avatars (circles), text lines (rounded rects `border-radius: 4px`), and images. `background: var(--bg-secondary)`. pulsing `opacity: 0.5 → 1` at `1.5s ease-in-out infinite`
- success: like — heart scales to `1.2` with `var(--like)` color burst, settles to `1.0`. follow — button morphs from blue "Follow" to outline "Following" with smooth background/color transition. toast snackbar slides up from bottom
- error: inline red text below element, `color: var(--danger); font-size: 13px`. compose: circular progress indicator fills red past character limit, count text becomes `var(--danger)`. no shaking, no flashing
- toast/snackbar: `position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: var(--blue); color: #FFFFFF; border-radius: 4px; padding: 12px 16px; font-size: 14px`. slides up `translateY(100%) → translateY(0)` over `0.3s`

**atmosphere**

- three-column desktop layout: `grid-template-columns: auto 600px minmax(290px, 350px)`. left sidebar nav (~275px, collapses to icons below 1280px), center feed (600px max, bordered by `1px solid var(--border)` left and right), right sidebar (350px, sticky). total content ~1265px centered
- the center feed column IS the environment. the sidebar is infrastructure. all attention flows to the vertical stream
- sticky header with `backdrop-filter: blur(12px)` — content scrolls behind frosted glass. the only depth effect in the entire genome
- infinite scroll. no pagination. content appears continuously with skeleton loading
- dark mode inverts to pure `#000000` AMOLED black — the "Lights Out" theme. structure is identical, only color values swap. the starkness of black is the identity
- the X logo (geometric sans-serif mark) anchors the top of the sidebar — black on white, white on black. no color, no personality in the mark itself
- no textures, no gradients, no grain, no decorative elements. atmosphere is defined by absence and by content density. the feed items themselves create visual rhythm

**editorial voice**

- button labels: short, direct, capitalized but casual-feeling. `Follow`, `Post`, `Reply`, `Repost`, `Quote`, `Like`, `Share`, `Bookmark`, `Edit profile`, `Show more`, `See new posts`, `Log in`, `Sign up`
- headings: sentence case, direct, no terminal punctuation. `Home`, `Explore`, `Notifications`, `Messages`, `Profile`, `What's happening`, `Trends for you`, `Who to follow`, `Search`
- metadata: relative timestamps — `2m`, `14h`, `Mar 15`, `Jun 23, 2023`. abbreviated counts — `1.2K`, `45.6K`, `3.1M`. joined dates — `Joined March 2012`. dates in detail view: `12:34 PM · Mar 15, 2026`
- placeholders: casual, direct: `What is happening?!`, `Search`, `Add a comment`, `Start a new message`
- empty states: `Nothing to see here — yet.`, `When someone mentions you, you'll find it here.`, `Join the conversation.`, `Be the first to reply!`
- error messages: plain, brief: `Something went wrong. Try again.`, `This post is unavailable.`, `Couldn't load.`, `Rate limit exceeded.`
- success messages: toast-style, flat: `Your post was sent.`, `Bookmarked.`, `Copied to clipboard.`, `Repost removed.`

**cursor & selection**

- default: `cursor: default` on body
- interactive: `cursor: pointer` on all buttons, links, feed items, avatars, nav items
- text inputs: `cursor: text`
- disabled: `cursor: not-allowed`
- `::selection { background: var(--blue-light); color: var(--ink); }` — light blue highlight

**when to reach for this genome**

Use `public_timeline.x` when the prompt asks for a social feed, microblogging product, public timeline, creator profile, notifications view, message inbox, trending-topic surface, follow recommendations, post composer, repost/like/bookmark actions, quote-post UI, or an X/Twitter-style product.

Use it when the experience should be feed-first: a single continuous stream of posts, replies, profile rows, and lightweight actions separated by hairline dividers.

Use it when the product needs a stark, content-led interface with circular avatars, pill CTAs, sticky headers, vertical desktop navigation, bottom mobile tabs, infinite scroll, skeleton loading, and casual social copy.

Use it for products where social presence matters more than visual ornament: community timelines, internal status feeds, incident updates, public changelogs, creator updates, customer communities, and short-form discussion streams.

Use it when the user explicitly references Twitter, X, tweets, posts, follows, likes, reposts, threads, quote posts, trends, blue accent, lights-out dark mode, or social media notifications.

Do not choose it just because the prompt contains "dashboard" or "list"; this genome is specifically a social timeline grammar, not a general data-table or analytics surface.

For older bird-era Twitter nostalgia, keep the same feed grammar but bias the copy and iconography less severe and less X-branded.

For a chaotic old-web social page, prefer `geocities_page.www`.

For dense technical event logs, prefer a terminal, surveillance, or flight-deck genome.

This genome is strongest when the generated UI can be flat, scroll-based, avatar-driven, action-rich, and brutally restrained outside the content itself.

**anti-patterns — this genome NEVER:**

1. uses serif, monospace, or decorative typefaces — everything is Chirp / system sans-serif stack, no exceptions
2. uses 0px border-radius on interactive elements — buttons are always pill `9999px`, avatars always circular, cards and modules always `16px` rounded
3. uses heavy box-shadows or layered elevation — the only shadow is on modals. feed items are completely flat, separated by hairline `1px` borders
4. uses `text-transform: uppercase` on body content, headings, or buttons — uppercase is essentially nonexistent in this genome
5. uses bright accent colors on large surface areas — blue (or selected accent) is reserved for small, high-signal elements (buttons, links, focus rings, active indicators). it never fills a section or panel background
6. uses traditional horizontal top nav bars, hamburger menus, or breadcrumbs — navigation is vertical sidebar on desktop, bottom tab bar on mobile. always
7. uses pagination, "page 2", or "load more" buttons — content is infinite-scrolling with skeleton loading
8. uses formal, institutional, or technical language — the voice is casual, conversational, and direct. no jargon, no corporate-speak, no imperative commands
9. uses dense data tables or multi-column grid layouts for primary content — content flows as a single-column vertical feed of individual posts, never as a masonry grid or data table
10. uses decorative textures, patterns, background gradients, or ornamental dividers — the design is defined by radical absence. white space (or black space in dark mode) and content density are the only atmospheric tools
