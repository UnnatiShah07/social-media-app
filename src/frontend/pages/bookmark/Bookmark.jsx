import { BottomNav, Header, SidebarNav } from "../../components";

const Bookmark = () => {
  return (
    <div className="sm:flex min-h-screen">
      <SidebarNav />
      <Header />
      <div className="mt-14 sm:mt-0">Bookmark</div>
      <BottomNav />
    </div>
  );
};

export default Bookmark;
