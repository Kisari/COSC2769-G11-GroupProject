import * as api from "../api/auth.js";
//file for handle the api call and the data (res)
export const createCategory = async (formData) => {
  try {
    const res = await api.createCategory(formData);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const getAllCategory = async () => {
  try {
    const res = await api.getAllCategory();

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const getCategoryByID = async (id) => {
  try {
    const res = await api.getCategoryByID(id);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const deleteCategory = async (id) => {
  try {
    const res = await api.deleteCategory(id);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const updateCategory = async (id, form) => {
  try {
    const res = await api.updateCategory(id, form);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};
