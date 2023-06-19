import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils";

const initialState = {
  loading: false,
  users: [],
};

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/api/users");
      if (response.status === 200) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //getUsers
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      const loginUser = JSON.parse(localStorage.getItem("user"));
      const newUser = action.payload.users.filter(
        (user) => user._id !== loginUser._id
      );
      state.users = newUser;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const userReducer = userSlice.reducer;
