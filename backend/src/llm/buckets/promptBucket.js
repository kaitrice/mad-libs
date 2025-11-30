import { TOKEN_LIMIT } from ".";

let prompt_bucket = [];

export function availablePromptTokens(usedPrompt) {
    const now = Date.now();
    prompt_bucket = prompt_bucket.filter(val => now - val.timestamp < WINDOW);
    const totalPrompt = prompt_bucket.reduce((sum, val) => sum + val.tokens, 0);

    if (totalPrompt + usedPrompt > TOKEN_LIMIT) return false;
    
    prompt_bucket.push({ timestamp: now, tokens: usedPrompt });
    console.log("PROMPTS: ", prompt_bucket);
    return true;
}