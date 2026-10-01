import express from 'express';
import { apiBaseUrl, apiPort } from './config/api.js';
import './config/database.js';
import { apiRouter } from './routes/index.js';

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_request, response) => {
  response.status(200).json({ status: 'ok', baseUrl: apiBaseUrl });
});

app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error(error);
  response.status(500).json({ error: 'Internal server error' });
});

app.listen(apiPort, '0.0.0.0', () => {
  console.log(`OctoFit API listening at ${apiBaseUrl}`);
});