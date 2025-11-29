import gemini from './app/gemini.js'

/** PROMPTS */
const promptTheme = {
    PROMPT: `
Explain how AI works in a few words
`,
    SETTINGS: ``
}

const promptStory = {
    PROMPT: `
Explain how AI works in a few words
`,
    SETTINGS: ``
}

/** use prompts */
export async function generateTheme() {
    const themeOutput = await gemini({
        prompt: promptTheme.PROMPT, 
        settings: promptTheme.SETTINGS
    });
    
    console.log(themeOutput);
    return themeOutput
}

export async function generateStory() {
    const storyOutput = await gemini({
        thinking: true,
        prompt: promptStory.PROMPT, 
        settings: promptStory.SETTINGS
    });

    console.log(storyOutput);
    return storyOutput
}