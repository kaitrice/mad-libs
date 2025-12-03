import { Router } from "express";
import { themeService } from "../services/index.js";
import { validateTheme } from "../utils/validateQuery.js";
import logger from "../middleware/logger.js";

const router = Router();

router.get('/theme/:age', async (request, response) => {
    const params = request.params;
    try {
        validateTheme(params);
        
        const output = await themeService(params.age);
        response
            .status(200)
            .json(output);
    } catch (error) {
        logger.error(error);
        response
            .status(503)
            .json({
                status: 503,
                message: "Experiencing high volumes. Try again later."
            });
    }
});

export default router;