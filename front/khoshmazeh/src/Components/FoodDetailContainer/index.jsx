import React, { useState, useEffect } from "react";
import { FaClock, FaUsers, FaHeart } from "react-icons/fa";

const RecipePage = () => {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);

  const toggleLike = () => setLiked(!liked);


  useEffect(() => {

    const fetchedComments = [
      {
        id: 1,
        text: "عالی بود! حتماً دوباره درست می‌کنم.",
        avatar: "./src/assets/Avatar-Male.png"
      },
      {
        id: 2,
        text: "کمی ترش بود، ولی خوشمزه بود.",
        avatar: "./src/assets/Avatar-Male.png"
      },
      {
        id: 3,
        text: "خوب بود.",
        avatar: "./src/assets/Avatar-Male.png"
      }
    ];
    setComments(fetchedComments);
  }, []);

  return (
    <div className="bg-white min-h-screen text-right max-w-6xl mx-auto font-sans">



      <div className="p-4 md:flex md:gap-6">

        <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
          <img
            src="./src/assets/khoresh-gheymeh.jpg"
            alt="food"
            className="w-40 h-40 md:w-60 md:h-60 rounded-xl object-cover mb-4"
          />

          <video
            controls
            className="w-40 h-40 md:w-60 md:h-60 rounded-xl object-cover border border-gray-200"
          >
            <source src="/video.mp4" type="video/mp4" />
            مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
          </video>
        </div>


        <div className="md:w-2/3">

          <h1 className="text-xl md:text-3xl font-bold text-[#D08C4F] mb-3">خورشت قیمه</h1>


          <div className="mb-4">
            <h2 className="text-xl font-semibold  text-[#D08C4F] mb-1">مواد لازم</h2>
            <ul className="text-sm text-gray-700 list-disc pr-5 space-y-1">
              <li>گوشت گوسفندی</li>
              <li>لپه</li>
              <li>لیمو عمانی</li>
              <li>رب گوجه‌فرنگی</li>
            </ul>
          </div>


          <div className="mb-4">
            <h2 className="text-xl font-semibold  text-[#D08C4F] mb-1">طرز تهیه</h2>
            <p className="text-sm text-gray-700 leading-6">
              ابتدا پیاز را خرد کرده و تفت می‌دهیم. سپس گوشت را اضافه می‌کنیم. لپه را
              جداگانه می‌پزیم و با رب گوجه به مواد اضافه می‌کنیم. در آخر لیمو عمانی
              را اضافه کرده و می‌گذاریم غذا جا بیفتد.
            </p>
          </div>


          <div className="flex items-center gap-3 mb-4">
            <img
              src="./src/assets/Avatar-Male.png"
              alt="user"
              className="w-10 h-10 rounded-full border"
            />
            <span className="text-sm text-gray-800">یوزر نیم نویسنده</span>
          </div>

          <div className="flex gap-6 text-gray-600 text-sm mb-6 max-w-xs">
            <div className="flex items-center gap-2">
              <FaClock /> <span>45 دقیقه</span>
            </div>

            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={toggleLike}
            >
              <FaHeart className={liked ? "text-red-600" : "text-gray-400"} />
              <span>{liked ? "24" : "23"}</span>
            </div>
          </div>


          <div>
            <h2 className="text-xl font-semibold  text-[#D08C4F] mb-3">نظرات:</h2>
            {comments.map((comment) => (
              <div
                key={comment.id}
                 dir="rtl"
                className="flex items-start mb-3"
              >
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
