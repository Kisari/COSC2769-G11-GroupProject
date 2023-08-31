import React, { useState } from "react";

import UpdateSellerStatus from "../../components/ui/UpdateSellerStatus.js";
import Card from "../../components/ui/Card.js";

const AdminSellerApproval = () => {
  const [showSeller, showShowSeller] = useState(false);
  var testData = [
    {
      businessName: "NeetQ",
      status: "pending",
      email: "123sadn@gmail.com",
      phone: "091273784",
      username: "minhkute",
    },
  ];

  const displayData = [
    {
      feature: "Total Pending",
      title: 56,
      text: "All the sellers that has registered recently",
      actionText: "Details",
    },
    {
      feature: "Total Accepted",
      title: 342,
      text: "Total sellers are active in the website",
      actionText: "Show",
    },
    {
      feature: "Total Rejected",
      title: 23,
      text: "All the sellers that do not meet requirements",
      actionText: "Details",
    },
  ];
  const handleShowSeller = () => {
    showShowSeller((prev) => !prev);
  };
  return (
    <div className="p-md-3">
      <div className="col-12 d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly flex-wrap row mb-md-4">
        {displayData.map((item, index) => {
          return (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <Card data={item} />
            </div>
          );
        })}
      </div>
      <div className="col-12 text-start">
        <p className="fw-bold text-info fs-3">Catogory List</p>
      </div>
      <div className="col-12">
        <div className="col-12 text-center mb-3">
          <div className="d-flex flex-row flex-wrap col-12">
            <div className="col-2 fw-bold">User Name</div>
            <div className="col-2 fw-bold">Bussiness Name</div>
            <div className="col-3 fw-bold">Email</div>
            <div className="col-2 fw-bold">Status</div>
            <div className="col-3">Update</div>
          </div>
        </div>
        {testData.map((item, index) => {
          return (
            <div className="col-12 text-center" key={index}>
              <div className="d-flex flex-row flex-wrap col-12 text-warp my-1">
                <div className="col-2 fw-bold">{item?.username}</div>
                <div className="col-2 fw-bold">{item?.businessName}</div>
                <div className="col-3 fw-bold">{item?.email}</div>
                <div className="col-2 fw-bold">{item?.status}</div>
                <div className="col-3">
                  <button
                    className="btn btn-success"
                    onClick={() => handleShowSeller()}
                  >
                    Update
                  </button>
                </div>
                <UpdateSellerStatus
                  data={item}
                  show={showSeller}
                  handleClose={handleShowSeller}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSellerApproval;
