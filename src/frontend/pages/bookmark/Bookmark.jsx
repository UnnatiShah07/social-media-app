/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { PageLayout, PostCard } from "../../components";
import { useState } from "react";
import { useEffect } from "react";
import { getAllBookmarkPost } from "../../redux";

const Bookmark = () => {
  const dispatch = useDispatch();
  const { bookmarks, posts } = useSelector((state) => state.postReducer);
  const [bookmarkPosts, setBookmarkPosts] = useState([]);

  useEffect(() => {
    dispatch(getAllBookmarkPost());
  }, []);

  useEffect(() => {
    const newBookmarks = bookmarks.map((bookmark) =>
      posts.find((post) => post._id === bookmark._id)
    );
    setBookmarkPosts(newBookmarks);
  }, [bookmarks, posts]);

  return (
    <PageLayout>
      <div className="w-full flex flex-col items-center gap-7 pb-10 sm:pb-0">
        {bookmarkPosts.length ? (
          bookmarkPosts.map((post, index) => (
            <>
              <PostCard post={post} key={post?._id} />
              <div className="border w-11/12 sm:w-6/12"></div>
            </>
          ))
        ) : (
          <p className="text-primary text-3xl font-medium">No Bookmarks</p>
        )}
      </div>
    </PageLayout>
  );
};

export default Bookmark;
