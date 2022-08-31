import React from 'react'
import { Carousel } from 'react-bootstrap';
export const Home = () => {
  return (
    <div>
      <header className="App-header">
        <h1>Welcome to Tipp</h1>
        <Carousel>
          <Carousel.Item>
            <img
              src='https://picsum.photos/id/181/600/600'
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 color='red'>overview of what we offer</h3>
              <p>May the sats be with you</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src='https://picsum.photos/id/1058/600/600'
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>send sats onchain to an address</h3>
              <p>pay for that match ticket</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src='https://picsum.photos/id/194/600/600'
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>send sats via lightning</h3>
              <p>
                Pay for your everyday needs
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </header>
    </div>
  )
}
