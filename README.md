<p align="center">
  <img src="assets/motif-icon.svg" width="72" height="72" alt="motif logo" />
</p>

<h1 align="center">motif</h1>

<p align="center">
  <strong>AI-powered UI generation with 111 design genomes</strong>
</p>

---

<p align="center">
  <a href="https://youtu.be/vaKPILFVBcQ">
    <img src="https://img.youtube.com/vi/vaKPILFVBcQ/maxresdefault.jpg" width="100%" alt="motif demo video" />
  </a>
</p>

Motif generates single-file HTML interface drafts from natural language prompts. Instead of a fixed template, every output is shaped by a **genome** — a design direction defining colors, typography, spacing, motion, editorial voice, and anti-patterns. Generated output should still be reviewed and tested before production use.

## Download Desktop App

Download the latest desktop builds from [GitHub Releases](https://github.com/oshtz/motif/releases/latest).

Use one of these files:

| Platform | File |
| --- | --- |
| Windows installer | `Motif-*-Setup.exe` |
| Windows portable | `Motif-*-Portable.exe` |
| macOS | `Motif-*-arm64.dmg` for Apple Silicon, `Motif-*-x64.dmg` for Intel |

The other files attached to each release are updater metadata and integrity files. Motif keeps projects and settings on the local device by default; prompts and inputs are sent to the provider you configure. See [Security and Privacy](docs/security-privacy.md).

## Features

### Genome System

111 handcrafted design genomes, each encoding an opinionated visual language:

| # | Genome | Aesthetic |
|---|--------|-----------|
| 01 | `lab_manual.80s` | Clinical swiss-style, red/white/black |
| 02 | `modern_studio.pro` | Sleek minimalist, violet/chartreuse |
| 03 | `neo_brutalist.zine` | Bold editorial, asymmetric layouts |
| 04 | `underground_terminal.crt` | CRT amber/black, glitch effects |
| 05 | `handheld_gb.dmg` | Game Boy 4-color, pixel-perfect |
| 06 | `panavision.70s` | Warm cinematic, orange/cream |
| 07 | `scientific_calc.hp` | Calculator interface, monospaced |
| 08 | `biosequence_lab.gen` | Biotech, sequence visualizations |
| 09 | `signal_void.cc` | Dark signal processing aesthetic |
| 10 | `gallery_foyer.institution` | Museum gallery, curated whitespace |
| | ... | |
| 48 | `constructivist_poster.agit` | Propaganda-inspired, angular |
| 49 | `abyssal_bloom.deep` | Deep-sea bioluminescence |
| 50 | `chalkboard_lesson.edu` | Chalkboard handwritten feel |
| | ... | |
| 111 | `clockwork_observatory.gear` | Horology, orrery dials, brass/enamel calibration |

Each genome defines color palettes with distribution ratios, typography stacks, border rules, component patterns, interaction states, motion specifications, atmosphere effects, and explicit anti-patterns.

**Shuffle mode** blends two genomes per variant — primary dominates colors and voice, secondary influences layout rhythm and motion.

### Design Genome Control

Pinned genomes, weighted blends, saved recipes, and active style patches are visible directly in the prompt bar. Board cards and the detail rail show compact genome influence chips plus a "why this variant" explanation so each output exposes the genome, recipe, patch, and near/mid/far decisions behind it.

### Genome Governance

Run `npm run check:genomes` to audit the genome library for duplicate IDs/names, missing frontmatter, missing core sections, thin files, weak anti-pattern blocks, and thin keyword sets. The report exits non-zero for structural errors and prints a priority queue for expansion work; the current library has 0 structural errors, 0 warnings, and 0 thin genomes.

### Design System Ingestion

Project boards can ingest token JSON, existing site URLs, screenshots, raw HTML, and reusable component rules into active design-system memory. Ingested systems extract palette/type/spacing/motion/layout traits, create a linked reusable style patch, and feed board-level constraints into future generation context.

### Batch Generation

Generate 1–8 UI variants in parallel from a single prompt. Each variant streams in real-time via SSE, with live iframe previews updating as code arrives.

### Style Dropper

Pick up the visual style from one generation and apply it to another's content. A WebGL2 shader overlay renders an iridescent glow with chromatic aberration and ripple distortion as you hover targets.

### Style Patch Studio

Extract reusable style patches from URLs, screenshots, raw HTML, or existing generations. Saved patches are selectable from the prompt bar and applied as temporary genome overlays during generation, with the chosen `style_patch_id` persisted for variant provenance.

### Project Board

Organize generations in Candidate, Accepted, Rejected, and Exported lanes. Board cards support drag/drop status changes, notes, quality scoring, handoff project downloads, and Near/Mid/Far follow-up generation.

### Production Handoff

Download a project zip for any generation with React/Tailwind component boundaries, Storybook-style states, state preview, exact original HTML, extracted design tokens, quality report, accessibility notes, responsive evidence, implementation notes, README, and a Motif v3 manifest.

### Quality Scoring

Score any generation across accessibility, mobile overflow, visual hierarchy, originality, production readiness, and implementation cleanliness. Scores combine static server analysis with hidden runtime checks for rendered overflow, clipped text, contrast, labels, image alt text, DOM size, JavaScript errors, tap target size, duplicate IDs, image dimensions, layout-stability proxies, and viewport visual fingerprints.

### Edit Mode

Iteratively refine any generation with natural language instructions. The LLM applies edits while preserving the original genome's design language. Parent-child lineage is tracked across edits.

### Direct Manipulation Editing

Open direct edit mode from the preview toolbar, click a rendered element, then apply a localized instruction such as "make this denser," "fix contrast here," "apply active recipe here," or "swap this card treatment." Motif captures selector, tag, classes, text, accessibility label, and an HTML excerpt, then streams a scoped edit fork that preserves the surrounding design.

### Responsive Preview

Inspect any generation across viewport sizes — Mobile (375px), Tablet (768px), Laptop (1280px), Desktop (1920px), or Full — with metadata and raw HTML side panels.

### Responsive Checker

Automated responsive audit that renders each generation at four viewport widths and scores layout quality. Flags overflow, tiny text, fixed-width issues, and other breakpoint problems.

### Blend Studio

Multi-genome blending beyond simple shuffle. Pick 2+ genomes and assign each a weight and a design aspect (colors, typography, layout, borders, motion, atmosphere, or voice). The weighted blend config is passed to the LLM for fine-grained style mixing.

### Animation Playground

Inspect and debug transitions and animations inside any generation. Slow-motion playback (0.25x–1x), highlight all transitioning elements, and trigger pseudo-states (hover, focus, active, focus-visible) on demand.

### Vary

Generate variations of an existing design. Adjust batch size and variation strength, then produce new variants that riff on the original while preserving its core identity.

### Compare View

Side-by-side A/B comparison. Enter a prompt once and generate it with two different genomes simultaneously, streaming both panels in real-time. Save either result to your library.

### Batch Compare View

Like Compare View but scaled up — pick multiple genomes and generate the same prompt across all of them in parallel for rapid genome evaluation.

### Lineage View

Visual tree diagram of a generation's edit history. See the full parent-child chain from the original through every iterative edit, with click-to-preview on any node.

### Component Library

Extract and save reusable components from any generation. Browse your saved components with live previews, copy HTML, or delete entries you no longer need.

### Export Modal

Export any generation to React, Vue, or Svelte component code via LLM conversion. Also extract design tokens in CSS custom properties, JSON, or Tailwind config format.

### Prompt Templates

Save frequently used prompts as reusable templates with `{{variable}}` placeholders. Fill in variables at generation time for consistent, repeatable workflows.

### Analytics Dashboard

Usage analytics showing generation counts over time, most-used genomes, model usage breakdown, and daily activity charts.

### Chat Sidebar

Conversational editing interface — refine a generation through a threaded chat with the LLM while preserving the genome's design language.

### Image-to-UI Generation

Upload a screenshot or design image and generate matching HTML/Tailwind code, shaped by the selected genome.

## Architecture

```
motif/
├── api/                    # Express 5 backend
│   └── src/
│       ├── index.ts        # Server entry, routes
│       ├── db.ts           # SQLite setup + migrations
│       ├── openrouter.ts   # LLM proxy (streaming)
│       └── genomes/        # 111 genome markdown files + base prompt
│           ├── _base.md
│           ├── 01_lab_manual.80s.md
│           └── ...
├── web/                    # React 19 + Vite 8 frontend
│   └── src/
│       ├── App.tsx         # Root layout + tab routing
│       ├── store.ts        # Zustand state (app + settings)
│       ├── api.ts          # SSE streaming client
│       └── components/
│           ├── TopBar.tsx
│           ├── PromptBar.tsx
│           ├── ChatSidebar.tsx      # Conversational editing
│           ├── MasonryGrid.tsx
│           ├── VariantCard.tsx      # Lazy-loaded iframe with texture caching
│           ├── StreamingCard.tsx     # Live preview during generation
│           ├── PreviewView.tsx      # Full-screen detail + viewport switcher
│           ├── CompareView.tsx      # Side-by-side A/B genome comparison
│           ├── BatchCompareView.tsx # Multi-genome batch comparison
│           ├── BlendStudio.tsx      # Multi-genome weighted blending
│           ├── StylePatchStudio.tsx # Reusable extracted style patches
│           ├── BoardView.tsx        # Project board lanes + follow-ups
│           ├── AnimationPlayground.tsx # Transition/animation inspector
│           ├── ResponsiveChecker.tsx   # Automated responsive audit
│           ├── ComponentLibrary.tsx  # Saved component browser
│           ├── LineageView.tsx      # Edit history tree visualization
│           ├── ExportModal.tsx      # Framework export + token extraction
│           ├── TemplateModal.tsx    # Prompt template manager
│           ├── AnalyticsModal.tsx   # Usage analytics dashboard
│           ├── VaryPopup.tsx        # Variation generation controls
│           ├── SettingsView.tsx     # Configuration modal
│           ├── GenerationProgress.tsx
│           └── ShaderOverlay.tsx    # WebGL2 dropper effects
├── shared/
│   └── types.ts            # Shared TypeScript interfaces
├── .claude/
│   └── skills/
│       └── genome-authoring/       # Claude Code skill for creating genomes
│           ├── SKILL.md            # Full authoring guide (9 layers, quality checklist)
│           └── references/         # Layer reference docs
└── package.json            # Monorepo root (concurrently)
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| <img src="https://cdn.simpleicons.org/react/58c4dc" width="14" /> Frontend | React 19, Vite 8, Tailwind CSS 4 |
| <img src="https://cdn.simpleicons.org/express/ffffff" width="14" /> API | Express 5, better-sqlite3 |
| <img src="https://cdn.simpleicons.org/typescript/3178c6" width="14" /> Language | TypeScript 5.9 (strict) |
| <img src="https://cdn.simpleicons.org/openai/ffffff" width="14" /> LLM | OpenRouter (Claude, GPT-4, etc.) |
| State | Zustand with shallow selectors |
| Icons | Bootstrap Icons |
| GPU | WebGL2 custom shaders |

## Getting Started

### Prerequisites

- **Node.js** 22
- An LLM provider — one of:
  - **OpenRouter** API key ([openrouter.ai](https://openrouter.ai)) — access to Claude, GPT-4, Gemini, etc.
  - **Ollama** running locally ([ollama.com](https://ollama.com)) — free, fully offline
  - **LM Studio** running locally ([lmstudio.ai](https://lmstudio.ai)) — free, fully offline

### Install

```bash
git clone https://github.com/oshtz/motif.git
cd motif
npm install        # installs the npm workspaces from the root lockfile
```

### Run

```bash
npm run dev
```

This starts both servers concurrently:

| Service | URL |
|---------|-----|
| Frontend | `http://localhost:4388` |
| API | `http://localhost:4389` |

The Vite dev server proxies `/api` requests to the backend automatically.

### Validation And CI

Local checks mirror the GitHub Actions workflow in `.github/workflows/ci.yml`:

```bash
npm run lint
npm run check:genomes
npm test
npm run smoke:e2e
npm run smoke:quality:ci
```

The CI workflow runs frontend lint, genome governance, build/test, an isolated Playwright E2E workflow smoke, and a Playwright Chromium browser quality smoke. The E2E smoke starts a fake streaming LLM, an isolated SQLite DB, the API, and the Vite app; it verifies generation SSE events, preview direct-edit selection, board navigation, and DB isolation. The quality smoke starts the built API, seeds a sample generation when the database is empty, captures browser screenshots, and uploads smoke artifacts.

Production builds code-split heavy views and on-demand modals. The current measured main Vite chunk is 484.40 kB minified, with Preview, Board, Compare, Batch Compare, Settings, Analytics, prompt templates, blend studio, style patches, component library, and shader overlay emitted as separate lazy chunks.

### Browser Quality Smoke

After `npm run dev`, run a real Chromium quality smoke against the local API:

```bash
npm run smoke:quality
```

The smoke script renders a saved generation at 375px, 768px, and 1280px with Playwright, saves screenshots under `artifacts/browser-quality/`, hashes those screenshots as visual fingerprints, posts the audit to `/api/generations/:id/quality-score`, and prints the scored findings. If Chromium is missing, run:

```bash
npx playwright install chromium
```

### Configure

Open the app and click the <kbd>gear</kbd> icon to set:

- **Provider** — OpenRouter, Ollama, LM Studio, or a custom endpoint
- **API Key** — your provider token (not needed for local providers)
- **Model** — select from available models (searchable)
- **Temperature** — creativity dial (0–2)
- **Batch Size** — variants per generation (1–8)
- **Genome** — pick a specific genome or leave on auto-select
- **Shuffle** — blend two genomes per variant
- **Custom System Prompt** — bypass the genome system entirely

Configuration is stored locally. Desktop provider credentials use OS-backed encryption; standalone browser/API development stores them in the local SQLite database. No provider credentials are bundled with Motif.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/settings` | Retrieve all settings |
| `PUT` | `/api/settings` | Update settings |
| `GET` | `/api/models` | List available LLM models via OpenRouter |
| `GET` | `/api/genomes` | List all genomes with metadata |
| `GET` | `/api/genomes/recommended` | Get recommended genomes for a prompt |
| `POST` | `/api/genomes/reload` | Force reload genomes from disk |
| `GET` | `/api/motifs` | List saved motifs (project folders) |
| `POST` | `/api/motifs` | Create a new motif |
| `PATCH` | `/api/motifs/:id` | Update a motif |
| `DELETE` | `/api/motifs/:id` | Delete a motif |
| `GET` | `/api/generations` | Fetch all saved generations |
| `GET` | `/api/analytics` | Usage analytics (genome usage, daily counts) |
| `POST` | `/api/generate` | Generate UI variants (SSE stream) |
| `POST` | `/api/generate-from-image` | Generate UI from an uploaded image (SSE) |
| `POST` | `/api/edit` | Edit an existing generation with instructions (SSE) |
| `POST` | `/api/vary` | Generate variations of an existing design (SSE) |
| `POST` | `/api/style-drop` | Apply style from one generation to another (SSE) |
| `POST` | `/api/compare` | Side-by-side genome comparison (SSE) |
| `POST` | `/api/compare-batch` | Multi-genome batch comparison (SSE) |
| `POST` | `/api/compare/save` | Save a compare result as a generation |
| `POST` | `/api/reorganize` | Reorganize/restructure a generation (SSE) |
| `PATCH` | `/api/generations/:id/favorite` | Toggle favorite |
| `PATCH` | `/api/generations/:id/css` | Update generation CSS |
| `PUT` | `/api/generations/:id/thumbnail` | Update generation thumbnail |
| `DELETE` | `/api/generations/:id` | Delete a generation |
| `POST` | `/api/generations/:id/export` | Export to React/Vue/Svelte |
| `POST` | `/api/generations/:id/extract-tokens` | Extract design tokens |
| `GET` | `/api/generations/:id/lineage` | Get edit lineage tree |
| `GET` | `/api/components` | List saved components |
| `POST` | `/api/components` | Save a component |
| `DELETE` | `/api/components/:id` | Delete a saved component |
| `GET` | `/api/styles` | List saved styles |
| `POST` | `/api/styles` | Save a style |
| `GET` | `/api/templates` | List prompt templates |
| `POST` | `/api/templates` | Create a prompt template |
| `PUT` | `/api/templates/:id` | Update a prompt template |
| `DELETE` | `/api/templates/:id` | Delete a prompt template |

## Creating Genomes with Claude Code

This repo includes a **[Claude Code](https://claude.ai/code) skill** for authoring new genomes. If you have Claude Code installed, just ask it to create a new genome:

```
> create a genome inspired by art deco movie palaces
```

The skill (`.claude/skills/genome-authoring/SKILL.md`) guides Claude through the full authoring workflow:

- **9 required layers** — surface, color distribution, component patterns, interaction language, motion & feedback, atmosphere, editorial voice, cursor & selection, anti-patterns
- **Deduplication check** — compares against all existing genomes across 7 dimensions to avoid overlap
- **Quality checklist** — 15-point verification before the genome is finalized
- **Auto-discovery** — new genome files dropped into `api/src/genomes/` are picked up at runtime

See the skill file and its `references/` directory for the complete specification.

## How It Works

```
Prompt → Expand → Select Genome → Generate HTML → Stream to Client
                     ↓
              ┌──────────────┐
              │ 111 Genomes  │ ← Color, type, spacing, motion,
              │  (markdown)  │   voice, anti-patterns
              └──────────────┘
```

1. **Prompt expansion** — the LLM transforms a short prompt into a detailed UI specification
2. **Genome selection** — auto-selects the best-matching genome (or uses explicit choice)
3. **Code generation** — LLM produces single-file HTML with Tailwind, shaped by the genome's system prompt
4. **Streaming delivery** — chunks arrive via SSE, rendered in live iframe previews
5. **Post-processing** — Tailwind CDN injection, bare hex color fixes, HTML extraction from markdown fences

## Build

```bash
# Frontend
cd web && npm run build    # → web/dist/

# API
cd api && npm run build    # → api/dist/
cd api && npm start        # Production server
```

## Desktop Release

Motif ships as an Electron desktop app for Windows and macOS. Maintainer packaging, signing, notarization, and updater details are documented in [docs/desktop-release.md](docs/desktop-release.md).

Security boundaries and hands-on desktop checks are documented in [docs/security-privacy.md](docs/security-privacy.md) and [docs/interactive-testing.md](docs/interactive-testing.md).

## License

[MIT](LICENSE)
