
import './style.css'
const SectionTitle = ({title, hero}) =>{
    return (
        <div className='md:w-8/12 lg:w-2/5 w- mx-auto text-center space-y-2'>
            <div className="overlydesign relative">
                <h4 className='text-xl font-pacifico font-semibold text-secondarycolor'>{hero}</h4>
            </div>
            <h2 className='text-4xl font-semibold'>{title}</h2>
        </div>
    )
}

export default SectionTitle