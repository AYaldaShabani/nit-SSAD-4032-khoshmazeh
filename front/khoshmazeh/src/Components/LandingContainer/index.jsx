import FoodCard from "../Commen/Card/FoodCrad";
import { getLatesFood } from "../../Core/Services/Api/foodService.api";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Search from "../Commen/Search";
import categoeryLogo from "../../assets/Img/categoey.svg";
import { useNavigate } from "react-router-dom";

const LandingContainer = () => {
    const navigateCategory = useNavigate();
  const [latestFood, setLatestFood] = useState([]);
  
  useEffect(() => {
    getLatesFood(6)
      .then((res) => {
        setLatestFood(res);
      })
      .catch((error) => {
        console.error("Error fetching latest food:", error);
      });
  }, []);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // Sample data for the card
  const title = "Latest Foods";
  const cook_time = 20;
  const difficulty = "Easy";
  const img_url =
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092";
  const food_id = "1";
  return (
    <div>
      {isMobile ? (
        <>
          <div className="w-full px-7 py-4 flex flex-col gap-4 justify-center items-center">
            {/* serach box */}
            <Search />
            {/* categoey */}
            <div className="w-full h-11 rounded-full bg-orangeBrown py-1.5 px-12 flex justify-between items-center px-4 cursor-pointer" onClick={() => navigateCategory("/category")}>
              <img src={categoeryLogo} alt="" />
              <div className="text-[#F8F8F8] text-xs font-bold ">
                {" "}
                دسته بندی غذا ها{" "}
              </div>
            </div>
            {/* card warper */}
            <div className="flex flex-col gap-5">
              {latestFood.map((food) => (
                <FoodCard
                  food_id={food.id}
                  title={food.title}
                  cook_time={food.cook_time}
                  difficulty={food.difficulty}
                  img_url={food.image_url}
                />
              ))}{" "}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full px-32 py-20 flex flex-col gap-10 justify-center items-start">
            <div className="flex justify-between items-center  gap-4">
              {/* category */}
              <div className="w-[430px] h-[150px] bg-orangeBrown rounded-full flex justify-center items-center gap-2.5  cursor-pointer" onClick={() => navigateCategory("/category")}> 
                <img src={categoeryLogo} alt="" className="w-[50px]" />
              <div className="text-[#F8F8F8] text-3xl font-bold ">
                {" "}
                دسته بندی غذا ها{" "}
                                  </div>
                                  
                              </div>
                              <p className="text-[32px] text-[#2C2C2C] max-w-[512px]">تمام دسته بندی هایی که فکرش رو میکنی برات قرار دادیم تا توی سریع ترین زمان ممکن غذای دلخواهت رو پیدا کنی 
</p>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-4xl font-bold text-[#2C2C2C] ">
                تازه ترین مطالب
              </p>
              <div className="flex flex-col gap-5">
                {latestFood.map((food) => (
                  <FoodCard
                    food_id={food.id}
                    title={food.title}
                    cook_time={food.cook_time}
                    difficulty={food.difficulty}
                    img_url={food.image_url}
                  />
                ))}{" "}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default LandingContainer;
