import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
const findProduct=()=>{
    return(
        <>
            <div className="container3 bg-white">
                <div className="breadcrumb">
                    <ul style={{marginTop: "-7px"}}>
                        <li className="breadcrumbItem">
                            <span className="title">
                                <a href="/">Home</a>
                                <img src="images/productDetails/rightArrow.png" alt='#'/>
                            </span>
                        </li>
                        <li className="breadcrumbItem" id="mainNameProduct">
                            <span className="nameProduct">
                                <a id="mainTitleProduct" href="/">Search result</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="page bg-white d-flex justify-content-center">
                <div className="main-content">
                    <div className="card-channels">
                        <div className="card border-0">
                            <div className="header-item d-block ps-2" style={{height: "100px"}}>
                                <div className="find-title">Điện thoại thông minh</div>
                                <div className="find-function row pt-3">
                                    <div className="find-content col-9">
                                        <span>6 sản phẩm đã được tìm thấy cho "</span>
                                        <span>Điện thoại thông minh</span>
                                        <span>"</span>
                                    </div>
                                    <div className="sort-function col-3 d-flex justify-content-start">
                                        <div className="sort-title mt-2">Sắp xếp theo:</div>
                                        <div className="dropdown ms-2">
                                            <button className="btn bg-white text-secondary dropdown-toggle border border-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Thích hợp nhất
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-header" href="/">Thích hợp nhất</a>
                                                <a className="dropdown-item" href="/">giá từ thấp tới cao</a>
                                                <a className="dropdown-item" href="/">giá từ cao tới thấp</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item itemAdd">
                                <a className="smallItem" href="Product.html?productid=1" data-productid="1">
                                    <div className="small-item">
                                        <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="sản pham 1"/>
                                        <div className="pro-con">
                                            <div className="name-product">
                                                <span>iPhone 9</span>
                                            </div>
                                            <div className="price-product">
                                                549Đ   
                                            </div>
                                            <div className="old-product">
                                                <div className="discount1">
                                                    <del>330000Đ  </del>
                                                </div>
                                                <div className="discount1">
                                                    12.96%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="smallItem" href="Product.html?productid=2" data-productid="2">
                                    <div className="small-item">
                                        <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="sản pham 1"/>
                                        <div className="pro-con">
                                            <div className="name-product">
                                                <span>iPhone X</span>
                                            </div>
                                            <div className="price-product">
                                                899Đ   
                                            </div>
                                            <div className="old-product">
                                                <div className="discount1">
                                                    <del>330000Đ  </del>
                                                </div>
                                                <div className="discount1">
                                                    17.94%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="smallItem" href="Product.html?productid=3" data-productid="3">
                                    <div className="small-item">
                                        <img src="https://i.dummyjson.com/data/products/3/thumbnail.jpg" alt="sản pham 1"/>
                                        <div className="pro-con">
                                            <div className="name-product">
                                                <span>Samsung Universe 9</span>
                                            </div>
                                            <div className="price-product">
                                                1249Đ   
                                            </div>
                                            <div className="old-product">
                                                <div className="discount1">
                                                    <del>330000Đ  </del>
                                                </div>
                                                <div className="discount1">
                                                    15.46%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="smallItem" href="Product.html?productid=4" data-productid="4">
                                    <div className="small-item">
                                        <img src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" alt="sản pham 1"/>
                                        <div className="pro-con">
                                            <div className="name-product">
                                                <span>OPPOF19</span>
                                            </div>
                                            <div className="price-product">
                                                280Đ   
                                            </div>
                                            <div className="old-product">
                                                <div className="discount1">
                                                    <del>330000Đ  </del>
                                                </div>
                                                <div className="discount1">
                                                    17.91%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="smallItem" href="Product.html?productid=5" data-productid="5">
                                    <div className="small-item">
                                        <img src="https://i.dummyjson.com/data/products/5/thumbnail.jpg" alt="sản pham 1"/>
                                        <div className="pro-con">
                                            <div className="name-product">
                                                <span>Huawei P30</span>
                                            </div>
                                            <div className="price-product">
                                                499Đ   
                                            </div>
                                            <div className="old-product">
                                                <div className="discount1">
                                                    <del>330000Đ  </del>
                                                </div>
                                                <div className="discount1">
                                                    10.58%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="smallItem" href="Product.html?productid=6" data-productid="6">
                                    <div className="small-item">
                                        <img src="https://i.dummyjson.com/data/products/6/thumbnail.png" alt="sản pham 1"/>
                                        <div className="pro-con">
                                            <div className="name-product">
                                                <span>MacBook Pro</span>
                                            </div>
                                            <div className="price-product">
                                                1749Đ   
                                            </div>
                                            <div className="old-product">
                                                <div className="discount1">
                                                    <del>330000Đ  </del>
                                                </div>
                                                <div className="discount1">
                                                    11.02%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container3 bg-white'>
                <div className="additionInfoProduct bg-white">
                    <div className="blockDescription">
                        <div className="pagination">
                            <div className="pagination-block">
                                <button className="btn-left">
                                    <RxCaretLeft style={{fontSize:'30px',
                                        marginLeft:'-3px', 
                                        color :'#fff',    
                                    }}
                                    />
                                </button>
                                <div className="list-pagination">
                                    <button type="button" className="btn-page chose">1</button>
                                    <button type="button" className="btn-page">2</button>
                                    <button type="button" className="btn-page">3</button>
                                    <button type="button" className="btn-page">4</button>
                                    <button type="button" className="btn-page">5</button>
                                </div>
                                <button className="btn-right">
                                    <RxCaretRight style={{fontSize:'30px',
                                        marginLeft:'-3px', 
                                        color :'#fff',
                                    }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default findProduct;