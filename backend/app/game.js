import gemini from './gemini.js'
import { promptStory, promptThemes, safetySettings } from './prompts.js';

export async function getThemes( age = 0 ) {
    const SAFETY_SETTINGS = safetySettings(age)

    const themes = await gemini({
        prompt: promptThemes.PROMPT, 
        settings: SAFETY_SETTINGS
    });

    console.log(themes);
    return themes;
}

export async function getStory({ theme = "First day of work.", age = 0 }) {
    const prompt = promptStory(theme);
    const SAFETY_SETTINGS = safetySettings(age);

    const paragraphs = await gemini({
        prompt: prompt.PROMPT, 
        settings: SAFETY_SETTINGS
    });
    
    console.log(paragraphs);
    return paragraphs;
}