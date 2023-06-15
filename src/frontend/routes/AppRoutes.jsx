import { Navigate, Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../pages";
import Mockman from "mockman-js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export default AppRoutes;
