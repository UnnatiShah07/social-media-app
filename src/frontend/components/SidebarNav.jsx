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
          <div className="w-10 h-10 rounded-3xl border bg-slate-200">
            <img
              src={userDetails.profile_image}
              alt="profile"
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
          <p>
            {userDetails.firstName} {userDetails.lastName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
