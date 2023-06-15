import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.authReducer);

  return token ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
