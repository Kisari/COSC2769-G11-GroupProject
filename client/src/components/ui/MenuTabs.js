import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "./CardProduct";
import SortMenu from "./SortMenu";
import Pagination from "react-bootstrap/Pagination";

function MenuTabs() {
  const [key, setKey] = useState("category1");
  const itemsPerPage = 4;
  const sampleData = Array.from({ length: 20 }, (_, index) => index + 1);
  const totalPages = Math.ceil(sampleData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsForCurrentPage = sampleData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="category1" title="Category 1">
        <div className="container-fluid d-flex justify-content-between">
          <h3>Category 1</h3>
          <SortMenu />
        </div>

        <div className="container-lg my-4">
          <div className="row">
            {itemsForCurrentPage.map((item) => (
              <div key={item} className="col-3 mt-4">
                <Card />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Pagination>
              {Array.from({ length: totalPages }, (_, index) => (
                <Pagination.Item
                  key={index}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </div>
      </Tab>

      {/* Category 2 */}
      <Tab eventKey="category2" title="Category 2">
        <div className="d-flex d-flex justify-content-between">
          <h3>Category 2</h3>
          <SortMenu />
        </div>

        <div className="container-lg my-4">
          <div className="row">
            {itemsForCurrentPage.map((item) => (
              <div key={item} className="col-3 mt-4">
                <Card />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Pagination>
              {Array.from({ length: totalPages }, (_, index) => (
                <Pagination.Item
                  key={index}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </div>
      </Tab>

      {/* Category 3 */}
      <Tab eventKey="category3" title="Category 3">
        <div className="d-flex d-flex justify-content-between">
          <h3>Category 3</h3>
          <SortMenu />
        </div>

        <div className="container-lg my-4">
          <div className="row">
            {itemsForCurrentPage.map((item) => (
              <div key={item} className="col-3 mt-4">
                <Card />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Pagination>
              {Array.from({ length: totalPages }, (_, index) => (
                <Pagination.Item
                  key={index}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default MenuTabs;
