import { BottomNav, Header, SidebarNav } from "../../components";

const Explore = () => {
  return (
    <div className="sm:flex min-h-screen">
      <SidebarNav />
      <Header />
      <div className="mt-14 sm:mt-0">Explore</div>
      <BottomNav />
    </div>
  );
};

export default Explore;
