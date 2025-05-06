import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className=" flex flex-col justify-between h-screen">
      <div className="h-16 w-full bg-[#b0c9b0]"> </div>
      {/* outlet is for forms */}
      <div>
        <Outlet />
      </div>

      <div className="h-16 bg-[#b0c9b0] "></div>
    </div>
  );
};

export default AuthLayout;
