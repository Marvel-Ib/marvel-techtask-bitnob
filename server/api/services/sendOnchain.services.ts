import L from '../../common/logger';
import { Base } from './base';

interface Payload {
  customerEmail: string;
  satoshis: number;
  address: string;
}

export class sendOnchain extends Base {
  async sendBitcoin(data: Payload) {
    L.info(data, 'sendam');
    const url = '/wallets/send_bitcoin';
    const method = 'post';

    try {
      const response = await this.send(url, method, data);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject({ ee: error.message });
    }
  }
}

export default new sendOnchain();
