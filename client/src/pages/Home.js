import React from "react";
import { Carousel } from "react-bootstrap";

import Hero from "../components/Hero";
import CardProduct from "../components/ui/CardProduct";
import MenuTabs from "../components/ui/MenuTabs";
import PaginationCustom from "../components/ui/PaginationCustom";

function Home() {
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
                  <div className="col-3">
                    <CardProduct />
                  </div>
                  <div className="col-3">
                    <CardProduct />
                  </div>
                  <div className="col-3">
                    <CardProduct />
                  </div>
                  <div className="col-3">
                    <CardProduct />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item key={2}>
                <div className="row">
                  <div className="col-3">
                    <CardProduct />
                  </div>
                  <div className="col-3">
                    <CardProduct />
                  </div>
                  <div className="col-3">
                    <CardProduct />
                  </div>
                  <div className="col-3">
                    <CardProduct />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      {/* Flash Sale Product End */}

      {/* Normal Product */}

      <div className="container-lg mt-4">
        <MenuTabs />
        <div className="d-flex justify-content-center mt-5">
          <PaginationCustom />
        </div>
      </div>
      {/* Normal Product End */}
    </div>
  );
}

export default Home;
