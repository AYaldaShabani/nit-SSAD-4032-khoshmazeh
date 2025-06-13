import { useMediaQuery } from "react-responsive";
const Footer = () => { 
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    return (
        
        <div className="bottom-0">
            {isMobile ? (<>
                <div className="w-full h-11 bg-mintGreen text-[7px] flex  items-center px-4 ">
                    <p>
                        طراحی  : یلدا شعبانی ، مریم رحمانی
                        <br />
                        توسعه دهندگان : یلدا شعبانی ، مریم رحمانی ، مریم ابونوری 
                    </p>
                </div></>) : (<>
                    <div className="w-full h-22 bg-mintGreen text-lg items-center px-16 flex">
                       <p>
                        طراحی  : یلدا شعبانی ، مریم رحمانی
                        <br />
                        توسعه دهندگان : یلدا شعبانی ، مریم رحمانی ، مریم ابونوری 
                    </p>   
                </div>
            </>)} 
        </div>
    )
}

export default Footer;