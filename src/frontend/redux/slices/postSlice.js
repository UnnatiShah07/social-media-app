import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils";

const initialState = {
  loading: false,
  posts: [],
  userPosts: [],
  showAddPost: false,
  editPost: {},
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

export const uploadPost = createAsyncThunk(
  "post/uploadPost",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/api/posts", { postData });
      if (response.status === 201) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/api/posts/${postId}`);
      if (response.status === 201) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editPost = createAsyncThunk(
  "post/editPost",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/api/posts/edit/${postData._id}`,
        { postData }
      );
      if (response.status === 201) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const likePost = createAsyncThunk(
  "post/likePost",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/api/posts/like/${postId}`);
      if (response.status === 201) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "post/dislikePost",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/api/posts/dislike/${postId}`);
      if (response.status === 201) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    updateShowAddPost: (state, action) => {
      state.showAddPost = action.payload;
    },
    setEditPostData: (state, action) => {
      state.editPost = action.payload;
    },
  },
  extraReducers: (builder) => {
    //getPosts
    builder.addCase(getPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
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
      state.userPosts = action.payload.posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    });
    builder.addCase(getPostsByUser.rejected, (state, action) => {
      state.loading = false;
    });

    //uploadPost
    builder.addCase(uploadPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(uploadPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    });
    builder.addCase(uploadPost.rejected, (state, action) => {
      state.loading = false;
    });

    //deletePost
    builder.addCase(deletePost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
    });

    //editPost
    builder.addCase(editPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      state.editPost = {};
    });
    builder.addCase(editPost.rejected, (state, action) => {
      state.loading = false;
    });

    //likePost
    builder.addCase(likePost.pending, (state, action) => {});
    builder.addCase(likePost.fulfilled, (state, action) => {
      console.log(action.payload, "/////");
      state.posts = action.payload.posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    });
    builder.addCase(likePost.rejected, (state, action) => {});

    //disLikePost
    builder.addCase(dislikePost.pending, (state, action) => {});
    builder.addCase(dislikePost.fulfilled, (state, action) => {
      console.log(action.payload, "/////");
      state.posts = action.payload.posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    });
    builder.addCase(dislikePost.rejected, (state, action) => {});
  },
});

export const postReducer = postSlice.reducer;
export const { updateShowAddPost, setEditPostData } = postSlice.actions;
