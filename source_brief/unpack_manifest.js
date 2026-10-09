const fs = require('fs');

const content = fs.readFileSync('Hire AI Developer – Website Developer Brief.html', 'utf8');

function getTagContent(type) {
  const re = new RegExp(`<script[^>]*type=[\"']${type}[\"'][^>]*>([\\s\\S]*?)<\\/script>`, 'i');
  const m = content.match(re);
  return m ? m[1].trim() : null;
}

const pageOrder = getTagContent('__bundler/page_order');
console.log('--- PAGE ORDER ---');
console.log(pageOrder);

const manifestRaw = getTagContent('__bundler/manifest');
if (manifestRaw) {
  try {
    const manifest = JSON.parse(manifestRaw);
    console.log('\n--- MANIFEST KEYS ---');
    console.log(Object.keys(manifest));
    if (Array.isArray(manifest)) {
      console.log('Manifest is an array of length:', manifest.length);
      console.log('First 5 items:', manifest.slice(0, 5));
    } else {
      const files = Object.keys(manifest);
      console.log('Manifest files count:', files.length);
      console.log('File names:', files);
      
      // Save all text-based files to an extracted/ directory!
      if (!fs.existsSync('extracted_source')) {
        fs.mkdirSync('extracted_source');
      }
      for (const [filename, fileData] of Object.entries(manifest)) {
        console.log(`File: ${filename}, type: ${typeof fileData}, keys: ${fileData ? Object.keys(fileData) : ''}`);
        if (typeof fileData === 'string') {
          fs.writeFileSync(`extracted_source/${filename.replace(/[\/\\:]/g, '_')}`, fileData);
        } else if (fileData && fileData.content) {
          fs.writeFileSync(`extracted_source/${filename.replace(/[\/\\:]/g, '_')}`, fileData.content);
        } else {
          fs.writeFileSync(`extracted_source/${filename.replace(/[\/\\:]/g, '_')}.json`, JSON.stringify(fileData, null, 2));
        }
      }
    }
  } catch (e) {
    console.error('Error parsing manifest:', e.message);
  }
}
