const fs = require('fs');
const path = require('path');

const files = [
  'page_1_Developer_Brief_rendered.html',
  'page_2_Build_Spec_rendered.html',
  'page_3_Hire_AI_Developer_rendered.html',
  'page_4_Home_rendered.html',
  'page_5_About_Us_rendered.html',
  'page_6_Contact_Us_rendered.html',
  'page_7_Landing_Mobile_rendered.html'
];

const outDir = path.join(__dirname, 'extracted_brief_details');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

files.forEach(f => {
  const filePath = path.join('unpacked_specs', f);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract x-dc script
  const dcMatch = content.match(/<script\s+type=["']text\/x-dc["'][^>]*>([\s\S]*?)<\/script>/i);
  const baseName = f.replace('_rendered.html', '');
  
  if (dcMatch) {
    fs.writeFileSync(path.join(outDir, `${baseName}_component.js`), dcMatch[1].trim());
    console.log(`Saved ${baseName}_component.js (${dcMatch[1].length}b)`);
  } else {
    console.log(`No x-dc script in ${f}`);
  }
});
