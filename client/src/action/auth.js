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

export const getAllSeller = async () => {
  try {
    const res = await api.getAllSeller();

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const approveSeller = async (id) => {
  try {
    const res = await api.approveSeller(id);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const rejectSeller = async (id) => {
  try {
    const res = await api.rejectSeller(id);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};
