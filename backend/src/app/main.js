import { getStory, getThemes } from "./game.js";

async function main() {
    const themes = await getThemes();
    const { story, words } = await getStory({theme: themes[0]});
    console.log(story);
    console.log(words);
}

await main();