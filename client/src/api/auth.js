//file to call the api
import axios from "axios";

const backend_url = "http://localhost:4000";

export const signupUser = (formData) =>
  axios.post(`${backend_url}/api/v1/user/signup`, formData);
