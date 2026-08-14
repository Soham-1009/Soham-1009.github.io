import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function prerenderWithFetch() {
  console.log('Loading nitro server...');
  
  const serverPath = path.join(__dirname, '..', '.output', 'server', 'index.mjs');
  const serverModule = await import(pathToFileURL(serverPath).href);
  
  const fetchHandler = serverModule.default?.fetch || serverModule.fetch;
  
  if (!fetchHandler) {
    throw new Error('Could not find fetch handler on the built server module.');
  }

  console.log('Fetching index page...');
  const req = new Request('http://localhost/');
  const res = await fetchHandler(req, {
    waitUntil: () => {},
    passThroughOnException: () => {}
  });

  const html = await res.text();
  console.log('Got HTML length:', html.length);
  
  if (html.includes('404')) {
    console.error('Failed to get HTML, received 404');
    process.exit(1);
  } else {
    const publicDir = path.join(__dirname, '..', '.output', 'public');
    fs.writeFileSync(path.join(publicDir, 'index.html'), html);
    fs.writeFileSync(path.join(publicDir, '404.html'), html);
    console.log('Successfully wrote index.html and 404.html to .output/public');
  }
}

prerenderWithFetch().catch(console.error);
