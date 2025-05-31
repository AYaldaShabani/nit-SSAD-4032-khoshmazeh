import { useState } from "react";
import axios from "axios";

const StepThreeContainer = () => {
    const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:8000/api/verify-otp", {
        otp: otp,
      });

      setMessage("کد تایید شد!");
      console.log(response.data); 
    } catch (error) {
      console.error(error);
      setMessage("کد وارد شده صحیح نیست.");
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
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="کد را وارد کنید"
          className="w-[210px] h-[57px] md:w-[580px] md:h-[100px] bg-[#F8F8F8] border border-[#D08C4F] rounded-xl px-4 py-2 text-right placeholder-gray-500 text-[13px] md:text-[32px] placeholder:text-[13px] md:placeholder:text-[32px] focus:outline-none focus:ring-2 focus:ring-orange-300"
          required
        />

<button
          type="submit"
          disabled={loading}
          className="w-[100px] h-[48px] md:w-[365px] md:h-[60px] bg-[#D08C4F] hover:bg-orange-500 text-white text-[20px] md:text-[32px] rounded-xl transition disabled:opacity-50"
        >
          {loading ? "در حال تایید..." : "تایید"}
        </button>

{message && <p className="text-sm text-center text-gray-700">{message}</p>}
</form>

    
    )
}

export default StepThreeContainer