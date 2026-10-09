const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const dir = path.join(__dirname, 'extracted_brief_pages');
const outDir = path.join(__dirname, 'unpacked_specs');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

function unpackFile(filePath, destDir) {
  const content = fs.readFileSync(filePath, 'utf8');
  const manifestMatch = content.match(/<script[^>]*type=["']__bundler\/manifest["'][^>]*>([\s\S]*?)<\/script>/i);
  const templateMatch = content.match(/<script[^>]*type=["']__bundler\/template["'][^>]*>([\s\S]*?)<\/script>/i);

  if (!manifestMatch || !templateMatch) {
    console.log(`File ${path.basename(filePath)} does not have bundler tags!`);
    return false;
  }

  const manifest = JSON.parse(manifestMatch[1]);
  let template = JSON.parse(templateMatch[1]);

  console.log(`Unpacking ${path.basename(filePath)}: ${Object.keys(manifest).length} assets`);

  // Unpack assets
  const assetMap = {};
  for (const [uuid, entry] of Object.entries(manifest)) {
    const buf = Buffer.from(entry.data, 'base64');
    let finalBuf = buf;
    if (entry.compressed) {
      try {
        finalBuf = zlib.gunzipSync(buf);
      } catch (e) {
        console.error('Gunzip error for', uuid, e.message);
      }
    }
    assetMap[uuid] = {
      mime: entry.mime,
      data: finalBuf
    };
  }

  // Check how template replaces assets
  // In bundler runtime: template is an HTML string where uuid placeholders get replaced or inline
  let finalHtml = template;
  for (const [uuid, asset] of Object.entries(assetMap)) {
    if (asset.mime.includes('text/html')) {
      // It might be subpages or fragments
      finalHtml = finalHtml.split(uuid).join(asset.data.toString('utf8'));
    } else if (asset.mime.includes('text/css')) {
      const dataUri = `data:${asset.mime};base64,${asset.data.toString('base64')}`;
      finalHtml = finalHtml.split(uuid).join(dataUri);
    } else if (asset.mime.includes('image') || asset.mime.includes('font')) {
      const dataUri = `data:${asset.mime};base64,${asset.data.toString('base64')}`;
      finalHtml = finalHtml.split(uuid).join(dataUri);
    } else {
      const dataUri = `data:${asset.mime};base64,${asset.data.toString('base64')}`;
      finalHtml = finalHtml.split(uuid).join(dataUri);
    }
  }

  const baseName = path.basename(filePath, '.html');
  fs.writeFileSync(path.join(destDir, `${baseName}_rendered.html`), finalHtml);

  // Also save pure text / structure
  // Strip tags for clean markdown review
  const cleanText = finalHtml
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<br\s*[\/]?>/gi, '\n')
    .replace(/<\/(p|div|h1|h2|h3|h4|h5|h6|li|tr|section|article)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s*\n/g, '\n\n')
    .trim();

  fs.writeFileSync(path.join(destDir, `${baseName}_text.txt`), cleanText);
  console.log(`Saved ${baseName}_rendered.html (${finalHtml.length}b) and text (${cleanText.length}b)`);
  return true;
}

files.forEach(f => {
  unpackFile(path.join(dir, f), outDir);
});
