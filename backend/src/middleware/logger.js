/**
 * Winston - Quick start example: https://github.com/winstonjs/winston/blob/master/examples/quick-start.js
 */

import { createLogger, format, transports } from 'winston';
import { canUseLLM } from '../utils/llm/buckets/index.js';

const schema = format.printf(({ timestamp, level, message, label, ...meta }) => {
    const msg = typeof message === 'object'
        ? JSON.stringify(message, null, 4)
        : message;
    const lbl = label ? `[${label}] ` : '';
    return `${timestamp} ${level}: ${lbl}${msg}`;
});

const logFormat = format.combine(
    format.splat(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    schema
)

const files = [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
];

const logger = createLogger({
    level: 'info',
    format: logFormat,
    transports: files
});

logger.ster

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: format.combine(
            format.colorize(),
            schema
        )
    }));
}

export function apiLogger(req, res, next) {
    logger.info({
        message: `${req.method} from ${req.originalUrl}`,
        label: 'API Request'
    })

    if (!canUseLLM) {
        return res
            .status(503)
            .json({
                status: 503,
                message: "Experiencing high volumes. Try again later."
            });
    }

    next();
}

export default logger;