const UserSuggestion = ({ user }) => {
  return (
    <div className="mb-5 flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-3xl bg-slate-200"
          src={ user.profile_image ? user.profile_image:
            "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
          }
          alt=""
        />
        <div className="flex flex-col mx-2">
          <p className="text-sm">{user.username}</p>
          <p className="text-sm">{user.firstName} {user.lastName}</p>
        </div>
      </div>
      <p className="text-primary font-medium">+ Follow</p>
    </div>
  );
};

export default UserSuggestion;
