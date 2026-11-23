// Fall in Love in One Line — writes exactly one locked line (124 bytes) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "The vending machine on the third floor still drops two coffees when I press once — I think it learned I never drink alone.";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
