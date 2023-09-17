import Navigation from "../components/_common/navigation/navigation";
import Homepage from "../components/_common/homePage/homePage";
import Footer from "../components/_common/footer/footer";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { createAuthUser } from "../features/auth/authSlice";
import { useEffect } from "react";
import profileApis from "../api/profile";
export default function Layout(){
    const auth = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const [cookie, setCookie] = useCookies(["user_token"])

    useEffect(()=>{
        if(!auth.user){
            (
                async()=>{
                    const profileRes = await profileApis.show();
                    if(profileRes.success){
                        dispatch(createAuthUser(profileRes.data));
                    }
                }
            )()
        }
    },[cookie])

    return (
        <>
            <header>
                <img src="/images/header/banner_top.png" alt="banner"/>
            </header>
            <Navigation/>
            <Homepage/>
            <div className="page d-flex justify-content-center">
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}