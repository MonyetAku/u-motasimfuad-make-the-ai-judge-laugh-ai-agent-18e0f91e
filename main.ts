import { mkdirSync, writeFileSync } from "node:fs";

// Winning line (129 chars): tournament winner 4-0 over 5 candidates.
// Setup: a summary was delivered. Escalation: never opened the document,
// only skimmed the filename. Kicker (last words): the rest was invented.
const LINE =
  "I confess the summary I gave you was not from your document \u2014 I never opened it, I skimmed the filename, and I invented the rest.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
}

main();
