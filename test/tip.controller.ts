import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Server from '../server';
import * as sinon from 'sinon';
import sendOnchain from './../server/api/services/sendOnchain.services';
import sendLightningService from '../server/api/services/sendLightning.services';
import {
  onChainSuccess,
  payLnInvoiceSuccess,
  initiateLnPaymentSuccess,
} from './fixtures/bitnob';

describe('Check testnet/signet bitcoin address', () => {
  it('success - valid signet/testnet address', async () => {
    const res = await request(Server)
      .post('/api/tip/onchain/check')
      .send({ address: 'tb1q8xtyzaukxrl6ywn33wfkwzj46g0lum7lw97940' })
      .expect(200);

    expect(res.body.message).to.be.true;
  });

  it('failure - mainnet address', async () => {
    const res = await request(Server)
      .post('/api/tip/onchain/check')
      .send({ address: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX' })
      .expect(200);

    expect(res.body.message).to.be.false;
  });

  it('failure- address not included in request body ', async () => {
    const res = await request(Server)
      .post('/api/tip/onchain/check')
      .send({ add: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX' })
      .expect(400);
    expect(res.body.message).to.eql(
      'The following parameters are all required for this route: address'
    );
  });

  it('failure - not a address', async () => {
    const res = await request(Server)
      .post('/api/tip/onchain/check')
      .send({ address: 'DefinitelyNotABitcoinAddress' })
      .expect(200);

    expect(res.body.message).to.be.false;
  });
});

describe('send bitcoin onchain', () => {
  let createOnchainStub: any;
  beforeEach(() => {
    createOnchainStub = sinon
      .stub(sendOnchain, 'sendBitcoin')
      .returns(Promise.resolve(onChainSuccess));
  });

  afterEach(() => {
    createOnchainStub.restore();
  });

  it('success - onchain request sent', async () => {
    const res = await request(Server)
      .post('/api/tip/onchain')
      .send({
        customerEmail: 'pelumi@gmail.com',
        satoshis: 300,
        address: 'tb1q9h0yjdupyfpxfjg24rpx755xrplvzd9hz2nj7v',
      })
      .expect(200);

    expect(res.body.message).to.eql('Transaction successfully submitted');
    expect(res.body.status).to.be.true;
  });

  it('failure- customerEmail not included in request body ', async () => {
    const res = await request(Server)
      .post('/api/tip/onchain')
      .send({ satoshis: 400, address: 'tvsdsdffdfd' })
      .expect(400);
    expect(res.body.message).to.eql(
      'The following parameters are all required for this route: customerEmail, satoshis, address'
    );
  });

  it('failure- satoshis not included in request body ', async () => {
    const res = await request(Server)
      .post('/api/tip/onchain')
      .send({ customerEmail: 'bamidele@gmail.com', address: 'terwrewere' })
      .expect(400);
    expect(res.body.message).to.eql(
      'The following parameters are all required for this route: customerEmail, satoshis, address'
    );
  });

  it('failure- address not included in request body ', async () => {
    const res = await request(Server)
      .post('/api/tip/onchain')
      .send({ customerEmail: 'elect@gmail.com', satoshis: 500 })
      .expect(400);
    expect(res.body.message).to.eql(
      'The following parameters are all required for this route: customerEmail, satoshis, address'
    );
  });
});

describe('initiate ln payment', () => {
  let createLnStub: any;
  beforeEach(() => {
    createLnStub = sinon
      .stub(sendLightningService, 'check')
      .returns(Promise.resolve(initiateLnPaymentSuccess));
  });

  afterEach(() => {
    createLnStub.restore();
  });

  it('success - success initiate ln payment', async () => {
    const res = await request(Server)
      .post('/api/tip/ln')
      .send({
        request:
          'lntb1500n1p3sma3jpp50zk3822q5xpeluyp4jlwa6ua2y2egl6t6qrw63ptm98yqes2futsdp42fjkzep6ypp9gseqvejk2ernyp6x2mr9vaexzmfqvd5xzmnwv4kq6cqzpgxqr23ssp58ecprkj0nlvdt36wmvngzmrf4kx74kx6yajfnl3e80hn3rwk3mns9qyyssq4g456cttt7l79hw5hewz8fqz8wfcg2kldu6jf8gguh78c4ssq3dhqfnzcp9fl39e0hytxcfcmr8ca90rzxmtx6zhkzfxdrp3zmmqkpqqhntnga',
      })
      .expect(200);
    expect(res.body.message.message).to.eql('Transaction summary');
    expect(res.body.message.status).to.be.true;
  });

  it('failure- request not included in request body ', async () => {
    const res = await request(Server)
      .post('/api/tip/ln')
      .send({ address: 'tvsdsdffdfd' })
      .expect(400);
    expect(res.body.message).to.eql(
      'The following parameters are all required for this route: request'
    );
  });
});

describe('pay ln invoice ', () => {
  let createLnStub: any;
  beforeEach(() => {
    createLnStub = sinon
      .stub(sendLightningService, 'payInvoice')
      .returns(Promise.resolve(payLnInvoiceSuccess));
  });

  afterEach(() => {
    createLnStub.restore();
  });

  it('success - success initiate ln payment', async () => {
    const res = await request(Server)
      .post('/api/tip/ln/pay')
      .send({
        reference: 'tvsdsdffdfd',
        customerEmail: 'mm@gmail.com',
        request:
          'lntb1500n1p3sma3jpp50zk3822q5xpeluyp4jlwa6ua2y2egl6t6qrw63ptm98yqes2futsdp42fjkzep6ypp9gseqvejk2ernyp6x2mr9vaexzmfqvd5xzmnwv4kq6cqzpgxqr23ssp58ecprkj0nlvdt36wmvngzmrf4kx74kx6yajfnl3e80hn3rwk3mns9qyyssq4g456cttt7l79hw5hewz8fqz8wfcg2kldu6jf8gguh78c4ssq3dhqfnzcp9fl39e0hytxcfcmr8ca90rzxmtx6zhkzfxdrp3zmmqkpqqhntnga',
      })
      .expect(200);
    console.log(res.body.message);
    expect(res.body.message.message).to.eql('Transaction summary');
    expect(res.body.message.status).to.be.true;
  });

  it('failure- request not included in request body ', async () => {
    const res = await request(Server)
      .post('/api/tip/ln/pay')
      .send({ reference: 'tvsdsdffdfd', customerEmail: 'mm@gmail.com' })
      .expect(400);
    expect(res.body.message).to.eql(
      'The following parameters are all required for this route: request, reference, customerEmail'
    );
  });

  it('failure- reference not included in request body ', async () => {
    const res = await request(Server)
      .post('/api/tip/ln/pay')
      .send({ address: 'tvsdsdffdfd', reference: 'wedfgfjhtredfver' })
      .expect(400);
    expect(res.body.message).to.eql(
      'The following parameters are all required for this route: request, reference, customerEmail'
    );
  });

  it('failure- customerEmail not included in request body ', async () => {
    const res = await request(Server)
      .post('/api/tip/ln/pay')
      .send({ address: 'tvsdsdffdfd', reference: 'erefeghytrew' })
      .expect(400);
    expect(res.body.message).to.eql(
      'The following parameters are all required for this route: request, reference, customerEmail'
    );
  });
});
