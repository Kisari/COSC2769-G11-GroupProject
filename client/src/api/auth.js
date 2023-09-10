//file to call the api
import axios from "axios";

const backend_url = "http://localhost:4000";
axios.defaults.withCredentials = true;

export const signupUser = (formData) =>
  axios.post(`${backend_url}/api/v1/user/signup`, formData);

export const loginUser = (formData) =>
  axios.post(`${backend_url}/api/v1/user/login`, formData);

export const logoutUser = () => axios.get(`${backend_url}/api/v1/user/logout`);

export const getAllSeller = () => axios.get(`${backend_url}/api/v1/seller`);

export const approveSeller = (id) =>
  axios.put(`${backend_url}/api/v1/seller/${id}/approved`);

export const rejectSeller = (id) =>
  axios.put(`${backend_url}/api/v1/seller/${id}/rejected`);
