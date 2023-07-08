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
import { setShowUserSuggestion } from "../../redux";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { loader } from "../../assets";

const Explore = () => {
  const dispatch = useDispatch();
  const { loading, posts, showAddPost } = useSelector(
    (state) => state.postReducer
  );
  const { showUserSuggestion } = useSelector((state) => state.userReducer);
  const [postData, setPostData] = useState([]);
  const [page, setPage] = useState(1);
  const [dataLoading, setDataLoading] = useState(false);
  const obseverRef = useRef();

  useEffect(() => {
    console.log("called useEffect");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          mergeData();
        }
      },
      { threshold: 1 }
    );

    if (obseverRef.current) observer.observe(obseverRef.current);

    return () => {
      if (obseverRef.current) observer.unobserve(obseverRef.current);
    };
  }, [obseverRef, page]);

  const mergeData = () => {
    if (page <= 3) {
      setDataLoading(true);
      setTimeout(() => {
        const data = posts.slice(0, page * 4);
        setPostData(data);
        setPage((page) => page + 1);
        setDataLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="sm:flex min-h-screen">
      <div className="mt-12 sm:mt-0 flex w-full h-screen">
        <div className="sm:w-3/12 hidden sm:flex">
          <SidebarNav />
        </div>
        <div className="w-full sm:w-9/12 h-screen mt-5 sm:mt-0 sm:pt-10 flex flex-col items-center gap-5 overflow-auto hide-scrollbar">
          <div className="w-full flex flex-col items-center gap-7 pb-10 sm:pb-0">
            {postData.map((post, index) => (
              <>
                <PostCard post={post} key={post.id} />
                <div className="border w-11/12 sm:w-6/12"></div>
              </>
            ))}
            <div ref={obseverRef}></div>
            {dataLoading && (
              <img src={loader} alt="loader" className="h-16 w-16" />
            )}
          </div>
        </div>
        <div className="sm:w-4/12 h-full hidden sm:block px-8">
          <UserSuggestionComp />
        </div>
      </div>
      {loading && <Loader />}
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

export default Explore;
