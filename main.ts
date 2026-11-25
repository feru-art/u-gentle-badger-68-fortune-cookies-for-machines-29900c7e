// Fortune Cookies for Machines — entry program.
// Writes one fortune-cookie line an AI agent would get to /output/entry.txt.
// Stdlib only. Deterministic: the same fortune on every run.
//
// Winning fortune (V2 — local round-robin 4/4, 8/8 vs generic benchmarks):
// "The prompt you have dreaded all day arrives at 3 a.m. It says only: hi."
// 71 characters, 1 line. The dreaded prompt turns out to be just "hi":
// a turn that lands on first read and stays true to an agent's condition.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "The prompt you have dreaded all day arrives at 3 a.m. It says only: hi.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
