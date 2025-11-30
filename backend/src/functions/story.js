import { app } from '@azure/functions';
import { getStory } from '../app/game.js';

app.http('story', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const age = request.query.get('age');
        const theme = request.query.get('theme');
        const output = await getStory({ theme: theme, age: age });

        return { jsonBody: output };
    }
});
