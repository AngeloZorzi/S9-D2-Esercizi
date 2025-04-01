import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CustomNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">LA MAGICA LIBRERIA</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Best Sellers</Nav.Link>
            <Nav.Link href="#features">Generi</Nav.Link>
            <Nav.Link href="#pricing">On Sale</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default CustomNavbar;
