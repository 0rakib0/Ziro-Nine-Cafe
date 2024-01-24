import { useEffect, useState } from "react"
import FoodMenuSection from "../../../SharePage/FoodMenuSection/FoodMenuSection"
import SectionTitle from "../../../SharePage/SectionTitle/SectionTitle"
import ItemCard from "../../../SharePage/ItemCard/ItemCard"

const FoodMenu = () =>{
    
    const [items, setItems] =useState([])


    const handleFetching = (category) =>{
        console.log(category)
        fetch('items.json')
        .then(res => res.json())
        .then(data =>{
            const filterData = data.filter(item => item.category === category )
            setItems(filterData)
        })
    }

    useEffect(() =>{
        handleFetching('Breakfast')
    },[])

    return (
        <div className="mt-24 w-11/12 mx-auto">
            <SectionTitle hero='Food Menu' title='Most Popular Items'></SectionTitle>
            <FoodMenuSection fun={handleFetching}></FoodMenuSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-16">
                {
                    items.slice(0, 6).map(item =><ItemCard key={item._id} item={item}></ItemCard>)
                }
            </div>
        </div>
    )
}

export default FoodMenu