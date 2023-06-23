import Navigation from "../components/_common/navigation/navigation";
import Homepage from "../components/_common/homePage/homePage";
import Footer from "../components/_common/footer/footer";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return (
        <>
            <header>
                <img src="/images/header/banner_top.png" alt="banner"/>
            </header>
            <Navigation/>
            <Homepage/>
            <div className="page">
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}