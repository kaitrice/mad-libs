import app from "../server.js";
import { getPath } from "../utils/getPath.js";
import * as storyEndpoint from './story.js';
import * as themeEndpoint from './theme.js';

const filePath = getPath('documentation/index.html');

app.get('/', (req, res) => {
  res.sendFile(filePath);
});

export default { storyEndpoint, themeEndpoint };