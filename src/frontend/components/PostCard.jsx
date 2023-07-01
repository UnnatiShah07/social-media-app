import {
  HiOutlineDotsHorizontal,
  HiHeart,
  HiOutlineHeart,
} from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import EditDeletePopup from "./EditDeletePopup";
import {
  bookmarkPost,
  dislikePost,
  likePost,
  removeBookmarkPost,
} from "../redux";
import { getProfileImage } from "../utils";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetails } = useSelector((state) => state.authReducer);
  const { users } = useSelector((state) => state.userReducer);
  const { bookmarks } = useSelector((state) => state.postReducer);
  const { username, artImage, content, likes, createdAt, userId } = post;

  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isShowEditDelete, setIsShowEditDelete] = useState(false);

  useEffect(() => {
    const isLikedByCurrentUser = post.likes.likedBy.some(
      (user) => user._id === userDetails._id
    );
    setIsLiked(isLikedByCurrentUser);
    const isBookmarkedByCurrentUser = bookmarks.some(
      (bookmarkPostId) => bookmarkPostId === post._id
    );
    setIsBookmarked(isBookmarkedByCurrentUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  const handleLikeDislike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) dispatch(likePost(post._id));
    else dispatch(dislikePost(post._id));
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) dispatch(bookmarkPost(post._id));
    else dispatch(removeBookmarkPost(post._id));
  };

  return (
    <div className="h-fit w-11/12 sm:w-6/12 flex flex-col gap-2 text-sm relative">
      <div className="flex justify-between items-center">
        <div
          className="flex items-center gap-2"
          onClick={() => navigate(`/profile/${userId}`)}
        >
          <img
            className="w-10 h-10 rounded-3xl bg-slate-200"
            src={
              userDetails.username === username
                ? userDetails.profile_image
                : getProfileImage(users, post) ??
                  "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
            }
            alt="profile"
          />
          <p className="font-semibold">{username}</p>
        </div>
        {userDetails.username === username && (
          <div>
            <HiOutlineDotsHorizontal
              size={20}
              onClick={() => setIsShowEditDelete(!isShowEditDelete)}
            />
          </div>
        )}
      </div>
      <img src={artImage} alt="" />
      <p className="py-3">{content}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div onClick={handleLikeDislike}>
            {isLiked ? (
              <HiHeart size={25} color="#ff3040" />
            ) : (
              <HiOutlineHeart size={25} />
            )}
          </div>
          <FaRegComment size={22} />
        </div>
        <div onClick={handleBookmark}>
          {isBookmarked ? (
            <RiBookmarkFill size={22} />
          ) : (
            <RiBookmarkLine size={22} />
          )}
        </div>
      </div>
      <div className="text-xs font-medium flex flex-col gap-1">
        <p>
          {likes.likeCount} {likes.likeCount > 1 ? "likes" : "like"}
        </p>
        <p className="font-normal text-gray-500">
          {dayjs(createdAt).format("MMM D, YYYY h:mm A")}
        </p>
      </div>
      {isShowEditDelete && (
        <EditDeletePopup
          post={post}
          closePopup={() => setIsShowEditDelete(false)}
        />
      )}
    </div>
  );
};

export default PostCard;
