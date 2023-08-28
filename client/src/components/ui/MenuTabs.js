import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "./CardProduct";

function MenuTabs() {
  const [key, setKey] = useState("category1");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="category1" title="Category 1">
        <h3>Category 1</h3>
        <div className="container-lg my-4">
          <div className="row">
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="category2" title="Category 2">
        <h3>Category 2</h3>
        <div className="container-lg my-4">
          <div className="row">
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="category3" title="Category 3">
        <h3>Category 3</h3>
        <div className="container-lg my-4">
          <div className="row">
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
            <div className="col-3 mt-4">
              <Card />
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default MenuTabs;
