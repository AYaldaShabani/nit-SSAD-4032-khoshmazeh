import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user")
      .then((res) => setUser(res.data))
      .catch((err) => console.error("خطا در دریافت اطلاعات کاربر:", err));
  }, []);

   const buttons = [
    { label: "اطلاعات شخصی", path: "/UserInfo" },
    { label: "مورد علاقه ها", path: "/LikedPosts" },
    { label: "آپلود پست", path: "/UploadPost" },
  ];

  return (
    <div className="py-10 px-4 relative flex justify-center bg-white">
      
      <button className="absolute top-4 right-4 bg-[#76949F] text-white py-2 px-4 rounded text-sm shadow z-10 h-10"    onClick={() => navigate("/Subscription")}>
        خرید اشتراک
      </button>

      <div className="min-h-screen w-full max-w-6xl p-6 flex flex-col md:flex-row md:items-start items-center gap-10">
        
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-start order-1">
          
          <div className="flex flex-row md:flex-col items-center md:items-center gap-4">
            <img
              src={user?.image || "./src/assets/images.jpg"}
              className="w-50 h-32 object-cover border shadow rounded-tr-full rounded-bl-full"
            />
           
            <div className="text-right md:text-center">
              <h2 className="text-lg font-bold text-gray-800">
                {user?.full_name || "مریم رحمانی"}
              </h2>
              <p className="text-sm text-gray-600">
                {user?.username || "Maryam_Rhm"}
              </p>
            </div>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 flex justify-center md:justify-start order-2">
          <div className="flex flex-col gap-4 w-full max-w-md">
            {buttons.map(({ label, path }, idx) => (
              <button
                key={idx}
                onClick={() => navigate(path)}
                className="bg-[#B0C4B1] w-full py-3 rounded-xl text-gray-800 font-semibold text-base shadow"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
