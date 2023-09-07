import * as api from "../api/auth.js";
//file for handle the api call and the data (res)
//Watch SignUpForm.js to see how to use this
export const signupUser = async (formData) => {
  try {
    const { data } = await api.signupUser(formData);

    console.log(data);
  } catch (error) {}
};
