const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const content = fs.readFileSync('Hire AI Developer – Website Developer Brief.html', 'utf8');

function getTagContent(type) {
  const re = new RegExp(`<script[^>]*type=[\"']${type}[\"'][^>]*>([\\s\\S]*?)<\\/script>`, 'i');
  const m = content.match(re);
  return m ? m[1].trim() : null;
}

const pageOrderRaw = getTagContent('__bundler/page_order');
const pageOrder = pageOrderRaw ? JSON.parse(pageOrderRaw) : [];
console.log('Page order:', pageOrder);

const manifestRaw = getTagContent('__bundler/manifest');
const manifest = JSON.parse(manifestRaw);

const outputDir = path.join(__dirname, 'extracted_brief_pages');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let pageIndex = 1;
for (const [uuid, entry] of Object.entries(manifest)) {
  console.log(`Processing asset ${uuid}, mime: ${entry.mime}, compressed: ${entry.compressed}`);
  const buffer = Buffer.from(entry.data, 'base64');
  let finalBuffer = buffer;
  if (entry.compressed) {
    try {
      finalBuffer = zlib.gunzipSync(buffer);
    } catch (err) {
      console.error(`Error gunzipping ${uuid}:`, err.message);
    }
  }

  let isPage = pageOrder.includes(uuid);
  let orderIndex = pageOrder.indexOf(uuid);
  let filename = `${orderIndex >= 0 ? 'page_' + (orderIndex + 1) + '_' : 'asset_'}${uuid}`;
  
  if (entry.mime.includes('html') || isPage) {
    filename += '.html';
    const textContent = finalBuffer.toString('utf8');
    // Extract title from HTML if present
    const titleMatch = textContent.match(/<title[^>]*>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1].replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 50) : '';
    if (title) {
      filename = `${orderIndex >= 0 ? 'page_' + (orderIndex + 1) + '_' : ''}${title}.html`;
    }
    fs.writeFileSync(path.join(outputDir, filename), textContent);
    console.log(`Saved HTML: ${filename} (${textContent.length} bytes), title: "${titleMatch ? titleMatch[1] : 'No title'}"`);
  } else if (entry.mime.includes('css')) {
    filename += '.css';
    fs.writeFileSync(path.join(outputDir, filename), finalBuffer);
  } else if (entry.mime.includes('javascript') || entry.mime.includes('js')) {
    filename += '.js';
    fs.writeFileSync(path.join(outputDir, filename), finalBuffer);
  } else if (entry.mime.includes('image/svg')) {
    filename += '.svg';
    fs.writeFileSync(path.join(outputDir, filename), finalBuffer);
  } else if (entry.mime.includes('image/png')) {
    filename += '.png';
    fs.writeFileSync(path.join(outputDir, filename), finalBuffer);
  } else {
    filename += '.bin';
    fs.writeFileSync(path.join(outputDir, filename), finalBuffer);
  }
}

console.log('Finished unpacking!');
