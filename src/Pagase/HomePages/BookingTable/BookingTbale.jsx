

import videoImage from '../../../../public/video.jpg'

const BookingTable = () => {
    return (
        <div className='mt-24 bg-primaryColor lg:flex gap-4 lg:py-0 py-2'>
            <div className='lg:w-6/12 w-11/12 mx-auto'>
                <img src={videoImage} alt="" />
            </div>
            <div className='lg:w-6/12 w-11/12 mx-auto mt-8'>
                <div className='relative'>
                    <h4 className='font-pacifico text-secondarycolor text-2xl font-semibold'>About Us</h4>
                    <div className='absolute w-[3rem] h-[3px] bg-secondarycolor top-[18px] left-[8rem]'>
                    </div>
                </div>
                <h4 className='text-4xl font-bold text-white my-4'>Book A Table Online</h4>
                <div className='pr-4'>
                    <form>
                        <div className='w-full flex gap-4'>
                            <input type="text" placeholder='Full Name' className='w-full p-2 focus:border-2 focus:border-secondarycolor outline-none'/>
                            <input type="text" placeholder='Email' className='w-full p-2 focus:border-2 focus:border-secondarycolor outline-none'/>
                        </div>
                        <div className='w-full flex gap-4 mt-4'>
                            <input type="text" placeholder='Full Name' className='w-full p-2 focus:border-2 focus:border-secondarycolor outline-none'/>
                            <input type="text" placeholder='Email' className='w-full p-2 focus:border-2 focus:border-secondarycolor outline-none'/>
                        </div>
                        <div className='w-full flex gap-4 mt-4'>
                            <textarea name="" placeholder='Aditional Request' id="" cols="80" rows="5" className='w-full p-2 focus:border-2 focus:border-secondarycolor outline-none'></textarea>
                        </div>
                        <button className="bg-secondarycolor text-white py-2 px-6 mt-2 w-full">BOOK NOW</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default BookingTable