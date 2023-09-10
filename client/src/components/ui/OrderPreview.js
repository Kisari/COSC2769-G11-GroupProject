import React, { useEffect, useState } from "react";

import { getProductByID } from "../../action/product";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const OrderPreview = ({ data, show, handleShow, mode }) => {
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    async function getProductDetail(id) {
      await getProductByID(id).then((res) => {
        if (res?.product) {
          setProductDetail([...productDetail, res?.product]);
        }
      });
    }
    if (data && data?.length !== 0) {
      data.forEach((element) => {
        getProductDetail(element?.productId);
      });
    }
    // eslint-disable-next-line
  }, [data]);

  return (
    <Modal show={show} onHide={handleShow}>
      <Modal.Header closeButton>
        <Modal.Title className="ms-auto">#{data?._id} Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {/* <div className="col-12">
            <div className="progress col-12">
              <div
                className={`progress-bar ${stateProgressBar()} bg-warning`}
                role="progressbar"
              ></div>
            </div>
            <div className="mt-3 col-12 d-flex flex-row text-center">
              <div className="col-3 text-muted">Pending</div>
              <div className="col-6 text-muted">Accepted</div>
              <div className="col-3 text-muted">Shipping</div>
            </div>
          </div> */}
          <div className="col-12 d-flex flex-column my-3">
            <div className="d-flex flex-row justify-content-between align-items-center p-2 text-start fw-bold text-center">
              <div className="col-2 text-break">Name</div>
              <div className="col-3 text-break">Image</div>
              <div className="col-1 text-break">Quantity</div>
              <div className="col-2 text-break">Status</div>
              <div className="col-3 text-break">Action</div>
            </div>
            {productDetail?.map((product, index) => {
              console.log(data);
              return (
                <div
                  key={index}
                  className="d-flex flex-row justify-content-between align-items-center p-2 text-start text-secondary text-center"
                >
                  <div className="col-2 text-break">{product?.name}</div>
                  <div className="col-3 text-break">
                    <img
                      src={require(`../../uploads/${
                        product?.image?.split("\\")?.[4]
                      }`)}
                      alt="..."
                      style={{ width: "40px", height: "40px" }}
                    />
                  </div>
                  <div className="col-1 text-break">
                    {data?.[index]?.quantity}
                  </div>
                  <div className="col-2 text-break">
                    {data?.[index]?.status}
                  </div>
                  <div className="col-3 text-break">
                    <button className="btn btn-sm btn-success">Accept</button>
                    <button className="btn btn-sm btn-danger">Reject</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-12 d-flex flex-row justify-content-between align-items-center">
            <div className="fw-bold">Total</div>
            <div className="text-secondary">{data?.totalPrice}</div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {mode && mode === "View" && (
          <Button
            className="w-100"
            variant="primary"
            type="button"
            onClick={() => handleShow()}
          >
            Ok
          </Button>
        )}
        {mode && mode === "Update" && (
          <div className="col-12 d-flex flex-row justify-content-between">
            <Button
              className="col-5"
              variant="warning"
              type="button"
              onClick={() => handleShow()}
            >
              Cancel
            </Button>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default OrderPreview;
