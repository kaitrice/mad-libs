import { Router } from 'express';
import storyRoute from './story.route.js';
import themeRoute from './theme.route.js';

const router = Router();

const routes = [
    storyRoute,
    themeRoute
]

routes.forEach(route => router.use('/generate', route));

export default router;