import { BottomNav, Header, SidebarNav } from "../../components";

const Profile = () => {
  return (
    <div className="sm:flex min-h-screen">
      <SidebarNav />
      <Header />
      <div className="mt-14 sm:mt-0">Profile</div>
      <BottomNav />
    </div>
  );
};

export default Profile;
