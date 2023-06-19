/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  BottomNav,
  Header,
  Loader,
  PostCard,
  SidebarNav,
  UserSuggestion,
} from "../../components";
import { VscSettings } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUser, getUsers } from "../../redux";

const Home = () => {
  const dispatch = useDispatch();
  const { userPosts, loading: postLoading } = useSelector(
    (state) => state.postReducer
  );
  const { users, loading: userLoading } = useSelector(
    (state) => state.userReducer
  );
  const { userDetails } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(getPostsByUser(userDetails.username));
    dispatch(getUsers());
  }, []);

  return (
    <div className="sm:flex min-h-screen">
      <div className="mt-12 sm:mt-0 flex w-full h-screen">
        <div className="sm:w-3/12 hidden sm:flex">
          <SidebarNav />
        </div>
        <div className="w-full sm:w-9/12 h-screen mt-5 sm:mt-0 sm:pt-10 flex flex-col items-center gap-5 overflow-auto hide-scrollbar">
          <div className="w-11/12 sm:w-6/12 flex justify-between items-center">
            <p>Latest Posts</p>
            <VscSettings size={20} />
          </div>
          <div className="w-full h-screen flex flex-col items-center gap-7">
            {userPosts.map((post, index) => (
              <>
                <PostCard post={post} key={post.id} />
                {/* {index !== posts.length - 1 && ( */}
                <div className="border w-11/12 sm:w-6/12"></div>
                {/* )} */}
              </>
            ))}
          </div>
        </div>
        <div className="sm:w-4/12 h-full hidden sm:block px-8">
          <input
            type="text"
            className="h-10 px-3 my-8 mt-10"
            placeholder="Search people..."
          />
          <div className="">
            {users.map((user) => (
              <UserSuggestion user={user} key={user.id} />
            ))}
          </div>
        </div>
      </div>
      {(postLoading || userLoading) && <Loader />}
      <Header />
      <BottomNav />
    </div>
  );
};

export default Home;
