import '../stylesheets/Styles.css';
import '../stylesheets/BookingConfirmed.css';

const BookingConfirmed = () => {

    return (
        <section className="booking-confirmed bodygreen">
            <p className="confirmation-title displaytitle textyellow">Booking Confirmed!</p>
            <p className="confirmation-body highlight textwhite">Your Little Lemon reservation is confirmed!</p>
        </section>
    )
}
export default BookingConfirmed;