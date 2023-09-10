import React from "react";

const AccessDenied = () => {
  return (
    <div className="container mt-4 min" style={{ minHeight: "50vh" }}>
      <div className="text-center">
        <h1>401 - Access denied</h1>
        <p>
          The page you are looking for does not exist or you dont have
          permission to enter
        </p>
        {/* Adjust this link to your home route */}
      </div>
    </div>
  );
};

export default AccessDenied;
