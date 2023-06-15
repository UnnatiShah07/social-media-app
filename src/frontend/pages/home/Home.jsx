import { BottomNav, Header, SidebarNav } from "../../components";

const Home = () => {
  return (
    <div className="sm:flex min-h-screen">
      <SidebarNav />
      <Header />
      <div className="">Home</div>
      <BottomNav />
    </div>
  );
};

export default Home;
