import gemini from './gemini.js'

/** PROMPTS */
const promptStory = (theme) => {
    return {
        PROMPT: `
Generate a short story using ${theme}
`,
    SETTINGS: ``
    }
}

const promptThemes = {
    PROMPT: `
Explain how AI works in a few words
`,
    SETTINGS: ``
}

/** use prompts */
export async function generateThemes() {
    const output = await gemini({
        prompt: promptThemes.PROMPT, 
        settings: promptThemes.SETTINGS
    });
    
    console.log(output);
    return output
}

export async function generateStory(theme) {
    if (!theme) theme = "First day of work."
    const prompt = promptStory(theme)

    const output = await gemini({
        thinking: true,
        prompt: prompt.PROMPT, 
        settings: prompt.SETTINGS
    });

    console.log(output);
    return output
}