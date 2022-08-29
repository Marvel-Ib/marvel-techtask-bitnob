import express from 'express';
import controller from './controller';
import requiredBody from '../../middlewares/required.handler';
export default express
  .Router()
  .post(
    '/onchain/check',
    requiredBody(['address']),
    controller.checkOnchainAddress
  )
  .post(
    '/onchain',
    requiredBody(['customerEmail', 'satoshis', 'address']),
    controller.sendOnchain
  );
