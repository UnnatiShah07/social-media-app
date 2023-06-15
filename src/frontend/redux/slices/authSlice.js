import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils";

const initialState = {
  loading: false,
  token: localStorage.getItem("token") ?? "",
  userDetails: JSON.parse(localStorage.getItem("user")) ?? {},
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/api/auth/login", params);
      if (response.status === 200) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/api/auth/signup", params);
      if (response.status === 201) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //login
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { encodedToken, foundUser } = action.payload;
      state.loading = false;
      state.token = encodedToken;
      state.userDetails = foundUser;
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("user", JSON.stringify(foundUser));
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
    });

    //signup
    builder.addCase(signupUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      const { encodedToken, createdUser } = action.payload;
      state.loading = false;
      state.token = encodedToken;
      state.userDetails = createdUser;
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("user", JSON.stringify(createdUser));
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

// export const {} = authSlice.actions;
export const authReducer = authSlice.reducer;
