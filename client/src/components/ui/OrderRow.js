import React, { useState, useEffect } from "react";

import { getOrderBySellerID } from "../../action/order";

import OrderPreview from "./OrderPreview.js";

const OrderRow = ({ data, isView }) => {
  const [orderDetail, setOrderDetail] = useState();
  const [viewModal, setViewModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  useEffect(() => {
    async function getOrderDetail() {
      await getOrderBySellerID(data?._id).then((res) => {
        if (res?.result) {
          setOrderDetail(res?.result);
        }
      });
    }
    getOrderDetail();
    // eslint-disable-next-line
  }, []);

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
          data={orderDetail}
          show={viewModal}
          handleShow={setViewModal}
          mode={"View"}
        />
      )}
      {updateModal && (
        <OrderPreview
          data={orderDetail}
          show={updateModal}
          handleShow={setUpdateModal}
          mode={"Update"}
        />
      )}
    </div>
  );
};

export default OrderRow;
