import React, { useState, useEffect } from "react";

import { addChildForRender } from "../../helper/Category.js";
import { getAllCategory } from "../../action/category.js";

import CategoryRow from "../../components/ui/CategoryRow.js";
import Card from "../../components/ui/Card.js";

var testData = [
  {
    _id: "64e234d2e360f233a9c99ad5",
    id: 1,
    name: "Clothing and Accessories",
    attributes: ["Entertaining", "Music", "Electrical"],
    parent: 2,
    __v: 0,
  },
  {
    _id: "64e234d2e360f233a9c99ad6",
    id: 2,
    name: "Electronics and Gadgets",
    attributes: [],
    __v: 0,
  },
  {
    _id: "64e234d2e360f233a9c99ad7",
    id: 3,
    name: "Home and Kitchen Appliances",
    attributes: [],
    parent: 1,
    __v: 0,
  },
  {
    _id: "64e234d2e360f233a9c99ad8",
    id: 4,
    name: "Beauty and Personal Care",
    attributes: [],
    __v: 0,
  },
  {
    _id: "64e234d2e360f233a9c99ad9",
    id: 5,
    name: "Books, Music, and Movies",
    attributes: [],
    __v: 0,
  },
  {
    _id: "64e23ac7a11f741d717017e0",
    id: 21,
    name: "Instruments",
    attributes: ["Entertaining", "Music"],
    parent: 5,
    __v: 0,
  },
];

const AdminCategoryList = () => {
  const displayData = [
    {
      feature: "Total Category",
      title: 243,
      text: "Show all the avaiable categories that has been created",
      actionText: "Calculate",
    },
    {
      feature: "Total Attribute",
      title: 1239,
      text: "Calculating all the attributes of all avaiable categories",
      actionText: "Calculate",
    },
    {
      feature: "Total Unused Category",
      title: 23,
      text: "Estimating all the category that have no products",
      actionText: "Calculate",
    },
  ];

  const [allCats, setAllCats] = useState([]);

  useEffect(() => {
    async function getInitialData() {
      await getAllCategory().then((res) => {
        if (res) {
          setAllCats(res);
        }
      });
    }
    getInitialData();
  }, []);

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
      {allCats &&
        addChildForRender(allCats)?.map((category, index) => {
          return (
            <div key={index}>
              {category?.parents?.length === 0 && (
                <CategoryRow data={category} />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default AdminCategoryList;
