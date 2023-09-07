import React from "react";

import hide from "../../assets/images/hide.png";
import visible from "../../assets/images/visible.png";

const Input = ({ name, type, id, placeholder, setShowPassword }) => {
  return (
    <div className="form-floating mb-3 d-flex flex-row align-items-center">
      <input
        name={name}
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        required
      />
      <label htmlFor={id}>{placeholder}</label>
      {name === "password" && (
        <button
          className="btn rounded"
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <img
            src={type === "password" ? hide : visible}
            alt="hide & visible"
            style={{ width: "40px" }}
          />
        </button>
      )}
    </div>
  );
};

export default Input;
