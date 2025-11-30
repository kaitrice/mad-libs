import '../config/index.js';
import express from 'express';
import routes from "./routes/index.js";
import { getPath } from './utils/getPath.js';

const PORT = process.env.PORT || 7170;
const APP = express();

APP.use(express.static('pages'));
APP.use(express.json());

const FILE_PATH = getPath('index.html');

APP.get('/', (req, res) => {
  res.sendFile(FILE_PATH);
});

APP.use('/api', routes);

APP.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

APP.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});