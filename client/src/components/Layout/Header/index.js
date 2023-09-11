import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useAuth } from "../../../hook/AuthHook";
// Import react bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

// Import image
import logo from "../../../assets/images/lazlogo.png";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logout();
  };
  return (
    // <Navbar className="bg-body-tertiary ">
    //   <Container>
    //     <Link to="/">
    //       <Navbar.Brand href="#home">
    //         <img src={logo} height="40" alt="brand logo" />
    //       </Navbar.Brand>
    //     </Link>

    //     <Navbar.Toggle />
    //     <Navbar.Collapse className="justify-content-end">
    //       {user ? (
    //         <>
    //           <Navbar.Text>{user?.userName}</Navbar.Text>
    //         </>
    //       ) : (
    //         <button
    //           type="button"
    //           className="btn btn-outline-secondary"
    //           onClick={() => navigate("/login")}
    //         >
    //           Sign In
    //         </button>
    //       )}
    //       <Link to="/shoppingCart">
    //         <Button variant="outline-primary">
    //           <i className="bi bi-cart"></i>
    //         </Button>
    //       </Link>
    //       {user && (
    //         <Link to="/orderManagement">
    //           <Button variant="outline-primary">Orders</Button>
    //         </Link>
    //       )}
    //       {user ? (
    //         <Button variant="outline-primary" onClick={() => handleLogOut()}>
    //           Logout
    //         </Button>
    //       ) : (
    //         <button
    //           type="button"
    //           className="btn btn-primary"
    //           onClick={() => navigate("/signup")}
    //         >
    //           Sign Up
    //         </button>
    //       )}
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <div className="container-fluid py-5 border-bottom">
      <div className="container-lg">
        <div className="row">
          {/* Brand Logo */}
          <a className="col-2 d-flex align-items-center" href="/">
            <img src={logo} height="40" alt="brand logo" />
          </a>
          {/* Brand Logo End*/}
          {/* Search Box */}
          <div className="col-6 d-flex justify-content-center align-items-center">
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
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => navigate("/shoppingCart")}
            >
              <i className="bi bi-cart"></i>
            </button>
          </div>
          <div className="col-2 d-flex justify-content-end align-items-center">
            {user ? (
              <>
                <Link to="/orderManagement">
                  <button type="button" className="btn btn-outline-primary">
                    Orders
                  </button>
                </Link>
              </>
            ) : (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            )}
          </div>
          <div className="col-1 d-flex justify-content-end align-items-center">
            {user ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleLogOut()}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            )}
          </div>
          {/* Action End*/}
        </div>
      </div>
    </div>
  );
};

export default Header;
