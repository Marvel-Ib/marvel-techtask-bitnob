import React from 'react'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
export const Home = () => {
  return (
    <div>
      <header className="App-header">
        <h1>this home resting</h1>
        <Form>
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
        </Form>

        <Card className='mb-3' style={{ color: "#000" }}>
          <Card.Img src='https://picsum.photos/200/100' />
          <Card.Body>
            <Card.Title>
              card example
            </Card.Title>
            <Card.Text>
              This is an example of react bootstrap cards
            </Card.Text>
            <Button variant='primary'>Read more</Button>

          </Card.Body>
        </Card>

        <Breadcrumb>
          <Breadcrumb.Item>wow</Breadcrumb.Item>
          <Breadcrumb.Item>wow1</Breadcrumb.Item>
          <Breadcrumb.Item>ok</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant='primary'>ok test </Alert>
        <Button>Bootstrap button</Button>
      </header>
    </div>
  )
}
