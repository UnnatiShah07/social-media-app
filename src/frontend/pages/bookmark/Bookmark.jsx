/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import {
  AddPostModal,
  BottomNav,
  Header,
  PostCard,
  SidebarNav,
  UserSuggestionComp,
} from "../../components";
import { useState } from "react";
import { useEffect } from "react";
import { getAllBookmarkPost } from "../../redux";

const Bookmark = () => {
  const dispatch = useDispatch();
  const { bookmarks, posts, showAddPost } = useSelector(
    (state) => state.postReducer
  );
  const [bookmarkPosts, setBookmarkPosts] = useState([]);

  useEffect(() => {
    dispatch(getAllBookmarkPost());
  }, []);

  useEffect(() => {
    const newBookmarks = bookmarks.map((bookmark) =>
      posts.find((post) => post._id === bookmark)
    );
    setBookmarkPosts(newBookmarks);
  }, [bookmarks, posts]);

  return (
    <div className="sm:flex min-h-screen">
      <div className="mt-12 sm:mt-0 flex w-full h-screen">
        <div className="sm:w-3/12 hidden sm:flex">
          <SidebarNav />
        </div>
        <div className="w-full sm:w-9/12 h-screen mt-5 sm:mt-0 sm:pt-10 flex flex-col items-center gap-5 overflow-auto hide-scrollbar">
          <div className="w-full h-screen flex flex-col items-center gap-7">
            {bookmarkPosts.length ? (
              bookmarkPosts.map((post, index) => (
                <>
                  <PostCard post={post} key={post._id} />
                  <div className="border w-11/12 sm:w-6/12"></div>
                </>
              ))
            ) : (
              <p className="text-primary text-3xl font-medium">No Bookmarks</p>
            )}
          </div>
        </div>
        <UserSuggestionComp />
      </div>
      {showAddPost && <AddPostModal />}
      <Header />
      <BottomNav />
    </div>
  );
};

export default Bookmark;
