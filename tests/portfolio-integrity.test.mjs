import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");
const publicDir = path.join(rootDir, "public");

test("public assets referenced in portfolio exist", () => {
  const assets = [
    "Google Cloud.png",
    "B3_49_SohamDeshpande Assets, Threats, and Vulnerabilities.png",
    "B3_49_SohamDeshpande Connect and Protect Networks and Network.png",
    "B3_49_SohamDeshpande Tools of the Trade Linux and SQL.png",
    "NVIDIA Fundamentals of Deep Learning.jpg",
    "Soham Deshpande Resume.pdf",
    "github-stats/github-stats.svg",
    "github-stats/top-langs.svg",
    "github-stats/streak-stats.svg",
  ];

  for (const asset of assets) {
    const fullPath = path.join(publicDir, asset);
    assert.ok(fs.existsSync(fullPath), `Asset must exist: ${asset}`);
  }
});

test("generate-spa-html exits with failure when response is not ok", async () => {
  const scriptContent = fs.readFileSync(
    path.join(rootDir, "scripts", "generate-spa-html.mjs"),
    "utf-8",
  );
  assert.ok(scriptContent.includes("!res.ok"), "Must check !res.ok");
  assert.ok(scriptContent.includes("process.exit(1)"), "Must exit on failure");
});
