import { Router } from 'express';
import documentation from './documentation.js';
import story from './story.js';
import theme from './theme.js';

const router = Router();

router.use('/', documentation);
router.use('/story', story);
router.use('/theme', theme);

export default router;