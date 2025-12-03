import expressRateLimit from 'express-rate-limit';

export const rateLimit = expressRateLimit({
    windowMs: process.env.WINDOW * 60 * 10000,
    limit: process.env.LIMIT
})