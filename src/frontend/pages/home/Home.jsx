import { BottomNav, Header, SidebarNav } from "../../components";

const Home = () => {
  return (
    <div className="sm:flex min-h-screen">
      <SidebarNav />
      <Header />
      <div className="mt-14 sm:mt-0">Home</div>
      <BottomNav />
    </div>
  );
};

export default Home;
