import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CreateCategoryForm = ({ data, show, handleClose }) => {
  const handleSubmit = (e) => {
    console.log("Submit creating categories form", e);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <form onSubmit={() => handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Category ID : {data?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Creating a new category below{" "}
          <b className="fw-bolder">{data?.name}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default CreateCategoryForm;
