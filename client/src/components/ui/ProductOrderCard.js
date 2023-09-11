import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";

function ProductOrderCard({ details, orderID }) {
  const [showButton, setShowButton] = useState(true);

  const acceptedProduct = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/customer/order/${orderID}/details/${details._id}/accepted`
      );

      console.log(response);
      setShowButton(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const rejectedProduct = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/customer/order/${orderID}/details/${details._id}/rejected`
      );
      setShowButton(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <tr>
      <th>{details._id}</th>
      <th>{details.quantity}</th>
      <th>{details.status}</th>
      <th>{details.subTotal}</th>
      {details.status === "shipped" && (
        <th>
          <Button onClick={acceptedProduct} variant="success">
            Accepted
          </Button>
          <Button onClick={rejectedProduct} variant="danger">
            Rejected
          </Button>
        </th>
      )}
      {details.status === "new" && <th>Waiting</th>}
      {details.status === "accepted" && <th>Done</th>}
      {details.status === "rejected" && <th>Done</th>}
    </tr>
  );
}

export default ProductOrderCard;
