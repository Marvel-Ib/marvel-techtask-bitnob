import { Application } from 'express';
import tipRouter from './api/controllers/tip/router';
export default function routes(app: Application): void {
  app.use('/api/tip', tipRouter);
}
