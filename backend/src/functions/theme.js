import { app } from '@azure/functions';
import { getThemes } from '../app/game.js';

app.http('themes', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request) => {
        const age = request.query.get('age');
        const themes = await getThemes(age);

        return { jsonBody: themes };
    }
});
