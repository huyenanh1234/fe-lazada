import { RxEyeClosed } from "react-icons/rx";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import authApis from "../../api/auth";
import { useCookies } from "react-cookie";
import moment from "moment/moment";
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
    
    const {
        register,
        handleSubmit,
        formState: {errors},
        setError
    } = useForm();
    let navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user_token']);
    const login = async (data) => {
        console.log('function login');
        const loginResponse = await authApis.login(data);
        console.log('login response:',loginResponse);
        if (loginResponse.success) {
            setCookie('user_token', loginResponse.data.user_token, { path: '/' , expires: moment().add(1, 'months').toDate()})
            navigate('/');
            return;
        }
        loginResponse.errors.forEach((error) => {
            const [key, value] = Object.entries(error)[0]
            setError(key, {
                type: 'server',
                message: value.message
            })
        })
    }

    return(
        <>
            <form className="loginContainer" onSubmit={handleSubmit(login)}>
                <div className="loginTitle">
                <div className="welcome">
                    <span>Chào mừng đến với Lazada. Đăng nhập ngay!</span>
                </div>
                <div className="register">
                    "Thành viên mới?"<a href="/">Đăng kí </a> tại đây.
                </div>
                </div>
                <div className="login pb-3">
                <div className="loginCol1">
                    <div className="name">
                    <label>Số điện thoại</label>
                    <input 
                        type="text" 
                        placeholder="Vui lòng nhập số điện thoại" 
                        data-meta="Field" 
                        className="form-control"
                        id="inputPhone"
                        {
                            ...register('phone',{
                                required:'Số điện thoại không được để trống',
                                maxLength: {
                                    value: 11,
                                    message: "Số điện thoại không được lớn hơn 11 ký tự"
                                },
                                minLength: {
                                    value: 10,
                                    message: "Số điện thoại không được ít hơn 10 ký tự"
                                }
                            })
                        }

                    />
                    <br></br><span></span>
                    </div>
                    <div className="name password">
                    <label className="mt-4">Mật khẩu*</label>
                    <div className="getPass">
                        <input 
                            className="getPass1" 
                            id="getPass1" 
                            type="password" 
                            placeholder="Vui lòng nhập mật khẩu của bạn" 
                            data-meta="Field" 
                            {
                                ...register('password',{
                                    required: 'Mật khẩu không được để trống',
                                    maxLength: {
                                        value: 20,
                                        message: "Mật khẩu không được lớn hơn 20 ký tự"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Mật khẩu không được ít hơn 6 ký tự"
                                    }
                                })
                            }
                        />
                       
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
                        <button type="submit">LOGIN</button>
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