import express from 'express';
import controller from './controller';
export default express
  .Router()
  .post('/onchain/check', controller.checkOnchainAddress)
  .post('/onchain', controller.sendOnchain);
