import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Onchain } from './components/Onchain';
import { Ln } from './components/ln';
import { Home } from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Tipp</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/onchain">Send sats Onchain</Nav.Link>
              <Nav.Link as={Link} to="/ln">Send sats on Lightning</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/onchain" element={<Onchain />} />
            <Route path="/ln" element={<Ln />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
