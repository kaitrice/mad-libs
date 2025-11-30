import gemini from '../llm/gemini.js'
import { promptThemes, safetySettings } from '../llm/prompts.js';

export default async function getThemes( age = 0 ) {
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