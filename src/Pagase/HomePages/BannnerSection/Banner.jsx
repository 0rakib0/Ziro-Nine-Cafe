
import './banner.css'
import hero from '../../../../public/hero.png'

const Banner = () => {
    return (
        <div className="banner-bg md:h-[100vh]">
            <div className='flex  flex-col md:flex-row items-center justify-center gap-8 z-10 mx-4 py-6'>
                <div className='md:w-5/12 md:text-start text-center z-10'>
                    <h2 className='text-white lg:text-start text-center text-3xl lg:text-7xl font-bold'>Enjoy Our Delicious Meal</h2>
                    <p className='text-white my-4 md:my-6'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <button className='bg-secondarycolor text-white py-3 px-6'>BOOK A TABLE</button>
                </div>
                <div className='z-10 rakib w-2/5'>
                    <img src={hero} className='z-2 w-full' alt="" />
                </div>
            </div>
            <div className='overly'>

            </div>
        </div>
    )
}

export default Banner