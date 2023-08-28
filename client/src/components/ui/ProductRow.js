import React from "react";

const ProductRow = ({ data }) => {
  return (
    <div className="d-flex flex-row flex-wrap col-12 text-warp my-1">
      <div className="col-1 fw-muted">testId</div>
      <div className="col-2 fw-muted"></div>
      <div className="col-2 fw-muted">asdwqe</div>
      <div className="col-5 fw-muted text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        dolores, alias recusandae eius soluta totam, debitis iste officia
        placeat temporibus atque laborum molestias, rem beatae error. Quaerat
        earum similique dolore!
      </div>
      <div className="col-2 fw-bold">12</div>
    </div>
  );
};

export default ProductRow;
