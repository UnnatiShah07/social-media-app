import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-0 shadow-md h-12 bg-slate-50 sm:hidden flex justify-between items-center px-5">
      <p className="font-caveat text-2xl font-bold">Artist's Showcase</p>
      <BiSearch size={22} />
    </div>
  );
};

export default Header;
