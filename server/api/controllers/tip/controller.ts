import OnchainService from '../../services/sendOnchain.services';
import { Request, Response } from 'express';
import l from '../../../common/logger';
import { Payload } from '../../../common/myInterface';

// const payload: Payload = {
//   customerEmail: 'backendlifetech@gmail.com',
//   satoshis: 100,
//   address: 'tb1q9h0yjdupyfpxfjg24rpx755xrplvzd9hz2nj7v',
// };

export class Controller {
  async sendOnchain(req: Request, res: Response): Promise<void> {
    try {
      const payload: Payload = {
        customerEmail: req.body.customerEmail,
        satoshis: req.body.satoshis,
        address: req.body.address,
      };
      console.log(req.body);
      l.info(payload, 'payload i dey send');
      const result = await OnchainService.sendBitcoin(payload);
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
      res.status(200).json({ message: result });
    } catch (e) {
      res.status(400).json({
        message: e,
      });
    }
  }
  async receiveWebhook(req: Request, res: Response): Promise<void> {
    l.info(req.body, 'payload i dey send');
    res.status(200).json('received');
  }
}
export default new Controller();
