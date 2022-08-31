import OnchainService from '../../services/sendOnchain.services';
import LightningService from '../../services/sendLightning.services';
import { Request, Response } from 'express';
import l from '../../../common/logger';
import { Payload, invoicePayload } from '../../../common/myInterface';

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
    if (req.body.event === 'btc.onchain.send.success') {
      await OnchainService.handleWebhook(
        req.body.data.id,
        'onchain channel',
        req.body.data.satAmount
      );
    } else if (req.body.event === 'btc.lightning.send.success') {
      await OnchainService.handleWebhook(
        req.body.data.id,
        'lightning',
        req.body.data.satAmount
      );
    }
    res.status(200).json('received');
  }

  async checkLnInvoice(req: Request, res: Response): Promise<void> {
    try {
      const lnInvoice = req.body.request;
      l.info(lnInvoice, 'payload i dey send');
      const result = await LightningService.check(lnInvoice);
      l.info('got here');
      res.status(200).json({ message: result });
    } catch (e) {
      res.status(400).json({
        message: e,
      });
    }
  }

  async payLnInvoice(req: Request, res: Response): Promise<void> {
    try {
      const payload: invoicePayload = {
        customerEmail: req.body.customerEmail,
        request: req.body.request,
        reference: req.body.reference,
      };
      l.info(payload, 'payload i dey send');
      const result = await LightningService.payInvoice(payload);
      l.info('got here');
      res.status(200).json({ message: result });
    } catch (e) {
      res.status(400).json({
        message: e,
      });
    }
  }
}
export default new Controller();
