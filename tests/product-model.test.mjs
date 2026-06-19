import test from "node:test";
import assert from "node:assert/strict";
import {
  buildBoardMemory,
  buildDesignSystemExtraction,
  buildDirectEditInstruction,
  buildPromptPatch,
  extractDesignTokenTraits,
  extractStaticStyleTraits,
  mergeRuntimeQualityAudit,
  normalizeBlendConfig,
  normalizeBoardStatus,
  normalizeRuntimeQualityAudit,
  normalizeStyleTraits,
  scoreGeneratedHtml,
} from "../api/dist/product-model.js";

test("blend config normalization keeps valid weighted genome entries", () => {
  assert.deepEqual(
    normalizeBlendConfig([
      { id: "01", weight: 120, aspect: "colors" },
      { id: " 02 ", weight: 20.4, aspect: "" },
      { id: "", weight: 50, aspect: "layout" },
    ]),
    [
      { id: "01", weight: 100, aspect: "colors" },
      { id: "02", weight: 20, aspect: "overall visual direction" },
    ]
  );
});

test("board status normalization rejects unknown states", () => {
  assert.equal(normalizeBoardStatus("accepted"), "accepted");
  assert.equal(normalizeBoardStatus("later"), "candidate");
});

test("board memory summarizes durable decisions by board status", () => {
  const memory = buildBoardMemory([
    {
      prompt: "dense command center",
      genome_name: "terminal ops",
      board_status: "accepted",
      notes: "keep the compact metrics rail",
      quality_score_json: JSON.stringify({ overall: 91 }),
      created_at: 3,
    },
    {
      prompt: "marketing landing page",
      genome_name: "soft gradient",
      board_status: "rejected",
      notes: "too generic and too airy",
      created_at: 2,
    },
    {
      prompt: "handoff candidate",
      genome_name: "workbench",
      board_status: "exported",
      recipe_id: "recipe-1",
      style_patch_id: "patch-1",
      variation_distance: "near",
      created_at: 4,
    },
    {
      prompt: "open exploration",
      board_status: "candidate",
      notes: "maybe use the grid density",
      created_at: 1,
    },
  ]);

  assert.match(memory, /Accepted direction to preserve/);
  assert.match(memory, /dense command center/);
  assert.match(memory, /quality 91\/100/);
  assert.match(memory, /Exported decisions and handoff-ready references/);
  assert.match(memory, /recipe recipe-1/);
  assert.match(memory, /Rejected directions to avoid/);
  assert.match(memory, /too generic/);
  assert.match(memory, /Open candidate notes to consider/);
  assert.match(memory, /Generation rule/);
});

test("board memory ignores empty candidate boards", () => {
  assert.equal(
    buildBoardMemory([{ prompt: "unreviewed variant", board_status: "candidate", created_at: 1 }]),
    ""
  );
});

test("static style extraction produces reusable prompt patches", () => {
  const traits = extractStaticStyleTraits(`
    <main class="grid grid-cols-3 gap-6 bg-zinc-950 text-amber-300">
      <h1 class="font-mono text-5xl tracking-wide">Signal Desk</h1>
      <button class="transition duration-300 hover:bg-amber-400">Go</button>
    </main>
  `);
  assert.ok(traits.colors.includes("zinc-950"));
  assert.ok(traits.typography.includes("font-mono"));
  assert.ok(traits.motion.some((item) => item.includes("transition")));
  assert.match(buildPromptPatch(traits), /Palette cues/);
});

test("style trait normalization clamps unknown vision output", () => {
  assert.deepEqual(
    normalizeStyleTraits({
      colors: [" #fff ", "#fff", 7],
      typography: "serif",
      spacing: ["gap-4"],
      motion: ["transition"],
      layout: ["grid"],
    }),
    {
      colors: ["#fff"],
      typography: [],
      spacing: ["gap-4"],
      motion: ["transition"],
      layout: ["grid"],
    }
  );
});

test("design system extraction converts token JSON and component rules into constraints", () => {
  const tokens = {
    color: {
      brand: { primary: { value: "#0ea5e9" } },
      surface: { raised: { $value: "#111827" } },
    },
    typography: {
      heading: { family: { value: "Inter" }, size: { value: "32px" } },
    },
    spacing: {
      md: { value: "16px" },
      radius: { card: { value: "8px" } },
    },
    motion: {
      standard: { duration: { value: "180ms" } },
    },
  };

  const tokenExtraction = extractDesignTokenTraits(tokens);
  assert.ok(tokenExtraction.traits.colors.some((item) => item.includes("#0ea5e9")));
  assert.ok(tokenExtraction.traits.typography.some((item) => item.includes("Inter")));
  assert.ok(tokenExtraction.traits.spacing.some((item) => item.includes("16px")));
  assert.ok(tokenExtraction.traits.motion.some((item) => item.includes("180ms")));

  const system = buildDesignSystemExtraction({
    name: "Acme Ops",
    tokenJson: tokens,
    componentRules: "Buttons use icon+label pairs; Cards stay 8px radius; Tables need dense rows",
  });
  assert.match(system.promptPatch, /Acme Ops/);
  assert.match(system.promptPatch, /Token cues/);
  assert.match(system.promptPatch, /Reusable component rules/);
  assert.ok(system.componentRules.includes("Buttons use icon+label pairs"));
});

