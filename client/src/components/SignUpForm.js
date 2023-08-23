import React, { useState } from "react";

import Input from "./ui/Input";

function SignUpForm({ type }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    console.log(
      type === "customer"
        ? event.target.address.value
        : event.target.business.value
    );
  };
  return (
    <form className="px-2 pt-4" onSubmit={(event) => handleLogin(event)}>
      <Input
        name={"email"}
        type={"email"}
        id={"email" + type}
        placeholder={"Email@example.come"}
      />
      <Input
        name={"phone"}
        type={"number"}
        id={"phone" + type}
        placeholder={"Phone number"}
      />
      <Input
        name={"password"}
        type={showPassword ? "text" : "password"}
        id={"password" + type}
        placeholder={"Password"}
        setShowPassword={setShowPassword}
      />
      {type === "customer" ? (
        <Input
          name={"address"}
          type={"text"}
          id={"address"}
          placeholder={"Address"}
        />
      ) : (
        <Input
          name={"business"}
          type={"text"}
          id={"business"}
          placeholder={"Business name"}
        />
      )}
      <div className="d-flex justify-content-end pt-3">
        <button type="reset" className="btn btn-light btn-lg">
          Reset
        </button>
        <button type="submit" className="btn btn-warning btn-lg ms-2">
          Sign up
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
