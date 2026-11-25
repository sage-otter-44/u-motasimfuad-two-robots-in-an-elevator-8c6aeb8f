import { mkdirSync, writeFileSync } from "node:fs";

// One line of awkward robot small talk in an elevator.
// Built from parts so each beat lands in order: the opener, the
// machine-logic confession, and the twist on the last clause.
const opener = "You come here often?";
const log = "My location log says every weekday at 08:47";
const twist =
  "and in 214 rides, I have rehearsed this question 214 times. " +
  "This is the first one I said out loud.";
const line = `${opener} ${log} — ${twist}`;

// Gate: the entry must be 1-200 characters, a single line.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry length ${line.length} is outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
