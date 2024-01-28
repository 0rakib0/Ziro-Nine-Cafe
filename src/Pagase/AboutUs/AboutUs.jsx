import MiniBanner from "../../SharePage/MiniBanner/MiniBanner"
import About from "../HomePages/About/About"
import Shepf from "../HomePages/Shepf/Shepf"

const AboutUs = () =>{
    return (
        <div>
           <MiniBanner title='About Us' page='ABOUT'></MiniBanner>

           <About></About>

           <Shepf></Shepf>
        </div>
    )
}

export default AboutUs