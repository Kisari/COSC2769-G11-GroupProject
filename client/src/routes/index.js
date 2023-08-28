import Login from "../pages/Login.js";
import Signup from "../pages/Signup.js";
import Home from "../pages/Home.js";
import ProductDetail from "../pages/ProductDetail.js";

// Public Routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/productDetail", component: ProductDetail },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
