import { Link, useLocation } from "react-router-dom";

const routeMap = {
    "/": "خانه",
    "/category": "دسته بندی غذا ها",
    "/category/breakfast": "صبحانه",
    "/category/pizza": "پیتزا",
    "/category/pasta": "پاستا",
    "/category/meat": "گوشت",
    "/category/salad": "سالاد",         
    "/category/dessert": "دسر",
    "/category/sweet": "شیرینی",
    "/category/rice": "برنج",
    "/food-detail": "جزئیات غذا",
    "/food-list": "لیست غذا ها",
    "/user-profile": "پروفایل کاربری",
}
 
const Breadcrumb = () => { 
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    
    return (
        <div className="bg-orangeBrown h-7 sm:h-16  flex items-center px-4 ">
        <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="text-white sm:text-[30px] hover:underline">خانه</Link>
            {pathnames.length > 0 && (
                <>
                    <span className="mx-2">/</span>
                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        return (
                            <span key={to}>
                                <Link to={to} className="text-white sm:text-[30px] hover:underline">
                                    {routeMap[to] || value}
                                </Link>
                                {index < pathnames.length - 1 && <span className="mx-2">/</span>}
                            </span>
                        );
                    })}
                </>
            )}
        </nav>
        </div>

    );

}

export default Breadcrumb;