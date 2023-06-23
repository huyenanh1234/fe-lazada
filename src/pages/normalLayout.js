import { Outlet } from "react-router-dom";
import Header from "../components/_common/navigation/header";
import Footer from "../components/_common/footer/footer";

export default function NormalLayout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}