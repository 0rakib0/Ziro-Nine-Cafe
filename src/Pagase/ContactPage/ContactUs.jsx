import MiniBanner from "../../SharePage/MiniBanner/MiniBanner"
import SectionTitle from "../../SharePage/SectionTitle/SectionTitle"
import BookingTable from "../HomePages/BookingTable/BookingTbale"

const ContactUs = () => {
    return (
        <div>
            <MiniBanner title='Contact Us' page='Contact'></MiniBanner>
            <div className="mt-24">
                <SectionTitle title='Contact For Booking a Table' hero='Contact'></SectionTitle>
                <BookingTable></BookingTable>
            </div>
        </div>
    )
}

export default ContactUs