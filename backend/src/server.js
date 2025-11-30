import express from 'express';
import routes from "./routes/index.js";
import '../config/index.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world')
})
app.get('/api', routes);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

export default app;