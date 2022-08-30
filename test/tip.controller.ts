import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Server from '../server';
import * as sinon from 'sinon';
import sendOnchain from './../server/api/services/sendOnchain.services';
import { onChainSuccess } from './fixtures/bitnob';

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
