import { useSelector } from "react-redux";
import UserSuggestion from "./UsersSuggestion";

const UserSuggestionComp = () => {
  const { users } = useSelector((state) => state.userReducer);

  return (
    <div className="sm:w-4/12 h-full hidden sm:block px-8">
      <input
        type="text"
        className="h-10 px-3 my-8 mt-10"
        placeholder="Search people..."
      />
      <div className="">
        {users.map((user) => (
          <UserSuggestion user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UserSuggestionComp;
