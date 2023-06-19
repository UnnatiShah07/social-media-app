import {
  HiOutlineDotsHorizontal,
  HiHeart,
  HiOutlineHeart,
} from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";
import { useState } from "react";

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { username, artImage, content, likes } = post;

  return (
    <div className="h-fit w-11/12 sm:w-6/12 flex flex-col gap-2 text-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-3xl bg-slate-200"
            src={
              "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
            }
            alt=""
          />
          <p className="font-semibold">{username}</p>
        </div>
        <div>
          <HiOutlineDotsHorizontal size={20} />
        </div>
      </div>
      <img src={artImage} alt="" />
      <p className="py-3">{content}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <HiHeart size={25} color="#ff3040" />
            ) : (
              <HiOutlineHeart size={25} />
            )}
          </div>
          <FaRegComment size={22} />
        </div>
        <div onClick={() => setIsBookmarked(!isBookmarked)}>
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
        <p>
          {`${username} `}
          <span className="font-normal text-gray-500">
            {post?.caption ??
              "Caption caption caption caption"}
          </span>
        </p>
        <p className="font-normal text-gray-500">07 Jan,2020</p>
      </div>
    </div>
  );
};

export default PostCard;
