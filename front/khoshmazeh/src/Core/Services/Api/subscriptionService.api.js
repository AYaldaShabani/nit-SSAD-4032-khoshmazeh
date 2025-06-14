import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

const fallbackPlans = [
  { id: 1, title: "اشتراک یک ماهه", duration: 30, price: 40000 },
  { id: 2, title: "اشتراک سه ماهه", duration: 90, price: 100000 },
  { id: 3, title: "اشتراک شش ماهه", duration: 180, price: 180000 },
];

export const getPlans = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/plans`);
    return response.data;
  } catch (error) {
    console.warn("خطا در دریافت پلن‌ها، استفاده از داده‌های پیش‌فرض.");
    return fallbackPlans;
  }
};

export const subscribeToPlan = async (planId) => {
  try {
    await axios.post(`${API_BASE_URL}/subscribe`, { plan_id: planId });
    return true;
  } catch (error) {
    throw new Error("خطا در ارسال درخواست اشتراک.");
  }
};
