import React, { useEffect, useState } from "react";
import axios from "axios";

const PersonalInfoPage = () => {
  const [user, setUser] = useState({
    full_name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    axios.get("http://localhost:8000/api/user").then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
     
      <div className=" flex flex-col flex-grow">
       
        <div className="flex justify-start p-4">
          <button className="bg-[#D08C4F] text-white py-1 px-4 rounded-md shadow-md text-sm h-10 w-20">بازگشت</button>
        </div>

     
        <div className="flex flex-col items-center gap-6 px-4 mt-4 mb-8">
         
          <div className="w-full max-w-md text-right">
            <label className="text-sm font-semibold">نام و نام خانوادگی:</label>
            <div className="bg-[#D08C4F] text-white rounded-md py-3 px-4 mt-1 h-15">{user.full_name || "مریم رحمانی"}</div>
          </div>

       
          <div className="w-full max-w-md text-right">
            <label className="text-sm font-semibold">شماره همراه:</label>
            <div className="bg-[#D08C4F] text-white rounded-md py-3 px-4 mt-1 h-15">{user.phone || "09912650261"}</div>
          </div>

         
          <div className="w-full max-w-md text-right">
            <label className="text-sm font-semibold">ایمیل:</label>
            <div className="bg-[#D08C4F] text-white rounded-md py-3 px-4 mt-1 italic h-15">{user.email || "maryam.rahmani458982@gmail.com"}</div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default PersonalInfoPage;
