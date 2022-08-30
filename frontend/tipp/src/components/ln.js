import React from 'react'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

export const Ln = () => {
  const c = true

  return (
    <div>
      <header className="App-header">
        {c
          ? <Form>
            <Form.Group controlId='formEmail'>
              <Form.Label>paste address</Form.Label>
              <Form.Control type="email" placeholder='la@gmail.com' />
              <Form.Text className='text-muted'>
                never send sats ooooo
              </Form.Text>
            </Form.Group>
            <Button variant='secondary'>select</Button>
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
                    never send sats
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
