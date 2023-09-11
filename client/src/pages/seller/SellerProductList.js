import React, { useEffect, useState } from "react";

import { getAllProductOfSeller } from "../../action/product.js";
import { useTableSearch } from "../../hook/TableSearchHook.js";

import Card from "../../components/ui/Card.js";
import ProductRow from "../../components/ui/ProductRow.js";
import SellerCreateProductForm from "../../components/ui/SellerCreateProductForm.js";

const SellerProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSeach] = useState(null);
  const [sortOption, setSortedOption] = useState({
    option: 0,
    asc: false,
  });
  const { filteredData } = useTableSearch({
    searchVal: search,
    data: products,
  });
  const [showCreateProductForm, setShowCreateProductForm] = useState(false);

  const handleShowCreateProductForm = () => {
    setShowCreateProductForm((prev) => !prev);
  };

  useEffect(() => {
    async function getInitialData() {
      await getAllProductOfSeller().then((res) => {
        if (res?.products) {
          setProducts(res?.products);
        }
      });
    }
    getInitialData();
  }, []);

  function countAllProductQuantity(data) {
    if (data?.length !== 0) {
      const result = data?.reduce((acc, current) => acc + current?.stock, 0);
      return result;
    }
  }

  function countAllProductOutOfStock(data) {
    if (data?.length !== 0) {
      return data?.filter((item) => item?.stock === 0).length;
    }
  }

  function getFilteredData() {
    var sortData = [];
    filteredData?.forEach((element) => {
      sortData.push(element);
    });
    if (sortOption?.option !== 0) {
      const value = sortOption?.option;
      if (value === 1) {
        sortData.sort((a, b) =>
          b?.name.toLowerCase() > a?.name.toLowerCase() ? 1 : -1
        );
      } else if (value === 2) {
        sortData.sort((a, b) => b?.price - a?.price);
      } else {
        sortData.sort((a, b) => (a?.dateAdded > b?.dateAdded ? 1 : -1));
      }
    }
    if (sortOption.asc === true) {
      sortData.reverse();
    }
    return sortData;
  }

  const displayData = [
    {
      feature: "Total Product",
      title: countAllProductQuantity(products),
      text: "Calculating all the stored product in warehouses",
    },
    {
      feature: "Out Of Stock",
      title: countAllProductOutOfStock(products),
      text: "All the products that quantity equals 0 and need to restock",
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
            <button
              className="btn btn-success ms-3"
              onClick={() => handleShowCreateProductForm()}
            >
              Create
            </button>
          </div>
          {showCreateProductForm && (
            <SellerCreateProductForm
              show={showCreateProductForm}
              handleClose={handleShowCreateProductForm}
            />
          )}
        </div>
        <div className="col-12 mb-3 d-flex flex-column flex-md-row">
          <div className="col-12 col-md-6 d-flex flex-column">
            <div className="fs-5 fw-bolder">Sorted By</div>
            <div className="col-12 d-flex flex-row justify-content-center align-items-center">
              <div className="col-6">
                <select
                  className="form-select form-select"
                  defaultValue={0}
                  type="number"
                  onChange={(e) =>
                    setSortedOption({
                      ...sortOption,
                      option: parseInt(e.target.value),
                    })
                  }
                >
                  <option value={0} disabled>
                    Choose option
                  </option>
                  <option value={1}>Name</option>
                  <option value={2}>Price</option>
                  <option value={3}>Date Added</option>
                </select>
              </div>
              <div className="col-6 px-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={(e) =>
                      setSortedOption({ ...sortOption, asc: !sortOption?.asc })
                    }
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
                  onChange={(e) => setSeach(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center mb-3">
          <div className="d-flex flex-row flex-wrap col-12">
            <div className="col-1 fw-bold">Id</div>
            <div className="col-1 fw-bold">Image</div>
            <div className="col-2 fw-bold">Name</div>
            <div className="col-3 fw-bold">Description</div>
            <div className="col-1 fw-bold">Price</div>
            <div className="col-1 fw-bold">Stock</div>
            <div className="col-2 fw-bold">Created</div>
            <div className="col-1 fw-bold">Action</div>
          </div>
        </div>
        {filteredData &&
          getFilteredData()?.map((item, index) => {
            return (
              <div className="col-12 text-center" key={index}>
                <ProductRow data={item} />
                <hr className="my-2" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SellerProductList;
