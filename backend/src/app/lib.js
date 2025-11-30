const WINDOW = 60000;
const request_bucket = [];
const tokens_bucket = [];

export function canUseLLM(limit = 10) {
    if (!availableTokens()) return false;

    const now = Date.now();
    request_bucket = request_bucket.filter(timestamp => now - timestamp < WINDOW);

    if (request_bucket.length >= limit) return false;

    request_bucket.push(now);
    return true;
}

function availableTokens(limit = 200000) {
    const now = Date.now();
    tokens_bucket = tokens_bucket.filter(val => now - val.timestamp < WINDOW);
    const used = tokens_bucket.reduce((sum, val) => sum + val.tokens, 0);
    
    return used > limit;
}

export function updateTokens(usedTokens) {
    const now = Date.now();
    tokens_bucket.push({ timestamp: now, tokens: usedTokens })
}