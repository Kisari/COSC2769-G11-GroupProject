import React, { useEffect, useState } from "react";

import { getSellerStatistic } from "../../action/order";

import Card from "../../components/ui/Card.js";

const SellerStatistic = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    async function getInitialData() {
      await getSellerStatistic().then((res) => {
        if (res?.result) {
          console.log(res?.result);
          setOrders(res?.result);
        }
      });
    }

    getInitialData();
  }, []);
  function getTotalStatus(amount) {
    var total = 0;
    if (orders) {
      Object.keys(orders).forEach((key, index) => {
        total += orders[key];
      });
    }
    return parseInt((amount / total) * 100);
  }

  const displayData = [
    {
      feature: "New Orders",
      title: orders?.new || 0,
      text: "Calculating all the stored product in warehouses",
      account: getTotalStatus(orders?.new || 0),
    },
    {
      feature: "Shipped Orders",
      title: orders?.shipped || 0,
      text: "Calculating all the stored product in warehouses",
      account: getTotalStatus(orders?.shipped || 0),
    },
    {
      feature: "Canceled Orders",
      title: orders?.canceled || 0,
      text: "Calculating all the stored product in warehouses",
      account: getTotalStatus(orders?.canceled || 0),
    },
    {
      feature: "Accepted Orders",
      title: orders?.accepted || 0,
      text: "Calculating all the stored product in warehouses",
      account: getTotalStatus(orders?.accepted || 0),
    },
    {
      feature: "Rejected Orders",
      title: orders?.rejected || 0,
      text: "Calculating all the stored product in warehouses",
      account: getTotalStatus(orders?.rejected || 0),
    },
  ];
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-md-4">
      <div className="col-12 d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly flex-wrap row gap-4">
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
