import axios from 'axios';
const API_URL = 'https://tipp-bitnob.herokuapp.com/api/tip/';
class TippService {
  checkOnchainAddress(address) {
    const data = { address };
    return axios
      .post(API_URL + "onchain/check", data)
      .then(response => {
        if (response) {
          console.log("success")
        }
        return response.data;
      }).catch((err) => {
        console.log(err, "abeg")
      })

  }

  sendOnchain(customerEmail, satoshis, address) {
    const data = { customerEmail, satoshis, address }
    return axios
      .post(API_URL + "onchain", data)
      .then(response => {
        if (response) {
          console.log("success")
        }
        return response.data;
      }).catch((err) => {
        console.log(err, "abeg")
      })

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

