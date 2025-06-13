import { useMediaQuery } from "react-responsive";
import user from "../../../assets/Img/user.svg";
import Search from "../Search";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const navigateSignIn = useNavigate();
    const navigateLanding = useNavigate();
  return (
    <div>
      <div
        className="
        w-full h-7 sm:h-12 flex justify-center items-center bg-mintGreen text-[10px] sm:text-sm"
      >
        هر پنجشنبه کلی سوپرایز خفن داریم
      </div>
      <div className="w-full h-20 sm:h-40 shadow-sm flex items-center px-6 sm:px-32 justify-center">
        {isMobile ? (
          <>
            <div className="text-orangeBrown text-3xl font-bold w-1/2">
              خوشمزه
            </div>
            <div className="text-orangeBrown text-xs font-bold w-1/2 justify-center items-center flex">
              ورود/ثبت نام
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center gap-16 w-full ">
              <div onClick={() => {navigateLanding("/")}} className="text-orangeBrown text-6xl font-bold ">خوشمزه</div>
              <div>
                <Search />
              </div>
              <div onClick={() => {navigateSignIn("auth/sign-in/step-one")}} className="flex items-center justify-between gap-4 cursor-pointer">
                <div>
                  <img src={user} alt="" />
                </div>
                <div>ورود/ثبت نام</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
