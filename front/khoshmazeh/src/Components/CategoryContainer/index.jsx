import Breadcrumb from "../Commen/Breadcrumb";
import { useMediaQuery } from "react-responsive";
import breakfast from "../../assets/Img/categoryImg/breakfast.png";
import pizza from "../../assets/Img/categoryImg/pizza.png";
import pasta from "../../assets/Img/categoryImg/pasta.png";
import meat from "../../assets/Img/categoryImg/meat.png";
import salad from "../../assets/Img/categoryImg/salad.png";
import dessert from "../../assets/Img/categoryImg/dessert.png";
import sweet from "../../assets/Img/categoryImg/sweet.png";
import rice from "../../assets/Img/categoryImg/rice.png";
import CategoryCard from "../Commen/Card/CategoryCard";

const CategoryContainer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div>
      <Breadcrumb />
      <div>
        {isMobile ? (
          <>
            <div className="grid grid-cols-2 gap-4 px-4 py-4">
              <CategoryCard imgSource={pizza} title="پیتزا" linkTo = "/category/pizza"  />
              <CategoryCard imgSource={breakfast} title="صبحانه" linkTo="/category/breakfast" />
              <CategoryCard imgSource={meat} title="گوشت" linkTo="/category/Meat" />
              <CategoryCard imgSource={pasta} title="پاستا" linkTo="/category/pasta" />
                          <CategoryCard imgSource={rice} title="برنج" linkTo="/category/rice" />
                          <CategoryCard imgSource={sweet} title="شیرینی" linkTo="/category/sweet" />
              <CategoryCard imgSource={salad} title="سالاد" linkTo="/category/salad" />
              <CategoryCard imgSource={dessert} title="دسر" linkTo="/category/dessert" />
            </div>
          </>
        ) : (
            <>
            <div className="grid grid-cols-4 gap-4 px-4 py-4">
              <CategoryCard imgSource={pizza} title="پیتزا" linkTo = "/category/pizza"  />
              <CategoryCard imgSource={breakfast} title="صبحانه" linkTo="/category/breakfast" />
              <CategoryCard imgSource={meat} title="گوشت" linkTo="/category/Meat" />
              <CategoryCard imgSource={pasta} title="پاستا" linkTo="/category/pasta" />
                          <CategoryCard imgSource={rice} title="برنج" linkTo="/category/rice" />
                          <CategoryCard imgSource={sweet} title="شیرینی" linkTo="/category/sweet" />
              <CategoryCard imgSource={salad} title="سالاد" linkTo="/category/salad" />
              <CategoryCard imgSource={dessert} title="دسر" linkTo="/category/dessert" />
            </div></>
        )}
      </div>
    </div>
  );
};

export default CategoryContainer;
