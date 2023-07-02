/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setShowUserSuggestion, updateCommentsInPosts } from "../../redux";
import {
  AddPostModal,
  BottomNav,
  Header,
  Loader,
  PostCard,
  SidebarNav,
  UserSuggestionComp,
} from "../../components";
import { RxCross1 } from "react-icons/rx";
import { BiArrowBack } from "react-icons/bi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState } from "react";

const PostPage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const {
    loading: postLoading,
    showAddPost,
    posts,
  } = useSelector((state) => state.postReducer);
  const { showUserSuggestion } = useSelector((state) => state.userReducer);
  const { userDetails } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const [commentValue, setCommentValue] = useState("");
  const [singlePost, setSinglePost] = useState({});
  const [commentLoading, setCommentLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [comment, setComment] = useState(false);

  useEffect(() => {
    setSinglePost(posts.find((post) => post._id === postId));
  }, [posts]);

  const handleCommentPost = () => {
    setCommentLoading(true);
    setTimeout(() => {
      setCommentLoading(false);
      setCommentValue("");
    }, 700);

    if (isEdit) {
      const commentObj = {
        ...comment,
        comment: commentValue,
      };
      const newPosts = posts.map((post) =>
        post._id === postId
          ? {
              ...post,
              comments: post.comments.map((com) =>
                com.commentId === comment.commentId ? commentObj : com
              ),
            }
          : post
      );
      dispatch(updateCommentsInPosts(newPosts));
      setIsEdit(false);
    } else {
      const commentObj = {
        commentId: singlePost.comments?.length + 1,
        comment: commentValue,
        ...userDetails,
      };
      const newPosts = posts.map((post) =>
        post._id === postId
          ? { ...post, comments: [commentObj, ...post.comments] }
          : post
      );
      dispatch(updateCommentsInPosts(newPosts));
    }
  };

  const handleDeleteComment = (commentId) => {
    setCommentLoading(true);
    setTimeout(() => {
      setCommentLoading(false);
    }, 700);
    const newPosts = posts.map((post) => {
      if (post._id === postId)
        return {
          ...post,
          comments: post.comments.filter(
            (comment) => comment.commentId !== commentId
          ),
        };
      else return { ...post };
    });
    dispatch(updateCommentsInPosts(newPosts));
  };

  const handleEditComment = (setIsShow, comment) => {
    setIsEdit(true);
    setIsShow(false);
    setCommentValue(comment.comment);
    setComment(comment);
  };

  return (
    <div className="sm:flex min-h-screen">
      <div className="mt-12 sm:mt-0 flex w-full h-screen">
        <div className="sm:w-3/12 hidden sm:flex">
          <SidebarNav />
        </div>
        <div className="w-full sm:w-9/12 h-screen mt-5 sm:mt-0 sm:pt-10 pb-10 sm:pb-0 flex flex-col items-center gap-5 overflow-auto hide-scrollbar">
          <div className="w-11/12 sm:w-6/12 flex gap-3 items-center">
            <BiArrowBack size={20} onClick={() => navigate(-1)} />
            <p>Post</p>
          </div>
          <div className="w-full flex flex-col items-center gap-7 pb-10 sm:pb-10">
            <PostCard post={singlePost} />
            <div className="flex gap-2 w-11/12 sm:w-6/12 h-fit">
              <input
                className="h-fit"
                type="text"
                placeholder="Add your comment"
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
              />
              <button
                className="secondary-btn w-fit"
                onClick={handleCommentPost}
              >
                Post
              </button>
            </div>
            {singlePost.comments?.length ? (
              singlePost.comments.map((comment) => (
                <CommentCard
                  comment={comment}
                  handleDeleteComment={handleDeleteComment}
                  handleEditComment={handleEditComment}
                  key={comment.commentId}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="sm:w-4/12 h-full hidden sm:block px-8">
          <UserSuggestionComp />
        </div>
      </div>
      {(postLoading || commentLoading) && <Loader />}
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

const CommentCard = ({ comment, handleDeleteComment, handleEditComment }) => {
  const navigate = useNavigate();
  const { userDetails } = useSelector((state) => state.authReducer);
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="flex flex-col w-11/12 sm:w-6/12 border p-3 relative">
      <div className="mb-5 flex justify-between items-center">
        <div
          className="flex items-center"
          onClick={() => navigate(`/profile/${comment.userId}`)}
        >
          <img
            className="w-10 h-10 rounded-3xl bg-slate-200"
            src={comment.profile_image}
            alt=""
          />
          <div className="flex flex-col mx-2">
            <p className="text-sm font-semibold">{comment.username}</p>
            <p className="text-sm">
              {comment.firstName} {comment.lastName}
            </p>
          </div>
        </div>
        {comment._id === userDetails._id && (
          <div onClick={() => setIsShow(!isShow)}>
            <HiOutlineDotsHorizontal size={20} />
          </div>
        )}
      </div>
      <p>{comment.comment}</p>
      {isShow && (
        <div className="absolute top-10 right-0 w-20 h-auto py-3 flex flex-col items-center justify-center gap-2 rounded-md bg-white shadow-gray-500 shadow-lg text-xs">
          <p
            className="font-medium"
            onClick={() => handleEditComment(setIsShow, comment)}
          >
            Edit
          </p>
          <div className="border-b-2 border-gray- w-full"></div>
          <p
            className="text-red-500 font-medium"
            onClick={() => handleDeleteComment(comment.commentId)}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PostPage;
