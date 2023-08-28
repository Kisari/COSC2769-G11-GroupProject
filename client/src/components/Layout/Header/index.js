import React from "react";

// Import image
import logo from "../../../assets/images/lazlogo.png";

const Header = () => {
  return (
    <div className="container-fluid py-5 border-bottom">
      <div className="container-lg">
        <div className="row">
          {/* Brand Logo */}
          <div className="col-2 d-flex align-items-center">
            <img src={logo} height="40" alt="brand logo" />
          </div>
          {/* Brand Logo End*/}
          {/* Search Box */}
          <div className="col-7 d-flex justify-content-center align-items-center">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search in shop..."
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                id="button-addon1"
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          {/* Search Box End*/}
          {/* Action */}
          <div className="col-1 d-flex justify-content-end align-items-center">
            <button type="button" className="btn btn-outline-primary">
              <i className="bi bi-cart"></i>
            </button>
          </div>
          <div className="col-1 d-flex justify-content-end align-items-center">
            <button type="button" className="btn btn-outline-secondary">
              Sign In
            </button>
          </div>
          <div className="col-1 d-flex justify-content-end align-items-center">
            <button type="button" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          {/* Action End*/}
        </div>
      </div>
    </div>
  );
};

export default Header;
