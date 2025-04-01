import { Card, Container, Row, Col } from "react-bootstrap";
import booksData from "./data/horror.json";

const AllTheBooks = () => {
  return (
    <Container className="scroll">
      <Row className="g-4">
        {booksData.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
