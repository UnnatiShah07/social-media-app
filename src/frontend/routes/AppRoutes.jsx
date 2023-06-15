import { Route, Routes } from "react-router-dom";
import { Home, Login, SignUp } from "../pages";
import Mockman from "mockman-js";
import { PrivateRoute } from "../components";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export default AppRoutes;
