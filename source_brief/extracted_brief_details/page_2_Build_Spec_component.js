class Component extends DCLogic {
renderVals() {
return {
sections: [
{ n: '01', name: 'Headline and call to action', body: 'The offer in one line, with a primary button that scrolls to the form.', form: '' },
{ n: '02', name: 'Requirement form', body: 'Above the fold, beside the headline on desktop and directly under it on mobile.', form: 'FORM 1' },
{ n: '03', name: 'Developer profiles', body: 'AI/ML, Generative AI, LLM, AI Agents, Computer Vision and NLP.', form: '' },
{ n: '04', name: 'Technology stack', body: 'OpenAI, Claude, Gemini, LLM, RAG, AI Agents, Machine Learning, Computer Vision, NLP, Python, LangChain, Vector DBs, AI Automation.', form: '' },
{ n: '05', name: 'Second requirement form', body: 'A large form on a mist background with the three engagement names.', form: 'FORM 2' },
{ n: '06', name: 'Why Hire AI Developer', body: 'Four benefits, followed by the Hourly, Monthly and Fixed cost cards.', form: '' },
{ n: '07', name: 'How it works', body: 'Submit requirement, get matched, discuss and select, start working.', form: '' },
{ n: '08', name: 'Client logos', body: 'Five logo slots. Placeholders until approved logos exist.', form: '' },
{ n: '09', name: 'Case studies and testimonials', body: 'Four to five cards. Placeholders until approved material exists.', form: '' },
{ n: '10', name: 'Final requirement form', body: 'Wide form on a navy band.', form: 'FORM 3' },
{ n: '11', name: 'Final call to action', body: 'Orange band with a last button back to the first form.', form: '' }
],
seo: [
'One H1 per page. The landing H1 is the headline: Hire AI Developers at Hourly, Monthly & Fixed Cost.',
'Title pattern: Hire [Specialty] Developers | Hourly, Monthly or Fixed Cost. Keep under 60 characters.',
'Meta description in plain language about vetted developers and the three ways to hire. No price or discount words.',
'Landing page and future pages share a URL pattern: /hire-[specialty]-developer/.',
'Add Organization and WebPage structured data. Do not add any offer, price or rating markup.',
'Compress images to WebP, give every image alt text, and add canonical tags on every page.'
],
kwCore: ['Hire AI Developer(s)', 'AI Developer for Hire', 'Hire AI Engineer(s)'],
kwSpec: ['Hire AI/ML Developer', 'Generative AI', 'LLM', 'AI Agent', 'Machine Learning', 'Chatbot', 'RAG', 'Computer Vision', 'NLP Developer'],
events: [
{ name: 'generate_lead', when: 'The requirement form is submitted successfully. Send form position, engagement type, country and requirement.', use: 'Ads conversion' },
{ name: 'cta_click', when: 'Any Get an AI Developer button is clicked. Send which button.', use: 'Page testing' },
{ name: 'form_start', when: 'First interaction with any field.', use: 'Drop-off' },
{ name: 'engagement_select', when: 'Hourly, Monthly or Fixed cost is chosen.', use: 'Demand signal' },
{ name: 'scroll_50', when: 'A visitor reaches half the page.', use: 'Engagement' },
{ name: 'page_view /thank-you/', when: 'After a successful submission. Page is noindex.', use: 'Backup conversion' }
],
quality: [
{ big: '< 2.5 s', title: 'Largest content paint', body: 'On a mid-range phone over mobile data. Preload the headline font.' },
{ big: 'AA', title: 'Accessibility', body: 'WCAG 2.1 AA contrast, real labels, full keyboard use and visible focus.' },
{ big: '48 px', title: 'Touch targets', body: 'Every button and field is at least 48 px tall on mobile.' },
{ big: '4', title: 'Breakpoints', body: '390, 768, 1280 and 1440 px. Design phone first, then scale up.' }
],
days: [
{ day: 'TUE 6 OCT', title: 'Build', items: 'Set up site and hosting\nBuild header and footer for the three standard pages\nCore structure and design tokens' },
{ day: 'WED 7 OCT', title: 'Pages', items: 'Landing page, all 11 sections\nForm component and validation\nHome, About Us and Contact Us' },
{ day: 'THU 8 OCT', title: 'Test', items: 'Phone and desktop checks\nForm to inbox and sheet\nTracking and conversion test' },
{ day: 'FRI 9 OCT', title: 'Launch', items: 'Final content check\nCheck no price shows anywhere\nGoogle Ads go live' },
{ day: 'SAT 10 OCT', title: 'Monitor', items: 'Watch campaigns by country\nFollow up every lead\nFix any issues quickly' }
],
needs: [
'Contact email, phone or WhatsApp number, and business address for the Contact Us page.',
'Privacy policy and terms text, linked from the Contact page and the form note.',
'Lead notification email address and where leads should be stored.',
'Approved client logos, or confirmation to launch with placeholders hidden.',
'Approved case studies and testimonials, or confirmation to hide the section at launch.',
'Brand logo file, if one exists, to replace the star and text mark.'
]
};
}
}