import * as api from "../api/auth.js";
//file for handle the api call and the data (res)
//Watch SignUpForm.js to see how to use this
export const signupUser = async (formData) => {
  try {
    const res = await api.signupUser(formData);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const loginUser = async (formData) => {
  try {
    const res = await api.loginUser(formData);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {
    return;
  }
};

export const logoutUser = async () => {
  try {
    const { data } = await api.logoutUser();

    console.log(data);
  } catch (error) {}
};
