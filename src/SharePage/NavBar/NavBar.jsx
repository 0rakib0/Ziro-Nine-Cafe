import { NavLink } from "react-router-dom"

const NavBar = () => {

    const NavItems = <>
        <li className="text-secondarycolor"><NavLink to='/'>HOME</NavLink></li>
        <li className="hover:text-secondarycolor duration-200"><NavLink to='/about-us/'>ABOUT</NavLink></li>
        <li className="hover:text-secondarycolor duration-200"><NavLink to='/service/'>SERVICE</NavLink></li>
        <li className="hover:text-secondarycolor duration-200"><NavLink to='/menu/'>MENU</NavLink></li>
        <li className="hover:text-secondarycolor duration-200"><NavLink to='/contact/'>CONTACT</NavLink></li>
    </>

    return (
        <div className="bg-primaryColor md:bg-transparent">
            <div className="md:flex justify-between w-11/12 md:absolute top-0 left-16 py-4 z-20 items-center">
                <div>
                    <h4 className="text-4xl text-center font-semibold text-white">LOGO</h4>
                </div>
                <div className="md:flex gap-8 items-center md:ml-0 ml-6">
                    <div className="flex list-none gap-4 font-semibold text-white py-4">
                        {NavItems}
                    </div>
                    <div>
                        <button className="bg-secondarycolor text-white py-2 px-6">BOOK A TABLE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar