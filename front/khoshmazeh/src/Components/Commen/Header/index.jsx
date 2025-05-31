import React from "react";
import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Header = () => {
   
  return (
   <div className="w-full">
      {/* نوار بالایی سبز */}
      <div className="w-full h-6 bg-[#B0C4B1]" />

      {/* هدر اصلی */}
      <header className="w-full bg-[#F8F8F8] h-20 px-4 py-2 flex items-center justify-between shadow-sm">
        {/* راست: خوشمزه */}
        <div className="text-3xl font-bold text-[#D08C4F] whitespace-nowrap mr-8">
          خوشمزه
        </div>

        {/* وسط: نوار جستجو */}
        <div className="flex-1 mx-4 max-w-md ">
          <div className="relative ">
            <input
              type="text"
              placeholder="دنبال چه غذایی هستی ؟..."
              dir="rtl"
              className="w-full pr-10 pl-4 py-2 rounded-full border   border-[#B0C4B1] focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm placeholder:text-gray-500"
            />
            <FiSearch
              className="absolute right-3 top-1/2 -translate-y-1/2 text-500 text-[#B0C4B1]"
              size={18}
            />
          </div>
        </div>

        {/* چپ: ورود/ثبت‌نام */}
        <div className="flex items-center gap-2 text-sm text-gray-900 whitespace-nowrap  ml-8">
          <FaUser 
          className="text-[#B0C4B1] text-xl"/>
          <span>ورود/ثبت‌نام</span>
        </div>
      </header>
    </div>
  );
}


export default Header