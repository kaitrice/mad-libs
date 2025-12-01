import { Router } from "express";
import { storyService } from "../services/index.js";
import { validateStory } from "../utils/validateQuery.js";

const router = Router();

router.get('/', async (request, response) => {
    const query = request.query;
    try {
        validateStory(query);
        
        const output = await storyService({ theme: theme, age: age });
        response
            .status(200)
            .json(output);
    } catch (error) {
        console.warn("Alert: High volume! Story generation blocked:", error);
        response
            .status(503)
            .json({
                status: 503,
                message: "Experiencing high volumes. Try again later."
            });
    }
});

export default router;