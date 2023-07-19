import { RxEyeClosed } from "react-icons/rx";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Login=()=>{
    
    useEffect(()=>{
        const password=document.querySelector('#getPass1')
        document.querySelector('.eye-close').addEventListener('click',()=>{
       
            if(password.getAttribute("type")==="password"){
                password.setAttribute("type","text")
                document.querySelector('.eye-close').style.display="none"
                document.querySelector('.eye-open').style.display="block"
            }
        })
        document.querySelector('.eye-open').addEventListener('click',()=>{

            if(password.getAttribute("type")==="text"){
                password.setAttribute("type","password")
                document.querySelector('.eye-close').style.display="block"
                document.querySelector('.eye-open').style.display="none"
            }
        })
        
    })
    
    return(
        <>
            <form className="loginContainer">
                <div className="loginTitle">
                <div className="welcome">
                    <span>Chào mừng đến với Lazada. Đăng nhập ngay!</span>
                </div>
                <div className="register">
                    "Thành viên mới?"<a href="#">Đăng kí </a> tại đây.
                </div>
                </div>
                <div className="login pb-3">
                <div className="loginCol1">
                    <div className="name">
                    <label>Số điện thoại</label>
                    <input type="text" placeholder="Vui lòng nhập số điện thoại " data-meta="Field" />
                    <br></br><span></span>
                    </div>
                    <div className="name password">
                    <label className="mt-4">Mật khẩu*</label>
                    <div className="getPass">
                        <input className="getPass1" id="getPass1" type="password" placeholder="Vui lòng nhập mật khẩu của bạn" data-meta="Field" />
                       
                            <RxEyeClosed className='eye-close'></RxEyeClosed>
                            <AiOutlineEye className='eye-open'></AiOutlineEye>
                        
                    </div>
                    <br></br><span></span>
                    </div>
                    <div className="loginForgot">
                    <Link to={"/forgotPassword"}>Quên mật khẩu?</Link>
                    </div>
                </div>
                <div className="loginCol2">
                    <div className="login-btn">
                    <Link to={'/'}>
                        <button>LOGIN</button>
                        
                      
                        
                        </Link>
                    </div>
                    <div className="loginThird">
                    <div className="loginThird1">
                        <div className="loginThird11">
                        <span>Or, login with</span>
                        </div>
                        <div className="loginThird12">
                        <button className="facebook">Facebook</button>
                        <button className="google">Google</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </form>
        </>
    )
}
export default Login;