import http from "../Interceptor"
export const sign_up_user = async (userData) => {
    try {
        const res = await http.post("/Sign/SendVerifyMessage", userData);
        if (res.success) {
          return res;
        } else {
          toast.error(res.success);
        }
      } catch {
        toast.error(" لطفا دوباره تلاش کنید");
      }
}


export const user_login_st1 = async (userData) => {
    
    try {
        const res = await http.post("/Sign/Login", userData);
        if (res.success) {
          toast.success(res.message);
          localStorage.setItem("token", res.token);
          return true;
        } else {
          toast.error(res.message);
          return false;
        }
      } catch {
        toast.error("خطا در برقراری ارتباط با سرور ");
      }

    
 }

export const user_login_st2 = async (userData) => {
    try {
        const res = await http.post("/Sign/VerifyUser", userData);
        if (res.success) {
          toast.success(res.message);
          localStorage.setItem("token", res.token);
          return true;
        } else {
          toast.error(res.message);
          return false;
        }
    }
    catch {
        toast.error("خطا در برقراری ارتباط با سرور ");
    }
    }
 
