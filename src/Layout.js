import { Outlet } from "react-router-dom";
import TopHeader from "./header/TopHeader";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";

function Layout({ changeLanguage }) {

    return (
        <div>
            <TopHeader changeLanguage={changeLanguage} />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;