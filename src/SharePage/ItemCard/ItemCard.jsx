import { FaArrowRight } from "react-icons/fa"

const ItemCard = ({item}) =>{
    const {name, image, description, price} = item
    return (
        <div className="bg-red-300 bg-opacity-25 p-4 rounded-lg relative">
            <div className="border-8 border-secondarycolor overflow-hidden -mt-14 -ml-8 w-32 h-32 rounded-full">
                <img src={image} className="w-ll h-full" alt="Items Image" />
            </div>
            <h4 className="text-xl font-bold mt-2">{name}</h4>
            <p className="my-2">{description}</p>
            <div className="flex items-center justify-between py-2">
                <p className="text-lg font-bold">${price}</p>
                <button className="bg-secondarycolor text-white px-2 py-[4px] flex items-center gap-1 hover:gap-2 rounded-md duration-200">Order Now <FaArrowRight></FaArrowRight></button>
            </div>
        </div>
    )
}

export default ItemCard