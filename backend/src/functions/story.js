import { app } from '@azure/functions';
import { getStory } from '../app/game.js';
import { canUseLLM } from '../app/lib.js';

app.http('story', {
    methods: ['GET'],
    authLevel: 'function',
    handler: async (request, context) => {
        if (!canUseLLM()) {
            context.log("High volume Alert! Story generation blocked.")
            return {
                status: 503,
                body: "Experiencing high volumes. Try again later."
            }
        }

        const age = request.query.get('age');
        const theme = request.query.get('theme');

        const output = await getStory({ theme: theme, age: age });

        return { jsonBody: output };
    }
});
