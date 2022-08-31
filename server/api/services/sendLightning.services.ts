import L from '../../common/logger';
import { Base } from './base';
import { invoicePayload } from '../../common/myInterface';

class LightningService extends Base {
  async check(invoice: string) {
    L.info(invoice, 'invoice sent');
    const url = '/wallets/ln/initiatepayment';
    const method = 'post';

    try {
      const response = await this.send(url, method, { request: invoice });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject({ ee: error.message });
    }
  }
  async payInvoice(load: invoicePayload) {
    L.info(load, 'invoice sent');
    const url = '/wallets/ln/pay ';
    const method = 'post';

    try {
      const response = await this.send(url, method, load);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject({ ee: error.message });
    }
  }
}

export default new LightningService();
