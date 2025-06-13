import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const CategoryCard = ({ imgSource, title, linkTo }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="flex flex-col  justify-center items-center">
      {isMobile ? (<>
            <div
        className="w-[122px] h-[152px] rounded-[28px] 
                            "
      >
        {" "}
        <img src={imgSource} alt="" className="w-full h-full" />
      </div>
      <Link to={linkTo}>
        <div className="w-20 h-4 rounded-[28px] border-mintGreen border-1 flex justify-center items-center text-[10px]  text-black relative -top-2 bg-white ">
          {title}
        </div>
        </Link></>) : (<>
              <div
        className="w-[275px] h-[382px] rounded-[28px] 
                            "
      >
        {" "}
        <img src={imgSource} alt="" className="w-full h-full" />
      </div>
      <Link to={linkTo}>
        <div className="w-[187px] h-[45px] rounded-[28px] border-mintGreen border-1 flex justify-center items-center text-[32px]  text-black relative -top-2 bg-white ">
          {title}
        </div>
      </Link></>)}

    </div>
  );
};
export default CategoryCard;
