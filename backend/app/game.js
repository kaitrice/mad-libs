import { generateThemes } from "./generate.js";

export async function getThemes() {
    const output = await generateThemes();
    const themes = output.split('\n')
    console.log(themes)
    return themes
}