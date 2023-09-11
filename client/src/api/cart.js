//file to call the api
import axios from "axios";

const backend_url = "http://localhost:4000";

export const getCart = (cartId) =>
  axios.get(`${backend_url}/api/v1/cart`, { cartId });

export const addToCart = (productId, quantity) =>
  axios.post(`${backend_url}/api/v1/cart`, { productId, quantity });

export const removeFromCart = (cartId, productId) =>
  axios.delete(`${backend_url}/api/v1/cart`, { cartId, productId });

export const clearCart = (cartId) =>
  axios.delete(`${backend_url}/api/v1/cart/clear`, { cartId });
