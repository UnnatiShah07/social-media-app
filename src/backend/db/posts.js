import dayjs from "dayjs";
import { formatDate } from "../utils/authUtils";
/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "e66f1a9f-5403-4613-9e66-1274cb3c30a3",
    content: "कला में कलाकार खुद को उजागर करता है कलाकृति को नहीं।",
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
    comments: [],
    createdAt: dayjs().subtract(10, "day"),
    updatedAt: dayjs().subtract(10, "day"),
  },
  {
    _id: "9946b17c-fe15-4590-90c2-de64fbda14dc",
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
    createdAt: dayjs().subtract(20, "day"),
    updatedAt: dayjs().subtract(20, "day"),
  },
  {
    _id: "3b1fbbcf-0414-4883-a66a-63ec82e888a1",
    content:
      "Fine art is that in which the hand, the head, and the heart of man go together.",
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
    _id: "ac9e25f8-727c-4d1d-b381-c4248c44ce47",
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
    createdAt: dayjs().subtract(40, "day"),
    updatedAt: dayjs().subtract(40, "day"),
  },
  {
    _id: "1fc46611-1d34-42aa-ae15-091a1a2006fb",
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
    _id: "8ee937a1-c7bc-4777-874c-751469fd6a05",
    content:
      "We're all scared to let love in but love will always find a way to touch us like the  rain :)",
    artImage:
      "https://res.cloudinary.com/dtwlwrjyj/image/upload/v1688908400/hetqbzxfiueoboc0t95s.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ashish_bagrecha",
    userId: "d0aa201c-d82d-4bfc-a427-7ffe4f8cc5a1",
    comments: [],
    createdAt: dayjs().subtract(60, "day"),
    updatedAt: dayjs().subtract(60, "day"),
  },
  {
    _id: "25649c4c-e328-4510-b3cb-4f9894612f36",
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
    createdAt: dayjs().subtract(70, "day"),
    updatedAt: dayjs().subtract(70, "day"),
  },
  {
    _id: "f8844b25-ddfe-4340-9be7-3759f9def853",
    content:
      "Take your needle, my child, and work at your pattern; it will come out a rose by and by. Life is like that - one stitch at a time taken patiently and the pattern will come out all right like the embroidery.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "urmila_tyagi",
    userId: "5a6e0abf-c7a0-4904-bfeb-77fae807990d",
    comments: [],
    createdAt: dayjs().subtract(80, "day"),
    updatedAt: dayjs().subtract(80, "day"),
  },
  {
    _id: "69cb027c-52d8-415f-a9f6-b909afeaa21a",
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
    createdAt: dayjs().subtract(90, "day"),
    updatedAt: dayjs().subtract(90, "day"),
  },
  {
    _id: "0d5c4e87-6190-4d2a-b729-d470214be48f",
    content:
      "I found I could say things with color and shapes that I couldn’t say any other way.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    userId: "7f488a35-3519-4146-becb-f5bc5a92564e",
    comments: [],
    createdAt: dayjs().subtract(100, "day"),
    updatedAt: dayjs().subtract(100, "day"),
  },
  {
    _id: "508d3732-bbe3-494e-8e8e-39d4613b9a46",
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
    createdAt: dayjs().subtract(110, "day"),
    updatedAt: dayjs().subtract(110, "day"),
  },
  {
    _id: "bbb4a860-a777-41d7-ba66-5e58c6464aba",
    content: "Flower Handmade polymer clay earrings",
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
    createdAt: dayjs().subtract(120, "day"),
    updatedAt: dayjs().subtract(120, "day"),
  },
  {
    _id: "f33e1472-74c1-409b-a717-4eba2ae82eec",
    content: "Black Handmade polymer clay earrings",
    artImage:
      "https://i.etsystatic.com/19943978/r/il/f025ba/3378630748/il_794xN.3378630748_gcle.jpg",
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
        createdAt: dayjs().subtract(110, "day"),
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
        createdAt: dayjs().subtract(120, "day"),
      },
    ],
    createdAt: dayjs().subtract(130, "day"),
    updatedAt: dayjs().subtract(130, "day"),
  },
  {
    _id: "a14c87fc-aa37-4965-b947-6c2e2fd7180c",
    artImage:
      "https://xyzshayari.com/wp-content/uploads/2022/07/%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A4%A4%E0%A4%BE-%E0%A4%A4%E0%A5%8B-%E0%A4%AC%E0%A4%B9%E0%A5%81%E0%A4%A4-%E0%A4%95%E0%A5%81%E0%A4%9B-%E0%A4%B9%E0%A5%88-%E0%A4%87%E0%A4%B8-%E0%A4%9C%E0%A4%BC%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A4%97%E0%A5%80-%E0%A4%AE%E0%A5%87%E0%A4%82-1024x731.png",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ashish_bagrecha",
    userId: "d0aa201c-d82d-4bfc-a427-7ffe4f8cc5a1",
    comments: [],
    createdAt: dayjs().subtract(140, "day"),
    updatedAt: dayjs().subtract(140, "day"),
  },
];
