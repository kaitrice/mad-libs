const WINDOW = 60000;
const REQUEST_LIMIT = 10;
const TOKEN_LIMIT = 200000;

import * as requestBucket from "./requestBucket.js";
import * as promptBucket from "./promptBucket.js";
import * as candidateBucket from "./candidateBucket.js";

function canUseLLM() {
    if (requestBucket.availableRequestTokens() || candidateBucket.availableCandidateTokens()) return false;

    requestBucket.addRequestToken();
    return true;
}

export {
    WINDOW,
    REQUEST_LIMIT,
    TOKEN_LIMIT,
    requestBucket,
    promptBucket,
    candidateBucket,
    canUseLLM
}