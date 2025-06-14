import axios from "axios";

const mockRecipe = {
  image: "./src/assets/khoresh-gheymeh.jpg",
  video: "/video.mp4",
  title: "خورشت قیمه",
  ingredients: ["گوشت گوسفندی", "لپه", "لیمو عمانی", "رب گوجه‌فرنگی"],
  instructions:
    "ابتدا پیاز را خرد کرده و تفت می‌دهیم. سپس گوشت را اضافه می‌کنیم. لپه را جداگانه می‌پزیم و با رب گوجه به مواد اضافه می‌کنیم. در آخر لیمو عمانی را اضافه کرده و می‌گذاریم غذا جا بیفتد.",
  author: {
    username: "یوزر نیم نویسنده",
    avatar: "./src/assets/Avatar-Male.png",
  },
  cook_time: "45 دقیقه",
  likes: 23,
  comments: [
    {
      id: 1,
      text: "عالی بود! حتماً دوباره درست می‌کنم.",
      avatar: "./src/assets/Avatar-Male.png",
    },
    {
      id: 2,
      text: "کمی ترش بود، ولی خوشمزه بود.",
      avatar: "./src/assets/Avatar-Male.png",
    },
    {
      id: 3,
      text: "خوب بود.",
      avatar: "./src/assets/Avatar-Male.png",
    },
  ],
};

export const getRecipeById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/recipe/${id}`);
    return response.data;
  } catch (error) {
    console.warn("API call failed, using mock data:", error);
    return mockRecipe;
  }
};
