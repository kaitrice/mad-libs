const WINDOW = 60000;
const REQUEST_LIMIT = 10;
const TOKEN_LIMIT = 200000;

let request_bucket = [];
let prompt_bucket = [];
let candidate_bucket = [];

export function canUseLLM() {
    const now = Date.now();
    request_bucket = request_bucket.filter(timestamp => now - timestamp < WINDOW);
    candidate_bucket = candidate_bucket.filter(val => now - val.timestamp < WINDOW);

    if (request_bucket.length >= REQUEST_LIMIT || candidate_bucket.length >= TOKEN_LIMIT) return false;

    request_bucket.push(now);
    return true;
}

export function availablePromptTokens(usedPrompt) {
    const now = Date.now();
    prompt_bucket = prompt_bucket.filter(val => now - val.timestamp < WINDOW);
    const totalPrompt = prompt_bucket.reduce((sum, val) => sum + val.tokens, 0);

    if (totalPrompt + usedPrompt > TOKEN_LIMIT) return false;
    
    prompt_bucket.push({ timestamp: now, tokens: usedPrompt });
    console.log("PROMPTS: ", prompt_bucket);
    return true;
}

export function addCandidateTokens(usedCandidate) {
    const now = Date.now();
    candidate_bucket.push({ timestamp: now, tokens: usedCandidate });
    console.log("CANDIDATE: ", candidate_bucket);
    return true;
}