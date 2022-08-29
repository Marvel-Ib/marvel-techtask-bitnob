import { Application } from 'express';
import checkRouter from './api/controllers/check/router';
export default function routes(app: Application): void {
  app.use('/api/v1', checkRouter);
}
