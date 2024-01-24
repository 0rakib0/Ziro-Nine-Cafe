import About from "../About/About"
import Banner from "../BannnerSection/Banner"
import BookingTable from "../BookingTable/BookingTbale"
import FoodMenu from "../FooMenu/FoodMenu"
import Offers from "../Offers/Offers"
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
            {/* Offers section */}
            <Offers></Offers>
            {/* Booking table section */}
            <BookingTable></BookingTable>
        </div>
    )
}

export default Home