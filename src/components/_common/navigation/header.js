import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaCaretDown } from 'react-icons/fa';
import { useSelector } from "react-redux";

const Header=()=>{

    const auth = useSelector(state=>state.auth)
    console.log(auth);
    return(
        <>
            <div className="main-nav-bar">
                <div className="navMain">
                    <div className="container-fluid navMenu p-0">
                        <div className="navMenu1 container1 d-flex justify-content-end">
                            <ul>
                                <li><a href="/">TIẾT KIỆM HƠN VỚI ỨNG DỤNG</a></li>
                                <li><a href="/">BÁN HÀNG CÙNG LAZADA</a></li>
                                <li><a href="/">CHĂM SOC KHÁCH HÀNG</a></li>
                                <li><a href="/">KIỂM TRA ĐƠN HÀNG</a></li>
                                {
                                    (() => {
                                        if (auth){
                                            return (
                                                <li><Link to={'/profile'}>Tài khoản của {auth.name}</Link></li>
                                            );
                                        }

                                        return (
                                            <>
                                                <li><Link to={'/login'}>ĐĂNG NHẬP</Link></li>
                                                <li><Link to={'/register'}>ĐĂNG KÝ</Link></li>
                                            </>
                                        );
                                    })()
                                }
                                
                                <li><a href="/">CHANGE LANGUAGE</a></li>
                            </ul>
                        </div>
                        <div className="navMenu2">
                            <ul>
                                <li className="banner-logo"><Link to={'/'}><img src="/images/header/banner_logo.png" alt="logo"/></Link></li>
                                <li className="search-box-1">
                                    <div className="">
                                        <input type="search" placeholder="Tìm kiếm trên Lazada" />
                                        <a href="/"><i className="iStyle"><BiSearch/></i></a>
                                    </div>
                                   
                                </li>
                                <li><a href="/"><i><AiOutlineShoppingCart/></i></a></li>
                                <li className="banner-bank"><a href="/"><img src="/images/header/banner_bank.png" alt="logo bank"/></a></li>
                            </ul>
                        </div>
                        <div className="dropdown-menu-mini">
                            <div className="nav-container-mini d-flex" style={{height: "40px",}}>
                                <div className="nav-dropdown col-2 row">
                                    <div className="col-10 text-end"><span>Categories</span></div>
                                    <div className="col-2 text-start"><FaCaretDown/></div>
                                </div>
                                <nav className="nav-labels col-10">
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <div className="small-item">
                                                    <img src="/images/header/nav/small-icon1.png" alt='#'/>
                                                    <div className="small-content">LAZMALL</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a  href="/">
                                                <div className="small-item">
                                                    <img src="/images/header/nav/small-icon2.png" alt='#'/>
                                                    <div className="small-content">Vouchers</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li><a  href="/">
                                                <div className="small-item">
                                                    <img src="/images/header/nav/small-icon3.png" alt='#'/>
                                                    <div className="small-content">Top Up & eCoupon</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a  href="/">
                                                <div className="small-item">
                                                    <img src="/images/header/nav/small-icon4.png" alt='#'/>
                                                    <div className="small-content">LazGlobal</div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;