import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdOutlineBookmark } from "react-icons/md";
import { RiAddCircleFill } from "react-icons/ri";

const BottomNav = () => {
  return (
    <div className="absolute bottom-0 right-0 left-0 border bg-slate-50 h-12 sm:hidden flex justify-between items-center px-5">
      <AiFillHome size={25} />
      <MdExplore size={25} />
      <RiAddCircleFill size={25} />
      <MdOutlineBookmark size={25} />
      <div className="h-7 w-7 rounded-3xl bg-slate-300"></div>
    </div>
  );
};

export default BottomNav;
