import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const API_PORT = Number(process.env.MOTIF_E2E_API_PORT || 4599);
const WEB_PORT = Number(process.env.MOTIF_E2E_WEB_PORT || 4598);
const LLM_PORT = Number(process.env.MOTIF_E2E_LLM_PORT || 4597);
const API_URL = `http://127.0.0.1:${API_PORT}`;
const WEB_URL = `http://127.0.0.1:${WEB_PORT}`;
const LLM_URL = `http://127.0.0.1:${LLM_PORT}/v1`;
const E2E_TIMEOUT_MS = Number(process.env.MOTIF_E2E_TIMEOUT_MS || 120_000);

const SEEDED_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>E2E Seeded Dashboard</title>
    <style>
      body { margin: 0; min-height: 100vh; font-family: Inter, system-ui, sans-serif; background: #101827; color: #f8fafc; }
      main { width: min(980px, calc(100% - 32px)); margin: 0 auto; padding: 48px 0; }
      section { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
      article { border: 1px solid rgba(148, 163, 184, .25); border-radius: 8px; padding: 20px; background: #172033; }
      h1 { font-size: clamp(2rem, 7vw, 4rem); margin: 0 0 24px; letter-spacing: 0; }
      h2 { margin: 0 0 8px; font-size: 1rem; }
      p { color: #cbd5e1; line-height: 1.55; }
      button { min-height: 40px; border: 0; border-radius: 6px; padding: 0 14px; background: #86efac; color: #052e16; font-weight: 800; }
      @media (max-width: 720px) { section { grid-template-columns: 1fr; } }
    </style>
  </head>
  <body>
    <main>
      <h1>E2E Seeded Dashboard</h1>
      <section>
        <article><h2>Revenue</h2><p>Stable content for browser workflow selection.</p><button>Inspect</button></article>
        <article><h2>Usage</h2><p>Responsive card that should be directly editable.</p><button>Open</button></article>
        <article><h2>Quality</h2><p>Known fixture for preview and board flows.</p><button>Review</button></article>
      </section>
    </main>
  </body>
</html>`;

const GENERATED_HTML = `<!doctype html>
<html lang="en">
  <head><meta charset="utf-8" /><title>E2E Generated</title></head>
  <body><main><h1>E2E Generated Variant</h1><button type="button">Generated Action</button></main></body>
</html>`;

function npmCommand() {
  return "npm";
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function readRequestBody(req) {
  let body = "";
  for await (const chunk of req) body += chunk;
  return body ? JSON.parse(body) : {};
}

function startFakeLlm() {
  const server = http.createServer(async (req, res) => {
    if (!req.url?.endsWith("/chat/completions")) {
      res.writeHead(404);
      res.end("not found");
      return;
    }

    const body = await readRequestBody(req);
    if (body.stream) {
      res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
      });
      for (const chunk of [
        GENERATED_HTML.slice(0, 80),
        GENERATED_HTML.slice(80, 180),
        GENERATED_HTML.slice(180),
      ]) {
        res.write(`data: ${JSON.stringify({ choices: [{ delta: { content: chunk } }] })}\n\n`);
      }
      res.write("data: [DONE]\n\n");
      res.end();
      return;
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      choices: [
        {
          message: {
            content: "Expanded E2E dashboard specification with responsive cards and clear hierarchy.",
          },
        },
      ],
    }));
  });

  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(LLM_PORT, "127.0.0.1", () => {
      server.off("error", reject);
      resolve(server);
    });
  });
}

function spawnProcess(label, args, env) {
  const child = spawn(npmCommand(), args, {
    cwd: ROOT,
    env: { ...process.env, ...env },
    stdio: ["ignore", "pipe", "pipe"],
    shell: process.platform === "win32",
    detached: process.platform !== "win32",
  });
  child.stdout.on("data", (data) => process.stdout.write(`[${label}] ${data}`));
  child.stderr.on("data", (data) => process.stderr.write(`[${label}] ${data}`));
  return child;
}

async function stopProcess(child) {
  if (!child) return;
  const waitForExit = () => (
    child.exitCode !== null || child.signalCode !== null
      ? Promise.resolve()
      : new Promise((resolve) => child.once("exit", resolve))
  );

  if (process.platform === "win32" && child.pid) {
    const killer = spawn("taskkill", ["/pid", String(child.pid), "/t", "/f"], {
      stdio: "ignore",
      shell: true,
    });
    await Promise.race([
      new Promise((resolve) => killer.once("exit", resolve)),
      wait(2500),
    ]);
    await wait(800);
    child.stdout?.destroy();
    child.stderr?.destroy();
    return;
  }

  if (child.pid) {
    try {
      process.kill(-child.pid, "SIGTERM");
    } catch {
      child.kill("SIGTERM");
    }
  } else {
    child.kill("SIGTERM");
  }

  const exited = await Promise.race([
    waitForExit().then(() => true),
    wait(2500).then(() => false),
  ]);

  if (!exited && child.pid) {
    try {
      process.kill(-child.pid, "SIGKILL");
    } catch {
      child.kill("SIGKILL");
    }
    await Promise.race([waitForExit(), wait(1000)]);
  }

  child.stdout?.destroy();
  child.stderr?.destroy();
}

async function removeTempDir(dir) {
  for (let attempt = 0; attempt < 8; attempt += 1) {
    try {
      await rm(dir, { recursive: true, force: true });
      return;
    } catch (error) {
      if (!["EBUSY", "EPERM", "ENOTEMPTY"].includes(error?.code) || attempt === 7) {
        throw error;
      }
      await wait(400 + attempt * 200);
    }
  }
}

async function waitForUrl(url, label) {
  const deadline = Date.now() + 45000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // retry
    }
    await wait(500);
  }
  throw new Error(`${label} did not become ready at ${url}`);
}

async function jsonFetch(url, init) {
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${await response.text()}`);
  }
  return response.json();
}

function parseSse(text) {
  return text
    .split(/\n\n+/)
    .map((block) => {
      const event = block.match(/^event:\s*(.+)$/m)?.[1] || "message";
      const data = block.match(/^data:\s*([\s\S]+)$/m)?.[1] || "";
      return { event, data };
    })
    .filter((item) => item.data);
}

async function assertGenerationSse() {
  await jsonFetch(`${API_URL}/api/settings`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      provider: "custom",
      providerBaseUrl: LLM_URL,
      model: "e2e-model",
      onboardingComplete: "true",
    }),
  });

  const response = await fetch(`${API_URL}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: "E2E generated dashboard",
      genomeId: "01",
      model: "e2e-model",
      temperature: 0,
      batchSize: 1,
    }),
  });
  if (!response.ok) {
    throw new Error(`Generation SSE failed: ${response.status} ${await response.text()}`);
  }

  const sseText = await response.text();
  const events = parseSse(sseText);
  assert.deepEqual(
    events.map((event) => event.event).filter((event) => event !== "message"),
    ["variant_expanding", "variant_start", "variant_chunk", "variant_chunk", "variant_chunk", "variant_done"]
  );
  assert.match(sseText, /E2E Generated Variant/);

  const payload = await jsonFetch(`${API_URL}/api/generations`);
  const generations = payload.items ?? payload;
  assert.ok(generations.some((generation) => generation.prompt === "E2E generated dashboard"));
}

async function seedFrontendGeneration() {
  return jsonFetch(`${API_URL}/api/compare/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: "E2E seeded dashboard",
      expanded_prompt: "Seeded generation for frontend E2E workflow.",
      system_prompt: "[e2e:seed]",
      genome_id: "e2e",
      genome_name: "e2e_seed",
      model: "e2e",
      output: SEEDED_HTML,
      parsed_html: SEEDED_HTML,
      compare_role: "e2e",
    }),
  });
}

