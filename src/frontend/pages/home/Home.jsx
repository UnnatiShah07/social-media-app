/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  AddPostModal,
  BottomNav,
  FilterPostPopup,
  Header,
  Loader,
  PostCard,
  SidebarNav,
  UserSuggestionComp,
} from "../../components";
import { VscSettings } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostsByUser,
  getUsers,
  setShowUserSuggestion,
  updateShowFilterPost,
} from "../../redux";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const {
    userPosts,
    loading: postLoading,
    showAddPost,
    posts,
    showFilterPost,
    filterPostType,
  } = useSelector((state) => state.postReducer);
  const { loading: userLoading, showUserSuggestion } = useSelector(
    (state) => state.userReducer
  );
  const { userDetails } = useSelector((state) => state.authReducer);
  const [filterPost, setFilterPost] = useState([]);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    dispatch(getPostsByUser(userDetails.username));
  }, [posts]);

  useEffect(() => {
    if (filterPostType === "trending")
      setFilterPost(
        userPosts.slice().sort((a, b) => b.likes.likeCount - a.likes.likeCount)
      );
    if (filterPostType === "latest")
      setFilterPost(
        userPosts
          .slice()
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
  }, [filterPostType, userPosts]);

  return (
    <div className="sm:flex min-h-screen">
      <div className="mt-12 sm:mt-0 flex w-full h-screen">
        <div className="sm:w-3/12 hidden sm:flex">
          <SidebarNav />
        </div>
        <div className="w-full sm:w-9/12 h-screen mt-5 sm:mt-0 sm:pt-10 flex flex-col items-center gap-5 overflow-auto hide-scrollbar">
          <div className="w-11/12 sm:w-6/12 flex justify-between items-center">
            <p>
              {filterPostType === "latest" ? "Latest Posts" : "Trending Posts"}
            </p>
            <div
              className="relative"
              onClick={() => dispatch(updateShowFilterPost(!showFilterPost))}
            >
              <VscSettings size={20} />
              {showFilterPost && <FilterPostPopup />}
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-7 pb-10 sm:pb-0">
            {filterPost.map((post, index) => (
              <>
                <PostCard post={post} key={post._id} />
                <div className="border w-11/12 sm:w-6/12"></div>
              </>
            ))}
          </div>
        </div>
        <div className="sm:w-4/12 h-full hidden sm:block px-8">
          <UserSuggestionComp />
        </div>
      </div>
      {(postLoading || userLoading) && <Loader />}
      {showAddPost && <AddPostModal />}
      {showUserSuggestion && (
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-gray-900/[.30]">
          <div className="sm:w-4/12 flex flex-col px-8 bg-white pt-16 pb-3 rounded-md">
            <RxCross1
              className="self-end"
              onClick={() => dispatch(setShowUserSuggestion(false))}
            />
            <UserSuggestionComp />
          </div>
        </div>
      )}
      <Header />
      <BottomNav />
    </div>
  );
};

export default Home;
