import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Image,
  Dropdown,
  Alert,
} from "react-bootstrap";

import productImage from "../assets/images/producttest.webp";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [cartID, setCartID] = useState("");

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const shippingFee = 5.0; // Shipping fee

  // Load quantities from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Load the cart from localStorage when the component mounts
  useEffect(() => {
    const storedCardID = localStorage.getItem("cartID");
    if (storedCardID) {
      setCartID(JSON.parse(storedCardID));
    }
  }, []);

  // Save the cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Handle checkout
  const handleCheckout = async () => {
    try {
      // Make an API request to trigger the checkout
      const response = await axios.post(
        "http://localhost:4000/api/v1/checkout"
      );
      setCart([]);
      console.log(response.data);
      setShowSuccessAlert(true);
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  const handleQuantityChange = async (data, number) => {
    // Call the addToCart API
    const response = await axios.post("http://localhost:4000/api/v1/cart", {
      productId: data.product._id,
      quantity: number,
    });
    // Handle the API response as needed
    console.log("API Response:", response.data);
    if (number === 0) {
      setCart(cart.filter((item) => item.product._id !== data.product._id));
      // Call the remove product from cart API
    }
    // Check if the product already exists in the cart
    else {
      const existingProductIndex = cart.findIndex(
        (item) => item.product._id === data.product._id
      );
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].number = number;
      setCart(updatedCart);
    }
  };

  const handleDeleteItem = (data) => {
    setCart(cart.filter((item) => item.product._id !== data.product._id));
  };

  const handlePurchase = () => {
    // Your registration logic here

    // After successful registration
    setShowSuccessAlert(true);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce(
      (total, item) => total + item.product.price * item.number,
      0
    );
    return totalPrice.toFixed(2); // Format to two decimal places
  };

  const calculateTotalPriceWithShipping = () => {
    const totalPrice = cart.reduce(
      (total, item) => total + item.product.price * item.number,
      0
    );
    return (totalPrice + shippingFee).toFixed(2); // Add shipping fee and format to two decimal places
  };

  return (
    <section
      className="h-100 h-custom"
      style={{ backgroundColor: "#fdccbc", minHeight: "100vh" }}
    >
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col lg={12}>
            <Card
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <Card.Body className="p-0">
                <Row className="g-0">
                  <Col lg={8}>
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </h1>
                        <h6 className="mb-0 text-muted">{cart.length} items</h6>
                      </div>
                      <hr className="my-4" />

                      {cart.map((data, index) => (
                        // Product Component in Shopping
                        <div
                          className="row mb-4 d-flex justify-content-between align-items-center"
                          key={data.product._id}
                        >
                          <Col md={2} lg={2} xl={2}>
                            <Image src={productImage} fluid rounded />
                          </Col>
                          <Col md={3} lg={3} xl={3}>
                            <h6 className="text-black mb-0">
                              {data.product.name}
                            </h6>
                          </Col>
                          <Col md={3} lg={3} xl={2} className="d-flex">
                            {/* Minue Button */}
                            <Button
                              variant="link"
                              className="px-2"
                              onClick={() =>
                                handleQuantityChange(data, data.number - 1)
                              }
                            >
                              <i className="bi bi-dash"></i>
                            </Button>
                            <Form.Control
                              style={{
                                width: "50px",
                              }}
                              id={`form${index}`}
                              min="0"
                              name="quantity"
                              value={data.number}
                              type="number"
                              className="form-control form-control-sm"
                              onChange={(e) =>
                                handleQuantityChange(
                                  data.number,
                                  parseInt(e.target.value)
                                )
                              }
                            />
                            {/* Plus Button */}
                            <Button
                              variant="link"
                              className="px-2"
                              onClick={() =>
                                handleQuantityChange(data, data.number + 1)
                              }
                            >
                              <i className="bi bi-plus-lg"></i>
                            </Button>
                          </Col>
                          <Col md={3} lg={2} xl={2} className="offset-lg-1">
                            <h6 className="mb-0">$ {data.product.price}</h6>
                          </Col>
                          <Col md={1} lg={1} xl={1} className="text-end">
                            <a
                              href="#!"
                              className="text-muted"
                              onClick={() => handleDeleteItem(data)}
                            >
                              <i className="bi bi-x"></i>
                            </a>
                          </Col>
                        </div>
                      ))}

                      <hr className="my-4" />

                      {/* Back to  shop button */}
                      <div className="pt-5">
                        <h6 className="mb-0">
                          <a href="#!" className="text-body">
                            <i className="bi bi-arrow-left"></i>
                            Back to shop
                          </a>
                        </h6>
                      </div>
                    </div>
                  </Col>

                  {/* Summary Part Start */}
                  <Col lg={4} className="bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items {cart.length}</h5>
                        <h5>{calculateTotalPrice()} $</h5>
                      </div>

                      <h5 className="text-uppercase mb-3">Shipping</h5>

                      <div className="mb-4 pb-2">
                        <Dropdown className="select">
                          <Dropdown.Toggle
                            variant="primary"
                            id="dropdown-basic"
                          >
                            Standard-Delivery- €5.00
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#!">Option 1</Dropdown.Item>
                            <Dropdown.Item href="#!">Option 2</Dropdown.Item>
                            <Dropdown.Item href="#!">Option 3</Dropdown.Item>
                            <Dropdown.Item href="#!">Option 4</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <h5 className="text-uppercase mb-3">Give code</h5>

                      <div className="mb-5">
                        <Form.Group
                          controlId="form3Examplea2"
                          className="form-outline"
                        >
                          <Form.Control
                            type="text"
                            className="form-control form-control-lg"
                          />
                          <Form.Label className="form-label">
                            Enter your code
                          </Form.Label>
                        </Form.Group>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>{calculateTotalPriceWithShipping()}$</h5>
                      </div>

                      <Button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                        onClick={handleCheckout}
                      >
                        Purchase
                      </Button>
                    </div>
                  </Col>
                  {/* Summary Part End */}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* Success Alert */}
      <Alert
        variant="success"
        show={showSuccessAlert}
        onClose={() => setShowSuccessAlert(false)}
        dismissible
        style={{
          position: "fixed",
          top: 20,
          right: 30,
          zIndex: 1000,
          width: "300px", // Set the width of the alert
        }}
      >
        <div>Purchase successful!</div>
      </Alert>
    </section>
  );
}

export default ShoppingCart;
