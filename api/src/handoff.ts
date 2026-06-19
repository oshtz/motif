import type { Generation } from "./generate.js";
import {
  extractStaticStyleTraits,
  scoreGeneratedHtml,
  safeJsonParse,
  type BlendEntry,
  type QualityScore,
  type StyleTraits,
} from "./product-model.js";
import type { ZipFile } from "./zip.js";

export interface HandoffStylePatch {
  id?: string;
  name?: string;
}

export interface HandoffGeneration extends Generation {
  blend_config_json?: string;
  quality_score_json?: string;
  board_status?: string;
  notes?: string;
  style_patch_id?: string;
}

export interface ProductionHandoffProject {
  manifest: ProductionHandoffManifest;
  files: ZipFile[];
  componentName: string;
}

export interface ProductionHandoffManifest {
  version: 3;
  project: {
    name: string;
    componentName: string;
    framework: string;
    styling: string;
  };
  generation: Record<string, unknown>;
  componentBoundaries: Array<{ path: string; role: string }>;
  stateCoverage: string[];
  responsiveEvidence: ReturnType<typeof responsiveEvidence>;
  accessibility: { score: number; notes: string[] };
  implementationCleanliness: ReturnType<typeof implementationCleanliness>;
  quality: QualityScore;
  created_at: number;
}

function sanitizeComponentName(value: unknown): string {
  const raw = typeof value === "string" && value.trim()
    ? value.trim().replace(/[^\w]/g, "")
    : "MotifGenerated";
  const name = raw || "MotifGenerated";
  return /^[A-Za-z_$]/.test(name) ? name : `Motif${name}`;
}

function packageNameFor(id: string): string {
  return `motif-handoff-${id.slice(0, 8).toLowerCase()}`;
}

function countMatches(value: string, pattern: RegExp): number {
  return value.match(pattern)?.length ?? 0;
}

function extractBodyHtml(html: string): string {
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] || html;
  return body
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "")
    .trim();
}

function extractStyleCss(html: string): string {
  return Array.from(html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi))
    .map((match) => match[1].trim())
    .filter(Boolean)
    .join("\n\n");
}

function markdownList(items: string[]): string {
  return items.length > 0 ? items.map((item) => `- ${item}`).join("\n") : "- No issues detected";
}

function responsiveEvidence(quality: QualityScore) {
  const measurements = quality.runtime_audit?.measurements || [];
  return {
    available: measurements.length > 0,
    created_at: quality.runtime_audit?.created_at || 0,
    userAgent: quality.runtime_audit?.userAgent || "",
    viewports: measurements.map((item) => ({
      viewportWidth: item.viewportWidth,
      overflowPixels: item.overflowPixels,
      overflowingElementCount: item.overflowingElementCount,
      clippedTextCount: item.clippedTextCount,
      tinyTextCount: item.tinyTextCount,
      lowContrastCount: item.lowContrastCount,
      jsErrorCount: item.jsErrorCount,
      totalElements: item.totalElements,
    })),
  };
}

function responsiveEvidenceMarkdown(evidence: ReturnType<typeof responsiveEvidence>): string {
  if (!evidence.available) {
    return [
      "# Responsive Evidence",
      "",
      "No runtime viewport audit was attached when this handoff was created.",
      "Run Motif quality scoring before handoff to capture mobile and desktop viewport evidence.",
    ].join("\n");
  }

  return [
    "# Responsive Evidence",
    "",
    evidence.userAgent ? `User agent: ${evidence.userAgent}` : "",
    "",
    "| Viewport | Overflow | Out-of-bounds | Clipped text | Tiny text | Low contrast | JS errors | DOM nodes |",
    "| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
    ...evidence.viewports.map(
      (item) =>
        `| ${item.viewportWidth}px | ${item.overflowPixels}px | ${item.overflowingElementCount} | ${item.clippedTextCount} | ${item.tinyTextCount} | ${item.lowContrastCount} | ${item.jsErrorCount} | ${item.totalElements} |`
    ),
  ].filter(Boolean).join("\n");
}

function accessibilityMarkdown(quality: QualityScore): string {
  return [
    "# Accessibility Notes",
    "",
    "## Accessibility",
    markdownList(quality.categories.accessibility.notes),
    "",
    "## Mobile Overflow",
    markdownList(quality.categories.mobileOverflow.notes),
    "",
    "## Visual Hierarchy",
    markdownList(quality.categories.visualHierarchy.notes),
  ].join("\n");
}

