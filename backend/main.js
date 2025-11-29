import gemini from './gemini.js';

async function main() {
    const output = await gemini({prompt: "Explain how AI works in a few words"});

    console.log(output);
}

await main();