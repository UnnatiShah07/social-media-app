import { Route, Routes } from "react-router-dom";
import { Bookmark, Explore, Home, Login, PostPage, Profile, SignUp } from "../pages";
import Mockman from "mockman-js";
import { PrivateRoute } from "../components";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/explore"
        element={
          <PrivateRoute>
            <Explore />
          </PrivateRoute>
        }
      />
      <Route
        path="/bookmark"
        element={
          <PrivateRoute>
            <Bookmark />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile/:userId"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/post/:postId"
        element={
          <PrivateRoute>
            <PostPage />
          </PrivateRoute>
        }
      />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export default AppRoutes;
