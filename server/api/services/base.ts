import axios from 'axios';

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
}

export { Base };
