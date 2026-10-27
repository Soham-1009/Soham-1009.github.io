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
    "favicon.svg",
  ];

  for (const asset of assets) {
    const fullPath = path.join(publicDir, asset);
    assert.ok(fs.existsSync(fullPath), `Asset must exist: ${asset}`);
  }
});

test("generate-spa-html prerenders all static routes and exits with failure on error", async () => {
  const scriptContent = fs.readFileSync(
    path.join(rootDir, "scripts", "generate-spa-html.mjs"),
    "utf-8",
  );
  assert.ok(scriptContent.includes("!res.ok"), "Must check !res.ok");
  assert.ok(scriptContent.includes("process.exit(1)"), "Must exit on failure");
  assert.ok(scriptContent.includes('"/projects"'), "Must prerender /projects");
  assert.ok(scriptContent.includes('"/about"'), "Must prerender /about");
  assert.ok(scriptContent.includes('"/contact"'), "Must prerender /contact");
});

test("portfolio data structure and links are well-formed", async () => {
  const portfolioContent = fs.readFileSync(
    path.join(rootDir, "src", "data", "portfolio.ts"),
    "utf-8",
  );

  assert.ok(portfolioContent.includes("soham.deshpande100904@gmail.com"), "Must contain email");
  assert.ok(portfolioContent.includes("https://github.com/Soham-1009"), "Must contain GitHub link");

  // Verify project slugs are present and unique
  const slugMatches = [...portfolioContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  assert.ok(slugMatches.length >= 5, "Must have at least 5 projects");
  const uniqueSlugs = new Set(slugMatches);
  assert.equal(slugMatches.length, uniqueSlugs.size, "Project slugs must be unique");
});
