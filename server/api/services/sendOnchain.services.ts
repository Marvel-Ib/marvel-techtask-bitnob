import L from '../../common/logger';
import { Base } from './base';
import { Payload } from '../../common/myInterface';
import { validate, getAddressInfo } from 'bitcoin-address-validation';

enum Network {
  mainnet = 'mainnet',
  testnet = 'testnet',
  regtest = 'regtest',
}

export class sendOnchain extends Base {
  checkAddress(address: string): boolean {
    const result = validate(address, Network.testnet);
    L.info(getAddressInfo(address));
    return result;
  }

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

  async receiveWebhook(data: any) {
    console.log(data, 'event sent');
  }
}

export default new sendOnchain();
