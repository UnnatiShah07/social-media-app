/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import {
  AddPostModal,
  BottomNav,
  EditProfile,
  Header,
  Loader,
  PostCard,
  SidebarNav,
  UserSuggestionComp,
} from "../../components";
import { FiLogOut } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import { useEffect } from "react";
import {
  followUser,
  getPostsByUser,
  getUserById,
  removeAuthData,
  unfollowUser,
  updateUserDetails,
} from "../../redux";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
  const dispatch = useDispatch();
  const {
    loading: postLoading,
    showAddPost,
    userPosts,
  } = useSelector((state) => state.postReducer);
  const { loading: userLoading, singleUserDetails: user } = useSelector(
    (state) => state.userReducer
  );
  const { userDetails } = useSelector((state) => state.authReducer);
  const { userId } = useParams();
  const isLoginUser = userDetails._id === userId;

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [personInfo, setPersonInfo] = useState({});

  useEffect(() => {
    if (isLoginUser) setPersonInfo(userDetails);
    else setPersonInfo(user);
  }, [userDetails, user]);

  useEffect(() => {
    dispatch(getUserById(userId))
      .unwrap()
      .then((response) => {
        dispatch(getPostsByUser(response.user.username));
      })
      .catch(() => {});
  }, [userId]);

  const checkIsFollowedByCurrentUser = () =>
    userDetails.following.some(
      (followingUser) => followingUser._id === personInfo._id
    );

  const handleLogout = () => {
    localStorage.clear();
    dispatch(removeAuthData());
  };

  const handleFollowUser = () =>
    dispatch(followUser(personInfo._id))
      .unwrap()
      .then((response) => {
        const { user } = response;
        dispatch(updateUserDetails(user));
      })
      .catch(() => {});

  const handleUnfollowUser = () =>
    dispatch(unfollowUser(personInfo._id))
      .unwrap()
      .then((response) => {
        const { user } = response;
        dispatch(updateUserDetails(user));
      })
      .catch(() => {});

  const closeEditProfile = () => setIsEditOpen(false);

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
                src={
                  personInfo.profile_image ??
                  "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
                }
                alt="profile"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="">
              <div className="flex flex-wrap items-center gap-3 sm:gap-7">
                <p className="font-medium">{personInfo.username}</p>
                {isLoginUser ? (
                  <button
                    className="w-36 bg-gray-100 text-font-color"
                    onClick={() => setIsEditOpen(true)}
                  >
                    Edit profile
                  </button>
                ) : checkIsFollowedByCurrentUser() ? (
                  <button
                    className="w-36 bg-gray-100 text-font-color"
                    onClick={handleUnfollowUser}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button className="w-36" onClick={handleFollowUser}>
                    Follow
                  </button>
                )}
                {isLoginUser && (
                  <div onClick={handleLogout}>
                    <FiLogOut size={20} />
                  </div>
                )}
              </div>

              <div className="hidden sm:flex flex-wrap items-center gap-4 sm:gap-10 w-full text-center text-sm py-3">
                <p>
                  <span className="font-bold">{userPosts?.length} </span>posts
                </p>
                <p>
                  <span className="font-bold">
                    {personInfo.followers?.length}{" "}
                  </span>
                  followers
                </p>
                <p>
                  <span className="font-bold">
                    {personInfo.following?.length}{" "}
                  </span>
                  following
                </p>
              </div>

              <div className="hidden sm:flex flex-col gap-1 flex-wrap w-full text-sm py-3">
                <p className="font-medium">
                  {personInfo.firstName} {personInfo.lastName}
                </p>
                <p>{personInfo.bio}</p>
                <div className="flex gap-2 items-center text-cyan-700">
                  <BiLink size={15} />
                  <a href={personInfo.website}>{personInfo.website}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-11/12 sm:hidden flex flex-col flex-wrap text-sm">
            <p className="font-medium">
              {personInfo.firstName} {personInfo.lastName}
            </p>
            <p>{personInfo.bio}</p>
            <a href={personInfo.website}>{personInfo.website}</a>
          </div>

          <div className="w-11/12 flex justify-between sm:hidden text-center text-sm">
            <div>
              <p className="font-bold">{userPosts?.length}</p>
              <p>Posts</p>
            </div>
            <div>
              <p className="font-bold">{personInfo.followers?.length}</p>
              <p>Followers</p>
            </div>
            <div>
              <p className="font-bold">{personInfo.following?.length}</p>
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
      {(userLoading || postLoading) && <Loader />}
      {showAddPost && <AddPostModal />}
      {isEditOpen && <EditProfile closeEditProfile={closeEditProfile} />}
      <Header />
      <BottomNav />
    </div>
  );
};

export default Profile;
