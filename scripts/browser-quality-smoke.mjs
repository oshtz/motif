import { createHash } from "node:crypto";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const API_URL = process.env.MOTIF_API_URL || "http://localhost:4389";
const OUT_DIR = process.env.MOTIF_SMOKE_OUT || path.join("artifacts", "browser-quality");
const VIEWPORTS = [
  { width: 375, height: 900 },
  { width: 768, height: 960 },
  { width: 1280, height: 900 },
];
const SEED_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Motif CI Smoke</title>
    <style>
      :root { color-scheme: dark; font-family: Inter, ui-sans-serif, system-ui, sans-serif; background: #111827; color: #f8fafc; }
      body { margin: 0; min-height: 100vh; background: radial-gradient(circle at top left, rgba(34, 197, 94, .22), transparent 32rem), #111827; }
      main { width: min(1120px, calc(100% - 32px)); margin: 0 auto; padding: 40px 0; }
      header { display: flex; align-items: end; justify-content: space-between; gap: 24px; border-bottom: 1px solid rgba(148, 163, 184, .25); padding-bottom: 24px; }
      h1 { margin: 0; font-size: clamp(2rem, 8vw, 4.5rem); line-height: .92; letter-spacing: 0; }
      p { color: #cbd5e1; line-height: 1.65; max-width: 62ch; }
      .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-top: 28px; }
      article { border: 1px solid rgba(148, 163, 184, .24); background: rgba(15, 23, 42, .84); border-radius: 8px; padding: 20px; min-height: 150px; }
      h2 { margin: 0 0 12px; font-size: 1rem; }
      .metric { font-size: 2.5rem; font-weight: 800; color: #86efac; }
      button { min-height: 40px; border: 0; border-radius: 6px; background: #86efac; color: #052e16; font-weight: 800; padding: 0 16px; }
      @media (max-width: 760px) { header { align-items: start; flex-direction: column; } .grid { grid-template-columns: 1fr; } }
    </style>
  </head>
  <body>
    <main>
      <header>
        <div>
          <h1>Runtime Quality Smoke</h1>
          <p>Responsive seeded artifact for CI browser quality scoring.</p>
        </div>
        <button type="button">Review</button>
      </header>
      <section class="grid" aria-label="Quality metrics">
        <article><h2>Accessibility</h2><div class="metric">94</div><p>Labels, hierarchy, and contrast are intentionally stable.</p></article>
        <article><h2>Mobile Fit</h2><div class="metric">0px</div><p>The layout stacks cleanly below tablet widths.</p></article>
        <article><h2>Readiness</h2><div class="metric">A</div><p>Simple component boundaries and predictable tokens.</p></article>
      </section>
    </main>
  </body>
</html>`;

function argValue(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : "";
}

function hasFlag(name) {
  return process.argv.includes(name);
}

function hashBuffer(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

function slug(value) {
  return String(value || "generation")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "generation";
}

async function getJson(url, init) {
  const response = await fetch(url, init);
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`${response.status} ${response.statusText}: ${text}`);
  }
  return response.json();
}

async function seedGeneration() {
  return getJson(`${API_URL}/api/compare/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: "CI browser quality smoke",
      expanded_prompt: "Seeded responsive artifact for CI browser quality smoke coverage.",
      system_prompt: "[ci:browser-smoke]",
      genome_id: "ci",
      genome_name: "ci_smoke",
      model: "ci",
      output: SEED_HTML,
      parsed_html: SEED_HTML,
      compare_role: "ci-smoke",
    }),
  });
}

async function chooseGeneration() {
  const requestedId = argValue("--generation");
  if (requestedId) {
    const generations = await getJson(`${API_URL}/api/generations`);
    const found = generations.find((item) => item.id === requestedId);
    if (!found) throw new Error(`Generation ${requestedId} not found at ${API_URL}`);
    return found;
  }
  const generations = await getJson(`${API_URL}/api/generations`);
  if (!Array.isArray(generations) || generations.length === 0) {
    if (hasFlag("--seed-if-empty")) return seedGeneration();
    throw new Error(`No generations found at ${API_URL}`);
  }
  return generations[0];
}

