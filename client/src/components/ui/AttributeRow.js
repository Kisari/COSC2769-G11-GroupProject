import React from "react";

const AttributeRow = ({ data }) => {
  return (
    <button
      type="button"
      className="btn custom-btn btn-custom position-relative btn-sm"
    >
      {data}
    </button>
  );
};

export default AttributeRow;
