import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Home from "./pages/Home.js";
import ProductDetail from "./pages/ProductDetail.js";

function App() {
  //Chỉ có 1 Router và 1 Routes
  //Router sẽ wrap lại tất cả những Routes
  //Routes bao gồm single Route
  //Route -> render the specific element on that Route
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductDetail />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
