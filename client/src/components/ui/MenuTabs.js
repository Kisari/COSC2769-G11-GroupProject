import { useState, useEffect } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "./CardProduct";

function MenuTabs({ products }) {
  // Atributes
  const [key, setKey] = useState("category1");
  const [nameFilter, setNameFilter] = useState(""); // State for the name filter input
  const [minPrice, setMinPrice] = useState(""); // State for the minimum price input
  const [maxPrice, setMaxPrice] = useState(""); // State for the maximum price input
  const [selectedFilter, setSelectedFilter] = useState("name");
  // Add two new state variables for the date filter
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]); // State for the filtered product list

  // Initial productList
  useEffect(() => {
    // Initialize the product list with all products when the component mounts
    setProductList(products?.products || []);
  }, [products]);

  //
  useEffect(() => {
    if (products?.length !== 0) {
      setKey(getUniqueCategory(products)[0]);
    }
    // eslint-disable-next-line
  }, [products]);

  useEffect(() => {
    // Filter the product list whenever key, nameFilter, minPrice, or maxPrice changes
    const filteredList = getProductByCategory(key);
    setFilteredProductList(filteredList);
  }, [key, nameFilter, minPrice, maxPrice]);

  // Get Product by category
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

  // Updated getProductByCategory function to include price filter
  function getProductByCategory(catId) {
    const result = products?.products?.filter((product) => {
      const hasCategory = product?.categories?.some(
        (cat) => cat?._id === catId
      );

      // Check if the product matches the category and name filter
      const matchesCategory = hasCategory;
      return matchesCategory;
    });

    return result || [];
  }

  // Handle filter by name
  const handleNameFilter = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const enteredNameFilter = formData.get("name");
    setNameFilter(enteredNameFilter);

    const result = products?.products?.filter((product) => {
      const hasCategory = product?.categories?.some((cat) => cat?._id === key);
      // Check if the product matches the category and name filter
      const matchesCategory = hasCategory;

      return (
        matchesCategory &&
        product?.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    });

    setFilteredProductList(result);
  };

  // Handle filter by price
  const handlePriceFilter = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const enteredMin = formData.get("min");
    const enteredMax = formData.get("max");

    setMinPrice(enteredMin);
    setMaxPrice(enteredMax);

    const result = products?.products?.filter((product) => {
      const hasCategory = product?.categories?.some((cat) => cat?._id === key);
      // Check if the product matches the category and name filter
      const matchesCategory = hasCategory;
      const price = parseFloat(product?.price);
      const priceInRange =
        (isNaN(minPrice) || price >= parseFloat(minPrice)) &&
        (isNaN(maxPrice) || price <= parseFloat(maxPrice));

      return matchesCategory && priceInRange;
    });

    setFilteredProductList(result);
  };

  // Handle filter by date create
  const handleDateFilter = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const enteredStartDate = formData.get("startDate");
    const enteredEndDate = formData.get("endDate");

    setStartDate(enteredStartDate);
    setEndDate(enteredEndDate);

    const result = products?.products?.filter((product) => {
      const hasCategory = product?.categories?.some((cat) => cat?._id === key);
      // Check if the product matches the category and name filter
      const matchesCategory = hasCategory;
      const productDateCreate = product.dateAdded.substring(0, 10);
      const dateInRange =
        productDateCreate >= startDate && productDateCreate <= endDate;

      return matchesCategory && dateInRange;
    });

    setFilteredProductList(result);
  };

  // Render the form based on the selected filter
  const renderFilterForm = () => {
    if (selectedFilter === "name") {
      return (
        <form className="" onSubmit={handleNameFilter}>
          <label htmlFor="name">Filter by Name</label>
          <input type="text" name="name" />
          <button type="submit">Search</button>
        </form>
      );
    } else if (selectedFilter === "price") {
      return (
        <form className="" onSubmit={handlePriceFilter}>
          <label>Filter by Price:</label>
          <label htmlFor="min">Min:</label>
          <input type="number" name="min" />
          <label htmlFor="max">Max:</label>
          <input type="number" name="max" />
          <button type="submit">Search</button>
        </form>
      );
    } else if (selectedFilter === "date") {
      return (
        <form className="" onSubmit={handleDateFilter}>
          <label>Filter by Date:</label>
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" name="startDate" />
          <label htmlFor="endDate">End Date:</label>
          <input type="date" name="endDate" />
          <button type="submit">Search</button>
        </form>
      );
    }
  };

  return (
    <>
      <label>Select Filter Criteria:</label>
      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="date">Date</option>
      </select>

      {/* Render the selected filter form */}
      {renderFilterForm()}

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
                {/* Header Start */}
                <div className="">
                  <h3>{singleCat?.name}</h3>
                </div>
                {/* Header End */}

                <div className="container-lg my-4">
                  <div className="row">
                    {filteredProductList.map((item) => {
                      return (
                        <div className="col-3 mt-4" key={item?._id}>
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
    </>
  );
}

export default MenuTabs;
