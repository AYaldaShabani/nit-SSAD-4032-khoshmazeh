import { Field } from "formik";
const CustomFeild = ({ name, type, placeholder }) => {
  return (
    <div>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="border  bg-[#F8F8F8] border-1 border-[#D08C4F] px-4 rounded-xl outline-none text-right placeholder:text-[13px] md:placeholder:text-[32px] w-[210px] h-[57px] md:w-[580px] md:h-[100px]"
      />
    </div>
  );
};

export default CustomFeild;