async function assertFrontendWorkflow() {
  await seedFrontendGeneration();

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  try {
    await page.goto(WEB_URL, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);
    const bodyText = await page.locator("body").textContent();
    if (!bodyText?.includes("e2e_seed")) {
      const payload = await jsonFetch(`${API_URL}/api/generations`);
      const generations = payload.items ?? payload;
      throw new Error(JSON.stringify({
        message: "Seeded generation was not visible in the frontend",
        bodyText: bodyText?.slice(0, 1200),
        prompts: generations.map((generation) => generation.prompt),
      }, null, 2));
    }

    const preview = page.getByRole("button", { name: "Open generation E2E seeded dashboard", exact: true }).getByTestId("variant-preview");
    const thumbnail = preview.locator("iframe, img").first();
    await thumbnail.waitFor({ state: "attached", timeout: 10000 });
    if (await thumbnail.evaluate((element) => element.tagName) === "IFRAME") {
      await preview.locator("iframe").contentFrame().getByRole("heading", { name: "E2E Seeded Dashboard" }).waitFor({ state: "visible", timeout: 10000 });
    } else {
      assert.match(await thumbnail.getAttribute("src") || "", /^data:image\/webp;base64,/);
    }
    await preview.click();
    await page.getByRole("button", { name: "Direct element edit" }).waitFor({ state: "visible", timeout: 10000 });
    await page.getByRole("button", { name: "Direct element edit" }).click();
    await page.getByText("Click an element in the preview to target a localized edit").waitFor({ state: "visible" });

    await page.locator('iframe[title="Preview"]').contentFrame().locator("article").first().click();
    await page.getByText("Selected element").waitFor({ state: "visible", timeout: 10000 });
    await page.getByText("fix contrast here").click();
    assert.equal(await page.getByPlaceholder("select an element first...").count(), 0);
    const instruction = page.getByPlaceholder("localized edit...");
    assert.equal(await instruction.inputValue(), "fix contrast here");
    await page.getByRole("button", { name: "Apply", exact: true }).waitFor({ state: "visible" });
    assert.equal(await page.getByRole("button", { name: "Apply", exact: true }).isEnabled(), true);

    await page.getByRole("button", { name: "Open project board" }).click();
    await page.getByRole("heading", { name: "Candidate", exact: true }).waitFor({ state: "visible", timeout: 10000 });
    await page.locator("article", { hasText: "E2E seeded dashboard" }).first().waitFor({ state: "visible", timeout: 10000 });
  } finally {
    await browser.close();
  }
}

