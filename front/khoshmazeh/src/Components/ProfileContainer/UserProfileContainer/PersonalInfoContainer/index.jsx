import React, { useEffect, useState } from "react";
import { getUserInfo } from "./src/Core/Services/Api/userService.api";

const PersonalInfoPage = () => {
  const [user, setUser] = useState({
    full_name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    getUserInfo().then(setUser);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col items-center gap-6 px-4 mt-4 mb-8">
          <div className="w-full max-w-md text-right">
            <label className="text-sm font-semibold">نام و نام خانوادگی:</label>
            <div className="bg-[#D08C4F] text-white rounded-md py-3 px-4 mt-1 h-15">
              {user.full_name}
            </div>
          </div>

          <div className="w-full max-w-md text-right">
            <label className="text-sm font-semibold">شماره همراه:</label>
            <div className="bg-[#D08C4F] text-white rounded-md py-3 px-4 mt-1 h-15">
              {user.phone}
            </div>
          </div>

          <div className="w-full max-w-md text-right">
            <label className="text-sm font-semibold">ایمیل:</label>
            <div className="bg-[#D08C4F] text-white rounded-md py-3 px-4 mt-1 italic h-15">
              {user.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoPage;
