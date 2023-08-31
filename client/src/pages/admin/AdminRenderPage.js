import React from "react";

import { useLocation } from "react-router-dom";

import AdminCategoryList from "./AdminCategoryList.js";
import AdminSellerApproval from "./AdminSellerApproval.js";

const AdminRenderPage = () => {
  const location = useLocation().pathname;
  return (
    <div className="col-12 col-md-9 col-lg-10 p-4">
      {location === "/admin" && <AdminCategoryList />}
      {location === "/admin/productCategory" && <AdminCategoryList />}
      {location === "/admin/sellerApproval" && <AdminSellerApproval />}
    </div>
  );
};

export default AdminRenderPage;