async function main() {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), "motif-e2e-"));
  const dbPath = path.join(tempDir, "motif-e2e.db");
  const fakeLlm = await startFakeLlm();
  const api = spawnProcess("api", ["--prefix", "api", "run", "dev"], {
    MOTIF_DB_PATH: dbPath,
    MOTIF_PORT: String(API_PORT),
    MOTIF_WEB_PORT: String(WEB_PORT),
  });
  const web = spawnProcess("web", ["--prefix", "web", "run", "dev", "--", "--host", "127.0.0.1"], {
    MOTIF_WEB_PORT: String(WEB_PORT),
    MOTIF_API_URL: API_URL,
  });

  try {
    await waitForUrl(`${API_URL}/api/generations`, "API");
    await waitForUrl(WEB_URL, "Web app");
    await assertGenerationSse();
    await assertFrontendWorkflow();
    console.log(JSON.stringify({
      ok: true,
      apiUrl: API_URL,
      webUrl: WEB_URL,
      dbPath,
      covered: ["generation-sse", "frontend-preview-direct-edit", "board-navigation", "isolated-db"],
    }, null, 2));
  } finally {
    await stopProcess(web);
    await stopProcess(api);
    await new Promise((resolve) => fakeLlm.close(resolve));
    await removeTempDir(tempDir);
  }
}

const watchdog = setTimeout(() => {
  console.error(`E2E workflow smoke exceeded ${E2E_TIMEOUT_MS}ms`);
  process.exit(124);
}, E2E_TIMEOUT_MS);

main().then(() => {
  clearTimeout(watchdog);
}).catch((error) => {
  clearTimeout(watchdog);
  console.error(error);
  process.exit(1);
});
