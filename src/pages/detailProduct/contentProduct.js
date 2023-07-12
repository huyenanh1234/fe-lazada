import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { SlLocationPin } from 'react-icons/sl';
import { AiOutlineInfoCircle, AiOutlineShareAlt, AiOutlineHeart } from 'react-icons/ai';
import { CiDeliveryTruck } from 'react-icons/ci';
import { ImEarth } from 'react-icons/im';
import { BsCashCoin } from 'react-icons/bs';
import { BiBookBookmark } from 'react-icons/bi';
import { FiRotateCcw } from 'react-icons/fi';
import { BsShieldSlash } from 'react-icons/bs';  
import { CiMobile2 } from 'react-icons/ci';
import { HiChatAlt2 } from 'react-icons/hi';

const ContentProduct=()=>{
    return(
        <>
            <div className="contentProduct">
                <div className="blockImg">
                    <div className="galleryPreview">
                        <div id="galleryPreviewContent" className="galleryPreviewContent">
                            <img id="previewContentImg" src="images/productDetails/img1.jpg" alt=""/>
                            <div id="previewHoverBox" className="previewHoverBox"></div>
                        </div>
                        <div id="previewZoomBox" className="previewZoomBox">
                            <div id="zoomBox" className="zoomBox" ></div>
                        </div>
                    </div>
                    <div className="slickContent">
                        <div className="nextSlickInner">
                            <div id="nextSlickPrev"  className="nextSlickPrev">
                                <RxCaretLeft style={{fontSize:'30px',
                                    marginLeft:'-3px',    
                                }}
                                />
                            </div>
                            <div id="nextSlickList" className="nextSlickList">
                                <div id="nextListTrack" className="nextListTrack" style={{
                                        opacity: "1", 
                                        width: "928px", 
                                        transform: "translate3d(0px, 0px, 0px)",
                                    }}
                                >
                                    <div className="nextSlickSlide itemGalleryThumbnail">
                                        <div id="imgDetails" className="itemGallery">
                                            <img src="images/productDetails/img1.jpg"/>
                                        </div>
                                        <div id="imgDetails" className="itemGallery">
                                            <img src="images/productDetails/img2.jpg"/>
                                        </div>
                                        <div id="imgDetails" className="itemGallery">
                                            <img src="images/productDetails/img3.jpg"/>
                                        </div>
                                        <div id="imgDetails" className="itemGallery">
                                            <img src="images/productDetails/img4.jpg"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="nextSlickNext" className="nextSlickNext">
                                <RxCaretRight style={{fontSize:'30px',
                                        marginRight:'-3px',    
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blockContent">
                    <div className="proHeader">
                        <div className="proArea">
                            <img src="images/productDetails/iconLazGlobal.png"/>
                        </div>
                        <div className="proTitle">
                            <h1>Dép Lê Hai Dây Cổ Điển Phong Cách Hồng Kông Harajuku Harajuku Ins Phong Cách Hàn Quốc Sọc Mảnh Dép Đi Biển Đế Dày Học Sinh Mùa Hè Nữ Xăng Đan Đi Bên Ngoài</h1>
                        </div>
                    </div>
                    <div className="proRating">
                        <div className="rating">
                            <div className="rateStar">
                                <img src="images/productDetails/star.png"/>
                                <img src="images/productDetails/star.png"/>
                                <img src="images/productDetails/star.png"/>
                                <img src="images/productDetails/star.png"/>
                                <img src="images/productDetails/star.png"/>
                            </div>
                            <div className="rateQuantity">
                                <a href="#">21 Ratings</a>
                            </div> 
                        </div>
                        <div className="share">
                            <div className="shareNode">
                                <i><AiOutlineShareAlt/></i>
                            </div>
                            <div className="shareNode">
                                <i><AiOutlineHeart/></i>
                            </div>
                        </div>
                    </div>
                    <div className="proBrand">
                        <span>Brand:</span>
                        <a href="#">No brand</a>
                        <div className="divider"></div>
                        <a href="#">More Women Shoes from No Brand</a>
                    </div>
                    <div className="proPrice">
                        <span>₫389,000</span>
                    </div>
                    <div className="proPromotion">
                        <div className="promotionSection">
                            <h6 className="sectionTitle">Promotions</h6>
                            <div className="sectionContent">
                                <div className="tagList">
                                    <div className="tagItem">
                                        <div className="tagName">Min.Spend ₫ 49,000 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="proSelect">
                        <div className="selector">
                            <div className="select">
                                <h6 className="selectTitle">Color_classNameification</h6>
                                <div className="selectContent">
                                    <div className="contentTitle">
                                        <span className="colorName">Màu hồng</span>
                                    </div>
                                    <div className="contentProduct">
                                        <span className="colorImg">
                                            <div className="colorLoad">
                                                <img src="images/productDetails/img1.jpg"/>
                                            </div>
                                        </span>
                                        <span className="colorImg">
                                            <div className="colorLoad">
                                                <img src="images/productDetails/img5.jpg"/>
                                            </div>
                                        </span>
                                        <span className="colorImg">
                                            <div className="colorLoad">
                                                <img src="images/productDetails/img6.jpg"/>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="">

                            </div>
                        </div>
                    </div>
                    <div className="proSelect">
                        <div className="selector">
                            <div className="select">
                                <h6 className="selectTitle">Shoe_size</h6>
                                <div className="selectContent">
                                    <div className="contentTitle">
                                        <span className="colorName">36</span>
                                    </div>
                                    <div className="contentProduct">
                                        <span className="size">
                                            <span className="sizeName">34</span>
                                        </span>
                                        <span className="size">
                                            <span className="sizeName">35</span>
                                        </span>
                                        <span className="size">
                                            <span className="sizeName">36</span>
                                        </span>
                                        <span className="size">
                                            <span className="sizeName">37</span>
                                        </span>
                                        <span className="size">
                                            <span className="sizeName">38</span>
                                        </span>
                                        <span className="size">
                                            <span className="sizeName">39</span>
                                        </span>
                                        <span className="size">
                                            <span className="sizeName">40</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="">

                            </div>
                        </div>
                    </div>
                    <div className="proQuantity">
                        <h6 className="quantityTitle">Quantity</h6>
                        <div className="quantityContent">
                            <div className="numberPicker">
                                <a href="#">
                                    <span>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </a>
                                <div className="quantityBlock">
                                    <span className="quantity">
                                        <input type="text" step="1" min="1" max="30" value="1" autocomplete="off" height="100%"/>
                                    </span>
                                </div>
                                <a href="#">
                                    <span>
                                        <i className="fa-solid fa-plus"></i>
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="buyAndAddCart">
                        <div className="buyCartBlock">
                            <button className="buyBlock">
                                <span className="buyText"><span className="buyDecor">Buy Now</span></span>
                            </button>
                            <button className="cartBlock">
                                <span className="cartText"><span className="cartDecor">Add to Cart</span></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="blockInfor">
                    <div className="blockDelivery">
                        <div className="deliveryOption">
                            <div className="delivery">
                                <div className="deliHeader">
                                    <div className="deliTitle">Delivery Options</div>
                                    <div className="deliTooltip">
                                       <AiOutlineInfoCircle/>
                                    </div>
                                </div>
                                <div className="deliTop">
                                    <div className="deliLocation">
                                        <div className="locationCurrent">
                                            <div className="locationBody">
                                                <div className="locationIcon"><SlLocationPin/></div>
                                                <div className="locationAddress">Hồ Chí Minh, Quận 1, Phường Phạm Ngũ Lão</div>
                                                <div className="locationLinkChange"><a href="#">CHANGE</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="deliLocation deliOption">
                                        <div>
                                            <div className="locationCurrent">
                                                <div className="locationBody">
                                                    <div className="locationIcon"><ImEarth/></div>
                                                    <div className="locationAddress">Ships from Overseas</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="deliContent">
                                    <div className="deliTop deliContentOption">
                                        <div className="deliLocation deliCont">
                                            <div className="locationCurrent">
                                                <div className="locationBody">
                                                    <div className="locationIcon"><CiDeliveryTruck/></div>
                                                    <div className="locationAddress">
                                                        <div className="standardTitle">Standard Delivery</div>
                                                        <div className="shippingTime">Get by 17-25 Apr</div>
                                                    </div>
                                                    <div className="shippingPrice"><a><b>₫16,300</b></a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="deliLocation deliCont">
                                            <div className="locationCurrent">
                                                <div className="locationBody">
                                                    <div className="locationIcon"><BsCashCoin/></div>
                                                    <div className="locationAddress">
                                                        <div className="standardTitle">Cash on Delivery Available (No mutual check)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="deliLocation deliCont">
                                            <div className="locationCurrent">
                                                <div className="locationBody">
                                                    <div className="locationIcon"><BiBookBookmark/></div>
                                                    <div className="locationAddress">
                                                        <div className="standardTitle" style={{marginTop: "5px",}}>Vietnam New Regulation</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blockDelivery blockSellerWarranty">
                        <div className="deliveryOption">
                            <div className="delivery">
                                <div className="deliHeader">
                                    <div className="deliTitle">Return & Warranty</div>
                                    <div className="deliTooltip">
                                        <AiOutlineInfoCircle/>
                                    </div>
                                </div>
                                <div className="deliTop">
                                    <div className="deliLocation">
                                        <div className="locationCurrent">
                                            <div className="locationBody">
                                                <div className="locationIcon"><FiRotateCcw/></div>
                                                <div className="locationAddress">7 days easy return</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="deliLocation deliOption">
                                        <div>
                                            <div className="locationCurrent">
                                                <div className="locationBody">
                                                    <div className="locationIcon"><BsShieldSlash/></div>
                                                    <div className="locationAddress">Warranty not available</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blockDelivery blockGuideApp">
                        <div className="guideApp">
                            <div className="guideAppQrcode">
                                <img src="images/productDetails/qrcode.png" alt="qrcode" className=""/>
                            </div>
                            <div className="wrapLaz">
                                <img src="images/productDetails/lazIcon.png" alt="icon Lazada"/>
                                <p>Download app to enjoy exclusive discounts!</p>
                            </div>
                        </div>
                        <p><CiMobile2/>Scan with mobile</p>
                    </div>
                    <div className="blockSellerInfo">
                        <div className="sellerInfo">
                            <div className="sellerName">
                                <div className="selName">
                                    <div className="nameTitle">Sold by</div>
                                    <div className="nameDetail"><a href="#">细细条</a></div>
                                </div>
                                <div className="selChatbox">
                                    <div className="chatboxContent">
                                        <span className="chatboxIcon"><HiChatAlt2/></span>
                                        <span className="chatboxName">Chat</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sellerRate">
                                <div className="sellerInfoContent">
                                    <div className="sellerTitle">Seller Ratings</div>
                                    <div className="sellerRating">94%</div>
                                </div>
                                <div className="sellerInfoContent">
                                    <div className="sellerTitle">Ship On Time</div>
                                    <div className="sellerRating">90%</div>
                                </div>
                                <div className="sellerInfoContent">
                                    <div className="sellerTitle">Chat Response</div>
                                    <div className="sellerRating">99%</div>
                                </div>
                            </div>
                            <div className="sellerLink">
                                <a href="#">GO TO STORE</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default ContentProduct;