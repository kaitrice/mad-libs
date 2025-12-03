import zod from 'zod';

const storyModel = zod.object({
    age: zod.number().optional(),
    theme: zod.string().optional(),
});

export default storyModel;