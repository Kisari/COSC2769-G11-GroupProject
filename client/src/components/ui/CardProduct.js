import React from "react";

// Import image
import product from "../../assets/images/producttest.webp";

const CardProduct = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product} className="Product image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-title text-danger">10.000 VND</h6>
        <p className="card-text">Some quick example text</p>
        <a href="#" className="btn btn-primary">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default CardProduct;
