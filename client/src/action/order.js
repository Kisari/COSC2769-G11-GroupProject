import * as api from "../api/order.js";
//file for handle the api call and the data (res)
//Watch SignUpForm.js to see how to use this
export const getAllOrderByCustomer = async () => {
  try {
    const res = await api.getAllOrderByCustomer();

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const getAllOrderBySeller = async () => {
  try {
    const res = await api.getAllOrderBySeller();

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const getOrderByCustomerID = async (id) => {
  try {
    const res = await api.getOrderByCustomerID(id);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const getSellerStatistic = async () => {
  try {
    const res = await api.getSellerStatistic();

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const getCustomerInfoByOrderID = async (id) => {
  try {
    const res = await api.getCustomerInfoByOrderID(id);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const getOrderBySellerID = async (id) => {
  try {
    const res = await api.getOrderBySellerID(id);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const customerAcceptOrder = async (orderID, productID) => {
  try {
    const res = await api.customerAcceptOrder(orderID, productID);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const customerRejectOrder = async (orderID, productID) => {
  try {
    const res = await api.customerAcceptOrder(orderID, productID);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const sellerShipOrder = async (orderID, productID) => {
  try {
    const res = await api.sellerShipOrder(orderID, productID);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const sellerCancelOrder = async (orderID, productID) => {
  try {
    const res = await api.sellerCancelOrder(orderID, productID);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};
