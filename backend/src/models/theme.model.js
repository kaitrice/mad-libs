import zod from 'zod';

const themeModel = zod.object({
    age: zod.number().optional(),
});

export default themeModel;