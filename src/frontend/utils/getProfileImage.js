export const getProfileImage = (users, post) => {
  return users.find((user) => user.username === post.username)?.profile_image;
};
