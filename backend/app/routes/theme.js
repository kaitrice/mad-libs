import { app } from '@azure/functions';
import { getThemes } from '../app/game.js';

app.http('themes', {
    methods: ['GET'],
    authLevel: 'function',
    handler: async (request, context) => {
        const age = request.query.get('age');
        
        try {
            const themes = await getThemes(age);
            
            return { jsonBody: themes };
        } catch (error) {
            context.warn("Alert: High volume! Theme generation blocked.");
            return {
                status: 503,
                body: "Experiencing high volumes. Try again later."
            }
        }
    }
});
