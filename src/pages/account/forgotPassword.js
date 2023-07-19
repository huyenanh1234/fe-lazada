import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { RxEyeClosed } from "react-icons/rx";
import { AiOutlineEye } from "react-icons/ai";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const ForgotPassword=()=>{
    useEffect(()=>{
        const password=document.querySelector('#password')
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
        const showpassword=document.querySelector('#showpassword')
        document.querySelector('.a').addEventListener('click',()=>{
      
            if(showpassword.getAttribute("type")==="password"){
              
                showpassword.setAttribute("type","text")
                document.querySelector('.a').style.display="none"
                document.querySelector('.b').style.display="block"
            }
        })
        document.querySelector('.b').addEventListener('click',()=>{
    
            if(showpassword.getAttribute("type")==="text"){
                showpassword.setAttribute("type","password")
                document.querySelector('.a').style.display="block"
                document.querySelector('.b').style.display="none"
            }
        })
    })
    return(
        <>
            <div className="wrap-papper ">
                <p className="pt-4">Quên mật khẩu?</p> 
                    <div className="content-papper col-9  ">
                        <div className=' col-6'>
                            <h3 className='pb-4'>Vui lòng nhập tài khoản bạn muốn lấy lại mật khẩu.</h3>
                            <label className='pb-3'>Số điện thoại </label>
                            <div className='col-7'>
                                <Form.Control
                                    placeholder="Vui lòng nhập số điện thoại  của bạn"
                                    className='custom-placeholder  '/>
                            </div>
                            <Button className='color-button bg-success mt-3'>Tiếp tục</Button>{' '}
                            <br/>
                            <label className='pb-3 mt-3'>Nhập mã code* </label>
                            <div className='col-7 '>
                                <Form.Control
                                    placeholder="6 chữ số"
                                    className='custom-placeholder '/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <p className='custom-text'>Nhập mật khẩu mới của bạn bên dưới.</p> 
                            <label className='pb-3'>Mật khẩu mới *</label>
                            <div className='col-7 '>
                            
                                <Form.Control
                                    placeholder="Tối thiểu 8 ký tự với số, chữ cái và ký tự." type='password' id='password'
                                    className='custom-placeholder  '/>
                                    <RxEyeClosed className='eye-close'></RxEyeClosed>
                                    <AiOutlineEye className='eye-open'></AiOutlineEye>
                            </div>
                            <label className='pb-3'>Nhập lại mật khẩu  *</label>
                            <div className='col-7 '>
                            
                                <Form.Control
                                    placeholder="Vui lòng nhập lại mật khẩu" type='password' id='showpassword'
                                    className='custom-placeholder  '/>
                                    <RxEyeClosed className='eye-close a'></RxEyeClosed>
                                    <AiOutlineEye className='eye-open b'></AiOutlineEye>
                            </div>
                            <Link to={'/login'}> 
                            <Button className='color-button  mt-3 custom-send'>
                                Gửi
                                </Button>{' '}
                                </Link>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default ForgotPassword