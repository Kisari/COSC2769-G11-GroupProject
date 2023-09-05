import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //disable for not testing
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
