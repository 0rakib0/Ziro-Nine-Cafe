import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import SectionTitle from "../../../SharePage/SectionTitle/SectionTitle"

const Shepf = () => {

    const Teams = [

    ]

    return (
        <div className="mt-24 w-11/12 mx-auto">
            <SectionTitle hero='Chefs' title='Our Master Chefs'></SectionTitle>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mt-6">
                <div className="bg-red-300 bg-opacity-25 pt-2 overflow-hidden rounded-lg">
                    <div className="flex justify-center w-3/4 h-[14em] rounded-full overflow-hidden mx-auto bg-green-500">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmXJ4OfdwFP6SdWBWfCFFsit3crwom9v7lz38emmOuwcO3-lL_1Ex9Uqc3UVsc19EQVQ&usqp=CAU" className="w-full" alt="Shaif Image" />
                    </div>
                    <div className="text-center">
                        <h4 className="text-2xl font-semibold pt-2">John Dev</h4>
                        <p className="text-gray-800">Cookie</p>
                    </div>
                    <div className="flex justify-center gap-4 mt-2">
                        <div className="bg-secondarycolor text-white px-2 pt-3 pb-6 text-2xl rounded-t-full"><FaFacebookF className="transform transition-transform hover:scale-125  duration-300"></FaFacebookF></div>
                        <div className="bg-secondarycolor text-white px-2 pt-3 pb-6 text-2xl rounded-t-full"><FaTwitter className="transform transition-transform hover:scale-125  duration-300"></FaTwitter></div>
                        <div className="bg-secondarycolor text-white px-2 pt-3 pb-6 text-2xl rounded-t-full"><FaInstagram className="transform transition-transform hover:scale-125  duration-300"></FaInstagram></div>
                    </div>
                </div>
                <div className="bg-red-300 bg-opacity-25 pt-2 overflow-hidden rounded-lg">
                    <div className="flex justify-center w-3/4 h-[14em] rounded-full overflow-hidden mx-auto bg-green-500">
                        <img src="https://www.noreciperequired.com/files/styles/large/public/images/careers/Head-Chef.gif" className="w-full" alt="Shaif Image" />
                    </div>
                    <div className="text-center">
                        <h4 className="text-2xl font-semibold pt-2">Jack</h4>
                        <p className="text-gray-800">Cookie</p>
                    </div>
                    <div className="flex justify-center gap-4 mt-2">
                        <div className="bg-secondarycolor text-white px-2 pt-3 pb-6 text-2xl rounded-t-full"><FaFacebookF className="transform transition-transform hover:scale-125  duration-300"></FaFacebookF></div>
                        <div className="bg-secondarycolor text-white px-2 pt-3 pb-6 text-2xl rounded-t-full"><FaTwitter className="transform transition-transform hover:scale-125  duration-300"></FaTwitter></div>
                        <div className="bg-secondarycolor text-white px-2 pt-3 pb-6 text-2xl rounded-t-full"><FaInstagram className="transform transition-transform hover:scale-125  duration-300"></FaInstagram></div>
                    </div>
                </div>
                <div className="bg-red-300 bg-opacity-25 pt-2 overflow-hidden rounded-lg">
                    <div className="flex justify-center w-3/4 h-[14em] rounded-full overflow-hidden mx-auto bg-green-500">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWRhrkuafzOfYIpD4hcBrg3B8L2OAFvPV3-GIrtBT-HtCb2uYjemeRwlQpgcuenYRzz0&usqp=CAU" className="w-full" alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className="text-2xl font-semibold pt-2">Oliva hold</h4>
                        <p className="text-gray-800">Cookie</p>
                    </div>
                    <div className="flex justify-center gap-4 mt-2">
                        <div className="bg-secondarycolor text-white px-2 pt-3 pb-6 text-2xl rounded-t-full"><FaFacebookF className="transform transition-transform hover:scale-125  duration-300"></FaFacebookF></div>
                        <div className="bg-secondarycolor text-white px-2 pt-3 pb-6 text-2xl rounded-t-full"><FaTwitter className="transform transition-transform hover:scale-125  duration-300"></FaTwitter></div>
                        <div className="bg-secondarycolor text-white px-2 pt-3 pb-6 text-2xl rounded-t-full"><FaInstagram className="transform transition-transform hover:scale-125  duration-300"></FaInstagram></div>
                    </div>
                </div>
                <div className="bg-red-300 bg-opacity-25 pt-2 overflow-hidden rounded-lg">
                    <div className="flex justify-center w-3/4 h-[14em] rounded-full overflow-hidden mx-auto bg-green-500">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCU7M_go7F9k_RqaSDK4Fs0UGDjMZfehVZZ8df7bSmB9AUqYuPu2kb28dchAGTmLRO_Q&usqp=CAU" className="w-full" alt="Shaif Image" />
                    </div>
                    <div className="text-center">
                        <h4 className="text-2xl font-semibold pt-2">Carlis</h4>
                        <p className="text-gray-800">Fastbood</p>
                    </div>
                    <div className="flex justify-center gap-4 mt-2">
                        <div className="bg-secondarycolor text-white px-2 pt-3 pb-6 text-2xl rounded-t-full"><FaFacebookF className="transform transition-transform hover:scale-125  duration-300"></FaFacebookF></div>
                        <div className="bg-secondarycolor text-white px-2 pt-3 pb-6 text-2xl rounded-t-full"><FaTwitter className="transform transition-transform hover:scale-125  duration-300"></FaTwitter></div>
                        <div className="bg-secondarycolor text-white px-2 pt-3 pb-6 text-2xl rounded-t-full"><FaInstagram className="transform transition-transform hover:scale-125  duration-300"></FaInstagram></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Shepf