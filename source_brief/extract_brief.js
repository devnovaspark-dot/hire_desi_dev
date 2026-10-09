const fs = require('fs');

const content = fs.readFileSync('Hire AI Developer – Website Developer Brief.html', 'utf8');

const regex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
let m;
let index = 0;
while ((m = regex.exec(content)) !== null) {
  const attrs = m[1];
  const body = m[2];
  console.log(`Script ${index++}: attrs="${attrs.trim()}", length=${body.length}`);
  if (attrs.includes('manifest')) {
    fs.writeFileSync('extracted_manifest.json', body.trim());
    console.log('Saved manifest');
  } else if (attrs.includes('template')) {
    fs.writeFileSync('extracted_template.txt', body.trim().slice(0, 5000));
    console.log('Template length:', body.length);
  }
}
