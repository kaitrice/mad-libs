import { generateStory, generateThemes } from "./generate.js";

export async function getThemes() {
    const output = await generateThemes();
    const themes = output.split('\n')
    console.log(themes)
    return themes
}

export async function getStory(theme) {
    if (!theme) theme = "First day of work."
    const output = await generateStory(theme);
    const paragraphs = output
        .split('\n')
        .filter(p => p.trim() !== '');
    console.log(paragraphs)
    return paragraphs
}