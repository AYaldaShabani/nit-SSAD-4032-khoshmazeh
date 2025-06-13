import FoodCard from "../../Commen/Card/FoodCrad";
import Breadcrumb from "../../Commen/Breadcrumb";
import { useParams } from "react-router-dom";
import { getFoodByCategory } from "../../../Core/Services/Api/foodService.api";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
const categoryMap = {
  breakfast: "صبحانه",
  pizza: "پیتزا",
  pasta: "پاستا",
  meat: "گوشت",
  salad: "سالاد",
  dessert: "دسر",
  sweet: "شیرینی",
  rice: "برنج"
};
const SingleCategoryContainer = () => {
  const { categoryId } = useParams();
  const [foods, setFoods] = useState([]);
  const categoryTitle = categoryMap[categoryId] || "نامشخص";
useEffect(() => {
    getFoodByCategory(categoryId)
        .then((res) => {
          console.log("Fetched foods:", res);
        setFoods(res);
      })
      .catch((error) => {
        console.error("Error fetching foods by category:", error);
      });
    }, [categoryId]);

    return <div>
        <Breadcrumb />
        <h2 className="text-xl font-bold text-right px-4 mt-4">{categoryTitle}</h2>
      <div className="space-y-6 px-4 py-6">
        {foods.map((food, index) => 
         (   <FoodCard
                  food_id={food.id}
                  title={food.title}
                  cook_time={food.cook_time}
                  difficulty={food.difficulty}
                  img_url={food.image_url}
                />)
        )}
      </div>
  </div>;
};

export default SingleCategoryContainer;
