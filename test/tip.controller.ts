import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Server from '../server';

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
