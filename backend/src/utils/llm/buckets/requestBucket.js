import logger from "../../../middleware/logger.js";
import { REQUEST_LIMIT, WINDOW } from "./index.js";

let request_bucket = [];

export function addRequestToken() {
    const now = Date.now();
    request_bucket.push(now);
}

export function availableRequestTokens() {
    const now = Date.now();
    request_bucket = request_bucket.filter(timestamp => now - timestamp < WINDOW);
    if (request_bucket.length >= REQUEST_LIMIT) return false;
    addRequestToken();
    return true;
}

export function removeRequestToken() {
    const request = request_bucket.pop();
    logger.warn({ 
        message: `removed ${request}`, 
        label: "Request Bucket" 
    });
}