function browserMetricsScript() {
  function number(value, fallback = 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }
  function parseColor(value) {
    const match = String(value || "").match(/rgba?\(([^)]+)\)/i);
    if (!match) return null;
    const parts = match[1].split(",").map((part) => Number(part.trim()));
    return {
      r: number(parts[0]),
      g: number(parts[1]),
      b: number(parts[2]),
      a: parts.length > 3 ? number(parts[3], 1) : 1,
    };
  }
  function channel(value) {
    const normalized = value / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4);
  }
  function contrast(a, b) {
    const l1 = 0.2126 * channel(a.r) + 0.7152 * channel(a.g) + 0.0722 * channel(a.b);
    const l2 = 0.2126 * channel(b.r) + 0.7152 * channel(b.g) + 0.0722 * channel(b.b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  }
  function backgroundFor(element) {
    let node = element;
    while (node && node.nodeType === 1) {
      const color = parseColor(getComputedStyle(node).backgroundColor);
      if (color && color.a > 0.05) return color;
      node = node.parentElement;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  }
  function hasDirectText(element) {
    return Array.from(element.childNodes).some(
      (node) => node.nodeType === Node.TEXT_NODE && String(node.textContent || "").trim().length > 0
    );
  }
  function textFor(element) {
    return String(element.innerText || element.textContent || "").trim();
  }
  function isVisible(element) {
    const style = getComputedStyle(element);
    if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) return false;
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }
  function hasLabel(element) {
    const tag = element.tagName.toLowerCase();
    if (tag === "input" && element.type === "hidden") return true;
    if (element.getAttribute("aria-label") || element.getAttribute("aria-labelledby") || element.getAttribute("title")) return true;
    return textFor(element).length > 0;
  }
  function isInteractive(element) {
    const tag = element.tagName.toLowerCase();
    return tag === "button" || tag === "a" || tag === "input" || tag === "select" || tag === "textarea" || element.getAttribute("role") === "button" || element.getAttribute("tabindex") !== null;
  }

  const root = document.documentElement;
  const body = document.body || root;
  const elements = Array.from(body.querySelectorAll("*"));
  const visible = elements.filter(isVisible);
  const ids = new Map();
  let overflowingElementCount = 0;
  let clippedTextCount = 0;
  let tinyTextCount = 0;
  let lowContrastCount = 0;
  let checkedContrast = 0;
  let smallTapTargetCount = 0;
  let imageWithoutDimensionsCount = 0;
  let layoutShiftProxyCount = 0;

  for (const element of visible) {
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    if (rect.left < -2 || rect.right > window.innerWidth + 2) overflowingElementCount++;
    if (textFor(element) && element.scrollWidth > element.clientWidth + 2) clippedTextCount++;
    if (element.id) ids.set(element.id, (ids.get(element.id) || 0) + 1);
    if (isInteractive(element) && (rect.width < 32 || rect.height < 32)) smallTapTargetCount++;
    if (element.tagName.toLowerCase() === "img" && (!element.getAttribute("width") || !element.getAttribute("height"))) imageWithoutDimensionsCount++;
    if ((style.animationName && style.animationName !== "none") || (style.transitionDuration && style.transitionDuration !== "0s")) layoutShiftProxyCount++;
    if (!hasDirectText(element)) continue;
    const fontSize = number(style.fontSize.replace("px", ""));
    if (fontSize > 0 && fontSize < 11) tinyTextCount++;
    if (checkedContrast < 180) {
      const fg = parseColor(style.color);
      const bg = backgroundFor(element);
      const weight = number(style.fontWeight, 400);
      const largeText = fontSize >= 24 || (fontSize >= 18 && weight >= 600);
      if (fg && contrast(fg, bg) < (largeText ? 3 : 4.5)) lowContrastCount++;
      checkedContrast++;
    }
  }

  const clientWidth = root.clientWidth || window.innerWidth;
  const scrollWidth = Math.max(root.scrollWidth, body.scrollWidth, clientWidth);
  const scrollHeight = Math.max(root.scrollHeight, body.scrollHeight, window.innerHeight);

  return {
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    clientWidth,
    scrollWidth,
    scrollHeight,
    overflowPixels: Math.max(0, scrollWidth - clientWidth),
    verticalOverflowPixels: Math.max(0, scrollHeight - window.innerHeight),
    overflowingElementCount,
    clippedTextCount,
    tinyTextCount,
    unlabeledControlCount: Array.from(body.querySelectorAll("button,a,input,select,textarea")).filter((element) => !hasLabel(element)).length,
    missingAltCount: body.querySelectorAll("img:not([alt])").length,
    duplicateIdCount: Array.from(ids.values()).filter((count) => count > 1).length,
    smallTapTargetCount,
    imageWithoutDimensionsCount,
    layoutShiftProxyCount,
    lowContrastCount,
    headingCount: body.querySelectorAll("h1,h2,h3,h4,h5,h6").length,
    h1Count: body.querySelectorAll("h1").length,
    landmarkCount: body.querySelectorAll("main,nav,aside,header,footer,section,article,[role='main'],[role='navigation'],[role='banner'],[role='contentinfo']").length,
    totalElements: elements.length,
    bodyTextLength: textFor(body).length,
  };
}

