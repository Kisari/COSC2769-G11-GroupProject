import * as api from "../api/cart.js";

// export const getCartItems = async (cartId) => {
//     try {
//         const res = await api.getCart(cartId)
//     }
// }

export const addToCartAction = async (productId, quantity) => {
  try {
    const res = await api.addToCart(productId, quantity);

    if (res?.status === 200) {
      const { data } = res;
      return data;
    } else {
      return res;
    }
  } catch (error) {}
};
