import { AiOutlineDoubleRight } from 'react-icons/ai';
const Register=()=>{
    return(
        <>
            <form className="loginContainer" style={{height: "600px",}}>
                <div className="loginTitle" >
                    <div className="welcome">
                        <span>Create your Lazada Account</span>
                    </div>
                    <div className="register">
                        Already member? 
                        <a href="/">Login</a> here.
                    </div>
                    
                </div>
                <div className="login">
                    <div className="loginCol1">
                        <div className="name">
                        <label>Phone Number</label>
                        <input type="text" placeholder="Please enter your phone number" data-meta="Field" value="" inputmode="numeric" pattern="[0-9]*"/>
                        <br></br><span></span>
                        </div>
                        <div className="smsBox">
                            <div className="dropbox">
                                <AiOutlineDoubleRight/>
                            </div>
                            <div className="smsCode">
                                <a href="/">Slide to get SMS code</a>
                            </div>
                        </div>
                        <div className="name password">
                        <label>Password</label>
                        <input type="text" placeholder="Minimum 8 characters with number, letter and characters." data-meta="Field" value="" />
                        <br></br><span></span>
                        <div >
                            <i className="icon-eye-open"></i>
                        </div>
                        </div>
                        <div className="loginForgot">
                        <a href="/">Forgot Password?</a>
                        </div>
                        <div className="getInfor">
                            <div className="getBirthday">
                                <div className="getBirthday1" >Birthday
                                </div>
                                <div className="getBirthday2">
                                    <div className="getMonth">
                                        <select className="month">
                                            <option value="month">Month</option>
                                            <option value="january">January</option>
                                            <option value="february">February</option>
                                            <option value="march">March</option>
                                            <option value="april">April</option>
                                            <option value="may">May</option>
                                            <option value="june">June</option>
                                            <option value="july">July</option>
                                            <option value="august">August</option>
                                            <option value="september">September</option>
                                            <option value="october">October</option>
                                            <option value="november">November</option>
                                            <option value="december">December</option>
                                        </select>
                                        <i className="fa-thin fa-circle-sort"></i>
                                    </div>
                                    <div className="getDate">
                                        <select className="date">
                                            <option value="days">Days</option>
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                            <option value="4">04</option>
                                            <option value="5">05</option>
                                            <option value="6">06</option>
                                            <option value="7">07</option>
                                            <option value="8">08</option>
                                            <option value="9">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="28">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>
                                    </div>
                                    <div className="getYear">
                                        <select className="year">
                                            <option value="year">Year</option>
                                            <option value="1996">1996</option>
                                            <option value="1997">1997</option>
                                            <option value="1998">1998</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="getGender">
                                <div className="getGender1">Gender
                                </div>
                                <div className="getGender2">
                                    <select className="gender">
                                        <option value="male">Male</option>
                                        <option value="female">FeMale</option>
                                    </select>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className="loginCol2">
                        <div className="name">
                        <label>Full name</label>
                        <input type="text" placeholder="Fist last" data-meta="Field" value="" inputmode="numeric" pattern="[0-9]*"/>
                        <br></br><span></span>
                        </div>
                        <div className="checkSms">
                            <input type="checkbox" name="sms"/>
                            <label className="labelSms">I'd like to receive exclusive offers and promotions via SMS </label>
                        </div>
                        <div className="login-btn">
                        <button type="submit">SIGNUP</button>
                        </div>
                        <div className="loginPolicy">
                            <span >By proceeding to sign up, I acknowledge that I have read and consented to Lazada’s 
                                <a href="/" >Terms of Use</a> and <a href="/">Privacy Policy</a>
                                , which sets out how Lazada collects, uses and discloses my personal data,
                                and the rights that I have under applicable law.
                            </span>
                        </div>
                        <div className="loginThird">
                        <div className="loginThird1">
                            <div className="loginThird11">
                            <span>Or, Signup with</span>
                            </div>
                            <div className="loginThird12">
                                <button className="email">Sign up with Email</button>
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
export default Register;