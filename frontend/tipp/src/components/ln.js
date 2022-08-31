import React, { useState } from 'react'
import { Button, Alert, Form } from 'react-bootstrap';
import cryptoRandomString from 'crypto-random-string';
import TippService from '../services/tipp'




export const Ln = () => {
  const [request, setRequest] = useState("");
  const [customerEmail, setCustomerEmail] = useState(false);
  const [unsureInvoice, setUnsureInvoice] = useState(true);
  const [failedInvoice, setFailedInvoice] = useState(false);
  const [heavyInvoice, setHeavyInvoice] = useState(false);
  const [invoiceDetail, setInvoiceDetail] = useState("");
  const [lnPayOutcome, setlnPayOutcome] = useState("");


  function setInvoice(e) {
    setRequest(e.target.value)

  }

  function emailChange(e) {
    setCustomerEmail(e.target.value)
  }

  // function addressChange(e) {

  //   setAddress(e.target.value)
  // }



  async function checkValidInvoice(e) {
    setFailedInvoice(false)
    setHeavyInvoice(false)
    e.preventDefault();
    console.log("clicked")
    const result = await TippService.checkLnInvoice(request)
    if (result === "Request failed with status code 400") {
      console.log("expired ..........ln invoice does not exist", result)
      setFailedInvoice(true)
    }
    else if (parseInt(result.message.satFee) > 15000) {
      setHeavyInvoice(true)
    }
    else {
      setUnsureInvoice(false)
      const detail = `your invoice name is ${result.message.description}, fee is ${result.message.satFee} and amount is ${result.message.satAmount}`
      setInvoiceDetail(detail)
      console.log(invoiceDetail, "ewee")
    }

  }

  async function sendSat(e) {
    e.preventDefault();
    const reference = cryptoRandomString({ length: 10 })
    console.log(reference, request, customerEmail, "check")
    const result = await TippService.payLnInvoice(request, reference, customerEmail)
    if (result === "Request failed with status code 400") {
      console.log("entered here")
      setlnPayOutcome("invoice has already been used")
    }
    else {
      setlnPayOutcome("invoice paid receipient will be notified via mail once confirmed")
    }
    setUnsureInvoice(true)
  }


  return (
    <div>
      <header className="App-header-center">
        {failedInvoice && <Alert variant='danger'>oops your invoice might have expired or is invalid </Alert>}
        {heavyInvoice && <Alert variant='danger'>oops your invoice is too expensive we have a limit of 15000 </Alert>}
        {!unsureInvoice && <Alert variant='success'>{invoiceDetail}</Alert>}
        {unsureInvoice && lnPayOutcome !== "" && <Alert variant='warning'>{lnPayOutcome}</Alert>}
        {unsureInvoice
          ? <Form onSubmit={checkValidInvoice}>
            <Form.Group controlId='formEmail'>
              <Form.Label>paste the testnet lightning invoice</Form.Label>
              <Form.Control onChange={setInvoice} placeholder='tc' required />
              <Form.Text className='text-muted'>
                may the sats be with you
              </Form.Text>
            </Form.Group>
            <Button type='submit' variant='secondary'>decode ln invoice</Button>
          </Form>
          :
          <Form onSubmit={sendSat}>
            <Form.Group controlId='formEmail'>
              <Form.Label>ln invoice</Form.Label>
              <Form.Control defaultValue={request} disabled />
            </Form.Group>

            <Form.Group controlId='formEmail'>
              <Form.Label>Enter Receipient Email</Form.Label>
              <Form.Control onChange={emailChange} type="email" placeholder='la@gmail.com' required />
            </Form.Group>
            <Button type="submit" variant='secondary'>send sats</Button>

          </Form>}
      </header>
    </div >
  )
}


