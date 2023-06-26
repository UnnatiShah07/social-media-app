/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import {
  AddPostModal,
  BottomNav,
  Header,
  Loader,
  PostCard,
  SidebarNav,
  UserSuggestionComp,
} from "../../components";
import { useEffect } from "react";
import { getPosts } from "../../redux";

const Explore = () => {
  const dispatch = useDispatch();
  const { loading, posts, showAddPost } = useSelector(
    (state) => state.postReducer
  );
  // const categoryStyle = "border border-primary py-1 px-3 rounded-3xl text-sm font-medium";

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="sm:flex min-h-screen">
      <div className="mt-12 sm:mt-0 flex w-full h-screen">
        <div className="sm:w-3/12 hidden sm:flex">
          <SidebarNav />
        </div>
        <div className="w-full sm:w-9/12 h-screen mt-5 sm:mt-0 sm:pt-10 flex flex-col items-center gap-5 overflow-auto hide-scrollbar">
          {/* <div className="w-11/12 sm:w-12/12 flex justify-between items-center">
            <p className={categoryStyle}>Embroidery Art</p>
            <p className={categoryStyle}>Lippan Mirror Art</p>
            <p className={categoryStyle}>Mandala Art</p>
            <p className={categoryStyle}>Clay Earing Art</p>
          </div> */}
          <div className="w-full flex flex-col items-center gap-7 pb-10 sm:pb-0">
            {posts.map((post, index) => (
              <>
                <PostCard post={post} key={post.id} />
                <div className="border w-11/12 sm:w-6/12"></div>
              </>
            ))}
          </div>
        </div>
        <UserSuggestionComp />
      </div>
      {loading && <Loader />}
      {showAddPost && <AddPostModal />}
      <Header />
      <BottomNav />
    </div>
  );
};

export default Explore;
