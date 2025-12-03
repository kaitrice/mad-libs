import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from "./routes/index.js";
import logger, { apiLogger } from './middleware/logger.js';
import { getPath } from './utils/getPath.js';
import { corsOptions, rateLimit } from './utils/config/index.js';


const PORT = process.env.PORT || 3030;
const app = express();

let FILE_PATH;
const FOLDER_PATH = getPath("../public");

app.use(cors(corsOptions));
app.use(rateLimit);
app.use(helmet());
app.use(express.static(FOLDER_PATH));

app.get('/', (req, res) => {
	FILE_PATH = getPath("../public/html/index.html");
	res.sendFile(FILE_PATH);
});

app.get('/documentation', (req, res) => {
	FILE_PATH = getPath("../public/html/documentation.html");
	res.sendFile(FILE_PATH);
});

app.use('/api', apiLogger, routes);

app.use((req, res) => {
	res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
	logger.info({
		message: `Server is running on port ${PORT}\n`
	});
});