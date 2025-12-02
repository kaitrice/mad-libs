import { Router } from "express";
import { storyService } from "../services/index.js";
import { validateStory } from "../utils/validateQuery.js";

const router = Router();

router.get('/storyGenerator/:age/:theme', async (request, response) => {
    const params = request.params;

    try {
        validateStory(params);
        
        const output = await storyService({ theme: params.theme, age: params.age });
        response
            .status(200)
            .json(output);
    } catch (error) {
        console.error(`\nAPI Error: ${error}\n`);
        response
            .status(503)
            .json({
                status: 503,
                message: "Experiencing high volumes. Try again later."
            });
    }
});

export default router;