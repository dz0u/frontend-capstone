import '../stylesheets/Styles.css'
import '../stylesheets/BookingPage.css'
import Availability from './Availability'

const Reservations = () => {

    return (
        <section className="booking-page">
            <p className="reservations displaytitle textyellow">Reservations</p>
            <section className="form">
                <Availability />
            </section>
        </section>
    )
}
export default Reservations;