import axios from "axios";

const mockUser = {
  full_name: "مریم رحمانی",
  username: "Maryam_Rhm",
  image: "./src/assets/images.jpg",
  phone: "09912650261",
  email: "maryam.rahmani458982@gmail.com",
};

export const getUserInfo = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/user");
    return response.data;
  } catch (error) {
    console.warn("User API failed. Returning mock data.");
    return mockUser;
  }
};
