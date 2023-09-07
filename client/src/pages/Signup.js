import React from "react";

import poster from "../assets/images/poster.webp";

import SignUpForm from "../components/ui/SignUpForm";

function Signup() {
  return (
    <section className="vh-100">
      <div className="container py-2">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src={poster}
                    alt="Sample"
                    className="img-fluid"
                    style={{ height: "90vh", width: "100%" }}
                  />
                </div>
                <div className="col-xl-6 d-flex justify-content-center align-items-center">
                  <div className="card-body p-md-5 text-black">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <p
                        className="lead text-center"
                        style={{ fontSize: "2.0rem" }}
                      >
                        Join us !!!
                      </p>
                      <p
                        className="lead text-secondary text-center"
                        style={{ fontSize: "1.2rem" }}
                      >
                        Lazada 2.0 will provide the unique features according to
                        good services and quality products.
                      </p>
                    </div>
                    {/* body*/}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#home-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="home-tab-pane"
                          aria-selected="true"
                        >
                          Customer
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#profile-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="profile-tab-pane"
                          aria-selected="false"
                        >
                          Seller
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home-tab-pane"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                        tabIndex="0"
                      >
                        <SignUpForm type={"customer"} />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile-tab-pane"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                        tabIndex="0"
                      >
                        <SignUpForm type={"seller"} />
                      </div>
                    </div>
                    {/* body*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
