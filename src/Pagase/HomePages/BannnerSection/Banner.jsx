
import './banner.css'
import hero from '../../../../public/hero.png'

const Banner = () => {
    return (
        <div className="banner-bg md:h-[100vh]">
            <div className='md:flex items-center justify-center gap-8 absolute top-8 left-12 z-10'>
                <div className='md:w-5/12 text-center'>
                    <h2 className='text-white lg:text-start text-center lg:text-7xl font-bold'>Enjoy Our Delicious Meal</h2>
                    <p className='text-white my-4 md:my-6'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <button className='bg-secondarycolor text-white py-3 px-6'>BOOK A TABLE</button>
                </div>
                <div className='z-10 rakib w-2/5'>
                    <img src={hero} className='z-2 w-full' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner