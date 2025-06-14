import axios from "axios";

export const uploadPost = async (postData) => {
  const formData = new FormData();
  formData.append("title", postData.title);
  formData.append("categories", JSON.stringify(postData.categories));
  formData.append("ingredients", JSON.stringify(postData.ingredients));
  formData.append("description", postData.description);
  if (postData.imageFile) formData.append("image", postData.imageFile);
  if (postData.videoFile) formData.append("video", postData.videoFile);

  try {
    await axios.post("http://localhost:8000/api/posts", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error };
  }
};
