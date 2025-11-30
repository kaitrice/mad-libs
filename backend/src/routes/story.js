import app from "../server.js";
import { getStory } from "../services/storyService.js";

app.http('story', {
    methods: ['GET'],
    authLevel: 'function',
    handler: async (request, context) => {
        const age = request.query.get('age');
        const theme = request.query.get('theme');

        try {
            const output = await getStory({ theme: theme, age: age });

            return { jsonBody: output };
        } catch (error) {
            context.warn("Alert: High volume! Story generation blocked.");
            return {
                status: 503,
                body: "Experiencing high volumes. Try again later."
            }
        }
    }
});
