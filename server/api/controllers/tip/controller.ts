import OnchainService from '../../services/sendOnchain.services';
import { Request, Response } from 'express';
import l from '../../../common/logger';
import { Payload } from '../../../common/myInterface';

const test_payload: Payload = {
  customerEmail: 'testing@help.com',
  satoshis: 300,
  address: 'tb1q9h0yjdupyfpxfjg24rpx755xrplvzd9hz2nj7v',
};

export class Controller {
  async sendOnchain(req: Request, res: Response): Promise<void> {
    try {
      l.info(req.body, 'body dey send');
      l.info(test_payload, 'payload i dey send');
      const result = await OnchainService.sendBitcoin(test_payload);
      res.json(result);
    } catch (e) {
      res.status(404).json({
        message: e,
      });
    }
  }
  async checkOnchainAddress(req: Request, res: Response): Promise<void> {
    try {
      console.log('ddd');
      const bitcoinAddress = req.body.address;
      l.info(bitcoinAddress, 'payload i dey send');
      const result = await OnchainService.checkAddress(bitcoinAddress);
      l.info('got here');
      res.status(200).json(result);
    } catch (e) {
      res.status(404).json({
        message: e,
      });
    }
  }
}
export default new Controller();
