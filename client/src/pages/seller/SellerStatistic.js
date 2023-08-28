import React from "react";

import Card from "../../components/ui/Card.js";
import OrderRow from "../../components/ui/OrderRow.js";

const SellerStatistic = () => {
  const displayData = [
    {
      feature: "New Orders",
      title: 23,
      text: "Calculating all the stored product in warehouses",
      account: 25,
      actionText: "Show",
    },
    {
      feature: "Shipped Orders",
      title: 123,
      text: "Calculating all the stored product in warehouses",
      account: 22,
      actionText: "Show",
    },
    {
      feature: "Canceled Orders",
      title: 23,
      text: "Calculating all the stored product in warehouses",
      account: 9,
      actionText: "Show",
    },
    {
      feature: "Accepted Orders",
      title: 22,
      text: "Calculating all the stored product in warehouses",
      account: 14,
      actionText: "Show",
    },
    {
      feature: "Rejected Orders",
      title: 3,
      text: "Calculating all the stored product in warehouses",
      account: 2,
      actionText: "Show",
    },
  ];
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-md-4">
      <div className="col-12 d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly flex-wrap row">
        {displayData.map((item, index) => {
          return (
            <div key={index} className="col-12 col-md-4 col-lg-3">
              <Card data={item} statistic={true} />
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
            <div className="col-2 fw-bold">Total</div>
            <div className="col-5 fw-bold">Action</div>
          </div>
        </div>
        {[1, 2, 3].map((item, index) => {
          return (
            <div className="col-12 text-center" key={index}>
              <OrderRow data={item} isView={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SellerStatistic;
