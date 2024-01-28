import { useEffect, useState } from "react"
import MiniBanner from "../../../SharePage/MiniBanner/MiniBanner"

import itemss from '../../../../public/items.json'
import ItemCard from "../../../SharePage/ItemCard/ItemCard"
import FoodMenuSection from "../../../SharePage/FoodMenuSection/FoodMenuSection"

const AllMenu = () => {

    const [items, setItem] = useState([])

    const handleFetching = (category) => {
        const filterData = itemss.filter(item => item.category === category)
        setItem(filterData)
    }   


    useEffect(() =>{
        handleFetching('Breakfast')
    },[])


    return (
        <div>
            <MiniBanner title='Food Menu' page='Menu'></MiniBanner>
            <FoodMenuSection fun={handleFetching}></FoodMenuSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-16 w-11/12 mx-auto">
                {
                    items.slice(0, 6).map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                }
            </div>
        </div>
    )
}
export default AllMenu