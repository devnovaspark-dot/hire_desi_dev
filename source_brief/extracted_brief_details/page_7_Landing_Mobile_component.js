class Component extends DCLogic {
renderVals() {
return {
heroPoints: ['Curated, vetted AI specialists', 'Matched to your requirement', 'Hourly, monthly or fixed cost'],
profiles: ['AI / ML developers', 'Generative AI developers', 'LLM engineers', 'AI agent developers', 'Computer vision developers', 'NLP developers'],
tech: ['OpenAI', 'Claude', 'Gemini', 'LLM', 'RAG', 'AI Agents', 'Machine Learning', 'Computer Vision', 'NLP', 'Python', 'LangChain', 'Vector DBs', 'AI Automation'],
models: [
{ title: 'Hourly', body: 'Hire a developer for the exact hours your project needs.' },
{ title: 'Monthly', body: 'A dedicated AI developer working on your project each month.' },
{ title: 'Fixed cost', body: 'Share the requirement and we assign the right developer to deliver it.' }
],
steps: [
{ n: '01', title: 'Submit requirement', body: 'Tell us what you are building.' },
{ n: '02', title: 'Get matched', body: 'We match a suitable AI developer.' },
{ n: '03', title: 'Discuss and select', body: 'Choose the developer you want.' },
{ n: '04', title: 'Start working', body: 'Your developer begins on your project.' }
]
};
}
}