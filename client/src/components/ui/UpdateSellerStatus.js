import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UpdateSellerStatus = ({ data, show, handleClose }) => {
  function stateProgressBar() {
    switch (data?.status) {
      case "pending":
        return "col-3";
      case "approved":
        return "col-6";
      case "rejected":
        return "col-6";
      default:
        return;
    }
  }
  return (
    <Modal show={show} onHide={handleClose} size="lg">
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
              <div className="col-6 text-muted">Approved</div>
              <div className="col-3 text-muted">Rejected</div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="col-12 d-flex flex-row justify-content-evenly align-items-center">
          <Button className="btn btn-danger" onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button className="btn btn-warning" onClick={() => handleClose()}>
            Rejected
          </Button>
          <Button className="btn btn-success" onClick={() => handleClose()}>
            Accepted
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateSellerStatus;
