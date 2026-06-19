import fs from "fs";
import path from "path";

const sourceDir = path.resolve("api", "src", "genomes");
const targetDir = path.resolve("api", "dist", "genomes");

fs.mkdirSync(targetDir, { recursive: true });

for (const file of fs.readdirSync(sourceDir)) {
  if (!file.endsWith(".md")) continue;
  fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, file));
}
