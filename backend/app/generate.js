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
# Role
You are a writers assisant.

# Context
You are creating themes for a Mad Libs game.

# Constraints
1. Each theme should be between 1 to 8 words each.
2. Generate 6 themes.

# Output
Give me a simple list of themes ideas. This list should no have bullets or numbers, just a simple list separated by new lines.
Output:
<Theme idea 1>
<Theme idea 2>
`,
    SETTINGS: ``
}

/** use prompts */
export async function generateThemes() {
    const output = await gemini({
        prompt: promptThemes.PROMPT, 
        settings: promptThemes.SETTINGS
    });
    
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

    for await (const chunk of output) {
        console.log(chunk.text);
    }

    return output
}