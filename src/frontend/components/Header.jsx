import { HiHeart } from "react-icons/hi";

const Header = () => {
  return (
    <div className="absolute top-0 right-0 left-0 shadow-md h-12 bg-slate-50 sm:hidden flex justify-between items-center px-5">
      <p className="font-caveat text-2xl font-bold">Artist's Showcase</p>
      <HiHeart size={25} />
    </div>
  );
};

export default Header;
