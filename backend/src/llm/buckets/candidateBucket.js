import { TOKEN_LIMIT, WINDOW } from "./index.js";

let candidate_bucket = [];

export function addCandidateTokens(usedCandidate) {
    const now = Date.now();
    candidate_bucket.push({ timestamp: now, tokens: usedCandidate });
}

export function availableCandidateTokens() {
    candidate_bucket = candidate_bucket.filter(timestamp => now - timestamp < WINDOW);
    const totalTokens = candidate_bucket.reduce((sum, val) => sum + val.tokens, 0);
    return totalTokens < TOKEN_LIMIT;
}