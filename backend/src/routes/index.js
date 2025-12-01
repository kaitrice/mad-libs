import { Router } from 'express';
import docRoute from './documentation.js';
import storyRoute from './story.js';
import themeRoute from './theme.js';

const router = Router();

router.use('/', docRoute);
router.use('/story', storyRoute);
router.use('/themes', themeRoute);

export default router;