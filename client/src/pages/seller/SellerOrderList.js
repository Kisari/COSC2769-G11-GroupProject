import React, { useState, useEffect } from "react";

import { getAllOrderBySeller } from "../../action/order";

import OrderRow from "../../components/ui/OrderRow.js";
import Card from "../../components/ui/Card.js";

const SellerOrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getInitialData() {
      await getAllOrderBySeller().then((res) => {
        if (res?.orders) {
          setOrders(res?.orders);
        }
      });
    }

    getInitialData();
  }, []);

  const displayData = [
    {
      feature: "Total Orders",
      title: orders?.length,
      text: "Involving all the orders contain your products",
    },
    {
      feature: "In Pending",
      title: orders.filter((item) => item?.orderStatus === "pending").length,
      text: "All the orders that need your action and customer action",
    },
  ];
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-md-4">
      <div className="col-12 d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly flex-wrap row">
        {displayData.map((item, index) => {
          return (
            <div key={index} className="col-12 col-md-5 col-lg-4">
              <Card data={item} />
            </div>
          );
        })}
      </div>
      <div className="col-12 mb-3 d-flex flex-column">
        <div className="col-12">
          <p className="fs-4 fw-bolder">Product List</p>
        </div>
        <div className="col-12 text-center mb-3">
          <div className="d-flex flex-row flex-wrap col-12">
            <div className="col-1 fw-bold">Id</div>
            <div className="col-2 fw-bold">Products count</div>
            <div className="col-2 fw-bold">Status</div>
            <div className="col-2 fw-bold">SubTotal</div>
            <div className="col-5 fw-bold">Action</div>
          </div>
        </div>
        {}
        {orders.map((item, index) => {
          return (
            <div className="col-12 text-center" key={index}>
              <OrderRow data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SellerOrderList;
