import { app } from '@azure/functions';
import { getThemes } from '../app/game.js';
import { canUseLLM } from '../app/lib.js';

app.http('themes', {
    methods: ['GET'],
    authLevel: 'function',
    handler: async (request) => {
        if (!canUseLLM()) {
            context.log("High volume Alert! Theme generation blocked.")
            return {
                status: 503,
                body: "Experiencing high volumes. Try again later."
            }
        }

        const age = request.query.get('age');

        const response = await getThemes(age);

        updateTokens(response.tokens);
        
        return { jsonBody: response.themes };
    }
});
