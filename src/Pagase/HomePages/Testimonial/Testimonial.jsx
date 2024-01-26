import SectionTitle from "../../../SharePage/SectionTitle/SectionTitle"

import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react'
import { FaAngleLeft, FaAngleRight, FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
const Testimonial = () => {


    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            mode: "free",
            slides: {
                perView: 3,
                spacing: 15,
            },
            breakpoints: {
                '(max-width: 500px)': {
                    slides: {
                        perView: 1,
                        spacing: 15,
                    },
                },
                '(max-width: 400px)': {
                    slides: {
                        perView: 1,
                        spacing: 15,
                    },
                },
            },
        },
        [
            // add plugins here
        ]
    )

    const handleNest = () => {
        if (instanceRef.current) {
            instanceRef.current.next();
        }
    }

    const handlePrev = () => {
        if (instanceRef.current) {
            instanceRef.current.prev();
        }
    }

    return (
        <div className="mt-24 w-11/12 mx-auto relative">
            <SectionTitle hero='Testimonial' title='Our Clients Say!!!'></SectionTitle>

            <div ref={sliderRef} className="keen-slider mt-20 md:mt-6">
                <div className="keen-slider__slide">
                    <div className="bg-red-300 bg-opacity-25 rounded-lg px-2 py-4 m-2">
                        <p className="text-center">" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore laudantium sit placeat suscipit aut harum possimus aliquam."</p>
                        <div className="flex m-6 gap-4">
                            <div className="w-14 h-14 bg-green-500 overflow-hidden rounded-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCU7M_go7F9k_RqaSDK4Fs0UGDjMZfehVZZ8df7bSmB9AUqYuPu2kb28dchAGTmLRO_Q&usqp=CAU" alt="testimonilas image" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">John Abrar</h4>
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide">
                    <div className="bg-red-300 bg-opacity-25 rounded-lg px-2 py-4 m-2">
                        <p className="text-center">" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore laudantium sit placeat suscipit aut harum possimus aliquam."</p>
                        <div className="flex m-6 gap-4">
                            <div className="w-14 h-14 bg-green-500 overflow-hidden rounded-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCU7M_go7F9k_RqaSDK4Fs0UGDjMZfehVZZ8df7bSmB9AUqYuPu2kb28dchAGTmLRO_Q&usqp=CAU" alt="testimonilas image" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">John Abrar</h4>
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide">
                    <div className="bg-red-300 bg-opacity-25 rounded-lg px-2 py-4 m-2">
                        <p className="text-center">" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore laudantium sit placeat suscipit aut harum possimus aliquam."</p>
                        <div className="flex m-6 gap-4">
                            <div className="w-14 h-14 bg-green-500 overflow-hidden rounded-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCU7M_go7F9k_RqaSDK4Fs0UGDjMZfehVZZ8df7bSmB9AUqYuPu2kb28dchAGTmLRO_Q&usqp=CAU" alt="testimonilas image" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">John Abrar</h4>
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide">
                    <div className="bg-red-300 bg-opacity-25 rounded-lg px-2 py-4 m-2">
                        <p className="text-center">" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore laudantium sit placeat suscipit aut harum possimus aliquam."</p>
                        <div className="flex m-6 gap-4">
                            <div className="w-14 h-14 bg-green-500 overflow-hidden rounded-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCU7M_go7F9k_RqaSDK4Fs0UGDjMZfehVZZ8df7bSmB9AUqYuPu2kb28dchAGTmLRO_Q&usqp=CAU" alt="testimonilas image" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">John Abrar</h4>
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-28 md:top-14 left-6 flex gap-8 text-3xl">
                <button className="bg-red-400 p-1 text-white" onClick={handlePrev}><FaArrowAltCircleLeft></FaArrowAltCircleLeft></button>
                <button className="bg-red-400 p-1 text-white" onClick={handleNest}><FaArrowAltCircleRight></FaArrowAltCircleRight></button>
            </div>
        </div>
    )
}
export default Testimonial