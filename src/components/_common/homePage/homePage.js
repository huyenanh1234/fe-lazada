import {IoIosArrowForward} from "react-icons/io";
import SimpleSlider from "../../../helpers/slickSlide";
const  Homepage=()=>{
    return(
        <>
            <div className="home-page">
                <div className="menu-dropdown">
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Thiết bị điện tử 
                                <i><IoIosArrowForward/></i>
                                </a>
                                <div className="menu-item">
                                    <ul>
                                        <li><a href="/">Điện thoại di động</a></li>
                                        <li><a href="/">Máy tính bảng</a></li>
                                        <li><a href="/">Laptop</a></li>
                                        <li><a href="/">Máy tính để bàn</a></li>
                                        <li><a href="/">Âm thanh</a></li>
                                        <li><a href="/">Camera giám sát</a></li>
                                        <li><a href="/">Máy ảnh kỹ thuật số</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="/">Phụ kiện điện tủ
                                <i><IoIosArrowForward/></i>
                                </a>
                                <div className="menu-item">
                                    <ul>
                                        <li><a href="/">Phụ kiện di động</a></li>
                                        <li><a href="/">Thiết bị thông minh</a></li>
                                        <li><a href="/">Thiết bị số</a></li>
                                        <li><a href="/">Phụ kiện máy ảnh</a></li>
                                        <li><a href="/">Phụ kiện máy bay</a></li>
                                        <li><a href="/">Linh kiện máy tính</a></li>
                                        <li><a href="/">Phụ kiện ống kính</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="/">Ti vi & thiết bị gia dụng</a></li>
                            <li><a href="/">Sức khỏe và làm đẹp</a></li>
                            <li><a href="/">Hàng mẹ, bé và đồ chơi</a></li>
                            <li><a href="/">Siêu thị tạp hóa</a></li>
                            <li><a href="/">hàng gia dụng và đời sống</a></li>
                            <li><a href="/">Thời trang và phụ kiện nữ</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="menu-images">
                    <SimpleSlider/>
                </div>
            </div>
        </>
    )
}

export default Homepage;