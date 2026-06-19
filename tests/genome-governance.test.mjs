import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  auditGenomeFiles,
  formatMarkdownReport,
  parseFrontmatter,
} from "../scripts/genome-governance.mjs";

function writeGenome(dir, filename, { id, name, keywords, body }) {
  const frontmatter = [
    "---",
    `id: "${id}"`,
    `name: ${name}`,
    "keywords:",
    ...keywords.map((keyword) => `  - ${keyword}`),
    "---",
    "",
  ].join("\n");
  fs.writeFileSync(path.join(dir, filename), `${frontmatter}${body}`, "utf8");
}

const completeBody = `
### genome 01: \`valid.system\`

> identity: precise control-room dashboards.

**surface**
colors, typography, borders, and spacing are specified.

**component patterns**
Buttons, inputs, cards, navigation, tables, and modals are specified.

**interaction language**
Hover, active, focus, selected, disabled, and drag states are specified.

**motion & feedback**
Transitions, loading, success, and error states are specified.

**cursor & selection**
Pointer rules and text selection are specified.

**anti-patterns — this genome NEVER:**
- uses vague generic SaaS styling.
- uses unrelated type families.
- uses ungoverned accent colors.
- uses inconsistent border radii.
- uses placeholder decorative imagery.

**when to reach for this genome**
Use when the prompt asks for operational dashboards.
`;

test("frontmatter parser accepts genome keyword arrays", () => {
  const parsed = parseFrontmatter(`---\nid: "01"\nname: lab_manual.80s\nkeywords:\n  - docs\n  - clinical\n---\nbody`);
  assert.equal(parsed.hasFrontmatter, true);
  assert.equal(parsed.meta.id, "01");
  assert.equal(parsed.meta.name, "lab_manual.80s");
  assert.deepEqual(parsed.meta.keywords, ["docs", "clinical"]);
  assert.equal(parsed.content, "body");
});

test("genome governance passes a complete genome", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "motif-genome-ok-"));
  writeGenome(dir, "01_valid.system.md", {
    id: "01",
    name: "valid.system",
    keywords: ["ops", "dashboard", "metrics", "control", "alerts", "systems", "charts", "admin"],
    body: completeBody,
  });

  const report = auditGenomeFiles(dir, { minLines: 10, minKeywords: 8, minAntiPatterns: 5 });
  assert.equal(report.genomeCount, 1);
  assert.equal(report.totalErrors, 0);
  assert.equal(report.totalWarnings, 0);
});

test("genome governance detects duplicate IDs and prioritizes weak genomes", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "motif-genome-weak-"));
  writeGenome(dir, "01_valid.system.md", {
    id: "01",
    name: "valid.system",
    keywords: ["ops", "dashboard", "metrics", "control", "alerts", "systems", "charts", "admin"],
    body: completeBody,
  });
  writeGenome(dir, "02_weak.system.md", {
    id: "01",
    name: "weak.system",
    keywords: ["weak", "thin"],
    body: `
### genome 02: \`weak.system\`

> identity: thin draft.

**surface**
bare surface notes.

**component patterns**
bare component notes.

**anti-patterns — this genome NEVER:**
- uses generic styling.
`,
  });

  const report = auditGenomeFiles(dir, { minLines: 25, minKeywords: 8, minAntiPatterns: 5 });
  assert.ok(report.totalErrors > 0);
  assert.ok(report.totalWarnings > 0);
  assert.equal(report.thinGenomeCount, 1);
  assert.equal(report.weakKeywordCount, 1);
  assert.equal(report.weakAntiPatternCount, 1);
  assert.ok(report.rows[0].priority >= report.rows[1].priority);

  const markdown = formatMarkdownReport(report, 2);
  assert.match(markdown, /Genome Governance Audit/);
  assert.match(markdown, /weak\.system/);
});
