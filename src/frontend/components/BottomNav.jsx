import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdOutlineBookmark } from "react-icons/md";
import { RiAddCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import { updateShowAddPost } from "../redux";

const BottomNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { userDetails } = useSelector((state) => state.authReducer);

  return (
    <div className="fixed bottom-0 right-0 left-0 border bg-slate-50 h-12 sm:hidden flex justify-between items-center px-5">
      <AiFillHome
        size={25}
        onClick={() => navigate("/")}
        className={
          location.pathname === "/" ? "text-primary" : "text-font-color"
        }
      />
      <MdExplore
        size={25}
        onClick={() => navigate("/explore")}
        className={
          location.pathname === "/explore" ? "text-primary" : "text-font-color"
        }
      />
      <RiAddCircleFill
        size={25}
        onClick={() => dispatch(updateShowAddPost(true))}
      />
      <MdOutlineBookmark
        size={25}
        onClick={() => navigate("/bookmark")}
        className={
          location.pathname === "/bookmark" ? "text-primary" : "text-font-color"
        }
      />
      <div
        className={`h-7 w-7 rounded-3xl bg-slate-300 ${
          location.pathname === `/profile/${userDetails._id}` &&
          "border border-primary"
        }`}
        onClick={() => navigate(`/profile/${userDetails._id}`)}
      >
        <img
          src={
            userDetails.profile_image ??
            "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
          }
          alt="profile"
          className="h-full w-full rounded-3xl"
        />
      </div>
    </div>
  );
};

export default BottomNav;
