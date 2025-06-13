import { Route, Routes } from "react-router-dom";
import Layout from "../../App/Layoyt";
import Landing from "../../Pages/Landing";
import Category from "../../Pages/Category";
import FoodDetail from "../../Pages/FoodDetail";
import FoodList from "../../Pages/FoodList";
import UserProfile from "../../Pages/Profile/UserProfile";
import AuthLayout from "../../Components/Auth/AuthLayout";
import StepOne from "../../Pages/Auth/SignIn/StepOne";
import StepTwo from "../../Pages/Auth/SignIn/StepTwo";
import StepThree from "../../Pages/Auth/SignIn/StepThree";
import SignUp from "../../Pages/Auth/SignUp";
import SingleCategoryPage from "../../Pages/Category/SingleCategoryPage/insex";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="category" element={<Category />} />

        <Route path="category/:categoryId" element={<SingleCategoryPage />} />

        <Route path="food-detail" element={<FoodDetail />} />
        <Route path="food-list" element={<FoodList />} />
        <Route path="user-profile" element={<UserProfile />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="sign-in/step-one" element={<StepOne />} />
        <Route path="sign-in/step-two" element={<StepTwo />} />
        <Route path="sign-in/step-three" element={<StepThree />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default RouterConfig;
