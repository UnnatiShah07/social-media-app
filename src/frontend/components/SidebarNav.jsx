import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdOutlineBookmark } from "react-icons/md";
import { RiAddCircleFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router";
import NavbarItem from "./NavbarItem";
import { useDispatch, useSelector } from "react-redux";
import { updateShowAddPost } from "../redux";

const SidebarNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.authReducer);
  const isMyProfile = location.pathname === `/profile/${userDetails._id}`;

  return (
    <div className="h-screen w-full border-r hidden sm:flex justify-center items-center">
      <div className="flex flex-col justify-around h-full">
        <div>
          <p className="mb-5 font-caveat text-3xl font-bold">
            Artist's Showcase
          </p>
        </div>

        <div className="px-5">
          <NavbarItem
            onClick={() => navigate("/")}
            icon={<AiFillHome size={20} />}
            isActive={location.pathname === "/"}
            title="Home"
          />
          <NavbarItem
            onClick={() => navigate("/explore")}
            icon={<MdExplore size={20} />}
            isActive={location.pathname === "/explore"}
            title="Explore"
          />
          <NavbarItem
            onClick={() => navigate("/bookmark")}
            icon={<MdOutlineBookmark size={20} />}
            isActive={location.pathname === "/bookmark"}
            title="Bookmark"
          />
          <NavbarItem
            onClick={() => dispatch(updateShowAddPost(true))}
            icon={<RiAddCircleFill size={20} />}
            isActive={false}
            title="Add Post"
          />
        </div>

        <div
          className="flex items-center gap-2"
          onClick={() => navigate(`/profile/${userDetails._id}`)}
        >
          <div
            className={`w-10 h-10 rounded-3xl border bg-slate-200 ${
              isMyProfile ? "border border-primary" : ""
            }`}
          >
            <img
              src={
                userDetails.profile_image ??
                "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
              }
              alt="profile"
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
          <p className={isMyProfile ? "text-primary font-medium" : ""}>
            {userDetails.firstName} {userDetails.lastName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
