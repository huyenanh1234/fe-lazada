import React from "react";
import {BiSearch} from "react-icons/bi";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from "react-router-dom";
const Navigation = ()=>{
    return(
        <>
            <div className="main-nav-bar">
                <div className="navMain">
                    <div className="container-fluid navMenu p-0">
                        <div className="container1 navMenu1 d-flex justify-content-end">
                            <ul>
                                <li><a href="#">TIẾT KIỆM HƠN VỚI ỨNG DỤNG</a></li>
                                <li><a href="#">BÁN HÀNG CÙNG LAZADA</a></li>
                                <li><a href="#">CHĂM SOC KHÁCH HÀNG</a></li>
                                <li><a href="#">KIỂM TRA ĐƠN HÀNG</a></li>
                                <li><Link to={'/login'}>ĐĂNG NHẬP</Link></li>
                                <li><Link to={'/register'}>ĐĂNG KÝ</Link></li>
                                <li><a href="#">CHANGE LANGUAGE</a></li>
                            </ul>
                        </div>
                        <div className="navMenu2">
                            <ul>
                                <li className="banner-logo"><Link to={"/"}><img src="images/header/banner_logo.png" alt="logo"/></Link></li>
                                <li className="search-box-1">
                                    <input type="search" placeholder="Tìm kiếm trên Lazada" />
                                    <Link href="#" to={'/find'}><i className="iStyle"><BiSearch/></i></Link>
                                </li>
                                <li><a href="#"><i><AiOutlineShoppingCart/></i></a></li>
                                <li className="banner-bank"><a href="#"><img src="images/header/banner_bank.png" alt="logo bank"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Navigation;