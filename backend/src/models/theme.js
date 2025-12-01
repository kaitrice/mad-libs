import zod from 'zod';

const themeSchema = zod.object({
    age: zod.number().optional(),
});

export default themeSchema;