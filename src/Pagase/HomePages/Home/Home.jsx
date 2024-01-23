import About from "../About/About"
import Banner from "../BannnerSection/Banner"
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
        </div>
    )
}

export default Home