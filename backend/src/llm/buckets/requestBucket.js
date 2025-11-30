import { REQUEST_LIMIT, WINDOW } from "./index.js";

let request_bucket = [];

export function addRequestToken() {
    const now = Date.now();
    request_bucket.push(now);
}

export function availableRequestTokens() {
    request_bucket = request_bucket.filter(timestamp => now - timestamp < WINDOW);
    if (request_bucket.length >= REQUEST_LIMIT) return false;
    addRequestToken();
    return true;
}