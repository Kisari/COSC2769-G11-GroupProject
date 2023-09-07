import React from "react";

// Import image
import product from "../../assets/images/producttest.webp";

const CardProduct = ({ data }) => {
  //important
  //the uploads folder must be in frontend src folder
  //if not the system will not load the file path
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product} className="Product image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data?.name}</h5>
        <h6 className="card-title text-danger">${data?.price}</h6>
        <p className="card-text">{data?.description}</p>
        {/* later need to include a button instead of a tag */}
        {/* <a href="#" className="btn btn-primary">
          Buy Now
        </a> */}
      </div>
    </div>
  );
};

export default CardProduct;
