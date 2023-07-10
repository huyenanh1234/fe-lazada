import { BsEyeSlash } from "react-icons/bs";
const Login=()=>{
    
    const hiddenPass=async()=>{
        //console.log(e);
        console.log(1111);
    }
    
    return(
        <>
            <form className="loginContainer">
                <div className="loginTitle">
                <div className="welcome">
                    <span>Welcome to Lazada! Please login.</span>
                </div>
                <div className="register">
                    "New menber?"<a href="#">Register</a> "here."
                </div>
                </div>
                <div className="login pb-3">
                <div className="loginCol1">
                    <div className="name">
                    <label>Phone Number or Email</label>
                    <input type="text" placeholder="Please enter your Phone Number or Email" data-meta="Field" value=""/>
                    <br></br><span></span>
                    </div>
                    <div className="name password">
                    <label>Password</label>
                    <div className="getPass">
                        <input className="getPass1" id="getPass1" type="password" placeholder="Please enter your password" data-meta="Field" value=""/>
                        <div className="getPass2" id="getPass2" ><BsEyeSlash onclick={hiddenPass()}/></div>
                    </div>
                    <br></br><span></span>
                    </div>
                    <div className="loginForgot">
                    <a href="#">Forgot Password?</a>
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