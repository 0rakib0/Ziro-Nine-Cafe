import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Footer = () => {



    return (
        <div className="bg-primaryColor text-white mt-24 py-6">
            <h1 className="text-4xl text-center font-bold pt-8 pb-6">Zero <span className="text-secondarycolor font-pacifico">Nine</span> Cafe</h1>
            <p className="text-center w-3/4 md:w-2/5 mx-auto pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus culpa assumenda placeat, ea repudiandae beatae fugit deleniti ex rerum!</p>
            <div className="flex gap-2 justify-center mb-6">
                <button className="border p-3 rounded-full text-white text-3xl hover:bg-white hover:text-[#316FF6] duration-300"><FaFacebookF></FaFacebookF></button>
                <button className="border p-3 rounded-full text-white text-3xl hover:bg-white hover:text-[#1DA1F2] duration-300"><FaTwitter></FaTwitter></button>
                <button className="border p-3 rounded-full text-white text-3xl hover:bg-white hover:text-primaryColor duration-300"><FaInstagram></FaInstagram></button>
                <button className="border p-3 rounded-full text-white text-3xl hover:bg-white hover:text-red-600 duration-300"><FaYoutube></FaYoutube></button>
            </div>
            <div className="border-t text-center pt-2">
                <p>Copyright (c) 2024  &copy; | Zero Nine Cafe</p>
            </div>
        </div>
    )
}


export default Footer