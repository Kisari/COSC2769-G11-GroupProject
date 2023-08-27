import React from "react";
import SearchBar from "./ui/SearchBar";
import brand from "../assets/images/brand.png";
import InnerHeader from "./ui/InnerHeader";

function Header() {
  return (
    <div>
      {/* <div className="searchBar">
        <SearchBar />
      </div>
      <div className="logo">
        <img src={brand} alt="" />
      </div>
      <div className="listButton"></div> */}

      <InnerHeader />
    </div>
  );
}

export default Header;
