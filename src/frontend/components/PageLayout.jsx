import { RxCross1 } from "react-icons/rx";
import SidebarNav from "./SidebarNav";
import UserSuggestionComp from "./UserSuggestionComp";
import Header from "./Header";
import BottomNav from "./BottomNav";
import Loader from "./Loader";
import AddPostModal from "./AddPostModal";
import { useDispatch, useSelector } from "react-redux";
import { setShowUserSuggestion } from "../redux";

const PageLayout = ({ children, loading }) => {
  const dispatch = useDispatch();
  const { showAddPost } = useSelector((state) => state.postReducer);
  const { showUserSuggestion } = useSelector((state) => state.userReducer);

  return (
    <div>
      <div className="sm:flex min-h-screen">
        <div className="mt-12 sm:mt-0 flex w-full h-screen">
          <div className="sm:w-3/12 hidden sm:flex">
            <SidebarNav />
          </div>
          <div className="w-full sm:w-9/12 h-screen mt-5 sm:mt-0 sm:pt-10 flex flex-col items-center gap-5 overflow-auto hide-scrollbar">
            {children}
          </div>
          <div className="sm:w-4/12 h-full hidden sm:block px-8">
            <UserSuggestionComp />
          </div>
        </div>
        {loading && <Loader />}
        {showAddPost && <AddPostModal />}
        {showUserSuggestion && (
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-gray-900/[.30]">
            <div className="sm:w-4/12 flex flex-col px-8 bg-white pt-16 pb-3 rounded-md">
              <RxCross1
                className="self-end"
                onClick={() => dispatch(setShowUserSuggestion(false))}
              />
              <UserSuggestionComp />
            </div>
          </div>
        )}
        <Header />
        <BottomNav />
      </div>
    </div>
  );
};

export default PageLayout;
