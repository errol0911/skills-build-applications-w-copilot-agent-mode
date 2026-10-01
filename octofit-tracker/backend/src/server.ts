import express from 'express';
import './config/database.js';
import { apiRouter } from './routes/index.js';

const app = express();
const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_request, response) => {
  response.status(200).json({ status: 'ok', baseUrl });
});

app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error(error);
  response.status(500).json({ error: 'Internal server error' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`OctoFit API listening at ${baseUrl}`);
});