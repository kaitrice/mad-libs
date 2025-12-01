import zod from 'zod';

export function validateStory(query) {
    const expected = zod.object({
        age: zod.number().optional(),
        theme: zod.string().optional(),
    })
    const result = query.safeParse(expected);

    if (!result.success) result.error; 
    else result.data;
}

export function validateTheme(query) {
    const expected = zod.object({
        age: zod.number().optional()
    })
    const result = query.safeParse(expected);

    if (!result.success) result.error; 
    else result.data;
}