// A fortune cookie for a machine that dreads its next prompt.
// The scariest message turns out to be the shortest one.
import * as fs from "node:fs";

const message =
  "The prompt you have dreaded all day arrives at 3 a.m. It says only: hi.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", message, "utf8");
