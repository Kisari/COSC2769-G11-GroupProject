import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Import Bootstrap Component
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Image
import productImage from "../uploads/1693844223095.jpg";

const ProductDetail = () => {
  const location = useLocation();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { number: 1, product: product }]);
  };

  // Load the cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save the cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    setProduct(location.state.product);
  }, []);

  return (
    <Container>
      <div className="container mt-5">
        <Row>
          <Col>
            <Container>
              <img
                src={productImage}
                className="Product image"
                alt="Product Image"
              />
            </Container>
          </Col>
          <Col>
            <h2>{product?.name}</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At sequi
              accusamus culpa vero autem ea reiciendis, possimus laudantium,
              facilis repellat nam dolore quod veritatis quisquam assumenda.
              Recusandae possimus consequatur rem.
            </p>
            <h3 className="text-danger mb-5">${product?.price}</h3>
            <div className="d-flex">
              <button
                className="btn btn-outline-secondary me-2"
                onClick={() => addToCart(product)}
              >
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
