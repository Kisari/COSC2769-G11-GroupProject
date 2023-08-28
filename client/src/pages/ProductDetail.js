import React from "react";

// Import Bootstrap Component
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Image

const ProductDetail = () => {
  return (
    <Container lg>
      <div className="container mt-5">
        <Row>
          <Col>
            <Container>
              <Image src="https://placehold.co/300" />
            </Container>
          </Col>
          <Col>
            <h2>Product Title</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At sequi
              accusamus culpa vero autem ea reiciendis, possimus laudantium,
              facilis repellat nam dolore quod veritatis quisquam assumenda.
              Recusandae possimus consequatur rem.
            </p>
            <h3 className="text-danger mb-5">$99.99</h3>
            <div className="d-flex">
              <button className="btn btn-outline-secondary me-2">
                Add to Cart
              </button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ProductDetail;
