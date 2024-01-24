import { useEffect, useState } from "react"
import FoodMenuSection from "../../../SharePage/FoodMenuSection/FoodMenuSection"
import SectionTitle from "../../../SharePage/SectionTitle/SectionTitle"

const FoodMenu = () =>{
    
    const [items, setItems] =useState([])

    useEffect(() =>{
        fetch('items.json')
        .then(res => res.json())
        .then(data =>{
            setItems(items)
        })
    },[])

    return (
        <div className="mt-24">
            <SectionTitle hero='Food Menu' title='Most Popular Items'></SectionTitle>
            <div>
                {
                    items.map(item =><FoodMenuSection key={item._id} item={item}></FoodMenuSection>)
                }
            </div>
        </div>
    )
}

export default FoodMenu