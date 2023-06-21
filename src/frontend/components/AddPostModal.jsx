import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { updateShowAddPost, uploadPost } from "../redux";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";

const AddPostModal = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.authReducer);
  const [postText, setPostText] = useState("");

  const handleUploadPost = () => {
    dispatch(updateShowAddPost(false));
    dispatch(
      uploadPost({
        _id: uuid(),
        content: postText,
        username: userDetails.username,
        createdAt: dayjs().format("MMM D, YYYY h:mm A"),
        updatedAt: dayjs().format("MMM D, YYYY h:mm A"),
      })
    );
  };

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/50 flex justify-center items-center">
      <div className="w-11/12 sm:w-1/3 h-auto sm:h-auto bg-slate-50 rounded-md p-5">
        <div
          className="flex justify-end"
          onClick={() => dispatch(updateShowAddPost(false))}
        >
          <RxCross1 size={20} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-16 h-16 rounded-full border bg-slate-200 self-center">
            <img
              src={userDetails.profile_image}
              alt="profile"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <textarea
            name="post"
            id="post"
            className="h-24 border-gray-200 p-3 text-sm outline-none"
            placeholder="Write something interesting..."
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
          <div className="flex justify-end">
            <button
              className={`w-20 ${
                postText.length ? "bg-primary" : "bg-primary/50"
              }`}
              disabled={!postText.length}
              onClick={handleUploadPost}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPostModal;
