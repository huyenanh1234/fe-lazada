import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout";
import ErrorPage from "../pages/error-page";
import Index from "../pages/index";
import Detail from "../pages/detailProduct/detail";
import NormalLayout from "../pages/normalLayout";
import Login from "../pages/account/login";
import Register from "../pages/account/register";
import Brand from "../pages/brand/brand";
import Products from "../pages/brand/products";
import Profile from "../pages/brand/profile";
import Store from "../pages/brand/store";
const router = createBrowserRouter([
    
    {
        path:"/",
        element: <NormalLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "detailProduct",
                element: <Detail/>,
            },
            {
                path:"login",
                element: <Login/>
            },
            {
                path:"register",
                element: <Register/>,
            },
            {
                path:"store",
                element:<Store/>,
                children:[
                    {
                        index:true,
                        element: <Brand/>,
                    },
                    {
                        path:"products",
                        element: <Products/>,
                    }
                ]
            }
            // {
            //     path:"store",
            //     element: <Store/>,
            //     children:[
            //         {
            //             index:true,
            //             element: <Brand/>,
            //         },
            //         {
            //             path:"/products",
            //             element: <Products/>,
            //         },
            //         {
            //             path:"/profile",
            //             element: <Profile/>,
            //         }
            //     ]
            // }
        ]
    },
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <Index/>
            },
            
        ]
    },
])

export default router;