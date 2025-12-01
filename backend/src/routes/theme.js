import { Router } from "express";
import { themeService } from "../services/index.js";

const router = Router();

router.get('/', async (request, response) => {
    const { age } = request.query;
    try {
        validateTheme(age);
        
        const output = await themeService(age);
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