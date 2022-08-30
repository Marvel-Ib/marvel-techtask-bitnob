import axios from 'axios';
const API_URL = 'https://tipp-bitnob.herokuapp.com/api/tip/';
class TippService {
  checkOnchainAddress(data) {
    return axios
      .post(API_URL + "onchain/check", data)
      .then(response => {
        if (response) {
          console.log("success")
        }
        return response.data;
      });

  }

  sendOnchain(data) {
    return axios
      .post(API_URL + "onchain", data)
      .then(response => {
        if (response) {
          console.log("success")
        }
        return response.data;
      });

  }


  checkLnInvoice(data) {
    return axios
      .post(API_URL + "ln", data)
      .then(response => {
        if (response) {
          console.log("success")
        }
        return response.data;
      });

  }


  payLnInvoice(data) {
    return axios
      .post(API_URL + "ln/pay", data)
      .then(response => {
        if (response) {
          console.log("success")
        }
        return response.data;
      });

  }


}

export default new TippService();

