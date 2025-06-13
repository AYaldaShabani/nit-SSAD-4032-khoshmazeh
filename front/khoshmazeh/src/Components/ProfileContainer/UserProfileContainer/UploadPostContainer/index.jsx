import { useState, } from "react";
import axios from "axios";

const categoriesList = [
  "گوشت", "پیتزا", "صبحانه", "برنج", "پاستا", "خورش", "دسر", "سالاد"
];


function CategorySelector({ categories, setCategories }) {
  const [open, setOpen] = useState(false);
  const toggleCategory = (cat) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="relative text-right">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full  border-1 border-[#D08C4F] text-gray-500  bg-[#F8F8F8] rounded px-3 py-2 text-right  shadow"
      >
        {categories.length > 0
          ? `انتخاب شده: ${categories.join("، ")}`
          : "انتخاب دسته‌بندی غذا"}
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-full bg-[#D9D9D9] border-1 border-[#D08C4F]  rounded shadow p-2 max-h-48 overflow-y-auto space-y-2">
          {categoriesList.map((cat) => (
            <label key={cat} className="flex items-center justify-between text-sm cursor-pointer">
              <span>{cat}</span>
              <input
                type="checkbox"
                checked={categories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="ml-2"
              />
            </label>
          ))}
        </div>
      )}
    </div>
  );
}


export default function UploadPost() {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState({ name: "", amount: "" });
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const addIngredient = () => {
    if (newIngredient.name && newIngredient.amount) {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient({ name: "", amount: "" });
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("categories", JSON.stringify(categories));
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("description", description);
    if (imageFile) formData.append("image", imageFile);
    if (videoFile) formData.append("video", videoFile);

    try {
      await axios.post("http://localhost:8000/api/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      alert("پست با موفقیت آپلود شد!");
    } catch (err) {
      console.error(err);
      alert("خطا در آپلود پست");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white font-sans space-y-6">
     
      <div className="text-center">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="hidden"
          id="upload-image"
        />
        <label htmlFor="upload-image" className="cursor-pointer block">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png"
            alt="آپلود عکس"
            className="w-24 h-24 mx-auto"
          />
          <span className="bg-[#D08C4F] text-white px-4 py-1 rounded inline-block mt-2 w-40 h-10 text-semibold">
            آپلود عکس غذا
          </span>
        </label>
      </div>

   
      <div className="text-center">
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideoFile(e.target.files[0])}
          className="hidden"
          id="upload-video"
        />
        <label htmlFor="upload-video" className="cursor-pointer block">
          <span className="bg-[#D9D9D9] text-[#D08C4F] px-4 py-1 rounded inline-block mt-2 text-semibold">
            آپلود ویدیو
          </span>
        </label>
      </div>

    
      <input
        type="text"
        placeholder="نام غذا"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full  bg-[#F8F8F8] border-1 border-[#D08C4F] rounded px-3 py-2 text-right"
      />

    
      <CategorySelector  categories={categories} setCategories={setCategories}  />

   
<div className="space-y-2">
  <p className="text-right text-sm font-semibold">مواد لازم</p>

 
  <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
    <input
      type="text"
      placeholder="نام ماده"
      value={newIngredient.name}
      onChange={(e) =>
        setNewIngredient({ ...newIngredient, name: e.target.value })
      }
      className="flex-grow  bg-[#F8F8F8] border-1 border-[#D08C4F] rounded px-3 py-2 text-right"
    />
    <input
      type="text"
      placeholder="مقدار"
      value={newIngredient.amount}
      onChange={(e) =>
        setNewIngredient({ ...newIngredient, amount: e.target.value })
      }
      className="w-32  bg-[#F8F8F8] border-1 border-[#D08C4F] rounded px-3 py-2 text-right"
    />
    <button
      onClick={addIngredient}
      className="flex items-center justify-center gap-1  text-white px-4 py-2 rounded whitespace-nowrap"
    >
      <img src="./src/assets/icons8-plus 1.png"/>
      
    </button>
  </div>

  
  <ul className="text-right text-sm text-gray-700 space-y-1">
    {ingredients.map((item, i) => (
      <li
        key={i}
        className="flex justify-between items-center bg-gray-100 px-3 py-1 rounded"
      >
        <span>
          {item.name} - {item.amount}
        </span>
        <button
          onClick={() =>
            setIngredients((prev) =>
              prev.filter((_, index) => index !== i)
            )
          }
          className="text-red-500 hover:text-red-700 text-lg"
          title="حذف"
        >
          🗑️
        </button>
      </li>
    ))}
  </ul>
</div>

      
      <textarea
        placeholder="طرز تهیه"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full bg-[#F8F8F8] border-[#D08C4F] border-1 rounded px-3 py-2 h-32 text-right"
      ></textarea>

     
      <button
        onClick={handleSubmit}
        className="bg-[#D08C4F] text-white w-full py-2 rounded"
      >
        آپلود پست
      </button>
    </div>
  );
}