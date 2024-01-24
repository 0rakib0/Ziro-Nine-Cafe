import { FaCoffee, FaHamburger, FaUtensils } from "react-icons/fa";

const FoodMenuSection = ({item}) => {
    const {name, image, description,} = item
    return (
        <div>
            <div className="flex itens-center justify-center gap-6 my-16">
                <div className="flex items-center gap-4 border-b-2 border-secondarycolor pb-2">
                    <div>
                        <FaCoffee className="text-5xl text-secondarycolor"></FaCoffee>
                    </div>
                    <div>
                        <small className="text-gray-600">Popular</small>
                        <h4 className="font-semibold">Breackfast</h4>
                    </div>
                </div>
                <div className="flex items-center gap-4 border-b-2 border-secondarycolor pb-2">
                    <div>
                        <FaHamburger className="text-5xl text-secondarycolor"></FaHamburger>
                    </div>
                    <div>
                        <small className="text-gray-600">Speacial</small>
                        <h4 className="font-semibold">Launch</h4>
                    </div>
                </div>
                <div className="flex items-center gap-4 border-b-2 border-secondarycolor pb-2">
                    <div>
                        <FaUtensils className="text-5xl text-secondarycolor"></FaUtensils>
                    </div>
                    <div>
                        <small className="text-gray-600">Lovely</small>
                        <h4 className="font-semibold">Dinner</h4>
                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto">
                <div className="border-2 border-secondarycolor w-3/12">
                    <h1>Hello</h1>
                </div>
            </div>
        </div>
    )
}

export default FoodMenuSection