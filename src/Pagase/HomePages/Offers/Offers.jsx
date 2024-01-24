import SectionTitle from "../../../SharePage/SectionTitle/SectionTitle"

const Offers = () =>{
    return (
        <div className="w-11/12 mx-auto mt-24">
            <SectionTitle hero="Offers" title='Get Offer Save Moey'></SectionTitle>
            <div className="mt-12 md:flex gap-4">
                <div className="md:w-6/12 md:h-[18rem] lg:h-[22rem] h-[22rem] overflow-hidden rounded-lg">
                    <img src="https://img.pikbest.com/backgrounds/20210619/stylish-cool-food-burger-restaurant-web-banner_6022760.jpg!w700wp" className="w-full h-full" alt="offfer image" />
                   
                </div>
                <div className="md:w-6/12 h-[21rem] lg:space-y-4 md:mt-0 mt-6">
                    <div className="w-full h-1/2 overflow-hidden rounded-t-lg">
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coffee-shop-design-template-6b77b61db7a7232ef67481dbdd3b8a63_screen.jpg?ts=1635580945" className="w-full rounded-lg" alt="offer image" />
                    </div>
                    <div className="w-full h-1/2 overflow-hidden rounded-b-lg">
                        <img src="https://cdn11.bigcommerce.com/s-yj5ivyc8ym/images/stencil/1280x1280/products/396/1612/50_off_Delivered_Banner__85712.1594014392.jpg?c=2" className="w-full rounded-b-lg" alt="Offer image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers