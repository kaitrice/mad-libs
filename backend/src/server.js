import express from 'express';
import routes from "./routes/index.js";
import { configDotenv } from 'dotenv';
import { getPath } from './utils/getPath.js';

configDotenv()

const PORT = process.env.PORT || 7170;
const APP = express();

const FOLDER_PATH = getPath("../public");
const FILE_PATH = getPath("../pages/index.html");

APP.use(express.static(FOLDER_PATH));
APP.use(express.json());

APP.get('/', (req, res) => {
  res.sendFile(FILE_PATH);
});

APP.use('/api', (req, res, next) => {
  console.log(`    Request recieved: ${req.method} ${req.url}`);
  next();
});

APP.use('/api', routes);

APP.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

APP.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});