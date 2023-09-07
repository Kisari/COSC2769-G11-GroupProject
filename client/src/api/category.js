//file to call the api
import axios from "axios";

const backend_url = "http://localhost:4000";

export const createCategory = (formData) =>
  axios.post(`${backend_url}/api/v1/category`, formData);

export const getAllCategory = () => axios.get(`${backend_url}/api/v1/category`);

export const getCategoryByID = (id) =>
  axios.get(`${backend_url}/api/v1/category/${id}`);

export const deleteCategory = (id) =>
  axios.get(`${backend_url}/api/v1/category/${id}`);

export const updateCategory = (id, formData) =>
  axios.get(`${backend_url}/api/v1/category/${id}`, formData);
