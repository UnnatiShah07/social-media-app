/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import UserSuggestion from "./UsersSuggestion";
import { useEffect, useState } from "react";

const UserSuggestionComp = () => {
  const { users } = useSelector((state) => state.userReducer);
  const [userList, setUserList] = useState(users);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue.length) {
      setUserList(
        users.filter(
          (user) =>
            user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else setUserList(users);
  }, [searchValue, users]);

  return (
    <div className="sm:w-4/12 h-full hidden sm:block px-8">
      <input
        type="text"
        className="h-10 px-3 my-8 mt-10"
        placeholder="Search people..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="">
        {userList.map((user) => (
          <UserSuggestion user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UserSuggestionComp;
