import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DEFAULT_GENOMES_DIR = path.resolve("api/src/genomes");
const DEFAULT_MIN_LINES = 110;
const DEFAULT_MIN_KEYWORDS = 8;
const DEFAULT_MIN_ANTI_PATTERNS = 5;

const REQUIRED_SECTIONS = [
  { key: "identity", label: "identity", pattern: /(?:^|\n)\s*(?:>\s*)?identity\s*:/i },
  { key: "surface", label: "surface", pattern: /(?:^|\n)\s*(?:#{2,4}\s+|\*\*)surface\b/i },
  { key: "component-patterns", label: "component patterns", pattern: /component patterns/i },
  { key: "interaction-language", label: "interaction language", pattern: /interaction language/i },
  { key: "motion-feedback", label: "motion & feedback", pattern: /motion\s*(?:&|and)\s*feedback/i },
  { key: "cursor-selection", label: "cursor & selection", pattern: /cursor\s*(?:&|and)\s*selection/i },
  { key: "anti-patterns", label: "anti-patterns", pattern: /anti-patterns?/i },
];

const RECOMMENDED_SECTIONS = [
  { key: "selection-guidance", label: "when to reach", pattern: /when to reach for this genome|when to use/i },
];

function parseFrontmatter(raw) {
  const normalized = raw.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: normalized, hasFrontmatter: false };

  const meta = {};
  let currentKey = "";
  let arrayValues = null;

  const flushArray = () => {
    if (arrayValues && currentKey) {
      meta[currentKey] = [...arrayValues];
      arrayValues = null;
      currentKey = "";
    }
  };

  for (const line of match[1].split("\n")) {
    if (arrayValues) {
      const itemMatch = line.match(/^\s+-\s+(.+)$/);
      if (itemMatch) {
        arrayValues.push(itemMatch[1].trim().replace(/^["']|["']$/g, ""));
        continue;
      }
      flushArray();
    }

    const kvMatch = line.match(/^(\w+):\s*(.*)$/);
    if (!kvMatch) continue;
    const [, key, rawValue] = kvMatch;
    if (rawValue === "") {
      currentKey = key;
      arrayValues = [];
      continue;
    }
    meta[key] = rawValue.trim().replace(/^["']|["']$/g, "");
  }

  flushArray();

  return {
    meta,
    content: match[2].trim(),
    hasFrontmatter: true,
  };
}

function normalizeLines(raw) {
  return raw.replace(/\r\n/g, "\n").split("\n");
}

function extractAntiPatternBlock(content) {
  const match = content.match(/(?:^|\n)(?:#{2,4}\s*)?(?:\*\*)?anti-patterns?[\s\S]*?(?:\*\*)?(?:\s*[—-].*)?\n([\s\S]*?)(?=\n(?:#{2,4}\s+|\*\*[^*\n]+?\*\*)|$)/i);
  return match?.[1] ?? "";
}

function countAntiPatternRules(content) {
  const block = extractAntiPatternBlock(content);
  const listItems = block
    .split("\n")
    .filter((line) => /^\s*(?:[-*]|\d+\.)\s+/.test(line.trim()));
  if (listItems.length > 0) return listItems.length;

  return block
    .split(/[.;]\s+/)
    .map((item) => item.trim())
    .filter((item) => item.length >= 24).length;
}

function filenameStem(filePath) {
  return path.basename(filePath, ".md");
}

function expectedIdFromFilename(filePath) {
  const match = filenameStem(filePath).match(/^(\d{2,3})_/);
  return match?.[1] ?? "";
}

function expectedNameFromFilename(filePath) {
  return filenameStem(filePath).replace(/^\d{2,3}_/, "");
}

function issue(severity, code, message, points = 0) {
  return { severity, code, message, points };
}

function auditGenomeFile(filePath, options = {}) {
  const minLines = options.minLines ?? DEFAULT_MIN_LINES;
  const minKeywords = options.minKeywords ?? DEFAULT_MIN_KEYWORDS;
  const minAntiPatterns = options.minAntiPatterns ?? DEFAULT_MIN_ANTI_PATTERNS;
  const raw = fs.readFileSync(filePath, "utf8");
  const { meta, content, hasFrontmatter } = parseFrontmatter(raw);
  const lines = normalizeLines(raw.replace(/^\uFEFF/, ""));
  const nonEmptyLines = lines.filter((line) => line.trim().length > 0);
  const id = typeof meta.id === "string" ? meta.id : "";
  const name = typeof meta.name === "string" ? meta.name : "";
  const keywords = Array.isArray(meta.keywords) ? meta.keywords.filter((value) => typeof value === "string" && value.trim()) : [];
  const issues = [];

  if (!hasFrontmatter) issues.push(issue("error", "frontmatter.missing", "Missing YAML frontmatter", 100));
  if (!id) issues.push(issue("error", "id.missing", "Missing frontmatter id", 100));
  if (!name) issues.push(issue("error", "name.missing", "Missing frontmatter name", 100));
  if (keywords.length === 0) {
    issues.push(issue("error", "keywords.missing", "Missing frontmatter keywords used by genome selection", 100));
  } else if (keywords.length < minKeywords) {
    issues.push(issue("warning", "keywords.thin", `Only ${keywords.length} selection keywords; target ${minKeywords}+`, 20 + (minKeywords - keywords.length) * 3));
  }

  const expectedId = expectedIdFromFilename(filePath);
  const expectedName = expectedNameFromFilename(filePath);
  if (id && expectedId && id !== expectedId) {
    issues.push(issue("warning", "id.filename-mismatch", `Frontmatter id ${id} does not match filename prefix ${expectedId}`, 12));
  }
  if (name && expectedName && name !== expectedName) {
    issues.push(issue("warning", "name.filename-mismatch", `Frontmatter name ${name} does not match filename ${expectedName}`, 12));
  }

  for (const section of REQUIRED_SECTIONS) {
    if (!section.pattern.test(content)) {
      issues.push(issue("error", `section.${section.key}.missing`, `Missing required section: ${section.label}`, 80));
    }
  }

  for (const section of RECOMMENDED_SECTIONS) {
    if (!section.pattern.test(content)) {
      issues.push(issue("warning", `section.${section.key}.missing`, `Missing recommended section: ${section.label}`, 20));
    }
  }

  if (nonEmptyLines.length < minLines) {
    issues.push(issue("warning", "depth.thin", `${nonEmptyLines.length} non-empty file lines; target ${minLines}+`, Math.max(10, minLines - nonEmptyLines.length)));
  }

  const antiPatternRules = countAntiPatternRules(content);
  if (antiPatternRules < minAntiPatterns) {
    issues.push(issue("warning", "anti-patterns.weak", `${antiPatternRules} anti-pattern rules; target ${minAntiPatterns}+`, 25 + (minAntiPatterns - antiPatternRules) * 5));
  }

  const priority = issues.reduce((sum, item) => sum + item.points, 0);
  const errors = issues.filter((item) => item.severity === "error").length;
  const warnings = issues.filter((item) => item.severity === "warning").length;

  return {
    file: path.relative(process.cwd(), filePath).replace(/\\/g, "/"),
    id,
    name,
    lineCount: nonEmptyLines.length,
    keywordCount: keywords.length,
    antiPatternRules,
    priority,
    errors,
    warnings,
    issues,
  };
}

function findDuplicateValues(rows, key) {
  const seen = new Map();
  const duplicates = new Map();
  for (const row of rows) {
    const value = row[key];
    if (!value) continue;
    if (!seen.has(value)) {
      seen.set(value, row.file);
      continue;
    }
    duplicates.set(value, [seen.get(value), ...(duplicates.get(value) ?? []), row.file]);
  }
  return duplicates;
}

function attachDuplicateIssues(rows, key, code, label) {
  const duplicates = findDuplicateValues(rows, key);
  if (duplicates.size === 0) return;

  for (const [value, files] of duplicates.entries()) {
    for (const row of rows) {
      if (row[key] !== value) continue;
      row.issues.push(issue("error", code, `Duplicate ${label} ${value} also used by ${files.filter((file) => file !== row.file).join(", ")}`, 120));
      row.errors += 1;
      row.priority += 120;
    }
  }
}

function auditGenomeFiles(genomesDir = DEFAULT_GENOMES_DIR, options = {}) {
  const files = fs
    .readdirSync(genomesDir)
    .filter((file) => file.endsWith(".md") && file !== "_base.md")
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => path.join(genomesDir, file));

  const rows = files.map((file) => auditGenomeFile(file, options));
  attachDuplicateIssues(rows, "id", "id.duplicate", "id");
  attachDuplicateIssues(rows, "name", "name.duplicate", "name");
  rows.sort((a, b) => b.priority - a.priority || a.file.localeCompare(b.file));

  const totalErrors = rows.reduce((sum, row) => sum + row.errors, 0);
  const totalWarnings = rows.reduce((sum, row) => sum + row.warnings, 0);
  const thinGenomes = rows.filter((row) => row.issues.some((item) => item.code === "depth.thin"));
  const weakAntiPatterns = rows.filter((row) => row.issues.some((item) => item.code === "anti-patterns.weak"));
  const weakKeywords = rows.filter((row) => row.issues.some((item) => item.code === "keywords.thin" || item.code === "keywords.missing"));

  return {
    genomesDir: path.relative(process.cwd(), genomesDir).replace(/\\/g, "/"),
    generatedAt: new Date().toISOString(),
    genomeCount: rows.length,
    totalErrors,
    totalWarnings,
    thinGenomeCount: thinGenomes.length,
    weakAntiPatternCount: weakAntiPatterns.length,
    weakKeywordCount: weakKeywords.length,
    rows,
  };
}

function formatIssueSummary(row) {
  return row.issues.map((item) => `${item.severity}:${item.code}`).join(", ") || "ok";
}

function formatMarkdownReport(report, limit = 30) {
  const lines = [
    "# Genome Governance Audit",
    "",
    `- Genomes: ${report.genomeCount}`,
    `- Errors: ${report.totalErrors}`,
    `- Warnings: ${report.totalWarnings}`,
    `- Thin genomes: ${report.thinGenomeCount}`,
    `- Weak anti-pattern blocks: ${report.weakAntiPatternCount}`,
    `- Weak keyword sets: ${report.weakKeywordCount}`,
    "",
    "## Priority Queue",
    "",
    "| Priority | Genome | Lines | Keywords | Anti-patterns | Issues |",
    "| ---: | --- | ---: | ---: | ---: | --- |",
  ];

  const priorityRows = report.rows.filter((row) => row.issues.length > 0).slice(0, limit);
  if (priorityRows.length === 0) {
    lines.push("| 0 | all | - | - | - | No issues detected |");
  } else {
    for (const row of priorityRows) {
      lines.push(`| ${row.priority} | ${row.id || "?"} ${row.name || row.file} | ${row.lineCount} | ${row.keywordCount} | ${row.antiPatternRules} | ${formatIssueSummary(row)} |`);
    }
  }

  return `${lines.join("\n")}\n`;
}

function parseArgs(argv) {
  const options = {
    dir: DEFAULT_GENOMES_DIR,
    json: false,
    strict: false,
    limit: 30,
    minLines: DEFAULT_MIN_LINES,
    minKeywords: DEFAULT_MIN_KEYWORDS,
    minAntiPatterns: DEFAULT_MIN_ANTI_PATTERNS,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--json") options.json = true;
    else if (arg === "--strict") options.strict = true;
    else if (arg === "--dir") options.dir = path.resolve(argv[++index]);
    else if (arg === "--limit") options.limit = Number(argv[++index]);
    else if (arg === "--min-lines") options.minLines = Number(argv[++index]);
    else if (arg === "--min-keywords") options.minKeywords = Number(argv[++index]);
    else if (arg === "--min-anti-patterns") options.minAntiPatterns = Number(argv[++index]);
  }

  return options;
}

function runCli() {
  const options = parseArgs(process.argv.slice(2));
  const report = auditGenomeFiles(options.dir, options);
  if (options.json) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  } else {
    process.stdout.write(formatMarkdownReport(report, options.limit));
  }

  const strictFailure = options.strict && report.totalWarnings > 0;
  if (report.totalErrors > 0 || strictFailure) {
    process.exitCode = 1;
  }
}

const isCli = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);
if (isCli) runCli();

export {
  REQUIRED_SECTIONS,
  RECOMMENDED_SECTIONS,
  auditGenomeFile,
  auditGenomeFiles,
  countAntiPatternRules,
  formatMarkdownReport,
  parseFrontmatter,
};
