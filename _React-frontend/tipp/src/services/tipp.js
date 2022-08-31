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


  checkLnInvoice(request) {
    const data = { request }
    return axios
      .post(API_URL + "ln", data)
      .then(response => {
        if (response) {
          console.log("success")
        }
        return response.data;
      }).catch((err) => {
        console.log(err, "abeg")
        return err.message
      })

  }


  payLnInvoice(request, reference, customerEmail) {
    const data = { request, reference, customerEmail }
    return axios
      .post(API_URL + "ln/pay", data)
      .then(response => {
        if (response) {
          console.log("success")
        }
        return response.data;
      }).catch((err) => {
        console.log(err, "abeg")
        return err.message
      })
  }


}

export default new TippService();

