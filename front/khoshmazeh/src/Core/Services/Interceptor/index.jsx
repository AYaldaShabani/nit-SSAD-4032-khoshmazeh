import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({ baseURL: baseURL });

const onSucces = (res) => res.data;
const onError = (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem("token");
    window.location.pathname = "/auth/sign-in/step-one";
  }
};

instance.interceptors.response.use(onSucces, onError);
instance.interceptors.request.use((opt) => {
  const token = localStorage.getItem("token");
  opt.headers.Authorization = `Bearer ${token}`;
  return opt;
});

export default instance;