import React from "react";

const ProductRow = ({ data }) => {
  return (
    <div className="d-flex flex-row flex-wrap col-12 text-warp my-1">
      <div className="col-1 fw-muted text-break">{data?._id}</div>
      <div className="col-2 fw-muted" style={{ height: "9vh" }}></div>
      <div className="col-2 fw-muted">{data?.name}</div>
      <div
        className="col-4 fw-muted text-break text-truncate"
        style={{ height: "9vh" }}
      >
        {data?.description}
      </div>
      <div className="col-1 fw-bold">${data?.price}</div>
      <div className="col-2 fw-bold">{data?.stock}</div>
    </div>
  );
};

export default ProductRow;
