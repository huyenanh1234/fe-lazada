const BreadcrumbProduct=()=>{
    return(
        <>
            <div className="breadcrumb">
                <ul>
                    <li className="breadcrumbItem">
                        <span className="title">
                            <a href="/">Dép và quần áo nữ</a>
                            <img src="images/productDetails/rightArrow.png" alt='#'/>
                        </span>
                    </li>
                    <li className="breadcrumbItem">
                        <span className="title">
                            <a href="/">Giày nữ</a>
                            <img src="images/productDetails/rightArrow.png" alt='#'/>
                        </span>
                    </li>
                    <li className="breadcrumbItem">
                        <span className="title">
                            <a href="/">Dép và tông</a>
                            <img src="images/productDetails/rightArrow.png" alt='#'/>
                        </span>
                    </li>
                    <li className="breadcrumbItem">
                        <span className="title">
                            <a href="/">Dép lê</a>
                            <img src="images/productDetails/rightArrow.png" alt='#'/>
                        </span>
                    </li>
                    <li className="breadcrumbItem" id="mainNameProduct">
                        <span className="nameProduct">
                            <a id="mainTitleProduct" href="/">Dép Lê Hai Dây Cổ Điển Phong Cách Hồng Kông Harajuku Harajuku Ins Phong Cách </a>
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default BreadcrumbProduct;