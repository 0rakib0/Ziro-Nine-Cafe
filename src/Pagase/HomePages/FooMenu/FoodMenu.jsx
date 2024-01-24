import FoodMenuSection from "../../../SharePage/FoodMenuSection/FoodMenuSection"
import SectionTitle from "../../../SharePage/SectionTitle/SectionTitle"

const FoodMenu = () =>{
    return (
        <div className="mt-24">
            <SectionTitle hero='Food Menu' title='Most Popular Items'></SectionTitle>
            <FoodMenuSection></FoodMenuSection>
        </div>
    )
}

export default FoodMenu