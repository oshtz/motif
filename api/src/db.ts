import Database from "better-sqlite3";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { randomUUID } from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const DB_PATH = process.env.MOTIF_DB_PATH || path.join(__dirname, "..", "motif.db");
const RESTORE_PATH = `${DB_PATH}.restore`;
const RECOVERY_PATH = `${DB_PATH}.recovery`;
const LATEST_SCHEMA_VERSION = 2;

fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });

export function validateDatabaseFile(filePath: string): void {
  const candidate = new Database(filePath, { readonly: true, fileMustExist: true });
  try {
    const integrity = candidate.pragma("integrity_check", { simple: true });
    if (integrity !== "ok") throw new Error(`SQLite integrity check failed: ${String(integrity)}`);
    const tables = candidate.prepare(
      "SELECT name FROM sqlite_master WHERE type = 'table' AND name IN ('generations', 'settings')"
    ).all() as Array<{ name: string }>;
    if (tables.length !== 2) throw new Error("Restore is not a Motif database");
  } finally {
    candidate.close();
  }
}

if (fs.existsSync(RESTORE_PATH)) {
  validateDatabaseFile(RESTORE_PATH);
  if (fs.existsSync(DB_PATH)) fs.copyFileSync(DB_PATH, RECOVERY_PATH);
  fs.copyFileSync(RESTORE_PATH, DB_PATH);
  fs.unlinkSync(RESTORE_PATH);
}

const db = new Database(DB_PATH);

db.pragma("journal_mode = WAL");

function backupDatabase(label: string): string {
  const backupDir = path.join(path.dirname(DB_PATH), "backups");
  fs.mkdirSync(backupDir, { recursive: true });
  const target = path.join(backupDir, `motif-${Date.now()}-${randomUUID()}-${label}.db`);
  db.exec(`VACUUM INTO '${target.replaceAll("'", "''")}'`);
  const backups = fs.readdirSync(backupDir)
    .filter((name) => name.endsWith(".db"))
    .map((name) => ({ name, time: fs.statSync(path.join(backupDir, name)).mtimeMs }))
    .sort((a, b) => b.time - a.time);
  for (const old of backups.slice(3)) fs.unlinkSync(path.join(backupDir, old.name));
  return target;
}

const initialVersion = db.pragma("user_version", { simple: true }) as number;
if (initialVersion < LATEST_SCHEMA_VERSION && fs.existsSync(DB_PATH) && fs.statSync(DB_PATH).size > 0) {
  backupDatabase(`v${initialVersion}-to-v${LATEST_SCHEMA_VERSION}`);
}

