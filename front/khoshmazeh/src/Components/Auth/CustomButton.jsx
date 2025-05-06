const CustomButton = ({ text }) => {
    return (
        
        <button
            type="submit"
            className="bg-[#D08C4F] text-white rounded-xl hover:bg-orange-500 transition
                       w-[100px] h-[40px] md:w-[168px] md:h-[71px]
                       text-[20px] md:text-[32px]"
          >
            {text}
          </button>
    )
}

export default CustomButton