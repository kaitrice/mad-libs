import expressRateLimit from 'express-rate-limit';

export const rateLimit = expressRateLimit({
    windowMs: 1 * 60 * 10000,
    limit: 4
})