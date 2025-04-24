import Footer from "../../Components/Commen/Footer";
import Header from "../../Components/Commen/Header";
import { Outlet } from "react-router-dom";

const Layout = () => { 
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )

}

export default Layout;