import React, { useState } from 'react'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import TippService from '../services/tipp'




export const Onchain = () => {
  const [Email, setEmail] = useState("");
  const [Satoshis, setSatoshi] = useState("");
  const [Address, setAddress] = useState("");
  const [unsureAddress, setUnsureAddress] = useState(true);

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
    e.preventDefault();
    console.log("pressed");
    const oshey = new FormData();
    oshey.append("address", Address)

    const result = await TippService.checkOnchainAddress(oshey)
    console.log("successfully posted", result)
  }


  return (
    <div>
      <header className="App-header-center">
        {unsureAddress
          ? <Form onSubmit={checkValidAddress}>
            <Form.Group controlId='formEmail'>
              <Form.Label>paste the signet/testnet address</Form.Label>
              <Form.Control placeholder='tc' required />
              <Form.Text className='text-muted'>
                may the sats be with you
              </Form.Text>
            </Form.Group>
            <Button type='submit' variant='secondary'>check address</Button>
          </Form>
          :
          <Form>
            <Form.Group controlId='formEmail'>
              <Form.Label>sendgangan</Form.Label>
              <Form.Control type="email" placeholder='la@gmail.com' />
              <Form.Text className='text-muted'>
                never send sats ooooo
              </Form.Text>
            </Form.Group>

            <Row>
              <Col md>
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder='la@gmail.com' />
                  <Form.Text className='text-muted'>
                    never send sats ooooo
                  </Form.Text>
                </Form.Group></Col>
              <Col md>
                <Form.Group controlId='formPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder='Password' />
                  <Form.Text className='text-muted'>
                    never send sats ooooo
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>


            <Button variant='secondary'>select</Button>

          </Form>}
      </header>
    </div>
  )
}


