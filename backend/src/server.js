import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from "./routes/index.js";
import { configDotenv } from 'dotenv';
import { getPath } from './utils/getPath.js';
import { corsOptions, rateLimit } from './utils/config/index.js';

configDotenv();

const PORT = process.env.PORT || 7170;
const APP = express();

const FOLDER_PATH = getPath("../public");
const FILE_PATH = getPath("../public/html/index.html");

APP.use(cors(corsOptions));
APP.use(rateLimit);
APP.use(helmet());
APP.use(express.json());
APP.use(express.static(FOLDER_PATH));

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