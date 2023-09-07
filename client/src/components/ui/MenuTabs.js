import { useState, useEffect } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "./CardProduct";

function MenuTabs({ products }) {
  const [key, setKey] = useState("category1");

  function getUniqueCategory(data) {
    var listOfCats = [];
    data?.products?.forEach((product) => {
      if (product?.categories) {
        listOfCats = [...listOfCats, ...product?.categories];
      }
    });
    listOfCats = [...new Set(listOfCats)];
    return listOfCats;
  }

  function getProductByCategory(catName) {
    return products?.products?.filter((product) =>
      product?.categories?.includes(catName)
    );
  }
  useEffect(() => {
    if (products?.length !== 0) {
      setKey(getUniqueCategory(products)[0]);
    }
    // eslint-disable-next-line
  }, [products]);

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      {products?.length !== 0 &&
        getUniqueCategory(products)?.map((singleCat) => {
          return (
            <Tab eventKey={singleCat} title={singleCat} key={singleCat}>
              <h3>{singleCat}</h3>
              <div className="container-lg my-4">
                <div className="row">
                  {products?.length !== 0 &&
                    key === singleCat &&
                    getProductByCategory(singleCat)?.map((item) => {
                      return (
                        <div className="col mt-4" key={item?._id}>
                          <Card data={item} />
                        </div>
                      );
                    })}
                </div>
              </div>
            </Tab>
          );
        })}
    </Tabs>
  );
}

export default MenuTabs;
