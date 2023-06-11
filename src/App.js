import "./App.css";
import AppRoutes from "./frontend/routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
