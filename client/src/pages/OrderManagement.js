import React, { useEffect, useState } from "react";
import OrderCard from "../components/ui/OrderCard";
import axios from "axios"; // Import Axios for making API requests
import { Table } from "react-bootstrap"; // Import Bootstrap Table component

const OrderManagement = () => {
  const [orders, setOrders] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch customer's orders and their statuses from the backend
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/customer/order"
        );
        setOrders(response.data);
        setIsLoading(false); // Set loading to false when data is fetched
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container-lg mt-4">
      <h1>Orders History</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date Created</th>
            <th>Order Status</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td>Loading...</td>
            </tr> // Display a loading message while fetching data
          ) : (
            orders.orders.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderManagement;
