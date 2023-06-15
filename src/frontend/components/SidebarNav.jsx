import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdOutlineBookmark } from "react-icons/md";
import { HiHeart } from "react-icons/hi";
import { RiAddCircleFill } from "react-icons/ri";

const SidebarNav = () => {
  return (
    <div className="h-screen w-2/12 border-r hidden sm:flex justify-center items-center">
      <div className="flex flex-col justify-around h-full">
        <div>
          <p className="mb-5 font-caveat text-3xl font-bold">
            Artist's Showcase
          </p>
        </div>

        <div className="px-5">
          <p className="flex gap-4 items-center py-3 text-primary font-medium">
            <AiFillHome size={20} />
            Home
          </p>
          <p className="flex gap-4 items-center py-3">
            <MdExplore size={20} />
            Explore
          </p>
          <p className="flex gap-4 items-center py-3">
            <MdOutlineBookmark size={20} />
            Bookmark
          </p>
          <p className="flex gap-4 items-center py-3">
            <HiHeart size={20} />
            Likes
          </p>
          <p className="flex gap-4 items-center py-3">
            <RiAddCircleFill size={20} />
            Add Post
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-3xl border bg-slate-200"></div>
          <p>Unnati Shah</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
