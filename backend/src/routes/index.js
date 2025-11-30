import { Router } from "express";
import { getPath } from "../utils/getPath.js";
import * as storyEndpoint from './story.js';
import * as themeEndpoint from './theme.js';

const filePath = getPath('documentation/index.html');
const router = Router()

router.get('/', (req, res) => {
  res.sendFile(filePath);
});

export default router;