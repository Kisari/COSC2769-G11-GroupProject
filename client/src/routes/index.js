// component imported
import Login from "../pages/Login.js";
import Signup from "../pages/Signup.js";
import Home from "../pages/Home.js";
import ProductDetail from "../pages/ProductDetail.js";
import ShoppingCart from "../pages/ShoppingCart.js";

import Seller from "../pages/Seller.js";
import Admin from "../pages/Admin.js";

import AccessDenied from "../pages/AccessDenied.js";

// Public Routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/blocked", component: AccessDenied },
  { path: "/productDetail", component: ProductDetail },
  { path: "/login", component: Login, layout: null },
  { path: "/signup", component: Signup, layout: null },
  { path: "/shoppingCart", component: ShoppingCart, layout: null },
  { path: "/sellers/*", component: Seller, layout: null, require: "seller" },
  { path: "/admin/*", component: Admin, layout: null, require: "admin" },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
