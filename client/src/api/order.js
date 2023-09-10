//file to call the api
import axios from "axios";

const backend_url = "http://localhost:4000";

export const getAllOrderByCustomer = () =>
  axios.get(`${backend_url}/api/v1/customer/order`);

export const getAllOrderBySeller = () =>
  axios.get(`${backend_url}/api/v1/seller/order`);

export const getSellerStatistic = () =>
  axios.get(`${backend_url}/api/v1/seller/statistics`);

export const getCustomerInfoByOrderID = (id) =>
  axios.get(`${backend_url}/api/v1/seller/order/${id}/customer`);

export const getOrderByCustomerID = (orderID) =>
  axios.get(`${backend_url}/api/v1/customer/order/${orderID}`);

export const getOrderBySellerID = (orderID) =>
  axios.get(`${backend_url}/api/v1/seller/order/${orderID}`);
export const customerAcceptOrder = (orderID, productID) =>
  axios.put(
    `${backend_url}/api/v1/customer/order/${orderID}/details/${productID}/accepted`
  );
export const customerRejectOrder = (orderID, productID) =>
  axios.put(
    `${backend_url}/api/v1/customer/order/${orderID}/details/${productID}/rejected`
  );
export const sellerShipOrder = (orderId, orderDetailId) =>
  axios.put(
    `${backend_url}/api/v1/seller/order/${orderId}/details/${orderDetailId}/shipped`
  );

export const sellerCancelOrder = (orderId, orderDetailId) =>
  axios.put(
    `${backend_url}/api/v1/seller/order/${orderId}/details/${orderDetailId}/canceled`
  );