function implementationCleanliness(html: string, quality: QualityScore) {
  return {
    score: quality.categories.implementationCleanliness.score,
    notes: quality.categories.implementationCleanliness.notes,
    htmlBytes: Buffer.byteLength(html, "utf8"),
    styleBlockCount: countMatches(html.toLowerCase(), /<style\b/g),
    scriptCount: countMatches(html.toLowerCase(), /<script\b/g),
    inlineStyleCount: countMatches(html.toLowerCase(), /\sstyle=["']/g),
    componentStrategy: "Generated document split into React shell, generated body HTML, generated CSS, state preview, tokens, and docs.",
  };
}

function implementationMarkdown(cleanliness: ReturnType<typeof implementationCleanliness>): string {
  return [
    "# Implementation Notes",
    "",
    `Implementation cleanliness: ${cleanliness.score}/100`,
    "",
    "## Findings",
    markdownList(cleanliness.notes),
    "",
    "## Source Metrics",
    `- HTML bytes: ${cleanliness.htmlBytes}`,
    `- Style blocks: ${cleanliness.styleBlockCount}`,
    `- Script tags in original: ${cleanliness.scriptCount}`,
    `- Inline style attributes: ${cleanliness.inlineStyleCount}`,
    "",
    "## Component Boundaries",
    "- `src/components/MotifGenerated.tsx` is the production component boundary.",
    "- `src/generated/document.ts` contains the generated body, CSS, and exact original HTML.",
    "- `src/components/HandoffStatePreview.tsx` renders Storybook-style default/loading/empty/error states.",
    "- `src/tokens/design-tokens.ts` exposes extracted design tokens for app integration.",
    "- `public/original.html` preserves the exact generated document for comparison.",
  ].join("\n");
}

function generatedDocumentTs(fullHtml: string, bodyHtml: string, styleCss: string) {
  return `export const generatedFullHtml = ${JSON.stringify(fullHtml)};
export const generatedBodyHtml = ${JSON.stringify(bodyHtml)};
export const generatedStyleCss = ${JSON.stringify(styleCss)};
`;
}

function statesTs() {
  return `export type HandoffState = "default" | "loading" | "empty" | "error";

export const handoffStates: HandoffState[] = ["default", "loading", "empty", "error"];

export const handoffStateLabels: Record<HandoffState, string> = {
  default: "Default",
  loading: "Loading",
  empty: "Empty",
  error: "Error",
};
`;
}

function componentTsx(componentName: string) {
  return `import { generatedBodyHtml, generatedStyleCss } from "../generated/document";
import type { HandoffState } from "../states";
import "./${componentName}.css";

export interface ${componentName}Props {
  state?: HandoffState;
  className?: string;
}

export default function ${componentName}({ state = "default", className = "" }: ${componentName}Props) {
  const showStateOverlay = state !== "default";

  return (
    <section className={["motif-generated", className].filter(Boolean).join(" ")} data-state={state} aria-busy={state === "loading"}>
      <style>{generatedStyleCss}</style>
      <div className="motif-generated__canvas" dangerouslySetInnerHTML={{ __html: generatedBodyHtml }} />
      {showStateOverlay && (
        <div className="motif-generated__state" role={state === "error" ? "alert" : "status"}>
          <strong>{state}</strong>
          <span>{state === "loading" ? "Loading content" : state === "empty" ? "No content available" : "Something needs attention"}</span>
        </div>
      )}
    </section>
  );
}
`;
}

function componentCss() {
  return `.motif-generated {
  position: relative;
  min-height: 100vh;
  background: #050505;
}

.motif-generated__canvas {
  min-height: 100vh;
}

.motif-generated__state {
  position: fixed;
  inset: auto 1rem 1rem auto;
  z-index: 50;
  display: grid;
  gap: 0.25rem;
  max-width: min(22rem, calc(100vw - 2rem));
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 0.5rem;
  background: rgba(8, 8, 8, 0.88);
  color: white;
  padding: 0.75rem 0.875rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.35);
}
`;
}

function statePreviewTsx(componentName: string) {
  return `import ${componentName} from "./${componentName}";
import { handoffStateLabels, handoffStates } from "../states";

export default function HandoffStatePreview() {
  return (
    <div className="handoff-preview">
      <header className="handoff-preview__header">
        <div>
          <p>Motif production handoff</p>
          <h1>Responsive states</h1>
        </div>
      </header>
      <div className="handoff-preview__grid">
        {handoffStates.map((state) => (
          <article key={state} className="handoff-preview__panel">
            <div className="handoff-preview__label">{handoffStateLabels[state]}</div>
            <div className="handoff-preview__frame">
              <${componentName} state={state} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
`;
}

function storyFile(componentName: string) {
  return `import ${componentName} from "./${componentName}";

export default {
  title: "Motif/${componentName}",
  component: ${componentName},
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = { args: { state: "default" } };
export const Loading = { args: { state: "loading" } };
export const Empty = { args: { state: "empty" } };
export const Error = { args: { state: "error" } };
`;
}

function indexCss() {
  return `@import "tailwindcss";

html,
body,
#root {
  min-height: 100%;
  margin: 0;
}

body {
  background: #050505;
}

.handoff-preview {
  min-height: 100vh;
  color: white;
  background: #0b0b0b;
}

.handoff-preview__header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.handoff-preview__header p {
  margin: 0 0 0.25rem;
  color: rgba(255, 255, 255, 0.42);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.handoff-preview__header h1 {
  margin: 0;
  font-size: 1.125rem;
}

.handoff-preview__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.handoff-preview__panel {
  min-width: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.025);
}

.handoff-preview__label {
  padding: 0.625rem 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.75rem;
}

.handoff-preview__frame {
  height: 38rem;
  overflow: auto;
  background: #050505;
}
`;
}

function readme(projectName: string, componentName: string, generation: HandoffGeneration, quality: QualityScore) {
  return `# ${componentName}

Production handoff generated from Motif variant ${generation.id}.

## Prompt
${generation.prompt}

## Genome
${generation.genome_name || generation.genome_id || "Auto"}

## Quality
- Overall: ${quality.overall}/100
- Production readiness: ${quality.categories.productionReadiness.score}/100
- Implementation cleanliness: ${quality.categories.implementationCleanliness.score}/100

## Run

\`\`\`bash
npm install
npm run dev
npm run build
\`\`\`

## Project Structure

- \`src/components/${componentName}.tsx\` is the reusable React component boundary.
- \`src/components/${componentName}.stories.tsx\` contains Storybook-style states.
- \`src/components/HandoffStatePreview.tsx\` renders default/loading/empty/error states locally.
- \`src/generated/document.ts\` contains generated HTML/CSS as isolated data.
- \`src/tokens/design-tokens.ts\` and \`design-tokens.json\` expose extracted design tokens.
- \`docs/accessibility-notes.md\`, \`docs/responsive-evidence.md\`, and \`docs/implementation-notes.md\` document production concerns.
- \`public/original.html\` preserves the exact generated document.

## Handoff Checklist

- Replace generated placeholder copy with product copy.
- Decide whether original scripts should be reimplemented as React interactions.
- Run browser QA at 375px, 768px, 1024px, and desktop widths.
- Review accessibility notes before shipping.

Package name: \`${projectName}\`
`;
}

export function buildProductionHandoffProject(input: {
  generation: HandoffGeneration;
  componentName?: string;
  stylePatch?: HandoffStylePatch | null;
  now?: number;
}): ProductionHandoffProject {
  const { generation } = input;
  const componentName = sanitizeComponentName(input.componentName);
  const projectName = packageNameFor(generation.id);
  const traits: StyleTraits = extractStaticStyleTraits(generation.parsed_html);
  const quality =
    safeJsonParse<QualityScore | null>(generation.quality_score_json, null) ??
    scoreGeneratedHtml(generation.parsed_html);
  const blendConfig = safeJsonParse<BlendEntry[]>(generation.blend_config_json, []);
  const bodyHtml = extractBodyHtml(generation.parsed_html);
  const styleCss = extractStyleCss(generation.parsed_html);
  const responsive = responsiveEvidence(quality);
  const cleanliness = implementationCleanliness(generation.parsed_html, quality);
  const createdAt = input.now ?? Date.now();

  const manifest: ProductionHandoffManifest = {
    version: 3,
    project: {
      name: projectName,
      componentName,
      framework: "React",
      styling: "Tailwind CSS v4 plus generated CSS extraction",
    },
    generation: {
      id: generation.id,
      prompt: generation.prompt,
      genome_id: generation.genome_id,
      genome_name: generation.genome_name,
      secondary_genome_id: generation.secondary_genome_id,
      secondary_genome_name: generation.secondary_genome_name,
      blendConfig,
      style_patch_id: generation.style_patch_id || "",
      style_patch_name: input.stylePatch?.name || "",
      model: generation.model,
      board_status: generation.board_status || "candidate",
      notes: generation.notes || "",
    },
    componentBoundaries: [
      { path: `src/components/${componentName}.tsx`, role: "Reusable production component" },
      { path: "src/components/HandoffStatePreview.tsx", role: "State preview surface" },
      { path: "src/generated/document.ts", role: "Generated HTML/CSS data boundary" },
      { path: "src/tokens/design-tokens.ts", role: "Design-token integration boundary" },
    ],
    stateCoverage: ["default", "loading", "empty", "error"],
    responsiveEvidence: responsive,
    accessibility: {
      score: quality.categories.accessibility.score,
      notes: quality.categories.accessibility.notes,
    },
    implementationCleanliness: cleanliness,
    quality,
    created_at: createdAt,
  };

  const manifestFile = { path: "motif-manifest.json", content: "" };
  const files: ZipFile[] = [
    { path: "README.md", content: readme(projectName, componentName, generation, quality) },
    {
      path: "package.json",
      content: JSON.stringify(
        {
          name: projectName,
          private: true,
          type: "module",
          scripts: {
            dev: "vite",
            build: "tsc -b && vite build",
            preview: "vite preview",
            typecheck: "tsc -b",
          },
          dependencies: {
            react: "^19.0.0",
            "react-dom": "^19.0.0",
          },
          devDependencies: {
            "@tailwindcss/vite": "^4.0.0",
            "@vitejs/plugin-react": "^5.0.0",
            tailwindcss: "^4.0.0",
            typescript: "^5.9.0",
            vite: "^8.0.0",
          },
        },
        null,
        2
      ),
    },
    {
      path: "tsconfig.json",
      content: JSON.stringify(
        {
          compilerOptions: {
            target: "ES2022",
            useDefineForClassFields: true,
            lib: ["DOM", "DOM.Iterable", "ES2022"],
            allowJs: false,
            skipLibCheck: true,
            esModuleInterop: true,
            allowSyntheticDefaultImports: true,
            strict: true,
            forceConsistentCasingInFileNames: true,
            module: "ESNext",
            moduleResolution: "Bundler",
            resolveJsonModule: true,
            isolatedModules: true,
            noEmit: true,
            jsx: "react-jsx",
          },
          include: ["src"],
        },
        null,
        2
      ),
    },
    {
      path: "vite.config.ts",
      content: `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
`,
    },
    {
      path: "index.html",
      content: `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${componentName}</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
`,
    },
    {
      path: "src/main.tsx",
      content: `import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,
    },
    {
      path: "src/App.tsx",
      content: `import HandoffStatePreview from "./components/HandoffStatePreview";

export default function App() {
  return <HandoffStatePreview />;
}
`,
    },
    { path: "src/states.ts", content: statesTs() },
    { path: `src/components/${componentName}.tsx`, content: componentTsx(componentName) },
    { path: `src/components/${componentName}.css`, content: componentCss() },
    { path: "src/components/HandoffStatePreview.tsx", content: statePreviewTsx(componentName) },
    { path: `src/components/${componentName}.stories.tsx`, content: storyFile(componentName) },
    { path: "src/generated/document.ts", content: generatedDocumentTs(generation.parsed_html, bodyHtml, styleCss) },
    { path: "src/tokens/design-tokens.ts", content: `export const designTokens = ${JSON.stringify(traits, null, 2)} as const;\n` },
    { path: "src/index.css", content: indexCss() },
    { path: "public/original.html", content: generation.parsed_html },
    { path: "design-tokens.json", content: JSON.stringify(traits, null, 2) },
    { path: "quality-report.json", content: JSON.stringify(quality, null, 2) },
    { path: "docs/accessibility-notes.md", content: accessibilityMarkdown(quality) },
    { path: "docs/responsive-evidence.md", content: responsiveEvidenceMarkdown(responsive) },
    { path: "docs/implementation-notes.md", content: implementationMarkdown(cleanliness) },
    manifestFile,
  ];

  manifestFile.content = JSON.stringify(
    { ...manifest, files: files.map((file) => ({ path: file.path })) },
    null,
    2
  );

  return {
    manifest,
    files,
    componentName,
  };
}
