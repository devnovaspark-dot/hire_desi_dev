class Component extends DCLogic {
renderVals() {
return {
models: [
{ title: 'Hourly', body: 'Hire a developer for the exact hours your project needs.' },
{ title: 'Monthly', body: 'A dedicated AI developer working on your project each month.' },
{ title: 'Fixed cost', body: 'Share the requirement and we assign the right developer to deliver it.' }
],
specs: ['AI / ML development', 'Generative AI', 'LLM applications', 'AI agents', 'Computer vision', 'Natural language processing'],
steps: [
{ n: '01', title: 'Submit requirement', body: 'Tell us what you are building in a short form.' },
{ n: '02', title: 'Get matched', body: 'We review it and match a suitable AI developer.' },
{ n: '03', title: 'Discuss and select', body: 'Talk with the developer and choose who you want.' },
{ n: '04', title: 'Start working', body: 'Your developer begins on your project.' }
]
};
}
}