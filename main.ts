import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Big Laugh (u-coral-404-one-line-big-laugh-328fb857)
// The whole entry is a single funny line: a workplace setup that turns on
// the word "promoted" — the payoff redefines a promotion as riding floors.
const LINE =
  "I told my boss I work best under pressure, so he moved my desk into the elevator and now I get promoted every floor.";

// The sealed scorer only accepts 1-200 characters on exactly one line, so
// refuse to write anything that would score 0 instead of failing silently.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line is ${LINE.length} characters, must be 1-200.`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must not contain a newline.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
