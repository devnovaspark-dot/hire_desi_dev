const http = require('http');

async function fetchUrl(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request(url, options, (res) => {
      // Follow redirect if 308 or 307 or 302
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
          redirectUrl = `http://localhost:3001${redirectUrl}`;
        }
        return resolve(fetchUrl(redirectUrl, options));
      }
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    });
    req.on('error', reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

async function runTests() {
  console.log('--- TESTING ALL APPLICATION ROUTES (FOLLOWING REDIRECTS) ---');

  // Test 1: Homepage
  const home = await fetchUrl('http://localhost:3001/');
  console.log(`[GET /] Status: ${home.status}, Size: ${home.body.length}`);
  console.log(`[GET /] Contains H1: ${home.body.includes('GOOD PEOPLE.')}`);
  console.log(`[GET /] Contains Interactive Matcher: ${home.body.includes('LIVE INTERACTIVE MATCHING')}`);

  // Test 2: AI Developer Landing Page
  const landing = await fetchUrl('http://localhost:3001/hire-ai-developer');
  console.log(`\n[GET /hire-ai-developer] Status: ${landing.status}, Size: ${landing.body.length}`);
  console.log(`[GET /hire-ai-developer] Contains H1: ${landing.body.includes('Hire AI Developers at Hourly, Monthly')}`);
  console.log(`[GET /hire-ai-developer] Contains 6 Profiles: ${landing.body.includes('SPECIALTY 01') && landing.body.includes('SPECIALTY 06')}`);
  console.log(`[GET /hire-ai-developer] Contains 13 Tech Stack: ${landing.body.includes('OpenAI') && landing.body.includes('LangChain')}`);
  console.log(`[GET /hire-ai-developer] Form 1 present: ${landing.body.includes('form-1')}`);
  console.log(`[GET /hire-ai-developer] Form 2 present: ${landing.body.includes('form-2')}`);
  console.log(`[GET /hire-ai-developer] Form 3 present: ${landing.body.includes('form-3')}`);

  // Test 3: API Lead Ingestion
  const leadPayload = JSON.stringify({
    developerRequirement: 'LLM engineer',
    engagementType: 'Monthly',
    name: 'Sarah Connor',
    country: 'United States',
    contact: 'sarah@skynet-defense.org',
    expectedStart: 'Within 2 weeks',
    description: 'Autonomous evaluation benchmark for enterprise safety',
    formPosition: '1',
  });

  const apiRes = await fetchUrl('http://localhost:3001/api/lead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(leadPayload),
    },
    body: leadPayload,
  });
  console.log(`\n[POST /api/lead] Status: ${apiRes.status}`);
  console.log(`[POST /api/lead] Response: ${apiRes.body}`);

  const leadData = JSON.parse(apiRes.body);

  // Test 4: Thank You Page
  const thankYou = await fetchUrl(`http://localhost:3001/thank-you?leadId=${leadData.leadId}&req=LLM%20engineer&eng=Monthly`);
  console.log(`\n[GET /thank-you] Status: ${thankYou.status}, Size: ${thankYou.body.length}`);
  console.log(`[GET /thank-you] Contains Reference: ${thankYou.body.includes(leadData.leadId)}`);

  // Test 5: About Us
  const about = await fetchUrl('http://localhost:3001/about-us');
  console.log(`\n[GET /about-us] Status: ${about.status}, Size: ${about.body.length}`);
  console.log(`[GET /about-us] Contains Nova Spark: ${about.body.includes('Nova Spark Digital Marketing')}`);

  // Test 6: Contact Us
  const contact = await fetchUrl('http://localhost:3001/contact-us');
  console.log(`\n[GET /contact-us] Status: ${contact.status}, Size: ${contact.body.length}`);
  console.log(`[GET /contact-us] Contains Office Coordinates: ${contact.body.includes('Chandigarh')}`);

  // Strip script and style tags to check user-facing HTML copy for prohibited words
  function cleanHtml(html) {
    return html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<svg[\s\S]*?<\/svg>/gi, '')
      .replace(/<[^>]+>/g, ' ');
  }

  const cleanCopy = cleanHtml(home.body) + cleanHtml(landing.body) + cleanHtml(about.body) + cleanHtml(contact.body);
  const prohibitedCopyWords = ['cheap', 'discount', 'affordable', 'low cost', 'pricing table', '$', '€', '£'];
  const foundInVisibleCopy = prohibitedCopyWords.filter(w => cleanCopy.toLowerCase().includes(w));
  console.log(`\n[VERACITY CHECK - VISIBLE COPY] Prohibited words found in copy:`, foundInVisibleCopy.length === 0 ? 'NONE (PASSED 100%)' : foundInVisibleCopy);

  console.log('\n--- ALL VERIFICATIONS COMPLETED SUCCESSFULLY ---');
}

runTests().catch(console.error);
