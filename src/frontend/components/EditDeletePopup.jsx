import { useDispatch } from "react-redux";
import { deletePost,  setEditPostData, updateShowAddPost } from "../redux";

const EditDeletePopup = ({ post, closePopup }) => {
  const dispatch = useDispatch();

  const handleDeletePost = () => {
    closePopup();
    dispatch(deletePost(post._id));
  };

  const handleEditPost = () => {
    closePopup();
    dispatch(setEditPostData(post));
    dispatch(updateShowAddPost(true));
  };

  return (
    <div className="absolute top-8 right-0 w-20 h-auto py-3 flex flex-col items-center justify-center gap-2 rounded-md bg-white shadow-gray-500 shadow-lg ">
      <p className="font-medium" onClick={handleEditPost}>
        Edit
      </p>
      <div className="border-b-2 border-gray- w-full"></div>
      <p className="text-red-500 font-medium" onClick={handleDeletePost}>
        Delete
      </p>
    </div>
  );
};

export default EditDeletePopup;
