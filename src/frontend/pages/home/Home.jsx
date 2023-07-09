/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { FilterPostPopup, PageLayout, PostCard } from "../../components";
import { VscSettings } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUser, getUsers, updateShowFilterPost } from "../../redux";
import { useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const {
    userPosts,
    loading: postLoading,
    posts,
    showFilterPost,
    filterPostType,
  } = useSelector((state) => state.postReducer);
  const { loading: userLoading } = useSelector((state) => state.userReducer);
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
    <PageLayout loading={postLoading || userLoading}>
      <div className="w-11/12 sm:w-6/12 flex justify-between items-center">
        <p>{filterPostType === "latest" ? "Latest Posts" : "Trending Posts"}</p>
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
    </PageLayout>
  );
};

export default Home;
