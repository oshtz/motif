import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import Database from "better-sqlite3";

const moduleUrl = new URL("../dist/db.js", import.meta.url).href;

function run(dbPath: string, source: string): string {
  return execFileSync(process.execPath, ["--input-type=module", "--eval", source], {
    cwd: path.resolve("."),
    env: { ...process.env, MOTIF_DB_PATH: dbPath },
    encoding: "utf8",
  }).trim();
}

test("unversioned public database migrates transactionally and creates a backup", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "motif-db-"));
  const dbPath = path.join(dir, "motif.db");
  const legacy = new Database(dbPath);
  legacy.exec("CREATE TABLE generations (id TEXT PRIMARY KEY, prompt TEXT NOT NULL, system_prompt TEXT NOT NULL, model TEXT NOT NULL, output TEXT NOT NULL, parsed_html TEXT NOT NULL, favorited INTEGER NOT NULL, created_at INTEGER NOT NULL); CREATE TABLE settings (key TEXT PRIMARY KEY, value TEXT NOT NULL)");
  legacy.close();

  const result = run(dbPath, `const m=await import(${JSON.stringify(moduleUrl)}); console.log(m.default.pragma('user_version',{simple:true})); m.default.close()`);
  assert.equal(result, "2");
  assert.equal(fs.readdirSync(path.join(dir, "backups")).length, 1);
  const migrated = new Database(dbPath, { readonly: true });
  assert.ok(migrated.prepare("SELECT pricing_metadata_json FROM generations LIMIT 1"));
  migrated.close();
});

test("restore rejects corrupt input and cascade deletion removes associated rows", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "motif-db-"));
  const dbPath = path.join(dir, "motif.db");
  const result = run(dbPath, `
    const m=await import(${JSON.stringify(moduleUrl)});
    let rejected=false; try { m.stageDatabaseRestore(Buffer.from('bad')); } catch { rejected=true; }
    const d=m.default, now=Date.now();
    d.prepare('INSERT INTO motifs(id,name,created_at,updated_at) VALUES(?,?,?,?)').run('m','m',now,now);
    d.prepare('INSERT INTO generations(id,prompt,model,output,parsed_html,favorited,created_at,motif_id) VALUES(?,?,?,?,?,?,?,?)').run('g','p','x','o','h',0,now,'m');
    d.prepare('INSERT INTO style_patches(id,name,source_type,source_ref,traits_json,prompt_patch,created_at) VALUES(?,?,?,?,?,?,?)').run('p','p','design-system','s','{}','',now);
    d.prepare('INSERT INTO design_systems(id,motif_id,name,source_type,source_ref,traits_json,prompt_patch,style_patch_id,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?,?)').run('s','m','s','html','','{}','','p',now,now);
    d.prepare('INSERT INTO board_events(id,motif_id,generation_id,event_type,created_at) VALUES(?,?,?,?,?)').run('e','m','g','x',now);
    d.prepare('INSERT INTO handoff_exports(id,generation_id,format,manifest_json,created_at) VALUES(?,?,?,?,?)').run('h','g','zip','{}',now);
    m.deleteMotifCascade('m');
    console.log(JSON.stringify({rejected, motifs:d.prepare('SELECT count(*) n FROM motifs').get().n, patches:d.prepare('SELECT count(*) n FROM style_patches').get().n, exports:d.prepare('SELECT count(*) n FROM handoff_exports').get().n}));
    d.close();
  `);
  assert.deepEqual(JSON.parse(result), { rejected: true, motifs: 0, patches: 0, exports: 0 });
  assert.equal(fs.existsSync(`${dbPath}.restore`), false);
});

test("backup retention keeps only the latest three consistent exports", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "motif-db-"));
  const dbPath = path.join(dir, "motif.db");
  run(dbPath, `const m=await import(${JSON.stringify(moduleUrl)}); for(let i=0;i<5;i++)m.createDatabaseExport(); m.default.close()`);
  assert.equal(fs.readdirSync(path.join(dir, "backups")).length, 3);
});
