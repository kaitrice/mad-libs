import { TOKEN_LIMIT, WINDOW } from "./index.js";

let prompt_bucket = [];

export function addPromptTokens(usedPrompts) {
    const now = Date.now();
    prompt_bucket.push({ timestamp: now, tokens: usedPrompts });
}

export function availablePromptTokens(usedPrompts) {
    prompt_bucket = prompt_bucket.filter(timestamp => now - timestamp < WINDOW);
    const totalTokens = prompt_bucket.reduce((sum, val) => sum + val.tokens, 0);
    if (totalTokens + usedPrompts >= TOKEN_LIMIT) return false;
    addPromptTokens(usedPrompts);
    return true;
}