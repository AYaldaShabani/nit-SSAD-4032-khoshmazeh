import { Form, Formik } from "formik";
import React, { useState } from "react";
import CustomFeild from "../CustomFeild";
import CustomButton from "../CustomButton";
import * as yup from "yup";

const SignUpContainer = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };
  const phoneRegEx = /^(\+98|0)?9\d{9}$/;
  const validayion = yup.object().shape({
    fullName: yup.string().required("نام و نام خانوادگی الزامی است"),
    phone: yup
      .string()
      .matches(phoneRegEx, "شماره تلفن نامعتبر است")
      .required("شماره تلفن الزامی است"),
    password: yup
      .string()
      .required("رمز عبور الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است")
  });
  return (
    <div className="flex flex-col h-full  ">
      <div className="flex-1 flex items-center justify-center bg-white">
        <Formik
          initialValues={{ fullName: "", phone: "", password: "", email: "" }}
          onSubmit={(values) => onSubmit(values)}
          validationSchema={validayion}
        >
          <Form className="flex flex-col gap-3 justify-center items-center">
            <CustomFeild
              name={"fullName"}
              type="text"
              placeholder="نام و نام خانوادگی"
            />
            <CustomFeild name={"phone"} type="text" placeholder="شماره تلفن" />
            <CustomFeild
              name={"password"}
              type="password"
              placeholder="رمز عبور"
            />
            <CustomFeild name={"email"} type="email" placeholder="ایمیل" />
            <p className="text-xs text-center text-[#76949F] text-[13px] md:text-[24px]">
              اکانت دارید؟{" "}
              <a href="/sign-in/step" className="hover:underline">
                به ورود بروید
              </a>
            </p>

            <CustomButton text="ثبت‌نام" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUpContainer;

// const [formData, setFormData] = useState({
//   fullName: "",
//   phone: "",
//   password: "",
//   email: "",
// });

// const [loading, setLoading] = useState(false);

// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setFormData({ ...formData, [e.target.name]: e.target.value });
// };

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setLoading(true);

//   try {
//     const res = await fetch("", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const result = await res.json();

//     if (res.ok) {
//       alert("ثبت‌نام با موفقیت انجام شد");
//     } else {
//       alert(result.message || "خطا در ثبت‌نام");
//     }
//   } catch (error) {
//     console.error(error);
//     alert("خطا در ارتباط با سرور");
//   }

//   setLoading(false);
// };

{
  /* <form className="w-full flex flex-col md:space-y-16   space-y-8  items-center bg-white p-6">
          = <input
            type="text"
            name="fullName"
            placeholder="نام و نام خانوادگی"
            value={formData.fullName}
            onChange={handleChange}
            className="border bg-[#F8F8F8] border-1 border-[#D08C4F] px-4 rounded-xl outline-none text-right
                       placeholder: text-[13px] md:placeholder:text-[32px]
                       w-[210px] h-[57px] md:w-[580px] md:h-[100px]"
          />
         = <input
            type="text"
            name="phone"
            placeholder="شماره تلفن"
            value={formData.phone}
            onChange={handleChange}
            className="border  bg-[#F8F8F8] border-1 border-[#D08C4F] px-4 rounded-xl outline-none text-right
                       placeholder:text-[13px] md:placeholder:text-[32px]
                       w-[210px] h-[57px] md:w-[580px] md:h-[100px]"
          />
         = <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            value={formData.password}
            onChange={handleChange}
            className="border  bg-[#F8F8F8] border-1 border-[#D08C4F] px-4 rounded-xl outline-none text-right
                       placeholder:text-[13px] md:placeholder:text-[32px]
                       w-[210px] h-[57px] md:w-[580px] md:h-[100px]"
          />
         = <input
            type="email"
            name="email"
            placeholder="ایمیل"
            value={formData.email}
            onChange={handleChange}
            className="border  bg-[#F8F8F8] border-1 border-[#D08C4F] px-4 rounded-xl outline-none text-right
                       placeholder:text-[13px] md:placeholder:text-[32px]
                       w-[210px] h-[57px] md:w-[580px] md:h-[100px]"
          />

          <p className="text-xs text-center text-[#76949F] text-[13px] md:text-[24px]">
            اکانت دارید؟{" "}
            <a href="/sign-in/step" className="hover:underline" >
              به ورود بروید
            </a>
          </p>

          <button
            type="submit"
            className="bg-[#D08C4F] text-white rounded-xl hover:bg-orange-500 transition
                       w-[100px] h-[40px] md:w-[168px] md:h-[71px]
                       text-[20px] md:text-[32px]"
          >
            ثبت‌نام
          </button>
        </form> */
}
