import React from "react";

import Card from "../../components/ui/Card.js";
import ProductRow from "../../components/ui/ProductRow.js";

const SellerProductList = () => {
  const displayData = [
    {
      feature: "Total Product",
      title: 243,
      text: "Calculating all the stored product in warehouses",
      actionText: "Detail",
    },
    {
      feature: "Out Of Stock",
      title: 93,
      text: "All the products that quantity equals 0 and need to restock",
      actionText: "Detail",
    },
  ];
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="col-12 d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly flex-wrap row">
        {displayData.map((item, index) => {
          return (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <Card data={item} />
            </div>
          );
        })}
      </div>
      <div className="col-12 d-flex flex-column align-items-center justify-content-center flex-wrap mt-4 p-3">
        <div className="col-12 mb-3 d-flex flex-row">
          <p className="fs-4 fw-bolder">Product List</p>
          <div className="d-flex ms-auto flex-row">
            <button className="btn btn-warning">Update</button>
            <button className="btn btn-success ms-3">Create</button>
          </div>
        </div>
        <div className="col-12 mb-3 d-flex flex-column flex-md-row">
          <div className="col-12 col-md-6 d-flex flex-column">
            <div className="fs-5 fw-bolder">Sorted By</div>
            <div className="col-12 d-flex flex-row justify-content-center align-items-center">
              <div className="col-6">
                <select className="form-select form-select" defaultValue="0">
                  <option value="0" disabled>
                    Choose option
                  </option>
                  <option value="1">Name</option>
                  <option value="2">Price</option>
                  <option value="3">Date Added</option>
                </select>
              </div>
              <div className="col-6 px-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Ascending
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column">
            <div className="fs-5 fw-bolder">Filter</div>
            <div className="col-12 d-flex flex-row">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center mb-3">
          <div className="d-flex flex-row flex-wrap col-12">
            <div className="col-1 fw-bold">Id</div>
            <div className="col-2 fw-bold">Image</div>
            <div className="col-2 fw-bold">Product anme</div>
            <div className="col-5 fw-bold">Product description</div>
            <div className="col-2 fw-bold">Product Quantity</div>
          </div>
        </div>
        {[1, 2, 3].map((item, index) => {
          return (
            <div className="col-12 text-center" key={index}>
              <ProductRow data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SellerProductList;