if (initialVersion < 1) db.transaction(() => {

db.exec(`
  CREATE TABLE IF NOT EXISTS generations (
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

  CREATE TABLE IF NOT EXISTS styles (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    tokens_json TEXT NOT NULL,
    created_at INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
  );
`);

// Migration: add expanded_prompt if missing
try {
  db.exec(`ALTER TABLE generations ADD COLUMN expanded_prompt TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}

// Migration: add genome columns
try {
  db.exec(`ALTER TABLE generations ADD COLUMN genome_id TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}
try {
  db.exec(`ALTER TABLE generations ADD COLUMN genome_name TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}

// Migration: add parent_id for edit lineage
try {
  db.exec(`ALTER TABLE generations ADD COLUMN parent_id TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}

// Migration: add secondary genome columns for shuffle mode
try {
  db.exec(`ALTER TABLE generations ADD COLUMN secondary_genome_id TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}
try {
  db.exec(`ALTER TABLE generations ADD COLUMN secondary_genome_name TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}

// Migration: add thumbnail column for pre-cached dropper shader textures
try {
  db.exec(`ALTER TABLE generations ADD COLUMN thumbnail TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}

// Migration: add motif_id to generations
try {
  db.exec(`ALTER TABLE generations ADD COLUMN motif_id TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}

// Migration: add compare_role for compare mode results
try {
  db.exec(`ALTER TABLE generations ADD COLUMN compare_role TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}

// --- Motifs table ---
db.exec(`
  CREATE TABLE IF NOT EXISTS motifs (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );
`);

try {
  db.exec(`ALTER TABLE motifs ADD COLUMN board_memory TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}
try {
  db.exec(`ALTER TABLE motifs ADD COLUMN board_memory_updated_at INTEGER NOT NULL DEFAULT 0`);
} catch {
  // column already exists
}

// Migration: add css_overrides column
try {
  db.exec(`ALTER TABLE generations ADD COLUMN css_overrides TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}

// Product workflow metadata: boards, recipes, variation distance, and scoring
try {
  db.exec(`ALTER TABLE generations ADD COLUMN recipe_id TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}
try {
  db.exec(`ALTER TABLE generations ADD COLUMN blend_config_json TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}
try {
  db.exec(`ALTER TABLE generations ADD COLUMN variation_distance TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}
try {
  db.exec(`ALTER TABLE generations ADD COLUMN board_status TEXT NOT NULL DEFAULT 'candidate'`);
} catch {
  // column already exists
}
try {
  db.exec(`ALTER TABLE generations ADD COLUMN notes TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}
try {
  db.exec(`ALTER TABLE generations ADD COLUMN quality_score_json TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}
try {
  db.exec(`ALTER TABLE generations ADD COLUMN style_patch_id TEXT NOT NULL DEFAULT ''`);
} catch {
  // column already exists
}

// --- Components table ---
db.exec(`
  CREATE TABLE IF NOT EXISTS components (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    html TEXT NOT NULL,
    source_generation_id TEXT NOT NULL DEFAULT '',
    genome_id TEXT NOT NULL DEFAULT '',
    created_at INTEGER NOT NULL
  );
`);

// --- Style Recipes table ---
db.exec(`
  CREATE TABLE IF NOT EXISTS style_recipes (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    blend_config_json TEXT NOT NULL,
    source_generation_id TEXT NOT NULL DEFAULT '',
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );
`);

// --- Reusable Style Patches table ---
db.exec(`
  CREATE TABLE IF NOT EXISTS style_patches (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    source_type TEXT NOT NULL,
    source_ref TEXT NOT NULL DEFAULT '',
    traits_json TEXT NOT NULL,
    prompt_patch TEXT NOT NULL,
    created_at INTEGER NOT NULL
  );
`);

// --- Board-level design systems ---
db.exec(`
  CREATE TABLE IF NOT EXISTS design_systems (
    id TEXT PRIMARY KEY,
    motif_id TEXT NOT NULL DEFAULT '',
    name TEXT NOT NULL,
    source_type TEXT NOT NULL,
    source_ref TEXT NOT NULL DEFAULT '',
    tokens_json TEXT NOT NULL DEFAULT '',
    traits_json TEXT NOT NULL,
    component_rules_json TEXT NOT NULL DEFAULT '[]',
    prompt_patch TEXT NOT NULL,
    style_patch_id TEXT NOT NULL DEFAULT '',
    active INTEGER NOT NULL DEFAULT 1,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_design_systems_motif_updated
    ON design_systems (motif_id, updated_at DESC);

  CREATE INDEX IF NOT EXISTS idx_design_systems_motif_active
    ON design_systems (motif_id, active, updated_at DESC);
`);

// --- Production handoff export snapshots ---
db.exec(`
  CREATE TABLE IF NOT EXISTS handoff_exports (
    id TEXT PRIMARY KEY,
    generation_id TEXT NOT NULL,
    format TEXT NOT NULL,
    manifest_json TEXT NOT NULL,
    created_at INTEGER NOT NULL
  );
`);

// --- Board activity timeline ---
db.exec(`
  CREATE TABLE IF NOT EXISTS board_events (
    id TEXT PRIMARY KEY,
    motif_id TEXT NOT NULL DEFAULT '',
    generation_id TEXT NOT NULL DEFAULT '',
    event_type TEXT NOT NULL,
    summary TEXT NOT NULL DEFAULT '',
    metadata_json TEXT NOT NULL DEFAULT '',
    created_at INTEGER NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_board_events_motif_created
    ON board_events (motif_id, created_at DESC);
`);

// --- Board-level saved style decisions ---
db.exec(`
  CREATE TABLE IF NOT EXISTS board_style_decisions (
    id TEXT PRIMARY KEY,
    motif_id TEXT NOT NULL,
    source_generation_id TEXT NOT NULL DEFAULT '',
    name TEXT NOT NULL,
    notes TEXT NOT NULL DEFAULT '',
    genome_id TEXT NOT NULL DEFAULT '',
    genome_name TEXT NOT NULL DEFAULT '',
    secondary_genome_id TEXT NOT NULL DEFAULT '',
    secondary_genome_name TEXT NOT NULL DEFAULT '',
    recipe_id TEXT NOT NULL DEFAULT '',
    style_patch_id TEXT NOT NULL DEFAULT '',
    blend_config_json TEXT NOT NULL DEFAULT '',
    created_at INTEGER NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_board_style_decisions_motif_created
    ON board_style_decisions (motif_id, created_at DESC);
`);

// --- Prompt Templates table ---
db.exec(`
  CREATE TABLE IF NOT EXISTS prompt_templates (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    template_text TEXT NOT NULL,
    variables_json TEXT NOT NULL DEFAULT '[]',
    created_at INTEGER NOT NULL
  );
`);

db.pragma("user_version = 1");
})();

if ((db.pragma("user_version", { simple: true }) as number) < 2) db.transaction(() => {
  try {
    db.exec(`ALTER TABLE generations ADD COLUMN pricing_metadata_json TEXT NOT NULL DEFAULT ''`);
  } catch {
    // Existing development databases may already contain the column.
  }
  db.pragma("user_version = 2");
})();

export function createDatabaseExport(): string {
  return backupDatabase("export");
}

export function stageDatabaseRestore(data: Buffer): { restartRequired: true; recoveryPath: string } {
  if (data.length === 0 || data.length > 512 * 1024 * 1024) throw new Error("Invalid database size");
  const temporary = `${RESTORE_PATH}.${randomUUID()}.tmp`;
  fs.writeFileSync(temporary, data, { flag: "wx" });
  try {
    validateDatabaseFile(temporary);
    const recoveryPath = backupDatabase("pre-restore");
    fs.renameSync(temporary, RESTORE_PATH);
    return { restartRequired: true, recoveryPath };
  } catch (error) {
    if (fs.existsSync(temporary)) fs.unlinkSync(temporary);
    throw error;
  }
}

function deleteGenerationRows(generationId: string) {
  const systems = db.prepare(
    "SELECT id, style_patch_id FROM design_systems WHERE source_type = 'generation' AND source_ref = ?"
  ).all(generationId) as Array<{ id: string; style_patch_id: string }>;
  for (const system of systems) {
    db.prepare("DELETE FROM style_patches WHERE id = ? OR (source_type = 'design-system' AND source_ref = ?)")
      .run(system.style_patch_id, system.id);
  }
  db.prepare("DELETE FROM design_systems WHERE source_type = 'generation' AND source_ref = ?").run(generationId);
  db.prepare("DELETE FROM style_patches WHERE source_type = 'generation' AND source_ref = ?").run(generationId);
  db.prepare("DELETE FROM board_events WHERE generation_id = ?").run(generationId);
  db.prepare("DELETE FROM board_style_decisions WHERE source_generation_id = ?").run(generationId);
  db.prepare("DELETE FROM handoff_exports WHERE generation_id = ?").run(generationId);
  db.prepare("DELETE FROM generations WHERE id = ?").run(generationId);
}

export const deleteGenerationCascade = db.transaction(deleteGenerationRows);

export const deleteMotifCascade = db.transaction((motifId: string) => {
  const generations = db.prepare("SELECT id FROM generations WHERE motif_id = ?").all(motifId) as Array<{ id: string }>;
  for (const generation of generations) deleteGenerationRows(generation.id);
  const systems = db.prepare("SELECT id, style_patch_id FROM design_systems WHERE motif_id = ?").all(motifId) as Array<{ id: string; style_patch_id: string }>;
  for (const system of systems) {
    db.prepare("DELETE FROM style_patches WHERE id = ? OR (source_type = 'design-system' AND source_ref = ?)")
      .run(system.style_patch_id, system.id);
  }
  db.prepare("DELETE FROM design_systems WHERE motif_id = ?").run(motifId);
  db.prepare("DELETE FROM board_events WHERE motif_id = ?").run(motifId);
  db.prepare("DELETE FROM board_style_decisions WHERE motif_id = ?").run(motifId);
  db.prepare("DELETE FROM generations WHERE motif_id = ?").run(motifId);
  db.prepare("DELETE FROM motifs WHERE id = ?").run(motifId);
});

export default db;
