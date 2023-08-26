import React from "react";

import DashBoard from "../components/DashBoard.js";
import SellerRenderPage from "./seller/SellerRenderPage.js";

import productIcon from "../assets/images/dashboard/productIcon.png";
import orderIcon from "../assets/images/dashboard/orderIcon.png";
import statisticIcon from "../assets/images/dashboard/statisticIcon.png";

const Seller = () => {
  const pathName = [
    {
      path: "/sellers/productList",
      name: "Product",
      imgIcon: productIcon,
    },
    {
      path: "/sellers/orderList",
      name: "Order",
      imgIcon: orderIcon,
    },
    {
      path: "/sellers/statistic",
      name: "Statistic",
      imgIcon: statisticIcon,
    },
  ];
  return (
    <div className="d-flex flex-column flex-md-row">
      <DashBoard path={pathName}></DashBoard>
      <SellerRenderPage></SellerRenderPage>
    </div>
  );
};

export default Seller;
