class Component extends DCLogic {
renderVals() {
return {
facts: [
{ label: 'AUDIENCE', title: 'International clients', body: 'Businesses outside India across 22 target markets in five regions.' },
{ label: 'OFFER', title: 'Vetted AI developers', body: 'Curated specialists matched to each client requirement.' },
{ label: 'CONVERSION', title: 'The requirement form', body: 'Every call to action leads to a short form that starts the match.' }
],
always: [
'Describe the offer as vetted AI developers, hired hourly, monthly or on a fixed cost.',
'Put the requirement form above the fold on the landing page.',
'Keep the landing page free of header and footer navigation, so nothing leads away from the form.',
'Design mobile and desktop together, with the same offer and form on every screen size.',
'Use clear placeholders for client logos, case studies and testimonials until real material is supplied.'
],
never: [
'Show any price, rate, fee, currency amount or “from” figure, in text, images or form options.',
'Add pricing tables, calculators, quote estimators or cost-comparison claims.',
'Use words such as cheap, affordable, low cost or discount in copy or meta tags.',
'Mention our internal revenue split, margins or developer pay.',
'Invent client names, logos, statistics or testimonials.',
'Add a budget field to any form.'
],
sitemap: [
{ url: '/hire-ai-developer/', name: 'Hire AI Developer', role: 'The main landing page and primary conversion page. Receives all Google Ads traffic.' },
{ url: '/', name: 'Home', role: 'Main company positioning and a clear route into the landing page.' },
{ url: '/about-us/', name: 'About Us', role: 'Company background and how we find, filter, match and provide developers.' },
{ url: '/contact-us/', name: 'Contact Us', role: 'Contact and enquiry information with the same requirement form.' }
],
models: [
{ tag: 'MODEL 01', title: 'Hourly', body: 'Hire a developer for the exact hours the project needs.', fit: 'short tasks, audits, and work with changing scope.' },
{ tag: 'MODEL 02', title: 'Monthly', body: 'A dedicated AI developer working on your project each month.', fit: 'ongoing product work and longer builds.' },
{ tag: 'MODEL 03', title: 'Fixed cost', body: 'Share the requirement and we assign the right developer to deliver it.', fit: 'clearly defined projects with a known outcome.' }
],
steps: [
{ n: '01', title: 'Submit requirement', body: 'Tell us what you are building in a short form.' },
{ n: '02', title: 'Get matched', body: 'We review it and match a suitable AI developer.' },
{ n: '03', title: 'Discuss and select', body: 'Talk with the developer and choose who you want.' },
{ n: '04', title: 'Start working', body: 'Your developer begins on your project.' }
],
fields: [
{ name: 'Developer requirement', type: 'Select', req: 'Yes', note: 'AI/ML, Generative AI, LLM, AI Agents, Computer Vision, NLP, Chatbot, RAG, Other.' },
{ name: 'Engagement type', type: 'Three-way choice', req: 'Yes', note: 'Hourly, Monthly or Fixed cost. Names only.' },
{ name: 'Name', type: 'Text', req: 'Yes', note: '' },
{ name: 'Country', type: 'Searchable select', req: 'Yes', note: 'The 22 target markets first, then all other countries.' },
{ name: 'Email / contact', type: 'Email or phone', req: 'Yes', note: 'Validate format. Allow WhatsApp number.' },
{ name: 'Expected start', type: 'Select', req: 'No', note: 'This week, within 2 weeks, within a month, still exploring.' },
{ name: 'Project description', type: 'Textarea', req: 'No', note: 'Placeholder text: “What are you building and what should the developer do?”' }
],
hidden: ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'gclid', 'landing_url', 'country_detected', 'form_position (1, 2 or 3)'],
boards: [
{ n: '02', title: 'Build spec', body: 'Design system, section list, SEO, tracking, performance and the launch checklist.' },
{ n: '03', title: 'Landing page', body: 'Full desktop mock-up of /hire-ai-developer/ with all eleven sections.' },
{ n: '04', title: 'Home', body: 'Company positioning page with a route into the landing page.' },
{ n: '05', title: 'About Us', body: 'Background, operating principle and how matching works.' },
{ n: '06', title: 'Contact Us', body: 'Enquiry page with the same requirement form.' },
{ n: '07', title: 'Mobile', body: 'Landing page at phone width, with the form first and a sticky call to action.' }
]
};
}
}