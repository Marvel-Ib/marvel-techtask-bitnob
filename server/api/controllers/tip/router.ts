import express from 'express';
import controller from './controller';
import requiredBody from '../../middlewares/required.handler';
import webhookAuthentication from '../../middlewares/webhook.handler';
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
  )
  .post('/ln', requiredBody(['request']), controller.checkLnInvoice)
  .post(
    '/ln/pay',
    requiredBody(['request', 'reference', 'customerEmail']),
    controller.payLnInvoice
  )
  .post('/webhook', webhookAuthentication(), controller.receiveWebhook);
