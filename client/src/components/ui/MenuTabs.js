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
    var out = listOfCats.reduce(function (p, c) {
      if (
        !p.some(function (el) {
          return el._id === c._id;
        })
      )
        p.push(c);
      return p;
    }, []);
    return out;
  }

  function getProductByCategory(catId) {
    var result = [];
    products?.products?.filter((product) =>
      product?.categories?.map(
        (cat) => cat?._id === catId && result.push(product)
      )
    );
    return result;
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
        getUniqueCategory(products)?.map((singleCat, index) => {
          return (
            <Tab
              eventKey={singleCat?._id}
              title={singleCat?.name}
              key={singleCat?._id}
            >
              <h3>{singleCat?.name}</h3>
              <div className="container-lg my-4">
                <div className="row">
                  {products?.length !== 0 &&
                    key === singleCat?._id &&
                    getProductByCategory(singleCat?._id)?.map((item) => {
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
