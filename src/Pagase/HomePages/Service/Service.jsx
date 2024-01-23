import { FaHeadset, FaShoppingCart, FaUserTie, FaUtensils } from "react-icons/fa";


const Service = () => {

    


    return (
        <div className="my-24 w-11/12 mx-auto">
            <div className="md:flex gap-6 space-y-4">
                <div className="shadow-lg md:shadow-indigo-300/70 rakib p-4 ">
                    <FaUserTie className="text-6xl rakib2 text-secondarycolor" />
                    <h4 className="text-2xl font-semibold my-4">Master Chefs</h4>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
                <div className="shadow-lg md:shadow-indigo-300/70 p-4">
                    <FaUtensils className="text-6xl text-secondarycolor"/>
                    <h4 className="text-2xl font-semibold my-4">Quality Food</h4>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
                <div className="shadow-lg md:shadow-indigo-300/70 p-4">
                    <FaShoppingCart className="text-6xl text-secondarycolor"/>
                    <h4 className="text-2xl font-semibold my-4">Online Order</h4>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
                <div className="shadow-lg md:shadow-indigo-300/70 p-4">
                    <FaHeadset className="text-6xl text-secondarycolor"/>
                    <h4 className="text-2xl font-semibold my-4">24/7 Service</h4>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
            </div>
        </div>
    )
}

export default Service

