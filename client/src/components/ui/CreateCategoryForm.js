import React, { useState, useEffect } from "react";

import { getAllCategory } from "../../action/category.js";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormInput from "./FormInput.js";

const CreateCategoryForm = ({ data, show, handleClose }) => {
  const [allCats, setAllCats] = useState([]);
  const [currentChoice, setCurrentChoice] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    console.log("Submit creating categories form", e);
  };
  useEffect(() => {
    async function getAllCategoryData() {
      await getAllCategory().then((res) => {
        if (res) {
          setAllCats(res);
        }
      });
    }
    getAllCategoryData();
  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Modal.Header closeButton>
          <Modal.Title>Category ID : {data?._id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Creating a new category <b className="fw-bolder">{data?.name}</b>{" "}
          below
          <FormInput
            label={"Category Name"}
            placeholder={"Enter category name"}
            type={"text"}
            name={"name"}
          ></FormInput>
          <select
            className="form-select mb-3"
            name="category"
            value={currentChoice}
            required
            onChange={(e) => setCurrentChoice(e.target.value)}
          >
            <option value={""} disabled>
              Select a category
            </option>
            {allCats?.map((cat) => {
              return (
                <option value={cat?._id} key={cat?._id}>
                  {cat?.name}
                </option>
              );
            })}
          </select>
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

export default CreateCategoryForm;
