import gemini from './gemini.js'
import { promptStory, promptThemes, safetySettings } from './prompts.js';

export async function getThemes( age = 0 ) {
    const SAFETY_SETTINGS = safetySettings(age)

    try {
        const response = await gemini({
            prompt: promptThemes.PROMPT, 
            settings: SAFETY_SETTINGS
        });
    
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getStory({ theme = "First day of work.", age = 0 }) {
    const prompt = promptStory(theme);
    const SAFETY_SETTINGS = safetySettings(age);

    try {
        const response = await gemini({
            prompt: prompt.PROMPT, 
            settings: SAFETY_SETTINGS
        });
    
        return response;
    } catch (error) {
        throw error;
    }
}