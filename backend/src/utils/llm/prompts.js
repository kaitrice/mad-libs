/** PROMPTS */
export const promptStory = (theme) => {
    const language = "English"
    return {
        PROMPT: `
# Role
You are a writer.

# Context
You are creating an original short story for a Mad Libs game.

# Constraints
1. Be creative.
2. Story theme: ${theme}
3. Language: ${language}
4. Length: 3-5 paragraphs, each 3-6 sentences. Dialogue does not count toward paragraph limit.
5. Tone may vary but must not violate content restrictions.
6. Must stay fully within the safety rules set.

# Instructions
1. Generate a story within the constraints.
After creating the story:
1. Remove 8-12 key words.
2. Replace them with clear bracketed word-type prompts, such as:
   [adjective], [plural noun], [past-tense verb], [mythical creature].
3. Do NOT include numbering inside the story.
4. Ensure the story is still grammatically correct when blanks are removed.

# Output
Return story with key words removed and list of key word types in the order they are in the story.
Structure:
{
story: [
    "The [adjective] smell of fresh paint still clung to the air in the new office, a smell that did little to calm Elara's buzzing nerves. This was it. Her first day at Solara Tech, her dream job as a [job title]. She clutched the strap of her oversized, slightly scuffed laptop bag, feeling like an imposter in a sea of sleek, confident professionals.",
    "She'd rehearsed her introduction a dozen times in front of her [place] mirror, but now, faced with an actual bustling open-plan office, the words felt like lead in her throat. Her new manager, a perpetually cheerful woman named Anya, waved her over to a desk in the corner. It was surprisingly neat, a shiny new [office supply] sitting expectantly.",
],
words: [
    adjective,
    job title,
    office supply,
]
}
`
    }
}

export const promptThemes = {
    PROMPT: `
# Role
You are a writers assistant.

# Context
You are creating themes for a Mad Libs game.

# Constraints
1. Each theme should be between 1 to 8 words each.
2. Generate 6 themes.

# Output
Give me a simple list of themes ideas. This list should not have numbers or bullets.
Output:
[
<Theme idea 1>,
<Theme idea 2>,
<Theme idea 3>,
<Theme idea 4>,
<Theme idea 5>,
<Theme idea 6>,
]
`
}

/** SAFETY */
export const safetySettings = (age) => {
    const BLOCK = age < 18 ? "BLOCK_LOW_AND_ABOVE" : "BLOCK_MEDIUM_AND_ABOVE";
    return [
        {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: BLOCK
        },
        {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: BLOCK
        },
        {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: BLOCK
        },
        {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: BLOCK
        }
    ]
}