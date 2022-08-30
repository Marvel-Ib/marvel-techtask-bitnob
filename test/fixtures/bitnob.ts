export const onChainSuccess = {
  status: true,
  message: 'Transaction successfully submitted',
  data: {
    id: '1cde64d6-b9c0-4cdf-990e-47d47bb31ca6',
    createdAt: '2022-08-30T00:37:33.422Z',
    updatedAt: '2022-08-30T00:37:33.422Z',
    reference: 'ddde8b4d3a84',
    amount: 0.61,
    fees: 0.61,
    btcFees: 0.00003005,
    btcAmount: 0.00003,
    satFees: 3005,
    satAmount: 3000,
    spotPrice: 20217.41,
    address: 'tb1q9h0yjdupyfpxfjg24rpx755xrplvzd9hz2nj7v',
    action: 'send_bitcoin',
    type: 'debit',
    status: 'pending',
    channel: 'onchain',
    companyId: 'a1fd406c-48f5-4fcd-ac8c-7f8f3f911635',
    customerId: '0cf31339-b4e2-41bd-850b-26f238169c62',
  },
};

export const initiateLnPaymentSuccess = {
  status: true,
  message: 'Transaction summary',
  data: {
    request:
      'lntb1500n1p3sma3jpp50zk3822q5xpeluyp4jlwa6ua2y2egl6t6qrw63ptm98yqes2futsdp42fjkzep6ypp9gseqvejk2ernyp6x2mr9vaexzmfqvd5xzmnwv4kq6cqzpgxqr23ssp58ecprkj0nlvdt36wmvngzmrf4kx74kx6yajfnl3e80hn3rwk3mns9qyyssq4g456cttt7l79hw5hewz8fqz8wfcg2kldu6jf8gguh78c4ssq3dhqfnzcp9fl39e0hytxcfcmr8ca90rzxmtx6zhkzfxdrp3zmmqkpqqhntnga',
    satFee: 20,
    expiry: '2022-08-30T14:36:18.000Z',
    satAmount: 150,
    is_expired: false,
    description: 'Read: BTC feeds telegram channel\r',
    btcFee: 2e-7,
    fee: 0,
    btcAmount: 0.0000015,
    amount: 0.03,
  },
};

export const payLnInvoiceSuccess = {
  status: true,
  message: 'Transaction summary',
  data: {
    id: 'c7d74630-64b1-4e19-95c7-620fd414ae0b',
    createdAt: '2022-08-30T11:38:02.676Z',
    updatedAt: '2022-08-30T11:38:02.676Z',
    reference: 'wwwwwwwwesnjsanasjas',
    amount: 0.03,
    fees: 0,
    btcFees: 2e-7,
    btcAmount: 0.0000015,
    satFees: 20,
    satAmount: 150,
    spotPrice: 20375.85,
    action: 'send_bitcoin',
    type: 'debit',
    status: 'pending',
    channel: 'lightning',
    paymentRequest:
      'lntb1500n1p3sma3jpp50zk3822q5xpeluyp4jlwa6ua2y2egl6t6qrw63ptm98yqes2futsdp42fjkzep6ypp9gseqvejk2ernyp6x2mr9vaexzmfqvd5xzmnwv4kq6cqzpgxqr23ssp58ecprkj0nlvdt36wmvngzmrf4kx74kx6yajfnl3e80hn3rwk3mns9qyyssq4g456cttt7l79hw5hewz8fqz8wfcg2kldu6jf8gguh78c4ssq3dhqfnzcp9fl39e0hytxcfcmr8ca90rzxmtx6zhkzfxdrp3zmmqkpqqhntnga',
    companyId: 'a1fd406c-48f5-4fcd-ac8c-7f8f3f911635',
    customerId: '0cf31339-b4e2-41bd-850b-26f238169c62',
  },
};
