import { TOKEN_LIMIT } from "./index.js";

let candidate_bucket = [];

export function addCandidateTokens(usedCandidate) {
    const now = Date.now();
    candidate_bucket.push({ timestamp: now, tokens: usedCandidate });
    console.log("CANDIDATE: ", candidate_bucket);
    return true;
}

export function availableCandidateTokens() {
    const now = Date.now();
    candidate_bucket = candidate_bucket.filter(val => now - val.timestamp < WINDOW);
    const totalCandidate = candidate_bucket.reduce((sum, val) => sum + val.tokens, 0);

    if (totalCandidate > TOKEN_LIMIT) return false;
    return true;
}