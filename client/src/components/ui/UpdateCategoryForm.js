import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import FormInput from "./FormInput.js";

const updateCategoryForm = ({ data, show, handleClose }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    console.log("Submit creating categories form", e);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Modal.Header closeButton>
          <Modal.Title>Updating #{data?._id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormInput
            label={"Category Name"}
            placeholder={"Enter category name"}
            type={"text"}
            name={"name"}
          ></FormInput>
          <FormInput
            label={"Category Name"}
            placeholder={"Enter category name"}
            type={"text"}
            name={"name"}
          ></FormInput>
          <FormInput
            label={"Category Name"}
            placeholder={"Enter category name"}
            type={"text"}
            name={"name"}
          ></FormInput>
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Create
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default updateCategoryForm;
