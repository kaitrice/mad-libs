import gemini from './gemini.js'
import { promptStory, promptThemes } from './prompts.js';

export async function getThemes() {
    const output = await gemini({
        prompt: promptThemes.PROMPT, 
        settings: promptThemes.SETTINGS
    });

    const themes = output.split('\n')

    console.log(themes)
    return themes
}

export async function getStory(theme) {
    if (!theme) theme = "First day of work."
    const prompt = promptStory(theme)

    const output = await gemini({
        prompt: prompt.PROMPT, 
        settings: prompt.SETTINGS
    });

    const paragraphs = output
        .split('\n')
        .filter(p => p.trim() !== '');
    
    console.log(paragraphs)
    return paragraphs
}