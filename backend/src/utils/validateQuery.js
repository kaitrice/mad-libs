import zod from 'zod';

export function validateStory(query) {
    const expected = zod.object({
        age: zod.number(),
        theme: zod.string(),
    })
    const result = query.safeParse(expected);

    if (!result.success) result.error; 
    else result.data;
}

export function validateTheme(query) {
    const expected = zod.object({
        age: zod.number()
    })
    const result = query.safeParse(expected);

    if (!result.success) result.error; 
    else result.data;
}