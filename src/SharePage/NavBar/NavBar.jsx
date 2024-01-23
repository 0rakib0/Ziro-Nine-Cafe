import { NavLink } from "react-router-dom"

const NavBar = () => {

    const NavItems = <>
        <li className="text-secondarycolor"><NavLink>HOME</NavLink></li>
        <li className="hover:text-secondarycolor duration-200"><NavLink>ABOUT</NavLink></li>
        <li className="hover:text-secondarycolor duration-200"><NavLink>SERVICE</NavLink></li>
        <li className="hover:text-secondarycolor duration-200"><NavLink>MENU</NavLink></li>
        <li className="hover:text-secondarycolor duration-200"><NavLink>CONTACT</NavLink></li>
    </>

    return (
        <div className="bg-primaryColor md:bg-transparent">
            <div className="md:flex justify-between w-11/12 md:absolute top-0 left-16 py-4 z-20 items-center">
                <div>
                    <h4 className="text-4xl font-semibold text-white">LOGO</h4>
                </div>
                <div className="md:flex gap-8 items-center">
                    <div className="flex list-none gap-4 font-semibold text-white">
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