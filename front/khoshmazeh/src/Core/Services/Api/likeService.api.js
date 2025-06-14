import axios from "axios";

const mockLikedPosts = [
  {
    id: 1,
    title: "قورمه‌سبزی",
    image: "./src/assets/قرمه+سبزی.webp",
  },
  {
    id: 2,
    title: "زرشک‌پلو",
    image: "./src/assets/a1c8296178ae44dedee7202a55b4cc7d.png",
  },
  {
    id: 3,
    title: "فسنجون",
    image: "./src/assets/D988D8A7-600x430.jpg",
  },
  {
    id: 4,
    title: "میرزا قاسمی",
    image: "./src/assets/میرزا-قاسمی.jpg",
  },
  {
    id: 5,
    title: "کباب کوبیده",
    image:
      "./src/assets/طرز-تهیه-کباب-کوبیده-حرفه_ای-در-خانه-آموزش-مرحله-به-مرحله.webp",
  },
];

export const getLikedPosts = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/liked-posts");
    return response.data;
  } catch (error) {
    console.warn("API failed, using mock data.");
    return mockLikedPosts;
  }
};
