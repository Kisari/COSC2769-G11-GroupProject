import React from "react";

const Loading = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className="spinner-grow text-primary"
        role="status"
        style={{ width: "128px", height: "128px" }}
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Loading;
