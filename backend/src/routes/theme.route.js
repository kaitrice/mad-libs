import { Router } from "express";
import { themeService } from "../services/index.js";
import { themeValidator } from "../utils/validate/index.js";
import logger from "../middleware/logger.js";

const router = Router();

router.get('/theme', async (request, response) => {
    const query = request.query;
    const body = request.body;

    try {
        const validated = themeValidator(query, body);
        
        const output = await themeService(validated.age, validated.body);
        response
            .status(200)
            .json(output);
    } catch (error) {
        logger.error(error);
        response
            .status(500)
            .json({
                status: 500,
                message: "Error."
            });
    }
});

export default router;