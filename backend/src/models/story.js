import zod from 'zod';

const storySchema = zod.object({
    age: zod.number().optional(),
    theme: zod.string().optional(),
});

export default storySchema;