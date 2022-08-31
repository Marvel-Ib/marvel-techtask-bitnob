import axios from 'axios';
import nodemailer from 'nodemailer';

class Base {
  apiKey: any;
  baseUrl: any;

  constructor() {
    this.apiKey = process.env.SECRET_KEY;
    this.baseUrl = process.env.BASE_URL;

    if (!this.apiKey) {
      throw new Error('alaye you forgot  SECRET_KEY env');
    }

    if (!this.baseUrl) {
      throw new Error('BASE_URL env not included ');
    }
  }

  async send(url: string, method: any, data: any) {
    try {
      const response = await axios({
        method: method,
        url: this.baseUrl + url,
        data: data,
        headers: {
          Authorization: 'Bearer ' + this.apiKey,
        },
      });
      return response.data;
    } catch (error: any) {
      console.log(error.response.data, 'check');
      if (error.response) {
        throw new Error(error.response.data.message);
      }
      return error.message;
    }
  }

  async handleWebhook(transactionId: string, channel: string, amount: string) {
    // customer id ,,, sat amount,, bitcoin/ln address ///lightning/bitcoin
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: process.env.USER, pass: process.env.PASSWORD },
    });
    // const re = await transporter.sendMail(email);
    const url = `/transactions/${transactionId}`;
    const method = 'get';

    try {
      const response = await this.send(url, method, {});
      const email = {
        from: 'marvellous ibironke',
        to: response.data.customer.email,
        subject: 'You just received satoshis ',
        html: `<h1>You have received ${amount} sats via ${channel} enjoy your tip</h1>`,
      };
      await transporter.sendMail(email);
      return Promise.resolve({ message: 'sent' });
    } catch (error) {
      return Promise.reject({ ee: error.message });
    }
  }
}

export { Base };
