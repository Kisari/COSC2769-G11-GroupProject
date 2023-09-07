import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthHook";

export const AuthRoute = ({ children, role }) => {
  //get the user object from hook
  const { user } = useAuth();

  //Navigate the user to blocked page if they are not the specific user

  if (user == null) {
    return <Navigate to="/blocked" />;
  }
  if (user?.type !== role) {
    return <Navigate to="/blocked" />;
  }

  return children;
};
