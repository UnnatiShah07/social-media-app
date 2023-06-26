import { useSelector } from "react-redux";
import {
  AddPostModal,
  BottomNav,
  Header,
  PostCard,
  SidebarNav,
  UserSuggestionComp,
} from "../../components";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  const { showAddPost, userPosts } = useSelector((state) => state.postReducer);
  const { userDetails } = useSelector((state) => state.authReducer);

  return (
    <div className="sm:flex min-h-screen">
      <div className="mt-12 sm:mt-0 flex w-full h-screen">
        <div className="sm:w-3/12 hidden sm:flex">
          <SidebarNav />
        </div>
        <div className="w-full sm:w-9/12 h-screen mt-5 sm:mt-0 sm:pt-10 flex flex-col items-center gap-5 overflow-auto hide-scrollbar">
          <div className="w-11/12 sm:w-9/12 flex gap-10">
            <div className="w-36 h-24 rounded-full sm:w-40 sm:h-40 sm:rounded-full border bg-slate-200">
              <img
                src={userDetails.profile_image}
                alt="profile"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="">
              <div className="flex flex-wrap items-center gap-3 sm:gap-10">
                <p className="font-medium">{userDetails.username}</p>
                <button className="w-36 bg-gray-100 text-font-color">
                  Edit profile
                </button>
                <FiLogOut size={20} />
              </div>

              <div className="hidden sm:flex flex-wrap items-center gap-4 sm:gap-10 w-full text-center text-sm py-3">
                <p>
                  <span className="font-bold">{userPosts.length} </span>posts
                </p>
                <p>
                  <span className="font-bold">
                    {userDetails.followers.length}{" "}
                  </span>
                  followers
                </p>
                <p>
                  <span className="font-bold">
                    {userDetails.following.length}{" "}
                  </span>
                  following
                </p>
              </div>

              <div className="hidden sm:flex flex-col flex-wrap w-full text-sm py-3">
                <p className="font-medium">
                  {userDetails.firstName} {userDetails.lastName}
                </p>
                <p>{userDetails.bio ?? "My bio"}</p>
              </div>
            </div>
          </div>

          <div className="w-11/12 sm:hidden flex flex-col flex-wrap text-sm">
            <p className="font-medium">
              {userDetails.firstName} {userDetails.lastName}
            </p>
            <p>{userDetails.bio ?? "My bio"}</p>
          </div>

          <div className="w-11/12 flex justify-between sm:hidden text-center text-sm">
            <div>
              <p className="font-bold">{userPosts.length}</p>
              <p>Posts</p>
            </div>
            <div>
              <p className="font-bold">{userDetails.followers.length}</p>
              <p>Followers</p>
            </div>
            <div>
              <p className="font-bold">{userDetails.following.length}</p>
              <p>Following</p>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-7 pb-10 mt-5 sm:pb-0">
            {userPosts.map((post, index) => (
              <>
                <PostCard post={post} key={post._id} />
                <div className="border w-11/12 sm:w-6/12"></div>
              </>
            ))}
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

export default Profile;
