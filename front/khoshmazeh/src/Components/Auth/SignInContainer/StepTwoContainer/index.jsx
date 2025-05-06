import { useState } from "react";
import axios from "axios";

const StepTwoContainer
 = () => {

    const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:8000/api/send-otp", {
        phone: phone,
      });

      setMessage("رمز یکبار مصرف ارسال شد.");
      console.log(response.data); 
    } catch (error) {
      console.error(error);
      setMessage("خطا در ارسال رمز. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };
    return (
   
     
    
      <form
        onSubmit={handleSubmit}
        className="z-10 bg-white w-full   px-6 py-10 rounded-md flex flex-col items-center space-y-6 mt-20"
      >

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="شماره تماس خود را وارد کنید"
          className="w-full bg-[#F8F8F8] border border-[#D08C4F] rounded-md px-4 py-2 text-right placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300  rounded-xl placeholder:text-[13px] md:placeholder:text-[32px]
                       w-[210px] h-[57px] md:w-[580px] md:h-[100px]"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#D08C4F] hover:bg-orange-500 text-white py-2 rounded-xl transition disabled:opacity-50 w-[100px] h-[48px] md:w-[365px] md:h-[60px]
                       text-[20px] md:text-[32px]"
        >
          {loading ? "در حال ارسال..." : "ارسال رمز یکبار مصرف"}
        </button>

        {message && <p className="text-sm text-center text-gray-700">{message}</p>}
      </form>

    
    
    )
}

export default StepTwoContainer 