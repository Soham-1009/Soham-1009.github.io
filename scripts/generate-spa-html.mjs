import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', '.output', 'public');
const assetsDir = path.join(publicDir, 'assets');

if (!fs.existsSync(assetsDir)) {
    console.error('Assets directory not found. Did you run npm run build?');
    process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const indexJs = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
const stylesCss = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

if (!indexJs || !stylesCss) {
    console.error('Could not find index JS or CSS file in assets directory.');
    process.exit(1);
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="/assets/${stylesCss}">
</head>
<body>
    <div id="root"></div>
    <script>
      window.__TSR__ = {
        matches: [],
        streamedValues: {}
      };
    </script>
    <script type="module" src="/assets/${indexJs}"></script>
</body>
</html>`;

fs.writeFileSync(path.join(publicDir, 'index.html'), html);
fs.writeFileSync(path.join(publicDir, '404.html'), html); // Fallback for GitHub Pages SPA routing

console.log('Successfully generated index.html and 404.html for SPA fallback.');
