import { Application } from 'express';
import checkRouter from './api/controllers/check/router';
import tipRouter from './api/controllers/tip/router';
export default function routes(app: Application): void {
  app.use('/api', checkRouter);
  app.use('/api/tip', tipRouter);
}
