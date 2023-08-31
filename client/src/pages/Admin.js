import React from "react";
import DashBoardLayout from "../components/Layout/DashBoardLayout/DashBoardLayout.js";
import AdminRenderPage from "./admin/AdminRenderPage.js";

import caregories from "../assets/images/dashboard/categories.png";
import sellerIcon from "../assets/images/dashboard/sellerIcon.png";

function Admin() {
  const pathName = [
    {
      path: "/admin/productCategory",
      name: "Category",
      imgIcon: caregories,
    },
    {
      path: "/admin/sellerApproval",
      name: "Seller CRUD",
      imgIcon: sellerIcon,
    },
  ];
  return (
    <div className="d-flex flex-column flex-md-row">
      <DashBoardLayout path={pathName}></DashBoardLayout>
      <AdminRenderPage></AdminRenderPage>
    </div>
  );
}

export default Admin;
