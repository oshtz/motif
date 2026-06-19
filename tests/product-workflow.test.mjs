import test from "node:test";
import assert from "node:assert/strict";
import {
  buildPromptPatch,
  extractStaticStyleTraits,
  mergeRuntimeQualityAudit,
  normalizeBlendConfig,
  scoreGeneratedHtml,
} from "../api/dist/product-model.js";
import { buildProductionHandoffProject } from "../api/dist/handoff.js";
import { createStoredZip } from "../api/dist/zip.js";

test("product workflow artifacts stay coherent across recipe, patch, score, and handoff", () => {
  const blend = normalizeBlendConfig([
    { id: "01", weight: 65, aspect: "typography" },
    { id: "28", weight: 35, aspect: "layout" },
  ]);
  assert.equal(blend.length, 2);

  const html = `
    <html><body>
      <main class="grid grid-cols-4 gap-8 bg-zinc-950 text-zinc-900">
        <h1 class="font-mono text-6xl">Ops Board</h1>
        <button></button>
        <img src="/chart.png">
      </main>
    </body></html>
  `;
  const patchPrompt = buildPromptPatch(extractStaticStyleTraits(html));
  assert.match(patchPrompt, /Palette cues/);
  assert.match(patchPrompt, /Typography cues/);

  const staticScore = scoreGeneratedHtml(html);
  const mergedScore = mergeRuntimeQualityAudit(staticScore, {
    measurements: [
      {
        viewportWidth: 375,
        clientWidth: 375,
        scrollWidth: 520,
        overflowPixels: 145,
        overflowingElementCount: 2,
        lowContrastCount: 3,
        unlabeledControlCount: 1,
        missingAltCount: 1,
        jsErrorCount: 1,
        totalElements: 360,
      },
    ],
  });
  assert.ok(mergedScore.overall < staticScore.overall);
  assert.ok(mergedScore.runtime_audit);

  const zip = createStoredZip([
    { path: "motif-manifest.json", content: JSON.stringify({ blend, score: mergedScore.overall }) },
    { path: "design-tokens.json", content: JSON.stringify(extractStaticStyleTraits(html)) },
    { path: "quality-report.json", content: JSON.stringify(mergedScore) },
  ]);
  assert.ok(zip.includes(Buffer.from("motif-manifest.json")));
  assert.ok(zip.includes(Buffer.from("quality-report.json")));
});

test("production handoff v3 emits structured React project artifacts", () => {
  const html = `
    <html>
      <head><style>main { color: #fff; }</style></head>
      <body><main><h1>Ops Board</h1><button aria-label="Refresh">Go</button></main><script>window.x = 1;</script></body>
    </html>
  `;
  const quality = mergeRuntimeQualityAudit(scoreGeneratedHtml(html), {
    measurements: [
      {
        viewportWidth: 375,
        clientWidth: 375,
        scrollWidth: 375,
        overflowPixels: 0,
        totalElements: 24,
        headingCount: 1,
        h1Count: 1,
        landmarkCount: 1,
      },
    ],
  });
  const handoff = buildProductionHandoffProject({
    componentName: "Ops Board!",
    now: 123,
    generation: {
      id: "abc12345",
      prompt: "Ops board",
      expanded_prompt: "Ops board expanded",
      system_prompt: "",
      genome_id: "01",
      genome_name: "kernel_grid.dev",
      secondary_genome_id: "",
      secondary_genome_name: "",
      model: "test-model",
      output: html,
      parsed_html: html,
      favorited: false,
      created_at: 1,
      parent_id: "",
      motif_id: "motif-1",
      blend_config_json: JSON.stringify([{ id: "01", weight: 100, aspect: "layout" }]),
      quality_score_json: JSON.stringify(quality),
      board_status: "accepted",
      notes: "Keep this structure",
      style_patch_id: "patch-1",
    },
    stylePatch: { id: "patch-1", name: "Ops Patch" },
  });

  const paths = handoff.files.map((file) => file.path);
  assert.equal(handoff.componentName, "OpsBoard");
  assert.equal(handoff.manifest.version, 3);
  assert.equal(handoff.manifest.project.componentName, "OpsBoard");
  assert.deepEqual(handoff.manifest.stateCoverage, ["default", "loading", "empty", "error"]);
  assert.ok(handoff.manifest.responsiveEvidence.available);
  assert.ok(handoff.manifest.implementationCleanliness.scriptCount > 0);
  assert.ok(paths.includes("src/components/OpsBoard.tsx"));
  assert.ok(paths.includes("src/components/OpsBoard.stories.tsx"));
  assert.ok(paths.includes("src/components/HandoffStatePreview.tsx"));
  assert.ok(paths.includes("src/generated/document.ts"));
  assert.ok(paths.includes("src/tokens/design-tokens.ts"));
  assert.ok(paths.includes("docs/accessibility-notes.md"));
  assert.ok(paths.includes("docs/responsive-evidence.md"));
  assert.ok(paths.includes("docs/implementation-notes.md"));

  const component = handoff.files.find((file) => file.path === "src/components/OpsBoard.tsx")?.content || "";
  assert.match(component, /dangerouslySetInnerHTML/);
  assert.doesNotMatch(component, /<script>/);

  const zip = createStoredZip(handoff.files);
  assert.ok(zip.includes(Buffer.from("src/components/OpsBoard.stories.tsx")));
  assert.ok(zip.includes(Buffer.from("docs/responsive-evidence.md")));
});
