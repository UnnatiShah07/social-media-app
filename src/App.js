/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./frontend/routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getPosts, getUsers } from "./frontend/redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, []);
  
  return (
    <>
      <AppRoutes />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
