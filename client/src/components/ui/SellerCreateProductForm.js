import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FormInput from "./FormInput";

const SellerCreateProductForm = ({ show, handleClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("asd");
  };
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Modal.Header closeButton>
          <Modal.Title className="ms-auto">Create Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormInput
            label={"Product Name"}
            placeholder={"Enter product name"}
            type={"text"}
          ></FormInput>
        </Modal.Body>
        <Modal.Footer>
          <div className="col-12 d-flex flex-row justify-content-evenly align-items-center">
            <Button
              type="button"
              className="btn btn-danger"
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
            <Button className="btn btn-success" type="submit">
              Create
            </Button>
          </div>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default SellerCreateProductForm;
