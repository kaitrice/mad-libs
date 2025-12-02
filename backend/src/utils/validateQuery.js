import { storySchema, themeSchema } from '../models/index.js';

function isValidAge(age) {
    /**
     * integer only
     * check age range
     */
    return true;
}

function isValidTheme(theme) {
    /**
     * trim white space
     * check for special characters (i.e coding syntax and patterns)
     */
    return true;
}

export function validateStory(query) {
    const result = storySchema.safeParse(query);

    if (!result.success) result.error;
    if (result.age && !isValidAge(result.age)) result.error;
    if (result.theme && !isValidTheme(result.theme)) result.error;

    return result.data;
}

export function validateTheme(query) {
    const result = themeSchema.safeParse(query);

    if (!result.success) result.error;
    if (result.age && !isValidAge(result.age)) result.error;

    return result.data;
}