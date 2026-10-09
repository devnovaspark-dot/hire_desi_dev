class Component extends DCLogic {
renderVals() {
return {
heroPoints: [
'Curated, vetted AI specialists only',
'Matched to your requirement, not picked from an open list',
'Hire hourly, monthly or on a fixed cost'
],
profiles: [
{ title: 'AI / ML developers', body: 'Models, training pipelines and data-driven product features.' },
{ title: 'Generative AI developers', body: 'Text, image and content generation built into your product.' },
{ title: 'LLM engineers', body: 'Applications on large language models, from prompt design to production.' },
{ title: 'AI agent developers', body: 'Agents that plan, use tools and complete multi-step tasks.' },
{ title: 'Computer vision developers', body: 'Image and video recognition for real-world use cases.' },
{ title: 'NLP developers', body: 'Language understanding, search, classification and conversation.' }
],
tech: ['OpenAI', 'Claude', 'Gemini', 'LLM', 'RAG', 'AI Agents', 'Machine Learning', 'Computer Vision', 'NLP', 'Python', 'LangChain', 'Vector DBs', 'AI Automation'],
why: [
{ n: '01', title: 'Curated, vetted AI developers', body: 'We filter for relevant AI specialists, so you only meet suitable people.' },
{ n: '02', title: 'Matched to your project', body: 'Each developer is chosen against your requirement, not from an open list.' },
{ n: '03', title: 'Choose how you hire', body: 'Hourly, monthly or fixed cost, whichever suits the project.' },
{ n: '04', title: 'Start working quickly', body: 'Discuss, select and begin, without a long hiring process.' }
],
models: [
{ title: 'Hourly', body: 'Hire a developer for the exact hours your project needs.' },
{ title: 'Monthly', body: 'A dedicated AI developer working on your project each month.' },
{ title: 'Fixed cost', body: 'Share the requirement and we assign the right developer to deliver it.' }
],
steps: [
{ n: '01', title: 'Submit requirement', body: 'Tell us what you are building in a short form.' },
{ n: '02', title: 'Get matched', body: 'We review it and match a suitable AI developer.' },
{ n: '03', title: 'Discuss and select', body: 'Talk with the developer and choose who you want.' },
{ n: '04', title: 'Start working', body: 'Your developer begins on your project.' }
],
logos: ['LOGO', 'LOGO', 'LOGO', 'LOGO', 'LOGO'],
cases: [{}, {}, {}]
};
}
}