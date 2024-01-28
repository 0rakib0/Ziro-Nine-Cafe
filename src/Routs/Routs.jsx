import {
    createBrowserRouter
} from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pagase/HomePages/Home/Home";
import AboutUs from "../Pagase/AboutUs/AboutUs";
import Services from "../Pagase/Service/Service";
import AllMenu from "../Pagase/HomePages/AllMenu/AllMenu";
import ContactUs from "../Pagase/ContactPage/ContactUs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/about-us/',
                element: <AboutUs></AboutUs>
            },
            {
                path:'/service/',
                element: <Services></Services>
            },
            {
                path:'/menu/',
                element: <AllMenu></AllMenu>
            },
            {
                path:'/contact/',
                element: <ContactUs></ContactUs>
            }
        ]
    },
]);

export default router