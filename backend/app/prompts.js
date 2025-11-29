/** PROMPTS */
export const promptStory = (theme) => {
    return {
        PROMPT: `
Generate a short story using ${theme}
`,
    SETTINGS: ``
    }
}

export const promptThemes = {
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