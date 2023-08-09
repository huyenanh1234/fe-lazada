import {AiOutlinePicture} from "react-icons/ai";
import { Link } from "react-router-dom";
const review=()=>{
    return(
        <>
            <div class="container3 bg-light">
                <div class="breadcrumb breadcrumb-extra bg-light">
                    <div class="delivered-title">
                        <span>Viết đánh giá</span>
                    </div>
                </div>
            </div>
            <div class="page bg-light">
                <div class="main-content">
                    <div class="card-channels bg-light">
                        <div class="card border-0 bg-light">
                            <div class="review-content">
                                <div class="review-header">
                                    <div class="review-date">
                                        Đã được giao ngày 12 tháng 7 năm 2023
                                    </div>
                                    <div class="review-status">
                                        Xếp hạng và đánh giá sản phẩm đã mua:
                                    </div>
                                </div>
                                <div class="review-body">
                                    <div class="order-item">
                                        <div class="item-pic">
                                            <Link href="#" class="">
                                                <img src="images/order/img1.png" alt="logo"/>
                                            </Link>
                                        </div>
                                        <div class="item-main">
                                            <div class="item-title">
                                                <Link href="#">[Siêu thị WinMart] - Thùng 36 hộp sữa đậu nành Fami canxi ít đường 200ml</Link>
                                            </div>
                                            <div class="item-area">Miền:Bắc</div>
                                            <p class="item-description">Không bảo hành</p>
                                        </div>
                                        <div class="item-status">
                                            <div class="item-price">₫ 182,000</div>
                                        </div>
                                        <div class="item-quantity">
                                            <span>
                                                <span class="item-qty">Qty</span>
                                                <span class="item-text">:1</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="rate-review-block">
                                        <div class="star-rate row">
                                            <div class="rate-star col-3">
                                                <img src="images/productDetails/star.png" alt="" class="star"/>
                                                <img src="images/productDetails/star.png" alt="" class="star"/>
                                                <img src="images/productDetails/star.png" alt="" class="star"/>
                                                <img src="images/productDetails/star.png" alt="" class="star"/>
                                                <img src="images/productDetails/star.png" alt="" class="star"/>
                                            </div>
                                            <div class="rate-text col-9">
                                                Xếp hạng
                                            </div>
                                        </div>
                                        <div class="input-title">Viết đánh giá</div>
                                        <div class="input-block">
                                            <span class="input-area">
                                                <textarea placeholder="Bạn nghĩ gì về sản phẩm này?" name="" id="" cols="30" rows="10"></textarea>
                                            </span>
                                            <div class="img-upload">
                                                <div class="img-upload-block">
                                                    <div class="img-viewer">
                                                        <div class="img-viewer-list">
                                                            <div class="img-uploader">
                                                                <span class="upload-icon"><AiOutlinePicture/></span>
                                                                <div class="img-upload-text">Tải ảnh lên

                                                                </div>
                                                                <input type="file" class="image-upload-file-input" accept=".png, .jpeg, .jpg" name="imageToUpload" multiple="" maxlength="1000"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="submit-block">
                                            <button class="btn-submit" type="submit">SUBMIT</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default review;