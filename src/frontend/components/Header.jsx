import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setShowUserSuggestion } from "../redux";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="fixed top-0 right-0 left-0 shadow-md h-12 bg-slate-50 sm:hidden flex justify-between items-center px-5">
      <p className="font-caveat text-2xl font-bold">Artist's Showcase</p>
      <BiSearch
        size={22}
        onClick={() => dispatch(setShowUserSuggestion(true))}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Header;
