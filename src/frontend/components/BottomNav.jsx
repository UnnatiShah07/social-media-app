import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdOutlineBookmark } from "react-icons/md";
import { RiAddCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateShowAddPost } from "../redux";

const BottomNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.authReducer);

  return (
    <div className="fixed bottom-0 right-0 left-0 border bg-slate-50 h-12 sm:hidden flex justify-between items-center px-5">
      <AiFillHome size={25} onClick={() => navigate("/")} />
      <MdExplore size={25} onClick={() => navigate("/explore")} />
      <RiAddCircleFill
        size={25}
        onClick={() => dispatch(updateShowAddPost(true))}
      />
      <MdOutlineBookmark size={25} onClick={() => navigate("/bookmark")} />
      <div
        className="h-7 w-7 rounded-3xl bg-slate-300"
        onClick={() => navigate("/profile")}
      >
        <img
          src={userDetails.profile_image}
          alt="profile"
          className="h-full w-full rounded-3xl"
        />
      </div>
    </div>
  );
};

export default BottomNav;