function visualDiffs(measurements) {
  if (measurements.length < 2) return [];
  const baseline = measurements[0];
  return measurements.slice(1).map((item) => ({
    fromViewportWidth: baseline.viewportWidth,
    toViewportWidth: item.viewportWidth,
    fingerprintChanged: Boolean(baseline.visualFingerprint && item.visualFingerprint && baseline.visualFingerprint !== item.visualFingerprint),
    overflowDelta: item.overflowPixels - baseline.overflowPixels,
    elementCountDelta: item.totalElements - baseline.totalElements,
  }));
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const generation = await chooseGeneration();
  const errors = [];
  const browser = await chromium.launch({ headless: true });
  const measurements = [];
  const prefix = `${slug(generation.prompt)}-${generation.id.slice(0, 8)}`;

  try {
    for (const viewport of VIEWPORTS) {
      const page = await browser.newPage({ viewport });
      page.on("pageerror", (error) => errors.push(String(error.message || error)));
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text());
      });
      await page.setContent(generation.parsed_html, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(1200);
      const metrics = await page.evaluate(browserMetricsScript);
      const screenshotPath = path.join(OUT_DIR, `${prefix}-${viewport.width}.png`);
      const screenshot = await page.screenshot({ path: screenshotPath, fullPage: false });
      measurements.push({
        ...metrics,
        jsErrorCount: errors.length,
        visualFingerprint: hashBuffer(screenshot),
        screenshotPath,
      });
      await page.close();
    }
  } finally {
    await browser.close();
  }

  const runtimeAudit = {
    measurements,
    visualDiffs: visualDiffs(measurements),
    userAgent: `Playwright Chromium ${chromium.name?.() || "chromium"}`,
    created_at: Date.now(),
  };

  const score = await getJson(`${API_URL}/api/generations/${generation.id}/quality-score`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ runtimeAudit }),
  });

  const summary = {
    generationId: generation.id,
    prompt: generation.prompt,
    overall: score.overall,
    screenshots: measurements.map((item) => ({
      viewportWidth: item.viewportWidth,
      path: item.screenshotPath,
      sha256: item.visualFingerprint,
    })),
    visualDiffs: runtimeAudit.visualDiffs,
    categories: score.categories,
  };

  console.log(JSON.stringify(summary, null, 2));
}

main().catch((error) => {
  const message = String(error?.message || error);
  if (message.includes("Executable doesn't exist") || message.includes("browserType.launch")) {
    console.error("Playwright Chromium is not installed. Run: npx playwright install chromium");
  }
  console.error(message);
  process.exit(1);
});
