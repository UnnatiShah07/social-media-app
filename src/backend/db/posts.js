// import { v4 as uuid } from "uuid";
import dayjs from "dayjs";
import { formatDate } from "../utils/authUtils";
/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "d8bc0df5-0ad5-4671-b603-92d89d50f57a",
    content:
      "Life isn’t about finding yourself. Life is about creating yourself.",
    artImage:
      "https://i.etsystatic.com/32281859/r/il/5e05cf/4565358316/il_794xN.4565358316_c5oj.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "urmila_tyagi",
    userId: "5a6e0abf-c7a0-4904-bfeb-77fae807990d",
    comments: [],
    createdAt: dayjs().subtract(10, "day"),
    updatedAt: dayjs().subtract(10, "day"),
  },
  {
    _id: "61b04ca0-0a26-4691-addd-b4c181537cb7",
    content: "Faith it till you make it ✨",
    artImage:
      "https://i.etsystatic.com/18730211/r/il/a66238/1811347054/il_794xN.1811347054_f3wv.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "urmila_tyagi",
    userId: "5a6e0abf-c7a0-4904-bfeb-77fae807990d",
    comments: [],
    createdAt: dayjs().subtract(20, "day"),
    updatedAt: dayjs().subtract(20, "day"),
  },
  {
    _id: "baa50fb3-695c-48f3-a0de-94702593bf4a",
    content: "Ganeshji 💗❤️",
    artImage:
      "https://i.etsystatic.com/17944019/r/il/93e029/4358382275/il_794xN.4358382275_bc6h.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jay_sharma",
    userId: "97046567-7051-478b-9599-40110e0557c0",
    comments: [],
    createdAt: dayjs().subtract(30, "day"),
    updatedAt: dayjs().subtract(30, "day"),
  },
  {
    _id: "925147ac-ffd6-4144-a0c6-8106a5a86ac3",
    content: "Flower frame",
    artImage:
      "https://i.etsystatic.com/24069689/r/il/5d9815/4872856684/il_794xN.4872856684_l7g9.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jay_sharma",
    userId: "97046567-7051-478b-9599-40110e0557c0",
    comments: [],
    createdAt: dayjs().subtract(40, "day"),
    updatedAt: dayjs().subtract(40, "day"),
  },
  {
    _id: "1b164fd7-318c-4e56-81b5-e17ed0da0f94",
    content: "Simple Mandala",
    artImage:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*zAAChLy7byQiMqDzJcrHeg.jpeg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    userId: "7f488a35-3519-4146-becb-f5bc5a92564e",
    comments: [],
    createdAt: dayjs().subtract(50, "day"),
    updatedAt: dayjs().subtract(50, "day"),
  },
  {
    _id: "563e92d9-554f-4928-88da-92306fc15791",
    content: "Basuri Mandala",
    artImage: "https://i.ytimg.com/vi/5CDyFMMHXLw/maxresdefault.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    userId: "7f488a35-3519-4146-becb-f5bc5a92564e",
    comments: [],
    createdAt: dayjs().subtract(60, "day"),
    updatedAt: dayjs().subtract(60, "day"),
  },
  {
    _id: "1d83464a-165a-4002-bb30-c6f1419ae746",
    content: "Handmade polymer clay earrings",
    artImage:
      "https://i.etsystatic.com/8440299/r/il/db836f/2991092446/il_794xN.2991092446_tbpz.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "unnati_shah",
    userId: "1fb42ec4-d0a9-4ef3-b5f5-1cd8fca836f7",
    comments: [],
    createdAt: dayjs().subtract(70, "day"),
    updatedAt: dayjs().subtract(70, "day"),
  },
  {
    _id: "a0eee344-13f6-481f-a8ea-a3a581f97c4c",
    content: "Black Handmade polymer clay earrings",
    artImage:
      "https://i.etsystatic.com/19943978/r/il/f025ba/3378630748/il_794xN.3378630748_gcle.jpg",
    artImageTwo:
      "https://i.etsystatic.com/15599644/r/il/a8caa1/4560343544/il_794xN.4560343544_qk84.jpg",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "1fb42ec4-d0a9-4ef3-b5f5-1cd8fca836f7",
          firstName: "Unnati",
          lastName: "Shah",
          username: "unnati_shah",
          profile_image:
            "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png",
          password: "12345678",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          bio: "Smile little more, regret little less.",
          website: "https://unnati-shah.netlify.app",
        },
      ],
      dislikedBy: [],
    },
    username: "unnati_shah",
    userId: "1fb42ec4-d0a9-4ef3-b5f5-1cd8fca836f7",
    comments: [],
    createdAt: dayjs().subtract(80, "day"),
    updatedAt: dayjs().subtract(80, "day"),
  },
  {
    _id: "a0eee344-13f6-481f-a8ea-a3a581f97c4u",
    content: "Black Handmade polymer clay earrings",
    artImage:
      "https://i.etsystatic.com/15599644/r/il/a8caa1/4560343544/il_794xN.4560343544_qk84.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "1fb42ec4-d0a9-4ef3-b5f5-1cd8fca836f7",
          firstName: "Unnati",
          lastName: "Shah",
          username: "unnati_shah",
          profile_image:
            "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png",
          password: "12345678",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          bio: "Smile little more, regret little less.",
          website: "https://unnati-shah.netlify.app",
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
          bio: "Eyes are never quiet.",
          website: "https://urmila-tyagi.netlify.app",
        },
      ],
      dislikedBy: [],
    },
    username: "unnati_shah",
    userId: "1fb42ec4-d0a9-4ef3-b5f5-1cd8fca836f7",
    comments: [
      {
        commentId: 1,
        comment: "Wow! simple and beatiful",
        _id: "5a6e0abf-c7a0-4904-bfeb-77fae807990d",
        firstName: "Urmila",
        lastName: "Tyagi",
        username: "urmila_tyagi",
        profile_image:
          "https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg",
        createdAt: dayjs().subtract(89, "day"),
      },
      {
        commentId: 2,
        comment: "Black beauty",
        _id: "7f488a35-3519-4146-becb-f5bc5a92564e",
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        profile_image:
          "https://cutewallpaper.org/24/profile-icon-png/circled-user-female-skin-type-4-icon-profile-icon-png-image-transparent-png-free-download-on-seekpng.png",
        createdAt: dayjs().subtract(88, "day"),
      },
    ],
    createdAt: dayjs().subtract(90, "day"),
    updatedAt: dayjs().subtract(90, "day"),
  },
];
