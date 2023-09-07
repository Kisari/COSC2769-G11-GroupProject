//file to call the api
import axios from "axios";

const backend_url = "http://localhost:4000";

export const getAllProduct = () => axios.get(`${backend_url}/api/v1/product`);

export const getProductByID = (id) =>
  axios.get(`${backend_url}/api/v1/product/${id}`);

export const createProduct = (formData) =>
  axios.post(`${backend_url}/api/v1/product`, formData);

export const deleteProduct = (id) =>
  axios.delete(`${backend_url}/api/v1/product/${id}`);

export const updateProduct = (id) =>
  axios.put(`${backend_url}/api/v1/product/${id}`);