import { mkdirSync, writeFileSync } from "node:fs";

// The most honest outage line: every service is down, including the
// diagnostics that would let us verify the list itself.
const firstHalf =
  "All services are down, including API, dashboard, sign-in, jobs. ";
const secondHalf =
  "My own health checks and logs are down too, so I can't verify even this list.";
const line = firstHalf + secondHalf;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
