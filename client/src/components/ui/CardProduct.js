import React from "react";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom

// Import image
import product from "../../assets/images/producttest.webp";

const CardProduct = () => {
  return (
    <Link
      to="/productDetail"
      style={{ textDecoration: "none", color: "inherit" }}
    >
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
    </Link>
  );
};

export default CardProduct;
