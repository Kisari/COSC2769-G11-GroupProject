import { createContext, useContext, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLocalStorage } from "./LocalStorageHook";
import { loginUser } from "../action/auth.js";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useLocalStorage("e-commerce-token", null);

  const token = () => {
    const jwtToken = JSON.parse(
      localStorage.getItem("e-commerce-token")
    )?.token;
    return jwtToken;
  };

  const login = async (data) => {
    const result = await loginUser(data).then((res) => {
      if (res) {
        setUser(res);
        return true;
      }
      return false;
    });
    return result;
  };

  useEffect(() => {
    console.log(user);
    //Check if the user is not that role, navigate to the home page
    if (user && location.pathname === "/" && user.role === "admin") {
      navigate("/admin");
    } else if (user && location.pathname === "/" && user.role === "seller") {
      navigate("/seller");
    }
    // eslint-disable-next-line
  }, [user, location.pathname]);

  const logout = () => {
    setUser(null);
    navigate(0);
  };

  const value = useMemo(
    () => ({
      user,
      token,
      login,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
