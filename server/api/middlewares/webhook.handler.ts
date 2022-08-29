import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

const webhookAuthentication =
  () => (req: Request, res: Response, next: NextFunction) => {
    const webhookSecret: any = process.env.WEBHOOK_SECRET;

    if (!webhookSecret) {
      throw new Error('alaye you forgot  webhookSecret env');
    }

    const bitnobSignature = req.headers['x-bitnob-signature'];

    const hashedSignature = crypto
      .createHmac('sha512', webhookSecret)
      .update(JSON.stringify(req.body))
      .digest('hex');
    if (hashedSignature === bitnobSignature) {
      next();
      return;
    }
    return res.status(404).send('ïnvalid signature');
  };

export default webhookAuthentication;
