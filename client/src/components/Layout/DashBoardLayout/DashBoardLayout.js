import React from "react";

import { useLocation } from "react-router-dom";

import { useAuth } from "../../../hook/AuthHook";

import logoutIcon from "../../../assets/images/dashboard/logoutIcon.png";
import onlineShop from "../../../assets/images/dashboard/online-shop.png";

const DashBoardLayout = ({ path }) => {
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  //get the current path name
  const location = useLocation().pathname;
  //path contain array of object path & name (more in Seller page)
  return (
    <div
      className="col-12 col-md-3 col-lg-2 d-flex flex-column flex-shrink-0 p-3 text-white sticky-md-top"
      style={{ height: "100vh", background: "#f0f0f0" }}
    >
      <a
        href="/"
        className="d-flex justify-content-center align-items-center text-center text-white text-decoration-none"
      >
        <img
          src={onlineShop}
          alt="app logo"
          className="img-fluid"
          style={{ width: "64px" }}
        />
      </a>
      <div className="d-flex flex-column mt-3 gap-2">
        <div className="text-center text-success fw-bold">{user?.email}</div>
        <div className="text-center text-success fw-light">
          {user?.businessName}
        </div>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {path?.map((object, index) => {
          return (
            <li className="nav-item my-2" key={index}>
              <a
                href={object?.path}
                className={`nav-link d-flex justify-content-start align-items-center fw-bold ${
                  location === object?.path && "active"
                }`}
                aria-current="page"
                style={{ color: "#29a56c" }}
              >
                <span>
                  <img
                    src={object?.imgIcon}
                    alt="product logo"
                    className="img-fluid me-3"
                    style={{ width: "28px" }}
                  />
                </span>
                {object?.name}
              </a>
            </li>
          );
        })}
      </ul>
      <hr style={{ border: "1px solid black" }} />
      <div className="d-flex flex-column flex-md-row">
        <button
          type="button"
          className="col-12 d-flex flex-row justtify-content-center align-items-center btn custom-btn"
          onClick={() => handleLogout()}
        >
          <img
            src={logoutIcon}
            alt="logout icon"
            className="img-fluid me-3"
            style={{ width: "28px" }}
          />
          <span style={{ fontSize: "16px", color: "#29a56c" }}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DashBoardLayout;
