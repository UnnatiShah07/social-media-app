// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "7f488a35-3519-4146-becb-f5bc5a92564e",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    profile_image:
      "https://cutewallpaper.org/24/profile-icon-png/circled-user-female-skin-type-4-icon-profile-icon-png-image-transparent-png-free-download-on-seekpng.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "5a6e0abf-c7a0-4904-bfeb-77fae807990d",
    firstName: "Urmila",
    lastName: "Tyagi",
    username: "urmila_tyagi",
    password: "12345678",
    profile_image:
      "https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "97046567-7051-478b-9599-40110e0557c0",
    firstName: "Jay",
    lastName: "Sharma",
    username: "jay_sharma",
    profile_image:
      "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png",
    password: "12345678",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "1fb42ec4-d0a9-4ef3-b5f5-1cd8fca836f7",
    firstName: "Unnati",
    lastName: "Shah",
    username: "unnati_shah",
    bio: "Hello I am Unnati Shah",
    profile_image:
      "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png",
    password: "12345678",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "d0aa201c-d82d-4bfc-a427-7ffe4f8cc5a1",
    firstName: "Nilesh",
    lastName: "Mishara",
    username: "nilesh_mishara",
    profile_image:
      "https://www.pngall.com/wp-content/uploads/12/Boy-PNG-Images.png",
    password: "12345678",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
  },
];
