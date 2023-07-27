import { Link } from "react-router-dom";
import Countdown from "../../helpers/countdown";
const page=()=>{
    return(
        <>
            <div className="main-content">
                <nav>
                    <ul>
                        <li>
                            <a>
                                <div className="small-item">
                                    <img src="images/header/nav/small-icon1.png"/>
                                    <div className="small-content">LAZMALL</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="small-item">
                                    <img src="images/header/nav/small-icon2.png"/>
                                    <div className="small-content">Mã giảm giá</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="small-item">
                                    <img src="images/header/nav/small-icon3.png"/>
                                    <div className="small-content">Nạp thẻ và eVoucher</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="small-item">
                                    <img src="images/header/nav/small-icon4.png"/>
                                    <div className="small-content">LazGlobal</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="lift-nav">

                </div>
                <div className="card-channels">
                    <div className="title">
                        Deal chớp nhoáng
                    </div>
                    <div className="card">
                        <div className="header-item">
                            <div className="flash-content"> Đang bán</div>
                                <Countdown/>
                            <div className="flash-button"><button type="button">Mua sắm toàn bộ sản phẩm</button></div>
                        </div>
                        <div className="item itemAdd">
                            <Link className="smallItem" to={'detailProduct'}>
                                <div className="small-item">
                                    <img src="./images/product/img1.jpg" alt="sản pham 1"/>
                                    <div className="pro-con">
                                        <div className="name-product">
                                            <span>Dep le</span>
                                        </div>
                                        <div className="price-product">
                                            $40Đ   
                                        </div>
                                        <div className="old-product">
                                            <div className="discount1">
                                                <del>330000Đ  </del>
                                            </div>
                                            <div className="discount1">
                                                / 30%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            {/* <a className="smallItem" href="Product">
                                <div className="small-item">
                                    <img src="./images/product/img1.jpg" alt="sản pham 1"/>
                                    <div className="pro-con">
                                        <div className="name-product">
                                            <span>Dep le</span>
                                        </div>
                                        <div className="price-product">
                                            $40Đ   
                                        </div>
                                        <div className="old-product">
                                            <div className="discount1">
                                                <del>330000Đ  </del>
                                            </div>
                                            <div className="discount1">
                                                / 30%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="smallItem" href="Product">
                                <div className="small-item">
                                    <img src="./images/product/img1.jpg" alt="sản pham 1"/>
                                    <div className="pro-con">
                                        <div className="name-product">
                                            <span>Dep le</span>
                                        </div>
                                        <div className="price-product">
                                            $40Đ   
                                        </div>
                                        <div className="old-product">
                                            <div className="discount1">
                                                <del>330000Đ  </del>
                                            </div>
                                            <div className="discount1">
                                                / 30%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="smallItem" href="Product.html?productid=${p.id}">
                                <div className="small-item">
                                    <img src="./images/product/img1.jpg" alt="sản pham 1"/>
                                    <div className="pro-con">
                                        <div className="name-product">
                                            <span>Dep le</span>
                                        </div>
                                        <div className="price-product">
                                            $40Đ   
                                        </div>
                                        <div className="old-product">
                                            <div className="discount1">
                                                <del>330000Đ  </del>
                                            </div>
                                            <div className="discount1">
                                                / 30%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="smallItem" href="Product">
                                <div className="small-item">
                                    <img src="./images/product/img1.jpg" alt="sản pham 1"/>
                                    <div className="pro-con">
                                        <div className="name-product">
                                            <span>Dep le</span>
                                        </div>
                                        <div className="price-product">
                                            $40Đ   
                                        </div>
                                        <div className="old-product">
                                            <div className="discount1">
                                                <del>330000Đ  </del>
                                            </div>
                                            <div className="discount1">
                                                / 30%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="smallItem" href="Product">
                                <div className="small-item">
                                    <img src="./images/product/img1.jpg" alt="sản pham 1"/>
                                    <div className="pro-con">
                                        <div className="name-product">
                                            <span>Dep le</span>
                                        </div>
                                        <div className="price-product">
                                            $40Đ   
                                        </div>
                                        <div className="old-product">
                                            <div className="discount1">
                                                <del>330000Đ  </del>
                                            </div>
                                            <div className="discount1">
                                                / 30%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a> */}
                        </div>

                    </div>
                </div>
                <div className="card-channels2">
                    <div className="title2">
                        <div><span>LazMall</span>
                        </div>
                        <div className="watch-more">
                            <a href="#"> Xem Thêm <i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <a href="#">
                            <div className="small-item">
                                <div className="brand-banner">
                                    <img src="images/brand/brand1.jpg" alt="thương hiệu 1"/>
                                </div>
                                <div className="img-center">
                                    <img src="images/brand/logo1.png" alt="thương hiệu 1"/>
                                </div>
                                <div className="slogan">Vinamilk-Giấc mơ sữa việt</div>
                                <div className="brand">Vinamilk</div>
                        </div>
                        </a>
                        <a href="#">
                            <div className="small-item">
                                <div className="brand-banner">
                                    <img src="images/brand/brand2.jpg" alt="thương hiệu 1"/>
                                </div>
                                <div className="img-center">
                                    <img src="images/brand/logo2.jpg" alt="thương hiệu 1"/>
                                </div>
                                <div className="slogan">Vinamilk-Giấc mơ sữa việt</div>
                                <div className="brand">Vinamilk</div>
                            </div>
                        </a>
                        <a href="#">
                            <div className="small-item">
                                <div className="brand-banner">
                                    <img src="images/brand/brand3.jpg" alt="thương hiệu 1"/>
                                </div>
                                <div className="img-center">
                                    <img src="images/brand/logo3.jpg" alt="thương hiệu 1"/>
                                </div>
                                <div className="slogan">Vinamilk-Giấc mơ sữa việt</div>
                                <div className="brand">Vinamilk</div>
                            </div>
                        </a>
                        <a href="#">
                            <div className="small-item">
                                <div className="brand-banner">
                                    <img src="images/brand/brand4.png" alt="thương hiệu 1"/>
                                </div>
                                <div className="img-center">
                                    <img src="images/brand/logo4.png" alt="thương hiệu 1"/>
                                </div>
                                <div className="slogan">Vinamilk-Giấc mơ sữa việt</div>
                                <div className="brand">Vinamilk</div>
                            </div>
                        </a>
                        <a href="#">
                            <div className="small-item">
                                <div className="brand-banner">
                                    <img src="images/brand/brand5.jpg" alt="thương hiệu 1"/>
                                </div>
                                <div className="img-center">
                                    <img src="images/brand/logo5.jpg" alt="thương hiệu 1"/>
                                </div>
                                <div className="slogan">Vinamilk-Giấc mơ sữa việt</div>
                                <div className="brand">Vinamilk</div>
                            </div>
                        </a>
                        <a href="#">
                            <div className="small-item">
                                <div className="brand-banner">
                                    <img src="images/brand/brand6.jpg" alt="thương hiệu 1"/>
                                </div>
                                <div className="img-center">
                                    <img src="images/brand/logo5.jpg" alt="thương hiệu 1"/>
                                </div>
                                <div className="slogan">Vinamilk-Giấc mơ sữa việt</div>
                                <div className="brand">Vinamilk</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="card-channels3">
                    <div className="title3">
                        Categories
                    </div>
                    <div className="categories">
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                    </div>
                    <div className="categories">
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                        <a className="cateItem">
                            <div className="catePreview">
                                <img src="images/categories/cate1.jpg" alt="dép nữ" className="imgPreview"/>
                            </div>
                            <div className="cateName">
                                <span>Women's Flip Flop Slides</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="card-channels mt-3">
                    <div className="title">
                        Just for you
                    </div>
                    <div className="card" style=
                        {
                            {
                                backgroundColor: "#f5f5f5", 
                                border: "none",
                            }
                        }
                        >
                        <div 
                            className="item itemAdd" 
                            style={
                                {
                                        backgroundColor: "#f5f5f5",
                                }
                            }
                        >
                        
                        </div>
                        <div className="item mt-3 itemAdd" 
                            style={
                                {
                                        backgroundColor: "#f5f5f5",
                                }
                            }
                        >
                            
                        </div>
                    </div>
                </div>
                <div className="load-more">
                    <a href="#" className="">Load more</a>
                </div>
            </div>
        </>
    )
}
export default page;