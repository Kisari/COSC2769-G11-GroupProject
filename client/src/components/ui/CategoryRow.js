import React, { useState } from "react";

import { deleteCategory } from "../../action/category";
import { useNavigate } from "react-router-dom";

import AttributeRow from "./AttributeRow.js";
import UpdateCategoryForm from "./UpdateCategoryForm.js";

const CategoryRow = ({ data }) => {
  const navigate = useNavigate();
  const [showUpdateCategory, setShowUpdateCategory] = useState(false);

  const handleShowUpdateCategory = () => {
    setShowUpdateCategory((prev) => !prev);
  };

  const handleRemoveCategory = async () => {
    await deleteCategory(data?._id).then((res) => {
      if (res) {
        navigate(0);
      }
    });
  };
  return (
    <div className="col-12 my-3">
      <div className="d-flex flex-row justify-content-between">
        <button
          className="btn btn-primary col-6"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${data?._id}`}
        >
          #{data?._id} Category: <b> {data?.name}</b>
        </button>
        <div className="d-flex flex-row justify-content-end col gap-1 gap-md-2">
          <button
            className="btn btn-danger"
            onClick={() => handleRemoveCategory(data?._id)}
          >
            Remove
          </button>
          <button
            className="btn btn-warning"
            onClick={() => handleShowUpdateCategory()}
          >
            Update
          </button>
        </div>
        {showUpdateCategory && (
          <UpdateCategoryForm
            data={data}
            show={showUpdateCategory}
            handleClose={handleShowUpdateCategory}
          />
        )}
      </div>
      <div className="col-12 mt-2 d-flex gap-3">
        {data?.attributes?.map((data, index) => {
          return <AttributeRow key={index} data={data} />;
        })}
      </div>
      <div className="col-12">
        <div className="collapse" id={data?._id}>
          <div className="card card-body p-0 ps-3">
            {data?.child &&
              data?.child?.map((child) => {
                return <CategoryRow data={child} key={child?._id} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryRow;
