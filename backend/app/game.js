import gemini from './gemini.js'
import { promptStory, promptThemes, safetySettings } from './prompts.js';

export async function getThemes({ age = 0 }) {
    const SAFETY_SETTINGS = safetySettings(age)

    const output = await gemini({
        prompt: promptThemes.PROMPT, 
        settings: SAFETY_SETTINGS
    });

    const themes = output.split('\n');

    console.log(themes);
    return themes;
}

export async function getStory({ theme = "First day of work.", age = 0 }) {
    const prompt = promptStory(theme);
    const SAFETY_SETTINGS = safetySettings(age);

    const output = await gemini({
        prompt: prompt.PROMPT, 
        settings: SAFETY_SETTINGS
    });

    const paragraphs = output
        .split('\n')
        .filter(p => p.trim() !== '');
    
    console.log(paragraphs);
    return paragraphs;
}