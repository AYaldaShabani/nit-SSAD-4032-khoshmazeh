import React, { useState, useEffect } from "react";
import { FaClock, FaHeart } from "react-icons/fa";
import axios from "axios";

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/recipe/1")
      .then((res) => setRecipe(res.data))
      .catch(() => {
       
        setRecipe({
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
        });
      });
  }, []);

  if (!recipe) return <div>در حال بارگذاری...</div>;

  return (
    <div className="bg-white min-h-screen text-right max-w-6xl mx-auto font-sans">
      <div className="p-4 md:flex md:gap-6">
        <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
          <img
            src={recipe.image}
            alt="food"
            className="w-40 h-40 md:w-60 md:h-60 rounded-xl object-cover mb-4"
          />
          <video
            controls
            className="w-40 h-40 md:w-60 md:h-60 rounded-xl object-cover border border-gray-200"
          >
            <source src={recipe.video} type="video/mp4" />
            مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
          </video>
        </div>

        <div className="md:w-2/3">
          <h1 className="text-xl md:text-3xl font-bold text-[#D08C4F] mb-3">
            {recipe.title}
          </h1>

          <div className="mb-4">
            <h2 className="text-xl font-semibold text-[#D08C4F] mb-1">
              مواد لازم
            </h2>
            <ul className="text-sm text-gray-700 list-disc pr-5 space-y-1">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold text-[#D08C4F] mb-1">
              طرز تهیه
            </h2>
            <p className="text-sm text-gray-700 leading-6">{recipe.instructions}</p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <img
              src={recipe.author.avatar}
              alt="user"
              className="w-10 h-10 rounded-full border"
            />
            <span className="text-sm text-gray-800">{recipe.author.username}</span>
          </div>

          <div className="flex gap-6 text-gray-600 text-sm mb-6 max-w-xs">
            <div className="flex items-center gap-2">
              <FaClock /> <span>{recipe.cook_time}</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer" onClick={toggleLike}>
              <FaHeart className={liked ? "text-red-600" : "text-gray-400"} />
              <span>{liked ? recipe.likes + 1 : recipe.likes}</span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#D08C4F] mb-3">نظرات:</h2>
            {recipe.comments.map((comment) => (
              <div key={comment.id} dir="rtl" className="flex items-start mb-3">
                <img
                  src={comment.avatar}
                  alt="comment user"
                  className="w-8 h-8 rounded-full border ml-2"
                />
                <div className="bg-[#B0C4B1] p-2 rounded-lg text-sm text-gray-800 max-w-sm text-right">
                  {comment.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;