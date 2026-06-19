import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import test from "node:test";

const requireFromApi = createRequire(new URL("../api/package.json", import.meta.url));
const Database = requireFromApi("better-sqlite3");

test("db module migrates a legacy database to the current product schema", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "motif-db-migration-"));
  const dbPath = path.join(dir, "legacy.db");
  const legacy = new Database(dbPath);
  legacy.exec(`
    CREATE TABLE generations (
      id TEXT PRIMARY KEY,
      prompt TEXT NOT NULL,
      expanded_prompt TEXT NOT NULL DEFAULT '',
      system_prompt TEXT NOT NULL DEFAULT '',
      model TEXT NOT NULL,
      output TEXT NOT NULL,
      parsed_html TEXT NOT NULL,
      favorited INTEGER NOT NULL DEFAULT 0,
      created_at INTEGER NOT NULL
    );

    CREATE TABLE styles (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      tokens_json TEXT NOT NULL,
      created_at INTEGER NOT NULL
    );

    CREATE TABLE settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);
  legacy.close();

  const previousPath = process.env.MOTIF_DB_PATH;
  process.env.MOTIF_DB_PATH = dbPath;
  const moduleUrl = new URL(`../api/dist/db.js?migration=${Date.now()}`, import.meta.url);
  const { default: db, DB_PATH } = await import(moduleUrl.href);

  try {
    assert.equal(DB_PATH, dbPath);

    const generationColumns = db
      .prepare("PRAGMA table_info(generations)")
      .all()
      .map((row) => row.name);
    for (const column of [
      "genome_id",
      "genome_name",
      "parent_id",
      "secondary_genome_id",
      "secondary_genome_name",
      "thumbnail",
      "motif_id",
      "compare_role",
      "css_overrides",
      "recipe_id",
      "blend_config_json",
      "variation_distance",
      "board_status",
      "notes",
      "quality_score_json",
      "style_patch_id",
    ]) {
      assert.ok(generationColumns.includes(column), `missing generations.${column}`);
    }

    const tables = db
      .prepare("SELECT name FROM sqlite_master WHERE type = 'table'")
      .all()
      .map((row) => row.name);
    for (const table of [
      "motifs",
      "components",
      "style_recipes",
      "style_patches",
      "design_systems",
      "handoff_exports",
      "board_events",
      "board_style_decisions",
      "prompt_templates",
    ]) {
      assert.ok(tables.includes(table), `missing table ${table}`);
    }

    const motifColumns = db
      .prepare("PRAGMA table_info(motifs)")
      .all()
      .map((row) => row.name);
    assert.ok(motifColumns.includes("board_memory"));
    assert.ok(motifColumns.includes("board_memory_updated_at"));
  } finally {
    db.close();
    if (previousPath === undefined) {
      delete process.env.MOTIF_DB_PATH;
    } else {
      process.env.MOTIF_DB_PATH = previousPath;
    }
  }
});
