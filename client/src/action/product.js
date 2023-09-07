import * as api from "../api/auth.js";
//file for handle the api call and the data (res)
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
