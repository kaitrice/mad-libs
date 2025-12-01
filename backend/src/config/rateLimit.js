import expressRateLimit from 'express-rate-limit';

export const rateLimit = expressRateLimit({
    windowMs: 15 * 60 * 10000,
    limit: 2
})