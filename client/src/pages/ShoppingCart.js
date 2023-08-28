import React, { useState } from "react";
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

function ShoppingCart() {
  const [quantities, setQuantities] = useState([1, 1, 1]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const itemPrice = 44.0; // Price for each item
  const shippingFee = 5.0; // Shipping fee

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity === 0) {
      const newQuantities = [...quantities];
      newQuantities.splice(index, 1); // Remove the item at the specified index
      setQuantities(newQuantities);
    } else {
      const newQuantities = [...quantities];
      newQuantities[index] = newQuantity;
      setQuantities(newQuantities);
    }
  };

  const handleDeleteItem = (index) => {
    const newQuantities = [...quantities];
    newQuantities.splice(index, 1); // Remove the item at the specified index
    setQuantities(newQuantities);
  };

  const handlePurchase = () => {
    // Your registration logic here

    // After successful registration
    setShowSuccessAlert(true);
  };

  const calculateTotalPrice = () => {
    const totalPrice = quantities.reduce(
      (total, quantity) => total + quantity * itemPrice,
      0
    );
    return totalPrice.toFixed(2); // Format to two decimal places
  };

  const calculateTotalPriceWithShipping = () => {
    const totalPrice = quantities.reduce(
      (total, quantity) => total + quantity * itemPrice,
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
                        <h6 className="mb-0 text-muted">3 items</h6>
                      </div>
                      <hr className="my-4" />

                      {quantities.map((quantity, index) => (
                        <div
                          className="row mb-4 d-flex justify-content-between align-items-center"
                          key={index}
                        >
                          <Col md={2} lg={2} xl={2}>
                            <Image
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                              fluid
                              rounded
                            />
                          </Col>
                          <Col md={3} lg={3} xl={3}>
                            <h6 className="text-muted">Shirt</h6>
                            <h6 className="text-black mb-0">Cotton T-shirt</h6>
                          </Col>
                          <Col md={3} lg={3} xl={2} className="d-flex">
                            <Button
                              variant="link"
                              className="px-2"
                              onClick={() =>
                                handleQuantityChange(index, quantity - 1)
                              }
                            >
                              <i className="bi bi-dash"></i>
                            </Button>
                            <Form.Control
                              id={`form${index}`}
                              min="0"
                              name="quantity"
                              value={quantity}
                              type="number"
                              className="form-control form-control-sm"
                              onChange={(e) =>
                                handleQuantityChange(
                                  index,
                                  parseInt(e.target.value)
                                )
                              }
                            />
                            <Button
                              variant="link"
                              className="px-2"
                              onClick={() =>
                                handleQuantityChange(index, quantity + 1)
                              }
                            >
                              <i className="bi bi-plus-lg"></i>
                            </Button>
                          </Col>
                          <Col md={3} lg={2} xl={2} className="offset-lg-1">
                            <h6 className="mb-0">€ 44.00</h6>
                          </Col>
                          <Col md={1} lg={1} xl={1} className="text-end">
                            <a
                              href="#!"
                              className="text-muted"
                              onClick={() => handleDeleteItem(index)}
                            >
                              <i className="bi bi-x"></i>
                            </a>
                          </Col>
                        </div>
                      ))}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <a href="#!" className="text-body">
                            <i class="bi bi-arrow-left"></i>
                            Back to shop
                          </a>
                        </h6>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} className="bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items 3</h5>
                        <h5>{calculateTotalPrice()} VND</h5>
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
                        <h5>
                          {calculateTotalPriceWithShipping()}
                          VND
                        </h5>
                      </div>

                      <Button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                        onClick={handlePurchase}
                      >
                        Purchase
                      </Button>
                    </div>
                  </Col>
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
