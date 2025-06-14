import { useMediaQuery } from "react-responsive";
const FoodCard = ({  title, cook_time, difficulty, img_url }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div>
      {isMobile ? (
        <>
          <div className="w-72 h-36  rounded-4xl shadow bg-[#F8F8F8] flex">
            <div className="w-3/5 bg-amber-800 h-full rounded-r-4xl overflow-hidden">
              <img src={img_url} alt="Food" className="w-full h-full" />
            </div>
            <div className="p-2.5 flex flex-col justify-between px-4">
              <div className="flex flex-col gap-2">
                <div className="text-xs font-bold text-[#2C2C2C]">{title}</div>
                <div className="text-[10px] font-medium">
                  مدت زمان : {cook_time}
                </div>
                <div className="text-[10px] font-medium">
                  درجه سختی : {difficulty}
                </div>
              </div>
              <button className="bg-orangeBrown w-16 h-8 rounded-full text-[10px] text-[#F8F8F8] ">
                {" "}
                بریم سراغ دستورش
              </button>
              <div></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-[570px]   rounded-4xl shadow bg-[#F8F8F8] flex">
            <div className="w-3/5 bg-amber-800 h-full rounded-r-4xl overflow-hidden">
              <img src={img_url} alt="Food" className="w-full h-full" />
            </div>
            <div className="p-2.5 w-2/5 flex flex-col justify-between px-4">
              <div className="flex flex-col gap-8">
                <div className="text-4xl font-bold text-[#2C2C2C]">{title}</div>
                <div className="text-[24px] font-medium">
                  مدت زمان : {cook_time}
                </div>
                <div className="text-[24px] font-medium">
                  درجه سختی : {difficulty}
                </div>
              </div>
              <button className="bg-orangeBrown w-3xs h-28 rounded-full text-[24px] text-[#F8F8F8] ">
                {" "}
                بریم سراغ دستورش
              </button>
              <div></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default FoodCard;
