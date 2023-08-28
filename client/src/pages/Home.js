import React from "react";
import { Carousel } from "react-bootstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Card from "../components/ui/Card";
import MenuTabs from "../components/ui/MenuTabs";
import PaginationCustom from "../components/ui/PaginationCustom";

function Home() {
  return (
    <div className="container-fluid">
      <Header />
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
                    <Card />
                  </div>
                  <div className="col-3">
                    <Card />
                  </div>
                  <div className="col-3">
                    <Card />
                  </div>
                  <div className="col-3">
                    <Card />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item key={2}>
                <div className="row">
                  <div className="col-3">
                    <Card />
                  </div>
                  <div className="col-3">
                    <Card />
                  </div>
                  <div className="col-3">
                    <Card />
                  </div>
                  <div className="col-3">
                    <Card />
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

      <Footer />
    </div>
  );
}

export default Home;
