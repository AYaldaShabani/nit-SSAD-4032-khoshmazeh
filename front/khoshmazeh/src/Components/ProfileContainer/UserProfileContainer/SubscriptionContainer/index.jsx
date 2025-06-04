import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; 

const fallbackPlans = [
  { id: 1, title: 'اشتراک یک ماهه', duration: 30, price: 40000 },
  { id: 2, title: 'اشتراک سه ماهه', duration: 90, price: 100000 },
  { id: 3, title: 'اشتراک شش ماهه', duration: 180, price: 180000 },
];

const SubscriptionPage = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/plans`)
      .then((res) => setPlans(res.data))
      .catch((err) => {
        console.warn('خطا در اتصال به بک‌اند، استفاده از داده پیش‌فرض');
        setPlans(fallbackPlans);
      });
  }, []);

  const handleSelect = (planId) => {
    
    setSelectedPlanId((prev) => (prev === planId ? null : planId));
  };

  const handleSubmit = () => {
    if (!selectedPlanId) return alert('لطفاً یکی از پلن‌ها را انتخاب کنید.');
    axios
      .post(`${API_BASE_URL}/subscribe`, { plan_id: selectedPlanId })
      .then(() => alert('پلن انتخاب شد!'))
      .catch(() => alert('خطا در ارسال پلن (بک‌اند در دسترس نیست)'));
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-[#D08C4F]">خرید اشتراک</h1>

        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`border border-[#D08C4F] bg-[#F8F8F8] rounded-2xl p-5 bg-white shadow-md flex justify-between items-center ${
                selectedPlanId === plan.id ? 'ring-2 ring-[#CA6C00]' : ''
              }`}
            >
              <div>
                <div className="font-bold text-lg text-[#D08C4F]">{plan.title}</div>
                <div className="text-[#B0C4B1] text-sm mt-1">{plan.duration} روزه</div>
                <div className="text-[#D08C4F] font-semibold mt-2">{plan.price.toLocaleString()} تومان</div>
              </div>
              <button
                onClick={() => handleSelect(plan.id)}
                className={`text-white py-1.5 px-4 rounded-xl text-sm ${
                  selectedPlanId === plan.id ? 'bg-gray-500' : 'bg-[#D08C4F]'
                }`}
              >
                {selectedPlanId === plan.id ? 'لغو انتخاب' : 'انتخاب'}
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!selectedPlanId}
          className={`w-full py-3 rounded-xl font-bold transition ${
            selectedPlanId ? 'bg-[#D08C4F] text-white hover:bg-[#b45e00]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          رفتن به صفحه‌ی پرداخت
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPage;
