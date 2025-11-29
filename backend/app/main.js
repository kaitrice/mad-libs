import { generateStory, generateThemes } from "./generate.js";

async function main() {
    await generateThemes();
    // await generateStory();
}

await main();