test("direct edit instruction scopes user changes to a selected element", () => {
  const instruction = buildDirectEditInstruction("make this card denser", {
    selector: "main > section:nth-of-type(2) > article:nth-of-type(1)",
    tagName: "article",
    className: "rounded-xl p-8",
    text: "Revenue Active users Conversion rate",
    outerHTML: "<article class=\"rounded-xl p-8\"><h2>Revenue</h2></article>",
  });

  assert.match(instruction, /DIRECT MANIPULATION EDIT/);
  assert.match(instruction, /Target only the selected element/);
  assert.match(instruction, /main > section/);
  assert.match(instruction, /make this card denser/);
});

test("quality scoring returns category scores and notes", () => {
  const score = scoreGeneratedHtml(`
    <html><body>
      <div style="width: 900px"><button></button><img src="/x.png"></div>
    </body></html>
  `);
  assert.ok(score.overall < 90);
  assert.ok(score.categories.mobileOverflow.notes.length > 0);
  assert.ok(score.categories.accessibility.score < 92);
});

test("runtime audit normalization rejects empty payloads", () => {
  assert.equal(normalizeRuntimeQualityAudit({ measurements: [] }), null);
  assert.deepEqual(
    normalizeRuntimeQualityAudit({
      userAgent: "test",
      created_at: 10,
      measurements: [{ viewportWidth: "375", overflowPixels: "42" }],
    }),
    {
      userAgent: "test",
      created_at: 10,
      measurements: [
        {
          viewportWidth: 375,
          viewportHeight: 0,
          clientWidth: 0,
          scrollWidth: 0,
          scrollHeight: 0,
          overflowPixels: 42,
          verticalOverflowPixels: 0,
          overflowingElementCount: 0,
          clippedTextCount: 0,
          tinyTextCount: 0,
          unlabeledControlCount: 0,
          missingAltCount: 0,
          duplicateIdCount: 0,
          smallTapTargetCount: 0,
          imageWithoutDimensionsCount: 0,
          layoutShiftProxyCount: 0,
          lowContrastCount: 0,
          headingCount: 0,
          h1Count: 0,
          landmarkCount: 0,
          totalElements: 0,
          bodyTextLength: 0,
          jsErrorCount: 0,
          visualFingerprint: undefined,
          timedOut: false,
        },
      ],
      visualDiffs: [],
    }
  );
});

test("runtime audit lowers scores for rendered overflow and contrast issues", () => {
  const base = scoreGeneratedHtml(`
    <html><body><main><h1>Dashboard</h1><section>Content</section></main></body></html>
  `);
  const merged = mergeRuntimeQualityAudit(base, {
    created_at: 1,
    measurements: [
      {
        viewportWidth: 375,
        viewportHeight: 900,
        clientWidth: 375,
        scrollWidth: 470,
        scrollHeight: 1400,
        overflowPixels: 95,
        verticalOverflowPixels: 500,
        overflowingElementCount: 3,
        lowContrastCount: 4,
        duplicateIdCount: 1,
        smallTapTargetCount: 2,
        imageWithoutDimensionsCount: 1,
        layoutShiftProxyCount: 16,
        landmarkCount: 1,
        totalElements: 40,
        visualFingerprint: "a",
      },
      {
        viewportWidth: 1280,
        viewportHeight: 900,
        clientWidth: 1280,
        scrollWidth: 1280,
        scrollHeight: 900,
        overflowPixels: 0,
        totalElements: 40,
        landmarkCount: 1,
        visualFingerprint: "a",
      },
    ],
  });
  assert.ok(merged.overall < base.overall);
  assert.match(merged.categories.mobileOverflow.notes.join(" "), /overflows/);
  assert.match(merged.categories.accessibility.notes.join(" "), /contrast/);
  assert.match(merged.categories.accessibility.notes.join(" "), /duplicate/);
  assert.match(merged.categories.productionReadiness.notes.join(" "), /intrinsic dimensions/);
  assert.match(merged.categories.originality.notes.join(" "), /fingerprints/);
  assert.equal(merged.runtime_audit?.measurements[0].overflowPixels, 95);
  assert.equal(merged.runtime_audit?.visualDiffs?.[0].fingerprintChanged, false);
});
