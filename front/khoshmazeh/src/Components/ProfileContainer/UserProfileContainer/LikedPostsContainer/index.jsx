import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LikedPosts() {
  const [likedPosts, setLikedPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/liked-posts')
      .then(res => setLikedPosts(res.data))
      .catch(err => {
        console.warn("API failed, using mock data.");
        setLikedPosts([
          { title: "قورمه‌سبزی", image: "./src/assets/قرمه+سبزی.webp" },
          { title: "زرشک‌پلو", image: "./src/assets/a1c8296178ae44dedee7202a55b4cc7d.png" },
          { title: "فسنجون", image: "./src/assets/D988D8A7-600x430.jpg" },
          { title: "میرزا قاسمی", image: "./src/assets/میرزا-قاسمی.jpg" },
          { title: "کباب کوبیده", image: "./src/assets/طرز-تهیه-کباب-کوبیده-حرفه_ای-در-خانه-آموزش-مرحله-به-مرحله.webp" },
        ]);
      });
  }, []);

  return (
    <div className="p-4 min-h-screen bg-white font-sans">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {likedPosts.map((post, idx) => (
          <div
            key={idx}
            onClick={() => navigate()}
            className="relative group overflow-hidden rounded-lg shadow cursor-pointer"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40 text-white text-center p-2">
              <span className="text-xl font-semibold">{post.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikedPosts;
