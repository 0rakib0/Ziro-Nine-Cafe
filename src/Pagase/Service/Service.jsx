import { FaHeadset } from "react-icons/fa"
import MiniBanner from "../../SharePage/MiniBanner/MiniBanner"
import Service from "../HomePages/Service/Service"
import SectionTitle from "../../SharePage/SectionTitle/SectionTitle"

const Services = () => {
    return (
        <div>
            <MiniBanner title='Services' page='SERVICE'></MiniBanner>
            <div className="md:mt-24 mt-16">
                <SectionTitle title='Our All Service' hero='Services'></SectionTitle>

            </div>
            <Service></Service>
            <div className="w-11/12 mx-auto mt-6  grid md:grid-cols-4 gap-6 space-y-4">
                <div className="shadow-lg md:shadow-indigo-300/70 p-4">
                    <FaHeadset className="text-6xl text-secondarycolor" />
                    <h4 className="text-2xl font-semibold my-4">24/7 Service</h4>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
                <div className="shadow-lg md:shadow-indigo-300/70 p-4">
                    <FaHeadset className="text-6xl text-secondarycolor" />
                    <h4 className="text-2xl font-semibold my-4">24/7 Service</h4>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
                <div className="shadow-lg md:shadow-indigo-300/70 p-4">
                    <FaHeadset className="text-6xl text-secondarycolor" />
                    <h4 className="text-2xl font-semibold my-4">24/7 Service</h4>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
                <div className="shadow-lg md:shadow-indigo-300/70 p-4">
                    <FaHeadset className="text-6xl text-secondarycolor" />
                    <h4 className="text-2xl font-semibold my-4">24/7 Service</h4>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
            </div>
        </div>
    )
}


export default Services