import React, { useEffect, useState } from "react";

import { getAllOrderBySeller } from "../../action/order";

import Card from "../../components/ui/Card.js";

const SellerStatistic = () => {
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
    </div>
  );
};

export default SellerStatistic;
