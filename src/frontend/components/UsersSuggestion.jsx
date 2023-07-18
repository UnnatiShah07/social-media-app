import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUser, unfollowUser, updateUserDetails } from "../redux";

const UserSuggestion = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.authReducer);

  const checkIsFollowedByCurrentUser = () =>
    userDetails.following.some(
      (followingUser) => followingUser._id === user._id
    );

  const handleFollowUser = () =>
    dispatch(followUser(user._id))
      .unwrap()
      .then((response) => {
        const { user } = response;
        dispatch(updateUserDetails(user));
      })
      .catch(() => {});

  const handleUnfollowUser = () =>
    dispatch(unfollowUser(user._id))
      .unwrap()
      .then((response) => {
        const { user } = response;
        dispatch(updateUserDetails(user));
      })
      .catch(() => {});

  return (
    <div className="mb-5 flex justify-between items-center cursor-pointer">
      <div
        className="flex items-center"
        onClick={() => navigate(`/profile/${user._id}`)}
      >
        <img
          className="w-10 h-10 rounded-3xl bg-slate-200"
          src={
            user.profile_image
              ? user.profile_image
              : "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
          }
          alt=""
        />
        <div className="flex flex-col mx-2">
          <p className="text-sm">{user.username}</p>
          <p className="text-sm">
            {user.firstName} {user.lastName}
          </p>
        </div>
      </div>
      {checkIsFollowedByCurrentUser() ? (
        <p className="text-primary font-medium" onClick={handleUnfollowUser}>
          - Unfollow
        </p>
      ) : (
        <p className="text-primary font-medium" onClick={handleFollowUser}>
          + Follow
        </p>
      )}
    </div>
  );
};

export default UserSuggestion;
