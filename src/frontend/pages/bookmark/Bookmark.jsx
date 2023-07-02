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
import { getAllBookmarkPost, setShowUserSuggestion } from "../../redux";
import { RxCross1 } from "react-icons/rx";

const Bookmark = () => {
  const dispatch = useDispatch();
  const { bookmarks, posts, showAddPost } = useSelector(
    (state) => state.postReducer
  );
  const { showUserSuggestion } = useSelector((state) => state.userReducer);
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
          <div className="w-full flex flex-col items-center gap-7 pb-10 sm:pb-0">
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
        <div className="sm:w-4/12 h-full hidden sm:block px-8">
          <UserSuggestionComp />
        </div>
      </div>
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

export default Bookmark;
