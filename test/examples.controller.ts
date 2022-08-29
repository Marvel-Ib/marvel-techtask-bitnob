import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Server from '../server';

describe('My Check', () => {
  it('should get all examples', () =>
    request(Server)
      .get('/api/v1/')
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body).to.be.an('array').of.length(2);
      }));
});
