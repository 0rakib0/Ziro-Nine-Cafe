import { Link } from "react-router-dom"

const MiniBanner = ({title, page}) =>{
    return (
        <div className="banner-bg md:h-[60vh]">
            <div className='flex flex-col items-center z-10 mx-4 pt-24 pb-12'>
                <div className='md:w-5/12 text-center flex flex-col z-10'>
                    <h2 className='text-white text-center text-3xl lg:text-5xl font-bold'>{title}</h2>
                    <p className='text-white my-4 md:my-6'><Link to='/' className="text-secondarycolor"> HOME </Link>/ <span className="text-secondarycolor">PAGE</span> / {page}</p>
                </div>
            </div>
            <div className='overly'>

            </div>
        </div>
    )
}

export default MiniBanner