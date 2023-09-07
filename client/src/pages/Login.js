import React, { useState } from "react";

import { useAuth } from "../hook/AuthHook";

import Input from "../components/ui/Input";
import Slider from "../components/ui/Slider";
import Loading from "../components/ui/Loading";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const payload = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    await login(payload).then((res) => {
      if (res) {
        //sucessfully login
      } else {
        //failed to login
      }
      setIsLoading(false);
    });
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="vh-100">
          <div className="container-fluid h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6">
                <Slider />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <p className="lead fw-bold m" style={{ fontSize: "2.0rem" }}>
                    Hello again !
                  </p>
                  <p
                    className="lead text-secondary text-center"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Lazada 2.0 will provide the unique features according to
                    good services and quality products.
                  </p>
                </div>
                <form onSubmit={(event) => handleLogin(event)}>
                  <Input
                    name={"username"}
                    type={"email"}
                    id={"username"}
                    placeholder={"Username"}
                  />
                  <Input
                    name={"password"}
                    type={showPassword ? "text" : "password"}
                    id={"password"}
                    placeholder={"Password"}
                    setShowPassword={setShowPassword}
                  />

                  <div className="text-center mt-4 pt-2">
                    <button
                      type="submit"
                      className="w-100 btn btn-primary btn-lg my-2"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    >
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?
                      <a href="/signup" className="link-primary">
                        Sign up
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
