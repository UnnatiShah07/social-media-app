import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, updateUserDetails } from "../redux";

const profileImages = [
  {
    id: 1,
    image: "https://img.icons8.com/?size=512&id=106PofAoe3p7&format=png",
  },
  {
    id: 2,
    image: "https://img.icons8.com/?size=512&id=IlBlSvhW3h6Z&format=png",
  },
  {
    id: 3,
    image: "https://img.icons8.com/?size=512&id=kDoeg22e5jUY&format=png",
  },
  {
    id: 4,
    image: "https://img.icons8.com/?size=512&id=AZOFoSZnC0QG&format=png",
  },
  {
    id: 5,
    // image: "https://img.icons8.com/?size=512&id=n0X3RRyAOlyK&format=png",
    image: "https://img.icons8.com/?size=512&id=ZmWFAq0mS7su&format=png",
  },
  {
    id: 6,
    // image: "https://img.icons8.com/?size=512&id=9tLkqCSNMqks&format=png",
    image: "https://img.icons8.com/?size=512&id=E2LI0GQ7_ToC&format=png",
  },
];

const EditProfile = ({ closeEditProfile }) => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.authReducer);
  const [profileImage, setProfileImage] = useState("");
  const [bio, setBio] = useState(userDetails.bio);
  const [website, setWebsite] = useState(userDetails.website);

  const updateProfile = () => {
    dispatch(
      editProfile({ ...userDetails, bio, website, profile_image: profileImage })
    )
      .unwrap()
      .then((response) => {
        closeEditProfile();
        dispatch(updateUserDetails(response.user));
      })
      .catch(() => {});
  };

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-gray-900/[.30]">
      <div className="w-11/12 sm:w-4/12 flex flex-col justify-center gap-4 bg-white rounded-lg p-5">
        <div className="flex justify-end" onClick={() => closeEditProfile()}>
          <RxCross1 size={20} />
        </div>
        {/* <div className="w-20 h-20 rounded-full border bg-slate-200 self-center">
          <img
            src={
              userDetails.profile_image ??
              "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
            }
            alt="profile"
            className="object-cover w-full h-full rounded-full"
          />
        </div> */}
        <p>Select profile</p>
        <div className="flex justify-between">
          {profileImages.map((img) => (
            <div
              className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full border bg-slate-200 ${
                img.image === profileImage && "border-2 border-primary"
              }`}
              onClick={() => setProfileImage(img.image)}
            >
              <img
                src={img.image}
                alt="p1"
                className={`w-full h-full rounded-full border bg-slate-200 `}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <p className="w-4/12 sm:w-3/12 font-semibold">Name</p>
          <p>
            {userDetails.firstName} {userDetails.lastName}
          </p>
        </div>
        <div className="flex items-center">
          <p className="w-4/12 sm:w-3/12 font-semibold">Username</p>
          <p>{userDetails.username}</p>
        </div>
        <div className="flex items-center">
          <p className="w-6/12 sm:w-4/12 font-semibold">Bio</p>
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <p className="w-6/12 sm:w-4/12 font-semibold">Website</p>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="flex justify-end" onClick={updateProfile}>
          <button className="w-fit">Update</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

//https://img.icons8.com/?size=512&id=108296&format=png
//https://img.icons8.com/?size=512&id=23244&format=png
//https://img.icons8.com/?size=512&id=ZmWFAq0mS7su&format=png
//https://img.icons8.com/?size=512&id=E2LI0GQ7_ToC&format=png

//https://img.icons8.com/?size=512&id=106PofAoe3p7&format=png
//https://img.icons8.com/?size=512&id=IlBlSvhW3h6Z&format=png
//https://img.icons8.com/?size=512&id=n0X3RRyAOlyK&format=png
//https://img.icons8.com/?size=512&id=9tLkqCSNMqks&format=png
//https://img.icons8.com/?size=512&id=kDoeg22e5jUY&format=png
//https://img.icons8.com/?size=512&id=AZOFoSZnC0QG&format=png
