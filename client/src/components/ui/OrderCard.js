// OrderCard.js

import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const OrderCard = ({ order }) => {
  const [updatedStatus, setUpdatedStatus] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAccepted = () => {
    console.log("accepted");
  };

  const handleRejected = () => {
    console.log("Rejected");
  };

  return (
    <tr>
      <td>{order._id}</td>
      <td>{order.customerId}</td>
      <td>{order.dateCreated}</td>
      <td>{order.orderStatus}</td>
      <td>${order.totalPrice}</td>
      <td>
        {order.orderStatus === "pending" && (
          <Button variant="success" onClick={handleAccepted}>
            Accepted
          </Button>
        )}
        {order.orderStatus === "pending" && (
          <Button variant="danger" onClick={handleRejected}>
            Rejected
          </Button>
        )}
      </td>
    </tr>
  );
};

export default OrderCard;
