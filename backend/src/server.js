import express from 'express';
import routes from "./routes/index.js";
import '../config/index.js';
import { getPath } from './utils/getPath.js';

const filePath = getPath('index.html');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(filePath);
});

app.get('/api', routes);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

export default app;