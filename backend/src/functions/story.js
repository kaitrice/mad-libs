import { app } from '@azure/functions';
import { getStory } from '../app/game.js';
import { canUseLLM, updateTokens } from '../app/lib.js';

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

        const response = await getStory({ theme: theme, age: age });

        updateTokens(response.tokens);

        return { jsonBody: response.output };
    }
});
