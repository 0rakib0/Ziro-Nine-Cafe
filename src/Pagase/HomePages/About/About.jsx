import { FaUtensils } from 'react-icons/fa'
import image1 from '../../../../public/about-1.jpg'
import image2 from '../../../../public/about-2.jpg'
import image3 from '../../../../public/about-3.jpg'
import image4 from '../../../../public/about-4.jpg'

const About = () => {
    return (
        <div className="mt-24 w-11/12 mx-auto flex gap-6">
            <div className='flex gap-4 w-6/12'>
                <div>
                    <div>
                        <div>
                            <img src={image1} className='w-[15rem]' alt="" />
                        </div>
                        <div className='w-[13rem] ml-8 mt-4'>
                            <img src={image2} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='w-[13rem] mt-8 pb-4'>
                            <img src={image3} alt="" />
                        </div>
                        <div className='w-[15rem]'>
                            <img src={image4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-6/12 mt-4'>
                <div className='relative'>
                    <h4 className='font-pacifico text-secondarycolor text-2xl font-semibold'>About Us</h4>
                    <div className='absolute w-[3rem] h-[3px] bg-secondarycolor top-[18px] left-[7rem]'>
                    </div>
                </div>
                <h4 className='flex items-center gap-2 text-4xl my-4 font-semibold'>Welcome to <span><FaUtensils className="text-secondarycolor" /></span> Restoran</h4>
                <p className='mb-8'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                <p className='mb-8'>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <div className='flex gap-6 mb-8'>
                    <div className='w-6/12 flex items-center gap-4 border-l-8 border-secondarycolor pl-4'>
                        <h5 className='text-6xl font-semibold'>15</h5>
                        <div>
                            <p className='text-gray-500'>Years of</p>
                            <h4 className='2xl font-bold'>EXPERIENCE</h4>
                        </div>
                    </div>

                    <div className='w-6/12 flex items-center gap-4 border-l-8 border-secondarycolor pl-4'>
                        <h5 className='text-6xl font-semibold'>50</h5>
                        <div>
                            <p className='text-gray-500'>Popular</p>
                            <h4 className='2xl font-bold'>MASTER CHEFS</h4>
                        </div>
                    </div>
                </div>
                <button className="bg-secondarycolor text-white py-4 px-8 my-4">READ MORE</button>
            </div>
        </div>
    )
}

export default About