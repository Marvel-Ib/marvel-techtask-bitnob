import React, { useState } from 'react'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import TippService from '../services/tipp'




export const Onchain = () => {
  const [Email, setEmail] = useState("");
  const [Satoshi, setSatoshi] = useState("");
  const [satLimit, setSatLimit] = useState(false);
  const [Address, setAddress] = useState("");
  const [unsureAddress, setUnsureAddress] = useState(true);
  const [failedAlert, setFailedAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  function emailChange(e) {
    setEmail(e.target.value)
  }

  function satoshiChange(e) {
    setSatoshi(e.target.value)
  }

  function addressChange(e) {

    setAddress(e.target.value)
  }


  async function checkValidAddress(e) {
    setFailedAlert(false)
    setSuccessAlert(false)
    e.preventDefault();
    const result = await TippService.checkOnchainAddress(Address)
    console.log("successfully posted", result)
    if (result.message) {
      setUnsureAddress(false)
    } else {
      setFailedAlert(true)
    }
  }

  async function sendSat(e) {
    setSatLimit(false)
    e.preventDefault();
    if (parseInt(Satoshi) < 500 || parseInt(Satoshi) > 10000) {
      setSatLimit(true)
    } else {
      const result = await TippService.sendOnchain(Email, parseInt(Satoshi), Address)
      if (result.status === "pending") {
        setSuccessAlert(true)
        setUnsureAddress(true)

      }
    }
  }


  return (
    <div>
      <header className="App-header-center">
        {failedAlert && <Alert variant='danger'>oops invalid address </Alert>}
        {satLimit && <Alert variant="danger"> check you are within the limit (500-10000) </Alert>}
        {successAlert && <Alert variant="success">
          <Alert.Heading>thank you for using tipp</Alert.Heading>
          <hr />
          <p className="mb-0">
            your sats has been sent and the receiver will be alerted via mail once the transaction is
            confirmed
          </p>
        </Alert>}

        {unsureAddress
          ? <Form onSubmit={checkValidAddress}>
            <Form.Group controlId='formEmail'>
              <Form.Label>paste the signet/testnet address</Form.Label>
              <Form.Control onChange={addressChange} placeholder='tc' required />
              <Form.Text className='text-muted'>
                may the sats be with you
              </Form.Text>
            </Form.Group>
            <Button type='submit' variant='secondary'>check address</Button>
          </Form>
          :
          <Form onSubmit={sendSat}>
            <Form.Group controlId='formEmail'>
              <Form.Label>btc address</Form.Label>
              <Form.Control defaultValue={Address} disabled />
            </Form.Group>

            <Form.Group controlId='formEmail'>
              <Form.Label>Enter Receipient Email</Form.Label>
              <Form.Control onChange={emailChange} type="email" placeholder='la@gmail.com' required />
            </Form.Group>

            <Form.Group controlId='formPassword'>
              <Form.Label>satoshi (500- 10000)</Form.Label>
              <Form.Control type="number" onChange={satoshiChange} placeholder='500' required />
            </Form.Group>

            <Button type="submit" variant='secondary'>send sats</Button>

          </Form>}
      </header>
    </div >
  )
}


