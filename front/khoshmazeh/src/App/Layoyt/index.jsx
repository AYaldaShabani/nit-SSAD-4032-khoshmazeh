import Footer from "../../Components/Commen/Footer";
import Header from "../../Components/Commen/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
