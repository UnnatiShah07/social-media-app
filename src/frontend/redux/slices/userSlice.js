import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils";

const initialState = {
  loading: false,
  users: [],
  singleUserDetails: {},
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

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/api/users/${userId}`);
      if (response.status === 200) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const followUser = createAsyncThunk(
  "user/followUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/api/users/follow/${userId}`);
      if (response.status === 200) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "user/unfollowUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/api/users/unfollow/${userId}`
      );
      if (response.status === 200) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editProfile = createAsyncThunk(
  "user/editProfile",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/api/users/edit", {
        userData,
      });
      if (response.status === 201) return response.data;
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

    //getUserById
    builder.addCase(getUserById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.singleUserDetails = action.payload.user;
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.loading = false;
    });

    //followUser
    builder.addCase(followUser.pending, (state, action) => {});
    builder.addCase(followUser.fulfilled, (state, action) => {});
    builder.addCase(followUser.rejected, (state, action) => {});

    //unfollowUser
    builder.addCase(unfollowUser.pending, (state, action) => {});
    builder.addCase(unfollowUser.fulfilled, (state, action) => {});
    builder.addCase(unfollowUser.rejected, (state, action) => {});

    //editProfile
    builder.addCase(editProfile.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(editProfile.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(editProfile.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const userReducer = userSlice.reducer;
