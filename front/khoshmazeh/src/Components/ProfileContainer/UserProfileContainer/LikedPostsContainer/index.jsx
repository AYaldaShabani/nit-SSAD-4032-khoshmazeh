import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLikedPosts } from "./src/Core/Services/Api/likeService.api";

function LikedPosts() {
  const [likedPosts, setLikedPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getLikedPosts().then(setLikedPosts);
  }, []);

  return (
    <div className="p-4 min-h-screen bg-white font-sans">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {likedPosts.map((post, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/recipe/${post.id}`)}
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
