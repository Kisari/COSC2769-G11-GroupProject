import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Import image
import product from "../../assets/images/producttest.webp";
// import test from "../client/src/uploads/1693627684535.jpeg";
import productImage from "../../uploads/1693844223095.jpg";

const CardProduct = ({ data }) => {
  const productID = data._id;
  // const productURL = "../../uploads/" + data?.image.split("\\")?.[4];
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/productDetail/${productID}`, {
      state: {
        product: data,
      },
    });
  };

  //important
  //the uploads folder must be in frontend src folder
  //if not the system will not load the file path
  return (
    <div onClick={handleDetail} className="card cur" style={{ width: "18rem" }}>
      {/* {data?.image.split("\\")?.[4] != undefined && (
        <img
          src={require(`../../uploads/${data?.image.split("\\")?.[4]}`)}
          className="Product image"
          alt="Product Image"
        />
      )} */}
      <img src={product} className="Product image" alt="Product Image" />

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
