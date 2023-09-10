import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { deleteProduct } from "../../action/product.js";

import SellerUpdateProductForm from "../../components/ui/SellerUpdateProductForm.js";

const ProductRow = ({ data }) => {
  const navigate = useNavigate();
  const [showUpdateProductForm, setShowUpdateProductForm] = useState(false);

  const handleShowUpdateProductForm = () => {
    setShowUpdateProductForm((prev) => !prev);
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id).then((res) => {
      if (res?.message) {
        navigate(0);
      }
    });
  };
  function formatDate(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <div className="d-flex flex-row flex-wrap col-12 text-warp my-1">
      <div className="col-1 fw-muted text-break">{data?._id}</div>
      <div
        className="col-1 fw-muted text-break d-flex justify-content-center align-items-center"
        style={{ height: "9vh" }}
      >
        {data?.image?.split("\\")?.[4] && (
          <img
            src={require(`../../uploads/${data?.image?.split("\\")[4]}`)}
            alt="..."
            className="img-fluid"
            style={{ width: "64px", height: "64px" }}
          />
        )}
        {data?.image?.split("/")?.[4] && (
          <img
            src={require(`../../uploads/${data?.image?.split("/")[4]}`)}
            alt="..."
            className="img-fluid"
            style={{ width: "64px", height: "64px" }}
          />
        )}
      </div>
      <div className="col-2 fw-muted text-break">{data?.name}</div>
      <div className="col-3 fw-muted text-break" style={{ height: "9vh" }}>
        {data?.description}
      </div>
      <div className="col-1 fw-bold text-break">${data?.price}</div>
      <div className="col-1 fw-bold text-break">{data?.stock}</div>
      <div className="col-2 fw-bold text-break">
        {formatDate(data?.dateAdded)}
      </div>
      <div className="col-1 fw-bold text-break d-flex flex-column justify-content-center align-items-center gap-md-1">
        <button
          className="btn btn-warning btn-sm"
          onClick={() => handleShowUpdateProductForm()}
        >
          Update
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDeleteProduct(data?._id)}
        >
          Delete
        </button>
      </div>
      {showUpdateProductForm && (
        <SellerUpdateProductForm
          data={data}
          show={showUpdateProductForm}
          handleClose={handleShowUpdateProductForm}
        />
      )}
    </div>
  );
};

export default ProductRow;
