import { WINDOW } from ".";
import { availableCandidateTokens } from "./promptCandidate";

let request_bucket = [];

export function canUseLLM() {
    const now = Date.now();
    request_bucket = request_bucket.filter(timestamp => now - timestamp < WINDOW);
    candidate_bucket = candidate_bucket.filter(val => now - val.timestamp < WINDOW);
    

    if (request_bucket.length >= REQUEST_LIMIT || availableCandidateTokens()) return false;

    request_bucket.push(now);
    return true;
}