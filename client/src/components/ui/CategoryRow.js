import React from "react";

const CategoryRow = ({ data }) => {
  return (
    <div classname="col-12">
      <div className="d-flex flex-row justify-content-between">
        <button
          className="btn btn-primary col-9"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${data?.id}`}
        >
          Category: {data?.name}
        </button>
        <div className="d-flex flex-row justify-content-evenly col-2">
          <button className="btn btn-danger">Remove</button>
          <button className="btn btn-success">Add</button>
        </div>
      </div>
      <div className="col-12">
        <div className="collapse" id={data?.id}>
          <div className="card card-body">
            {data?.child && <CategoryRow data={data?.child} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryRow;
