import React, { useState } from 'react';
import '../stylesheets/Styles.css';
import '../stylesheets/BookingForm.css';

const BookingForm = ({ availableTimes, setAvailableTimes, onDateChange }) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("00:00");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("Birthday");
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = window.submitAPI({
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        });
        setSubmitSuccess(success);
        if (success) {
            window.history.pushState({}, "", '/booking-confirmation');
            const navigationEvent = new PopStateEvent("navigate");
            window.dispatchEvent(navigationEvent);
        } else {
            console.error("submit error");
        }
    };

    return (
        <>
            <form className="bookingform" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={date} onChange={(e) => {
                        setDate(e.target.value);
                        onDateChange(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)} >
                        {availableTimes.map((time) => {
                            return (
                                <option key={time} value={time}>{time}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests}
                        onChange={(e) => {
                            const count = e.target.value;
                            setGuests(count === "" ? "" : Number(count));
                        }}
                         />
                </div>
                <div className="form-group">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div className="form-submit">
                    <input className="primarybutton bodyyellow" type="submit" value="Make Your reservation" />
                </div>
            </form>
        </>
    )
}
export default BookingForm;