import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { updateShowAddPost, uploadPost, editPost } from "../redux";
import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";
import { FaImage } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Loader from "./Loader";

const AddPostModal = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.authReducer);
  const { editPost: postData } = useSelector((state) => state.postReducer);
  const [postText, setPostText] = useState(postData.content ?? "");
  const [postImage, setPostImage] = useState(
    (postData.artImage || postData.artVideo) ?? {}
  );
  const [isPosting, setIsPosting] = useState(false);
  const fileRef = useRef();

  const handleUploadPost = async () => {
    setIsPosting(true);
    let media;
    if (postImage?.type?.includes("image") && typeof postImage !== "string") {
      media = { image: await handleUplaodMedia(postImage, "image") };
    }
    if (postImage?.type?.includes("video") && typeof postImage !== "string") {
      media = { video: await handleUplaodMedia(postImage, "video") };
    }
    if (Object.keys(postData).length) {
      handleEditPost(media);
    } else {
      handleUploadNewPost(media);
    }
    setIsPosting(false);
    dispatch(updateShowAddPost(false));
  };

  const handleUploadNewPost = (media) => {
    let postObj = {
      _id: uuid(),
      content: postText,
      username: userDetails.username,
      userId: userDetails._id,
      createdAt: dayjs().format("MMM D, YYYY h:mm A"),
      updatedAt: dayjs().format("MMM D, YYYY h:mm A"),
    };
    if (media?.image?.url && media?.image) {
      postObj["artImage"] = media.image.url;
    }
    if (media?.video?.url && media?.video) {
      postObj["artVideo"] = media.video.url;
    }
    dispatch(uploadPost(postObj));
  };

  console.log(postImage, "from >>>>");

  const handleEditPost = (media) => {
    let postObj = {
      ...postData,
      content: postText,
      createdAt: dayjs().format("MMM D, YYYY h:mm A"),
      updatedAt: dayjs().format("MMM D, YYYY h:mm A"),
    };
    if (media?.image?.url && media?.image) {
      postObj["artImage"] = media.image.url;
      postObj["artVideo"] = "";
    }
    if (media?.video?.url && media?.video) {
      postObj["artImage"] = "";
      postObj["artVideo"] = media.video.url;
    }
    console.log(postObj, "postObj");
    dispatch(editPost(postObj));
  };

  const handleUplaodMedia = async (file, type) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "wlcyarty");

    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dtwlwrjyj/${type}/upload`,
          {
            method: "post",
            body: data,
          }
        ).then((resp) => resp.json());
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getImageURL = () =>
    typeof postImage === "string" ? postImage : URL.createObjectURL(postImage);

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
          <div className="flex gap-6">
            <input
              type="file"
              id="post-image"
              hidden
              ref={fileRef}
              onChange={() => setPostImage(fileRef.current.files[0])}
            />
            <label htmlFor="post-image">
              <FaImage size={20} />
            </label>
            {postImage?.type?.includes("image") ||
            (typeof postImage === "string" &&
              postImage?.includes("jpg" || "png" || "jpeg")) ? (
              <div className="w-6/12 h-6/12 rounded-lg relative">
                <img
                  src={getImageURL()}
                  alt=""
                  className="w-full h-full rounded-lg"
                />
                <div
                  onClick={() => setPostImage({})}
                  className="absolute top-2 left-2 w-5 h-5 flex justify-center items-center rounded-full bg-slate-400/[.70]"
                >
                  <ImCross size={10} />
                </div>
              </div>
            ) : null}
            {postImage?.type?.includes("video") ||
            (typeof postImage === "string" && postImage?.includes("mp4")) ? (
              <div className="w-6/12 h-6/12 rounded-lg relative">
                <video className="w-full h-full rounded-lg" controls>
                  <source src={getImageURL()} type="video/mp4" />
                </video>
                <div
                  onClick={() => setPostImage({})}
                  className="absolute top-2 left-2 w-5 h-5 flex justify-center items-center rounded-full bg-slate-400/[.70]"
                >
                  <ImCross size={10} />
                </div>
              </div>
            ) : null}
          </div>
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
      {isPosting && <Loader />}
    </div>
  );
};

export default AddPostModal;
