import React, { useState } from "react";

import OrderPreview from "./OrderPreview.js";

const OrderRow = ({ data, isView }) => {
  const [viewModal, setViewModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const hanleViewModal = () => {
    setViewModal((prev) => !prev);
  };

  const handleUpdateModal = () => {
    setUpdateModal((prev) => !prev);
  };

  return (
    <div className="d-flex flex-row flex-wrap col-12 text-warp my-1">
      <div className="col-1 fw-muted">123</div>
      <div className="col-2 fw-muted">3</div>
      <div className="col-2 fw-muted">pending</div>
      <div className="col-2 fw-bold">$1200</div>
      <div className="col-5 fw-muted text-truncate d-flex flex-row flex-wrap justify-content-evenly align-items-center">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => hanleViewModal()}
        >
          View
        </button>
        {!isView && (
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => handleUpdateModal()}
          >
            Update
          </button>
        )}
      </div>
      {viewModal && (
        <OrderPreview
          data={data}
          show={viewModal}
          handleShow={setViewModal}
          mode={"View"}
        />
      )}
      {updateModal && (
        <OrderPreview
          data={data}
          show={updateModal}
          handleShow={setUpdateModal}
          mode={"Update"}
        />
      )}
    </div>
  );
};

export default OrderRow;
