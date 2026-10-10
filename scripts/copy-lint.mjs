// Enforces the copy rules from docs/overhaul-plan.md section 9.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const proseFiles = ["data", "public/llms.txt"];
const codeFiles = ["app", "components"];

const banned = [
  "passionate", "leverage", "leveraging", "journey", "seamless", "seamlessly", "cutting edge", "cutting-edge",
  "unlock", "empower", "delve", "robust", "synergy", "innovative", "world class", "world-class", "best in class",
  "excited", "thrilled", "field work", "magic", "game changer", "game-changing", "revolutionary",
];

function walk(p) {
  const full = join(root, p);
  if (statSync(full).isFile()) return [full];
  return readdirSync(full).flatMap((f) => walk(join(p, f)));
}

const problems = [];
function check(file, { prose }) {
  if (![".ts", ".tsx", ".txt", ".md", ".mjs"].includes(extname(file))) return;
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    const where = `${file.replace(root, "")}:${i + 1}`;
    if (/—/.test(line)) problems.push(`${where} em dash`);
    if (/\s–\s/.test(line)) problems.push(`${where} spaced en dash`);
    if (/\s-\s/.test(line) && prose && !line.trim().startsWith("-") && !line.includes("//")) problems.push(`${where} spaced hyphen used as a dash`);
    const lower = line.toLowerCase();
    for (const word of banned) {
      if (new RegExp(`\\b${word}\\b`).test(lower)) problems.push(`${where} banned word "${word}"`);
    }
    if (prose && /[A-Za-z]!(\s|"|$)/.test(line)) problems.push(`${where} exclamation mark`);
  });
}

proseFiles.flatMap(walk).forEach((f) => check(f, { prose: true }));
codeFiles.flatMap(walk).forEach((f) => check(f, { prose: false }));

if (problems.length) {
  console.error(`copy-lint: ${problems.length} problem(s)\n${problems.join("\n")}`);
  process.exit(1);
}
console.log("copy-lint: clean");
