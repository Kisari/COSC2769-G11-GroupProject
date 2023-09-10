import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const OrderPreview = ({ data, show, handleShow, mode }) => {
  function stateProgressBar() {
    switch (data?.status) {
      case "pending":
        return "col-3";
      case "accepted":
        return "col-6";
      case "rejected":
        return "col-6";
      default:
        return;
    }
  }
  return (
    <Modal show={show} onHide={handleShow}>
      <Modal.Header closeButton>
        <Modal.Title className="ms-auto">#{data?.id} Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="col-12">
            <div className="progress col-12">
              <div
                className={`progress-bar ${stateProgressBar()} bg-warning`}
                role="progressbar"
              ></div>
            </div>
            <div className="mt-3 col-12 d-flex flex-row text-center">
              <div className="col-3 text-muted">Pending</div>
              <div className="col-6 text-muted">Accepted</div>
              <div className="col-3 text-muted">Shipping</div>
            </div>
          </div>
          <div className="col-12 d-flex flex-column my-3">
            <div className="d-flex flex-row justify-content-between align-items-center p-2 text-start fw-bold">
              <div className="col-3">Name</div>
              <div className="col-6">Description</div>
              <div className="col-2">Quantity</div>
            </div>
            {data?.orderItems?.map((product, index) => {
              return (
                <div
                  key={index}
                  className="d-flex flex-row justify-content-between align-items-center p-2 text-start text-secondary"
                >
                  <div className="col-3">{product?.title}</div>
                  <div className="col-6">{product?.description}</div>
                  <div className="col-2">{product?.quantity}</div>
                </div>
              );
            })}
          </div>
          <div className="col-12 d-flex flex-row justify-content-between align-items-center">
            <div className="fw-bold">Total</div>
            <div className="text-secondary">{data?.totalPrice}</div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {mode && mode === "View" && (
          <Button
            className="w-100"
            variant="primary"
            type="button"
            onClick={() => handleShow()}
          >
            Ok
          </Button>
        )}
        {mode && mode === "Update" && (
          <div className="col-12 d-flex flex-row justify-content-between">
            <Button
              className="col-5"
              variant="warning"
              type="button"
              onClick={() => handleShow()}
            >
              Cancel
            </Button>
            <Button
              className="col-5"
              variant="success"
              type="submit"
              onClick={() => handleShow()}
            >
              Update
            </Button>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default OrderPreview;
