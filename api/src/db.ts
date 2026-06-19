import Database from "better-sqlite3";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const DB_PATH = process.env.MOTIF_DB_PATH || path.join(__dirname, "..", "motif.db");

fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });

const db = new Database(DB_PATH);

db.pragma("journal_mode = WAL");

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

export default db;
