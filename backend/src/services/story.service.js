import gemini from '../utils/llm/gemini.js'
import { promptStory, safetySettings } from '../utils/llm/prompts.js';

export async function getStory( theme = "First day of work.", age = 0 ) {
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