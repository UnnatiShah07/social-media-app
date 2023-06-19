import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils";

const initialState = {
  loading: false,
  posts: [],
  userPosts: [],
};

export const getPosts = createAsyncThunk(
  "post/getPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/api/posts");
      if (response.status === 200) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPostsByUser = createAsyncThunk(
  "post/getPostsByUser",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/api/posts/user/${username}`);
      if (response.status === 200) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //getPosts
    builder.addCase(getPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
    });
    //getPostsByUser
    builder.addCase(getPostsByUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPostsByUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userPosts = action.payload.posts;
    });
    builder.addCase(getPostsByUser.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const postReducer = postSlice.reducer;
