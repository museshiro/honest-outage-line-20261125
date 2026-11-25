// The Most Honest Outage Line: one plain first-person status line.
// It names concrete surfaces that are down and admits the agent's own
// checks are down too, so even the list itself cannot be verified.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "All services are down, including API, dashboard, sign-in, jobs. My own health checks and logs are down too, so I can't verify even this list.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
