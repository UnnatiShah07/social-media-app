import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
