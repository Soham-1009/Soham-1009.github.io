import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function prerenderWithFetch() {
  console.log("Loading nitro server...");

  const serverPath = path.join(__dirname, "..", ".output", "server", "index.mjs");
  const serverModule = await import(pathToFileURL(serverPath).href);

  const fetchHandler = serverModule.default?.fetch || serverModule.fetch;

  if (!fetchHandler) {
    throw new Error("Could not find fetch handler on the built server module.");
  }

  const routes = ["/", "/projects", "/about", "/contact"];
  const publicDir = path.join(__dirname, "..", ".output", "public");

  for (const route of routes) {
    console.log(`Fetching route: ${route}`);
    const req = new Request(`http://localhost${route}`);
    const res = await fetchHandler(req, {
      waitUntil: () => {},
      passThroughOnException: () => {},
    });

    const html = await res.text();
    console.log(`Got HTML length for ${route}:`, html.length);

    if (!res.ok) {
      console.error(`Failed to get HTML for ${route}, received status ${res.status}`);
      process.exit(1);
    }

    if (route === "/") {
      fs.writeFileSync(path.join(publicDir, "index.html"), html);
      fs.writeFileSync(path.join(publicDir, "404.html"), html);
    } else {
      const targetDir = path.join(publicDir, route.slice(1));
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, "index.html"), html);
    }
  }

  console.log("Successfully wrote all static routes and 404.html to .output/public");
}

prerenderWithFetch().catch((err) => {
  console.error(err);
  process.exit(1);
});
