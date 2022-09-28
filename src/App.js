import './App.css';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ImgOverlay from './components/ImageOverlay';
import StoreListings from './components/StoreListings';

function App() {
  return (
    <div className="App">
      <>
        <Navbar >
          <Container>



            <Navbar.Brand href="#home" >
              <img
                alt="Instacart logo"
                src="/instacart2.png"
                // width="100"
                height="100"
                className="d-inline-flex align-top"
              />{' '}
            </Navbar.Brand>
            <Nav.Link href="#LogIn" style={{ marginLeft: "60%" }}>Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>
          </Container>
        </Navbar>
        <ImgOverlay />

        <div className='title' style={{ textAlign: "center" }}>
          <h2>Browse stores in Houston</h2>
        </div>

        <StoreListings />
      </>
    </div>
  );
}

export default App;
