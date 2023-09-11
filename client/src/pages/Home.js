import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import { getAllProduct } from "../action/product.js";

import Hero from "../components/Hero";
import CardProduct from "../components/ui/CardProduct";
import MenuTabs from "../components/ui/MenuTabs";
import PaginationCustom from "../components/ui/PaginationCustom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getInitialData() {
      await getAllProduct().then((res) => {
        if (res) {
          setProducts(res);
        }
      });
    }

    getInitialData();
  }, []);
  return (
    <div className="container-fluid">
      <Hero />

      {/* Flash Sale Product */}
      <div className="container-lg mt-4">
        <h3>Flash Sale</h3>
        <div className="container-lg my-4">
          <div className="row">
            <Carousel>
              <Carousel.Item key={1}>
                <div className="row">
                  {products?.products?.length !== 0 &&
                    products?.products?.slice(0, 4).map((product) => {
                      return (
                        <div className="col" key={product._id}>
                          <CardProduct data={product} />
                        </div>
                      );
                    })}
                </div>
              </Carousel.Item>
              <Carousel.Item key={2}>
                <div className="row">
                  {products?.products?.length !== 0 &&
                    products?.products?.slice(-4).map((product) => {
                      return (
                        <div className="col" key={product?._id}>
                          <CardProduct data={product} />
                        </div>
                      );
                    })}
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      {/* Flash Sale Product End */}

      {/* Normal Product */}

      <div className="container-lg mt-4">
        <h3>Products</h3>
        <MenuTabs products={products} />
        <div className="d-flex justify-content-center mt-5">
          <PaginationCustom />
        </div>
      </div>
      {/* Normal Product End */}
    </div>
  );
}

export default Home;
