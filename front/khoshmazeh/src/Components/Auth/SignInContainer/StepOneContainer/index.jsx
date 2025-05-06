import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";
import { Formik , Form} from "formik";
import CustomFeild from "../../CustomFeild";
import * as yup from "yup";
import CustomButton from "../../CustomButton";

const StepOneContainer = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError("");

  //   try {
  //     const response = await axios.post("/api/auth/login", {
  //       email,
  //       password
  //     });

  //     const token = response.data.token;
  //     localStorage.setItem("token", token);
  //     window.location.href = "/";
  //   } catch (err: any) {
  //     setError("ایمیل یا رمز عبور اشتباه است");
  //   }
  // };

  const onSubmit = async (values) => { console.log(values) }
  const validation = yup.object().shape({
    password: yup.string().required("رمز عبور الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است")
  })

  return (
    <div className="border-2 flex justify-center items-center">
      <Formik initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit} validationSchema={validation}>
        <Form  className="flex flex-col gap-3 justify-center items-center">
          <CustomFeild name={"email"} type={"email"} placeholder="ایمیل خود را وارد کنید" />
          <CustomFeild name={"password"} type={"password"} placeholder="پسورد" />
          <div className="text-sm text-center text-[#76949F] text-[13px] md:text-[24px]">
          <Link to="/forgot-password" className=" hover:underline">
            فراموشی رمز
          </Link>
        </div>
        <div className="text-sm text-center text-[#76949F] text-[13px] md:text-[24px]">
          اکانت ندارید؟{" "}
          <Link to="/signup" className=" hover:underline">
            ثبت‌نام کنید
          </Link>
          </div>
          <CustomButton text="ورود" />        
  
        </Form>
          </Formik>
    </div>
  );
};

export default StepOneContainer;
      {/* <form
        onSubmit={handleLogin}
        className="flex flex-col md:space-y-16   space-y-8   items-center border-2 border-pink-500 "
      >
       = <input
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border  bg-[#F8F8F8] border-1 border-[#D08C4F]  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-xl placeholder:text-[13px] md:placeholder:text-[32px]
                       w-[210px] h-[57px] md:w-[580px] md:h-[100px]  "
          required
        />
      =  <input
          type="password"
          placeholder="پسورد"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border bg-[#F8F8F8] border-1 border-[#D08C4F] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-xl placeholder:text-[13px] md:placeholder:text-[32px]
                       w-[210px] h-[57px] md:w-[580px] md:h-[100px]"
          required
        />
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="text-sm text-center text-[#76949F] text-[13px] md:text-[24px]">
          <Link to="/forgot-password" className=" hover:underline">
            فراموشی رمز
          </Link>
        </div>
        <div className="text-sm text-center text-[#76949F] text-[13px] md:text-[24px]">
          اکانت ندارید؟{" "}
          <Link to="/signup" className=" hover:underline">
            ثبت‌نام کنید
          </Link>
        </div>
        <button
          type="submit"
          className="bg-[#D08C4F] text-white rounded-xl hover:bg-orange-500 transition
                       w-[100px] h-[40px] md:w-[168px] md:h-[71px]
                       text-[20px] md:text-[32px]"
        >
          ورود
        </button>
      </form> */}