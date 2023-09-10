import * as api from "../api/product.js";
//file for handle the api call and the data (res)
export const getAllProduct = async () => {
  try {
    const res = await api.getAllProduct();

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const getProductByID = async (id) => {
  try {
    const res = await api.getProductByID(id);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const createProduct = async (formData) => {
  try {
    const res = await api.createProduct(formData);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const deleteProduct = async (id) => {
  try {
    const res = await api.deleteProduct(id);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};

export const updateProduct = async (id, formData) => {
  try {
    const res = await api.updateProduct(id, formData);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};
