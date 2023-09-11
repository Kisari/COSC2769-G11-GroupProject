import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ order }) => {
  const orderID = order._id;
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/orderDetail/${orderID}`, {
      state: {
        order: order,
      },
    });
  };

  console.log(order);

  return (
    <tr onClick={handleDetail}>
      <td>{order._id}</td>
      <td>{order.dateCreated}</td>
      <td>{order.orderStatus}</td>
      <td>${order.totalPrice}</td>
    </tr>
  );
};

export default OrderCard;
