import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils";

const initialState = {
  loading: false,
  posts: [],
  userPosts: [],
  showAddPost: false,
  editPost: {},
  bookmarks: [],
  showFilterPost: false,
  filterPostType: "latest",
  singlePost: {},
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

export const bookmarkPost = createAsyncThunk(
  "post/bookmarkPost",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/api/users/bookmark/${postId}`
      );
      if (response.status === 200) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeBookmarkPost = createAsyncThunk(
  "post/removeBookmarkPost",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/api/users/remove-bookmark/${postId}`
      );
      if (response.status === 200) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllBookmarkPost = createAsyncThunk(
  "post/getAllBookmarkPost",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/api/users/bookmark/");
      if (response.status === 200) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPostById = createAsyncThunk(
  "post/getPostById",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/api/posts/${postId}`);
      if (response.status === 200) return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducers: {
    updateShowAddPost: (state, action) => {
      state.showAddPost = action.payload;
    },
    setEditPostData: (state, action) => {
      state.editPost = action.payload;
    },
    updateShowFilterPost: (state, action) => {
      state.showFilterPost = action.payload;
    },
    updateFilterPostType: (state, action) => {
      state.filterPostType = action.payload;
    },
    updateCommentsInPosts: (state, action) => {
      state.posts = action.payload;
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
      state.posts = action.payload.posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    });
    builder.addCase(likePost.rejected, (state, action) => {});

    //disLikePost
    builder.addCase(dislikePost.pending, (state, action) => {});
    builder.addCase(dislikePost.fulfilled, (state, action) => {
      state.posts = action.payload.posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    });
    builder.addCase(dislikePost.rejected, (state, action) => {});

    //bookmarkPost
    builder.addCase(bookmarkPost.pending, (state, action) => {});
    builder.addCase(bookmarkPost.fulfilled, (state, action) => {
      state.bookmarks = action.payload.bookmarks;
    });
    builder.addCase(bookmarkPost.rejected, (state, action) => {});

    //removeBookmarkPost
    builder.addCase(removeBookmarkPost.pending, (state, action) => {});
    builder.addCase(removeBookmarkPost.fulfilled, (state, action) => {
      state.bookmarks = action.payload.bookmarks;
    });
    builder.addCase(removeBookmarkPost.rejected, (state, action) => {});

    //getAllBookmarkPost
    builder.addCase(getAllBookmarkPost.pending, (state, action) => {});
    builder.addCase(getAllBookmarkPost.fulfilled, (state, action) => {
      state.bookmarks = action.payload.bookmarks;
    });
    builder.addCase(getAllBookmarkPost.rejected, (state, action) => {});

    //getPostById
    builder.addCase(getPostById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.singlePost = action.payload.post;
      state.loading = false;
    });
    builder.addCase(getPostById.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const postReducer = postSlice.reducer;
export const {
  updateShowAddPost,
  setEditPostData,
  updateShowFilterPost,
  updateFilterPostType,
  updateCommentsInPosts,
} = postSlice.actions;
