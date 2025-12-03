import { Router } from "express";
import { storyService } from "../services/index.js";
import { storyValidator } from "../utils/validate/index.js";
import logger from "../middleware/logger.js";

const router = Router();

router.get('/story', async (request, response) => {
    const query = request.query;

    try {
        const validated = storyValidator(query);
        
        const output = await storyService(validated.theme, validated.age);
        response
            .status(200)
            .json(output);
    } catch (error) {
        logger.error(error);
        response
            .status(400)
            .json({
                status: 400,
                message: "Error. Bad request."
            });
    }
});

export default router;