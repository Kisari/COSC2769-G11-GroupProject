import React, { useState } from "react";

import AttributeRow from "./AttributeRow.js";
import CreateCategoryForm from "./CreateCategoryForm.js";

const CategoryRow = ({ data }) => {
  const [showCreateCategory, setShowCreateCategory] = useState(false);

  const handleShowCreateCategory = () => {
    setShowCreateCategory((prev) => !prev);
  };
  return (
    <div className="col-12 my-3">
      <div className="d-flex flex-row justify-content-between">
        <button
          className="btn btn-primary col-6"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${data?.id}`}
        >
          #{data?.id} Category: {data?.name}
        </button>
        <div className="d-flex flex-row justify-content-end col gap-1 gap-md-2">
          <button className="btn btn-danger">Remove</button>
          <button className="btn btn-warning">Update</button>
          <button
            className="btn btn-info"
            onClick={() => handleShowCreateCategory()}
          >
            Create
          </button>
        </div>
        <CreateCategoryForm
          data={data}
          show={showCreateCategory}
          handleClose={handleShowCreateCategory}
        />
      </div>
      <div className="col-12 mt-2 gap-4">
        {data?.attributes?.map((data, index) => {
          return <AttributeRow key={index} data={data} />;
        })}
        <button
          type="button"
          className="btn custom-btn btn-custom position-relative btn-sm"
        >
          + Attribute
        </button>
      </div>
      <div className="col-12">
        <div className="collapse" id={data?.id}>
          <div className="card card-body p-0 ps-3">
            {data?.child && <CategoryRow data={data?.child} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryRow;
