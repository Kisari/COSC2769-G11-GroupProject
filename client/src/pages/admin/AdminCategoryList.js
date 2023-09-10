import React, { useState, useEffect } from "react";

import { addChildForRender } from "../../helper/Category.js";
import { getAllCategory } from "../../action/category.js";

import CategoryRow from "../../components/ui/CategoryRow.js";
import Card from "../../components/ui/Card.js";
import CreateCategoryForm from "../../components/ui/CreateCategoryForm";

const AdminCategoryList = () => {
  const displayData = [];

  const [allCats, setAllCats] = useState([]);
  const [show, setShow] = useState(false);

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

  const handleShowCreateForm = () => {
    setShow((prev) => !prev);
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
      <div className="col-12 d-flex flex-row justify-content-between align-items-center">
        <p className="fw-bold text-info fs-3">Catogory List</p>
        <button className="btn btn-info" onClick={() => handleShowCreateForm()}>
          Create New
        </button>
        <CreateCategoryForm show={show} handleClose={handleShowCreateForm} />
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
