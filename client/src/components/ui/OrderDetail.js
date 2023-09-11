import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table } from "react-bootstrap"; // Import Bootstrap Table component
import axios from "axios"; // Import Axios
import ProductOrderCard from "../../components/ui/ProductOrderCard";

function OrderDetail() {
  const location = useLocation();
  const [order, setOrder] = useState();
  const [orderDetail, setOrderDetail] = useState();

  useEffect(() => {
    setOrder(location.state.order);
  }, []);

  useEffect(() => {
    if (order) {
      const fetchOrders = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4000/api/v1/customer/order/${order._id}`
          );
          setOrderDetail(response.data);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      };

      fetchOrders();
    }
  }, [order]);

  return (
    <div className="container-lg mt-4">
      <h1>Order ID: {order && order._id}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Product Status</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {console.log("Order Detail:")}
          {console.log(orderDetail)}
          {orderDetail?.orderDetails.map((item) => {
            return (
              <ProductOrderCard
                key={item._id}
                details={item}
                orderID={order._id}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default OrderDetail;
