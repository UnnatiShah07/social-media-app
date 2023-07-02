import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { postReducer } from "./slices/postSlice";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
  reducer: { authReducer, postReducer, userReducer },
});
