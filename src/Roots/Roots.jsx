import { Outlet } from "react-router-dom"
import NavBar from "../SharePage/NavBar/NavBar"
import Footer from "../SharePage/Footer/Footer"

const Roots = () =>{
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Roots