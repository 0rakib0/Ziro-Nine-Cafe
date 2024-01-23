import About from "../About/About"
import Banner from "../BannnerSection/Banner"
import FoodMenu from "../FooMenu/FoodMenu"
import Service from "../Service/Service"

const Home = () =>{
    return (
        <div>
            {/* Banner section start */}
            <Banner></Banner>
            {/* Service Section */}
            <Service></Service>
            {/* About section */}
            <About></About>
            {/* FoodMenu Section */}
            <FoodMenu></FoodMenu>
        </div>
    )
}

export default Home