import { Container } from "react-bootstrap";

const MyFooter = function () {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Container fluid className="p-0">
        <footer className="bg-dark text-light text-center py-3">
          <p>La Magica Libreria - {currentYear}</p>
        </footer>
      </Container>
    </>
  );
};

export default MyFooter;
