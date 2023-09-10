import React, { useState, useEffect } from "react";

import { getAllCategory, createCategory } from "../../action/category.js";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FormInput from "./FormInput.js";

const CreateCategoryForm = ({ data, show, handleClose, isSub }) => {
  const [allCats, setAllCats] = useState([]);
  const [currentChoice, setCurrentChoice] = useState("");
  const [atrInput, setAtrInpur] = useState("");
  const [atrList, setAtrList] = useState([]);
  const navigate = useNavigate();

  const handleAddAtr = (atr) => {
    if (!atrList?.includes(atr)) {
      setAtrList([...atrList, atr]);
    }
  };

  const handleRemoveAtr = (atr) => {
    if (atrList?.includes(atr)) {
      setAtrList(atrList.filter((elems) => elems !== atr));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    var idx = 0;
    var payload = {};

    for (let [key, value] of formData.entries()) {
      if (idx === 3 && !value) {
        continue;
      }
      if (idx === 2) {
        payload = { ...payload, [key]: atrList };
      } else {
        payload = { ...payload, [key]: value };
      }
      idx += 1;
    }

    await createCategory(payload).then((res) => {
      if (res?.category) {
        navigate(0);
      }
    });
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
          <FormInput
            label={"Category Description"}
            placeholder={"Enter category description"}
            type={"text"}
            name={"description"}
          ></FormInput>
          <div className="col-12 d-flex flex-row justify-content-center align-items-center gap-2">
            <div className="col">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Category Attribute</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the attribute name you want"
                  required
                  name={"attributes"}
                  onChange={(e) => setAtrInpur(e.target.value)}
                />
              </Form.Group>
            </div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => handleAddAtr(atrInput)}
            >
              Add
            </button>
          </div>
          <div className="col-12 d-flex flex-row flex-wrap gap-2 mb-3">
            {atrList?.map((item, index) => {
              return (
                <span
                  className="badge bg-secondary d-flex flex-row align-items-center"
                  key={index}
                >
                  {item}
                  <button
                    className="btn-sm btn text-white"
                    type="button"
                    onClick={() => handleRemoveAtr(item)}
                  >
                    -
                  </button>
                </span>
              );
            })}
          </div>
          {!isSub && (
            <select
              className="form-select mb-3"
              name="parents"
              value={currentChoice}
              onChange={(e) => setCurrentChoice(e.target.value)}
            >
              <option value={""} disabled>
                Select a parent category
              </option>
              {allCats?.map((cat) => {
                return (
                  <option value={cat?._id} key={cat?._id}>
                    {cat?.name}
                  </option>
                );
              })}
            </select>
          )}
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
