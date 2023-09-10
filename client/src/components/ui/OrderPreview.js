import React, { useEffect, useState } from "react";

import { getProductByID } from "../../action/product";
import {
  getCustomerInfoByOrderID,
  sellerShipOrder,
  sellerCancelOrder,
} from "../../action/order";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const OrderPreview = ({ data, show, handleShow, mode, customer }) => {
  const [productDetail, setProductDetail] = useState([]);
  const [customerInfo, setCustomerInfo] = useState();

  console.log(data);

  const handleShippedProduct = async (index) => {
    if (data?.[index]?.orderId && data?.[index]?._id) {
      await sellerShipOrder(data?.[index]?.orderId, data?.[index]?._id).then(
        (res) => {
          console.log(res);
        }
      );
    }
  };
  const handleCancelProduct = async (index) => {
    if (data?.[index]?.orderId && data?.[index]?._id) {
      await sellerCancelOrder(data?.[index]?.orderId, data?.[index]?._id).then(
        (res) => {
          console.log(res);
        }
      );
    }
  };
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

    async function getCustomerInformation(id) {
      await getCustomerInfoByOrderID(id).then((res) => {
        if (res?.customerInfo) {
          setCustomerInfo(res?.customerInfo);
        }
      });
    }

    if (data && data?.length !== 0) {
      getCustomerInformation(data?.[0].orderId);
    }
    // eslint-disable-next-line
  }, [data]);

  function sumTheTotal() {
    if (data) {
      return data.reduce((acc, current) => acc + current?.subTotal, 0);
    }
  }

  return (
    <Modal show={show} onHide={handleShow}>
      <Modal.Header closeButton>
        <Modal.Title className="ms-auto">#{data?._id} Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="col-12 d-flex flex-column my-3">
            <div className="d-flex flex-row justify-content-between align-items-center p-2 text-start fw-bold text-center">
              <div className="col-2 text-break">Name</div>
              <div className="col-3 text-break">Image</div>
              <div className="col-2 text-break">Quantity</div>
              <div className="col-2 text-break">Status</div>
              <div className="col-3 text-break">Action</div>
            </div>
            {productDetail?.map((product, index) => {
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
                  <div className="col-2 text-break">
                    {data?.[index]?.quantity}
                  </div>
                  <div className="col-2 text-break">
                    {data?.[index]?.status}
                  </div>
                  {data?.[index]?.status === "new" &&
                  mode &&
                  mode === "Update" ? (
                    <div className="col-3 text-break">
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => handleShippedProduct(index)}
                      >
                        Shipped
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleCancelProduct(index)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="col-3 text-break">
                      <button className="btn btn-sm btn-success" disabled>
                        None
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="col-12 d-flex flex-column justify-content-center align-items center">
            {customerInfo &&
              Object.keys(customerInfo).map((key, index) => {
                return (
                  <div key={index}>
                    <b className="text-capitalize fw-bold text-danger">
                      {" "}
                      {key}
                    </b>{" "}
                    {":"} {customerInfo[key]}
                  </div>
                );
              })}
          </div>
          <div className="col-12 d-flex flex-row justify-content-between align-items-center mt-3">
            <div className="fw-bold">Sub total</div>
            <div className="text-secondary">{sumTheTotal()}</div>
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
              className="w-100"
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
