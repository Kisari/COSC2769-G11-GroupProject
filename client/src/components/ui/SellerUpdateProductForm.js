import React, { useState, useEffect } from "react";

import { updateProduct } from "../../action/product";
import { getAllCategory } from "../../action/category";

import { useAuth } from "../../hook/AuthHook";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FormInput from "./FormInput";

const SellerUpdateProductForm = ({ data, show, handleClose }) => {
  const [file, setFile] = useState();
  const [allCats, setAllCats] = useState([]);
  const [currentChoice, setCurrentChoice] = useState("");
  const { user } = useAuth();

  const handleSetFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    var payload = {};
    var atr = {};
    var idx = 1;
    for (let [key, value] of formData.entries()) {
      if (idx > 5) {
        if (idx === 6) {
          var array = [];
          array.push(value);
          payload = { ...payload, [key]: array };
        } else {
          atr = { ...atr, [key]: value };
        }
      } else {
        payload = { ...payload, [key]: value };
      }
      idx += 1;
    }
    payload = { ...payload, attributes: atr };

    console.log(payload);

    await updateProduct(data?._id, payload).then((res) => {
      console.log(res);
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
    <Modal show={show} onHide={handleClose} size="lg">
      <Form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
        <Modal.Header closeButton>
          <Modal.Title className="ms-auto">Update Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className="col-12 text-center">
              <img
                src={
                  file ||
                  (data?.image?.split("\\")?.[4] &&
                    require(`../../uploads/${data?.image?.split("\\")?.[4]}`))
                }
                alt="..."
                style={{ width: 200, height: 200 }}
              />
            </div>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Image"
              required
              name="image"
              min="1"
              onChange={handleSetFile}
            />
          </Form.Group>
          <FormInput
            label={"Product Name"}
            placeholder={"Enter product name"}
            type={"text"}
            name={"name"}
            value={data?.name}
          ></FormInput>
          <FormInput
            label={"Product Stock"}
            placeholder={"Enter the amount"}
            type={"number"}
            name={"stock"}
            value={data?.stock}
          ></FormInput>
          <FormInput
            label={"Product Description"}
            placeholder={"Enter product description"}
            type={"text"}
            name={"description"}
            value={data?.description}
          ></FormInput>
          <FormInput
            label={"Product Price"}
            placeholder={"Enter product price"}
            type={"number"}
            name={"price"}
            value={data?.price}
          ></FormInput>
          <Form.Label>Category</Form.Label>
          <select
            className="form-select mb-3"
            name="category"
            value={currentChoice || data?.categories[0]?._id}
            required
            onChange={(e) => setCurrentChoice(e.target.value)}
          >
            <option value={""} disabled>
              {" "}
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
          {allCats &&
            allCats
              ?.filter((cat) => cat?._id === currentChoice)[0]
              ?.attributes?.map((attribute, index) => {
                return (
                  <FormInput
                    key={index}
                    label={attribute}
                    placeholder={`Enter ${attribute} value`}
                    type={"text"}
                    name={attribute}
                  ></FormInput>
                );
              })}
          {!currentChoice &&
            Object.keys(data?.attributes)?.map((key, index) => {
              return (
                <FormInput
                  key={index}
                  label={key}
                  placeholder={`Enter ${key} value`}
                  type={"text"}
                  name={parseInt(data?.attributes[key]) ? "number" : "text"}
                  value={data?.attributes[key]}
                ></FormInput>
              );
            })}
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
            <Button className="btn btn-warning" type="submit">
              Update
            </Button>
          </div>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default SellerUpdateProductForm;
