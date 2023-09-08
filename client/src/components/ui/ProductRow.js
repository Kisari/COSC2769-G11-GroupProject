import React from "react";

const ProductRow = ({ data }) => {
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
        className="col-2 fw-muted text-break"
        style={{ height: "9vh" }}
      ></div>
      <div className="col-2 fw-muted text-break">{data?.name}</div>
      <div className="col-3 fw-muted text-break" style={{ height: "9vh" }}>
        {data?.description}
      </div>
      <div className="col-1 fw-bold text-break">${data?.price}</div>
      <div className="col-1 fw-bold text-break">{data?.stock}</div>
      <div className="col-2 fw-bold text-break">
        {formatDate(data?.dateAdded)}
      </div>
    </div>
  );
};

export default ProductRow;
